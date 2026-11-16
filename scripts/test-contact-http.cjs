// Isolated real HTTP/formidable/nodemailer test. SMTP is loopback-only and does
// not relay or deliver mail. All recipients/data are reserved .invalid fixtures.
const net = require('node:net');
const { spawn } = require('node:child_process');
const { once } = require('node:events');
const assert = require('node:assert/strict');

async function main() {
  let smtpMode = 'accept', acceptedMessages = 0, child;
  const sockets = new Set();
  const smtp = net.createServer(socket => {
    sockets.add(socket); socket.on('close',()=>sockets.delete(socket));
    let buffer='', data=false;
    socket.write('220 localhost Lumera test SMTP\r\n');
    socket.on('data',chunk=>{
      buffer+=chunk.toString();
      let end;
      while((end=buffer.indexOf('\r\n'))!==-1) {
        const line=buffer.slice(0,end);buffer=buffer.slice(end+2);
        if(data) {
          if(line==='.') { data=false; if(smtpMode==='fail') socket.write('451 Synthetic transport failure\r\n');else {acceptedMessages++;socket.write('250 Message accepted by test sink\r\n');} }
          continue;
        }
        if(/^EHLO|^HELO/.test(line)) socket.write('250-localhost\r\n250 AUTH PLAIN\r\n');
        else if(/^AUTH/.test(line)) socket.write('235 Authentication successful\r\n');
        else if(/^MAIL FROM:/.test(line)) socket.write('250 OK\r\n');
        else if(/^RCPT TO:/.test(line)) socket.write(smtpMode==='reject'?'550 Synthetic rejection\r\n':'250 OK\r\n');
        else if(line==='DATA') {data=true;socket.write('354 End with dot\r\n');}
        else if(line==='QUIT') {socket.end('221 Bye\r\n');}
        else socket.write('250 OK\r\n');
      }
    });
    socket.on('error',()=>{});
  });
  smtp.listen(0,'127.0.0.1');await once(smtp,'listening');
  const portProbe=net.createServer();portProbe.listen(0,'127.0.0.1');await once(portProbe,'listening');
  const port=portProbe.address().port;await new Promise(resolve=>portProbe.close(resolve));
  const base=`http://127.0.0.1:${port}`;
  const cleanup=()=>{ if(child && child.exitCode===null) child.kill(); for(const socket of sockets) socket.destroy();smtp.close(); };
  process.once('SIGINT',()=>{cleanup();process.exit(0);});
  process.once('SIGTERM',()=>{cleanup();process.exit(0);});
  try {
    child=spawn(process.execPath,[require.resolve('next/dist/bin/next'),'start','-p',String(port),'-H','127.0.0.1'],{
      windowsHide:true,stdio:['ignore','pipe','pipe'],env:{...process.env,SMTP_HOST:'127.0.0.1',SMTP_PORT:String(smtp.address().port),SMTP_SECURE:'false',SMTP_USER:'test',SMTP_PASS:'test',CONTACT_FROM_EMAIL:'test@example.invalid',CONTACT_TO_EMAIL:'mailbox@example.invalid'},
    });
    let childError='';child.stderr.on('data',chunk=>{childError+=chunk.toString();});child.stdout.resume();
    let ready=false;
    for(let attempt=0;attempt<150;attempt++) {
      try {if((await fetch(base+'/kontakt')).ok){ready=true;break;}}catch{}
      if(child.exitCode!==null) throw new Error('Test Next server stopped: '+childError.slice(0,300));
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    assert(ready,'Test server started');
    async function submit(changes={}) {
      const payload=new FormData();
      for(const [key,value] of Object.entries({Imie_i_nazwisko:'TEST AUTOMATYCZNY',Telefon:'000000000',email:'test@example.invalid',miejsce_montazu:'TEST - brak rzeczywistej lokalizacji',wybrana_kategoria:'Folie testowe',wiadomosc:'Syntetyczny test, bez danych klienta.',_started_at:String(Date.now()-10000),...changes})) payload.set(key,value);
      const response=await fetch(base+'/api/contact',{method:'POST',body:payload});
      return {status:response.status,body:await response.json()};
    }
    let result=await submit({email:'invalid'});assert.equal(result.status,400);assert(!result.body.submissionId);assert.equal(acceptedMessages,0);
    result=await submit();assert.equal(result.status,200);assert.equal(result.body.success,true);assert.match(result.body.submissionId,/^[0-9a-f-]{36}$/);assert.equal(acceptedMessages,1);
    smtpMode='fail';result=await submit();assert.equal(result.status,500);assert(!result.body.submissionId);
    smtpMode='reject';result=await submit();assert.equal(result.status,500);assert(!result.body.submissionId);
    const get=await fetch(base+'/api/contact');assert.equal(get.status,405);
    console.log('PASS: actual multipart HTTP 400, SMTP acceptance 200 + UUID, SMTP DATA failure 500, recipient rejection 500 and GET 405; one message consumed only by local test sink.');
    smtpMode='accept';
    if(process.argv.includes('--serve')) {
      console.log(`UI_TEST_URL=${base}/kontakt`);
      console.log('Local SMTP sink remains active for synthetic UI tests. Stop with Ctrl+C.');
      await new Promise(()=>{});
    }
  } finally { cleanup(); }
}
main().catch(error=>{console.error(error);process.exitCode=1;});

# Codex workflow

- Po kazdej zmianie w projekcie uruchomic lub utrzymac podglad lokalny na `http://localhost:3000`.
- Jesli port 3000 jest zajety przez stary proces `next dev`, zatrzymac ten proces i uruchomic `npm run open` ponownie.
- Po uruchomieniu sprawdzic, czy strona glowna i edytowana podstrona odpowiadaja kodem `200`.
- Nie uruchamiac `npm run build` w trakcie dzialajacego dev servera, chyba ze jest to konieczne; build moze nadpisac `.next` i zepsuc stan podgladu.

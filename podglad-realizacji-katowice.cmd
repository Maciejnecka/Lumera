@echo off
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
  echo Nie znaleziono Node.js. Zainstaluj Node.js, aby uruchomic podglad.
  pause
  exit /b 1
)
powershell.exe -NoProfile -Command "try { $response = Invoke-WebRequest -Uri 'http://localhost:3000/realizacje/oklejanie-szafy-folia-architektoniczna-katowice' -UseBasicParsing -TimeoutSec 5; if ($response.StatusCode -eq 200 -and $response.Content.Contains('Oklejanie szafy Katowice')) { exit 0 } else { exit 1 } } catch { exit 1 }"
if not errorlevel 1 (
  start "" "http://localhost:3000/realizacje/oklejanie-szafy-folia-architektoniczna-katowice"
  exit /b 0
)
echo Podglad: http://localhost:3000/realizacje/oklejanie-szafy-folia-architektoniczna-katowice
echo Gdy serwer wyswietli Ready, otworz powyzszy adres. Zamkniecie tego okna zatrzyma serwer.
call npm.cmd run open

echo off
tail -n1 sprayproxy.log > last-message-tmp.txt 
jq .ts last-message-tmp.txt  > last-ts-tmp.txt 

fc last-ts.txt last-ts-tmp.txt >nul
if errorlevel 1 goto updateNeeded 
set /p MSG=<last-ts.txt 
echo Last Pac Callback  %MSG%
goto end

:updateNeeded
echo Update Needed 
copy last-ts-tmp.txt last-ts.txt 
set /p MSG=<last-ts.txt 
powershell message.ps1  %MSG%

:end 

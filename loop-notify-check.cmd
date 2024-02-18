echo off

:loop 
cls
cmd /c pac-notify-windows.cmd %*
timeout 3 
goto loop  
@echo off
setlocal
set ROOT_DIR=%~dp0..\..\..\..
set VSROOT_DIR=%~dp0..\..
call "%ROOT_DIR%\node.exe" "%VSROOT_DIR%\out\server-cli.js" "code-server" "1.70.1" "2062a59ca1a586d8a6e7bf483841085a94c440a4" "code-server.cmd" "--openExternal" %*
endlocal

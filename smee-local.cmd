
rem Start a smee forwarder to localhost:9999 and use spray proxy to forward it
rem the double forward is because smee does not actually connect to the local pac handler 
rem it seems to error, this is a quick workaround. 
set PAC_CALLBACK=https://smee.io/jduimovich-crc-machine
set PAC_HANDLER=https://pipelines-as-code-controller-openshift-pipelines.apps-crc.testing
set SECURE=--insecure-skip-webhook-verify  --insecure-skip-tls-verify
set PORT=9999

echo "Smee in new tab."
echo "new" > last-ts.txt
wt -w 0 nt -d %cd% cmd /c %cd%\loop-notify-check.cmd %PAC_HANDLER%
wt  -w 0 nt cmd /c smee -u %PAC_CALLBACK% -t http://localhost:%PORT%
..\sprayproxy\sprayproxy server %SECURE%  --port %PORT% --backend %PAC_HANDLER% > sprayproxy.log 2>&1 

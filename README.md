# pac-forwarders 

This repo has a simple PaC forwarder for use with Github Apps 

It uses smee to create a fixed callback for your github app and sprayproxy to forward to the actual pac backend as well as any other. (it also works for ArgoCD if you fix sprayproxy to use the full URL) 

The forward from smee allows sharing but also workaround a smee issue it does not have an option for ignoring tls errors.

## Run 

Modify the script `smee-local.cmd` -- I use windows in my crc so ... windows script it is.

Linux users need to modify this for their use. 


# pac-forwarders 

This repo has a simple PaC forwarder for use with Github Apps

It uses smee to create a fixed callback for your github app and spray proxy to forward to the actual pac backend

The double forward is because smee does not correctly connect to the local pac handler so this is a quick workaround. 

## Run 

Modify the script `smee-local.cmd` -- windows CRC users need to 


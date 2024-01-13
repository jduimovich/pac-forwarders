@echo off

set URL=https://pipelines-as-code-controller-openshift-pipelines.apps-crc.testing/incoming
set REPO=https://github.com/jduimovich/rhdh-test 
set BRANCH=main
set PR=rhdh-test-on-push
set SECRET=john-crc-machine 
echo curl -k -X POST "%URL%?secret=%SECRET%&repository=%REPO%&branch=%BRANCH%&pipelinerun=%PR%"
curl -k -X POST "%URL%?secret=%SECRET%&repository=%REPO%&branch=%BRANCH%&pipelinerun=%PR%"
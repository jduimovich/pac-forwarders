 

var request =  require('request').defaults({ rejectUnauthorized: false })

var url='https://pipelines-as-code-controller-openshift-pipelines.apps-crc.testing/incoming'
pac= {
    "secret": "john-crc-machine",
    "repository": "https://github.com/jduimovich/rhdh-test",
    "branch": "main",
    "pipelinerun": "rhdh-test-on-push",
}
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

  request.post(
    url,
    { json: pac },
    function (error, response, body) {
        console.log ("posted")
        console.log (error)
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
  ); 


  

 
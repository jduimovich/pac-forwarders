

var url = 'https://pipelines-as-code-controller-openshift-pipelines.apps-crc.testing/incoming'
pac = {
  "secret": "jduimovich-crc-machine",
  "repository": "https://github.com/jduimovich/rhdh-test",
  "branch": "main",
  "pipelinerun": "rhdh-test-on-push",
}

var URL = url +
  "?secret=" + pac.secret +
  "&repository=" + pac.repository +
  "&branch=" + pac.branch +
  "&pipelinerun=" + pac.pipelinerun;

console.log("USING Needle LIBRARY FOR ", URL);
const needle = require('needle');
var options = {
  json: true,
  rejectUnauthorized: false
}
needle.post(URL, pac, options, function (err, res, body) {
  console.log(`Status: ${res.statusCode}`)
  console.log('Body: ', body)
  console.log('ERROR: ' + err)
  //console.log(res)
})


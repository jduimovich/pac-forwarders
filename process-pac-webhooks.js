
var express = require('express')
var bodyParser = require('body-parser') 
const { exec } = require('child_process');

var MODE="scripts"
// New app using express module 
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post("/", function (req, res) {

  // ack right away
  res.send("Ok");

  // console.log(JSON.stringify(req.body, null, 4))
  var repo = req.body.repository.html_url 
  console.log("POST for repository: ", repo)

  if ( MODE == "scripts" && req.body.action == "requested") { 
    exec('bash webhook-handler-script ' + repo, (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      } 
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      } 
      console.log(`stdout:\n${stdout}`);
    });
  }

  // request.post(
  //   'https://pipelines-as-code-controller-openshift-pipelines.apps-crc.testing',
  //   { json: req.body },
  //   function (error, response, body) {
  //       console.log ("posted")
  //       console.log (error)
  //       if (!error && response.statusCode == 200) {
  //           console.log(body);
  //       }
  //   }
  // ); 




});





app.listen(3000, function () {
  console.log("server is running on port 3000");
})
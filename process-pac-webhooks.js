
var express = require('express')
var bodyParser = require('body-parser')
const { exec } = require('child_process');

var MODE = "scripts"
// New app using express module 
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.post("/", function (req, res) {
  // ack right away
  res.send("Ok");
  if (req.body.repository) { 
    var repo = req.body.repository.html_url
    console.log("POST for repository: ", repo) 
    if (MODE == "scripts" && req.body.action == "requested") {
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
  } else {
    console.log("NO REPO so dump data")
    console.log(JSON.stringify(req.body, null, 4))
  }
});

app.listen(9999, function () {
  console.log("server is running on port 9999");
})
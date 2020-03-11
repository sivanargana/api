
var skills = require('./routes/skills');
var experience = require('./routes/experience');
var services = require('./routes/services');
var projects = require('./routes/projects');
var awards = require('./routes/awards');
var about = require('./routes/about');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();
app.use(cors())
app.use(bodyParser.json());

app.use("/skills",skills);
app.use("/experience",experience);
app.use("/services",services);
app.use("/projects",projects);
app.use("/awards",awards);
app.use("/about",about);
app.get("/",(req,res)=>res.send('hello'))
app.listen(3000)

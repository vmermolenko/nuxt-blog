
/*
const {Router} = require('express')
const router = Router()

router.get('/api/test', (req, res) => {
  res.send('hello')
})

module.exports = router
*/

/*
const {Router} = require('express')
const router = Router()

router.get('/api/test', (req, res) => {
  res.send('hello')
})
*/

const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
//const PORT = process.env.PORT || 8090;

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({alter: true}).then(() => {
  console.log('Drop and Resync Db');
  //initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}


// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
//require('./app/routes/mod.routes')(app);
//require('./app/routes/admin.routes')(app);
require('./app/routes/tour.routes')(app);

module.exports = app

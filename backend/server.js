let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/database.js');

// Express Route
const catalogoRoute = require('./router/catalogo')
const singupRoute = require('./router/signup.js')
const loginRoute = require("./router/login")

// Connecting mongoDB Database
// mongoose.Promise = global.Promise;
// mongoose.connect(dbConfig.db, {
//   useNewUrlParser: true
// }).then(() => {
//   console.log('Database sucessfully connected!')
// },
//   error => {
//     console.log('Could not connect to database : ' + error)
//   }
// )

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

app.use('/catalogo', catalogoRoute)
app.use('/signup', singupRoute)
app.use('/login', loginRoute)


// PORT
const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

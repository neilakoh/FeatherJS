const feathers = require('feathers');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');

const user = require('./users/users');
const appModules = require('./modules/globalFunctions');

// INITIALIZE SERVER SETUP
const port = 9000;
const app = feathers().configure(rest()).use(bodyParser.json()).use(bodyParser.urlencoded({extended: true}));

// CREATE A CLASS THAT WILL PROCESS SENT DATA FROM CLIENT
// "UserDetails" IS JUST A CLASS NAME THAT CAN BE REPLACED WITH ANY NAMES
// INSTANTIATE THE CREATED CLASS BY CALLING "userDetails"
var UserDetails = appModules.getRequestData("UserDetails");

app.use('/addUser', new UserDetails);
app.service('addUser').on('created', message =>
  user.save(message)
);

app.use('/updateUser', new UserDetails);
app.service('updateUser').on('created', message =>
  user.update(message)
);

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is now running at http://localhost:'+port);
  }
});

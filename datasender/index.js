var request = require('request');
request.post('http://localhost:9000/updateUser?_id=58479e62e7bfc132bf3eda4d', {
  form:{
    "username" : "nagatron6",
    "password" : "tmp12345",
    "email" : "test@mail.com"
  }
});

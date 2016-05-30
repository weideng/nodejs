var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose');
var db = mongoose.connection;

db.on('error', () => { console.error('connection error:')});
db.once('open', () => {
  console.log('opened');
});

var user = mongoose.Schema({
    name: String,
    gender: String
});

user.methods.say = function () {
  console.log('Hello World');
};

var User = mongoose.model('User', user);
var tiger = new User({name: 'Tiger', gender: 'Male'});

tiger.save(function(err, tiger) {
  if (err) return console.log(err);
  tiger.say();
})

// tiger.say();

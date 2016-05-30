var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
  console.log('connected');
  client.set('framework', 'AngularJS');
  client.get('framework', function(err, reply) {
    if (err) return;
    console.log(reply);
  });
});

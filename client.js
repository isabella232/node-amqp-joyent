require.paths.unshift('lib');

var sys =  require('sys');
var AMQP = require('amqp');

var conn = AMQP.createConnection({
  host: 'localhost',
  port: 5672
});

conn.addListener("connect", function() {
  sys.puts("Connected to AMQP server");
});

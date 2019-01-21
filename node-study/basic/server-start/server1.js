var http = require('http'); 
var server = http.createServer(function(req, res) { 
    console.log('HTTP Method : ' + req.method);
    console.log('HTTP URL : ' + req.url);
    console.log('== HEADERS ==');
    console.log(req.headers);
    res.end('Hello Node.js');
}).listen(3000);
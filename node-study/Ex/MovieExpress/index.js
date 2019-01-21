var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/*
   라우터 사용 (사용자 지정 모듈)
*/

app.use(require('./movieRouter'));

app.get('/', function(req, res) {
   res.end('Welcome to Movies app');
});

app.use(handleError);

function handleError(err, req, res, next) {
   console.log('Error : ', err);
   res.status(err.code).send({msg:err.message});
}
app.listen(3000);

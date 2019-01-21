var express = require('express');
var http = require('http');
var app = express();

var server = http.createServer(app);  // 서버 생성 
server.listen(3000);   // 대기 요청 


app.get('/', function(req, res){
    res.sendFile(__dirname + "/client.html");
});

// 위 코드 서버 구성 >> 요청 처리 
// 실시간 웹 서비스 (연결지향 ... : socket.io)
var io = require('socket.io')(server);  //socket 객체는 server 위에서 동작 

// 서버에 이벤트 (기본이벤트, 사용자이벤트)
io.on('connect', function(socket){  // 클라이언트 요청 자동 발생 이벤트 
    console.log("클라이언트 접속");
    
    socket.on('disconnect', function(){
        console.log("접속 종료");
    });
    setInterval(function(){
        socket.emit('message', "Hello World!"); // 이벤트 발생(연결된 소켓 통해서)
    }, 3000);
});


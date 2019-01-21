var fs = require('fs');
var file = 'read.txt';

fs.access(file, fs.F_OK, function(err){
    if(err){
        console.log("파일 없음");
        process.exit(1);
    }else{
        console.log('파일 존재');
        fs.stat(file, function(err, stats){
            if(err){
                console.log("fs.stat : ", err);
                return;
            }
        });
    }
});
var pool = require('./DBConnection');
console.log('연결 풀', pool);

pool.getConnection(function(err, conn) {
  if(err) {
    console.error('error : ', err);
    return;
}
  console.log('db 연결 성공');
  // 처리...
  // 반환
  conn.release(); // 풀에 연결객체 반환하기
});
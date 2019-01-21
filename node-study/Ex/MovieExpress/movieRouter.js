var express = require('express');
var router = express.Router();

var fs = require('fs');
var initialData = fs.readFileSync('initialDB.json');
var movieList = JSON.parse(initialData);

/*
라우터 구성
*/
router.get('/movies', showMovieList);
router.get('/movies/:movieId', showMovieDetail);
router.post('/movies/:movieId', addReview);


function addReview(req, res, next) {
    var movieId = req.params.movieId;
    var movie = findMovie(movieId);
    if ( ! movie ) {
       var error = new Error('Not Found');
       error.code = 404;
       return next(error);
    }
    
    var review = req.body.review;
    movie.reviews.push(review);
    // res.send({msg:'success'});   
    res.redirect('/movies/' + movieId);
 }
 
 function findMovie(movieId) {  //내부에서 사용하는 함수
    for(var i = 0 ; i < movieList.length; i++) {
       var item = movieList[i];
       if ( item.movieId == movieId ) {
          return item;
       }
    }   
    return null;
 }
 
 function showMovieDetail(req, res, next) {
    var movieId = req.params.movieId;
    var movie = findMovie(movieId);  // 영화 한편의 정보 
 
    if ( ! movie ) {
       var error = new Error('Not Found');
       error.code = 404;
       return next(error);
    }
    
    //res.send(movie);
    res.render('movieDetail', {movie:movie} );  
 }
 
 function showMovieList(req, res) {
    var data = [];
    movieList.forEach(function(movie) {
       var info = {
          movieId : movie.movieId,
          title : movie.title
       };
       data.push(info);
    });
    var result = {
       count : data.length,
       data : data
    };
    // res.send(result);   // postman 사용해서 데이터 확인
    res.render('movieList', result);
 }

module.exports = router;
var initval = 3;
var obj = {name:'nodejs', how:'world'};
console.log('intval:' + initval);
console.log('obj : ' + obj);
console.log('obj : ' , obj);

function sayHello(who){
    console.log('bye', who);
}

setInterval(sayHello, 1*1000, 'min');
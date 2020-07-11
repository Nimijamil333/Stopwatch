
// var count = 0 ;
// var interval ;
// function timer(){
//     count++
//     console.log("running"+count)
    
// }
// //1000 milliseconds or 1 sec 
// interval = setInterval(timer,1000)


// setTimeout(function(){
// clearInterval(interval)
// },5000)



// function timeout(){
//     console.log("running...")
// }
//3000 miliseconds or 3 seconds
// setTimeout(timeout,3000)


var min = 0 ;
var sec = 0 ;
var ms= 0 ;
var minute = document.getElementById("min")
var second = document.getElementById("sec")
var millisecond = document.getElementById("ms")
var interval ;
function timer(){
ms++
millisecond.innerHTML = ms;

if(ms >= 100){
    sec++
    second.innerHTML = sec;
    ms = 0 ;
}
else if(sec>=60 ){
    min++
    minute.innerHTML = min;
    sec=0;
}


}
function start(){
interval = setInterval(timer,10)



}
function stop(){
    clearInterval(interval)
}
function reset(){
    min= 0;
    sec = 0 ;
    ms = 0 ;
    minute.innerHTML = min ;
    second.innerHTML = sec;
    millisecond.innerHTML = ms;
    clearInterval(interval)
}









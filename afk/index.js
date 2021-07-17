window.addEventListener("mousemove", resetUserActivityTimeout); //these just sense when there is activity
window.addEventListener("scroll", resetUserActivityTimeout);
window.addEventListener("keypress", resetUserActivityTimeout);
window.addEventListener("click", resetUserActivityTimeout);
window.addEventListener("resize", resetUserActivityTimeout);
window.addEventListener("keydown", resetUserActivityTimeout);
var x = 0; //how long they are afk
var timer //the setInterval
window.onload = function() {
starttimer(); //whenever the pages loads starts the timer
}
function starttimer() {
timer = setInterval(function() { //this starts the timer
x++ //whenever the function goes it adds +1 to x
console.log(x); //console.logs whatever x is
if(x === 60) { //if statement when ever x = 60 1 minute you can change the number to whatever you like 
  document.body.innerHTML = ""; //optional
  // firebase.auth().signOut().then(function(){ //only use this if you have firebase on your site
      window.location.replace("/"); //do what ever you want once they are afk
  // },function(){})  //firebase stuff
}
}, 1000) //closes the setInterval and it goes every 1 secounds or 1000 millisecounds
}
function resetUserActivityTimeout() { //whenevr there is activity this function runs and resets the timer then starts it again
console.log('reset');
clearInterval(timer); //resets it
resumetimer(); //a function that resumes it
}
function resumetimer() {
x = 0; //resets x the time left
starttimer(); //starts the timer againg
}

var today = new Date();

var theyear = today.getFullYear();
var themonth = today.getMonth() + 1;
var thedate = today.getDate();
var theHours = today.getHours();
var theMinutes = today.getMinutes();
var theSeconds = today.getSeconds();
if(theHours >12) {
    theHours -= 12;
    $('.test').text('오후' + theHours +'시' + theMinutes + '분' + theSeconds + '초');
}
else { 
    $('.test').text('오전' + theHours +'시' + theMinutes + '분' + theSeconds + '초');
}
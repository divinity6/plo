var interval = setInterval(nowTimes,1000);
//preload
$(window).on('load',function(){
  $('#preload').stop().fadeOut();
  $('body').css('overflow','auto');	
  clearInterval(interval);
  $('#intro_wrap').animate({'opacity' :'1'});
});


//방송 영상업로드 날짜
const yTbDate = [
    'October 11 2020 GMT+0900',
    'October 8 2020 GMT+0900',
    'October 8 2020 GMT+0900',
    'October 7 2020 GMT+0900',
    'October 6 2020 GMT+0900',
    'October 5 2020 GMT+0900',
    'October 2 2020 GMT+0900',
    'October 1 2020 GMT+0900'];

function timeBefore(num){
    var now = new Date(); 
    //기준시간 
    var writeDay = new Date(yTbDate[num]);
    var minus; var time = '';
    if(now.getMonth() > writeDay.getMonth()){
      minus= now.getMonth()-writeDay.getMonth();
      time += minus+"달";
    }    
    if(now.getDate() > writeDay.getDate()){
       minus= now.getDate()-writeDay.getDate();
      time +=  minus+"일";
    }
    time += "전";
    $('.broad_stcList').eq(num).children('div').children('.broad_date').text(time);
}

function nowTimes(){
  var today = new Date();

  var theyear = today.getFullYear();
  var themonth = today.getMonth() + 1;
  var thedate = today.getDate();
  var theHours = today.getHours();
  var theMinutes = today.getMinutes();
  var theSeconds = today.getSeconds();

  var currYear = theyear + '.' + themonth + '.' + thedate;
  var currHours = theHours +':' + theMinutes + ':' + theSeconds + 's';
  if(theHours >12) {
      theHours -= 12;
      $('#years').text(currYear);
      $('#hours').text('오후' + currHours);}
  else { $('#years').text(currYear); $('#hours').text('오전' + currHours); }
  interval;
}

$(function(){
    var bdLength = $('.broad_stcList').length;
    for(var i=0;i<bdLength;i++){timeBefore(i);}
    nowTimes();
});

//링크 순서변수
const snsHref = ['https://www.facebook.com/damwonofficial','https://twitter.com/DamwonGaming'
,'https://www.instagram.com/dwg.official','https://www.youtube.com/channel/UCepHesz_5Lwr7qRaqjB-p1A'];
const mainHref = ['http://divinity6.dothome.co.kr/dwg','https://damwon.gg/team/lol','https://damwongameacademy.com/','https://smartstore.naver.com/dwg'];

function linked(num,type){
    var linkCon;
    if (type == 1) linkCon = snsHref[num];
    if (type == 2) linkCon = mainHref[num];
    if (linkCon == mainHref[0]) {window.location.href = linkCon;}
    else { window.open(linkCon); }
    
};

$(function(){
    //linked
    $('.sns_list , #main_menu>li').click(function(){
        var thisNum = $(this).index();
        var thisType = $(this).parent().attr('title');
        linked(thisNum,thisType);
    });

    $('#intro2_main, #intro_name>li , .introBt').click(function(){
        var goPlayer = $('#teams').offset().top - 100;
        $('html,body').stop().animate({'scrollTop' : goPlayer},700,'easeInOutExpo');
    });
});


$(window).resize(function(){
    $('#hd_wrap').removeAttr('style');
});



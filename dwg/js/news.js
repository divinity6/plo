//리사이즈 할시 및 동여상더보기 나열클래스들
const stcList = ['.broad_stcList2','.broad_stcList3' ,'.broad_more3','.bd_mOpen'];
//반응형 스케줄 대체 링크
const rwdStcLink = ['empty','https://www.youtube.com/watch?v=Uv0BuWNQGNA&feature=emb_title','https://www.youtube.com/watch?v=MzSHvxF9o3Y&feature=emb_title','https://www.youtube.com/watch?v=a4c080fb3Cs'];

function bd_Liclick(num) {
    $('.bd_mOpen').click(function(){
        $(stcList[num]).stop().slideDown();
        $(this).hide();
        $('.broad_more3').show();
    });
    $('.bd_mClose').click(function(){
        $(stcList[num]).stop().slideUp();
        $('.broad_more3').hide();
        $('.bd_mOpen').show();
    });
}
function stcLstClick(){
    if($(window).width()>1250){
        //스케줄리스트
        $('.news_stcList2').click(function(){
            var thisNum = $(this).index();
            $('.news_stcList2').children('div').css({'background':'#2D4051'});
            $(this).children('div').css({'background':'#00AFA6'});
            $('.sch_video').hide();
            $('.sch_video').eq(thisNum).stop().fadeIn();
        });
    }
    if($(window).width()<1251){
        $('.news_stcList2').click(function(){ 
            $('.news_stcList2').children('div').css({'background':'#2D4051'});
            $(this).children('div').css({'background':'#00AFA6'});
            var thisNum = $(this).index();
            if(thisNum == 0){null}else{ window.open(rwdStcLink[thisNum]);}
        });
    }
}
function listLink(num) {
    const btnTitle = ['ON','OFF'];
    //폰트 색상 및 글자색 경로
    const newsPath = [$('.news_list').children('.news_liGra')
    .children('div').children('p'), 
    $('.news_list').eq(num).children('.news_liGra')
    .children('div').children('p')];

    //버튼변경
    $('.news_list').css('color','#2D4051');
    newsPath[0].attr('title',btnTitle[1]);
    newsPath[0].html(btnTitle[1]);

    $('.news_list').eq(num).css('color','#00AFA6');
    newsPath[1].attr('title',btnTitle[0]);
    newsPath[1].html(btnTitle[0]);

    //게시판 변경
    $('.news_mainWrap').hide();
    $('.news_mainWrap').stop().animate({'opacity':'0'});

    $('.news_mainWrap').eq(num).stop().animate({'opacity':'1'});
    $('.news_mainWrap').eq(num).css('display','flex');
}
//개인방송 클릭시 이동 링크
function bd_stcList(num) {
    var bd_stcLink = ['https://www.youtube.com/watch?v=glJg1-52Cjw',
    'https://www.youtube.com/watch?v=wWbsgREaTXQ',
    'empty',
    'https://www.youtube.com/watch?v=RuTN8PU-KGY',
    'https://www.youtube.com/watch?v=6M0Evgi7gjA',
    'empty',
    'https://www.youtube.com/watch?v=hW5Oynun2Vw',
    'https://www.youtube.com/watch?v=l9Sg0SWzYxs',
    'https://www.youtube.com/watch?v=teXlq6lKe9g',
    'https://www.youtube.com/watch?v=KW-y5pUpWCc',
    ''];
    if (num == (2||5)) {
    null;
    }else{
        window.open(bd_stcLink[num]);
    }

}



$(function(){
    //스케줄 html 변경
    for (var i =0; i<$('.news_stcList2').length;i++) {
        var schTitle = [$('.news_stcList2').eq(i).children('p').attr('title')];
        var schHtml = [$('.news_stcList2').eq(i).children('p').html(schTitle)];
        schHtml[i];
    }

    //게시판컨트롤버튼
    $('.news_list').click(function(){
        var thisNum = $(this).index();
        listLink(thisNum);
    });
    //방송버튼클릭시
    $('.broad_stcList').click(function(){
        var thisNum = $(this).index();
        bd_stcList(thisNum);
    });
    stcLstClick();
    
    if($(window).width()>650 && $(window).width()<1026) {bd_Liclick(0);}
    if($(window).width()<650){bd_Liclick(1);}
});

$(window).resize(function(){
    for (var i = 0; i<stcList.length;i++){
        $(stcList[i]).removeAttr('style');
    }
    if($(window).width()>650 && $(window).width()<1026) {bd_Liclick(0);}
    if($(window).width()<650){bd_Liclick(1);}
    stcLstClick();
    
});
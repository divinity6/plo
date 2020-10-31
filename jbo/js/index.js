
//검색어찾기
function searchBtn(num) {
    var sNum = 0;
    sNum += num;
    var schLength = $('.hd_schList').length;
    if(sNum > schLength ) { sNum = 0 };
    if(sNum < 0 ) { sNum = schLength };
    
    $('.hd_schList').hide();
    $('.hd_schList').eq(sNum).css('display','flex');
}

//링크
var sAnum;
function sLink(num) {
    var sNum = 0;
    sNum += num;
    
    //헤더슬라이드링크
    if(sAnum == 1){
        var slideLength = $('.slideMainBox').length;
        
        const sLinkGo = ['http://www.jbe.go.kr/citizenship/board.jbe?cmsid=104130900041&target=&psize=10&cc=&st=0&sk=&method=v&idx=216073&page=1','http://www.jbe.go.kr/privacy/board.jbe?cmsid=116020100000&target=&psize=10&cc=&st=0&sk=&method=v&idx=220871&page=1','https://www.moe.go.kr/boardCnts/view.do?boardID=333&boardSeq=82043&lev=0&searchType=null&statusYN=W&page=1&s=moe&m=0501&opType=N','https://hcs.eduro.go.kr/#/loginHome']
        window.open(sLinkGo[sNum]);   
    }
    //sns링크
    if(sAnum == 2) {
        var snsLength = $('.hd_sns').length;
        
        const sLinkGo = ['https://www.instagram.com/jbesosik/','https://www.facebook.com/jbedu','https://www.youtube.com/user/jbedumovie','https://twitter.com/jbeducommun'];
        window.open(sLinkGo[sNum]);
    }
    //하단배너링크
    if(sAnum == 3) {
        var slideLength = $('.ban_link').length;
        
        const sLinkGo = ['https://www.epeople.go.kr/nep/pttn/negativePttn/NegativePttnCotents.npaid','http://jinro.jbe.go.kr/main/vod.action?cmsid=113090500006','http://www.schoolhealth.kr/','https://www.nise.go.kr/hright/index.jsp','https://www.gov.kr/portal/orgInfo?Mcode=11162','https://www.cyber1388.kr:447/','http://www.ggoomgil.go.kr/','http://www.jbe.go.kr/sptr/main.jbe?cmsid=118000000000','http://www.jb-hospitalschool.kr/','https://www.bokjiro.go.kr/nwel/helpus/hlpappl/RetrieveHlpApplGdnc.do','https://www.cyber1388.kr:447/','https://www.kopico.go.kr/main/main.do','https://www.nise.go.kr/hright/index.jsp'];
        window.open(sLinkGo[sNum]); 
    }
    sAnum = 0;
    
}
//slide
//슬라이드 넓이및 이미지변경
function slideChange(){
    //슬라이드박스 넓이 설정
    var slideLength = $('.slideMainBox').length;
    var slideW = slideLength * 100 + '%';
    $('#mainSlide').width(slideW);
    //슬라이드박스 배경이미지설정
    for(var i=0;i<slideLength;i++){
        var back = i+1; $('.slideMainBox').eq(i).css({"backgroundImage":"url(images/secAb"+back+".jpg)"});
        
    }

}
//슬라이드 반응형 이미지변경
function slideAuto(){
    var slideLength = $('.slideMainBox').length;
    if($(window).width() >  650) {
        for(var i=0;i<slideLength;i++){
            var back = i+1;
            $('.slideMain').eq(i).attr('src','images/secA'+back+'.jpg');
        }  
    } else {
        for(var i=0;i<slideLength;i++){
            var back = i+1;
            $('.slideMain').eq(i).attr('src','images/slideRWD'+back+'.jpg');
        } 
    }
}
$(document).ready(slideAuto);
//좌우슬라이드
var slideNum = -1;
var timeout;
function slide(num) {
    
    slideNum += num;
    
    var slideLValue = ($('.slideMainBox').length-1);
    if(slideNum > slideLValue) { slideNum = 0;}
    if(slideNum < 0) { slideNum = slideLValue;}
    
    var newX = slideNum * -100 + '%';
    $('#mainSlide').stop().animate({ 'left' : newX }, 500);
    $('.ctrlCle').css('backgroundColor','transparent');
    $('.ctrlCle').eq(slideNum).css('backgroundColor','#0A235B');
    timeout = setTimeout('slide(1)',5000);
}

//게시판
//받는 게시판번째변수
var ntcNum;
const noticeTit = ['.mc_title','.mc_svr','.user_title'];
const noticeCon = ['.noticeBox','.svrBox','.userBox'];
//contentbox1
function cbox1(num) {
    var cNum = 0;
    cNum += num;
    
    var titleLength = ($('.mc_title').length - 1);
    if(cNum > titleLength) { cNum=0;}
    if(cNum < 0) { cNum=titleLength;}
    
    
    $(noticeTit[ntcNum]).css({'borderBottom':'1px solid #B2B2B2','color' : '#6D6D6D'});
    $(noticeTit[ntcNum]).eq(cNum).css({'borderBottom':'3px solid #0A235B','color':'#3c3c3c'});
    $(noticeCon[ntcNum]).hide();
    $(noticeCon[ntcNum]).eq(cNum).show();
    
    ntcNum = 0;
    cNum = 0;
}


slide(1);

$(function(){
    slideChange();
    
    //언어
    $('#allLang').click(function(){
        if($(this).children('#jb_lang').css('display') == 'none') {
            $(this).children('#jb_lang').show();
        } else { $(this).children('#jb_lang').hide();}
        
    });
    //---------nav
    $('.gnbList').on({
        mouseenter : function(){ $(this).children('.sub').stop().slideDown(300);
        },
        mouseleave : function(){ $('.sub').stop().slideUp(300); }
    });
    
    //메인메뉴 껏다키기
    $('#hd_rwdMenu').click(function(){
       if($('#GNB').css('display') == 'none') {
           console.log(1);
           $('.rwdBar').hide();
           $('.rwdClosed').stop().fadeIn();
           $('#GNB').stop().slideDown();
       } else {
           console.log(2);
           $('.rwdClosed').hide();
           $('.rwdBar').stop().fadeIn();
           $('#GNB').stop().slideUp();

       }
    });

    //슬라이드
    
    $('.slideMain').on({
       mouseenter : function(){
           clearTimeout(timeout);
       },
       mouseleave : function(){
           slide(0);
       }
    });
    
    $('.ctrlCle').click(function(){
        clearTimeout(timeout);
        var circleNum = $(this).index();
        slideNum = circleNum;
        slide(0);
    });
    $('#slideLeft').click(function(){
        clearTimeout(timeout);
        slide(-1);
    });
    $('#slideRight').click(function(){
        clearTimeout(timeout);
        slide(1);
    });
    
    
    $('.mc_title').click(function(){
       var thisNum = $(this).index();
        ntcNum = 0;
       cbox1(thisNum);
    });
    $('.mc_svr').click(function(){
       var thisNum = $(this).index();
        ntcNum = 1;
       cbox1(thisNum);
    });
    $('.user_title').click(function(){
       var thisNum = $(this).index();
        ntcNum = 2;
       cbox1(thisNum);
    });
    
    //하단메뉴
    $('#bot_menu').children('li').click(function(){
        $(this).children('.bot_subMenu').toggle();
        if($(this).children('.bot_subMenu').css('display')=='none') { 
            $(this).css('background','#fff');
            $(this).children('.bot_menuTit').css('color','#6D6D6D');
            $(this).children('.bot_menuMore').css('color','#6D6D6D');
        } else { $(this).css('background','#2A72EF');
            $(this).children('.bot_menuTit').css('color','#fff');
            $(this).children('.bot_menuMore').css('color','#fff');
        }
    });
    $('.subClosed').click(function(){
        $(this).parent('.bot_subTit').parent('div').parent('.bot_subMenu').hide();
    });
    
    
    
    
    
    if($(window).width()>1025) {
        //검색키워드클릭
        $('#hd_schL').click(function(){searchBtn(0);});
        $('#hd_schR').click(function(){searchBtn(1);});
        
        var newH = $('.slideMain').height();
        $('.slideBtn').height(newH);
    } else { 
        var newH = $('.slideMain').height();
        $('#mainvs').height(newH);
        $('.slideBtn').height(newH);
    }

    
    
    //goTop
    $('#toTop').click(function(){
        var winTop = $('#header').offset().top;
        $('html,body').stop().animate({'scrollTop' : winTop},700,'easeInOutExpo');
    });
    
    //---------------------------link------------------------------------
    //홈링크
    $('#homeLink').click(function(){
    });
    //국가상징링크
    $('#flagLink').click(function(){
        const flagLink = 'https://www.mois.go.kr/frt/sub/popup/p_taegugki_banner/screen.do';
        window.open(flagLink,'popup',"top=0, left=0,width=887, height=721");
    });
    //헤더gif 링크
    $('#hd_banner').click(function(){
       const hd_bnrLink = 'http://blog.naver.com/jbesosik/222046464451';
        window.open(hd_bnrLink);
    });
    //sns링크
    $('.hd_sns').click(function(){
       var sLinkNum = $(this).index();
        sAnum =2;
        sLink(sLinkNum);
    });
    //슬라이드링크
    $('.slideMainBox').click(function(){
       var sLinkNum = $(this).index();
        sAnum =1;
        sLink(sLinkNum);
    });
    //하단배너링크
    $('.ban_link').click(function(){
       var sLinkNum = $(this).index();
        sAnum =3;
        sLink(sLinkNum);
    });
    
    
}); //end $(function()


$(window).resize(function(){
    slideAuto();
    if($(this).width()>1025) { 
        $('#GNB,.rwdBar,.rwdClosed').removeAttr('style');
        $('.hd_schList').removeAttr('style');
        $('.sub').removeAttr('style');
        //$('#hd_rwdMenu').off("click");
        
        $('#mainvs').height(400);
        
        var newH = $('.slideMain').height();
        $('.slideBtn').height(newH);
    }
    if($(window).width()<1025 && $(window).width()>320) {
        $('#GNB,.rwdBar,.rwdClosed').removeAttr('style');
        $('.sub').removeAttr('style');
        
        $('.hd_schList').removeAttr('style');
        $('#hd_schL').click(function(){searchBtn(0);});
        $('#hd_schR').click(function(){searchBtn(1);});
        
        var newH = $('.slideMain').height();
        $('#mainvs').height(newH);
        $('.slideBtn').height(newH);
    }
    
    
}); //end $(window).resize(function()


//scroll
$(window).scroll(function(){
    if($(this).scrollTop()>100){$('#toTop').stop().animate({bottom:'15px'},300);} 
    else {$('#toTop').stop().animate({bottom:'-50px'},300);}
});








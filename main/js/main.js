
/*viewIcon motion  num에 1을주면 모션이나타나고 0을주면사라짐*/
function viewMotion(num){
    const motion_name = ['#view','#view_line1','#view_line2','#view_box'];
    //앞에것이 사라질것
    var motion_chg = 
    [['view1','view2'],['view_line1','view_line_1'],
    ['view_line2','view_line_2'],['view_box1','view_box2']];

    for(var i=0;i<motion_name.length;i++){
        for(var j=0;j<motion_chg[0].length;j++){
            $(motion_name[i]).removeClass(motion_chg[i][j]);
        }
        $(motion_name[i]).addClass(motion_chg[i][num]);
    }
}

//nav
function nav_view(){
    var num;
    var nav_name = ['#hd_wrap','#menu'];
    var nav_class = [
        ['hd_wrap2','hd_wrap1'],['hd_wrap1','hd_wrap2'],
        ['0','1'],['none','flex'] ];

    if($('#menu').css('display') == 'flex'){
        num = 0; viewMotion(num);
    }else { num =1; viewMotion(num); }

    $(nav_name[0]).removeClass(nav_class[0][num]);
    $(nav_name[0]).addClass(nav_class[1][num]);
    $(nav_name[1]).animate({'opacity': nav_class[2][num]});
    $(nav_name[1]).css('display',nav_class[3][num]);
};

//info
//키면 num =1 닫으면 num =0
function info_clickOn(){
    var num;
    //for문진입
    const info_name_for = ['#info_ctsBox','#info_cts'];
    var info_chg_for = [ ['info_ctsBox_prev','info_ctsBox_next'], ['info_cts_prev','info_cts_next'] ];
    
    //나열
    const info_name = ['#info_ctn_next','#info_ctn_prev','#info_main_wrap','.info_btn'];
    var info_chg = [['none','flex'],['flex','none'],['auto','850'],['학력 / 기술','닫기'],['0','1']];

    if($(info_name_for[0]).hasClass(info_chg_for[0][0])){num = 1;
    } else { num = 0; }

    $(info_name[0]).delay(300).animate({'opacity':info_chg[4][num]});
    $(info_name[0]).css('display',info_chg[0][num]);
    $(info_name[1]).css('display',info_chg[1][num]);
    $(info_name[2]).css('z-index',info_chg[2][num]);
    $(info_name[3]).text(info_chg[3][num]);
    
        for(var i=0;i<info_name_for.length;i++){
            for(var j=0;j<info_chg_for[0].length;j++){
                $(info_name_for[i]).removeClass(info_chg_for[i][j]);
            }
            $(info_name_for[i]).addClass(info_chg_for[i][num]);
        }
}


var secId = ['#intro_wrap','#about_wrap','#info_wrap','#works_wrap','#contact_wrap'];
//go_section
function go_section(num){
    
    var goTop = $(secId[num]).offset().top;
        $('html,body').stop().animate({'scrollTop' : goTop},700,'easeInOutCubic');
}

//goLink id값 = 1이면 페이지이동. 2면 github이동.
function go_link(id,num){

    var link_href = [];

    var page_href = [
        'http://divinity6.dothome.co.kr/jbo/','http://divinity6.dothome.co.kr/dwg/',
        'http://divinity66.dothome.co.kr/dw/','http://divinity6.dothome.co.kr/inpiad/',
        'http://divinity6.dothome.co.kr/ompos/'
    ];

    var git_href = [
        'https://github.com/divinity6/plo/tree/master/jbo',
        'https://github.com/divinity6/plo/tree/master/dwg',
        'https://github.com/divinity6/plo/tree/master/dw',
        'https://github.com/divinity6/plo/tree/master/inpiad',
        'https://github.com/divinity6/plo/tree/master/ompos'
    ];

    if (id == 1) {link_href = page_href;}
    if (id == 2) {link_href = git_href;}
    window.open(link_href[num]);
    link_href = null;
}

//contact 이동
var ctt_num = 3;
function ctt_link(num){
    if (num == 0) window.open('mailto:divinity456@gmail.com');
    if (num == 1) window.open('https://www.youtube.com');
    if (num == 2) window.open('https://www.facebook.com/');
    if (num == 3) alert('CONTACT 메뉴를 클릭하세요');
    ctt_num = 3;
}


//시간받아오기
function nowTimes(){
  var today = new Date();

  var theyear = today.getFullYear();
  var themonth = today.getMonth() + 1;
  var thedate = today.getDate();

  var currYear = theyear + '.' + themonth + '.' + thedate;

    $('.skill_date').text(currYear);
}


$(function(){
    nowTimes();

    $('#view_wrap').on('click',function(){nav_view();});

    //music
    var audio = new Audio();
    audio.type= 'audio/mpeg';
    audio.src = "./music/Chill_and_Smile.mp3";
    audio.volume = 0.7;
    audio.loop = true;

    $('.musicOn').on('click',function(){
        audio.play();
        $(this).hide();
        $('#musicOff').fadeIn();
    });

    $('#musicOff').on('click',function(){
        audio.pause();
        $(this).hide();
        $('.musicOn').fadeIn();
    });

    //info
    $('.reduceImg,.info_btn').on('click',function(){ info_clickOn();});

    if($(window).width()<650){ $('.info_note').text('Se Hoon'); }


    //contact
    $('.ctt_list').on('click',function(){
        $('.ctt_here').fadeIn();
        $('#ctt_rect').addClass('ctt_rect');
        var thisNum = $(this).index();
        var inText = ['DIVINITY456@GMAIL.COM','YOUTUBE.COM','FACEBOOK.COM'];
        $('.ctt_topic').html(inText[thisNum]);
        ctt_num = thisNum;
    });




    //works_link(링크이동)
    $('.worksImg').on('click',function(){
        var thisNum = $(this).parent('.works_ob').index();
        go_link(1,thisNum);
    });
    $('.works_ctn').on('click',function(){
        var thisNum = $(this).parent('.works_ob').index();
        go_link(2,thisNum);
    });

    $('.snsGit').on('click',function(){
        window.open('https://github.com/divinity6/plo');
    });

    $('.ctt_topic, .ctt_here').on('click',function(){
        ctt_link(ctt_num);
    });
    $('#works_other').on('click',function(){
        alert('준비중입니다');
    });



     //gotop(페이지이동)
     //나중에정리
     $('.logoImg').on('click',function(){
        go_section(0);
    });
    $('.sd_btn').on('click',function(){
        go_section(3);
    });
    $('.snsEmail, .snsFb, .snsYt').on('click',function(){
        go_section(4);
    });
    $('.list, .ctrl_list').on('click',function(){
        var thisNum = $(this).index();
        go_section(thisNum);
    });

});


//scroll and resize function
function review(id,num){
    var view_name = [];
    //id 값이1 일경우
    var view_href1 = 
        ['.view_line,#view_box','#musicOff','.musicPlay_path'];
    var view_href2 = 
        ['.deco_line','.ctrl_menu','.ctrl_list1'];

    var view_cnt = 
        [];
    var view_chg1 = 
        [['view_black','view_white'],
        ['musicOff_black','musicOff_white'],
        ['musicPlay_black','musicPlay_white']
        ];
    var view_chg2 = 
        [['deco_line_black','deco_line_white'],
        ['ctrl_menu_black','ctrl_menu_white'],
        ['ctrl_list1_black','ctrl_list1_white']
        ];


    if (id == 1) {view_name = view_href1; view_cnt = view_chg1;}
    if (id == 2) {view_name = view_href2; view_cnt = view_chg2;}

    for(var j =0;j<view_name.length;j++){
        for(var k=0;k<view_cnt[0].length;k++){
            $(view_name[j]).removeClass(view_cnt[j][k]);
        }
        $(view_name[j]).addClass(view_cnt[j][num]);
    }
    view_name = [];
    view_cnt = [];
    id = 0;
}


//여기랑 스크롤 코드정리 반드시피료
$(window).resize(function(){
    if($(window).width()<650){ 
        review(1,1);
        $('.info_note').text('Se Hoon'); 
    }
    else { $('.info_note').text('Jeon Se Hoon'); }
});

$(window).scroll(function(){
    for(var i =0;i<secId.length;i++){
        if($(this).scrollTop() == $(secId[i]).offset().top ){
            if(i == 3) { 
                review(2,0);
                if($(window).width()>650){ review(1,0); }
            } else {
                review(2,1);
                if($(window).width()>650){ review(1,1); }
            }

            $('.ctrl_list').removeClass('ctrl_list2');
            $('.ctrl_list').removeClass('ctrl_list_first');
            
            $('.ctrl_list').eq(i).addClass('ctrl_list2');

            $('.list').removeClass('list2');
            $('.list').addClass('list1');

            $('.list').eq(i).removeClass('list1');
            $('.list').eq(i).addClass('list2');
            
        }
    }

    
});

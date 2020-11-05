
var intro_swip = 
    $('#mainsd_wrap').children('.swiper-container').children('.swiper-wrapper').children('.swiper-slide');

//할당할 클래스및아이디명(이거길이 intro_sd_ctrl 에서참조중임)
const sd_name = ['#sd_title','#sd_note','#sd_ment','.sd_drag_path'];

//변화할 클래스명
var sd_chg = [
    //0 (이거길이 intro_sd_ctrl 여기서참조중임)
    ['sd_title1','sd_title2','sd_title3','sd_title2'],
    //1
    ['sd_note1','sd_note2','sd_note1','sd_note1'],
    //2
    ['sd_ment1','sd_ment2','sd_ment1','sd_ment1'],
    //3
    ['sd_drag_path1','sd_drag_path2','sd_drag_path1','sd_drag_path1']
];

//intro
function intro_sd_ctrl(num){
    var bullet = [
        $('.swiepr-intro-pition').children('.swiper-pagination-bullet-active'),
        $('.swiepr-intro-pition').children('.swiper-pagination-bullet') ];

    if( $(intro_swip[num]).hasClass('swiper-slide-active') === true) {
        for(var i = 0;i<sd_name.length; i++) {
            for(var j=0;j<sd_chg[0].length;j++){
                $(sd_name[i]).removeClass(sd_chg[i][j]);
            }
            $(sd_name[i]).addClass(sd_chg[i][num]);
            if (num == 1) {
                $(bullet[0]).addClass('swiper-pagination-bullet-active2');
            } 
            else { $(bullet[1]).removeClass('swiper-pagination-bullet-active2');}
        }
    }
}

//about
function about_sd_ctrl(num){
    var about_name = ['#about_backBox','#about_chgBox'];
    var about_num = ['.about_main_num','.about_main_topic','.about_main_num'];
    var about_texts = [['01.','02.','01.'],['ABOUT ME','KEYWORDS','ABOUT ME']];

    var about_move = (num * -100) + '%';
    for(var i = 0;i<about_name.length;i++){
        $(about_name[i]).stop().animate({'left':about_move},300);
        $(about_num[i]).text(about_texts[i][num]);
    }
}



$(function(){
    $('#wrap').fullpage({
        autoScrolling:true,
        scrollHorizontally:true,
        scrollBar: true
    });


    new Swiper('.siwper-intro',{
        speed :1000,
        autoplay: {delay: 3000,disableOnInteraction: false},
        pagination: {el:'.swiepr-intro-pition', clickable: true},
        navigation: {
            nextEl: '.intro-next',
            prevEl: '.intro-prev',
        },
        //마우스 방지해제
        //touchStartPreventDefault:false,
        on: {
            //start slide anim
            slideChangeTransitionStart: function(){
                intro_sd_ctrl(this.activeIndex);
            },
            //end slide anim
            slideChangeTransitionEnd: function(){
                intro_sd_ctrl(this.activeIndex);
            }
        }
    });
    new Swiper('.siwper-about',{ 
        pagination: {el:'.siwper-about-pition', clickable: true},
        touchStartPreventDefault:false,
        navigation: {
            nextEl: '.about-next',
            prevEl: '.about-prev',
        },
        on: {
            slideChangeTransitionStart: function(){ about_sd_ctrl(this.activeIndex);},
            slideChangeTransitionEnd: function(){ about_sd_ctrl(this.activeIndex); }
        }
    });
    
});
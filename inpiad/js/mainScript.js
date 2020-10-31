




$(function(){
		

	
    //전체 파란색버튼 링크 클릭시 이동
	$('.link_page').click(function(){
		window.location.href = "http://divinity6.dothome.co.kr/inpiad/premium.html";
	});
	
     //각 서브메뉴의 링크 값(링크값이 비어있는곳은 #으로 표현해씀)
	var links_sub = [
		//포트폴리오
		['#'],
		//패키지 상품
		['http://divinity6.dothome.co.kr/inpiad/premium.html','#', '#','#','#' ,'#'],
		//디자인 상품
		[ 'http://divinity6.dothome.co.kr/inpiad/webDesign.html', '#' , '#', '#' ],
		//유지관리 상품
		[ '#', '#' , '#', '#' ,'#'],
		//브랜드 설계
		[ '#', '#' , '#', '#', '#', '#' , '#' ],
		//고객 지원
		[ '#', '#' , '#', '#', 'http://divinity6.dothome.co.kr/inpiad/introduce.html', '#' ]
		
	];
	
	//각 메인메뉴의 링크 값(링크값이 비어있는곳은 #으로 표현해씀)
	var links_main = [ 'http://divinity6.dothome.co.kr/inpiad/portfolio.html' , '#' , '#' , '#', '#' ,'#' ];
	
    //전체 메인메뉴의 길이
	var main_length = $('.mainList_1').length;
	//전체 서브메뉴의 길이
	var sub_length = $('.subList_1').length;
	console.log(sub_length);
	
	for(var i =0; i < main_length; i++) {
		for (var j = 0; j < 8; j++) { 
			//해당링크이 #이라면
			if (links_sub[i][j] == "#") { $('.mainList_1').eq(i).find('.subList_1').eq(j).addClass('navLink'); }
		}
	} //end for(var i =0; i < main_length; i++)
	
	
	 //서브 메뉴 클릭시 이동
	$('.subList_1').click(function(){
		//메인메뉴의 순서값
		var mainNum = $(this).parent().parent().index();
		//서브 메뉴의 순서값
		var subNum = $(this).index();
		
		var link_value = links_sub[mainNum][subNum];
		console.log(subNum);
		if (link_value != "#") { window.location.href = link_value; }
	});
	
	//메인메뉴 클릭시 이동
	$('.mainList_1').click(function(){
		var link_value = links_main[$(this).index()];
		console.log(link_value);
		if (link_value != "#") { window.location.href = link_value; }
	});
	
	
		//로고버튼 클릭시
    $('#logoBoxNav').click(function(){ 
		$('body, html').scrollTop(0,0);
		window.location.href = "http://divinity6.dothome.co.kr/inpiad/";
	});
	
    //-----------------------------네비게이션 함수----------------------------
    
    
    //메인메뉴에 닿았을때
    $('.mainList_1,#sub_back').mouseenter(function(){
        //창의크기가 1010px보다 작으면
        if($(window).width()<1010) {
            
            //서브네비게이션 숨기기
            $('.subMenu_1').stop().slideUp(300);
            //해당서브네비게이션만 보이기
            $(this).children('.subMenu_1').stop().slideDown(300);
            //서브메뉴 라인은 없애기
            $(this).children('.subMenu_Line').hide();
            
            
            //배경 아이콘 보이기
            //$('#sub_navBackIcon').stop().slideDown(600);
        }
        else { 
            //서브네비게이션 보이기
            $('.subMenu_1, #sub_back').stop().slideDown(600);
        };
        
    });
    

    
    
    //메인메뉴에서 떨어졌을 때
    $('.mainList_1,#sub_back').mouseleave(function(){ 
        //창의크기가 1010px보다 작으면
        if($(window).width()<1010){
            
            //모든 서브메뉴 숨김
            $('.subMenu_1').stop().slideUp();
            
            
            
            //배경 아이콘 숨기기
            //$('#sub_navBackIcon').stop().slideUp(600);
        }
        else {
            //서브네비게이션 숨기기
            $('.subMenu_1, #sub_back').stop().slideUp(500);
        };
    });
    
    
    
    
    //뷰버튼 토글버튼
    $('#view_nav1').click(function(){
			$('#mainMenu_1').fadeToggle();
            $('#sub_back').stop().slideToggle(600);
        
        
		//버그로인해 잠정보류
		/*
        if( $(this).children('.view_nav_icon').css('transform') ==  'matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)') { $(this).children('.view_nav_icon').css('transform', 'rotate(0deg)'); }
		
		else { $(this).children('.view_nav_icon').css('transform', 'rotate(45deg)'); }
		*/
        
//            if($('#mainMenu_1').css('display','none')) {
//                $('#view_nav1').children('.view_nav_icon').css('transform', 'rotate(0deg)');
//            };
    });

  
    
    //돋보기 버튼 클릭시
    $('#search_naviBox').click(function(){
        //$('#mainMenu_1').hide();
        $('#form_navi1Box').fadeIn();
        $('#navi_closeBox').fadeIn();
        $(this).fadeOut();
    });
    
    //돋보기 닫기 버튼 클릭시
    $('#navi_closeBox').click(function(){
        $('#form_navi1Box').hide();
        //$('#mainMenu_1').fadeIn();
        $(this).hide();
        $('#search_naviBox').fadeIn();
    });
    
    
    
    
    
    //모달창 함수

	//모달창 불러오기함수
	$('#modal_open_navBox').click(function(){
		if ($('#modal_nav').css('display') == 'none') 
		{ $('#modal_nav').stop().slideDown(500); 
		 $('#blank_Box').fadeIn();
		 $('.modal_OpenLine_nav').removeClass('modal_OpenLine_nav1');
		 $('.modal_OpenLine_nav').addClass('modal_OpenLine_nav2');
		 
		 if($(window).width()<740) {$('#closebox_blank').fadeIn(); }
		}
		else { $('#modal_nav').stop().slideUp(500); $('#blank_Box').fadeOut();
			$('.modal_OpenLine_nav').removeClass('modal_OpenLine_nav2');
		 $('.modal_OpenLine_nav').addClass('modal_OpenLine_nav1');	 
		}
		
		
		
		
	});
	
	//모달창 끄기 함수
	$('#blank_Box').click(function(){
		$(this).fadeOut(); $('#modal_nav').stop().slideUp(500);
		$('.modal_OpenLine_nav').removeClass('modal_OpenLine_nav2');
		 $('.modal_OpenLine_nav').addClass('modal_OpenLine_nav1');
	});
	$('#closebox_blank').click(function(){
		$(this).fadeOut(); $('#modal_nav').stop().slideUp(500);
		$('.modal_OpenLine_nav').removeClass('modal_OpenLine_nav2');
		 $('.modal_OpenLine_nav').addClass('modal_OpenLine_nav1');

	});
	
	
	
	//안에 항목 클릭하면 나오는 함수
	$('.modal_check').click(function(){
		if ( $(this).children('.checkBox_modal').children('.inCheckBox_modal').css('display') != 'none' ) { $(this).children('.checkBox_modal').children('.inCheckBox_modal').hide(); }
		else { $(this).children('.checkBox_modal').children('.inCheckBox_modal').show();}
		
	});
    
    
	//*-----------------------navi2------------------------------------------------*//
	//메인메뉴에 닿았을때
    $('.mainList_2,#sub_back2').mouseenter(function(){
        //창의크기가 1010px보다 작으면
        if($(window).width()<1010) {
            
            //서브네비게이션 숨기기
            $('.subMenu_2').stop().slideUp(300);
            //해당서브네비게이션만 보이기
            $(this).children('.subMenu_2').stop().slideDown(300);
            //서브메뉴 라인은 없애기
            $(this).children('.subMenu_Line').hide();
            
            
            
            //배경 아이콘 보이기
            $('#sub_navBackIcon2').stop().slideDown(600);
        }
        else { 
            //서브네비게이션 보이기
            $('.subMenu_2, #sub_back2').stop().slideDown(600);
        };
        
    });
    
    
    
    
    //메인메뉴에서 떨어졌을 때
    $('.mainList_2,#sub_back2').mouseleave(function(){ 
        //창의크기가 1010px보다 작으면
        if($(window).width()<1010){
            
            //모든 서브메뉴 숨김
            $('.subMenu_2').stop().slideUp();
            
            
            
            //배경 아이콘 숨기기
            $('#sub_navBackIcon2').stop().slideUp(600);
        }
        else {
            //서브네비게이션 숨기기
            $('.subMenu_2, #sub_back2').stop().slideUp(500);
        };
    });
	
	
	    //뷰버튼 토글버튼
    $('#view_nav2').click(function(){
			$('#mainMenu_2').fadeToggle();
            $('#sub_back2').stop().slideToggle(600);
        
        
        if( $(this).children('.view_nav_icon').css('transform') ==  'matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)') { $(this).children('.view_nav_icon').css('transform', 'rotate(0deg)'); }
		
		else { $(this).children('.view_nav_icon').css('transform', 'rotate(45deg)'); }
		
        
//            if($('#mainMenu_1').css('display','none')) {
//                $('#view_nav1').children('.view_nav_icon').css('transform', 'rotate(0deg)');
//            };
    });
	
	
	
	
	
	
	
	
	
	
	//모달창 불러오기함수
	$('#modal_open_navBox2').click(function(){
		if ($('#modal_nav').css('display') == 'none') 
		{ $('#modal_nav').stop().slideDown(500); 
		 $('#blank_Box').fadeIn();
		 
		 if($(window).width()<740)
		 {$('#closebox_blank').fadeIn(); }
		}
		else { $('#modal_nav').stop().slideUp(500); $('#blank_Box').fadeOut();}
		
	});
	
	
	
	
	
	
	
	
	
	
	
//--------------------------------header------------------------
	
    //하단 버튼을 클릭하면(공통)
    $('.control_list_head').click(function(){
        
        //모든 버튼색을 원래대로되돌리고
        $('.control_text_head').css({
            'color': '#C1C1C1','fontWeight' : '200'});        
        $('.control_line_head').css('borderTop', '1px solid #C1C1C1');
        
        //버튼색을입힘
        $(this).children('.control_text_head').css({
            'color': 'white' , 'fontWeight' : '300'
        });
        $(this).children('.control_line_head').css('borderTop', '2px solid white');
        $('.ctn_bot_head').show();
        
        
        
        //중간 캡션의 위치를 바꿈
        $('.ctnOutBox_head0').removeClass('ctnOutBox_head1');
        $('.ctnOutBox_head0').addClass('ctnOutBox_head2');
        $('.ctnLogoBox_head0').removeClass('ctnLogoBox_head');
        $('.ctnLogoBox_head0').addClass('ctnLogoBox_head2');
        $('.ctn_headh3').removeClass('ctn_head3');
        $('.ctn_headh3').addClass('ctn_head32');
        $('.ctn_headh4').removeClass('ctn_head4');
        $('.ctn_headh4').addClass('ctn_head42');
        $('.ctn_headp0').removeClass('ctn_headP');
        $('.ctn_headp0').addClass('ctn_headP2');
		$('.link_pageHead').addClass('link_pageHead2');
        
        
        
        
    });
	
	//하단 첫번째 버튼을 클릭하면
    $('.control_list_head1').click(function(){
        //모든 영상들과 이미지를 숨김
        $('.head_items_box2').hide();
        $('.head_items_box3').hide();
        $('.head_items_box4').hide();
        
        $('.items_video_list2').hide();
        $('.items_video_list3').hide();
        $('.items_video_list4').hide();
        
        //해당 영상들과 이미지들을 보임
        $('.head_items_box1').fadeIn(300);
        $('.items_video_list1').fadeIn(800);
        
    });
    
    //하단 첫번째 버튼을 클릭하면
    $('.control_list_head2').click(function(){
        //모든 영상들과 이미지를 숨김
        $('.head_items_box1').hide();
        $('.head_items_box3').hide();
        $('.head_items_box4').hide();
        
        $('.items_video_list1').hide();
        $('.items_video_list3').hide();
        $('.items_video_list4').hide();
        
        //해당 영상들과 이미지들을 보임
        $('.head_items_box2').fadeIn(300);
        $('.items_video_list2').fadeIn(800);
        
    });
    
    //하단 첫번째 버튼을 클릭하면
    $('.control_list_head3').click(function(){
        //모든 영상들과 이미지를 숨김
        $('.head_items_box1').hide();
        $('.head_items_box2').hide();
        
        $('.items_video_list1').hide();
        $('.items_video_list2').hide();
        
        //해당 영상들과 이미지들을 보임
        $('.head_items_box3').fadeIn(300);
        $('.head_items_box4').fadeIn(300);
        $('.items_video_list3').fadeIn(800);
        $('.items_video_list4').fadeIn(800);
        

		
		
    });
    
    
    
    
    
	
	
	
	
	/*--------------------------------------secB-------------------------------------*/
	$('#secB_btnBox').click(function(){
		if($(window).width() < 1300 ) {
			$(this).hide();
		}
		else { 
			if($('.secB_info_outBox').css('display') == 'none'){
			$('.secB_info_outBox').stop().slideDown(500);
			$(this).animate({'top' : '42%'},500);
			}
			else { $('.secB_info_outBox').stop().slideUp(500);
			 $(this).animate({'top' : '53%'},500);
			}
		
		}
		
	});
	
	
	/*--------------------------------------secC-------------------------------------*/
	$('.secC_leftBtn').click(function(){
		window.location.href = "http://divinity6.dothome.co.kr/inpiad/closed.html";
	});
	
	
	$(".secC_rightBox1").click(function(){
		window.location.href = "http://divinity6.dothome.co.kr/inpiad/portfolio.html";
	});
	$(".secC_rightBox2").click(function(){
		window.location.href = "http://divinity6.dothome.co.kr/inpiad/portfolio.html";
	});
	
	
	/*--------------------------------------secE-------------------------------------*/
	//secE 라인1을 클릭하면...
	$('.secE_top_controll_lineBox_in1').click(function(){
		//숨길것들숨김
		$('.secE_top_controll_lineBox_in').css('borderTop' , '2px solid #757575');
		$('.secE_top_controll_ctnBox_in').css('color' , '#757575');
		$('.secE_click_event_box').hide();
		
		
		
		//보일것들보임
		$(this).css('borderTop' , '3px solid #353535');
		$('.secE_top_controll_ctnBox_in1').css('color' , '#353535');
		
		
		
		/*메인 이미지 변경*/
		$('.secE_left_mainBox_basicTop1_imgBox').fadeIn();
		$('.secE_left_mainBox_basicBot1_imgBox').fadeIn();
		
		$('.secE_left_mainBox_basicTop2_imgBox').fadeOut();
		$('.secE_left_mainBox_basicBot2_imgBox').fadeOut();
			
	});
	
	
	//secE 버튼1을 클릭하면...
	$('.secE_top_controll_ctnBox_in1').click(function(){
		//숨길것들숨김
		$('.secE_top_controll_lineBox_in').css('borderTop' , '2px solid #757575');
		$('.secE_top_controll_ctnBox_in').css('color' , '#757575');
		$('.secE_click_event_box').hide();
		
		
		$('.secE_top_controll_lineBox_in1').css('borderTop' , '3px solid #353535');
		$(this).css('color' , '#353535');
		
		
		/*메인 이미지 변경*/
		$('.secE_left_mainBox_basicTop1_imgBox').fadeIn();
		$('.secE_left_mainBox_basicBot1_imgBox').fadeIn();
		
		$('.secE_left_mainBox_basicTop2_imgBox').fadeOut();
		$('.secE_left_mainBox_basicBot2_imgBox').fadeOut();
	});
	
	
	
		//secE 라인2을 클릭하면...
	$('.secE_top_controll_lineBox_in2').click(function(){
		//숨길것들숨김
		$('.secE_top_controll_lineBox_in').css('borderTop' , '2px solid #757575');
		$('.secE_top_controll_ctnBox_in').css('color' , '#757575');
		$('.secE_click_event_box2').hide();
		
		
		//보일것들보임
		$(this).css('borderTop' , '3px solid #353535');
		$('.secE_top_controll_ctnBox_in2').css('color' , '#353535');
		$('.secE_click_event_box1').fadeIn();
		
		
		/*메인 이미지 변경*/
		$('.secE_left_mainBox_basicTop2_imgBox').fadeIn();
		$('.secE_left_mainBox_basicBot1_imgBox').fadeIn();
		
		$('.secE_left_mainBox_basicTop1_imgBox').fadeOut();
		$('.secE_left_mainBox_basicBot2_imgBox').fadeOut();
		
	});
	
	
	//secE 버튼2을 클릭하면...
	$('.secE_top_controll_ctnBox_in2').click(function(){
		//숨길것들숨김
		$('.secE_top_controll_lineBox_in').css('borderTop' , '2px solid #757575');
		$('.secE_top_controll_ctnBox_in').css('color' , '#757575');
		$('.secE_click_event_box2').hide();
		
		
		//보일것들보임
		$('.secE_top_controll_lineBox_in2').css('borderTop' , '3px solid #353535');
		$(this).css('color' , '#353535');
		$('.secE_click_event_box1').fadeIn();
		
		
		/*메인 이미지 변경*/
		$('.secE_left_mainBox_basicTop2_imgBox').fadeIn();
		$('.secE_left_mainBox_basicBot1_imgBox').fadeIn();
		
		$('.secE_left_mainBox_basicTop1_imgBox').fadeOut();
		$('.secE_left_mainBox_basicBot2_imgBox').fadeOut();
		
		
	});
	
		//secE 라인3을 클릭하면...
	$('.secE_top_controll_lineBox_in3').click(function(){
		//숨길것들숨김
		$('.secE_top_controll_lineBox_in').css('borderTop' , '2px solid #757575');
		$('.secE_top_controll_ctnBox_in').css('color' , '#757575');
		$('.secE_click_event_box1').hide();
		
		
		//보일것들보임
		$(this).css('borderTop' , '3px solid #353535');
		$('.secE_top_controll_ctnBox_in3').css('color' , '#353535');
		$('.secE_click_event_box2').fadeIn();
		
		
		/*메인 이미지 변경*/
		$('.secE_left_mainBox_basicTop1_imgBox').fadeIn();
		$('.secE_left_mainBox_basicBot2_imgBox').fadeIn();
		
		$('.secE_left_mainBox_basicTop2_imgBox').fadeOut();
		$('.secE_left_mainBox_basicBot1_imgBox').fadeOut();
		
	});
	
	
	//secE 버튼3을 클릭하면...
	$('.secE_top_controll_ctnBox_in3').click(function(){
		//숨길것들숨김
		$('.secE_top_controll_lineBox_in').css('borderTop' , '2px solid #757575');
		$('.secE_top_controll_ctnBox_in').css('color' , '#757575');
		$('.secE_click_event_box1').hide();
		
		
		//보일것들보임
		$('.secE_top_controll_lineBox_in3').css('borderTop' , '3px solid #353535');
		$(this).css('color' , '#353535');
		$('.secE_click_event_box2').fadeIn();
		
		
		/*메인 이미지 변경*/
		$('.secE_left_mainBox_basicTop1_imgBox').fadeIn();
		$('.secE_left_mainBox_basicBot2_imgBox').fadeIn();
		
		$('.secE_left_mainBox_basicTop2_imgBox').fadeOut();
		$('.secE_left_mainBox_basicBot1_imgBox').fadeOut();
		
		
		
	});
	
	
	
	/*--------------------------------------secG-------------------------------------*/
	
	if($(window).width() > 480) {
		$('.secG_contents_h3').click(function(){
			window.location.href = "http://divinity6.dothome.co.kr/closed.html";})
	} else {
		$('.secG_contents_p').click(function(){
			window.location.href = "http://divinity6.dothome.co.kr/closed.html";})
	}
	
	
	
	if($(window).width() > 900) {
		$('.secG_contents_ctn').mouseenter(function(){
		$(this).prev('.secG_contents_hide').fadeIn();
		
		$(this).prev().prev('.secG_contents_line').removeClass('secG_contents_line1');
		$(this).prev().prev('.secG_contents_line').addClass('secG_contents_line2');
		
		
		$(this).parent('.secG_inBox_contents').removeClass('secG_inBox_contents1');
		$(this).parent('.secG_inBox_contents').addClass('secG_inBox_contents2');
		
		});


		$('.secG_contents_ctn').mouseleave(function(){
			$(this).prev('.secG_contents_hide').hide();
		
		$(this).prev().prev('.secG_contents_line').removeClass('secG_contents_line2');
		$(this).prev().prev('.secG_contents_line').addClass('secG_contents_line1');
		
		
		$(this).parent('.secG_inBox_contents').removeClass('secG_inBox_contents2');
		$(this).parent('.secG_inBox_contents').addClass('secG_inBox_contents1');

		
		});
	
		
	} //end if($(window).width() > 900)
	
	
	
	
	
	
	/*--------------------------------------Footer-------------------------------------*/
	$('.foot_import_texts').eq(1).click(function(){
		window.open('https://inpiad.com/company/agreement.php');
	});
	
	$('.foot_import_texts').eq(2).click(function(){
		window.open('https://inpiad.com/company/privacy.php');
	});
	
	$('.foot_import_texts').eq(3).click(function(){
		window.open('https://inpiad.com/company/email.php');
	});
	
	
}); //$(function()





//새창 띄우기 함수

function new_open(pages) {
	var x = (screen.width - 900 ) /2;
	var y = (screen.height - 700 ) /2;
	
	//여기서 넘겨받은 page변수를 실행
	window.open(pages,"window","width = 900, height = 700, left = "+x+", top = "+y );
}






//리사이즈
$(window).resize(function(){
        //창의 크기가 1010px보다 크면
		if($(this).width()>1010) {
			//-----------------------------------navi1
			//방금지정해놧던 스타일을지우면원래대로돌아감
			$('#mainMenu_1').removeAttr('style');
            $('#sub_back').removeAttr('style');
            $('#sub_navBackIcon').removeAttr('style');
            $('.subMenu_1').removeAttr('style');
            $('.subMenu_Line').removeAttr('style');
            $('#search_naviBox').removeAttr('style');
			
        };
    
    
        //창의 크기가 1010px보다 작으면
        if($(this).width()<=1010) { 
			//-----------------------------------navi2
            $('#form_navi1Box').hide();
            $('#navi_closeBox').hide();
        }
	
	
		if($(this).width() < 1300 ) {
			$('#secB_btnBox').hide();
			$('.secB_info_outBox').hide();
		}
		else {$('#secB_btnBox').show(); }

	
	 //창의 크기가 900px보다 작으면
		if($(this).width()<=900) { $('.secG_contents_hide').hide();
		$('#secE_click_event_out_Box').removeAttr('style');
	}
	
	}); //$(window).resize(function()




/**------------------------------스크롤에 반응하는 이벤트-----------------------------*/
$(window).on('scroll' , function(){
	
	
	var scrollEvent = $(window).scrollTop();
	
	
	/*---------------------------secA 스크롤 이벤트--------------------------------*/
	var headHeight = $('#head').height();
	
		if (scrollEvent >= headHeight-400) { 
			$('.ctn_secAh32').addClass('ctn_secAh32Anim');
		}
		if (scrollEvent >= headHeight-300) { 
			$('.ctn_secAh42').addClass('ctn_secAh42Anim');
		}

		if (scrollEvent >= headHeight-150) { 
			$('.ctn_secAp2').addClass('ctn_secAp2Anim');
		}

		if (scrollEvent >= headHeight) { 
			$('.secAlist_line').eq(0).addClass('secAlist_lineAnim');
			$('.secAlist_line').eq(1).addClass('secAlist_lineAnim');
			$('.secAlist_line').eq(2).addClass('secAlist_lineAnim');
			$('.secAlist_line').eq(3).addClass('secAlist_lineAnim');
			$('.secAlist_line').eq(4).addClass('secAlist_lineAnim');
		}


		if (scrollEvent >= headHeight + 100) { 
			$('.secAlist_line').eq(5).addClass('secAlist_lineAnim');
			$('.secAlist_line').eq(6).addClass('secAlist_lineAnim');
			$('.secAlist_line').eq(7).addClass('secAlist_lineAnim');
			$('.secAlist_line').eq(8).addClass('secAlist_lineAnim');
			$('.secAlist_line').eq(9).addClass('secAlist_lineAnim');
		}
	
	
	
		if (scrollEvent >= headHeight + 200) { 
			$('.secAlist_line').eq(10).addClass('secAlist_lineAnim');
			$('#secB_mainCtn').addClass('secB_mainCtnAnim');
			
		}
	
		
	
	
	
	/*---------------------------secB 스크롤 이벤트--------------------------------*/
	var secAHeight = $('#secA').height() + headHeight;
		if ( scrollEvent >= secAHeight - 150 ) {
			$('#secB_btnBox').addClass('secB_btnBoxAnim');
			$('#ctnInBox_secB').addClass('secB_mainCtnAnim');
			
			
			//secD에있는 메인 캡션원래대로하기
			$('.secD_ctn_box').removeClass('secD_ctn_box2');
		

		}
	
		/*--------------------------- 두번째 네비 이벤트--------------------------------*/
	var nav2Height = $('#secB').height() + $('#secC').height() + secAHeight;
		if ( scrollEvent >= nav2Height+220 ) {
			//$('#naviBox_2').removeClass('naviBox1');
			//$('#naviBox_2').addClass('naviBox2 ');
			//$('#naviBox_1').hide();
			//$('.mainMenu_1').hide();
			//$('.mainMenu_2').css('display' , 'flex');
		}
	
	
	/*----------------secD스크롤 이벤트---------------------*/
	// 화면크기가 740px보다 크면
	if ($(window).width() > 740) { 
		if ( scrollEvent >= nav2Height ) { 
			$('.secD_ctn_box').addClass('opacAnim');
		}
			
			
	} //end if ($(window).width() > 740)
	else { 
		
		if ( scrollEvent >= nav2Height +400 ) { 
			$('.secD_ctn_box').addClass('opacAnim');
			$('.secD_ctn_box').removeClass('secD_ctn_box1');
			$('.secD_ctn_box').addClass('secD_ctn_com');
		}
		
		var ctnDTop = $('.secD_ctn_box').offset().top;
		
		if ( scrollEvent >= ctnDTop) {
			$('.secD_ctn_box').addClass('secD_ctn_box2');
			
		}
		
		var backDTop = $('.secD_back').offset().top;
		
		if ( scrollEvent >= (backDTop - 390)) {
			$('.secD_ctn_box').removeClass('secD_ctn_box2');
			$('.secD_ctn_box').removeClass('secD_ctn_com');
			$('.secD_ctn_box').addClass('secD_ctn_box1');
			
		}
			
			
	} //end else {}
		

	
	
	
	
	
	/*---------------------제대로 스크롤이벤트 --------------------*/
	//current = 현재의 스크롤바위치
	var current = $(this).scrollTop();
	//모든 섹션의 갯수를 변수로 설정
	var sec_height = $('section').lenght;
	
	//모든 섹션의 갯수만큼 반복
	for(var i =0; i < sec_height; i++) {
		
		//섹션의 0번부터 섹션최대값만큼 반복
		//각각 섹션 상단의 위치값구하기
		var secTop = $('section').eq(i).offset().top;
		
	}
	
	
	
	
	/*---------------------secA --------------------*/
	var secA_top = $('section').eq(0).offset.top;
	
	
	
	/*---------------------secB --------------------*/
	/*---------------------오브젝트 이벤트 --------------------*/
	
	
	
	var secB_top0 = $('section').eq(1).offset().top;
	
	var secB_sum = $('.secB_mainObject_line').height();
	//secB배경 내려옴
	if (current > ( secB_top0 - (secB_sum + 850))) {
		$('.secB_back').show();
	} else { $('.secB_back').hide(); }
		//배경이 pixed로 변하는 위치
	if (current > secB_top0 -50) {
		$('.secB_back').removeClass('secB_back_fixed');
		$('.secB_back').addClass('secB_back_ab');
			
	} 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*---------------------secD --------------------*/
	
	//secD메인주제 별로 변하는 위치값 배열값
	
	
	
	//반응형 500보다 클때 스크롤값
	if($(window).width() > 489) {
		//메인토픽 위치값 변수리스트
		var secD_star_height = [ 200 , 180 ,120 , 70 , 0 , -70 , -120 , -200 , -250, -290];
		
		
		
		//secD 메인내용1번-------- 별로 변하는 위치값 설정
		var secD_basic_top = 220;

		for (var i = 0; i < $('.secD_center_contents_h3_1').length;i++){
			//변하는 값의 차이
			secD_basic_top -=8;
			var secD_bot = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_basic_top);

			if(current > secD_bot) {
				//i번째의 글자를 보이고 별을 숨김
				$('.secD_center_contents_h3_1').eq(i).show();
				$('.secD_contents_star').eq(i).hide();

			}
			else {
				//i번째의 글자를 숨기고 별을 보임
				$('.secD_center_contents_h3_1').eq(i).hide();
				$('.secD_contents_star').eq(i).show();
			}

		} //end for (var i = 0; i < $('.secD_center_contents_h3_1').length;i++)






		//secD 메인내용2번-------- 별로 변하는 위치값 설정
		var secD_basic_bot = -100;

		for (var i = 0; i < $('.secD_center_contents_h3_2').length;i++){
			//변하는 값의 차이
			secD_basic_bot -=8;
			var secD_bot2 = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_basic_bot);

			if(current > secD_bot2) {
				//i번째의 글자를 보이고 별을 숨김
				$('.secD_center_contents_h3_2').eq(i).show();
				$('.secD_contents_star2').eq(i).hide();

			}
			else {
				//i번째의 글자를 숨기고 별을 보임
				$('.secD_center_contents_h3_2').eq(i).hide();
				$('.secD_contents_star2').eq(i).show();
			}

		} //end for (var i = 0; i < $('.secD_center_contents_h3_1').length;i++)
		
	} //end if($(window).width() > 489)
	// 핸드폰화면일때 스크롤 값
	
	
	
	
	else { 
		//메인토픽 위치값 변수리스트
		var secD_star_height = [ -80 , -115 ,-150 , -185 , -220 , -255 , -290 , -325 , -360,  -385];
		
		
		
		//secD 메인내용1번-------- 별로 변하는 위치값 설정
		var secD_basic_top = -130;

		for (var i = 0; i < $('.secD_center_contents_h3_1').length;i++){
			//변하는 값의 차이
			secD_basic_top -=5;
			var secD_bot = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_basic_top);

			if(current > secD_bot) {
				//i번째의 글자를 보이고 별을 숨김
				$('.secD_center_contents_h3_1').eq(i).show();
				$('.secD_contents_star').eq(i).hide();

			}
			else {
				//i번째의 글자를 숨기고 별을 보임
				$('.secD_center_contents_h3_1').eq(i).hide();
				$('.secD_contents_star').eq(i).show();
			}

		} //end for (var i = 0; i < $('.secD_center_contents_h3_1').length;i++)






		//secD 메인내용2번-------- 별로 변하는 위치값 설정
		var secD_basic_bot = -230;

		for (var i = 0; i < $('.secD_center_contents_h3_2').length;i++){
			//변하는 값의 차이
			secD_basic_bot -=5;
			var secD_bot2 = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_basic_bot);

			if(current > secD_bot2) {
				//i번째의 글자를 보이고 별을 숨김
				$('.secD_center_contents_h3_2').eq(i).show();
				$('.secD_contents_star2').eq(i).hide();

			}
			else {
				//i번째의 글자를 숨기고 별을 보임
				$('.secD_center_contents_h3_2').eq(i).hide();
				$('.secD_contents_star2').eq(i).show();
			}

		} //end for (var i = 0; i < $('.secD_center_contents_h3_1').length;i++)
		
		
	} // end else {}
	
	
	
		//섹션 D의 보여줄 토픽 위치값 구하기
		var secD_top_0 = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_star_height[0]);
	
		var secD_top_1 = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_star_height[1]);
	
		var secD_top_2 = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_star_height[2]);
	
		var secD_top_3 = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_star_height[3]);
	
		var secD_top_4 = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_star_height[4]);
	
		var secD_top_5 = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_star_height[5]);
	
		var secD_top_6 = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_star_height[6]);
	
		var secD_top_7 = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_star_height[7]);
	
		var secD_top_8 = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_star_height[8]);
	
		var secD_top_9 = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_star_height[9]);
	
		var secD_top_10 = $('section').eq(3).offset().top+(($('.secD_center_line_box').height()/2) - secD_star_height[10]);
		

	
	
		//만약 현재스크롤 위치가 D 섹션의 상단부분을 넘어서면
		//첫번째가
		if(current > secD_top_0) {
			//해당클래스 추가
			$('.secD_topic_h1_1').hide();
			$('.secD_topic_star_box').eq(0).show();
			
			//변할 토픽을 숨김
			var star_length = 5;
			for(var i =0; i < star_length; i++) {
				$('.secD_topic_change').eq(i).hide();
			}
			
		} else { $('.secD_topic_h1_1').show(); $('.secD_topic_star_box').eq(0).hide();}
	
		if(current > secD_top_1) {
			//해당클래스 추가
			$('.secD_topic_h1_2').hide();
			$('.secD_topic_star_box').eq(1).show();
			
			//변할 토픽을 숨김
			var star_length = 5;
			for(var i =0; i < star_length; i++) {
				$('.secD_topic_change').eq(i).hide();
			}
		}  else { $('.secD_topic_h1_2').show(); $('.secD_topic_star_box').eq(1).hide(); }
	
		if(current > secD_top_2) {
			//해당클래스 추가
			$('.secD_topic_h1_3').hide();
			$('.secD_topic_star_box').eq(2).show();
			
			
			
			//변할 토픽을 숨김
			var star_length = 5;
			for(var i =0; i < star_length; i++) {
				$('.secD_topic_change').eq(i).hide();
			}
			
		} else { $('.secD_topic_h1_3').show(); $('.secD_topic_star_box').eq(2).hide(); }
	
		if(current > secD_top_3) {
			//해당클래스 추가
			$('.secD_topic_h1_4').hide();
			$('.secD_topic_star_box').eq(3).show();
			
			
			//변할 토픽을 숨김
			var star_length = 6;
			for(var i =0; i < star_length; i++) {
				$('.secD_topic_change').eq(i).hide();
			}
			
		} else { $('.secD_topic_h1_4').show(); $('.secD_topic_star_box').eq(3).hide(); }
	
		if(current > secD_top_4) {
			//해당클래스 추가
			$('.secD_topic_h1_5').hide();
			$('.secD_topic_star_box').eq(4).show();
			
			
			$('.secD_topic_change').eq(0).show();
			$('.secD_topic_star_box').eq(0).hide();

		} else { $('.secD_topic_h1_5').show(); $('.secD_topic_star_box').eq(4).hide(); }
	
		if(current > secD_top_5) {
			//해당클래스 추가
			$('.secD_topic_h1_6').hide();
			$('.secD_topic_star_box').eq(5).show();
			
			
			$('.secD_topic_change').eq(1).show();
			$('.secD_topic_star_box').eq(1).hide();	
		} else { $('.secD_topic_h1_6').show(); $('.secD_topic_star_box').eq(5).hide(); }
	
		if(current > secD_top_6) {
			
			//해당클래스 추가
			$('.secD_topic_h1_7').hide();
			$('.secD_topic_star_box').eq(6).show();
			
			
			$('.secD_topic_change').eq(2).show();
			$('.secD_topic_star_box').eq(2).hide();
			
		}  else { $('.secD_topic_h1_7').show(); $('.secD_topic_star_box').eq(6).hide(); }
	
		
		if(current > secD_top_7) {
			//나머지 별들을 숨김
			var star_length = 2;
			for(var i =0; i < star_length; i++) {
				$('.secD_topic_star_box').eq(i).hide();
			}
			//해당클래스 추가
			$('.secD_topic_change').eq(3).show();
			$('.secD_topic_star_box').eq(3).hide();
			
		}
	
	
	
		if(current > secD_top_8) {
			//나머지 별들을 숨김
			var star_length = 3;
			for(var i =0; i < star_length; i++) {
				$('.secD_topic_star_box').eq(i).hide();
			}
			//해당클래스 추가
			$('.secD_topic_change').eq(4).show();
			$('.secD_topic_star_box').eq(4).hide();
			
		}
	
	
		if(current > secD_top_9) {
			//나머지 별들을 숨김
			var star_length = 4;
			for(var i =0; i < star_length; i++) {
				$('.secD_topic_star_box').eq(i).hide();
			}
			//해당클래스 추가
			$('.secD_topic_change').eq(5).show();
			$('.secD_topic_star_box').eq(5).hide();
			
		}
	
		
		
		if(current > secD_top_10) {
			//나머지 별들을 숨김
			var star_length = 5;
			for(var i =0; i < star_length; i++) {
				$('.secD_topic_star_box').eq(i).hide();
			}
			
			
			//해당클래스 추가
			$('.secD_topic_change').eq(6).show();
			$('.secD_topic_star_box').eq(6).hide();

		}

	
	
	

		
	
	
	
	
	
	
	
	
	
	
	
	/*-----------------------------------secE -----------------------------------------*/
	var secE_top_1 = $('section').eq(4).offset().top - ($('#secE_top_logoBox').height()+300);
	var secE_top_2 = $('section').eq(4).offset().top - ($('#secE_top_logoBox').height()+220);
	var secE_top_3 = $('section').eq(4).offset().top - ($('#secE_top_logoBox').height());
	var secE_top_4 = $('section').eq(4).offset().top; + (($('#secE_bot_rightBox').height()+$('#secE_top_logoBox').height() + $('.secE_left_mainBox_basic').height()) + 200);
	
	if ($(window).width() >  730) {
		if(current > secE_top_1) {
		$('#secE_top_logoBox').removeClass('secE_top_logoBox1')
		$('#secE_top_logoBox').addClass('secE_top_logoBox2')
		
		
		$('.secE_top_rightBox').fadeIn();
		}
	
		if(current > secE_top_2) {
			$('#secE_left_mainBox').fadeIn();

		}

		if(current > secE_top_3) {
			$('#secE_middle_rightBox').fadeIn();
			$('#secE_click_event_out_Box').fadeIn();
		}

		if(current > secE_top_4) {
			$('#secE_bot_rightBox').fadeIn();
		}
	
	}
	
	else { 
		if(current > secE_top_1) {
		$('#secE_top_logoBox').removeClass('secE_top_logoBox1')
		$('#secE_top_logoBox').addClass('secE_top_logoBox2')
		
		
		$('.secE_top_rightBox').fadeIn();
		}
	
		if(current > secE_top_2) {
			$('#secE_left_mainBox').fadeIn();

		}

		if(current > secE_top_3) {
			$('#secE_middle_rightBox').fadeIn();
		}

		if(current > secE_top_4) {
			$('#secE_bot_rightBox').fadeIn();
		}

	
	} /* end else*/
	
	/*-----------------------------------secF -----------------------------------------*/
	var secF_top = $('section').eq(5).offset().top - ($('#secF_ctn_box').height()+300);
	if(current > secF_top) {
			$('#secF_ctn_box').fadeIn();
	}
	
	/*-----------------------------------secG -----------------------------------------*/
	var secG_top = $('section').eq(6).offset().top - ($('.ctnOutBox_secG0').height()+200);
	
	if(current > secG_top) {
		$('.ctnOutBox_secG0').addClass('ctnOutBox_secG2');
	}
	
	
	
	//별로 변하는 위치값 배열값
	var secG_star_height = [ 200 , 180 ,120 , 70 , 0 , -70 ];
	
	if($(window).width() > 1250 ) {
		
		
	}
	
		//섹션 G의 보여줄 토픽 위치값 구하기
		var secG_top_0 = $('section').eq(6).offset().top+(($('.ctnOutBox_secG0').height()/2) - secG_star_height[0]);
	
		var secG_top_1 = $('section').eq(6).offset().top+(($('.ctnOutBox_secG0').height()/2) - secG_star_height[1]);
	
		var secG_top_2 = $('section').eq(6).offset().top+(($('.ctnOutBox_secG0').height()/2) - secG_star_height[2]);
	
		var secG_top_3 = $('section').eq(6).offset().top+(($('.ctnOutBox_secG0').height()/2) - secG_star_height[3]);
	
		var secG_top_4 = $('section').eq(6).offset().top+(($('.ctnOutBox_secG0').height()/2) - secG_star_height[4]);
	
		var secG_top_5 = $('section').eq(6).offset().top+(($('.ctnOutBox_secG0').height()/2) - secG_star_height[5]);
	
	
		if(current > secG_top_0) {
			//해당클래스 추가
			$('.secG_inBox_contents').eq(0).addClass('secG_inBox_contents_scroll');
			//변할 토픽을 숨김
		}
	
		if(current > secG_top_1) {
			//해당클래스 추가
			$('.secG_inBox_contents').eq(1).addClass('secG_inBox_contents_scroll');
			//변할 토픽을 숨김
		}
	
		if(current > secG_top_2) {
			//해당클래스 추가
			$('.secG_inBox_contents').eq(2).addClass('secG_inBox_contents_scroll');
			//변할 토픽을 숨김
		}
	
		if(current > secG_top_3) {
			//해당클래스 추가
			$('.secG_inBox_contents').eq(3).addClass('secG_inBox_contents_scroll');
			//변할 토픽을 숨김
		}
	
		if(current > secG_top_4) {
			//해당클래스 추가
			$('.secG_inBox_contents').eq(4).addClass('secG_inBox_contents_scroll');
			//변할 토픽을 숨김
		}
	
		if(current > secG_top_5) {
			//해당클래스 추가
			$('.secG_inBox_contents').eq(5).addClass('secG_inBox_contents_scroll');
			//변할 토픽을 숨김
		}
	
		/*-----------------------------------secH -----------------------------------------*/
		var secH_top = $('section').eq(7).offset().top - ($('#secH_align').height()+100);
		if(current > secH_top) { 
			$('#secH').animate({'opacity' : '1'});
		}
	
	
	
}); //end $(window).on('scroll' , function()






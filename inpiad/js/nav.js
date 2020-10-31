$(function(){
	
  
    
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
	
	//각 메인메뉴의 링크 값
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
	
	
}); //$(function()










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
        if($(this).width()<=900) { $('.secG_contents_hide').hide(); }
	
	}); //$(window).resize(function()









    
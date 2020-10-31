
/*블러필터 하이값 == secA하이값과 같게 변경*/
/*
function blurHeight() {
	var newH_blur = $('#secA').height();
	$('.blurFilter_secA').height(newH_blur);
	console.log(newH_blur);
};

$(document).ready(blurHeight);
$(window).resize(blurHeight)
*/




$(function(){
	
	
	
	//이동용 링크 함수
	
	
	//각 메인메뉴의 링크 값(링크값이 비어있는곳은 #으로 표현해씀)
	var links_potfolio = [ 'http://www.jroot.co.kr/', 'http://psnetwork.co.kr/', 
		'http://signala.co.kr/', 'http://nextbiomedical.co.kr/', 'http://www.ulvackorea.co.kr/',
		'http://boxgonggam.co.kr/', 'http://inexwall.com/', 'http://printlink.co.kr/index/', 
		'http://thankyoupet.com/', 'http://tio-tech.com/', 'http://ajrental-used.co.kr/',
		'http://www.hucorp.co.kr/', 'http://www.phakr.com/kor/', 'http://diffkorea.com/', 
		'http://sscd.kr/', 'http://plan-ex.kr/', 'http://ecoface.kr/', 'http://hansungpnp.com/' ];
	
	
	//메인메뉴 클릭시 이동
	$('.secB_contentsCards').click(function(){
		//부모의 부모로 타고가야한다.( 순서대로 정렬되어있는게 아니기 때문 )
		var link_value = links_potfolio[$(this).parent().parent().index()];
		console.log(links_potfolio[$(this).index()]);
		if (link_value != "#") { window.open(link_value); }
	});
	
	
	
	
	
	
	
	
	
	
	$('.secA_rightBox').click(function(){
		if($('.secA_check').css('display') == "none"){
		   $('.secA_check').show();
			
			$('.secB_imgBox').fadeIn(300);
			$('.secB_contentsCtn').hide();
			
			
		}
		else { 
			$('.secA_check').hide();
			
			$('.secB_imgBox').fadeOut(300);
			$('.secB_contentsCtn').show();
		}
	});
	
	
	
	//secB
	//마우스를 대면 나타나는 이미지들
	$('.secB_inCardsBox').mouseenter(function(){
		if($('.secA_check').css('display') == "none") { 
			$(this).children('.secB_contentsCards').children('.secB_imgBox').fadeIn(300);
			$(this).children('.secB_contentsCards').children('.secB_contentsCtn').hide();
		}
	})

	$('.secB_inCardsBox').mouseleave(function(){
		if($('.secA_check').css('display') == "none") { 
			$(this).children('.secB_contentsCards').children('.secB_imgBox').fadeOut(300);
			$(this).children('.secB_contentsCards').children('.secB_contentsCtn').show();
		}
	})
	
	
	
	
	
	
	//카드 애니메이션의 지연시간값
	var cards_count = 100;
	//카드애니메이션 속도조절값
	var inpiad_count = 500;
	//전체 카드의 갯수
	var card_length = $('.secB_outCardsBox').length;

	
	
	//if($(window).width() > 765) {
		//secB 카드 애니메이션
		for (var i =0; i < card_length;i++ ) {
			//카드애니메이션 지연시간
			var  inpiad_delay = cards_count*i;
			//contents카드 시작시간
			var contents_start = card_length*cards_count;
			//contents카드 지연시간
			var contents_delay = contents_start + (cards_count*i);
			
			$('.secB_inpiadCards').eq(i).delay(inpiad_delay).animate({'left' : '100%'},inpiad_count);
			
			$('.secB_contentsCards').eq(i).delay(contents_delay).animate({'left' : '50%'},inpiad_count);
		}
	
	
	//} //end if($(window).width() > 765)
	
	
	
	//스크롤 이벤트(네비게이션)
	var navLine = 50;
	$(window).scroll(function(){
		var current = $(window).scrollTop();
		var secB = $('#secB').offset().top;
		
		if(current > secB ) { 
			$('#naviBox_1').fadeOut(500);
			$('.secA2').stop().animate({'top' : '0'},300);
		}else { 
			$('#naviBox_1').fadeIn(300);
			$('.secA2').stop().animate({'top' : '50px'},300);
			
		}


	}); //end $(window).scroll(function()
	

	
}); //end $(function()


















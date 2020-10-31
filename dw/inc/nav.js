//네비게이션전용 스크립트

$(function(){
	$('#view').click(function(){
		if ($(this).css('color') == 'rgb(165, 165, 165)') {
			//트랜스폼은 애니메이션으로 제어가 불가능함
			$('#main_menu').animate({'left' : '50%'}, 300);
			$(this).css('color','#fff');
		}
		else {
			$('#main_menu').animate({'left' : '100%'}, 300);
			$(this).css('color','rgb(165, 165, 165)');
		}
	});
			
			
	$('.main_list').on({
		mouseenter : function(){
			$(this).children('.sub_menu').stop().slideDown(300);
		},
		
		mouseleave : function(){
			$(this).children('.sub_menu').stop().slideUp(200);
		}
	});
	
	$('.main_list1').click(function(){
		window.location.href ="index.html";
	});
	
	$('.main_list2').click(function(){
		window.location.href ="about.html";
	});
	
	
	
	
}); //end $(function()
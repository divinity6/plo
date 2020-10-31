

function autoHeight() {
	var newH = $('.swiper-container').height();
	$('#head').height(newH);
}


$(document).ready(autoHeight);
$(window).resize(autoHeight);





$(function(){
	//secB
	$('.secB_inBox').mouseenter(function(){
		$(this).children('.secB_ctnBox').css('display' , 'flex');

	});
	$('.secB_inBox').mouseleave(function(){
		$(this).children('.secB_ctnBox').hide();

	});
	
});

















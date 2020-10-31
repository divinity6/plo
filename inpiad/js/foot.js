$(function(){

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
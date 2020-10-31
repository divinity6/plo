

$(function(){
	
	
	//------------------------------secA NAVI-------------------------------
	$('#viewBox').click(function(){
		$('#sideBar').css('right' , '0');
		$('#container').css('width', 'calc(100% - 300px)');
		$('#topNav').css('width', 'calc(100% - 300px)');
		$('#logoBox').css('transform', 'translateX(-300px)');
		
		$('#ctnA').css('left', '10%');
		$('#ctnA2').css('left', '12%');
		
		//아래버튼 secA
		$('#downA').css({'fontSize' : '2.8em' , 'left' : '48.5%'});
	});
	
	
	$('#closeBox').click(function(){
		$('#sideBar').css('right' , '-300px');
		$('#container').css('width', '100%');
		$('#topNav').css('width', '100%');
		$('#logoBox').css('transform', 'translateX(0)');
		

		//캡션박스 secA
		$('#ctnA').css('left', '15%');
		$('#ctnA2').css('left', '17%');
		$('#downA').css({'fontSize' : '2.5em' , 'left' : '50%'})
		
	});
	
	//.navList 색변화
	$('.navList').mouseenter(function(){ $(this).css('backgroundColor', 'white');});
	$('.navList').mouseleave(function(){ $(this).css('backgroundColor', 'transparent'); });
	//.navList2 색변화
	$('.navList2').mouseenter(function(){ $(this).css('color', 'white');});
	$('.navList2').mouseleave(function(){$(this).css('color', '#73A8C6');});
	
	
    /*-----------------------------Javascript----------------------------------*/
    window.onscroll = function(){
        var nav = document.getElementById('topNav');
        var logo1 = document.getElementById('logoBox');
        var view1 = document.getElementById('viewBox');
        
        if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
            nav.className = "topNav2";
            logo1.style.margin = "10px";
            logo1.style.marginLeft = "30px";
            view1.style.margin = "10px";
            view1.style.marginRight = "50px";
            
        }
        else { nav.className = "topNav1"; logo1.style.margin = "30px";
            view1.style.margin = "50px"; }
    }
    
    
    
	
	//----------------------------secB 모달----------------------------//
	
	
	var names = [ 'img1.jpg' , 'img2.jpg' , 'img3.jpg' , 'img4.jpg' , 'img5.jpg' , 'img6.jpg' ];
	$('.btnB').click(function(){
		$('#modal').css('display', 'flex');
		var images = 'images/' + names[$(this).parents('.inBoxB2').index()];
		$('#modalImage').attr('src', images);	
	});

	$('#modal').click(function(){
		//모달창 숨기기
		$(this).hide();
	});	
});


//secA세로폭을 secA안 이미지의 슬라이드 세로폭과 맞춤
function secheight() {
	//반응형 작업  (765px이상일시)
	if($(window).width() > 765) {
		
		
		var newH_secB = $('#secB_backImgBox').width() * (1862/1920);
		$('#secB').height(newH_secB);
		
		var newH_secE = $('.secE_imgBox').width() * (903.52/1536);
		$('.secE_slideBox').height(newH_secE);
		
	}
	
	//모바일 화면일시 (765px이하)
	else {
		$('#secB_backImg').attr('src' , 'images/webDesign/secA_back1_RWD.png');
		$('#secB_mainImg').attr('src' , 'images/webDesign/secA_back2_RWD.png');
		
		var newH_secB = $('#secB_backImgBox').width()* (2141/765);
		$('#secB').height(newH_secB);
        
        var newH_secE = $('.secE_imgBox').width() * (900/800);
		$('.secE_slideBox').height(newH_secE);
		
	}
	
};

$(document).ready(secheight);
$(window).resize(secheight);



var slideNum = -1;
var loop;
var slideTexts = [
	['HORIZONTAL LAYOUT' ,'1280PX' ,'ADAPTIVE WEB','REACTIVE TYPE','18 GRID','95%'],
	['NEAT LAYOUT' ,'1920PX' ,'REACTIVE WEB','ADAPTIVE TYPE','16 GRID','98%'],
	['HORIZONTAL LAYOUT' ,'1920PX' ,'REACTIVE WEB','REACTIVE TYPE','12 GRID','96%'] ];

//secF 모달이미지
var secF_modalImg = ['modal_img1.png', 'modal_img2.png', 'modal_img3.png'];

function secF_slider(x){
	slideNum += x;
	
	if(slideNum >2 ) { slideNum = 0; }
	if(slideNum <0 ) { slideNum = 2; }
	
	for(var i =0; i < 6;i++) {
		$('.secF_texts').eq(i).text(slideTexts[slideNum][i]);
	}
	
	
	$('.secF_slideImg').hide();
	$('.secF_circle').css('background-color','transparent');
	
	$('.secF_slideImg').eq(slideNum).fadeIn();
	$('.secF_circle').eq(slideNum).css('background-color','#ff6b3e');
	
	loop = setTimeout('secF_slider(1)',5000);
}




//secE 클릭이벤트 1751 - 1920
function secE_clickEvent1() {
	//모바일 이미지 사라짐
			$('.secE_flexBox2').stop().animate({'opacity' : '0'});
			$('.secE_flexBox2').hide();
			
			//패드박스가 원상태로 돌아감
			$('#secE_padBox').stop().animate({'width' : '100%' , 'opacity' : '0','left' : '50%'});
			$('#secE_padBox').hide();
			
			//배경이미지도 크기가 커짐
			$('.secE_slideImg').show();
			$('.secE_slideImg').stop().animate({'width' : '100%','left' : '50%'});
			$('.secE_slideImg').css({'position' : 'static' , 'top' : '0%' ,'left' : '0%', 'transform' : 'translate(0%,0%)'})
			
			//핸드폰도 크기 원상복귀
			$('.secE_flex_imgBox').css({'width' : '180px' ,'top' : '10%' ,'left' : '20%' , 'transform' : 'translate(0,0)'});
			
			//안쪽 전체 border라인 복원
			$('.secE_flex_borderLine').stop().animate({'width' : '90%','height' : '80%','left' : '50%'	});
			
			
			//위아래 라인 복원
			$('.secE_verLine_bot').css('top','90%');
			$('.secE_verLine').stop().animate({'height' : '10%' , 'left' : '50%' });
			
			//좌우 라인 복원
			$('.secE_flexBox_right').css('left' ,'95%');
			$('.secE_flexBox_right').stop().animate({'width' : '5%'});
			$('.secE_flexBox_left').css('left' ,'0%');
			$('.secE_flexBox_left').stop().animate({'width' : '5%'});
			
			//안쪽 캡션 복원
			$('.secE_flex_ctnBox_top').css({'top' : '20%' ,'left' : '60%','text-align' : 'right' ,'transform' : 'translateX(0%)'});
			$('.secE_flex_topicTop').css({'font-size' : '3rem','line-height' : '80px'});
			$('.secE_flex_subTextsTop').css({'font-size' : '1.3rem' ,'line-height' : '40px'});
			$('.secE_flex_note').css({'left' : '70%','top' : '56%'});
			
			$('.secE_flex_ctnBox_bot').show();
			$('.secE_flex_topicBot').css({'font-size' : '3rem','line-height' : '80px'});
			$('.secE_flex_subTextsBot').css({'font-size' : '1.3rem' ,'line-height' : '40px'});
			
			//위아래 좌우 주황글씨도 변함
			$('.secE_flexTexts_center').css({'justify-content' : 'flex-end' , 'height' : '10%' , 'width' : '90%'});
			
			$('.secE_thinTexts1').text('1920PX');
			$('.secE_flexTexts_left').css({'left':'-45%','top':'55%' ,'transform' :'rotate(270deg) translate(0,-45%)'});
			$('.secE_flexTexts_center_bot').show();
			$('.secE_flexTexts_center_bot').css({'top' : '79%' ,'left' :'84%' ,'transform' : 'rotate(0deg)'});
			$('.secE_flexTexts_center_bot').text('ALIGN GRID SYSTEM');
};
function secE_clickEvent2()  {
	//모바일 이미지 사라짐
	$('.secE_flexBox2').stop().animate({'opacity' : '0'});
	$('.secE_flexBox2').hide();

	//먼저 패드박스가 나오고 크기가 작아짐
	$('#secE_padBox').show();
	$('#secE_padBox').stop().animate({'width' : '55%' , 'opacity' : '1','left' : '50%'});

	//배경이미지도 크기가 작아짐
	$('.secE_slideImg').show();
	$('.secE_slideImg').css({'position' : 'absolute' , 'top' : '50%', 'transform' : 'translate(-50%,35%)'})
	$('.secE_slideImg').stop().animate({'width' : '53%' ,'left' : '50%'});

	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox').css({'width' : '120px' ,'top' : '15%' , 'left' : '20%' , 'transform' : 'translate(0,0)'});


	//안쪽 전체 border라인이 작아짐
	$('.secE_flex_borderLine').stop().animate({'width' : '60%','height' : '70%','left' : '50%' });

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','85%');
	$('.secE_verLine').stop().animate({'height' : '15%', 'left' : '50%'});

	//좌우 라인도 크기에 맞게 길어짐
	$('.secE_flexBox_right').css('left' ,'80%');
	$('.secE_flexBox_right').stop().animate({'width' : '20%'});
	$('.secE_flexBox_left').css('left' ,'0%');
	$('.secE_flexBox_left').stop().animate({'width' : '20%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '17%' ,'left' : '55%' ,'text-align' : 'right' ,'transform' : 'translateX(0%)'});
	$('.secE_flex_topicTop').css({'font-size' : '2rem','line-height' : '50px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '1rem' ,'line-height' : '30px'});
	$('.secE_flex_note').css({'left' : '60%' , 'top' : '56%'});

	$('.secE_flex_ctnBox_bot').show();
	$('.secE_flex_topicBot').css({'font-size' : '2rem','line-height' : '50px'});
	$('.secE_flex_subTextsBot').css({'font-size' : '.9rem' ,'line-height' : '30px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-start' , 'height' : '15%' , 'width' : '60%'});

	$('.secE_thinTexts1').text('1080PX');
	$('.secE_flexTexts_left').css({'left':'65%','top':'45%' , 'transform' :'rotate(270deg) translate(0,-45%)'});
	$('.secE_flexTexts_center_bot').show();
	$('.secE_flexTexts_center_bot').css({'top' : '19%' ,'left' :'80%' ,'transform' : 'rotate(90deg)'});
	$('.secE_flexTexts_center_bot').text('ADAPTIVE GRID');	
}
function secE_clickEvent3()  {
	//------------------------------두번째이미지----------------------------------
	//모바일 이미지 나옴
	$('.secE_flexBox2').show();
	$('.secE_flexBox2').stop().animate({'opacity' : '1'});


	//원상복귀시켜야함

	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox2').css({'width' : '350px'});

	//안쪽 border라인2가 크기가 작아지고 왼쪽으로 옮겨감
	$('.secE_flex_borderLine2').stop().animate({'width' : '30%', 'height' : '80%', 'left' : '80%'});

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot2').css('top','90%');
	$('.secE_verLine2').stop().animate({'height' : '10%', 'left' : '80%'});

	//좌우 라인도 크기에 맞게됨(텍스트도 복구)
	$('.secE_flexBox_left2').css({'font-size' : '1.1rem'});
	$('.secE_flexBox_left2').stop().animate({'width' : '30%'  ,'left' : '50%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_topicTop2').css({'font-size' : '1.4rem','line-height' : '40px'});
	$('.secE_flex_subTextsTop2').css({'font-size' : '1rem' ,'line-height' : '20px'});

	$('.secE_flex_topicBot2').css({'font-size' : '1.4rem','line-height' : '45px'});
	$('.secE_flex_subTextsBot2').css({'font-size' : '.6rem' ,'line-height' : '20px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center2').css({'justify-content' : 'flex-end' , 'height' : '10%' , 'width' : '90%'});

	$('.secE_thinTexts2').text('475PX');
	$('.secE_flexTexts_left2').css({'left':'-45%','top':'45%' });
	$('.secE_flexTexts_center_bot2').show();

	//------------------------------원래이미지----------------------------------
	//패드박스가 원상태로 돌아감
	$('#secE_padBox').stop().animate({'width' : '100%' , 'opacity' : '0'});
	$('#secE_padBox').hide();

	//배경이미지가 사라짐
	$('.secE_slideImg').hide();

	//핸드폰크기가 커짐
	$('.secE_flex_imgBox').css({'width' : '350px' ,'top' : '50%' , 'left' : '50%' , 'transform' : 'translate(-50%,-50%)'});

	//안쪽 전체 border라인 핸드폰크기에 맞춰짐
	$('.secE_flex_borderLine').stop().animate({'width' : '30%','height' : '80%' ,'left' : '20%'});

	//위아래 라인의 위치가 알맞게 변함
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','90%');
	$('.secE_verLine').stop().animate({'height' : '10%' , 'left' : '20%'});

	//좌우 라인 복원
	$('.secE_flexBox_right').css('left' ,'95%');
	$('.secE_flexBox_right').stop().animate({'width' : '5%'});
	$('.secE_flexBox_left').css('left' ,'0%');
	$('.secE_flexBox_left').stop().animate({'width' : '5%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '37%' ,'left' : '50%' ,'text-align' : 'center' ,'transform' : 'translateX(-50%)'});
	$('.secE_flex_topicTop').css({'font-size' : '1.4rem','line-height' : '40px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '1rem' ,'line-height' : '20px'});
	$('.secE_flex_note').css({'left' : '25%' ,'top' : '90%'});

	$('.secE_flex_ctnBox_bot').hide();

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-start' , 'height' : '10%' , 'width' : '90%'});

	$('.secE_thinTexts1').text('615PX');
	$('.secE_flexTexts_left').css({'left':'-45%','top':'55%','transform' :'rotate(270deg) translate(0,-45%)'});
	$('.secE_flexTexts_center_bot').hide();
}
function secE_clickEvent4()  {
	//------------------------------두번째이미지----------------------------------
	//모바일 이미지 나옴
	$('.secE_flexBox2').show();
	$('.secE_flexBox2').stop().animate({'opacity' : '1'});


	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox2').css({'width' : '300px'});

	//안쪽 border라인2가 크기가 작아지고 왼쪽으로 옮겨감
	$('.secE_flex_borderLine2').stop().animate({'width' : '20%', 'height' : '65%', 'left' : '15%'});

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot2').css('top','82.5%');
	$('.secE_verLine2').stop().animate({'height' : '17.5%', 'left' : '15%'});

	//좌우 라인도 크기에 맞게됨(좌측 텍스트는 삭제)
	$('.secE_flexBox_left2').css({'font-size' : '0rem'});
	$('.secE_flexBox_left2').stop().animate({'width' : '5%'  ,'left' : '2.5%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_topicTop2').css({'font-size' : '1rem','line-height' : '30px'});
	$('.secE_flex_subTextsTop2').css({'font-size' : '.7rem' ,'line-height' : '20px'});

	$('.secE_flex_topicBot2').css({'font-size' : '.9rem','line-height' : '30px'});
	$('.secE_flex_subTextsBot2').css({'font-size' : '.7rem' ,'line-height' : '20px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center2').css({'justify-content' : 'flex-start' , 'height' : '17.5%' , 'width' : '90%'});

	$('.secE_thinTexts2').text('465PX');
	$('.secE_flexTexts_center_bot2').hide();


	//------------------------------원래이미지----------------------------------
	//먼저 패드박스가 나오고 크기가 작아지며 오른쪽으로 옮겨감
	$('#secE_padBox').show();
	$('#secE_padBox').stop().animate({'width' : '55%' , 'opacity' : '1','left' : '65%' });

	//배경이미지도 작아지고 왼쪽으로 옮겨감
	$('.secE_slideImg').show();
	$('.secE_slideImg').css({'position' : 'absolute' , 'top' : '50%', 'transform' : 'translate(-50%,35%)'})
	$('.secE_slideImg').stop().animate({'width' : '53%','left' : '65%'});


	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox').css({'width' : '120px' ,'top' : '15%' , 'left' : '20%' , 'transform' : 'translate(0,0)'});


	//안쪽 전체 border라인이 작아짐
	$('.secE_flex_borderLine').stop().animate({'width' : '60%','height' : '70%','left' : '65%' });

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','85%');
	$('.secE_verLine').stop().animate({'height' : '15%', 'left' : '65%'});

	//좌우 라인도 크기에 맞게됨
	$('.secE_flexBox_right').css('left' ,'95%');
	$('.secE_flexBox_right').stop().animate({'width' : '5%'});
	$('.secE_flexBox_left').css('left' ,'25%');
	$('.secE_flexBox_left').stop().animate({'width' : '10%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '17%' ,'left' : '55%' ,'text-align' : 'right' ,'transform' : 'translateX(0%)'});
	$('.secE_flex_topicTop').css({'font-size' : '2rem','line-height' : '50px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '1rem' ,'line-height' : '30px'});
	$('.secE_flex_note').css({'left' : '60%' , 'top' : '56%'});

	$('.secE_flex_ctnBox_bot').show();
	$('.secE_flex_topicBot').css({'font-size' : '2rem','line-height' : '50px'});
	$('.secE_flex_subTextsBot').css({'font-size' : '.9rem' ,'line-height' : '30px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-end' , 'height' : '15%' , 'width' : '90%'});

	$('.secE_thinTexts1').text('1080PX');
	$('.secE_flexTexts_left').css({'left':'-60%','top':'55%','transform' :'rotate(90deg) translate(0,-45%)'});
	$('.secE_flexTexts_center_bot').hide();
}


//secE 반응형 클릭이벤트 1501 - 1750
function secE_clickEvent1_1750() {
	//모바일 이미지 사라짐
			$('.secE_flexBox2').stop().animate({'opacity' : '0'});
			$('.secE_flexBox2').hide();
			
			//패드박스가 원상태로 돌아감
			$('#secE_padBox').stop().animate({'width' : '100%' , 'opacity' : '0','left' : '50%'});
			$('#secE_padBox').hide();
			
			//배경이미지도 크기가 커짐
			$('.secE_slideImg').show();
			$('.secE_slideImg').stop().animate({'width' : '100%','left' : '50%'});
			$('.secE_slideImg').css({'position' : 'static' , 'top' : '0%' ,'left' : '0%', 'transform' : 'translate(0%,0%)'})
			
			//핸드폰도 크기 원상복귀
			$('.secE_flex_imgBox').css({'width' : '150px' ,'top' : '8%' ,'left' : '15%' , 'transform' : 'translate(0,0)'});
			
			//안쪽 전체 border라인 복원
			$('.secE_flex_borderLine').stop().animate({'width' : '90%','height' : '80%','left' : '50%'	});
			
			
			//위아래 라인 복원
			$('.secE_verLine_bot').css('top','90%');
			$('.secE_verLine').stop().animate({'height' : '10%' , 'left' : '50%' });
			
			//좌우 라인 복원
			$('.secE_flexBox_right').css('left' ,'95%');
			$('.secE_flexBox_right').stop().animate({'width' : '5%'});
			$('.secE_flexBox_left').css('left' ,'0%');
			$('.secE_flexBox_left').stop().animate({'width' : '5%'});
			
			//안쪽 캡션 복원
			$('.secE_flex_ctnBox_top').css({'top' : '20%' ,'left' : '60%','text-align' : 'right' ,'transform' : 'translateX(0%)'});
			$('.secE_flex_topicTop').css({'font-size' : '3rem','line-height' : '80px'});
			$('.secE_flex_subTextsTop').css({'font-size' : '1.3rem' ,'line-height' : '40px'});
			$('.secE_flex_note').css({'left' : '70%','top' : '56%'});
			
			$('.secE_flex_ctnBox_bot').show();
			$('.secE_flex_topicBot').css({'font-size' : '2.5rem','line-height' : '80px'});
			$('.secE_flex_subTextsBot').css({'font-size' : '1rem' ,'line-height' : '30px'});
			
			//위아래 좌우 주황글씨도 변함
			$('.secE_flexTexts_center').css({'justify-content' : 'flex-end' , 'height' : '10%' , 'width' : '90%'});
			
			$('.secE_thinTexts1').text('1920PX');
			$('.secE_flexTexts_left').css({'left':'-70%','top':'45%' ,'transform' :'rotate(270deg) translate(0,-45%)'});
			$('.secE_flexTexts_center_bot').show();
			$('.secE_flexTexts_center_bot').css({'top' : '79%' ,'left' :'82%' ,'transform' : 'rotate(0deg)'});
			$('.secE_flexTexts_center_bot').text('ALIGN GRID SYSTEM');
};
function secE_clickEvent2_1750()  {
	//모바일 이미지 사라짐
	$('.secE_flexBox2').stop().animate({'opacity' : '0'});
	$('.secE_flexBox2').hide();

	//먼저 패드박스가 나오고 크기가 작아짐
	$('#secE_padBox').show();
	$('#secE_padBox').stop().animate({'width' : '55%' , 'opacity' : '1','left' : '50%'});

	//배경이미지도 크기가 작아짐
	$('.secE_slideImg').show();
	$('.secE_slideImg').css({'position' : 'absolute' , 'top' : '50%', 'transform' : 'translate(-50%,35%)'})
	$('.secE_slideImg').stop().animate({'width' : '53%' ,'left' : '50%'});

	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox').css({'width' : '120px' ,'top' : '15%' , 'left' : '20%' , 'transform' : 'translate(0,0)'});


	//안쪽 전체 border라인이 작아짐
	$('.secE_flex_borderLine').stop().animate({'width' : '60%','height' : '70%','left' : '50%' });

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','85%');
	$('.secE_verLine').stop().animate({'height' : '15%', 'left' : '50%'});

	//좌우 라인도 크기에 맞게 길어짐
	$('.secE_flexBox_right').css('left' ,'80%');
	$('.secE_flexBox_right').stop().animate({'width' : '20%'});
	$('.secE_flexBox_left').css('left' ,'0%');
	$('.secE_flexBox_left').stop().animate({'width' : '20%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '17%' ,'left' : '50%' ,'text-align' : 'right' ,'transform' : 'translateX(0%)'});
	$('.secE_flex_topicTop').css({'font-size' : '2rem','line-height' : '50px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '1rem' ,'line-height' : '30px'});
	$('.secE_flex_note').css({'left' : '55%' , 'top' : '56%'});

	$('.secE_flex_ctnBox_bot').show();
	$('.secE_flex_topicBot').css({'font-size' : '1.5rem','line-height' : '40px'});
	$('.secE_flex_subTextsBot').css({'font-size' : '.7rem' ,'line-height' : '22px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-start' , 'height' : '15%' , 'width' : '60%'});

	$('.secE_thinTexts1').text('1080PX');
	$('.secE_flexTexts_left').css({'left':'55%','top':'35%' , 'transform' :'rotate(270deg) translate(0,-40%)'});
	$('.secE_flexTexts_center_bot').show();
	$('.secE_flexTexts_center_bot').css({'top' : '19%' ,'left' :'79%' ,'transform' : 'rotate(90deg)'});
	$('.secE_flexTexts_center_bot').text('ADAPTIVE GRID');	
}
function secE_clickEvent3_1750()  {
	//------------------------------두번째이미지----------------------------------
	//모바일 이미지 나옴
	$('.secE_flexBox2').show();
	$('.secE_flexBox2').stop().animate({'opacity' : '1'});


	//원상복귀시켜야함

	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox2').css({'width' : '270px'});

	//안쪽 border라인2가 크기가 작아지고 왼쪽으로 옮겨감
	$('.secE_flex_borderLine2').stop().animate({'width' : '30%', 'height' : '80%', 'left' : '80%'});

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot2').css('top','90%');
	$('.secE_verLine2').stop().animate({'height' : '10%', 'left' : '80%'});

	//좌우 라인도 크기에 맞게됨(텍스트도 복구)
	$('.secE_flexBox_left2').css({'font-size' : '1.1rem'});
	$('.secE_flexBox_left2').stop().animate({'width' : '30%'  ,'left' : '50%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_topicTop2').css({'font-size' : '1.4rem','line-height' : '40px'});
	$('.secE_flex_subTextsTop2').css({'font-size' : '1rem' ,'line-height' : '20px'});

	$('.secE_flex_topicBot2').css({'font-size' : '1.1rem','line-height' : '40px'});
	$('.secE_flex_subTextsBot2').css({'font-size' : '.8rem' ,'line-height' : '20px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center2').css({'justify-content' : 'flex-end' , 'height' : '10%' , 'width' : '90%'});

	$('.secE_thinTexts2').text('475PX');
	$('.secE_flexTexts_left2').css({'left':'-45%','top':'45%' });
	$('.secE_flexTexts_center_bot2').show();

	//------------------------------원래이미지----------------------------------
	//패드박스가 원상태로 돌아감
	$('#secE_padBox').stop().animate({'width' : '100%' , 'opacity' : '0'});
	$('#secE_padBox').hide();

	//배경이미지가 사라짐
	$('.secE_slideImg').hide();

	//핸드폰크기가 커짐
	$('.secE_flex_imgBox').css({'width' : '270px' ,'top' : '50%' , 'left' : '50%' , 'transform' : 'translate(-50%,-50%)'});

	//안쪽 전체 border라인 핸드폰크기에 맞춰짐
	$('.secE_flex_borderLine').stop().animate({'width' : '30%','height' : '80%' ,'left' : '20%'});

	//위아래 라인의 위치가 알맞게 변함
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','90%');
	$('.secE_verLine').stop().animate({'height' : '10%' , 'left' : '20%'});

	//좌우 라인 복원
	$('.secE_flexBox_right').css('left' ,'95%');
	$('.secE_flexBox_right').stop().animate({'width' : '5%'});
	$('.secE_flexBox_left').css('left' ,'0%');
	$('.secE_flexBox_left').stop().animate({'width' : '5%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '37%' ,'left' : '50%' ,'text-align' : 'center' ,'transform' : 'translateX(-50%)'});
	$('.secE_flex_topicTop').css({'font-size' : '1.4rem','line-height' : '40px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '1rem' ,'line-height' : '20px'});
	$('.secE_flex_note').css({'display' :'none'});

	$('.secE_flex_ctnBox_bot').hide();

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-start' , 'height' : '10%' , 'width' : '90%'});

	$('.secE_thinTexts1').text('615PX');
	$('.secE_flexTexts_left').css({'left':'-75%','top':'45%','transform' :'rotate(270deg) translate(0,-45%)'});
	$('.secE_flexTexts_center_bot').hide();
}
function secE_clickEvent4_1750()  {
	//------------------------------두번째이미지----------------------------------
	//모바일 이미지 나옴
	$('.secE_flexBox2').show();
	$('.secE_flexBox2').stop().animate({'opacity' : '1'});


	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox2').css({'width' : '230px'});

	//안쪽 border라인2가 크기가 작아지고 왼쪽으로 옮겨감
	$('.secE_flex_borderLine2').stop().animate({'width' : '20%', 'height' : '65%', 'left' : '15%'});

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot2').css('top','82.5%');
	$('.secE_verLine2').stop().animate({'height' : '17.5%', 'left' : '15%'});

	//좌우 라인도 크기에 맞게됨(좌측 텍스트는 삭제)
	$('.secE_flexBox_left2').css({'font-size' : '0rem'});
	$('.secE_flexBox_left2').stop().animate({'width' : '5%'  ,'left' : '2.5%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_topicTop2').css({'font-size' : '1rem','line-height' : '30px'});
	$('.secE_flex_subTextsTop2').css({'font-size' : '.7rem' ,'line-height' : '20px'});

	$('.secE_flex_topicBot2').css({'font-size' : '.7rem','line-height' : '25px'});
	$('.secE_flex_subTextsBot2').css({'font-size' : '.5rem' ,'line-height' : '15px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center2').css({'justify-content' : 'flex-start' , 'height' : '17.5%' , 'width' : '90%'});

	$('.secE_thinTexts2').text('465PX');
	$('.secE_flexTexts_center_bot2').hide();


	//------------------------------원래이미지----------------------------------
	//먼저 패드박스가 나오고 크기가 작아지며 오른쪽으로 옮겨감
	$('#secE_padBox').show();
	$('#secE_padBox').stop().animate({'width' : '55%' , 'opacity' : '1','left' : '65%' });

	//배경이미지도 작아지고 왼쪽으로 옮겨감
	$('.secE_slideImg').show();
	$('.secE_slideImg').css({'position' : 'absolute' , 'top' : '50%', 'transform' : 'translate(-50%,35%)'})
	$('.secE_slideImg').stop().animate({'width' : '53%','left' : '65%'});


	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox').css({'width' : '120px' ,'top' : '15%' , 'left' : '20%' , 'transform' : 'translate(0,0)'});


	//안쪽 전체 border라인이 작아짐
	$('.secE_flex_borderLine').stop().animate({'width' : '60%','height' : '70%','left' : '65%' });

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','85%');
	$('.secE_verLine').stop().animate({'height' : '15%', 'left' : '65%'});

	//좌우 라인도 크기에 맞게됨
	$('.secE_flexBox_right').css('left' ,'95%');
	$('.secE_flexBox_right').stop().animate({'width' : '5%'});
	$('.secE_flexBox_left').css('left' ,'25%');
	$('.secE_flexBox_left').stop().animate({'width' : '10%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '17%' ,'left' : '55%' ,'text-align' : 'right' ,'transform' : 'translateX(0%)'});
	$('.secE_flex_topicTop').css({'font-size' : '1.5rem','line-height' : '40px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '.8rem' ,'line-height' : '25px'});
	$('.secE_flex_note').css({'left' : '55%' , 'top' : '56%'});

	$('.secE_flex_ctnBox_bot').show();
	$('.secE_flex_topicBot').css({'font-size' : '1.5rem','line-height' : '35px'});
	$('.secE_flex_subTextsBot').css({'font-size' : '.8rem' ,'line-height' : '25px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-end' , 'height' : '15%' , 'width' : '90%'});

	$('.secE_thinTexts1').text('1080PX');
	$('.secE_flexTexts_left').css({'left':'-60%','top':'55%','transform' :'rotate(90deg) translate(0,-45%)'});
	$('.secE_flexTexts_center_bot').hide();
}



//secE 반응형 클릭이벤트 1251 - 1500
function secE_clickEvent1_1500() {
	//모바일 이미지 사라짐
			$('.secE_flexBox2').stop().animate({'opacity' : '0'});
			$('.secE_flexBox2').hide();
			
			//패드박스가 원상태로 돌아감
			$('#secE_padBox').stop().animate({'width' : '100%' , 'opacity' : '0','left' : '50%'});
			$('#secE_padBox').hide();
			
			//배경이미지도 크기가 커짐
			$('.secE_slideImg').show();
			$('.secE_slideImg').stop().animate({'width' : '100%','left' : '50%'});
			$('.secE_slideImg').css({'position' : 'static' , 'top' : '0%' ,'left' : '0%', 'transform' : 'translate(0%,0%)'})
			
			//핸드폰도 크기 원상복귀
			$('.secE_flex_imgBox').css({'width' : '110px' ,'top' : '8%' ,'left' : '15%' , 'transform' : 'translate(0,0)'});
			
			//안쪽 전체 border라인 복원
			$('.secE_flex_borderLine').stop().animate({'width' : '90%','height' : '80%','left' : '50%'	});
			
			
			//위아래 라인 복원
			$('.secE_verLine_bot').css('top','90%');
			$('.secE_verLine').stop().animate({'height' : '10%' , 'left' : '50%' });
			
			//좌우 라인 복원
			$('.secE_flexBox_right').css('left' ,'95%');
			$('.secE_flexBox_right').stop().animate({'width' : '5%'});
			$('.secE_flexBox_left').css('left' ,'0%');
			$('.secE_flexBox_left').stop().animate({'width' : '5%'});
			
			//안쪽 캡션 복원
			$('.secE_flex_ctnBox_top').css({'top' : '20%' ,'left' : '70%','text-align' : 'right' ,'transform' : 'translateX(0%)'});
			$('.secE_flex_topicTop').css({'font-size' : '1.5rem','line-height' : '40px'});
			$('.secE_flex_subTextsTop').css({'font-size' : '.9rem' ,'line-height' : '25px'});
			$('.secE_flex_note').css({'left' : '72%','top' : '56%', 'font-size' : '.7rem' });
			
			$('.secE_flex_ctnBox_bot').show();
			$('.secE_flex_topicBot').css({'font-size' : '1.5rem','line-height' : '40px'});
			$('.secE_flex_subTextsBot').css({'font-size' : '.8rem' ,'line-height' : '25px'});
			
			//위아래 좌우 주황글씨도 변함
			$('.secE_flexTexts_center').css({'justify-content' : 'flex-end' , 'height' : '10%' , 'width' : '90%'});
			
			$('.secE_thinTexts1').text('1920PX');
			$('.secE_flexTexts_left').css({'left':'-100%','top':'40%' ,'transform' :'rotate(270deg) translate(0,-45%)'});
			$('.secE_flexTexts_center_bot').show();
			$('.secE_flexTexts_center_bot').css({'top' : '79%' ,'left' :'78%' ,'transform' : 'rotate(0deg)'});
			$('.secE_flexTexts_center_bot').text('ALIGN GRID SYSTEM');
};
function secE_clickEvent2_1500()  {
	//모바일 이미지 사라짐
	$('.secE_flexBox2').stop().animate({'opacity' : '0'});
	$('.secE_flexBox2').hide();

	//먼저 패드박스가 나오고 크기가 작아짐
	$('#secE_padBox').show();
	$('#secE_padBox').stop().animate({'width' : '55%' , 'opacity' : '1','left' : '50%'});

	//배경이미지도 크기가 작아짐
	$('.secE_slideImg').show();
	$('.secE_slideImg').css({'position' : 'absolute' , 'top' : '50%', 'transform' : 'translate(-50%,35%)'})
	$('.secE_slideImg').stop().animate({'width' : '53%' ,'left' : '50%'});

	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox').css({'width' : '90px' ,'top' : '15%' , 'left' : '15%' , 'transform' : 'translate(0,0)'});


	//안쪽 전체 border라인이 작아짐
	$('.secE_flex_borderLine').stop().animate({'width' : '60%','height' : '70%','left' : '50%' });

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','85%');
	$('.secE_verLine').stop().animate({'height' : '15%', 'left' : '50%'});

	//좌우 라인도 크기에 맞게 길어짐
	$('.secE_flexBox_right').css('left' ,'80%');
	$('.secE_flexBox_right').stop().animate({'width' : '20%'});
	$('.secE_flexBox_left').css('left' ,'0%');
	$('.secE_flexBox_left').stop().animate({'width' : '20%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '17%' ,'left' : '50%' ,'text-align' : 'right' ,'transform' : 'translateX(0%)'});
	$('.secE_flex_topicTop').css({'font-size' : '1.2rem','line-height' : '35px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '.8rem' ,'line-height' : '25px'});
    $('.secE_flex_note').show();
	$('.secE_flex_note').css({'left' : '52%' , 'top' : '56%','font-size' : '.5rem'});

	$('.secE_flex_ctnBox_bot').show();
	$('.secE_flex_topicBot').css({'font-size' : '1.2rem','line-height' : '30px'});
	$('.secE_flex_subTextsBot').css({'font-size' : '.6rem' ,'line-height' : '20px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-start' , 'height' : '15%' , 'width' : '60%'});

	$('.secE_thinTexts1').text('1080PX');
	$('.secE_flexTexts_left').css({'left':'45%','top':'30%' , 'transform' :'rotate(270deg) translate(0,-40%)'});
	$('.secE_flexTexts_center_bot').show();
	$('.secE_flexTexts_center_bot').css({'top' : '20%' ,'left' :'77%' ,'transform' : 'rotate(90deg)'});
	$('.secE_flexTexts_center_bot').text('ADAPTIVE GRID');	
}
function secE_clickEvent3_1500()  {
	//------------------------------두번째이미지----------------------------------
	//모바일 이미지 나옴
	$('.secE_flexBox2').show();
	$('.secE_flexBox2').stop().animate({'opacity' : '1'});


	//원상복귀시켜야함

	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox2').css({'width' : '230px'});

	//안쪽 border라인2가 크기가 작아지고 왼쪽으로 옮겨감
	$('.secE_flex_borderLine2').stop().animate({'width' : '30%', 'height' : '80%', 'left' : '80%'});

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot2').css('top','90%');
	$('.secE_verLine2').stop().animate({'height' : '10%', 'left' : '80%'});

	//좌우 라인도 크기에 맞게됨(텍스트도 복구)
	$('.secE_flexBox_left2').css({'font-size' : '1.1rem'});
	$('.secE_flexBox_left2').stop().animate({'width' : '30%'  ,'left' : '50%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_topicTop2').css({'font-size' : '1.2rem','line-height' : '30px'});
	$('.secE_flex_subTextsTop2').css({'font-size' : '.8rem' ,'line-height' : '22px'});

	$('.secE_flex_topicBot2').css({'font-size' : '.9rem','line-height' : '30px'});
	$('.secE_flex_subTextsBot2').css({'font-size' : '.6rem' ,'line-height' : '18px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center2').css({'justify-content' : 'flex-end' , 'height' : '10%' , 'width' : '90%'});

	$('.secE_thinTexts2').text('475PX');
	$('.secE_flexTexts_left2').css({'left':'-45%','top':'45%' });
	$('.secE_flexTexts_center_bot2').show();
	$('.secE_flexTexts_center_bot2').css({'left' : '95%', 'top' : '77%'});
    $('.secE_flex_note2').show();

	//------------------------------원래이미지----------------------------------
	//패드박스가 원상태로 돌아감
	$('#secE_padBox').stop().animate({'width' : '100%' , 'opacity' : '0'});
	$('#secE_padBox').hide();

	//배경이미지가 사라짐
	$('.secE_slideImg').hide();

	//핸드폰크기가 커짐
	$('.secE_flex_imgBox').css({'width' : '230px' ,'top' : '50%' , 'left' : '50%' , 'transform' : 'translate(-50%,-50%)'});

	//안쪽 전체 border라인 핸드폰크기에 맞춰짐
	$('.secE_flex_borderLine').stop().animate({'width' : '30%','height' : '80%' ,'left' : '20%'});

	//위아래 라인의 위치가 알맞게 변함
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','90%');
	$('.secE_verLine').stop().animate({'height' : '10%' , 'left' : '20%'});

	//좌우 라인 복원
	$('.secE_flexBox_right').css('left' ,'95%');
	$('.secE_flexBox_right').stop().animate({'width' : '5%'});
	$('.secE_flexBox_left').css('left' ,'0%');
	$('.secE_flexBox_left').stop().animate({'width' : '5%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '27%' ,'left' : '50%' ,'text-align' : 'center' ,'transform' : 'translateX(-50%)'});
	$('.secE_flex_topicTop').css({'font-size' : '1.1rem','line-height' : '30px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '.7rem' ,'line-height' : '18px'});
	$('.secE_flex_note').css({'display' :'none'});

	$('.secE_flex_ctnBox_bot').hide();

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-start' , 'height' : '10%' , 'width' : '90%'});

	$('.secE_thinTexts1').text('615PX');
	$('.secE_flexTexts_left').css({'left':'-100%','top':'40%','transform' :'rotate(270deg) translate(0,-45%)'});
	$('.secE_flexTexts_center_bot').hide();
}
function secE_clickEvent4_1500()  {
	//------------------------------두번째이미지----------------------------------
	//모바일 이미지 나옴
	$('.secE_flexBox2').show();
	$('.secE_flexBox2').stop().animate({'opacity' : '1'});


	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox2').css({'width' : '180px'});

	//안쪽 border라인2가 크기가 작아지고 왼쪽으로 옮겨감
	$('.secE_flex_borderLine2').stop().animate({'width' : '20%', 'height' : '65%', 'left' : '15%'});

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot2').css('top','82.5%');
	$('.secE_verLine2').stop().animate({'height' : '17.5%', 'left' : '15%'});

	//좌우 라인도 크기에 맞게됨(좌측 텍스트는 삭제)
	$('.secE_flexBox_left2').css({'font-size' : '0rem'});
	$('.secE_flexBox_left2').stop().animate({'width' : '5%'  ,'left' : '2.5%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_topicTop2').css({'font-size' : '.9rem','line-height' : '25px'});
	$('.secE_flex_subTextsTop2').css({'font-size' : '.5rem' ,'line-height' : '17px'});

	$('.secE_flex_topicBot2').css({'font-size' : '.7rem','line-height' : '18px', 'text-align' : 'center'});
	$('.secE_flex_subTextsBot2').css({'font-size' : '.02rem' ,'line-height' : '10px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center2').css({'justify-content' : 'flex-start' , 'height' : '17.5%' , 'width' : '90%'});

	$('.secE_thinTexts2').text('465PX');
	$('.secE_flexTexts_center_bot2').hide();
    $('.secE_flex_note2').hide();


	//------------------------------원래이미지----------------------------------
	//먼저 패드박스가 나오고 크기가 작아지며 오른쪽으로 옮겨감
	$('#secE_padBox').show();
	$('#secE_padBox').stop().animate({'width' : '55%' , 'opacity' : '1','left' : '65%' });

	//배경이미지도 작아지고 왼쪽으로 옮겨감
	$('.secE_slideImg').show();
	$('.secE_slideImg').css({'position' : 'absolute' , 'top' : '50%', 'transform' : 'translate(-50%,35%)'})
	$('.secE_slideImg').stop().animate({'width' : '53%','left' : '65%'});


	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox').css({'width' : '80px' ,'top' : '15%' , 'left' : '20%' , 'transform' : 'translate(0,0)'});


	//안쪽 전체 border라인이 작아짐
	$('.secE_flex_borderLine').stop().animate({'width' : '60%','height' : '70%','left' : '65%' });

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','85%');
	$('.secE_verLine').stop().animate({'height' : '15%', 'left' : '65%'});

	//좌우 라인도 크기에 맞게됨
	$('.secE_flexBox_right').css('left' ,'95%');
	$('.secE_flexBox_right').stop().animate({'width' : '5%'});
	$('.secE_flexBox_left').css('left' ,'25%');
	$('.secE_flexBox_left').stop().animate({'width' : '10%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '17%' ,'left' : '55%' ,'text-align' : 'right' ,'transform' : 'translateX(0%)'});
	$('.secE_flex_topicTop').css({'font-size' : '1rem','line-height' : '30px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '.7rem' ,'line-height' : '20px'});
	$('.secE_flex_note').css({'left' : '52%' , 'top' : '56%','font-size' : '.3rem'});

	$('.secE_flex_ctnBox_bot').show();
	$('.secE_flex_topicBot').css({'font-size' : '1rem','line-height' : '25px'});
	$('.secE_flex_subTextsBot').css({'font-size' : '.5rem' ,'line-height' : '18px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-end' , 'height' : '15%' , 'width' : '90%'});

	$('.secE_thinTexts1').text('1080PX');
	$('.secE_flexTexts_left').css({'left':'-95%','top':'55%','transform' :'rotate(90deg) translate(0,-45%)'});
	$('.secE_flexTexts_center_bot').hide();
}



//secE 반응형 클릭이벤트 1081 -1250
function secE_clickEvent1_1250() {
	//모바일 이미지 사라짐
			$('.secE_flexBox2').stop().animate({'opacity' : '0'});
			$('.secE_flexBox2').hide();
			
			//패드박스가 원상태로 돌아감
			$('#secE_padBox').stop().animate({'width' : '100%' , 'opacity' : '0','left' : '50%'});
			$('#secE_padBox').hide();
			
			//배경이미지도 크기가 커짐
			$('.secE_slideImg').show();
			$('.secE_slideImg').stop().animate({'width' : '100%','left' : '50%'});
			$('.secE_slideImg').css({'position' : 'static' , 'top' : '0%' ,'left' : '0%', 'transform' : 'translate(0%,0%)'})
			
			//핸드폰도 크기 원상복귀
			$('.secE_flex_imgBox').css({'width' : '95px' ,'top' : '8%' ,'left' : '15%' , 'transform' : 'translate(0,0)'});
			
			//안쪽 전체 border라인 복원
			$('.secE_flex_borderLine').stop().animate({'width' : '90%','height' : '80%','left' : '50%'	});
			
			
			//위아래 라인 복원
			$('.secE_verLine_bot').css('top','90%');
			$('.secE_verLine').stop().animate({'height' : '10%' , 'left' : '50%' });
			
			//좌우 라인 복원
			$('.secE_flexBox_right').css('left' ,'95%');
			$('.secE_flexBox_right').stop().animate({'width' : '5%'});
			$('.secE_flexBox_left').css('left' ,'0%');
			$('.secE_flexBox_left').stop().animate({'width' : '5%'});
			
			//안쪽 캡션 복원
			$('.secE_flex_ctnBox_top').css({'top' : '20%' ,'left' : '70%','text-align' : 'right' ,'transform' : 'translateX(0%)'});
			$('.secE_flex_topicTop').css({'font-size' : '1.5rem','line-height' : '40px'});
			$('.secE_flex_subTextsTop').css({'font-size' : '.8rem' ,'line-height' : '25px'});
			$('.secE_flex_note').css({'left' : '69%','top' : '56%', 'font-size' : '.7rem' });
			
			$('.secE_flex_ctnBox_bot').show();
			$('.secE_flex_topicBot').css({'font-size' : '1.5rem','line-height' : '40px'});
			$('.secE_flex_subTextsBot').css({'font-size' : '.8rem' ,'line-height' : '25px'});
			
			//위아래 좌우 주황글씨도 변함
			$('.secE_flexTexts_center').css({'justify-content' : 'flex-end' , 'height' : '10%' , 'width' : '90%'});
			
			$('.secE_thinTexts1').text('1920PX');
			$('.secE_flexTexts_left').css({'left':'-140%','top':'35%' ,'transform' :'rotate(270deg) translate(0,-45%)'});
			$('.secE_flexTexts_center_bot').show();
			$('.secE_flexTexts_center_bot').css({'top' : '76%' ,'left' :'78%' ,'transform' : 'rotate(0deg)'});
			$('.secE_flexTexts_center_bot').text('ALIGN GRID SYSTEM');
};
function secE_clickEvent2_1250()  {
	//모바일 이미지 사라짐
	$('.secE_flexBox2').stop().animate({'opacity' : '0'});
	$('.secE_flexBox2').hide();

	//먼저 패드박스가 나오고 크기가 작아짐
	$('#secE_padBox').show();
	$('#secE_padBox').stop().animate({'width' : '55%' , 'opacity' : '1','left' : '50%'});

	//배경이미지도 크기가 작아짐
	$('.secE_slideImg').show();
	$('.secE_slideImg').css({'position' : 'absolute' , 'top' : '50%', 'transform' : 'translate(-50%,35%)'})
	$('.secE_slideImg').stop().animate({'width' : '53%' ,'left' : '50%'});

	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox').css({'width' : '80px' ,'top' : '15%' , 'left' : '15%' , 'transform' : 'translate(0,0)'});


	//안쪽 전체 border라인이 작아짐
	$('.secE_flex_borderLine').stop().animate({'width' : '60%','height' : '70%','left' : '50%' });

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','85%');
	$('.secE_verLine').stop().animate({'height' : '15%', 'left' : '50%'});

	//좌우 라인도 크기에 맞게 길어짐
	$('.secE_flexBox_right').css('left' ,'80%');
	$('.secE_flexBox_right').stop().animate({'width' : '20%'});
	$('.secE_flexBox_left').css('left' ,'0%');
	$('.secE_flexBox_left').stop().animate({'width' : '20%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '17%' ,'left' : '55%' ,'text-align' : 'right' ,'transform' : 'translateX(0%)'});
	$('.secE_flex_topicTop').css({'font-size' : '1rem','line-height' : '25px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '.4rem' ,'line-height' : '16px'});
	$('.secE_flex_note').show();
	$('.secE_flex_note').css({'left' : '50%' , 'top' : '56%','font-size' : '.1em'});

	$('.secE_flex_ctnBox_bot').show();
	$('.secE_flex_topicBot').css({'font-size' : '1rem','line-height' : '25px'});
	$('.secE_flex_subTextsBot').css({'font-size' : '.4rem' ,'line-height' : '16px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-start' , 'height' : '15%' , 'width' : '60%'});

	$('.secE_thinTexts1').text('1080PX');
	$('.secE_flexTexts_left').css({'left':'40%','top':'25%' , 'transform' :'rotate(270deg) translate(0,-40%)'});
	$('.secE_flexTexts_center_bot').show();
	$('.secE_flexTexts_center_bot').css({'top' : '22%' ,'left' :'77%' ,'transform' : 'rotate(90deg)'});
	$('.secE_flexTexts_center_bot').text('ADAPTIVE GRID');	
}
function secE_clickEvent3_1250()  {
	//------------------------------두번째이미지----------------------------------
	//모바일 이미지 나옴
	$('.secE_flexBox2').show();
	$('.secE_flexBox2').stop().animate({'opacity' : '1'});


	//원상복귀시켜야함

	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox2').css({'width' : '200px'});

	//안쪽 border라인2가 크기가 작아지고 왼쪽으로 옮겨감
	$('.secE_flex_borderLine2').stop().animate({'width' : '30%', 'height' : '80%', 'left' : '80%'});

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot2').css('top','90%');
	$('.secE_verLine2').stop().animate({'height' : '10%', 'left' : '80%'});

	//좌우 라인도 크기에 맞게됨(텍스트도 복구)
	$('.secE_flexBox_left2').css({'font-size' : '1.1rem'});
	$('.secE_flexBox_left2').stop().animate({'width' : '30%'  ,'left' : '50%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_topicTop2').css({'font-size' : '1.2rem','line-height' : '30px'});
	$('.secE_flex_subTextsTop2').css({'font-size' : '.6rem' ,'line-height' : '18px'});

	$('.secE_flex_topicBot2').css({'font-size' : '.7rem','line-height' : '23px'});
	$('.secE_flex_subTextsBot2').show();
	$('.secE_flex_subTextsBot2').css({'font-size' : '.3rem' ,'line-height' : '15px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center2').css({'justify-content' : 'flex-end' , 'height' : '10%' , 'width' : '90%'});

	$('.secE_thinTexts2').text('475PX');
	$('.secE_flexTexts_left2').css({'left':'-45%','top':'45%' });
	$('.secE_flexTexts_center_bot2').show();
	$('.secE_flexTexts_center_bot2').css({'left' : '95%', 'top' : '77%'});
    $('.secE_flex_note2').show();

	//------------------------------원래이미지----------------------------------
	//패드박스가 원상태로 돌아감
	$('#secE_padBox').stop().animate({'width' : '100%' , 'opacity' : '0'});
	$('#secE_padBox').hide();

	//배경이미지가 사라짐
	$('.secE_slideImg').hide();

	//핸드폰크기가 커짐
	$('.secE_flex_imgBox').css({'width' : '200px' ,'top' : '50%' , 'left' : '50%' , 'transform' : 'translate(-50%,-50%)'});

	//안쪽 전체 border라인 핸드폰크기에 맞춰짐
	$('.secE_flex_borderLine').stop().animate({'width' : '30%','height' : '80%' ,'left' : '20%'});

	//위아래 라인의 위치가 알맞게 변함
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','90%');
	$('.secE_verLine').stop().animate({'height' : '10%' , 'left' : '20%'});

	//좌우 라인 복원
	$('.secE_flexBox_right').css('left' ,'95%');
	$('.secE_flexBox_right').stop().animate({'width' : '5%'});
	$('.secE_flexBox_left').css('left' ,'0%');
	$('.secE_flexBox_left').stop().animate({'width' : '5%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '27%' ,'left' : '50%' ,'text-align' : 'center' ,'transform' : 'translateX(-50%)'});
	$('.secE_flex_topicTop').css({'font-size' : '1.1rem','line-height' : '30px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '.7rem' ,'line-height' : '18px'});
	$('.secE_flex_note').css({'display' :'none'});

	$('.secE_flex_ctnBox_bot').hide();

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-start' , 'height' : '10%' , 'width' : '90%'});

	$('.secE_thinTexts1').text('615PX');
	$('.secE_flexTexts_left').css({'left':'-140%','top':'35%','transform' :'rotate(270deg) translate(0,-45%)'});
	$('.secE_flexTexts_center_bot').hide();
}
function secE_clickEvent4_1250()  {
	//------------------------------두번째이미지----------------------------------
	//모바일 이미지 나옴
	$('.secE_flexBox2').show();
	$('.secE_flexBox2').stop().animate({'opacity' : '1'});


	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox2').css({'width' : '160px'});

	//안쪽 border라인2가 크기가 작아지고 왼쪽으로 옮겨감
	$('.secE_flex_borderLine2').stop().animate({'width' : '20%', 'height' : '65%', 'left' : '15%'});

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot2').css('top','82.5%');
	$('.secE_verLine2').stop().animate({'height' : '17.5%', 'left' : '15%'});

	//좌우 라인도 크기에 맞게됨(좌측 텍스트는 삭제)
	$('.secE_flexBox_left2').css({'font-size' : '0rem'});
	$('.secE_flexBox_left2').stop().animate({'width' : '5%'  ,'left' : '2.5%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_topicTop2').css({'font-size' : '1rem','line-height' : '25px'});
	$('.secE_flex_subTextsTop2').css({'font-size' : '.5rem' ,'line-height' : '17px'});

	$('.secE_flex_topicBot2').css({'font-size' : '.7rem','line-height' : '18px', 'text-align' : 'center'});
	$('.secE_flex_subTextsBot2').hide();

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center2').css({'justify-content' : 'flex-start' , 'height' : '17.5%' , 'width' : '90%'});

	$('.secE_thinTexts2').text('465PX');
	$('.secE_flexTexts_center_bot2').hide();
    $('.secE_flex_note2').hide();


	//------------------------------원래이미지----------------------------------
	//먼저 패드박스가 나오고 크기가 작아지며 오른쪽으로 옮겨감
	$('#secE_padBox').show();
	$('#secE_padBox').stop().animate({'width' : '55%' , 'opacity' : '1','left' : '65%' });

	//배경이미지도 작아지고 왼쪽으로 옮겨감
	$('.secE_slideImg').show();
	$('.secE_slideImg').css({'position' : 'absolute' , 'top' : '50%', 'transform' : 'translate(-50%,35%)'})
	$('.secE_slideImg').stop().animate({'width' : '53%','left' : '65%'});


	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox').css({'width' : '80px' ,'top' : '15%' , 'left' : '20%' , 'transform' : 'translate(0,0)'});


	//안쪽 전체 border라인이 작아짐
	$('.secE_flex_borderLine').stop().animate({'width' : '60%','height' : '70%','left' : '65%' });

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','85%');
	$('.secE_verLine').stop().animate({'height' : '15%', 'left' : '65%'});

	//좌우 라인도 크기에 맞게됨
	$('.secE_flexBox_right').css('left' ,'95%');
	$('.secE_flexBox_right').stop().animate({'width' : '5%'});
	$('.secE_flexBox_left').css('left' ,'25%');
	$('.secE_flexBox_left').stop().animate({'width' : '10%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '17%' ,'left' : '55%' ,'text-align' : 'right' ,'transform' : 'translateX(0%)'});
	$('.secE_flex_topicTop').css({'font-size' : '1rem','line-height' : '30px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '.7rem' ,'line-height' : '20px'});
	$('.secE_flex_note').css({'left' : '52%' , 'top' : '56%','font-size' : '.3rem'});

	$('.secE_flex_ctnBox_bot').show();
	$('.secE_flex_topicBot').css({'font-size' : '1rem','line-height' : '25px'});
	$('.secE_flex_subTextsBot').css({'font-size' : '.3rem' ,'line-height' : '18px'});

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-end' , 'height' : '15%' , 'width' : '90%'});

	$('.secE_thinTexts1').text('1080PX');
	$('.secE_flexTexts_left').css({'left':'-110%','top':'55%','transform' :'rotate(90deg) translate(0,-45%)'});
	$('.secE_flexTexts_center_bot').hide();
}


//secE 반응형 클릭이벤트 766 -900
function secE_clickEvent1_900() {
	//모바일 이미지 사라짐
			$('.secE_flexBox2').stop().animate({'opacity' : '0'});
			$('.secE_flexBox2').hide();
			
			//패드박스가 원상태로 돌아감
			$('#secE_padBox').stop().animate({'width' : '100%' , 'opacity' : '0','left' : '50%'});
			$('#secE_padBox').hide();
			
			//배경이미지도 크기가 커짐
			$('.secE_slideImg').show();
			$('.secE_slideImg').stop().animate({'width' : '100%','left' : '50%'});
			$('.secE_slideImg').css({'position' : 'static' , 'top' : '0%' ,'left' : '0%', 'transform' : 'translate(0%,0%)'})
			
			//핸드폰도 크기 원상복귀
			$('.secE_flex_imgBox').css({'width' : '87px' ,'top' : '8%' ,'left' : '15%' , 'transform' : 'translate(0,0)'});
			
			//안쪽 전체 border라인 복원
			$('.secE_flex_borderLine').stop().animate({'width' : '90%','height' : '80%','left' : '50%'	});
			
			
			//위아래 라인 복원
			$('.secE_verLine_bot').css('top','90%');
			$('.secE_verLine').stop().animate({'height' : '10%' , 'left' : '50%' });
			
			//좌우 라인 복원
			$('.secE_flexBox_right').css('left' ,'95%');
			$('.secE_flexBox_right').stop().animate({'width' : '5%'});
			$('.secE_flexBox_left').css('left' ,'0%');
			$('.secE_flexBox_left').stop().animate({'width' : '5%'});
			
			//안쪽 캡션 복원
			$('.secE_flex_ctnBox_top').css({'top' : '20%' ,'left' : '70%','text-align' : 'right' ,'transform' : 'translateX(0%)'});
			$('.secE_flex_topicTop').css({'font-size' : '1.2rem','line-height' : '40px'});
			$('.secE_flex_subTextsTop').css({'font-size' : '.6rem' ,'line-height' : '17px'});
			$('.secE_flex_note').css({'left' : '69%','top' : '56%', 'font-size' : '.7rem' });
			$('.secE_flex_note').hide();
    
    
			$('.secE_flex_ctnBox_bot').show();
			$('.secE_flex_topicBot').css({'font-size' : '1.2rem','line-height' : '40px'});
			$('.secE_flex_subTextsBot').css({'font-size' : '.6rem' ,'line-height' : '17px'});
            $('.secE_flex_rwd').show();
			
			//위아래 좌우 주황글씨도 변함
			$('.secE_flexTexts_center').css({'justify-content' : 'flex-end' , 'height' : '10%' , 'width' : '90%'});
			
			$('.secE_thinTexts1').text('1920PX');
			$('.secE_flexTexts_left').css({'left':'-180%','top':'25%' ,'transform' :'rotate(270deg) translate(0,-45%)'});
			$('.secE_flexTexts_center_bot').show();
			$('.secE_flexTexts_center_bot').css({'top' : '79%' ,'left' :'81%' ,'transform' : 'rotate(0deg)'});
			$('.secE_flexTexts_center_bot').text('ALIGN GRID SYSTEM');
};
function secE_clickEvent2_900()  {
	//모바일 이미지 사라짐
	$('.secE_flexBox2').stop().animate({'opacity' : '0'});
	$('.secE_flexBox2').hide();

	//먼저 패드박스가 나오고 크기가 작아짐
	$('#secE_padBox').show();
	$('#secE_padBox').stop().animate({'width' : '55%' , 'opacity' : '1','left' : '50%'});

	//배경이미지도 크기가 작아짐
	$('.secE_slideImg').show();
	$('.secE_slideImg').css({'position' : 'absolute' , 'top' : '50%', 'transform' : 'translate(-50%,35%)'})
	$('.secE_slideImg').stop().animate({'width' : '53%' ,'left' : '50%'});

	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox').css({'width' : '70px' ,'top' : '12%' , 'left' : '15%' , 'transform' : 'translate(0,0)'});


	//안쪽 전체 border라인이 작아짐
	$('.secE_flex_borderLine').stop().animate({'width' : '60%','height' : '70%','left' : '50%' });

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','85%');
	$('.secE_verLine').stop().animate({'height' : '15%', 'left' : '50%'});

	//좌우 라인도 크기에 맞게 길어짐
	$('.secE_flexBox_right').css('left' ,'80%');
	$('.secE_flexBox_right').stop().animate({'width' : '20%'});
	$('.secE_flexBox_left').css('left' ,'0%');
	$('.secE_flexBox_left').stop().animate({'width' : '20%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '17%' ,'left' : '55%' ,'text-align' : 'right' ,'transform' : 'translateX(0%)'});
	$('.secE_flex_topicTop').css({'font-size' : '.9rem','line-height' : '20px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '.1rem' ,'line-height' : '15px'});
	$('.secE_flex_note').hide();

	$('.secE_flex_ctnBox_bot').show();
	$('.secE_flex_topicBot').css({'font-size' : '.8rem','line-height' : '20px'});
	$('.secE_flex_subTextsBot').css({'font-size' : '.1rem' ,'line-height' : '10px'});
    $('.secE_flex_rwd').show();

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-start' , 'height' : '15%' , 'width' : '60%'});

	$('.secE_thinTexts1').text('1080PX');
	$('.secE_flexTexts_left').css({'left':'28%','top':'20%' , 'transform' :'rotate(270deg) translate(0,-40%)'});
	$('.secE_flexTexts_center_bot').show();
	$('.secE_flexTexts_center_bot').css({'top' : '22%' ,'left' :'78%' ,'transform' : 'rotate(90deg)'});
	$('.secE_flexTexts_center_bot').text('ADAPTIVE GRID');	
}
function secE_clickEvent3_900()  {
	//------------------------------두번째이미지----------------------------------
	//모바일 이미지 나옴
	$('.secE_flexBox2').show();
	$('.secE_flexBox2').stop().animate({'opacity' : '1'});


	//원상복귀시켜야함

	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox2').css({'width' : '170px'});

	//안쪽 border라인2가 크기가 작아지고 왼쪽으로 옮겨감
	$('.secE_flex_borderLine2').stop().animate({'width' : '30%', 'height' : '80%', 'left' : '80%'});

	//위아래 라인이 크기에맞게 길어짐
	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot2').css('top','90%');
	$('.secE_verLine2').stop().animate({'height' : '10%', 'left' : '80%'});

	//좌우 라인도 크기에 맞게됨(텍스트도 복구)
	$('.secE_flexBox_left2').css({'font-size' : '1.1rem'});
	$('.secE_flexBox_left2').stop().animate({'width' : '30%'  ,'left' : '50%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_topicTop2').css({'font-size' : '1.2rem','line-height' : '30px'});
	$('.secE_flex_subTextsTop2').show();
	$('.secE_flex_subTextsTop2').css({'font-size' : '.6rem' ,'line-height' : '18px'});

	$('.secE_flex_topicBot2').css({'font-size' : '.7rem','line-height' : '23px'});
	$('.secE_flex_subTextsBot2').hide();

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center2').css({'justify-content' : 'flex-end' , 'height' : '10%' , 'width' : '90%'});

	$('.secE_thinTexts2').text('475PX');
	$('.secE_flexTexts_left2').css({'left':'-45%','top':'45%' });
	$('.secE_flexTexts_center_bot2').show();
	$('.secE_flexTexts_center_bot2').css({'left' : '95%', 'top' : '77%'});
    $('.secE_flex_note2').hide();

	//------------------------------원래이미지----------------------------------
	//패드박스가 원상태로 돌아감
	$('#secE_padBox').stop().animate({'width' : '100%' , 'opacity' : '0'});
	$('#secE_padBox').hide();

	//배경이미지가 사라짐
	$('.secE_slideImg').hide();

	//핸드폰크기가 커짐
	$('.secE_flex_imgBox').css({'width' : '165px' ,'top' : '50%' , 'left' : '50%' , 'transform' : 'translate(-50%,-50%)'});

	//안쪽 전체 border라인 핸드폰크기에 맞춰짐
	$('.secE_flex_borderLine').stop().animate({'width' : '30%','height' : '80%' ,'left' : '20%'});

	//위아래 라인의 위치가 알맞게 변함
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','90%');
	$('.secE_verLine').stop().animate({'height' : '10%' , 'left' : '20%'});

	//좌우 라인 복원
	$('.secE_flexBox_right').css('left' ,'95%');
	$('.secE_flexBox_right').stop().animate({'width' : '5%'});
	$('.secE_flexBox_left').css('left' ,'0%');
	$('.secE_flexBox_left').stop().animate({'width' : '5%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '27%' ,'left' : '50%' ,'text-align' : 'center' ,'transform' : 'translateX(-50%)'});
	$('.secE_flex_topicTop').css({'font-size' : '1.1rem','line-height' : '30px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '.7rem' ,'line-height' : '18px'});
	$('.secE_flex_note').css({'display' :'none'});

	$('.secE_flex_ctnBox_bot').hide();

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-start' , 'height' : '10%' , 'width' : '90%'});

	$('.secE_thinTexts1').text('615PX');
	$('.secE_flexTexts_left').css({'left':'-180%','top':'28%','transform' :'rotate(270deg) translate(0,-45%)'});
	$('.secE_flexTexts_center_bot').hide();
    
    $('.secE_flexTexts_left2').show();
}
function secE_clickEvent4_900()  {
	//------------------------------두번째이미지----------------------------------
	//모바일 이미지 나옴
	$('.secE_flexBox2').show();
	$('.secE_flexBox2').stop().animate({'opacity' : '1'});


	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox2').css({'width' : '140px'});

	//안쪽 border라인2가 크기가 작아지고 왼쪽으로 옮겨감
	$('.secE_flex_borderLine2').stop().animate({'width' : '20%', 'height' : '65%', 'left' : '15%'});

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot2').css('top','82.5%');
	$('.secE_verLine2').stop().animate({'height' : '17.5%', 'left' : '15%'});

	//좌우 라인도 크기에 맞게됨(좌측 텍스트는 삭제)
	$('.secE_flexBox_left2').css({'font-size' : '0rem'});
	$('.secE_flexBox_left2').stop().animate({'width' : '5%'  ,'left' : '2.5%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_topicTop2').css({'font-size' : '1rem','line-height' : '25px'});
	$('.secE_flex_subTextsTop2').hide();
	$('.secE_flex_subTextsTop2').css({'font-size' : '.5rem' ,'line-height' : '17px'});

	$('.secE_flex_topicBot2').css({'font-size' : '.7rem','line-height' : '18px', 'text-align' : 'center'});
	$('.secE_flex_subTextsBot2').hide();

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center2').css({'justify-content' : 'flex-start' , 'height' : '17.5%' , 'width' : '90%'});

	$('.secE_thinTexts2').text('465PX');
	$('.secE_flexTexts_center_bot2').hide();
    $('.secE_flex_note2').hide();


	//------------------------------원래이미지----------------------------------
	//먼저 패드박스가 나오고 크기가 작아지며 오른쪽으로 옮겨감
	$('#secE_padBox').show();
	$('#secE_padBox').stop().animate({'width' : '55%' , 'opacity' : '1','left' : '65%' });

	//배경이미지도 작아지고 왼쪽으로 옮겨감
	$('.secE_slideImg').show();
	$('.secE_slideImg').css({'position' : 'absolute' , 'top' : '50%', 'transform' : 'translate(-50%,35%)'})
	$('.secE_slideImg').stop().animate({'width' : '53%','left' : '65%'});


	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox').css({'width' : '70px' ,'top' : '15%' , 'left' : '20%' , 'transform' : 'translate(0,0)'});


	//안쪽 전체 border라인이 작아짐
	$('.secE_flex_borderLine').stop().animate({'width' : '60%','height' : '70%','left' : '65%' });

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','85%');
	$('.secE_verLine').stop().animate({'height' : '15%', 'left' : '65%'});

	//좌우 라인도 크기에 맞게됨
	$('.secE_flexBox_right').css('left' ,'95%');
	$('.secE_flexBox_right').stop().animate({'width' : '5%'});
	$('.secE_flexBox_left').css('left' ,'25%');
	$('.secE_flexBox_left').stop().animate({'width' : '10%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '17%' ,'left' : '55%' ,'text-align' : 'right' ,'transform' : 'translateX(0%)'});
	$('.secE_flex_topicTop').css({'font-size' : '.8rem','line-height' : '20px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '.4rem' ,'line-height' : '15px'});
	$('.secE_flex_note').css({'left' : '52%' , 'top' : '56%','font-size' : '.3rem'});

	$('.secE_flex_ctnBox_bot').show();
	$('.secE_flex_topicBot').css({'font-size' : '1rem','line-height' : '25px'});
	$('.secE_flex_subTextsBot').css({'font-size' : '.3rem' ,'line-height' : '18px'});
    $('.secE_flex_rwd').hide();

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-end' , 'height' : '15%' , 'width' : '90%'});

	$('.secE_thinTexts1').text('1080PX');
	$('.secE_flexTexts_left').css({'left':'-134%','top':'70%','transform' :'rotate(90deg) translate(0,-45%)'});
	$('.secE_flexTexts_center_bot').hide();
    $('.secE_flexTexts_left2').hide();
}


//secE 반응형 클릭이벤트 365 -410
function secE_clickEvent1_410() {
	//모바일 이미지 사라짐
			$('.secE_flexBox2').stop().animate({'opacity' : '0'});
			$('.secE_flexBox2').hide();
			
			//패드박스가 원상태로 돌아감
			$('#secE_padBox').stop().animate({'width' : '100%' , 'opacity' : '0','left' : '50%'});
			$('#secE_padBox').hide();
			
    
            //배경이미지 크기조절
            $('.secE_imgBox').css({'top' : '0%'});
    
			//배경이미지도 크기가 커짐
			$('.secE_slideImg').show();
			$('.secE_slideImg').stop().animate({'width' : '100%','left' : '50%'});
			$('.secE_slideImg').css({'position' : 'static' , 'top' : '0%' ,'left' : '0%', 'transform' : 'translate(0%,0%)'})
			
			//핸드폰도 크기 원상복귀
			$('.secE_flex_imgBox').css({'width' : '68px' ,'top' : '8%' ,'left' : '8%' , 'transform' : 'translate(0,0)'});
			
			//안쪽 전체 border라인 복원
			$('.secE_flex_borderLine').stop().animate({'width' : '80%','height' : '80%','left' : '50%'	});
			
			
			//위아래 라인 복원
			$('.secE_verLine_bot').css('top','90%');
			$('.secE_verLine').stop().animate({'height' : '10%' , 'left' : '50%' });
			
			//좌우 라인 복원
			$('.secE_flexBox_right').css('left' ,'90%');
			$('.secE_flexBox_right').stop().animate({'width' : '10%'});
			$('.secE_flexBox_left').css('left' ,'0%');
			$('.secE_flexBox_left').stop().animate({'width' : '10%'});
			
			//안쪽 캡션 복원
			$('.secE_flex_ctnBox_top').css({'top' : '6%' ,'left' : '40%','text-align' : 'right' ,'transform' : 'translateX(0%)' ,'width' : '59%'});
			$('.secE_flex_topicTop').css({'font-size' : '1rem','line-height' : '40px'});
			$('.secE_flex_subTextsTop').css({'font-size' : '.6rem' ,'line-height' : '17px'});
            $('.secE_flex_rwd_phone').show();
			$('.secE_flex_note').css({'left' : '69%','top' : '56%', 'font-size' : '.7rem' });
			$('.secE_flex_note').hide();
    
    
			$('.secE_flex_ctnBox_bot').show();
			$('.secE_flex_ctnBox_bot').css({'left' : '5%', 'top' : '54%' , 'width' : '70%'});
			$('.secE_flex_topicBot').css({'font-size' : '1rem','line-height' : '40px'});
			$('.secE_flex_subTextsBot').show();
			$('.secE_flex_subTextsBot').css({'font-size' : '.6rem' ,'line-height' : '17px'});
            $('.secE_flex_rwd').show();
			
			//위아래 좌우 주황글씨도 변함
			$('.secE_flexTexts_center').css({'justify-content' : 'flex-end' , 'height' : '10%' , 'width' : '78%'});
			
			$('.secE_thinTexts1').text('1920PX');
			$('.secE_flexTexts_left').hide();
			$('.secE_flexTexts_center_bot').show();
			$('.secE_flexTexts_center_bot').css({'top' : '79%' ,'left' :'62%' ,'transform' : 'rotate(0deg)'});
			$('.secE_flexTexts_center_bot').text('ALIGN GRID SYSTEM');
};
function secE_clickEvent2_410()  {
	//모바일 이미지 사라짐
	$('.secE_flexBox2').stop().animate({'opacity' : '0'});
	$('.secE_flexBox2').hide();
    

	//먼저 패드박스가 나오고 크기가 작아짐
	$('#secE_padBox').show();
	$('#secE_padBox').stop().animate({'width' : '75%' , 'opacity' : '1','left' : '50%'});
    
    
    //배경이미지 크기조절
    $('.secE_imgBox').css({'top' : '15%'});

	//배경이미지도 크기가 작아짐
	$('.secE_slideImg').show();
	$('.secE_slideImg').css({'position' : 'absolute' , 'top' : '50%', 'transform' : 'translate(-50%,35%)'})
	$('.secE_slideImg').stop().animate({'width' : '70%' ,'left' : '50%'});

	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox').css({'width' : '55px' ,'top' : '14%' , 'left' : '8%' , 'transform' : 'translate(0,0)'});


	//안쪽 전체 border라인이 작아짐
	$('.secE_flex_borderLine').stop().animate({'width' : '80%','height' : '55%','left' : '50%' });

	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','77.5%');
	$('.secE_verLine').stop().animate({'height' : '22.5%', 'left' : '50%'});

	//좌우 라인도 크기에 맞게 길어짐
	$('.secE_flexBox_right').css('left' ,'90%');
	$('.secE_flexBox_right').stop().animate({'width' : '10%'});
	$('.secE_flexBox_left').css('left' ,'0%');
	$('.secE_flexBox_left').stop().animate({'width' : '10%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '17%' ,'left' : '36%' ,'text-align' : 'right' ,'transform' : 'translateX(0%)','width' : '57.5%'});
	$('.secE_flex_topicTop').css({'font-size' : '.7rem','line-height' : '20px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '.1rem' ,'line-height' : '10px'});
	$('.secE_flex_note').hide();
    $('.secE_flex_rwd_phone').hide();

	$('.secE_flex_ctnBox_bot').show();
	$('.secE_flex_ctnBox_bot').css({'top' : '70%' , 'left' : '10%'});
	$('.secE_flex_topicBot').css({'font-size' : '.8rem','line-height' : '20px'});
	$('.secE_flex_subTextsBot').hide();
    $('.secE_flex_rwd').show();

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-start' , 'height' : '22%' , 'width' : '75%'});

	$('.secE_thinTexts1').text('1080PX');
	$('.secE_flexTexts_left').css({'left':'28%','top':'20%' , 'transform' :'rotate(270deg) translate(0,-40%)'});
	$('.secE_flexTexts_center_bot').hide();
}
function secE_clickEvent3_410()  {
	//------------------------------두번째이미지----------------------------------
	//모바일 이미지 나옴
	$('.secE_flexBox2').show();
	$('.secE_flexBox2').stop().animate({'opacity' : '1'});


	//원상복귀시켜야함

	//핸드폰도 크기가 작아짐
	$('.secE_flex_imgBox2').css({'width' : '130px'});

	//안쪽 border라인2가 크기가 작아지고 왼쪽으로 옮겨감
	$('.secE_flex_borderLine2').stop().animate({'width' : '36%', 'height' : '63%', 'left' : '75%'});

	//위아래 라인이 크기에맞게 길어짐
	//위아래 라인이 크기에맞게 길어짐
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot2').css('top','81.5%');
	$('.secE_verLine2').stop().animate({'height' : '18.5%', 'left' : '75%'});

	//좌우 라인도 크기에 맞게됨(텍스트도 복구)
	$('.secE_flexBox_left2').css({'font-size' : '1.1rem'});
	$('.secE_flexBox_left2').stop().animate({'width' : '15%'  ,'left' : '50%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_topicTop2').css({'font-size' : '.9rem','line-height' : '22px'});
	$('.secE_flex_subTextsTop2').hide();

	$('.secE_flex_topicBot2').css({'font-size' : '.7rem','line-height' : '23px' ,'text-align' : 'center'});
	$('.secE_flex_subTextsBot2').hide();

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center2').css({'justify-content' : 'flex-end' , 'height' : '18%' , 'width' : '84%'});

	$('.secE_thinTexts2').text('475PX');
	$('.secE_flexTexts_left2').hide();
	$('.secE_flexTexts_center_bot2').hide();
    $('.secE_flex_note2').hide();

	//------------------------------원래이미지----------------------------------
	//패드박스가 원상태로 돌아감
	$('#secE_padBox').stop().animate({'width' : '100%' , 'opacity' : '0'});
	$('#secE_padBox').hide();

	//배경이미지가 사라짐
	$('.secE_slideImg').hide();

	//핸드폰크기가 커짐
	$('.secE_flex_imgBox').css({'width' : '130px' ,'top' : '50%' , 'left' : '50%' , 'transform' : 'translate(-50%,-50%)'});

	//안쪽 전체 border라인 핸드폰크기에 맞춰짐
	$('.secE_flex_borderLine').stop().animate({'width' : '36%','height' : '63%' ,'left' : '25%'});

	//위아래 라인의 위치가 알맞게 변함
	//먼저 .secE_verLine_bot의 속성을 80%로 만들어놓자
	$('.secE_verLine_bot').css('top','81.5%');
	$('.secE_verLine').stop().animate({'height' : '18.5%' , 'left' : '25%'});

	//좌우 라인 복원
	$('.secE_flexBox_right').css('left' ,'93%');
	$('.secE_flexBox_right').stop().animate({'width' : '7%'});
	$('.secE_flexBox_left').css('left' ,'0%');
	$('.secE_flexBox_left').stop().animate({'width' : '7%'});

	//안쪽 캡션도 크기가 작아짐
	$('.secE_flex_ctnBox_top').css({'top' : '27%' ,'left' : '50%' ,'text-align' : 'center' ,'transform' : 'translateX(-50%)' ,'width' : '75%'});
	$('.secE_flex_topicTop').css({'font-size' : '.9rem','line-height' : '22px'});
	$('.secE_flex_subTextsTop').css({'font-size' : '.7rem' ,'line-height' : '18px'});
    $('.secE_flex_rwd_phone').hide();
	$('.secE_flex_note').css({'display' :'none'});

	$('.secE_flex_ctnBox_bot').hide();

	//위아래 좌우 주황글씨도 변함
	$('.secE_flexTexts_center').css({'justify-content' : 'flex-start' , 'height' : '18%' , 'width' : '84%'});

	$('.secE_thinTexts1').text('615PX');
	$('.secE_flexTexts_left').css({'left':'-180%','top':'28%','transform' :'rotate(270deg) translate(0,-45%)'});
	$('.secE_flexTexts_center_bot').hide();
    
}




//secF 모달버튼 클릭시 제거이벤트
// 두번째로 모달 버튼 클릭시 그전에있던 모달넘버값을 제거
function moveModal(num) {
    secF_modalNum =0;
    secF_modalNum++;
}








$(function(){
	secF_slider(1);
	
	
	var navLine = 50;
	$(window).scroll(function(){
		
		var current = $(window).scrollTop();
		var secB = $('#secB').offset().top;
		//secB기준점 라인
		var secB_Line = $('#secB_standardLine').offset().top;
		var sec_sum = 100;
		var secC = $('#secC').offset().top;
		var secD = $('#secD').offset().top;
		var secE = $('#secE').offset().top;
		
		
		
		
		//데스크탑 화면일
		if($(window).width() > 765) { 
				//스크롤 이벤트(네비게이션)
			if(current > secB ) { 
				$('#naviBox_1').fadeOut(500);
				$('.secA2').stop().animate({'top' : '0'},300);

			}else { 
				$('#naviBox_1').fadeIn(300);
				$('.secA2').stop().animate({'top' : '50px'},300);
			}

			//기준점에 닿으면 pad가 나오고 기본배경이미지 사라짐
			if(current > secB_Line && current < (secB_Line +  sec_sum)  ) {
				$('#secB_backImg').hide();
				$('#secB_padBox').show();
				$('#secB_changeImgBox').removeClass('secB_changeImgBox1');
				$('#secB_changeImgBox').addClass('secB_changeImgBox2');

				$('.secB_padBox1').stop().animate({'width' : '100%'});
				$('.secB_changeImgBox2').stop().animate({'width' : '100%'});

				//선 원래대로
				$('#secB_heightTextBox').hide();
				$('#secB_widthTextBox').hide();

				//로고가 변함
				$('.secA_mainTexts').css('color' ,'#333');
				$('.secA_checkTexts').css('color' , '#555');
                
                $('#secA').css('background-color' ,'transparent');
                
                //각각 라인들 숨김
                $('#secB_heightTextBox').hide();
				$('#secB_widthTextBox').hide();
			}
			//원상복귀용
			if( current < secB_Line ) {
				$('#secB_backImg').show();
				$('#secB_padBox').hide();
				$('#secB_changeImgBox').removeClass('secB_changeImgBox2');
				$('#secB_changeImgBox').addClass('secB_changeImgBox1');
				$('#secB_changeImgBox').show();
                
                
                //네비 배경색이 투명으로변함(네비폰트변경)
				$('.secA_mainTexts').css('color' ,'#EAEAEA');
				$('.secA_checkTexts').css('color' , '#DDDDDD');
                
				$('#secA').css('background-color' ,'transparent');
                
                //각각 라인들 숨김
                $('#secB_heightTextBox').hide();
				$('#secB_widthTextBox').hide();
			}

			//기준점에서 sec_sum값 위치만큼가면 크기가 줄어듬
			if(current > (secB_Line +  sec_sum) && current < secC ) {
				$('#secB_changeImgBox').removeClass('secB_changeImgBox1');
				$('#secB_changeImgBox').addClass('secB_changeImgBox2');
                

				$('.secB_padBox1').stop().animate({'width' : '50%'});
				$('.secB_changeImgBox2').stop().animate({'width' : '47%'});
                
                //네비 배경색이 투명으로변함(네비폰트변경)
                $('.secA_mainTexts').css('color' ,'#333');
				$('.secA_checkTexts').css('color' , '#555');
                
				$('#secA').css('background-color' ,'transparent');
                
                //각각 라인들 숨김
                $('#secB_heightTextBox').hide();
				$('#secB_widthTextBox').hide();
			}

			//각각라인들나옴
			if(current > (secB_Line +  (sec_sum*3 )) && current < secC) {
				$('#secB_heightTextBox').css('display' , 'flex');

				$('#secB_changeImgBox').removeClass('secB_changeImgBox1');
				$('#secB_changeImgBox').addClass('secB_changeImgBox2');
                


				$('.secB_padBox1').stop().animate({'width' : '50%'});
				$('.secB_changeImgBox2').stop().animate({'width' : '47%'});
                
                
                //네비 배경색이 투명으로변함(네비폰트변경)
                $('.secA_mainTexts').css('color' ,'#333');
				$('.secA_checkTexts').css('color' , '#555');
                
				$('#secA').css('background-color' ,'transparent');
			}
			//각각라인들나옴
			if(current > (secB_Line +  (sec_sum*6 )) && current < secC) {
				$('#secB_widthTextBox').css('display' , 'block');
                

				$('#secB_changeImgBox').removeClass('secB_changeImgBox1');
				$('#secB_changeImgBox').addClass('secB_changeImgBox2');

				$('.secB_padBox1').stop().animate({'width' : '50%'});
				$('.secB_changeImgBox2').stop().animate({'width' : '47%'});
                
                //네비 배경색이 투명으로변함(네비폰트변경)
                $('.secA_mainTexts').css('color' ,'#333');
				$('.secA_checkTexts').css('color' , '#555');
                
				$('#secA').css('background-color' ,'transparent');
			}

			if(current > secC && current < secD) {
				$('#secB_padBox').fadeOut();
				$('#secB_changeImgBox').fadeOut();

				$('#secB_heightTextBox').hide();
				$('#secB_widthTextBox').hide();
				
				
				/*텍스트박스가 나옴*/
				$('.secC_texts').animate({'opacity' : '1'});
                
                //네비 배경색이 흰색으로변함(네비폰트변경)
                $('.secA_mainTexts').css('color' ,'#333');
				$('.secA_checkTexts').css('color' , '#555');
                
				$('#secA').css('background-color' ,'#fff');
				
			}
            
            //모든걸 완전히(secD이하부분전체 계속 동작 중)
            if(current > secD) { 
				$('#secB_padBox').hide();
				$('#secB_changeImgBox').hide();

				$('#secB_heightTextBox').hide();
				$('#secB_widthTextBox').hide();
				
				
				/*텍스트박스가 나옴*/
				$('.secC_texts').animate({'opacity' : '1'});
                
                //네비 배경색이 흰색으로변함(네비폰트변경)
                $('.secA_mainTexts').css('color' ,'#333');
				$('.secA_checkTexts').css('color' , '#555');
                
				$('#secA').css('background-color' ,'#fff');
            
            
            }


		
		
		
		}
		
		
		
		
		
		//모바일 화면임
		else {
				//스크롤 이벤트(네비게이션)
			if(current > secB ) { 
				$('#naviBox_1').fadeOut(500);
				$('.secA2').stop().animate({'top' : '0'},300);

			}else { 
				$('#naviBox_1').fadeIn(300);
				$('.secA2').stop().animate({'top' : '50px'},300);
			}

			//기준점에 닿으면 pad가 나오고 기본배경이미지 사라짐
			if(current > secB_Line && current < (secB_Line +  sec_sum)  ) {
				
				$('#secB_backImg').hide();
				$('#secB_padBox').show();
				//이미지박스가 fixed로바뀜
				$('#secB_changeImgBox').removeClass('secB_changeImgBox1');
				$('#secB_changeImgBox').addClass('secB_changeImgBox2');
				
				// 패드와 이미지 크기 값조정
				$('.secB_padBox1').stop().animate({'width' : '150%'},200);
				$('.secB_changeImgBox2').stop().animate({'width' : '105%'},200);

				//선 원래대로
				$('#secB_heightTextBox').hide();
				$('#secB_widthTextBox').hide();

				//로고가 변함
				$('.secA_mainTexts').css('color' ,'#333');
				$('.secA_checkTexts').css('color' , '#555');
                
                $('#secA').css('background-color' ,'transparent');
			}
			//원상복귀용
			if( current < secB_Line ) {
				$('#secB_backImg').show();
				$('#secB_padBox').hide();
				$('#secB_changeImgBox').removeClass('secB_changeImgBox2');
				$('#secB_changeImgBox').addClass('secB_changeImgBox1');
				$('#secB_changeImgBox').show();

				$('.secA_mainTexts').css('color' ,'#EAEAEA');
				$('.secA_checkTexts').css('color' , '#DDDDDD');
                
                //각각 라인들 숨김
                $('#secB_heightTextBox').hide();
				$('#secB_widthTextBox').hide();
                
                //네비 배경색이 투명으로변함(네비폰트변경)
				$('.secA_mainTexts').css('color' ,'#EAEAEA');
				$('.secA_checkTexts').css('color' , '#DDDDDD');
                
				$('#secA').css('background-color' ,'transparent');
			}

			//기준점에서 sec_sum값 위치만큼가면 크기가 줄어듬
			if(current > (secB_Line +  sec_sum) && current < secC ) {
				$('#secB_changeImgBox').removeClass('secB_changeImgBox1');
				$('#secB_changeImgBox').addClass('secB_changeImgBox2');
				
				$('#secB_padBox').show();
				$('.secB_padBox1').stop().animate({'width' : '75%'},200);
				$('.secB_changeImgBox2').stop().animate({'width' : '53%'},200);
                
                //각각 라인들 숨김
                $('#secB_heightTextBox').hide();
				$('#secB_widthTextBox').hide();
                
                //네비 배경색이 투명으로변함(네비폰트변경)
				$('.secA_mainTexts').css('color' ,'#EAEAEA');
				$('.secA_checkTexts').css('color' , '#DDDDDD');
                
				$('#secA').css('background-color' ,'transparent');
			}

			//각각라인들나옴
			if(current > (secB_Line +  (sec_sum*3 )) && current < secC) {
                if($(window).width() < 500) {
                    $('#secB_heightTextBox').hide();

                    $('#secB_changeImgBox').removeClass('secB_changeImgBox1');
                    $('#secB_changeImgBox').addClass('secB_changeImgBox2');

                    $('#secB_padBox').show();
                    $('.secB_padBox1').stop().animate({'width' : '75%'},200);
                    $('.secB_changeImgBox2').stop().animate({'width' : '53%'},200);

                    //네비 배경색이 투명으로변함(네비폰트변경)
                    $('.secA_mainTexts').css('color' ,'#EAEAEA');
                    $('.secA_checkTexts').css('color' , '#DDDDDD');

                    $('#secA').css('background-color' ,'transparent');
                }
                
                else { 
                    $('#secB_heightTextBox').show();

                    $('#secB_changeImgBox').removeClass('secB_changeImgBox1');
                    $('#secB_changeImgBox').addClass('secB_changeImgBox2');

                    $('#secB_padBox').show();
                    $('.secB_padBox1').stop().animate({'width' : '75%'},200);
                    $('.secB_changeImgBox2').stop().animate({'width' : '53%'},200);

                    //네비 배경색이 투명으로변함(네비폰트변경)
                    $('.secA_mainTexts').css('color' ,'#EAEAEA');
                    $('.secA_checkTexts').css('color' , '#DDDDDD');

                    $('#secA').css('background-color' ,'transparent');
                
                }
				
			}
			//각각라인들나옴
			if(current > (secB_Line +  (sec_sum*6 )) && current < secC) {
				$('#secB_widthTextBox').css('display' , 'block');

				$('#secB_changeImgBox').removeClass('secB_changeImgBox1');
				$('#secB_changeImgBox').addClass('secB_changeImgBox2');
				
				$('#secB_padBox').show();
				$('.secB_padBox1').stop().animate({'width' : '75%'},200);
				$('.secB_changeImgBox2').stop().animate({'width' : '53%'},200);
                
                //네비 배경색이 흰색으로변함(네비폰트변경)
                $('.secA_mainTexts').css('color' ,'#333');
				$('.secA_checkTexts').css('color' , '#555');
                
				$('#secA').css('background-color' ,'transparent');
                
                
			}

			if(current > secC && current < secD) {
				$('#secB_padBox').hide();
				$('#secB_changeImgBox').hide();

				$('#secB_heightTextBox').hide();
				$('#secB_widthTextBox').hide();
                
                //네비 배경색이 흰색으로변함(네비폰트변경)
                $('.secA_mainTexts').css('color' ,'#333');
				$('.secA_checkTexts').css('color' , '#555');
                
				$('#secA').css('background-color' ,'#fff');
                
                /*텍스트박스가 나옴*/
				$('.secC_texts').animate({'opacity' : '1'});
			}
            
            
            //모든걸 완전히(secD이하부분전체 계속 동작 중)
            if(current > (secD + sec_sum*5)) { 
				$('#secB_padBox').hide();
				$('#secB_changeImgBox').hide();

				$('#secB_heightTextBox').hide();
				$('#secB_widthTextBox').hide();
				
				
				/*텍스트박스가 나옴*/
				$('.secC_texts').animate({'opacity' : '1'});
                
                //네비 배경색이 흰색으로변함(네비폰트변경)
                $('.secA_mainTexts').css('color' ,'#333');
				$('.secA_checkTexts').css('color' , '#555');
                
				$('#secA').css('background-color' ,'#fff');
                
                //각각 라인들 숨김
                $('#secB_heightTextBox').hide();
				$('#secB_widthTextBox').hide();
            }

			
			
			
		}
		
		
		


	}); //end $(window).scroll(function()
	
	
	//secE 클릭시 나타나는 실행 이벤트
	$('.secE_circle').click(function(){
		$('.secE_circle').css('background-color','transparent');
		$(this).css('background-color','#ff6b3e');
		
		//원상복귀 시킴(첫번째 버튼을 누를경우)
		if($('.secE_circle').eq(0).css('background-color') == 'rgb(255, 107, 62)') 
		{ 
            if($(window).width() > 1750) { secE_clickEvent1(); }
            if(($(window).width() >= 1500) && ($(window).width() <= 1750) ) { secE_clickEvent1_1750(); }
            if(($(window).width() >= 1250) && ($(window).width() < 1500) ) { secE_clickEvent1_1500(); }
            if(($(window).width() >= 1080) && ($(window).width() < 1250) ) { secE_clickEvent1_1250(); }
            if(($(window).width() >= 765) && ($(window).width() < 900) ) { secE_clickEvent1_900(); }
            if(($(window).width() >= 365) && ($(window).width() < 410) ) { secE_clickEvent1_410(); }
        
        
        }
		
		
		// 두번째 버튼 클릭시!!
		if($('.secE_circle').eq(1).css('background-color') == 'rgb(255, 107, 62)') 
		{ 
            if($(window).width() > 1750) { secE_clickEvent2(); }
            if(($(window).width() >= 1500) && ($(window).width() <= 1750) ) { secE_clickEvent2_1750(); }
            if(($(window).width() >= 1250) && ($(window).width() < 1500) ) { secE_clickEvent2_1500(); }
            if(($(window).width() >= 1080) && ($(window).width() < 1250) ) { secE_clickEvent2_1250(); }
            if(($(window).width() >= 765) && ($(window).width() < 900) ) { secE_clickEvent2_900(); }
            if(($(window).width() >= 365) && ($(window).width() < 410) ) { secE_clickEvent2_410(); }
        }
		
		
		
		// 세번째 버튼 클릭시!!
		if($('.secE_circle').eq(2).css('background-color') == 'rgb(255, 107, 62)') 
		{ 
            if($(window).width() > 1750) { secE_clickEvent3(); }
            if(($(window).width() >= 1500) && ($(window).width() <= 1750) ) { secE_clickEvent3_1750(); }
            if(($(window).width() >= 1250) && ($(window).width() < 1500) ) { secE_clickEvent3_1500(); }
            if(($(window).width() >= 1080) && ($(window).width() < 1250) ) { secE_clickEvent3_1250(); }
            if(($(window).width() >= 765) && ($(window).width() < 900) ) { secE_clickEvent3_900(); }
            if(($(window).width() >= 365) && ($(window).width() < 410) ) { secE_clickEvent3_410(); }
        }
		
		// 네번째 버튼 클릭시!!
		if($('.secE_circle').eq(3).css('background-color') == 'rgb(255, 107, 62)') 
		{ 
            if($(window).width() > 765) {
              if($(window).width() > 1750) { secE_clickEvent4(); }
                if(($(window).width() >= 1500) && ($(window).width() <= 1750) ) { secE_clickEvent4_1750(); }
                if(($(window).width() >= 1250) && ($(window).width() < 1500) ) { secE_clickEvent4_1500(); }
                if(($(window).width() >= 1080) && ($(window).width() < 1250) ) { secE_clickEvent4_1250(); }
                if(($(window).width() >= 765) && ($(window).width() < 900) ) { secE_clickEvent4_900(); }
                if(($(window).width() >= 365) && ($(window).width() < 410) ) { secE_clickEvent4_410(); }  
            } else { $(this).hide();}
            
        }
	});
	
	$('.secE_flex_ctnBox_bot').click(function(){
		$('.secE_circle').css('background-color','transparent');
		$('.secE_circle').eq(0).css('background-color','rgb(255, 107, 62)');
        
        if($(window).width() > 1750) { secE_clickEvent1(); }
        if(($(window).width() >= 1500) && ($(window).width() <= 1750) ) { secE_clickEvent1_1750(); }
        if(($(window).width() >= 1250) && ($(window).width() < 1500) ) { secE_clickEvent1_1500(); }
        if(($(window).width() >= 1080) && ($(window).width() < 1250) ) { secE_clickEvent1_1250(); }
        if(($(window).width() >= 765) && ($(window).width() < 900) ) { secE_clickEvent1_900(); }
        if(($(window).width() >= 365) && ($(window).width() < 410) ) { secE_clickEvent1_410(); }
	});
	
	$('.secE_flex_ctnBox_top').click(function(){
		$('.secE_circle').css('background-color','transparent');
		$('.secE_circle').eq(1).css('background-color','rgb(255, 107, 62)');
        
        if($(window).width() > 1750) { secE_clickEvent2(); }
        if(($(window).width() >= 1500) && ($(window).width() <= 1750) ) { secE_clickEvent2_1750(); }
        if(($(window).width() >= 1250) && ($(window).width() < 1500) ) { secE_clickEvent2_1500(); }
        if(($(window).width() >= 1080) && ($(window).width() < 1250) ) { secE_clickEvent2_1250(); }
        if(($(window).width() >= 765) && ($(window).width() < 900) ) { secE_clickEvent2_900(); }
        if(($(window).width() >= 365) && ($(window).width() < 410) ) { secE_clickEvent2_410(); }
	});
	
	$('.secE_flex_imgBox').click(function(){ 
		$('.secE_circle').css('background-color','transparent');
		$('.secE_circle').eq(2).css('background-color','rgb(255, 107, 62)');
        
        if($(window).width() > 1750) { secE_clickEvent3(); }
        if(($(window).width() >= 1500) && ($(window).width() <= 1750) ) { secE_clickEvent3_1750(); }
        if(($(window).width() >= 1250) && ($(window).width() < 1500) ) { secE_clickEvent3_1500(); }
        if(($(window).width() >= 1080) && ($(window).width() < 1250) ) { secE_clickEvent3_1250(); }
        if(($(window).width() >= 765) && ($(window).width() < 900) ) { secE_clickEvent3_900(); }
        if(($(window).width() >= 365) && ($(window).width() < 410) ) { secE_clickEvent3_410(); }
	});
	
	$('.secE_flex_borderLine2').click(function(){
        
        if($(window).width() > 765) {
            $('.secE_circle').css('background-color','transparent');
            $('.secE_circle').eq(3).css('background-color','rgb(255, 107, 62)');

            if($(window).width() > 1750) { secE_clickEvent4(); }
            if(($(window).width() >= 1500) && ($(window).width() <= 1750) ) { secE_clickEvent4_1750(); }
            if(($(window).width() >= 1250) && ($(window).width() < 1500) ) { secE_clickEvent4_1500(); }
            if(($(window).width() >= 1080) && ($(window).width() < 1250) ) { secE_clickEvent4_1250(); }
            if(($(window).width() >= 765) && ($(window).width() < 900) ) { secE_clickEvent4_900(); }
            if(($(window).width() >= 365) && ($(window).width() < 410) ) { secE_clickEvent4_410(); }
            
        } else { $('.secE_circle').eq(3).hide();}
        
		
	})
	
	
    
    
    
    
    
	//secF 클릭시 나타나는 실행 슬라이드 이벤트
	$('.secF_circle').click(function(){
		clearTimeout(loop);
		$('.secF_circle').css('background-color','transparent');
		$(this).css('background-color','#ff6b3e');
		
		var circleNum = $(this).index();
		slideNum = circleNum;
		
		secF_slider(0);
		
	});
	
	//모달이미지창 띄우고 끄기(좌우버튼 포함)
    var secF_slide_Length = $('.secF_slideImg').length;
    for(var i =0; i < secF_slide_Length; i++) {
        
    }
    //슬라이드 이미지 클릭시
	$('.secF_slideImg').click(function(){
		$('#secF_modal').show();
		$('#secF_modal').stop().animate({'opacity' : '1'});
        
        var imgNum = $(this).index();
		slideNum = imgNum;
        //해당이미지 변경
        $('.modalImg').attr('src' ,'images/webDesign/'+secF_modalImg[imgNum]);
        //해당 캡션 변경
        var textLength = $('.modal_description1').length;
        
        for(var i =0; i < textLength;i++) {
            $('.modal_texts').eq(i).text(slideTexts[imgNum][i]);
        }
        
        moveModal(imgNum);
        
	});
	//모달컨텐츠클릭하면 모달창닫음
	$('#modal_contents').click(function(){
		$('#secF_modal').stop().animate({'opacity' : '0'});
		$('#secF_modal').hide();
	})
    
    
    
	//좌우버튼클릭시 양옆으로넘어감
    var secF_modalNum = 0;
    $('.secF_modal_btn_left').click(function(){
        secF_modalNum += -1;
        
        if(secF_modalNum > 2) { secF_modalNum = 0 }
        if(secF_modalNum < 0) { secF_modalNum = 2 }
        
        //해당이미지 변경
        $('.modalImg').attr('src' ,'images/webDesign/'+secF_modalImg[secF_modalNum]);
        //해당캡션 변경
        var textLength = $('.modal_description1').length;
        for(var i =0; i < textLength;i++) {
            $('.modal_texts').eq(i).text(slideTexts[secF_modalNum][i]);
        }
    });
    
    $('.secF_modal_btn_right').click(function(){
        secF_modalNum += +1;
        
        if(secF_modalNum > 2) { secF_modalNum = 0 }
        if(secF_modalNum < 0) { secF_modalNum = 2 }
        
        //해당이미지 변경
        $('.modalImg').attr('src' ,'images/webDesign/'+secF_modalImg[secF_modalNum]);
        //해당캡션 변경
        var textLength = $('.modal_description1').length;
        for(var i =0; i < textLength;i++) {
            $('.modal_texts').eq(i).text(slideTexts[secF_modalNum][i]);
        }
    });
	
	
	
	
	
	
	
}); //end $(function(){
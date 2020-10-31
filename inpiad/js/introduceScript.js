

//secA세로폭을 secA안 이미지의 슬라이드 세로폭과 맞춤
function secheight() {
	//반응형 작업  (765px이상일시)
	if($(window).width() > 765) {
		$('.secA_img').eq(0).attr('src' , 'images/sub2/secA1.png');
		$('.secA_img').eq(1).attr('src' , 'images/sub2/secA2.png');
		
		
		var newH_secA = $('.secA_imgBox').width() * (921/1920);
		$('#secA').height(newH_secA);
		
		var newH_secC = $('.secC_imgBox').width() * (1200/1920);
		$('#secC_container').height(newH_secC);
	}
	
	//모바일 화면일시 (765px이하)
	else {
		$('.secA_img').eq(0).attr('src' , 'images/sub2/secA1_RWD.png');
		$('.secA_img').eq(1).attr('src' , 'images/sub2/secA2_RWD.png');
		
		var newH_secA = $('.secA_imgBox').width()* (1261/900);
		$('#secA').height(newH_secA);
		
		var newH_secC = $('.secC_imgBox').width() * (1200/1920);
		$('#secC_container').height(newH_secC);
	}
	
};

$(document).ready(secheight);
$(window).resize(secheight)



$(function(){
	
	//웹개발단계
	$('.secF_contentsBox').click(function(e){
		//상위 이벤트등 중복되는 이벤트를 방지하는이벤트(나의 이벤트만씀)
		e.stopPropagation();
		
		$('.secF_designBox').removeClass('secF_designBox2');
		$('.secF_designBox').addClass('secF_designBox1');
		
		$(this).removeClass('secF_contentsBox1');
		$(this).addClass('secF_contentsBox3');
		
		$('.secF_skillBox').removeClass('secF_skillBox3');
		$('.secF_skillBox').removeClass('secF_skillBox1');
		$('.secF_skillBox').addClass('secF_skillBox2');
		
		$('.secF_mainText1').hide();
		$('.secF_mainText2').fadeIn();
		$('.secF_mainText4').hide();
		$('.secF_mainText3').hide();
		
		$('.secF_mainTopic1').hide();
		$('.secF_mainTopic2').fadeIn();
		$('.secF_mainTopic4').hide();
		$('.secF_mainTopic3').hide();
		
		$('.secF_subTopic1').hide();
		$('.secF_subTopic2').fadeIn();
		$('.secF_subTopic4').hide();
		$('.secF_subTopic3').hide();
		
	}); //$('.secF_contentsBox').click(function()
	
	
	$('.secF_skillBox').click(function(e){
		e.stopPropagation();
		
		$('.secF_designBox').removeClass('secF_designBox2');
		$('.secF_designBox').addClass('secF_designBox1');
		
		$('.secF_contentsBox').removeClass('secF_contentsBox3');
		$('.secF_contentsBox').addClass('secF_contentsBox1');
		
		$(this).removeClass('secF_skillBox1');
		$(this).removeClass('secF_skillBox2');
		$(this).addClass('secF_skillBox3');
		
		
		$('.secF_mainText1').hide();
		$('.secF_mainText2').hide();
		$('.secF_mainText4').hide();
		$('.secF_mainText3').fadeIn();
		
		$('.secF_mainTopic1').hide();
		$('.secF_mainTopic2').hide();
		$('.secF_mainTopic4').hide();
		$('.secF_mainTopic3').fadeIn();
		
		$('.secF_subTopic1').hide();
		$('.secF_subTopic2').hide();
		$('.secF_subTopic4').hide();
		$('.secF_subTopic3').fadeIn();
		
	});
	
	
	$('.secF_designBox').click(function(e){
		e.stopPropagation();
		
		$(this).removeClass('secF_designBox1');
		$(this).addClass('secF_designBox2');
		
		$('.secF_contentsBox').removeClass('secF_contentsBox3');
		$('.secF_contentsBox').addClass('secF_contentsBox1');
		
		$('.secF_skillBox').removeClass('secF_skillBox3');
		$('.secF_skillBox').removeClass('secF_skillBox2');
		$('.secF_skillBox').addClass('secF_skillBox1');
		
		$('.secF_mainText1').hide();
		$('.secF_mainText2').hide();
		$('.secF_mainText3').hide();
		$('.secF_mainText4').fadeIn();
		
		$('.secF_mainTopic1').hide();
		$('.secF_mainTopic2').hide();
		$('.secF_mainTopic3').hide();
		$('.secF_mainTopic4').fadeIn();
		
		$('.secF_subTopic1').hide();
		$('.secF_subTopic2').hide();
		$('.secF_subTopic3').hide();
		$('.secF_subTopic4').fadeIn();
		
	});
	
	
	
	
	$('.secH_head').click(function(){
		$(this).addClass('secH_head1');
		$(this).removeClass('secH_head2');
		
		$('.secH_branch').addClass('secH_branch2');
		$('.secH_branch').removeClass('secH_branch1');
		
		$('.secH_headMapBox').fadeIn();
		$('.secH_branchMapBox').hide();
		
		$('.secH_headAddress').fadeIn();
		$('.secH_branchAddress').hide();
	});
	
	
	$('.secH_branch').click(function(){
		$(this).addClass('secH_branch1');
		$(this).removeClass('secH_branch2');
		
		$('.secH_head').addClass('secH_head2');
		$('.secH_head').removeClass('secH_head1');
		
		$('.secH_headMapBox').hide();
		$('.secH_branchMapBox').fadeIn();
		
		$('.secH_headAddress').hide();
		$('.secH_branchAddress').fadeIn();
	});
	
	
	
	
	
	
// ----------------------------------------스크롤 시 동작되는 함수	
	//PC기준 스크롤값
	 var sec_defaultValueP = 100;
	 var sec_defaultValueP2 = sec_defaultValueP*5;
	//MOBILE 기준 스크롤 값
	 var sec_defaultValueM = 40;
	$(window).scroll(function(){
		
		var current = $(window).scrollTop();
		
		var secA_position = $('#secA').offset().top;
		var secB_position = $('#secB').offset().top;
		var secC_position = $('#secC').offset().top;
		//secD는 section이 fixed상태로변한상태
		var secD_position = $('#secD').offset().top;
		var secE_position = $('#secE').offset().top;
		
		var secG_position = $('.secG_longLine').offset().top;
		var secH_position = $('#secH').offset().top;
		
		
		//데스크탑 화면기준 (765이상)
		if($(window).width()>765) {
			
			//맨처음 부분
			if(current > secA_position && current < secA_position + sec_defaultValueP ) { 
				$('#secA_main_ImgBox2').removeClass('secA_anim2');
				$('#secA_main_ImgBox2').addClass('secA_anim1');
				
				$('#secC_container').removeClass('secC_container2');
				$('#secC_container').addClass('secC_container1');
			}
			
			//secA 부분
			if(current > secA_position + sec_defaultValueP && current < secB_position) {
				$('#secA_main_ImgBox1').show();
				$('#secA_main_ImgBox2').addClass('secA_anim2');
				$('#secA_main_ImgBox2').removeClass('secA_anim1');
				
				$('#secC_container').removeClass('secC_container2');
				$('#secC_container').addClass('secC_container1');
			
			}
			
			//secC 부분(전체) -secC : position fixed; 섹션 E까지의 전체높이
			if(current > secC_position && (current < secC_position + (sec_defaultValueP*8)) ) {
				$('#secC_container').removeClass('secC_container1');
				
				$('#secC_container').addClass('secC_container2');
				
				
			}
			
			//secC 성장
			if(current > secC_position && current < (secC_position+ sec_defaultValueP)) {
				$('#secC_container').removeClass('secC_container1');
				
				$('#secC_container').addClass('secC_container2');
				
				//배경 이미지
				$('#secC_main_imgBox2').addClass('secA_anim1');
				$('#secC_main_imgBox3').removeClass('secA_anim1');
				$('#secC_main_imgBox4').removeClass('secA_anim1');
				
				//글자
				$('.secC_main2').addClass('secA_anim1');
				$('.secC_main3').addClass('secC_main3_1');
				$('.secC_main4').addClass('secC_main4_1');
				$('.secC_main2').removeClass('secC_main2_1');
				$('.secC_main3').removeClass('secA_anim1');
				$('.secC_main4').removeClass('secA_anim1');
				
			}
			
			//secC 발전
			if((current > secC_position + sec_defaultValueP) && (current < secC_position + (sec_defaultValueP*4))) {
				$('#secC_container').removeClass('secC_container1');
				$('#secC_container').addClass('secC_container2');
				
				//배경 이미지
				$('#secC_main_imgBox3').addClass('secA_anim1');
				$('#secC_main_imgBox4').removeClass('secA_anim1');
				
				//글자
				$('.secC_main3').addClass('secA_anim1');
				$('.secC_main2').addClass('secA_anim1');
				$('.secC_main4').addClass('secC_main4_1');
				$('.secC_main3').removeClass('secC_main3_1');
				$('.secC_main2').removeClass('secC_main2_1');
				$('.secC_main4').removeClass('secA_anim1');
			}
			
			//secC 그리고 인피아드
			if((current > secC_position + (sec_defaultValueP*4)) && (current < secC_position + (sec_defaultValueP*8))) {
				$('#secC_container').removeClass('secC_container1');
				$('#secC_container').addClass('secC_container2');
				
				//배경 이미지
				$('#secC_main_imgBox4').addClass('secA_anim1');
				
				//글자
				$('.secC_main3').addClass('secA_anim1');
				$('.secC_main2').addClass('secA_anim1');
				$('.secC_main4').addClass('secA_anim1');
				$('.secC_main3').removeClass('secC_main3_1');
				$('.secC_main2').removeClass('secC_main2_1');
				$('.secC_main4').removeClass('secC_main4_1');
			}
			
			//secC 부분(전체) -secC : position relative; relative로변함
			if(current > secE_position ) {
				$('#secC_container').removeClass('secC_container2');
				$('#secC_container').removeClass('secC_container1');
				$('#secC_container').addClass('secC_container3');
				$('#secC').addClass('secC1');
				
				//secD애들 나옴
				$('.secD_line_box').fadeIn();
				$('.secD_outBox').css('display' , 'flex');
				
				//secF 애들 나옴
				$('.secF_ctnBox').css('display', 'flex');
				$('.secF_contentsBox').animate({'opacity': '1'});
				

				
			}
			
			//secG bewidth us 원래대로
			if(current < secG_position ) {
				$('.secG_mainTopicBox').removeClass('secG_mainTopicBox2');
				$('.secG_mainTopicBox').addClass('secG_mainTopicBox1');
				$('.secG_mainTopicBox').show();
				$('.secG_subTopicBox').hide();
				
				//아래 멘트관련
				$('.secG_mainMent1').removeClass('secG_mainMent1_2');
				$('.secG_mainMent1').removeClass('secG_mainMent1_3');
				$('.secG_mainMent1').addClass('secG_mainMent1_1');
				
				$('.secG_mainMent2').removeClass('secG_mainMent2_2');
				$('.secG_mainMent2').addClass('secG_mainMent2_1');
				
				$('.secG_subMent1').removeClass('secG_subMent1_2');
				$('.secG_subMent1').removeClass('secG_subMent1_3');
				$('.secG_subMent1').addClass('secG_subMent1_1');
			}
			
			//secG bewidth us 진행
			if(current > secG_position ) {
				$('.secG_mainTopicBox').removeClass('secG_mainTopicBox1');
				$('.secG_mainTopicBox').addClass('secG_mainTopicBox2');
				
				//아래 멘트관련
				$('.secG_mainMent1').removeClass('secG_mainMent1_1');
				$('.secG_mainMent1').removeClass('secG_mainMent1_3');
				$('.secG_mainMent1').addClass('secG_mainMent1_2');
				
				$('.secG_mainMent2').removeClass('secG_mainMent2_2');
				$('.secG_mainMent2').addClass('secG_mainMent2_1');
				
				$('.secG_subMent1').removeClass('secG_subMent1_2');
				$('.secG_subMent1').removeClass('secG_subMent1_3');
				$('.secG_subMent1').addClass('secG_subMent1_1');
				
			}
			
			//secG 아래 멘트들 바뀜
			if(current > secG_position + (sec_defaultValueP*4) && current < secG_position + (sec_defaultValueP*7) ) { 
				$('.secG_mainMent1').removeClass('secG_mainMent1_1');
				$('.secG_mainMent1').removeClass('secG_mainMent1_2');
				$('.secG_mainMent1').addClass('secG_mainMent1_3');
				
				$('.secG_mainMent2').removeClass('secG_mainMent2_1');
				$('.secG_mainMent2').addClass('secG_mainMent2_2');
				
				$('.secG_subMent1').removeClass('secG_subMent1_2');
				$('.secG_subMent1').removeClass('secG_subMent1_3');
				$('.secG_subMent1').addClass('secG_subMent1_1');
			
			} 
			
			
			//secG bewidth us 사라짐 foryou 나옴
			if(current > secG_position + (sec_defaultValueP*7)) {
				
				$('.secG_mainTopicBox').hide();
				$('.secG_subTopicBox').fadeIn();
				
				
				$('.secG_subTopicBox').removeClass('secG_subTopicBox1');
				$('.secG_subTopicBox').addClass('secG_subTopicBox2');
				
				//아래 멘트관련
				$('.secG_mainMent1').removeClass('secG_mainMent1_2');
				$('.secG_mainMent1').removeClass('secG_mainMent1_3');
				$('.secG_mainMent1').addClass('secG_mainMent1_1');
				
				$('.secG_mainMent2').removeClass('secG_mainMent2_2');
				$('.secG_mainMent2').addClass('secG_mainMent2_1');
				
				$('.secG_subMent1').removeClass('secG_subMent1_1');
				$('.secG_subMent1').removeClass('secG_subMent1_3');
				$('.secG_subMent1').addClass('secG_subMent1_2');
				
			}
			
			// foryou 사라짐
			if(current > secG_position + (sec_defaultValueP*15)) {
				$('.secG_subTopicBox').removeClass('secG_subTopicBox2');
				$('.secG_subTopicBox').addClass('secG_subTopicBox1');
				
				//서브 멘트도 사라짐
				$('.secG_subMent1').removeClass('secG_subMent1_1');
				$('.secG_subMent1').removeClass('secG_subMent1_2');
				$('.secG_subMent1').addClass('secG_subMent1_3');
			}
		} //end if($(window).width()>765)
		
		
		
		
		
		
		
		else {
			//맨처음 부분
			if(current > secA_position && current < secA_position + sec_defaultValueM ) { 
				$('#secA_main_ImgBox2').removeClass('secA_anim2');
				$('#secA_main_ImgBox2').addClass('secA_anim1');
				
				$('#secC_container').removeClass('secC_container2');
				$('#secC_container').addClass('secC_container1');
			}
			
			//secA부분
			if(current > secA_position + sec_defaultValueM && current < secB_position) {
				$('#secA_main_ImgBox1').show();
				$('#secA_main_ImgBox2').addClass('secA_anim2');
				$('#secA_main_ImgBox2').removeClass('secA_anim1');
				
				$('#secC_container').removeClass('secC_container2');
				$('#secC_container').addClass('secC_container1');
			}
			
			
			//secC 부분(전체) -secC : position fixed; 섹션 E까지의 전체높이
			if(current > secC_position && (current < secC_position + (sec_defaultValueM*8)) ) {
				$('#secC_container').removeClass('secC_container1');
				
				$('#secC_container').addClass('secC_container2');
				
				
			}
			
			//secC 성장
			if(current > secC_position && current < (secC_position+ sec_defaultValueM)) {
				$('#secC_container').removeClass('secC_container1');
				
				$('#secC_container').addClass('secC_container2');
				
				//배경 이미지
				$('#secC_main_imgBox2').addClass('secA_anim1');
				$('#secC_main_imgBox3').removeClass('secA_anim1');
				$('#secC_main_imgBox4').removeClass('secA_anim1');
				
				//글자
				$('.secC_main2').addClass('secA_anim1');
				$('.secC_main3').addClass('secC_main3_1');
				$('.secC_main4').addClass('secC_main4_1');
				$('.secC_main2').removeClass('secC_main2_1');
				$('.secC_main3').removeClass('secA_anim1');
				$('.secC_main4').removeClass('secA_anim1');
				
			}
			
			//secC 발전
			if((current > secC_position + sec_defaultValueM) && (current < secC_position + (sec_defaultValueM*4))) {
				$('#secC_container').removeClass('secC_container1');
				$('#secC_container').addClass('secC_container2');
				
				//배경 이미지
				$('#secC_main_imgBox3').addClass('secA_anim1');
				$('#secC_main_imgBox4').removeClass('secA_anim1');
				
				//글자
				$('.secC_main3').addClass('secA_anim1');
				$('.secC_main2').addClass('secA_anim1');
				$('.secC_main4').addClass('secC_main4_1');
				$('.secC_main3').removeClass('secC_main3_1');
				$('.secC_main2').removeClass('secC_main2_1');
				$('.secC_main4').removeClass('secA_anim1');
			}
			
			//secC 그리고 인피아드
			if((current > secC_position + (sec_defaultValueM*4)) && (current < secC_position + (sec_defaultValueM*8))) {
				$('#secC_container').removeClass('secC_container1');
				$('#secC_container').addClass('secC_container2');
				
				//배경 이미지
				$('#secC_main_imgBox4').addClass('secA_anim1');
				
				//글자
				$('.secC_main3').addClass('secA_anim1');
				$('.secC_main2').addClass('secA_anim1');
				$('.secC_main4').addClass('secA_anim1');
				$('.secC_main3').removeClass('secC_main3_1');
				$('.secC_main2').removeClass('secC_main2_1');
				$('.secC_main4').removeClass('secC_main4_1');
				
				
			}
			
			//secC 부분(전체) -secC : position relative; relative로변함
			if(current > secE_position ) {
				$('#secC_container').removeClass('secC_container2');
				$('#secC_container').removeClass('secC_container1');
				$('#secC_container').addClass('secC_container3');
				$('#secC').addClass('secC1');
				
				//secD애들 나옴
				$('.secD_line_box').fadeIn();
				$('.secD_outBox').css('display' , 'flex');
				
				//secF 애들 나옴
				$('.secF_ctnBox').css('display', 'block');
				$('.secF_contentsBox').animate({'opacity': '1'});
				
				
			}
			
			
			
			//secG bewidth us 원래대로
			if(current < secG_position ) {
				$('.secG_mainTopicBox').removeClass('secG_mainTopicBox2');
				$('.secG_mainTopicBox').addClass('secG_mainTopicBox1');
				$('.secG_mainTopicBox').show();
				$('.secG_subTopicBox').hide();
				
				$('.secG_mainMent1').removeClass('secG_mainMent1_2');
				$('.secG_mainMent1').addClass('secG_mainMent1_1');
				
				//아래 멘트관련
				$('.secG_mainMent1').removeClass('secG_mainMent1_2');
				$('.secG_mainMent1').removeClass('secG_mainMent1_3');
				$('.secG_mainMent1').addClass('secG_mainMent1_1');
				
				$('.secG_mainMent2').removeClass('secG_mainMent2_2');
				$('.secG_mainMent2').addClass('secG_mainMent2_1');
				
				$('.secG_subMent1').removeClass('secG_subMent1_2');
				$('.secG_subMent1').removeClass('secG_subMent1_3');
				$('.secG_subMent1').addClass('secG_subMent1_1');
				
			}
			
			//secG bewidth us 진행
			if(current > secG_position && current < secG_position + (sec_defaultValueM*4)) {
				$('.secG_mainTopicBox').removeClass('secG_mainTopicBox1');
				$('.secG_mainTopicBox').addClass('secG_mainTopicBox2');
				
				
				$('.secG_mainMent1').removeClass('secG_mainMent1_1');
				$('.secG_mainMent1').addClass('secG_mainMent1_2');
				
				//아래 멘트관련
				$('.secG_mainMent1').removeClass('secG_mainMent1_1');
				$('.secG_mainMent1').removeClass('secG_mainMent1_3');
				$('.secG_mainMent1').addClass('secG_mainMent1_2');
				
				$('.secG_mainMent2').removeClass('secG_mainMent2_2');
				$('.secG_mainMent2').addClass('secG_mainMent2_1');
				
				$('.secG_subMent1').removeClass('secG_subMent1_2');
				$('.secG_subMent1').removeClass('secG_subMent1_3');
				$('.secG_subMent1').addClass('secG_subMent1_1');
				
			}
			
			//secG 아래 멘트들 바뀜
			if(current > secG_position + (sec_defaultValueM*4) && current < secG_position + (sec_defaultValueM*7) ) { 
				$('.secG_mainMent1').removeClass('secG_mainMent1_1');
				$('.secG_mainMent1').removeClass('secG_mainMent1_2');
				$('.secG_mainMent1').addClass('secG_mainMent1_3');
				
				$('.secG_mainMent2').removeClass('secG_mainMent2_1');
				$('.secG_mainMent2').addClass('secG_mainMent2_2');
				
				$('.secG_subMent1').removeClass('secG_subMent1_2');
				$('.secG_subMent1').removeClass('secG_subMent1_3');
				$('.secG_subMent1').addClass('secG_subMent1_1');
			
			} 
			
			//secG bewidth us 사라짐 foryou 나옴
			if(current > secG_position + (sec_defaultValueM*7) && current < secG_position + (sec_defaultValueM*15)) {
				$('.secG_mainTopicBox').hide();
				$('.secG_subTopicBox').fadeIn();
				$('.secG_subTopicBox').removeClass('secG_subTopicBox1');
				$('.secG_subTopicBox').addClass('secG_subTopicBox2');
				
				//아래 멘트관련
				$('.secG_mainMent1').removeClass('secG_mainMent1_2');
				$('.secG_mainMent1').removeClass('secG_mainMent1_3');
				$('.secG_mainMent1').addClass('secG_mainMent1_1');
				
				$('.secG_mainMent2').removeClass('secG_mainMent2_2');
				$('.secG_mainMent2').addClass('secG_mainMent2_1');
				
				$('.secG_subMent1').removeClass('secG_subMent1_1');
				$('.secG_subMent1').removeClass('secG_subMent1_3');
				$('.secG_subMent1').addClass('secG_subMent1_2');
			}
			
			// foryou 사라짐
			if(current > secG_position + (sec_defaultValueM*15)) {
				$('.secG_subTopicBox').removeClass('secG_subTopicBox2');
				$('.secG_subTopicBox').addClass('secG_subTopicBox1');
				
				//서브 멘트도 사라짐
				$('.secG_subMent1').removeClass('secG_subMent1_1');
				$('.secG_subMent1').removeClass('secG_subMent1_2');
				$('.secG_subMent1').addClass('secG_subMent1_3');
				
			}
		
		}
		
		
	}); //end $(window).scroll(function()
	
}); //end $(function(){
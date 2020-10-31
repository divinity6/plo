


$(function(){
	//기본 secA값
    var secA_defaultValue = 100;
    //PC용 스크롤 값(이값만큼 스크롤하면 반응)
	var secA_sumPC = 200;
    //추가로 더 보여줄구간 스크롤값(secA_sumPC에다가 더할값)
	var secA_addSumPC = 400;
    //MOBILE용 스크롤 값(이값만큼 스크롤하면 반응)
	var secA_sumMobile = 150;
    //추가로 더 보여줄구간 스크롤값(secA_sumMobile에다가 더할값)
	var secA_addSumMobile = 400;
    
    
    
   
	

	
		// 스크롤 반응 이벤트
	$(window).scroll(function(){

		 //현재 스크롤탑위치
    var current = $(window).scrollTop();

    //secA1의 위치
    var secA1_position = $('#secA').offset().top;
        

		//데스크탑 화면일시 765
		if($(window).width() > 765) {
			//-------------------------------secA1-------------------------------

			//원상태--------------이해하기위해 개중요함
			//current이 secA1_position보다크고 (secA1_position + secA1_sum)보다는 작을 때만 실행한다.
			if(current > secA1_position && current < secA1_position + secA_defaultValue ) {
				

	/*------------------------------------------------secA1------------------------------------*/		//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				
				//인피아드로고 opacity 제거
				$('.secA_inpiad_logoTypeBox').removeClass('secA_inpiad_logoTypeBox2');
				$('.secA_inpiad_ctnTypeBox').removeClass('secA_inpiad_ctnTypeBox2');

				//로고의 크기 원상태
				$('.inpiad_platLogo').removeClass('inpiad_platLogo2');
				$('.inpiad_platLogo').addClass('inpiad_platLogo1');
				//로고의 색상변경
				$('.platlogo_path').removeClass('platlogo_path2');
				$('.platlogo_path').addClass('platlogo_path1');

				//로고박스 flex 삭제
				$('.secA1_logo_outBox').removeClass('secA1_logo_outBox2');
                
                //서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');


				//캡션박스를 숨김
				$('.secA1_topicBox').removeClass('secA1_topicBox2');
				$('.secA1_topicBox').addClass('secA1_topicBox1');

				//premium 로고타입숨김
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox2');
				$('.secA1_premium_logoTypeBox').addClass('secA1_premium_logoTypeBox1');


				//플랫 로고박스 원상태로
				$('.secA1_plat_logoBox').removeClass('secA1_plat_logoBox2');
				$('.secA1_plat_logoBox').addClass('secA1_plat_logoBox1');

				
				
	/*------------------------------------------------secA2------------------------------------*/
				//secA1로 캡션 복구 애니메이션
				$('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
				
				
				//secA2 secA1_main_topic 글자크기 복구
				$('.secA1_main_topic').removeClass('main_topic_big2');
				$('.secA1_main_topic').addClass('main_topic_big1');
				
				
				//서브토픽 글자크기 복구
				$('.secA1_sub_topic').removeClass('main_topic_middle2');
				$('.secA1_sub_topic').addClass('main_topic_middle1');
				
				
				//premium 로고타입숨김
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox3');
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox2');
				$('.secA1_premium_logoTypeBox').addClass('secA1_premium_logoTypeBox1');
				
				
				//secA2로 캡션 이동 애니메이션2 및 글자크기제거
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_main_topic').removeClass('main_topic_big3');
				$('.secA1_sub_topic').removeClass('main_topic_middle3');
				
				
				//배경 로고문원래대로
				$('.secA_door').removeClass('secA2_change_door1');
				$('.secA_door').addClass('secA_change_door1');
				
				
				//더커진 배경 로고문 원래대로
				$('.secA_door').removeClass('secA2_change_door2');
				$('.secA_door').addClass('secA_change_door1');
				
				$('.secA_top_door').removeClass('secA2_change_top_door2');
				$('.secA_top_door').addClass('secA_change_top_door1');
				$('.secA_line_door').removeClass('secA2_change_line_door2');
				$('.secA_line_door').addClass('secA_change_line_door1');
				$('.secA_bot_door').removeClass('secA2_change_bot_door2');
				$('.secA_bot_door').addClass('secA_change_bot_door1');
                
                
                
                //--secA2로 캡션 이동 애니메이션 복귀3
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                
            
                //배경 로고문 원래대로
                $('.secA_door').removeClass('secA2_change_door3');
                
				$('.secA_top_door').removeClass('secA2_change_top_door3');
				$('.secA_line_door').removeClass('secA2_change_line_door3');
				$('.secA_bot_door').removeClass('secA2_change_bot_door3');
                
                //---secA2로 캡션 이동 애니메이션 복귀4
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA_door').removeClass('secA2_change_door4');
                
                $('.secA_top_door').removeClass('secA2_change_top_door4');
                $('.secA_line_door').removeClass('secA2_change_line_door4');
                $('.secA_bot_door').removeClass('secA2_change_bot_door4');
                
                
                
                //secA2 두번째 캡션 제거
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
                //secA2 두번째캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
                
                
                //secA1캡 display 보임
                $('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA1_ctnBox').addClass('secA1_ctnBox1');
				
				
				
				
				
	/*------------------------------------------------secA3------------------------------------*/
				
				
				
				//secA3 배경로고 제거
				$('.secA_door').removeClass('secA3_change_door1');
				
				$('.secA_top_door').removeClass('secA3_change_top_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_bot_door').removeClass('secA3_change_bot_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				
				
				//---secA3캡션제거
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');
				
				//--2배경 로고문 변화시작제거2
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
				
                
                
/*------------------------------------------------secA4------------------------------------*/                
                
                
				//네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				
                
                
                
                //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');
                
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5'); 
                
                
                
                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');
                
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');
				
                
				//블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
				
				
				//배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
                
                
                
				
/*------------------------------------------------secA5------------------------------------*/				
				
                
				//다섯번째 캡션 제거
				$('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
				$('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
				$('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');
				
				
				//다섯번째 처음 하위캡션 제거
				$('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
				$('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
				$('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

				$('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
				$('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
				$('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

				$('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
				$('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
				$('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');
				
				//캡션 안 주제 복구
				$('.secA5_topic_texts').removeClass('secA5_topic_texts2');
				$('.secA5_topic_texts').removeClass('secA5_topic_texts3');
				$('.secA5_topic_texts').addClass('secA5_topic_texts1');

				//캡션안 패스 크기 및 색 복구
				$('.secA5_design_icon').addClass('secA5_design_icon1');
				$('.secA5_extens_icon').addClass('secA5_extens_icon1');
				$('.secA5_skill_icon').addClass('secA5_skill_icon1');

				$('.secA5_design_icon').removeClass('secA5_design_icon2');
				$('.secA5_design_icon').removeClass('secA5_design_icon3');
				$('.secA5_design_icon').removeClass('secA5_design_icon4');
				$('.secA5_design_icon').removeClass('secA5_design_icon5');
				$('.secA5_extens_icon').removeClass('secA5_extens_icon2');
				$('.secA5_extens_icon').removeClass('secA5_extens_icon3');
				$('.secA5_extens_icon').removeClass('secA5_extens_icon4');
				$('.secA5_extens_icon').removeClass('secA5_extens_icon5');
				$('.secA5_skill_icon').removeClass('secA5_skill_icon2');
				$('.secA5_skill_icon').removeClass('secA5_skill_icon3');
				$('.secA5_skill_icon').removeClass('secA5_skill_icon4');
				$('.secA5_skill_icon').removeClass('secA5_skill_icon5');

				$('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
				$('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
				$('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

				$('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
				$('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
				$('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');
				
				
				//캡션안 + 박스  숨기기
				$('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
				$('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
				$('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
				$('.secA5_in_plusBox').addClass('secA5_in_plusBox1');
				
				
/*------------------------------------------------secA6------------------------------------*/		
				
				
				//빅로고 제거(디스플레이 삭제)
				$('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
				$('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
				$('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
				$('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
				$('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
				$('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');
				
				
				//프리미엄 로고 및 빅로고 복구
				$('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
				$('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
				$('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');
				
				
			} //end if(current > secA1_position && current < (secA1_position + secA_sum))




			//여기가 첫번경지점
			if(current > secA1_position + secA_defaultValue && current < (secA1_position + (secA_defaultValue + secA_sumPC))) {
				
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
                
                //서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
				
				//로고의 크기복구
				$('.inpiad_platLogo').addClass('inpiad_platLogo1');
				$('.inpiad_platLogo').removeClass('inpiad_platLogo2');
                
                
				//인피아드로고 반투명으로바꿈
				$('.secA_inpiad_logoTypeBox').removeClass('secA_inpiad_logoTypeBox3');
				$('.secA_inpiad_logoTypeBox').addClass('secA_inpiad_logoTypeBox2');

				$('.secA_inpiad_ctnTypeBox').removeClass('secA_inpiad_ctnTypeBox3');
				$('.secA_inpiad_ctnTypeBox').addClass('secA_inpiad_ctnTypeBox2');
                


				//캡션박스를 숨김
				$('.secA1_topicBox').removeClass('secA1_topicBox2');
				$('.secA1_topicBox').addClass('secA1_topicBox1');


				//premium 로고타입숨김
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox2');
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox3');
				$('.secA1_premium_logoTypeBox').addClass('secA1_premium_logoTypeBox1');


				//플랫 로고박스 원상태로
				$('.secA1_plat_logoBox').removeClass('secA1_plat_logoBox2');
				$('.secA1_plat_logoBox').addClass('secA1_plat_logoBox1');
				
				
				//premium 로고타입숨김
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox3');
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox2');
				$('.secA1_premium_logoTypeBox').addClass('secA1_premium_logoTypeBox1');
                
                //secA1캡 display 보임
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
                

			} 



            


			if(current > (secA1_position + (secA_defaultValue + secA_sumPC)) && current < (secA1_position + (secA_defaultValue + (secA_sumPC*2))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				//서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
				

				//로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');

				//로고의 색상변경
				$('.platlogo_path').removeClass('platlogo_path1');
				$('.platlogo_path').addClass('platlogo_path2');



				//인피아드로고박스들을 보임
				$('.secA_inpiad_logoTypeBox').show();
				$('.secA_inpiad_ctnTypeBox').show();



				//인피아드로고 투명으로바꿈
				$('.secA_inpiad_logoTypeBox').removeClass('secA_inpiad_logoTypeBox2');
				$('.secA_inpiad_logoTypeBox').addClass('secA_inpiad_logoTypeBox3');

				$('.secA_inpiad_ctnTypeBox').removeClass('secA_inpiad_ctnTypeBox2');
				$('.secA_inpiad_ctnTypeBox').addClass('secA_inpiad_ctnTypeBox3');

				//플랫 로고박스 원상태로
				$('.secA1_plat_logoBox').removeClass('secA1_plat_logoBox2');
				$('.secA1_plat_logoBox').addClass('secA1_plat_logoBox1');


				//캡션박스를 숨김
				$('.secA1_topicBox').removeClass('secA1_topicBox2');
				$('.secA1_topicBox').addClass('secA1_topicBox1');

				//글자숨김
				$('.secA1_main_topic').eq(0).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(0).addClass('secA1_main_topic1');

                //로고박스 flex 제거
				$('.secA1_logo_outBox').removeClass('secA1_logo_outBox2');
                
                
				//premium 등장
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox2');
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox1');
				$('.secA1_premium_logoTypeBox').addClass('secA1_premium_logoTypeBox3');
                
                //secA1_ctnBox 박스 원상태로 복구
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
			}



			if(current > (secA1_position + (secA_defaultValue + (secA_sumPC*2))) && current < (secA1_position + (secA_defaultValue + (secA_sumPC*3))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
                
                
                //서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
                
                //로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');
				
				//로고박스 flex 제거
				$('.secA1_logo_outBox').removeClass('secA1_logo_outBox2');

				//premium 로고 등장
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox2');
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox1');
				$('.secA1_premium_logoTypeBox').addClass('secA1_premium_logoTypeBox3');

                //secA1캡 display 보임
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
			}




			//정상을 넘어, 미래를 향한 지점
			if(current > (secA1_position + (secA_defaultValue + (secA_sumPC*3))) && current < (secA1_position + (secA_defaultValue + (secA_sumPC*4))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				//서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
                
                //로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');
                

				//인피아드로고박스들을 숨김
				$('.secA_inpiad_logoTypeBox').hide();
				$('.secA_inpiad_ctnTypeBox').hide();

				//로고박스 flex 추가
				$('.secA1_logo_outBox').addClass('secA1_logo_outBox2');

				//플랫 로고박스 정렬
				$('.secA1_plat_logoBox').removeClass('secA1_plat_logoBox1');
				$('.secA1_plat_logoBox').addClass('secA1_plat_logoBox2');

				//캡션박스를 보임
				$('.secA1_topicBox').removeClass('secA1_topicBox1');
				$('.secA1_topicBox').addClass('secA1_topicBox2');


				//다음단계 글자를 숨김
				$('.secA1_main_topic').eq(2).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(2).addClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(1).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(1).addClass('secA1_main_topic1');
				//첫번째 메인 글자가 보임
				$('.secA1_main_topic').eq(0).removeClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(0).addClass('secA1_main_topic2');


				//premium 로고타입inline
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox2');
				$('.secA1_premium_logoTypeBox').addClass('secA1_premium_logoTypeBox3');
                
                
                
                //secA1캡 원상태로복구
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
			}






			if(current > (secA1_position + (secA_defaultValue + (secA_sumPC*4))) && current < (secA1_position + (secA_defaultValue + (secA_sumPC*5))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
                
                //서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
                
                //로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');
                
                
				//로고박스 flex 추가
				$('.secA1_logo_outBox').addClass('secA1_logo_outBox2');
				
				//다음단계 글자를 숨김
				$('.secA1_main_topic').eq(3).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(3).addClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(2).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(2).addClass('secA1_main_topic1');
				//두번째 메인 글자가 보임
				$('.secA1_main_topic').eq(1).removeClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(1).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(0).addClass('secA1_main_topic2');
                
                
                //secA1캡 원상태로복구
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');

			}



			if(current > (secA1_position + (secA_defaultValue + (secA_sumPC*5))) && current < (secA1_position + (secA_defaultValue + (secA_sumPC*6))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
                
                //서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
				
                
                //로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');
				
				//다음단계 글자를 숨김
				$('.secA1_main_topic').eq(4).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(4).addClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(3).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(3).addClass('secA1_main_topic1');
				// 메인 글자가 보임
				$('.secA1_main_topic').eq(2).removeClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(2).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(1).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(0).addClass('secA1_main_topic2');
                
                
                //secA1캡 원상태로복구
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');

			}



			if(current > (secA1_position + (secA_defaultValue + (secA_sumPC*6))) && current < (secA1_position + (secA_defaultValue + (secA_sumPC*7))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
                
                //서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
                
				
                //로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');
                
				//다음단계 글자를 숨김
				$('.secA1_main_topic').eq(5).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(5).addClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(4).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(4).addClass('secA1_main_topic1');
				//메인 글자가 보임
				$('.secA1_main_topic').eq(3).removeClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(3).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(2).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(1).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(0).addClass('secA1_main_topic2');


                //secA1캡 원상태로복구
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');

			}



			if(current > (secA1_position + (secA_defaultValue + (secA_sumPC*7))) && current < (secA1_position + (secA_defaultValue + (secA_sumPC*8))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
                
                //서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
				
				
                //로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');
                
				//다음단계 글자를 숨김
				$('.secA1_main_topic').eq(6).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(6).addClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(5).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(5).addClass('secA1_main_topic1');


				//메인 글자가 보임
				$('.secA1_main_topic').eq(4).removeClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(4).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(3).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(2).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(1).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(0).addClass('secA1_main_topic2');



			}



			if(current > (secA1_position + (secA_defaultValue + (secA_sumPC*8))) && current < (secA1_position + (secA_defaultValue + (secA_sumPC*9))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				//서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
                
                //로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				//다음단계 글자를 숨김
				$('.secA1_main_topic').eq(7).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(7).addClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(6).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(6).addClass('secA1_main_topic1');


				//메인 글자가 보임
				$('.secA1_main_topic').eq(5).removeClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(5).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(4).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(3).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(2).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(1).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(0).addClass('secA1_main_topic2');


                //secA1캡 원상태로복구
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
			}



            //서브 지점
			if(current > (secA1_position + (secA_defaultValue + (secA_sumPC*9))) && current < (secA1_position + (secA_defaultValue + (secA_sumPC*10))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				//서브 글자가 보임
				$('.secA1_sub_topic').removeClass('secA1_sub_topic1');
				$('.secA1_sub_topic').addClass('secA1_sub_topic2');
                
                //로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');
                
				//다음단계 글자를 숨김
				$('.secA1_main_topic').eq(8).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(8).addClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(7).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(7).addClass('secA1_main_topic1');

				//메인 글자가 보임
				$('.secA1_main_topic').eq(6).removeClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(6).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(5).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(4).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(3).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(2).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(1).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(0).addClass('secA1_main_topic2');
                
                
                //secA1캡 원상태로복구
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');

			}




			if(current > (secA1_position + (secA_defaultValue + (secA_sumPC*10))) && current < (secA1_position + (secA_defaultValue + (secA_sumPC*11))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');
                
                //서브 글자가 보임
				$('.secA1_sub_topic').removeClass('secA1_sub_topic1');
				$('.secA1_sub_topic').addClass('secA1_sub_topic2');
				
				//다음단계 글자를 숨김
				$('.secA1_main_topic').eq(9).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(9).addClass('secA1_main_topic1');
				//다음단계 글자를 숨김
				$('.secA1_main_topic').eq(8).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(8).addClass('secA1_main_topic1');

				//메인 글자가 보임
				$('.secA1_main_topic').eq(7).removeClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(7).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(6).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(5).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(4).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(3).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(2).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(1).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(0).addClass('secA1_main_topic2');
				
				//secA2 secA1_main_topic 글자크기 복구
				$('.secA1_main_topic').removeClass('main_topic_big2');
				$('.secA1_main_topic').addClass('main_topic_big1');
				
				
				//서브토픽 글자크기 복구
				$('.secA1_sub_topic').removeClass('main_topic_middle2');
				$('.secA1_sub_topic').addClass('main_topic_middle1');
				
				//secA2로 캡션 이동 애니메이션2 및 글자크기제거
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_main_topic').removeClass('main_topic_big3');
				$('.secA1_sub_topic').removeClass('main_topic_middle3');
                
                
                //secA2 두번째 캡션 제거
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');

			}




			if(current > (secA1_position + (secA_defaultValue + (secA_sumPC*11))) && current < (secA1_position + (secA_defaultValue + (secA_sumPC*12)))) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');
                
                
                //서브 글자가 보임
				$('.secA1_sub_topic').addClass('secA1_sub_topic2');
				$('.secA1_sub_topic').removeClass('secA1_sub_topic1');
				
				//다음단계 글자를 숨김
				$('.secA1_main_topic').eq(9).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(9).addClass('secA1_main_topic1');

				//메인 글자가 보임
				$('.secA1_main_topic').eq(8).removeClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(8).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(7).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(6).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(5).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(4).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(3).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(2).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(1).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(0).addClass('secA1_main_topic2');
				
				//secA2 secA1_main_topic 글자크기 복구
				$('.secA1_main_topic').removeClass('main_topic_big2');
				$('.secA1_main_topic').addClass('main_topic_big1');
				
				//서브토픽 글자크기 복구
				$('.secA1_sub_topic').removeClass('main_topic_middle2');
				$('.secA1_sub_topic').addClass('main_topic_middle1');
				
				//secA2로 캡션 이동 애니메이션2 및 글자크기제거
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_main_topic').removeClass('main_topic_big3');
				$('.secA1_sub_topic').removeClass('main_topic_middle3');
				
				//배경 로고문원래대로
				$('.secA_door').removeClass('secA2_change_door1');
				$('.secA_door').addClass('secA_change_door1');
                
                
                //secA2 두번째 캡션 제거
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');

			}


            
			if(current > (secA1_position + (secA_defaultValue + (secA_sumPC*12))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*13)+secA_addSumPC))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 

				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				//서브 글자가 보임
				$('.secA1_sub_topic').removeClass('secA1_sub_topic1');
				$('.secA1_sub_topic').addClass('secA1_sub_topic2');
				

				//메인 글자가 보임
				$('.secA1_main_topic').eq(9).removeClass('secA1_main_topic1');
				$('.secA1_main_topic').eq(9).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(8).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(7).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(6).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(5).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(4).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(3).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(2).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(1).addClass('secA1_main_topic2');
                $('.secA1_main_topic').eq(0).addClass('secA1_main_topic2');

				//secA1로 캡션 복구 애니메이션
				$('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
                
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox5');
				
				//secA2 secA1_main_topic 글자크기 복구
				$('.secA1_main_topic').removeClass('main_topic_big2');
				$('.secA1_main_topic').addClass('main_topic_big1');
				
				
				//서브토픽 글자크기 복구
				$('.secA1_sub_topic').removeClass('main_topic_middle2');
				$('.secA1_sub_topic').addClass('main_topic_middle1');
				
				//secA2로 캡션 이동 애니메이션2 및 글자크기제거
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_main_topic').removeClass('main_topic_big3');
				$('.secA1_sub_topic').removeClass('main_topic_middle3');
				
				//배경 로고문원래대로
				$('.secA_door').removeClass('secA2_change_door1');
				$('.secA_door').addClass('secA_change_door1');
				
				//더커진 배경 로고문 원래대로
				$('.secA_door').removeClass('secA2_change_door2');
				$('.secA_door').addClass('secA_change_door1');
				
				$('.secA_top_door').removeClass('secA2_change_top_door2');
				$('.secA_top_door').addClass('secA_change_top_door1');
				$('.secA_line_door').removeClass('secA2_change_line_door2');
				$('.secA_line_door').addClass('secA_change_line_door1');
				$('.secA_bot_door').removeClass('secA2_change_bot_door2');
				$('.secA_bot_door').addClass('secA_change_bot_door1');
                
                
                //--secA2로 캡션 이동 애니메이션 복귀3
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                
            
                //배경 로고문 원래대로
                $('.secA_door').removeClass('secA2_change_door3');
                
				$('.secA_top_door').removeClass('secA2_change_top_door3');
				$('.secA_line_door').removeClass('secA2_change_line_door3');
				$('.secA_bot_door').removeClass('secA2_change_bot_door3');
                
                //---secA2로 캡션 이동 애니메이션 복귀4
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA_door').removeClass('secA2_change_door4');
                
                $('.secA_top_door').removeClass('secA2_change_top_door4');
                $('.secA_line_door').removeClass('secA2_change_line_door4');
                $('.secA_bot_door').removeClass('secA2_change_bot_door4');
                
                
                //secA2 두번째 캡션 제거
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
                //secA2 두번째캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
				
				
				
				//---secA3캡션제거
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');

			}





			
			if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*13)+secA_addSumPC))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*14)+secA_addSumPC))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				//서브 글자가 보임
				$('.secA1_sub_topic').removeClass('secA1_sub_topic1');
				$('.secA1_sub_topic').addClass('secA1_sub_topic2');

				//secA1로 캡션 복구 애니메이션
				$('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
                
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
                
				
				//secA2 secA1_main_topic 글자크기 복구
				$('.secA1_main_topic').removeClass('main_topic_big2');
				$('.secA1_main_topic').addClass('main_topic_big1');
				
				
				//서브토픽 글자크기 변경
				$('.secA1_sub_topic').removeClass('main_topic_middle1');
				$('.secA1_sub_topic').addClass('main_topic_middle2');
				
				//secA2로 캡션 이동 애니메이션2 및 글자크기제거
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_main_topic').removeClass('main_topic_big3');
				$('.secA1_sub_topic').removeClass('main_topic_middle3');
				
				//배경 로고문원래대로
				$('.secA_door').removeClass('secA2_change_door1');
				$('.secA_door').addClass('secA_change_door1');
				
				//더커진 배경 로고문 원래대로
				$('.secA_door').removeClass('secA2_change_door2');
				$('.secA_door').addClass('secA_change_door1');
				
				$('.secA_top_door').removeClass('secA2_change_top_door2');
				$('.secA_top_door').addClass('secA_change_top_door1');
				$('.secA_line_door').removeClass('secA2_change_line_door2');
				$('.secA_line_door').addClass('secA_change_line_door1');
				$('.secA_bot_door').removeClass('secA2_change_bot_door2');
				$('.secA_bot_door').addClass('secA_change_bot_door1');
                
                
                
                //--secA2로 캡션 이동 애니메이션 복귀3
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                
            
                //배경 로고문 원래대로
                $('.secA_door').removeClass('secA2_change_door3');
                
				$('.secA_top_door').removeClass('secA2_change_top_door3');
				$('.secA_line_door').removeClass('secA2_change_line_door3');
				$('.secA_bot_door').removeClass('secA2_change_bot_door3');
                
                //---secA2로 캡션 이동 애니메이션 복귀4
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA_door').removeClass('secA2_change_door4');
                
                $('.secA_top_door').removeClass('secA2_change_top_door4');
                $('.secA_line_door').removeClass('secA2_change_line_door4');
                $('.secA_bot_door').removeClass('secA2_change_bot_door4');
                
                //secA2 두번째 캡션 제거
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
                //secA2 두번째캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
				
				
				
				//---secA3캡션제거
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');
				
				//--2배경 로고문 변화시작제거2
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
				
			}



	//-------------------------------secA2-------------------------------


			//캡션위로 서서히 사라짐 시작
			if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*14)+secA_addSumPC))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*15)+secA_addSumPC)))) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				

				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
                //서브 글자가 보임
				$('.secA1_sub_topic').removeClass('secA1_sub_topic1');
				$('.secA1_sub_topic').addClass('secA1_sub_topic2');
                
                
				//secA2로 캡션 이동 애니메이션
				
				$('.secA1_ctnBox').addClass('secA2_ctnBox1');
                
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                $('.secA1_ctnBox').removeClass('secA1_ctnBox1');
                
				//secA2 secA1_main_topic 글자크기 변경
				$('.secA1_main_topic').removeClass('main_topic_big1');
				$('.secA1_main_topic').addClass('main_topic_big2');
				
				//서브토픽 글자크기변경
				$('.secA1_sub_topic').removeClass('main_topic_middle1');
				$('.secA1_sub_topic').addClass('main_topic_middle2');
				
				//secA2로 캡션 이동 애니메이션2 및 글자크기제거
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_main_topic').removeClass('main_topic_big3');
				$('.secA1_sub_topic').removeClass('main_topic_middle3');
				
				
				//배경 로고문이 커짐
				$('.secA_door').removeClass('secA_change_door1');
				$('.secA_door').addClass('secA2_change_door1');
				
				//더커진 배경 로고문 원래대로
				$('.secA_door').removeClass('secA2_change_door2');
				$('.secA_door').addClass('secA_change_door1');
				
				$('.secA_top_door').addClass('secA_change_top_door1');
				$('.secA_line_door').addClass('secA_change_line_door1');
				$('.secA_bot_door').addClass('secA_change_bot_door1');
				
				$('.secA_top_door').removeClass('secA2_change_top_door2');
				$('.secA_line_door').removeClass('secA2_change_line_door2');
				$('.secA_bot_door').removeClass('secA2_change_bot_door2');
				
                
                
                
                
                //--secA2로 캡션 이동 애니메이션 복귀3
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                
            
                //배경 로고문 원래대로
                $('.secA_door').removeClass('secA2_change_door3');
                
				$('.secA_top_door').removeClass('secA2_change_top_door3');
				$('.secA_line_door').removeClass('secA2_change_line_door3');
				$('.secA_bot_door').removeClass('secA2_change_bot_door3');
                
                //---secA2로 캡션 이동 애니메이션 복귀4
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA_door').removeClass('secA2_change_door4');
                
                $('.secA_top_door').removeClass('secA2_change_top_door4');
                $('.secA_line_door').removeClass('secA2_change_line_door4');
                $('.secA_bot_door').removeClass('secA2_change_bot_door4');
                
                
                //secA2 두번째 캡션 제거
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
                //secA2 두번째캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
                
                //secA1캡 display 보임
                $('.secA1_ctnBox').show();
				
				
				//secA3 배경로고 제거
				$('.secA_door').removeClass('secA3_change_door1');
				
				$('.secA_top_door').removeClass('secA3_change_top_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_bot_door').removeClass('secA3_change_bot_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				
				
				//---secA3캡션제거
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');
				
				//--2배경 로고문 변화시작제거2
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
			}
			
			
			
			if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*15)+secA_addSumPC))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*16)+secA_addSumPC))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
                //서브 글자가 보임
				$('.secA1_sub_topic').removeClass('secA1_sub_topic1');
				$('.secA1_sub_topic').addClass('secA1_sub_topic2');
                
				
				//secA2로 캡션 이동 애니메이션2
                $('.secA1_ctnBox').addClass('secA2_ctnBox2');
                
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox5');
				
				//secA2 secA1_main_topic 글자크기 변경
				$('.secA1_main_topic').removeClass('main_topic_big2');
				$('.secA1_main_topic').addClass('main_topic_big3');
				
				//서브토픽 글자크기변경
				$('.secA1_sub_topic').removeClass('main_topic_middle2');
				$('.secA1_sub_topic').addClass('main_topic_middle3');
				
				//배경 로고문이 더커짐2
				$('.secA_door').removeClass('secA2_change_door1');
				$('.secA_door').addClass('secA2_change_door2');
				
				$('.secA_top_door').removeClass('secA_change_top_door1');
				$('.secA_top_door').addClass('secA2_change_top_door2');
				$('.secA_line_door').removeClass('secA_change_line_door1');
				$('.secA_line_door').addClass('secA2_change_line_door2');
				$('.secA_bot_door').removeClass('secA_change_bot_door1');
				$('.secA_bot_door').addClass('secA2_change_bot_door2');
                
                
                //--secA2로 캡션 이동 애니메이션 복귀3
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                
            
                //배경 로고문 원래대로
                $('.secA_door').removeClass('secA2_change_door3');         
				$('.secA_top_door').removeClass('secA2_change_top_door3');
				$('.secA_line_door').removeClass('secA2_change_line_door3');
				$('.secA_bot_door').removeClass('secA2_change_bot_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                //---secA2로 캡션 이동 애니메이션 복귀4
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA_door').removeClass('secA2_change_door4');
                
                $('.secA_top_door').removeClass('secA2_change_top_door4');
                $('.secA_line_door').removeClass('secA2_change_line_door4');
                $('.secA_bot_door').removeClass('secA2_change_bot_door4');
                
                
               
                //secA2 두번째 캡션 제거
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
                //secA2 두번째캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
                
                //secA1캡 display 보임
                $('.secA1_ctnBox').show();
				
				
				//secA3 배경로고 제거
				$('.secA_door').removeClass('secA3_change_door1');
				
				$('.secA_top_door').removeClass('secA3_change_top_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_bot_door').removeClass('secA3_change_bot_door1');
				
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				
				
				//---secA3캡션제거
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');
				
				//--2배경 로고문 변화시작제거2
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');

			}
            
            
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*16)+secA_addSumPC))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*17)+secA_addSumPC))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
                //-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				
                //secA2로 캡션 이동 애니메이션3
                $('.secA1_ctnBox').addClass('secA2_ctnBox3');
                
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
            
                //배경 로고문이 더커짐3
                $('.secA_door').removeClass('secA2_change_door2');
				$('.secA_door').addClass('secA2_change_door3');
                
				$('.secA_top_door').removeClass('secA2_change_top_door2');
				$('.secA_top_door').addClass('secA2_change_top_door3');
				$('.secA_line_door').removeClass('secA2_change_line_door2');
				$('.secA_line_door').addClass('secA2_change_line_door3');
				$('.secA_bot_door').removeClass('secA2_change_bot_door2');
				$('.secA_bot_door').addClass('secA2_change_bot_door3');
            
                
                //---secA2로 캡션 이동 애니메이션 복귀4
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA_door').removeClass('secA2_change_door4');
                
                $('.secA_top_door').removeClass('secA2_change_top_door4');
                $('.secA_line_door').removeClass('secA2_change_line_door4');
                $('.secA_bot_door').removeClass('secA2_change_bot_door4');
				
                
                
                //secA2 두번째 캡션등장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox1');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox2');
                //secA2 두번째캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
                
                //secA1캡 display 보임
                $('.secA1_ctnBox').show();
				
				
				//secA3 배경로고 제거
				$('.secA_door').removeClass('secA3_change_door1');
				
				$('.secA_top_door').removeClass('secA3_change_top_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_bot_door').removeClass('secA3_change_bot_door1');
				
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				
				//---secA3캡션제거
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');
				
				//--2배경 로고문 변화시작제거2
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
                
            }
            
            //두번째 캡션 등장지점
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*17)+secA_addSumPC))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*18)+(secA_addSumPC*2)))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
                //-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
                
                //secA1캡 display 보임
                $('.secA1_ctnBox').addClass('secA2_ctnBox4');
                
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                //배경 로고문이 더커짐3
                $('.secA_door').removeClass('secA2_change_door3');
				$('.secA_door').addClass('secA2_change_door4');
                
				$('.secA_top_door').removeClass('secA2_change_top_door3');
				$('.secA_top_door').addClass('secA2_change_top_door4');
				$('.secA_line_door').removeClass('secA2_change_line_door3');
				$('.secA_line_door').addClass('secA2_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_bot_door').removeClass('secA2_change_bot_door3');
				$('.secA_bot_door').addClass('secA2_change_bot_door4');
				
            
                //secA2 두번째 캡션 진하게
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox1');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox3');
                //secA2 두번째캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
                
                //secA1캡 display 보임
                $('.secA1_ctnBox').show();
				
				//secA3 배경로고 제거
				$('.secA_door').removeClass('secA3_change_door1');
				
				$('.secA_top_door').removeClass('secA3_change_top_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_bot_door').removeClass('secA3_change_bot_door1');
				
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				
				
				//---secA3캡션제거
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');
				
				//--2배경 로고문 변화시작제거2
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
				
				
				//네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				
				
                //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');
                
                
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5'); 
                
                
                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');
                
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');
                
				//블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
				
				
				
				
				//배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
            
            }
            
            
		
		
		
	   //-------------------------------secA3--------------------------------------------	
            
            //두번째 캡션 사라지는 지점
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*18)+(secA_addSumPC*2)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*19)+(secA_addSumPC*2)))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
                //-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				
                //secA2 두번째 캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox4');
                
                
                //secA1캡 display 숨김
                $('.secA1_ctnBox').removeClass('secA1_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                
                $('.secA1_ctnBox').addClass('secA2_ctnBox5');
				
				//-배경 로고문 변화시작1
				$('.secA_door').removeClass('secA2_change_door4');
				$('.secA_door').addClass('secA3_change_door1');
				
				//로고문안쪽 속성
				$('.secA_top_door').addClass('secA3_change_top_door1');
				$('.secA_line_door').addClass('secA3_change_line_door1');
				$('.secA_bot_door').addClass('secA3_change_bot_door1');
				
				$('.secA_top_door').removeClass('secA2_change_top_door4');
				$('.secA_line_door').removeClass('secA2_change_line_door4');
				$('.secA_bot_door').removeClass('secA2_change_bot_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				
				//---secA3캡션등장
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox1');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox2');
				
				//--2배경 로고문 변화시작제거2
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
				
				//네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				
                
                
                //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');
                
                
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5'); 
                
                
                
				//패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');
                
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');
				
				//블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
				
				
				
				//배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
            }

		
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*19)+(secA_addSumPC*2)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*20)+(secA_addSumPC*2)))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
                //-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				
                //secA1캡 display 숨김
                $('.secA1_ctnBox').removeClass('secA1_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                
                $('.secA1_ctnBox').addClass('secA2_ctnBox5');
                
                
				//secA2 캡션박스 완전히 제거
				$('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
				$('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
				
				
				//-2배경 로고문 변화시작2
				$('.secA_door').removeClass('secA3_change_door1');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
				$('.secA_door').addClass('secA3_change_door2');
				
				//로고문안쪽속성 제거중(및 추가변화)
				$('.secA_top_door').addClass('secA3_change_top_door1');
				$('.secA_line_door').addClass('secA3_change_line_door2');
				$('.secA_bot_door').addClass('secA3_change_bot_door1');
				
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				$('.secA_top_door').removeClass('secA2_change_top_door4');
				$('.secA_line_door').removeClass('secA2_change_line_door4');
				$('.secA_bot_door').removeClass('secA2_change_bot_door4');
				
				
				//---secA3캡션 변화
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox1');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox3');
				
				
				//네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				
				
                
                //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');
                
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5'); 
                
                
                
                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');
				
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');
                
                
				//블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
				
				
				
				//배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
				
				
			}

		
		
			//세번째 캡션 완전한 등장
			 if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*20)+(secA_addSumPC*2)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*21)+(secA_addSumPC*2)))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');  
				 
				 
                //-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				 
				 
				 //secA1캡 display 숨김
                $('.secA1_ctnBox').removeClass('secA1_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                
                $('.secA1_ctnBox').addClass('secA2_ctnBox5');
                 
                 
				//secA2 캡션박스 완전히 제거
				$('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
				$('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
				
				
				//-2배경 로고문 변화시작3
				$('.secA_door').removeClass('secA3_change_door1');
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
				$('.secA_door').addClass('secA3_change_door3');
				 
				 //로고문안쪽속성 제거중(및 추가변화)
				$('.secA_top_door').addClass('secA3_change_top_door1');
				$('.secA_line_door').addClass('secA3_change_line_door3');
				$('.secA_bot_door').addClass('secA3_change_bot_door1');
				
				$('.secA_line_door').removeClass('secA3_change_line_door2'); 
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				$('.secA_top_door').removeClass('secA2_change_top_door4');
				$('.secA_line_door').removeClass('secA2_change_line_door4');
				$('.secA_bot_door').removeClass('secA2_change_bot_door4');
				 
				
				//---secA3캡션 변화
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox1');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox4');
				 
				 
				
				//네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				 
				
                //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5'); 
                
                 
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');  
                 
                 
                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');
                 
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1'); 
                 
				 //블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3'); 
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5'); 
				 
				 
				 
				 
				//배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				 
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
			}
		
		
		
			 if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*21)+(secA_addSumPC*2)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*22)+(secA_addSumPC*3)))) ) {
                 
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');  
				 
				 
                //-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				 
				 
				 //secA1캡 display 숨김
                $('.secA1_ctnBox').removeClass('secA1_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                
                $('.secA1_ctnBox').addClass('secA2_ctnBox5');
                 
                 
				//secA2 캡션박스 완전히 제거
				$('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
				$('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
				
				
				//-2배경 로고문 변화시작4
				$('.secA_door').removeClass('secA3_change_door1');
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door5');
				$('.secA_door').addClass('secA3_change_door4');
				 
				 //로고문안쪽속성 제거중(및 추가변화)
				 $('.secA_line_door').addClass('secA3_change_line_door3');
				 
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				$('.secA_line_door').removeClass('secA2_change_line_door4');
				 
				
				//---secA3캡션 변화
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox1');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox4');
				 
				 
				 
				 //네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				 
                 
                 //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');
                
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');  
                 
                 
				//패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');
                 
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');
                 
                 
				 //블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3'); 
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5'); 
				 
				 
				 
				 
				//배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				 
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
			}
		
        
            
			//배경화면 와이드하게 바낌
			 if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*22)+(secA_addSumPC*3)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*23)+(secA_addSumPC*3)))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				 
				 
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				 
				 
				 
				//secA1캡 display 숨김
                $('.secA1_ctnBox').removeClass('secA1_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                
                $('.secA1_ctnBox').addClass('secA2_ctnBox5');
				
                 
                 
				//-2배경 로고문 변화시작5
				$('.secA_door').removeClass('secA3_change_door1');
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').addClass('secA3_change_door5');
				 
				 //로고문안쪽속성 제거중(및 추가변화)
				$('.secA_line_door').addClass('secA3_change_line_door2');
				 
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				$('.secA_line_door').removeClass('secA2_change_line_door4');
				 
				
				//---secA3캡션 변화
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox1');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox4');
				 
				 
				 //네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				 $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				 
				 
                 
                //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');
                
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');  
                 
                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1'); 
                
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1'); 
                 
                 
                 
				 //블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5'); 
				 
				 
				 
				 
				//배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				 
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6'); 
				 
				 
			}
		
		
			 if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*23)+(secA_addSumPC*3)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*24)+(secA_addSumPC*3)))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				 
				 
				 
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				 
				 
				 //-2배경 로고문 고정
				$('.secA_door').removeClass('secA3_change_door1');
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
			 	$('.secA_door').addClass('secA3_change_door5');
				 
			 	//로고문안쪽속성 제거중(및 추가변화)
				$('.secA_line_door').addClass('secA3_change_line_door1');
				 
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				$('.secA_line_door').removeClass('secA2_change_line_door4');
			 
				 
				 
				 
			 	//---secA3캡션 변화
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox1');
			 	$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
			 	$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox5');
				 
				 //네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				 $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				 
				 
                 
                 //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');
                 
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5'); 
                 
                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');
                 
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1'); 
                 
                 
				 //블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
				 
				 
				 
				 //배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				 
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
				 
				 
			 }
		
		
		//-------------------------------secA4 등장 지점--------------------------------------------	
		
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*24)+(secA_addSumPC*3)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*25)+(secA_addSumPC*3)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색 복구
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');

                //secA1캡 display 숨김
                $('.secA1_ctnBox').removeClass('secA1_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');

                $('.secA1_ctnBox').addClass('secA2_ctnBox5');



                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').addClass('secA3_change_door5');

                //로고문안쪽속성 제거중(및 추가변화)
                $('.secA_line_door').addClass('secA3_change_line_door4');

                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA2_change_line_door4');

                //---secA3캡션 변화
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox1');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
                $('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox6');


                //네번째 캡션등장1
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox2');

                //패스효과
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');

                //서브 패스
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');

                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');

                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');

                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');

                //블랭크박스들제거!!(배경영상을 가리기위함)
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');



                //배경영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');



            }

            //secA3 캡션 퇴장 지점
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*25)+(secA_addSumPC*3)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*26)+(secA_addSumPC*3)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색 복구
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');

                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').addClass('secA3_change_door5');

                //로고문안쪽속성 제거중(및 추가변화)
                $('.secA_line_door').addClass('secA3_change_line_door5');

                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA2_change_line_door4');

                //---secA3캡션 제거(display : none)
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
                $('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');


                //네번째 캡션등장2
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox2');



                //패스효과
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d2');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d1');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');

                //서브 패스
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d2');

                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d1');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');


                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');

                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');


                //블랭크박스들등장!!(배경영상을 가리기위함)
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');


                //배경영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');


                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');

                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');
            }





            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*26)+(secA_addSumPC*3)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*27)+(secA_addSumPC*4)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색 복구
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');


                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').addClass('secA3_change_door5');

                //로고문안쪽속성 고정
                $('.secA_line_door').addClass('secA3_change_line_door5');

                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA2_change_line_door4');

                //---secA3캡션 제거(display : none)
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
                $('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');



                //네번째 캡션등장3
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox2');

                //패스효과
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d3');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d1');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');

                //서브 패스
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d3');

                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d1');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');

                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');

                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');

                //블랭크박스들등장!!(배경영상을 가리기위함)
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');


                //배경 영상 등장 (opacity : 0)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox2');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');

                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');


                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');

                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');
            }




            //점점 배경 영상이 나옴(secA_line_door) 연해짐
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*27)+(secA_addSumPC*4)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*28)+(secA_addSumPC*4)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색 복구
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');

                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').addClass('secA3_change_door5');

                //로고문안쪽속성 고정
                $('.secA_line_door').addClass('secA3_change_line_door4');

                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA2_change_line_door4');

                //네번째 캡션등장4
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox2');


                //패스효과
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d4');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d1');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');

                //서브 패스
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d4');

                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d1');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');

                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');


                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');




                //블랭크박스들등장!!(배경영상을 가리기위함)
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');


                //배경 영상 등장 (opacity : 0.5)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox3');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');


                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');

                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');
            }


            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*28)+(secA_addSumPC*4)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*29)+(secA_addSumPC*4)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색 복구
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');

                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').addClass('secA3_change_door5');

                //로고문안쪽속성 고정(점점 연해짐)
                $('.secA_line_door').addClass('secA3_change_line_door3');

                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA2_change_line_door4');

                //네번째 캡션등장5
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox2');


                //패스효과
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d5');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d1');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');

                //서브 패스
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d5');

                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d1');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');

                //패스 색 넣기
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path1');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path2');

                //서브 패스색 넣기
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path1');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path2');



                //블랭크박스들등장!!(배경영상을 가리기위함)
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');

                //배경 영상 등장 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');



                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');

                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');

                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }



              //와이드. 흰색으로 바뀌는지점
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*29)+(secA_addSumPC*4)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*30)+(secA_addSumPC*5)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색 복구
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');

                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').addClass('secA3_change_door5');

                //로고문안쪽속성 고정(점점 연해짐)
                $('.secA_line_door').addClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');

                //네번째 캡션등장5
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox2');


                //패스효과 제거                  
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d1');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');

                //서브 패스 제거
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d1');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');

                //패스 색 넣기
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path1');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path2');

                //서브 패스색 넣기
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path1');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path2');


                //블랭크박스들등장!!(배경영상을 가리기위함)
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');


                //배경 영상 등장 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');


                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');


                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }


            //secA4 캡션 사라짐
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*30)+(secA_addSumPC*5)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*31)+(secA_addSumPC*5)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색 복구
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');


                $('.secA_line_door').removeClass('secA2_change_line_door2');
                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');

                //로고문안쪽속성 고정(점점 연해짐)
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');

                //네번째 캡션등장5
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox3');


                //패스 색 넣기
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path1');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path2');

                //서브 패스색 넣기
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path1');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path2');



                //블랭크박스들등장!!(배경영상을 가리기위함)
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');


                //배경 영상 등장 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');


                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');


                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');



                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');

                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }
		
		
	//-------------------------------secA5 등장 지점--------------------------------------------	
            //secA4 캡션 사라짐
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*31)+(secA_addSumPC*5)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*32)+(secA_addSumPC*5)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');

                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');

                //로고문안쪽속성 고정(점점 연해짐)
                $('.secA_line_door').removeClass('secA_change_line_door1');

                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');

                //네번째 캡션사라짐
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox4');

                //블랭크박스들 고정
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');


                //배경 영상 등장 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');



                //다섯번째 캡션 등장
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox2');

                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');



                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');
            }



            //secA5 캡션 주내용
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*32)+(secA_addSumPC*5)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*33)+(secA_addSumPC*5)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');


                 //-2배경 로고문 고정(완전 제거)
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');


                //로고문안쪽속성 고정(완전 제거)
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');


                //네번째 캡션 완전 제거
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');

                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox5');

                //블랭크박스들 고정
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');

                //배경 영상 고정 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 등장
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');



                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');

                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }


            //secA5 캡션 하위캡션 등장지점
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*33)+(secA_addSumPC*5)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*34)+(secA_addSumPC*5)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');

                 //-2배경 로고문 고정(완전 제거)
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');


                //로고문안쪽속성 고정(완전 제거)
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');


                //네번째 캡션 완전 제거
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');

                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox5');

                //블랭크박스들 고정
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');

                //배경 영상 고정 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 등장
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts2');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');




                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }


            //secA5 캡션 하위캡션 두번째 등장
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*34)+(secA_addSumPC*5)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*35)+(secA_addSumPC*5)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');


                 //-2배경 로고문 고정(완전 제거)
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');


                //로고문안쪽속성 고정(완전 제거)
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');


                //네번째 캡션 완전 제거
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');

                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox5');

                //블랭크박스들 고정
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');

                //배경 영상 고정 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 등장
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts2');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts2');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');



                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }





            //secA5 캡션 하위캡션 세번째 등장
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*35)+(secA_addSumPC*5)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*36)+(secA_addSumPC*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');


                 //-2배경 로고문 고정(완전 제거)
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');


                //로고문안쪽속성 고정(완전 제거)
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');


                //네번째 캡션 완전 제거
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');

                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox5');

                //블랭크박스들 고정
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');

                //배경 영상 고정 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 등장
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts2');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts2');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts2');



                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');

                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }


            //secA5 영상 사라지고 메인캡션나옴
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*36)+(secA_addSumPC*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*37)+(secA_addSumPC*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');


                 //-2배경 로고문 고정(완전 제거)
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');


                //로고문안쪽속성 고정(완전 제거)
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');


                //네번째 캡션 완전 제거
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');

                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox5');

                //블랭크박스 둥글게
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box2');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');


                //배경 영상 고정 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');


                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');

                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');


            }

		

            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*37)+(secA_addSumPC*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*38)+(secA_addSumPC*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');


                 //-2배경 로고문 고정(완전 제거)
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');


                //로고문안쪽속성 고정(완전 제거)
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');


                //네번째 캡션 완전 제거
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');

                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox5');

                //블랭크박스 둥글게
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 고정 (opacity : .5)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox5');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 및 색 변경
                $('.secA5_design_icon').addClass('secA5_design_icon2');
                $('.secA5_extens_icon').addClass('secA5_extens_icon2');
                $('.secA5_skill_icon').addClass('secA5_skill_icon2');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');

                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }



            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*38)+(secA_addSumPC*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*39)+(secA_addSumPC*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');


                 //-2배경 로고문 고정(완전 제거)
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');


                //네번째 캡션 완전 제거
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');

                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox5');

                //블랭크박스 둥글게
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 하얗게 (opacity : 0)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox6');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 및 색 변경
                $('.secA5_design_icon').addClass('secA5_design_icon2');
                $('.secA5_extens_icon').addClass('secA5_extens_icon2');
                $('.secA5_skill_icon').addClass('secA5_skill_icon2');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 보이기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox1');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox2');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');

                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }




            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*39)+(secA_addSumPC*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*40)+(secA_addSumPC*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 하얗게 (opacity : 0)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox6');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 및 색 변경
                $('.secA5_design_icon').addClass('secA5_design_icon2');
                $('.secA5_extens_icon').addClass('secA5_extens_icon2');
                $('.secA5_skill_icon').addClass('secA5_skill_icon2');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 보이기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox1');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox2');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }




//-------------------------------secA6 등장 지점--------------------------------------------		
            //빅로고 온
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*40)+(secA_addSumPC*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*41)+(secA_addSumPC*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box4');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 하얗게 (opacity : 0)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox6');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 및 색 변경
                $('.secA5_design_icon').addClass('secA5_design_icon2');
                $('.secA5_extens_icon').addClass('secA5_extens_icon2');
                $('.secA5_skill_icon').addClass('secA5_skill_icon2');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 보이기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox1');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox2');


                //빅로고 등장(디스플레이 온)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox2');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }



            //빅로고 실제화면에 첫등장
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*41)+(secA_addSumPC*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*42)+(secA_addSumPC*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box4');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 하얗게 (opacity : 0)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox6');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 작아짐
                $('.secA5_design_icon').addClass('secA5_design_icon3');
                $('.secA5_extens_icon').addClass('secA5_extens_icon3');
                $('.secA5_skill_icon').addClass('secA5_skill_icon3');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 보이기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox1');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox3');


                //빅로고 등장(실제화면에 첫등장
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox3');

                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }





            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*42)+(secA_addSumPC*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*43)+(secA_addSumPC*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box5');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 작아짐
                $('.secA5_design_icon').addClass('secA5_design_icon4');
                $('.secA5_extens_icon').addClass('secA5_extens_icon4');
                $('.secA5_skill_icon').addClass('secA5_skill_icon4');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 보이기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox1');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox4');


                //빅로고 등장(실제화면에 첫등장
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox4');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }


            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*43)+(secA_addSumPC*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*44)+(secA_addSumPC*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box5');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 작아짐
                $('.secA5_design_icon').addClass('secA5_design_icon5');
                $('.secA5_extens_icon').addClass('secA5_extens_icon5');
                $('.secA5_skill_icon').addClass('secA5_skill_icon5');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 제거
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 등장(실제화면에 첫등장
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox5');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }



            //빅로고 완전히 작아진 시점
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*44)+(secA_addSumPC*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*45)+(secA_addSumPC*6)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box5');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 작아짐
                $('.secA5_design_icon').addClass('secA5_design_icon5');
                $('.secA5_extens_icon').addClass('secA5_extens_icon5');
                $('.secA5_skill_icon').addClass('secA5_skill_icon5');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 제거
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 등장(실제화면에 첫등장
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox6');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }






            //프리미엄 로고 등장
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*45)+(secA_addSumPC*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*46)+(secA_addSumPC*7)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box5');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 작아짐
                $('.secA5_design_icon').addClass('secA5_design_icon5');
                $('.secA5_extens_icon').addClass('secA5_extens_icon5');
                $('.secA5_skill_icon').addClass('secA5_skill_icon5');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 제거
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 지속
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox7');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox6');


                //프리미엄 로고 등장 및 빅로고 색변경
                $('.secA6_platlogo_path1_d1').addClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox1');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox3');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox2');

            }




            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*46)+(secA_addSumPC*7)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*47)+(secA_addSumPC*7)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box5');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 작아짐
                $('.secA5_design_icon').addClass('secA5_design_icon5');
                $('.secA5_extens_icon').addClass('secA5_extens_icon5');
                $('.secA5_skill_icon').addClass('secA5_skill_icon5');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 제거
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 지속
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox7');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox6');


                //프리미엄 로고 등장 및 빅로고 색변경
                $('.secA6_platlogo_path1_d1').addClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox1');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox3');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox2');

            }




//-------------------------------secA 배경에 붙음--------------------------------------------			
            //secA포지션 고정으로바뀜
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumPC*47)+(secA_addSumPC*7)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumPC*48)+(secA_addSumPC*7)))) ) { 
                //--------------secA position : static----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox1');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox2');



                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box5');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 작아짐
                $('.secA5_design_icon').addClass('secA5_design_icon5');
                $('.secA5_extens_icon').addClass('secA5_extens_icon5');
                $('.secA5_skill_icon').addClass('secA5_skill_icon5');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 제거
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 지속
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox7');


                //프리미엄 로고 등장 및 빅로고 색변경
                $('.secA6_platlogo_path1_d1').addClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox1');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox3');

            }

			
		} // end if($(window).width() > 765)
			
			
			
			

			
			
			
			

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
 //--------------------------------------------------------------모바일 화면일시 765--------------------------------------------
		else {
			//-------------------------------secA1-------------------------------

			//원상태--------------이해하기위해 개중요함
			//current이 secA1_position보다크고 (secA1_position + secA1_sum)보다는 작을 때만 실행한다.
			if(current > secA1_position && current < secA1_position + secA_defaultValue ) {
				

	/*------------------------------------------------secA1------------------------------------*/		//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				
				//인피아드로고 opacity 제거
				$('.secA_inpiad_logoTypeBox').removeClass('secA_inpiad_logoTypeBox2');
				$('.secA_inpiad_ctnTypeBox').removeClass('secA_inpiad_ctnTypeBox2');

				//로고의 크기 원상태
				$('.inpiad_platLogo').removeClass('inpiad_platLogo2');
				$('.inpiad_platLogo').addClass('inpiad_platLogo1');
				//로고의 색상변경
				$('.platlogo_path').removeClass('platlogo_path2');
				$('.platlogo_path').addClass('platlogo_path1');

				//로고박스 flex 삭제
				$('.secA1_logo_outBox').removeClass('secA1_logo_outBox2');
                
                //서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');


				//캡션박스를 숨김
				$('.secA1_topicBox').removeClass('secA1_topicBox2');
				$('.secA1_topicBox').addClass('secA1_topicBox1');

				//premium 로고타입숨김
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox2');
				$('.secA1_premium_logoTypeBox').addClass('secA1_premium_logoTypeBox1');


				//플랫 로고박스 원상태로
				$('.secA1_plat_logoBox').removeClass('secA1_plat_logoBox2');
				$('.secA1_plat_logoBox').addClass('secA1_plat_logoBox1');

				
				
	/*------------------------------------------------secA2------------------------------------*/
				//secA1로 캡션 복구 애니메이션
				$('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
				
				
				//secA2 secA1_main_topic 글자크기 복구
				$('.secA1_main_topic').removeClass('main_topic_big2');
				$('.secA1_main_topic').addClass('main_topic_big1');
				
				
				//서브토픽 글자크기 복구
				$('.secA1_sub_topic').removeClass('main_topic_middle2');
				$('.secA1_sub_topic').addClass('main_topic_middle1');
				
				
				//premium 로고타입숨김
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox3');
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox2');
				$('.secA1_premium_logoTypeBox').addClass('secA1_premium_logoTypeBox1');
				
				
				//secA2로 캡션 이동 애니메이션2 및 글자크기제거
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_main_topic').removeClass('main_topic_big3');
				$('.secA1_sub_topic').removeClass('main_topic_middle3');
				
				
				//배경 로고문원래대로
				$('.secA_door').removeClass('secA2_change_door1');
				$('.secA_door').addClass('secA_change_door1');
				
				
				//더커진 배경 로고문 원래대로
				$('.secA_door').removeClass('secA2_change_door2');
				$('.secA_door').addClass('secA_change_door1');
				
				$('.secA_top_door').removeClass('secA2_change_top_door2');
				$('.secA_top_door').addClass('secA_change_top_door1');
				$('.secA_line_door').removeClass('secA2_change_line_door2');
				$('.secA_line_door').addClass('secA_change_line_door1');
				$('.secA_bot_door').removeClass('secA2_change_bot_door2');
				$('.secA_bot_door').addClass('secA_change_bot_door1');
                
                
                
                //--secA2로 캡션 이동 애니메이션 복귀3
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                
            
                //배경 로고문 원래대로
                $('.secA_door').removeClass('secA2_change_door3');
                
				$('.secA_top_door').removeClass('secA2_change_top_door3');
				$('.secA_line_door').removeClass('secA2_change_line_door3');
				$('.secA_bot_door').removeClass('secA2_change_bot_door3');
                
                //---secA2로 캡션 이동 애니메이션 복귀4
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA_door').removeClass('secA2_change_door4');
                
                $('.secA_top_door').removeClass('secA2_change_top_door4');
                $('.secA_line_door').removeClass('secA2_change_line_door4');
                $('.secA_bot_door').removeClass('secA2_change_bot_door4');
                
                
                
                //secA2 두번째 캡션 제거
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
                //secA2 두번째캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
                
                
                //secA1캡 display 보임
                $('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA1_ctnBox').addClass('secA1_ctnBox1');
				
				
				
				
				
	/*------------------------------------------------secA3------------------------------------*/
				
				
				
				//secA3 배경로고 제거
				$('.secA_door').removeClass('secA3_change_door1');
				
				$('.secA_top_door').removeClass('secA3_change_top_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_bot_door').removeClass('secA3_change_bot_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				
				
				//---secA3캡션제거
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');
				
				//--2배경 로고문 변화시작제거2
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
				
                
                
/*------------------------------------------------secA4------------------------------------*/                
                
                
				//네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				
                
                
                
                //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');
                
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5'); 
                
                
                
                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');
                
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');
				
                
				//블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
				
				
				//배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
                
                
                
				
/*------------------------------------------------secA5------------------------------------*/				
				
                
				//다섯번째 캡션 제거
				$('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
				$('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
				$('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');
				
				
				//다섯번째 처음 하위캡션 제거
				$('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
				$('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
				$('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

				$('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
				$('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
				$('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

				$('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
				$('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
				$('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');
				
				//캡션 안 주제 복구
				$('.secA5_topic_texts').removeClass('secA5_topic_texts2');
				$('.secA5_topic_texts').removeClass('secA5_topic_texts3');
				$('.secA5_topic_texts').addClass('secA5_topic_texts1');

				//캡션안 패스 크기 및 색 복구
				$('.secA5_design_icon').addClass('secA5_design_icon1');
				$('.secA5_extens_icon').addClass('secA5_extens_icon1');
				$('.secA5_skill_icon').addClass('secA5_skill_icon1');

				$('.secA5_design_icon').removeClass('secA5_design_icon2');
				$('.secA5_design_icon').removeClass('secA5_design_icon3');
				$('.secA5_design_icon').removeClass('secA5_design_icon4');
				$('.secA5_design_icon').removeClass('secA5_design_icon5');
				$('.secA5_extens_icon').removeClass('secA5_extens_icon2');
				$('.secA5_extens_icon').removeClass('secA5_extens_icon3');
				$('.secA5_extens_icon').removeClass('secA5_extens_icon4');
				$('.secA5_extens_icon').removeClass('secA5_extens_icon5');
				$('.secA5_skill_icon').removeClass('secA5_skill_icon2');
				$('.secA5_skill_icon').removeClass('secA5_skill_icon3');
				$('.secA5_skill_icon').removeClass('secA5_skill_icon4');
				$('.secA5_skill_icon').removeClass('secA5_skill_icon5');

				$('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
				$('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
				$('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

				$('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
				$('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
				$('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');
				
				
				//캡션안 + 박스  숨기기
				$('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
				$('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
				$('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
				$('.secA5_in_plusBox').addClass('secA5_in_plusBox1');
				
				
/*------------------------------------------------secA6------------------------------------*/		
				
				
				//빅로고 제거(디스플레이 삭제)
				$('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
				$('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
				$('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
				$('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
				$('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
				$('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');
				
				
				//프리미엄 로고 및 빅로고 복구
				$('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
				$('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
				$('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');
				
				
			} //end if(current > secA1_position && current < (secA1_position + secA_sum))




			//여기가 첫번경지점
			if(current > secA1_position + secA_defaultValue && current < (secA1_position + (secA_defaultValue + secA_sumMobile))) {
				
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
                
                //서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
				
				//로고의 크기복구
				$('.inpiad_platLogo').addClass('inpiad_platLogo1');
				$('.inpiad_platLogo').removeClass('inpiad_platLogo2');
                
                
				//인피아드로고 반투명으로바꿈
				$('.secA_inpiad_logoTypeBox').removeClass('secA_inpiad_logoTypeBox3');
				$('.secA_inpiad_logoTypeBox').addClass('secA_inpiad_logoTypeBox2');

				$('.secA_inpiad_ctnTypeBox').removeClass('secA_inpiad_ctnTypeBox3');
				$('.secA_inpiad_ctnTypeBox').addClass('secA_inpiad_ctnTypeBox2');
                


				//캡션박스를 숨김
				$('.secA1_topicBox').removeClass('secA1_topicBox2');
				$('.secA1_topicBox').addClass('secA1_topicBox1');


				//premium 로고타입숨김
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox2');
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox3');
				$('.secA1_premium_logoTypeBox').addClass('secA1_premium_logoTypeBox1');


				//플랫 로고박스 원상태로
				$('.secA1_plat_logoBox').removeClass('secA1_plat_logoBox2');
				$('.secA1_plat_logoBox').addClass('secA1_plat_logoBox1');
				
				
				//premium 로고타입숨김
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox3');
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox2');
				$('.secA1_premium_logoTypeBox').addClass('secA1_premium_logoTypeBox1');
                
                //secA1캡 display 보임
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
                

			} 



            


			if(current > (secA1_position + (secA_defaultValue + secA_sumMobile)) && current < (secA1_position + (secA_defaultValue + (secA_sumMobile*2))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				//서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
				

				//로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');

				//로고의 색상변경
				$('.platlogo_path').removeClass('platlogo_path1');
				$('.platlogo_path').addClass('platlogo_path2');



				//인피아드로고박스들을 보임
				$('.secA_inpiad_logoTypeBox').show();
				$('.secA_inpiad_ctnTypeBox').show();



				//인피아드로고 투명으로바꿈
				$('.secA_inpiad_logoTypeBox').removeClass('secA_inpiad_logoTypeBox2');
				$('.secA_inpiad_logoTypeBox').addClass('secA_inpiad_logoTypeBox3');

				$('.secA_inpiad_ctnTypeBox').removeClass('secA_inpiad_ctnTypeBox2');
				$('.secA_inpiad_ctnTypeBox').addClass('secA_inpiad_ctnTypeBox3');

				//플랫 로고박스 원상태로
				$('.secA1_plat_logoBox').removeClass('secA1_plat_logoBox2');
				$('.secA1_plat_logoBox').addClass('secA1_plat_logoBox1');


				//캡션박스를 숨김
				$('.secA1_topicBox').removeClass('secA1_topicBox2');
				$('.secA1_topicBox').addClass('secA1_topicBox1');

				//글자숨김
				$('.secA1_main_topic').eq(0).removeClass('secA1_main_topic2');
				$('.secA1_main_topic').eq(0).addClass('secA1_main_topic1');

                //로고박스 flex 제거
				$('.secA1_logo_outBox').removeClass('secA1_logo_outBox2');
                
                
				//premium 등장
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox2');
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox1');
				$('.secA1_premium_logoTypeBox').addClass('secA1_premium_logoTypeBox3');
                
                //secA1_ctnBox 박스 원상태로 복구
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
			}



			if(current > (secA1_position + (secA_defaultValue + (secA_sumMobile*2))) && current < (secA1_position + (secA_defaultValue + (secA_sumMobile*3))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
                //로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');
                
                //서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
				
				//로고박스 flex 제거
				$('.secA1_logo_outBox').removeClass('secA1_logo_outBox2');

				//premium 로고 등장
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox2');
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox1');
				$('.secA1_premium_logoTypeBox').addClass('secA1_premium_logoTypeBox3');

                //secA1캡 display 보임
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
			}




			//정상을 넘어, 미래를 향한 지점(서브에서는 모든글자가보임)
			if(current > (secA1_position + (secA_defaultValue + (secA_sumMobile*3))) && current < (secA1_position + (secA_defaultValue + (secA_sumMobile*4))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				//서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
                
                //로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');
                

				//인피아드로고박스들을 숨김
				$('.secA_inpiad_logoTypeBox').hide();
				$('.secA_inpiad_ctnTypeBox').hide();

				//로고박스 flex 추가
				$('.secA1_logo_outBox').addClass('secA1_logo_outBox2');

				//플랫 로고박스 정렬
				$('.secA1_plat_logoBox').removeClass('secA1_plat_logoBox1');
				$('.secA1_plat_logoBox').addClass('secA1_plat_logoBox2');

				//캡션박스를 보임
				$('.secA1_topicBox').removeClass('secA1_topicBox1');
				$('.secA1_topicBox').addClass('secA1_topicBox2');


				//메인 글자가 보임
				$('.secA1_main_topic').removeClass('secA1_main_topic1');
				$('.secA1_main_topic').addClass('secA1_main_topic2');


				//premium 로고타입inline
				$('.secA1_premium_logoTypeBox').removeClass('secA1_premium_logoTypeBox2');
				$('.secA1_premium_logoTypeBox').addClass('secA1_premium_logoTypeBox3');
                
                
                
                //secA1캡 원상태로복구
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
			}






			if(current > (secA1_position + (secA_defaultValue + (secA_sumMobile*4))) && current < (secA1_position + (secA_defaultValue + (secA_sumMobile*5))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
                
                //서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
                
                //로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');
                
                
				//로고박스 flex 추가
				$('.secA1_logo_outBox').addClass('secA1_logo_outBox2');
				
				//메인 글자가 보임
				$('.secA1_main_topic').removeClass('secA1_main_topic1');
				$('.secA1_main_topic').addClass('secA1_main_topic2');
                
                
                //secA1캡 원상태로복구
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');

			}



			if(current > (secA1_position + (secA_defaultValue + (secA_sumMobile*5))) && current < (secA1_position + (secA_defaultValue + (secA_sumMobile*6))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
                
                //서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
				
                
                //로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');
                
				
				//메인 글자가 보임
				$('.secA1_main_topic').removeClass('secA1_main_topic1');
				$('.secA1_main_topic').addClass('secA1_main_topic2');
                
                
                //secA1캡 원상태로복구
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');

			}



			if(current > (secA1_position + (secA_defaultValue + (secA_sumMobile*6))) && current < (secA1_position + (secA_defaultValue + (secA_sumMobile*7))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
                
                //서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
                
				
				//메인 글자가 보임
				$('.secA1_main_topic').removeClass('secA1_main_topic1');
				$('.secA1_main_topic').addClass('secA1_main_topic2');


                //secA1캡 원상태로복구
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');

			}



			if(current > (secA1_position + (secA_defaultValue + (secA_sumMobile*7))) && current < (secA1_position + (secA_defaultValue + (secA_sumMobile*8))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
                
                //서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
                
                //로고의 크기를 줄임
				$('.inpiad_platLogo').removeClass('inpiad_platLogo1');
				$('.inpiad_platLogo').addClass('inpiad_platLogo2');
				
				
				//메인 글자가 보임
				$('.secA1_main_topic').removeClass('secA1_main_topic1');
				$('.secA1_main_topic').addClass('secA1_main_topic2');



			}



			if(current > (secA1_position + (secA_defaultValue + (secA_sumMobile*8))) && current < (secA1_position + (secA_defaultValue + (secA_sumMobile*9))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				//서브 글자 숨김
				$('.secA1_sub_topic').removeClass('secA1_sub_topic2');
				$('.secA1_sub_topic').addClass('secA1_sub_topic1');
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				//메인 글자가 보임
				$('.secA1_main_topic').removeClass('secA1_main_topic1');
				$('.secA1_main_topic').addClass('secA1_main_topic2');


                //secA1캡 원상태로복구
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
			}



            //서브 지점
			if(current > (secA1_position + (secA_defaultValue + (secA_sumMobile*9))) && current < (secA1_position + (secA_defaultValue + (secA_sumMobile*10))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				//서브 글자가 보임
				$('.secA1_sub_topic').removeClass('secA1_sub_topic1');
				$('.secA1_sub_topic').addClass('secA1_sub_topic2');
                
				//메인 글자가 보임
				$('.secA1_main_topic').removeClass('secA1_main_topic1');
				$('.secA1_main_topic').addClass('secA1_main_topic2');
                
                
                //secA1캡 원상태로복구
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox3');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox4');
				$('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');

			}




			if(current > (secA1_position + (secA_defaultValue + (secA_sumMobile*10))) && current < (secA1_position + (secA_defaultValue + (secA_sumMobile*11))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');
                
                //서브 글자가 보임
				$('.secA1_sub_topic').removeClass('secA1_sub_topic1');
				$('.secA1_sub_topic').addClass('secA1_sub_topic2');
				
				//메인 글자가 보임
				$('.secA1_main_topic').removeClass('secA1_main_topic1');
				$('.secA1_main_topic').addClass('secA1_main_topic2');
				
				//secA2 secA1_main_topic 글자크기 복구
				$('.secA1_main_topic').removeClass('main_topic_big2');
				$('.secA1_main_topic').addClass('main_topic_big1');
				
				
				//서브토픽 글자크기 복구
				$('.secA1_sub_topic').removeClass('main_topic_middle2');
				$('.secA1_sub_topic').addClass('main_topic_middle1');
				
				//secA2로 캡션 이동 애니메이션2 및 글자크기제거
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_main_topic').removeClass('main_topic_big3');
				$('.secA1_sub_topic').removeClass('main_topic_middle3');
                
                
                //secA2 두번째 캡션 제거
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');

			}




			if(current > (secA1_position + (secA_defaultValue + (secA_sumMobile*11))) && current < (secA1_position + (secA_defaultValue + (secA_sumMobile*12)))) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');
                
                
                //서브 글자가 보임
				$('.secA1_sub_topic').addClass('secA1_sub_topic2');
				$('.secA1_sub_topic').removeClass('secA1_sub_topic1');
				
				//메인 글자가 보임
				$('.secA1_main_topic').removeClass('secA1_main_topic1');
				$('.secA1_main_topic').addClass('secA1_main_topic2');
				
				//secA2 secA1_main_topic 글자크기 복구
				$('.secA1_main_topic').removeClass('main_topic_big2');
				$('.secA1_main_topic').addClass('main_topic_big1');
				
				//서브토픽 글자크기 복구
				$('.secA1_sub_topic').removeClass('main_topic_middle2');
				$('.secA1_sub_topic').addClass('main_topic_middle1');
				
				//secA2로 캡션 이동 애니메이션2 및 글자크기제거
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_main_topic').removeClass('main_topic_big3');
				$('.secA1_sub_topic').removeClass('main_topic_middle3');
				
				//배경 로고문원래대로
				$('.secA_door').removeClass('secA2_change_door1');
				$('.secA_door').addClass('secA_change_door1');
                
                
                //secA2 두번째 캡션 제거
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');

			}


            
			if(current > (secA1_position + (secA_defaultValue + (secA_sumMobile*12))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*13)+secA_addSumMobile))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 

				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				//서브 글자가 보임
				$('.secA1_sub_topic').removeClass('secA1_sub_topic1');
				$('.secA1_sub_topic').addClass('secA1_sub_topic2');
				

				//메인 글자가 보임
				$('.secA1_main_topic').removeClass('secA1_main_topic1');
				$('.secA1_main_topic').addClass('secA1_main_topic2');

				//secA1로 캡션 복구 애니메이션
				$('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
                
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox5');
				
				//secA2 secA1_main_topic 글자크기 복구
				$('.secA1_main_topic').removeClass('main_topic_big2');
				$('.secA1_main_topic').addClass('main_topic_big1');
				
				
				//서브토픽 글자크기 복구
				$('.secA1_sub_topic').removeClass('main_topic_middle2');
				$('.secA1_sub_topic').addClass('main_topic_middle1');
				
				//secA2로 캡션 이동 애니메이션2 및 글자크기제거
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_main_topic').removeClass('main_topic_big3');
				$('.secA1_sub_topic').removeClass('main_topic_middle3');
				
				//배경 로고문원래대로
				$('.secA_door').removeClass('secA2_change_door1');
				$('.secA_door').addClass('secA_change_door1');
				
				//더커진 배경 로고문 원래대로
				$('.secA_door').removeClass('secA2_change_door2');
				$('.secA_door').addClass('secA_change_door1');
				
				$('.secA_top_door').removeClass('secA2_change_top_door2');
				$('.secA_top_door').addClass('secA_change_top_door1');
				$('.secA_line_door').removeClass('secA2_change_line_door2');
				$('.secA_line_door').addClass('secA_change_line_door1');
				$('.secA_bot_door').removeClass('secA2_change_bot_door2');
				$('.secA_bot_door').addClass('secA_change_bot_door1');
                
                
                //--secA2로 캡션 이동 애니메이션 복귀3
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                
            
                //배경 로고문 원래대로
                $('.secA_door').removeClass('secA2_change_door3');
                
				$('.secA_top_door').removeClass('secA2_change_top_door3');
				$('.secA_line_door').removeClass('secA2_change_line_door3');
				$('.secA_bot_door').removeClass('secA2_change_bot_door3');
                
                //---secA2로 캡션 이동 애니메이션 복귀4
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA_door').removeClass('secA2_change_door4');
                
                $('.secA_top_door').removeClass('secA2_change_top_door4');
                $('.secA_line_door').removeClass('secA2_change_line_door4');
                $('.secA_bot_door').removeClass('secA2_change_bot_door4');
                
                
                //secA2 두번째 캡션 제거
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
                //secA2 두번째캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
				
				
				
				//---secA3캡션제거
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');

			}





			
			if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*13)+secA_addSumMobile))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*14)+secA_addSumMobile))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				//서브 글자가 보임
				$('.secA1_sub_topic').removeClass('secA1_sub_topic1');
				$('.secA1_sub_topic').addClass('secA1_sub_topic2');
                
                //메인 글자 숨김
				$('.secA1_main_topic').removeClass('secA1_main_topic2');
				$('.secA1_main_topic').addClass('secA1_main_topic1');

				//secA1로 캡션 복구 애니메이션
				$('.secA1_ctnBox').removeClass('secA2_ctnBox1');
				$('.secA1_ctnBox').addClass('secA1_ctnBox1');
                
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
                
				
				//secA2 secA1_main_topic 글자크기 복구
				$('.secA1_main_topic').removeClass('main_topic_big2');
				$('.secA1_main_topic').addClass('main_topic_big1');
				
				
				//서브토픽 글자크기 변경
				$('.secA1_sub_topic').removeClass('main_topic_middle1');
				$('.secA1_sub_topic').addClass('main_topic_middle2');
				
				//secA2로 캡션 이동 애니메이션2 및 글자크기제거
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_main_topic').removeClass('main_topic_big3');
				$('.secA1_sub_topic').removeClass('main_topic_middle3');
				
				//배경 로고문원래대로
				$('.secA_door').removeClass('secA2_change_door1');
				$('.secA_door').addClass('secA_change_door1');
				
				//더커진 배경 로고문 원래대로
				$('.secA_door').removeClass('secA2_change_door2');
				$('.secA_door').addClass('secA_change_door1');
				
				$('.secA_top_door').removeClass('secA2_change_top_door2');
				$('.secA_top_door').addClass('secA_change_top_door1');
				$('.secA_line_door').removeClass('secA2_change_line_door2');
				$('.secA_line_door').addClass('secA_change_line_door1');
				$('.secA_bot_door').removeClass('secA2_change_bot_door2');
				$('.secA_bot_door').addClass('secA_change_bot_door1');
                
                
                
                //--secA2로 캡션 이동 애니메이션 복귀3
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                
            
                //배경 로고문 원래대로
                $('.secA_door').removeClass('secA2_change_door3');
                
				$('.secA_top_door').removeClass('secA2_change_top_door3');
				$('.secA_line_door').removeClass('secA2_change_line_door3');
				$('.secA_bot_door').removeClass('secA2_change_bot_door3');
                
                //---secA2로 캡션 이동 애니메이션 복귀4
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA_door').removeClass('secA2_change_door4');
                
                $('.secA_top_door').removeClass('secA2_change_top_door4');
                $('.secA_line_door').removeClass('secA2_change_line_door4');
                $('.secA_bot_door').removeClass('secA2_change_bot_door4');
                
                //secA2 두번째 캡션 제거
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
                //secA2 두번째캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
				
				
				
				//---secA3캡션제거
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');
				
				//--2배경 로고문 변화시작제거2
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
				
			}



	//-------------------------------secA2-------------------------------


			//캡션위로 서서히 사라짐 시작
			if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*14)+secA_addSumMobile))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*15)+secA_addSumMobile)))) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				

				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
                //서브 글자가 보임
				$('.secA1_sub_topic').removeClass('secA1_sub_topic1');
				$('.secA1_sub_topic').addClass('secA1_sub_topic2');
                
                
				//secA2로 캡션 이동 애니메이션
				
				$('.secA1_ctnBox').addClass('secA2_ctnBox1');
                
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                $('.secA1_ctnBox').removeClass('secA1_ctnBox1');
                
				//secA2 secA1_main_topic 글자크기 변경
				$('.secA1_main_topic').removeClass('main_topic_big1');
				$('.secA1_main_topic').addClass('main_topic_big2');
				
				//서브토픽 글자크기변경
				$('.secA1_sub_topic').removeClass('main_topic_middle1');
				$('.secA1_sub_topic').addClass('main_topic_middle2');
				
				//secA2로 캡션 이동 애니메이션2 및 글자크기제거
				$('.secA1_ctnBox').removeClass('secA2_ctnBox2');
				$('.secA1_main_topic').removeClass('main_topic_big3');
				$('.secA1_sub_topic').removeClass('main_topic_middle3');
				
				
				//배경 로고문이 커짐
				$('.secA_door').removeClass('secA_change_door1');
				$('.secA_door').addClass('secA2_change_door1');
				
				//더커진 배경 로고문 원래대로
				$('.secA_door').removeClass('secA2_change_door2');
				$('.secA_door').addClass('secA_change_door1');
				
				$('.secA_top_door').addClass('secA_change_top_door1');
				$('.secA_line_door').addClass('secA_change_line_door1');
				$('.secA_bot_door').addClass('secA_change_bot_door1');
				
				$('.secA_top_door').removeClass('secA2_change_top_door2');
				$('.secA_line_door').removeClass('secA2_change_line_door2');
				$('.secA_bot_door').removeClass('secA2_change_bot_door2');
				
                
                
                
                
                //--secA2로 캡션 이동 애니메이션 복귀3
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                
            
                //배경 로고문 원래대로
                $('.secA_door').removeClass('secA2_change_door3');
                
				$('.secA_top_door').removeClass('secA2_change_top_door3');
				$('.secA_line_door').removeClass('secA2_change_line_door3');
				$('.secA_bot_door').removeClass('secA2_change_bot_door3');
                
                //---secA2로 캡션 이동 애니메이션 복귀4
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA_door').removeClass('secA2_change_door4');
                
                $('.secA_top_door').removeClass('secA2_change_top_door4');
                $('.secA_line_door').removeClass('secA2_change_line_door4');
                $('.secA_bot_door').removeClass('secA2_change_bot_door4');
                
                
                //secA2 두번째 캡션 제거
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
                //secA2 두번째캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
                
                //secA1캡 display 보임
                $('.secA1_ctnBox').show();
				
				
				//secA3 배경로고 제거
				$('.secA_door').removeClass('secA3_change_door1');
				
				$('.secA_top_door').removeClass('secA3_change_top_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_bot_door').removeClass('secA3_change_bot_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				
				
				//---secA3캡션제거
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');
				
				//--2배경 로고문 변화시작제거2
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
			}
			
			
			
			if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*15)+secA_addSumMobile))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*16)+secA_addSumMobile))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
                //서브 글자가 보임
				$('.secA1_sub_topic').removeClass('secA1_sub_topic1');
				$('.secA1_sub_topic').addClass('secA1_sub_topic2');
                
				
				//secA2로 캡션 이동 애니메이션2
                $('.secA1_ctnBox').addClass('secA2_ctnBox2');
                
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox5');
				
				//secA2 secA1_main_topic 글자크기 변경
				$('.secA1_main_topic').removeClass('main_topic_big2');
				$('.secA1_main_topic').addClass('main_topic_big3');
				
				//서브토픽 글자크기변경
				$('.secA1_sub_topic').removeClass('main_topic_middle2');
				$('.secA1_sub_topic').addClass('main_topic_middle3');
				
				//배경 로고문이 더커짐2
				$('.secA_door').removeClass('secA2_change_door1');
				$('.secA_door').addClass('secA2_change_door2');
				
				$('.secA_top_door').removeClass('secA_change_top_door1');
				$('.secA_top_door').addClass('secA2_change_top_door2');
				$('.secA_line_door').removeClass('secA_change_line_door1');
				$('.secA_line_door').addClass('secA2_change_line_door2');
				$('.secA_bot_door').removeClass('secA_change_bot_door1');
				$('.secA_bot_door').addClass('secA2_change_bot_door2');
                
                
                //--secA2로 캡션 이동 애니메이션 복귀3
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                
            
                //배경 로고문 원래대로
                $('.secA_door').removeClass('secA2_change_door3');         
				$('.secA_top_door').removeClass('secA2_change_top_door3');
				$('.secA_line_door').removeClass('secA2_change_line_door3');
				$('.secA_bot_door').removeClass('secA2_change_bot_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                //---secA2로 캡션 이동 애니메이션 복귀4
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA_door').removeClass('secA2_change_door4');
                
                $('.secA_top_door').removeClass('secA2_change_top_door4');
                $('.secA_line_door').removeClass('secA2_change_line_door4');
                $('.secA_bot_door').removeClass('secA2_change_bot_door4');
                
                
               
                //secA2 두번째 캡션 제거
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
                //secA2 두번째캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
                
                //secA1캡 display 보임
                $('.secA1_ctnBox').show();
				
				
				//secA3 배경로고 제거
				$('.secA_door').removeClass('secA3_change_door1');
				
				$('.secA_top_door').removeClass('secA3_change_top_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_bot_door').removeClass('secA3_change_bot_door1');
				
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				
				
				//---secA3캡션제거
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');
				
				//--2배경 로고문 변화시작제거2
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');

			}
            
            
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*16)+secA_addSumMobile))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*17)+secA_addSumMobile))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
                //-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				
                //secA2로 캡션 이동 애니메이션3
                $('.secA1_ctnBox').addClass('secA2_ctnBox3');
                
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                
            
                //배경 로고문이 더커짐3
                $('.secA_door').removeClass('secA2_change_door2');
				$('.secA_door').addClass('secA2_change_door3');
                
				$('.secA_top_door').removeClass('secA2_change_top_door2');
				$('.secA_top_door').addClass('secA2_change_top_door3');
				$('.secA_line_door').removeClass('secA2_change_line_door2');
				$('.secA_line_door').addClass('secA2_change_line_door3');
				$('.secA_bot_door').removeClass('secA2_change_bot_door2');
				$('.secA_bot_door').addClass('secA2_change_bot_door3');
            
                
                //---secA2로 캡션 이동 애니메이션 복귀4
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                $('.secA_door').removeClass('secA2_change_door4');
                
                $('.secA_top_door').removeClass('secA2_change_top_door4');
                $('.secA_line_door').removeClass('secA2_change_line_door4');
                $('.secA_bot_door').removeClass('secA2_change_bot_door4');
				
                
                
                //secA2 두번째 캡션등장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox1');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox2');
                //secA2 두번째캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
                
                //secA1캡 display 보임
                $('.secA1_ctnBox').show();
				
				
				//secA3 배경로고 제거
				$('.secA_door').removeClass('secA3_change_door1');
				
				$('.secA_top_door').removeClass('secA3_change_top_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_bot_door').removeClass('secA3_change_bot_door1');
				
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				
				//---secA3캡션제거
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');
				
				//--2배경 로고문 변화시작제거2
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
                
            }
            
            //두번째 캡션 등장지점
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*17)+secA_addSumMobile))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*18)+(secA_addSumMobile*2)))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
                //-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
                
                //secA1캡 display 보임
                $('.secA1_ctnBox').addClass('secA2_ctnBox4');
                
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox5');
                //배경 로고문이 더커짐3
                $('.secA_door').removeClass('secA2_change_door3');
				$('.secA_door').addClass('secA2_change_door4');
                
				$('.secA_top_door').removeClass('secA2_change_top_door3');
				$('.secA_top_door').addClass('secA2_change_top_door4');
				$('.secA_line_door').removeClass('secA2_change_line_door3');
				$('.secA_line_door').addClass('secA2_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_bot_door').removeClass('secA2_change_bot_door3');
				$('.secA_bot_door').addClass('secA2_change_bot_door4');
				
            
                //secA2 두번째 캡션 진하게
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox2');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox3');
                //secA2 두번째캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
                
                //secA1캡 display 보임
                $('.secA1_ctnBox').show();
				
				//secA3 배경로고 제거
				$('.secA_door').removeClass('secA3_change_door1');
				
				$('.secA_top_door').removeClass('secA3_change_top_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_bot_door').removeClass('secA3_change_bot_door1');
				
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				
				
				//---secA3캡션제거
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');
				
				//--2배경 로고문 변화시작제거2
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
				
				
				//네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				
				
                //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');
                
                
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5'); 
                
                
                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');
                
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');
                
				//블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
				
				
				
				
				//배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
            
            }
            
            
		
		
		
	   //-------------------------------secA3--------------------------------------------	
            
            //두번째 캡션 사라지는 지점
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*18)+(secA_addSumMobile*2)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*19)+(secA_addSumMobile*2)))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
                //-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				
                //secA2 두번째 캡션 퇴장
                $('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox3');
                $('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox4');
                
                
                //secA1캡 display 숨김
                $('.secA1_ctnBox').removeClass('secA1_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                
                $('.secA1_ctnBox').addClass('secA2_ctnBox5');
				
				//-배경 로고문 변화시작1
				$('.secA_door').removeClass('secA2_change_door4');
				$('.secA_door').addClass('secA3_change_door1');
				
				//로고문안쪽 속성
				$('.secA_top_door').addClass('secA3_change_top_door1');
				$('.secA_line_door').addClass('secA3_change_line_door1');
				$('.secA_bot_door').addClass('secA3_change_bot_door1');
				
				$('.secA_top_door').removeClass('secA2_change_top_door4');
				$('.secA_line_door').removeClass('secA2_change_line_door4');
				$('.secA_bot_door').removeClass('secA2_change_bot_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				
				//---secA3캡션등장
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox1');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox2');
				
				//--2배경 로고문 변화시작제거2
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
				
				//네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				
                
                
                //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');
                
                
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5'); 
                
                
                
				//패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');
                
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');
				
				//블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
				
				
				
				//배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
            }

		
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*19)+(secA_addSumMobile*2)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*20)+(secA_addSumMobile*2)))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				
				
				
                //-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				
				
				
                //secA1캡 display 숨김
                $('.secA1_ctnBox').removeClass('secA1_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                
                $('.secA1_ctnBox').addClass('secA2_ctnBox5');
                
                
				//secA2 캡션박스 완전히 제거
				$('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
				$('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
				
				
				//-2배경 로고문 변화시작2
				$('.secA_door').removeClass('secA3_change_door1');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
				$('.secA_door').addClass('secA3_change_door2');
				
				//로고문안쪽속성 제거중(및 추가변화)
				$('.secA_top_door').addClass('secA3_change_top_door1');
				$('.secA_line_door').addClass('secA3_change_line_door2');
				$('.secA_bot_door').addClass('secA3_change_bot_door1');
				
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				$('.secA_top_door').removeClass('secA2_change_top_door4');
				$('.secA_line_door').removeClass('secA2_change_line_door4');
				$('.secA_bot_door').removeClass('secA2_change_bot_door4');
				
				
				//---secA3캡션 변화
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox1');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox3');
				
				
				//네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				
				
                
                //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');
                
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5'); 
                
                
                
                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');
				
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');
                
                
				//블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
				
				
				
				//배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
				
				
			}

		
		
			//세번째 캡션 완전한 등장
			 if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*20)+(secA_addSumMobile*2)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*21)+(secA_addSumMobile*2)))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');  
				 
				 
                //-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				 
				 
				 //secA1캡 display 숨김
                $('.secA1_ctnBox').removeClass('secA1_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                
                $('.secA1_ctnBox').addClass('secA2_ctnBox5');
                 
                 
				//secA2 캡션박스 완전히 제거
				$('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
				$('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
				
				
				//-2배경 로고문 변화시작3
				$('.secA_door').removeClass('secA3_change_door1');
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').removeClass('secA3_change_door5');
				$('.secA_door').addClass('secA3_change_door3');
				 
				 //로고문안쪽속성 제거중(및 추가변화)
				$('.secA_top_door').addClass('secA3_change_top_door1');
				$('.secA_line_door').addClass('secA3_change_line_door3');
				$('.secA_bot_door').addClass('secA3_change_bot_door1');
				
				$('.secA_line_door').removeClass('secA3_change_line_door2'); 
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				$('.secA_top_door').removeClass('secA2_change_top_door4');
				$('.secA_line_door').removeClass('secA2_change_line_door4');
				$('.secA_bot_door').removeClass('secA2_change_bot_door4');
				 
				
				//---secA3캡션 변화
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox1');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox4');
				 
				 
				
				//네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				 
				
                //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5'); 
                
                 
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');  
                 
                 
                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');
                 
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1'); 
                 
				 //블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3'); 
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5'); 
				 
				 
				 
				 
				//배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				 
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
			}
		
		
		
			 if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*21)+(secA_addSumMobile*2)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*22)+(secA_addSumMobile*3)))) ) {
                 
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');  
				 
				 
                //-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				 
				 
				 //secA1캡 display 숨김
                $('.secA1_ctnBox').removeClass('secA1_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                
                $('.secA1_ctnBox').addClass('secA2_ctnBox5');
                 
                 
				//secA2 캡션박스 완전히 제거
				$('.secA2_second_logo_ctnBox').removeClass('secA2_second_logo_ctnBox4');
				$('.secA2_second_logo_ctnBox').addClass('secA2_second_logo_ctnBox1');
				
				
				//-2배경 로고문 변화시작4
				$('.secA_door').removeClass('secA3_change_door1');
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door5');
				$('.secA_door').addClass('secA3_change_door4');
				 
				 //로고문안쪽속성 제거중(및 추가변화)
				 $('.secA_line_door').addClass('secA3_change_line_door3');
				 
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				$('.secA_line_door').removeClass('secA2_change_line_door4');
				 
				
				//---secA3캡션 변화
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox1');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox4');
				 
				 
				 
				 //네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				 
                 
                 //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');
                
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');  
                 
                 
				//패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');
                 
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');
                 
                 
				 //블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3'); 
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5'); 
				 
				 
				 
				 
				//배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				 
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
			}
		
        
            
			//배경화면 와이드하게 바낌
			 if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*22)+(secA_addSumMobile*3)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*23)+(secA_addSumMobile*3)))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				 
				 
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				 
				 
				 
				//secA1캡 display 숨김
                $('.secA1_ctnBox').removeClass('secA1_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');
                
                $('.secA1_ctnBox').addClass('secA2_ctnBox5');
				
                 
                 
				//-2배경 로고문 변화시작5
				$('.secA_door').removeClass('secA3_change_door1');
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
				$('.secA_door').addClass('secA3_change_door5');
				 
				 //로고문안쪽속성 제거중(및 추가변화)
				$('.secA_line_door').addClass('secA3_change_line_door2');
				 
				$('.secA_line_door').removeClass('secA3_change_line_door1');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				$('.secA_line_door').removeClass('secA2_change_line_door4');
				 
				
				//---secA3캡션 변화
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox1');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
				$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox4');
				 
				 
				 //네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				 $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				 
				 
                 
                //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');
                
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');  
                 
                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1'); 
                
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1'); 
                 
                 
                 
				 //블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5'); 
				 
				 
				 
				 
				//배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				 
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6'); 
				 
				 
			}
		
		
			 if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*23)+(secA_addSumMobile*3)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*24)+(secA_addSumMobile*3)))) ) {
				//--------------secA position : fixed----------------
				$('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
				$('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1'); 
				 
				 
				 
				//-----secA 전체 뒷배경색 복구
				$('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
				$('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1'); 
				 
				 
				 //-2배경 로고문 고정
				$('.secA_door').removeClass('secA3_change_door1');
				$('.secA_door').removeClass('secA3_change_door2');
				$('.secA_door').removeClass('secA3_change_door3');
				$('.secA_door').removeClass('secA3_change_door4');
			 	$('.secA_door').addClass('secA3_change_door5');
				 
			 	//로고문안쪽속성 제거중(및 추가변화)
				$('.secA_line_door').addClass('secA3_change_line_door1');
				 
				$('.secA_line_door').removeClass('secA3_change_line_door2');
				$('.secA_line_door').removeClass('secA3_change_line_door3');
				$('.secA_line_door').removeClass('secA3_change_line_door4');
				$('.secA_line_door').removeClass('secA3_change_line_door5');
				$('.secA_line_door').removeClass('secA3_change_line_door6');
				$('.secA_line_door').removeClass('secA2_change_line_door4');
			 
				 
				 
				 
			 	//---secA3캡션 변화
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox1');
			 	$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
				$('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
			 	$('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox5');
				 
				 //네번째 캡션제거
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
				$('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
				 $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
				 
				$('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox1');
				 
				 
                 
                 //패스효과 제거
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');
                 
                //서브 패스 제거
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');
                 
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5'); 
                 
                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');
                 
                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1'); 
                 
                 
				 //블랭크박스들제거!!(배경영상을 가리기위함)
				$('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
				$('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
				$('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
				$('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
				 
				 
				 
				 //배경영상 제거
				$('.secA4_back_videoBox').addClass('secA4_back_videoBox1');
				 
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
				$('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
				 
				 
			 }
		
		
		//-------------------------------secA4 등장 지점--------------------------------------------	
		
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*24)+(secA_addSumMobile*3)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*25)+(secA_addSumMobile*3)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색 복구
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');

                //secA1캡 display 숨김
                $('.secA1_ctnBox').removeClass('secA1_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox1');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox2');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox3');
                $('.secA1_ctnBox').removeClass('secA2_ctnBox4');

                $('.secA1_ctnBox').addClass('secA2_ctnBox5');



                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').addClass('secA3_change_door5');

                //로고문안쪽속성 제거중(및 추가변화)
                $('.secA_line_door').addClass('secA3_change_line_door4');

                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA2_change_line_door4');

                //---secA3캡션 변화
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox1');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
                $('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox6');


                //네번째 캡션등장1
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox2');

                //패스효과
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d1');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');

                //서브 패스
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d1');

                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');

                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');

                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');

                //블랭크박스들제거!!(배경영상을 가리기위함)
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');



                //배경영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');



            }

            //secA3 캡션 퇴장 지점
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*25)+(secA_addSumMobile*3)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*26)+(secA_addSumMobile*3)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색 복구
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');

                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').addClass('secA3_change_door5');

                //로고문안쪽속성 제거중(및 추가변화)
                $('.secA_line_door').addClass('secA3_change_line_door5');

                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA2_change_line_door4');

                //---secA3캡션 제거(display : none)
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
                $('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');


                //네번째 캡션등장2
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox2');



                //패스효과
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d2');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d1');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');

                //서브 패스
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d2');

                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d1');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');


                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');

                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');


                //블랭크박스들등장!!(배경영상을 가리기위함)
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');


                //배경영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');


                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');

                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');
            }





            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*26)+(secA_addSumMobile*3)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*27)+(secA_addSumMobile*4)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색 복구
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');


                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').addClass('secA3_change_door5');

                //로고문안쪽속성 고정
                $('.secA_line_door').addClass('secA3_change_line_door5');

                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA2_change_line_door4');

                //---secA3캡션 제거(display : none)
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox2');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox3');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox4');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox5');
                $('.secA3_Third_ctnBox').removeClass('secA3_Third_ctnBox6');
                $('.secA3_Third_ctnBox').addClass('secA3_Third_ctnBox1');



                //네번째 캡션등장3
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox2');

                //패스효과
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d3');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d1');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');

                //서브 패스
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d3');

                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d1');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');

                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');

                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');

                //블랭크박스들등장!!(배경영상을 가리기위함)
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');


                //배경 영상 등장 (opacity : 0)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox2');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');

                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');


                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');

                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');
            }




            //점점 배경 영상이 나옴(secA_line_door) 연해짐
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*27)+(secA_addSumMobile*4)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*28)+(secA_addSumMobile*4)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색 복구
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');

                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').addClass('secA3_change_door5');

                //로고문안쪽속성 고정
                $('.secA_line_door').addClass('secA3_change_line_door4');

                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA2_change_line_door4');

                //네번째 캡션등장4
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox2');


                //패스효과
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d4');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d1');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');

                //서브 패스
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d4');

                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d1');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');

                //패스 색 제거
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path2');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path1');


                //서브 패스색 제거
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path2');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path1');




                //블랭크박스들등장!!(배경영상을 가리기위함)
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');


                //배경 영상 등장 (opacity : 0.5)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox3');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');


                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');

                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');
            }


            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*28)+(secA_addSumMobile*4)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*29)+(secA_addSumMobile*4)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색 복구
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');

                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').addClass('secA3_change_door5');

                //로고문안쪽속성 고정(점점 연해짐)
                $('.secA_line_door').addClass('secA3_change_line_door3');

                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA2_change_line_door4');

                //네번째 캡션등장5
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox2');


                //패스효과
                $('.secA4_wide_type_path1').addClass('secA4_wide_type_path1_d5');

                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d1');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');

                //서브 패스
                $('.secA4_sub_type_path1').addClass('secA4_sub_type_path1_d5');

                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d1');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');

                //패스 색 넣기
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path1');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path2');

                //서브 패스색 넣기
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path1');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path2');



                //블랭크박스들등장!!(배경영상을 가리기위함)
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');

                //배경 영상 등장 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');



                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');

                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');

                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }



              //와이드. 흰색으로 바뀌는지점
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*29)+(secA_addSumMobile*4)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*30)+(secA_addSumMobile*5)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색 복구
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');

                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').addClass('secA3_change_door5');

                //로고문안쪽속성 고정(점점 연해짐)
                $('.secA_line_door').addClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');

                //네번째 캡션등장5
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox2');


                //패스효과 제거                  
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d1');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d2');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d3');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d4');
                $('.secA4_wide_type_path1').removeClass('secA4_wide_type_path1_d5');

                //서브 패스 제거
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d1');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d2');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d3');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d4');
                $('.secA4_sub_type_path1').removeClass('secA4_sub_type_path1_d5');

                //패스 색 넣기
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path1');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path2');

                //서브 패스색 넣기
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path1');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path2');


                //블랭크박스들등장!!(배경영상을 가리기위함)
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');


                //배경 영상 등장 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');


                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');


                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }


            //secA4 캡션 사라짐
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*30)+(secA_addSumMobile*5)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*31)+(secA_addSumMobile*5)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색 복구
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox2');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox1');


                $('.secA_line_door').removeClass('secA2_change_line_door2');
                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');

                //로고문안쪽속성 고정(점점 연해짐)
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');

                //네번째 캡션등장5
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox3');


                //패스 색 넣기
                $('.secA4_wide_type_path').removeClass('secA4_wide_type_path1');
                $('.secA4_wide_type_path').addClass('secA4_wide_type_path2');

                //서브 패스색 넣기
                $('.secA4_sub_type_path').removeClass('secA4_sub_type_path1');
                $('.secA4_sub_type_path').addClass('secA4_sub_type_path2');



                //블랭크박스들등장!!(배경영상을 가리기위함)
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');


                //배경 영상 등장 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');


                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');


                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');



                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');

                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }
		
		
	//-------------------------------secA5 등장 지점--------------------------------------------	
            //secA4 캡션 사라짐
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*31)+(secA_addSumMobile*5)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*32)+(secA_addSumMobile*5)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');

                 //-2배경 로고문 고정
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');

                //로고문안쪽속성 고정(점점 연해짐)
                $('.secA_line_door').removeClass('secA_change_line_door1');

                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');

                //네번째 캡션사라짐
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox5');
                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox4');

                //블랭크박스들 고정
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');


                //배경 영상 등장 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');



                //다섯번째 캡션 등장
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox2');

                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');



                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');
            }



            //secA5 캡션 주내용
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*32)+(secA_addSumMobile*5)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*33)+(secA_addSumMobile*5)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');


                 //-2배경 로고문 고정(완전 제거)
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');


                //로고문안쪽속성 고정(완전 제거)
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');


                //네번째 캡션 완전 제거
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');

                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox5');

                //블랭크박스들 고정
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');

                //배경 영상 고정 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 등장
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');



                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');

                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }


            //secA5 캡션 하위캡션 등장지점
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*33)+(secA_addSumMobile*5)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*34)+(secA_addSumMobile*5)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');

                 //-2배경 로고문 고정(완전 제거)
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');


                //로고문안쪽속성 고정(완전 제거)
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');


                //네번째 캡션 완전 제거
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');

                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox5');

                //블랭크박스들 고정
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');

                //배경 영상 고정 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 등장
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts2');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');




                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }


            //secA5 캡션 하위캡션 두번째 등장
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*34)+(secA_addSumMobile*5)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*35)+(secA_addSumMobile*5)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');


                 //-2배경 로고문 고정(완전 제거)
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');


                //로고문안쪽속성 고정(완전 제거)
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');


                //네번째 캡션 완전 제거
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');

                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox5');

                //블랭크박스들 고정
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');

                //배경 영상 고정 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 등장
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts2');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts2');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');



                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }





            //secA5 캡션 하위캡션 세번째 등장
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*35)+(secA_addSumMobile*5)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*36)+(secA_addSumMobile*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');


                 //-2배경 로고문 고정(완전 제거)
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');


                //로고문안쪽속성 고정(완전 제거)
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');


                //네번째 캡션 완전 제거
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');

                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox5');

                //블랭크박스들 고정
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');

                //배경 영상 고정 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 등장
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts2');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts2');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts2');



                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');


                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');

                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }


            //secA5 영상 사라지고 메인캡션나옴
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*36)+(secA_addSumMobile*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*37)+(secA_addSumMobile*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');


                 //-2배경 로고문 고정(완전 제거)
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');


                //로고문안쪽속성 고정(완전 제거)
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');


                //네번째 캡션 완전 제거
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');

                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox5');

                //블랭크박스 둥글게
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box2');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box2');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box3');


                //배경 영상 고정 (opacity : 1)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox4');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts1');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts3');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts1');


                //캡션 안 주제 복구
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts3');
                $('.secA5_topic_texts').addClass('secA5_topic_texts1');

                //캡션안 패스 크기 및 색 복구
                $('.secA5_design_icon').addClass('secA5_design_icon1');
                $('.secA5_extens_icon').addClass('secA5_extens_icon1');
                $('.secA5_skill_icon').addClass('secA5_skill_icon1');

                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path1');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path2');

                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');


            }

		

            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*37)+(secA_addSumMobile*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*38)+(secA_addSumMobile*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');


                 //-2배경 로고문 고정(완전 제거)
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');


                //로고문안쪽속성 고정(완전 제거)
                $('.secA_line_door').removeClass('secA_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door6');
                $('.secA_line_door').removeClass('secA3_change_line_door1');
                $('.secA_line_door').removeClass('secA3_change_line_door2');
                $('.secA_line_door').removeClass('secA3_change_line_door3');
                $('.secA_line_door').removeClass('secA3_change_line_door4');
                $('.secA_line_door').removeClass('secA3_change_line_door5');
                $('.secA_line_door').removeClass('secA2_change_line_door4');


                //네번째 캡션 완전 제거
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');

                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox5');

                //블랭크박스 둥글게
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 고정 (opacity : .5)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox5');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 및 색 변경
                $('.secA5_design_icon').addClass('secA5_design_icon2');
                $('.secA5_extens_icon').addClass('secA5_extens_icon2');
                $('.secA5_skill_icon').addClass('secA5_skill_icon2');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');

                //캡션안 + 박스  숨기기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }



            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*38)+(secA_addSumMobile*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*39)+(secA_addSumMobile*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');


                 //-2배경 로고문 고정(완전 제거)
                $('.secA_door').removeClass('secA3_change_door1');
                $('.secA_door').removeClass('secA3_change_door2');
                $('.secA_door').removeClass('secA3_change_door3');
                $('.secA_door').removeClass('secA3_change_door4');
                $('.secA_door').removeClass('secA3_change_door5');


                //네번째 캡션 완전 제거
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox1');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox2');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox3');
                $('.secA4_ctn_mainBox').removeClass('secA4_ctn_mainBox4');

                $('.secA4_ctn_mainBox').addClass('secA4_ctn_mainBox5');

                //블랭크박스 둥글게
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 하얗게 (opacity : 0)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox6');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 및 색 변경
                $('.secA5_design_icon').addClass('secA5_design_icon2');
                $('.secA5_extens_icon').addClass('secA5_extens_icon2');
                $('.secA5_skill_icon').addClass('secA5_skill_icon2');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 보이기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox1');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox2');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');

                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }




            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*39)+(secA_addSumMobile*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*40)+(secA_addSumMobile*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 하얗게 (opacity : 0)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox6');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 및 색 변경
                $('.secA5_design_icon').addClass('secA5_design_icon2');
                $('.secA5_extens_icon').addClass('secA5_extens_icon2');
                $('.secA5_skill_icon').addClass('secA5_skill_icon2');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 보이기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox1');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox2');


                //빅로고 제거(디스플레이 삭제)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox1');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }




//-------------------------------secA6 등장 지점--------------------------------------------		
            //빅로고 온
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*40)+(secA_addSumMobile*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*41)+(secA_addSumMobile*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box4');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 하얗게 (opacity : 0)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox6');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 및 색 변경
                $('.secA5_design_icon').addClass('secA5_design_icon2');
                $('.secA5_extens_icon').addClass('secA5_extens_icon2');
                $('.secA5_skill_icon').addClass('secA5_skill_icon2');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 보이기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox1');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox2');


                //빅로고 등장(디스플레이 온)
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox2');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }



            //빅로고 실제화면에 첫등장
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*41)+(secA_addSumMobile*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*42)+(secA_addSumMobile*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box4');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box5');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 하얗게 (opacity : 0)
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox6');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox1');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 작아짐
                $('.secA5_design_icon').addClass('secA5_design_icon3');
                $('.secA5_extens_icon').addClass('secA5_extens_icon3');
                $('.secA5_skill_icon').addClass('secA5_skill_icon3');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 보이기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox1');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox3');


                //빅로고 등장(실제화면에 첫등장
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox3');

                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }





            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*42)+(secA_addSumMobile*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*43)+(secA_addSumMobile*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box5');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 작아짐
                $('.secA5_design_icon').addClass('secA5_design_icon4');
                $('.secA5_extens_icon').addClass('secA5_extens_icon4');
                $('.secA5_skill_icon').addClass('secA5_skill_icon4');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon5');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon5');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon5');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 보이기
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox1');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox4');


                //빅로고 등장(실제화면에 첫등장
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox4');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }


            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*43)+(secA_addSumMobile*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*44)+(secA_addSumMobile*6)))) ) { 
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');

                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box5');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 작아짐
                $('.secA5_design_icon').addClass('secA5_design_icon5');
                $('.secA5_extens_icon').addClass('secA5_extens_icon5');
                $('.secA5_skill_icon').addClass('secA5_skill_icon5');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 제거
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 등장(실제화면에 첫등장
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox5');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }



            //빅로고 완전히 작아진 시점
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*44)+(secA_addSumMobile*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*45)+(secA_addSumMobile*6)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box5');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 고정
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox1');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox3');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 작아짐
                $('.secA5_design_icon').addClass('secA5_design_icon5');
                $('.secA5_extens_icon').addClass('secA5_extens_icon5');
                $('.secA5_skill_icon').addClass('secA5_skill_icon5');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 제거
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 등장(실제화면에 첫등장
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox6');


                //프리미엄 로고 및 빅로고 복구
                $('.secA6_platlogo_path1_d1').removeClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox1');

            }






            //프리미엄 로고 등장
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*45)+(secA_addSumMobile*6)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*46)+(secA_addSumMobile*7)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box5');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 작아짐
                $('.secA5_design_icon').addClass('secA5_design_icon5');
                $('.secA5_extens_icon').addClass('secA5_extens_icon5');
                $('.secA5_skill_icon').addClass('secA5_skill_icon5');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 제거
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 지속
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox7');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox6');


                //프리미엄 로고 등장 및 빅로고 색변경
                $('.secA6_platlogo_path1_d1').addClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox1');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox3');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox2');

            }




            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*46)+(secA_addSumMobile*7)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*47)+(secA_addSumMobile*7)))) ) {
                //--------------secA position : fixed----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox2');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox1');


                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box5');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 작아짐
                $('.secA5_design_icon').addClass('secA5_design_icon5');
                $('.secA5_extens_icon').addClass('secA5_extens_icon5');
                $('.secA5_skill_icon').addClass('secA5_skill_icon5');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 제거
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 지속
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox7');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox6');


                //프리미엄 로고 등장 및 빅로고 색변경
                $('.secA6_platlogo_path1_d1').addClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox1');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox3');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox2');

            }




//-------------------------------secA 배경에 붙음--------------------------------------------			
            //secA포지션 고정으로바뀜
            if(current > (secA1_position + (secA_defaultValue + ((secA_sumMobile*47)+(secA_addSumMobile*7)))) && current < (secA1_position + (secA_defaultValue + ((secA_sumMobile*48)+(secA_addSumMobile*7)))) ) { 
                //--------------secA position : static----------------
                $('.secA1_fixed_contentsBox').removeClass('secA1_fixed_contentsBox1');
                $('.secA1_fixed_contentsBox').addClass('secA1_fixed_contentsBox2');



                //-----secA 전체 뒷배경색
                $('.secA1_in_relativeBox').removeClass('secA1_in_relativeBox1');
                $('.secA1_in_relativeBox').addClass('secA1_in_relativeBox2');



                //블랭크박스 둥글게(및) 오펙
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box3');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box3');
                $('.secA4_blank_top_box').addClass('secA4_blank_top_box5');
                $('.secA4_blank_bot_box').addClass('secA4_blank_bot_box5');

                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box4');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box4');
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box1');	
                $('.secA4_blank_top_box').removeClass('secA4_blank_top_box2');	
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box1');
                $('.secA4_blank_bot_box').removeClass('secA4_blank_bot_box2');


                //배경 영상 제거
                $('.secA4_back_videoBox').addClass('secA4_back_videoBox1');

                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox6');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox2');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox3');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox4');
                $('.secA4_back_videoBox').removeClass('secA4_back_videoBox5');

                //다섯번째 캡션 제거
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox3');
                $('.secA5_main_ctnBox').removeClass('secA5_main_ctnBox2');
                $('.secA5_main_ctnBox').addClass('secA5_main_ctnBox1');

                //다섯번째 처음 하위캡션 제거(display : none;)
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d1').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d1').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d2').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d2').addClass('secA5_contents_texts3');

                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts2');
                $('.secA5_contents_texts1_d3').removeClass('secA5_contents_texts1');
                $('.secA5_contents_texts1_d3').addClass('secA5_contents_texts3');

                //캡션 안 주제 숨김
                $('.secA5_topic_texts').removeClass('secA5_topic_texts1');
                $('.secA5_topic_texts').removeClass('secA5_topic_texts2');
                $('.secA5_topic_texts').addClass('secA5_topic_texts3');

                //캡션안 패스 크기 작아짐
                $('.secA5_design_icon').addClass('secA5_design_icon5');
                $('.secA5_extens_icon').addClass('secA5_extens_icon5');
                $('.secA5_skill_icon').addClass('secA5_skill_icon5');

                $('.secA5_design_icon').removeClass('secA5_design_icon1');
                $('.secA5_design_icon').removeClass('secA5_design_icon2');
                $('.secA5_design_icon').removeClass('secA5_design_icon3');
                $('.secA5_design_icon').removeClass('secA5_design_icon4');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon1');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon2');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon3');
                $('.secA5_extens_icon').removeClass('secA5_extens_icon4');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon1');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon2');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon3');
                $('.secA5_skill_icon').removeClass('secA5_skill_icon4');

                $('.secA5_design_icon_path').addClass('secA5_design_icon_path2');
                $('.secA5_extens_icon_path').addClass('secA5_extens_icon_path2');
                $('.secA5_skill_icon_path').addClass('secA5_skill_icon_path2');

                $('.secA5_design_icon_path').removeClass('secA5_design_icon_path1');
                $('.secA5_extens_icon_path').removeClass('secA5_extens_icon_path1');
                $('.secA5_skill_icon_path').removeClass('secA5_skill_icon_path1');


                //캡션안 + 박스 제거
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox4');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox2');
                $('.secA5_in_plusBox').removeClass('secA5_in_plusBox3');
                $('.secA5_in_plusBox').addClass('secA5_in_plusBox1');


                //빅로고 지속
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox1');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox2');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox3');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox4');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox5');
                $('.secA6_little_LogoBox').removeClass('secA6_little_LogoBox6');
                $('.secA6_little_LogoBox').addClass('secA6_little_LogoBox7');


                //프리미엄 로고 등장 및 빅로고 색변경
                $('.secA6_platlogo_path1_d1').addClass('secA6_platlogo_path1_d2');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox1');
                $('.secA6_premium_logoTypeBox').removeClass('secA6_premium_logoTypeBox2');
                $('.secA6_premium_logoTypeBox').addClass('secA6_premium_logoTypeBox3');

            }

			
		} //end  else (if($(window).width() > 765))
        
        
        
        

	}); //end $(window).scroll(function()

		
	
}); //end $(function())


//1120

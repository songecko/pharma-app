<!--Language Selector-->
function educacionFarmaceutico_hipoglos_03()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_hipoglos_03' ;
	
	/*****************************
	General Elements
	*****************************/
	var menuContent = 
		//Main Menu
		"<div class='shortCuts' id='ico_01'><img src='img/icons/ico_mainMenu.png' onmouseover='rollOver_ico_01()' /></div>"+
		
		//Menu Areas
		"<div class='shortCuts' id='ico_02'><img src='img/icons/ico_menu_Areas_01.png' onmouseover='rollOver_ico_02()' /></div>"+
		
		//Menu Rol
		"<div class='shortCuts' id='ico_03'><img src='img/icons/ico_menu_Rol_gerente.png' onmouseover='rollOver_ico_03()' /></div>"+

		//Menu Induccion
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_educacionFarmaceutico.png' onmouseover='rollOver_ico_04()' /></div>"+
		
		//Hipoglos
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_marcas_Hipoglos.png' onmouseover='rollOver_ico_05()' /></div>"+
		
	"" ;
	
	/*****************************
	General Elements
	*****************************/
	var generalElements =		
		//Logo Pharma Latam
		//"<div class='topLogoPharma'><img src='img/img_logoPharma.png' height='80'/></div>"+
		
		//Top Line
		//"<div class='topLine'><img src='img/img_topLine.png'/></div>"+
		
		//Top Multiple Logos
		//"<div class='topMultipleLogos_Language'><img src='img/img_logosFull.png' height='30'/></div>"+
		
		//Global World
		"<div class='worlMap_icon' id='worlMap_icon' onmouseover='rollOver_worlMap_icon()'>"+
			//Actual Language
			"<div class='actualLanguage'><img src='img/img_language_Brasil.png' id='imageLanguage'/></div>"+
		"</div>"+
		
		//Flechas anterior y siguiente
			//Anterior
		"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()' ><img src='img/img_flecha_back.png' /></div>"+
			//Siguiente
		"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
			
	"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////Mexico
	var educacionFarmaceutico_hipoglos_03_mexico =
		//Logo
		"<div class='hipoglos_logoHipoglos' id='hipoglos_logoHipoglos'><img src='img/Hipoglos/img_logoHipoglos_wStroke.png' height='50'></div>"+
		
		//Container
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+
		
		//Slide Number
		"<div class='slideNumber'>---</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_hipoglos_03_brasil =
		//Logo
		"<div class='hipoglos_logoHipoglos' id='hipoglos_logoHipoglos'><img src='img/Hipoglos/img_logoHipoglos_wStroke.png' height='50'></div>"+
				
		//Heart
		"<div class='hipoglos_heart' id='hipoglos_heart_03'><img src='img/Hipoglos/img_heart.png' /></div>"+

		//Titles
		"<div class='hipoglos_text_s3_red' id='hipoglos_text_s3_red_01'>Como vender mais?</div>"+
		
		//Texts
			//01 
		"<div class='hipoglos_text_s3_red' id='hipoglos_text_s3_red_02'>1. Garanta a presença de todas as versões na loja.<br/>Consumidores costumam comprar mais de um tamanho, para diversas situações.</div>"+
			//02 
		"<div class='hipoglos_text_s3_red' id='hipoglos_text_s3_red_03'>2. Ofereça Hipoglós para todas as pessoas que procuram itens de bebê, como fraldas, lenços umedecidos e mamadeiras.</div>"+
			//03 
		"<div class='hipoglos_text_s3_red' id='hipoglos_text_s3_red_04'>3. Exponha os produtos em pontas de gôndola, perto da seção de cuidados com o bebê.</div>"+
		
		
		//Images
			//01
		"<div class='hipoglos_tables_s3' id='hipoglos_tables_s3_01'><img src='img/Hipoglos/img_table_01.png' /></div>"+
			//02
		"<div class='hipoglos_tables_s3' id='hipoglos_tables_s3_02'><img src='img/Hipoglos/img_table_02.png' /></div>"+
			//03
		"<div class='hipoglos_tables_s3' id='hipoglos_tables_s3_03'><img src='img/Hipoglos/img_bottom_hipoglos_03.png' /></div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguinte_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>121</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_hipoglos_03_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var noDisponible = document.getElementById("noDisponible") ;
				
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_hipoglos_03_mex()
			{
				var noDisponible = document.getElementById("noDisponible") ;
			
				TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				function ChangePage()
				{
					switch(pagChange)
					{						
						case -6:
							educacionFarmaceutico_05() ;
						break;
						
						case -5:
							menu_Principal() ;
						break;
						
						case -4:
							menu_Rol() ;
						break;
						
						case -3:
							menu_Areas() ;
						break;
						
						case -2:
							CoverSheet() ;
						break;
						
						case -1:
							languageSelector() ;
						break;
						
						case 0:
							educacionFarmaceutico_hipoglos_02() ;
						break;
						
						case 1:
							educacionFarmaceutico_hipoglos_04() ;
						break ;
					}
				}
			}

			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_educacionFarmaceutico_hipoglos_03_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_hipoglos_03_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_hipoglos_03_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_hipoglos_03_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_hipoglos_03_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_hipoglos_03_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_hipoglos_03_mex() ;
			});
			
			/*FlechaBack*/
			$('#flechaBack').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 0 ;
				
				kill_hipoglos_brochure_03 () ;
				exit_educacionFarmaceutico_hipoglos_03_mex () ;
			});
			
				/*FlechaNext*/
			$('#flechaNext').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 1 ;
				
				kill_hipoglos_brochure_03 () ;
				exit_educacionFarmaceutico_hipoglos_03_mex () ;
			});
			
			
		break ;
		
		//Venezuela
		case 2:
		break ;
		
		//Colombia		
		case 3:
		break ;
		
		//Ecuador
		case 4:
		break ;
		
		//Brasil
		case 5:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_hipoglos_03_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Variable actions
			***********************************************/
			var action_01 = 0 ;
			
			/**********************************************
			Button Actions
			***********************************************/			
			//Este lo agregue
			/*button next*/
			$('#buttonNext').click(function() {
				action_01++ ;
				
				switch(action_01)
				{
					case 1:
						actions_01() ;
					break ;
					
					case 2:
						actions_02() ;
					break ;
					
					case 3:
						actions_03() ;
					break ;
				}
			});
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var hipoglos_heart_03 = document.getElementById("hipoglos_heart_03") ;
			
			var hipoglos_text_s3_red_01 = document.getElementById("hipoglos_text_s3_red_01") ;
			var hipoglos_text_s3_red_02 = document.getElementById("hipoglos_text_s3_red_02") ;
			var hipoglos_text_s3_red_03 = document.getElementById("hipoglos_text_s3_red_03") ;
			var hipoglos_text_s3_red_04 = document.getElementById("hipoglos_text_s3_red_04") ;
			
			var hipoglos_tables_s3_01 = document.getElementById("hipoglos_tables_s3_01") ;
			var hipoglos_tables_s3_02 = document.getElementById("hipoglos_tables_s3_02") ;
			var hipoglos_tables_s3_03 = document.getElementById("hipoglos_tables_s3_03") ;
						
			hipoglos_text_s3_red_01.style.opacity = '0' ;
			hipoglos_text_s3_red_02.style.opacity = '0' ;
			hipoglos_text_s3_red_03.style.opacity = '0' ;
			hipoglos_text_s3_red_04.style.opacity = '0' ;
			
			hipoglos_tables_s3_01.style.opacity = '0' ;
			hipoglos_tables_s3_02.style.opacity = '0' ;
			hipoglos_tables_s3_03.style.opacity = '0' ;
			
			TweenMax.staggerFromTo ([hipoglos_text_s3_red_01 , hipoglos_text_s3_red_02] , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut} , .25) ;

			/**********************************************
			Actions functions
			***********************************************/
			//01
			function actions_01()
			{		
				TweenMax.staggerFromTo ([hipoglos_text_s3_red_03 , hipoglos_tables_s3_01] , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut} , .25) ;
			}
			
			//02
			function actions_02()
			{
				TweenMax.staggerFromTo ([hipoglos_text_s3_red_04 , hipoglos_tables_s3_02] , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut} , .25) ;
			}
			
			//03
			function actions_03()
			{
				TweenMax.fromTo (hipoglos_tables_s3_03 , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_hipoglos_03()
			{
				var hipoglos_heart_03 = document.getElementById("hipoglos_heart_03") ;
			
				var hipoglos_text_s3_red_01 = document.getElementById("hipoglos_text_s3_red_01") ;
				var hipoglos_text_s3_red_02 = document.getElementById("hipoglos_text_s3_red_02") ;
				var hipoglos_text_s3_red_03 = document.getElementById("hipoglos_text_s3_red_03") ;
				var hipoglos_text_s3_red_04 = document.getElementById("hipoglos_text_s3_red_04") ;
				
				var hipoglos_tables_s3_01 = document.getElementById("hipoglos_tables_s3_01") ;
				var hipoglos_tables_s3_02 = document.getElementById("hipoglos_tables_s3_02") ;
				var hipoglos_tables_s3_03 = document.getElementById("hipoglos_tables_s3_03") ;
				
				TweenMax.fromTo (hipoglos_heart_03 , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage , ease:Power2.easeOut}) ;
			
				TweenMax.staggerFromTo ([hipoglos_text_s3_red_01 , hipoglos_text_s3_red_02] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut} , .25) ;
				TweenMax.staggerFromTo ([hipoglos_text_s3_red_03 , hipoglos_tables_s3_01] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut} , .25) ;
				TweenMax.staggerFromTo ([hipoglos_text_s3_red_04 , hipoglos_tables_s3_02] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut} , .25) ;
				TweenMax.fromTo (hipoglos_tables_s3_03 , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut}) ;
				
				function ChangePage()
				{
					switch(pagChange)
					{						
						case -6:
							educacionFarmaceutico_05() ;
						break;
						
						case -5:
							menu_Principal() ;
						break;
						
						case -4:
							menu_Rol() ;
						break;
						
						case -3:
							menu_Areas() ;
						break;
						
						case -2:
							CoverSheet() ;
						break;
						
						case -1:
							languageSelector() ;
						break;
						
						case 0:
							educacionFarmaceutico_hipoglos_02() ;
						break;
						
						case 1:
							educacionFarmaceutico_hipoglos_04() ;
						break ;
					}
				}
			}
			
			//////////////////////////Kill Tweens
			function kill_hipoglos_brochure_03()
			{
				var hipoglos_bottle_blue = document.getElementById("hipoglos_bottle_blue") ;
				var hipoglos_bottle_shadow = document.getElementById("hipoglos_bottle_shadow") ;
				
				var img_bottle_topGirl = document.getElementById("img_bottle_topGirl") ;
				
				var hipoglos_s3_vapoRub_txt = document.getElementById("hipoglos_s3_vapoRub_txt") ;
				
				var hipoglos_s3_alivia_txt = document.getElementById("hipoglos_s3_alivia_txt") ;
				var hipoglos_s3_3_txt = document.getElementById("hipoglos_s3_3_txt") ;
				var hipoglos_s3_sintomas_txt = document.getElementById("hipoglos_s3_sintomas_txt") ;
				
				var hipoglos_s3_bullets_01 = document.getElementById("hipoglos_s3_bullets_01") ;
				var hipoglos_s3_bullets_02 = document.getElementById("hipoglos_s3_bullets_02") ;
				var hipoglos_s3_bullets_03 = document.getElementById("hipoglos_s3_bullets_03") ;
				
				var hipoglos_s3_buenaNoche = document.getElementById("hipoglos_s3_buenaNoche") ;
				
				var hipoglos_s3_notes_01 = document.getElementById("hipoglos_s3_notes_01") ;
				
				var hipoglos_s3_unguento = document.getElementById("hipoglos_s3_unguento") ;
					
				TweenMax.killTweensOf ([hipoglos_bottle_blue , hipoglos_bottle_shadow , img_bottle_topGirl , hipoglos_s3_vapoRub_txt , hipoglos_s3_alivia_txt , hipoglos_s3_3_txt , hipoglos_s3_sintomas_txt , hipoglos_s3_bullets_01 , hipoglos_s3_bullets_02 , hipoglos_s3_bullets_03 , hipoglos_s3_buenaNoche , hipoglos_s3_notes_01 , hipoglos_s3_unguento]) ;
				
				TweenMax.to ([hipoglos_bottle_blue , hipoglos_bottle_shadow , img_bottle_topGirl , hipoglos_s3_vapoRub_txt , hipoglos_s3_alivia_txt , hipoglos_s3_3_txt , hipoglos_s3_sintomas_txt , hipoglos_s3_bullets_01 , hipoglos_s3_bullets_02 , hipoglos_s3_bullets_03 , hipoglos_s3_buenaNoche , hipoglos_s3_notes_01 , hipoglos_s3_unguento] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;	
			}

			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_educacionFarmaceutico_hipoglos_03() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_hipoglos_03() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_hipoglos_03() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_hipoglos_03() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_hipoglos_03() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_hipoglos_03() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_hipoglos_03() ;
			});
			
			/*FlechaBack*/
			$('#flechaBack').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 0 ;
				
				kill_hipoglos_brochure_03 () ;
				exit_educacionFarmaceutico_hipoglos_03 () ;
			});
			
				/*FlechaNext*/
			$('#flechaNext').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 1 ;
				
				kill_hipoglos_brochure_03 () ;
				exit_educacionFarmaceutico_hipoglos_03 () ;
			});

		break ;
		
		//Chile
		case 6:
		break ;
		
		//Argentina
		case 7:
		break ;
	}

	/**********************************************
	Background Image
	***********************************************/
	var backGradient = document.getElementById("backGradient");
	backGradient.src = 'img/img_back_hipoglos.png' ;
}
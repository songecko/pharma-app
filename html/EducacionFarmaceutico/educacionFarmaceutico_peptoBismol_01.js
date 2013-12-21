<!--Language Selector-->
function educacionFarmaceutico_peptoBismol_01()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_peptoBismol_01' ;
	
	/*****************************
	General Elements
	*****************************/
	var menuContent = 
		//Main Menu
		"<ul>"+
			"<il id='ico_01'><img src='img/icons/ico_mainMenu.png' onmouseover='rollOver_ico_01()' /></il>"+
		"</ul>"+
		
		"<ul>"+
			"<il id='ico_02'><img src='img/icons/ico_menu_Areas_01.png' onmouseover='rollOver_ico_02()' /></il>"+
		"</ul>"+
		
		"<ul>"+
			"<il id='ico_03'><img src='img/icons/ico_menu_Rol_gerente.png' onmouseover='rollOver_ico_03()' /></il>"+
		"</ul>"+
		
		"<ul>"+
			"<il id='ico_04'><img src='img/icons/ico_menu_educacionFarmaceutico.png' onmouseover='rollOver_ico_04()' /></il>"+
		"</ul>"+
		
		"<ul>"+
			"<il id='ico_05'><img src='img/icons/ico_marcas_PeptoBismol.png' onmouseover='rollOver_ico_05()' /></il>"+
		"</ul>"+
		
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
	/////////////////////////////////México
	var educacionFarmaceutico_peptoBismol_01_mexico =
		//Logo
		"<div class='peptoBismol_logoPeptoBismol' id='peptoBismol_logoPeptoBismol'><img src='img/img_logo_peptoBismol.png'></div>"+
		
		//Header
		"<div class='peptoBismol_header' id='peptoBismol_header'><img src='img/PeptoBismol/img_header.png'></div>"+
		
		//Es probable
		"<div class='peptoBismol_esProbable_txt' id='peptoBismol_esProbable_txt'><img src='img/PeptoBismol/img_esProbable_txt.png' /></div>"+
		
		//Bullets
			//01
		"<div class='peptoBismol_bullets' id='peptoBismol_bullets_s1_01'><li>acidez</li></div>"+
		
			//02
		"<div class='peptoBismol_bullets' id='peptoBismol_bullets_s1_02'><li>indigestión</li></div>"+
		
			//03
		"<div class='peptoBismol_bullets' id='peptoBismol_bullets_s1_03'><li>malestar estomacal</li></div>"+
		
			//04
		"<div class='peptoBismol_bullets' id='peptoBismol_bullets_s1_04'><li>náuseas</li></div>"+
		
			//05
		"<div class='peptoBismol_bullets' id='peptoBismol_bullets_s1_05'><li>diarrea</li></div>"+
		
		//Pregunta 01
		"<div class='peptoBismol_pregunta_txt' id='peptoBismol_pregunta_txt'><img src='img/PeptoBismol/peptoBismol_pregunta_txt.png' /></div>"+
		
		//Bottle Back
		"<div class='peptoBismol_bottleBack' id='peptoBismol_bottleBack'><img src='img/PeptoBismol/img_bottle_back.png' /></div>"+
		
		//Note
		"<div class='fullSection' id='peptoBismol_notes'>*Según OMS 2011. Fuente: http://www.who.int/gho/ncd/risk_factors/cholesterol_mean_text/en/</div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguiente_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>158</div>"+

	"" ;
	
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_peptoBismol_01_brasil =
		//Logo
		"<div class='peptoBismol_logoPeptoBismol' id='peptoBismol_logoPeptoBismol'><img src='img/img_logo_peptoBismol.png'></div>"+
		//Header
		"<div class='peptoBismol_header' id='peptoBismol_header'><img src='img/PeptoBismol/img_header.png'></div>"+
		
		//Container
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+

	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_peptoBismol_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
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
					
					case 4:
						actions_04() ;
					break ;
					
					case 5:
						actions_05() ;
					break ;
					
					case 6:
						actions_06() ;
					break ;
					
					case 7:
						actions_07() ;
					break ;
				}
			});
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var peptoBismol_esProbable_txt = document.getElementById("peptoBismol_esProbable_txt") ;
			
			var peptoBismol_bullets_s1_01 = document.getElementById("peptoBismol_bullets_s1_01") ;
			var peptoBismol_bullets_s1_02 = document.getElementById("peptoBismol_bullets_s1_02") ;
			var peptoBismol_bullets_s1_03 = document.getElementById("peptoBismol_bullets_s1_03") ;
			var peptoBismol_bullets_s1_04 = document.getElementById("peptoBismol_bullets_s1_04") ;
			var peptoBismol_bullets_s1_05 = document.getElementById("peptoBismol_bullets_s1_05") ;
			
			var peptoBismol_pregunta_txt = document.getElementById("peptoBismol_pregunta_txt") ;
			
			var peptoBismol_bottleBack = document.getElementById("peptoBismol_bottleBack") ;
			
			
			peptoBismol_esProbable_txt.style.opacity = '0' ;
			peptoBismol_bullets_s1_01.style.opacity = '0' ;
			peptoBismol_bullets_s1_02.style.opacity = '0' ;
			peptoBismol_bullets_s1_03.style.opacity = '0' ;
			peptoBismol_bullets_s1_04.style.opacity = '0' ;
			peptoBismol_bullets_s1_05.style.opacity = '0' ;
			peptoBismol_pregunta_txt.style.opacity = '0' ;
			peptoBismol_bottleBack.style.opacity = '0' ;
			
			
			TweenMax.fromTo (peptoBismol_esProbable_txt , 1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
			
			//////////////////////////Kill Tweens
			function kill_peptoBismol_brochure_01()
			{
				var peptoBismol_esProbable_txt = document.getElementById("peptoBismol_esProbable_txt") ;
			
				var peptoBismol_bullets_s1_01 = document.getElementById("peptoBismol_bullets_s1_01") ;
				var peptoBismol_bullets_s1_02 = document.getElementById("peptoBismol_bullets_s1_02") ;
				var peptoBismol_bullets_s1_03 = document.getElementById("peptoBismol_bullets_s1_03") ;
				var peptoBismol_bullets_s1_04 = document.getElementById("peptoBismol_bullets_s1_04") ;
				var peptoBismol_bullets_s1_05 = document.getElementById("peptoBismol_bullets_s1_05") ;
				
				var peptoBismol_pregunta_txt = document.getElementById("peptoBismol_pregunta_txt") ;
				
				var peptoBismol_bottleBack = document.getElementById("peptoBismol_bottleBack") ;
					
				TweenMax.killTweensOf ([peptoBismol_esProbable_txt , peptoBismol_bullets_s1_01 , peptoBismol_bullets_s1_02 , peptoBismol_bullets_s1_03 , peptoBismol_bullets_s1_04 , peptoBismol_bullets_s1_05 , peptoBismol_pregunta_txt , peptoBismol_bottleBack]) ;
				
				TweenMax.to ([peptoBismol_esProbable_txt , peptoBismol_bullets_s1_01 , peptoBismol_bullets_s1_01 , peptoBismol_bullets_s1_01 , peptoBismol_bullets_s1_01 , peptoBismol_bullets_s1_01 , peptoBismol_pregunta_txt , peptoBismol_bottleBack] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			}
			
			/**********************************************
			Actions functions
			***********************************************/
			//01
			function actions_01()
			{
				TweenMax.fromTo (peptoBismol_bullets_s1_01 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"} , ease:Power2.easeOut}) ;
			}
			
			//02
			function actions_02()
			{
				TweenMax.fromTo (peptoBismol_bullets_s1_02 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"} , ease:Power2.easeOut}) ;
			}
			
			//03
			function actions_03()
			{
				TweenMax.fromTo (peptoBismol_bullets_s1_03 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"} , ease:Power2.easeOut}) ;
			}
			
			//04
			function actions_04()
			{
				TweenMax.fromTo (peptoBismol_bullets_s1_04 , .5 , {css:{opacity:"0" , left:"600px"}} , {css:{opacity:"1" , left:"550px"} , ease:Power2.easeOut}) ;
			}
			
			//05
			function actions_05()
			{
				TweenMax.fromTo (peptoBismol_bullets_s1_05 , .5 , {css:{opacity:"0" , left:"600px"}} , {css:{opacity:"1" , left:"550px"} , ease:Power2.easeOut}) ;
			}
			
			//06
			function actions_06()
			{		
				TweenMax.fromTo (peptoBismol_pregunta_txt , 1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
			}
			
			//07
			function actions_07()
			{				
				TweenMax.fromTo (peptoBismol_bottleBack , 1 , {css:{opacity:"0" , height:"0px" , top:"850px"}} , {css:{opacity:"1" , height:"850px" , top:"200px"} , ease:Power2.easeOut}) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_peptoBismol_01_mex()
			{
				var peptoBismol_esProbable_txt = document.getElementById("peptoBismol_esProbable_txt") ;
	
				var peptoBismol_bullets_s1_01 = document.getElementById("peptoBismol_bullets_s1_01") ;
				var peptoBismol_bullets_s1_02 = document.getElementById("peptoBismol_bullets_s1_02") ;
				var peptoBismol_bullets_s1_03 = document.getElementById("peptoBismol_bullets_s1_03") ;
				var peptoBismol_bullets_s1_04 = document.getElementById("peptoBismol_bullets_s1_04") ;
				var peptoBismol_bullets_s1_05 = document.getElementById("peptoBismol_bullets_s1_05") ;
				
				var peptoBismol_pregunta_txt = document.getElementById("peptoBismol_pregunta_txt") ;
				
				var peptoBismol_bottleBack = document.getElementById("peptoBismol_bottleBack") ;
				
				TweenMax.fromTo (peptoBismol_esProbable_txt , 2 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut}) ;
				
				TweenMax.staggerFromTo ([peptoBismol_bullets_s1_01 , peptoBismol_bullets_s1_02 , peptoBismol_bullets_s1_03] , 1 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"250px"} , ease:Power2.easeOut} , .5) ;
				
				TweenMax.staggerFromTo ([peptoBismol_bullets_s1_04 , peptoBismol_bullets_s1_05] , 1 , {css:{opacity:"1" , left:"550px"}} , {css:{opacity:"0" , left:"650px"} , ease:Power2.easeOut} , .5) ;
				
				TweenMax.fromTo (peptoBismol_pregunta_txt , 2 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.3,1.3)"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (peptoBismol_bottleBack , 3 , {css:{opacity:"1" , height:"0px" , top:"200px"}} , {css:{opacity:"0" , height:"850px" , top:"100px"} , ease:Power2.easeOut , onComplete:ChangePage}) ;
				
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
							educacionFarmaceutico_05() ;
						break;
						
						case 1:
							educacionFarmaceutico_peptoBismol_02() ;
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
				exit_educacionFarmaceutico_peptoBismol_01_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_peptoBismol_01_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_peptoBismol_01_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_peptoBismol_01_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_peptoBismol_01_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_peptoBismol_01_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_peptoBismol_01_mex() ;
			});

			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_peptoBismol_01_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_peptoBismol_01_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_peptoBismol_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/////////////////////////////////Main Animation
			var noDisponible = document.getElementById("noDisponible") ;
				
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
						
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_peptoBismol_01()
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
							educacionFarmaceutico_05() ;
						break;
						
						case 1:
							educacionFarmaceutico_peptoBismol_02() ;
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
				exit_educacionFarmaceutico_peptoBismol_01() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_peptoBismol_01() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_peptoBismol_01() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_peptoBismol_01() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_peptoBismol_01() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_peptoBismol_01() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_peptoBismol_01() ;
			});

			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_peptoBismol_01() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_peptoBismol_01() ;
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
	backGradient.src = 'img/img_back_peptoBismol.png' ;
}
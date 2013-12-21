<!--Anaquel-->
function anaquel()
{
	CleanScreen() ;
	
	gotoSlide = 'anaquel' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_fundamentalesVentas.png' onmouseover='rollOver_ico_04()' /></div>"+		
		
		//Menu Herramientas
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_fundamentalesVentas_anaquel.png' onmouseover='rollOver_ico_05()' /></div>"+
		
	"" ;
	
	/*****************************
	General Elements
	*****************************/
	var generalElements =
		//Logo Pharma Latam
		"<div class='topLogoPharma'><img src='img/img_logoPharma.png' height='80'/></div>"+
		
		//Top Line
		"<div class='topLine'><img src='img/img_topLine.png'/></div>"+
		
		//Top Multiple Logos
		"<div class='topMultipleLogos_Language'><img src='img/img_logosFull.png' height='30'/></div>"+
		
		//Global World
		"<div class='worlMap_icon' id='worlMap_icon' onmouseover='rollOver_worlMap_icon()'>"+
			//Actual Language
			"<div class='actualLanguage'><img src='img/img_language_Brasil.png' id='imageLanguage'/></div>"+
		"</div>"+
		
		//Flechas anterior y siguiente
			//Anterior
		"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()' ><img src='img/img_flecha_back.png' /></div>"+
			//Siguiente
		//"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+

	"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////Brasil
	var anaquel_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'><b>Anaquel</b></div>"+

		//Images
		"<div class='materialVisibilidad_img' id='anaquel_back'>"+
			//Changing Image
			"<div class='BackImage_Anaquel'><img src='img/Fundamentales/Anaquel/img_anaquel_vick_01.png' id='BackImage_Anaquel_01'></div>"+
			"<div class='BackImage_Anaquel'><img src='img/Fundamentales/Anaquel/img_anaquel_metamucil_01.png' id='BackImage_Anaquel_02'></div>"+
			"<div class='BackImage_Anaquel'><img src='img/Fundamentales/Anaquel/img_anaquel_peptoBismol_01.png' id='BackImage_Anaquel_03'></div>"+
			"<div class='BackImage_Anaquel'><img src='img/Fundamentales/Anaquel/img_anaquel_clearblue_01.png' id='BackImage_Anaquel_04'></div>"+
			
			//Background
			"<img src='img/Fundamentales/Anaquel/img_backAnaquel.png'/>"+
			
		"</div>"+
		
		//Over images
			//Vick
		"<div class='img_overAnaquel' id='overAnaquel_vicks_01'><img src='img/Fundamentales/Anaquel/img_anaquel_vick_02.png'></div>"+
		"<div class='img_overAnaquel' id='overAnaquel_vicks_02'><img src='img/Fundamentales/Anaquel/img_anaquel_vick_03.png'></div>"+
		
			//Metamucil
		"<div class='img_overAnaquel' id='overAnaquel_metamucil_01'><img src='img/Fundamentales/Anaquel/img_anaquel_metamucil_02.png'></div>"+
		"<div class='img_overAnaquel' id='overAnaquel_metamucil_02'><img src='img/Fundamentales/Anaquel/img_anaquel_metamucil_03.png'></div>"+
		
			//PeptoBismol
		"<div class='img_overAnaquel' id='overAnaquel_peptoBismol_01'><img src='img/Fundamentales/Anaquel/img_anaquel_peptoBismol_02.png'></div>"+
		"<div class='img_overAnaquel' id='overAnaquel_peptoBismol_02'><img src='img/Fundamentales/Anaquel/img_anaquel_peptoBismol_03.png'></div>"+
		
			//Clearblue
		"<div class='img_overAnaquel' id='overAnaquel_clearblue_01'><img src='img/Fundamentales/Anaquel/img_anaquel_clearblue_02.png'></div>"+
		"<div class='img_overAnaquel' id='overAnaquel_clearblue_02'><img src='img/Fundamentales/Anaquel/img_anaquel_clearblue_03.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>176</div>"+
				
	"" ;
	
	/////////////////////////////////Brasil
	var anaquel_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'><b>Gôndola</b></div>"+

		//Images
		"<div class='materialVisibilidad_img' id='anaquel_back'>"+
			//Changing Image
			"<div class='BackImage_Anaquel'><img src='img/Fundamentales/Anaquel/img_anaquel_vick_01.png' id='BackImage_Anaquel_01'></div>"+
			"<div class='BackImage_Anaquel'><img src='img/Fundamentales/Anaquel/img_anaquel_metamucil_01.png' id='BackImage_Anaquel_02'></div>"+
			"<div class='BackImage_Anaquel'><img src='img/Fundamentales/Anaquel/img_anaquel_peptoBismol_01.png' id='BackImage_Anaquel_03'></div>"+
			
			//Background
			"<img src='img/Fundamentales/Anaquel/img_backAnaquel.png'/>"+
			
		"</div>"+
		
		//Over images
			//Vick
		"<div class='img_overAnaquel' id='overAnaquel_vicks_01'><img src='img/Fundamentales/Anaquel/img_anaquel_vick_02.png'></div>"+
		"<div class='img_overAnaquel' id='overAnaquel_vicks_02'><img src='img/Fundamentales/Anaquel/img_anaquel_vick_03.png'></div>"+
		
			//Metamucil
		"<div class='img_overAnaquel' id='overAnaquel_metamucil_01'><img src='img/Fundamentales/Anaquel/img_anaquel_metamucil_02.png'></div>"+
		"<div class='img_overAnaquel' id='overAnaquel_metamucil_02'><img src='img/Fundamentales/Anaquel/img_anaquel_metamucil_03.png'></div>"+
		
			//PeptoBismol
		"<div class='img_overAnaquel' id='overAnaquel_peptoBismol_01'><img src='img/Fundamentales/Anaquel/img_anaquel_peptoBismol_02.png'></div>"+
		"<div class='img_overAnaquel' id='overAnaquel_peptoBismol_02'><img src='img/Fundamentales/Anaquel/img_anaquel_peptoBismol_03.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>130</div>"+
		
				
	"" ;
		
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + anaquel_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var anaquel_back = document.getElementById("anaquel_back") ;
			
			var BackImage_Anaquel_01 = document.getElementById("BackImage_Anaquel_01") ;
			var BackImage_Anaquel_02 = document.getElementById("BackImage_Anaquel_02") ;
			var BackImage_Anaquel_03 = document.getElementById("BackImage_Anaquel_03") ;
			var BackImage_Anaquel_04 = document.getElementById("BackImage_Anaquel_04") ;
						
			var overAnaquel_vicks_01 = document.getElementById("overAnaquel_vicks_01") ;
			var overAnaquel_vicks_02 = document.getElementById("overAnaquel_vicks_02") ;
			
			var overAnaquel_metamucil_01 = document.getElementById("overAnaquel_metamucil_01") ;
			var overAnaquel_metamucil_02 = document.getElementById("overAnaquel_metamucil_02") ;
			
			var overAnaquel_peptoBismol_01 = document.getElementById("overAnaquel_peptoBismol_01") ;
			var overAnaquel_peptoBismol_02 = document.getElementById("overAnaquel_peptoBismol_02") ;
			
			var overAnaquel_clearblue_01 = document.getElementById("overAnaquel_clearblue_01") ;
			var overAnaquel_clearblue_02 = document.getElementById("overAnaquel_clearblue_02") ;
			
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (anaquel_back , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			
			
			/*TimeLine*/
			var shakingProducts = new TimelineMax ( {repeat:-1 , repeatDelay:2 , yoyo:false } );  
			  
			shakingProducts
				//Vick
				.fromTo(BackImage_Anaquel_01 , 1 , {css:{opacity:"0" , left:"500px"}} , {css:{opacity:"1" , left:"0px"} , delay:1}) 
				
				.fromTo(overAnaquel_vicks_01 , .25 , {css:{opacity:"0"}} , {css:{opacity:"1"}, delay:1})
				.to(overAnaquel_vicks_01 , .25 , {css:{opacity:"0"}, delay:2})
				
				.fromTo(overAnaquel_vicks_02 , .25 , {css:{opacity:"0"}} , {css:{opacity:"1"}, delay:1})
				.to(overAnaquel_vicks_02 , .25 , {css:{opacity:"0"}, delay:2})
				
				.to(BackImage_Anaquel_01 , 1 , {css:{opacity:"0" , left:"500px"} , delay:1})
				
				//Metamucil
				.fromTo(BackImage_Anaquel_02 , 1 , {css:{opacity:"0" , left:"500px"}} , {css:{opacity:"1" , left:"0px"} , delay:1}) 
				
				.fromTo(overAnaquel_metamucil_01 , .25 , {css:{opacity:"0"}} , {css:{opacity:"1"}, delay:1})
				.to(overAnaquel_metamucil_01 , .25 , {css:{opacity:"0"}, delay:2})
				
				.fromTo(overAnaquel_metamucil_02 , .25 , {css:{opacity:"0"}} , {css:{opacity:"1"}, delay:1})
				.to(overAnaquel_metamucil_02 , .25 , {css:{opacity:"0"}, delay:2})
				
				.to(BackImage_Anaquel_02 , 1 , {css:{opacity:"0" , left:"500px"} , delay:1})
				
				//Pepto-Bismol
				.fromTo(BackImage_Anaquel_03 , 1 , {css:{opacity:"0" , left:"500px"}} , {css:{opacity:"1" , left:"0px"} , delay:1}) 
				
				.fromTo(overAnaquel_peptoBismol_01 , .25 , {css:{opacity:"0"}} , {css:{opacity:"1"}, delay:1})
				.to(overAnaquel_peptoBismol_01 , .25 , {css:{opacity:"0"}, delay:2})
				
				.fromTo(overAnaquel_peptoBismol_02 , .25 , {css:{opacity:"0"}} , {css:{opacity:"1"}, delay:1})
				.to(overAnaquel_peptoBismol_02 , .25 , {css:{opacity:"0"}, delay:2})
				
				.to(BackImage_Anaquel_03 , 1 , {css:{opacity:"0" , left:"500px"} , delay:1})
				
				//Clearblue
				.fromTo(BackImage_Anaquel_04 , 1 , {css:{opacity:"0" , left:"500px"}} , {css:{opacity:"1" , left:"0px"} , delay:1}) 
				
				.fromTo(overAnaquel_clearblue_01 , .25 , {css:{opacity:"0"}} , {css:{opacity:"1"}, delay:1})
				.to(overAnaquel_clearblue_01 , .25 , {css:{opacity:"0"}, delay:2})
				
				.fromTo(overAnaquel_clearblue_02 , .25 , {css:{opacity:"0"}} , {css:{opacity:"1"}, delay:1})
				.to(overAnaquel_clearblue_02 , .25 , {css:{opacity:"0"}, delay:2})
				
				.to(BackImage_Anaquel_04 , 1 , {css:{opacity:"0" , left:"500px"} , delay:1}) ;
				
			/////////////////////////////////Exit animation
			function exit_anaquel_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var anaquel_back = document.getElementById("anaquel_back") ;
				
				TweenMax.killTweensOf([txt_Title_bullets , anaquel_back]) ;
				shakingProducts.seek(0) ;
				shakingProducts.kill() ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (anaquel_back , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{						
						case -6:
							menu_fundamentalesVenta() ;
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
							anaquel_menu() ;
						break;
						
						case 1:
							distribucion_02() ;
						break;
						
						case 2:
							distribucion_numerica() ;
						break;
						
						case 3:
							distribucion_portafolio() ;
						break;
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
				exit_anaquel_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_anaquel_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_anaquel_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_anaquel_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_anaquel_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_anaquel_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_anaquel_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_anaquel_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_anaquel_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_anaquel_mex_01.mp3' ;
	
			if (( auFlagLoc % 2 ) != 0)
			{
				auLocucion.play() ;
			}
			
			
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
			document.getElementById("Container").innerHTML = generalElements + anaquel_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var anaquel_back = document.getElementById("anaquel_back") ;
			
			var BackImage_Anaquel_01 = document.getElementById("BackImage_Anaquel_01") ;
			var BackImage_Anaquel_02 = document.getElementById("BackImage_Anaquel_02") ;
			var BackImage_Anaquel_03 = document.getElementById("BackImage_Anaquel_03") ;
						
			var overAnaquel_vicks_01 = document.getElementById("overAnaquel_vicks_01") ;
			var overAnaquel_vicks_02 = document.getElementById("overAnaquel_vicks_02") ;
			
			var overAnaquel_metamucil_01 = document.getElementById("overAnaquel_metamucil_01") ;
			var overAnaquel_metamucil_02 = document.getElementById("overAnaquel_metamucil_02") ;
			
			var overAnaquel_peptoBismol_01 = document.getElementById("overAnaquel_peptoBismol_01") ;
			var overAnaquel_peptoBismol_02 = document.getElementById("overAnaquel_peptoBismol_02") ;
			
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (anaquel_back , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			
			
			/*TimeLine*/
			var shakingProducts = new TimelineMax ( {repeat:-1 , repeatDelay:2 , yoyo:false } );  
			  
			shakingProducts
				//Vick
				.fromTo(BackImage_Anaquel_01 , 1 , {css:{opacity:"0" , left:"500px"}} , {css:{opacity:"1" , left:"0px"} , delay:1}) 
				
				.fromTo(overAnaquel_vicks_01 , .25 , {css:{opacity:"0"}} , {css:{opacity:"1"}, delay:1})
				.to(overAnaquel_vicks_01 , .25 , {css:{opacity:"0"}, delay:2})
				
				.fromTo(overAnaquel_vicks_02 , .25 , {css:{opacity:"0"}} , {css:{opacity:"1"}, delay:1})
				.to(overAnaquel_vicks_02 , .25 , {css:{opacity:"0"}, delay:2})
				
				.to(BackImage_Anaquel_01 , 1 , {css:{opacity:"0" , left:"500px"} , delay:1})
				
				//Metamucil
				.fromTo(BackImage_Anaquel_02 , 1 , {css:{opacity:"0" , left:"500px"}} , {css:{opacity:"1" , left:"0px"} , delay:1}) 
				
				.fromTo(overAnaquel_metamucil_01 , .25 , {css:{opacity:"0"}} , {css:{opacity:"1"}, delay:1})
				.to(overAnaquel_metamucil_01 , .25 , {css:{opacity:"0"}, delay:2})
				
				.fromTo(overAnaquel_metamucil_02 , .25 , {css:{opacity:"0"}} , {css:{opacity:"1"}, delay:1})
				.to(overAnaquel_metamucil_02 , .25 , {css:{opacity:"0"}, delay:2})
				
				.to(BackImage_Anaquel_02 , 1 , {css:{opacity:"0" , left:"500px"} , delay:1})
				
				//Pepto-Bismol
				.fromTo(BackImage_Anaquel_03 , 1 , {css:{opacity:"0" , left:"500px"}} , {css:{opacity:"1" , left:"0px"} , delay:1}) 
				
				.fromTo(overAnaquel_peptoBismol_01 , .25 , {css:{opacity:"0"}} , {css:{opacity:"1"}, delay:1})
				.to(overAnaquel_peptoBismol_01 , .25 , {css:{opacity:"0"}, delay:2})
				
				.fromTo(overAnaquel_peptoBismol_02 , .25 , {css:{opacity:"0"}} , {css:{opacity:"1"}, delay:1})
				.to(overAnaquel_peptoBismol_02 , .25 , {css:{opacity:"0"}, delay:2})
				
				.to(BackImage_Anaquel_03 , 1 , {css:{opacity:"0" , left:"500px"} , delay:1}) ;
				
			/////////////////////////////////Exit animation
			function exit_anaquel()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var anaquel_back = document.getElementById("anaquel_back") ;
				
				TweenMax.killTweensOf([txt_Title_bullets , anaquel_back]) ;
				shakingProducts.seek(0) ;
				shakingProducts.kill() ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (anaquel_back , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{						
						case -6:
							menu_fundamentalesVenta() ;
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
							anaquel_menu() ;
						break;
						
						case 1:
							distribucion_02() ;
						break;
						
						case 2:
							distribucion_numerica() ;
						break;
						
						case 3:
							distribucion_portafolio() ;
						break;
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
				exit_anaquel() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_anaquel() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_anaquel() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_anaquel() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_anaquel() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_anaquel() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_anaquel() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_anaquel() ;
			});

			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_anaquel_bra_01.mp3' ;
	
			if (( auFlagLoc % 2 ) != 0)
			{
				auLocucion.play() ;
			}
			
			
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
	backGradient.src = 'img/img_back_parhamLatam.png' ;
}
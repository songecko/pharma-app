<!--Video Intro-->
function merchandising_counter_visibilidad_clearblue()
{
	CleanScreen() ;
	gotoSlide = 'merchandising_counter_visibilidad_clearblue' ;
	
	/*****************************
	Menu Content
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_fundamentalesVentas_merchandising.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		//Menu Herramientas
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_fundamentalesVentas_anaquel.png' onmouseover='rollOver_ico_06()' /></div>"+
		
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
	/////////////////////////////////México
	var merchandising_counter_visibilidad_clearblue_mexico =	
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Clearblue / <b>Visibilidad</b></div>"+
		
		//Images
			//01
		"<div class='imageVisibilidade' id='imageVisibilidade_vicks_01'><img src='img/Fundamentales/Merchandising/img_visibilidade_clearblue_01.png' /></div>"+
			//02
		"<div class='imageVisibilidade' id='imageVisibilidade_vicks_02'><img src='img/Fundamentales/Merchandising/img_visibilidade_clearblue_02.png' /></div>"+
		
		//Slide Number
		"<div class='slideNumber'>198</div>"+
	
	"" ;
	
	
	/////////////////////////////////Brasil
	var merchandising_counter_visibilidad_clearblue_brasil =	
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+
		
		//Slide Number
		"<div class='slideNumber'>---</div>"+
	
	"" ;
	
	/**********************************************
	Show/Hide Special Items
	***********************************************/
	document.getElementById("MenuCaller").style.display = 'inline' ;
	document.getElementById("AudioCall").style.display = 'inline' ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + merchandising_counter_visibilidad_clearblue_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var imageVisibilidade_vicks_01 = document.getElementById("imageVisibilidade_vicks_01") ;
			var imageVisibilidade_vicks_02 = document.getElementById("imageVisibilidade_vicks_02") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([imageVisibilidade_vicks_01 , imageVisibilidade_vicks_02] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay: .5}, .25) ;
			
			/////////////////////////////////Exit Animation
			function exit_merchandising_counter_visibilidad_clearblue_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				
				TweenMax.killTweensOf([txt_Title_bullets , imageVisibilidade_vicks_01 , imageVisibilidade_vicks_02]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([imageVisibilidade_vicks_01 , imageVisibilidade_vicks_02] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}, .25) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							merchandising_counter_menu() ;
						break;
						
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
							merchandising_counter_menu() ;
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
				exit_merchandising_counter_visibilidad_clearblue_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_merchandising_counter_visibilidad_clearblue_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_merchandising_counter_visibilidad_clearblue_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_merchandising_counter_visibilidad_clearblue_mex() ;
			});
		
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_merchandising_counter_visibilidad_clearblue_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_merchandising_counter_visibilidad_clearblue_mex() ;
			});
			
			//Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_merchandising_counter_visibilidad_clearblue_mex() ;
			}) ;
			
			
			//Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
		
				exit_merchandising_counter_visibilidad_clearblue_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + merchandising_counter_visibilidad_clearblue_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var noDisponible = document.getElementById("noDisponible") ;
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit Animation
			function exit_merchandising_counter_visibilidad_clearblue()
			{
				var noDisponible = document.getElementById("noDisponible") ;
				
				TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				auLocucion.src = '' ;
			
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							merchandising_counter_menu() ;
						break;
						
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
							merchandising_counter_menu() ;
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
				exit_merchandising_counter_visibilidad_clearblue() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_merchandising_counter_visibilidad_clearblue() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_merchandising_counter_visibilidad_clearblue() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_merchandising_counter_visibilidad_clearblue() ;
			});
		
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_merchandising_counter_visibilidad_clearblue() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_merchandising_counter_visibilidad_clearblue() ;
			});
			
			//Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				//merchandising_counter_visibilidad_clearblue.src = '' ;
				exit_merchandising_counter_visibilidad_clearblue() ;
			}) ;
			
			
			//Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
		
				exit_merchandising_counter_visibilidad_clearblue() ;
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
	backGradient.src = 'img/img_back_parhamLatam.png' ;
	
	/**********************************************
	Audio Pause
	***********************************************/		
	document.getElementById("bgAudio").pause() ;
	document.getElementById("auBackground").style.display = 'none' ;
}
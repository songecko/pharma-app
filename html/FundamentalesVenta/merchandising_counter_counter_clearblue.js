<!--Anaquel-->
function merchandising_counter_counter_clearblue()
{
	CleanScreen() ;
	
	gotoSlide = 'merchandising_counter_counter_clearblue' ;
	
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_fundamentalesVentas_merchandising.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		//Menu Herramientas
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_fundamentalesVentas_checkOut.png' onmouseover='rollOver_ico_06()' /></div>"+
		
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
	var merchandising_counter_counter_clearblue_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Mostrador <b>Clearblue</b></div>"+

		//Images
		"<div class='materialVisibilidad_img' id='merchandising_counter_clearblue_back'>"+
			//Changing Image
			"<div class='BackImage_Merchandising_all'><img src='img/Fundamentales/Merchandising/img_counter.jpg'></div>"+
			
			//Background
			"<img src='img/Fundamentales/Anaquel/img_backAnaquel.png'/>"+
			
		"</div>"+
		
		//Over images
			//Clearblue
		"<div class='img_overAnaquel' id='overAnaquel_clearblue_01'><img src='img/Fundamentales/Merchandising/img_counter_clearblue_02.png'></div>"+
		"<div class='img_overAnaquel' id='overAnaquel_clearblue_02'><img src='img/Fundamentales/Merchandising/img_counter_clearblue_03.png'></div>"+
		"<div class='img_overAnaquel' id='overAnaquel_clearblue_03'><img src='img/Fundamentales/Merchandising/img_counter_clearblue_04.png'></div>"+
		
		//Bottom buttons
		"<div class='rectangle_02' onmouseover='rollOver_merch_btn_01()' id='merch_btn_01'>Portafolio Eficiente</div>"+
		"<div class='rectangle_02' onmouseover='rollOver_merch_btn_02()' id='merch_btn_02'>Localización Estratégica</div>"+
		"<div class='rectangle_02' onmouseover='rollOver_merch_btn_03()' id='merch_btn_03'>Bloque de Marca</div>"+
		
		//Slide Number
		"<div class='slideNumber'>197</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var merchandising_counter_counter_clearblue_brasil =
		//No content
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+
		
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
			document.getElementById("Container").innerHTML = generalElements + merchandising_counter_counter_clearblue_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Variables
			***********************************************/
			calledImage = 0 ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var merchandising_counter_clearblue_back = document.getElementById("merchandising_counter_clearblue_back") ;
			
			var overAnaquel_clearblue_01 = document.getElementById("overAnaquel_clearblue_01") ;
			var overAnaquel_clearblue_02 = document.getElementById("overAnaquel_clearblue_02") ;
			var overAnaquel_clearblue_03 = document.getElementById("overAnaquel_clearblue_03") ;
			
			overAnaquel_clearblue_01.style.opacity = '0' ;
			overAnaquel_clearblue_02.style.opacity = '0' ;
			overAnaquel_clearblue_03.style.opacity = '0' ;
			
			TweenMax.staggerFromTo ([merchandising_counter_clearblue_back , merch_btn_01 , merch_btn_02 , merch_btn_03] , 1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
			
			/////////////////////////////////Exit animation
			function exit_merchandising_counter_counter_clearblue_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var merchandising_counter_clearblue_back = document.getElementById("merchandising_counter_clearblue_back") ;
				
				var overAnaquel_clearblue_01 = document.getElementById("overAnaquel_clearblue_01") ;
				var overAnaquel_clearblue_02 = document.getElementById("overAnaquel_clearblue_02") ;
				var overAnaquel_clearblue_03 = document.getElementById("overAnaquel_clearblue_03") ;

				TweenMax.to ([overAnaquel_clearblue_01 , overAnaquel_clearblue_02 , overAnaquel_clearblue_03] , .25 , {css:{opacity:"0"}}) ;

				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([merchandising_counter_clearblue_back , merch_btn_01 , merch_btn_02 , merch_btn_03] , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
			
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
			
			/////////////////////////////////Show Fundamental
			function showFundamental()
			{
				var overAnaquel_clearblue_01 = document.getElementById("overAnaquel_clearblue_01") ;
				var overAnaquel_clearblue_02 = document.getElementById("overAnaquel_clearblue_02") ;
				var overAnaquel_clearblue_03 = document.getElementById("overAnaquel_clearblue_03") ;
				
				TweenMax.to ([overAnaquel_clearblue_01 , overAnaquel_clearblue_02 , overAnaquel_clearblue_03] , .25 , {css:{opacity:"0"}}) ;
				
				switch(calledImage)
				{
					case 1:
						TweenMax.fromTo (overAnaquel_clearblue_01 , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:.5}) ;
						
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_Fundamentales_counter_portafolioClearblue_mx.mp3' ;
	
			if (( auFlagLoc % 2 ) != 0)
			{
				auLocucion.play() ;
			}	
					
					break ;
					
					case 2:
						TweenMax.fromTo (overAnaquel_clearblue_02 , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:.5}) 
						
						
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_Fundamentales_counter_localizacionClearblue_mx.mp3' ;
	
			if (( auFlagLoc % 2 ) != 0)
			{
				auLocucion.play() ;
			}
								
					break ;
					
					case 3:
						TweenMax.fromTo (overAnaquel_clearblue_03 , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:.5}) 
						
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_Fundamentales_counter_bloqueClearblue_mx.mp3' ;
	
			if (( auFlagLoc % 2 ) != 0)
			{
				auLocucion.play() ;
			}
						
					break ;
				}
			}
			
			
			
			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_merchandising_counter_counter_clearblue_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_merchandising_counter_counter_clearblue_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_merchandising_counter_counter_clearblue_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_merchandising_counter_counter_clearblue_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_merchandising_counter_counter_clearblue_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_merchandising_counter_counter_clearblue_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_merchandising_counter_counter_clearblue_mex() ;
			});
			
			
			
			/////////////////////////////////Buttons
				//01
			$('#merch_btn_01').click(function() {
				calledImage = 1 ;
				showFundamental() ;
			});
			
				//02
			$('#merch_btn_02').click(function() {
				calledImage = 2 ;
				showFundamental() ;
			});
			
				//03
			$('#merch_btn_03').click(function() {
				calledImage = 3 ;
				showFundamental() ;
			});
			
			
			
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_merchandising_counter_counter_clearblue_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_merchandising_counter_counter_clearblue_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_merchandising_counter_counter_clearblue_mex_01.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + merchandising_counter_counter_clearblue_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var noDisponible = document.getElementById("noDisponible") ;
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
				
			/////////////////////////////////Exit animation
			function exit_merchandising_counter_counter_clearblue()
			{
				var noDisponible = document.getElementById("noDisponible") ;
				
				TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
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
							merchandising_counter_counter_clearblue_menu() ;
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
				exit_merchandising_counter_counter_clearblue() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_merchandising_counter_counter_clearblue() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_merchandising_counter_counter_clearblue() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_merchandising_counter_counter_clearblue() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_merchandising_counter_counter_clearblue() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_merchandising_counter_counter_clearblue() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_merchandising_counter_counter_clearblue() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_merchandising_counter_counter_clearblue() ;
			});

			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_merchandising_counter_counter_clearblue_bra_01.mp3' ;
	
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
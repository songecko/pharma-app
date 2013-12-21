<!--Merchandising 01-->
function merchandising_01()
{
	CleanScreen() ;
	
	gotoSlide = 'merchandising_01' ;
	
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
		"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+

	"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////México
	var merchandising_01_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'><b>Mercadeo</b></div>"+

		//Images
			//01
		"<div class='materialVisibilidad_img' id='merchandising_01_back'><img src='img/Fundamentales/Merchandising/img_backMerchandising.png'/></div>"+
		
			//02
		"<div class='merchandisingImage' id='merchandisingImage_s1_02'><img src='img/Fundamentales/Merchandising/img_publicidad_01.png'/></div>"+
			//03
		"<div class='merchandisingImage' id='merchandisingImage_s1_03'><img src='img/Fundamentales/Merchandising/img_publicidad_02.png'/></div>"+
			//04
		"<div class='merchandisingImage' id='merchandisingImage_s1_04'><img src='img/Fundamentales/Merchandising/img_publicidad_03.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>179</div>"+
				
	"" ;
	
	/////////////////////////////////Brasil
	var merchandising_01_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'><b>Merchandising</b></div>"+

		//Images
			//01
		"<div class='materialVisibilidad_img' id='merchandising_01_back'><img src='img/Fundamentales/Merchandising/img_backMerchandising.png'/></div>"+
		
			//02
		"<div class='merchandisingImage' id='merchandisingImage_s1_02'><img src='img/Fundamentales/Merchandising/img_publicidad_01.png'/></div>"+
			//03
		"<div class='merchandisingImage' id='merchandisingImage_s1_03'><img src='img/Fundamentales/Merchandising/img_publicidad_02.png'/></div>"+
			//04
		"<div class='merchandisingImage' id='merchandisingImage_s1_04'><img src='img/Fundamentales/Merchandising/img_publicidad_03.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>132</div>"+
		
				
	"" ;
		
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;

	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + merchandising_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var merchandising_01_back = document.getElementById("merchandising_01_back") ;
			
			var merchandisingImage_s1_02 = document.getElementById("merchandisingImage_s1_02") ;
			var merchandisingImage_s1_03 = document.getElementById("merchandisingImage_s1_03") ;
			var merchandisingImage_s1_04 = document.getElementById("merchandisingImage_s1_04") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			TweenMax.fromTo (merchandising_01_back , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			
			
			/*TimeLine*/
			var shakingProducts = new TimelineMax ( {repeat:-1 , repeatDelay:3 , yoyo:false } );  
			  
			shakingProducts.staggerFromTo([merchandisingImage_s1_02 , merchandisingImage_s1_03 , merchandisingImage_s1_04] , 1 , {css:{opacity:"0" , transform:"scale(.85,.85)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:1} , 1) ;

			/////////////////////////////////Exit animation
			function exit_merchandising_01_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				
				var merchandising_01_back = document.getElementById("merchandising_01_back") ;
				
				TweenMax.killTweensOf([txt_Title_bullets , merchandising_01_back]) ;
				shakingProducts.seek(0) ;
				shakingProducts.kill() ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (merchandising_01_back , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				
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
							menu_fundamentalesVenta() ;
						break;
						
						case 1:
							merchandising_resumen() ;
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
				exit_merchandising_01_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_merchandising_01_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_merchandising_01_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_merchandising_01_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_merchandising_01_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_merchandising_01_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_merchandising_01_mex() ;
			});
	
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_merchandising_01_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_merchandising_01_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_merchandising_01_mex.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + merchandising_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var merchandising_01_back = document.getElementById("merchandising_01_back") ;
			
			var merchandisingImage_s1_02 = document.getElementById("merchandisingImage_s1_02") ;
			var merchandisingImage_s1_03 = document.getElementById("merchandisingImage_s1_03") ;
			var merchandisingImage_s1_04 = document.getElementById("merchandisingImage_s1_04") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			TweenMax.fromTo (merchandising_01_back , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			
			
			/*TimeLine*/
			var shakingProducts = new TimelineMax ( {repeat:-1 , repeatDelay:3 , yoyo:false } );  
			  
			shakingProducts.staggerFromTo([merchandisingImage_s1_02 , merchandisingImage_s1_03 , merchandisingImage_s1_04] , 1 , {css:{opacity:"0" , transform:"scale(.85,.85)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:1} , 1) ;

			/////////////////////////////////Exit animation
			function exit_merchandising_01()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				
				var merchandising_01_back = document.getElementById("merchandising_01_back") ;
				
				TweenMax.killTweensOf([txt_Title_bullets , merchandising_01_back]) ;
				shakingProducts.seek(0) ;
				shakingProducts.kill() ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (merchandising_01_back , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				
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
							menu_fundamentalesVenta() ;
						break;
						
						case 1:
							merchandising_resumen() ;
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
				exit_merchandising_01() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_merchandising_01() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_merchandising_01() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_merchandising_01() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_merchandising_01() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_merchandising_01() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_merchandising_01() ;
			});
	
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_merchandising_01() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_merchandising_01() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_merchandising_01_bra.mp3' ;
	
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
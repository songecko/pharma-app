<!--Planilla de Objetivos-->
function precio_02()
{
	CleanScreen() ;
	
	gotoSlide = 'precio_02' ;
	
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_fundamentalesVentas_precio.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
	var precio_02_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'><b>Precio</b></div>"+

		//Central Image
		"<div class='precioEstrategia' id='precioEstrategia_01'><img src='img/Fundamentales/Precio/img_estrategiasPrecios.png'/></div>"+
		
		//Extra Images
			//01
		"<div class='precioEstrategia' id='precioEstrategia_02'><img src='img/Fundamentales/Precio/img_estrategiasPrecio_01.png'/></div>"+
			//02
		"<div class='precioEstrategia' id='precioEstrategia_03'><img src='img/Fundamentales/Precio/img_estrategiasPrecio_02.png'/></div>"+
			//03
		"<div class='precioEstrategia' id='precioEstrategia_04'><img src='img/Fundamentales/Precio/img_estrategiasPrecio_03.png'/></div>"+
			//04
		"<div class='precioEstrategia' id='precioEstrategia_05'><img src='img/Fundamentales/Precio/img_estrategiasPrecio_04.png'/></div>"+
			//05
		"<div class='precioEstrategia' id='precioEstrategia_06'><img src='img/Fundamentales/Precio/img_estrategiasPrecio_05_mex.png'/></div>"+
			//06
		"<div class='precioEstrategia' id='precioEstrategia_07'><img src='img/Fundamentales/Precio/img_estrategiasPrecio_06_mex.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>201</div>"+
				
	"" ;
	
	/////////////////////////////////Brasil
	var precio_02_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'><b>Preço</b></div>"+

		//Central Image
		"<div class='precioEstrategia' id='precioEstrategia_01'><img src='img/Fundamentales/Precio/img_estrategiasPrecos.png'/></div>"+
		
		//Extra Images
			//01
		"<div class='precioEstrategia' id='precioEstrategia_02'><img src='img/Fundamentales/Precio/img_estrategiasPrecio_01.png'/></div>"+
			//02
		"<div class='precioEstrategia' id='precioEstrategia_03'><img src='img/Fundamentales/Precio/img_estrategiasPrecio_02.png'/></div>"+
			//03
		"<div class='precioEstrategia' id='precioEstrategia_04'><img src='img/Fundamentales/Precio/img_estrategiasPrecio_03.png'/></div>"+
			//04
		"<div class='precioEstrategia' id='precioEstrategia_05'><img src='img/Fundamentales/Precio/img_estrategiasPrecio_04.png'/></div>"+
			//05
		"<div class='precioEstrategia' id='precioEstrategia_06'><img src='img/Fundamentales/Precio/img_estrategiasPrecio_05_bra.png'/></div>"+
			//06
		"<div class='precioEstrategia' id='precioEstrategia_07'><img src='img/Fundamentales/Precio/img_estrategiasPrecio_06_bra.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>149</div>"+
				
	"" ;
		
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + precio_02_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var precioEstrategia_01 = document.getElementById("precioEstrategia_01") ;
			var precioEstrategia_02 = document.getElementById("precioEstrategia_02") ;
			var precioEstrategia_03 = document.getElementById("precioEstrategia_03") ;
			var precioEstrategia_04 = document.getElementById("precioEstrategia_04") ;
			var precioEstrategia_05 = document.getElementById("precioEstrategia_05") ;
			var precioEstrategia_06 = document.getElementById("precioEstrategia_06") ;
			var precioEstrategia_07 = document.getElementById("precioEstrategia_07") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			
			/*TimeLine*/
			var shakingProducts = new TimelineMax ( {repeat:-1 , repeatDelay:2 , yoyo:true } );  
			  
			shakingProducts.staggerFromTo([precioEstrategia_01 , precioEstrategia_02 , precioEstrategia_03 , precioEstrategia_04 , precioEstrategia_05 , precioEstrategia_06 , precioEstrategia_07] , 1 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.5} , .25) ;
				
			/////////////////////////////////Exit animation
			function exit_precio_02_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				
				TweenMax.killTweensOf([txt_Title_bullets]) ;
				shakingProducts.seek(0) ;
				shakingProducts.kill() ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
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
							precio_01() ;
						break;
						
						case 1:
							precio_resumen() ;
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
				exit_precio_02_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_precio_02_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_precio_02_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_precio_02_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_precio_02_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_precio_02_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_precio_02_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_precio_02_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_precio_02_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + precio_02_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var precioEstrategia_01 = document.getElementById("precioEstrategia_01") ;
			var precioEstrategia_02 = document.getElementById("precioEstrategia_02") ;
			var precioEstrategia_03 = document.getElementById("precioEstrategia_03") ;
			var precioEstrategia_04 = document.getElementById("precioEstrategia_04") ;
			var precioEstrategia_05 = document.getElementById("precioEstrategia_05") ;
			var precioEstrategia_06 = document.getElementById("precioEstrategia_06") ;
			var precioEstrategia_07 = document.getElementById("precioEstrategia_07") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/*TimeLine*/
			var shakingProducts = new TimelineMax ( {repeat:-1 , repeatDelay:2 , yoyo:true } );  
			  
			shakingProducts.staggerFromTo([precioEstrategia_01 , precioEstrategia_02 , precioEstrategia_03 , precioEstrategia_04 , precioEstrategia_05 , precioEstrategia_06 , precioEstrategia_07] , 1 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.1} , .5) ;
				
			/////////////////////////////////Exit animation
			function exit_precio_02()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				
				TweenMax.killTweensOf([txt_Title_bullets]) ;
				shakingProducts.seek(0) ;
				shakingProducts.kill() ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
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
							precio_01() ;
						break;
						
						case 1:
							precio_resumen() ;
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
				exit_precio_02() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_precio_02() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_precio_02() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_precio_02() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_precio_02() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_precio_02() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_precio_02() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_precio_02() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_precio_02() ;
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
}
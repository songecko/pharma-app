<!--Anaquel Menu-->
function anaquel_menu()
{
	CleanScreen() ;
	
	gotoSlide = 'anaquel_menu' ;
	
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
		"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+

	"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////México
	var anaquel_menu_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Seleccione la farmacia  que <b>desee consultar</b></div>"+

		//Menu buttons
			//01
		"<div class='menuElement' id='btn_02_01' onmouseover='rollOver_btn_02_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_fundamentosVentas_anaquel.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_02_02' onmouseover='rollOver_btn_02_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_fundamentosVendas_counter.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>175</div>"+
				
	"" ;
	
	
	/////////////////////////////////Brasil
	var anaquel_menu_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Selecione a Farmácia  que <b>deseja consultar</b></div>"+

		//Menu buttons
			//01
		"<div class='menuElement' id='btn_02_01' onmouseover='rollOver_btn_02_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_fundamentosVendas_gondola.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_02_02' onmouseover='rollOver_btn_02_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_fundamentosVendas_balcao.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>129</div>"+
		
				
	"" ;
		
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + anaquel_menu_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;

			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var btn_02_01 = document.getElementById("btn_02_01") ;
			var btn_02_02 = document.getElementById("btn_02_02") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			TweenMax.staggerFromTo ([btn_02_01 , btn_02_02] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
				
			/////////////////////////////////Exit animation
			function exit_anaquel_menu_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				
				var btn_02_01 = document.getElementById("btn_02_01") ;
				var btn_02_02 = document.getElementById("btn_02_02") ;
				
				TweenMax.killTweensOf([txt_Title_bullets , btn_02_01 , btn_02_02]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_02_01 , btn_02_02] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
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
							anaquel() ;
						break;
						
						case 2:
							counter() ;
						break;
						
						case 3:
							anaquel_resumen() ;
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
				exit_anaquel_menu_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_anaquel_menu_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_anaquel_menu_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_anaquel_menu_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_anaquel_menu_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_anaquel_menu_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_anaquel_menu_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_anaquel_menu_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 3 ;
				exit_anaquel_menu_mex() ;
			});
			
			/////////////////////////////////Button 01
			$('#btn_02_01').click(function() {
				pagChange = 1 ;
				exit_anaquel_menu_mex() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_02_02').click(function() {
				pagChange = 2 ;
				exit_anaquel_menu_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_anquelMenu_mex.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + anaquel_menu_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;

			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var btn_02_01 = document.getElementById("btn_02_01") ;
			var btn_02_02 = document.getElementById("btn_02_02") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			TweenMax.staggerFromTo ([btn_02_01 , btn_02_02] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
				
			/////////////////////////////////Exit animation
			function exit_anaquel_menu()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				
				var btn_02_01 = document.getElementById("btn_02_01") ;
				var btn_02_02 = document.getElementById("btn_02_02") ;
				
				TweenMax.killTweensOf([txt_Title_bullets , btn_02_01 , btn_02_02]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_02_01 , btn_02_02] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
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
							anaquel() ;
						break;
						
						case 2:
							counter() ;
						break;
						
						case 3:
							anaquel_resumen() ;
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
				exit_anaquel_menu() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_anaquel_menu() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_anaquel_menu() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_anaquel_menu() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_anaquel_menu() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_anaquel_menu() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_anaquel_menu() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_anaquel_menu() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 3 ;
				exit_anaquel_menu() ;
			});
			
			/////////////////////////////////Button 01
			$('#btn_02_01').click(function() {
				pagChange = 1 ;
				exit_anaquel_menu() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_02_02').click(function() {
				pagChange = 2 ;
				exit_anaquel_menu() ;
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
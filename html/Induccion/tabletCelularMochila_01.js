<!--Tablet, celular y mochila 01-->
function tabletCelularMochila_01()
{
	CleanScreen() ;
	
	gotoSlide = 'tabletCelularMochila_01' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_Induccion.png' onmouseover='rollOver_ico_04()' /></div>"+
		
		//Menu Herramientas
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_induccion_herramientas.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		//Tablet, celular y mochila
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_Induccion_herramientas_01.png' onmouseover='rollOver_ico_06()' /></div>"+

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
	var tabletCelularMochila_01_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'><li>Tablet y celular</div>"+
		
		//Imagen
		"<div class='imgHerramientas' id='imgHerramientas'><img src='img/Induccion/Herramientas/tabletCelularMochila_mex.png'></div>"+
		
		//Textos
		"<div class='txtHerramientas' id='txtHerramientas'>Son herramientas Utiles<br/><br/>Para hacer llamadas<br/><br/>Acceso a reportes, sistema de pedidos, rutas de tiendas.</div>"+
		
		//Botón descarga
		"<div class='rectangle_01' id='btn_Download' onmouseover='rollOver_Download()'>SmartPad</div>"+
		
		//Slide Number
		"<div class='slideNumber'>016</div>"+
	
	"" ;
	
	
	/////////////////////////////////Brasil
	var tabletCelularMochila_01_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'><li>Tablet, celular e mochila</div>"+
		
		//Imagen
		"<div class='imgHerramientas' id='imgHerramientas'><img src='img/Induccion/Herramientas/tabletCelularMochila.png'></div>"+
		
		//Textos
		"<div class='txtHerramientas' id='txtHerramientas'>Ligações;<br/><br/>Acesso a relatórios;<br/><br/>Simulação e Input de pedidos;<br/><br/>Lançamento de Visitas e Pesquisas.</div>"+
		
		//Botón descarga
		"<div class='rectangle_01' id='btn_Download' onmouseover='rollOver_Download()'>SmartPad</div>"+
		
		//Slide Number
		"<div class='slideNumber'>016</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + tabletCelularMochila_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var imgHerramientas = document.getElementById("imgHerramientas") ;
			var txtHerramientas = document.getElementById("txtHerramientas") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (imgHerramientas , 1 , {css:{opacity:"0" , top:"300px"}} , {css:{opacity:"1" , top:"250px"}}) ;
			TweenMax.fromTo (txtHerramientas , 1 , {css:{opacity:"0" , left:"650px"}} , {css:{opacity:"1" , left:"700px"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_tabletCelularMochila_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var imgHerramientas = document.getElementById("imgHerramientas") ;
				var txtHerramientas = document.getElementById("txtHerramientas") ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (imgHerramientas , .5 , {css:{opacity:"1" , top:"250px"}} , {css:{opacity:"0" , top:"300px"}}) ;
				TweenMax.fromTo (txtHerramientas , .5 , {css:{opacity:"1" , left:"700px"}} , {css:{opacity:"0" , left:"650px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_Herramientas() ;
						break;
						
						case -6:
							menu_Induccion() ;
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
							menu_Herramientas() ;
						break;
						
						case 1:
							tablaPedidos() ;
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
				exit_tabletCelularMochila_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_tabletCelularMochila_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_tabletCelularMochila_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_tabletCelularMochila_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_tabletCelularMochila_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_tabletCelularMochila_mex() ;
			});
		
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_tabletCelularMochila_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_tabletCelularMochila_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_tabletCelularMochila_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_tabletCelularMochila_mex_01.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + tabletCelularMochila_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var imgHerramientas = document.getElementById("imgHerramientas") ;
			var txtHerramientas = document.getElementById("txtHerramientas") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (imgHerramientas , 1 , {css:{opacity:"0" , top:"300px"}} , {css:{opacity:"1" , top:"250px"}}) ;
			TweenMax.fromTo (txtHerramientas , 1 , {css:{opacity:"0" , left:"650px"}} , {css:{opacity:"1" , left:"700px"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_tabletCelularMochila()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var imgHerramientas = document.getElementById("imgHerramientas") ;
				var txtHerramientas = document.getElementById("txtHerramientas") ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (imgHerramientas , .5 , {css:{opacity:"1" , top:"250px"}} , {css:{opacity:"0" , top:"300px"}}) ;
				TweenMax.fromTo (txtHerramientas , .5 , {css:{opacity:"1" , left:"700px"}} , {css:{opacity:"0" , left:"650px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_Herramientas() ;
						break;
						
						case -6:
							menu_Induccion() ;
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
							menu_Herramientas() ;
						break;
						
						case 1:
							planillaObjetivos() ;
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
				exit_tabletCelularMochila() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_tabletCelularMochila() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_tabletCelularMochila() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_tabletCelularMochila() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_tabletCelularMochila() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_tabletCelularMochila() ;
			});
		
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_tabletCelularMochila() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_tabletCelularMochila() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_tabletCelularMochila() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_tabletCelularMochila_bra_01.mp3' ;
	
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
<!--Menu rol-->
function menu_Herramientas()
{
	CleanScreen() ;
	
	gotoSlide = 'menu_Herramientas' ;
	
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
	var menu_Herramientas_mexico =
		//Selecciona la información que deseas consultar
		"<div class='txt_Title' id='txt_Title'>Selecciona la información que <b>deseas consultar</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_08_01' onmouseover='rollOver_btn_08_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_tabletCelularPortafolio.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_08_02' onmouseover='rollOver_btn_08_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_callBook.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_08_03' onmouseover='rollOver_btn_08_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_blockFaltantes.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//04
		"<div class='menuElement' id='btn_08_04' onmouseover='rollOver_btn_08_04()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_catalogos.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//05
		"<div class='menuElement' id='btn_08_05'>"+
			//Image
			"<div class='me_Image' >"+
				"<img src='img/img_imageRol_001.png' id='roll_01'/>"+
			"</div>"+
			//Shadow
			//"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//06
		"<div class='menuElement' id='btn_08_06' onmouseover='rollOver_btn_08_06()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_visibilidad.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//07
		"<div class='menuElement' id='btn_08_07' onmouseover='rollOver_btn_08_07()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_educacionFarmaceutico_her.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//08
		"<div class='menuElement' id='btn_08_08' onmouseover='rollOver_btn_08_08()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_formularioVisita.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>014</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var menu_Herramientas_brasil =
		//Selecciona la información que deseas consultar
		"<div class='txt_Title' id='txt_Title'>Selecione a informação que <b>deseja consultar</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_08_01' onmouseover='rollOver_btn_08_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_tabletCelularMochila.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_08_02' onmouseover='rollOver_btn_08_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_planilhaObjetivos.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_08_03' onmouseover='rollOver_btn_08_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_talaoPedidos.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//04
		"<div class='menuElement' id='btn_08_04' onmouseover='rollOver_btn_08_04()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_onePage.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//05
		"<div class='menuElement' id='btn_08_05' onmouseover='rollOver_btn_08_05()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_kitApresentacao.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//06
		"<div class='menuElement' id='btn_08_06' onmouseover='rollOver_btn_08_06()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_guiaFarma.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//07
		"<div class='menuElement' id='btn_08_07' onmouseover='rollOver_btn_08_07()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_materialVisibilidade.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//08
		"<div class='menuElement' id='btn_08_08' onmouseover='rollOver_btn_08_08()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_padraoAvalacao.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>014</div>"+

	"" ;
	
	/*********************************************
	Rolling Image Function
	*********************************************/
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + menu_Herramientas_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Variable change
			**********************************************/
			matVisibilidadPosition = 1 ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title = document.getElementById("txt_Title") ;
			
			var btn_08_01 = document.getElementById("btn_08_01") ;
			var btn_08_02 = document.getElementById("btn_08_02") ;
			var btn_08_03 = document.getElementById("btn_08_03") ;
			var btn_08_04 = document.getElementById("btn_08_04") ;
			var btn_08_05 = document.getElementById("btn_08_05") ;
			var btn_08_06 = document.getElementById("btn_08_06") ;
			var btn_08_07 = document.getElementById("btn_08_07") ;
			var btn_08_08 = document.getElementById("btn_08_08") ;
				
			TweenMax.fromTo (txt_Title , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_08_01 , btn_08_02 , btn_08_03 , btn_08_04 , btn_08_05 , btn_08_06 , btn_08_07 , btn_08_08] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_menuHerramientas_mex()
			{
				var txt_Title = document.getElementById("txt_Title") ;
			
				var btn_08_01 = document.getElementById("btn_08_01") ;
				var btn_08_02 = document.getElementById("btn_08_02") ;
				var btn_08_03 = document.getElementById("btn_08_03") ;
				var btn_08_04 = document.getElementById("btn_08_04") ;
				var btn_08_05 = document.getElementById("btn_08_05") ;
				var btn_08_06 = document.getElementById("btn_08_06") ;
					
				TweenMax.fromTo (txt_Title , 1.5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_08_01 , btn_08_02 , btn_08_03 , btn_08_04 , btn_08_05 , btn_08_06 , btn_08_07 , btn_08_08], .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .15 ) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							menu_Induccion() ;
						break;
						
						case 1:
							tabletCelularMochila_01() ;
						break ;
						
						case 2:
							tablaPedidos() ;
						break ;
						
						case 3:
							planillaObjetivos() ;
						break ;
						
						case 4:
							guiaFarma () ;
						break ;
						
						case 5:
							materialVisibilidadPosition = 1 ;
							materialVisibilidad () ;
						break ;
						
						case 6:
							kitPresentacion () ;
						break ;
						
						case 7:
							normaEvaluacion() ;
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
				exit_menuHerramientas_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_menuHerramientas_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_menuHerramientas_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_menuHerramientas_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_menuHerramientas_mex() ;
			});
		
			
			//Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				//tiposTiendas_directas.src = '' ;
				exit_menuHerramientas_mex() ;
			}) ;
			
			/////////////////////////////////Button 01
			$('#btn_08_01').click(function() {
				pagChange = 1 ;
				exit_menuHerramientas_mex() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_08_02').click(function() {
				pagChange = 2 ;
				exit_menuHerramientas_mex() ;
			});
			
			/////////////////////////////////Button 03
			$('#btn_08_03').click(function() {
				pagChange = 3 ;
				exit_menuHerramientas_mex() ;
			});
			
			/////////////////////////////////Button 04
			$('#btn_08_04').click(function() {
				pagChange = 4 ;
				exit_menuHerramientas_mex() ;
			});
			
			/////////////////////////////////Button 06
			$('#btn_08_06').click(function() {
				pagChange = 5 ;
				exit_menuHerramientas_mex() ;
			});
			
			/////////////////////////////////Button 07
			$('#btn_08_07').click(function() {
				pagChange = 6 ;
				exit_menuHerramientas_mex() ;
			});
			
			/////////////////////////////////Button 08
			$('#btn_08_08').click(function() {
				pagChange = 7 ;
				exit_menuHerramientas_mex() ;
			});
			
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_menuHerramientas_mex() ;
			});
			
			//Additional Animations
			RollingImage_01() ;
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_menuHerramientas_mex.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + menu_Herramientas_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Variable change
			**********************************************/
			matVisibilidadPosition = 1 ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title = document.getElementById("txt_Title") ;
			
			var btn_08_01 = document.getElementById("btn_08_01") ;
			var btn_08_02 = document.getElementById("btn_08_02") ;
			var btn_08_03 = document.getElementById("btn_08_03") ;
			var btn_08_04 = document.getElementById("btn_08_04") ;
			var btn_08_05 = document.getElementById("btn_08_05") ;
			var btn_08_06 = document.getElementById("btn_08_06") ;
			var btn_08_07 = document.getElementById("btn_08_07") ;
			var btn_08_08 = document.getElementById("btn_08_08") ;
				
			TweenMax.fromTo (txt_Title , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_08_01 , btn_08_02 , btn_08_03 , btn_08_04 , btn_08_05 , btn_08_06 , btn_08_07 , btn_08_08] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_menuHerramientas()
			{
				var txt_Title = document.getElementById("txt_Title") ;
			
				var btn_08_01 = document.getElementById("btn_08_01") ;
				var btn_08_02 = document.getElementById("btn_08_02") ;
				var btn_08_03 = document.getElementById("btn_08_03") ;
				var btn_08_04 = document.getElementById("btn_08_04") ;
				var btn_08_05 = document.getElementById("btn_08_05") ;
				var btn_08_06 = document.getElementById("btn_08_06") ;
					
				TweenMax.fromTo (txt_Title , 1.5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_08_01 , btn_08_02 , btn_08_03 , btn_08_04 , btn_08_05 , btn_08_06 , btn_08_07 , btn_08_08], .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .15 ) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							menu_Induccion() ;
						break;
						
						case 1:
							tabletCelularMochila_01() ;
						break ;
						
						case 2:
							planillaObjetivos() ;
						break ;
						
						case 3:
							tablaPedidos() ;
						break ;
						
						case 4:
							onePage () ;
						break ;
						
						case 5:
							kitPresentacion () ;
						break ;
						
						case 6:
							guiaFarma () ;
						break ;
						
						case 7:
							materialVisibilidad () ;
						break ;
						
						case 8:
							normaEvaluacion () ;
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
				exit_menuHerramientas() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_menuHerramientas() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_menuHerramientas() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_menuHerramientas() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_menuHerramientas() ;
			});
		
			
			//Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				//tiposTiendas_directas.src = '' ;
				exit_menuHerramientas() ;
			}) ;
			
			/////////////////////////////////Button 01
			$('#btn_08_01').click(function() {
				pagChange = 1 ;
				exit_menuHerramientas() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_08_02').click(function() {
				pagChange = 2 ;
				exit_menuHerramientas() ;
			});
			
			/////////////////////////////////Button 03
			$('#btn_08_03').click(function() {
				pagChange = 3 ;
				exit_menuHerramientas() ;
			});
			
			/////////////////////////////////Button 04
			$('#btn_08_04').click(function() {
				pagChange = 4 ;
				exit_menuHerramientas() ;
			});
			
			/////////////////////////////////Button 05
			$('#btn_08_05').click(function() {
				pagChange = 5 ;
				exit_menuHerramientas() ;
			});
			
			/////////////////////////////////Button 06
			$('#btn_08_06').click(function() {
				pagChange = 6 ;
				exit_menuHerramientas() ;
			});
			
			/////////////////////////////////Button 07
			$('#btn_08_07').click(function() {
				pagChange = 7 ;
				exit_menuHerramientas() ;
			});
			
			/////////////////////////////////Button 08
			$('#btn_08_08').click(function() {
				pagChange = 8 ;
				exit_menuHerramientas() ;
			});
			
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_menuHerramientas() ;
			});

			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_menuHerramientas_bra.mp3' ;
	
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
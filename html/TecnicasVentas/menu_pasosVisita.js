<!--Menu rol-->
function menu_pasosVisita()
{
	CleanScreen() ;
	
	gotoSlide = 'menu_pasosVisita' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_tecnicaVentas.png' onmouseover='rollOver_ico_04()' /></div>"+
		
		//Menu Herramientas
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_pasosVisita.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
	var menu_pasosVisita_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Los 8 pasos <b>de la Visita</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_08_01' onmouseover='rollOver_btn_08_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_planeacion.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_08_02' onmouseover='rollOver_btn_08_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_acercamiento.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_08_03' onmouseover='rollOver_btn_08_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_verificacionInventarios.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//04
		"<div class='menuElement' id='btn_08_04' onmouseover='rollOver_btn_08_04()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_educacionDroguista.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//05
		"<div class='menuElement' id='btn_08_05' onmouseover='rollOver_btn_08_05()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_sugeridoVentas.png' /></div>"+
			
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//06
		"<div class='menuElement' id='btn_08_06' onmouseover='rollOver_btn_08_06()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_cierreVentas.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//07
		"<div class='menuElement' id='btn_08_07' onmouseover='rollOver_btn_08_07()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_visibilidad.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//08
		"<div class='menuElement' id='btn_08_08' onmouseover='rollOver_btn_08_08()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_analisisVisita.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>204</div>"+

	"" ;
	
	
	/////////////////////////////////Brasil
	var menu_pasosVisita_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Os 7 Passos <b>da Visita</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_08_01' onmouseover='rollOver_btn_08_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_planejamento.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_08_02' onmouseover='rollOver_btn_08_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_apresantacaoPessoal.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_08_03' onmouseover='rollOver_btn_08_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_verificacionLoja.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//04
		"<div class='menuElement' id='btn_08_04' onmouseover='rollOver_btn_08_04()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_apresentacaoTecnica.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//05
		"<div class='menuElement' id='btn_08_05'>"+
			//Image
			"<div class='me_Image'>"+
				"<img src='img/img_imageRol_001.png' id='roll_01'/>"+
			"</div>"+
			
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//06
		"<div class='menuElement' id='btn_08_06' onmouseover='rollOver_btn_08_06()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_pedido.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//07
		"<div class='menuElement' id='btn_08_07' onmouseover='rollOver_btn_08_07()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_merchandisingVisibilidade.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//08
		"<div class='menuElement' id='btn_08_08' onmouseover='rollOver_btn_08_08()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_passosDaVisita_anotacoesPesquisa.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>151</div>"+

	"" ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + menu_pasosVisita_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var btn_08_01 = document.getElementById("btn_08_01") ;
			var btn_08_02 = document.getElementById("btn_08_02") ;
			var btn_08_03 = document.getElementById("btn_08_03") ;
			var btn_08_04 = document.getElementById("btn_08_04") ;
			var btn_08_05 = document.getElementById("btn_08_05") ;
			var btn_08_06 = document.getElementById("btn_08_06") ;
			var btn_08_07 = document.getElementById("btn_08_07") ;
			var btn_08_08 = document.getElementById("btn_08_08") ;
				
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_08_01 , btn_08_02 , btn_08_03 , btn_08_04 , btn_08_05 , btn_08_06 , btn_08_07 , btn_08_08] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;

			/////////////////////////////////Exit animation
			function exit_menuPasosVisita_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var btn_08_01 = document.getElementById("btn_08_01") ;
				var btn_08_02 = document.getElementById("btn_08_02") ;
				var btn_08_03 = document.getElementById("btn_08_03") ;
				var btn_08_04 = document.getElementById("btn_08_04") ;
				var btn_08_05 = document.getElementById("btn_08_05") ;
				var btn_08_06 = document.getElementById("btn_08_06") ;
					
				TweenMax.fromTo (txt_Title_bullets , 1.5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_08_01 , btn_08_02 , btn_08_03 , btn_08_04 , btn_08_05 , btn_08_06 , btn_08_07 , btn_08_08], .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .15 ) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -6:
							menu_tecnicaVentas() ;
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
							menu_tecnicaVentas() ;
						break;
						
						case 1:
							pasosVisita_planeamiento() ;
						break ;
						
						case 2:
							pasosVisita_presentacionPersonal() ;
						break ;
						
						case 3:
							pasosVisita_hojaVerificacion() ;
						break ;
						
						case 4:
							pasosVisita_presentacionTecnica() ;
						break ;
						
						case 5:
							pasosVisita_sugeridoVentas() ;
						break ;
						
						case 6:
							pasosVisita_pedido() ;
						break ;
						
						case 7:
							pasosVisita_merchandisingVisibilidad() ;
						break ;
						
						case 8:
							pasosVisita_notasInvestigacion() ;
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
				exit_menuPasosVisita_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_menuPasosVisita_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_menuPasosVisita_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_menuPasosVisita_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_menuPasosVisita_mex() ;
			});
			
			//Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				//tiposTiendas_directas.src = '' ;
				exit_menuPasosVisita_mex() ;
			}) ;
			
			/////////////////////////////////Button 01
			$('#btn_08_01').click(function() {
				pagChange = 1 ;
				exit_menuPasosVisita_mex() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_08_02').click(function() {
				pagChange = 2 ;
				exit_menuPasosVisita_mex() ;
			});
			
			/////////////////////////////////Button 03
			$('#btn_08_03').click(function() {
				pagChange = 3 ;
				exit_menuPasosVisita_mex() ;
			});
			
			/////////////////////////////////Button 04
			$('#btn_08_04').click(function() {
				pagChange = 4 ;
				exit_menuPasosVisita_mex() ;
			});
			
			/////////////////////////////////Button 05
			$('#btn_08_05').click(function() {
				pagChange = 5 ;
				exit_menuPasosVisita_mex() ;
			});
			
			/////////////////////////////////Button 06
			$('#btn_08_06').click(function() {
				pagChange = 6 ;
				exit_menuPasosVisita_mex() ;
			});
			
			/////////////////////////////////Button 07
			$('#btn_08_07').click(function() {
				pagChange = 7 ;
				exit_menuPasosVisita_mex() ;
			});
			
			/////////////////////////////////Button 08
			$('#btn_08_08').click(function() {
				pagChange = 8 ;
				exit_menuPasosVisita_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_menuPasosVisita_mex() ;
			});

			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/TecnicaVentas/au_menuPasos_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + menu_pasosVisita_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			RollingImage_01() ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var btn_08_01 = document.getElementById("btn_08_01") ;
			var btn_08_02 = document.getElementById("btn_08_02") ;
			var btn_08_03 = document.getElementById("btn_08_03") ;
			var btn_08_04 = document.getElementById("btn_08_04") ;
			var btn_08_05 = document.getElementById("btn_08_05") ;
			var btn_08_06 = document.getElementById("btn_08_06") ;
			var btn_08_07 = document.getElementById("btn_08_07") ;
			var btn_08_08 = document.getElementById("btn_08_08") ;
				
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_08_01 , btn_08_02 , btn_08_03 , btn_08_04 , btn_08_05 , btn_08_06 , btn_08_07 , btn_08_08] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;

			/////////////////////////////////Exit animation
			function exit_menuPasosVisita()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var btn_08_01 = document.getElementById("btn_08_01") ;
				var btn_08_02 = document.getElementById("btn_08_02") ;
				var btn_08_03 = document.getElementById("btn_08_03") ;
				var btn_08_04 = document.getElementById("btn_08_04") ;
				var btn_08_05 = document.getElementById("btn_08_05") ;
				var btn_08_06 = document.getElementById("btn_08_06") ;
					
				TweenMax.fromTo (txt_Title_bullets , 1.5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_08_01 , btn_08_02 , btn_08_03 , btn_08_04 , btn_08_05 , btn_08_06 , btn_08_07 , btn_08_08], .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .15 ) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -6:
							menu_tecnicaVentas() ;
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
							menu_tecnicaVentas() ;
						break;
						
						case 1:
							pasosVisita_planeamiento() ;
						break ;
						
						case 2:
							pasosVisita_presentacionPersonal() ;
						break ;
						
						case 3:
							pasosVisita_hojaVerificacion() ;
						break ;
						
						case 4:
							pasosVisita_presentacionTecnica() ;
						break ;
						
						case 5:
							pasosVisita_pedido() ;
						break ;
						
						case 6:
							pasosVisita_merchandisingVisibilidad() ;
						break ;
						
						case 7:
							pasosVisita_notasInvestigacion() ;
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
				exit_menuPasosVisita() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_menuPasosVisita() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_menuPasosVisita() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_menuPasosVisita() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_menuPasosVisita() ;
			});
			
			//Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				//tiposTiendas_directas.src = '' ;
				exit_menuPasosVisita() ;
			}) ;
			
			/////////////////////////////////Button 01
			$('#btn_08_01').click(function() {
				pagChange = 1 ;
				exit_menuPasosVisita() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_08_02').click(function() {
				pagChange = 2 ;
				exit_menuPasosVisita() ;
			});
			
			/////////////////////////////////Button 03
			$('#btn_08_03').click(function() {
				pagChange = 3 ;
				exit_menuPasosVisita() ;
			});
			
			/////////////////////////////////Button 04
			$('#btn_08_04').click(function() {
				pagChange = 4 ;
				exit_menuPasosVisita() ;
			});
			
			/////////////////////////////////Button 06
			$('#btn_08_06').click(function() {
				pagChange = 5 ;
				exit_menuPasosVisita() ;
			});
			
			/////////////////////////////////Button 07
			$('#btn_08_07').click(function() {
				pagChange = 6 ;
				exit_menuPasosVisita() ;
			});
			
			/////////////////////////////////Button 08
			$('#btn_08_08').click(function() {
				pagChange = 7 ;
				exit_menuPasosVisita() ;
			});
			
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_menuPasosVisita() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/TecnicaVentas/au_menu_pasosVisita_bra.mp3' ;
			
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
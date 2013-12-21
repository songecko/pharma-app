<!--Menu rol-->
function menu_presentacionEficaz()
{
	CleanScreen() ;
	
	gotoSlide = 'menu_presentacionEficaz' ;
	
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
		
		//Menu Técnica de Ventas
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_presentacionEficaz.png' onmouseover='rollOver_ico_05()' /></div>"+	
		
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
	var presentacionEficaz_mexico =
		//Selecciona la información que deseas consultar
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Presentación <b>Eficaz</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_06_01' onmouseover='rollOver_btn_06_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_presentacionEficaz_determinarObjetivo.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_06_02' onmouseover='rollOver_btn_06_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_presentacionEficaz_analizarAudiencia.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_06_03' onmouseover='rollOver_btn_06_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_presentacionEficaz_recolectarInfo.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//04
		"<div class='menuElement' id='btn_06_04' onmouseover='rollOver_btn_06_04()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_presentacionEficaz_estructurarPresentacion.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//05
		"<div class='menuElement' id='btn_06_05' onmouseover='rollOver_btn_06_05()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_presentacionEficaz_desarrollarPresentacion.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//06
		"<div class='menuElement' id='btn_06_06' onmouseover='rollOver_btn_06_06()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_presentacionEficaz_practicar.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>235</div>"+
		

	"" ;
	
	
	/////////////////////////////////Brasil
	var presentacionEficaz_brasil =
		//Selecciona la información que deseas consultar
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Apresentação <b>Eficaz</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_06_01' onmouseover='rollOver_btn_06_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_presentacionEficaz_determinarDestino.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_06_02' onmouseover='rollOver_btn_06_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_presentacionEficaz_analisarPublico.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_06_03' onmouseover='rollOver_btn_06_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_presentacionEficaz_coletarInfo.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//04
		"<div class='menuElement' id='btn_06_04' onmouseover='rollOver_btn_06_04()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_presentacionEficaz_estruturaApresentacao.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//05
		"<div class='menuElement' id='btn_06_05' onmouseover='rollOver_btn_06_05()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_presentacionEficaz_desenvolvimentoApresentacao.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//06
		"<div class='menuElement' id='btn_06_06' onmouseover='rollOver_btn_06_06()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_presentacionEficaz_practica.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>181</div>"+

	"" ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + presentacionEficaz_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var btn_06_01 = document.getElementById("btn_06_01") ;
			var btn_06_02 = document.getElementById("btn_06_02") ;
			var btn_06_03 = document.getElementById("btn_06_03") ;
			var btn_06_04 = document.getElementById("btn_06_04") ;
			var btn_06_05 = document.getElementById("btn_06_05") ;
			var btn_06_06 = document.getElementById("btn_06_06") ;
				
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_06_01 , btn_06_02 , btn_06_03 , btn_06_04 , btn_06_05 , btn_06_06] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_menu_presentacionEficaz_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var btn_06_01 = document.getElementById("btn_06_01") ;
				var btn_06_02 = document.getElementById("btn_06_02") ;
				var btn_06_03 = document.getElementById("btn_06_03") ;
				var btn_06_04 = document.getElementById("btn_06_04") ;
				var btn_06_05 = document.getElementById("btn_06_05") ;
				var btn_06_06 = document.getElementById("btn_06_06") ;
					
				TweenMax.fromTo (txt_Title_bullets , 1.5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_06_01 , btn_06_02 , btn_06_03 , btn_06_04 , btn_06_05 , btn_06_06], .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .15 ) ;
				
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
							presentacionEficaz_determinarObjetivo() ;
						break ;
						
						case 2:
							presentacionEficaz_analizarPublico() ;
						break ;
						
						case 3:
							presentacionEficaz_colectarInfo() ;
						break ;
						
						case 4:
							presentacionEficaz_estructurarPresentacion() ;
						break ;
						
						case 5:
							presentacionEficaz_desarrollarPresentacion() ;
						break ;
						
						case 6:
							presentacionEficaz_practicar() ;
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
				exit_menu_presentacionEficaz_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_menu_presentacionEficaz_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_menu_presentacionEficaz_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_menu_presentacionEficaz_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_menu_presentacionEficaz_mex() ;
			});
					
			//Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				//tiposTiendas_directas.src = '' ;
				exit_menu_presentacionEficaz_mex() ;
			}) ;
			
			
			/////////////////////////////////Button 01
			$('#btn_06_01').click(function() {
				pagChange = 1 ;
				exit_menu_presentacionEficaz_mex() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_06_02').click(function() {
				pagChange = 2 ;
				exit_menu_presentacionEficaz_mex() ;
			});
			
			/////////////////////////////////Button 03
			$('#btn_06_03').click(function() {
				pagChange = 3 ;
				exit_menu_presentacionEficaz_mex() ;
			});
			
			/////////////////////////////////Button 04
			$('#btn_06_04').click(function() {
				pagChange = 4 ;
				exit_menu_presentacionEficaz_mex() ;
			});
						
			/////////////////////////////////Button 05
			$('#btn_06_05').click(function() {
				pagChange = 5 ;
				exit_menu_presentacionEficaz_mex() ;
			});
			
			/////////////////////////////////Button 06
			$('#btn_06_06').click(function() {
				pagChange = 6 ;
				exit_menu_presentacionEficaz_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_menu_presentacionEficaz_mex() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/TecnicaVentas/au_tecnicaVenta_presentacionEfectiva_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + presentacionEficaz_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var btn_06_01 = document.getElementById("btn_06_01") ;
			var btn_06_02 = document.getElementById("btn_06_02") ;
			var btn_06_03 = document.getElementById("btn_06_03") ;
			var btn_06_04 = document.getElementById("btn_06_04") ;
			var btn_06_05 = document.getElementById("btn_06_05") ;
			var btn_06_06 = document.getElementById("btn_06_06") ;
				
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_06_01 , btn_06_02 , btn_06_03 , btn_06_04 , btn_06_05 , btn_06_06] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_menu_presentacionEficaz()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var btn_06_01 = document.getElementById("btn_06_01") ;
				var btn_06_02 = document.getElementById("btn_06_02") ;
				var btn_06_03 = document.getElementById("btn_06_03") ;
				var btn_06_04 = document.getElementById("btn_06_04") ;
				var btn_06_05 = document.getElementById("btn_06_05") ;
				var btn_06_06 = document.getElementById("btn_06_06") ;
					
				TweenMax.fromTo (txt_Title_bullets , 1.5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_06_01 , btn_06_02 , btn_06_03 , btn_06_04 , btn_06_05 , btn_06_06], .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .15 ) ;
				
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
							presentacionEficaz_determinarObjetivo() ;
						break ;
						
						case 2:
							presentacionEficaz_analizarPublico() ;
						break ;
						
						case 3:
							presentacionEficaz_colectarInfo() ;
						break ;
						
						case 4:
							presentacionEficaz_estructurarPresentacion() ;
						break ;
						
						case 5:
							presentacionEficaz_desarrollarPresentacion() ;
						break ;
						
						case 6:
							presentacionEficaz_practicar() ;
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
				exit_menu_presentacionEficaz() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_menu_presentacionEficaz() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_menu_presentacionEficaz() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_menu_presentacionEficaz() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_menu_presentacionEficaz() ;
			});
					
			//Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				//tiposTiendas_directas.src = '' ;
				exit_menu_presentacionEficaz() ;
			}) ;
			
			
			/////////////////////////////////Button 01
			$('#btn_06_01').click(function() {
				pagChange = 1 ;
				exit_menu_presentacionEficaz() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_06_02').click(function() {
				pagChange = 2 ;
				exit_menu_presentacionEficaz() ;
			});
			
			/////////////////////////////////Button 03
			$('#btn_06_03').click(function() {
				pagChange = 3 ;
				exit_menu_presentacionEficaz() ;
			});
			
			/////////////////////////////////Button 04
			$('#btn_06_04').click(function() {
				pagChange = 4 ;
				exit_menu_presentacionEficaz() ;
			});
						
			/////////////////////////////////Button 05
			$('#btn_06_05').click(function() {
				pagChange = 5 ;
				exit_menu_presentacionEficaz() ;
			});
			
			/////////////////////////////////Button 06
			$('#btn_06_06').click(function() {
				pagChange = 6 ;
				exit_menu_presentacionEficaz() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_menu_presentacionEficaz() ;
			});
			
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/TecnicaVentas/au_menu_presentacionEficaz_bra.mp3' ;
			
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
<!--Menu Tipos de Tienda-->
function menu_tiposTienda()
{
	CleanScreen() ;
	
	gotoSlide = 'menu_tiposTienda' ;
	
	information = 0 ;
	
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
		
		//Menu Tipos Tiendas
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_induccion_tiposTiendas.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
	var menu_tiposTienda_mexico =
		//Selecciona la información que deseas consultar
		"<div class='txt_Title' id='txt_Title'>Seleccione la información que <b>desee consultar</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='menu_pyramid_01' onmouseover='rollOver_menu_pyramid_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_farmacias_Autoservicios.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='menu_pyramid_02' onmouseover='rollOver_menu_pyramid_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_farmacias_Cadenas.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='menu_pyramid_03' onmouseover='rollOver_menu_pyramid_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_farmacias_Independentes.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Pyramid
			//01
		"<div class='pyramid_01' id='pyramid_01'><img src='img/Induccion/TiposTienda/img_pyramid_top.png' /></div>"+
			//02
		"<div class='pyramid_02' id='pyramid_02'><img src='img/Induccion/TiposTienda/img_pyramid_middle.png' /></div>"+
			//03
		"<div class='pyramid_03' id='pyramid_03'><img src='img/Induccion/TiposTienda/img_pyramid_bottom.png' /></div>"+
		
		//Lines
			//01
		"<div class='line_01' id='line_01'><img src='img/Induccion/TiposTienda/img_infoLine.png' /></div>"+
			//02
		"<div class='line_02' id='line_02'><img src='img/Induccion/TiposTienda/img_infoLine.png' /></div>"+
			//03
		"<div class='line_03' id='line_03'><img src='img/Induccion/TiposTienda/img_infoLine.png' /></div>"+
		
		//Percentages
			//01
		"<div class='percent_01' id='percent_01'>26%</div>"+
			//02
		"<div class='percent_02' id='percent_02' style='top: 505px ;font-size: 1.5em ;'>36% Directas<br/>18% Indirectas</div>"+
			//03
		"<div class='percent_03' id='percent_03'>20%</div>"+
		
		//Slide Number
		"<div class='slideNumber'>007</div>"+
	
	"" ;

	/////////////////////////////////Brasil
	var menu_tiposTienda_brasil =
		//Selecciona la información que deseas consultar
		"<div class='txt_Title' id='txt_Title'>Selecione a informação que <b>deseja consultar</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='menu_pyramid_01' onmouseover='rollOver_menu_pyramid_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_farmacias_Diretas.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='menu_pyramid_02' onmouseover='rollOver_menu_pyramid_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_farmacias_Indiretas.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='menu_pyramid_03' onmouseover='rollOver_menu_pyramid_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_farmacias_Independentes.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Pyramid
			//01
		"<div class='pyramid_01' id='pyramid_01'><img src='img/Induccion/TiposTienda/img_pyramid_top.png' /></div>"+
			//02
		"<div class='pyramid_02' id='pyramid_02'><img src='img/Induccion/TiposTienda/img_pyramid_middle.png' /></div>"+
			//03
		"<div class='pyramid_03' id='pyramid_03'><img src='img/Induccion/TiposTienda/img_pyramid_bottom.png' /></div>"+
		
		//Lines
			//01
		"<div class='line_01' id='line_01'><img src='img/Induccion/TiposTienda/img_infoLine.png' /></div>"+
			//02
		"<div class='line_02' id='line_02'><img src='img/Induccion/TiposTienda/img_infoLine.png' /></div>"+
			//03
		"<div class='line_03' id='line_03'><img src='img/Induccion/TiposTienda/img_infoLine.png' /></div>"+
		
		//Percentages
			//01
		"<div class='percent_01' id='percent_01'>32%</div>"+
			//02
		"<div class='percent_02' id='percent_02'>43%</div>"+
			//03
		"<div class='percent_03' id='percent_03'>25%</div>"+
		
		//Slide Number
		"<div class='slideNumber'>007</div>"+

	"" ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + menu_tiposTienda_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title = document.getElementById("txt_Title") ;
			
			var menu_pyramid_01 = document.getElementById("menu_pyramid_01") ;
			var menu_pyramid_02 = document.getElementById("menu_pyramid_02") ;
			var menu_pyramid_03 = document.getElementById("menu_pyramid_03") ;
			
			var pyramid_01 = document.getElementById("pyramid_01") ;
			var pyramid_02 = document.getElementById("pyramid_02") ;
			var pyramid_03 = document.getElementById("pyramid_03") ;
			
			var line_01 = document.getElementById("line_01") ;
			var line_02 = document.getElementById("line_02") ;
			var line_03 = document.getElementById("line_03") ;
				
			var percent_01 = document.getElementById("percent_01") ;
			var percent_02 = document.getElementById("percent_02") ;
			var percent_03 = document.getElementById("percent_03") ;
			
			TweenMax.fromTo (txt_Title , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([pyramid_03 , pyramid_02 , pyramid_01] , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}} , .5 ) ;
			
			TweenMax.fromTo (line_01 , .5 , {css:{opacity:"0" , left:"600px"}} , {css:{opacity:"1" , left:"550px"} , delay:1.5}) ;
			TweenMax.fromTo (line_02 , .5 , {css:{opacity:"0" , left:"515px"}} , {css:{opacity:"1" , left:"465px"} , delay:2}) ;
			TweenMax.fromTo (line_03 , .5 , {css:{opacity:"0" , left:"415px"}} , {css:{opacity:"1" , left:"365px"} , delay:2.5}) ;
			
			TweenMax.staggerFromTo ([percent_01 , percent_02 , percent_03] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:2.5 } , .25 ) ;
				
			TweenMax.staggerFromTo ([menu_pyramid_01 , menu_pyramid_02 , menu_pyramid_03] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:2} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_tiposTiendas_mex()
			{
				var txt_Title = document.getElementById("txt_Title") ;
			
				var menu_pyramid_01 = document.getElementById("menu_pyramid_01") ;
				var menu_pyramid_02 = document.getElementById("menu_pyramid_02") ;
				var menu_pyramid_03 = document.getElementById("menu_pyramid_03") ;
				
				var pyramid_01 = document.getElementById("pyramid_01") ;
				var pyramid_02 = document.getElementById("pyramid_02") ;
				var pyramid_03 = document.getElementById("pyramid_03") ;
				
				var line_01 = document.getElementById("line_01") ;
				var line_02 = document.getElementById("line_02") ;
				var line_03 = document.getElementById("line_03") ;
					
				var percent_01 = document.getElementById("percent_01") ;
				var percent_02 = document.getElementById("percent_02") ;
				var percent_03 = document.getElementById("percent_03") ;

				TweenMax.fromTo (txt_Title , 2 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage }) ;
			
				TweenMax.staggerFromTo ([pyramid_03 , pyramid_02 , pyramid_01] , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .5 ) ;
				
				TweenMax.fromTo (line_01 , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				TweenMax.fromTo (line_02 , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				TweenMax.fromTo (line_03 , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				
				TweenMax.staggerFromTo ([percent_01 , percent_02 , percent_03] , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .25 ) ;
					
				TweenMax.staggerFromTo ([menu_pyramid_01 , menu_pyramid_02 , menu_pyramid_03] , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .25 ) ;
								
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
							tiposTiendas_autoservicios() ;
						break ;
						
						case 2:
							tiposTiendas_cadenas() ;
						break ;
						
						case 3:
							tiposTiendas_independientes() ;
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
				exit_tiposTiendas_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_tiposTiendas_mex() ;
			});	
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_tiposTiendas_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_tiposTiendas_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_tiposTiendas_mex() ;
			});
			
			/////////////////////////////////LanguageSelector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_tiposTiendas_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_tiposTiendas_mex() ;
					});
			
			/////////////////////////////////Button 01
			$('#menu_pyramid_01').click(function() {
				pagChange = 1 ;
				exit_tiposTiendas_mex() ;
			});
			
			/////////////////////////////////Button 02
			$('#menu_pyramid_02').click(function() {
				pagChange = 2 ;
				exit_tiposTiendas_mex() ;
			});
			
			/////////////////////////////////Button 03
			$('#menu_pyramid_03').click(function() {
				pagChange = 3 ;
				exit_tiposTiendas_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_tiposTienda_mex_01.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + menu_tiposTienda_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title = document.getElementById("txt_Title") ;
			
			var menu_pyramid_01 = document.getElementById("menu_pyramid_01") ;
			var menu_pyramid_02 = document.getElementById("menu_pyramid_02") ;
			var menu_pyramid_03 = document.getElementById("menu_pyramid_03") ;
			
			var pyramid_01 = document.getElementById("pyramid_01") ;
			var pyramid_02 = document.getElementById("pyramid_02") ;
			var pyramid_03 = document.getElementById("pyramid_03") ;
			
			var line_01 = document.getElementById("line_01") ;
			var line_02 = document.getElementById("line_02") ;
			var line_03 = document.getElementById("line_03") ;
				
			var percent_01 = document.getElementById("percent_01") ;
			var percent_02 = document.getElementById("percent_02") ;
			var percent_03 = document.getElementById("percent_03") ;
			
			TweenMax.fromTo (txt_Title , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([pyramid_03 , pyramid_02 , pyramid_01] , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}} , .5 ) ;
			
			TweenMax.fromTo (line_01 , .5 , {css:{opacity:"0" , left:"600px"}} , {css:{opacity:"1" , left:"550px"} , delay:1.5}) ;
			TweenMax.fromTo (line_02 , .5 , {css:{opacity:"0" , left:"515px"}} , {css:{opacity:"1" , left:"465px"} , delay:2}) ;
			TweenMax.fromTo (line_03 , .5 , {css:{opacity:"0" , left:"415px"}} , {css:{opacity:"1" , left:"365px"} , delay:2.5}) ;
			
			TweenMax.staggerFromTo ([percent_01 , percent_02 , percent_03] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:2.5 } , .25 ) ;
				
			TweenMax.staggerFromTo ([menu_pyramid_01 , menu_pyramid_02 , menu_pyramid_03] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:2} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_tiposTiendas()
			{
				var txt_Title = document.getElementById("txt_Title") ;
			
				var menu_pyramid_01 = document.getElementById("menu_pyramid_01") ;
				var menu_pyramid_02 = document.getElementById("menu_pyramid_02") ;
				var menu_pyramid_03 = document.getElementById("menu_pyramid_03") ;
				
				var pyramid_01 = document.getElementById("pyramid_01") ;
				var pyramid_02 = document.getElementById("pyramid_02") ;
				var pyramid_03 = document.getElementById("pyramid_03") ;
				
				var line_01 = document.getElementById("line_01") ;
				var line_02 = document.getElementById("line_02") ;
				var line_03 = document.getElementById("line_03") ;
					
				var percent_01 = document.getElementById("percent_01") ;
				var percent_02 = document.getElementById("percent_02") ;
				var percent_03 = document.getElementById("percent_03") ;

				TweenMax.fromTo (txt_Title , 2 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage }) ;
			
				TweenMax.staggerFromTo ([pyramid_03 , pyramid_02 , pyramid_01] , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .5 ) ;
				
				TweenMax.fromTo (line_01 , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				TweenMax.fromTo (line_02 , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				TweenMax.fromTo (line_03 , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				
				TweenMax.staggerFromTo ([percent_01 , percent_02 , percent_03] , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .25 ) ;
					
				TweenMax.staggerFromTo ([menu_pyramid_01 , menu_pyramid_02 , menu_pyramid_03] , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .25 ) ;
								
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
							tiposTiendas_directas() ;
						break ;
						
						case 2:
							tiposTiendas_indirectas() ;
						break ;
						
						case 3:
							tiposTiendas_independientes() ;
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
				exit_tiposTiendas() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_tiposTiendas() ;
			});	
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_tiposTiendas() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_tiposTiendas() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_tiposTiendas() ;
			});
			
			/////////////////////////////////LanguageSelector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_tiposTiendas() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_tiposTiendas() ;
					});
			
			/////////////////////////////////Button 01
			$('#menu_pyramid_01').click(function() {
				pagChange = 1 ;
				exit_tiposTiendas() ;
			});
			
			/////////////////////////////////Button 02
			$('#menu_pyramid_02').click(function() {
				pagChange = 2 ;
				exit_tiposTiendas() ;
			});
			
			/////////////////////////////////Button 03
			$('#menu_pyramid_03').click(function() {
				pagChange = 3 ;
				exit_tiposTiendas() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_tiposTienda_bra_01.mp3' ;
	
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
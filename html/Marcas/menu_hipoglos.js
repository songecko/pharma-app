<!--Menu menu_hipoglos-->
function menu_hipoglos()
{
	CleanScreen() ;
	
	gotoSlide = 'menu_hipoglos' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_Marcas.png' onmouseover='rollOver_ico_04()' /></div>"+
		
		//Menu Metamucil
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_hipoglos.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
				
		//Slide Number
		"<div class='slideNumber'>028</div>"+
			
	"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////México
	var menu_metamucil_mexico =
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+
		
		//Slide Number
		"<div class='slideNumber'>---</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var menu_metamucil_brasil =
		//Selecciona País
		"<div class='logoMarcaCenter' id='logoMarcaCenter'><img src='img/marcas/hipoglos/logo_hipoglos.png' /></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_03_01' onmouseover='rollOver_btn_03_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_infomarca_br.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_03_02' onmouseover='rollOver_btn_03_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_infotecnica_br.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_03_03' onmouseover='rollOver_btn_03_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_learning_br.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'><img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div></div>"+
		
		/*	//02
		"<div style='top: 375px ; left: 800px ;' class='menuElement' id='btn_03_02' onmouseover='rollOver_btn_03_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_infotecnica_br.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div style='display: none ;' class='menuElement' id='btn_03_03' onmouseover='rollOver_btn_03_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_learning_br.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+*/


	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + menu_metamucil_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var noDisponible = document.getElementById("noDisponible") ;
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_menu_hipoglos_mex()
			{
				var noDisponible = document.getElementById("noDisponible") ;
				TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_Herramientas() ;
						break;
						
						case -6:
							menu_marcas() ;
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
							menu_marcas() ;
						break;
						
						case 1:
							info_marca_01H() ;
						break ;
						
						case 2:
							infoTec_01H() ;
						break ;
						
						case 3:
							
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
				exit_menu_hipoglos_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_menu_hipoglos_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_menu_hipoglos_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_menu_hipoglos_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_menu_hipoglos_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_menu_hipoglos_mex() ;
			});
		
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_menu_hipoglos_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_menu_hipoglos_mex() ;
			});
		
			/////////////////////////////////Button 01
			$('#btn_03_01').click(function() {
				pagChange = 1 ;
				exit_menu_hipoglos_mex() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_02').click(function() {
				pagChange = 2 ;
				exit_menu_hipoglos_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + menu_metamucil_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var logoMarcaCenter = document.getElementById("logoMarcaCenter") ;
			
			var btn_03_01 = document.getElementById("btn_03_01") ;
			var btn_03_02 = document.getElementById("btn_03_02") ;
			var btn_03_03 = document.getElementById("btn_03_03") ;
				
			TweenMax.fromTo (logoMarcaCenter , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_03_01 , btn_03_02 , btn_03_03], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_menu_hipoglos()
			{
				var logoMarcaCenter = document.getElementById("logoMarcaCenter") ;
			
				var btn_03_01 = document.getElementById("btn_03_01") ;
				var btn_03_02 = document.getElementById("btn_03_02") ;
					
				TweenMax.fromTo (logoMarcaCenter , .75 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_03_01 , btn_03_02], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .25 ) ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_Herramientas() ;
						break;
						
						case -6:
							menu_marcas() ;
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
							menu_marcas() ;
						break;
						
						case 1:
							info_marca_01H() ;
						break ;
						
						case 2:
							infoTec_01H() ;
						break ;
						
						case 3:
							
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
				exit_menu_hipoglos() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_menu_hipoglos() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_menu_hipoglos() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_menu_hipoglos() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_menu_hipoglos() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_menu_hipoglos() ;
			});
		
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_menu_hipoglos() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_menu_hipoglos() ;
			});
		
			/////////////////////////////////Button 01
			$('#btn_03_01').click(function() {
				pagChange = 1 ;
				exit_menu_hipoglos() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_02').click(function() {
				pagChange = 2 ;
				exit_menu_hipoglos() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_03').click(function() {
				//window.open('download/learningModules_Hipoglos_bra.zip');
				
				/*doBump( '.bump', 1024 , 768 ,
                Fx.Transitions.Bounce.EaseOut, 
                Fx.Transitions.Bounce.EaseOut
				);*/
				 
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
<!--Menu InfoTec Hipoglos-->
function infoTec_01H()
{
	CleanScreen() ;
	
	gotoSlide = 'infoTec_01H' ;
	
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
		
		//Menu Info Tecnica
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_infoTec_marca.png' onmouseover='rollOver_ico_06()' /></div>"+
	
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
		"<div class='slideNumber'>061</div>"+
			
		"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////Mexico
	var menu_hipoglos_info_tec_mexico =
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+
		
		//Slide Number
		"<div class='slideNumber'>---</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var menu_hipoglos_info_tec_brasil =
		//Selecciona País
		"<div class='img01_sld_01_infoTecH' id='img01_sld_01_infoTecH'><img src='img/marcas/hipoglos/bg_menuInfoTec.png' /></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_02_01' onmouseover='rollOver_btn_02_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_anatomia_infotec_meta_br.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_02_02' onmouseover='rollOver_btn_02_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_enfermedades_infotec_meta_br.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+

	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + menu_hipoglos_info_tec_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var noDisponible = document.getElementById("noDisponible") ;
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_01_infotec_marca_metamucil_mex()
			{
				var noDisponible = document.getElementById("noDisponible") ;
				TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				auLocucion.src = '' ;
			
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_hipoglos() ;
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
							menu_hipoglos() ;
						break;
						
						case 1:
							tec_Anatomy_H_01() ;
						break ;
						
						case 2:
							tec_Enfermedad_H_01() ;
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
				exit_01_infotec_marca_metamucil_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_01_infotec_marca_metamucil_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_01_infotec_marca_metamucil_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_01_infotec_marca_metamucil_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_01_infotec_marca_metamucil_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_01_infotec_marca_metamucil_mex() ;
			});
		
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_01_infotec_marca_metamucil_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_01_infotec_marca_metamucil_mex() ;
			});
		
			/////////////////////////////////Button 01
			$('#btn_02_01').click(function() {
				pagChange = 1 ;
				exit_01_infotec_marca_metamucil_mex() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_02_02').click(function() {
				pagChange = 2 ;
				exit_01_infotec_marca_metamucil_mex() ;
			});
	
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/hipoglos/au_menu_infoTecnica_mex.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + menu_hipoglos_info_tec_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var img01_sld_01_infoTecH = document.getElementById("img01_sld_01_infoTecH") ;
			
			var btn_02_01 = document.getElementById("btn_02_01") ;
			var btn_02_02 = document.getElementById("btn_02_02") ;
				
			TweenMax.fromTo (img01_sld_01_infoTecH , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_02_01 , btn_02_02], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_01_infotec_marca_metamucil()
			{
				var btn_02_01 = document.getElementById("btn_02_01") ;
				var btn_02_02 = document.getElementById("btn_02_02") ;
				TweenMax.staggerFromTo ([btn_02_01 , btn_02_02], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .25 ) ;
				
				var img01_sld_01_infoTecH = document.getElementById("img01_sld_01_infoTecH") ;
				TweenMax.fromTo (img01_sld_01_infoTecH , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
			/**********************************************
			Audio Stop
			***********************************************/
			//Locution Stop
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/bra01.mp3' ;
			
			if (( auFlagLoc % 2 ) != 0)
			{
				auLocucion.play() ;
			}	
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_hipoglos() ;
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
							menu_hipoglos() ;
						break;
						
						case 1:
							tec_Anatomy_H_01() ;
						break ;
						
						case 2:
							tec_Enfermedad_H_01() ;
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
				exit_01_infotec_marca_metamucil() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_01_infotec_marca_metamucil() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_01_infotec_marca_metamucil() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_01_infotec_marca_metamucil() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_01_infotec_marca_metamucil() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_01_infotec_marca_metamucil() ;
			});
		
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_01_infotec_marca_metamucil() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_01_infotec_marca_metamucil() ;
			});
		
			/////////////////////////////////Button 01
			$('#btn_02_01').click(function() {
				pagChange = 1 ;
				exit_01_infotec_marca_metamucil() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_02_02').click(function() {
				pagChange = 2 ;
				exit_01_infotec_marca_metamucil() ;
			});
	
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/hipoglos/au_menu_infoTecnica_bra.mp3' ;
			
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
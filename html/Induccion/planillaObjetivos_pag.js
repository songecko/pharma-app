<!--Planilla de Objetivos-->
function planillaObjetivos_pag()
{
	CleanScreen() ;
	
	gotoSlide = 'planillaObjetivos_pag' ;
	
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
		
		//Planilla de Objetivos
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_Induccion_herramientas_02.png' onmouseover='rollOver_ico_06()' /></div>"+

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
	var planillaObjetivos_pag_mexico =
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+
		
		//Slide Number
		"<div class='slideNumber'>---</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var planillaObjetivos_pag_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Página de objetivos</div>"+
				
		//Images
			//01
		"<div class='pagObj_img' id='pagObj_img_01'><img src='img/Induccion/Herramientas/img_pagObj_01.png'></div>"+
			//02
		"<div class='pagObj_img' id='pagObj_img_02'><img src='img/Induccion/Herramientas/img_pagObj_02.png'></div>"+
			//03
		"<div class='pagObj_img' id='pagObj_img_03'><img src='img/Induccion/Herramientas/img_pagObj_recuadro.png'></div>"+
		
		
		//Textos
			//01
		"<div class='txt_Title' id='pagObj_txt'>Importante observar qual é a sua meta de vendas por marcas e como está o percentual de entrega até o momento.</div>"+
		
		//Slide Number
		"<div class='slideNumber'>019</div>"+

	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + planillaObjetivos_pag_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var noDisponible = document.getElementById("noDisponible") ;
				
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_planillaObjetivos_pag_mex()
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
				exit_planillaObjetivos_pag_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_planillaObjetivos_pag_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_planillaObjetivos_pag_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_planillaObjetivos_pag_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_planillaObjetivos_pag_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_planillaObjetivos_pag_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_planillaObjetivos_pag_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_planillaObjetivos_pag_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + planillaObjetivos_pag_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var pagObj_img_01 = document.getElementById("pagObj_img_01") ;
			var pagObj_img_02 = document.getElementById("pagObj_img_02") ;
			
			var pagObj_txt = document.getElementById("pagObj_txt") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , onComplete:resaltar}) ;
			
			TweenMax.staggerFromTo ([pagObj_img_01 , pagObj_img_02 , pagObj_txt] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
			
			/////////////////////////////////Text resaltar
			function resaltar()
			{
				var pagObj_img_03 = document.getElementById("pagObj_img_03") ;
				
				var tilingImage = new TimelineMax({repeat:-1 , repeatDelay:.25 , yoyo:true});    
					tilingImage.fromTo(pagObj_img_03 , 0.15 , {css:{opacity:"0"}} , {css:{opacity:"1" , ease:Elastic.easeInOut}} ) ;
			}
			
			/////////////////////////////////Exit animation
			function exit_planillaObjetivos_pag()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var pagObj_img_01 = document.getElementById("pagObj_img_01") ;
				var pagObj_img_02 = document.getElementById("pagObj_img_02") ;
				var pagObj_img_03 = document.getElementById("pagObj_img_03") ;
				
				var pagObj_txt = document.getElementById("pagObj_txt") ;
				
				TweenMax.killTweensOf([pagObj_img_01 , pagObj_img_02 , pagObj_img_03 , pagObj_txt]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([pagObj_img_01 , pagObj_img_02 , pagObj_img_03 , pagObj_txt] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
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
				exit_planillaObjetivos_pag() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_planillaObjetivos_pag() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_planillaObjetivos_pag() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_planillaObjetivos_pag() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_planillaObjetivos_pag() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_planillaObjetivos_pag() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_planillaObjetivos_pag() ;
			});
						
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_planillaObjetivos_pag() ;
			});
			
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_PlanillaObjetivos_bra_02.mp3' ;
	
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
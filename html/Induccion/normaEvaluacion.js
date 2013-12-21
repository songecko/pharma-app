<!--Norma de Evaluación-->
function normaEvaluacion()
{
	CleanScreen() ;
	
	gotoSlide = 'normaEvaluacion' ;
	
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
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_Induccion_herramientas_08.png' onmouseover='rollOver_ico_06()' /></div>"+

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
	var normaEvaluacion_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Formulario de <b>Visita</b></div>"+

		//Images
			//01
		"<div class='normaEvaluacion_img' id='normaEvaluacion_img'><img src='img/Induccion/Herramientas/img_formularioVisita_01.png' id='norma_Image_change' /></div>"+		
		
		//Options
		"<div class='txtnormaEvaluacion' id='txtnormaEvaluacion'>"+
			"<ul>"+
				"<li>"+
					"<img src='img/img_selector_active.png' id='img_01'/>"+
				"</li>"+
				"<li>"+
					"<img src='img/img_selector_inactive.png' id='img_02'/>"+
				"</li>"+
				"<li>"+
					"<img src='img/img_selector_inactive.png' id='img_03'/>"+
				"</li>"+
			"</ul>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>023</div>"+

	"" ;
	
	
	/////////////////////////////////Brasil
	var normaEvaluacion_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Ficha <b>Padrão de Avaliação</b></div>"+

		//Images
			//01
		"<div class='normaEvaluacion_img' id='normaEvaluacion_img'><img src='img/Induccion/Herramientas/img_normaEvaluacion_01.png' id='norma_Image_change' /></div>"+		
		
		//Options
		"<div class='txtnormaEvaluacion' id='txtnormaEvaluacion'>"+
			"<ul>"+
				"<li>"+
					"<img src='img/img_selector_active.png' id='img_01'/>"+
				"</li>"+
				"<li>"+
					"<img src='img/img_selector_inactive.png' id='img_02'/>"+
				"</li>"+
				"<li>"+
					"<img src='img/img_selector_inactive.png' id='img_03'/>"+
				"</li>"+
			"</ul>"+
		"</div>"+
		
			//01
		"<div class='txt_Title' id='normaEvaluacion_bottom_txt'>A avaliação de visita em loja deve ser feita em todos os contatos do supervisor com o representante para fornecer feedback de<br/> como seu desempenho em loja em cada um dos passos da visita pode ser aperfeiçoado cada vez mais</div>"+
		
		//Slide Number
		"<div class='slideNumber'>025</div>"+

	"" ;
	
	/**********************************************
	Variables
	***********************************************/
	var selection = 0 ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + normaEvaluacion_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var normaEvaluacion_img = document.getElementById("normaEvaluacion_img") ;
			var txtnormaEvaluacion = document.getElementById("txtnormaEvaluacion") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (normaEvaluacion_img , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			TweenMax.fromTo (txtnormaEvaluacion , 1 , {css:{opacity:"0" , top:"800px"}} , {css:{opacity:"1" , top:"875px"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_normaEvaluacion_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var normaEvaluacion_img = document.getElementById("normaEvaluacion_img") ;
				var pagObj_txt = document.getElementById("pagObj_txt") ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (normaEvaluacion_img , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				TweenMax.fromTo (txtnormaEvaluacion , 1 , {css:{opacity:"1" , top:"825px"}} , {css:{opacity:"0" , top:"825px"}}) ;
				
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
							kitPresentacion() ;
						break;
					}
				}
			}
			
			/////////////////////////////////Change Evaluacion Image
			function changeEvaluationImage_mex()
			{
				var normaEvaluacion_img = document.getElementById("normaEvaluacion_img") ;
				
				TweenMax.fromTo (normaEvaluacion_img , .5 , {css:{height:"620px"}} , {css:{height:"0px"} , onComplete:ChangeImage}) ;
						
				function ChangeImage()
				{
					switch(selection)
					{
						case 1:
							document.getElementById("img_01").src = 'img/img_selector_active.png' ;
							document.getElementById("img_02").src = 'img/img_selector_inactive.png' ;
							document.getElementById("img_03").src = 'img/img_selector_inactive.png' ;
							
							document.getElementById("norma_Image_change").src='img/Induccion/Herramientas/img_formularioVisita_01.png'
							
							TweenMax.fromTo (normaEvaluacion_img , 1 , {css:{height:"0px"}} , {css:{height:"620px"}}) ;
						break;
						
						case 2:
							document.getElementById("img_01").src = 'img/img_selector_inactive.png' ;
							document.getElementById("img_02").src = 'img/img_selector_active.png' ;
							document.getElementById("img_03").src = 'img/img_selector_inactive.png' ;
							
							document.getElementById("norma_Image_change").src='img/Induccion/Herramientas/img_formularioVisita_02.png'
							
							TweenMax.fromTo (normaEvaluacion_img , 1 , {css:{height:"0px"}} , {css:{height:"620px"}}) ;
						break;
						
						case 3:
							document.getElementById("img_01").src = 'img/img_selector_inactive.png' ;
							document.getElementById("img_02").src = 'img/img_selector_inactive.png' ;
							document.getElementById("img_03").src = 'img/img_selector_active.png' ;
							
							document.getElementById("norma_Image_change").src='img/Induccion/Herramientas/img_formularioVisita_03.png'
							
							TweenMax.fromTo (normaEvaluacion_img , 1 , {css:{height:"0px"}} , {css:{height:"620px"}}) ;
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
				exit_normaEvaluacion_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_normaEvaluacion_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_normaEvaluacion_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_normaEvaluacion_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_normaEvaluacion_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_normaEvaluacion_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_normaEvaluacion_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_normaEvaluacion_mex() ;
			});
			
			/////////////////////////////////Selectors
				//01
			$('#img_01').click(function() {
				selection = 1 ;
				changeEvaluationImage_mex() ;
			});
			
				//02
			$('#img_02').click(function() {
				selection = 2 ;
				changeEvaluationImage_mex() ;
			});
			
				//03
			$('#img_03').click(function() {
				selection = 3 ;
				changeEvaluationImage_mex() ;
			});
	
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_evaluacionVisita_mex.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + normaEvaluacion_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var normaEvaluacion_img = document.getElementById("normaEvaluacion_img") ;
			var txtnormaEvaluacion = document.getElementById("txtnormaEvaluacion") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (normaEvaluacion_img , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			TweenMax.fromTo (txtnormaEvaluacion , 1 , {css:{opacity:"0" , top:"800px"}} , {css:{opacity:"1" , top:"875px"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_normaEvaluacion()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var normaEvaluacion_img = document.getElementById("normaEvaluacion_img") ;
				var pagObj_txt = document.getElementById("pagObj_txt") ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (normaEvaluacion_img , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				TweenMax.fromTo (txtnormaEvaluacion , 1 , {css:{opacity:"1" , top:"825px"}} , {css:{opacity:"0" , top:"825px"}}) ;
				
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
							materialVisibilidad() ;
						break;
					}
				}
			}
			
			/////////////////////////////////Change Evaluacion Image
			function changeEvaluationImage()
			{
				var normaEvaluacion_img = document.getElementById("normaEvaluacion_img") ;
				
				TweenMax.fromTo (normaEvaluacion_img , .5 , {css:{height:"620px"}} , {css:{height:"0px"} , onComplete:ChangeImage}) ;
						
				function ChangeImage()
				{
					switch(selection)
					{
						case 1:
							document.getElementById("img_01").src = 'img/img_selector_active.png' ;
							document.getElementById("img_02").src = 'img/img_selector_inactive.png' ;
							document.getElementById("img_03").src = 'img/img_selector_inactive.png' ;
							
							document.getElementById("norma_Image_change").src='img/Induccion/Herramientas/img_normaEvaluacion_01.png'
							
							TweenMax.fromTo (normaEvaluacion_img , 1 , {css:{height:"0px"}} , {css:{height:"620px"}}) ;
						break;
						
						case 2:
							document.getElementById("img_01").src = 'img/img_selector_inactive.png' ;
							document.getElementById("img_02").src = 'img/img_selector_active.png' ;
							document.getElementById("img_03").src = 'img/img_selector_inactive.png' ;
							
							document.getElementById("norma_Image_change").src='img/Induccion/Herramientas/img_normaEvaluacion_02.png'
							
							TweenMax.fromTo (normaEvaluacion_img , 1 , {css:{height:"0px"}} , {css:{height:"620px"}}) ;
						break;
						
						case 3:
							document.getElementById("img_01").src = 'img/img_selector_inactive.png' ;
							document.getElementById("img_02").src = 'img/img_selector_inactive.png' ;
							document.getElementById("img_03").src = 'img/img_selector_active.png' ;
							
							document.getElementById("norma_Image_change").src='img/Induccion/Herramientas/img_normaEvaluacion_03.png'
							
							TweenMax.fromTo (normaEvaluacion_img , 1 , {css:{height:"0px"}} , {css:{height:"620px"}}) ;
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
				exit_normaEvaluacion() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_normaEvaluacion() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_normaEvaluacion() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_normaEvaluacion() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_normaEvaluacion() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_normaEvaluacion() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_normaEvaluacion() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_normaEvaluacion() ;
			});
			
			/////////////////////////////////Selectors
				//01
			$('#img_01').click(function() {
				selection = 1 ;
				changeEvaluationImage() ;
			});
			
				//02
			$('#img_02').click(function() {
				selection = 2 ;
				changeEvaluationImage() ;
			});
			
				//03
			$('#img_03').click(function() {
				selection = 3 ;
				changeEvaluationImage() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_evaluacionVisita_bra.mp3' ;
	
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
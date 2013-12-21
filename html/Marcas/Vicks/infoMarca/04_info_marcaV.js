<!--Planilla de Objetivos-->
function info_marca_04V()
{
	CleanScreen() ;
	
	gotoSlide = 'info_marca_04V' ;
	//languageCountry = 5 ;
	
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_vicks.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		//Info Metamucil
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_info_marca.png' onmouseover='rollOver_ico_06()' /></div>"+
		
		//Info Metamucil
		"<div class='shortCuts' id='ico_07'><img src='img/icons/ico_menu_infoMarcaVics_Vaporu.png' onmouseover='rollOver_ico_07()' /></div>"+
		
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
	
	/////////////////////////////////Mexico
	var normaEvaluacion_mexico =
		//Selecciona País
		//"<div class='txt_Title_bullets' id='txt_Title_bullets'>VICK VapoRub®</div>"+

		//Images
			//01
		"<div class='vick_vaporru_img' id='vick_vaporru_img'><img src='img/marcas/vicks/infoMar/slide4/vicks_01_mx.png' id='norma_Image_change' /></div>"+		
		
		//Options
		"<div class='txtnormaEvaluacion' id='txtnormaEvaluacion'>"+
			"<ul>"+
				"<li>"+
					"<img src='img/img_selector_active.png' id='img_01'/>"+
				"</li>"+
				"<li>"+
					"<img src='img/img_selector_inactive.png' id='img_02'/>"+
				"</li>"+
				/*"<li>"+
					"<img src='img/img_selector_inactive.png' id='img_03'/>"+
				"</li>"+*/			
			"</ul>"+
		"</div>"+
	//Slide Number
		"<div class='slideNumber'>058</div>"+
	"" ;
	
	/////////////////////////////////Brasil
	var normaEvaluacion_brasil =
		//Selecciona País
		//"<div class='txt_Title_bullets' id='txt_Title_bullets'>VICK VapoRub®</div>"+

		//Images
			//01
		"<div class='vick_vaporru_img' id='vick_vaporru_img'><img src='img/marcas/vicks/infoMar/slide4/vicks_01.png' id='norma_Image_change' /></div>"+		
		
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
			
			//Change Exit Animation
			ChangeExit=1;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var vick_vaporru_img = document.getElementById("vick_vaporru_img") ;
			var txtnormaEvaluacion = document.getElementById("txtnormaEvaluacion") ;
			
			/*TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;*/
			
			TweenMax.fromTo (vick_vaporru_img , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			TweenMax.fromTo (txtnormaEvaluacion , 1 , {css:{opacity:"0" , top:"825px"}} , {css:{opacity:"1" , top:"860px"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_mx()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var vick_vaporru_img = document.getElementById("vick_vaporru_img") ;
				var pagObj_txt = document.getElementById("pagObj_txt") ;
				
				/*TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;*/
				
				TweenMax.fromTo (vick_vaporru_img , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				TweenMax.fromTo (txtnormaEvaluacion , 1 , {css:{opacity:"1" , top:"860px"}} , {css:{opacity:"0" , top:"825px"}, onComplete:ChangePage}) ;
				
				auLocucion.src = '' ;
						
				function ChangePage()
				{
					switch(pagChange)
					{
						case -8:
							info_marca_03V() ;
						break;
						
						case -7:
							menu_vicks() ;
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
							info_marca_03V() ;
						break;
					}
				}
			}
			
			/////////////////////////////////Change Evaluacion Image
			function changeEvaluationImage_mx()
			{
				var vick_vaporru_img = document.getElementById("vick_vaporru_img") ;
				
				TweenMax.fromTo (vick_vaporru_img , .5 , {css:{height:"695px"}} , {css:{height:"0px"} , onComplete:ChangeImage}) ;
						
				function ChangeImage()
				{
					switch(selection)
					{
						case 1:
							document.getElementById("img_01").src = 'img/img_selector_active.png' ;
							document.getElementById("img_02").src = 'img/img_selector_inactive.png' ;
							/*document.getElementById("img_03").src = 'img/img_selector_inactive.png' ;*/
							
							document.getElementById("norma_Image_change").src='img/marcas/vicks/infoMar/slide4/vicks_01_mx.png'
							
							TweenMax.fromTo (vick_vaporru_img , 1 , {css:{height:"0px"}} , {css:{height:"695px"}}) ;
							
							/**********************************************
							Audio Load
							***********************************************/
							var auLocucion = document.getElementById("auLocucion") ;
							
							auLocucion.src = 'audio/marcas_mx/vick/infoMarca/au_infoMarca03_vaporub01_mx.mp3' ;
							
							if (( auFlagLoc % 2 ) != 0)
							{
								auLocucion.play() ;
							}
						break;
						
						case 2:
							document.getElementById("img_01").src = 'img/img_selector_inactive.png' ;
							document.getElementById("img_02").src = 'img/img_selector_active.png' ;
							/*document.getElementById("img_03").src = 'img/img_selector_inactive.png' ;*/
							
							document.getElementById("norma_Image_change").src='img/marcas/vicks/infoMar/slide4/vicks_02_mx.png'
							
							TweenMax.fromTo (vick_vaporru_img , 1 , {css:{height:"0px"}} , {css:{height:"695px"}}) ;
							/**********************************************
							Audio Load
							***********************************************/
							var auLocucion = document.getElementById("auLocucion") ;
							
							auLocucion.src = 'audio/marcas_mx/vick/infoMarca/au_infoMarca03_vaporub02_mx.mp3' ;
							
							if (( auFlagLoc % 2 ) != 0)
							{
								auLocucion.play() ;
							}
						break;
						
						case 3:
							document.getElementById("img_01").src = 'img/img_selector_inactive.png' ;
							document.getElementById("img_02").src = 'img/img_selector_inactive.png' ;
							/*document.getElementById("img_03").src = 'img/img_selector_active.png' ;*/
							
							document.getElementById("norma_Image_change").src='img/marcas/vicks/infoMar/slide4/vicks_01_mx.png'
							
							TweenMax.fromTo (vick_vaporru_img , 1 , {css:{height:"0px"}} , {css:{height:"695px"}}) ;
						break;
					}
				}
			}
			
			/////////////////////////////////Download
			$('#btn_Download').click(function() {
				//window.open('download/manual_SmartPad.ppt');
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Selectors
				//01
			$('#img_01').click(function() {
				selection = 1 ;
				changeEvaluationImage_mx() ;
			});
			
				//02
			$('#img_02').click(function() {
				selection = 2 ;
				changeEvaluationImage_mx() ;
			});
			
				//03
			$('#img_03').click(function() {
				selection = 3 ;
				changeEvaluationImage_mx() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas_mx/vick/infoMarca/au_infoMarca03_vaporub01_mx.mp3' ;
			
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
			
			//Change Exit Animation
			ChangeExit=5;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var vick_vaporru_img = document.getElementById("vick_vaporru_img") ;
			var txtnormaEvaluacion = document.getElementById("txtnormaEvaluacion") ;
			
			/*TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;*/
			
			TweenMax.fromTo (vick_vaporru_img , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			TweenMax.fromTo (txtnormaEvaluacion , 1 , {css:{opacity:"0" , top:"825px"}} , {css:{opacity:"1" , top:"860px"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_br()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var vick_vaporru_img = document.getElementById("vick_vaporru_img") ;
				var pagObj_txt = document.getElementById("pagObj_txt") ;
				
				/*TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;*/
				
				TweenMax.fromTo (vick_vaporru_img , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				TweenMax.fromTo (txtnormaEvaluacion , 1 , {css:{opacity:"1" , top:"860px"}} , {css:{opacity:"0" , top:"825px"}, onComplete:ChangePage}) ;
					
					
			/**********************************************
			Audio Stop
			***********************************************/
			//Locution Stop
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/au_.mp3' ;
			
			if (( auFlagLoc % 2 ) != 0)
			{
				auLocucion.play() ;
			}
						
				function ChangePage()
				{
					switch(pagChange)
					{
						case -8:
							info_marca_03V() ;
						break;
						
						case -7:
							menu_vicks() ;
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
							info_marca_03V() ;
						break;
					}
				}
			}
			
			/////////////////////////////////Change Evaluacion Image
			function changeEvaluationImage()
			{
				var vick_vaporru_img = document.getElementById("vick_vaporru_img") ;
				
				TweenMax.fromTo (vick_vaporru_img , .5 , {css:{height:"695px"}} , {css:{height:"0px"} , onComplete:ChangeImage}) ;
						
				function ChangeImage()
				{
					switch(selection)
					{
						case 1:
							document.getElementById("img_01").src = 'img/img_selector_active.png' ;
							document.getElementById("img_02").src = 'img/img_selector_inactive.png' ;
							document.getElementById("img_03").src = 'img/img_selector_inactive.png' ;
							
							document.getElementById("norma_Image_change").src='img/marcas/vicks/infoMar/slide4/vicks_01.png'
							
							TweenMax.fromTo (vick_vaporru_img , 1 , {css:{height:"0px"}} , {css:{height:"695px"}}) ;
							
		/**********************************************
			Audio Load
		***********************************************/	
		//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/vick/au_marca_vick_infomarca_bra04a.mp3' ;
			
			if (( auFlagLoc % 2 ) != 0)
			{
				auLocucion.play() ;
			}
			
							
						break;
						
						case 2:
							document.getElementById("img_01").src = 'img/img_selector_inactive.png' ;
							document.getElementById("img_02").src = 'img/img_selector_active.png' ;
							document.getElementById("img_03").src = 'img/img_selector_inactive.png' ;
							
							document.getElementById("norma_Image_change").src='img/marcas/vicks/infoMar/slide4/vicks_02.png'
							
							TweenMax.fromTo (vick_vaporru_img , 1 , {css:{height:"0px"}} , {css:{height:"695px"}}) ;
							
		/**********************************************
			Audio Load
		***********************************************/	
		//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/vick/au_marca_vick_infomarca_bra04b.mp3' ;
			
			if (( auFlagLoc % 2 ) != 0)
			{
				auLocucion.play() ;
			}
			
							
						break;
						
						case 3:
							document.getElementById("img_01").src = 'img/img_selector_inactive.png' ;
							document.getElementById("img_02").src = 'img/img_selector_inactive.png' ;
							document.getElementById("img_03").src = 'img/img_selector_active.png' ;
							
							document.getElementById("norma_Image_change").src='img/marcas/vicks/infoMar/slide4/vicks_03.png'
							
							TweenMax.fromTo (vick_vaporru_img , 1 , {css:{height:"0px"}} , {css:{height:"695px"}}) ;
							
		/**********************************************
			Audio Load
		***********************************************/	
		//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/vick/au_marca_vick_infomarca_bra04c.mp3' ;
			
			if (( auFlagLoc % 2 ) != 0)
			{
				auLocucion.play() ;
			}
							
							
						break;
					}
				}
			}
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				ExitSelect() ;
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
			Audio Load
		***********************************************/	
		//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/vick/au_marca_vick_infomarca_bra04a.mp3' ;
			
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
	
	/**********************************************
	Button Actions
	***********************************************/
	/////////////////////////////////Icons
		//01
	$('#ico_01').click(function() {
		pagChange = -2 ;
		ExitSelect() ;
	});
	
		//02
	$('#ico_02').click(function() {
		pagChange = -3 ;
		ExitSelect() ;
	});
	
		//03
	$('#ico_03').click(function() {
		pagChange = -4 ;
		ExitSelect() ;
	});
	
		//04
	$('#ico_04').click(function() {
		pagChange = -5 ;
		ExitSelect() ;
	});
	
		//05
	$('#ico_05').click(function() {
		pagChange = -6 ;
		ExitSelect() ;
	});
	
		//06
	$('#ico_06').click(function() {
		pagChange = -7 ;
		ExitSelect() ;
	});
	
		//07
	$('#ico_07').click(function() {
		pagChange = -8 ;
		ExitSelect() ;
	});
	
	
	/////////////////////////////////Language Selector
	$('#worlMap_icon').click(function() {
		pagChange = -1 ;
		ExitSelect() ;
	});

	/////////////////////////////////Exit Selector
	function ExitSelect () {
		switch(ChangeExit) {
			case 1:
				exit_mx();
				break;

			case 5:
				exit_br();
				break;
		}
	}
}
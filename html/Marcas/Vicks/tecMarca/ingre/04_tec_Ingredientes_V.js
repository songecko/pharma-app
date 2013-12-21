<!--Menu Metamucil-->
function tec_Ingrediente_V_04()
{
	CleanScreen() ;
	
	gotoSlide = 'tec_Ingrediente_V_04' ;
	
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
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_infoTec_marca.png' onmouseover='rollOver_ico_06()' /></div>"+
		
		//Info Metamucil
		"<div class='shortCuts' id='ico_07'><img src='img/icons/ico_menu_infoTec_ingredientes.png' onmouseover='rollOver_ico_07()' /></div>"+
				
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
	
	/////////////////////////////////Mexico
	var info04_vicks_mexico =
	
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>Antihistamínicos de <b>primera generación</b></div>"+
	
	//Elements
		//img 01 baseGray
	"<div class='img01_sld_01_infoTecV_A' id='img01_sld_01_infoTecV_A'>"+
		"<img src='img/marcas/vicks/baseGray.png' height='606'/>"+
	"</div>"+

		//img 02 Graphic
	"<div class='img02_sld_02_infoTecV_A' id='img02_sld_02_infoTecV_A'>"+
		"<img src='img/marcas/vicks/infoTec/ingre/slide2/vicks_01.png' />"+
	"</div>"+
	
		//texto 1
	"<div class='txt01_sld_02_infoTecV_A' id='txt01_sld_02_infoTecV_A'>"+
		"Ingrediente activo</br>"+

		"Difenhidramina</br>"+
		
		"Doxilamina</br>"+
		
		"Clorfeniramina</br>"+
		
		"Feniramina</br>"+
		
		"Bromfeniramina</br>"+
		
		"Triprolidina</br>"+

	"</div>"+
	
		//texto 2
	"<div style='width:550px; margin-left:-30px;' class='txt02_sld_02_infoTecV_A' id='txt02_sld_02_infoTecV_A'>"+
		"Formas comunes de dosificación</br>"+
		
		"<span style='line-height:1.25em; color: #FFF ;'>Comprimidos y/o cápsulas orales, soluciones orales, films solubles, productos tópicos</span></br>"+

		"Comprimidos y/o cápsulas orales, soluciones orales</br>"+
		
		"<span style='line-height:1.25em; color: #FFF ;'>Comprimidos y/o cápsulas orales, soluciones orales, comprimidos efervescentes</span></br>"+
		
		"<span style='line-height:1.25em; color: #FFF ;'>Comprimidos y/o cápsulas orales, bebidas calientes orales, spray nasales, gotas para ojos</span></br>"+
		
		"Comprimidos y/o cápsulas orales, soluciones orales</br>"+
		
		"Comprimidos y/o cápsulas orales, soluciones orales</br>"+

	"</div>"+
	
		//texto 3
	"<div class='txt03_sld_02_infoTecV_A' id='txt03_sld_02_infoTecV_A'>"+
		
		"<span style='width:200px; margin-left:-30px; line-height:1.25em; color: #FFF ; '></span>"+
		
	"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>072</div>"+
		
	"" ;
	
	/////////////////////////////////Brasil
	var info04_vicks_brasil =
	
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>Antihistamínicos de <b>primeira geração</b></div>"+
	
	//Elements
		//img 01 baseGray
	"<div class='img01_sld_01_infoTecV_A' id='img01_sld_01_infoTecV_A'>"+
		"<img src='img/marcas/vicks/baseGray.png' height='606'/>"+
	"</div>"+

		//img 02 Graphic
	"<div class='img02_sld_02_infoTecV_A' id='img02_sld_02_infoTecV_A'>"+
		"<img src='img/marcas/vicks/infoTec/ingre/slide4/vicks_01.png' />"+
	"</div>"+
	
	/*	//texto 1
	"<div class='txt01_sld_02_infoTecV_A' id='txt01_sld_02_infoTecV_A'>"+
		"Ingrediente ativo</br>"+

		"Difenhidramina</br>"+
		
		"Doxilamina</br>"+
		
		"Clorfeniramina</br>"+
		
		"Feniramina</br>"+
		
		"Bromfeniramina</br>"+
		
		"Triprolidina</br>"+

	"</div>"+
	
		//texto 2
	"<div style='line-height:2em; width:800px; font-size:1.25em' class='txt02_sld_02_infoTecV_A' id='txt02_sld_02_infoTecV_A'>"+
		"Formas comuns de dosagem</br>"+
		
		"Comprimidos e/ou cápsulas orais, soluções orais, filmes solúveis, produtos tópicos</br>"+

		"Comprimidos e/ou cápsulas orais, soluções orais,</br>"+
		
		"Comprimidos e/ou cápsulas orais, soluções orais, comprimidos efervescentes</br>"+
		
		"Comprimidos e/ou cápsulas orais, bebidas quentes orais, spray nasal, gotas para os olhos</br>"+
		
		"Comprimidos e/ou cápsulas orais, soluções orais</br>"+
		
		"Comprimidos e/ou cápsulas orais, soluções orais</br>"+

	"</div>"+
	
		//texto 3
	"<div class='txt03_sld_02_infoTecV_A' id='txt03_sld_02_infoTecV_A'>"+
		
		"<span style='line-height:1.25em; color: #FFF ; font-family: OliveaLight;'></span>"+
		
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
			document.getElementById("Container").innerHTML = generalElements + info04_vicks_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			ChangeExit=1;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
			TweenMax.fromTo(img01_sld_01_infoTecV_A , 1 , {css:{opacity:"0" , top:"606px" , height:"0px"}} , {css:{opacity:"1" , top:"232px" , height:"606px"}, delay:.5}) ;
			
			var img02_sld_02_infoTecV_A = document.getElementById("img02_sld_02_infoTecV_A") ;
			TweenMax.fromTo(img02_sld_02_infoTecV_A , 1 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.8}) ;
			
			var txt01_sld_02_infoTecV_A = document.getElementById("txt01_sld_02_infoTecV_A") ;
			var txt02_sld_02_infoTecV_A = document.getElementById("txt02_sld_02_infoTecV_A") ;
			var txt03_sld_02_infoTecV_A = document.getElementById("txt03_sld_02_infoTecV_A") ;
			TweenMax.staggerFromTo ([txt01_sld_02_infoTecV_A, txt02_sld_02_infoTecV_A, txt03_sld_02_infoTecV_A], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.2 } , .2 ) ;
		
		
			/////////////////////////////////Exit animation
			function exit_mx()
			{
						
				var txt01_sld_02_infoTecV_A = document.getElementById("txt01_sld_02_infoTecV_A") ;
				var txt02_sld_02_infoTecV_A = document.getElementById("txt02_sld_02_infoTecV_A") ;
				var txt03_sld_02_infoTecV_A = document.getElementById("txt03_sld_02_infoTecV_A") ;
				TweenMax.staggerFromTo ([txt01_sld_02_infoTecV_A, txt02_sld_02_infoTecV_A, txt03_sld_02_infoTecV_A ], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}, delay:0 } , .2 ) ;
				
				var img02_sld_02_infoTecV_A = document.getElementById("img02_sld_02_infoTecV_A") ;
				TweenMax.fromTo(img02_sld_02_infoTecV_A , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0}) ;
						
				var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
				TweenMax.fromTo(img01_sld_01_infoTecV_A , 1 , {css:{opacity:"1" , top:"232px" , height:"606px"}} , {css:{opacity:"0" , top:"606px" , height:"0px"}, delay:.2}) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay:1 , onComplete:ChangePage}) ;
		
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -8:
							infoTec_01V() ;
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
							tec_Ingrediente_V_03a() ;
						break;
						
						case 1:
							tec_Ingrediente_V_05() ;
						break ;
						
						case 2:
							
						break ;
						
						case 3:
							
						break ;
					}
				}
			}
			/**********************************************
			Button Actions
			**********************************************/
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				ExitSelect() ;
			});
		
			/////////////////////////////////Button 01
			$('#btn_03_01').click(function() {
				pagChange = 2 ;
				//ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_02').click(function() {
				pagChange = 3 ;
				//ExitSelect() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas_mx/vick/infoTecnica/ingredientesActivos/.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + info04_vicks_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			ChangeExit=5;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
			TweenMax.fromTo(img01_sld_01_infoTecV_A , 1 , {css:{opacity:"0" , top:"606px" , height:"0px"}} , {css:{opacity:"1" , top:"232px" , height:"606px"}, delay:.5}) ;
			
			var img02_sld_02_infoTecV_A = document.getElementById("img02_sld_02_infoTecV_A") ;
			TweenMax.fromTo(img02_sld_02_infoTecV_A , 1 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.8}) ;
			
			/*var txt01_sld_02_infoTecV_A = document.getElementById("txt01_sld_02_infoTecV_A") ;
			var txt02_sld_02_infoTecV_A = document.getElementById("txt02_sld_02_infoTecV_A") ;
			var txt03_sld_02_infoTecV_A = document.getElementById("txt03_sld_02_infoTecV_A") ;
			TweenMax.staggerFromTo ([txt01_sld_02_infoTecV_A, txt02_sld_02_infoTecV_A, txt03_sld_02_infoTecV_A], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.2 } , .2 ) ;
			*/
		
			/////////////////////////////////Exit animation
			function exit_br()
			{
				/*		
				var txt01_sld_02_infoTecV_A = document.getElementById("txt01_sld_02_infoTecV_A") ;
				var txt02_sld_02_infoTecV_A = document.getElementById("txt02_sld_02_infoTecV_A") ;
				var txt03_sld_02_infoTecV_A = document.getElementById("txt03_sld_02_infoTecV_A") ;
				TweenMax.staggerFromTo ([txt01_sld_02_infoTecV_A, txt02_sld_02_infoTecV_A, txt03_sld_02_infoTecV_A ], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}, delay:0 } , .2 ) ;
				*/
				var img02_sld_02_infoTecV_A = document.getElementById("img02_sld_02_infoTecV_A") ;
				TweenMax.fromTo(img02_sld_02_infoTecV_A , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0}) ;
						
				var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
				TweenMax.fromTo(img01_sld_01_infoTecV_A , 1 , {css:{opacity:"1" , top:"232px" , height:"606px"}} , {css:{opacity:"0" , top:"606px" , height:"0px"}, delay:.2}) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay:1 , onComplete:ChangePage}) ;
		
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
							infoTec_01V() ;
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
							tec_Ingrediente_V_03a() ;
						break;
						
						case 1:
							tec_Ingrediente_V_05() ;
						break ;
						
						case 2:
							
						break ;
						
						case 3:
							
						break ;
					}
				}
			}
			/**********************************************
			Button Actions
			**********************************************/
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				ExitSelect() ;
			});
		
			/////////////////////////////////Button 01
			$('#btn_03_01').click(function() {
				pagChange = 2 ;
				//ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_02').click(function() {
				pagChange = 3 ;
				//ExitSelect() ;
			});	
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/vick/au_marca_vick_infotecnica_bra04.mp3' ;
			
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
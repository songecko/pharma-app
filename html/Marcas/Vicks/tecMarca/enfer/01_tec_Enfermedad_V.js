<!--Menu Metamucil-->
function tec_Enfermedad_V_01()
{
	CleanScreen() ;
	
	gotoSlide = 'tec_Enfermedad_V_01' ;
	
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
		"<div class='shortCuts' id='ico_07'><img src='img/icons/ico_menu_infoTec_enfermedad.png' onmouseover='rollOver_ico_07()' /></div>"+
				
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
		
				
		//Slide Number
		"<div class='slideNumber'>089</div>"+
			
		"" ;
		
	/*****************************
	Contenidos
	*****************************/
	
	/////////////////////////////////Mexico
	var info01_vicksTec_Enfer_mexico =
	
	//Elements
	//texto Mexico add
	"<div id='txt_add_sld_02' style='position:absolute; top:450px; left:240px; width:800px; height:24px; font-family:OliveaBold; font-size:1.5em; text-align:center; color:#272628; line-height:2em;'>"+
		"Información no disponible para su país | Información no disponible párr su país"+
	"</div>"+
		
	"" ;
	
	/////////////////////////////////Brasil
	var info01_vicksTec_Enfer_brasil =
		
		//Flechas anterior y siguiente
			//Anterior
		"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()' ><img src='img/img_flecha_back.png' /></div>"+
			//Siguiente
		"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
		
		
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>Sintomas do <b>resfriado</b></div>"+
	
	//Elements
		//img 01 baseGray
	/*"<div class='img01_sld_01_infoTecV_A' id='img01_sld_01_infoTecV_A'>"+
		"<img src='img/marcas/vicks/baseGray.png' height='606'/>"+
	"</div>"+*/

		//img 02 Graphic
	"<div class='img01_sld_01_infoTecV_E' id='img01_sld_01_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide1/vicks_01.png' />"+
	"</div>"+
	
		//img 02 Graphic
	"<div class='img02_sld_01_infoTecV_E' id='img02_sld_01_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide1/vicks_02.png' />"+
	"</div>"+
	
		//img 03 Graphic
	"<div class='img03_sld_01_infoTecV_E' id='img03_sld_01_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide1/vicks_03.png' />"+
	"</div>"+
	
		//img 04 Graphic
	"<div class='img04_sld_01_infoTecV_E' id='img04_sld_01_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide1/vicks_04.png' />"+
	"</div>"+
	
		//img 05 Graphic
	"<div class='img05_sld_01_infoTecV_E' id='img05_sld_01_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide1/vicks_05.png' />"+
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
			document.getElementById("Container").innerHTML = generalElements + info01_vicksTec_Enfer_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			ChangeExit=1;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_add_sld_02 = document.getElementById("txt_add_sld_02") ;
			TweenMax.fromTo (txt_add_sld_02 , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			/////////////////////////////////Exit animation
			
			function exit_mx()
			{
				var txt_add_sld_02 = document.getElementById("txt_add_sld_02") ;
				TweenMax.fromTo (txt_add_sld_02 , .75 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay: .6 , onComplete:ChangePage}) ;
				
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
							infoTec_01V() ;
						break;
						
						case 1:
							tec_Enfermedad_V_02() ;
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
			***********************************************/
			
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
			document.getElementById("Container").innerHTML = generalElements + info01_vicksTec_Enfer_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			ChangeExit=5;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/*var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
			TweenMax.fromTo(img01_sld_01_infoTecV_A , 1 , {css:{opacity:"0" , top:"606px" , height:"0px"}} , {css:{opacity:"1" , top:"232px" , height:"606px"}, delay:.5}) ;
			
			var img01_sld_01_infoTecV_E = document.getElementById("img01_sld_01_infoTecV_E") ;
			TweenMax.fromTo(img01_sld_01_infoTecV_E , 1 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.8}) ;
			*/
			var img01_sld_01_infoTecV_E = document.getElementById("img01_sld_01_infoTecV_E") ;
			var img02_sld_01_infoTecV_E = document.getElementById("img02_sld_01_infoTecV_E") ;
			var img03_sld_01_infoTecV_E = document.getElementById("img03_sld_01_infoTecV_E") ;
			var img04_sld_01_infoTecV_E = document.getElementById("img04_sld_01_infoTecV_E") ;
			var img05_sld_01_infoTecV_E = document.getElementById("img05_sld_01_infoTecV_E") ;
			TweenMax.staggerFromTo ([ img01_sld_01_infoTecV_E, img02_sld_01_infoTecV_E, img03_sld_01_infoTecV_E, img04_sld_01_infoTecV_E, img05_sld_01_infoTecV_E], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.2 } , .2 ) ;
		
			/////////////////////////////////Exit animation
			function exit_br()
			{
										
				var img01_sld_01_infoTecV_E = document.getElementById("img01_sld_01_infoTecV_E") ;
				var img02_sld_01_infoTecV_E = document.getElementById("img02_sld_01_infoTecV_E") ;
				var img03_sld_01_infoTecV_E = document.getElementById("img03_sld_01_infoTecV_E") ;
				var img04_sld_01_infoTecV_E = document.getElementById("img04_sld_01_infoTecV_E") ;
				var img05_sld_01_infoTecV_E = document.getElementById("img05_sld_01_infoTecV_E") ;
				TweenMax.staggerFromTo ([img01_sld_01_infoTecV_E, img02_sld_01_infoTecV_E, img03_sld_01_infoTecV_E, img04_sld_01_infoTecV_E, img05_sld_01_infoTecV_E ], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}, delay:0 } , .2 ) ;
				
				/*var img01_sld_01_infoTecV_E = document.getElementById("img01_sld_01_infoTecV_E") ;
				TweenMax.fromTo(img01_sld_01_infoTecV_E , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0}) ;
						
				var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
				TweenMax.fromTo(img01_sld_01_infoTecV_A , 1 , {css:{opacity:"1" , top:"232px" , height:"606px"}} , {css:{opacity:"0" , top:"606px" , height:"0px"}, delay:.2}) ;
				*/
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay:.5 , onComplete:ChangePage}) ;
		
			/**********************************************
			Audio Stop
			***********************************************/
			//Locution Stpo
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
							infoTec_01V() ;
						break;
						
						case 1:
							tec_Enfermedad_V_02() ;
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
			***********************************************/
			
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
			
			auLocucion.src = 'audio/marcas/vick/au_marca_vick_infotecnica_sintomas_bra01.mp3' ;
			
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
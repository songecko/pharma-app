<!--Menu Metamucil-->
function tec_Enfermedad_V_06()
{
	CleanScreen() ;
	
	gotoSlide = 'tec_Enfermedad_V_06' ;
	
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
		
		//Menu Info Tecnica
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_infoTec_marca.png' onmouseover='rollOver_ico_06()' /></div>"+
		
		//Menu Info Tecnica Anatomy
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
	var info06_vicksTec_Enfer_mexico =
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>Resfriado común vs <b>gripe</b></div>"+
	
	//Elements
		//img 01 baseGray
	"<div class='img01_sld_01_infoTecV_A' id='img01_sld_01_infoTecV_A'>"+
		"<img src='img/marcas/vicks/baseGray.png' height='606'/>"+
	"</div>"+

		//img 02 Graphic
	"<div class='img01_sld_06_infoTecV_E' id='img01_sld_06_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide6/vicks_01.png' />"+
	"</div>"+
	
		//texto 1
	"<div class='txt01_sld_06_infoTecV_E' id='txt01_sld_06_infoTecV_E'>"+
		"<div class='Olivea_Light' style='line-height:1.25em; color: #FFF ;'>Síntomas compartidos por el </br>resfriado y la gripa:</div>"+

		"Tos y congestión de pecho</br>"+

		"Congestión nasal (nariz tapada)</br>"+
		
		"Secreción nasal fluida</br>"+
		
		"Estornudos</br>"+
		
		"Dolor de garganta"+
	"</div>"+
	
		//texto 2
	"<div class='txt02_sld_06_infoTecV_E' id='txt02_sld_06_infoTecV_E'>"+
		
		"<div class='Olivea_Light' style='line-height:1.25em; color: #FFF ;'>Síntomas más comunes en la gripa:</div></br></br></br></br></br></br>"+

		"Fiebre alta</br>"+

		"Escalofríos</br>"+
		
		"Molestias y dolores corporales</br>"+
		
		"Fatiga moderada a grave"+
		
	"</div>"+

		//texto 2
	"<div style='margin-left:-10px;' class='txt01_sld_03_infoTecV_E' id='txt01_sld_03_infoTecV_E'>"+
		"La gripa comienza con los mismos síntomas que el resfriado, pero mucho más graves, y con inicio que suele ser más abrupto. </br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>"+
		"La gripa también puede causar infección de los oídos, náuseas y vómitos, en particular en niños."+
	"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>083</div>"+
				
	"" ;
	
	/////////////////////////////////Brasil
	var info06_vicksTec_Enfer_brasil =
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>Resfriado comum vs <b>gripe</b></div>"+
	
	//Elements
		//img 01 baseGray
	"<div class='img01_sld_01_infoTecV_A' id='img01_sld_01_infoTecV_A'>"+
		"<img src='img/marcas/vicks/baseGray.png' height='606'/>"+
	"</div>"+

		//img 02 Graphic
	"<div class='img01_sld_06_infoTecV_E' id='img01_sld_06_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide6/vicks_01.png' />"+
	"</div>"+
	
		//texto 1
	"<div class='txt01_sld_06_infoTecV_E' id='txt01_sld_06_infoTecV_E'>"+
		"<b style='line-height:1.25em; color: #FFF ;'>Sintomas comparlhados pelo resfiado</br> e pela gripe:</b></br>"+

		"Tosse e congestão no peito</br>"+

		"Congestão nasal (nariz entupido)</br>"+
		
		"Secreção nasal fluida</br>"+
		
		"Espirros</br>"+
		
		"Dor de garganta"+
	"</div>"+
	
		//texto 2
	"<div class='txt02_sld_06_infoTecV_E' id='txt02_sld_06_infoTecV_E'>"+
		
		"<b style='line-height:1.25em; color: #FFF ;'>Sintomas mais comuns na gripe:</b></br></br></br></br></br></br></br>"+

		"Febre alta</br>"+

		"Arrepios</br>"+
		
		"Desconforto e dores corporais</br>"+
		
		"Fadiga de moderada a grave"+
		
	"</div>"+

		//texto 2
	"<div style='margin-left:-10px;' class='txt01_sld_03_infoTecV_E' id='txt01_sld_03_infoTecV_E'>"+
		"A gripe começa com os mesmos sintomas que o resfriado, mas muito mais graves, e com início que costuma ser mais abrupto.</br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>"+
		"A gripe também pode causar infecção nos ouvidos, náuseas e vômitos, particularmente nas crianças."+
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
			document.getElementById("Container").innerHTML = generalElements + info06_vicksTec_Enfer_mexico ;
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
			
			var img01_sld_06_infoTecV_E = document.getElementById("img01_sld_06_infoTecV_E") ;
			TweenMax.fromTo(img01_sld_06_infoTecV_E , 1 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.8}) ;
			
			var txt01_sld_06_infoTecV_E = document.getElementById("txt01_sld_06_infoTecV_E") ;
			var txt02_sld_06_infoTecV_E = document.getElementById("txt02_sld_06_infoTecV_E") ;
			var txt01_sld_03_infoTecV_E = document.getElementById("txt01_sld_03_infoTecV_E") ;
			TweenMax.staggerFromTo ([txt01_sld_06_infoTecV_E, txt02_sld_06_infoTecV_E, txt01_sld_03_infoTecV_E], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.2 } , .2 ) ;
		
			
			/////////////////////////////////Exit animation
			function exit_mx()
			{
		
				var txt01_sld_06_infoTecV_E = document.getElementById("txt01_sld_06_infoTecV_E") ;
				var txt02_sld_06_infoTecV_E = document.getElementById("txt02_sld_06_infoTecV_E") ;
				var txt01_sld_03_infoTecV_E = document.getElementById("txt01_sld_03_infoTecV_E") ;
				TweenMax.staggerFromTo ([txt01_sld_06_infoTecV_E, txt02_sld_06_infoTecV_E, txt01_sld_03_infoTecV_E ], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}, delay:0 } , .2 ) ;
				
				var img01_sld_06_infoTecV_E = document.getElementById("img01_sld_06_infoTecV_E") ;
				TweenMax.fromTo(img01_sld_06_infoTecV_E , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0}) ;
						
				var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
				TweenMax.fromTo(img01_sld_01_infoTecV_A , 1 , {css:{opacity:"1" , top:"232px" , height:"606px"}} , {css:{opacity:"0" , top:"606px" , height:"0px"}, delay:.2}) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay:1 , onComplete:ChangePage}) ;
		
				auLocucion.src='';
				
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
							tec_Enfermedad_V_05() ;
						break;
						
						case 1:
							tec_Enfermedad_V_07() ;
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
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_02').click(function() {
				pagChange = 3 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_03').click(function() {
				pagChange = 4 ;
				ExitSelect() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas_mx/vick/infoTecnica/enfermedades/au_infoTecnica_enfermedades06_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + info06_vicksTec_Enfer_brasil ;
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
			
			var img01_sld_06_infoTecV_E = document.getElementById("img01_sld_06_infoTecV_E") ;
			TweenMax.fromTo(img01_sld_06_infoTecV_E , 1 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.8}) ;
			
			var txt01_sld_06_infoTecV_E = document.getElementById("txt01_sld_06_infoTecV_E") ;
			var txt02_sld_06_infoTecV_E = document.getElementById("txt02_sld_06_infoTecV_E") ;
			var txt01_sld_03_infoTecV_E = document.getElementById("txt01_sld_03_infoTecV_E") ;
			TweenMax.staggerFromTo ([txt01_sld_06_infoTecV_E, txt02_sld_06_infoTecV_E, txt01_sld_03_infoTecV_E], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.2 } , .2 ) ;
		
			
			/////////////////////////////////Exit animation
			function exit_br()
			{
		
				var txt01_sld_06_infoTecV_E = document.getElementById("txt01_sld_06_infoTecV_E") ;
				var txt02_sld_06_infoTecV_E = document.getElementById("txt02_sld_06_infoTecV_E") ;
				var txt01_sld_03_infoTecV_E = document.getElementById("txt01_sld_03_infoTecV_E") ;
				TweenMax.staggerFromTo ([txt01_sld_06_infoTecV_E, txt02_sld_06_infoTecV_E, txt01_sld_03_infoTecV_E ], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}, delay:0 } , .2 ) ;
				
				var img01_sld_06_infoTecV_E = document.getElementById("img01_sld_06_infoTecV_E") ;
				TweenMax.fromTo(img01_sld_06_infoTecV_E , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0}) ;
						
				var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
				TweenMax.fromTo(img01_sld_01_infoTecV_A , 1 , {css:{opacity:"1" , top:"232px" , height:"606px"}} , {css:{opacity:"0" , top:"606px" , height:"0px"}, delay:.2}) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay:1 , onComplete:ChangePage}) ;
		
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
							tec_Enfermedad_V_05() ;
						break;
						
						case 1:
							tec_Enfermedad_V_07() ;
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
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_02').click(function() {
				pagChange = 3 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_03').click(function() {
				pagChange = 4 ;
				ExitSelect() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/vick/au_marca_vick_infotecnica_sintomas_bra06.mp3' ;
			
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
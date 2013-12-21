<!--Menu Metamucil-->
function tec_Enfermedad_marca_01a()
{
	CleanScreen() ;
	
	gotoSlide = 'tec_Enfermedad_marca_01a' ;
	
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_metamucil.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
	var metam_info_tec_ingredientes_mexico =
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'><b>Constipación: </b>causas</div>"+
	
	//Elements
		//img 01
	"<div class='img01_sld_01_it_Ingr' id='img01_sld_01_it_Ingr'>"+
		"<img src='img/marcas/metamucil/infoTec/ingredientes/slide1/meta_01.png' />"+
	"</div>"+

		//img 02
	"<div class='img01_sld_01_it_enfer' id='img01_sld_01_it_enfer'>"+
		"<img src='img/marcas/metamucil/infoTec/enfermedades/slide1/meta_01.png' />"+
	"</div>"+	
	
		//texto 1
	"<div class='txt01_sld_01_it_Ingr' id='txt01_sld_01_it_Ingr'>"+
		""+
	"</div>"+
	
		//texto 2
	"<div style='margin-top:-60px;' class='txt02_sld_01_it_Ingr' id='txt02_sld_01_it_Ingr'>"+
		"<b style='color: #FFF; font-size:1.5em;'>Causas de constipación</b></br>"+
			"De acuerdo con la Asociación Mundial de Gastroenterología,</br>las causas conocidas de constipación incluyen:</br></br>"+
			"&nbsp;&nbsp;&nbsp;&nbsp;• Ingesta inadecuada de fibras o fluidos</br>"+
			"&nbsp;&nbsp;&nbsp;&nbsp;• Inercia colónica</br>"+
			"&nbsp;&nbsp;&nbsp;&nbsp;• Ignorar la urgencia de defecar(SII)</br>"+
			"&nbsp;&nbsp;&nbsp;&nbsp;• Síndrome de intestino irritable (IBS)</br>"+
			"&nbsp;&nbsp;&nbsp;&nbsp;• Medicamentos (p.ej., opioides, antiácidos,</br>"+
			"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;diuréticos, suplementos de hierro, fármacos</br>"+
			"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;antiinflamatorios no esteroides [AINE])</br>"+
			
	"</div>"+
	
	//Slide Number
		"<div class='slideNumber'>038</div>"+
				
	"" ;
	
	/////////////////////////////////Brasil
	var metam_info_tec_ingredientes_brasil =
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'><b>Constipação: </b>causas</div>"+
	
	//Elements
		//img 01
	"<div class='img01_sld_01_it_Ingr' id='img01_sld_01_it_Ingr'>"+
		"<img src='img/marcas/metamucil/infoTec/ingredientes/slide1/meta_01.png' />"+
	"</div>"+

		//img 02
	"<div class='img01_sld_01_it_enfer' id='img01_sld_01_it_enfer'>"+
		"<img src='img/marcas/metamucil/infoTec/enfermedades/slide1/meta_01.png' />"+
	"</div>"+	
	
		//texto 1
	"<div class='txt01_sld_01_it_Ingr' id='txt01_sld_01_it_Ingr'>"+
		""+
	"</div>"+
	
		//texto 2
	"<div class='txt02_sld_01_it_Ingr' id='txt02_sld_01_it_Ingr'>"+
		"</br><b style='color: #FFF; font-size:1.5em;'>Causas de constipação</b> </br></br>"+
				
			"&nbsp;&nbsp;&nbsp;&nbsp;• ingestão inadequada de fibras ou fluidos</br>"+
			"&nbsp;&nbsp;&nbsp;&nbsp;• ignorar a urgência de defecar</br>"+
			"&nbsp;&nbsp;&nbsp;&nbsp;• síndrome do intestino irritável (SII)</br>"+
			"&nbsp;&nbsp;&nbsp;&nbsp;• medicamentos </br>"+

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
			document.getElementById("Container").innerHTML = generalElements + metam_info_tec_ingredientes_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			ChangeExit=1;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			var img01_sld_01_it_Ingr = document.getElementById("img01_sld_01_it_Ingr") ;
			TweenMax.fromTo(img01_sld_01_it_Ingr , 1 , {css:{opacity:"0" , top:"606px" , height:"0px"}} , {css:{opacity:"1" , top:"232px" , height:"606px"}, delay:.5}) ;
			
			var img01_sld_01_it_enfer = document.getElementById("img01_sld_01_it_enfer") ;
			TweenMax.fromTo(img01_sld_01_it_enfer , 1 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.8}) ;
			
			var txt01_sld_01_it_Ingr = document.getElementById("txt01_sld_01_it_Ingr") ;
			var txt02_sld_01_it_Ingr = document.getElementById("txt02_sld_01_it_Ingr") ;
			TweenMax.staggerFromTo ([txt01_sld_01_it_Ingr, txt02_sld_01_it_Ingr], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.2 } , .2 ) ;
		
			/////////////////////////////////Exit animation
			function exit_mx()
			{
				var txt01_sld_01_it_Ingr = document.getElementById("txt01_sld_01_it_Ingr") ;
				var txt02_sld_01_it_Ingr = document.getElementById("txt02_sld_01_it_Ingr") ;
				TweenMax.staggerFromTo ([txt01_sld_01_it_Ingr, txt02_sld_01_it_Ingr ], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}, delay:0 } , .2 ) ;
				
				var img01_sld_01_it_enfer = document.getElementById("img01_sld_01_it_enfer") ;
				TweenMax.fromTo(img01_sld_01_it_enfer , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0}) ;
						
				var img01_sld_01_it_Ingr = document.getElementById("img01_sld_01_it_Ingr") ;
				TweenMax.fromTo(img01_sld_01_it_Ingr , 1 , {css:{opacity:"1" , top:"232px" , height:"606px"}} , {css:{opacity:"0" , top:"606px" , height:"0px"}, delay:.2}) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay:1 , onComplete:ChangePage}) ;
				
				auLocucion.src = '' ;
		
				function ChangePage()
				{
					switch(pagChange)
					{
						case -8:
							tec_marca_01() ;
						break;
						
						case -7:
							menu_metamucil() ;
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
							tec_Enfermedad_marca_01() ;
						break;
						
						case 1:
							tec_Enfermedad_marca_01b() ;
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
			
			auLocucion.src = 'audio/marcas_mx/metamucil/infoTecnica/enfermedades/au_infoTecnica_enfermedades02_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + metam_info_tec_ingredientes_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			ChangeExit=5;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			var img01_sld_01_it_Ingr = document.getElementById("img01_sld_01_it_Ingr") ;
			TweenMax.fromTo(img01_sld_01_it_Ingr , 1 , {css:{opacity:"0" , top:"606px" , height:"0px"}} , {css:{opacity:"1" , top:"232px" , height:"606px"}, delay:.5}) ;
			
			var img01_sld_01_it_enfer = document.getElementById("img01_sld_01_it_enfer") ;
			TweenMax.fromTo(img01_sld_01_it_enfer , 1 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.8}) ;
			
			var txt01_sld_01_it_Ingr = document.getElementById("txt01_sld_01_it_Ingr") ;
			var txt02_sld_01_it_Ingr = document.getElementById("txt02_sld_01_it_Ingr") ;
			TweenMax.staggerFromTo ([txt01_sld_01_it_Ingr, txt02_sld_01_it_Ingr], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.2 } , .2 ) ;
		
			/////////////////////////////////Exit animation
			function exit_br()
			{
				var txt01_sld_01_it_Ingr = document.getElementById("txt01_sld_01_it_Ingr") ;
				var txt02_sld_01_it_Ingr = document.getElementById("txt02_sld_01_it_Ingr") ;
				TweenMax.staggerFromTo ([txt01_sld_01_it_Ingr, txt02_sld_01_it_Ingr ], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}, delay:0 } , .2 ) ;
				
				var img01_sld_01_it_enfer = document.getElementById("img01_sld_01_it_enfer") ;
				TweenMax.fromTo(img01_sld_01_it_enfer , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0}) ;
						
				var img01_sld_01_it_Ingr = document.getElementById("img01_sld_01_it_Ingr") ;
				TweenMax.fromTo(img01_sld_01_it_Ingr , 1 , {css:{opacity:"1" , top:"232px" , height:"606px"}} , {css:{opacity:"0" , top:"606px" , height:"0px"}, delay:.2}) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay:1 , onComplete:ChangePage}) ;
				
				auLocucion.src = '' ;
		
				function ChangePage()
				{
					switch(pagChange)
					{
						case -8:
							tec_marca_01() ;
						break;
						
						case -7:
							menu_metamucil() ;
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
							tec_Enfermedad_marca_01() ;
						break;
						
						case 1:
							tec_Enfermedad_marca_02() ;
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
			
			auLocucion.src = 'audio/marcas/metamucil/au_marcas_metamucil_infoTecnica_enfermedad_bra01a.mp3' ;
			
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
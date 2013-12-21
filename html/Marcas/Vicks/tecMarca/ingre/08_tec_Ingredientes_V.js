<!--Menu Metamucil-->
function tec_Ingrediente_V_08()
{
	CleanScreen() ;
	
	gotoSlide = 'tec_Ingrediente_V_08' ;
	
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
				
		//Slide Number
		"<div class='slideNumber'>028</div>"+
			
		"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////Brasil
	var info04_hipoglos_brasil =
	
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>Generalidades sobre os <b>Analgésicos e os Anestésicos</b></div>"+
	
	//Elements
		//img 01 baseGray
	"<div class='img01_sld_01_infoTecV_A' id='img01_sld_01_infoTecV_A'>"+
		"<img src='img/marcas/vicks/baseGray.png' height='606'/>"+
	"</div>"+

		//img 02 Graphic
	"<div class='img02_sld_06_infoTecV_A' id='img02_sld_06_infoTecV_A'>"+
		"<img src='img/marcas/vicks/infoTec/ingre/slide6/vicks_01.png' />"+
	"</div>"+
	
		//texto 1
	"<div class='txt01_sld_06_infoTecV_A' id='txt01_sld_06_infoTecV_A'>"+
		"Ingrediente ativo</br>"+

		"Paracetamol (APAP)</br>"+


	"</div>"+
	
		//texto 2
	"<div class='txt02_sld_06_infoTecV_A' id='txt02_sld_06_infoTecV_A'>"+
		"Formas comuns de dsagem</br>"+
	"</div>"+
		//texto 2b
	"<div class='txt02b_sld_06_infoTecV_A' id='txt02b_sld_06_infoTecV_A'>"+
		"Comprimidos e/ou cápsulas orais, sluçoes orais, soluções orais, comprimidos de desintegração oral, compridos efrervescnetes"+
	"</div>"+
	
		//texto 3
	"<div class='txt03_sld_06_infoTecV_A' id='txt03_sld_06_infoTecV_A'>"+
		
		"<spam style='line-height:1.25em; color: #FFF ; font-family: OliveaLight;'>Encotra-se nestes produtos lacal</spam>"+
		
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
			document.getElementById("Container").innerHTML = generalElements + info04_hipoglos_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
		break ;
		
		//Chile
		case 6:
		break ;
		
		//Argentina
		case 7:
		break ;
	}

	/**********************************************
	Animations
	***********************************************/
	/////////////////////////////////Main Animation	
	var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
	TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
	
	var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
	TweenMax.fromTo(img01_sld_01_infoTecV_A , 1 , {css:{opacity:"0" , top:"606px" , height:"0px"}} , {css:{opacity:"1" , top:"232px" , height:"606px"}, delay:.5}) ;
	
	var img02_sld_06_infoTecV_A = document.getElementById("img02_sld_06_infoTecV_A") ;
	TweenMax.fromTo(img02_sld_06_infoTecV_A , 1 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.8}) ;
	
	var txt01_sld_06_infoTecV_A = document.getElementById("txt01_sld_06_infoTecV_A") ;
	var txt02_sld_06_infoTecV_A = document.getElementById("txt02_sld_06_infoTecV_A") ;
	var txt03_sld_06_infoTecV_A = document.getElementById("txt03_sld_06_infoTecV_A") ;
	var txt02b_sld_06_infoTecV_A = document.getElementById("txt02b_sld_06_infoTecV_A") ;
	TweenMax.staggerFromTo ([txt01_sld_06_infoTecV_A, txt02_sld_06_infoTecV_A, txt02b_sld_06_infoTecV_A,  txt03_sld_06_infoTecV_A], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.2 } , .2 ) ;


	/////////////////////////////////Exit animation
	function exit_infoTec_Enfer_01_hipoglos()
	{
				
		var txt01_sld_06_infoTecV_A = document.getElementById("txt01_sld_06_infoTecV_A") ;
		var txt02_sld_06_infoTecV_A = document.getElementById("txt02_sld_06_infoTecV_A") ;
		var txt03_sld_06_infoTecV_A = document.getElementById("txt03_sld_06_infoTecV_A") ;
		var txt02b_sld_06_infoTecV_A = document.getElementById("txt02b_sld_06_infoTecV_A") ;
		TweenMax.staggerFromTo ([txt01_sld_06_infoTecV_A, txt02_sld_06_infoTecV_A, txt02b_sld_06_infoTecV_A, txt03_sld_06_infoTecV_A ], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}, delay:0 } , .2 ) ;
		
		var img02_sld_06_infoTecV_A = document.getElementById("img02_sld_06_infoTecV_A") ;
		TweenMax.fromTo(img02_sld_06_infoTecV_A , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0}) ;
				
		var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
		TweenMax.fromTo(img01_sld_01_infoTecV_A , 1 , {css:{opacity:"1" , top:"232px" , height:"606px"}} , {css:{opacity:"0" , top:"606px" , height:"0px"}, delay:.2}) ;
		
		var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
		TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay:1 , onComplete:ChangePage}) ;

		
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
					tec_Ingrediente_V_07() ;
				break;
				
				case 1:
					tec_Ingrediente_V_09() ;
				break ;
				
				case 2:
					
				break ;
				
				case 3:
					
				break ;
			}
		}
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
		exit_infoTec_Enfer_01_hipoglos() ;
	});
	
		//02
	$('#ico_02').click(function() {
		pagChange = -3 ;
		exit_infoTec_Enfer_01_hipoglos() ;
	});
	
		//03
	$('#ico_03').click(function() {
		pagChange = -4 ;
		exit_infoTec_Enfer_01_hipoglos() ;
	});
	
		//04
	$('#ico_04').click(function() {
		pagChange = -5 ;
		exit_infoTec_Enfer_01_hipoglos() ;
	});
	
		//05
	$('#ico_05').click(function() {
		pagChange = -6 ;
		exit_infoTec_Enfer_01_hipoglos() ;
	});
	
		//06
	$('#ico_06').click(function() {
		pagChange = -7 ;
		exit_infoTec_Enfer_01_hipoglos() ;
	});

		//07
	$('#ico_07').click(function() {
		pagChange = -8 ;
		exit_infoTec_Enfer_01_hipoglos() ;
	});
	
	/////////////////////////////////Language Selector
	$('#worlMap_icon').click(function() {
		pagChange = -1 ;
		exit_infoTec_Enfer_01_hipoglos() ;
	});
	
	/////////////////////////////////Flecha Back
	$('#flechaBack').click(function() {
		pagChange = 0 ;
		exit_infoTec_Enfer_01_hipoglos() ;
	});
	
	/////////////////////////////////Flecha Next
	$('#flechaNext').click(function() {
		pagChange = 1 ;
		exit_infoTec_Enfer_01_hipoglos() ;
	});

	/////////////////////////////////Button 01
	$('#btn_03_01').click(function() {
		pagChange = 2 ;
		//exit_infoTec_Enfer_01_hipoglos() ;
	});
	
	/////////////////////////////////Button 02
	$('#btn_03_02').click(function() {
		pagChange = 3 ;
		//exit_infoTec_Enfer_01_hipoglos() ;
	});	
	
}
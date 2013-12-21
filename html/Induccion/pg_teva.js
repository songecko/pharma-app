<!--P&G TEVA-->
function pg_teva()
{
	CleanScreen() ;
	
	gotoSlide = 'pg_teva' ;
	
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_induccion_teva.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
	var pg_teva_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'><li>¿Qué es <b>PGT?</b></li></div>"+
		
		//Logo Pharma
		"<div class='logoPharma_teva' id='logoPharma_teva'><img src='img/img_logoPharma.png' height='115'></div>"+
		
		//Logo P&G
		"<div class='logo_PyG_teva' id='logo_PyG_teva'><img src='img/img_logoAlone_PyG.png' height='115'></div>"+
		
		//Logo Pharma
		"<div class='logo_TEVA_teva' id='logo_TEVA_teva'><img src='img/img_logoAlone_TEVA.png' height='115'></div>"+
		
		//Info Images
			//P&G
		"<div class='info_PyG' id='info_PyG'><img src='img/Induccion/Teva/img_teva_01_pg.png' height='500'></div>"+
			//TEVA
		"<div class='info_TEVA' id='info_TEVA'><img src='img/Induccion/Teva/img_teva_02_teva.png' height='500'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>006</div>"+
	
	"" ;
	
	/////////////////////////////////Brasil
	var pg_teva_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>O que é <b>PGT?</b></div>"+
		
		//Logo Pharma
		"<div class='logoPharma_teva' id='logoPharma_teva'><img src='img/img_logoPharma.png' height='115'></div>"+
		
		//Logo P&G
		"<div class='logo_PyG_teva' id='logo_PyG_teva'><img src='img/img_logoAlone_PyG.png' height='115'></div>"+
		
		//Logo Pharma
		"<div class='logo_TEVA_teva' id='logo_TEVA_teva'><img src='img/img_logoAlone_TEVA.png' height='115'></div>"+
		
		//Info Images
			//P&G
		"<div class='info_PyG' id='info_PyG'><img src='img/Induccion/Teva/img_teva_01_pg_brasil.png' height='500'></div>"+
			//TEVA
		"<div class='info_TEVA' id='info_TEVA'><img src='img/Induccion/Teva/img_teva_02_teva_brasil.png' height='500'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>006</div>"+

	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + pg_teva_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var logoPharma_teva = document.getElementById("logoPharma_teva") ;
			
			var logo_PyG_teva = document.getElementById("logo_PyG_teva") ;
			var logo_TEVA_teva = document.getElementById("logo_TEVA_teva") ;
			
			var info_PyG = document.getElementById("info_PyG") ;
			var info_Teva = document.getElementById("info_TEVA") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (logo_PyG_teva , .5 , {css:{opacity:"0" , left:"457px"}} , {css:{opacity:"1" , left:"257px"}}) ;
			TweenMax.fromTo (logo_TEVA_teva , .5 , {css:{opacity:"0" , left:"425px"}} , {css:{opacity:"1" , left:"675px"}}) ;
			
			TweenMax.fromTo ([logo_PyG_teva , logo_TEVA_teva] , .5 , {css:{opacity:"1" , top:"250px"}} , {css:{opacity:"0" , top:"700px"} , delay:1}) ;
			
			TweenMax.fromTo (logoPharma_teva , 1 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:1.5}) ;
			
			TweenMax.fromTo ([info_PyG , info_Teva] , 1 , {css:{opacity:"0" , top:"850px" , height:"0px"}} , {css:{opacity:"1" , top:"375px" , height:"500px"} , delay:1.5}) ;
			
			/////////////////////////////////Exit animation
			function exit_pgTeva_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var logoPharma_teva = document.getElementById("logoPharma_teva") ;
		
				var info_PyG = document.getElementById("info_PyG") ;
				var info_Teva = document.getElementById("info_TEVA") ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
						
				TweenMax.fromTo (logoPharma_teva , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}}) ;
				
				TweenMax.fromTo (info_PyG , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"50px"}}) ;
				
				TweenMax.fromTo (info_Teva , .5 , {css:{opacity:"1" , right:"150px"}} , {css:{opacity:"0" , right:"50px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							languageSelector() ;
						break;
						
						case 1:
							menu_Induccion() ;
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
				exit_pgTeva_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_pgTeva_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_pgTeva_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_pgTeva_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_pgTeva_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_pgTeva_mex() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 1 ;
				exit_pgTeva_mex() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Induccion/au_pgTEVA_mex_01.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + pg_teva_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var logoPharma_teva = document.getElementById("logoPharma_teva") ;
			
			var logo_PyG_teva = document.getElementById("logo_PyG_teva") ;
			var logo_TEVA_teva = document.getElementById("logo_TEVA_teva") ;
			
			var info_PyG = document.getElementById("info_PyG") ;
			var info_Teva = document.getElementById("info_TEVA") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (logo_PyG_teva , .5 , {css:{opacity:"0" , left:"457px"}} , {css:{opacity:"1" , left:"257px"}}) ;
			TweenMax.fromTo (logo_TEVA_teva , .5 , {css:{opacity:"0" , left:"425px"}} , {css:{opacity:"1" , left:"675px"}}) ;
			
			TweenMax.fromTo ([logo_PyG_teva , logo_TEVA_teva] , .5 , {css:{opacity:"1" , top:"250px"}} , {css:{opacity:"0" , top:"700px"} , delay:1}) ;
			
			TweenMax.fromTo (logoPharma_teva , 1 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:1.5}) ;
			
			TweenMax.fromTo ([info_PyG , info_Teva] , 1 , {css:{opacity:"0" , top:"850px" , height:"0px"}} , {css:{opacity:"1" , top:"375px" , height:"500px"} , delay:1.5}) ;
			
			/////////////////////////////////Exit animation
			function exit_pgTeva()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var logoPharma_teva = document.getElementById("logoPharma_teva") ;
		
				var info_PyG = document.getElementById("info_PyG") ;
				var info_Teva = document.getElementById("info_TEVA") ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
						
				TweenMax.fromTo (logoPharma_teva , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}}) ;
				
				TweenMax.fromTo (info_PyG , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"50px"}}) ;
				
				TweenMax.fromTo (info_Teva , .5 , {css:{opacity:"1" , right:"150px"}} , {css:{opacity:"0" , right:"50px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							languageSelector() ;
						break;
						
						case 1:
							menu_Induccion() ;
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
				exit_pgTeva() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_pgTeva() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_pgTeva() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_pgTeva() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_pgTeva() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
						pagChange = -1 ;
				exit_pgTeva() ;
			});
	
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 1 ;
				exit_pgTeva() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Induccion/au_pgTEVA_bra_01.mp3' ;
			
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
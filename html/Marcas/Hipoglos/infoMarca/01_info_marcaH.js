<!--Menu Metamucil-->
function info_marca_01H()
{
	CleanScreen() ;
	
	gotoSlide = 'info_marca_01H' ;
	
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
		
		//Info Metamucil
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_info_marca.png' onmouseover='rollOver_ico_06()' /></div>"+
				
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
		"<div class='slideNumber'>047</div>"+
			
		"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////México
	var info01_hipoglos_mexico =
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+
		
		//Slide Number
		"<div class='slideNumber'>---</div>"+
	
	"" ;
	
	/////////////////////////////////Brasil
	var info01_hipoglos_brasil =
		//Selecciona País
		//"<div class='txt_Title_bullets' id='txt_Title_bullets'>O que é <b>Metamucil</b>?</div>"+
		
		//Elements
		
			//img 01
		"<div class='img01_sld_01_inf_Mrc' id='img01_sld_01_inf_Mrc'>"+
			"<img src='img/marcas/hipoglos/infoMar/slide1/hipo_01.png' />"+
		"</div>"+
		
			//img 02
		"<div class='img02_sld_01_inf_Mrc' id='img02_sld_01_inf_Mrc'>"+
			"<img src='img/marcas/hipoglos/infoMar/slide1/hipo_02.png' />"+
		"</div>"+
		
			//img 03
		"<div class='img03_sld_01_inf_Mrc' id='img03_sld_01_inf_Mrc'>"+
			"<img src='img/marcas/hipoglos/infoMar/slide1/hipo_03.png' />"+
		"</div>"+
		
			//img 04
		"<div class='img04_sld_01_inf_Mrc' id='img04_sld_01_inf_Mrc'>"+
			"<img src='img/marcas/hipoglos/infoMar/slide1/hipo_04.png' />"+
		"</div>"+
		
			//img 05
		"<div class='img05_sld_01_inf_Mrc' id='img05_sld_01_inf_Mrc'>"+
			"<img src='img/marcas/hipoglos/infoMar/slide1/hipo_05.png' />"+
		"</div>"+
		
			//texto 01
		//"<div class='img02_sld_01_inf_Mrc' id='img02_sld_01_inf_Mrc'>"+
			//"“É uma fibra de origem 100% natural que atua como laxante e suplemento de fibra.”"+
		//"</div>"+
	
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + info01_hipoglos_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var noDisponible = document.getElementById("noDisponible") ;
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_info01_hipoglos_mex()
			{
				var noDisponible = document.getElementById("noDisponible") ;
				
				TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				auLocucion.src = '' ;
				
				
			/**********************************************
			Audio Stop`
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/bra.mp3' ;
			
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
							info_marca_02H() ;
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
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_info01_hipoglos_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_info01_hipoglos_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_info01_hipoglos_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_info01_hipoglos_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_info01_hipoglos_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_info01_hipoglos_mex() ;
			});
		
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_info01_hipoglos_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_info01_hipoglos_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_info01_hipoglos_mex() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/hipoglos/au_marcas_Hipoglos_infoMarca_mex01.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + info01_hipoglos_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var img01_sld_01_inf_Mrc = document.getElementById("img01_sld_01_inf_Mrc") ;
			TweenMax.fromTo (img01_sld_01_inf_Mrc , 1 , {css:{opacity:"0" , transform:"scale(.8,.8)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			
			var img02_sld_01_inf_Mrc = document.getElementById("img02_sld_01_inf_Mrc") ;
			var img03_sld_01_inf_Mrc = document.getElementById("img03_sld_01_inf_Mrc") ;
			var img04_sld_01_inf_Mrc = document.getElementById("img04_sld_01_inf_Mrc") ;
			var img05_sld_01_inf_Mrc = document.getElementById("img05_sld_01_inf_Mrc") ;
			
			TweenMax.staggerFromTo ([ img02_sld_01_inf_Mrc, img03_sld_01_inf_Mrc, img04_sld_01_inf_Mrc, img05_sld_01_inf_Mrc], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.5} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_info01_hipoglos()
			{
				var img02_sld_01_inf_Mrc = document.getElementById("img02_sld_01_inf_Mrc") ;
				var img03_sld_01_inf_Mrc = document.getElementById("img03_sld_01_inf_Mrc") ;
				var img04_sld_01_inf_Mrc = document.getElementById("img04_sld_01_inf_Mrc") ;
				var img05_sld_01_inf_Mrc = document.getElementById("img05_sld_01_inf_Mrc") ;
		
				TweenMax.staggerFromTo ([img02_sld_01_inf_Mrc, img03_sld_01_inf_Mrc, img04_sld_01_inf_Mrc, img05_sld_01_inf_Mrc], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .1 ) ;
				
				var img01_sld_01_inf_Mrc = document.getElementById("img01_sld_01_inf_Mrc") ;
				TweenMax.fromTo (img01_sld_01_inf_Mrc , .75 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay: .5 , onComplete:ChangePage}) ;
				
				
			/**********************************************
			Audio Stop`
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/bra.mp3' ;
			
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
							info_marca_02H() ;
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
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_info01_hipoglos() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_info01_hipoglos() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_info01_hipoglos() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_info01_hipoglos() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_info01_hipoglos() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_info01_hipoglos() ;
			});
		
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_info01_hipoglos() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_info01_hipoglos() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_info01_hipoglos() ;
			});
		
			/////////////////////////////////Button 01
			$('#btn_03_01').click(function() {
				pagChange = 2 ;
				//exit_info01_hipoglos() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_02').click(function() {
				pagChange = 3 ;
				//exit_info01_hipoglos() ;
			});	
	
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/hipoglos/au_marcas_Hipoglos_infoMarca_bra01.mp3' ;
			
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
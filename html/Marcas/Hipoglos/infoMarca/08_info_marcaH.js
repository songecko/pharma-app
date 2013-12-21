<!--Menu Metamucil-->
function info_marca_08H()
{
	CleanScreen() ;
	
	gotoSlide = 'info_marca_08H' ;
	
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
		"<div class='slideNumber'>059</div>"+
			
		"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////México
	var info04_hipoglos_mexico =
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+
		
		//Slide Number
		"<div class='slideNumber'>---</div>"+	

	"" ;
	
	/////////////////////////////////Brasil
	var info04_hipoglos_brasil =
		//Elements
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'><b>Hipoglós</b> tradicional x <b>hipoglós</b> amêndoas</div>"+
		
		//Elements
			//img 01 BaseGray
		"<div class='img01_sld_04_inf_Mrc' id='img01_sld_04_inf_Mrc'>"+
			"<img src='img/marcas/hipoglos/baseGray.png' height='653' >"+
		"</div>"+
		
			//img 02 Header
		"<div class='img01_sld_07_inf_Mrc' id='img01_sld_07_inf_Mrc'>"+
			"<img src='img/marcas/hipoglos/infoMar/slide8/hipo_01.png' height='560'>"+
		"</div>"+
	
			//img 03 Graphic
		"<div class='img02_sld_07_inf_Mrc' id='img02_sld_07_inf_Mrc'>"+
			"<img src='img/marcas/hipoglos/infoMar/slide8/hipo_02.png' height='560'>"+
		"</div>"+
		
			//texto 1
		/*"<div class='txt01_sld_01_it_Ingr' id='txt01_sld_01_it_Ingr'>"+
			"Hidratos de carbono e polímeros não digeríveis que se encontram nas plantas e têm efeitos fisiológicos</br>"+
		"</div>"+*/
		
			//texto 2
		"<div class='txt02_sld_08_inf_Mrc' id='txt02_sld_08_inf_Mrc'>"+
			"• Proteção eficaz que dura ate a proxima troca de fralda.</br></br>"+
	
			"• 70 Anos de cuidados com a família brasileira."+
		"</div>"+
	
			//texto 
		"<div class='txt03_sld_08_inf_Mrc' id='txt03_sld_08_inf_Mrc'>"+
			"• Proteção eficaz com cheirinho gotoso e consistência suave.</br></br>"+
	
			"• Hidratação para a pele com óleo de amêndoas e vitamina E."+
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
			document.getElementById("Container").innerHTML = generalElements + info04_hipoglos_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var noDisponible = document.getElementById("noDisponible") ;
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_info04_hipoglos_mex()
			{
				var noDisponible = document.getElementById("noDisponible") ;
				TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				auLocucion.src = '' ;
				
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
							info_marca_07H() ;
						break;
						
						case 1:
							info_marca_09H() ;
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
				exit_info04_hipoglos_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_info04_hipoglos_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_info04_hipoglos_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_info04_hipoglos_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_info04_hipoglos_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_info04_hipoglos_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_info04_hipoglos_mex() ;
			});
			
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_info04_hipoglos_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_info04_hipoglos_mex() ;
			});

			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/hipoglos/au_marcas_Hipoglos_infoMarca_mex08.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + info04_hipoglos_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"},delay: .3}) ;
			
			var img01_sld_04_inf_Mrc = document.getElementById("img01_sld_04_inf_Mrc") ;
			TweenMax.fromTo(img01_sld_04_inf_Mrc , .5 , {css:{opacity:"0" , top:"653px" , height:"0px"}} , {css:{opacity:"1" , top:"234px" , height:"653px"}, delay:.4}) ;
			
			var img01_sld_07_inf_Mrc = document.getElementById("img01_sld_07_inf_Mrc") ;
			TweenMax.fromTo(img01_sld_07_inf_Mrc , .5 , {css:{opacity:"0" , height:"0"}} , {css:{opacity:"1" , height:"560"}, delay:.8}) ;
			
			var img02_sld_07_inf_Mrc = document.getElementById("img02_sld_07_inf_Mrc") ;
			TweenMax.fromTo(img02_sld_07_inf_Mrc , .5 , {css:{opacity:"0" , height:"0"}} , {css:{opacity:"1" , height:"560"}, delay:1}) ;
			
			var txt02_sld_08_inf_Mrc = document.getElementById("txt02_sld_08_inf_Mrc") ;
			var txt03_sld_08_inf_Mrc = document.getElementById("txt03_sld_08_inf_Mrc") ;
			TweenMax.staggerFromTo ([txt02_sld_08_inf_Mrc, txt03_sld_08_inf_Mrc], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.4 } , .2 ) ;
		
			/////////////////////////////////Exit animation
			function exit_info04_hipoglos()
			{
				var txt02_sld_08_inf_Mrc = document.getElementById("txt02_sld_08_inf_Mrc") ;
				var txt03_sld_08_inf_Mrc = document.getElementById("txt03_sld_08_inf_Mrc") ;
				TweenMax.staggerFromTo ([txt02_sld_08_inf_Mrc, txt03_sld_08_inf_Mrc], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}, delay:0 } , .2 ) ;
		
				var img02_sld_07_inf_Mrc = document.getElementById("img02_sld_07_inf_Mrc") ;
				TweenMax.fromTo(img02_sld_07_inf_Mrc , .5 , {css:{opacity:"1" , height:"560"}} , {css:{opacity:"0" , height:"0"}, delay:.3}) ;
			
				var img01_sld_07_inf_Mrc = document.getElementById("img01_sld_07_inf_Mrc") ;
				TweenMax.fromTo(img01_sld_07_inf_Mrc , .5 , {css:{opacity:"1" , height:"560"}} , {css:{opacity:"0" , height:"0px"}, delay:.4}) ;
				
				var img01_sld_04_inf_Mrc = document.getElementById("img01_sld_04_inf_Mrc") ;
				TweenMax.fromTo(img01_sld_04_inf_Mrc , .5 , {css:{opacity:"1" , top:"234px" , height:"653px"}} , {css:{opacity:"0" , top:"653px" , height:"0px"}, delay:.6}) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"},delay:.8 , onComplete:ChangePage}) ;
				
			/**********************************************
			Audio Stop
			***********************************************/
			//Locution Stop
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/bra01.mp3' ;
			
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
							info_marca_07H() ;
						break;
						
						case 1:
							info_marca_09H() ;
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
				exit_info04_hipoglos() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_info04_hipoglos() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_info04_hipoglos() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_info04_hipoglos() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_info04_hipoglos() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_info04_hipoglos() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_info04_hipoglos() ;
			});
			
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_info04_hipoglos() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_info04_hipoglos() ;
			});

			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/hipoglos/au_marcas_Hipoglos_infoMarca_bra08.mp3' ;
			
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
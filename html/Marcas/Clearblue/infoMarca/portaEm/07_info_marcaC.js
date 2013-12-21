<!--Menu Metamucil-->
function info_marca_07C()
{
	CleanScreen() ;
	
	gotoSlide = 'info_marca_07C' ;
	
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_marcas_Clearblue.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		//Info Metamucil
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_gnralTec_Clearblue.png' onmouseover='rollOver_ico_06()' /></div>"+
		
		//Info Metamucil
		"<div class='shortCuts' id='ico_07'><img src='img/icons/ico_menu_clear_prueba_emba.png' onmouseover='rollOver_ico_07()' /></div>"+			
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
	var info01_clearblue_mexico =
		//Elements
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'><b>En México </b>el primer lanzamiento</div>"+
		
		//img 01 BaseGray
		"<div class='img01_sld_07_inf_Mrc_C' id='img01_sld_07_inf_Mrc_C'>"+
			"<img src='img/marcas/clearblue/baseRose.png'>"+
		"</div>"+
		
		//img 02 Header
		"<div class='img02_sld_07_inf_Mrc_C' id='img02_sld_07_inf_Mrc_C'>"+
			"<img src='img/marcas/clearblue/headRose.png' height='202' >"+
		"</div>"+
	
		//img 03 Graphic
		"<div class='img03_sld_07_inf_Mrc_C' id='img03_sld_07_inf_Mrc_C'>"+
			"<img src='img/marcas/clearblue/infoMar/slide7/clear_01.png' width='873'>"+
		"</div>"+
	
		//img 04 Graphic
		"<div class='img04_sld_07_inf_Mrc_C' id='img04_sld_07_inf_Mrc_C'>"+
			"<img src='img/marcas/clearblue/infoMar/slide7/clear_02.png' width='266'>"+
		"</div>"+
	
		//img 05 Graphic
		/*"<div class='img05_sld_07_inf_Mrc_C' id='img05_sld_07_inf_Mrc_C'>"+
			"<img src='img/marcas/clearblue/infoMar/slide2/clear_03.png' width='60'>"+
		"</div>"+
				
		//texto 1
		"<div class='txt01_sld_07_inf_Mrc_C' id='txt01_sld_07_inf_Mrc_C'>"+
			"<span style='color:#FFF; font-size: 2em; font-family: VAGRoundedBold;'>650 000 mujeres </span> están tratando de concebir en un momento dado."+
		"</div>"+*/
		
		//texto 2
		"<div class='txt02_sld_07_inf_Mrc_C' id='txt02_sld_07_inf_Mrc_C'>"+
			"Prueba de embarazo digital con indicador de concepción"+
		"</div>"+
	//Slide Number
		"<div class='slideNumber'>126</div>"+
	"" ;
	
	/////////////////////////////////Brasil
	var info01_clearblue_brasil =
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+
		
		//Slide Number
		"<div class='slideNumber'>---</div>"+
	
	"" ;
	

	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
		
			document.getElementById("Container").innerHTML = generalElements + info01_clearblue_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			
			//Titulo
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"},delay: .2}) ;
			
			//GrayRose
			var img01_sld_07_inf_Mrc_C = document.getElementById("img01_sld_07_inf_Mrc_C") ;
			TweenMax.fromTo(img01_sld_07_inf_Mrc_C , 1 , {css:{opacity:"0" , top:"233.7px" , height:"0px"}} , {css:{opacity:"1" , top:"233.7px" , height:"688px"}, delay:.8}) ;
			
			//Header
			var img02_sld_07_inf_Mrc_C = document.getElementById("img02_sld_07_inf_Mrc_C") ;
			TweenMax.fromTo(img02_sld_07_inf_Mrc_C , 1 , {css:{opacity:"0", height:"0px"}} , {css:{opacity:"1" , height:"202px"}, delay:1}) ;
			
				//Graphics
				var img03_sld_07_inf_Mrc_C = document.getElementById("img03_sld_07_inf_Mrc_C") ;
				TweenMax.fromTo(img03_sld_07_inf_Mrc_C , .5 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"873px"}, delay:1.5}) ;
				
				var img04_sld_07_inf_Mrc_C = document.getElementById("img04_sld_07_inf_Mrc_C") ;
				TweenMax.fromTo(img04_sld_07_inf_Mrc_C , .5 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"266px"}, delay:2}) ;
				
				/*var img05_sld_07_inf_Mrc_C = document.getElementById("img05_sld_07_inf_Mrc_C") ;
				TweenMax.fromTo(img05_sld_07_inf_Mrc_C , .5 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"60px"}, delay:2.5}) ;
				//Fin Graphics*/
			
			//Textos
			//var txt01_sld_07_inf_Mrc_C = document.getElementById("txt01_sld_07_inf_Mrc_C") ;
			var txt02_sld_07_inf_Mrc_C = document.getElementById("txt02_sld_07_inf_Mrc_C") ;
			TweenMax.staggerFromTo ([ txt02_sld_07_inf_Mrc_C], .5 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.4 } , 1.3 ) ;
			
			
			/////////////////////////////////Exit animation
			function exit_info01_clearblue_mex()
			{
				//Textos
				//var txt01_sld_07_inf_Mrc_C = document.getElementById("txt01_sld_07_inf_Mrc_C") ;
				var txt02_sld_07_inf_Mrc_C = document.getElementById("txt02_sld_07_inf_Mrc_C") ;
				TweenMax.staggerFromTo ([  txt02_sld_07_inf_Mrc_C], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0 } , 1 ) ;
				
					//Graphics
					var img03_sld_07_inf_Mrc_C = document.getElementById("img03_sld_07_inf_Mrc_C") ;
					TweenMax.fromTo(img03_sld_07_inf_Mrc_C , .5 , {css:{opacity:"1" , width:"873px"}} , {css:{opacity:"0" , width:"0px"}, delay:.2}) ;
					
					var img04_sld_07_inf_Mrc_C = document.getElementById("img04_sld_07_inf_Mrc_C") ;
					TweenMax.fromTo(img04_sld_07_inf_Mrc_C , .5 , {css:{opacity:"1" , width:"266px"}} , {css:{opacity:"0" , width:"0px"}, delay:.4}) ;
					
					/*var img05_sld_07_inf_Mrc_C = document.getElementById("img05_sld_07_inf_Mrc_C") ;
					TweenMax.fromTo(img05_sld_07_inf_Mrc_C , .5 , {css:{opacity:"1" , width:"60px"}} , {css:{opacity:"0" , width:"0px"}, delay:.6}) ;*/
					//Fin Graphics
				
				//Header
				var img02_sld_07_inf_Mrc_C = document.getElementById("img02_sld_07_inf_Mrc_C") ;
				TweenMax.fromTo(img02_sld_07_inf_Mrc_C , 1 , {css:{opacity:"1", height:"202px"}} , {css:{opacity:"0" , height:"0px"}, delay:.8}) ;
				
				//GrayRose
				var img01_sld_07_inf_Mrc_C = document.getElementById("img01_sld_07_inf_Mrc_C") ;
				TweenMax.fromTo(img01_sld_07_inf_Mrc_C , 1 , {css:{opacity:"1" , top:"233.7px" , height:"688px"}} , {css:{opacity:"0" , top:"233.7px" , height:"0px"}, delay:1}) ;
					
				//Titulo
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"},delay:1.1 , onComplete:ChangePage}) ;
				
				auLocucion.src='';
					
				function ChangePage()
				{
					switch(pagChange)
					{
						case -8:
							//Menu Portafolio
							info_marca_05C() ;
						break;
						
						case -7:
							menu_clearblue() ;
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
							info_marca_06C() ;
						break;
						
						case 1:
							info_marca_08C() ;
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
				exit_info01_clearblue_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_info01_clearblue_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_info01_clearblue_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_info01_clearblue_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_info01_clearblue_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_info01_clearblue_mex() ;
			});
		
				//07
			$('#ico_07').click(function() {
				pagChange = -8 ;
				exit_info01_clearblue_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_info01_clearblue_mex() ;
			});
			
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_info01_clearblue_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_info01_clearblue_mex() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas_mx/clearblue/au_infoMarca_pruebaEmbarazo_LanzamientoMexico_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + info01_clearblue_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var noDisponible = document.getElementById("noDisponible") ;
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_info01_clearblue()
			{
				var noDisponible = document.getElementById("noDisponible") ;
				
				TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				auLocucion.src = '' ;
					
				function ChangePage()
				{
					switch(pagChange)
					{
						case -8:
							//Menu Portafolio
							info_marca_05C() ;
						break;
						
						case -7:
							menu_clearblue() ;
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
							info_marca_06C() ;
						break;
						
						case 1:
							info_marca_08C() ;
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
				exit_info01_clearblue() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_info01_clearblue() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_info01_clearblue() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_info01_clearblue() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_info01_clearblue() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_info01_clearblue() ;
			});
		
				//07
			$('#ico_07').click(function() {
				pagChange = -8 ;
				exit_info01_clearblue() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_info01_clearblue() ;
			});
			
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_info01_clearblue() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_info01_clearblue() ;
			});
			
			
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
<!--Menu Metamucil-->
function info_marca_09aC()
{
	CleanScreen() ;
	
	gotoSlide = 'info_marca_09aC' ;
	
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
		//"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
				
		
			
		"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////Mexico
	var info01_clearblue_mexico =
		//Elements
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Campaña actual <b>ovulación</b></div>"+
	
		//img 03 Graphic
		"<div style='top:250px; left:370px; width:538px; height:681px;' class='img03_sld_09_inf_Mrc_C' id='img03_sld_09_inf_Mrc_C'>"+
			"<img src='img/marcas/clearblue/infoMar/slide9/clear_02.png' width='538'>"+
		"</div>"+
	//Slide Number
		"<div class='slideNumber'>129</div>"+
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
			
				//Graphics
				var img03_sld_09_inf_Mrc_C = document.getElementById("img03_sld_09_inf_Mrc_C") ;
				TweenMax.fromTo(img03_sld_09_inf_Mrc_C , .5 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"708px"}, delay:1.5}) ;
			
			/////////////////////////////////Exit animation
			function exit_info01_clearblue_mex()
			{
					//Graphics
					var img03_sld_09_inf_Mrc_C = document.getElementById("img03_sld_09_inf_Mrc_C") ;
					TweenMax.fromTo(img03_sld_09_inf_Mrc_C , .5 , {css:{opacity:"1" , width:"708px"}} , {css:{opacity:"0" , width:"0px"}, delay:.2}) ;
					
				//Titulo
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"},delay:1.1 , onComplete:ChangePage}) ;
					
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
							info_marca_09C() ;
						break;
						
						case 1:
							info_marca_09bC() ;
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
							info_marca_08C() ;
						break;
						
						case 1:
							
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
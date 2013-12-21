<!--Menu Metamucil-->
function tec_Enfermedad_P_03()
{
	CleanScreen() ;
	
	gotoSlide = 'tec_Enfermedad_P_03' ;
	
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_marcas_PeptoBismol.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
		
				
		
			
		"" ;
		
	/*****************************
	Contenidos
	*****************************/
	
	/////////////////////////////////Mexico
	var info01_clearblue_mexico =
		//Flechas anterior y siguiente
			//Anterior
		"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()' ><img src='img/img_flecha_back.png' /></div>"+
			//Siguiente
		"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
		
	//Elements
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>¿Que causa <b>el malestar?</b></div>"+
	
	//img 01 BaseGray
	"<div class='img01_sld_03_inf_Mrc_C' id='img01_sld_03_inf_Mrc_C'>"+
		"<img src='img/marcas/peptobismol/baseRose.png'>"+
	"</div>"+
	
	//img 02 Header
	"<div class='img02_sld_03_inf_Mrc_C' id='img02_sld_03_inf_Mrc_C'>"+
		"<img src='img/marcas/peptobismol/headRose.png' height='202' >"+
	"</div>"+

	//img 03 Graphic
	"<div class='img03_sld_03_inf_Mrc_C' id='img03_sld_03_inf_Mrc_C'>"+
		"<img src='img/marcas/peptobismol/infoTec/slide3/pepto_01.png' width='475'>"+
	"</div>"+

	//img 04 Graphic
	/*"<div class='img04_sld_03_inf_Mrc_C' id='img04_sld_03_inf_Mrc_C'>"+
		"<img src='img/marcas/clearblue/infoMar/slide2/clear_02.png' width='246'>"+
	"</div>"+

	//img 05 Graphic
	"<div class='img05_sld_03_inf_Mrc_C' id='img05_sld_03_inf_Mrc_C'>"+
		"<img src='img/marcas/clearblue/infoMar/slide2/clear_03.png' width='60'>"+
	"</div>"+
			
	//texto 1
	"<div class='txt01_sld_03_inf_Mrc_C' id='txt01_sld_03_inf_Mrc_C'>"+
		"<span style='color:#FFF; font-size: 2em; font-family: VAGRoundedBold;'>650 000 mujeres </span> están tratando de concebir en un momento dado."+
	"</div>"+*/
	
	//texto 2
	"<div class='txt02_sld_03_inf_Mrc_C' id='txt02_sld_03_inf_Mrc_C'>"+
		"<b style='color:#FFF; font-size: 1.5em; line-height:1.25em;'>Estress</b></br>"+
		"Cuando el cuerpo se estresa desvía la energía, sangre, encimas y oxigeno desde el aparato digestivo hacia otras partes del cuerpo- resultando en una mala digestión.</br></br>"+
		
		"<b style='color:#FFF; font-size: 1.5em; line-height:1.25em;'>Dieta / Hábitos Alimenticios</b></br>"+
		"Las dietas bajas en fibra retrasan el transito intestinal, causando estreñimiento y un gran riesgo en absorción de Toxinas. Alergia a los alimentos, saltarse comidas , dietas y el consumo excesivo puede irritar la mucosa intestinal"+


	"</div>"+
	//Slide Number
		"<div class='slideNumber'>114</div>"+
	"" ;
	
	/////////////////////////////////Brasil
	var info01_clearblue_brasil =
	
	//Elements
	//texto Mexico add
	"<div id='txt_add_sld_02' style='position:absolute; top:450px; left:240px; width:800px; height:24px; font-family:OliveaBold; font-size:1.5em; text-align:center; color:#272628; line-height:2em;'>"+
		"Información no disponible para su país | Información no disponible párr su país"+
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
		
			document.getElementById("Container").innerHTML = generalElements + info01_clearblue_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			//Change Exit Animation
			ChangeExit=1;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			//Titulo
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"},delay: .2}) ;
			
			//GrayRose
			var img01_sld_03_inf_Mrc_C = document.getElementById("img01_sld_03_inf_Mrc_C") ;
			TweenMax.fromTo(img01_sld_03_inf_Mrc_C , 1 , {css:{opacity:"0" , top:"233.7px" , height:"0px"}} , {css:{opacity:"1" , top:"233.7px" , height:"688px"}, delay:.8}) ;
			
			//Header
			var img02_sld_03_inf_Mrc_C = document.getElementById("img02_sld_03_inf_Mrc_C") ;
			TweenMax.fromTo(img02_sld_03_inf_Mrc_C , 1 , {css:{opacity:"0", height:"0px"}} , {css:{opacity:"1" , height:"202px"}, delay:1}) ;
			
				//Graphics
				var img03_sld_03_inf_Mrc_C = document.getElementById("img03_sld_03_inf_Mrc_C") ;
				TweenMax.fromTo(img03_sld_03_inf_Mrc_C , .5 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"475px"}, delay:1.5}) ;
				
				/*var img04_sld_03_inf_Mrc_C = document.getElementById("img04_sld_03_inf_Mrc_C") ;
				TweenMax.fromTo(img04_sld_03_inf_Mrc_C , .5 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"246px"}, delay:2}) ;
				
				var img05_sld_03_inf_Mrc_C = document.getElementById("img05_sld_03_inf_Mrc_C") ;
				TweenMax.fromTo(img05_sld_03_inf_Mrc_C , .5 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"60px"}, delay:2.5}) ;
				//Fin Graphics*/
			
			//Textos
			//var txt01_sld_03_inf_Mrc_C = document.getElementById("txt01_sld_03_inf_Mrc_C") ;
			var txt02_sld_03_inf_Mrc_C = document.getElementById("txt02_sld_03_inf_Mrc_C") ;
			TweenMax.staggerFromTo ([ txt02_sld_03_inf_Mrc_C], .5 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.4 } , 1.3 ) ;
			
			/////////////////////////////////Exit animation
			function exit_mx()
			{
				//Textos
				//var txt01_sld_03_inf_Mrc_C = document.getElementById("txt01_sld_03_inf_Mrc_C") ;
				var txt02_sld_03_inf_Mrc_C = document.getElementById("txt02_sld_03_inf_Mrc_C") ;
				TweenMax.staggerFromTo ([  txt02_sld_03_inf_Mrc_C], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0 } , 1 ) ;
				
					//Graphics
					var img03_sld_03_inf_Mrc_C = document.getElementById("img03_sld_03_inf_Mrc_C") ;
					TweenMax.fromTo(img03_sld_03_inf_Mrc_C , .5 , {css:{opacity:"1" , width:"475px"}} , {css:{opacity:"0" , width:"0px"}, delay:.2}) ;
					
					/*var img04_sld_03_inf_Mrc_C = document.getElementById("img04_sld_03_inf_Mrc_C") ;
					TweenMax.fromTo(img04_sld_03_inf_Mrc_C , .5 , {css:{opacity:"1" , width:"246px"}} , {css:{opacity:"0" , width:"0px"}, delay:.4}) ;
					
					var img05_sld_03_inf_Mrc_C = document.getElementById("img05_sld_03_inf_Mrc_C") ;
					TweenMax.fromTo(img05_sld_03_inf_Mrc_C , .5 , {css:{opacity:"1" , width:"60px"}} , {css:{opacity:"0" , width:"0px"}, delay:.6}) ;*/
					//Fin Graphics
				
				//Header
				var img02_sld_03_inf_Mrc_C = document.getElementById("img02_sld_03_inf_Mrc_C") ;
				TweenMax.fromTo(img02_sld_03_inf_Mrc_C , 1 , {css:{opacity:"1", height:"202px"}} , {css:{opacity:"0" , height:"0px"}, delay:.8}) ;
				
				//GrayRose
				var img01_sld_03_inf_Mrc_C = document.getElementById("img01_sld_03_inf_Mrc_C") ;
				TweenMax.fromTo(img01_sld_03_inf_Mrc_C , 1 , {css:{opacity:"1" , top:"233.7px" , height:"688px"}} , {css:{opacity:"0" , top:"233.7px" , height:"0px"}, delay:1}) ;
					
				//Titulo
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"},delay:1.1 , onComplete:ChangePage}) ;
				
				auLocucion.src='';
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -8:
							menu_tecMarcaP() ;
						break;
						
						case -7:
							menu_peptobismol() ;
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
							tec_Enfermedad_P_02() ;
						break;
						
						case 1:
							tec_Enfermedad_P_04() ;
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
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas_mx/pepto/infoTecnica/enfermedades/au_infoTecnica_enfermedades02_mx.mp3' ;
			
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
			
			//Change Exit Animation
			ChangeExit=5;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_add_sld_02 = document.getElementById("txt_add_sld_02") ;
			TweenMax.fromTo (txt_add_sld_02 , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			/////////////////////////////////Exit animation
			
			function exit_br()
			{
				var txt_add_sld_02 = document.getElementById("txt_add_sld_02") ;
				TweenMax.fromTo (txt_add_sld_02 , .75 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay: .6 , onComplete:ChangePage}) ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -8:
							menu_tecMarcaP() ;
						break;
						
						case -7:
							menu_peptobismol() ;
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
							tec_Enfermedad_P_02() ;
						break;
						
						case 1:
							tec_Enfermedad_P_04() ;
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
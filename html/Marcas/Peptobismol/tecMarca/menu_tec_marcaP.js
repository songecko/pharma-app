<!--Menu Metamucil-->
function menu_tecMarcaP()
{
	CleanScreen() ;
	
	gotoSlide = 'menu_tecMarcaP' ;
	
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
			"<div class='actualLanguage'><img src='img/img_language_Mexico.png' id='imageLanguage'/></div>"+
		"</div>"+
		
				
		
			
		"" ;
		
	/*****************************
	Contenidos
	*****************************/
	
	/////////////////////////////////Mexico
	var menuTec_peptobismol_mexico =
		//Flechas anterior y siguiente
			//Anterior
		"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()' ><img src='img/img_flecha_back.png' /></div>"+
			//Siguiente
		//"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
		
	//Selecciona País
	"<div class='logoMarcaCenter' id='logoMarcaCenter'></div>"+
	//<img src='img/marcas/peptobismol/logo_peptobismol.png' />
	
	//Menu buttons
		//01
	"<div class='menuElement' id='btn_02_01' onmouseover='rollOver_btn_02_01()'>"+
		//Image
		"<div class='me_Image'><img src='img/MenuElements/btn_ingredientes_infotec_meta.png' /></div>"+
		//Shadow
		"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
	"</div>"+
	
		//02
	"<div class='menuElement' id='btn_02_02' onmouseover='rollOver_btn_02_02()'>"+
		//Image
		"<div class='me_Image'><img src='img/MenuElements/btn_enfermedades_infotec_meta.png' /></div>"+
		//Shadow
		"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
	"</div>"+
	//Slide Number
		"<div class='slideNumber'>106</div>"+
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
		
			document.getElementById("Container").innerHTML = generalElements + menuTec_peptobismol_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			//Change Exit Animation
			ChangeExit=1;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			/////////////////////////////////Main Animation	
			var logoMarcaCenter = document.getElementById("logoMarcaCenter") ;
			
			var btn_02_01 = document.getElementById("btn_02_01") ;
			var btn_02_02 = document.getElementById("btn_02_02") ;
				
			TweenMax.fromTo (logoMarcaCenter , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_02_01 , btn_02_02], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_mx()
			{
				var logoMarcaCenter = document.getElementById("logoMarcaCenter") ;
			
				var btn_02_01 = document.getElementById("btn_02_01") ;
				var btn_02_02 = document.getElementById("btn_02_02") ;
				TweenMax.fromTo (logoMarcaCenter , .75 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_02_01 , btn_02_02], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .25 ) ;
				
				auLocucion.src='';
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							menu_peptobismol() ;
						break;
						
						case 1:
							
						break ;
						
						case 2:
							tec_Anatomy_P_01() ;
						break ;
						
						case 3:
							tec_Enfermedad_P_02() ;
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
			/*$('#flechaNext').click(function() {
				pagChange = 1 ;
				ExitSelect() ;
			});*/
			
			/////////////////////////////////Button 01
			$('#btn_02_01').click(function() {
				pagChange = 2 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_02_02').click(function() {
				pagChange = 3 ;
				ExitSelect() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas_mx/pepto/infoTecnica/au_menu_infoTecnica_mx.mp3' ;
			
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
							menu_peptobismol() ;
						break;
						
						case 1:
							
						break ;
						
						case 2:
							tec_Anatomy_P_01() ;
						break ;
						
						case 3:
							tec_Enfermedad_P_02() ;
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
			/*$('#flechaNext').click(function() {
				pagChange = 1 ;
				ExitSelect() ;
			});*/
			
			/////////////////////////////////Button 01
			$('#btn_02_01').click(function() {
				pagChange = 2 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_02_02').click(function() {
				pagChange = 3 ;
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
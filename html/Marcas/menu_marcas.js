<!--Language Selector-->
function menu_marcas()
{
	CleanScreen() ;
	
	gotoSlide = 'menu_marcas' ;
	
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
	var menu_marcas_mexico =
		//Selecciona País
		"<div class='txt_Title' id='txt_Title'>Selecione la marca <b>que desea consultar</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_06_01' onmouseover='rollOver_btn_06_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_Metamucil.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_06_02'>"+
			//Image
			"<div class='me_Image' >"+
				"<img src='img/img_imageRol_001.png' id='roll_01'/>"+
			"</div>"+
			//Shadow
			//"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
	
			//03
		"<div class='menuElement' id='btn_06_03' onmouseover='rollOver_btn_06_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_Vicks.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
	
			//04
		"<div class='menuElement' id='btn_06_04' onmouseover='rollOver_btn_06_04()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_PeptoBismol.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//05
		"<div class='menuElement' id='btn_06_05'>"+
			//Image
			"<div class='me_Image' >"+
				"<img src='img/img_imageRol_002.png' id='roll_02'/>"+
			"</div>"+
			//Shadow
			//"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//06
		"<div class='menuElement' id='btn_06_06' onmouseover='rollOver_btn_06_06()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_Clearblue.png'/></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>024</div>"+
		
	"" ;
	
	/////////////////////////////////Brasil
	var menu_marcas_brasil =
		//Selecciona País
		"<div class='txt_Title' id='txt_Title'>Selecione a marca que <b>deseja consultar</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_03_01' onmouseover='rollOver_btn_03_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_metamucil.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_03_02' onmouseover='rollOver_btn_03_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_hipoglos.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_03_03' onmouseover='rollOver_btn_03_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_vicks.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>026</div>"+
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + menu_marcas_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			ChangeExit=1;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title = document.getElementById("txt_Title") ;
			
			var btn_06_01 = document.getElementById("btn_06_01") ;
			var btn_06_02 = document.getElementById("btn_06_02") ;
			var btn_06_03 = document.getElementById("btn_06_03") ;
			var btn_06_04 = document.getElementById("btn_06_04") ;
			var btn_06_05 = document.getElementById("btn_06_05") ;
			var btn_06_06 = document.getElementById("btn_06_06") ;
				
			TweenMax.fromTo (txt_Title , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_06_01 , btn_06_02 , btn_06_03 , btn_06_04 , btn_06_05 , btn_06_06] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_mx()
			{
				var txt_Title = document.getElementById("txt_Title") ;
			
				var btn_06_01 = document.getElementById("btn_06_01") ;
				var btn_06_02 = document.getElementById("btn_06_02") ;
				var btn_06_03 = document.getElementById("btn_06_03") ;
				var btn_06_04 = document.getElementById("btn_06_04") ;
				var btn_06_05 = document.getElementById("btn_06_05") ;
				var btn_06_06 = document.getElementById("btn_06_06") ;
					
				TweenMax.fromTo (txt_Title , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_06_01 , btn_06_02 , btn_06_03 , btn_06_04 , btn_06_05 , btn_06_06], .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .15 ) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							menu_Principal() ;
						break;
						
						case 1:
							
						break ;
						
						case 2:
							menu_metamucil () ;
						break ;
						
						case 3:
							menu_vicks () ;
						break ;
						
						case 4:
							menu_peptobismol () ;
						break ;
						
						case 5:
							menu_clearblue () ;
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
			$('#btn_06_01').click(function() {
				pagChange = 2 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_06_03').click(function() {
				pagChange = 3 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 03
			$('#btn_06_04').click(function() {
				pagChange = 4 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 04
			$('#btn_06_06').click(function() {
				pagChange = 5 ;
				ExitSelect() ;
			});
			
			RollingImage_01() ;
			RollingImage_02() ;
			
			
			
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas_mx/au_menuMarcas_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + menu_marcas_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			ChangeExit=5;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title = document.getElementById("txt_Title") ;
			
			var btn_03_01 = document.getElementById("btn_03_01") ;
			var btn_03_02 = document.getElementById("btn_03_02") ;
			var btn_03_03 = document.getElementById("btn_03_03") ;
				
			TweenMax.fromTo (txt_Title , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_03_01 , btn_03_02 , btn_03_03], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_br()
			{
				var txt_Title = document.getElementById("txt_Title") ;
			
				var btn_03_01 = document.getElementById("btn_03_01") ;
				var btn_03_02 = document.getElementById("btn_03_02") ;
				var btn_03_03 = document.getElementById("btn_03_03") ;
					
				TweenMax.fromTo (txt_Title , .75 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_03_01 , btn_03_02 , btn_03_03], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .25 ) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_Herramientas() ;
						break;
						
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
							menu_Principal() ;
						break;
						
						case 1:
							menu_metamucil() ;
						break ;
						
						case 2:
							menu_hipoglos() ;
						break ;
						
						case 3:
							menu_vicks() ;
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
		
			/////////////////////////////////Button 01
			$('#btn_03_01').click(function() {
				pagChange = 1 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_02').click(function() {
				pagChange = 2 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_03').click(function() {
				pagChange = 3 ;
				ExitSelect() ;
			});
			
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/au_menu_marcas_bra.mp3' ;
			
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
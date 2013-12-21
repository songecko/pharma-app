<!--Language Selector-->
function educacionFarmaceutico_05()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_05' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_educacionFarmaceutico.png' onmouseover='rollOver_ico_04()' /></div>"+
		
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
	var educacionFarmaceutico_05_mexico =
		//Selecciona País
		"<div class='txt_Title' id='txt_Title'>Selecciona el brochure que <b>deseas consultar</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_06_01' onmouseover='rollOver_btn_06_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_Metamucil.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_06_02' onmouseover='rollOver_btn_06_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_Vicks.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_06_03'>"+
			//Image
			"<div class='me_Image' >"+
				"<img src='img/img_imageRol_001.png' id='roll_01'/>"+
			"</div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//04
		"<div class='menuElement' id='btn_06_04' >"+
			//Image
			"<div class='me_Image' >"+
				"<img src='img/img_imageRol_002.png' id='roll_02'/>"+
			"</div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//05
		"<div class='menuElement' id='btn_06_05' onmouseover='rollOver_btn_06_05()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_peptoBismol.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//06
		"<div class='menuElement' id='btn_06_06' onmouseover='rollOver_btn_06_06()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_clearBlue.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>145</div>"+

	"" ;
	
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_05_brasil =
		//Selecciona País
		"<div class='txt_Title' id='txt_Title'>Selecione a brochura que <b>deseja consultar</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_03_01' onmouseover='rollOver_btn_03_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_Metamucil.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_03_02' onmouseover='rollOver_btn_03_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_Vicks.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_03_03' onmouseover='rollOver_btn_03_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_Hipoglos.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>106</div>"+

	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_05_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
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
			function exit_educacionFarmaceutico_05_mex()
			{
				var txt_Title = document.getElementById("txt_Title") ;
			
				var btn_06_01 = document.getElementById("btn_06_01") ;
				var btn_06_02 = document.getElementById("btn_06_02") ;
				var btn_06_03 = document.getElementById("btn_06_03") ;
				var btn_06_04 = document.getElementById("btn_06_04") ;
				var btn_06_05 = document.getElementById("btn_06_05") ;
				var btn_06_06 = document.getElementById("btn_06_06") ;
					
				TweenMax.fromTo (txt_Title , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_06_01 , btn_06_02 , btn_06_03 , btn_06_04 , btn_06_05 , btn_06_06] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25 ) ;
				
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
							educacionFarmaceutico_04() ;
						break;
						
						case 1:
							educacionFarmaceutico_metamucil_01() ;
						break ;
						
						case 2:
							educacionFarmaceutico_vicks_01() ;
						break ;
						
						case 3:
							educacionFarmaceutico_peptoBismol_01() ;
						break ;
						
						case 4:
							educacionFarmaceutico_clearblue_01() ;
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
				exit_educacionFarmaceutico_05_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_05_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_05_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_05_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_05_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_05_mex() ;
			});
		
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_05_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_05_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_05_mex() ;
			});
			
				//01
			$('#btn_06_01').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_05_mex() ;
			});
			
				//02
			$('#btn_06_02').click(function() {
				pagChange = 2 ;
				exit_educacionFarmaceutico_05_mex() ;
			});
			
				//04
			$('#btn_06_05').click(function() {
				pagChange = 3 ;
				exit_educacionFarmaceutico_05_mex() ;
			});
			
				//05
			$('#btn_06_06').click(function() {
				pagChange = 4 ;
				exit_educacionFarmaceutico_05_mex() ;
			});

			//Additional Animations
			RollingImage_01() ;
			RollingImage_02() ;
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/EducacionFarmaceutico/au_educacionFamaceutico_mex05.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_05_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
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
			function exit_educacionFarmaceutico_05()
			{
				var txt_Title = document.getElementById("txt_Title") ;
			
				var btn_03_01 = document.getElementById("btn_03_01") ;
				var btn_03_02 = document.getElementById("btn_03_02") ;
				var btn_03_03 = document.getElementById("btn_03_03") ;
					
				TweenMax.fromTo (txt_Title , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_03_01 , btn_03_02 , btn_03_03], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25 ) ;
				
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
							educacionFarmaceutico_04() ;
						break;
						
						case 1:
							educacionFarmaceutico_metamucil_01() ;
						break ;
						
						case 2:
							educacionFarmaceutico_vicks_01() ;
						break ;
						
						case 3:
							educacionFarmaceutico_hipoglos_01() ;
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
				exit_educacionFarmaceutico_05() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_05() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_05() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_05() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_05() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_05() ;
			});
		
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_05() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_05() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_05() ;
			});
			
				//01
			$('#btn_03_01').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_05() ;
			});
			
				//02
			$('#btn_03_02').click(function() {
				pagChange = 2 ;
				exit_educacionFarmaceutico_05() ;
			});
			
				//03
			$('#btn_03_03').click(function() {
				pagChange = 3 ;
				exit_educacionFarmaceutico_05() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/EducacionFarmaceutico/au_educacionFarmaceutico_bra05.mp3' ;
			
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
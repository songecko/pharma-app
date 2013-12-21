<!--Menú Áreas-->
function menu_Areas()
{
	CleanScreen() ;
	
	gotoSlide = 'menu_Areas' ;
	
	/*****************************
	General Elements
	*****************************/
	var menuContent = 
		//Main Menu
		"<div class='shortCuts' id='ico_01'><img src='img/icons/ico_mainMenu.png' onmouseover='rollOver_ico_01()' /></div>"+
		
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
	/////////////////////////////////M{exico
	var menu_Areas_mexico =
		//Selecciona País
		"<div class='txt_Title' id='txt_Title'>Plataforma de Desarrollo de Negocios<br/><b>Personal Health Care</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_02_01' onmouseover='rollOver_btn_02_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_conocimientoDelNegocio.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//01
		"<div class='menuElement' id='btn_02_02' onmouseover='rollOver_btn_02_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_entrenamiento.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>001</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var menu_Areas_brasil =
		//Selecciona País
		"<div class='txt_Title' id='txt_Title'>Plataforma de Desenvolvimento do Negócio<br/><b>Personal Health Care</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_02_01' onmouseover='rollOver_btn_02_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_conocimientoDoNegocio.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//01
		"<div class='menuElement' id='btn_02_02' onmouseover='rollOver_btn_02_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_Treinamento.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+

		//Slide Number
		"<div class='slideNumber'>001</div>"+

	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + menu_Areas_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title = document.getElementById("txt_Title") ;
			
			var btn_02_01 = document.getElementById("btn_02_01") ;
			var btn_02_02 = document.getElementById("btn_02_02") ;
				
			TweenMax.fromTo (txt_Title , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_02_01 , btn_02_02], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_menuArea_mex()
			{
				var txt_Title = document.getElementById("txt_Title") ;
			
				var btn_02_01 = document.getElementById("btn_02_01") ;
				var btn_02_02 = document.getElementById("btn_02_02") ;
					
				TweenMax.fromTo (txt_Title , .75 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_02_01 , btn_02_02], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .25 ) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							//menu_Rol() ;
						break ;
						
						case 2:
							menu_Rol() ;
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
				exit_menuArea_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_menuArea_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_menuArea_mex() ;
			});
			
			/////////////////////////////////Button 01
			$('#btn_02_01').click(function() {
				pagChange = 1 ;
				//exit_menuArea() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_02_02').click(function() {
				pagChange = 2 ;
				exit_menuArea_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/au_menuArea_mex.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + menu_Areas_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title = document.getElementById("txt_Title") ;
			
			var btn_02_01 = document.getElementById("btn_02_01") ;
			var btn_02_02 = document.getElementById("btn_02_02") ;
				
			TweenMax.fromTo (txt_Title , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_02_01 , btn_02_02], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_menuArea()
			{
				var txt_Title = document.getElementById("txt_Title") ;
			
				var btn_02_01 = document.getElementById("btn_02_01") ;
				var btn_02_02 = document.getElementById("btn_02_02") ;
					
				TweenMax.fromTo (txt_Title , .75 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_02_01 , btn_02_02], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .25 ) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							//menu_Rol() ;
						break ;
						
						case 2:
							menu_Rol() ;
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
				exit_menuArea() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_menuArea() ;
			});
	
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_menuArea() ;
			});
			
			/////////////////////////////////Button 01
			$('#btn_02_01').click(function() {
				pagChange = 1 ;
				//exit_menuArea() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_02_02').click(function() {
				pagChange = 2 ;
				exit_menuArea() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/au_menuArea_bra.mp3' ;
			
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
		
		//LADMAR
		case 8:
		break ;
	}

	/**********************************************
	Background Image
	***********************************************/
	var backGradient = document.getElementById("backGradient");
	backGradient.src = 'img/img_back_parhamLatam.png' ;
}
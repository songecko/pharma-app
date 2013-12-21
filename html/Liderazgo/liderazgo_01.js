<!--Video Intro-->
function liderazgo_01()
{
	CleanScreen() ;
	gotoSlide = 'liderazgo_01' ;
	
	/*****************************
	Menu Content
	*****************************/
	var menuContent = 
		//Main Menu
		"<div class='shortCuts' id='ico_01'><img src='img/icons/ico_mainMenu.png' onmouseover='rollOver_ico_01()' /></div>"+
		
		//Menu Areas
		"<div class='shortCuts' id='ico_02'><img src='img/icons/ico_menu_Areas_01.png' onmouseover='rollOver_ico_02()' /></div>"+
		
		//Menu Rol
		"<div class='shortCuts' id='ico_03'><img src='img/icons/ico_menu_Rol_gerente.png' onmouseover='rollOver_ico_03()' /></div>"+

		//Menu Induccion
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_liderazgo.png' onmouseover='rollOver_ico_04()' /></div>"+
		
		//Menu Tecnicas de Ventas
		//"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_pasosVisita.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		//Menu pasos de la visita
		//"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_liderazgo_01.png' onmouseover='rollOver_ico_06()' /></div>"+
		
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
	/////////////////////////////////México
	var liderazgo_01_mexico =
		//Video
			//Container
		"<div class='videoContainer' id='videoContainer'>"+
		
			//Video Screen
			"<div class='videoScreen' id='videoScreen'><video controls='controls' autoplay='autoplay' id='vid_liderazgo_01' width='1090' height='614'></video></div>"+
			
			//Video Shadow
			"<div class='videoShadow' id='videoShadow'><img src='img/img_dobleShadow.png'></div>"+
			
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>242</div>"+
	
	"" ;
	
	/////////////////////////////////Brasil
	var liderazgo_01_brasil =	
		//Video
			//Container
		"<div class='videoContainer' id='videoContainer'>"+
		
			//Video Screen
			"<div class='videoScreen' id='videoScreen'><video controls='controls' autoplay='autoplay' id='vid_liderazgo_01' width='1090' height='614'></video></div>"+
			
			//Video Shadow
			"<div class='videoShadow' id='videoShadow'><img src='img/img_dobleShadow.png'></div>"+
			
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>188</div>"+
	
	"" ;
	
	/**********************************************
	Show/Hide Special Items
	***********************************************/
	document.getElementById("MenuCaller").style.display = 'inline' ;
	document.getElementById("AudioCall").style.display = 'inline' ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + liderazgo_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var vid_liderazgo_01 = document.getElementById("vid_liderazgo_01") ;
	
			var videoContainer = document.getElementById("videoContainer") ;
			
			TweenMax.fromTo(videoContainer , 1 , {css:{top:"800px" , height:"0px"}} , {css:{top:"160px" , height:"660px"} , onComplete:PlayVideo_mex}) ;
			
			function PlayVideo_mex()
			{
				vid_liderazgo_01.src = 'video/Liderazgo/vid_liderazgo_mex.mp4' ;
				vid_liderazgo_01.pause() ;
				
				if(vid_liderazgo_01.paused)
				{
					vid_liderazgo_01.play() ;
				}
			}
			
			/////////////////////////////////Exit Animation
			function exit_liderazgo_01_mex()
			{
				var vid_liderazgo_01 = document.getElementById("vid_liderazgo_01") ;
				vid_liderazgo_01.src = '' ;
				
				var videoContainer = document.getElementById("videoContainer") ;
			
				TweenMax.fromTo(videoContainer , 1 , {css:{height:"660px"}} , {css:{height:"0px"} , onComplete:ChangePage}) ;
			
				function ChangePage()
				{
					switch(pagChange)
					{						
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
							liderazgo_02() ;
						break;
					}
				}
				
				document.getElementById("auBackground").style.display = 'inline' ;
				if (( auFlagBack % 2 ) != 0)
				{
					bgAudio.play() ;
				}
				
				auLocucion.src = '' ;
				
				
			}
			
			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_liderazgo_01_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_01_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_01_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_01_mex() ;
			});
		
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_01_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_liderazgo_01_mex() ;
			});
			
			//Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				//liderazgo_01.src = '' ;
				exit_liderazgo_01_mex() ;
			}) ;
			
			
			//Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
		
				exit_liderazgo_01_mex() ;
			});
			
			//Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
		
				exit_liderazgo_01_mex() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/au_.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + liderazgo_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var vid_liderazgo_01 = document.getElementById("vid_liderazgo_01") ;
	
			var videoContainer = document.getElementById("videoContainer") ;
			
			TweenMax.fromTo(videoContainer , 1 , {css:{top:"800px" , height:"0px"}} , {css:{top:"160px" , height:"660px"} , onComplete:PlayVideo}) ;
			
			function PlayVideo()
			{
				vid_liderazgo_01.src = 'video/Liderazgo/vid_lideranca.mp4' ;
				vid_liderazgo_01.pause() ;
				
				if(vid_liderazgo_01.paused)
				{
					vid_liderazgo_01.play() ;
				}
			}
			
			/////////////////////////////////Exit Animation
			function exit_liderazgo_01()
			{
				var vid_liderazgo_01 = document.getElementById("vid_liderazgo_01") ;
				vid_liderazgo_01.src = '' ;
				
				var videoContainer = document.getElementById("videoContainer") ;
			
				TweenMax.fromTo(videoContainer , 1 , {css:{height:"660px"}} , {css:{height:"0px"} , onComplete:ChangePage}) ;
			
				function ChangePage()
				{
					switch(pagChange)
					{						
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
							liderazgo_02() ;
						break;
					}
				}
				
				
				document.getElementById("auBackground").style.display = 'inline' ;
				if (( auFlagBack % 2 ) != 0)
				{
					bgAudio.play() ;
				}
				
				auLocucion.src = '' ;
				
				
			}
			
			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_liderazgo_01() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_01() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_01() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_01() ;
			});
		
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_01() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_liderazgo_01() ;
			});
			
			//Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				//liderazgo_01.src = '' ;
				exit_liderazgo_01() ;
			}) ;
			
			
			//Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
		
				exit_liderazgo_01() ;
			});
			
			//Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
		
				exit_liderazgo_01() ;
			});
			
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/au_liderazgo_01.mp3' ;
			
			if (( auFlagLoc % 2 ) != 0)
			{
				auLocucion.play() ;
			}
		
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/au_.mp3' ;
			
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
	Audio Pause
	***********************************************/		
	document.getElementById("bgAudio").pause() ;
	document.getElementById("auBackground").style.display = 'none' ;
}
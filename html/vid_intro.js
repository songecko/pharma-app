<!--Video Intro-->
function vid_Intro()
{
	CleanScreen() ;
	gotoSlide = '' ;
	
	/*****************************
	General Elements
	*****************************/
	var menuContent = 
		//Main Menu
		"<ul>"+
			"<il id='ico_mainMenu'><img src='img/icons/ico_mainMenu.png' /></il>"+
		"</ul>"+
		
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
		"<div class='topMultipleLogos_noLanguage'><img src='img/img_logosFull.png' height='30'/></div>"+
		
		//Flechas anterior y siguiente
			//Anterior
		"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()' ><img src='img/img_flecha_back.png' /></div>"+
			//Siguiente
		"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
				
		//Slide Number
		"<div class='slideNumber'>002</div>"+
			
	"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////Video
	var videoIntro =
		//Video
			//Container
		"<div class='videoContainer' id='videoContainer'>"+
		
			//Video Screen
			"<div class='videoScreen' id='videoScreen'><video controls='controls' autoplay='autoplay' id='vid_Intro' width='1090' height='614'></video></div>"+
			
			//Video Shadow
			"<div class='videoShadow' id='videoShadow'><img src='img/img_dobleShadow.png'></div>"+
			
		"</div>"+
	
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
	document.getElementById("Container").innerHTML = generalElements + videoIntro ;

	/**********************************************
	Icons Over
	***********************************************/
	/////////////////////////////////Main Menu  
	$('#ico_mainMenu').mouseover(function()
	{
		var ico_mainMenu = document.getElementById("ico_mainMenu") ;
		TweenMax.fromTo( ico_mainMenu , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
	});
	
	/**********************************************
	Animations
	***********************************************/
	/////////////////////////////////Main Animation
	var vid_Intro = document.getElementById("vid_Intro") ;
	
	var videoContainer = document.getElementById("videoContainer") ;
	
	TweenMax.fromTo(videoContainer , 1 , {css:{top:"800px" , height:"0px"}} , {css:{top:"160px" , height:"660px"} , onComplete:PlayVideo}) ;
	
	function PlayVideo()
	{
		vid_Intro.src = 'video/intro.mp4' ;
		vid_Intro.pause() ;
		
		if(vid_Intro.paused)
		{
			vid_Intro.play() ;
		}
	}
	
	/////////////////////////////////Exit Animation
	
	function exit_videoIntro()
	{
		var vid_Intro = document.getElementById("vid_Intro") ;
		vid_Intro.src = '' ;
		
		var videoContainer = document.getElementById("videoContainer") ;
	
		TweenMax.fromTo(videoContainer , 1 , {css:{height:"660px"}} , {css:{height:"0px"} , onComplete:changePage}) ;
	
		function changePage()
		{
			switch(pagChange)
			{
				case 1:
					CoverSheet() ;
				break ;
				
				case 2:
					languageSelector() ;
				break ;
			}
		}
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
	
	/**********************************************
	Button Actions
	***********************************************/
	//Flecha Back
	$('#flechaBack').click(function() {
		pagChange = 1 ;
		//vid_Intro.src = '' ;
		exit_videoIntro() ;
	}) ;
	
	//Flecha Next
	$('#flechaNext').click(function() {
		pagChange = 2 ;

		//vid_Intro.src = '' ;
		exit_videoIntro() ;
	});
}
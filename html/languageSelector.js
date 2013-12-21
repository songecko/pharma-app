<!--Language Selector-->
function languageSelector()
{
	CleanScreen() ;
	
	/*****************************
	General Elements
	*****************************/
	var menuContent = 

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
		//"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()' ><img src='img/img_flecha_back.png' /></div>"+
			//Siguiente
		//"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
				
		//Slide Number
		"<div class='slideNumber'>002</div>"+
			
	"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////Video
	var languageSelector =
		//Selecciona País
		"<div class='txt_SeleccionaPais' id='txt_SeleccionaPais'>Selecciona tu país | Escolha seu país </div>"+
		
		//Language Wave
		"<div class='languageWave' id='languageWave'><img src='img/LanguageSelector/img_languageWave.png'></div>"+
		
		//Language Map
		"<div class='languageMap' id='languageMap'><img src='img/LanguageSelector/img_worldMap_full.png'></div>"+
		
		//Flag Selector
			//México
		"<div class='selector_Mexico' id='selector_Mexico'><img src='img/LanguageSelector/img_flag_selector_Mexico.png' height='75'></div>"+
		
			//Venezuela
		"<div class='selector_Venezuela' id='selector_Venezuela'><img src='img/LanguageSelector/img_flag_selector_Venezuela.png' height='75'></div>"+
		
			//Colombia
		"<div class='selector_Colombia' id='selector_Colombia'><img src='img/LanguageSelector/img_flag_selector_Colombia.png' height='75'></div>"+
		
			//Peru
		"<div class='selector_Peru' id='selector_Peru'><img src='img/LanguageSelector/img_flag_selector_Peru.png' height='75'></div>"+
		
			//Brasil
		"<div class='selector_Brasil' id='selector_Brasil'><img src='img/LanguageSelector/img_flag_selector_Brasil.png' height='75'></div>"+
		
			//Chile
		"<div class='selector_Chile' id='selector_Chile'><img src='img/LanguageSelector/img_flag_selector_Chile.png' height='75'></div>"+
		
			//Argentina
		"<div class='selector_Argentina' id='selector_Argentina'><img src='img/LanguageSelector/img_flag_selector_Argentina.png' height='75'></div>"+
		
			//LADMAR
		"<div class='selector_Ladmar' id='selector_Ladmar'><img src='img/LanguageSelector/img_flag_selector_Ladmar.png' height='75'></div>"+
	
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
	document.getElementById("Container").innerHTML = generalElements + languageSelector ;
	
	/**********************************************
	Locution Load
	***********************************************/
	var auLocucion = document.getElementById("auLocucion") ;
	
	auLocucion.src = 'audio/au_seleccionarPais.mp3' ;
	
	if (( auFlagLoc % 2 ) != 0)
	{
		auLocucion.play() ;
	}

	/**********************************************
	Flags
	***********************************************/
	/////////////////////////////////México
		//Click
	$('#selector_Mexico').click(function()
	{
		languageCountry = 1 ;
		exit_languageSelector() ;
	});
	
		//Over
	$('#selector_Mexico').mouseover(function()
	{
		var selector_Mexico = document.getElementById("selector_Mexico") ;
		TweenMax.to( selector_Mexico , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(2,2)" , zIndex:"10"} , ease:Elastic.easeOut});
	});
	
		//Out
	$('#selector_Mexico').mouseout(function()
	{
		var selector_Mexico = document.getElementById("selector_Mexico") ;
		TweenMax.to( selector_Mexico , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(1,1)" , zIndex:"4"} , ease:Elastic.easeOut});
	});
	
	/////////////////////////////////Venezuela
		//Click
	$('#selector_Venezuela').click(function()
	{
		languageCountry = 2 ;
		//exit_languageSelector() ;
	});
	
		//Over
	$('#selector_Venezuela').mouseover(function()
	{
		var selector_Venezuela = document.getElementById("selector_Venezuela") ;
		TweenMax.to( selector_Venezuela , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(2,2)" , zIndex:"10"} , ease:Elastic.easeOut});
	});
	
		//Out
	$('#selector_Venezuela').mouseout(function()
	{
		var selector_Venezuela = document.getElementById("selector_Venezuela") ;
		TweenMax.to( selector_Venezuela , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(1,1)" , zIndex:"4"} , ease:Elastic.easeOut});
	});

	/////////////////////////////////Colombia
		//Click
	$('#selector_Colombia').click(function()
	{
		languageCountry = 3 ;
		//exit_languageSelector() ;
	});
	
		//Over
	$('#selector_Colombia').mouseover(function()
	{
		var selector_Colombia = document.getElementById("selector_Colombia") ;
		TweenMax.to( selector_Colombia , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(2,2)" , zIndex:"10"} , ease:Elastic.easeOut});
	});
	
		//Out
	$('#selector_Colombia').mouseout(function()
	{
		var selector_Colombia = document.getElementById("selector_Colombia") ;
		TweenMax.to( selector_Colombia , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(1,1)" , zIndex:"4"} , ease:Elastic.easeOut});
	});

	/////////////////////////////////Peru
		//Click
	$('#selector_Peru').click(function()
	{
		languageCountry = 4 ;
		//exit_languageSelector() ;
	});
	
		//Over
	$('#selector_Peru').mouseover(function()
	{
		var selector_Peru = document.getElementById("selector_Peru") ;
		TweenMax.to( selector_Peru , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(2,2)" , zIndex:"10"} , ease:Elastic.easeOut});
	});
	
		//Out
	$('#selector_Peru').mouseout(function()
	{
		var selector_Peru = document.getElementById("selector_Peru") ;
		TweenMax.to( selector_Peru , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(1,1)" , zIndex:"4"} , ease:Elastic.easeOut});
	});
	
	/////////////////////////////////Brasil
		//Click
	$('#selector_Brasil').click(function()
	{
		languageCountry = 5 ;
		exit_languageSelector() ;
	});
	
		//Over
	$('#selector_Brasil').mouseover(function()
	{
		var selector_Brasil = document.getElementById("selector_Brasil") ;
		TweenMax.to( selector_Brasil , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(2,2)" , zIndex:"10"} , ease:Elastic.easeOut});
	});
	
		//Out
	$('#selector_Brasil').mouseout(function()
	{
		var selector_Brasil = document.getElementById("selector_Brasil") ;
		TweenMax.to( selector_Brasil , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(1,1)" , zIndex:"4"} , ease:Elastic.easeOut});
	});
	
	/////////////////////////////////Chile
		//Click
	$('#selector_Chile').click(function()
	{
		languageCountry = 6 ;
		//exit_languageSelector() ;
	});
	
		//Over
	$('#selector_Chile').mouseover(function()
	{
		var selector_Chile = document.getElementById("selector_Chile") ;
		TweenMax.to( selector_Chile , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(2,2)" , zIndex:"10"} , ease:Elastic.easeOut});
	});
	
		//Out
	$('#selector_Chile').mouseout(function()
	{
		var selector_Chile = document.getElementById("selector_Chile") ;
		TweenMax.to( selector_Chile , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(1,1)" , zIndex:"4"} , ease:Elastic.easeOut});
	});
	
	/////////////////////////////////Argentina
		//Click
	$('#selector_Argentina').click(function()
	{
		languageCountry = 7 ;
		//exit_languageSelector() ;
	});
	
		//Over
	$('#selector_Argentina').mouseover(function()
	{
		var selector_Argentina = document.getElementById("selector_Argentina") ;
		TweenMax.to( selector_Argentina , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(2,2)" , zIndex:"10"} , ease:Elastic.easeOut});
	});
	
		//Out
	$('#selector_Argentina').mouseout(function()
	{
		var selector_Argentina = document.getElementById("selector_Argentina") ;
		TweenMax.to( selector_Argentina , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(1,1)" , zIndex:"4"} , ease:Elastic.easeOut});
	});
	
	/////////////////////////////////LADMAR
		//Click
	$('#selector_Ladmar').click(function()
	{
		languageCountry = 8 ;
		//exit_languageSelector() ;
	});
	
		//Over
	$('#selector_Ladmar').mouseover(function()
	{
		var selector_Ladmar = document.getElementById("selector_Ladmar") ;
		TweenMax.to( selector_Ladmar , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(2,2)" , zIndex:"10"} , ease:Elastic.easeOut});
	});
	
		//Out
	$('#selector_Ladmar').mouseout(function()
	{
		var selector_Ladmar = document.getElementById("selector_Ladmar") ;
		TweenMax.to( selector_Ladmar , 1 , {css:{transformOrigin:"bottom center" , transform:"scale(1,1)" , zIndex:"4"} , ease:Elastic.easeOut});
	});

	/**********************************************
	Animations
	***********************************************/
	/////////////////////////////////Main Animation
	var txt_SeleccionaPais = document.getElementById("txt_SeleccionaPais") ;
	
	var languageWave = document.getElementById("languageWave") ;
	var languageMap = document.getElementById("languageMap") ;
	
	var selector_Mexico = document.getElementById("selector_Mexico") ;
	var selector_Venezuela = document.getElementById("selector_Venezuela") ;
	var selector_Colombia = document.getElementById("selector_Colombia") ;
	var selector_Peru = document.getElementById("selector_Peru") ;
	var selector_Brasil = document.getElementById("selector_Brasil") ;
	var selector_Chile = document.getElementById("selector_Chile") ;
	var selector_Argentina = document.getElementById("selector_Argentina") ;
	
	TweenMax.fromTo (languageWave , 1 , {css:{width:"0px"}} , {css:{width:"1280px"}}) ;
	
	TweenMax.fromTo (languageMap , 1 , {css:{opacity:"0" , transform:"scale(.5,.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.5} ) ;
	
	TweenMax.fromTo (selector_Mexico , .25 , {css:{opacity:"0" , top:"0px"}} , {css:{opacity:"1" , top:"300px"} , delay:1}) ;
	TweenMax.fromTo (selector_Venezuela , .25 , {css:{opacity:"0" , top:"0px"}} , {css:{opacity:"1" , top:"400px"} , delay:1.1}) ;
	TweenMax.fromTo (selector_Colombia , .25 , {css:{opacity:"0" , top:"0px"}} , {css:{opacity:"1" , top:"420px"} , delay:1.2}) ;
	TweenMax.fromTo (selector_Peru , .25 , {css:{opacity:"0" , top:"0px"}} , {css:{opacity:"1" , top:"475px"} , delay:1.3}) ;
	TweenMax.fromTo (selector_Brasil , .25 , {css:{opacity:"0" , top:"0px"}} , {css:{opacity:"1" , top:"500px"} , delay:1.4}) ;
	TweenMax.fromTo (selector_Chile , .25 , {css:{opacity:"0" , top:"0px"}} , {css:{opacity:"1" , top:"525px"} , delay:1.5}) ;
	TweenMax.fromTo (selector_Argentina , .25 , {css:{opacity:"0" , top:"0px"}} , {css:{opacity:"1" , top:"625px"} , delay:1.6}) ;
	TweenMax.fromTo (selector_Ladmar , .25 , {css:{opacity:"0" , top:"0px"}} , {css:{opacity:"1" , top:"375px"} , delay:1.6}) ;
	
	TweenMax.fromTo (txt_SeleccionaPais , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:1.5 }) ;

	/////////////////////////////////Exit Animation
	function exit_languageSelector()
	{
		var txt_SeleccionaPais = document.getElementById("txt_SeleccionaPais") ;
	
		var languageWave = document.getElementById("languageWave") ;
		var languageMap = document.getElementById("languageMap") ;
		
		var selector_Mexico = document.getElementById("selector_Mexico") ;
		var selector_Venezuela = document.getElementById("selector_Venezuela") ;
		var selector_Colombia = document.getElementById("selector_Colombia") ;
		var selector_Peru = document.getElementById("selector_Peru") ;
		var selector_Brasil = document.getElementById("selector_Brasil") ;
		var selector_Chile = document.getElementById("selector_Chile") ;
		var selector_Argentina = document.getElementById("selector_Argentina") ;
		
		TweenMax.fromTo (languageWave , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
		
		TweenMax.fromTo (languageMap , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(3,3)"} , onComplete:changePage} ) ;
		
		TweenMax.fromTo (selector_Mexico , .25 , {css:{opacity:"1" , top:"300px"}} , {css:{opacity:"0" , top:"500px"}}) ;
		TweenMax.fromTo (selector_Venezuela , .5 , {css:{opacity:"1" , top:"400px"}} , {css:{opacity:"0" , top:"400px"}}) ;
		TweenMax.fromTo (selector_Colombia , .25 , {css:{opacity:"1" , top:"420px"}} , {css:{opacity:"0" , top:"720px"}}) ;
		TweenMax.fromTo (selector_Peru , 1 , {css:{opacity:"1" , top:"475px"}} , {css:{opacity:"0" , top:"75px"}}) ;
		TweenMax.fromTo (selector_Brasil , .5 , {css:{opacity:"1" , top:"500px"}} , {css:{opacity:"0" , top:"120px"}}) ;
		TweenMax.fromTo (selector_Chile , .5 , {css:{opacity:"1" , top:"525px"}} , {css:{opacity:"0" , top:"55px"}}) ;
		TweenMax.fromTo (selector_Argentina , .25 , {css:{opacity:"1" , top:"625px"}} , {css:{opacity:"0" , top:"325px"}}) ;
		TweenMax.fromTo (selector_Ladmar , .25 , {css:{opacity:"1" , top:"375px"}} , {css:{opacity:"0" , top:"25px"}}) ;
		
		auLocucion.src = '' ;
		
		function changePage()
		{
			if(gotoSlide != '')
			{
				window[gotoSlide]() ;
			}else
			{
				menu_Areas() ;
			}
			
		}
	}
	
	/**********************************************
	Background Image
	***********************************************/
	var backGradient = document.getElementById("backGradient");
	backGradient.src = 'img/img_back_parhamLatam.png' ;
}
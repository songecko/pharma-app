<!--CoverSheet-->
function CoverSheet(){
	
	CleanScreen() ;
	
	gotoSlide = '' ;
	
	/*****************************
	General Elements
	*****************************/
	var menuContent = 
		
	"" ;
	
	//Contenido
	var Coversheet =
		//Pharma Girl
		"<div class='pharmaGirl' id='pharmaGirl'><img src='img/Coversheet/img_pharmaGirl.png' /></div>"+
		
		//Pharma icon
		"<div class='pharmaIcon' id='pharmaIcon'><img src='img/img_iconPharma.png' /></div>"+
		
		//Pharma Text
		"<div class='pharmaText' id='pharmaText'><img src='img/img_txtPharma.png' /></div>"+
		
		//Logos
			//Metamucil
		"<div class='cover_logoVicks' id='cover_logoVicks'><img src='img/img_logoAlone_vicks.png' height='35' /></div>"+
			//Vicks
		"<div class='cover_logoMetamucil' id='cover_logoMetamucil'><img src='img/CoverSheet/img_logoAlone_metamucil.png' height='35' /></div>"+
			//Hipoglos
		"<div class='cover_logoHipoglos' id='cover_logoHipoglos'><img src='img/CoverSheet/img_logoAlone_hipoglos.png' height='35' /></div>"+
			//Pepto-Bismo
		"<div class='cover_logoPeptoBismol' id='cover_logoPeptoBismol'><img src='img/CoverSheet/img_logoAlone_peptoBismol.png' height='35' /></div>"+
			//Clearblue
		"<div class='cover_logoClearblue' id='cover_logoClearblue'><img src='img/CoverSheet/img_logoAlone_clearblue.png' height='35' /></div>"+
		
		//Plataforma de desarrollo
		"<div class='plataforma_txt' id='plataforma_txt'>Plataforma de Desarrollo del Negocio<br/>Plataforma de Desenvolvimento do Negócio</div>"+
		
		//Button Iniciar
		"<div class='btnIniciar' id='btnIniciar' onmouseover='rollOver_Iniciar()'><img src='img/Coversheet/btn_Iniciar.png' /></div>"+
		
		//Welcome
		"<div class='txtWelcome' id='txtWelcome'>Bienvenido | Bem-vindo</div>"+
		
		//P&G
		"<div class='logoPyG' id='logoPyG'><img src='img/img_logoAlone_PyG.png' height='20' /></div>"+
		
		//Slide Number
		"<div class='slideNumber' id='slideNumber'>001</div>"+
		
	"" ;
	
	/**********************************************
	Adding content to display
	***********************************************/	
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	document.getElementById('Container').innerHTML = Coversheet + menuContent ;
	
	/**********************************************
	Show/Hide Special Items
	***********************************************/
	document.getElementById("MenuCaller").style.display = 'none' ;
	document.getElementById("AudioCall").style.display = 'none' ;
	
	/**********************************************
	Button Actions
	***********************************************/
	/*Iniciar*/
	$('#btnIniciar').click(function() {
		auLocucion.src = '' ;
		
		TweenMax.killTweensOf([pharmaGirl , pharmaIcon , pharmaText , cover_logoMetamucil , cover_logoVicks , cover_logoPeptoBismol , cover_logoClearblue , cover_logoHipoglos , txtWelcome , btnIniciar , logoPyG , plataforma_txt]);
		Iniciar() ;
	}) ;

	/**********************************************
	Animations
	***********************************************/
	//Main Animation
	var pharmaGirl = document.getElementById("pharmaGirl") ;
	
	var pharmaIcon = document.getElementById("pharmaIcon") ;
	var pharmaText = document.getElementById("pharmaText") ;
	
	var cover_logoMetamucil = document.getElementById("cover_logoMetamucil") ;
	var cover_logoVicks = document.getElementById("cover_logoVicks");
	var cover_logoPeptoBismol = document.getElementById("cover_logoPeptoBismol") ;
	var cover_logoClearblue = document.getElementById("cover_logoClearblue") ;
	var cover_logoHipoglos = document.getElementById("cover_logoHipoglos") ;
	
	var btnIniciar = document.getElementById("btnIniciar") ;
	
	var txtWelcome = document.getElementById("txtWelcome") ;
	
	var logoPyG = document.getElementById("logoPyG") ;
	
	var plataforma_txt = document.getElementById("plataforma_txt") ;
	
	TweenMax.fromTo (pharmaGirl , .5 , {css:{opacity:"0" , left:"-100px"}} , {css:{opacity:"1" , left:"25px"} , ease:Power2.easeOut}) ;
	
	TweenMax.fromTo (pharmaIcon , .5 , {css:{opacity:"0" , top:"100px" , transform:"scale(1,1"}} , {css:{opacity:"1" , top:"200px" , transform:"scale(2,2"} , delay:.5 , ease:Power2.easeOut}) ;
	TweenMax.fromTo (pharmaIcon , .5 , {css:{top:"200px" , transform:"scale(2,2"}} , {css:{top:"50px" , transform:"scale(1,1"} , delay:2 , ease:Power2.easeOut}) ;
	
	TweenMax.fromTo (pharmaText , .5 , {css:{opacity:"0" , left:"900px"}} , {css:{opacity:"1" , left:"835px"} , delay:2 , ease:Power2.easeOut}) ;
	
	TweenMax.staggerFromTo ([cover_logoVicks , cover_logoMetamucil , cover_logoHipoglos , cover_logoPeptoBismol , cover_logoClearblue] , .25 , {css:{opacity:"0" , top:"300px"}  } , {css:{opacity:"1", top:"225px"} , delay:2.5} , 0.15) ;
	
	TweenMax.fromTo (txtWelcome , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:2.5 , ease:Power2.easeOut}) ;
	TweenMax.fromTo (plataforma_txt , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:3 , ease:Power2.easeOut}) ;
	
	TweenMax.fromTo (btnIniciar , 1 , {css:{opacity:"0" , transform:"scale(2,2"}} , {css:{opacity:"1" , transform:"scale(1,1"} , delay:3 , ease:Elastic.easeOut}) ;

	TweenMax.fromTo (logoPyG , .25 , {css:{opacity:"0"}  } , {css:{opacity:"1"} , delay:3.5}) ;
	
	/**********************************************
	Background Image
	***********************************************/
	var backGradient = document.getElementById("backGradient");
	backGradient.src = 'img/img_back_parhamLatam.png' ;
	
	/**********************************************
	Locution Load
	***********************************************/
	var auLocucion = document.getElementById("auLocucion") ;
	
	auLocucion.src = 'audio/au_bienvenido.mp3' ;
	
	if (( auFlagLoc % 2 ) != 0)
	{
		auLocucion.play() ;
	}
	
	//Botón Iniciar
	function Iniciar()
	{				
		var pharmaGirl = document.getElementById("pharmaGirl") ;
		
		var pharmaIcon = document.getElementById("pharmaIcon") ;
		var pharmaText = document.getElementById("pharmaText") ;
		
		var cover_logoMetamucil = document.getElementById("cover_logoMetamucil") ;
		var cover_logoVicks = document.getElementById("cover_logoVicks");
		var cover_logoPeptoBismol = document.getElementById("cover_logoPeptoBismol") ;
		var cover_logoClearblue = document.getElementById("cover_logoClearblue") ;
		var cover_logoHipoglos = document.getElementById("cover_logoHipoglos") ;
		
		var btnIniciar = document.getElementById("btnIniciar") ;
		
		var txtWelcome = document.getElementById("txtWelcome") ;
		
		var logoPyG = document.getElementById("logoPyG");
		
		TweenMax.fromTo (pharmaGirl , 1.5 , {css:{opacity:"1" , left:"25px"}} , {css:{opacity:"0" , left:"250px"} , ease:Power2.easeOut , onComplete:ChangePage}) ;
	
		TweenMax.fromTo (pharmaIcon , 1 , {css:{opacity:"1" , top:"100px" , transform:"scale(1,1"}} , {css:{opacity:"0" , transform:"scale(3,3"} , ease:Power2.easeOut}) ;
		
		TweenMax.fromTo (pharmaText , .5 , {css:{opacity:"1" , left:"835px"}} , {css:{opacity:"0" , left:"935px"} , ease:Power2.easeOut}) ;
		
		TweenMax.staggerFromTo ([cover_logoVicks , cover_logoMetamucil , cover_logoHipoglos , cover_logoPeptoBismol ,  cover_logoClearblue] , 1 , {css:{opacity:"1", top:"225px"}  } , {css:{opacity:"0", top:"475px"}} , 0.15) ;
		
		TweenMax.fromTo (txtWelcome , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
		
		TweenMax.fromTo (plataforma_txt , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2"} , ease:Power2.easeOut}) ;
		
		TweenMax.fromTo (btnIniciar , .5 , {css:{opacity:"1" , transform:"scale(1,1"}} , {css:{opacity:"0" , transform:"scale(.25,.25"} , ease:Elastic.easeOut}) ;
		
		TweenMax.fromTo (logoPyG , 1 , {css:{opacity:"1"}  } , {css:{opacity:"0"}}) ;
		
		auLocucion.src = '' ;
		
		function ChangePage()
		{
			languageSelector() ;
		}
	}
}
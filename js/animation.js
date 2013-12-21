// JavaScript Document
/**********************************************
General Animations
***********************************************/
//Limpiar
function CleanScreen()
{
	var myClean = "" ;
	
	document.getElementById('Container').innerHTML = myClean ;
}

//Fullscreen
function FullScreen() {
	var wscript = new ActiveXObject("WScript.Shell");
	if (wscript !== null) {
		wscript.SendKeys("{F11}");
	}
}

/**********************************************
Menu
***********************************************/
//Call Menu
	//Click
function menuClick()
{
	var MenuCaller = document.getElementById("MenuCaller");
	var contextualMenu = document.getElementById("contextualMenu") ;
	
	if( (flag_ContextMenu%2) == 0)
	{
		TweenMax.fromTo ( MenuCaller , 1 , {css:{left:"10px" , transform:"scale(1,1)"}} , {css:{left:"50px" , transform:"scale(.75,.75)"}}) ;
		TweenMax.fromTo ( MenuCaller , 1 , {rotationZ:0 , tranasformOrigin:"bottom left"} , {rotationZ:180}) ;
		
		TweenMax.fromTo ( contextualMenu , 1 , {css:{bottom:"-100px"}} , {css:{bottom:"5px"}}) ;
		
	}else
	{
		TweenMax.fromTo ( MenuCaller , 1 , {css:{left:"50px" , transform:"scale(.75,.75)"}} , {css:{left:"10px" , transform:"scale(1,1)"}}) ;
		TweenMax.fromTo ( MenuCaller , 1 , {rotationZ:180 , tranasformOrigin:"bottom left"} , {rotationZ:0}) ;
		
		TweenMax.fromTo ( contextualMenu , 1 , {css:{bottom:"5px"}} , {css:{bottom:"-100px"}}) ;
	}
	
	flag_ContextMenu++ ;
}

	//RollOver
function menuRollOver()
{
	if( (flag_ContextMenu%2) == 0)
	{
		var MenuCaller = document.getElementById("MenuCaller") ;
		TweenMax.fromTo( MenuCaller , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"}});
	}else
	{
		var MenuCaller = document.getElementById("MenuCaller") ;
		TweenMax.fromTo( MenuCaller , 1 , {css:{transform:"scale(.5,.5)"} , ease:Elastic.easeOut} , {css:{transform:"scale(.75,.75)"}});
	}
}

/**********************************************
Audio
***********************************************/
//Call Audio
	//Click
function audioClick()
{
	audioCalling++ ;
	
	var backgroundAudio = document.getElementById("backgroundAudio") ;
	var locutionAudio = document.getElementById("locutionAudio") ;
	
	if((audioCalling%2) != 0)
	{
		TweenMax.staggerFromTo( [backgroundAudio , locutionAudio], .5 , {css:{bottom:"-100px"}} , {css:{bottom:"17px"}} , .15);
	}else
	{
		TweenMax.staggerFromTo( [locutionAudio , backgroundAudio], .5 , {css:{bottom:"17px"}} , {css:{bottom:"-100px"}} , .15);
	}
}

	//RollOver
function audioRollOver()
{
	var AudioCall = document.getElementById("AudioCall") ;
	TweenMax.fromTo( AudioCall , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

//Audios
	//Background RollOver
function backgroundRollOver()
{
	var backgroundAudio = document.getElementById("backgroundAudio") ;
	TweenMax.fromTo( backgroundAudio , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//Locution RollOver
function locutionRollOver()
{
	var locutionAudio = document.getElementById("locutionAudio") ;
	TweenMax.fromTo( locutionAudio , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

/**********************************************
Flechas
***********************************************/
//Back
	//RollOver
function rollOver_flechaNext() {
	var flechaNext = document.getElementById("flechaNext") ;
	TweenMax.fromTo( flechaNext , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

//Next
	//RollOver
function rollOver_flechaBack() {
	var flechaBack = document.getElementById("flechaBack") ;
	TweenMax.fromTo( flechaBack , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

/**********************************************
Menu Buttons
***********************************************/
//Two buttons menu
	//01
function rollOver_btn_02_01()
{
	var btn_02_01 = document.getElementById("btn_02_01") ;
	TweenMax.fromTo( btn_02_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//02
function rollOver_btn_02_02()
{
	var btn_02_02 = document.getElementById("btn_02_02") ;
	TweenMax.fromTo( btn_02_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

//Three buttons menu
	//01
function rollOver_btn_03_01()
{
	var btn_03_01 = document.getElementById("btn_03_01") ;
	TweenMax.fromTo( btn_03_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//02
function rollOver_btn_03_02()
{
	var btn_03_02 = document.getElementById("btn_03_02") ;
	TweenMax.fromTo( btn_03_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//03
function rollOver_btn_03_03()
{
	var btn_03_03 = document.getElementById("btn_03_03") ;
	TweenMax.fromTo( btn_03_03 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}


//Four buttons top menu
	//01
function rollOver_btn_04_01()
{
	var btn_04_01 = document.getElementById("btn_04_01") ;
	TweenMax.fromTo( btn_04_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//02
function rollOver_btn_04_02()
{
	var btn_04_02 = document.getElementById("btn_04_02") ;
	TweenMax.fromTo( btn_04_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//03
function rollOver_btn_04_03()
{
	var btn_04_03 = document.getElementById("btn_04_03") ;
	TweenMax.fromTo( btn_04_03 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//04
function rollOver_btn_04_04()
{
	var btn_04_04 = document.getElementById("btn_04_04") ;
	TweenMax.fromTo( btn_04_04 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}


//Six buttons menu
	//01
function rollOver_btn_06_01()
{
	var btn_06_01 = document.getElementById("btn_06_01") ;
	TweenMax.fromTo( btn_06_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//02
function rollOver_btn_06_02()
{
	var btn_06_02 = document.getElementById("btn_06_02") ;
	TweenMax.fromTo( btn_06_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//03
function rollOver_btn_06_03()
{
	var btn_06_03 = document.getElementById("btn_06_03") ;
	TweenMax.fromTo( btn_06_03 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//04
function rollOver_btn_06_04()
{
	var btn_06_04 = document.getElementById("btn_06_04") ;
	TweenMax.fromTo( btn_06_04 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//05
function rollOver_btn_06_05()
{
	var btn_06_05 = document.getElementById("btn_06_05") ;
	TweenMax.fromTo( btn_06_05 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//06
function rollOver_btn_06_06()
{
	var btn_06_06 = document.getElementById("btn_06_06") ;
	TweenMax.fromTo( btn_06_06 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

//Eight buttons menu
	//01
function rollOver_btn_08_01()
{
	var btn_08_01 = document.getElementById("btn_08_01") ;
	TweenMax.fromTo( btn_08_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//02
function rollOver_btn_08_02()
{
	var btn_08_02 = document.getElementById("btn_08_02") ;
	TweenMax.fromTo( btn_08_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//03
function rollOver_btn_08_03()
{
	var btn_08_03 = document.getElementById("btn_08_03") ;
	TweenMax.fromTo( btn_08_03 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//04
function rollOver_btn_08_04()
{
	var btn_08_04 = document.getElementById("btn_08_04") ;
	TweenMax.fromTo( btn_08_04 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//05
function rollOver_btn_08_05()
{
	var btn_08_05 = document.getElementById("btn_08_05") ;
	TweenMax.fromTo( btn_08_05 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//06
function rollOver_btn_08_06()
{
	var btn_08_06 = document.getElementById("btn_08_06") ;
	TweenMax.fromTo( btn_08_06 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//07
function rollOver_btn_08_07()
{
	var btn_08_07 = document.getElementById("btn_08_07") ;
	TweenMax.fromTo( btn_08_07 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//08
function rollOver_btn_08_08()
{
	var btn_08_08 = document.getElementById("btn_08_08") ;
	TweenMax.fromTo( btn_08_08 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

//Button Download
function rollOver_Download()
{
	var btn_Download = document.getElementById("btn_Download") ;
	TweenMax.fromTo( btn_Download , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

//Button Página Objetivos
function rollOver_PaginaObjetivos()
{
	var btn_PaginaObjetivos = document.getElementById("btn_PaginaObjetivos") ;
	TweenMax.fromTo( btn_PaginaObjetivos , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

//Pyramid Buttons
	//01
function rollOver_menu_pyramid_01()
{
	var menu_pyramid_01 = document.getElementById("menu_pyramid_01") ;
	TweenMax.fromTo( menu_pyramid_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//02
function rollOver_menu_pyramid_02()
{
	var menu_pyramid_02 = document.getElementById("menu_pyramid_02") ;
	TweenMax.fromTo( menu_pyramid_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//03
function rollOver_menu_pyramid_03()
{
	var menu_pyramid_03 = document.getElementById("menu_pyramid_03") ;
	TweenMax.fromTo( menu_pyramid_03 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}



//Pyramid Buttons 04
	//01
function rollOver_menu_pyramid_04_01()
{
	var menu_pyramid_04_01 = document.getElementById("menu_pyramid_04_01") ;
	TweenMax.fromTo( menu_pyramid_04_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//02
function rollOver_menu_pyramid_04_02()
{
	var menu_pyramid_04_02 = document.getElementById("menu_pyramid_04_02") ;
	TweenMax.fromTo( menu_pyramid_04_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//03
function rollOver_menu_pyramid_04_03()
{
	var menu_pyramid_04_03 = document.getElementById("menu_pyramid_04_03") ;
	TweenMax.fromTo( menu_pyramid_04_03 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//04
function rollOver_menu_pyramid_04_04()
{
	var menu_pyramid_04_04 = document.getElementById("menu_pyramid_04_04") ;
	TweenMax.fromTo( menu_pyramid_04_04 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	//More/Less Info
function rollOver_moreLess_info()
{
	var moreLess_info = document.getElementById("moreLess_info") ;
	TweenMax.fromTo( moreLess_info , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

/**********************************************
Actual language
***********************************************/
//Main Menu
function rollOver_worlMap_icon()
{
	var worlMap_icon = document.getElementById("worlMap_icon") ;
	TweenMax.fromTo( worlMap_icon , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

/**********************************************
Icons RollOver
***********************************************/
	/*01*/
function rollOver_merch_btn_01()
{
	var merch_btn_01 = document.getElementById("merch_btn_01") ;
	TweenMax.fromTo( merch_btn_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*02*/
function rollOver_merch_btn_02()
{
	var merch_btn_02 = document.getElementById("merch_btn_02") ;
	TweenMax.fromTo( merch_btn_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*03*/
function rollOver_merch_btn_03()
{
	var merch_btn_03 = document.getElementById("merch_btn_03") ;
	TweenMax.fromTo( merch_btn_03 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}




/**********************************************
Icons RollOver
***********************************************/
	/*01*/
function rollOver_ico_01()
{
	var ico_01 = document.getElementById("ico_01") ;
	TweenMax.fromTo( ico_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*02*/
function rollOver_ico_02()
{
	var ico_02 = document.getElementById("ico_02") ;
	TweenMax.fromTo( ico_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*03*/
function rollOver_ico_03()
{
	var ico_03 = document.getElementById("ico_03") ;
	TweenMax.fromTo( ico_03 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*04*/
function rollOver_ico_04()
{
	var ico_04 = document.getElementById("ico_04") ;
	TweenMax.fromTo( ico_04 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*05*/
function rollOver_ico_05()
{
	var ico_05 = document.getElementById("ico_05") ;
	TweenMax.fromTo( ico_05 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*06*/
function rollOver_ico_06()
{
	var ico_06 = document.getElementById("ico_06") ;
	TweenMax.fromTo( ico_06 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*07*/
function rollOver_ico_07()
{
	var ico_07 = document.getElementById("ico_07") ;
	TweenMax.fromTo( ico_07 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

//Iniciar
function rollOver_Iniciar()
{
	var btnIniciar = document.getElementById("btnIniciar") ;
	TweenMax.fromTo( btnIniciar , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

//Main Menu
function rollOver_MainMenu()
{
	var ico_mainMenu = document.getElementById("ico_mainMenu") ;
	TweenMax.fromTo( ico_mainMenu , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

/**********************************************
Organizacion Rectangles
***********************************************/
/*Mexico*/
	/*01*/
function rollOver_puesto_01_mex()
{
	var rectangle_01_01_mex = document.getElementById("rectangle_01_01_mex") ;
	TweenMax.fromTo( rectangle_01_01_mex , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*02*/
function rollOver_puesto_02_mex()
{
	var rectangle_02_01_mex = document.getElementById("rectangle_02_01_mex") ;
	TweenMax.fromTo( rectangle_02_01_mex , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*03*/
function rollOver_puesto_03_mex()
{
	var rectangle_02_02_mex = document.getElementById("rectangle_02_02_mex") ;
	TweenMax.fromTo( rectangle_02_02_mex , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*04*/
function rollOver_puesto_04_mex()
{
	var rectangle_02_03_mex = document.getElementById("rectangle_02_03_mex") ;
	TweenMax.fromTo( rectangle_02_03_mex , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*05*/
function rollOver_puesto_05_mex()
{
	var rectangle_03_01_mex = document.getElementById("rectangle_03_01_mex") ;
	TweenMax.fromTo( rectangle_03_01_mex , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*06*/
function rollOver_puesto_06_mex()
{
	var rectangle_03_02_mex = document.getElementById("rectangle_03_02_mex") ;
	TweenMax.fromTo( rectangle_03_02_mex , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*07*/
function rollOver_puesto_07_mex()
{
	var rectangle_03_03_mex = document.getElementById("rectangle_03_03_mex") ;
	TweenMax.fromTo( rectangle_03_03_mex , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*08*/
function rollOver_puesto_08_mex()
{
	var rectangle_04_01_mex = document.getElementById("rectangle_04_01_mex") ;
	TweenMax.fromTo( rectangle_04_01_mex , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}


/*Brasil*/
	/*01*/
function rollOver_puesto_01()
{
	var rectangle_01_01 = document.getElementById("rectangle_01_01") ;
	TweenMax.fromTo( rectangle_01_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*02*/
function rollOver_puesto_02()
{
	var rectangle_02_01 = document.getElementById("rectangle_02_01") ;
	TweenMax.fromTo( rectangle_02_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*03*/
function rollOver_puesto_03()
{
	var rectangle_02_02 = document.getElementById("rectangle_02_02") ;
	TweenMax.fromTo( rectangle_02_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*04*/
function rollOver_puesto_04()
{
	var rectangle_02_03 = document.getElementById("rectangle_02_03") ;
	TweenMax.fromTo( rectangle_02_03 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*05*/
function rollOver_puesto_05()
{
	var rectangle_03_01 = document.getElementById("rectangle_03_01") ;
	TweenMax.fromTo( rectangle_03_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*06*/
function rollOver_puesto_06()
{
	var rectangle_03_02 = document.getElementById("rectangle_03_02") ;
	TweenMax.fromTo( rectangle_03_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*06a*/
function rollOver_puesto_06a()
{
	var rectangle_03_02a = document.getElementById("rectangle_03_02a") ;
	TweenMax.fromTo( rectangle_03_02a , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*07*/
function rollOver_puesto_07()
{
	var rectangle_03_03 = document.getElementById("rectangle_03_03") ;
	TweenMax.fromTo( rectangle_03_03 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*08*/
function rollOver_puesto_08()
{
	var rectangle_04_01 = document.getElementById("rectangle_04_01") ;
	TweenMax.fromTo( rectangle_04_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*09*/
function rollOver_puesto_09()
{
	var rectangle_04_02 = document.getElementById("rectangle_04_02") ;
	TweenMax.fromTo( rectangle_04_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*rol_cerrar*/
function rollOver_rol_cerrar()
{
	var rol_cerrar = document.getElementById("rol_cerrar") ;
	TweenMax.fromTo( rol_cerrar , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}



/*Educación al Farmacéutico*/
function rollOver_rectangle_btn_educaFarma()
{
	var rectangle_btn_educaFarma = document.getElementById("rectangle_btn_educaFarma") ;
	TweenMax.fromTo( rectangle_btn_educaFarma , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

/*Material de Visibilidad*/
function rollOver_btn_MaterialVisibilidad_fun()
{
	var btn_MaterialVisibilidad_fun = document.getElementById("btn_MaterialVisibilidad_fun") ;
	TweenMax.fromTo( btn_MaterialVisibilidad_fun , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}




/**********************************************
Material de Visibilidad RollOver
***********************************************/
/*Big Options*/
	/*01*/
function rollOver_matVisibilidad_01()
{
	var optBig_img_01 = document.getElementById("optBig_img_01") ;
	TweenMax.fromTo( optBig_img_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*02*/
function rollOver_matVisibilidad_02()
{
	var optBig_img_02 = document.getElementById("optBig_img_02") ;
	TweenMax.fromTo( optBig_img_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*03*/
function rollOver_matVisibilidad_03()
{
	var optBig_img_03 = document.getElementById("optBig_img_03") ;
	TweenMax.fromTo( optBig_img_03 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*04*/
function rollOver_matVisibilidad_04()
{
	var optBig_img_04 = document.getElementById("optBig_img_04") ;
	TweenMax.fromTo( optBig_img_04 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

/*Little Options*/
	/*01*/
function rollOver_matVisibilidad_little_01()
{
	var optLittle_img_01 = document.getElementById("optLittle_img_01") ;
	TweenMax.fromTo( optLittle_img_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*02*/
function rollOver_matVisibilidad_little_02()
{
	var optLittle_img_02 = document.getElementById("optLittle_img_02") ;
	TweenMax.fromTo( optLittle_img_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*03*/
function rollOver_matVisibilidad_little_03()
{
	var optLittle_img_03 = document.getElementById("optLittle_img_03") ;
	TweenMax.fromTo( optLittle_img_03 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*04*/
function rollOver_matVisibilidad_little_04()
{
	var optLittle_img_04 = document.getElementById("optLittle_img_04") ;
	TweenMax.fromTo( optLittle_img_04 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

/*Fundamentales de Ventas*/
function rollOver_FundamentosVendas_mat()
{
	var btn_FundamentosVendas_mat = document.getElementById("btn_FundamentosVendas_mat") ;
	TweenMax.fromTo( btn_FundamentosVendas_mat , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

/**********************************************
Fundamentales de Venta
**********************************************/
	/*01*/
function rollOver_rectangle_fundamentales_btn_01()
{
	var rectangle_fundamentales_btn_01 = document.getElementById("rectangle_fundamentales_btn_01") ;
	TweenMax.fromTo( rectangle_fundamentales_btn_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*02*/
function rollOver_rectangle_fundamentales_btn_02()
{
	var rectangle_fundamentales_btn_02 = document.getElementById("rectangle_fundamentales_btn_02") ;
	TweenMax.fromTo( rectangle_fundamentales_btn_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

/**********************************************
Ciclo de entrenamiento menu
***********************************************/
	/*01*/
function rollOver_liderazgo_cicloEntrenamiento_01()
{
	var rectangle_liderazgo_Ciclo_01 = document.getElementById("rectangle_liderazgo_Ciclo_01") ;
	TweenMax.fromTo( rectangle_liderazgo_Ciclo_01 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*02*/
function rollOver_liderazgo_cicloEntrenamiento_02()
{
	var rectangle_liderazgo_Ciclo_02 = document.getElementById("rectangle_liderazgo_Ciclo_02") ;
	TweenMax.fromTo( rectangle_liderazgo_Ciclo_02 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*03*/
function rollOver_liderazgo_cicloEntrenamiento_03()
{
	var rectangle_liderazgo_Ciclo_03 = document.getElementById("rectangle_liderazgo_Ciclo_03") ;
	TweenMax.fromTo( rectangle_liderazgo_Ciclo_03 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*04*/
function rollOver_liderazgo_cicloEntrenamiento_04()
{
	var rectangle_liderazgo_Ciclo_04 = document.getElementById("rectangle_liderazgo_Ciclo_04") ;
	TweenMax.fromTo( rectangle_liderazgo_Ciclo_04 , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

/**********************************************
Fundamentales de Venta Merchandising
***********************************************/
	/*Metamucil mex*/
function rollOver_btn_circle_anaquel_metamucil_mex()
{
	var btn_circle_anaquel_metamucil_mex = document.getElementById("btn_circle_anaquel_metamucil_mex") ;
	TweenMax.fromTo( btn_circle_anaquel_metamucil_mex , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*Metamucil bra*/
function rollOver_btn_circle_anaquel_metamucil()
{
	var btn_circle_anaquel_metamucil = document.getElementById("btn_circle_anaquel_metamucil") ;
	TweenMax.fromTo( btn_circle_anaquel_metamucil , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}



	/*Hipoglos bra*/
function rollOver_btn_circle_anaquel_hipoglos()
{
	var btn_circle_anaquel_hipoglos = document.getElementById("btn_circle_anaquel_hipoglos") ;
	TweenMax.fromTo( btn_circle_anaquel_hipoglos , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}


	/*Vicks mex*/
function rollOver_btn_circle_anaquel_vicks_mex()
{
	var btn_circle_anaquel_vicks_mex = document.getElementById("btn_circle_anaquel_vicks_mex") ;
	TweenMax.fromTo( btn_circle_anaquel_vicks_mex , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}

	/*Vicks bra*/
function rollOver_btn_circle_anaquel_vicks()
{
	var btn_circle_anaquel_vicks = document.getElementById("btn_circle_anaquel_vicks") ;
	TweenMax.fromTo( btn_circle_anaquel_vicks , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}



	/*Clearblue mex*/
function rollOver_btn_circle_anaquel_clearblue_mex()
{
	var btn_circle_anaquel_clearblue_mex = document.getElementById("btn_circle_anaquel_clearblue_mex") ;
	TweenMax.fromTo( btn_circle_anaquel_clearblue_mex , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}



	/*Pepto-Bismol mex*/
function rollOver_btn_circle_anaquel_peptoBismol_mex()
{
	var btn_circle_anaquel_peptoBismol_mex = document.getElementById("btn_circle_anaquel_peptoBismol_mex") ;
	TweenMax.fromTo( btn_circle_anaquel_peptoBismol_mex , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}



/**********************************************
Preguntas FeedBack entrenamiento 2
***********************************************/
function rollOver_btn_preguntas_big()
{
	var btn_preguntas_big = document.getElementById("btn_preguntas_big") ;
	TweenMax.fromTo( btn_preguntas_big , 1 , {css:{transform:"scale(.85,.85)"} , ease:Elastic.easeOut} , {css:{transform:"scale(1,1)"} , ease:Elastic.easeOut});
}


/**********************************************
Rolling Images
***********************************************/
//Rolling Small Image 01
function RollingImage_01()
{
	var roll_01 = document.getElementById("roll_01") ;
	roll_01.style.position = 'absolute' ;
	
	var rolling = new TimelineMax ( {repeat:-1 , repeatDelay:3 , yoyo:true } );    
		rolling.to(roll_01 , 0.5 , {css:{top:'-180px' , ease:Elastic.easeInOut } , delay:3} )
		.to(roll_01 , 0.5 , {css:{top:'-360px' , ease:Elastic.easeInOut } , delay:3} )
		.to(roll_01 , 0.5 , {css:{top:'-540px' , ease:Elastic.easeInOut } , delay:3} ) ;
}

//Rolling Small Image 02
function RollingImage_02()
{
	var roll_02 = document.getElementById("roll_02") ;
	roll_02.style.position = 'absolute' ;
	roll_02.style.top = '-540px' ;
	
	var rolling_02 = new TimelineMax({repeat:-1 , repeatDelay:3.25 , yoyo:true});    
		rolling_02.to(roll_02 , 0.5 , {css:{top:'-540px', ease:Elastic.easeInOut} , delay:3.25} )
		.to(roll_02 , 0.5 , {css:{top:'-360px', ease:Elastic.easeInOut} , delay:3.25} )
		.to(roll_02 , 0.5 , {css:{top:'-180px', ease:Elastic.easeInOut} , delay:3.25} )
		.to(roll_02 , 0.5 , {css:{top:'0px', ease:Elastic.easeInOut} , delay:3.25} ) ;
}

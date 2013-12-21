<!--Menu rol-->
function goMarket()
{
	CleanScreen() ;
	
	gotoSlide = 'goMarket' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_Induccion.png' onmouseover='rollOver_ico_04()' /></div>"+
		
		//Menu Tipos Tiendas
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_induccion_goMarket.png' onmouseover='rollOver_ico_05()' /></div>"+

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
		"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()'><img src='img/img_flecha_back.png' /></div>"+
			//Siguiente
		//"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
			
	"" ;

	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////México
	var goMarket_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Go to <b>Market</b></div>"+
		
		//Images
			//01
		"<div style='top:485px; left:101.5px; width:254px; height:294px;' class='goToMarket_images' id='goToMarket_img_01_mex'><img src='img/Induccion/GoMarket/img_goMarket_mex_01.png'></div>"+
			//02
		"<div style='top:243px; left:282px; width:224px; height:404px;' class='goToMarket_images' id='goToMarket_img_02_mex'><img src='img/Induccion/GoMarket/img_goMarket_mex_02.png'></div>"+
			//03
		"<div style='top:142px; left:544.5px; width:308px; height:599px;' class='goToMarket_images' id='goToMarket_img_03_mex'><img src='img/Induccion/GoMarket/img_goMarket_mex_03.png'></div>"+
			//04
		"<div style='top:353px; left:799px; width:362px; height:178px;' class='goToMarket_images' id='goToMarket_img_04_mex'><img src='img/Induccion/GoMarket/img_goMarket_mex_04.png'></div>"+
		
		//Textos
			//01
		"<div class='txtGoMarket' id='txtGoMarket_01'><b>Ventas:</b> Son ejecutadas en farmacias independientes y cadenas indirectas por el Farmaasesor mediante un transfer order.</div>"+
			//02
		"<div class='txtGoMarket' id='txtGoMarket_02'><b>Clientes son libres</b> de escoger al mayorista con el que quieren realizar su pedido.</div>"+
		
		//Slide Number
		"<div class='slideNumber'>011</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var goMarket_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Go to <b>Market</b></div>"+
		
		//Images
			//01
		"<div style='top:485px; left:101.5px; width:254px; height:294px;' class='goToMarket_images' id='goToMarket_img_01'><img src='img/Induccion/GoMarket/img_goMarket_bra_01.png'></div>"+
			//02
		"<div style='top:243px; left:282px; width:224px; height:404px;' class='goToMarket_images' id='goToMarket_img_02'><img src='img/Induccion/GoMarket/img_goMarket_bra_02.png'></div>"+
			//03
		"<div style='top:142px; left:544.5px; width:308px; height:599px;' class='goToMarket_images' id='goToMarket_img_03'><img src='img/Induccion/GoMarket/img_goMarket_bra_03.png'></div>"+
			//04
		"<div style='top:353px; left:799px; width:362px; height:178px;' class='goToMarket_images' id='goToMarket_img_04'><img src='img/Induccion/GoMarket/img_goMarket_bra_04.png'></div>"+		
		
		//Textos
			//01
		"<div class='txtGoMarket' id='txtGoMarket_01'><b>Vendas:</b> São executadas via Transfer Order (TO), conforme esquema.</div>"+
			//02
		"<div class='txtGoMarket' id='txtGoMarket_02'><b>Contra-partida:</b> execução básica de visibilidade em loja.</div>"+
			//03
		"<div class='txtGoMarket' id='txtGoMarket_03'><b>Clientes são livres:</b> para escolherem de qual Atacado farão a compra.</div>"+
		
		//Slide Number
		"<div class='slideNumber'>011</div>"+

	"" ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + goMarket_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var goToMarket_img_01_mex = document.getElementById("goToMarket_img_01_mex") ;
			var goToMarket_img_02_mex = document.getElementById("goToMarket_img_02_mex") ;
			var goToMarket_img_03_mex = document.getElementById("goToMarket_img_03_mex") ;
			var goToMarket_img_04_mex = document.getElementById("goToMarket_img_04_mex") ;
			
			var txtGoMarket_01 = document.getElementById("txtGoMarket_01") ;
			var txtGoMarket_02 = document.getElementById("txtGoMarket_02") ;
					
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([goToMarket_img_01_mex , goToMarket_img_02_mex , goToMarket_img_03_mex, goToMarket_img_04_mex] , 2 , {css:{opacity:"0" , transform:"scale(.5,.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , 2) ;
			
			TweenMax.staggerFromTo ([txtGoMarket_01 , txtGoMarket_02] , 1 , {css:{opacity:"0" , left:"825px"}} , {css:{opacity:"1" , left:"775px"}} , .5) ;
				
			/////////////////////////////////Exit animation
			function exit_goMarket_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var goToMarket_img_01_mex = document.getElementById("goToMarket_img_01_mex") ;
				var goToMarket_img_02_mex = document.getElementById("goToMarket_img_02_mex") ;
				var goToMarket_img_03_mex = document.getElementById("goToMarket_img_03_mex") ;
				var goToMarket_img_04_mex = document.getElementById("goToMarket_img_04_mex") ;
				
				var txtGoMarket_01 = document.getElementById("txtGoMarket_01") ;
				var txtGoMarket_02 = document.getElementById("txtGoMarket_02") ;
				var txtGoMarket_03 = document.getElementById("txtGoMarket_03") ;
						
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage }) ;
				
				TweenMax.staggerFromTo ([goToMarket_img_01_mex , goToMarket_img_02_mex , goToMarket_img_03_mex, goToMarket_img_04_mex] , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.5,.5)"}}) ;
				
				TweenMax.staggerFromTo ([txtGoMarket_01 , txtGoMarket_02] , .25 , {css:{opacity:"1" , left:"775px"}} , {css:{opacity:"0" , left:"825px"}} , .15) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							menu_Induccion() ;
						break;
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
				exit_goMarket_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_goMarket_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_goMarket_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_goMarket_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_goMarket_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_goMarket_mex() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_goMarket_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_goMarket_mex_01.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + goMarket_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var goToMarket_img_01 = document.getElementById("goToMarket_img_01") ;
			var goToMarket_img_02 = document.getElementById("goToMarket_img_02") ;
			var goToMarket_img_03 = document.getElementById("goToMarket_img_03") ;
			var goToMarket_img_04 = document.getElementById("goToMarket_img_04") ;
			
			var txtGoMarket_01 = document.getElementById("txtGoMarket_01") ;
			var txtGoMarket_02 = document.getElementById("txtGoMarket_02") ;
			var txtGoMarket_03 = document.getElementById("txtGoMarket_03") ;
					
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([goToMarket_img_01 , goToMarket_img_02 , goToMarket_img_03 , goToMarket_img_04] , 2 , {css:{opacity:"0" , transform:"scale(.5,.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , 2) ;
			
			TweenMax.staggerFromTo ([txtGoMarket_01 , txtGoMarket_02 , txtGoMarket_03 ] , 1 , {css:{opacity:"0" , left:"825px"}} , {css:{opacity:"1" , left:"775px"}} , .5) ;
				
			/////////////////////////////////Exit animation
			function exit_goMarket()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var goToMarket_img_01 = document.getElementById("goToMarket_img_01") ;
				var goToMarket_img_02 = document.getElementById("goToMarket_img_02") ;
				var goToMarket_img_03 = document.getElementById("goToMarket_img_03") ;
				var goToMarket_img_04 = document.getElementById("goToMarket_img_04") ;
				
				var txtGoMarket_01 = document.getElementById("txtGoMarket_01") ;
				var txtGoMarket_02 = document.getElementById("txtGoMarket_02") ;
				var txtGoMarket_03 = document.getElementById("txtGoMarket_03") ;
						
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([goToMarket_img_01 , goToMarket_img_02 , goToMarket_img_03 , goToMarket_img_04] , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.5,.5)"}} , .25) ;
				
				TweenMax.staggerFromTo ([txtGoMarket_01 , txtGoMarket_02 , txtGoMarket_03 ] , .25 , {css:{opacity:"1" , left:"775px"}} , {css:{opacity:"0" , left:"825px"}} , .15) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							menu_Induccion() ;
						break;
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
				exit_goMarket() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_goMarket() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_goMarket() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_goMarket() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_goMarket() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_goMarket() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_goMarket() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_goMarket_bra_01.mp3' ;
	
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
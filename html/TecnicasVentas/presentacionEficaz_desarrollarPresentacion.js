<!--Educación al Farmacéutico 01-->
function presentacionEficaz_desarrollarPresentacion()
{
	CleanScreen() ;
	
	gotoSlide = 'presentacionEficaz_desarrollarPresentacion' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_tecnicaVentas.png' onmouseover='rollOver_ico_04()' /></div>"+
		
		//Menu Presentacion Eficaz
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_presentacionEficaz.png' onmouseover='rollOver_ico_05()' /></div>"+	
		
		//Determinar Objetivo
		//"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_presentacionEficaz_desarrollarPresentacion.png' onmouseover='rollOver_ico_06()' /></div>"+
		
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
	var presentacionEficaz_01_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Desarrollar la <b>Presentación</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_presentacionEficaz_s5_01'>Usa un programa como power point, un documento de Word o cualquier electrónico o incluso físico, asegúrate de que contiene los elementos que has visto en los pasos anteriores.</div>"+
				//02
		"<div class='all_leftText_bullet' id='all_leftText_presentacionEficaz_s5_02'>• Mantén un mismo patrón  tu documento como  tipo de letra y fondo de la presentación.<br/><br/>• No uses muchas animaciones o efectos visuales.<br/><br/>• No pongas demasiada información en cada “bullet” o sentencia. Solo la idea principal y desarrolla tu la idea en tu presentación verbal.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/TecnicaVentas/PresentacionEficaz/img_presentacionEficaz_05.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>240</div>"+
		
	"" ;
	
	
	/////////////////////////////////Brasil
	var presentacionEficaz_01_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Desenvolver a <b>apresentação</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_presentacionEficaz_s5_01'>Use um programa como o PPR , documento do Word, ou qualquer meio eletrônico ou físico, verifique se ele contém os itens que você já viu nas etapas anteriores.</div>"+
				//02
		"<div class='all_leftText_bullet' id='all_leftText_presentacionEficaz_s5_02'>• Mantenha o seu documento, o mesmo padrão de fonte e fundo apresentação.<br/><br/>• Não use muitas animações ou efeitos visuais.<br/><br/>• Não coloque muita informação em cada &ldquo;balão&rdquo; ou frase. Só a ideia principal e desenvolva a sua ideia em sua apresentação verbal.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/TecnicaVentas/PresentacionEficaz/img_presentacionEficaz_05.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>186</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + presentacionEficaz_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_presentacionEficaz_s5_01 = document.getElementById("all_leftText_presentacionEficaz_s5_01") ;
			var all_leftText_presentacionEficaz_s5_02 = document.getElementById("all_leftText_presentacionEficaz_s5_02") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (all_leftText_presentacionEficaz_s5_01 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}}) ;
			
			TweenMax.fromTo (all_leftText_presentacionEficaz_s5_02 , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5}) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"50px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_presentacionEficaz_desarrollarPresentacion_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_presentacionEficaz_s5_01 = document.getElementById("all_leftText_presentacionEficaz_s5_01") ;
				var all_leftText_presentacionEficaz_s5_02 = document.getElementById("all_leftText_presentacionEficaz_s5_02") ;

				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_presentacionEficaz_s5_01 , all_leftText_presentacionEficaz_s5_02 , all_rightImage]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (all_leftText_presentacionEficaz_s5_01 , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}}) ;
				
				TweenMax.fromTo (all_leftText_presentacionEficaz_s5_02 , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}} , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"50px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_presentacionEficaz() ;
						break;
						
						case -6:
							menu_tecnicaVentas() ;
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
							presentacionEficaz_estructurarPresentacion() ;
						break;
						
						case 1:
							presentacionEficaz_practicar() ;
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
				exit_presentacionEficaz_desarrollarPresentacion_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_presentacionEficaz_desarrollarPresentacion_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_presentacionEficaz_desarrollarPresentacion_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_presentacionEficaz_desarrollarPresentacion_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_presentacionEficaz_desarrollarPresentacion_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_presentacionEficaz_desarrollarPresentacion_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
						pagChange = -1 ;
				exit_presentacionEficaz_desarrollarPresentacion_mex() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_presentacionEficaz_desarrollarPresentacion_mex() ;
			});
			
			/////////////////////////////////Flecha next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_presentacionEficaz_desarrollarPresentacion_mex() ;
			});
			
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
			document.getElementById("Container").innerHTML = generalElements + presentacionEficaz_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_presentacionEficaz_s5_01 = document.getElementById("all_leftText_presentacionEficaz_s5_01") ;
			var all_leftText_presentacionEficaz_s5_02 = document.getElementById("all_leftText_presentacionEficaz_s5_02") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (all_leftText_presentacionEficaz_s5_01 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}}) ;
			
			TweenMax.fromTo (all_leftText_presentacionEficaz_s5_02 , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5}) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"50px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_presentacionEficaz_desarrollarPresentacion()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_presentacionEficaz_s5_01 = document.getElementById("all_leftText_presentacionEficaz_s5_01") ;
				var all_leftText_presentacionEficaz_s5_02 = document.getElementById("all_leftText_presentacionEficaz_s5_02") ;

				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_presentacionEficaz_s5_01 , all_leftText_presentacionEficaz_s5_02 , all_rightImage]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (all_leftText_presentacionEficaz_s5_01 , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}}) ;
				
				TweenMax.fromTo (all_leftText_presentacionEficaz_s5_02 , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}} , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"50px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_presentacionEficaz() ;
						break;
						
						case -6:
							menu_tecnicaVentas() ;
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
							presentacionEficaz_estructurarPresentacion() ;
						break;
						
						case 1:
							presentacionEficaz_practicar() ;
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
				exit_presentacionEficaz_desarrollarPresentacion() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_presentacionEficaz_desarrollarPresentacion() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_presentacionEficaz_desarrollarPresentacion() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_presentacionEficaz_desarrollarPresentacion() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_presentacionEficaz_desarrollarPresentacion() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_presentacionEficaz_desarrollarPresentacion() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
						pagChange = -1 ;
				exit_presentacionEficaz_desarrollarPresentacion() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_presentacionEficaz_desarrollarPresentacion() ;
			});
			
			/////////////////////////////////Flecha next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_presentacionEficaz_desarrollarPresentacion() ;
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
	
}
<!--Educación al Farmacéutico 01-->
function liderazgo_cicloEntrenamiento_correccion()
{
	CleanScreen() ;
	
	gotoSlide = 'liderazgo_cicloEntrenamiento_correccion' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_liderazgo.png' onmouseover='rollOver_ico_04()' /></div>"+
		
		//Menu Tecnicas de Ventas
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_liderazgo_cicloEntrenamiento.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		//Menu pasos de la visita
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_cicloEntrenamiento.png' onmouseover='rollOver_ico_06()' /></div>"+	
		
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
	var liderazgo_cicloEntrenamiento_correccion_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Repaso de la Visita / <b>Corrección</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_liderazgo_s8_01'>• Reconozca los resultados durante el entrenamiento.<br/><br/>• Dé seguimiento y refine el manejo de un tema ó técnica.<br/><br/>• Reúna las partes en una unidad completa.</div>"+
				//02
		"<div class='all_leftText_bullets' id='all_leftText_liderazgo_s8_02'><b>1)</b> Discutir los resultados vs. objetivos.<br/><br/><b>2)</b> Discutir lo que funciona bien (Primero!!) y lo que no.<br/><br/><b>3)</b> Repasar qué aprendió en la visita.<br/><br/><b>4)</b> Determinar el paso a seguir.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/Liderazgo/img_liderazgo_09.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>254</div>"+
		
	"" ;
	
	
	/////////////////////////////////Brasil
	var liderazgo_cicloEntrenamiento_correccion_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Correção</div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_liderazgo_s8_01'>• Peca ao RV que faca uma auto avaliação.<br/><br/>• Reconheça os resultados durante o treinamento.<br/><br/>• Acompanhe e aperfeiçoe o domínio de um tema ou técnica.<br/><br/>• Reúna as partes em uma unidade completa.</div>"+
				//02
		"<div class='all_leftText_bullets' id='all_leftText_liderazgo_s8_02'><b>1)</b> Discutir os resultados vs. objetivos.<br/><br/><b>2)</b> Discutir o que funciona bem (Primeiro!!) e o que não funciona.<br/><br/><b>3)</b> Repassar o que foi aprendido na visita.<br/><br/><b>4)</b> Determinar o passo a seguir.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/Liderazgo/img_liderazgo_09.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>200</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + liderazgo_cicloEntrenamiento_correccion_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_liderazgo_s8_01 = document.getElementById("all_leftText_liderazgo_s8_01") ;
			var all_leftText_liderazgo_s8_02 = document.getElementById("all_leftText_liderazgo_s8_02") ;
			
			var all_rightImage = document.getElementById("all_rightImage") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (all_leftText_liderazgo_s8_01 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}}) ;
			TweenMax.fromTo (all_leftText_liderazgo_s8_02 , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay:.5 }) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"100px"} , delay:1}) ;
			
	
			
			/////////////////////////////////Exit animation
			function exit_liderazgo_cicloEntrenamiento_correccion_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_liderazgo_s8_01 = document.getElementById("all_leftText_liderazgo_s8_01") ;
				var all_leftText_liderazgo_s8_02 = document.getElementById("all_leftText_liderazgo_s8_02") ;
				
				var all_leftText_liderazgo_s8_03 = document.getElementById("all_leftText_liderazgo_s8_03") ;
				var all_leftText_liderazgo_s8_04 = document.getElementById("all_leftText_liderazgo_s8_04") ;
				
				var all_leftText_liderazgo_s8_05 = document.getElementById("all_leftText_liderazgo_s8_05") ;
				
				var all_leftText_liderazgo_s8_06 = document.getElementById("all_leftText_liderazgo_s8_06") ;
				var all_leftText_liderazgo_s8_07 = document.getElementById("all_leftText_liderazgo_s8_07") ;
				
				var all_leftText_liderazgo_s8_08 = document.getElementById("all_leftText_liderazgo_s8_08") ;
				var all_leftText_liderazgo_s8_09 = document.getElementById("all_leftText_liderazgo_s8_09") ;
				
				var all_leftText_liderazgo_s8_10 = document.getElementById("all_leftText_liderazgo_s8_10") ;
				var all_leftText_liderazgo_s8_11 = document.getElementById("all_leftText_liderazgo_s8_11") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_liderazgo_s8_01 , all_leftText_liderazgo_s8_02 , all_rightImage]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (all_leftText_liderazgo_s8_01 , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				TweenMax.fromTo (all_leftText_liderazgo_s8_02 , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"} , delay:.5 } , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"100px"}} , {css:{opacity:"0" , right:"150px"}}) ;
								
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							liderazgo_menu_cicloEntrenamiento() ;
						break;
						
						case -6:
							liderazgo_02() ;
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
							liderazgo_menu_cicloEntrenamiento() ;
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
				exit_liderazgo_cicloEntrenamiento_correccion_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_cicloEntrenamiento_correccion_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_cicloEntrenamiento_correccion_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_cicloEntrenamiento_correccion_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_cicloEntrenamiento_correccion_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_liderazgo_cicloEntrenamiento_correccion_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_liderazgo_cicloEntrenamiento_correccion_mex() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_liderazgo_cicloEntrenamiento_correccion_mex() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Liderazgo/au_liderazgo_ciclo_entrenamiento_correccion_mex.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + liderazgo_cicloEntrenamiento_correccion_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_liderazgo_s8_01 = document.getElementById("all_leftText_liderazgo_s8_01") ;
			var all_leftText_liderazgo_s8_02 = document.getElementById("all_leftText_liderazgo_s8_02") ;
			
			var all_rightImage = document.getElementById("all_rightImage") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (all_leftText_liderazgo_s8_01 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}}) ;
			TweenMax.fromTo (all_leftText_liderazgo_s8_02 , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay:.5 }) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"100px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_liderazgo_cicloEntrenamiento_correccion()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_liderazgo_s8_01 = document.getElementById("all_leftText_liderazgo_s8_01") ;
				var all_leftText_liderazgo_s8_02 = document.getElementById("all_leftText_liderazgo_s8_02") ;
				
				var all_leftText_liderazgo_s8_03 = document.getElementById("all_leftText_liderazgo_s8_03") ;
				var all_leftText_liderazgo_s8_04 = document.getElementById("all_leftText_liderazgo_s8_04") ;
				
				var all_leftText_liderazgo_s8_05 = document.getElementById("all_leftText_liderazgo_s8_05") ;
				
				var all_leftText_liderazgo_s8_06 = document.getElementById("all_leftText_liderazgo_s8_06") ;
				var all_leftText_liderazgo_s8_07 = document.getElementById("all_leftText_liderazgo_s8_07") ;
				
				var all_leftText_liderazgo_s8_08 = document.getElementById("all_leftText_liderazgo_s8_08") ;
				var all_leftText_liderazgo_s8_09 = document.getElementById("all_leftText_liderazgo_s8_09") ;
				
				var all_leftText_liderazgo_s8_10 = document.getElementById("all_leftText_liderazgo_s8_10") ;
				var all_leftText_liderazgo_s8_11 = document.getElementById("all_leftText_liderazgo_s8_11") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_liderazgo_s8_01 , all_leftText_liderazgo_s8_02 , all_rightImage]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (all_leftText_liderazgo_s8_01 , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				TweenMax.fromTo (all_leftText_liderazgo_s8_02 , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"} , delay:.5 } , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"100px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
								
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							liderazgo_menu_cicloEntrenamiento() ;
						break;
						
						case -6:
							liderazgo_02() ;
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
							liderazgo_menu_cicloEntrenamiento() ;
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
				exit_liderazgo_cicloEntrenamiento_correccion() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_cicloEntrenamiento_correccion() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_cicloEntrenamiento_correccion() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_cicloEntrenamiento_correccion() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_cicloEntrenamiento_correccion() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_liderazgo_cicloEntrenamiento_correccion() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_liderazgo_cicloEntrenamiento_correccion() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_liderazgo_cicloEntrenamiento_correccion() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Liderazgo/au_liderazgo_ciclo_entrenamiento_correccion_bra.mp3' ;
			
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
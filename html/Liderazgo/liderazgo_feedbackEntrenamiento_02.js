<!--Educación al Farmacéutico 01-->
function liderazgo_feedbackEntrenamiento_02()
{
	CleanScreen() ;
	
	gotoSlide = 'liderazgo_feedbackEntrenamiento_02' ;
	
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_liderazgo_feedbackEntrenamiento.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
		//"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
			
	"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////México
	var liderazgo_feedbackEntrenamiento_02_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Principios de un <b>Feedback Efectivo</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_liderazgo_s4_01'><b>Establecer límites</b></div>"+
				//02
		"<div class='all_leftText_bullets' id='all_leftText_liderazgo_s4_02'>• Establecer de manera explícita el propósito “constructivo” de la discusión y el comportamiento ó reacciones que se esperan.<br/><br/>• En una retroalimentación se deben manejar sólo los temas con los que se sientan confortables los participantes.</div>"+
		
			//03
		"<div class='all_leftText' id='all_leftText_liderazgo_s4_03'><b>Autorización</b></div>"+
				//04
		"<div class='all_leftText_bullets' id='all_leftText_liderazgo_s4_04'>• Debe haber una aceptación de los participantes a recibir la retroalimetación necesario.</div>"+
		
			//05
		"<div class='all_leftText' id='all_leftText_liderazgo_s4_05'><b>Propósito</b></div>"+
		
			//06
		"<div class='all_leftText' id='all_leftText_liderazgo_s4_06'><b>Enfoque</b></div>"+
				//07
		"<div class='all_leftText_bullets' id='all_leftText_liderazgo_s4_07'>• Mantener siempre el enfoque en las experiencias que se acaban de vivir.</div>"+
		
			//08
		"<div class='all_leftText' id='all_leftText_liderazgo_s4_08'><b>Responsabilidad</b></div>"+
				//09
		"<div class='all_leftText_bullets' id='all_leftText_liderazgo_s4_09'>• Es fundamental apersonar a cada participante de su responsabilidad por su propio aprendizaje, NO es responsabilidad del entrenador.</div>"+
		
			//10
		"<div class='all_leftText' id='all_leftText_liderazgo_s4_10'><b>Cierre</b></div>"+
				//11
		"<div class='all_leftText_bullets' id='all_leftText_liderazgo_s4_11'>• Cerrar efectivamente una retroalimentación significa que cada individuo involucrado está listo para seguir adelante a la siguiente experiencia.</div>"+
		
		//Preguntas
		"<div class='rectangle_03' id='btn_preguntas_big' onmouseover='rollOver_btn_preguntas_big()' style='display:none ; position: absolute ; width: 400px ; height: 95px ; text-align:center ; top: 700px ; left: 700px ;'>Un verdadero entrenador SIEMPRE debe estar capacitado para responder afirmativamente las siguientes preguntas:</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/Liderazgo/img_liderazgo_12.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>257</div>"+
		
	"" ;
	
	
	/////////////////////////////////Brasil
	var liderazgo_feedbackEntrenamiento_02_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Princípios de um <b>Feedback Efetivo</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_liderazgo_s4_01'><b>Estabelecer limites</b></div>"+
				//02
		"<div class='all_leftText_bullets' id='all_leftText_liderazgo_s4_02'>• Estabelecer de modo explícito o propósito “construtivo” da discussão e o comportamento ou reações esperadas.<br/><br/>• Em um feedback devem ser abordados somente os temas com os que os participantes se sintam cômodos.</div>"+
		
			//03
		"<div class='all_leftText' id='all_leftText_liderazgo_s4_03'><b>Autorização</b></div>"+
				//04
		"<div class='all_leftText_bullets' id='all_leftText_liderazgo_s4_04'>• Deve haver uma aprovação dos participantes a receberem o feedback necessário.</div>"+
		
			//05
		"<div class='all_leftText' id='all_leftText_liderazgo_s4_05'><b>Propósito</b></div>"+
		
			//06
		"<div class='all_leftText' id='all_leftText_liderazgo_s4_06'><b>Enfoque</b></div>"+
				//07
		"<div class='all_leftText_bullets' id='all_leftText_liderazgo_s4_07'>• Manter sempre o enfoque nas experiências que acabam de ser vividas.</div>"+
		
			//08
		"<div class='all_leftText' id='all_leftText_liderazgo_s4_08'><b>Responsabilidade</b></div>"+
				//09
		"<div class='all_leftText_bullets' id='all_leftText_liderazgo_s4_09'>• É fundamental falar pessoalmente com cada participante acerca de sua responsabilidade pela sua própria aprendizagem, NÃO é so responsabilidade do treinador.</div>"+
		
			//10
		"<div class='all_leftText' id='all_leftText_liderazgo_s4_10'><b>Encerramento</b></div>"+
				//11
		"<div class='all_leftText_bullets' id='all_leftText_liderazgo_s4_11'>• Encerrar efetivamente um feedback significa que cada indivíduo envolvido está preparado para levar adiante a seguinte experiência.</div>"+
		
		//Preguntas
		"<div class='rectangle_03' id='btn_preguntas_big' onmouseover='rollOver_btn_preguntas_big()' style='display:none ; position: absolute ; width: 400px ; height: 95px ; text-align:center ; top: 700px ; left: 700px ;'>Um verdadeiro treinador SEMPRE deve estar capacitado para responder afirmativamente as seguintes perguntas:</div>"+
		
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/Liderazgo/img_liderazgo_12.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>205</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + liderazgo_feedbackEntrenamiento_02_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_liderazgo_s4_01 = document.getElementById("all_leftText_liderazgo_s4_01") ;
			var all_leftText_liderazgo_s4_02 = document.getElementById("all_leftText_liderazgo_s4_02") ;
			
			var all_leftText_liderazgo_s4_03 = document.getElementById("all_leftText_liderazgo_s4_03") ;
			var all_leftText_liderazgo_s4_04 = document.getElementById("all_leftText_liderazgo_s4_04") ;
			
			var all_leftText_liderazgo_s4_05 = document.getElementById("all_leftText_liderazgo_s4_05") ;
			
			var all_leftText_liderazgo_s4_06 = document.getElementById("all_leftText_liderazgo_s4_06") ;
			var all_leftText_liderazgo_s4_07 = document.getElementById("all_leftText_liderazgo_s4_07") ;
			
			var all_leftText_liderazgo_s4_08 = document.getElementById("all_leftText_liderazgo_s4_08") ;
			var all_leftText_liderazgo_s4_09 = document.getElementById("all_leftText_liderazgo_s4_09") ;
			
			var all_leftText_liderazgo_s4_10 = document.getElementById("all_leftText_liderazgo_s4_10") ;
			var all_leftText_liderazgo_s4_11 = document.getElementById("all_leftText_liderazgo_s4_11") ;
			
			
			var all_rightImage = document.getElementById("all_rightImage") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_liderazgo_s4_01 , all_leftText_liderazgo_s4_03 , all_leftText_liderazgo_s4_05 , all_leftText_liderazgo_s4_06 , all_leftText_liderazgo_s4_08 , all_leftText_liderazgo_s4_10] , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			TweenMax.staggerFromTo ([all_leftText_liderazgo_s4_02 , all_leftText_liderazgo_s4_04 , all_leftText_liderazgo_s4_07 , all_leftText_liderazgo_s4_09 , all_leftText_liderazgo_s4_11] , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay:.5 } , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"100px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_liderazgo_feedbackEntrenamiento_02_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_liderazgo_s4_01 = document.getElementById("all_leftText_liderazgo_s4_01") ;
				var all_leftText_liderazgo_s4_02 = document.getElementById("all_leftText_liderazgo_s4_02") ;
				
				var all_leftText_liderazgo_s4_03 = document.getElementById("all_leftText_liderazgo_s4_03") ;
				var all_leftText_liderazgo_s4_04 = document.getElementById("all_leftText_liderazgo_s4_04") ;
				
				var all_leftText_liderazgo_s4_05 = document.getElementById("all_leftText_liderazgo_s4_05") ;
				
				var all_leftText_liderazgo_s4_06 = document.getElementById("all_leftText_liderazgo_s4_06") ;
				var all_leftText_liderazgo_s4_07 = document.getElementById("all_leftText_liderazgo_s4_07") ;
				
				var all_leftText_liderazgo_s4_08 = document.getElementById("all_leftText_liderazgo_s4_08") ;
				var all_leftText_liderazgo_s4_09 = document.getElementById("all_leftText_liderazgo_s4_09") ;
				
				var all_leftText_liderazgo_s4_10 = document.getElementById("all_leftText_liderazgo_s4_10") ;
				var all_leftText_liderazgo_s4_11 = document.getElementById("all_leftText_liderazgo_s4_11") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_liderazgo_s4_01 , all_leftText_liderazgo_s4_02 , all_rightImage]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_liderazgo_s4_01 , all_leftText_liderazgo_s4_03 , all_leftText_liderazgo_s4_05 , all_leftText_liderazgo_s4_06 , all_leftText_liderazgo_s4_08 , all_leftText_liderazgo_s4_10] , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				TweenMax.staggerFromTo ([all_leftText_liderazgo_s4_02 , all_leftText_liderazgo_s4_04 , all_leftText_liderazgo_s4_07 , all_leftText_liderazgo_s4_09 , all_leftText_liderazgo_s4_11] , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"} , delay:.5 } , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"100px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
								
				function ChangePage()
				{
					switch(pagChange)
					{
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
							liderazgo_feedbackEntrenamiento_01() ;
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
				exit_liderazgo_feedbackEntrenamiento_02_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_feedbackEntrenamiento_02_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_feedbackEntrenamiento_02_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_feedbackEntrenamiento_02_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_feedbackEntrenamiento_02_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_liderazgo_feedbackEntrenamiento_02_mex() ;
			});
			
			/////////////////////////////////Preguntas Button
			$('#btn_preguntas_big').click(function(){
				//window.open("");
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_liderazgo_feedbackEntrenamiento_02_mex() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Liderazgo/au_liderazgo_feedbackEntrenamiento_mex02.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + liderazgo_feedbackEntrenamiento_02_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_liderazgo_s4_01 = document.getElementById("all_leftText_liderazgo_s4_01") ;
			var all_leftText_liderazgo_s4_02 = document.getElementById("all_leftText_liderazgo_s4_02") ;
			
			var all_leftText_liderazgo_s4_03 = document.getElementById("all_leftText_liderazgo_s4_03") ;
			var all_leftText_liderazgo_s4_04 = document.getElementById("all_leftText_liderazgo_s4_04") ;
			
			var all_leftText_liderazgo_s4_05 = document.getElementById("all_leftText_liderazgo_s4_05") ;
			
			var all_leftText_liderazgo_s4_06 = document.getElementById("all_leftText_liderazgo_s4_06") ;
			var all_leftText_liderazgo_s4_07 = document.getElementById("all_leftText_liderazgo_s4_07") ;
			
			var all_leftText_liderazgo_s4_08 = document.getElementById("all_leftText_liderazgo_s4_08") ;
			var all_leftText_liderazgo_s4_09 = document.getElementById("all_leftText_liderazgo_s4_09") ;
			
			var all_leftText_liderazgo_s4_10 = document.getElementById("all_leftText_liderazgo_s4_10") ;
			var all_leftText_liderazgo_s4_11 = document.getElementById("all_leftText_liderazgo_s4_11") ;
			
			
			var all_rightImage = document.getElementById("all_rightImage") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_liderazgo_s4_01 , all_leftText_liderazgo_s4_03 , all_leftText_liderazgo_s4_05 , all_leftText_liderazgo_s4_06 , all_leftText_liderazgo_s4_08 , all_leftText_liderazgo_s4_10] , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			TweenMax.staggerFromTo ([all_leftText_liderazgo_s4_02 , all_leftText_liderazgo_s4_04 , all_leftText_liderazgo_s4_07 , all_leftText_liderazgo_s4_09 , all_leftText_liderazgo_s4_11] , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay:.5 } , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"100px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_liderazgo_feedbackEntrenamiento_02()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_liderazgo_s4_01 = document.getElementById("all_leftText_liderazgo_s4_01") ;
				var all_leftText_liderazgo_s4_02 = document.getElementById("all_leftText_liderazgo_s4_02") ;
				
				var all_leftText_liderazgo_s4_03 = document.getElementById("all_leftText_liderazgo_s4_03") ;
				var all_leftText_liderazgo_s4_04 = document.getElementById("all_leftText_liderazgo_s4_04") ;
				
				var all_leftText_liderazgo_s4_05 = document.getElementById("all_leftText_liderazgo_s4_05") ;
				
				var all_leftText_liderazgo_s4_06 = document.getElementById("all_leftText_liderazgo_s4_06") ;
				var all_leftText_liderazgo_s4_07 = document.getElementById("all_leftText_liderazgo_s4_07") ;
				
				var all_leftText_liderazgo_s4_08 = document.getElementById("all_leftText_liderazgo_s4_08") ;
				var all_leftText_liderazgo_s4_09 = document.getElementById("all_leftText_liderazgo_s4_09") ;
				
				var all_leftText_liderazgo_s4_10 = document.getElementById("all_leftText_liderazgo_s4_10") ;
				var all_leftText_liderazgo_s4_11 = document.getElementById("all_leftText_liderazgo_s4_11") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_liderazgo_s4_01 , all_leftText_liderazgo_s4_02 , all_rightImage]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_liderazgo_s4_01 , all_leftText_liderazgo_s4_03 , all_leftText_liderazgo_s4_05 , all_leftText_liderazgo_s4_06 , all_leftText_liderazgo_s4_08 , all_leftText_liderazgo_s4_10] , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				TweenMax.staggerFromTo ([all_leftText_liderazgo_s4_02 , all_leftText_liderazgo_s4_04 , all_leftText_liderazgo_s4_07 , all_leftText_liderazgo_s4_09 , all_leftText_liderazgo_s4_11] , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"} , delay:.5 } , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"100px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
								
				function ChangePage()
				{
					switch(pagChange)
					{
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
							liderazgo_feedbackEntrenamiento_01() ;
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
				exit_liderazgo_feedbackEntrenamiento_02() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_feedbackEntrenamiento_02() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_feedbackEntrenamiento_02() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_feedbackEntrenamiento_02() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_feedbackEntrenamiento_02() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_liderazgo_feedbackEntrenamiento_02() ;
			});
			
			/////////////////////////////////Preguntas Button
			$('#btn_preguntas_big').click(function(){
				//window.open("");
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_liderazgo_feedbackEntrenamiento_02() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Liderazgo/au_liderazgo_feedbackEntrenamiento_bra02.mp3' ;
			
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
<!--Educación al Farmacéutico 01-->
function liderazgo_cicloEntrenamiento_aplicacion()
{
	CleanScreen() ;
	
	gotoSlide = 'liderazgo_cicloEntrenamiento_aplicacion' ;
	
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
	var liderazgo_cicloEntrenamiento_aplicacion_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Ensayo</div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_liderazgo_s7_01'>El vendedor intenta demostrar la tarea que se explicó demostró. Visita de prueba.<br/><br/>Antes de la visita:</div>"+
				//02
		"<div class='all_leftText_bullets' id='all_leftText_liderazgo_s7_02'><b>1)</b> Objetivo de la visita.<br/><br/><b>2)</b> Cómo se planea alcanzar este objetivo.<br/><br/><b>3)</b> Qué objeciones anticipa, y cómo las planea manejar.</div>"+
		
			//03
		"<div class='all_leftText' id='all_leftText_liderazgo_s7_03'>Recuerde que de estos puntos saldrpa la discusión depués de la visita.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/Liderazgo/img_liderazgo_08.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>253</div>"+
		
	"" ;
	
	/////////////////////////////////Brasil
	var liderazgo_cicloEntrenamiento_aplicacion_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Aplicar</div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_liderazgo_s7_01'>O vendedor tenta demonstrar a tarefa que foi explicada e demonstrada. Visita de prova.<br/><br/>Antes da visita, pergunte ao vendedor:</div>"+
				//02
		"<div class='all_leftText_bullets' id='all_leftText_liderazgo_s7_02'><b>1)</b> Objetivo da visita<br/><br/><b>2)</b> Como planeja atingir este objetivo<br/><br/><b>3)</b> Que objeções pode antecipar, e como planeja lidar com elas</div>"+
		
			//03
		"<div class='all_leftText' id='all_leftText_liderazgo_s7_03'>Lembre que destes pontos vai sair a discussão depois da visita.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/Liderazgo/img_liderazgo_08.png'></div>"+

		//Slide Number
		"<div class='slideNumber'>199</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + liderazgo_cicloEntrenamiento_aplicacion_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_liderazgo_s7_01 = document.getElementById("all_leftText_liderazgo_s7_01") ;
			var all_leftText_liderazgo_s7_02 = document.getElementById("all_leftText_liderazgo_s7_02") ;
			
			var all_leftText_liderazgo_s7_03 = document.getElementById("all_leftText_liderazgo_s7_03") ;
			
			
			var all_rightImage = document.getElementById("all_rightImage") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_liderazgo_s7_01 , all_leftText_liderazgo_s7_03] , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			TweenMax.fromTo (all_leftText_liderazgo_s7_02 , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay:.5 } , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"100px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_liderazgo_cicloEntrenamiento_aplicacion_mexico()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_liderazgo_s7_01 = document.getElementById("all_leftText_liderazgo_s7_01") ;
				var all_leftText_liderazgo_s7_02 = document.getElementById("all_leftText_liderazgo_s7_02") ;
				
				var all_leftText_liderazgo_s7_03 = document.getElementById("all_leftText_liderazgo_s7_03") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_liderazgo_s7_01 , all_leftText_liderazgo_s7_02 , all_leftText_liderazgo_s7_03 , all_rightImage]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_liderazgo_s7_01 , all_leftText_liderazgo_s7_03] , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				TweenMax.fromTo (all_leftText_liderazgo_s7_02 , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"} , delay:.5 } , .25) ;
				
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
				exit_liderazgo_cicloEntrenamiento_aplicacion_mexico() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_cicloEntrenamiento_aplicacion_mexico() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_cicloEntrenamiento_aplicacion_mexico() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_cicloEntrenamiento_aplicacion_mexico() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_cicloEntrenamiento_aplicacion_mexico() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_liderazgo_cicloEntrenamiento_aplicacion_mexico() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_liderazgo_cicloEntrenamiento_aplicacion_mexico() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_liderazgo_cicloEntrenamiento_aplicacion_mexico() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Liderazgo/au_liderazgo_ciclo_entrenamiento_aplicacion_mex.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + liderazgo_cicloEntrenamiento_aplicacion_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_liderazgo_s7_01 = document.getElementById("all_leftText_liderazgo_s7_01") ;
			var all_leftText_liderazgo_s7_02 = document.getElementById("all_leftText_liderazgo_s7_02") ;
			
			var all_leftText_liderazgo_s7_03 = document.getElementById("all_leftText_liderazgo_s7_03") ;
			
			
			var all_rightImage = document.getElementById("all_rightImage") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_liderazgo_s7_01 , all_leftText_liderazgo_s7_03] , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			TweenMax.fromTo (all_leftText_liderazgo_s7_02 , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay:.5 } , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"100px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_liderazgo_cicloEntrenamiento_aplicacion()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_liderazgo_s7_01 = document.getElementById("all_leftText_liderazgo_s7_01") ;
				var all_leftText_liderazgo_s7_02 = document.getElementById("all_leftText_liderazgo_s7_02") ;
				
				var all_leftText_liderazgo_s7_03 = document.getElementById("all_leftText_liderazgo_s7_03") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_liderazgo_s7_01 , all_leftText_liderazgo_s7_02 , all_leftText_liderazgo_s7_03 , all_rightImage]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_liderazgo_s7_01 , all_leftText_liderazgo_s7_03] , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				TweenMax.fromTo (all_leftText_liderazgo_s7_02 , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"} , delay:.5 } , .25) ;
				
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
				exit_liderazgo_cicloEntrenamiento_aplicacion() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_cicloEntrenamiento_aplicacion() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_cicloEntrenamiento_aplicacion() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_cicloEntrenamiento_aplicacion() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_cicloEntrenamiento_aplicacion() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_liderazgo_cicloEntrenamiento_aplicacion() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_liderazgo_cicloEntrenamiento_aplicacion() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_liderazgo_cicloEntrenamiento_aplicacion() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Liderazgo/au_liderazgo_ciclo_entrenamiento_aplicacion_bra.mp3' ;
			
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
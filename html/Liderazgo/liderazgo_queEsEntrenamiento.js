<!--Educación al Farmacéutico 01-->
function liderazgo_queEsEntrenamiento()
{
	CleanScreen() ;
	
	gotoSlide = 'liderazgo_queEsEntrenamiento' ;
	
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_liderazgo_queEsEntrenamiento.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
	var liderazgo_queEsEntrenamiento_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>¿Qué es <b>Entrenamiento?</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_liderazgo_s1_01'>• Proceso formal que se inicia al determinar las áreas donde se necesita entrenamiento hasta el momento en que éstas áreas son dominadas por el individuo..<br/><br/>• Es un <b>proceso continuo</b> que hace parte del <b>día a día del trabajo!!!</b><br/><br/>• Es el vehículo para lograr los resultados esperados.</div>"+

			//02
		"<div class='all_leftText' id='all_leftText_liderazgo_s1_02'><b>Importancia de entrenar</b><br/><br/>Es  la responsabilidad de organización más importante de los gerentes inmediatos.</div>"+
			
			//03
		"<div class='all_leftText_bullet' id='all_leftText_liderazgo_s1_03'><b>Principales responsabilidades de un gerente:</b><br/><br/>• Efectuar contactos permanentes con sus reportes (evaluación, operacional, entrenamiento).<br/><br/>• Desarrollar las habilidades y hábitos de su gente.<br/><br/>• Proveer seguimiento y retroalimentación constante.</div>"+

			//04
		"<div class='all_leftText' id='all_leftText_liderazgo_s1_04'>Para que un plan de entrenamiento funcione deben existir objetivos y planes específicos <b>para cada miembro</b> del equipo, basados en las necesidades reales del individuo.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/Liderazgo/img_liderazgo_01.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>244</div>"+


	"" ;
	
	
	/////////////////////////////////Brasil
	var liderazgo_queEsEntrenamiento_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>O que é <b>treinamento?</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_liderazgo_s1_01'>• Processo formal que começa ao determinar as áreas onde o treinamento é necessário, até o momento em que estas áreas são dominadas pelo indivíduo.<br/><br/>• É um <b>processo contínuo</b> que faz parte do <b>dia-a-dia do trabalho!!!</b><br/><br/>• É o veículo para obter os resultados  esperados.</div>"+

			//02
		"<div class='all_leftText' id='all_leftText_liderazgo_s1_02'><b>Importância de treinar</b><br/><br/>É a responsabilidade mais importante dos supervisores/gerentes imediatos no que diz respeito à organização.</div>"+
			
			//03
		"<div class='all_leftText_bullet' id='all_leftText_liderazgo_s1_03'><b>Principais responsabilidades de um líder:</b><br/><br/>• Efetuar contatos permanentes (no campo) com sua equipe (avaliação, operacional, treinamento);<br/><br/>• Desenvolver as habilidades e disciplina operacional do sua equipe;<br/><br/>• Fornecer acompanhamento e feedback constante.</div>"+

			//04
		"<div class='all_leftText' id='all_leftText_liderazgo_s1_04'>Para que um plano de treinamento funcione devem existir objetivos e planos específicos <b>para cada membro</b> da equipe, baseados nas necessidades reais do indivíduo.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/Liderazgo/img_liderazgo_01.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>190</div>"+
		
	"" ;
	
	
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + liderazgo_queEsEntrenamiento_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_liderazgo_s1_01 = document.getElementById("all_leftText_liderazgo_s1_01") ;
			var all_leftText_liderazgo_s1_02 = document.getElementById("all_leftText_liderazgo_s1_02") ;
			var all_leftText_liderazgo_s1_03 = document.getElementById("all_leftText_liderazgo_s1_03") ;
			var all_leftText_liderazgo_s1_04 = document.getElementById("all_leftText_liderazgo_s1_04") ;
			
			var all_rightImage = document.getElementById("all_rightImage") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_liderazgo_s1_01 , all_leftText_liderazgo_s1_02 , all_leftText_liderazgo_s1_03 , all_leftText_liderazgo_s1_04] , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"100px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_liderazgo_queEsEntrenamiento_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_liderazgo_s1_01 = document.getElementById("all_leftText_liderazgo_s1_01") ;
				var all_leftText_liderazgo_s1_02 = document.getElementById("all_leftText_liderazgo_s1_02") ;
				var all_leftText_liderazgo_s1_03 = document.getElementById("all_leftText_liderazgo_s1_04") ;
				var all_leftText_liderazgo_s1_04 = document.getElementById("all_leftText_liderazgo_s1_03") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_liderazgo_s1_01 , all_leftText_liderazgo_s1_02 , all_leftText_liderazgo_s1_03 , all_leftText_liderazgo_s1_04 , all_rightImage]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_liderazgo_s1_01 , all_leftText_liderazgo_s1_02 , all_leftText_liderazgo_s1_03 , all_leftText_liderazgo_s1_04] , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
			
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"100px"}} , {css:{opacity:"0" , right:"150px"} , delay:1}) ;
				
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
							liderazgo_02() ;
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
				exit_liderazgo_queEsEntrenamiento_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_queEsEntrenamiento_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_queEsEntrenamiento_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_queEsEntrenamiento_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_queEsEntrenamiento_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_liderazgo_queEsEntrenamiento_mex() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_liderazgo_queEsEntrenamiento_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_liderazgo_queEsEntrenamiento_mex() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Liderazgo/au_liderazgo_queEsentrenamiento_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + liderazgo_queEsEntrenamiento_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_liderazgo_s1_01 = document.getElementById("all_leftText_liderazgo_s1_01") ;
			var all_leftText_liderazgo_s1_02 = document.getElementById("all_leftText_liderazgo_s1_02") ;
			var all_leftText_liderazgo_s1_03 = document.getElementById("all_leftText_liderazgo_s1_03") ;
			var all_leftText_liderazgo_s1_04 = document.getElementById("all_leftText_liderazgo_s1_04") ;
			
			var all_rightImage = document.getElementById("all_rightImage") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_liderazgo_s1_01 , all_leftText_liderazgo_s1_02 , all_leftText_liderazgo_s1_03 , all_leftText_liderazgo_s1_04] , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"100px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_liderazgo_queEsEntrenamiento()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_liderazgo_s1_01 = document.getElementById("all_leftText_liderazgo_s1_01") ;
				var all_leftText_liderazgo_s1_02 = document.getElementById("all_leftText_liderazgo_s1_02") ;
				var all_leftText_liderazgo_s1_03 = document.getElementById("all_leftText_liderazgo_s1_04") ;
				var all_leftText_liderazgo_s1_04 = document.getElementById("all_leftText_liderazgo_s1_03") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_liderazgo_s1_01 , all_leftText_liderazgo_s1_02 , all_leftText_liderazgo_s1_03 , all_leftText_liderazgo_s1_04 , all_rightImage]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_liderazgo_s1_01 , all_leftText_liderazgo_s1_02 , all_leftText_liderazgo_s1_03 , all_leftText_liderazgo_s1_04] , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
			
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"100px"}} , {css:{opacity:"0" , right:"150px"} , delay:1}) ;
				
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
							liderazgo_02() ;
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
				exit_liderazgo_queEsEntrenamiento() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_queEsEntrenamiento() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_queEsEntrenamiento() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_queEsEntrenamiento() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_queEsEntrenamiento() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_liderazgo_queEsEntrenamiento() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_liderazgo_queEsEntrenamiento() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_liderazgo_queEsEntrenamiento() ;
			});
			
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Liderazgo/au_liderazgo_enterenamiento_bra01.mp3' ;
			
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
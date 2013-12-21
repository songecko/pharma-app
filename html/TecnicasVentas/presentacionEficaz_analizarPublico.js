<!--Educación al Farmacéutico 01-->
function presentacionEficaz_analizarPublico()
{
	CleanScreen() ;
	
	gotoSlide = 'presentacionEficaz_analizarPublico' ;
	
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
		//"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_presentacionEficaz_analizarPublico.png' onmouseover='rollOver_ico_06()' /></div>"+
		
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
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Analizar la <b>Audiencia</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_presentacionEficaz_s2_01'>Para poder determinar la audiencia contesta las siguientes preguntas:</div>"+
				//02
		"<div class='all_leftText_bullet' id='all_leftText_presentacionEficaz_s2_02'><b>¿A quién visito?<br/><br/>¿Quiénes asisten?<br/><br/>¿Habrá gente que no conozca el tema?<br/><br/>¿Debo preparar información adicional?<br/><br/>¿Quiénes toman la decisión?<br/><br/>¿Quiénes evalúan lo que dices?</b></div>"+
		
			//03
		"<div class='all_leftText' id='all_leftText_presentacionEficaz_s2_03'>Es importante que consideres ponerte en los zapatos de todos los asistentes, eso te ayudará a prepararte mejor ante posibles objeciones que tengan relacionadas con su área.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/TecnicaVentas/PresentacionEficaz/img_presentacionEficaz_02.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>237</div>"+
		
		
	"" ;
	
	
	/////////////////////////////////Brasil
	var presentacionEficaz_01_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Analisar o <b>Público</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_presentacionEficaz_s2_01'>A fim de determinar as respostas da audiência seguintes perguntas:</div>"+
				//02
		"<div class='all_leftText_bullet' id='all_leftText_presentacionEficaz_s2_02'><b>Quem devo visitar?<br/><br/>Quem participa?<br/><br/>Existem pessoas que não conhecem o assunto?<br/><br/>Devo preparar informações adicionais?<br/><br/>Quem toma a decisão?<br/><br/>Quem avalia o que você diz?</b></div>"+
		
			//03
		"<div class='all_leftText' id='all_leftText_presentacionEficaz_s2_03'>É importante que você consiga se colocar no lugar dos presentes, que irão ajudá-lo a se preparar melhor para possíveis objeções que estão relacionados com a sua área.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/TecnicaVentas/PresentacionEficaz/img_presentacionEficaz_02.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>183</div>"+
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
			
			var all_leftText_presentacionEficaz_s2_01 = document.getElementById("all_leftText_presentacionEficaz_s2_01") ;
			var all_leftText_presentacionEficaz_s2_02 = document.getElementById("all_leftText_presentacionEficaz_s2_02") ;
			var all_leftText_presentacionEficaz_s2_03 = document.getElementById("all_leftText_presentacionEficaz_s2_03") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_presentacionEficaz_s2_01 , all_leftText_presentacionEficaz_s2_03] , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.fromTo (all_leftText_presentacionEficaz_s2_02 , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5}) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"0px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_presentacionEficaz_analizarPublico_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_presentacionEficaz_s2_01 = document.getElementById("all_leftText_presentacionEficaz_s2_01") ;
				var all_leftText_presentacionEficaz_s2_02 = document.getElementById("all_leftText_presentacionEficaz_s2_02") ;
				var all_leftText_presentacionEficaz_s2_03 = document.getElementById("all_leftText_presentacionEficaz_s2_03") ;

				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_presentacionEficaz_s2_01 , all_leftText_presentacionEficaz_s2_02 , all_rightImage]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_presentacionEficaz_s2_01 , all_leftText_presentacionEficaz_s2_03] , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				
				TweenMax.fromTo (all_leftText_presentacionEficaz_s2_02 , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}} , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"0px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
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
							presentacionEficaz_determinarObjetivo() ;
						break;
						
						case 1:
							presentacionEficaz_colectarInfo() ;
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
				exit_presentacionEficaz_analizarPublico_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_presentacionEficaz_analizarPublico_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_presentacionEficaz_analizarPublico_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_presentacionEficaz_analizarPublico_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_presentacionEficaz_analizarPublico_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_presentacionEficaz_analizarPublico_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
						pagChange = -1 ;
				exit_presentacionEficaz_analizarPublico_mex() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_presentacionEficaz_analizarPublico_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_presentacionEficaz_analizarPublico_mex() ;
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
			
			var all_leftText_presentacionEficaz_s2_01 = document.getElementById("all_leftText_presentacionEficaz_s2_01") ;
			var all_leftText_presentacionEficaz_s2_02 = document.getElementById("all_leftText_presentacionEficaz_s2_02") ;
			var all_leftText_presentacionEficaz_s2_03 = document.getElementById("all_leftText_presentacionEficaz_s2_03") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_presentacionEficaz_s2_01 , all_leftText_presentacionEficaz_s2_03] , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.fromTo (all_leftText_presentacionEficaz_s2_02 , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5}) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"0px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_presentacionEficaz_analizarPublico()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_presentacionEficaz_s2_01 = document.getElementById("all_leftText_presentacionEficaz_s2_01") ;
				var all_leftText_presentacionEficaz_s2_02 = document.getElementById("all_leftText_presentacionEficaz_s2_02") ;
				var all_leftText_presentacionEficaz_s2_03 = document.getElementById("all_leftText_presentacionEficaz_s2_03") ;

				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_presentacionEficaz_s2_01 , all_leftText_presentacionEficaz_s2_02 , all_rightImage]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_presentacionEficaz_s2_01 , all_leftText_presentacionEficaz_s2_03] , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				
				TweenMax.fromTo (all_leftText_presentacionEficaz_s2_02 , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}} , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"0px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
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
							presentacionEficaz_determinarObjetivo() ;
						break;
						
						case 1:
							presentacionEficaz_colectarInfo() ;
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
				exit_presentacionEficaz_analizarPublico() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_presentacionEficaz_analizarPublico() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_presentacionEficaz_analizarPublico() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_presentacionEficaz_analizarPublico() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_presentacionEficaz_analizarPublico() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_presentacionEficaz_analizarPublico() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
						pagChange = -1 ;
				exit_presentacionEficaz_analizarPublico() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_presentacionEficaz_analizarPublico() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_presentacionEficaz_analizarPublico() ;
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
<!--Educación al Farmacéutico 01-->
function liderazgo_entrenamientosEfectivos_03()
{
	CleanScreen() ;
	
	gotoSlide = 'liderazgo_entrenamientosEfectivos_03' ;
	
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_liderazgo_entrenamientosEfectivos.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
		"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
			
	"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////México
	var liderazgo_entrenamientosEfectivos_03_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Estabelecer <b>Objetivos de Entrenamiento</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_liderazgo_s3_01'>De acuerdo a la evaluación hecha entre el entrenador y el entrenado, y una vez definidas las fortalezas y las oportunidades, se deben fijar objetivos de modo que se pueda planificar a dónde debe dirigirse el vendedor y cómo llegar allí.</div>"+

			//02
		"<div class='all_leftText_bullet' id='all_leftText_liderazgo_s3_02'><b>1)</b> Máximo 1-2 objetivos al mismo tiempo.<br/><br/><b>2)</b> El vendedor debe de estar de acuerdo con los objetivos, estos deben ponerse por escrito (formato de objetivos de entrenamiento).</div>"+
				
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/Liderazgo/img_liderazgo_04.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>247</div>"+
		
	"" ;
	
	/////////////////////////////////Brasil
	var liderazgo_entrenamientosEfectivos_03_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Estabelecer <b>objetivos de treinamento</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_liderazgo_s3_01'>De acordo com a avaliação realizada entre o treinador e o treinado, e uma vez definidas as fortalezas e as oportunidades, devem-se fixar os objetivos, a fim de que se possa planejar aonde o vendedor deve ir e como chegar lá.</div>"+

			//02
		"<div class='all_leftText_bullet' id='all_leftText_liderazgo_s3_02'><b>1)</b> Máximo 1-2 objetivos ao mesmo tempo (1. Negócios; 2. Treinamento).<br/><br/><b>2)</b> O vendedor deve estar de acordo com os objetivos, estes devem constar por escrito (formato de objetivos de treinamento).</div>"+
				
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/Liderazgo/img_liderazgo_04.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>193</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + liderazgo_entrenamientosEfectivos_03_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_liderazgo_s3_01 = document.getElementById("all_leftText_liderazgo_s3_01") ;
			var all_leftText_liderazgo_s3_02 = document.getElementById("all_leftText_liderazgo_s3_02") ;
			
			var all_rightImage = document.getElementById("all_rightImage") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (all_leftText_liderazgo_s3_01 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}}) ;
			TweenMax.fromTo (all_leftText_liderazgo_s3_02 , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay:.5 }) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"100px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_liderazgo_entrenamientosEfectivos_03_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_liderazgo_s3_01 = document.getElementById("all_leftText_liderazgo_s3_01") ;
				var all_leftText_liderazgo_s3_02 = document.getElementById("all_leftText_liderazgo_s3_02") ;
				var all_leftText_liderazgo_s3_03 = document.getElementById("all_leftText_liderazgo_s3_04") ;
				var all_leftText_liderazgo_s3_04 = document.getElementById("all_leftText_liderazgo_s3_03") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_liderazgo_s3_01 , all_leftText_liderazgo_s3_02 , all_leftText_liderazgo_s3_03 , all_leftText_liderazgo_s3_04 , all_rightImage]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (all_leftText_liderazgo_s3_01 , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}}) ;
				TweenMax.fromTo (all_leftText_liderazgo_s3_02 , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}}) ;
				
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
							liderazgo_entrenamientosEfectivos_02() ;
						break;
						
						case 1:
							liderazgo_entrenamientosEfectivos_04() ;
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
				exit_liderazgo_entrenamientosEfectivos_03_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_entrenamientosEfectivos_03_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_entrenamientosEfectivos_03_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_entrenamientosEfectivos_03_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_entrenamientosEfectivos_03_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_liderazgo_entrenamientosEfectivos_03_mex() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_liderazgo_entrenamientosEfectivos_03_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_liderazgo_entrenamientosEfectivos_03_mex() ;
			});
			
				/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Liderazgo/au_liderazgo_ObjetivosEntrenamiento_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + liderazgo_entrenamientosEfectivos_03_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_liderazgo_s3_01 = document.getElementById("all_leftText_liderazgo_s3_01") ;
			var all_leftText_liderazgo_s3_02 = document.getElementById("all_leftText_liderazgo_s3_02") ;
			
			var all_rightImage = document.getElementById("all_rightImage") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (all_leftText_liderazgo_s3_01 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}}) ;
			TweenMax.fromTo (all_leftText_liderazgo_s3_02 , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay:.5 }) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"100px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_liderazgo_entrenamientosEfectivos_03()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_liderazgo_s3_01 = document.getElementById("all_leftText_liderazgo_s3_01") ;
				var all_leftText_liderazgo_s3_02 = document.getElementById("all_leftText_liderazgo_s3_02") ;
				var all_leftText_liderazgo_s3_03 = document.getElementById("all_leftText_liderazgo_s3_04") ;
				var all_leftText_liderazgo_s3_04 = document.getElementById("all_leftText_liderazgo_s3_03") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_liderazgo_s3_01 , all_leftText_liderazgo_s3_02 , all_leftText_liderazgo_s3_03 , all_leftText_liderazgo_s3_04 , all_rightImage]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (all_leftText_liderazgo_s3_01 , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}}) ;
				TweenMax.fromTo (all_leftText_liderazgo_s3_02 , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}}) ;
				
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
							liderazgo_entrenamientosEfectivos_02() ;
						break;
						
						case 1:
							liderazgo_entrenamientosEfectivos_04() ;
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
				exit_liderazgo_entrenamientosEfectivos_03() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_entrenamientosEfectivos_03() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_entrenamientosEfectivos_03() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_entrenamientosEfectivos_03() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_entrenamientosEfectivos_03() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_liderazgo_entrenamientosEfectivos_03() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_liderazgo_entrenamientosEfectivos_03() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_liderazgo_entrenamientosEfectivos_03() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Liderazgo/au_liderazgo_enterenamientoefectivo_bra03.mp3' ;
			
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
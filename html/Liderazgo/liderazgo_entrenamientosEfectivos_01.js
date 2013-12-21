<!--Educación al Farmacéutico 01-->
function liderazgo_entrenamientosEfectivos_01()
{
	CleanScreen() ;
	
	gotoSlide = 'liderazgo_entrenamientosEfectivos_01' ;
	
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
	var liderazgo_entrenamientosEfectivos_01_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Entrenamientos <b>Efectivos</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_liderazgo_s2_01'>Para realizar entrenamientos efectivos se deben seguir los siguientes pasos:</div>"+

			//02
		"<div class='all_leftText_bullet' id='all_leftText_liderazgo_s2_02'><b>1)</b> Revisión y evaluación del rendimiento del vendedor.<br/><br/><b>2)</b> Establecer objetivos de entrenamiento.<br/><br/><b>3)</b> Preparar un plan de entrenamiento.<br/><br/><b>4)</b> Ejecutar el plan de entrenamiento.<br/><br/><b>5)</b> Evaluación y documentación del entrenamiento.</div>"+
				
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/Liderazgo/img_liderazgo_02.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>245</div>"+
		
	"" ;
	
	/////////////////////////////////Brasil
	var liderazgo_entrenamientosEfectivos_01_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Treinamentos <b>Efetivos</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_liderazgo_s2_01'>Para realizar treinamentos efetivos os seguintes passos devem ser seguidos:</div>"+

			//02
		"<div class='all_leftText_bullet' id='all_leftText_liderazgo_s2_02'><b>1)</b> Revisão e avaliação do rendimento do vendedor.<br/><br/><b>2)</b> Estabelecer objetivos de treinamento.<br/><br/><b>3)</b> Preparar um plano de treinamento.<br/><br/><b>4)</b> Executar o plano de treinamento.<br/><br/><b>5)</b> Avaliação e documentação do treinamento. </div>"+
				
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/Liderazgo/img_liderazgo_02.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>191</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + liderazgo_entrenamientosEfectivos_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_liderazgo_s2_01 = document.getElementById("all_leftText_liderazgo_s2_01") ;
			var all_leftText_liderazgo_s2_02 = document.getElementById("all_leftText_liderazgo_s2_02") ;
			
			var all_rightImage = document.getElementById("all_rightImage") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (all_leftText_liderazgo_s2_01 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}}) ;
			TweenMax.fromTo (all_leftText_liderazgo_s2_02 , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay:.5 }) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"0px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_liderazgo_entrenamientosEfectivos_01_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_liderazgo_s2_01 = document.getElementById("all_leftText_liderazgo_s2_01") ;
				var all_leftText_liderazgo_s2_02 = document.getElementById("all_leftText_liderazgo_s2_02") ;
				var all_leftText_liderazgo_s2_03 = document.getElementById("all_leftText_liderazgo_s2_04") ;
				var all_leftText_liderazgo_s2_04 = document.getElementById("all_leftText_liderazgo_s2_03") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_liderazgo_s2_01 , all_leftText_liderazgo_s2_02 , all_leftText_liderazgo_s2_03 , all_leftText_liderazgo_s2_04 , all_rightImage]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (all_leftText_liderazgo_s2_01 , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}}) ;
				TweenMax.fromTo (all_leftText_liderazgo_s2_02 , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}}) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"0px"}} , {css:{opacity:"0" , right:"150px"} , delay:1}) ;
				
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
						
						case 1:
							liderazgo_entrenamientosEfectivos_02() ;
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
				exit_liderazgo_entrenamientosEfectivos_01_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_entrenamientosEfectivos_01_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_entrenamientosEfectivos_01_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_entrenamientosEfectivos_01_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_entrenamientosEfectivos_01_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_liderazgo_entrenamientosEfectivos_01_mex() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_liderazgo_entrenamientosEfectivos_01_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_liderazgo_entrenamientosEfectivos_01_mex() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Liderazgo/au_liderazgo_EntrenamientoEfectivo_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + liderazgo_entrenamientosEfectivos_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_liderazgo_s2_01 = document.getElementById("all_leftText_liderazgo_s2_01") ;
			var all_leftText_liderazgo_s2_02 = document.getElementById("all_leftText_liderazgo_s2_02") ;
			
			var all_rightImage = document.getElementById("all_rightImage") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (all_leftText_liderazgo_s2_01 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}}) ;
			TweenMax.fromTo (all_leftText_liderazgo_s2_02 , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay:.5 }) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"0px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_liderazgo_entrenamientosEfectivos_01()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_liderazgo_s2_01 = document.getElementById("all_leftText_liderazgo_s2_01") ;
				var all_leftText_liderazgo_s2_02 = document.getElementById("all_leftText_liderazgo_s2_02") ;
				var all_leftText_liderazgo_s2_03 = document.getElementById("all_leftText_liderazgo_s2_04") ;
				var all_leftText_liderazgo_s2_04 = document.getElementById("all_leftText_liderazgo_s2_03") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_liderazgo_s2_01 , all_leftText_liderazgo_s2_02 , all_leftText_liderazgo_s2_03 , all_leftText_liderazgo_s2_04 , all_rightImage]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (all_leftText_liderazgo_s2_01 , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}}) ;
				TweenMax.fromTo (all_leftText_liderazgo_s2_02 , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}}) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"0px"}} , {css:{opacity:"0" , right:"150px"} , delay:1}) ;
				
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
						
						case 1:
							liderazgo_entrenamientosEfectivos_02() ;
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
				exit_liderazgo_entrenamientosEfectivos_01() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_entrenamientosEfectivos_01() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_entrenamientosEfectivos_01() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_entrenamientosEfectivos_01() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_entrenamientosEfectivos_01() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_liderazgo_entrenamientosEfectivos_01() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_liderazgo_entrenamientosEfectivos_01() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_liderazgo_entrenamientosEfectivos_01() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Liderazgo/au_liderazgo_enterenamientoefectivo_bra01.mp3' ;
			
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
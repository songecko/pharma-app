<!--Objetivo-->
function objetivo()
{
	CleanScreen() ;
	
	gotoSlide = 'objetivo' ;
	
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
	/////////////////////////////////Mexico
	var objetivo_mexico =
		//Objetivo Image
		"<div class='txt_Objetivo' id='txt_Objetivo'>Este entrenamiento esta diseñado para darte las habilidades necesarias para que puedas realizar las tareas propias de tu rol.<br/><br/><br/>Al final de este entrenamiento accederás a una evaluación para que puedas ver qué tanto has aprendido.<br/><br/><br/><b>¡Bienvenido!</b></div>"+
		
		//Objetivo text
		"<div class='img_Objetivo' id='img_Objetivo'><img src='img/Objetivo/img_person_objetivo_Representante.png' id='img_obj_changing'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>003</div>"+
	
	"" ;
	
	/////////////////////////////////Brasil
	var objetivo_brasil =
		//Objetivo Image
		"<div class='txt_Objetivo' id='txt_Objetivo'>Esse treinamento foi desenvolvido para lhe dar as habilidades necessárias para realizar as tarefas da sua função.<br/><br/><br/>No final desse treinamento, você participará de uma avaliação para que possa ver quanto do conteúdo foi absorvido.<br/><br/><br/><b>Bem-vindo!</b></div>"+
		
		//Objetivo text
		"<div class='img_Objetivo' id='img_Objetivo'><img src='img/Objetivo/img_person_objetivo_Representante.png' id='img_obj_changing'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>003</div>"+

	"" ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	/////////////////////////////Language Country
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + objetivo_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/////////////////////////////Rol Selection adjustments
			switch (rolSelection)
			{
				case 1 :
					document.getElementById('img_obj_changing').src = 'img/Objetivo/img_person_objetivo_Representante.png' ;
				break ;
				
				case 2 :
					document.getElementById('img_obj_changing').src = 'img/Objetivo/img_person_objetivo_Promotor.png' ;
				break ;
				
				case 3 :
					document.getElementById('img_obj_changing').src = 'img/Objetivo/img_person_objetivo_Supervisor.png' ;
				break ;
				
				case 4 :
					document.getElementById('img_obj_changing').src = 'img/Objetivo/img_person_objetivo_RVEspelho.png' ;
				break ;
				
				case 5 :
					document.getElementById('img_obj_changing').src = 'img/Objetivo/img_person_objetivo_Gerente.png' ;
				break ;
				
				case 6 :
					document.getElementById('img_obj_changing').src = 'img/Objetivo/img_person_objetivo_PGer.png' ;
				break ;
			}
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var txt_Objetivo = document.getElementById("txt_Objetivo") ;
			var img_Objetivo = document.getElementById("img_Objetivo") ;
				
			TweenMax.fromTo (img_Objetivo , .5 , {css:{opacity:"0" , left:"0px"}} , {css:{opacity:"1" , left:"75px"}}) ;
			TweenMax.fromTo (txt_Objetivo , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:.25}) ;
			
			/////////////////////////////////Exit Objetivo
			function exit_Objetivo_mex()
			{
				var txt_Objetivo = document.getElementById("txt_Objetivo") ;
				var img_Objetivo = document.getElementById("img_Objetivo") ;
					
				TweenMax.fromTo (img_Objetivo , .25 , {css:{opacity:"1" , left:"75px"}} , {css:{opacity:"0" , left:"200px"}}) ;
				TweenMax.fromTo (txt_Objetivo , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
						
						case 1:
							menu_Rol() ;
						break ;
						
						case 2:
							menu_Principal() ;
						break ;				
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
				exit_Objetivo_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_Objetivo_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_Objetivo_mex() ;
			});
			
			//Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				//tiposTiendas_directas.src = '' ;
				exit_Objetivo_mex() ;
			}) ;
			
			/////////////////////////////////Back
			$('#flechaBack').click(function() {
				pagChange = 1 ;
				exit_Objetivo_mex() ;
			});
			
			/////////////////////////////////Next
			$('#flechaNext').click(function() {
				pagChange = 2 ;
				exit_Objetivo_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/au_objetivo_mex.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + objetivo_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/////////////////////////////Rol Selection adjustments
			switch (rolSelection)
			{
				case 1 :
					document.getElementById('img_obj_changing').src = 'img/Objetivo/img_person_objetivo_Representante.png' ;
				break ;
				
				case 2 :
					document.getElementById('img_obj_changing').src = 'img/Objetivo/img_person_objetivo_Promotor.png' ;
				break ;
				
				case 3 :
					document.getElementById('img_obj_changing').src = 'img/Objetivo/img_person_objetivo_Supervisor.png' ;
				break ;
				
				case 4 :
					document.getElementById('img_obj_changing').src = 'img/Objetivo/img_person_objetivo_RVEspelho.png' ;
				break ;
				
				case 5 :
					document.getElementById('img_obj_changing').src = 'img/Objetivo/img_person_objetivo_Gerente.png' ;
				break ;
				
				case 6 :
					document.getElementById('img_obj_changing').src = 'img/Objetivo/img_person_objetivo_PGer.png' ;
				break ;
			}
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var txt_Objetivo = document.getElementById("txt_Objetivo") ;
			var img_Objetivo = document.getElementById("img_Objetivo") ;
				
			TweenMax.fromTo (img_Objetivo , .5 , {css:{opacity:"0" , left:"0px"}} , {css:{opacity:"1" , left:"75px"}}) ;
			TweenMax.fromTo (txt_Objetivo , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:.25}) ;
			
			/////////////////////////////////Exit Objetivo
			function exit_Objetivo()
			{
				var txt_Objetivo = document.getElementById("txt_Objetivo") ;
				var img_Objetivo = document.getElementById("img_Objetivo") ;
					
				TweenMax.fromTo (img_Objetivo , .25 , {css:{opacity:"1" , left:"75px"}} , {css:{opacity:"0" , left:"200px"}}) ;
				TweenMax.fromTo (txt_Objetivo , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
						
						case 1:
							menu_Rol() ;
						break ;
						
						case 2:
							menu_Principal() ;
						break ;				
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
				exit_Objetivo() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_Objetivo() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_Objetivo() ;
			});
			
			//Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				//tiposTiendas_directas.src = '' ;
				exit_Objetivo() ;
			}) ;
			
			/////////////////////////////////Back
			$('#flechaBack').click(function() {
				pagChange = 1 ;
				exit_Objetivo() ;
			});
			
			/////////////////////////////////Next
			$('#flechaNext').click(function() {
				pagChange = 2 ;
				exit_Objetivo() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/au_objetivo_bra.mp3' ;
	
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
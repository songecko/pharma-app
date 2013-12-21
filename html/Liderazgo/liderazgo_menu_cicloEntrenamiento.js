<!--Menu rol-->
function liderazgo_menu_cicloEntrenamiento()
{
	CleanScreen() ;
	
	gotoSlide = 'liderazgo_menu_cicloEntrenamiento' ;
	
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
		"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()'><img src='img/img_flecha_back.png' /></div>"+
			//Siguiente
		"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
					
	"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////Mexico
	var liderazgo_menu_cicloEntrenamiento_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Ciclo de <b>Entrenamiento</b></div>"+
		 
		//Go to market > Image
		"<div class='organizacionAgencias_img' id='organizacionAgencias_img'><img src='img/Liderazgo/img_liderazgo_menu.png'></div>"+
		
		//Rectangle buttons
			//01
		"<div class='rectangle_01' id='rectangle_liderazgo_Ciclo_01' onmouseover='rollOver_liderazgo_cicloEntrenamiento_01()'>Explicación</div>"+
			//02
		"<div class='rectangle_01' id='rectangle_liderazgo_Ciclo_02' onmouseover='rollOver_liderazgo_cicloEntrenamiento_02()'>Demostración</div>"+
			//03
		"<div class='rectangle_01' id='rectangle_liderazgo_Ciclo_03' onmouseover='rollOver_liderazgo_cicloEntrenamiento_03()'>Ensayo</div>"+
			//04
		"<div class='rectangle_01' id='rectangle_liderazgo_Ciclo_04' onmouseover='rollOver_liderazgo_cicloEntrenamiento_04()'>Repaso Corrección</div>"+
		
		
		//Textos
			//01
		"<div class='liderazo_txt_bottom' id='liderazo_txt_bottom'>Lembre que só guardamos na nossa memória:</div>"+
		
			//02
		"<div class='liderazgo_txt_bottom_bullet_01' id='liderazgo_txt_bottom_bullet_01'><b>10%</b> de lo que leemos<br/><br/><b>50%</b> de lo que observamos</div>"+
			//03
		"<div class='liderazgo_txt_bottom_bullet_02' id='liderazgo_txt_bottom_bullet_02'><b>20%</b> de lo que escuchamos<br/><br/><b>90%</b> de lo que hacemos</div>"+
			//04
		"<div class='liderazgo_txt_bottom_bullet_03' id='liderazgo_txt_bottom_bullet_03'><b>30%</b> de lo que vemos</div>"+
		
		//Slide Number
		"<div class='slideNumber'>250</div>"+

	"" ;
	
	
	/////////////////////////////////Brasil
	var liderazgo_menu_cicloEntrenamiento_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Ciclo de <b>Treinamento</b></div>"+
		 
		//Go to market > Image
		"<div class='organizacionAgencias_img' id='organizacionAgencias_img'><img src='img/Liderazgo/img_liderazgo_menu.png'></div>"+
		
		//Rectangle buttons
			//01
		"<div class='rectangle_01' id='rectangle_liderazgo_Ciclo_01' onmouseover='rollOver_liderazgo_cicloEntrenamiento_01()'>Explicação</div>"+
			//02
		"<div class='rectangle_01' id='rectangle_liderazgo_Ciclo_02' onmouseover='rollOver_liderazgo_cicloEntrenamiento_02()'>Demonstração</div>"+
			//03
		"<div class='rectangle_01' id='rectangle_liderazgo_Ciclo_03' onmouseover='rollOver_liderazgo_cicloEntrenamiento_03()'>Aplicação</div>"+
			//04
		"<div class='rectangle_01' id='rectangle_liderazgo_Ciclo_04' onmouseover='rollOver_liderazgo_cicloEntrenamiento_04()'>Correção</div>"+
		
		
		//Textos
			//01
		"<div class='liderazo_txt_bottom' id='liderazo_txt_bottom'>Lembre que só guardamos na nossa memória:</div>"+
		
			//02
		"<div class='liderazgo_txt_bottom_bullet_01' id='liderazgo_txt_bottom_bullet_01'><b>10%</b> do que lemos<br/><br/><b>50%</b> do que observamos</div>"+
			//03
		"<div class='liderazgo_txt_bottom_bullet_02' id='liderazgo_txt_bottom_bullet_02'><b>20%</b> do que escutamos<br/><br/><b>90%</b> do que fazemos</div>"+
			//04
		"<div class='liderazgo_txt_bottom_bullet_03' id='liderazgo_txt_bottom_bullet_03'><b>30%</b> do que vemos</div>"+

		//Slide Number
		"<div class='slideNumber'>196</div>"+

	"" ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + liderazgo_menu_cicloEntrenamiento_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var organizacionAgencias_img = document.getElementById("organizacionAgencias_img") ;
			
			var liderazo_txt_bottom = document.getElementById("liderazo_txt_bottom") ;
			
			var liderazgo_txt_bottom_bullet_01 = document.getElementById("liderazgo_txt_bottom_bullet_01") ;
			var liderazgo_txt_bottom_bullet_02 = document.getElementById("liderazgo_txt_bottom_bullet_02") ;
			var liderazgo_txt_bottom_bullet_03 = document.getElementById("liderazgo_txt_bottom_bullet_03") ;
			
			var rectangle_liderazgo_Ciclo_01 = document.getElementById("rectangle_liderazgo_Ciclo_01") ;
			var rectangle_liderazgo_Ciclo_02 = document.getElementById("rectangle_liderazgo_Ciclo_02") ;
			var rectangle_liderazgo_Ciclo_03 = document.getElementById("rectangle_liderazgo_Ciclo_03") ;
			var rectangle_liderazgo_Ciclo_04 = document.getElementById("rectangle_liderazgo_Ciclo_04") ;
					
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (organizacionAgencias_img , 1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			
			TweenMax.staggerFromTo ([liderazgo_txt_bottom_bullet_01 , liderazgo_txt_bottom_bullet_02 , liderazgo_txt_bottom_bullet_03] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
			TweenMax.staggerFromTo ([rectangle_liderazgo_Ciclo_01 , rectangle_liderazgo_Ciclo_02 , rectangle_liderazgo_Ciclo_03 , rectangle_liderazgo_Ciclo_04] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
			
			/////////////////////////////////Exit animation
			function exit_liderazgo_menu_cicloEntrenamiento_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var organizacionAgencias_img = document.getElementById("organizacionAgencias_img") ;
				
				var liderazo_txt_bottom = document.getElementById("liderazo_txt_bottom") ;
				var liderazgo_txt_bottom_bullet_01 = document.getElementById("liderazgo_txt_bottom_bullet_01") ;
				var liderazgo_txt_bottom_bullet_02 = document.getElementById("liderazgo_txt_bottom_bullet_02") ;
				
				var liderazgo_txt_bottom_bullet_03 = document.getElementById("liderazgo_txt_bottom_bullet_03") ;
						
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				
				TweenMax.staggerFromTo ([liderazo_txt_bottom , liderazgo_txt_bottom_bullet_01 , liderazgo_txt_bottom_bullet_02 , liderazgo_txt_bottom_bullet_03] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
				TweenMax.staggerFromTo ([rectangle_liderazgo_Ciclo_01 , rectangle_liderazgo_Ciclo_02 , rectangle_liderazgo_Ciclo_03 , rectangle_liderazgo_Ciclo_04] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
				TweenMax.fromTo (organizacionAgencias_img , 1.5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , onComplete:ChangePage}) ;
				
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
							liderazgo_cicloEntrenamiento() ;
						break ;
						
						case 2:
							liderazgo_cicloEntrenamiento_explicacion() ;
						break ;
						
						case 3:
							liderazgo_cicloEntrenamiento_demostracion() ;
						break ;
						
						case 4:
							liderazgo_cicloEntrenamiento_aplicacion() ;
						break ;
						
						case 5:
							liderazgo_cicloEntrenamiento_correccion() ;
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
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
			/////////////////////////////////Rectangle 01
			$('#rectangle_liderazgo_Ciclo_01').click(function() {
				pagChange = 2 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
			/////////////////////////////////Rectangle 02
			$('#rectangle_liderazgo_Ciclo_02').click(function() {
				pagChange = 3 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
			/////////////////////////////////Rectangle 03
			$('#rectangle_liderazgo_Ciclo_03').click(function() {
				pagChange = 4 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
			/////////////////////////////////Rectangle 04
			$('#rectangle_liderazgo_Ciclo_04').click(function() {
				pagChange = 5 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Liderazgo/au_liderazgo_menu_ciclo_enterenamiento_mex.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + liderazgo_menu_cicloEntrenamiento_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var organizacionAgencias_img = document.getElementById("organizacionAgencias_img") ;
			
			var liderazo_txt_bottom = document.getElementById("liderazo_txt_bottom") ;
			
			var liderazgo_txt_bottom_bullet_01 = document.getElementById("liderazgo_txt_bottom_bullet_01") ;
			var liderazgo_txt_bottom_bullet_02 = document.getElementById("liderazgo_txt_bottom_bullet_02") ;
			var liderazgo_txt_bottom_bullet_03 = document.getElementById("liderazgo_txt_bottom_bullet_03") ;
			
			var rectangle_liderazgo_Ciclo_01 = document.getElementById("rectangle_liderazgo_Ciclo_01") ;
			var rectangle_liderazgo_Ciclo_02 = document.getElementById("rectangle_liderazgo_Ciclo_02") ;
			var rectangle_liderazgo_Ciclo_03 = document.getElementById("rectangle_liderazgo_Ciclo_03") ;
			var rectangle_liderazgo_Ciclo_04 = document.getElementById("rectangle_liderazgo_Ciclo_04") ;
					
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (organizacionAgencias_img , 1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			
			TweenMax.staggerFromTo ([liderazgo_txt_bottom_bullet_01 , liderazgo_txt_bottom_bullet_02 , liderazgo_txt_bottom_bullet_03] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
			TweenMax.staggerFromTo ([rectangle_liderazgo_Ciclo_01 , rectangle_liderazgo_Ciclo_02 , rectangle_liderazgo_Ciclo_03 , rectangle_liderazgo_Ciclo_04] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
			
			/////////////////////////////////Exit animation
			function exit_liderazgo_menu_cicloEntrenamiento()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var organizacionAgencias_img = document.getElementById("organizacionAgencias_img") ;
				
				var liderazo_txt_bottom = document.getElementById("liderazo_txt_bottom") ;
				var liderazgo_txt_bottom_bullet_01 = document.getElementById("liderazgo_txt_bottom_bullet_01") ;
				var liderazgo_txt_bottom_bullet_02 = document.getElementById("liderazgo_txt_bottom_bullet_02") ;
				
				var liderazgo_txt_bottom_bullet_03 = document.getElementById("liderazgo_txt_bottom_bullet_03") ;
						
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				
				TweenMax.staggerFromTo ([liderazo_txt_bottom , liderazgo_txt_bottom_bullet_01 , liderazgo_txt_bottom_bullet_02 , liderazgo_txt_bottom_bullet_03] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
				TweenMax.staggerFromTo ([rectangle_liderazgo_Ciclo_01 , rectangle_liderazgo_Ciclo_02 , rectangle_liderazgo_Ciclo_03 , rectangle_liderazgo_Ciclo_04] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
				TweenMax.fromTo (organizacionAgencias_img , 1.5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , onComplete:ChangePage}) ;
				
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
							liderazgo_cicloEntrenamiento() ;
						break ;
						
						case 2:
							liderazgo_cicloEntrenamiento_explicacion() ;
						break ;
						
						case 3:
							liderazgo_cicloEntrenamiento_demostracion() ;
						break ;
						
						case 4:
							liderazgo_cicloEntrenamiento_aplicacion() ;
						break ;
						
						case 5:
							liderazgo_cicloEntrenamiento_correccion() ;
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
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_liderazgo_menu_cicloEntrenamiento_mex() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_liderazgo_menu_cicloEntrenamiento() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_liderazgo_menu_cicloEntrenamiento() ;
			});
			
			/////////////////////////////////Rectangle 01
			$('#rectangle_liderazgo_Ciclo_01').click(function() {
				pagChange = 2 ;
				exit_liderazgo_menu_cicloEntrenamiento() ;
			});
			
			/////////////////////////////////Rectangle 02
			$('#rectangle_liderazgo_Ciclo_02').click(function() {
				pagChange = 3 ;
				exit_liderazgo_menu_cicloEntrenamiento() ;
			});
			
			/////////////////////////////////Rectangle 03
			$('#rectangle_liderazgo_Ciclo_03').click(function() {
				pagChange = 4 ;
				exit_liderazgo_menu_cicloEntrenamiento() ;
			});
			
			/////////////////////////////////Rectangle 04
			$('#rectangle_liderazgo_Ciclo_04').click(function() {
				pagChange = 5 ;
				exit_liderazgo_menu_cicloEntrenamiento() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/Liderazgo/au_liderazgo_menu_ciclo_enterenamiento_bra.mp3' ;
			
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
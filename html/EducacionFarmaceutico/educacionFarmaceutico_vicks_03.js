<!--Language Selector-->
function educacionFarmaceutico_vicks_03()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_vicks_03' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_educacionFarmaceutico.png' onmouseover='rollOver_ico_04()' /></div>"+
		
		//Vick
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_marcas_Vicks.png' onmouseover='rollOver_ico_05()' /></div>"+
		
	"" ;
	
	/*****************************
	General Elements
	*****************************/
	var generalElements =		
		//Logo Pharma Latam
		//"<div class='topLogoPharma'><img src='img/img_logoPharma.png' height='80'/></div>"+
		
		//Top Line
		//"<div class='topLine'><img src='img/img_topLine.png'/></div>"+
		
		//Top Multiple Logos
		//"<div class='topMultipleLogos_Language'><img src='img/img_logosFull.png' height='30'/></div>"+
		
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
	var educacionFarmaceutico_vicks_03_mexico =
		//Logo
		"<div class='vicks_logoVicks' id='vicks_logoVicks'><img src='img/img_logo_vicks.png'></div>"+
				
		//Bottle
		"<div class='vicks_bottle' id='vicks_bottle_blue'><img src='img/Vicks/img_bottle_vicks_blue.png' /></div>"+
		
			//Shadow
		"<div class='vicks_bottle_shadow' id='vicks_bottle_shadow'><img src='img/Vicks/img_bottle_shadow.png' /></div>"+
		
		//Bottle Woman
		"<div class='vicks_bottle' id='img_bottle_topGirl'><img src='img/Vicks/img_bottle_topGirl.png' /></div>"+
		
		//VapoRub
		"<div class='vicks_s3_vapoRub_txt' id='vicks_s3_vapoRub_txt'>VapoRub®</div>"+
		
		//Alivia
		"<div class='vicks_s3_alivia_txt' id='vicks_s3_alivia_txt'>alivia</div>"+
		
		//3 text
		"<div class='vicks_s3_3_txt' id='vicks_s3_3_txt'>3</div>"+
		
		//Sintomas txt
		"<div class='vicks_s3_sintomas_txt' id='vicks_s3_sintomas_txt'>síntomas:</div>"+
		
		//Bullets
			//01
		"<div class='vicks_s3_bullets' id='vicks_s3_bullets_01'><li>congestión nasal</li></div>"+
		
			//02
		"<div class='vicks_s3_bullets' id='vicks_s3_bullets_02'><li>dolores musculares</li></div>"+
		
			//03
		"<div class='vicks_s3_bullets' id='vicks_s3_bullets_03'><li>tos</li></div>"+
		
		//Buena noche
		"<div class='vicks_s3_buenaNoche' id='vicks_s3_buenaNoche'>Para una <br/>buena noche de sueño</div>"+
		
		//Note
		"<div class='vicks_notes' id='vicks_s3_notes_01'>*Encuesta realizada a 413 en el 2011</div>"+
		
		//VapoRub ungüento
		"<div id='vicks_s3_unguento'><img src='img/Vicks/img_vicks_vaporub.png'/></div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguiente_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>154</div>"+

	"" ;
	
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_vicks_03_brasil =
		//Logo
		"<div class='vicks_logoVicks' id='vicks_logoVicks'><img src='img/img_logo_vicks.png'></div>"+
				
		//Bottle
		"<div class='vicks_bottle' id='vicks_bottle_blue'><img src='img/Vicks/img_bottle_vicks_blue.png' /></div>"+
		
			//Shadow
		"<div class='vicks_bottle_shadow' id='vicks_bottle_shadow'><img src='img/Vicks/img_bottle_shadow.png' /></div>"+
		
		//Bottle Woman
		"<div class='vicks_bottle' id='img_bottle_topGirl'><img src='img/Vicks/img_bottle_topGirl.png' /></div>"+
		
		//VapoRub
		"<div class='vicks_s3_vapoRub_txt' id='vicks_s3_vapoRub_txt'>VapoRub®</div>"+
		
		//Alivia
		"<div class='vicks_s3_alivia_txt' id='vicks_s3_alivia_txt'>alivia</div>"+
		
		//3 text
		"<div class='vicks_s3_3_txt' id='vicks_s3_3_txt'>3</div>"+
		
		//Sintomas txt
		"<div class='vicks_s3_sintomas_txt' id='vicks_s3_sintomas_txt'>sintomas:</div>"+
		
		//Bullets
			//01
		"<div class='vicks_s3_bullets' id='vicks_s3_bullets_01'><li>a congestão nasal</li></div>"+
		
			//02
		"<div class='vicks_s3_bullets' id='vicks_s3_bullets_02'><li>as dores musculares</li></div>"+
		
			//03
		"<div class='vicks_s3_bullets' id='vicks_s3_bullets_03'><li>e a tosse</li></div>"+
		
		//Buena noche
		"<div class='vicks_s3_buenaNoche' id='vicks_s3_buenaNoche'>para uma <br/>boa noite de sono.</div>"+
		
		//Note
		"<div class='vicks_notes' id='vicks_s3_notes_01'>*Questionário realizado a 413 en el 2011</div>"+
		
		//VapoRub ungüento
		"<div id='vicks_s3_unguento'><img src='img/Vicks/img_vicks_vaporub.png'/></div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguinte_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>115</div>"+

	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_vicks_03_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Variable actions
			***********************************************/
			var action_01 = 0 ;
			
			/**********************************************
			Button Actions
			***********************************************/			
			//Este lo agregue
			/*button next*/
			$('#buttonNext').click(function() {
				action_01++ ;
				
				switch(action_01)
				{
					case 1:
						actions_01_mex() ;
					break ;
					
					case 2:
						actions_02_mex() ;
					break ;
					
					case 3:
						actions_03_mex() ;
					break ;
					
					case 4:
						actions_04_mex() ;
					break ;
					
					case 5:
						actions_05_mex() ;
					break ;
				}
			});
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var vicks_bottle_blue = document.getElementById("vicks_bottle_blue") ;
			var vicks_bottle_shadow = document.getElementById("vicks_bottle_shadow") ;
			
			var img_bottle_topGirl = document.getElementById("img_bottle_topGirl") ;
			
			var vicks_s3_vapoRub_txt = document.getElementById("vicks_s3_vapoRub_txt") ;
			
			var vicks_s3_alivia_txt = document.getElementById("vicks_s3_alivia_txt") ;
			var vicks_s3_3_txt = document.getElementById("vicks_s3_3_txt") ;
			var vicks_s3_sintomas_txt = document.getElementById("vicks_s3_sintomas_txt") ;
			
			var vicks_s3_bullets_01 = document.getElementById("vicks_s3_bullets_01") ;
			var vicks_s3_bullets_02 = document.getElementById("vicks_s3_bullets_02") ;
			var vicks_s3_bullets_03 = document.getElementById("vicks_s3_bullets_03") ;
			
			var vicks_s3_buenaNoche = document.getElementById("vicks_s3_buenaNoche") ;
			
			var vicks_s3_notes_01 = document.getElementById("vicks_s3_notes_01") ;
			
			var vicks_s3_unguento = document.getElementById("vicks_s3_unguento") ;
			
			vicks_bottle_shadow.style.opacity = '0' ;
			img_bottle_topGirl.style.opacity = '0' ;
			vicks_s3_vapoRub_txt.style.opacity = '0' ;
			vicks_s3_alivia_txt.style.opacity = '0' ;
			vicks_s3_3_txt.style.opacity = '0' ;
			vicks_s3_sintomas_txt.style.opacity = '0' ;
			vicks_s3_bullets_01.style.opacity = '0' ;
			vicks_s3_bullets_02.style.opacity = '0' ;
			vicks_s3_bullets_03.style.opacity = '0' ;
			vicks_s3_buenaNoche.style.opacity = '0' ;
			vicks_s3_notes_01.style.opacity = '0' ;
			vicks_s3_unguento.style.opacity = '0' ;
			
			TweenMax.fromTo (img_bottle_topGirl , 1 , {css:{opacity:"0" , top:"150px"}} , {css:{opacity:"1" , top:"75px"} , ease:Power2.easeOut}) ;
			TweenMax.staggerFromTo ([vicks_s3_vapoRub_txt , vicks_s3_alivia_txt , vicks_s3_3_txt , vicks_s3_sintomas_txt] , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:1 , ease:Power2.easeOut} , .25) ;
			
			/**********************************************
			Actions functions
			***********************************************/
			//01
			function actions_01_mex()
			{		
				TweenMax.fromTo (vicks_s3_bullets_01 , .5 , {css:{opacity:"0" , left:"510px"}} , {css:{opacity:"1" , left:"425px"} , ease:Power2.easeOut}) ;
			}
			
			//02
			function actions_02_mex()
			{
				TweenMax.fromTo (vicks_s3_bullets_02 , .5 , {css:{opacity:"0" , left:"510px"}} , {css:{opacity:"1" , left:"425px"} , ease:Power2.easeOut}) ;
			}
			
			//03
			function actions_03_mex()
			{
				TweenMax.fromTo (vicks_s3_bullets_03 , .5 , {css:{opacity:"0" , left:"510px"}} , {css:{opacity:"1" , left:"425px"} , ease:Power2.easeOut}) ;
			}
			
			//04
			function actions_04_mex()
			{
				TweenMax.staggerFromTo ([vicks_s3_buenaNoche , vicks_s3_notes_01] , 1 , {css:{opacity:"0" , transform:"scale(.5,.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut} , .25) ;
			}
			
			//05
			function actions_05_mex()
			{
				TweenMax.fromTo (vicks_bottle_blue , 1 , {css:{left:"450px"}} , {css:{left:"300px"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (vicks_bottle_shadow , 1 , {css:{left:"310px"}} , {css:{left:"175px"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (img_bottle_topGirl , 1 , {css:{left:"450px"}} , {css:{left:"300px"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo ([vicks_s3_vapoRub_txt  , vicks_s3_alivia_txt , vicks_s3_3_txt , vicks_s3_sintomas_txt], 1 , {css:{left:"510px"}} , {css:{left:"360px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo ([vicks_s3_bullets_01  , vicks_s3_bullets_02 , vicks_s3_bullets_03], 1 , {css:{left:"425px"}} , {css:{left:"275px"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (vicks_s3_buenaNoche , 1 , {css:{left:"460px"}} , {css:{left:"310px"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (vicks_s3_notes_01 , 1 , {css:{left:"470px"}} , {css:{left:"320px"} , ease:Power2.easeOut}) ;
			
				TweenMax.fromTo (vicks_s3_unguento , 2 , {rotationZ:-360} , {rotationZ:0 , delay:1 , ease:Power2.easeOut}) ;
				TweenMax.fromTo (vicks_s3_unguento , 2 , {css:{opacity:"0" , left:"300px"}} , {css:{opacity:"1" , left:"665px"} , delay:1 , ease:Power2.easeOut}) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_vicks_03_mex()
			{
				var vicks_bottle_blue = document.getElementById("vicks_bottle_blue") ;
				var vicks_bottle_shadow = document.getElementById("vicks_bottle_shadow") ;
				
				var img_bottle_topGirl = document.getElementById("img_bottle_topGirl") ;
				
				var vicks_s3_vapoRub_txt = document.getElementById("vicks_s3_vapoRub_txt") ;
				
				var vicks_s3_alivia_txt = document.getElementById("vicks_s3_alivia_txt") ;
				var vicks_s3_3_txt = document.getElementById("vicks_s3_3_txt") ;
				var vicks_s3_sintomas_txt = document.getElementById("vicks_s3_sintomas_txt") ;
				
				var vicks_s3_bullets_01 = document.getElementById("vicks_s3_bullets_01") ;
				var vicks_s3_bullets_02 = document.getElementById("vicks_s3_bullets_02") ;
				var vicks_s3_bullets_03 = document.getElementById("vicks_s3_bullets_03") ;
				
				var vicks_s3_buenaNoche = document.getElementById("vicks_s3_buenaNoche") ;
				
				var vicks_s3_notes_01 = document.getElementById("vicks_s3_notes_01") ;
				
				var vicks_s3_unguento = document.getElementById("vicks_s3_unguento") ;
				
				
				TweenMax.fromTo (img_bottle_topGirl , 1 , {css:{opacity:"1" , top:"75px"}} , {css:{opacity:"0" , top:"175px"} , ease:Power2.easeOut}) ;
			
				TweenMax.staggerFromTo ([vicks_s3_vapoRub_txt , vicks_s3_alivia_txt , vicks_s3_3_txt , vicks_s3_sintomas_txt] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut} , .25) ;
				
				TweenMax.staggerFromTo ([vicks_s3_bullets_01 , vicks_s3_bullets_02 , vicks_s3_bullets_03] , .5 , {css:{opacity:"1" , left:"425px"}} , {css:{opacity:"0" , left:"200px"} , ease:Power2.easeOut} , .25) ;
				
				TweenMax.staggerFromTo ([vicks_s3_buenaNoche , vicks_s3_notes_01] , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.5,.5)"} , ease:Power2.easeOut} , .25) ;
				
				TweenMax.fromTo (vicks_s3_unguento , 2 , {css:{opacity:"1" , left:"665px"}} , {css:{opacity:"0" , left:"1000px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (vicks_bottle_blue , 3 , {css:{left:"300px"}} , {css:{left:"150px"} , ease:Power2.easeOut , onComplete:ChangePage}) ;
				TweenMax.fromTo (vicks_bottle_shadow , 3 , {css:{left:"175px"}} , {css:{left:"10px"} , ease:Power2.easeOut}) ;
				
				function ChangePage()
				{
					switch(pagChange)
					{						
						case -6:
							educacionFarmaceutico_05() ;
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
							educacionFarmaceutico_vicks_02() ;
						break;
						
						case 1:
							educacionFarmaceutico_vicks_04() ;
						break ;
					}
				}
			}
			
			//////////////////////////Kill Tweens
			function kill_vicks_brochure_03_mex()
			{
				var vicks_bottle_blue = document.getElementById("vicks_bottle_blue") ;
				var vicks_bottle_shadow = document.getElementById("vicks_bottle_shadow") ;
				
				var img_bottle_topGirl = document.getElementById("img_bottle_topGirl") ;
				
				var vicks_s3_vapoRub_txt = document.getElementById("vicks_s3_vapoRub_txt") ;
				
				var vicks_s3_alivia_txt = document.getElementById("vicks_s3_alivia_txt") ;
				var vicks_s3_3_txt = document.getElementById("vicks_s3_3_txt") ;
				var vicks_s3_sintomas_txt = document.getElementById("vicks_s3_sintomas_txt") ;
				
				var vicks_s3_bullets_01 = document.getElementById("vicks_s3_bullets_01") ;
				var vicks_s3_bullets_02 = document.getElementById("vicks_s3_bullets_02") ;
				var vicks_s3_bullets_03 = document.getElementById("vicks_s3_bullets_03") ;
				
				var vicks_s3_buenaNoche = document.getElementById("vicks_s3_buenaNoche") ;
				
				var vicks_s3_notes_01 = document.getElementById("vicks_s3_notes_01") ;
				
				var vicks_s3_unguento = document.getElementById("vicks_s3_unguento") ;
					
				TweenMax.killTweensOf ([vicks_bottle_blue , vicks_bottle_shadow , img_bottle_topGirl , vicks_s3_vapoRub_txt , vicks_s3_alivia_txt , vicks_s3_3_txt , vicks_s3_sintomas_txt , vicks_s3_bullets_01 , vicks_s3_bullets_02 , vicks_s3_bullets_03 , vicks_s3_buenaNoche , vicks_s3_notes_01 , vicks_s3_unguento]) ;
				
				TweenMax.to ([vicks_bottle_blue , vicks_bottle_shadow , img_bottle_topGirl , vicks_s3_vapoRub_txt , vicks_s3_alivia_txt , vicks_s3_3_txt , vicks_s3_sintomas_txt , vicks_s3_bullets_01 , vicks_s3_bullets_02 , vicks_s3_bullets_03 , vicks_s3_buenaNoche , vicks_s3_notes_01 , vicks_s3_unguento] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;	
			}

			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_educacionFarmaceutico_vicks_03_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_vicks_03_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_vicks_03_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_vicks_03_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_vicks_03_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_vicks_03_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_vicks_03_mex() ;
			});
	
			/*FlechaBack*/
			$('#flechaBack').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 0 ;
				
				kill_vicks_brochure_03_mex () ;
				exit_educacionFarmaceutico_vicks_03_mex () ;
			});
			
				/*FlechaNext*/
			$('#flechaNext').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 1 ;
				
				kill_vicks_brochure_03_mex () ;
				exit_educacionFarmaceutico_vicks_03_mex () ;
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_vicks_03_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Variable actions
			***********************************************/
			var action_01 = 0 ;
			
			/**********************************************
			Button Actions
			***********************************************/			
			//Este lo agregue
			/*button next*/
			$('#buttonNext').click(function() {
				action_01++ ;
				
				switch(action_01)
				{
					case 1:
						actions_01() ;
					break ;
					
					case 2:
						actions_02() ;
					break ;
					
					case 3:
						actions_03() ;
					break ;
					
					case 4:
						actions_04() ;
					break ;
					
					case 5:
						actions_05() ;
					break ;
				}
			});
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var vicks_bottle_blue = document.getElementById("vicks_bottle_blue") ;
			var vicks_bottle_shadow = document.getElementById("vicks_bottle_shadow") ;
			
			var img_bottle_topGirl = document.getElementById("img_bottle_topGirl") ;
			
			var vicks_s3_vapoRub_txt = document.getElementById("vicks_s3_vapoRub_txt") ;
			
			var vicks_s3_alivia_txt = document.getElementById("vicks_s3_alivia_txt") ;
			var vicks_s3_3_txt = document.getElementById("vicks_s3_3_txt") ;
			var vicks_s3_sintomas_txt = document.getElementById("vicks_s3_sintomas_txt") ;
			
			var vicks_s3_bullets_01 = document.getElementById("vicks_s3_bullets_01") ;
			var vicks_s3_bullets_02 = document.getElementById("vicks_s3_bullets_02") ;
			var vicks_s3_bullets_03 = document.getElementById("vicks_s3_bullets_03") ;
			
			var vicks_s3_buenaNoche = document.getElementById("vicks_s3_buenaNoche") ;
			
			var vicks_s3_notes_01 = document.getElementById("vicks_s3_notes_01") ;
			
			var vicks_s3_unguento = document.getElementById("vicks_s3_unguento") ;
			
			vicks_bottle_shadow.style.opacity = '0' ;
			img_bottle_topGirl.style.opacity = '0' ;
			vicks_s3_vapoRub_txt.style.opacity = '0' ;
			vicks_s3_alivia_txt.style.opacity = '0' ;
			vicks_s3_3_txt.style.opacity = '0' ;
			vicks_s3_sintomas_txt.style.opacity = '0' ;
			vicks_s3_bullets_01.style.opacity = '0' ;
			vicks_s3_bullets_02.style.opacity = '0' ;
			vicks_s3_bullets_03.style.opacity = '0' ;
			vicks_s3_buenaNoche.style.opacity = '0' ;
			vicks_s3_notes_01.style.opacity = '0' ;
			vicks_s3_unguento.style.opacity = '0' ;
			
			TweenMax.fromTo (img_bottle_topGirl , 1 , {css:{opacity:"0" , top:"150px"}} , {css:{opacity:"1" , top:"75px"} , ease:Power2.easeOut}) ;
			TweenMax.staggerFromTo ([vicks_s3_vapoRub_txt , vicks_s3_alivia_txt , vicks_s3_3_txt , vicks_s3_sintomas_txt] , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:1 , ease:Power2.easeOut} , .25) ;
			
			/**********************************************
			Actions functions
			***********************************************/
			//01
			function actions_01()
			{		
				TweenMax.fromTo (vicks_s3_bullets_01 , .5 , {css:{opacity:"0" , left:"510px"}} , {css:{opacity:"1" , left:"425px"} , ease:Power2.easeOut}) ;
			}
			
			//02
			function actions_02()
			{
				TweenMax.fromTo (vicks_s3_bullets_02 , .5 , {css:{opacity:"0" , left:"510px"}} , {css:{opacity:"1" , left:"425px"} , ease:Power2.easeOut}) ;
			}
			
			//03
			function actions_03()
			{
				TweenMax.fromTo (vicks_s3_bullets_03 , .5 , {css:{opacity:"0" , left:"510px"}} , {css:{opacity:"1" , left:"425px"} , ease:Power2.easeOut}) ;
			}
			
			//04
			function actions_04()
			{
				TweenMax.staggerFromTo ([vicks_s3_buenaNoche , vicks_s3_notes_01] , 1 , {css:{opacity:"0" , transform:"scale(.5,.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut} , .25) ;
			}
			
			//05
			function actions_05()
			{
				TweenMax.fromTo (vicks_bottle_blue , 1 , {css:{left:"450px"}} , {css:{left:"300px"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (vicks_bottle_shadow , 1 , {css:{left:"310px"}} , {css:{left:"175px"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (img_bottle_topGirl , 1 , {css:{left:"450px"}} , {css:{left:"300px"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo ([vicks_s3_vapoRub_txt  , vicks_s3_alivia_txt , vicks_s3_3_txt , vicks_s3_sintomas_txt], 1 , {css:{left:"510px"}} , {css:{left:"360px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo ([vicks_s3_bullets_01  , vicks_s3_bullets_02 , vicks_s3_bullets_03], 1 , {css:{left:"425px"}} , {css:{left:"275px"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (vicks_s3_buenaNoche , 1 , {css:{left:"460px"}} , {css:{left:"310px"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (vicks_s3_notes_01 , 1 , {css:{left:"470px"}} , {css:{left:"320px"} , ease:Power2.easeOut}) ;
			
				TweenMax.fromTo (vicks_s3_unguento , 2 , {rotationZ:-360} , {rotationZ:0 , delay:1 , ease:Power2.easeOut}) ;
				TweenMax.fromTo (vicks_s3_unguento , 2 , {css:{opacity:"0" , left:"300px"}} , {css:{opacity:"1" , left:"665px"} , delay:1 , ease:Power2.easeOut}) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_vicks_03()
			{
				var vicks_bottle_blue = document.getElementById("vicks_bottle_blue") ;
				var vicks_bottle_shadow = document.getElementById("vicks_bottle_shadow") ;
				
				var img_bottle_topGirl = document.getElementById("img_bottle_topGirl") ;
				
				var vicks_s3_vapoRub_txt = document.getElementById("vicks_s3_vapoRub_txt") ;
				
				var vicks_s3_alivia_txt = document.getElementById("vicks_s3_alivia_txt") ;
				var vicks_s3_3_txt = document.getElementById("vicks_s3_3_txt") ;
				var vicks_s3_sintomas_txt = document.getElementById("vicks_s3_sintomas_txt") ;
				
				var vicks_s3_bullets_01 = document.getElementById("vicks_s3_bullets_01") ;
				var vicks_s3_bullets_02 = document.getElementById("vicks_s3_bullets_02") ;
				var vicks_s3_bullets_03 = document.getElementById("vicks_s3_bullets_03") ;
				
				var vicks_s3_buenaNoche = document.getElementById("vicks_s3_buenaNoche") ;
				
				var vicks_s3_notes_01 = document.getElementById("vicks_s3_notes_01") ;
				
				var vicks_s3_unguento = document.getElementById("vicks_s3_unguento") ;
				
				
				TweenMax.fromTo (img_bottle_topGirl , 1 , {css:{opacity:"1" , top:"75px"}} , {css:{opacity:"0" , top:"175px"} , ease:Power2.easeOut}) ;
			
				TweenMax.staggerFromTo ([vicks_s3_vapoRub_txt , vicks_s3_alivia_txt , vicks_s3_3_txt , vicks_s3_sintomas_txt] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut} , .25) ;
				
				TweenMax.staggerFromTo ([vicks_s3_bullets_01 , vicks_s3_bullets_02 , vicks_s3_bullets_03] , .5 , {css:{opacity:"1" , left:"425px"}} , {css:{opacity:"0" , left:"200px"} , ease:Power2.easeOut} , .25) ;
				
				TweenMax.staggerFromTo ([vicks_s3_buenaNoche , vicks_s3_notes_01] , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.5,.5)"} , ease:Power2.easeOut} , .25) ;
				
				TweenMax.fromTo (vicks_s3_unguento , 2 , {css:{opacity:"1" , left:"665px"}} , {css:{opacity:"0" , left:"1000px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (vicks_bottle_blue , 3 , {css:{left:"300px"}} , {css:{left:"150px"} , ease:Power2.easeOut , onComplete:ChangePage}) ;
				TweenMax.fromTo (vicks_bottle_shadow , 3 , {css:{left:"175px"}} , {css:{left:"10px"} , ease:Power2.easeOut}) ;
				
				function ChangePage()
				{
					switch(pagChange)
					{						
						case -6:
							educacionFarmaceutico_05() ;
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
							educacionFarmaceutico_vicks_02() ;
						break;
						
						case 1:
							educacionFarmaceutico_vicks_04() ;
						break ;
					}
				}
			}
			
			//////////////////////////Kill Tweens
			function kill_vicks_brochure_03()
			{
				var vicks_bottle_blue = document.getElementById("vicks_bottle_blue") ;
				var vicks_bottle_shadow = document.getElementById("vicks_bottle_shadow") ;
				
				var img_bottle_topGirl = document.getElementById("img_bottle_topGirl") ;
				
				var vicks_s3_vapoRub_txt = document.getElementById("vicks_s3_vapoRub_txt") ;
				
				var vicks_s3_alivia_txt = document.getElementById("vicks_s3_alivia_txt") ;
				var vicks_s3_3_txt = document.getElementById("vicks_s3_3_txt") ;
				var vicks_s3_sintomas_txt = document.getElementById("vicks_s3_sintomas_txt") ;
				
				var vicks_s3_bullets_01 = document.getElementById("vicks_s3_bullets_01") ;
				var vicks_s3_bullets_02 = document.getElementById("vicks_s3_bullets_02") ;
				var vicks_s3_bullets_03 = document.getElementById("vicks_s3_bullets_03") ;
				
				var vicks_s3_buenaNoche = document.getElementById("vicks_s3_buenaNoche") ;
				
				var vicks_s3_notes_01 = document.getElementById("vicks_s3_notes_01") ;
				
				var vicks_s3_unguento = document.getElementById("vicks_s3_unguento") ;
					
				TweenMax.killTweensOf ([vicks_bottle_blue , vicks_bottle_shadow , img_bottle_topGirl , vicks_s3_vapoRub_txt , vicks_s3_alivia_txt , vicks_s3_3_txt , vicks_s3_sintomas_txt , vicks_s3_bullets_01 , vicks_s3_bullets_02 , vicks_s3_bullets_03 , vicks_s3_buenaNoche , vicks_s3_notes_01 , vicks_s3_unguento]) ;
				
				TweenMax.to ([vicks_bottle_blue , vicks_bottle_shadow , img_bottle_topGirl , vicks_s3_vapoRub_txt , vicks_s3_alivia_txt , vicks_s3_3_txt , vicks_s3_sintomas_txt , vicks_s3_bullets_01 , vicks_s3_bullets_02 , vicks_s3_bullets_03 , vicks_s3_buenaNoche , vicks_s3_notes_01 , vicks_s3_unguento] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;	
			}

			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_educacionFarmaceutico_vicks_03() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_vicks_03() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_vicks_03() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_vicks_03() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_vicks_03() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_vicks_03() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_vicks_03() ;
			});
	
			/*FlechaBack*/
			$('#flechaBack').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 0 ;
				
				kill_vicks_brochure_03 () ;
				exit_educacionFarmaceutico_vicks_03 () ;
			});
			
				/*FlechaNext*/
			$('#flechaNext').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 1 ;
				
				kill_vicks_brochure_03 () ;
				exit_educacionFarmaceutico_vicks_03 () ;
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
	backGradient.src = 'img/img_back_vicks.png' ;
}
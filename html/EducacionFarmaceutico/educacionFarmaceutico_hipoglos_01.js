<!--Language Selector-->
function educacionFarmaceutico_hipoglos_01()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_hipoglos_01' ;
	
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
		
		//Hipoglos
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_marcas_Hipoglos.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
	/////////////////////////////////Mexico
	var educacionFarmaceutico_hipoglos_01_mexico =
		//Logo
		"<div class='hipoglos_logoHipoglos' id='hipoglos_logoHipoglos'><img src='img/Hipoglos/img_logoHipoglos_wStroke.png' height='50'></div>"+
		
		//Container
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+
		
		//Slide Number
		"<div class='slideNumber'>---</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_hipoglos_01_brasil =
		//Logo
		"<div class='hipoglos_logoHipoglos' id='hipoglos_logoHipoglos'><img src='img/Hipoglos/img_logoHipoglos_wStroke.png' height='50'></div>"+
				
		//Heart
		"<div class='hipoglos_heart' id='hipoglos_heart_01'><img src='img/Hipoglos/img_heart.png' /></div>"+
		
		//Main Text
		"<div class='hipoglos_MainText' id='hipoglos_MainText'>Você sabia que Hipoglós tem uma melhor* consistência para a proteção da pele do bebê?</div>"+
		
		//Note
		"<div class='hipoglos_notes' id='hipoglos_notes'>*Vs. outro creme para assaduras similar.</div>"+
		
		//Instrucciones
		"<div class='Instrucciones'>Pressionar o elemento que parece continuar a animação</div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguinte_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>119</div>"+

	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_hipoglos_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var noDisponible = document.getElementById("noDisponible") ;
				
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_hipoglos_01_mex()
			{
				var noDisponible = document.getElementById("noDisponible") ;
			
				TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
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
							educacionFarmaceutico_05() ;
						break;
						
						case 1:
							educacionFarmaceutico_hipoglos_02() ;
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
				exit_educacionFarmaceutico_hipoglos_01_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_hipoglos_01_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_hipoglos_01_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_hipoglos_01_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_hipoglos_01_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_hipoglos_01_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_hipoglos_01_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_hipoglos_01_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_hipoglos_01_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_hipoglos_01_brasil ;
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
				}
			});
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var hipoglos_heart_01 = document.getElementById("hipoglos_heart_01") ;
			var hipoglos_MainText = document.getElementById("hipoglos_MainText") ;
			var hipoglos_notes = document.getElementById("hipoglos_notes") ;
			
			hipoglos_heart_01.style.left = '150px' ;
			hipoglos_MainText.style.opacity = '0' ;
			hipoglos_notes.style.opacity = '0' ;
			
			TweenMax.fromTo (hipoglos_heart_01 , 2 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
			
			/**********************************************
			Actions functions
			***********************************************/
			//01
			function actions_01()
			{
				var hipoglos_heart_01 = document.getElementById("hipoglos_heart_01") ;
				var hipoglos_MainText = document.getElementById("hipoglos_MainText") ;
				var hipoglos_notes = document.getElementById("hipoglos_notes") ;
				
				//TweenMax.fromTo (hipoglos_heart_01 , 1 , {css:{left:"150px"}} , {css:{left:"-490px"} , ease:Power2.easeOut}) ;
				TweenMax.staggerFromTo ([hipoglos_MainText , hipoglos_notes] , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , ease:Power2.easeOut} , .25) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			//////////////////////////Kill Tweens
			function kill_hipoglos_brochure_01()
			{
				var hipoglos_heart_01 = document.getElementById("hipoglos_heart_01") ;
				var hipoglos_MainText = document.getElementById("hipoglos_MainText") ;
				var hipoglos_notes = document.getElementById("hipoglos_notes") ;
					
				TweenMax.killTweensOf ([hipoglos_heart_01 , hipoglos_MainText , hipoglos_notes]) ;
				
				TweenMax.to ([hipoglos_heart_01 , hipoglos_MainText , hipoglos_notes] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			}
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_hipoglos_01()
			{
				var hipoglos_heart_01 = document.getElementById("hipoglos_heart_01") ;
				var hipoglos_MainText = document.getElementById("hipoglos_MainText") ;
				var hipoglos_notes = document.getElementById("hipoglos_notes") ;
				
				//TweenMax.fromTo (hipoglos_heart_01 , 1 , {css:{left:"-490px"}} , {css:{left:"150px"} , onComplete:ChangePage , ease:Power2.easeOut}) ;
				TweenMax.fromTo ([hipoglos_MainText , hipoglos_notes] , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage , ease:Power2.easeOut}) ;
				
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
							educacionFarmaceutico_05() ;
						break;
						
						case 1:
							educacionFarmaceutico_hipoglos_02() ;
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
				exit_educacionFarmaceutico_hipoglos_01() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_hipoglos_01() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_hipoglos_01() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_hipoglos_01() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_hipoglos_01() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_hipoglos_01() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_hipoglos_01() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_hipoglos_01() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_hipoglos_01() ;
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
	backGradient.src = 'img/img_back_hipoglos.png' ;
}
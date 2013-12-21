<!--Language Selector-->
function educacionFarmaceutico_vicks_01()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_vicks_01' ;
	
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
	var educacionFarmaceutico_vicks_01_mexico =
		//Logo
		"<div class='vicks_logoVicks' id='vicks_logoVicks'><img src='img/img_logo_vicks.png'></div>"+
		
		//Bottle
		"<div class='vicks_bottle' id='vicks_bottle_red'><img src='img/Vicks/img_bottle_vicks_red.png' /></div>"+
		
			//Shadow
		"<div class='vicks_bottle_shadow' id='vicks_bottle_shadow'><img src='img/Vicks/img_bottle_shadow.png' /></div>"+
		
		//Vicks Logo
		"<div class='vicks_logoBottle' id='vicks_logoBottle'><img src='img/Vicks/img_logo_vicks.png' /></div>"+
		
		//VapoRub text
		"<div class='vicks_VapoRub_txt' id='vicks_VapoRub_txt'>VapoRub ®</div>"+
		
		//Pregunta Sabías que
		"<div class='vicks_s1_pregunta' id='vicks_s1_pregunta'>¿Sabías que <strong style='font-family:FuturaBold ; color:#FFF ;'>VICK VapoRub®</strong> no tiene contraindicaciones conocidas para ser usado con otras medicinas para la gripe*?</div>"+
		
		//Product 01
		"<div class='vicks_s1_product_01' id='vicks_s1_product_01'><img src='img/Vicks/img_vick_vapoRub_untable.png'/></div>"+
		
		//Note
		"<div class='vicks_notes' id='vicks_s1_notes_01'>*Cuando se usa según las indicaciones</div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguiente_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>152</div>"+

	"" ;
	
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_vicks_01_brasil =
		//Logo
		"<div class='vicks_logoVicks' id='vicks_logoVicks'><img src='img/img_logo_vicks.png'></div>"+
		
		//Bottle
		"<div class='vicks_bottle' id='vicks_bottle_red'><img src='img/Vicks/img_bottle_vicks_red.png' /></div>"+
		
			//Shadow
		"<div class='vicks_bottle_shadow' id='vicks_bottle_shadow'><img src='img/Vicks/img_bottle_shadow.png' /></div>"+
		
		//Vicks Logo
		"<div class='vicks_logoBottle' id='vicks_logoBottle'><img src='img/Vicks/img_logo_vicks.png' /></div>"+
		
		//VapoRub text
		"<div class='vicks_VapoRub_txt' id='vicks_VapoRub_txt'>VapoRub ®</div>"+
		
		//Pregunta Sabías que
		"<div class='vicks_s1_pregunta_bra' id='vicks_s1_pregunta'>Você sabia que <strong style='font-family:FuturaBold ; color:#FFF ;'>VICK VapoRub®</strong> quando usado conforme as recomendações, não possui contraindicações conhecidas ao ser associado com outros medicamentos para os sintomas da gripe e resfriado?</div>"+
		
		//Product 01
		"<div class='vicks_s1_product_01_bra' id='vicks_s1_product_01'><img src='img/Vicks/img_vick_vapoRub_untable.png'/></div>"+
		
		//Note
		"<div class='vicks_notes' id='vicks_s1_notes_01_bra'>*Vick vaporub não deve ser usado por crianças menores de 2 anos. Para crianças entre 2 e 6 anos um pediatra deve ser consultado.</div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguinte_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>113</div>"+

	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_vicks_01_mexico ;
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
				}
			});
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var vicks_bottle_red = document.getElementById("vicks_bottle_red") ;
	
			var vicks_bottle_shadow = document.getElementById("vicks_bottle_shadow") ;
			
			var vicks_logoBottle = document.getElementById("vicks_logoBottle") ;
			
			var vicks_VapoRub_txt = document.getElementById("vicks_VapoRub_txt") ;
			
			var vicks_s1_pregunta = document.getElementById("vicks_s1_pregunta") ;
			
			var vicks_s1_product_01 = document.getElementById("vicks_s1_product_01") ;
			
			var vicks_s1_notes_01 = document.getElementById("vicks_s1_notes_01") ;
			
			vicks_bottle_red.style.opacity = '0' ;
			vicks_bottle_shadow.style.opacity = '0' ;
			vicks_logoBottle.style.opacity = '0' ;
			vicks_VapoRub_txt.style.opacity = '0' ;
			vicks_s1_pregunta.style.opacity = '0' ;
			vicks_s1_product_01.style.opacity = '0' ;
			vicks_s1_notes_01.style.opacity = '0' ;
			
			TweenMax.fromTo (vicks_bottle_red , 2 , {css:{opacity:"0" , top:"800px"}} , {css:{opacity:"1" , top:"75px"} , ease:Power2.easeOut}) ;
			TweenMax.fromTo (vicks_bottle_shadow , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:1.5 , ease:Power2.easeOut}) ;
			TweenMax.fromTo (vicks_logoBottle , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:2 , ease:Power2.easeOut}) ;
			TweenMax.fromTo (vicks_VapoRub_txt , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:2 , ease:Power2.easeOut}) ;
			
			/**********************************************
			Actions functions
			***********************************************/
			//01
			function actions_01_mex()
			{
				TweenMax.staggerFromTo ([vicks_s1_pregunta , vicks_s1_product_01 , vicks_s1_notes_01] , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut} , .25) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			//////////////////////////Kill Tweens
			function kill_vicks_brochure_01_mex()
			{
				var vicks_bottle_red = document.getElementById("vicks_bottle_red") ;
			
				var vicks_bottle_shadow = document.getElementById("vicks_bottle_shadow") ;
				
				var vicks_logoBottle = document.getElementById("vicks_logoBottle") ;
				
				var vicks_VapoRub_txt = document.getElementById("vicks_VapoRub_txt") ;
				
				var vicks_s1_pregunta = document.getElementById("vicks_s1_pregunta") ;
				
				var vicks_s1_product_01 = document.getElementById("vicks_s1_product_01") ;
				
				var vicks_s1_notes_01 = document.getElementById("vicks_s1_notes_01") ;
					
				TweenMax.killTweensOf ([vicks_bottle_red , vicks_bottle_shadow , vicks_logoBottle , vicks_VapoRub_txt , vicks_s1_pregunta , vicks_s1_product_01 , vicks_s1_notes_01]) ;
				
				TweenMax.to ([vicks_bottle_red , vicks_bottle_shadow , vicks_logoBottle , vicks_VapoRub_txt , vicks_s1_pregunta , vicks_s1_product_01 , vicks_s1_notes_01] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			}
						
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_vicks_01_mex()
			{
				var vicks_bottle_red = document.getElementById("vicks_bottle_red") ;
	
				var vicks_bottle_shadow = document.getElementById("vicks_bottle_shadow") ;
				
				var vicks_logoBottle = document.getElementById("vicks_logoBottle") ;
				
				var vicks_VapoRub_txt = document.getElementById("vicks_VapoRub_txt") ;
				
				var vicks_s1_pregunta = document.getElementById("vicks_s1_pregunta") ;
				
				var vicks_s1_product_01 = document.getElementById("vicks_s1_product_01") ;
				
				var vicks_s1_notes_01 = document.getElementById("vicks_s1_notes_01") ;
				
				TweenMax.fromTo (vicks_bottle_red , 2 , {css:{left:"450px"}} , {css:{left:"750px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (vicks_bottle_shadow , 2 , {css:{left:"310px"}} , {css:{left:"600px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (vicks_logoBottle , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo ([vicks_VapoRub_txt , vicks_s1_pregunta , vicks_s1_product_01 , vicks_s1_notes_01] , 1 , {css:{opacity:"1" , transform:"scale(2,2)"}} , {css:{opacity:"0" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (vicks_bottle_red , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , delay:3 , ease:Power2.easeOut , onComplete:ChangePage}) ;
				
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
							educacionFarmaceutico_vicks_02() ;
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
				exit_educacionFarmaceutico_vicks_01_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_vicks_01_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_vicks_01_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_vicks_01_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_vicks_01_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_vicks_01_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_vicks_01_mex() ;
			});
	
				//01
			$('#btn_03_01').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_vicks_01_mex() ;
			});
			
				//02
			$('#btn_03_02').click(function() {
				pagChange = 2 ;
				exit_educacionFarmaceutico_vicks_01_mex() ;
			});
			
				//03
			$('#btn_03_03').click(function() {
				pagChange = 3 ;
				exit_educacionFarmaceutico_vicks_01_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_vicks_01_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_vicks_01_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_vicks_01_brasil ;
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
			var vicks_bottle_red = document.getElementById("vicks_bottle_red") ;
	
			var vicks_bottle_shadow = document.getElementById("vicks_bottle_shadow") ;
			
			var vicks_logoBottle = document.getElementById("vicks_logoBottle") ;
			
			var vicks_VapoRub_txt = document.getElementById("vicks_VapoRub_txt") ;
			
			var vicks_s1_pregunta = document.getElementById("vicks_s1_pregunta") ;
			
			var vicks_s1_product_01 = document.getElementById("vicks_s1_product_01") ;
			
			var vicks_s1_notes_01_bra = document.getElementById("vicks_s1_notes_01_bra") ;
			
			vicks_bottle_red.style.opacity = '0' ;
			vicks_bottle_shadow.style.opacity = '0' ;
			vicks_logoBottle.style.opacity = '0' ;
			vicks_VapoRub_txt.style.opacity = '0' ;
			vicks_s1_pregunta.style.opacity = '0' ;
			vicks_s1_product_01.style.opacity = '0' ;
			vicks_s1_notes_01_bra.style.opacity = '0' ;
			
			TweenMax.fromTo (vicks_bottle_red , 2 , {css:{opacity:"0" , top:"800px"}} , {css:{opacity:"1" , top:"75px"} , ease:Power2.easeOut}) ;
			TweenMax.fromTo (vicks_bottle_shadow , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:1.5 , ease:Power2.easeOut}) ;
			TweenMax.fromTo (vicks_logoBottle , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:2 , ease:Power2.easeOut}) ;
			TweenMax.fromTo (vicks_VapoRub_txt , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:2 , ease:Power2.easeOut}) ;
			
			/**********************************************
			Actions functions
			***********************************************/
			//01
			function actions_01()
			{
				TweenMax.staggerFromTo ([vicks_s1_pregunta , vicks_s1_product_01 , vicks_s1_notes_01_bra] , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut} , .25) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			//////////////////////////Kill Tweens
			function kill_vicks_brochure_01()
			{
				var vicks_bottle_red = document.getElementById("vicks_bottle_red") ;
			
				var vicks_bottle_shadow = document.getElementById("vicks_bottle_shadow") ;
				
				var vicks_logoBottle = document.getElementById("vicks_logoBottle") ;
				
				var vicks_VapoRub_txt = document.getElementById("vicks_VapoRub_txt") ;
				
				var vicks_s1_pregunta = document.getElementById("vicks_s1_pregunta") ;
				
				var vicks_s1_product_01 = document.getElementById("vicks_s1_product_01") ;
				
				var vicks_s1_notes_01_bra = document.getElementById("vicks_s1_notes_01_bra") ;
					
				TweenMax.killTweensOf ([vicks_bottle_red , vicks_bottle_shadow , vicks_logoBottle , vicks_VapoRub_txt , vicks_s1_pregunta , vicks_s1_product_01 , vicks_s1_notes_01_bra]) ;
				
				TweenMax.to ([vicks_bottle_red , vicks_bottle_shadow , vicks_logoBottle , vicks_VapoRub_txt , vicks_s1_pregunta , vicks_s1_product_01 , vicks_s1_notes_01_bra] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			}
						
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_vicks_01()
			{
				var vicks_bottle_red = document.getElementById("vicks_bottle_red") ;
	
				var vicks_bottle_shadow = document.getElementById("vicks_bottle_shadow") ;
				
				var vicks_logoBottle = document.getElementById("vicks_logoBottle") ;
				
				var vicks_VapoRub_txt = document.getElementById("vicks_VapoRub_txt") ;
				
				var vicks_s1_pregunta = document.getElementById("vicks_s1_pregunta") ;
				
				var vicks_s1_product_01 = document.getElementById("vicks_s1_product_01") ;
				
				var vicks_s1_notes_01_bra = document.getElementById("vicks_s1_notes_01_bra") ;
				
				TweenMax.fromTo (vicks_bottle_red , 2 , {css:{left:"450px"}} , {css:{left:"750px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (vicks_bottle_shadow , 2 , {css:{left:"310px"}} , {css:{left:"600px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (vicks_logoBottle , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo ([vicks_VapoRub_txt , vicks_s1_pregunta , vicks_s1_product_01 , vicks_s1_notes_01_bra] , 1 , {css:{opacity:"1" , transform:"scale(2,2)"}} , {css:{opacity:"0" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (vicks_bottle_red , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , delay:3 , ease:Power2.easeOut , onComplete:ChangePage}) ;
				
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
							educacionFarmaceutico_vicks_02() ;
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
				exit_educacionFarmaceutico_vicks_01() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_vicks_01() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_vicks_01() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_vicks_01() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_vicks_01() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_vicks_01() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_vicks_01() ;
			});
	
				//01
			$('#btn_03_01').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_vicks_01() ;
			});
			
				//02
			$('#btn_03_02').click(function() {
				pagChange = 2 ;
				exit_educacionFarmaceutico_vicks_01() ;
			});
			
				//03
			$('#btn_03_03').click(function() {
				pagChange = 3 ;
				exit_educacionFarmaceutico_vicks_01() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_vicks_01() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_vicks_01() ;
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
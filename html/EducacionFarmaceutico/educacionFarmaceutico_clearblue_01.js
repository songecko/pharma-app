<!--Language Selector-->
function educacionFarmaceutico_clearblue_01()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_clearblue_01' ;
	
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
		
		//Clearblue
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_marcas_Clearblue.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		
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
	var educacionFarmaceutico_clearblue_01_mexico =
		//Logo
		"<div class='clearblue_logoClearblue' id='clearblue_logoClearblue'><img src='img/img_logo_clearblue.png'></div>"+
		
		//Sistema clearblue
		"<div class='clearblue_bigBack_image' id='clearblue_bigBack_image'><img src='img/Clearblue/img_clearblue_sistema.png' /></div>"+
		
		//Title
		"<div class='clearblue_bigTitle' id='clearblue_bigTitle'>1 de cada 4 mujeres puede leer<br/>erróneamente las pruebas tradicionales</div>"+
		
		//Second Phrase
		"<div class='clearblue_secondPhrase' id='clearblue_secondPhrase'>¿Sigues creyendo que todas las pruebas de embarazo son lo mismo?</div>"+
		
		//Pregnant text
		"<div class='clearblue_pregnantText' id='clearblue_pregnantText'><h4 style='font-family:FuturaBook ;'><img src='img/Clearblue/img_text_pregnant.png' /></div>"+
		
		//Ya no
		"<div class='clearblue_yaNo_txt' id='clearblue_yaNo_txt'>Ya no es así...</div>"+
		
		//Product Box
		"<div class='clearblue_productBox_01' id='clearblue_productBox_01'><img src='img/Clearblue/img_product_box_01.png' /></div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguiente_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>164</div>"+

	"" ;
	
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_clearblue_01_brasil =
		//Logo
		"<div class='clearblue_logoClearblue' id='clearblue_logoClearblue'><img src='img/img_logo_clearblue.png'></div>"+
		//Container
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+
		
		//Slide Number
		"<div class='slideNumber'>---</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_clearblue_01_mexico ;
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
						event_01() ;
					break ;
					
					case 2:
						event_02() ;
					break ;
					
					case 3:
						event_03() ;
					break ;
					
					case 4:
						event_04() ;
					break ;
				}
			});
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var clearblue_bigBack_image = document.getElementById("clearblue_bigBack_image") ;
			var clearblue_bigTitle = document.getElementById("clearblue_bigTitle") ;
			var clearblue_secondPhrase = document.getElementById("clearblue_secondPhrase") ;
			var clearblue_pregnantText = document.getElementById("clearblue_pregnantText") ;
			var clearblue_yaNo_txt = document.getElementById("clearblue_yaNo_txt") ;
			var clearblue_productBox_01 = document.getElementById("clearblue_productBox_01") ;
			
			clearblue_bigBack_image.style.opacity = '0' ;
			clearblue_bigTitle.style.opacity = '0' ;
			clearblue_secondPhrase.style.opacity = '0' ;
			clearblue_pregnantText.style.opacity = '0' ;
			clearblue_yaNo_txt.style.opacity = '0' ;
			clearblue_productBox_01.style.opacity = '0' ;
			
			clearblue_bigBack_image.style.left = '1300px' ;
			clearblue_bigTitle.style.left = '1300px' ;
			clearblue_secondPhrase.style.left = '1300px' ;
			clearblue_pregnantText.style.left = '1300px' ;
			clearblue_yaNo_txt.style.left = '1300px' ;
			clearblue_productBox_01.style.left = '1300px' ;
			
			TweenMax.fromTo (clearblue_bigTitle , 1 , {css:{opacity:"0" , left:"450px" , top:"300px" , transform:"scale(3,3)"}} , {css:{opacity:"1" , transform:"scale(2,2)"} , ease:Power2.easeOut}) ;
			
			//////////////////////////Kill Tweens
			function kill_clearblue_brochure_01()
			{
				var clearblue_bigBack_image = document.getElementById("clearblue_bigBack_image");
				var clearblue_bigTitle = document.getElementById("clearblue_bigTitle");
				var clearblue_pregnantText = document.getElementById("clearblue_pregnantText");
				var clearblue_yaNo_txt = document.getElementById("clearblue_yaNo_txt");
				var clearblue_productBox_01 = document.getElementById("clearblue_productBox_01");
				
				TweenMax.killTweensOf ([clearblue_bigBack_image , clearblue_bigTitle , clearblue_pregnantText , clearblue_yaNo_txt , clearblue_productBox_01]) ;
				
				TweenMax.to ([clearblue_bigBack_image , clearblue_bigTitle , clearblue_pregnantText , clearblue_yaNo_txt , clearblue_productBox_01] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			}
			
			/**********************************************
			Actions functions
			***********************************************/
				//01
			function event_01()
			{
				var clearblue_bigTitle = document.getElementById("clearblue_bigTitle") ;
				
				var clearblue_secondPhrase = document.getElementById("clearblue_secondPhrase") ;
				
				TweenMax.fromTo (clearblue_bigTitle , .5 ,  {css:{left:"450px" , top:"300px" , transform:"scale(2,2)"}} , {css:{left:"100px" , top:"150px" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (clearblue_secondPhrase , .5 ,  {css:{opacity:"0" , left:"100px" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
			}
			
				//02
			function event_02()
			{
				var clearblue_secondPhrase = document.getElementById("clearblue_secondPhrase") ;
				var clearblue_yaNo_txt = document.getElementById("clearblue_yaNo_txt") ;
				
				TweenMax.fromTo (clearblue_secondPhrase , .5 ,  {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
				TweenMax.to (clearblue_secondPhrase , 1 ,  {css:{left:"1300px"} , delay: 1 }) ;
				
				TweenMax.fromTo (clearblue_yaNo_txt , .5 , {css:{opacity:"0" , transform:"scale(1,1)"}} , {css:{opacity:"1" , transform:"scale(2,2)"} , ease:Power2.easeOut , delay:.5}) ;
				TweenMax.fromTo (clearblue_yaNo_txt , .5 , {css:{opacity:"0" , top:"-100px" , left:"700px" , color:"#15457A"}} , {css:{opacity:"1" , top:"500px" , left:"700px"} , ease:Power2.easeOut , delay:.5}) ;
			}
			
				//03
			function event_03()
			{
				var clearblue_yaNo_txt = document.getElementById("clearblue_yaNo_txt") ;
				var clearblue_productBox_01 = document.getElementById("clearblue_productBox_01") ;
				var clearblue_bigBack_image = document.getElementById("clearblue_bigBack_image") ;
				
				TweenMax.fromTo (clearblue_yaNo_txt , .5 , {css:{opacity:"0" , top:"500px" , left:"700px"}} , {css:{opacity:"1" , color:"#FFF" , top:"675px" , left:"950px" , transform:"scale(1,1)"} , ease:Power2.easeOut , delay:.5}) ;
				
				TweenMax.fromTo (clearblue_productBox_01 , .5 , {css:{opacity:"0" , left:"900px" , transform:"scale(2,1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut , delay:1}) ;
				
				TweenMax.fromTo (clearblue_bigBack_image , 1 , {css:{opacity:"0" , left:"0px" , bottom:"-500px"}} , {css:{opacity:"1" , bottom:"0px"} , ease:Power2.easeOut, delay:2}) ;
			}
		
				//04
			function event_04()
			{
				var clearblue_pregnantText = document.getElementById("clearblue_pregnantText") ;
				
				TweenMax.fromTo (clearblue_pregnantText , .1 , {css:{opacity:"0" , left:"800px"}} , {css:{opacity:"1"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (clearblue_pregnantText , .1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut , delay:.1}) ;
				TweenMax.fromTo (clearblue_pregnantText , .1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , ease:Power2.easeOut , delay:.2}) ;
				TweenMax.fromTo (clearblue_pregnantText , .1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut , delay:.3}) ;
				TweenMax.fromTo (clearblue_pregnantText , .1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , ease:Power2.easeOut , delay:.4}) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_clearblue_01_mex()
			{
				var clearblue_bigBack_image = document.getElementById("clearblue_bigBack_image");
				var clearblue_bigTitle = document.getElementById("clearblue_bigTitle");
				var clearblue_pregnantText = document.getElementById("clearblue_pregnantText");
				var clearblue_yaNo_txt = document.getElementById("clearblue_yaNo_txt");
				var clearblue_productBox_01 = document.getElementById("clearblue_productBox_01");
				
				TweenMax.fromTo (clearblue_bigTitle , 1 , {css:{opacity:"1" , left:"100px"}} , {css:{opacity:"0" , left:"250px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (clearblue_pregnantText , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (clearblue_bigBack_image , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut , delay:.25}) ;
				
				TweenMax.fromTo (clearblue_yaNo_txt , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut , delay:.5}) ;
				TweenMax.fromTo (clearblue_productBox_01 , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.25,.25)"} , ease:Power2.easeOut , delay:.5 , onComplete:ChangePage}) ;
				
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
							educacionFarmaceutico_clearblue_02() ;
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
				exit_educacionFarmaceutico_clearblue_01_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_clearblue_01_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_clearblue_01_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_clearblue_01_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_clearblue_01_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_clearblue_01_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_clearblue_01_mex() ;
			});

			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_clearblue_01_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_clearblue_01_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_clearblue_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var noDisponible = document.getElementById("noDisponible") ;
				
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_clearblue_01()
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
							educacionFarmaceutico_clearblue_02() ;
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
				exit_educacionFarmaceutico_clearblue_01() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_clearblue_01() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_clearblue_01() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_clearblue_01() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_clearblue_01() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_clearblue_01() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_clearblue_01() ;
			});

			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_clearblue_01() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_clearblue_01() ;
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
	backGradient.src = 'img/img_back_clearblue.png' ;
}
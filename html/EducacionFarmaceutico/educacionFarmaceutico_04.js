<!--Educación al Farmacéutico 04-->
function educacionFarmaceutico_04()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_04' ;

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
	var educacionFarmaceutico_04_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Ejemplo: <b>Vick</b></li></div>"+
		
		//Images
			//01
		"<div class='img_educaFarma_s3_01' id='img_educaFarma_s3_01'><img src='img/EducacionFarmaceutico/img_plan_vicks_mex_03.png' /></div>"+
			//02
		"<div class='img_educaFarma_s3_02' id='img_educaFarma_s3_02'><img src='img/EducacionFarmaceutico/img_plan_vicks_mex_04.png' /></div>"+
		
		//Slide Number
		"<div class='slideNumber'>144</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_04_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Exemplo: <b>Hipoglós</b></li></div>"+
		
		//Images
			//01
		"<div class='img_educaFarma_s3_01' id='img_educaFarma_s3_01'><img src='img/EducacionFarmaceutico/img_plan_hipoglos_03.png' /></div>"+
			//02
		"<div class='img_educaFarma_s3_02' id='img_educaFarma_s3_02'><img src='img/EducacionFarmaceutico/img_plan_hipoglos_04.png' /></div>"+
		
		//Slide Number
		"<div class='slideNumber'>105</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_04_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var img_educaFarma_s3_01 = document.getElementById("img_educaFarma_s3_01") ;
			var img_educaFarma_s3_02 = document.getElementById("img_educaFarma_s3_02") ;
							
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([img_educaFarma_s3_01 , img_educaFarma_s3_02] , .5 , {css:{opacity:"0" , transform:"scale(1.25,1.25)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
						
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_04_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				
				var img_educaFarma_s3_01 = document.getElementById("img_educaFarma_s3_01") ;
				var img_educaFarma_s3_02 = document.getElementById("img_educaFarma_s3_02") ;
								
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}  , onComplete:ChangePage }) ;
				
				TweenMax.staggerFromTo ([img_educaFarma_s3_01 , img_educaFarma_s3_02] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.25,1.25)"}} , .25) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -6:
							menu_Induccion() ;
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
							languageSelector() ;
						break;
						
						case 1:
							educacionFarmaceutico_03() ;
						break ;
						
						case 2:
							educacionFarmaceutico_05() ;
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
				exit_educacionFarmaceutico_04_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_04_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_04_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_04_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_04_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_04_mex() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_04_mex() ;
			});

			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 2 ;
				exit_educacionFarmaceutico_04_mex() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/EducacionFarmaceutico/au_educacionFamaceutico_mex04.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_04_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var img_educaFarma_s3_01 = document.getElementById("img_educaFarma_s3_01") ;
			var img_educaFarma_s3_02 = document.getElementById("img_educaFarma_s3_02") ;
							
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([img_educaFarma_s3_01 , img_educaFarma_s3_02] , .5 , {css:{opacity:"0" , transform:"scale(1.25,1.25)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
						
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_04()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				
				var img_educaFarma_s3_01 = document.getElementById("img_educaFarma_s3_01") ;
				var img_educaFarma_s3_02 = document.getElementById("img_educaFarma_s3_02") ;
				var img_educaFarma_s3_right = document.getElementById("img_educaFarma_s3_right") ;
								
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}  , onComplete:ChangePage }) ;
				
				TweenMax.staggerFromTo ([img_educaFarma_s3_01 , img_educaFarma_s3_02 , img_educaFarma_s3_right] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.25,1.25)"}} , .25) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -6:
							menu_Induccion() ;
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
							languageSelector() ;
						break;
						
						case 1:
							educacionFarmaceutico_03() ;
						break ;
						
						case 2:
							educacionFarmaceutico_05() ;
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
				exit_educacionFarmaceutico_04() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_04() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_04() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_04() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_04() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_04() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_04() ;
			});

			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 2 ;
				exit_educacionFarmaceutico_04() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/EducacionFarmaceutico/au_educacionFarmaceutico_bra03.mp3' ;
			
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
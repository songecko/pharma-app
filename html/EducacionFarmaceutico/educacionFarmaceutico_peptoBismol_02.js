<!--Language Selector-->
function educacionFarmaceutico_peptoBismol_02()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_peptoBismol_02' ;
	
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
		
		//Pepto-Bismol
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_marcas_PeptoBismol.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
	var educacionFarmaceutico_peptoBismol_02_mexico =
		//Logo
		"<div class='peptoBismol_logoPeptoBismol' id='peptoBismol_logoPeptoBismol'><img src='img/img_logo_peptoBismol.png'></div>"+
				
		//Header
		"<div class='peptoBismol_header' id='peptoBismol_header'><img src='img/PeptoBismol/img_header.png'></div>"+
		
		//Doble Poder
		"<div class='peptoBismol_doblePoder_txt' id='peptoBismol_doblePoder_txt'><div class='Olivea_Bold'>¡DOBLE PODER contra los 5 problemas estomacales con alivio SUPERIOR* de la acidez!</div></div>"+
		
		//Cuales son sus beneficios
		"<div class='peptoBismol_cualesBeneficios_txt' id='peptoBismol_cualesBeneficios_txt'><div class='Olivea_Bold'>¿Cuáles son sus beneficios?</div></div>"+
		
		//Alivio Eficaz
		"<div class='peptoBismol_alivioEficaz_txt' id='peptoBismol_alivioEficaz_txt'><div class='Olivea_Bold'>Alivio eficaz y clínicamente comprobado de 5 síntomas gastrointestinales comunes:</div></div>"+
		
		//Malestares
		"<div class='peptoBismol_malestares' id='peptoBismol_malestares'><img src='img/PeptoBismol/img_malestares.png' /></div>"+
		
		//Bullets
			//01
		"<div class='peptoBismol_bullets' id='peptoBismol_bullets_s2_01'><li><div class='Olivea_Bold'>Forma una capa protectora sobre la mucosa gástrica</div></li></div>"+
		
			//02
		"<div class='peptoBismol_bullets' id='peptoBismol_bullets_s2_02'><li><div class='Olivea_Bold'>Alivia la indigestión causada por consumo de comida en exceso</div></li></div>"+
		
			//03
		"<div class='peptoBismol_bullets' id='peptoBismol_bullets_s2_03'><li><div class='Olivea_Bold'>Elimina la causa de la diarrea</div></li></div>"+
				
		//Note
		"<div class='peptoBismol_notes' id='peptoBismol_notes_s1_01'><div class='Olivea_Bold'>*vs. Pepto-Bismol Original</div></div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguiente_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>159</div>"+

	"" ;
	
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_peptoBismol_02_brasil =
		//Logo
		"<div class='peptoBismol_logoPeptoBismol' id='peptoBismol_logoPeptoBismol'><img src='img/img_logo_peptoBismol.png'></div>"+
		//Header
		"<div class='peptoBismol_header' id='peptoBismol_header'><img src='img/PeptoBismol/img_header.png'></div>"+
		
		//Container
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_peptoBismol_02_mexico ;
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
					
					case 6:
						actions_06() ;
					break ;
				}
			});
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var peptoBismol_doblePoder_txt = document.getElementById("peptoBismol_doblePoder_txt") ;
	
			var peptoBismol_cualesBeneficios_txt = document.getElementById("peptoBismol_cualesBeneficios_txt") ;
			
			var peptoBismol_alivioEficaz_txt = document.getElementById("peptoBismol_alivioEficaz_txt") ;
			
			var peptoBismol_malestares = document.getElementById("peptoBismol_malestares") ;
			
			var peptoBismol_bullets_s2_01 = document.getElementById("peptoBismol_bullets_s2_01") ;
			var peptoBismol_bullets_s2_02 = document.getElementById("peptoBismol_bullets_s2_02") ;
			var peptoBismol_bullets_s2_03 = document.getElementById("peptoBismol_bullets_s2_03") ;
			
			
			peptoBismol_doblePoder_txt.style.opacity = '0' ;
			peptoBismol_cualesBeneficios_txt.style.opacity = '0' ;
			peptoBismol_alivioEficaz_txt.style.opacity = '0' ;
			peptoBismol_malestares.style.opacity = '0' ;
			peptoBismol_bullets_s2_01.style.opacity = '0' ;
			peptoBismol_bullets_s2_02.style.opacity = '0' ;
			peptoBismol_bullets_s2_03.style.opacity = '0' ;
			
			
			TweenMax.fromTo (peptoBismol_doblePoder_txt , 1 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
			
			//////////////////////////Kill Tweens
			function kill_peptoBismol_brochure_02()
			{
				var peptoBismol_doblePoder_txt = document.getElementById("peptoBismol_doblePoder_txt") ;
			
				var peptoBismol_cualesBeneficios_txt = document.getElementById("peptoBismol_cualesBeneficios_txt") ;
				
				var peptoBismol_alivioEficaz_txt = document.getElementById("peptoBismol_alivioEficaz_txt") ;
				
				var peptoBismol_malestares = document.getElementById("peptoBismol_malestares") ;
				
				var peptoBismol_bullets_s2_01 = document.getElementById("peptoBismol_bullets_s2_01") ;
				var peptoBismol_bullets_s2_02 = document.getElementById("peptoBismol_bullets_s2_02") ;
				var peptoBismol_bullets_s2_03 = document.getElementById("peptoBismol_bullets_s2_03") ;
					
				TweenMax.killTweensOf ([peptoBismol_doblePoder_txt , peptoBismol_cualesBeneficios_txt , peptoBismol_alivioEficaz_txt , peptoBismol_malestares , peptoBismol_bullets_s2_01 , peptoBismol_bullets_s2_02 , peptoBismol_bullets_s2_03]) ;
				
				TweenMax.to ([peptoBismol_doblePoder_txt , peptoBismol_cualesBeneficios_txt , peptoBismol_alivioEficaz_txt , peptoBismol_malestares , peptoBismol_bullets_s2_01 , peptoBismol_bullets_s2_02 , peptoBismol_bullets_s2_03] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			}

			/**********************************************
			Actions functions
			***********************************************/
			//01
			function actions_01()
			{
				TweenMax.fromTo (peptoBismol_cualesBeneficios_txt , 1 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
			}
			
			//02
			function actions_02()
			{
				TweenMax.fromTo (peptoBismol_alivioEficaz_txt , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"} , ease:Power2.easeOut}) ;
			}
			
			//03
			function actions_03()
			{
				TweenMax.fromTo (peptoBismol_malestares , 1 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
			}
			
			//04
			function actions_04()
			{
				TweenMax.fromTo (peptoBismol_bullets_s2_01 , 1 , {css:{opacity:"0" , left:"800px"}} , {css:{opacity:"1" , left:"700px"} , ease:Power2.easeOut}) ;
			}
			
			//05
			function actions_05()
			{
				TweenMax.fromTo (peptoBismol_bullets_s2_02 , 1 , {css:{opacity:"0" , left:"800px"}} , {css:{opacity:"1" , left:"700px"} , ease:Power2.easeOut}) ;
			}
			
			//06
			function actions_06()
			{
				TweenMax.fromTo (peptoBismol_bullets_s2_03 , 1 , {css:{opacity:"0" , left:"800px"}} , {css:{opacity:"1" , left:"700px"} , ease:Power2.easeOut}) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_peptoBismol_02_mex()
			{
				var peptoBismol_doblePoder_txt = document.getElementById("peptoBismol_doblePoder_txt") ;
	
				var peptoBismol_cualesBeneficios_txt = document.getElementById("peptoBismol_cualesBeneficios_txt") ;
				
				var peptoBismol_alivioEficaz_txt = document.getElementById("peptoBismol_alivioEficaz_txt") ;
				
				var peptoBismol_malestares = document.getElementById("peptoBismol_malestares") ;
				
				var peptoBismol_bullets_s2_01 = document.getElementById("peptoBismol_bullets_s2_01") ;
				var peptoBismol_bullets_s2_02 = document.getElementById("peptoBismol_bullets_s2_02") ;
				var peptoBismol_bullets_s2_03 = document.getElementById("peptoBismol_bullets_s2_03") ;
				
				TweenMax.staggerFromTo ([peptoBismol_doblePoder_txt , peptoBismol_cualesBeneficios_txt] , 1 , {css:{opacity:"1" , transform:"scale(2,2)"}} , {css:{opacity:"0" , transform:"scale(1,1)"} , ease:Power2.easeOut} , .5) ;
					
				TweenMax.fromTo (peptoBismol_alivioEficaz_txt , 2 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"350px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (peptoBismol_malestares , 2 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo ([peptoBismol_bullets_s2_01 , peptoBismol_bullets_s2_02 , peptoBismol_bullets_s2_03] , 3 , {css:{opacity:"1" , left:"800px"}} , {css:{opacity:"0" , left:"700px"} , ease:Power2.easeOut , onComplete:ChangePage}) ;
				
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
							educacionFarmaceutico_peptoBismol_01() ;
						break;
						
						case 1:
							educacionFarmaceutico_peptoBismol_03() ;
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
				exit_educacionFarmaceutico_peptoBismol_02_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_peptoBismol_02_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_peptoBismol_02_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_peptoBismol_02_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_peptoBismol_02_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_peptoBismol_02_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_peptoBismol_02_mex() ;
			});
	
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_peptoBismol_02_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_peptoBismol_02_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_peptoBismol_02_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/////////////////////////////////Main Animation
			var noDisponible = document.getElementById("noDisponible") ;
				
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_peptoBismol_02()
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
							educacionFarmaceutico_peptoBismol_01() ;
						break;
						
						case 1:
							educacionFarmaceutico_peptoBismol_03() ;
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
				exit_educacionFarmaceutico_peptoBismol_02() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_peptoBismol_02() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_peptoBismol_02() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_peptoBismol_02() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_peptoBismol_02() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_peptoBismol_02() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_peptoBismol_02() ;
			});
	
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_peptoBismol_02() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_peptoBismol_02() ;
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
	backGradient.src = 'img/img_back_peptoBismol.png' ;
}
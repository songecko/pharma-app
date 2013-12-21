<!--Language Selector-->
function educacionFarmaceutico_peptoBismol_04()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_peptoBismol_04' ;
	
	/*****************************
	Menu Content
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
	var educacionFarmaceutico_peptoBismol_04_mexico =
		//Logo
		"<div class='peptoBismol_logoPeptoBismol' id='peptoBismol_logoPeptoBismol'><img src='img/img_logo_peptoBismol.png'></div>"+
		
		//Header
		"<div class='peptoBismol_header' id='peptoBismol_header'><img src='img/PeptoBismol/img_header.png'></div>"+
		
		//Porqué debo recomendar?
		"<div class='peptoBismol_blue_box' id='peptoBismol_blue_box'><div class='Olivea_Bold' style='color:#FFF;'>¿Por qué debo recomendar <strong>Pepto-Bismol®</strong> y <strong>Pepto-Bismol Plus®</strong>?<br/><br/>1) Porque es el remedio estomacal <strong>más conocido</strong>** de México.<br/>2) Porque es el <strong>alivio eficaz</strong> de los síntomas gastrointestinales más comunes (acidez, indigestión , malestar estomacal, náusea y diarrea).<br/>3) Porque trabaja en todo el <strong>sistema digestivo</strong>, a diferencia de los productos que son únicamente antiácidos.<br/>4) Porque <strong>Pepto-Bismol Plus®</strong> actúa con alivio <strong>SUPERIOR</strong>* de la acidez.</div></div>"+
		
		//Indicaciones
		"<div class='peptoBismol_indicaciones_txt' id='peptoBismol_indicaciones_txt'><div class='Olivea_Bold'>Pepto-Bismol® Suspensión, Tabletas Masticables y Comprimidos.<br/><br/>No se administre a menores de 6 años.<br/><br/>Tomar una dosis cada media hora o cada hora hasta que se considere necesario con un máximo de ocho dosis en 24 horas y un máximo de cuatro dosis en 24 horas para Pepto Bismol Plus.<br/><br/>Si persisten las molestias por más de 2 días consulte a su médico</div></div>"+
		
		//Tabla Indicaciones
		"<div class='peptoBismol_indicaciones_table' id='peptoBismol_indicaciones_table'><img src='img/PeptoBismol/img_indicaciones.png'></div>"+						

		//Note
		"<div class='peptoBismol_notes' id='peptoBismol_notes_s4_01'><div class='Olivea_Bold'>*vs. Pepto-Bismol Original<br/>** Basado en estudio de posicionamiento/recordación de marca realizado en las ciudades de México, Guadalajara, Monterrey con 316 personas.<br/>Diciembre de 2012.<br/>SSA 133300202C5517</div></div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguiente_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>161</div>"+
		
	"" ;

	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_peptoBismol_04_brasil =
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_peptoBismol_04_mexico ;
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
				}
			});
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var peptoBismol_blue_box = document.getElementById("peptoBismol_blue_box") ;
	
			var peptoBismol_indicaciones_txt = document.getElementById("peptoBismol_indicaciones_txt") ;
			
			var peptoBismol_indicaciones_table = document.getElementById("peptoBismol_indicaciones_table") ;
			
			peptoBismol_blue_box.style.opacity = '0' ;
			peptoBismol_indicaciones_txt.style.opacity = '0' ;
			peptoBismol_indicaciones_table.style.opacity = '0' ;
			
			TweenMax.fromTo (peptoBismol_blue_box , 2 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"1080px"} , ease:Power2.easeOut}) ;
			
			/**********************************************
			Actions functions
			***********************************************/
			//01
			function actions_01()
			{
				TweenMax.fromTo (peptoBismol_indicaciones_txt , 1 , {css:{opacity:"0" , left:"50px"}} , {css:{opacity:"1" , left:"100px"} , ease:Power2.easeOut}) ;
			}
			
			//02
			function actions_02()
			{
				TweenMax.fromTo (peptoBismol_indicaciones_table , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_peptoBismol_04_mex()
			{
				var peptoBismol_blue_box = document.getElementById("peptoBismol_blue_box") ;
		
				var peptoBismol_indicaciones_txt = document.getElementById("peptoBismol_indicaciones_txt") ;
				
				var peptoBismol_indicaciones_table = document.getElementById("peptoBismol_indicaciones_table") ;
				
				TweenMax.fromTo (peptoBismol_blue_box , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.5,.5)"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (peptoBismol_indicaciones_txt , 1 , {css:{opacity:"1" , left:"100px"}} , {css:{opacity:"0" , left:"200px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (peptoBismol_indicaciones_table , 2 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut , onComplete:ChangePage}) ;
				
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
							educacionFarmaceutico_peptoBismol_03() ;
						break;
						
						case 1:
							educacionFarmaceutico_peptoBismol_05() ;
						break ;
					}
				}
			}
			
			//////////////////////////Kill Tweens
			function kill_peptoBismol_brochure_04()
			{
				var peptoBismol_blue_box = document.getElementById("peptoBismol_blue_box") ;
				
				var peptoBismol_indicaciones_txt = document.getElementById("peptoBismol_indicaciones_txt") ;
				
				var peptoBismol_indicaciones_table = document.getElementById("peptoBismol_indicaciones_table") ;
					
				TweenMax.killTweensOf ([peptoBismol_blue_box , peptoBismol_indicaciones_txt , peptoBismol_indicaciones_table]) ;
				
				TweenMax.to ([peptoBismol_blue_box , peptoBismol_indicaciones_txt , peptoBismol_indicaciones_table] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			}
			
			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_educacionFarmaceutico_peptoBismol_04_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_peptoBismol_04_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_peptoBismol_04_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_peptoBismol_04_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_peptoBismol_04_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_peptoBismol_04_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_peptoBismol_04_mex() ;
			});
	
			/*FlechaBack*/
			$('#flechaBack').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 0 ;
				
				kill_peptoBismol_brochure_04() ;
				exit_educacionFarmaceutico_peptoBismol_04_mex() ;
			});
			
			/*FlechaNext*/
			$('#flechaNext').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 1 ;
				
				kill_peptoBismol_brochure_04() ;
				exit_educacionFarmaceutico_peptoBismol_04_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_peptoBismol_04_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_peptoBismol_04()
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
							educacionFarmaceutico_peptoBismol_03() ;
						break;
						
						case 1:
							educacionFarmaceutico_peptoBismol_05() ;
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
				exit_educacionFarmaceutico_peptoBismol_04() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_peptoBismol_04() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_peptoBismol_04() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_peptoBismol_04() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_peptoBismol_04() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_peptoBismol_04() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_peptoBismol_04() ;
			});
	
			/*FlechaBack*/
			$('#flechaBack').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 0 ;
				
				exit_educacionFarmaceutico_peptoBismol_04() ;
			});
			
			/*FlechaNext*/
			$('#flechaNext').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 1 ;
				
				exit_educacionFarmaceutico_peptoBismol_04() ;
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
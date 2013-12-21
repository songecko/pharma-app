<!--Language Selector-->
function educacionFarmaceutico_peptoBismol_03()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_peptoBismol_03' ;
	
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
	var educacionFarmaceutico_peptoBismol_03_mexico =
		//Logo
		"<div class='peptoBismol_logoPeptoBismol' id='peptoBismol_logoPeptoBismol'><img src='img/img_logo_peptoBismol.png'></div>"+
				
		//Header
		"<div class='peptoBismol_header' id='peptoBismol_header'><img src='img/PeptoBismol/img_header.png'></div>"+
		
		//Sistema Digestivo
		"<div class='peptoBismol_sistemaDigestivo' id='peptoBismol_sistemaDigestivo'><img src='img/PeptoBismol/img_sistemaDigestivo.png' height='1050' /></div>"+
		
			//Sistema Digestivo | Estómago
		"<div class='peptoBismol_estomago' id='peptoBismol_estomago'><img src='img/PeptoBismol/img_estomago.png'/></div>"+
		
		//Descubre como actua
		"<div class='peptoBismol_descubreActua_txt' id='peptoBismol_descubreActua_txt'><div class='Olivea_Bold'>Descubre cómo actúa en todo el</div></div>"+
		
			//Sistema Digestivo
		"<div class='peptoBismol_sistemaDigestivo_txt' id='peptoBismol_sistemaDigestivo_txt'><div class='Olivea_Bold'>sistema digestivo y los beneficios que aporta</div></div>"+
		
		//Subsalicilato
		"<div class='peptoBismol_subsalicilato' id='peptoBismol_subsalicilato'><img src='img/PeptoBismol/img_subsalicilato.png'></div>"+
		
		//Estómago Sólamente
		"<div class='peptoBismol_estomagoSolamente' id='peptoBismol_estomagoSolamente'><img src='img/PeptoBismol/img_estomagoSolamente.png'></div>"+
		
		//Intestino Delgado
		"<div class='peptoBismol_intestinoDelgado' id='peptoBismol_intestinoDelgado'><img src='img/PeptoBismol/img_intestinoDelgado.png'></div>"+
		
		//Colon
		"<div class='peptoBismol_colon' id='peptoBismol_colon'><img src='img/PeptoBismol/img_colon.png'></div>"+
		
		//Alto
		"<div class='peptoBismol_stop' id='peptoBismol_stop'><img src='img/PeptoBismol/img_alto.png'></div>"+
		
		//Bullets
			//01
				//Título
		"<div class='peptoBismol_bullets_s3_title' id='peptoBismol_bullets_s3_title_01'><div class='Olivea_Bold'>Pepto-Bismol en el estómago.</div></div>"+
		
					//Texto
		"<div class='peptoBismol_bullets_s3_txt' id='peptoBismol_bullets_s3_txt_01'><div class='Olivea_Bold'>Recubre y se une de inmediato a las proteínas en la mucosa del revestimiento del estómago para ayudar a su viscosidad y proporcionar alivio.<br/><br/><strong>¡Pepto-Bismol Plus proporciona alivio SUPERIOR de la acidez!*</strong></div></div>"+
		
			//01	
				//Título
		"<div class='peptoBismol_bullets_s3_title' id='peptoBismol_bullets_s3_title_02'><div class='Olivea_Bold'>Pepto-Bismol en los intestinos.</div></div>"+
		
					//Texto
		"<div class='peptoBismol_bullets_s3_txt' id='peptoBismol_bullets_s3_txt_02'><div class='Olivea_Bold'>Encapsula a los radicales libres que pueden causar irritación gastrointestinal, los neutraliza y proporciona alivio.</div></div>"+
		
			//03
				//Título
		"<div class='peptoBismol_bullets_s3_title' id='peptoBismol_bullets_s3_title_03'><div class='Olivea_Bold'>Pepto-Bismol en el colon.</div></div>"+
		
					//Texto
		"<div class='peptoBismol_bullets_s3_txt' id='peptoBismol_bullets_s3_txt_03'><div class='Olivea_Bold'>No sólo trata los síntomas de la diarrea, si no que también trata su causa u origen al inactivar los patógenos bacterianos y toxinas.</div></div>"+
		
		//Bottle Front
		"<div class='peptoBismol_bottle_front' id='peptoBismol_bottle_front'><img src='img/PeptoBismol/img_bottle_front.png' /></div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguiente_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>160</div>"+

	"" ;
	
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_peptoBismol_03_brasil =
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_peptoBismol_03_mexico ;
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
				}
			});
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var peptoBismol_sistemaDigestivo = document.getElementById("peptoBismol_sistemaDigestivo") ;
			var peptoBismol_estomago = document.getElementById("peptoBismol_estomago") ;
			
			var peptoBismol_descubreActua_txt = document.getElementById("peptoBismol_descubreActua_txt") ;
			var peptoBismol_sistemaDigestivo_txt = document.getElementById("peptoBismol_sistemaDigestivo_txt") ;
			
			var peptoBismol_subsalicilato = document.getElementById("peptoBismol_subsalicilato") ;
			var peptoBismol_estomagoSolamente = document.getElementById("peptoBismol_estomagoSolamente") ;
			var peptoBismol_intestinoDelgado = document.getElementById("peptoBismol_intestinoDelgado") ;
			var peptoBismol_colon = document.getElementById("peptoBismol_colon") ;
			var peptoBismol_stop = document.getElementById("peptoBismol_stop") ;
			
			var peptoBismol_bullets_s3_title_01 = document.getElementById("peptoBismol_bullets_s3_title_01") ;
			var peptoBismol_bullets_s3_title_02 = document.getElementById("peptoBismol_bullets_s3_title_02") ;
			var peptoBismol_bullets_s3_title_03 = document.getElementById("peptoBismol_bullets_s3_title_03") ;
			
			var peptoBismol_bullets_s3_txt_01 = document.getElementById("peptoBismol_bullets_s3_txt_01") ;
			var peptoBismol_bullets_s3_txt_02 = document.getElementById("peptoBismol_bullets_s3_txt_02") ;
			var peptoBismol_bullets_s3_txt_03 = document.getElementById("peptoBismol_bullets_s3_txt_03") ;
			
			var peptoBismol_bottle_front = document.getElementById("peptoBismol_bottle_front") ;
			
			
			peptoBismol_sistemaDigestivo.style.opacity = '0' ;
			peptoBismol_estomago.style.opacity = '0' ;
			peptoBismol_descubreActua_txt.style.opacity = '0' ;
			peptoBismol_sistemaDigestivo_txt.style.opacity = '0' ;
			peptoBismol_subsalicilato.style.opacity = '0' ;
			peptoBismol_estomagoSolamente.style.opacity = '0' ;
			peptoBismol_intestinoDelgado.style.opacity = '0' ;
			peptoBismol_colon.style.opacity = '0' ;
			peptoBismol_stop.style.opacity = '0' ;
			peptoBismol_bullets_s3_title_01.style.opacity = '0' ;
			peptoBismol_bullets_s3_title_02.style.opacity = '0' ;
			peptoBismol_bullets_s3_title_03.style.opacity = '0' ;
			peptoBismol_bullets_s3_txt_01.style.opacity = '0' ;
			peptoBismol_bullets_s3_txt_02.style.opacity = '0' ;
			peptoBismol_bullets_s3_txt_03.style.opacity = '0' ;
			peptoBismol_bottle_front.style.opacity = '0' ;
			
			
			TweenMax.fromTo (peptoBismol_sistemaDigestivo , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , ease:Power2.easeOut}) ;
			
			TweenMax.fromTo (peptoBismol_estomago , 1 , {css:{opacity:"0" , top:"-100px"}} , {css:{opacity:"1" , top:"0px"} , delay: .5 , ease:Power2.easeOut}) ;
			
			TweenMax.staggerFromTo ([peptoBismol_descubreActua_txt , peptoBismol_sistemaDigestivo_txt] , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay: 1 , ease:Power2.easeOut} , .25) ;
			
			TweenMax.fromTo (peptoBismol_subsalicilato , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
			
			/**********************************************
			Actions functions
			***********************************************/
			//01
			function actions_01()
			{
				TweenMax.fromTo (peptoBismol_estomagoSolamente , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (peptoBismol_bullets_s3_title_01 , 1 , {css:{opacity:"0" , left:"625px"}} , {css:{opacity:"1" , left:"525px"} , delay:.5 , ease:Power2.easeOut}) ;	
				TweenMax.fromTo (peptoBismol_bullets_s3_txt_01 , 1 , {css:{opacity:"0" , left:"625px"}} , {css:{opacity:"1" , left:"525px"} , delay:1 , ease:Power2.easeOut}) ;
			}
			
			//02
			function actions_02()
			{
				TweenMax.fromTo (peptoBismol_intestinoDelgado , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (peptoBismol_bullets_s3_title_02 , 1 , {css:{opacity:"0" , left:"625px"}} , {css:{opacity:"1" , left:"525px"} , delay:.5 , ease:Power2.easeOut}) ;	
				TweenMax.fromTo (peptoBismol_bullets_s3_txt_02 , 1 , {css:{opacity:"0" , left:"625px"}} , {css:{opacity:"1" , left:"525px"} , delay:1 , ease:Power2.easeOut}) ;
			}
			
			//03
			function actions_03()
			{
				TweenMax.fromTo ([peptoBismol_colon , peptoBismol_stop] , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (peptoBismol_bullets_s3_title_03 , 1 , {css:{opacity:"0" , left:"625px"}} , {css:{opacity:"1" , left:"525px"} , delay:.5 , ease:Power2.easeOut}) ;	
				TweenMax.fromTo (peptoBismol_bullets_s3_txt_03 , 1 , {css:{opacity:"0" , left:"625px"}} , {css:{opacity:"1" , left:"525px"} , delay:1 , ease:Power2.easeOut}) ;
			}
			
			//04
			function actions_04()
			{
				TweenMax.fromTo (peptoBismol_bottle_front , 1 , {css:{opacity:"0" , top:"800px"}} , {css:{opacity:"1" , top:"350px"} , ease:Power2.easeOut}) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			//03
			function actions_05()
			{
				TweenMax.fromTo (peptoBismol_intestinoDelgado , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (peptoBismol_bullets_s3_title_01 , 1 , {css:{opacity:"0" , left:"625px"}} , {css:{opacity:"1" , left:"525px"} , delay:.5 , ease:Power2.easeOut}) ;	
				TweenMax.fromTo (peptoBismol_bullets_s3_txt_01 , 1 , {css:{opacity:"0" , left:"625px"}} , {css:{opacity:"1" , left:"525px"} , delay:1 , ease:Power2.easeOut}) ;
				
				
				
				TweenMax.staggerFromTo ([peptoBismol_subsalicilato , peptoBismol_estomagoSolamente , peptoBismol_intestinoDelgado , peptoBismol_colon , peptoBismol_stop] , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay: 2 , ease:Power2.easeOut} , 1) ;
				
				TweenMax.staggerFromTo ([peptoBismol_bullets_s3_title_01 , peptoBismol_bullets_s3_title_02 , peptoBismol_bullets_s3_title_03] , .5 , {css:{opacity:"0" , left:"625px"}} , {css:{opacity:"1" , left:"525px"} , delay: 4 , ease:Power2.easeOut} , .25) ;
				
				TweenMax.staggerFromTo ([peptoBismol_bullets_s3_txt_01 , peptoBismol_bullets_s3_txt_02 , peptoBismol_bullets_s3_txt_03] , .5 , {css:{opacity:"0" , left:"625px"}} , {css:{opacity:"1" , left:"525px"} , delay: 5 , ease:Power2.easeOut} , .25) ;
				
				TweenMax.fromTo (peptoBismol_bottle_front , 1 , {css:{opacity:"0" , top:"800px"}} , {css:{opacity:"1" , top:"350px"} , ease:Power2.easeOut , delay:6}) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_peptoBismol_03_mex()
			{
				var peptoBismol_sistemaDigestivo = document.getElementById("peptoBismol_sistemaDigestivo") ;
				var peptoBismol_estomago = document.getElementById("peptoBismol_estomago") ;
				
				var peptoBismol_descubreActua_txt = document.getElementById("peptoBismol_descubreActua_txt") ;
				var peptoBismol_sistemaDigestivo_txt = document.getElementById("peptoBismol_sistemaDigestivo_txt") ;
				
				var peptoBismol_subsalicilato = document.getElementById("peptoBismol_subsalicilato") ;
				var peptoBismol_estomagoSolamente = document.getElementById("peptoBismol_estomagoSolamente") ;
				var peptoBismol_intestinoDelgado = document.getElementById("peptoBismol_intestinoDelgado") ;
				var peptoBismol_colon = document.getElementById("peptoBismol_colon") ;
				var peptoBismol_stop = document.getElementById("peptoBismol_stop") ;
				
				var peptoBismol_bullets_s3_title_01 = document.getElementById("peptoBismol_bullets_s3_title_01") ;
				var peptoBismol_bullets_s3_title_02 = document.getElementById("peptoBismol_bullets_s3_title_02") ;
				var peptoBismol_bullets_s3_title_03 = document.getElementById("peptoBismol_bullets_s3_title_03") ;
				
				var peptoBismol_bullets_s3_txt_01 = document.getElementById("peptoBismol_bullets_s3_txt_01") ;
				var peptoBismol_bullets_s3_txt_02 = document.getElementById("peptoBismol_bullets_s3_txt_02") ;
				var peptoBismol_bullets_s3_txt_03 = document.getElementById("peptoBismol_bullets_s3_txt_03") ;
				
				var peptoBismol_bottle_front = document.getElementById("peptoBismol_bottle_front") ;
				
				TweenMax.fromTo (peptoBismol_sistemaDigestivo , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (peptoBismol_estomago , 2 , {css:{opacity:"1" , top:"0px"}} , {css:{opacity:"0" , top:"-100px"} , ease:Power2.easeOut}) ;
		
				TweenMax.staggerFromTo ([peptoBismol_descubreActua_txt , peptoBismol_sistemaDigestivo_txt] , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut} , .25) ;
		
				TweenMax.staggerFromTo ([peptoBismol_subsalicilato , peptoBismol_estomagoSolamente , peptoBismol_intestinoDelgado , peptoBismol_colon , peptoBismol_stop] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut} , .25) ;
				
				TweenMax.staggerFromTo ([peptoBismol_bullets_s3_title_01 , peptoBismol_bullets_s3_title_02 , peptoBismol_bullets_s3_title_03] , 2 , {css:{opacity:"1" , left:"525px"}} , {css:{opacity:"0" , left:"725px"} , ease:Power2.easeOut} , .25) ;
				
				TweenMax.staggerFromTo ([peptoBismol_bullets_s3_txt_01 , peptoBismol_bullets_s3_txt_02 , peptoBismol_bullets_s3_txt_03] , 1 , {css:{opacity:"1" , left:"525px"}} , {css:{opacity:"0" , left:"325px"} , ease:Power2.easeOut} , .25) ;
				
				TweenMax.fromTo (peptoBismol_bottle_front , 3 , {css:{opacity:"1" , top:"350px"}} , {css:{opacity:"0" , top:"300px"} , ease:Power2.easeOut , onComplete:ChangePage}) ;
				
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
							educacionFarmaceutico_peptoBismol_02() ;
						break;
						
						case 1:
							educacionFarmaceutico_peptoBismol_04() ;
						break ;
					}
				}
			}
			
			//////////////////////////Kill Tweens
			function kill_peptoBismol_brochure_03_mex()
			{
				var peptoBismol_sistemaDigestivo = document.getElementById("peptoBismol_sistemaDigestivo") ;
				var peptoBismol_estomago = document.getElementById("peptoBismol_estomago") ;
				
				var peptoBismol_descubreActua_txt = document.getElementById("peptoBismol_descubreActua_txt") ;
				var peptoBismol_sistemaDigestivo_txt = document.getElementById("peptoBismol_sistemaDigestivo_txt") ;
				
				var peptoBismol_subsalicilato = document.getElementById("peptoBismol_subsalicilato") ;
				var peptoBismol_estomagoSolamente = document.getElementById("peptoBismol_estomagoSolamente") ;
				var peptoBismol_intestinoDelgado = document.getElementById("peptoBismol_intestinoDelgado") ;
				var peptoBismol_colon = document.getElementById("peptoBismol_colon") ;
				var peptoBismol_stop = document.getElementById("peptoBismol_stop") ;
				
				var peptoBismol_bullets_s3_title_01 = document.getElementById("peptoBismol_bullets_s3_title_01") ;
				var peptoBismol_bullets_s3_title_02 = document.getElementById("peptoBismol_bullets_s3_title_02") ;
				var peptoBismol_bullets_s3_title_03 = document.getElementById("peptoBismol_bullets_s3_title_03") ;
				
				var peptoBismol_bullets_s3_txt_01 = document.getElementById("peptoBismol_bullets_s3_txt_01") ;
				var peptoBismol_bullets_s3_txt_02 = document.getElementById("peptoBismol_bullets_s3_txt_02") ;
				var peptoBismol_bullets_s3_txt_03 = document.getElementById("peptoBismol_bullets_s3_txt_03") ;
				
				var peptoBismol_bottle_front = document.getElementById("peptoBismol_bottle_front") ;
					
				TweenMax.killTweensOf ([peptoBismol_sistemaDigestivo , peptoBismol_estomago , peptoBismol_descubreActua_txt , peptoBismol_sistemaDigestivo_txt , peptoBismol_subsalicilato , peptoBismol_estomagoSolamente , peptoBismol_intestinoDelgado , peptoBismol_colon , peptoBismol_stop , peptoBismol_bullets_s3_title_01 , peptoBismol_bullets_s3_title_02 , peptoBismol_bullets_s3_title_03 , peptoBismol_bullets_s3_txt_01 , peptoBismol_bullets_s3_txt_02 , peptoBismol_bullets_s3_txt_03 , peptoBismol_bottle_front]) ;
				
				TweenMax.to ([peptoBismol_sistemaDigestivo , peptoBismol_estomago , peptoBismol_descubreActua_txt , peptoBismol_sistemaDigestivo_txt , peptoBismol_subsalicilato , peptoBismol_estomagoSolamente , peptoBismol_intestinoDelgado , peptoBismol_colon , peptoBismol_stop , peptoBismol_bullets_s3_title_01 , peptoBismol_bullets_s3_title_02 , peptoBismol_bullets_s3_title_03 , peptoBismol_bullets_s3_txt_01 , peptoBismol_bullets_s3_txt_02 , peptoBismol_bullets_s3_txt_03 , peptoBismol_bottle_front] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			}

			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_educacionFarmaceutico_peptoBismol_03_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_peptoBismol_03_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_peptoBismol_03_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_peptoBismol_03_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_peptoBismol_03_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_peptoBismol_03_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_peptoBismol_03_mex() ;
			});
	
			/*FlechaBack*/
			$('#flechaBack').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 0 ;
				
				kill_peptoBismol_brochure_03_mex () ;
				exit_educacionFarmaceutico_peptoBismol_03_mex () ;
			});
			
			/*FlechaNext*/
			$('#flechaNext').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 1 ;
				
				kill_peptoBismol_brochure_03_mex () ;
				exit_educacionFarmaceutico_peptoBismol_03_mex () ;
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_peptoBismol_03_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/////////////////////////////////Main Animation
			var noDisponible = document.getElementById("noDisponible") ;
				
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_peptoBismol_03()
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
							educacionFarmaceutico_peptoBismol_02() ;
						break;
						
						case 1:
							educacionFarmaceutico_peptoBismol_04() ;
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
				exit_educacionFarmaceutico_peptoBismol_03() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_peptoBismol_03() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_peptoBismol_03() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_peptoBismol_03() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_peptoBismol_03() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_peptoBismol_03() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_peptoBismol_03() ;
			});
	
			/*FlechaBack*/
			$('#flechaBack').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 0 ;
				exit_educacionFarmaceutico_peptoBismol_03 () ;
			});
			
			/*FlechaNext*/
			$('#flechaNext').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 1 ;
				exit_educacionFarmaceutico_peptoBismol_03() ;
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
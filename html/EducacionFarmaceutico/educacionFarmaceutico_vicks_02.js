<!--Language Selector-->
function educacionFarmaceutico_vicks_02()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_vicks_02' ;
	
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
	var educacionFarmaceutico_vicks_02_mexico =
		//Logo
		"<div class='vicks_logoVicks' id='vicks_logoVicks'><img src='img/img_logo_vicks.png'></div>"+
				
		//Bottle
		"<div class='vicks_bottle' id='vicks_bottle_s2'><img src='img/Vicks/img_bottle_vicks_blue.png' /></div>"+
		
			//Shadow
		"<div class='vicks_bottle_shadow' id='vicks_bottle_shadow_s2'><img src='img/Vicks/img_bottle_shadow.png' /></div>"+
		
		//Recomienda VapoRub
		"<div class='vicks_recomienda_txt' id='vicks_recomienda_txt'>Si recomiendas* <strong style='font-family:FuturaBold ; color:#FFF ;'>VapoRub®</strong> con cada Jarabe o Antigripal, <strong style='font-family:FuturaBold ; color:#FFF ;'>VapoRub®</strong> entregará a tus pacientes un alivio rápido y efectivo.</strong></div>"+
		
			//Products
		"<div class='vicks_products_02' id='vicks_products_02'><img src='img/Vicks/img_products_02.png'/></div>"+
		
		//Esquema de Ventas text
		"<div class='vicks_esquemaVentas_txt' id='vicks_esquemaVentas_txt'>Esquema de ventas incrementales si el consumidor pide <strong style='font-family:FuturaBold ; color:#FFF ;'>VapoRub®</strong> y otros productos.</div>"+
				
			//Esquema de Ventas Table
		"<div class='vicks_esquemaVentas_table' id='vicks_esquemaVentas_table'><img src='img/Vicks/img_esquemaVentas.png'/></div>"+
		
		//Note
		"<div class='vicks_notes' id='vicks_s2_notes_01'>*No se conocen interacciones del uso de VapoRub® con otros jarabes y medicinas para la gripe. Puedes recomendar VapoRub® sólo cuando el consumidor lo necesite en base a sus síntomas de gripe (congestion nasal, tos y dolores musculares)<br/><br/>133300202C6007</div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguiente_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>153</div>"+
		
	"" ;
	
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_vicks_02_brasil =
		//Logo
		"<div class='vicks_logoVicks' id='vicks_logoVicks'><img src='img/img_logo_vicks.png'></div>"+
				
		//Bottle
		"<div class='vicks_bottle' id='vicks_bottle_s2'><img src='img/Vicks/img_bottle_vicks_blue.png' /></div>"+
		
			//Shadow
		"<div class='vicks_bottle_shadow' id='vicks_bottle_shadow_s2'><img src='img/Vicks/img_bottle_shadow.png' /></div>"+
		
		//Recomienda VapoRub
		"<div class='vicks_recomienda_txt' id='vicks_recomienda_txt'><strong style='font-family:FuturaBold ; color:#FFF ;'>VapoRub®</strong> <br/>pode ser associado a xarope ou antigripais, proporcionando aos seus pacientes um rápido alívio.</strong></div>"+
		
			//Products
		"<div class='vicks_products_02' id='vicks_products_02'><img src='img/Vicks/img_products_02.png'/></div>"+
		
		//Esquema de Ventas text
		"<div class='vicks_esquemaVentas_txt' id='vicks_esquemaVentas_txt'><strong style='font-family:FuturaBold ; color:#FFF ;'>VapoRub®</strong></div>"+
				
			//Esquema de Ventas Table
		"<div class='vicks_esquemaVentas_table' id='vicks_esquemaVentas_table'><img src='img/Vicks/img_esquemaVentas.png'/></div>"+
		
		//Note
		"<div class='vicks_notes' id='vicks_s2_notes_01'>Ação rápida se refere ao mecanimso de açao do produto. Deve ser aplicado durante a noite para ajudar a ter uma boa noite de sono.</div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguinte_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>114</div>"+

	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_vicks_02_mexico ;
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
				}
			});
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var vicks_bottle_s2 = document.getElementById("vicks_bottle_s2") ;
	
			var vicks_recomienda_txt = document.getElementById("vicks_recomienda_txt") ;
			
			var vicks_products_02 = document.getElementById("vicks_products_02") ;
			
			var vicks_esquemaVentas_txt = document.getElementById("vicks_esquemaVentas_txt") ;
			var vicks_esquemaVentas_table = document.getElementById("vicks_esquemaVentas_table") ;
			
			var vicks_s2_notes_01 = document.getElementById("vicks_s2_notes_01") ;
			
			vicks_bottle_s2.style.opacity = '0' ;
			vicks_recomienda_txt.style.opacity = '0' ;
			vicks_products_02.style.opacity = '0' ;
			vicks_esquemaVentas_txt.style.opacity = '0' ;
			vicks_esquemaVentas_table.style.opacity = '0' ;
			vicks_s2_notes_01.style.opacity = '0' ;
		
			TweenMax.fromTo (vicks_bottle_s2 , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"} , ease:Power2.easeOut}) ;
			TweenMax.staggerFromTo ([vicks_recomienda_txt , vicks_s2_notes_01] , 1 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay: 1 , ease:Power2.easeOut} , .5) ;
			
			//////////////////////////Kill Tweens
			function kill_vicks_brochure_02_mex()
			{
				var vicks_bottle_s2 = document.getElementById("vicks_bottle_s2") ;
			
				var vicks_recomienda_txt = document.getElementById("vicks_recomienda_txt") ;
				
				var vicks_products_02 = document.getElementById("vicks_products_02") ;
				
				var vicks_esquemaVentas_txt = document.getElementById("vicks_esquemaVentas_txt") ;
				var vicks_esquemaVentas_table = document.getElementById("vicks_esquemaVentas_table") ;
				
				var vicks_s2_notes_01 = document.getElementById("vicks_s2_notes_01") ;
					
				TweenMax.killTweensOf ([vicks_bottle_s2 , vicks_recomienda_txt , vicks_products_02 , vicks_esquemaVentas_txt , vicks_esquemaVentas_table , vicks_s2_notes_01]) ;
				
				TweenMax.to ([vicks_bottle_s2 , vicks_recomienda_txt , vicks_products_02 , vicks_esquemaVentas_txt , vicks_esquemaVentas_table , vicks_s2_notes_01] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			}

			/**********************************************
			Actions functions
			***********************************************/
			//01
			function actions_01_mex()
			{
				TweenMax.fromTo (vicks_esquemaVentas_txt , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
			}
			
			//02
			function actions_02_mex()
			{
				TweenMax.fromTo (vicks_products_02 , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
			}
		
			//02
			function actions_03_mex()
			{
				TweenMax.fromTo (vicks_esquemaVentas_table , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_vicks_02_mex()
			{
				var vicks_bottle_s2 = document.getElementById("vicks_bottle_s2") ;
				var vicks_bottle_shadow_s2 = document.getElementById("vicks_bottle_shadow_s2") ;
			
				var vicks_recomienda_txt = document.getElementById("vicks_recomienda_txt") ;
				
				var vicks_products_02 = document.getElementById("vicks_products_02") ;
				
				var vicks_esquemaVentas_txt = document.getElementById("vicks_esquemaVentas_txt") ;
				var vicks_esquemaVentas_table = document.getElementById("vicks_esquemaVentas_table") ;
				
				var vicks_s2_notes_01 = document.getElementById("vicks_s2_notes_01") ;
			
				TweenMax.fromTo (vicks_bottle_s2 , 2 , {css:{left:"750px"}} , {css:{left:"450px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (vicks_bottle_shadow_s2 , 2 , {css:{left:"600px"}} , {css:{left:"310px"} , onComplete:ChangePage , ease:Power2.easeOut}) ;
				
				TweenMax.staggerFromTo ([vicks_recomienda_txt , vicks_s2_notes_01] , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.5,.5)"} , ease:Power2.easeOut} , .5) ;
				
				TweenMax.staggerFromTo ([vicks_esquemaVentas_txt , vicks_products_02 , vicks_esquemaVentas_table] , .5 , {css:{opacity:"1" , transform:"scale(2,2)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut}) ;
				
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
							educacionFarmaceutico_vicks_01() ;
						break;
						
						case 1:
							educacionFarmaceutico_vicks_03() ;
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
				exit_educacionFarmaceutico_vicks_02_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_vicks_02_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_vicks_02_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_vicks_02_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_vicks_02_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_vicks_02_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_vicks_02_mex() ;
			});
	
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_vicks_02_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_vicks_02_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_vicks_02_brasil ;
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
				}
			});
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var vicks_bottle_s2 = document.getElementById("vicks_bottle_s2") ;
	
			var vicks_recomienda_txt = document.getElementById("vicks_recomienda_txt") ;
			
			var vicks_products_02 = document.getElementById("vicks_products_02") ;
			
			var vicks_esquemaVentas_txt = document.getElementById("vicks_esquemaVentas_txt") ;
			var vicks_esquemaVentas_table = document.getElementById("vicks_esquemaVentas_table") ;
			
			var vicks_s2_notes_01 = document.getElementById("vicks_s2_notes_01") ;
			
			vicks_bottle_s2.style.opacity = '0' ;
			vicks_recomienda_txt.style.opacity = '0' ;
			vicks_products_02.style.opacity = '0' ;
			vicks_esquemaVentas_txt.style.opacity = '0' ;
			vicks_esquemaVentas_table.style.opacity = '0' ;
			vicks_s2_notes_01.style.opacity = '0' ;
		
			TweenMax.fromTo (vicks_bottle_s2 , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"} , ease:Power2.easeOut}) ;
			TweenMax.staggerFromTo ([vicks_recomienda_txt , vicks_s2_notes_01] , 1 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay: 1 , ease:Power2.easeOut} , .5) ;
			
			//////////////////////////Kill Tweens
			function kill_vicks_brochure_02()
			{
				var vicks_bottle_s2 = document.getElementById("vicks_bottle_s2") ;
			
				var vicks_recomienda_txt = document.getElementById("vicks_recomienda_txt") ;
				
				var vicks_products_02 = document.getElementById("vicks_products_02") ;
				
				var vicks_esquemaVentas_txt = document.getElementById("vicks_esquemaVentas_txt") ;
				var vicks_esquemaVentas_table = document.getElementById("vicks_esquemaVentas_table") ;
				
				var vicks_s2_notes_01 = document.getElementById("vicks_s2_notes_01") ;
					
				TweenMax.killTweensOf ([vicks_bottle_s2 , vicks_recomienda_txt , vicks_products_02 , vicks_esquemaVentas_txt , vicks_esquemaVentas_table , vicks_s2_notes_01]) ;
				
				TweenMax.to ([vicks_bottle_s2 , vicks_recomienda_txt , vicks_products_02 , vicks_esquemaVentas_txt , vicks_esquemaVentas_table , vicks_s2_notes_01] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			}

			/**********************************************
			Actions functions
			***********************************************/
			//01
			function actions_01()
			{
				TweenMax.fromTo (vicks_esquemaVentas_txt , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
			}
			
			//02
			function actions_02()
			{
				TweenMax.fromTo (vicks_products_02 , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
			}
		
			//02
			function actions_03()
			{
				TweenMax.fromTo (vicks_esquemaVentas_table , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_vicks_02()
			{
				var vicks_bottle_s2 = document.getElementById("vicks_bottle_s2") ;
				var vicks_bottle_shadow_s2 = document.getElementById("vicks_bottle_shadow_s2") ;
			
				var vicks_recomienda_txt = document.getElementById("vicks_recomienda_txt") ;
				
				var vicks_products_02 = document.getElementById("vicks_products_02") ;
				
				var vicks_esquemaVentas_txt = document.getElementById("vicks_esquemaVentas_txt") ;
				var vicks_esquemaVentas_table = document.getElementById("vicks_esquemaVentas_table") ;
				
				var vicks_s2_notes_01 = document.getElementById("vicks_s2_notes_01") ;
			
				TweenMax.fromTo (vicks_bottle_s2 , 2 , {css:{left:"750px"}} , {css:{left:"450px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (vicks_bottle_shadow_s2 , 2 , {css:{left:"600px"}} , {css:{left:"310px"} , onComplete:ChangePage , ease:Power2.easeOut}) ;
				
				TweenMax.staggerFromTo ([vicks_recomienda_txt , vicks_s2_notes_01] , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.5,.5)"} , ease:Power2.easeOut} , .5) ;
				
				TweenMax.staggerFromTo ([vicks_esquemaVentas_txt , vicks_products_02 , vicks_esquemaVentas_table] , .5 , {css:{opacity:"1" , transform:"scale(2,2)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut}) ;
				
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
							educacionFarmaceutico_vicks_01() ;
						break;
						
						case 1:
							educacionFarmaceutico_vicks_03() ;
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
				exit_educacionFarmaceutico_vicks_02() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_vicks_02() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_vicks_02() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_vicks_02() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_vicks_02() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_vicks_02() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_vicks_02() ;
			});
	
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_vicks_02() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_vicks_02() ;
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
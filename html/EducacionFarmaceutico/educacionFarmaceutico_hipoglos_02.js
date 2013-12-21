<!--Language Selector-->
function educacionFarmaceutico_hipoglos_02()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_hipoglos_02' ;
	
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
	var educacionFarmaceutico_hipoglos_02_mexico =
		//Logo
		"<div class='hipoglos_logoHipoglos' id='hipoglos_logoHipoglos'><img src='img/Hipoglos/img_logoHipoglos_wStroke.png' height='50'></div>"+
		
		//Container
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+
		
		//Slide Number
		"<div class='slideNumber'>---</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_hipoglos_02_brasil =
		//Logo
		"<div class='hipoglos_logoHipoglos' id='hipoglos_logoHipoglos'><img src='img/Hipoglos/img_logoHipoglos_wStroke.png' height='50'></div>"+
		
		//Heart
		"<div class='hipoglos_heart' id='hipoglos_heart_02'><img src='img/Hipoglos/img_heart.png' /></div>"+
		
		//Bebe
		"<div class='hipoglos_imgBebe' id='hipoglos_imgBebe'><img src='img/Hipoglos/img_bebe.png' /></div>"+
		//Pompis
			//01
		"<div class='hipoglos_pompis' id='hipoglos_pompis_01'><img src='img/Hipoglos/img_pompis_02.png' /></div>"+
			//02
		"<div class='hipoglos_pompis' id='hipoglos_pompis_02'><img src='img/Hipoglos/img_pompis_01.png' /></div>"+
		//Little heart
		"<div class='hipoglos_heartText' id='hipoglos_heartText'><img src='img/Hipoglos/img_littleheart_txt.png' /></div>"+
		
		//Ribbons
			//01
		"<div class='hipoglos_ribbon' id='hipoglos_ribbon_01'><img src='img/Hipoglos/img_ribbon_01.png' /></div>"+
			//02
		"<div class='hipoglos_ribbon' id='hipoglos_ribbon_02'><img src='img/Hipoglos/img_ribbon_02.png' /></div>"+
			//03
		"<div class='hipoglos_ribbon' id='hipoglos_ribbon_03'><img src='img/Hipoglos/img_ribbon_03.png' /></div>"+
		
		
		//Main Texts
			//01
		"<div class='hipoglos_text_s2' id='hipoglos_text_s2'>O que você precisa saber sobre assaduras:</div>"+

		//Content Text
			//01
		"<div class='hipoglos_text_s2_cont' id='hipoglos_text_s2_cont_01'>• Assadura é uma inflamação cutânea causada pelo contato da pele com as fezes e a urina.<br/>• Mais comum em crianças de até 3 anos de idade.<br/>• Deixa a pele vermelha, levemente inchada e pode evoluir para bolhas e feridas.</div>"+
			//02
		"<div class='hipoglos_text_s2_cont' id='hipoglos_text_s2_cont_02'>O contato da pele com a urina e as fezes cria um meio de cultura para fungos e bactérias, provocando lesões cutâneas. Quanto maior esse contato, mais vulnerável a pele do bebê fica.</div>"+
			//03
		"<div class='hipoglos_text_s2_cont' id='hipoglos_text_s2_cont_03'>1 • Em um lado do bumbum do bebê vamos aplicar Hipoglós e no outro aplicaremos um produto concorrente.</div>"+
			//04
		"<div class='hipoglos_text_s2_cont' id='hipoglos_text_s2_cont_04'>2 • Após o bebê utilizar a fralda, como de costume, você pode notar que Hipoglós continua com a barreira branca que protege o bumbum do bebê, enquanto a maioria dos outros produtos sai com o atrito e fica na fralda.</div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguinte_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>120</div>"+
		
	"" ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_hipoglos_02_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var noDisponible = document.getElementById("noDisponible") ;
				
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_hipoglos_02_mex()
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
							educacionFarmaceutico_hipoglos_01() ;
						break;
						
						case 1:
							educacionFarmaceutico_hipoglos_03() ;
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
				exit_educacionFarmaceutico_hipoglos_02_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_hipoglos_02_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_hipoglos_02_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_hipoglos_02_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_hipoglos_02_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_hipoglos_02_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_hipoglos_02_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_hipoglos_02_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_hipoglos_02_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_hipoglos_02_brasil ;
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
			var hipoglos_heart_02 = document.getElementById("hipoglos_heart_02") ;
			
			var hipoglos_imgBebe = document.getElementById("hipoglos_imgBebe") ;
			
			var hipoglos_pompis_01 = document.getElementById("hipoglos_pompis_01") ;
			var hipoglos_pompis_02 = document.getElementById("hipoglos_pompis_02") ;
			
			var hipoglos_heartText = document.getElementById("hipoglos_heartText") ;
			
			var hipoglos_ribbon_01 = document.getElementById("hipoglos_ribbon_01") ;
			var hipoglos_ribbon_02 = document.getElementById("hipoglos_ribbon_02") ;
			var hipoglos_ribbon_03 = document.getElementById("hipoglos_ribbon_03") ;
			
			var hipoglos_text_s2 = document.getElementById("hipoglos_text_s2") ;
			
			var hipoglos_text_s2_cont_01 = document.getElementById("hipoglos_text_s2_cont_01") ;
			var hipoglos_text_s2_cont_02 = document.getElementById("hipoglos_text_s2_cont_02") ;
			var hipoglos_text_s2_cont_03 = document.getElementById("hipoglos_text_s2_cont_03") ;
			var hipoglos_text_s2_cont_04 = document.getElementById("hipoglos_text_s2_cont_04") ;

			hipoglos_imgBebe.style.opacity = '0' ;
			
			hipoglos_pompis_01.style.opacity = '0' ;
			hipoglos_pompis_02.style.opacity = '0' ;
			
			hipoglos_heartText.style.opacity = '0' ;
			
			hipoglos_ribbon_01.style.opacity = '0' ;
			hipoglos_ribbon_02.style.opacity = '0' ;
			hipoglos_ribbon_03.style.opacity = '0' ;
			
			hipoglos_text_s2.style.opacity = '0' ;
			
			hipoglos_text_s2_cont_01.style.opacity = '0' ;
			hipoglos_text_s2_cont_02.style.opacity = '0' ;
			hipoglos_text_s2_cont_03.style.opacity = '0' ;
			hipoglos_text_s2_cont_04.style.opacity = '0' ;
		
			TweenMax.fromTo (hipoglos_text_s2 , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , ease:Power2.easeOut}) ;
			TweenMax.staggerFromTo ([hipoglos_ribbon_01 , hipoglos_text_s2_cont_01] , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut} , .25) ;

			//////////////////////////Kill Tweens
			function kill_hipoglos_brochure_02()
			{
				var hipoglos_bottle_s2 = document.getElementById("hipoglos_bottle_s2") ;
			
				var hipoglos_recomienda_txt = document.getElementById("hipoglos_recomienda_txt") ;
				
				var hipoglos_products_02 = document.getElementById("hipoglos_products_02") ;
				
				var hipoglos_esquemaVentas_txt = document.getElementById("hipoglos_esquemaVentas_txt") ;
				var hipoglos_esquemaVentas_table = document.getElementById("hipoglos_esquemaVentas_table") ;
				
				var hipoglos_s2_notes_01 = document.getElementById("hipoglos_s2_notes_01") ;
					
				TweenMax.killTweensOf ([hipoglos_bottle_s2 , hipoglos_recomienda_txt , hipoglos_products_02 , hipoglos_esquemaVentas_txt , hipoglos_esquemaVentas_table , hipoglos_s2_notes_01]) ;
			}

			/**********************************************
			Actions functions
			***********************************************/
			//01
			function actions_01()
			{
				TweenMax.staggerFromTo ([hipoglos_ribbon_02 , hipoglos_text_s2_cont_02] , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut} , .25) ;
			}
			
			//02
			function actions_02()
			{
				TweenMax.staggerFromTo ([hipoglos_ribbon_03 , hipoglos_text_s2_cont_03 , hipoglos_pompis_01 , hipoglos_text_s2_cont_04 , hipoglos_pompis_02 , hipoglos_heartText] , .5 , {css:{opacity:"0" , transform:"scale(2,2)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut} , .25) ;
				TweenMax.fromTo (hipoglos_imgBebe , .5 , {css:{opacity:"0" , bottom:"0px"}} , {css:{opacity:"1" , bottom:"75px"} , delay:1 , ease:Power2.easeOut} , .5) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_hipoglos_02()
			{
				var hipoglos_heart_02 = document.getElementById("hipoglos_heart_02") ;
			
				var hipoglos_imgBebe = document.getElementById("hipoglos_imgBebe") ;
				
				var hipoglos_pompis_01 = document.getElementById("hipoglos_pompis_01") ;
				var hipoglos_pompis_02 = document.getElementById("hipoglos_pompis_02") ;
				
				var hipoglos_heartText = document.getElementById("hipoglos_heartText") ;
				
				var hipoglos_ribbon_01 = document.getElementById("hipoglos_ribbon_01") ;
				var hipoglos_ribbon_02 = document.getElementById("hipoglos_ribbon_02") ;
				var hipoglos_ribbon_03 = document.getElementById("hipoglos_ribbon_03") ;
				
				var hipoglos_text_s2 = document.getElementById("hipoglos_text_s2") ;
				
				var hipoglos_text_s2_cont_01 = document.getElementById("hipoglos_text_s2_cont_01") ;
				var hipoglos_text_s2_cont_02 = document.getElementById("hipoglos_text_s2_cont_02") ;
				var hipoglos_text_s2_cont_03 = document.getElementById("hipoglos_text_s2_cont_03") ;
				var hipoglos_text_s2_cont_04 = document.getElementById("hipoglos_text_s2_cont_04") ;
			
				TweenMax.fromTo (hipoglos_text_s2 , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage , ease:Power2.easeOut}) ;
				TweenMax.staggerFromTo ([hipoglos_ribbon_01 , hipoglos_text_s2_cont_01] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut} , .25) ;
				TweenMax.staggerFromTo ([hipoglos_ribbon_02 , hipoglos_text_s2_cont_02] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"} , ease:Power2.easeOut} , .25) ;
				TweenMax.fromTo (hipoglos_imgBebe , .5 , {css:{opacity:"1" , bottom:"75px"}} , {css:{opacity:"0" , bottom:"0px"} , ease:Power2.easeOut} , .5) ;
				TweenMax.fromTo (hipoglos_heart_02 , 1 , {css:{left:"150px"}} , {css:{left:"790px"} , ease:Power2.easeOut}) ;
				
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
							educacionFarmaceutico_hipoglos_01() ;
						break;
						
						case 1:
							educacionFarmaceutico_hipoglos_03() ;
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
				exit_educacionFarmaceutico_hipoglos_02() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_hipoglos_02() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_hipoglos_02() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_hipoglos_02() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_hipoglos_02() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_hipoglos_02() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_hipoglos_02() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_hipoglos_02() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_hipoglos_02() ;
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
<!--Language Selector-->
function educacionFarmaceutico_metamucil_01()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_metamucil_01' ;
	
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_marcas_Metamucil.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
	var educacionFarmaceutico_metamucil_01_mexico =
		//Logo
		"<div class='metamucil_logoMetemucil' id='metamucil_logoMetemucil'><img src='img/img_logo_metamucil.png'></div>"+

		//Click aqui
		"<div class='metamucil_clickAqui' id='metamucil_clickAqui'><img src='img/Metamucil/img_txt_clickAqui.png'></div>"+
		
		//Empty bottle
		"<div class='metamucil_bottle' id='metamucil_bottle_empty'><img src='img/Metamucil/img_bottle_empty.png' /></div>"+
		
		//Color bottle
		"<div class='metamucil_bottle' id='metamucil_bottle_color'><img src='img/Metamucil/img_bottle_color.png' /></div>"+
		
		//Person
		"<div class='metamucil_person_s1_container' id='metamucil_person_s1_container'><div id='metamucil_person_s1' ><img src='img/Metamucil/img_person_s1.png'/></div></div>"+
		
		//Top Text
		"<div class='metamucil_s1_topText' id='metamucil_s1_topText'><img src='img/Metamucil/img_s1_topText.png' width='365' /></div>"+
		
		//Descubre la fibra
		"<div class='metamucil_descubreFibra_txt' id='metamucil_descubreFibra_txt'><img src='img/Metamucil/img_Descubre.png'/></div>"+
		
		//Bottom Bottle
			//Phrase
		"<div class='metamucil_bottle_bottom' id='metamucil_bottle_bottom_phrase'><img src='img/Metamucil/img_bottle_bottom_phrase.png'/></div>"+
		
			//Burguer
		"<div class='metamucil_bottle_bottom' id='metamucil_bottle_bottom_burguer'><img src='img/Metamucil/img_bottle_bottom_burguer.png' /></div>"+
		
			//Metamucil
		"<div class='metamucil_bottle_bottom' id='metamucil_bottle_bottom_metamucil'><img src='img/Metamucil/img_bottle_bottom_metamucil.png' /></div>"+
		
		//Note
		"<div class='fullSection' id='metamucil_notes'>*Según OMS 2011. Fuente: http://www.who.int/gho/ncd/risk_factors/cholesterol_mean_text/en/</div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguiente_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>146</div>"+
		
	"" ;
	
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_metamucil_01_brasil =
		//Logo
		"<div class='metamucil_logoMetemucil' id='metamucil_logoMetemucil'><img src='img/img_logo_metamucil.png'></div>"+

		//Click aqui
		"<div class='metamucil_clickAqui' id='metamucil_clickAqui'><img src='img/Metamucil/img_txt_clickAqui.png'></div>"+
		
		//Empty bottle
		"<div class='metamucil_bottle' id='metamucil_bottle_empty'><img src='img/Metamucil/img_bottle_empty.png' /></div>"+
		
		//Color bottle
		"<div class='metamucil_bottle' id='metamucil_bottle_color'><img src='img/Metamucil/img_bottle_color.png' /></div>"+
		
		//Person
		"<div class='metamucil_person_s1_container' id='metamucil_person_s1_container'><div id='metamucil_person_s1' ><img src='img/Metamucil/img_person_s1.png'/></div></div>"+
		
		//Top Text
		"<div class='metamucil_s1_topText' id='metamucil_s1_topText'><img src='img/Metamucil/img_s1_topText_bra.png' width='365' /></div>"+
		
		//Descubre la fibra
		"<div class='metamucil_descubreFibra_txt' id='metamucil_descubreFibra_txt'><img src='img/Metamucil/img_Descubre_bra.png'/></div>"+
		
		//Bottom Bottle
			//Phrase
		"<div class='metamucil_bottle_bottom' id='metamucil_bottle_bottom_phrase'><img src='img/Metamucil/img_bottle_bottom_phrase_bra.png'/></div>"+
		
			//Burguer
		"<div class='metamucil_bottle_bottom' id='metamucil_bottle_bottom_burguer'><img src='img/Metamucil/img_bottle_bottom_burguer_bra.png' /></div>"+
		
			//Metamucil
		"<div class='metamucil_bottle_bottom' id='metamucil_bottle_bottom_metamucil'><img src='img/Metamucil/img_bottle_bottom_metamucil.png' /></div>"+
		
		//Note
		"<div class='fullSection' id='metamucil_notes'>*Segundo OMS 2011. Fonte: http://www.who.int/gho/ncd/risk_factors/cholesterol_mean_text/e</div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguinte_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>107</div>"+

	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_metamucil_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Variable actions
			***********************************************/
			var action_01 = 0 ;
			
			/**********************************************
			Button Actions
			***********************************************/			
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
				}
			});
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var metamucil_bottle_empty = document.getElementById("metamucil_bottle_empty") ;
			
			var metamucil_bottle_color = document.getElementById("metamucil_bottle_color") ;
			
			var metamucil_person_s1 = document.getElementById("metamucil_person_s1") ;
			
			var metamucil_s1_topText = document.getElementById("metamucil_s1_topText") ;
			
			var metamucil_bottle_bottom_phrase = document.getElementById("metamucil_bottle_bottom_phrase") ;
			var metamucil_bottle_bottom_burguer = document.getElementById("metamucil_bottle_bottom_burguer") ;
			var metamucil_bottle_bottom_metamucil = document.getElementById("metamucil_bottle_bottom_metamucil") ;
			
			var metamucil_clickAqui = document.getElementById("metamucil_clickAqui") ;
			
			var metamucil_descubreFibra_txt = document.getElementById("metamucil_descubreFibra_txt") ;
			
			
			metamucil_bottle_empty.style.display = 'none' ;
			metamucil_bottle_color.style.display = 'none' ;
			metamucil_person_s1.style.display = 'none' ;
			//metamucil_s1_topText.style.display = 'none' ;
			metamucil_bottle_bottom_phrase.style.display = 'none' ;
			metamucil_bottle_bottom_burguer.style.display = 'none' ;
			metamucil_bottle_bottom_metamucil.style.display = 'none' ;
			metamucil_clickAqui.style.display = 'none' ;
			metamucil_descubreFibra_txt.style.display = 'none' ;
			
			TweenMax.fromTo (metamucil_s1_topText , .5 , {css:{opacity:"0" , transform:"scale(1,1)" , top:"50px"}} , {css:{opacity:"1" , transform:"scale(2,2)" , top:"400px"} , ease:Power2.easeOut}) ;
			
			/**********************************************
			Actions functions
			***********************************************/
			//01	
			function actions_01_mex()
			{
				metamucil_descubreFibra_txt.style.display = 'inline' ;
				metamucil_descubreFibra_txt.style.zIndex = 5 ;
				
				TweenMax.fromTo (metamucil_s1_topText , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (metamucil_descubreFibra_txt , .5 , {css:{opacity:"0" , transform:"scale(2,2)" , bottom:"50px" , display:"inline"}} , {css:{opacity:"1" , transform:"scale(1,1)" , bottom:"400px"} , delay: 1 , ease:Power2.easeOut}) ;
			}
			
			//02
			function actions_02_mex()
			{
				metamucil_bottle_empty.style.display = 'inline' ;
				metamucil_bottle_color.style.display = 'inline' ;
				metamucil_person_s1.style.display = 'block' ;
				metamucil_bottle_bottom_phrase.style.display = 'inline' ;
				metamucil_descubreFibra_txt.style.display = 'inline' ;
				
				TweenMax.to (metamucil_descubreFibra_txt , .5 , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (metamucil_bottle_empty , 1 , {css:{opacity:"0" , height:"0px" , top:"850px"}} , {css:{opacity:"1" , height:"850px" , top:"25px"} , delay: 1 , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (metamucil_bottle_color , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , ease:Power2.easeOut , delay:2}) ;
				
				TweenMax.fromTo (metamucil_bottle_bottom_phrase , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"} , ease:Power2.easeOut , delay:3}) ;
				
				TweenMax.fromTo( metamucil_person_s1 , 1 , {rotationX:180 , transformOrigin:"center bottom"} , {rotationX:0 , ease:Bounce.easeOut , delay:3.5 } ) ;
				TweenMax.fromTo (metamucil_person_s1 , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:3.5}) ;
				
				TweenMax.fromTo (metamucil_s1_topText , .5 , {css:{opacity:"0" , top:"50px" , transform:"scale(1,5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut , delay:4 , onComplete:sizingPerson_mex}) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			//////////////////////////Dran&Drop
				///Main Function
			var draggie = new Draggabilly( metamucil_person_s1 ,
			{
				//Options
				containment: '#metamucil_person_s1_container' ,
				
			});
			
				//Functionality
			function onDragMove_mex( instance, event, pointer ) {
				console.log( 'dragMove on ' + event.type +
				pointer.pageX + ', ' + pointer.pageY +
				' position at ' + instance.position.x + ', ' + instance.position.y );
				}
				// bind event listener
				draggie.on( 'dragMove', onDragMove );
				// un-bind event listener
				draggie.off( 'dragMove', onDragMove );
				// return true to trigger an event listener just once
				draggie.on( 'dragMove', function() {
				console.log('Draggabilly did move, just once');
				return true;
			});

			//////////////////////////Show Metamucil Function
			function show_metamucil_secondImage_mex()
			{
				var metamucil_bottle_bottom_burguer = document.getElementById("metamucil_bottle_bottom_burguer") ;
				var metamucil_bottle_bottom_metamucil = document.getElementById("metamucil_bottle_bottom_metamucil") ;
				
				metamucil_bottle_bottom_burguer.style.display = 'inline' ;
				metamucil_bottle_bottom_metamucil.style.display = 'inline' ;
				
				TweenMax.fromTo (metamucil_bottle_bottom_burguer , 2 , {css:{opacity:"1" , top:"523px"}} , {css:{opacity:"0" , top:"600px"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (metamucil_bottle_bottom_phrase , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
			}
			
			/*Person*/
			$('#metamucil_person_s1 , #metamucil_clickAqui').click(function() {
				//auLocucion.src = '' ;
				
				kill_metamucil_brochure_01_mex() ;
				show_metamucil_secondImage_mex() ;
			});
			
			//////////////////////////Kill Tweens
			function kill_metamucil_brochure_01_mex()
			{
				var metamucil_bottle_empty = document.getElementById("metamucil_bottle_empty") ;
			
				var metamucil_bottle_color = document.getElementById("metamucil_bottle_color") ;
				
				var metamucil_person_s1 = document.getElementById("metamucil_person_s1") ;
				
				var metamucil_s1_topText = document.getElementById("metamucil_s1_topText") ;
				
				var metamucil_clickAqui = document.getElementById("metamucil_clickAqui") ;
				
				var metamucil_bottle_bottom_phrase = document.getElementById("metamucil_bottle_bottom_phrase") ;
				var metamucil_bottle_bottom_burguer = document.getElementById("metamucil_bottle_bottom_burguer") ;
				var metamucil_bottle_bottom_metamucil = document.getElementById("metamucil_bottle_bottom_metamucil") ;
					
				TweenMax.killTweensOf ([metamucil_bottle_empty , metamucil_bottle_color , metamucil_person_s1 , metamucil_s1_topText , metamucil_bottle_bottom_phrase , metamucil_bottle_bottom_burguer , metamucil_bottle_bottom_metamucil , metamucil_clickAqui]) ;
				
				TweenMax.to ([metamucil_bottle_empty , metamucil_bottle_color , metamucil_person_s1 , metamucil_s1_topText , metamucil_bottle_bottom_phrase , metamucil_bottle_bottom_burguer , metamucil_bottle_bottom_metamucil , metamucil_clickAqui] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
				
				TweenMax.to (metamucil_clickAqui , 0 , {css:{opacity:"0" , transform:"scale(1,1)"}}) ;
			}
			
			//////////////////////////sizingPerson
			function sizingPerson_mex()
			{
				var metamucil_person_s1 = document.getElementById("metamucil_person_s1") ;
				
				var changing = new TimelineMax({repeat:-1 , yoyo:true}) ;
				
				changing.fromTo(metamucil_person_s1 , 0.5 , {css:{transform:"scale(1,1)"}} , {css:{transform:"scale(1.015,1.015)"}}) ;
				
				btn_ClickMe() ;
			}
			
			//////////////////////////Click me
			function btn_ClickMe_mex()
			{
				var metamucil_clickAqui = document.getElementById("metamucil_clickAqui") ;
				metamucil_clickAqui.style.display = 'inline' ;
				
				var clickMe = new TimelineMax({repeat:-1 , repeatDelay:1.5 , yoyo:true}) ;
				
				clickMe.fromTo(metamucil_clickAqui , 0.25 , {css:{opacity:"0" , transform:"scale(3,1)" , transformOrigin:"center center"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			}
			
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_metamucil_01_mex()
			{
				var metamucil_bottle_empty = document.getElementById("metamucil_bottle_empty") ;
	
				var metamucil_bottle_color = document.getElementById("metamucil_bottle_color") ;
				
				var metamucil_person_s1 = document.getElementById("metamucil_person_s1") ;
				
				var metamucil_s1_topText = document.getElementById("metamucil_s1_topText") ;
				
				var metamucil_bottle_bottom_phrase = document.getElementById("metamucil_bottle_bottom_phrase") ;
				var metamucil_bottle_bottom_burguer = document.getElementById("metamucil_bottle_bottom_burguer") ;
				var metamucil_bottle_bottom_metamucil = document.getElementById("metamucil_bottle_bottom_metamucil") ;
				
				metamucil_bottle_bottom_burguer.style.display = 'none' ;
				metamucil_bottle_bottom_metamucil.style.display = 'none' ;
				
				TweenMax.fromTo ([metamucil_bottle_empty , metamucil_bottle_color] , 1 , {css:{opacity:"1" , top:"100px"}} , {css:{opacity:"0" , top:"200px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo ([metamucil_bottle_bottom_phrase , metamucil_bottle_bottom_phrase , metamucil_bottle_bottom_phrase] , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (metamucil_person_s1 , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}}) ;
				
				TweenMax.fromTo (metamucil_s1_topText , 1 , {css:{opacity:"1" , transform:"scale(1,1"}} , {css:{opacity:"0" , transform:"scale(1,5)"} , ease:Power2.easeOut , onComplete:ChangePage}) ;
				
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
							educacionFarmaceutico_metamucil_02() ;
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
				exit_educacionFarmaceutico_metamucil_01_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_metamucil_01_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_metamucil_01_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_metamucil_01_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_metamucil_01_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_metamucil_01_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_metamucil_01_mex() ;
			});


			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_metamucil_01_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_metamucil_01_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_metamucil_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Variable actions
			***********************************************/
			var action_01 = 0 ;
			
			/**********************************************
			Button Actions
			***********************************************/			
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
			var metamucil_bottle_empty = document.getElementById("metamucil_bottle_empty") ;
			
			var metamucil_bottle_color = document.getElementById("metamucil_bottle_color") ;
			
			var metamucil_person_s1 = document.getElementById("metamucil_person_s1") ;
			
			var metamucil_s1_topText = document.getElementById("metamucil_s1_topText") ;
			
			var metamucil_bottle_bottom_phrase = document.getElementById("metamucil_bottle_bottom_phrase") ;
			var metamucil_bottle_bottom_burguer = document.getElementById("metamucil_bottle_bottom_burguer") ;
			var metamucil_bottle_bottom_metamucil = document.getElementById("metamucil_bottle_bottom_metamucil") ;
			
			var metamucil_clickAqui = document.getElementById("metamucil_clickAqui") ;
			
			var metamucil_descubreFibra_txt = document.getElementById("metamucil_descubreFibra_txt") ;
			
			
			metamucil_bottle_empty.style.display = 'none' ;
			metamucil_bottle_color.style.display = 'none' ;
			metamucil_person_s1.style.display = 'none' ;
			//metamucil_s1_topText.style.display = 'none' ;
			metamucil_bottle_bottom_phrase.style.display = 'none' ;
			metamucil_bottle_bottom_burguer.style.display = 'none' ;
			metamucil_bottle_bottom_metamucil.style.display = 'none' ;
			metamucil_clickAqui.style.display = 'none' ;
			metamucil_descubreFibra_txt.style.display = 'none' ;
			
			TweenMax.fromTo (metamucil_s1_topText , .5 , {css:{opacity:"0" , transform:"scale(1,1)" , top:"50px"}} , {css:{opacity:"1" , transform:"scale(2,2)" , top:"400px"} , ease:Power2.easeOut}) ;
			
			/**********************************************
			Actions functions
			***********************************************/
			//01	
			function actions_01()
			{
				metamucil_descubreFibra_txt.style.display = 'inline' ;
				metamucil_descubreFibra_txt.style.zIndex = 5 ;
				
				TweenMax.fromTo (metamucil_s1_topText , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (metamucil_descubreFibra_txt , .5 , {css:{opacity:"0" , transform:"scale(2,2)" , bottom:"50px" , display:"inline"}} , {css:{opacity:"1" , transform:"scale(1,1)" , bottom:"400px"} , delay: 1 , ease:Power2.easeOut}) ;
			}
			
			//02
			function actions_02()
			{
				metamucil_bottle_empty.style.display = 'inline' ;
				metamucil_bottle_color.style.display = 'inline' ;
				metamucil_person_s1.style.display = 'block' ;
				metamucil_bottle_bottom_phrase.style.display = 'inline' ;
				metamucil_descubreFibra_txt.style.display = 'inline' ;
				
				TweenMax.to (metamucil_descubreFibra_txt , .5 , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (metamucil_bottle_empty , 1 , {css:{opacity:"0" , height:"0px" , top:"850px"}} , {css:{opacity:"1" , height:"850px" , top:"25px"} , delay: 1 , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (metamucil_bottle_color , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , ease:Power2.easeOut , delay:2}) ;
				
				TweenMax.fromTo (metamucil_bottle_bottom_phrase , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"} , ease:Power2.easeOut , delay:3}) ;
				
				TweenMax.fromTo( metamucil_person_s1 , 1 , {rotationX:180 , transformOrigin:"center bottom"} , {rotationX:0 , ease:Bounce.easeOut , delay:3.5 } ) ;
				TweenMax.fromTo (metamucil_person_s1 , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:3.5}) ;
				
				TweenMax.fromTo (metamucil_s1_topText , .5 , {css:{opacity:"0" , top:"50px" , transform:"scale(1,5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut , delay:4 , onComplete:sizingPerson}) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			//////////////////////////Dran&Drop
				///Main Function
			var draggie = new Draggabilly( metamucil_person_s1 ,
			{
				//Options
				containment: '#metamucil_person_s1_container' ,
				
			});
			
				//Functionality
			function onDragMove( instance, event, pointer ) {
				console.log( 'dragMove on ' + event.type +
				pointer.pageX + ', ' + pointer.pageY +
				' position at ' + instance.position.x + ', ' + instance.position.y );
				}
				// bind event listener
				draggie.on( 'dragMove', onDragMove );
				// un-bind event listener
				draggie.off( 'dragMove', onDragMove );
				// return true to trigger an event listener just once
				draggie.on( 'dragMove', function() {
				console.log('Draggabilly did move, just once');
				return true;
			});
			
			//////////////////////////Show Metamucil Function
			function show_metamucil_secondImage()
			{
				var metamucil_bottle_bottom_burguer = document.getElementById("metamucil_bottle_bottom_burguer") ;
				var metamucil_bottle_bottom_metamucil = document.getElementById("metamucil_bottle_bottom_metamucil") ;
				
				metamucil_bottle_bottom_burguer.style.display = 'inline' ;
				metamucil_bottle_bottom_metamucil.style.display = 'inline' ;
				
				TweenMax.fromTo (metamucil_bottle_bottom_burguer , 2 , {css:{opacity:"1" , top:"523px"}} , {css:{opacity:"0" , top:"600px"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (metamucil_bottle_bottom_phrase , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
			}
			
			/*Person*/
			$('#metamucil_person_s1 , #metamucil_clickAqui').click(function() {
				//auLocucion.src = '' ;
				
				kill_metamucil_brochure_01() ;
				show_metamucil_secondImage() ;
			});
			
			//////////////////////////Kill Tweens
			function kill_metamucil_brochure_01()
			{
				var metamucil_bottle_empty = document.getElementById("metamucil_bottle_empty") ;
			
				var metamucil_bottle_color = document.getElementById("metamucil_bottle_color") ;
				
				var metamucil_person_s1 = document.getElementById("metamucil_person_s1") ;
				
				var metamucil_s1_topText = document.getElementById("metamucil_s1_topText") ;
				
				var metamucil_clickAqui = document.getElementById("metamucil_clickAqui") ;
				
				var metamucil_bottle_bottom_phrase = document.getElementById("metamucil_bottle_bottom_phrase") ;
				var metamucil_bottle_bottom_burguer = document.getElementById("metamucil_bottle_bottom_burguer") ;
				var metamucil_bottle_bottom_metamucil = document.getElementById("metamucil_bottle_bottom_metamucil") ;
					
				TweenMax.killTweensOf ([metamucil_bottle_empty , metamucil_bottle_color , metamucil_person_s1 , metamucil_s1_topText , metamucil_bottle_bottom_phrase , metamucil_bottle_bottom_burguer , metamucil_bottle_bottom_metamucil , metamucil_clickAqui]) ;
				
				TweenMax.to ([metamucil_bottle_empty , metamucil_bottle_color , metamucil_person_s1 , metamucil_s1_topText , metamucil_bottle_bottom_phrase , metamucil_bottle_bottom_burguer , metamucil_bottle_bottom_metamucil , metamucil_clickAqui] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
				
				TweenMax.to (metamucil_clickAqui , 0 , {css:{opacity:"0" , transform:"scale(1,1)"}}) ;
			}
			
			//////////////////////////sizingPerson
			function sizingPerson()
			{
				var metamucil_person_s1 = document.getElementById("metamucil_person_s1") ;
				
				var changing = new TimelineMax({repeat:-1 , yoyo:true}) ;
				
				changing.fromTo(metamucil_person_s1 , 0.5 , {css:{transform:"scale(1,1)"}} , {css:{transform:"scale(1.015,1.015)"}}) ;
				
				btn_ClickMe() ;
			}
			
			//////////////////////////Click me
			function btn_ClickMe()
			{
				var metamucil_clickAqui = document.getElementById("metamucil_clickAqui") ;
				metamucil_clickAqui.style.display = 'inline' ;
				
				var clickMe = new TimelineMax({repeat:-1 , repeatDelay:1.5 , yoyo:true}) ;
				
				clickMe.fromTo(metamucil_clickAqui , 0.25 , {css:{opacity:"0" , transform:"scale(3,1)" , transformOrigin:"center center"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			}
			
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_metamucil_01()
			{
				var metamucil_bottle_empty = document.getElementById("metamucil_bottle_empty") ;
	
				var metamucil_bottle_color = document.getElementById("metamucil_bottle_color") ;
				
				var metamucil_person_s1 = document.getElementById("metamucil_person_s1") ;
				
				var metamucil_s1_topText = document.getElementById("metamucil_s1_topText") ;
				
				var metamucil_bottle_bottom_phrase = document.getElementById("metamucil_bottle_bottom_phrase") ;
				var metamucil_bottle_bottom_burguer = document.getElementById("metamucil_bottle_bottom_burguer") ;
				var metamucil_bottle_bottom_metamucil = document.getElementById("metamucil_bottle_bottom_metamucil") ;
				
				metamucil_bottle_bottom_burguer.style.display = 'none' ;
				metamucil_bottle_bottom_metamucil.style.display = 'none' ;
				
				TweenMax.fromTo ([metamucil_bottle_empty , metamucil_bottle_color] , 1 , {css:{opacity:"1" , top:"100px"}} , {css:{opacity:"0" , top:"200px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo ([metamucil_bottle_bottom_phrase , metamucil_bottle_bottom_phrase , metamucil_bottle_bottom_phrase] , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (metamucil_person_s1 , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}}) ;
				
				TweenMax.fromTo (metamucil_s1_topText , 1 , {css:{opacity:"1" , transform:"scale(1,1"}} , {css:{opacity:"0" , transform:"scale(1,5)"} , ease:Power2.easeOut , onComplete:ChangePage}) ;
				
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
							educacionFarmaceutico_metamucil_02() ;
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
				exit_educacionFarmaceutico_metamucil_01() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_metamucil_01() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_metamucil_01() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_metamucil_01() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_metamucil_01() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_metamucil_01() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_metamucil_01() ;
			});
	
				//01
			$('#btn_03_01').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_metamucil_01() ;
			});
			
				//02
			$('#btn_03_02').click(function() {
				pagChange = 2 ;
				exit_educacionFarmaceutico_metamucil_01() ;
			});
			
				//03
			$('#btn_03_03').click(function() {
				pagChange = 3 ;
				exit_educacionFarmaceutico_metamucil_01() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_educacionFarmaceutico_metamucil_01() ;
				
				/*switch(action)
				{
					case -1:
						exit_educacionFarmaceutico_metamucil_01() ;
					break ;
					
					case 0:
						var metamucil_bottle_empty = document.getElementById("metamucil_bottle_empty") ;
			
						var metamucil_bottle_color = document.getElementById("metamucil_bottle_color") ;
						
						var metamucil_person_s1 = document.getElementById("metamucil_person_s1") ;
						
						var metamucil_s1_topText = document.getElementById("metamucil_s1_topText") ;
						
						var metamucil_bottle_bottom_phrase = document.getElementById("metamucil_bottle_bottom_phrase") ;
						var metamucil_bottle_bottom_burguer = document.getElementById("metamucil_bottle_bottom_burguer") ;
						var metamucil_bottle_bottom_metamucil = document.getElementById("metamucil_bottle_bottom_metamucil") ;
						
						var metamucil_clickAqui = document.getElementById("metamucil_clickAqui") ;
						
						var metamucil_descubreFibra_txt = document.getElementById("metamucil_descubreFibra_txt") ;
						
						
						metamucil_bottle_empty.style.display = 'none' ;
						metamucil_bottle_color.style.display = 'none' ;
						metamucil_person_s1.style.display = 'none' ;
						//metamucil_s1_topText.style.display = 'none' ;
						metamucil_bottle_bottom_phrase.style.display = 'none' ;
						metamucil_bottle_bottom_burguer.style.display = 'none' ;
						metamucil_bottle_bottom_metamucil.style.display = 'none' ;
						metamucil_clickAqui.style.display = 'none' ;
						metamucil_descubreFibra_txt.style.display = 'none' ;
						
						TweenMax.fromTo (metamucil_s1_topText , .5 , {css:{opacity:"0" , transform:"scale(1,1)" , top:"50px"}} , {css:{opacity:"1" , transform:"scale(2,2)" , top:"400px"} , ease:Power2.easeOut}) ;
					break ;
					
					case 1:
						actions_01() ;
					break ;
					
					case 2:
						actions_02() ;
					break ;
				}*/
				
				
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_metamucil_01() ;
				
				/*switch(action)
				{
					case -1:
						exit_educacionFarmaceutico_metamucil_01() ;
					break ;
					
					case 0:
						var metamucil_bottle_empty = document.getElementById("metamucil_bottle_empty") ;
			
						var metamucil_bottle_color = document.getElementById("metamucil_bottle_color") ;
						
						var metamucil_person_s1 = document.getElementById("metamucil_person_s1") ;
						
						var metamucil_s1_topText = document.getElementById("metamucil_s1_topText") ;
						
						var metamucil_bottle_bottom_phrase = document.getElementById("metamucil_bottle_bottom_phrase") ;
						var metamucil_bottle_bottom_burguer = document.getElementById("metamucil_bottle_bottom_burguer") ;
						var metamucil_bottle_bottom_metamucil = document.getElementById("metamucil_bottle_bottom_metamucil") ;
						
						var metamucil_clickAqui = document.getElementById("metamucil_clickAqui") ;
						
						var metamucil_descubreFibra_txt = document.getElementById("metamucil_descubreFibra_txt") ;
						
						
						metamucil_bottle_empty.style.display = 'none' ;
						metamucil_bottle_color.style.display = 'none' ;
						metamucil_person_s1.style.display = 'none' ;
						//metamucil_s1_topText.style.display = 'none' ;
						metamucil_bottle_bottom_phrase.style.display = 'none' ;
						metamucil_bottle_bottom_burguer.style.display = 'none' ;
						metamucil_bottle_bottom_metamucil.style.display = 'none' ;
						metamucil_clickAqui.style.display = 'none' ;
						metamucil_descubreFibra_txt.style.display = 'none' ;
						
						TweenMax.fromTo (metamucil_s1_topText , .5 , {css:{opacity:"0" , transform:"scale(1,1)" , top:"50px"}} , {css:{opacity:"1" , transform:"scale(2,2)" , top:"400px"} , ease:Power2.easeOut}) ;
					break ;
					
					case 1:
						actions_01() ;
					break ;
					
					case 2:
						actions_02() ;
					break ;
					
					case 3:
					 exit_educacionFarmaceutico_metamucil_01() ;
					break ;
				}*/
				
			
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
	backGradient.src = 'img/img_back_metamucil.png' ;
}
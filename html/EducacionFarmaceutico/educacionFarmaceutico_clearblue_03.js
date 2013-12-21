<!--Language Selector-->
function educacionFarmaceutico_clearblue_03()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_clearblue_03' ;
	
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
	var educacionFarmaceutico_clearblue_03_mexico =
		//Logo
		"<div class='clearblue_logoClearblue' id='clearblue_logoClearblue'><img src='img/img_logo_clearblue.png'></div>"+
				
		//Chart clearblue
		"<div class='clearblue_chart_pregnancy' id='clearblue_chart_pregnancy'><img src='img/Clearblue/img_chart_pregnancy.png' /></div>"+
				
		//Question 01
		"<div class='clearblue_s3_question_01' id='clearblue_s3_question_01'>¿Cómo funciona?</div>"+
		
			//Bullets
				//01
		"<div class='clearblue_bullet_s3_01' id='clearblue_bullet_s3_01'>"+
			"<li>Clearblue detecta y mide la  hormona ganadotropina crónica humana (hCG)."+
		"</div>"+
		
				//02
		"<div class='clearblue_bullet_s3_02' id='clearblue_bullet_s3_02'>"+
			"<li>El indicador de concepción estima el tiempo transcurrido desde la concepción."+
		"</div>"+
		
				//03
		"<div class='clearblue_bullet_s3_03' id='clearblue_bullet_s3_03'>"+
			"<li>El indicador de concepción trabaja en base a umbrales de los niveles de la hCG."+
		"</div>"+
		
		//Producto Inner
		"<div class='clearblue_productoInner' id='clearblue_productoInner'><img src='img/Clearblue/img_producto_inner.png' /></div>"+
		
		//Question 02
		"<div class='clearblue_s3_question_02' id='clearblue_s3_question_02'>¿Cómo debe usarse?</div>"+
		
			//Answer 01
		"<div class='clearblue_s3_answer_01' id='clearblue_s3_answer_01'>Extraiga la varilla de prueba del envoltorio de papel de aluminio y retire el capuchón azul.<br/>Utilice la varilla de prueba inmediatamente.</div>"+
			
				//Images
					//01
		"<div class='clearblue_s3_image_01' id='clearblue_s3_image_01'><img src='img/Clearblue/img_uso_01.png' /></div>"+
						//Clock
		"<div class='clearblue_s3_image_01_clock' id='clearblue_s3_image_01_clock'><img src='img/Clearblue/img_clock_05.png' /></div>"+
		
		//Ó
		"<div class='clearblue_O' id='clearblue_O'><img src='img/Clearblue/img_O.png' /></div>"+
		
					//02
		"<div class='clearblue_s3_image_02' id='clearblue_s3_image_02'><img src='img/Clearblue/img_uso_02.png' /></div>"+
						//Clock
		"<div class='clearblue_s3_image_02_clock' id='clearblue_s3_image_02_clock'><img src='img/Clearblue/img_clock_20.png' /></div>"+
		
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguiente_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>166</div>"+
		

	"" ;
	
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_clearblue_03_brasil =
		//Logo
		"<div class='clearblue_logoClearblue' id='clearblue_logoClearblue'><img src='img/img_logo_clearblue.png'></div>"+
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_clearblue_03_mexico ;
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
					
					case 5:
						event_05() ;
					break ;
				}
			});
						
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var clearblue_s3_question_01 = document.getElementById("clearblue_s3_question_01") ;
			var clearblue_bullet_s3_01 = document.getElementById("clearblue_bullet_s3_01") ;
			var clearblue_bullet_s3_02 = document.getElementById("clearblue_bullet_s3_02") ;
			var clearblue_bullet_s3_03 = document.getElementById("clearblue_bullet_s3_03") ;
			
			var clearblue_productoInner = document.getElementById("clearblue_productoInner");
			
			var clearblue_chart_pregnancy = document.getElementById("clearblue_chart_pregnancy");
			
			var clearblue_s3_question_02 = document.getElementById("clearblue_s3_question_02");
			var clearblue_s3_answer_01 = document.getElementById("clearblue_s3_answer_01");
			
			var clearblue_s3_image_01 = document.getElementById("clearblue_s3_image_01");
			var clearblue_s3_image_01_clock = document.getElementById("clearblue_s3_image_01_clock");
			
			var clearblue_O = document.getElementById("clearblue_O") ;
			
			var clearblue_s3_image_02 = document.getElementById("clearblue_s3_image_02");
			var clearblue_s3_image_02_clock = document.getElementById("clearblue_s3_image_02_clock");
				
			clearblue_productoInner.style.display = 'none' ;
			
			clearblue_chart_pregnancy.style.display = 'none' ;
			
			clearblue_s3_question_02.style.display = 'none' ;
			clearblue_s3_answer_01.style.display = 'none' ;
			
			clearblue_s3_image_01.style.display = 'none' ;
			clearblue_s3_image_01_clock.style.display = 'none' ;
			
			clearblue_O.style.display = 'none' ;
			
			clearblue_s3_image_02.style.display = 'none' ;
			clearblue_s3_image_02_clock.style.display = 'none' ;
			
			TweenMax.fromTo (clearblue_s3_question_01 , 2 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
			TweenMax.to (clearblue_s3_question_01 , 2 , {css:{top:"200px" , transform:"scale(2,2)"} , ease:Power2.easeOut}) ;
			
			TweenMax.staggerFromTo ([clearblue_bullet_s3_01 , clearblue_bullet_s3_02 , clearblue_bullet_s3_03] , .5 , {css:{opacity:"0" , left:"500px"}} , {css:{opacity:"1" , left:"425px"} , delay:.5} , .25) ;
			
			TweenMax.to (clearblue_bullet_s3_01 , .5 , {css:{top:"300px" , transform:"scale(1.5,1.5)"} , delay:.5 , ease:Power2.easeOut}) ;
			TweenMax.to (clearblue_bullet_s3_02 , .5 , {css:{top:"400px" , transform:"scale(1.5,1.5)"} , delay:.75 , ease:Power2.easeOut}) ;
			TweenMax.to (clearblue_bullet_s3_03 , .5 , {css:{top:"500px" , transform:"scale(1.5,1.5)"} , delay:1 , ease:Power2.easeOut}) ;
			
			/**********************************************
			Actions functions
			***********************************************/
			//01
			function event_01()
			{
				var clearblue_s3_question_01 = document.getElementById("clearblue_s3_question_01") ;
				var clearblue_bullet_s3_01 = document.getElementById("clearblue_bullet_s3_01") ;
				var clearblue_bullet_s3_02 = document.getElementById("clearblue_bullet_s3_02") ;
				var clearblue_bullet_s3_03 = document.getElementById("clearblue_bullet_s3_03") ;
				
				var clearblue_productoInner = document.getElementById("clearblue_productoInner");
						
				clearblue_s3_question_01.style.display = 'inline' ;
				clearblue_bullet_s3_01.style.display = 'inline' ;
				clearblue_bullet_s3_02.style.display = 'inline' ;
				clearblue_bullet_s3_03.style.display = 'inline' ;
				
				clearblue_productoInner.style.display = 'inline' ;
		
				TweenMax.to (clearblue_s3_question_01 , 0 , {css:{top:"200px" , transform:"scale(2,2)"} , ease:Power2.easeOut}) ;
					
				TweenMax.to (clearblue_bullet_s3_01 , 0 , {css:{top:"300px" , transform:"scale(1.5,1.5)"} , delay:.5 , ease:Power2.easeOut}) ;
				TweenMax.to (clearblue_bullet_s3_02 , 0 , {css:{top:"400px" , transform:"scale(1.5,1.5)"} , delay:.75 , ease:Power2.easeOut}) ;
				TweenMax.to (clearblue_bullet_s3_03 , 0 , {css:{top:"500px" , transform:"scale(1.5,1.5)"} , delay:1 , ease:Power2.easeOut}) ;
					
				TweenMax.to (clearblue_s3_question_01 , 1 , {css:{top:"50px" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
						
				TweenMax.to (clearblue_bullet_s3_01 , .5 , {css:{top:"100px" , transform:"scale(1,1)"} , delay:.5 , ease:Power2.easeOut}) ;
				TweenMax.to (clearblue_bullet_s3_02 , .5 , {css:{top:"150px" , transform:"scale(1,1)"} , delay:.75 , ease:Power2.easeOut}) ;
				TweenMax.to (clearblue_bullet_s3_03 , .5 , {css:{top:"200px" , transform:"scale(1,1)"} , delay:1 , ease:Power2.easeOut}) ;
				
			
			
				TweenMax.fromTo (clearblue_productoInner , 2 , {css:{opacity:"0" , left:"825px" , top:'50px' , transform:"scale(1,1)"}} , {css:{opacity:"1" , left:"425px" , top:'450px' ,  transform:"scale(2,2)"} , ease:Power2.easeOut , delay:1}) ;
			}
			
			//02
			function event_02()
			{
				var clearblue_productoInner = document.getElementById("clearblue_productoInner");
				
				var clearblue_chart_pregnancy = document.getElementById("clearblue_chart_pregnancy");
		
				clearblue_chart_pregnancy.style.display = 'inline' ;
				
				clearblue_s3_question_02.style.display = 'none' ;
				clearblue_s3_answer_01.style.display = 'none' ;
				
				clearblue_s3_image_01.style.display = 'none' ;
				clearblue_s3_image_01_clock.style.display = 'none' ;
				
				clearblue_O.style.display = 'none' ;
				
				clearblue_s3_image_02.style.display = 'none' ;
				clearblue_s3_image_02_clock.style.display = 'none' ;
			
				
				TweenMax.fromTo (clearblue_productoInner , 2 , {css:{opacity:"1" , left:"425px" , top:'450px' ,  transform:"scale(2,2)"}} , {css:{opacity:"1" , left:"825px" , top:'50px' , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
				
		
				TweenMax.fromTo (clearblue_chart_pregnancy , 2 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"1000px"} , ease:Power2.easeOut , delay:1}) ;
			}
			
			//03
			function event_03()
			{
				var clearblue_s3_question_02 = document.getElementById("clearblue_s3_question_02");
				var clearblue_s3_answer_01 = document.getElementById("clearblue_s3_answer_01");
				
				var clearblue_s3_image_01 = document.getElementById("clearblue_s3_image_01");
				var clearblue_s3_image_01_clock = document.getElementById("clearblue_s3_image_01_clock");
				
				var clearblue_O = document.getElementById("clearblue_O") ;
				
				var clearblue_s3_image_02 = document.getElementById("clearblue_s3_image_02");
				var clearblue_s3_image_02_clock = document.getElementById("clearblue_s3_image_02_clock");
				
				clearblue_s3_question_02.style.display = 'inline' ;
				clearblue_s3_answer_01.style.display = 'inline' ;
		
				TweenMax.fromTo (clearblue_s3_question_02 , 1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , ease:Power2.easeOut , delay:.5}) ;
				TweenMax.fromTo (clearblue_s3_answer_01 , 1 , {css:{opacity:"0" , left:"550px"}} , {css:{opacity:"1" , left:"475px"} , ease:Power2.easeOut , delay:1}) ;
			}
			
			//04
			function event_04()
			{
				var clearblue_s3_image_01 = document.getElementById("clearblue_s3_image_01");
				var clearblue_s3_image_01_clock = document.getElementById("clearblue_s3_image_01_clock");
				
				var clearblue_O = document.getElementById("clearblue_O") ;
				
				var clearblue_s3_image_02 = document.getElementById("clearblue_s3_image_02");
				var clearblue_s3_image_02_clock = document.getElementById("clearblue_s3_image_02_clock");
				
				clearblue_s3_image_01.style.display = 'inline' ;
				clearblue_s3_image_01_clock.style.display = 'inline' ;
				
				clearblue_O.style.display = 'none' ;
				
				clearblue_s3_image_02.style.display = 'none' ;
				clearblue_s3_image_02_clock.style.display = 'none' ;
			
				TweenMax.fromTo (clearblue_s3_image_01 , 1 , {css:{opacity:"0" , left:"750px"}} , {css:{opacity:"1" , left:"625px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (clearblue_s3_image_01_clock , .5 , {css:{opacity:"0" , left:"875px" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.5}) ;
			}
			
			//05
			function event_05()
			{
				
				var clearblue_O = document.getElementById("clearblue_O") ;
				
				var clearblue_s3_image_02 = document.getElementById("clearblue_s3_image_02");
				var clearblue_s3_image_02_clock = document.getElementById("clearblue_s3_image_02_clock");
						
				clearblue_O.style.display = 'inline' ;
				
				clearblue_s3_image_02.style.display = 'inline' ;
				clearblue_s3_image_02_clock.style.display = 'inline' ;
					
				TweenMax.fromTo (clearblue_s3_image_01 , 1 , {css:{opacity:"1" , left:"625px"}} , {css:{opacity:"1" , left:"475px"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (clearblue_s3_image_01_clock , 1 , {css:{opacity:"1" , left:"875px"}} , {css:{opacity:"1" , left:"725px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (clearblue_s3_image_02 , 1 , {css:{opacity:"0" , left:"800px"}} , {css:{opacity:"1" , left:"850px"} , ease:Power2.easeOut , delay:1}) ;
				
				TweenMax.staggerFromTo ([clearblue_s3_image_02_clock , clearblue_O] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:2} , .25) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_clearblue_03_mex()
			{
				var clearblue_s3_question_01 = document.getElementById("clearblue_s3_question_01") ;
				var clearblue_bullet_s3_01 = document.getElementById("clearblue_bullet_s3_01") ;
				var clearblue_bullet_s3_02 = document.getElementById("clearblue_bullet_s3_02") ;
				var clearblue_bullet_s3_03 = document.getElementById("clearblue_bullet_s3_03") ;
				
				var clearblue_chart_pregnancy = document.getElementById("clearblue_chart_pregnancy");
				
				var clearblue_productoInner = document.getElementById("clearblue_productoInner");
				
				var clearblue_s3_question_02 = document.getElementById("clearblue_s3_question_02");
				var clearblue_s3_answer_01 = document.getElementById("clearblue_s3_answer_01");
				
				var clearblue_s3_image_01 = document.getElementById("clearblue_s3_image_01");
				var clearblue_s3_image_01_clock = document.getElementById("clearblue_s3_image_01_clock");
				
				var clearblue_O = document.getElementById("clearblue_O") ;
				
				var clearblue_s3_image_02 = document.getElementById("clearblue_s3_image_02");
				var clearblue_s3_image_02_clock = document.getElementById("clearblue_s3_image_02_clock");
				
				TweenMax.fromTo (clearblue_s3_question_01 , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.25,.25)"} , ease:Power2.easeOut}) ;
				
				TweenMax.staggerFromTo ([clearblue_bullet_s3_01 , clearblue_bullet_s3_02 , clearblue_bullet_s3_03] , .5 , {css:{opacity:"1" , top:"+=0px"}} , {css:{opacity:"0" , top:"+=125px"}} , .25) ;
				
				TweenMax.fromTo (clearblue_productoInner , 2 , {css:{opacity:"1" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"0" , transform:"scale(1,1)"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (clearblue_chart_pregnancy , 1 , {css:{opacity:"1" , width:"1000px"}} , {css:{opacity:"0" , width:"0px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (clearblue_s3_question_02 , 2 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (clearblue_s3_answer_01 , 1 , {css:{opacity:"1" , left:"475px"}} , {css:{opacity:"0" , left:"600px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (clearblue_s3_image_01 , 1 , {css:{opacity:"1" , left:"550px"}} , {css:{opacity:"0" , left:"475px"} , ease:Power2.easeOut}) ;
				TweenMax.fromTo (clearblue_s3_image_02 , 2 , {css:{opacity:"1" , left:"800px"}} , {css:{opacity:"0" , left:"850px"} , ease:Power2.easeOut , onComplete:ChangePage}) ;
				
				TweenMax.fromTo ([clearblue_s3_image_01_clock , clearblue_s3_image_02_clock , clearblue_O] , 2 , {css:{opacity:"1" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"0" , transform:"scale(1,1)"} }) ;
				
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
							educacionFarmaceutico_clearblue_02() ;
						break;
						
						case 1:
							educacionFarmaceutico_clearblue_04() ;
						break ;
					}
				}
			}
			
			//////////////////////////Kill Tweens
			function kill_clearblue_brochure_03()
			{
				var clearblue_s3_question_01 = document.getElementById("clearblue_s3_question_01") ;
				var clearblue_bullet_s3_01 = document.getElementById("clearblue_bullet_s3_01") ;
				var clearblue_bullet_s3_02 = document.getElementById("clearblue_bullet_s3_02") ;
				var clearblue_bullet_s3_03 = document.getElementById("clearblue_bullet_s3_03") ;
				
				var clearblue_chart_pregnancy = document.getElementById("clearblue_chart_pregnancy");
				
				var clearblue_productoInner = document.getElementById("clearblue_productoInner");
				
				var clearblue_s3_question_02 = document.getElementById("clearblue_s3_question_02");
				var clearblue_s3_answer_01 = document.getElementById("clearblue_s3_answer_01");
				
				var clearblue_s3_image_01 = document.getElementById("clearblue_s3_image_01");
				var clearblue_s3_image_01_clock = document.getElementById("clearblue_s3_image_01_clock");
				
				var clearblue_O = document.getElementById("clearblue_O") ;
				
				var clearblue_s3_image_02 = document.getElementById("clearblue_s3_image_02");
				var clearblue_s3_image_02_clock = document.getElementById("clearblue_s3_image_02_clock");
						
				TweenMax.killTweensOf([clearblue_s3_question_01 , clearblue_bullet_s3_01 , clearblue_bullet_s3_02 , clearblue_bullet_s3_03]) ;
				
				TweenMax.killTweensOf([clearblue_chart_pregnancy]) ;
				
				TweenMax.killTweensOf([clearblue_productoInner]) ;
				TweenMax.killTweensOf([clearblue_s3_question_02 , clearblue_s3_answer_01]) ;
				
				TweenMax.killTweensOf([clearblue_s3_image_01 , clearblue_s3_image_01_clock , clearblue_O , clearblue_s3_image_02 , clearblue_s3_image_02_clock])
				
				TweenMax.to([clearblue_s3_question_01 , clearblue_bullet_s3_01 , clearblue_bullet_s3_02 , clearblue_bullet_s3_03] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
				TweenMax.to([clearblue_productoInner] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
				TweenMax.to([clearblue_s3_question_02 , clearblue_s3_answer_01] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
				TweenMax.to([clearblue_s3_image_01 , clearblue_s3_image_01_clock , clearblue_O , clearblue_s3_image_02 , clearblue_s3_image_02_clock] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}})
			}	

			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_educacionFarmaceutico_clearblue_03_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_clearblue_03_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_clearblue_03_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_clearblue_03_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_clearblue_03_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_clearblue_03_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_clearblue_03_mex() ;
			});
	
			/*FlechaBack*/
			$('#flechaBack').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 0 ;
				
				kill_clearblue_brochure_03() ;
				exit_educacionFarmaceutico_clearblue_03_mex() ;
			});
			
			/*FlechaNext*/
			$('#flechaNext').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 1 ;
				
				kill_clearblue_brochure_03() ;
				exit_educacionFarmaceutico_clearblue_03_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_clearblue_03_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var noDisponible = document.getElementById("noDisponible") ;
				
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_clearblue_03()
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
							educacionFarmaceutico_clearblue_02() ;
						break;
						
						case 1:
							educacionFarmaceutico_clearblue_04() ;
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
				exit_educacionFarmaceutico_clearblue_03() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_clearblue_03() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_clearblue_03() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_clearblue_03() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_clearblue_03() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_clearblue_03() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_clearblue_03() ;
			});
	
			/*FlechaBack*/
			$('#flechaBack').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 0 ;

				exit_educacionFarmaceutico_clearblue_03() ;
			});
			
			/*FlechaNext*/
			$('#flechaNext').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 1 ;
				exit_educacionFarmaceutico_clearblue_03() ;
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
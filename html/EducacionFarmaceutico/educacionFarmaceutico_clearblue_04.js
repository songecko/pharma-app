<!--Language Selector-->
function educacionFarmaceutico_clearblue_04()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_clearblue_04' ;
	
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
	var educacionFarmaceutico_clearblue_04_mexico =
		//Logo
		"<div class='clearblue_logoClearblue' id='clearblue_logoClearblue'><img src='img/img_logo_clearblue.png'></div>"+
		
		//Pareja image
		"<div class='clearblue_parejaImage' id='clearblue_parejaImage'><img src='img/Clearblue/img_bigImage_pareja.png' /></div>"+
				
		//Oval
		"<div class='clearblue_s4_oval' id='clearblue_s4_oval'><img src='img/Clearblue/img_oval.png' /></div>"+
		
		//Product Image
		"<div class='clearblue_s4_productImage' id='clearblue_s4_productImage'><img src='img/Clearblue/img_productoConEmpaque_01.png' width='300' /></div>"+
			
			//Oval Text
				//01
		"<div class='clearblue_s4_ovalText_01' id='clearblue_s4_ovalText_01'>Televisión<br/>abierta</div>"+
				//02
		"<div class='clearblue_s4_ovalText_02' id='clearblue_s4_ovalText_02'>Televisión<br/>de paga</div>"+
				//03
		"<div class='clearblue_s4_ovalText_03' id='clearblue_s4_ovalText_03'>Menciones en<br/>programas de TV</div>"+
				//04
		"<div class='clearblue_s4_ovalText_04' id='clearblue_s4_ovalText_04'>Revistas</div>"+
				//05
		"<div class='clearblue_s4_ovalText_05' id='clearblue_s4_ovalText_05'>Digital</div>"+
				//06
		"<div class='clearblue_s4_ovalText_06' id='clearblue_s4_ovalText_06'>Material de<br/>visibilidad</div>"+
		
		//Slogan
			//Bold 01
		"<div class='clearblue_s4_sloganBold' id='clearblue_s4_sloganBold_01'>Única</div>"+
			//Light 01
		"<div class='clearblue_s4_sloganLight' id='clearblue_s4_sloganLight_01'>prueba de embarazo del</div>"+
			//Bold 02
		"<div class='clearblue_s4_sloganBold' id='clearblue_s4_sloganBold_02'>mundo</div>"+
			//Light 02
		"<div class='clearblue_s4_sloganLight' id='clearblue_s4_sloganLight_02'>con</div>"+
			//Bold 03
		"<div class='clearblue_s4_sloganBold' id='clearblue_s4_sloganBold_03'>indicador</div>"+
			//Light 03
		"<div class='clearblue_s4_sloganLight' id='clearblue_s4_sloganLight_03'>del tiempo de</div>"+
			//Bold 04
		"<div class='clearblue_s4_sloganBold' id='clearblue_s4_sloganBold_04'>concepción</div>"+
		
		//Conoce más
		"<div class='clearblue_conoce_txt' id='clearblue_conoce_txt'>Conoce más</div>"+
		
		//Página Web
		"<div class='clearblue_sitioWeb' id='clearblue_sitioWeb'>www.clearblue.com/mx</div>"+
		
		//Registro
		"<div class='clearblue_registro' id='clearblue_registro'>Reg. No. 1095R2012 SSA: 123300202C4227 <strong>SI EL RESULTADO ES POSITIVO CONSULTE A SU GINECÓLOGO</strong></div>"+
		
		//Big White Note
		"<div class='clearblue_bigNote' id='clearblue_bigNote'>*Clearblue recomienda realizar la prueba el día que se espera la llegada del periodo. Sin embargo, la hormona del embarazo se incrementa rápidamente en su etapa inicial y Clearblue puede ser utilizada hasta 4 días antes de la fecha en que se espera el inicio del periodo. En estudios clínicos realizados con muestras de la etapa inicial del embarazo Clearblue obtuvo los siguientes resultados: 55% de las mujeres obtuvieron un resultado “Embarazada” con 4 días de antelación. 86% de las mujeres lo obtuvieron con 3 días de antelación, 97% de las mujeres con 2 días de antelación, 98% con 1 día de antelación. Si se realiza la prueba con antelación y se obtiene un resultado “No embarazada” es posible que el nivel de hormona del embarazo no sea todavía lo su cientemente alto para ser detectado; se debería hacer una nueva prueba el día en que se espera la llegada del periodo.</div>"+
		
		//Button Next
		"<div class='brochure_next' id='buttonNext'><img src='img/EducacionFarmaceutico/img_siguiente_txt.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>167</div>"+
		
		
	"" ;

	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_clearblue_04_brasil =
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_clearblue_04_mexico ;
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
				}
			});
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var clearblue_parejaImage = document.getElementById("clearblue_parejaImage") ;
	
			var clearblue_s4_oval = document.getElementById("clearblue_s4_oval") ;
			var clearblue_s4_productImage = document.getElementById("clearblue_s4_productImage") ;
			var clearblue_s4_ovalText_01 = document.getElementById("clearblue_s4_ovalText_01") ;
			var clearblue_s4_ovalText_02 = document.getElementById("clearblue_s4_ovalText_02");
			var clearblue_s4_ovalText_03 = document.getElementById("clearblue_s4_ovalText_03");
			var clearblue_s4_ovalText_04 = document.getElementById("clearblue_s4_ovalText_04");
			var clearblue_s4_ovalText_05 = document.getElementById("clearblue_s4_ovalText_05");
			var clearblue_s4_ovalText_06 = document.getElementById("clearblue_s4_ovalText_06");
			
			var clearblue_s4_sloganBold_01 = document.getElementById("clearblue_s4_sloganBold_01");
			var clearblue_s4_sloganLight_01 = document.getElementById("clearblue_s4_sloganLight_01");
			var clearblue_s4_sloganBold_02 = document.getElementById("clearblue_s4_sloganBold_02");
			var clearblue_s4_sloganLight_02 = document.getElementById("clearblue_s4_sloganLight_02");
			var clearblue_s4_sloganBold_03 = document.getElementById("clearblue_s4_sloganBold_03");
			var clearblue_s4_sloganLight_03 = document.getElementById("clearblue_s4_sloganLight_03");
			var clearblue_s4_sloganBold_04 = document.getElementById("clearblue_s4_sloganBold_04");
			
			var clearblue_conoce_txt = document.getElementById("clearblue_conoce_txt") ;
			var clearblue_sitioWeb = document.getElementById("clearblue_sitioWeb") ;
			var clearblue_registro = document.getElementById("clearblue_registro") ;
			
			var clearblue_bigNote = document.getElementById("clearblue_bigNote") ;
			
			clearblue_parejaImage.style.display = 'inline' ;
			
			clearblue_s4_oval.style.display = 'inline' ;
			clearblue_s4_productImage.style.display = 'inline' ;
			clearblue_s4_ovalText_01.style.display = 'inline' ;
			clearblue_s4_ovalText_02.style.display = 'inline' ;
			clearblue_s4_ovalText_03.style.display = 'inline' ;
			clearblue_s4_ovalText_04.style.display = 'inline' ;
			clearblue_s4_ovalText_05.style.display = 'inline' ;
			clearblue_s4_ovalText_06.style.display = 'inline' ;
			
			clearblue_s4_sloganBold_01.style.display = 'none' ;
			clearblue_s4_sloganLight_01.style.display = 'none' ;
			clearblue_s4_sloganBold_02.style.display = 'none' ;
			clearblue_s4_sloganLight_02.style.display = 'none' ;
			clearblue_s4_sloganBold_03.style.display = 'none' ;
			clearblue_s4_sloganLight_03.style.display = 'none' ;
			clearblue_s4_sloganBold_04.style.display = 'none' ;
			
			clearblue_conoce_txt.style.display = 'none' ;
			clearblue_sitioWeb.style.display = 'none' ;
			clearblue_registro.style.display = 'none' ;
			
			clearblue_bigNote.style.display = 'none' ;
			
			TweenMax.fromTo (clearblue_parejaImage , 2 , {css:{opacity:"0" , right:"-500px"}} , {css:{opacity:"1" , right:"0px"} , ease:Power2.easeOut}) ;
			
			TweenMax.fromTo (clearblue_s4_productImage , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"} , ease:Power2.easeOut , delay:.5}) ;
			
			TweenMax.staggerFromTo ([clearblue_s4_ovalText_01 , clearblue_s4_ovalText_02 , clearblue_s4_ovalText_03 , clearblue_s4_ovalText_04 , clearblue_s4_ovalText_05 , clearblue_s4_ovalText_06] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:1} , .25) ;
			
			/**********************************************
			Actions functions
			***********************************************/
			//01
			function event_01()
			{
				var clearblue_s4_sloganBold_01 = document.getElementById("clearblue_s4_sloganBold_01");
				var clearblue_s4_sloganLight_01 = document.getElementById("clearblue_s4_sloganLight_01");
				var clearblue_s4_sloganBold_02 = document.getElementById("clearblue_s4_sloganBold_02");
				var clearblue_s4_sloganLight_02 = document.getElementById("clearblue_s4_sloganLight_02");
				var clearblue_s4_sloganBold_03 = document.getElementById("clearblue_s4_sloganBold_03");
				var clearblue_s4_sloganLight_03 = document.getElementById("clearblue_s4_sloganLight_03");
				var clearblue_s4_sloganBold_04 = document.getElementById("clearblue_s4_sloganBold_04");
				
				var clearblue_conoce_txt = document.getElementById("clearblue_conoce_txt") ;
				var clearblue_sitioWeb = document.getElementById("clearblue_sitioWeb") ;
				var clearblue_registro = document.getElementById("clearblue_registro") ;
				
				var clearblue_bigNote = document.getElementById("clearblue_bigNote") ;
				
				clearblue_s4_sloganBold_01.style.display = 'inline' ;
				clearblue_s4_sloganLight_01.style.display = 'inline' ;
				clearblue_s4_sloganBold_02.style.display = 'inline' ;
				clearblue_s4_sloganLight_02.style.display = 'inline' ;
				clearblue_s4_sloganBold_03.style.display = 'inline' ;
				clearblue_s4_sloganLight_03.style.display = 'inline' ;
				clearblue_s4_sloganBold_04.style.display = 'inline' ;
				
				clearblue_conoce_txt.style.display = 'none' ;
				clearblue_sitioWeb.style.display = 'none' ;
				clearblue_registro.style.display = 'none' ;
				
				clearblue_bigNote.style.display = 'none' ;
			
				TweenMax.staggerFromTo ([clearblue_s4_sloganBold_01 , clearblue_s4_sloganBold_02 , clearblue_s4_sloganBold_03 , clearblue_s4_sloganBold_04] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
				TweenMax.staggerFromTo ([clearblue_s4_sloganLight_01 , clearblue_s4_sloganLight_02 , clearblue_s4_sloganLight_03] , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}} , .25) ;
				
				document.getElementById("buttonNext").style.opacity ='0' ;
			}
			
			//02
			function event_02()
			{
				var clearblue_conoce_txt = document.getElementById("clearblue_conoce_txt") ;
				var clearblue_sitioWeb = document.getElementById("clearblue_sitioWeb") ;
				var clearblue_registro = document.getElementById("clearblue_registro") ;
				
				var clearblue_bigNote = document.getElementById("clearblue_bigNote") ;
		
				clearblue_conoce_txt.style.display = 'inline' ;
				clearblue_sitioWeb.style.display = 'inline' ;
				clearblue_registro.style.display = 'inline' ;
				
				clearblue_bigNote.style.display = 'inline' ;
		
				TweenMax.staggerFromTo ([clearblue_conoce_txt , clearblue_sitioWeb] , 1 , {css:{opacity:"0" , left:"100px"}} , {css:{opacity:"1" , left:"15px"} , delay:2} , .25) ;
				
				TweenMax.fromTo (clearblue_registro , 1 , {css:{opacity:"0" , right:"100px"}} , {css:{opacity:"1" , right:"15px"} , ease:Power2.easeOut , delay:2}) ;
				
				TweenMax.fromTo (clearblue_bigNote , 1 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"1250px"} , ease:Power2.easeOut , delay:2.5}) ;
			}
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_clearblue_04_mex()
			{
				var clearblue_parejaImage = document.getElementById("clearblue_parejaImage") ;
	
				var clearblue_s4_oval = document.getElementById("clearblue_s4_oval") ;
				var clearblue_s4_productImage = document.getElementById("clearblue_s4_productImage") ;
				var clearblue_s4_ovalText_01 = document.getElementById("clearblue_s4_ovalText_01") ;
				var clearblue_s4_ovalText_02 = document.getElementById("clearblue_s4_ovalText_02");
				var clearblue_s4_ovalText_03 = document.getElementById("clearblue_s4_ovalText_03");
				var clearblue_s4_ovalText_04 = document.getElementById("clearblue_s4_ovalText_04");
				var clearblue_s4_ovalText_05 = document.getElementById("clearblue_s4_ovalText_05");
				var clearblue_s4_ovalText_06 = document.getElementById("clearblue_s4_ovalText_06");
				
				var clearblue_s4_sloganBold_01 = document.getElementById("clearblue_s4_sloganBold_01");
				var clearblue_s4_sloganLight_01 = document.getElementById("clearblue_s4_sloganLight_01");
				var clearblue_s4_sloganBold_02 = document.getElementById("clearblue_s4_sloganBold_02");
				var clearblue_s4_sloganLight_02 = document.getElementById("clearblue_s4_sloganLight_02");
				var clearblue_s4_sloganBold_03 = document.getElementById("clearblue_s4_sloganBold_03");
				var clearblue_s4_sloganLight_03 = document.getElementById("clearblue_s4_sloganLight_03");
				var clearblue_s4_sloganBold_04 = document.getElementById("clearblue_s4_sloganBold_04");
				
				var clearblue_conoce_txt = document.getElementById("clearblue_conoce_txt") ;
				var clearblue_sitioWeb = document.getElementById("clearblue_sitioWeb") ;
				var clearblue_registro = document.getElementById("clearblue_registro") ;
				
				var clearblue_bigNote = document.getElementById("clearblue_bigNote") ;
				
				TweenMax.fromTo (clearblue_parejaImage , 2 , {css:{opacity:"1" , right:"0px"}} , {css:{opacity:"0" , right:"-500px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (clearblue_s4_oval , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
			
				TweenMax.fromTo (clearblue_s4_productImage , 2 , {css:{opacity:"1"}} , {css:{opacity:"0"} , ease:Power2.easeOut}) ;
				
				TweenMax.staggerFromTo ([clearblue_s4_ovalText_01 , clearblue_s4_ovalText_02 , clearblue_s4_ovalText_03 , clearblue_s4_ovalText_04 , clearblue_s4_ovalText_05 , clearblue_s4_ovalText_06] , .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .15) ;
				
				TweenMax.staggerFromTo ([clearblue_s4_sloganBold_01 , clearblue_s4_sloganBold_02 , clearblue_s4_sloganBold_03 , clearblue_s4_sloganBold_04] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.25,.25)"}} , .25) ;
				TweenMax.staggerFromTo ([clearblue_s4_sloganLight_01 , clearblue_s4_sloganLight_02 , clearblue_s4_sloganLight_03] , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .25) ;
				
				TweenMax.staggerFromTo ([clearblue_conoce_txt , clearblue_sitioWeb] , 1 , {css:{opacity:"1" , left:"15px"}} , {css:{opacity:"0" , left:"150px"}} , .25) ;
				
				TweenMax.fromTo (clearblue_registro , 1 , {css:{opacity:"1" , right:"15px"}} , {css:{opacity:"0" , right:"100px"} , ease:Power2.easeOut}) ;
				
				TweenMax.fromTo (clearblue_bigNote , 2 , {css:{opacity:"1" , width:"1250px"}} , {css:{opacity:"0" , width:"0px"} , ease:Power2.easeOut , onComplete:ChangePage}) ;
				
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
							educacionFarmaceutico_clearblue_03() ;
						break;
						
						case 1:
							educacionFarmaceutico_clearblue_05() ;
						break ;
					}
				}
			}
			
			//////////////////////////Kill Tweens
			function kill_clearblue_brochure_04()
			{
				var clearblue_parejaImage = document.getElementById("clearblue_parejaImage") ;
			
				var clearblue_s4_oval = document.getElementById("clearblue_s4_oval") ;
				var clearblue_s4_productImage = document.getElementById("clearblue_s4_productImage") ;
				var clearblue_s4_ovalText_01 = document.getElementById("clearblue_s4_ovalText_01") ;
				var clearblue_s4_ovalText_02 = document.getElementById("clearblue_s4_ovalText_02");
				var clearblue_s4_ovalText_03 = document.getElementById("clearblue_s4_ovalText_03");
				var clearblue_s4_ovalText_04 = document.getElementById("clearblue_s4_ovalText_04");
				var clearblue_s4_ovalText_05 = document.getElementById("clearblue_s4_ovalText_05");
				var clearblue_s4_ovalText_06 = document.getElementById("clearblue_s4_ovalText_06");
				
				var clearblue_s4_sloganBold_01 = document.getElementById("clearblue_s4_sloganBold_01");
				var clearblue_s4_sloganLight_01 = document.getElementById("clearblue_s4_sloganLight_01");
				var clearblue_s4_sloganBold_02 = document.getElementById("clearblue_s4_sloganBold_02");
				var clearblue_s4_sloganLight_02 = document.getElementById("clearblue_s4_sloganLight_02");
				var clearblue_s4_sloganBold_03 = document.getElementById("clearblue_s4_sloganBold_03");
				var clearblue_s4_sloganLight_03 = document.getElementById("clearblue_s4_sloganLight_03");
				var clearblue_s4_sloganBold_04 = document.getElementById("clearblue_s4_sloganBold_04");
				
				var clearblue_conoce_txt = document.getElementById("clearblue_conoce_txt") ;
				var clearblue_sitioWeb = document.getElementById("clearblue_sitioWeb") ;
				var clearblue_registro = document.getElementById("clearblue_registro") ;
				
				var clearblue_bigNote = document.getElementById("clearblue_bigNote") ;
						
				TweenMax.killTweensOf([clearblue_parejaImage]) ;
				
				TweenMax.killTweensOf([clearblue_s4_oval , clearblue_s4_productImage , clearblue_s4_ovalText_01 , clearblue_s4_ovalText_02 , clearblue_s4_ovalText_03 , clearblue_s4_ovalText_04 , clearblue_s4_ovalText_05 , clearblue_s4_ovalText_06]) ;
				
				TweenMax.killTweensOf([clearblue_s4_sloganBold_01 , clearblue_s4_sloganBold_02, clearblue_s4_sloganBold_03, clearblue_s4_sloganBold_04 , clearblue_s4_sloganLight_01 , clearblue_s4_sloganLight_02, clearblue_s4_sloganLight_03]) ;
				
				TweenMax.killTweensOf([clearblue_conoce_txt , clearblue_sitioWeb , clearblue_registro]) ;
				
				TweenMax.killTweensOf([clearblue_bigNote]) ;
				
				TweenMax.to([clearblue_s4_oval , clearblue_s4_productImage , clearblue_s4_ovalText_01 , clearblue_s4_ovalText_02 , clearblue_s4_ovalText_03 , clearblue_s4_ovalText_04 , clearblue_s4_ovalText_05 , clearblue_s4_ovalText_06] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
				TweenMax.to([clearblue_s4_sloganBold_01 , clearblue_s4_sloganBold_02, clearblue_s4_sloganBold_03, clearblue_s4_sloganBold_04 , clearblue_s4_sloganLight_01 , clearblue_s4_sloganLight_02, clearblue_s4_sloganLight_03] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
				TweenMax.to([clearblue_conoce_txt , clearblue_sitioWeb , clearblue_registro] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
				TweenMax.to([clearblue_bigNote] , 0 , {css:{opacity:"1" , transform:"scale(1,1)"}})
			}
			
			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_educacionFarmaceutico_clearblue_04_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_clearblue_04_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_clearblue_04_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_clearblue_04_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_clearblue_04_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_clearblue_04_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_clearblue_04_mex() ;
			});
	
			/*FlechaBack*/
			$('#flechaBack').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 0 ;
				
				kill_clearblue_brochure_04() ;
				exit_educacionFarmaceutico_clearblue_04_mex() ;
			});
			
			/*FlechaNext*/
			$('#flechaNext').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 1 ;
				
				kill_clearblue_brochure_04() ;
				exit_educacionFarmaceutico_clearblue_04_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_clearblue_04_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var noDisponible = document.getElementById("noDisponible") ;
				
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_clearblue_04()
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
							educacionFarmaceutico_clearblue_03() ;
						break;
						
						case 1:
							educacionFarmaceutico_clearblue_05() ;
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
				exit_educacionFarmaceutico_clearblue_04() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_clearblue_04() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_clearblue_04() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_clearblue_04() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_clearblue_04() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_educacionFarmaceutico_clearblue_04() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_clearblue_04() ;
			});
	
			/*FlechaBack*/
			$('#flechaBack').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 0 ;
				
				exit_educacionFarmaceutico_clearblue_04() ;
			});
			
			/*FlechaNext*/
			$('#flechaNext').click(function() {
				//auLocucion.src = '' ;
				
				pagChange = 1 ;
				
				exit_educacionFarmaceutico_clearblue_04() ;
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
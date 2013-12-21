<!--Planilla de Objetivos-->
function kitPresentacion()
{
	CleanScreen() ;
	
	gotoSlide = 'kitPresentacion' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_Induccion.png' onmouseover='rollOver_ico_04()' /></div>"+
		
		//Menu Herramientas
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_induccion_herramientas.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		//Planilla de Objetivos
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_Induccion_herramientas_05.png' onmouseover='rollOver_ico_06()' /></div>"+

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
	var kitPresentacion_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Material de educación al <b>farmacéutico</b></div>"+
				
		//Images
			//01
		"<div class='kitPresentacion_img' id='kitPresentacion_img_01'><img src='img/Induccion/Herramientas/img_kitPresentacion_01_mex.png'></div>"+
			//02
		"<div class='kitPresentacion_img' id='kitPresentacion_img_02'><img src='img/Induccion/Herramientas/img_kitPresentacion_02_mex.png'></div>"+
			//03
		"<div class='kitPresentacion_img' style='top: 400px' id='kitPresentacion_img_03'><img src='img/Induccion/Herramientas/img_kitPresentacion_03_mex.png'></div>"+
			//04
		"<div class='kitPresentacion_img' id='kitPresentacion_img_04'><img src='img/Induccion/Herramientas/img_kitPresentacion_04_mex.png'></div>"+
			//05
		"<div class='kitPresentacion_img' style='top: 600px' id='kitPresentacion_img_05'><img src='img/Induccion/Herramientas/img_kitPresentacion_05_mex.png'></div>"+
		
		
		//Numbers
			//01
		"<div class='kitPresentacion_num' id='kitPresentacion_num_01'><img src='img/Induccion/Herramientas/img_num_01.png'></div>"+
			//02
		"<div class='kitPresentacion_num' id='kitPresentacion_num_02'><img src='img/Induccion/Herramientas/img_num_02.png'></div>"+
			//03
		"<div class='kitPresentacion_num' id='kitPresentacion_num_03'><img src='img/Induccion/Herramientas/img_num_03.png'></div>"+
			//04
		"<div class='kitPresentacion_num' id='kitPresentacion_num_04'><img src='img/Induccion/Herramientas/img_num_04.png'></div>"+
			//05
		"<div class='kitPresentacion_num' id='kitPresentacion_num_05'><img src='img/Induccion/Herramientas/img_num_05.png'></div>"+
			//06
		"<div class='kitPresentacion_num' id='kitPresentacion_num_06'><img src='img/Induccion/Herramientas/img_num_06.png'></div>"+
		
		
		//Main Text
		"<div class='kit_txtTitle' id='kit_txtTitle_main_text'>Para que la presentación técnica sea clara, efectiva y enfocada en los mensajes clave, debes usar el Tool Kit, que consta de:</div>"+
		
		
		//Titles
			//01
		"<div class='kit_txtTitle' id='kit_txtTitle_01'><b>Módulos de entrenamiento:</b></div>"+
			//02
		"<div class='kit_txtTitle' id='kit_txtTitle_02'><b>Talksheet:</b></div>"+
			//03
		"<div class='kit_txtTitle' id='kit_txtTitle_03'><b>Brochure:</b></div>"+
			//04
		"<div class='kit_txtTitle' id='kit_txtTitle_04'><b>Folleto:</b></div>"+
			//05
		"<div class='kit_txtTitle' id='kit_txtTitle_05'><b>Muestra:</b></div>"+
			//06
		"<div class='kit_txtTitle' id='kit_txtTitle_06'><b>Video demo:</b></div>"+
		
		//Contents
			//01
		"<div class='kit_txtContents' id='kit_txtContents_01'>Para estudiar a la categoría  y resolver dudas antes de presentar.</div>"+
			//02
		"<div class='kit_txtContents' id='kit_txtContents_02'>Te indica paso a paso con un lenguaje  adecuado  como  presentar adecuadamente  el  brochure.</div>"+
			//03
		"<div class='kit_txtContents' id='kit_txtContents_03'>Folleto de gran tamaño se debe  utilizar para realizar la presentación.</div>"+
			//04
		"<div class='kit_txtContents' id='kit_txtContents_04'>Una versión más corta que el brochure para dejar con el farmacéutico.</div>"+
			//05
		"<div class='kit_txtContents' id='kit_txtContents_05'>Sirve para que el interlocutor tenga contacto con el producto.</div>"+
			//06
		"<div class='kit_txtContents' id='kit_txtContents_06'>Demuestran el Beneficio en el  organismo.</div>"+
		
		//Educacion al Farmacéutico
		"<div class='rectangle_04' id='rectangle_btn_educaFarma' onmouseover='rollOver_rectangle_btn_educaFarma()'>Educación al Farmacéutico</div>"+
		
		//Slide Number
		"<div class='slideNumber'>022</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var kitPresentacion_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Kit de <b>Apresentação</b></div>"+
				
		//Images
			//01
		"<div class='kitPresentacion_img' id='kitPresentacion_img_01'><img src='img/Induccion/Herramientas/img_kitPresentacion_01.png'></div>"+
			//02
		"<div class='kitPresentacion_img' id='kitPresentacion_img_02'><img src='img/Induccion/Herramientas/img_kitPresentacion_02.png'></div>"+
			//03
		"<div class='kitPresentacion_img' id='kitPresentacion_img_03'><img src='img/Induccion/Herramientas/img_kitPresentacion_03.png'></div>"+
			//04
		"<div class='kitPresentacion_img' id='kitPresentacion_img_04'><img src='img/Induccion/Herramientas/img_kitPresentacion_04.png'></div>"+
			//05
		"<div class='kitPresentacion_img' id='kitPresentacion_img_05'><img src='img/Induccion/Herramientas/img_kitPresentacion_05.png'></div>"+
		
		//Numbers
			//01
		"<div class='kitPresentacion_num' id='kitPresentacion_num_01'><img src='img/Induccion/Herramientas/img_num_01.png'></div>"+
			//02
		"<div class='kitPresentacion_num' id='kitPresentacion_num_02'><img src='img/Induccion/Herramientas/img_num_02.png'></div>"+
			//03
		"<div class='kitPresentacion_num' id='kitPresentacion_num_03'><img src='img/Induccion/Herramientas/img_num_03.png'></div>"+
			//04
		"<div class='kitPresentacion_num' id='kitPresentacion_num_04'><img src='img/Induccion/Herramientas/img_num_04.png'></div>"+
			//05
		"<div class='kitPresentacion_num' id='kitPresentacion_num_05'><img src='img/Induccion/Herramientas/img_num_05.png'></div>"+
		
		//Main Text
		"<div class='kit_txtTitle' id='kit_txtTitle_main_text'>Para que a apresentação técnica seja clara, efetiva e focada nas principais mensagens, deve-se utilizar o Kit de Apresentação Técnica, composto por:</div>"+
		
		//Titles
			//01
		"<div class='kit_txtTitle' id='kit_txtTitle_01'><b>Folha de Discurso:</b></div>"+
			//02
		"<div class='kit_txtTitle' id='kit_txtTitle_02'><b>Brochura:</b></div>"+
			//01
		"<div class='kit_txtTitle' id='kit_txtTitle_03'><b>Folheto:</b></div>"+
			//01
		"<div class='kit_txtTitle' id='kit_txtTitle_04'><b>Amostra:</b></div>"+
			//01
		"<div class='kit_txtTitle' id='kit_txtTitle_05'><b>Vídeo:</b></div>"+
		
		//Contents
			//01
		"<div class='kit_txtContents' id='kit_txtContents_01'>Guia de apresentação, deve ser estudado antes de fazer a apresentação para o farmacêutico</div>"+
			//02
		"<div class='kit_txtContents' id='kit_txtContents_02'>De tamanho maior, deve ser utilizada para fazer a apresentação ao farmacêutico.</div>"+
			//03
		"<div class='kit_txtContents' id='kit_txtContents_03'>Uma versão menor de brochura deve ser entregue ao farmacêutico / balconista para que sirva como fonte de consulta.</div>"+
			//04
		"<div class='kit_txtContents' id='kit_txtContents_04'>Serve para que o interlocutor tenha contato com produto.</div>"+
			//05
		"<div class='kit_txtContents' id='kit_txtContents_05'>Demonstram visualmente o benefício apresentado pela Brochura.</div>"+
		
		//Main Text
		"<div class='kit_txtTitle' id='kit_txtTitle_bottom_text'>Importante estudar bem cada uma das marcas para fazer uma boa apresentação técnica. Verifique a sessão de marcas.</div>"+
		
		//Educacion al Farmacéutico
		"<div class='rectangle_04' id='rectangle_btn_educaFarma' onmouseover='rollOver_rectangle_btn_educaFarma()'>Educação para o Farmacêutico</div>"+

		//Slide Number
		"<div class='slideNumber'>022</div>"+

	"" ;

	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + kitPresentacion_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var kit_txtTitle_main_text = document.getElementById("kit_txtTitle_main_text") ;
			var kit_txtTitle_bottom_text = document.getElementById("kit_txtTitle_bottom_text") ;
			
			var kitPresentacion_img_01 = document.getElementById("kitPresentacion_img_01") ;
			var kitPresentacion_img_02 = document.getElementById("kitPresentacion_img_02") ;
			var kitPresentacion_img_03 = document.getElementById("kitPresentacion_img_03") ;
			var kitPresentacion_img_04 = document.getElementById("kitPresentacion_img_04") ;
			var kitPresentacion_img_05 = document.getElementById("kitPresentacion_img_05") ;
			
			var kitPresentacion_num_01 = document.getElementById("kitPresentacion_num_01") ;
			var kitPresentacion_num_02 = document.getElementById("kitPresentacion_num_02") ;
			var kitPresentacion_num_03 = document.getElementById("kitPresentacion_num_03") ;
			var kitPresentacion_num_04 = document.getElementById("kitPresentacion_num_04") ;
			var kitPresentacion_num_05 = document.getElementById("kitPresentacion_num_05") ;
			var kitPresentacion_num_06 = document.getElementById("kitPresentacion_num_06") ;
			
			var kit_txtTitle_01 = document.getElementById("kit_txtTitle_01") ;
			var kit_txtTitle_02 = document.getElementById("kit_txtTitle_02") ;
			var kit_txtTitle_03 = document.getElementById("kit_txtTitle_03") ;
			var kit_txtTitle_04 = document.getElementById("kit_txtTitle_04") ;
			var kit_txtTitle_05 = document.getElementById("kit_txtTitle_05") ;
			var kit_txtTitle_06 = document.getElementById("kit_txtTitle_06") ;
			
			var kit_txtContents_01 = document.getElementById("kit_txtContents_01") ;
			var kit_txtContents_02 = document.getElementById("kit_txtContents_02") ;
			var kit_txtContents_03 = document.getElementById("kit_txtContents_03") ;
			var kit_txtContents_04 = document.getElementById("kit_txtContents_04") ;
			var kit_txtContents_05 = document.getElementById("kit_txtContents_05") ;
			var kit_txtContents_06 = document.getElementById("kit_txtContents_06") ;
			
			TweenMax.fromTo ([txt_Title_bullets , kit_txtTitle_main_text , kit_txtTitle_bottom_text] , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (kitPresentacion_img_01 , 1 , {css:{opacity:"0" , top:"200px"}} , {css:{opacity:"1" , top:"250px"}}) ;
			TweenMax.fromTo (kitPresentacion_img_02 , 1 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"275px"} , delay:1}) ;
			TweenMax.fromTo (kitPresentacion_img_03 , 1 , {css:{opacity:"0" , left:"425px"}} , {css:{opacity:"1" , left:"475px"} , delay:2}) ;
			TweenMax.fromTo (kitPresentacion_img_04 , 1 , {css:{opacity:"0" , top:"400px"}} , {css:{opacity:"1" , top:"350px"} , delay:3}) ;
			TweenMax.fromTo (kitPresentacion_img_05 , 1 , {css:{opacity:"0" , left:"300px"}} , {css:{opacity:"1" , left:"250px"} , delay:4}) ;
			
			TweenMax.staggerFromTo ([kitPresentacion_num_01 , kitPresentacion_num_02 , kitPresentacion_num_03 , kitPresentacion_num_04 , kitPresentacion_num_05 , kitPresentacion_num_06] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , 1) ;
			
			TweenMax.staggerFromTo ([kit_txtTitle_01 , kit_txtTitle_02 , kit_txtTitle_03 , kit_txtTitle_04 , kit_txtTitle_05 , kit_txtTitle_06] , .75 , {css:{opacity:"0" , left:"825px"}} , {css:{opacity:"1" , left:"775px"}} , 1) ;
			
			TweenMax.staggerFromTo ([kit_txtContents_01 , kit_txtContents_02 , kit_txtContents_03 , kit_txtContents_04 , kit_txtContents_05 , kit_txtContents_06] , 1 , {css:{opacity:"0" , left:"850px"}} , {css:{opacity:"1" , left:"800px"}} , 1) ;
			
			/////////////////////////////////Exit animation
			function exit_kitPresentacion_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var kitPresentacion_img_01 = document.getElementById("kitPresentacion_img_01") ;
				var kitPresentacion_img_02 = document.getElementById("kitPresentacion_img_02") ;
				var kitPresentacion_img_03 = document.getElementById("kitPresentacion_img_03") ;
				var kitPresentacion_img_04 = document.getElementById("kitPresentacion_img_04") ;
				var kitPresentacion_img_05 = document.getElementById("kitPresentacion_img_05") ;
				
				var kitPresentacion_num_01 = document.getElementById("kitPresentacion_num_01") ;
				var kitPresentacion_num_02 = document.getElementById("kitPresentacion_num_02") ;
				var kitPresentacion_num_03 = document.getElementById("kitPresentacion_num_03") ;
				var kitPresentacion_num_04 = document.getElementById("kitPresentacion_num_04") ;
				var kitPresentacion_num_05 = document.getElementById("kitPresentacion_num_05") ;
				
				var kit_txtTitle_01 = document.getElementById("kit_txtTitle_01") ;
				var kit_txtTitle_01 = document.getElementById("kit_txtTitle_01") ;
				var kit_txtTitle_01 = document.getElementById("kit_txtTitle_01") ;
				var kit_txtTitle_01 = document.getElementById("kit_txtTitle_01") ;
				var kit_txtTitle_01 = document.getElementById("kit_txtTitle_01") ;
				
				var kit_txtContents_01 = document.getElementById("kit_txtContents_01") ;
				var kit_txtContents_02 = document.getElementById("kit_txtContents_02") ;
				var kit_txtContents_03 = document.getElementById("kit_txtContents_03") ;
				var kit_txtContents_04 = document.getElementById("kit_txtContents_04") ;
				var kit_txtContents_05 = document.getElementById("kit_txtContents_05") ;
				
				TweenMax.killTweensOf([txt_Title_bullets , txt_Title_bullets , kitPresentacion_img_01 , kitPresentacion_img_02 , kitPresentacion_img_03 , kitPresentacion_img_04 , kitPresentacion_img_05 , kitPresentacion_num_01 , kitPresentacion_num_02 , kitPresentacion_num_03, kitPresentacion_num_04 , kitPresentacion_num_05 , kit_txtTitle_01 , kit_txtTitle_02 , kit_txtTitle_03 , kit_txtTitle_04 , kit_txtTitle_05 , kit_txtContents_01 , kit_txtContents_02 , kit_txtContents_03 , kit_txtContents_04 , kit_txtContents_05]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (kitPresentacion_img_01 , .5 , {css:{opacity:"1" , top:"250px"}} , {css:{opacity:"0" , top:"200px"}}) ;
				TweenMax.fromTo (kitPresentacion_img_02 , .5 , {css:{opacity:"1" , left:"225px"}} , {css:{opacity:"0" , left:"275px"}}) ;
				TweenMax.fromTo (kitPresentacion_img_03 , .5 , {css:{opacity:"1" , left:"475px"}} , {css:{opacity:"0" , left:"425px"}}) ;
				TweenMax.fromTo (kitPresentacion_img_04 , .5 , {css:{opacity:"1" , top:"350px"}} , {css:{opacity:"0" , top:"400px"}}) ;
				TweenMax.fromTo (kitPresentacion_img_05 , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}}) ;
				
				
				TweenMax.staggerFromTo ([kitPresentacion_num_01 , kitPresentacion_num_02 , kitPresentacion_num_03 , kitPresentacion_num_04 , kitPresentacion_num_05 , kitPresentacion_num_06] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
				TweenMax.staggerFromTo ([kit_txtTitle_01 , kit_txtTitle_02 , kit_txtTitle_03 , kit_txtTitle_04 , kit_txtTitle_05 , kit_txtTitle_06] , .5 , {css:{opacity:"1" , left:"775px"}} , {css:{opacity:"0" , left:"825px"}} , .25) ;
				
				TweenMax.staggerFromTo ([kit_txtContents_01 , kit_txtContents_02 , kit_txtContents_03 , kit_txtContents_04 , kit_txtContents_05 , kit_txtContents_06] , .5 , {css:{opacity:"1" , left:"800px"}} , {css:{opacity:"0" , left:"850px"}} , .25) ;
		
				auLocucion.src = '' ;

				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_Herramientas() ;
						break;
						
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
							materialVisibilidad() ;
						break;
						
						case 1:
							normaEvaluacion() ;
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
				exit_kitPresentacion_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_kitPresentacion_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_kitPresentacion_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_kitPresentacion_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_kitPresentacion_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_kitPresentacion_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_kitPresentacion_mex() ;
			});

			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_kitPresentacion_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_kitPresentacion_mex() ;
			});
		
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_kitPresentacion_mex.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + kitPresentacion_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var kit_txtTitle_main_text = document.getElementById("kit_txtTitle_main_text") ;
			var kit_txtTitle_bottom_text = document.getElementById("kit_txtTitle_bottom_text") ;
			
			var kitPresentacion_img_01 = document.getElementById("kitPresentacion_img_01") ;
			var kitPresentacion_img_02 = document.getElementById("kitPresentacion_img_02") ;
			var kitPresentacion_img_03 = document.getElementById("kitPresentacion_img_03") ;
			var kitPresentacion_img_04 = document.getElementById("kitPresentacion_img_04") ;
			var kitPresentacion_img_05 = document.getElementById("kitPresentacion_img_05") ;
			
			var kitPresentacion_num_01 = document.getElementById("kitPresentacion_num_01") ;
			var kitPresentacion_num_02 = document.getElementById("kitPresentacion_num_02") ;
			var kitPresentacion_num_03 = document.getElementById("kitPresentacion_num_03") ;
			var kitPresentacion_num_04 = document.getElementById("kitPresentacion_num_04") ;
			var kitPresentacion_num_05 = document.getElementById("kitPresentacion_num_05") ;
			
			var kit_txtTitle_01 = document.getElementById("kit_txtTitle_01") ;
			var kit_txtTitle_02 = document.getElementById("kit_txtTitle_02") ;
			var kit_txtTitle_03 = document.getElementById("kit_txtTitle_03") ;
			var kit_txtTitle_04 = document.getElementById("kit_txtTitle_04") ;
			var kit_txtTitle_05 = document.getElementById("kit_txtTitle_05") ;
			
			var kit_txtContents_01 = document.getElementById("kit_txtContents_01") ;
			var kit_txtContents_02 = document.getElementById("kit_txtContents_02") ;
			var kit_txtContents_03 = document.getElementById("kit_txtContents_03") ;
			var kit_txtContents_04 = document.getElementById("kit_txtContents_04") ;
			var kit_txtContents_05 = document.getElementById("kit_txtContents_05") ;
			
			TweenMax.fromTo ([txt_Title_bullets , kit_txtTitle_main_text , kit_txtTitle_bottom_text] , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (kitPresentacion_img_01 , 1 , {css:{opacity:"0" , top:"200px"}} , {css:{opacity:"1" , top:"250px"}}) ;
			TweenMax.fromTo (kitPresentacion_img_02 , 1 , {css:{opacity:"0" , left:"275px"}} , {css:{opacity:"1" , left:"225px"} , delay:1}) ;
			TweenMax.fromTo (kitPresentacion_img_03 , 1 , {css:{opacity:"0" , left:"425px"}} , {css:{opacity:"1" , left:"475px"} , delay:2}) ;
			TweenMax.fromTo (kitPresentacion_img_04 , 1 , {css:{opacity:"0" , top:"400px"}} , {css:{opacity:"1" , top:"350px"} , delay:3}) ;
			TweenMax.fromTo (kitPresentacion_img_05 , 1 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"} , delay:4}) ;
			
			TweenMax.staggerFromTo ([kitPresentacion_num_01 , kitPresentacion_num_02 , kitPresentacion_num_03 , kitPresentacion_num_04 , kitPresentacion_num_05] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , 1) ;
			
			TweenMax.staggerFromTo ([kit_txtTitle_01 , kit_txtTitle_02 , kit_txtTitle_03 , kit_txtTitle_04 , kit_txtTitle_05] , .75 , {css:{opacity:"0" , left:"825px"}} , {css:{opacity:"1" , left:"775px"}} , 1) ;
			
			TweenMax.staggerFromTo ([kit_txtContents_01 , kit_txtContents_02 , kit_txtContents_03 , kit_txtContents_04 , kit_txtContents_05] , 1 , {css:{opacity:"0" , left:"850px"}} , {css:{opacity:"1" , left:"800px"}} , 1) ;
			
			/////////////////////////////////Exit animation
			function exit_kitPresentacion()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var kitPresentacion_img_01 = document.getElementById("kitPresentacion_img_01") ;
				var kitPresentacion_img_02 = document.getElementById("kitPresentacion_img_02") ;
				var kitPresentacion_img_03 = document.getElementById("kitPresentacion_img_03") ;
				var kitPresentacion_img_04 = document.getElementById("kitPresentacion_img_04") ;
				var kitPresentacion_img_05 = document.getElementById("kitPresentacion_img_05") ;
				
				var kitPresentacion_num_01 = document.getElementById("kitPresentacion_num_01") ;
				var kitPresentacion_num_02 = document.getElementById("kitPresentacion_num_02") ;
				var kitPresentacion_num_03 = document.getElementById("kitPresentacion_num_03") ;
				var kitPresentacion_num_04 = document.getElementById("kitPresentacion_num_04") ;
				var kitPresentacion_num_05 = document.getElementById("kitPresentacion_num_05") ;
				
				var kit_txtTitle_01 = document.getElementById("kit_txtTitle_01") ;
				var kit_txtTitle_01 = document.getElementById("kit_txtTitle_01") ;
				var kit_txtTitle_01 = document.getElementById("kit_txtTitle_01") ;
				var kit_txtTitle_01 = document.getElementById("kit_txtTitle_01") ;
				var kit_txtTitle_01 = document.getElementById("kit_txtTitle_01") ;
				
				var kit_txtContents_01 = document.getElementById("kit_txtContents_01") ;
				var kit_txtContents_02 = document.getElementById("kit_txtContents_02") ;
				var kit_txtContents_03 = document.getElementById("kit_txtContents_03") ;
				var kit_txtContents_04 = document.getElementById("kit_txtContents_04") ;
				var kit_txtContents_05 = document.getElementById("kit_txtContents_05") ;
				
				TweenMax.killTweensOf([txt_Title_bullets , txt_Title_bullets , kitPresentacion_img_01 , kitPresentacion_img_02 , kitPresentacion_img_03 , kitPresentacion_img_04 , kitPresentacion_img_05 , kitPresentacion_num_01 , kitPresentacion_num_02 , kitPresentacion_num_03, kitPresentacion_num_04 , kitPresentacion_num_05 , kit_txtTitle_01 , kit_txtTitle_02 , kit_txtTitle_03 , kit_txtTitle_04 , kit_txtTitle_05 , kit_txtContents_01 , kit_txtContents_02 , kit_txtContents_03 , kit_txtContents_04 , kit_txtContents_05]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (kitPresentacion_img_01 , .5 , {css:{opacity:"1" , top:"250px"}} , {css:{opacity:"0" , top:"200px"}}) ;
				TweenMax.fromTo (kitPresentacion_img_02 , .5 , {css:{opacity:"1" , left:"225px"}} , {css:{opacity:"0" , left:"275px"}}) ;
				TweenMax.fromTo (kitPresentacion_img_03 , .5 , {css:{opacity:"1" , left:"475px"}} , {css:{opacity:"0" , left:"425px"}}) ;
				TweenMax.fromTo (kitPresentacion_img_04 , .5 , {css:{opacity:"1" , top:"350px"}} , {css:{opacity:"0" , top:"400px"}}) ;
				TweenMax.fromTo (kitPresentacion_img_05 , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}}) ;
				
				
				TweenMax.staggerFromTo ([kitPresentacion_num_01 , kitPresentacion_num_02 , kitPresentacion_num_03 , kitPresentacion_num_04 , kitPresentacion_num_05] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
				TweenMax.staggerFromTo ([kit_txtTitle_01 , kit_txtTitle_02 , kit_txtTitle_03 , kit_txtTitle_04 , kit_txtTitle_05] , .5 , {css:{opacity:"1" , left:"775px"}} , {css:{opacity:"0" , left:"825px"}} , .25) ;
				
				TweenMax.staggerFromTo ([kit_txtContents_01 , kit_txtContents_02 , kit_txtContents_03 , kit_txtContents_04 , kit_txtContents_05] , .5 , {css:{opacity:"1" , left:"800px"}} , {css:{opacity:"0" , left:"850px"}} , .25) ;
		
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_Herramientas() ;
						break;
						
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
							onePage() ;
						break;
						
						case 1:
							guiaFarma() ;
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
				exit_kitPresentacion() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_kitPresentacion() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_kitPresentacion() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_kitPresentacion() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_kitPresentacion() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_kitPresentacion() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_kitPresentacion() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_kitPresentacion() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_kitPresentacion() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_kitPresentacion_bra.mp3' ;
	
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
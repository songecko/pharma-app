<!--Educación al Farmacéutico 01-->
function objeciones_01()
{
	CleanScreen() ;
	
	gotoSlide = 'objeciones_01' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_tecnicaVentas.png' onmouseover='rollOver_ico_04()' /></div>"+		
		
		//Objeciones
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_objeciones.png' onmouseover='rollOver_ico_05()' /></div>"+		
		
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
	var objeciones_01_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Manejo de <b>Objeciones</b></li></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_objeciones_s1_01'><b>¿Que es una objeción?</b></div>"+
				//02
		"<div class='all_leftText' id='all_leftText_objeciones_s1_02'>• Oposición a un plan o idea presentada<br/><br/>• Se expresa a través de una preocupación, una razón o un argumento.<br/><br/>• No necesariamente significa que el cliente no vaya a comprar.<br/><br/>• De hecho una objeción puede convertirse en una buena oportunidad para vender</div>"+
			
			//03
		"<div class='all_leftText' id='all_leftText_objeciones_s1_03'><b>Reducción de objeciones<br/>Anticipación de objeciones<br/>La planeación es clave para ello<br/>Conocimiento profundo del cliente para conocer:</b></div>"+
				//04
		"<div class='all_leftText_bullet' id='all_leftText_objeciones_s1_04'>• Condiciones<br/><br/>• Necesidades<br/><br/>• Limitaciones<br/><br/>• Oportunidades</div>"+

			//05
		"<div class='all_leftText' id='all_leftText_objeciones_s1_05'>Presentar para adelantarse a las objeciones.<br/><br/>Pensar y preparar respuestas para todas las objeciones que se nos ocurran.<br/><br/><b>Tipos de objeciones</b>: Verdaderas y Falsas<br/><br/>Existe la posibilidad que nos digan objeciones verdaderas y objeciones falsas</div>"+
				//06
		"<div class='all_leftText_bullet' id='all_leftText_objeciones_s1_06'>• Lo mas importante es aprender a identificar y manejar las objeciones verdaderas.<br/><br/>• Manejarlas a satisfacción del cliente<br/><br/>• Una objeción verdadera es una preocupación expresada o impedimento real desde el punto de vista del cliente.<br/><br/>• Una objeción falsa es una preocupación o razón expresada que no es real y tiende a cambiar o a desaparecer</div>"+
			
			//Imagen
		"<div style='position:absolute ; right: 0px ; opacity:.5'><img src='img/TecnicaVentas/Objeciones/img_objectionGirl.png'/></div>"+	
		
		//Slide Number
		"<div class='slideNumber'>222</div>"+
		
	"" ;
	
	/////////////////////////////////Brasil
	var objeciones_01_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Lidar com <b>Objeções</b></li></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_objeciones_s1_01'><b>O que é uma objeção?</b></div>"+
				//02
		"<div class='all_leftText' id='all_leftText_objeciones_s1_02'>• A oposição a um plano ou idéia apresentada<br/>• É expressa através de uma preocupação, uma razão ou argumento.<br/>• Não significa necessariamente que o cliente não vai comprar<br/>• Na verdade, uma objeção pode ser uma boa oportunidade para vender</div>"+
			
			//03
		"<div class='all_leftText' id='all_leftText_objeciones_s1_03'><b>Reduzir objeções<br/>Antecipando objeções<br/>Planejamento é a chave para este<br/>Profundo conhecimento do cliente a saber:</b></div>"+
				//04
		"<div class='all_leftText_bullet' id='all_leftText_objeciones_s1_04'>• Termos<br/>• Necessidades<br/>• Limitações<br/>• Oportunidades</div>"+

			//05
		"<div class='all_leftText' id='all_leftText_objeciones_s1_05'>Enviar para antecipar objeções.<br/><br/>Pense e preparar respostas a todas as objeções que nos ocorrem.<br/><br/><b>Tipos de objeções:</b>: Verdadeiro e Falso<br/><br/>É possível dizer-nos verdadeiros e falsos objeções objeções</div>"+
				//06
		"<div class='all_leftText_bullet' id='all_leftText_objeciones_s1_06'>•  A coisa mais importante é aprender a identificar e lidar com objeções verdade.<br/>• Manipulação-los para a satisfação do cliente.<br/>• Uma objecção real é uma preocupação expressa ou impedimento real a partir do ponto de vista do cliente.<br/>• Um falso objeção é uma preocupação ou razão dada não é real e tende a mudar ou desaparecer.</div>"+
			
			//Imagen
		"<div style='position:absolute ; right: 0px ; opacity:.5'><img src='img/TecnicaVentas/Objeciones/img_objectionGirl.png'/></div>"+	
		
		//Slide Number
		"<div class='slideNumber'>168</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + objeciones_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_objeciones_s1_01 = document.getElementById("all_leftText_objeciones_s1_01") ;
			var all_leftText_objeciones_s1_02 = document.getElementById("all_leftText_objeciones_s1_02") ;
			var all_leftText_objeciones_s1_03 = document.getElementById("all_leftText_objeciones_s1_03") ;
			var all_leftText_objeciones_s1_04 = document.getElementById("all_leftText_objeciones_s1_04") ;
			var all_leftText_objeciones_s1_05 = document.getElementById("all_leftText_objeciones_s1_05") ;
			var all_leftText_objeciones_s1_06 = document.getElementById("all_leftText_objeciones_s1_06") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_objeciones_s1_01 , all_leftText_objeciones_s1_03], .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.staggerFromTo ([all_leftText_objeciones_s1_02 , all_leftText_objeciones_s1_04], .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5} , .25) ;
			
			TweenMax.fromTo (all_leftText_objeciones_s1_05 , .5 , {css:{opacity:"0" , left:"750px"}} , {css:{opacity:"1" , left:"700px"} , delay: 1}) ;
			TweenMax.fromTo (all_leftText_objeciones_s1_06 , .5 , {css:{opacity:"0" , left:"775px"}} , {css:{opacity:"1" , left:"725px"} , delay: 1.25}) ;
						
			/////////////////////////////////Exit animation
			function exit_objeciones_01_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_objeciones_s1_01 = document.getElementById("all_leftText_objeciones_s1_01") ;
				var all_leftText_objeciones_s1_02 = document.getElementById("all_leftText_objeciones_s1_02") ;
				var all_leftText_objeciones_s1_03 = document.getElementById("all_leftText_objeciones_s1_04") ;
				var all_leftText_objeciones_s1_04 = document.getElementById("all_leftText_objeciones_s1_03") ;
				var all_leftText_objeciones_s1_05 = document.getElementById("all_leftText_objeciones_s1_05") ;
				var all_leftText_objeciones_s1_06 = document.getElementById("all_leftText_objeciones_s1_06") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_objeciones_s1_01 , all_leftText_objeciones_s1_02 , all_leftText_objeciones_s1_03 , all_leftText_objeciones_s1_04 , all_leftText_objeciones_s1_05 , all_leftText_objeciones_s1_06]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_objeciones_s1_01 , all_leftText_objeciones_s1_03], .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				TweenMax.staggerFromTo ([all_leftText_objeciones_s1_02 , all_leftText_objeciones_s1_04], .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}} , .25) ;
				
				TweenMax.fromTo (all_leftText_objeciones_s1_05 , .5 , {css:{opacity:"1" , left:"700px"}} , {css:{opacity:"0" , left:"720px"}}) ;
				TweenMax.fromTo (all_leftText_objeciones_s1_06 , .5 , {css:{opacity:"1" , left:"725px"}} , {css:{opacity:"0" , left:"775px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -6:
							menu_tecnicaVentas() ;
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
							menu_tecnicaVentas() ;
						break;
						
						case 1:
							objeciones_02() ;
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
				exit_objeciones_01() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_objeciones_01() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_objeciones_01() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_objeciones_01() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_objeciones_01() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_objeciones_01() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_objeciones_01() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_objeciones_01() ;
			});
			
				/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/TecnicaVentas/au_menuTecnicaVenta_ManejoObjeciones_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + objeciones_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_objeciones_s1_01 = document.getElementById("all_leftText_objeciones_s1_01") ;
			var all_leftText_objeciones_s1_02 = document.getElementById("all_leftText_objeciones_s1_02") ;
			var all_leftText_objeciones_s1_03 = document.getElementById("all_leftText_objeciones_s1_03") ;
			var all_leftText_objeciones_s1_04 = document.getElementById("all_leftText_objeciones_s1_04") ;
			var all_leftText_objeciones_s1_05 = document.getElementById("all_leftText_objeciones_s1_05") ;
			var all_leftText_objeciones_s1_06 = document.getElementById("all_leftText_objeciones_s1_06") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_objeciones_s1_01 , all_leftText_objeciones_s1_03], .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.staggerFromTo ([all_leftText_objeciones_s1_02 , all_leftText_objeciones_s1_04], .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5} , .25) ;
			
			TweenMax.fromTo (all_leftText_objeciones_s1_05 , .5 , {css:{opacity:"0" , left:"750px"}} , {css:{opacity:"1" , left:"700px"} , delay: 1}) ;
			TweenMax.fromTo (all_leftText_objeciones_s1_06 , .5 , {css:{opacity:"0" , left:"775px"}} , {css:{opacity:"1" , left:"725px"} , delay: 1.25}) ;
						
			/////////////////////////////////Exit animation
			function exit_objeciones_01()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_objeciones_s1_01 = document.getElementById("all_leftText_objeciones_s1_01") ;
				var all_leftText_objeciones_s1_02 = document.getElementById("all_leftText_objeciones_s1_02") ;
				var all_leftText_objeciones_s1_03 = document.getElementById("all_leftText_objeciones_s1_04") ;
				var all_leftText_objeciones_s1_04 = document.getElementById("all_leftText_objeciones_s1_03") ;
				var all_leftText_objeciones_s1_05 = document.getElementById("all_leftText_objeciones_s1_05") ;
				var all_leftText_objeciones_s1_06 = document.getElementById("all_leftText_objeciones_s1_06") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_objeciones_s1_01 , all_leftText_objeciones_s1_02 , all_leftText_objeciones_s1_03 , all_leftText_objeciones_s1_04 , all_leftText_objeciones_s1_05 , all_leftText_objeciones_s1_06]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_objeciones_s1_01 , all_leftText_objeciones_s1_03], .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				TweenMax.staggerFromTo ([all_leftText_objeciones_s1_02 , all_leftText_objeciones_s1_04], .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}} , .25) ;
				
				TweenMax.fromTo (all_leftText_objeciones_s1_05 , .5 , {css:{opacity:"1" , left:"700px"}} , {css:{opacity:"0" , left:"720px"}}) ;
				TweenMax.fromTo (all_leftText_objeciones_s1_06 , .5 , {css:{opacity:"1" , left:"725px"}} , {css:{opacity:"0" , left:"775px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -6:
							menu_tecnicaVentas() ;
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
							menu_tecnicaVentas() ;
						break;
						
						case 1:
							objeciones_02() ;
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
				exit_objeciones_01() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_objeciones_01() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_objeciones_01() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_objeciones_01() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_objeciones_01() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_objeciones_01() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_objeciones_01() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_objeciones_01() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/TecnicaVentas/au_tecnicaVentasOjeciones_bra01.mp3' ;
			
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
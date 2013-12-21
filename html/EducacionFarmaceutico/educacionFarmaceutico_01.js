<!--Educación al Farmacéutico 01-->
function educacionFarmaceutico_01()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_01' ;
	
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
	var educacionFarmaceutico_01_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>¿Qué es educación al <b>Farmacéutico?</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_educFarma_s1_01'>Es una parte clave de la visita del farmaasesor a la farmacia para influir sobre <b>la recomendación del farmacéutico al consumidor</b> e <b>incrementar las ventas</b> de nuestras marcas en este canal. La herramienta más efectiva para lograrlo es el <b>Brochure de educación.</b></div>"+
		
			//02
		"<div class='all_leftText' id='all_leftText_educFarma_s1_02'><b>¿PORQUÉ ES IMPORTANTE?</b></div>"+
			//Bullets	
				//01
		"<div class='all_leftText_bullet' id='all_leftText_educFarma_s1_03'><b>70%</b> de las compras son impulsadas por el farmacéutico.<br/><br/>El incremento de ventas que genera es de <b>12% a 24%</b><br/><br/>Porque los farmacéuticos son humanos, necesitan<br/>escuchar los mensajes de <b>3 a 8</b> veces<br/>para recomendar.</div>"+
		
			//04
		"<div class='all_leftText' id='all_leftText_educFarma_s1_04'><b>¿CÓMO LOGRARLO?</b></div>"+
			//Bullets	
				//01
		"<div class='all_leftText_bullet' id='all_leftText_educFarma_s1_05'>Se transmite <b>conocimiento científico</b> de cada<br/>producto de la marca (ni mucho ni poco)<br/><br/>Se  demuestra su <b>performance superior</b> y,<br/><br/>Se <b>solicita la recomendación al consumidor</b><br/><br/>Se repite hasta <b>8 veces en 2 meses</b><br/><br/>Herramientas: Brochure, video y volante para el farmacéutico.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/EducacionFarmaceutico/img_educacionFarma_01.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>141</div>"+
		
	"" ;
	
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_01_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>O que é educação para o <b>Farmacêutico?</b></li></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_educFarma_s1_01'>É uma parte fundamental da visita do RV à farmácia, com o objetivo de influenciar a recomendação do farmacêutico ao consumidor e incrementar as vendas de nossas marcas neste canal. A ferramenta mais efetiva para obtê-lo é a Brochura.</div>"+
		
			//02
		"<div class='all_leftText' id='all_leftText_educFarma_s1_02'><b>POR QUE É IMPORTANTE?</b></div>"+
			//Bullets	
				//01
		"<div class='all_leftText_bullet' id='all_leftText_educFarma_s1_03'>70% das compras são estimuladas pelo farmacêutico<br/><br/>O incremento de vendas que gera é de <b>12% a 24%</b><br/><br/>Porque os farmacêuticos são humanos, precisam escutar as mensagens<br/>de 3 a 8 vezes para recomendar.<br/><br/><b/>Lembre-se: conseguir a recomendação do<br/>farmacêutico é um dos 3 objetivos de cada visita!</b></div>"+
		
			//04
		"<div class='all_leftText' id='all_leftText_educFarma_s1_04'><b>COMO CONSEGUIR ISSO?</b></div>"+
			//Bullets	
				//01
		"<div class='all_leftText_bullet' id='all_leftText_educFarma_s1_05'>Transmite-se <b>conhecimento científico</b> de cada<br/>produto da marca (nem muito, nem pouco).<br/><br/>Demonstra-se sua <b>performance superior</b><br/><br/>Mostra como pode <b>incrementar vendas</b><br/><br/>Solicita-se a <b>recomendação ao consumidor</b><br/><br/>Ferramentas: <b>Brochura + Vídeo Demo + Folheto</b></div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/EducacionFarmaceutico/img_educacionFarma_01.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>102</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_educFarma_s1_01 = document.getElementById("all_leftText_educFarma_s1_01") ;
			var all_leftText_educFarma_s1_02 = document.getElementById("all_leftText_educFarma_s1_02") ;
			var all_leftText_educFarma_s1_04 = document.getElementById("all_leftText_educFarma_s1_04") ;
			
			var all_leftText_educFarma_s1_03 = document.getElementById("all_leftText_educFarma_s1_03") ;
			var all_leftText_educFarma_s1_05 = document.getElementById("all_leftText_educFarma_s1_05") ;
			
			var all_leftText_educFarma_s1_05 = document.getElementById("all_leftText_educFarma_s1_05") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_educFarma_s1_01 , all_leftText_educFarma_s1_02 , all_leftText_educFarma_s1_04 ], .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.staggerFromTo ([all_leftText_educFarma_s1_03 , all_leftText_educFarma_s1_05 ], .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5} , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"0px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_01_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_educFarma_s1_01 = document.getElementById("all_leftText_educFarma_s1_01") ;
				var all_leftText_educFarma_s1_02 = document.getElementById("all_leftText_educFarma_s1_02") ;
				var all_leftText_educFarma_s1_04 = document.getElementById("all_leftText_educFarma_s1_04") ;
				
				var all_leftText_educFarma_s1_03 = document.getElementById("all_leftText_educFarma_s1_03") ;
				var all_leftText_educFarma_s1_05 = document.getElementById("all_leftText_educFarma_s1_05") ;
				
				var all_leftText_educFarma_s1_05 = document.getElementById("all_leftText_educFarma_s1_05") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_educFarma_s1_01 , all_leftText_educFarma_s1_02 , all_leftText_educFarma_s1_03 , all_leftText_educFarma_s1_04 , all_leftText_educFarma_s1_05 , all_rightImage]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_educFarma_s1_01 , all_leftText_educFarma_s1_02 , all_leftText_educFarma_s1_04 ], .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				
				TweenMax.staggerFromTo ([all_leftText_educFarma_s1_03 , all_leftText_educFarma_s1_05 ], .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}} , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"100px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							languageSelector() ;
						break;
						
						case 1:
							menu_Principal() ;
						break ;
						
						case 2:
							educacionFarmaceutico_02() ;
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
				exit_educacionFarmaceutico_01_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_01_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_01_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_01_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_01_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_01_mex() ;
			});
	
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_01_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 2 ;
				exit_educacionFarmaceutico_01_mex() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/EducacionFarmaceutico/au_educacionFamaceutico_mex01.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_educFarma_s1_01 = document.getElementById("all_leftText_educFarma_s1_01") ;
			var all_leftText_educFarma_s1_02 = document.getElementById("all_leftText_educFarma_s1_02") ;
			var all_leftText_educFarma_s1_04 = document.getElementById("all_leftText_educFarma_s1_04") ;
			
			var all_leftText_educFarma_s1_03 = document.getElementById("all_leftText_educFarma_s1_03") ;
			var all_leftText_educFarma_s1_05 = document.getElementById("all_leftText_educFarma_s1_05") ;
			
			var all_leftText_educFarma_s1_05 = document.getElementById("all_leftText_educFarma_s1_05") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_educFarma_s1_01 , all_leftText_educFarma_s1_02 , all_leftText_educFarma_s1_04 ], .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.staggerFromTo ([all_leftText_educFarma_s1_03 , all_leftText_educFarma_s1_05 ], .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5} , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"0px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_01()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_educFarma_s1_01 = document.getElementById("all_leftText_educFarma_s1_01") ;
				var all_leftText_educFarma_s1_02 = document.getElementById("all_leftText_educFarma_s1_02") ;
				var all_leftText_educFarma_s1_04 = document.getElementById("all_leftText_educFarma_s1_04") ;
				
				var all_leftText_educFarma_s1_03 = document.getElementById("all_leftText_educFarma_s1_03") ;
				var all_leftText_educFarma_s1_05 = document.getElementById("all_leftText_educFarma_s1_05") ;
				
				var all_leftText_educFarma_s1_05 = document.getElementById("all_leftText_educFarma_s1_05") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_educFarma_s1_01 , all_leftText_educFarma_s1_02 , all_leftText_educFarma_s1_03 , all_leftText_educFarma_s1_04 , all_leftText_educFarma_s1_05 , all_rightImage]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_educFarma_s1_01 , all_leftText_educFarma_s1_02 , all_leftText_educFarma_s1_04 ], .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				
				TweenMax.staggerFromTo ([all_leftText_educFarma_s1_03 , all_leftText_educFarma_s1_05 ], .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}} , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"100px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							languageSelector() ;
						break;
						
						case 1:
							menu_Principal() ;
						break ;
						
						case 2:
							educacionFarmaceutico_02() ;
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
				exit_educacionFarmaceutico_01() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_01() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_01() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_01() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_01() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_01() ;
			});
	
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_01() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 2 ;
				exit_educacionFarmaceutico_01() ;
			});
			
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/EducacionFarmaceutico/au_educacionFarmaceutico_bra01.mp3' ;
			
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
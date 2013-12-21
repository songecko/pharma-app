<!--Educación al Farmacéutico 01-->
function conocimientoProfundo_estiloGestion()
{
	CleanScreen() ;
	
	gotoSlide = 'conocimientoProfundo_estiloGestion' ;
	
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
		
		//Menu Técnica de Ventas
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_conocimientoProfundo.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		//Menu Técnica de Ventas
		//"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_conocimientoProfundo_estiloGestion.png' onmouseover='rollOver_ico_06()' /></div>"+
		
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
	var conocimientoProfundo_01_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Estilo de <b>Manejo</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_conocimientoProfundo_s1_01'><b>Conoce las Políticas del Cliente</b></div>"+
				//02
		"<div class='all_leftText_bullet' id='all_leftText_conocimientoProfundo_s1_02'>Verifica la imagen de P&G, lo que hacemos le gusta al cliente o no? (promociones, ideas, productos); Saber quiénes son competidores del cliente. Saber un poco más de la manera de cómo es tu cliente y cómo se conduce (qué le gusta hacer, cuáles son sus hobbies, cómo habla, cómo se dirigen los demás a él, etc.</div>"+
		
			//03
		"<div class='all_leftText' id='all_leftText_conocimientoProfundo_s1_03'><b>Recuerda</b></div>"+
				//04
		"<div class='all_leftText_bullet' id='all_leftText_conocimientoProfundo_s1_04'>El hacer negocio con un cliente al final del día es hacer una relación con la gente.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/TecnicaVentas/ConocimientoProfundo/img_conocimientoProfundo_03.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>232</div>"+
		
	"" ;
	
	
	/////////////////////////////////Brasil
	var conocimientoProfundo_01_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Estilo do <b>Gestão</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_conocimientoProfundo_s1_01'><b>Conheça Client Policy</b></div>"+
				//02
		"<div class='all_leftText_bullet' id='all_leftText_conocimientoProfundo_s1_02'>Confira a imagem de P&G, que nós não gostamos do cliente ou não?????? (Promoções, ideias, produtos); Saber quem são os concorrentes do cliente. Conhecendo um pouco mais a forma como seu cliente age e como age (o que você gosta de fazer, quais são seus hobbies, como falam, como eles atraem os outros, etc.)</div>"+
		
			//03
		"<div class='all_leftText' id='all_leftText_conocimientoProfundo_s1_03'></div>"+
				//04
		"<div class='all_leftText_bullet' id='all_leftText_conocimientoProfundo_s1_04'></div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/TecnicaVentas/ConocimientoProfundo/img_conocimientoProfundo_03.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>178</div>"+
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + conocimientoProfundo_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_conocimientoProfundo_s1_01 = document.getElementById("all_leftText_conocimientoProfundo_s1_01") ;
			var all_leftText_conocimientoProfundo_s1_02 = document.getElementById("all_leftText_conocimientoProfundo_s1_02") ;
			var all_leftText_conocimientoProfundo_s1_03 = document.getElementById("all_leftText_conocimientoProfundo_s1_03") ;
			var all_leftText_conocimientoProfundo_s1_04 = document.getElementById("all_leftText_conocimientoProfundo_s1_04") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_conocimientoProfundo_s1_01 , all_leftText_conocimientoProfundo_s1_03] , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.staggerFromTo ([all_leftText_conocimientoProfundo_s1_02 , all_leftText_conocimientoProfundo_s1_04] , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5} , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"100px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_conocimientoProfundo_estiloGestion_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_conocimientoProfundo_s1_01 = document.getElementById("all_leftText_conocimientoProfundo_s1_01") ;
				var all_leftText_conocimientoProfundo_s1_02 = document.getElementById("all_leftText_conocimientoProfundo_s1_02") ;

				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_conocimientoProfundo_s1_01 , all_leftText_conocimientoProfundo_s1_02 , all_rightImage]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_conocimientoProfundo_s1_01 , all_leftText_conocimientoProfundo_s1_03] , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				
				TweenMax.staggerFromTo ([all_leftText_conocimientoProfundo_s1_02 , all_leftText_conocimientoProfundo_s1_04] , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}} , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"100px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_conocimientoProfundo() ;
						break;
						
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
							conocimientoProfundo_objetivosEstrategias() ;
						break;
						
						case 1:
							conocimientoProfundo_indicadoresComerciales() ;
						break;
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
				exit_conocimientoProfundo_estiloGestion_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_conocimientoProfundo_estiloGestion_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_conocimientoProfundo_estiloGestion_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_conocimientoProfundo_estiloGestion_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_conocimientoProfundo_estiloGestion_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_conocimientoProfundo_estiloGestion_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_conocimientoProfundo_estiloGestion_mex() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_conocimientoProfundo_estiloGestion_mex() ;
			});
			
			/////////////////////////////////Flecha next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_conocimientoProfundo_estiloGestion_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + conocimientoProfundo_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_conocimientoProfundo_s1_01 = document.getElementById("all_leftText_conocimientoProfundo_s1_01") ;
			var all_leftText_conocimientoProfundo_s1_02 = document.getElementById("all_leftText_conocimientoProfundo_s1_02") ;
			var all_leftText_conocimientoProfundo_s1_03 = document.getElementById("all_leftText_conocimientoProfundo_s1_03") ;
			var all_leftText_conocimientoProfundo_s1_04 = document.getElementById("all_leftText_conocimientoProfundo_s1_04") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_conocimientoProfundo_s1_01 , all_leftText_conocimientoProfundo_s1_03] , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.staggerFromTo ([all_leftText_conocimientoProfundo_s1_02 , all_leftText_conocimientoProfundo_s1_04] , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5} , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"100px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_conocimientoProfundo_estiloGestion()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_conocimientoProfundo_s1_01 = document.getElementById("all_leftText_conocimientoProfundo_s1_01") ;
				var all_leftText_conocimientoProfundo_s1_02 = document.getElementById("all_leftText_conocimientoProfundo_s1_02") ;

				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_conocimientoProfundo_s1_01 , all_leftText_conocimientoProfundo_s1_02 , all_rightImage]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_conocimientoProfundo_s1_01 , all_leftText_conocimientoProfundo_s1_03] , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				
				TweenMax.staggerFromTo ([all_leftText_conocimientoProfundo_s1_02 , all_leftText_conocimientoProfundo_s1_04] , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}} , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"100px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_conocimientoProfundo() ;
						break;
						
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
							conocimientoProfundo_objetivosEstrategias() ;
						break;
						
						case 1:
							conocimientoProfundo_indicadoresComerciales() ;
						break;
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
				exit_conocimientoProfundo_estiloGestion() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_conocimientoProfundo_estiloGestion() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_conocimientoProfundo_estiloGestion() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_conocimientoProfundo_estiloGestion() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_conocimientoProfundo_estiloGestion() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_conocimientoProfundo_estiloGestion() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_conocimientoProfundo_estiloGestion() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_conocimientoProfundo_estiloGestion() ;
			});
			
			/////////////////////////////////Flecha next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_conocimientoProfundo_estiloGestion() ;
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
	backGradient.src = 'img/img_back_parhamLatam.png' ;
}
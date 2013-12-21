<!--Organización Agencias 01-->
function organizacionAgencias_01()
{
	CleanScreen() ;
	
	gotoSlide = 'organizacionAgencias_01' ;
	
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
		
		//Menu Tipos Tiendas
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_induccion_organizacionAgencias.png' onmouseover='rollOver_ico_05()' /></div>"+

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
		"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()'><img src='img/img_flecha_back.png' /></div>"+
			//Siguiente
		"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
		
	"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////México
	var organizacionAgencias_01_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Organización / <b>Agencias</b></div>"+
		 
		//Go to market > Image
		"<div class='organizacionAgencias_img' id='organizacionAgencias_img'><img src='img/Induccion/Organizacion/img_deluca.png' width='250'></div>"+
		
		//Textos
			//01
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_01_mex'> DeLuca es el único proveedor de servicios integrados para el sector de consumo masivo a nivel nacional. </div>"+
			//02
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_02_mex'> Desarrollamos planes que responden a las necesidades de los clientes, donde amarramos toda la cadena de valor, con beneficios que generen la lealtad de nuestros clientes, de sus fuerzas de ventas  y finalmente cerrando la brecha con el consumidor final para generar la repetición de la compra.</div>"+
			//03
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_03_mex'> La estructura interna de la empresa ha crecido hasta tener profesionales especializados, en cada una de las áreas administrativas de la empresa, que en conjunto logran dar los mejores resultados a cada proyecto.</div>"+
			//04
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_04_mex'> <b>Nuestra Visión</b> Ser socio estratégico para el desarrollo de las marcas de nuestros clientes mediante la excelencia en la ejecución de los distintos proyectos; que nos permita detonar las ventas de sus productos.</div>"+
			//05
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_05_mex'> <b>Nuestra Misión</b> Desarrollar eficientemente acciones promocionales que se traduzcan en mayores ventas y rentabilidad para nuestros clientes.</div>"+
		
			//Valores
		"<div id='organizacionAgencias_bullet_06_mex'><b>Valores</b></div>"+
		
			//07
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_07_mex'> <b>Servicio al cliente:</b> construimos relaciones firmes con los clientes por medio de un enfoque en sus necesidades, buscamos superar sus expectativas mediante soluciones flexibles y adaptadas a nuestro cliente.</div>"+
			//08
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_08_mex'> <b>Trabajo en equipo:</b> creamos equipos dinámicos y con talento que trabajen tanto a nivel local como nacional, manteniendo una comunicación abierta interna y externa, siendo entusiastas y apasionados por lo que hacemos.</div>"+
			//09
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_09_mex'> <b>Integridad:</b> actuamos con compromiso firme hacia la integridad científica y de negocio; construyendo confianza a través de un comportamiento ético y honesto, actuando con respeto por los demás y comportándonos de manera responsable con los miembros de la comunidad local.</div>"+
			//10
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_10_mex'> <b>Calidad:</b> desarrollamos una reputación de calidad, proporcionando servicios e información que cumplan y excedan las expectativas de calidad demandadas por los clientes.</div>"+
			//11
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_11_mex'> <b>Liderazgo:</b> lideramos con el ejemplo, acogemos y aceptamos el cambio fomentando la innovación.</div>"+
		
		//Slide Number
		"<div class='slideNumber'>012</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var organizacionAgencias_01_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Organização / <b>Agências</b></div>"+
		 
		//Go to market > Image
		"<div class='organizacionAgencias_img' id='organizacionAgencias_img'><img src='img/Induccion/Organizacion/img_reps.png'></div>"+
		
		//Textos
			//01
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_01'>Uma das <b>principais</b> prestadoras de serviço do <b>mercado farmacêutico</b> brasileiro;</div>"+
			//02
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_02'>Fundada e <b>administrada</b> por <b>profissionais renomados</b> nesse mercado;</div>"+
			//03
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_03'><b>Referência</b> em <b>Abordagem Médica</b> e <b>Execução em Loja</b>;</div>"+
		
			//04
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_04'>Com <b>mais de 200 projetos</b> desenvolvidos e <b>implementados</b> ao longo de 13 anos;</div>"+
			//05
		"<div class='organizacionAgencias_bullet' id='organizacionAgencias_bullet_05'>Para as <b>principais</b> indústrias e <b>companhias farmacêuticas</b>.</div>"+

		//Slide Number
		"<div class='slideNumber'>012</div>"+

	"" ;

	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + organizacionAgencias_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var organizacionAgencias_img = document.getElementById("organizacionAgencias_img") ;
			
			var organizacionAgencias_bullet_01_mex = document.getElementById("organizacionAgencias_bullet_01_mex") ;
			var organizacionAgencias_bullet_02_mex = document.getElementById("organizacionAgencias_bullet_02_mex") ;
			var organizacionAgencias_bullet_03_mex = document.getElementById("organizacionAgencias_bullet_03_mex") ;
			var organizacionAgencias_bullet_04_mex = document.getElementById("organizacionAgencias_bullet_04_mex") ;
			var organizacionAgencias_bullet_05_mex = document.getElementById("organizacionAgencias_bullet_05_mex") ;
			
			var organizacionAgencias_bullet_06_mex = document.getElementById("organizacionAgencias_bullet_06_mex") ;
			
			var organizacionAgencias_bullet_07_mex = document.getElementById("organizacionAgencias_bullet_07_mex") ;
			var organizacionAgencias_bullet_08_mex = document.getElementById("organizacionAgencias_bullet_08_mex") ;
			var organizacionAgencias_bullet_09_mex = document.getElementById("organizacionAgencias_bullet_09_mex") ;
			var organizacionAgencias_bullet_10_mex = document.getElementById("organizacionAgencias_bullet_10_mex") ;
			var organizacionAgencias_bullet_11_mex = document.getElementById("organizacionAgencias_bullet_11_mex") ;
					
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (organizacionAgencias_img , 1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			
			TweenMax.staggerFromTo ([organizacionAgencias_bullet_01_mex , organizacionAgencias_bullet_02_mex , organizacionAgencias_bullet_03_mex , organizacionAgencias_bullet_04_mex , organizacionAgencias_bullet_05_mex] , .5 , {css:{opacity:"0" , left:"175px"}} , {css:{opacity:"1" , left:"125px"}} , .25) ;
			TweenMax.staggerFromTo ([organizacionAgencias_bullet_06_mex , organizacionAgencias_bullet_07_mex , organizacionAgencias_bullet_08_mex , organizacionAgencias_bullet_09_mex , organizacionAgencias_bullet_10_mex , organizacionAgencias_bullet_11_mex] , .5 , {css:{opacity:"0" , left:"750px"}} , {css:{opacity:"1" , left:"700px"} , delay:1} , .25) ;
				
			/////////////////////////////////Exit animation
			function exit_organizacionAgencias_01_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var organizacionAgencias_img = document.getElementById("organizacionAgencias_img") ;
				
				var organizacionAgencias_bullet_01_mex = document.getElementById("organizacionAgencias_bullet_01_mex") ;
				var organizacionAgencias_bullet_02_mex = document.getElementById("organizacionAgencias_bullet_02_mex") ;
				var organizacionAgencias_bullet_03_mex = document.getElementById("organizacionAgencias_bullet_03_mex") ;
				var organizacionAgencias_bullet_04_mex = document.getElementById("organizacionAgencias_bullet_04_mex") ;
				var organizacionAgencias_bullet_05_mex = document.getElementById("organizacionAgencias_bullet_05_mex") ;
				
				var organizacionAgencias_bullet_06_mex = document.getElementById("organizacionAgencias_bullet_06_mex") ;
				
				var organizacionAgencias_bullet_07_mex = document.getElementById("organizacionAgencias_bullet_07_mex") ;
				var organizacionAgencias_bullet_08_mex = document.getElementById("organizacionAgencias_bullet_08_mex") ;
				var organizacionAgencias_bullet_09_mex = document.getElementById("organizacionAgencias_bullet_09_mex") ;
				var organizacionAgencias_bullet_10_mex = document.getElementById("organizacionAgencias_bullet_10_mex") ;
				var organizacionAgencias_bullet_11_mex = document.getElementById("organizacionAgencias_bullet_11_mex") ;
						
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				
				TweenMax.fromTo (organizacionAgencias_img , 1.5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([organizacionAgencias_bullet_01_mex , organizacionAgencias_bullet_02_mex , organizacionAgencias_bullet_03_mex , organizacionAgencias_bullet_04_mex , organizacionAgencias_bullet_05_mex] , .5 , {css:{opacity:"1" , left:"125px"}} , {css:{opacity:"0" , left:"175px"}} , .25) ;
				TweenMax.staggerFromTo ([organizacionAgencias_bullet_06_mex , organizacionAgencias_bullet_07_mex , organizacionAgencias_bullet_08_mex , organizacionAgencias_bullet_09_mex , organizacionAgencias_bullet_10_mex , organizacionAgencias_bullet_11_mex] , .5 , {css:{opacity:"1" , left:"725px"}} , {css:{opacity:"0" , left:"775px"}} , .25) ;
				
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
							menu_Induccion() ;
						break;
						
						case 1:
							organizacionAgencias_02() ;
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
				exit_organizacionAgencias_01_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_organizacionAgencias_01_mex() ;
			});

				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_organizacionAgencias_01_mex() ;
			});

				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_organizacionAgencias_01_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_organizacionAgencias_01_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_organizacionAgencias_01_mex() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_organizacionAgencias_01_mex() ;
			});
			
			/////////////////////////////////Flecha next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_organizacionAgencias_01_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_organizacionAgencias_mex_01.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + organizacionAgencias_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var organizacionAgencias_img = document.getElementById("organizacionAgencias_img") ;
			
			var organizacionAgencias_bullet_01 = document.getElementById("organizacionAgencias_bullet_01") ;
			var organizacionAgencias_bullet_02 = document.getElementById("organizacionAgencias_bullet_02") ;
			var organizacionAgencias_bullet_03 = document.getElementById("organizacionAgencias_bullet_03") ;
			
			var organizacionAgencias_bullet_04 = document.getElementById("organizacionAgencias_bullet_04") ;
			var organizacionAgencias_bullet_05 = document.getElementById("organizacionAgencias_bullet_05") ;
					
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (organizacionAgencias_img , 1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			
			TweenMax.staggerFromTo ([organizacionAgencias_bullet_01 , organizacionAgencias_bullet_02 , organizacionAgencias_bullet_03] , .5 , {css:{opacity:"0" , left:"175px"}} , {css:{opacity:"1" , left:"125px"}} , .25) ;
			TweenMax.staggerFromTo ([organizacionAgencias_bullet_04 , organizacionAgencias_bullet_05] , .5 , {css:{opacity:"0" , left:"775px"}} , {css:{opacity:"1" , left:"725px"} , delay:1} , .25) ;
				
			/////////////////////////////////Exit animation
			function exit_organizacionAgencias_01()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var organizacionAgencias_img = document.getElementById("organizacionAgencias_img") ;
				
				var organizacionAgencias_bullet_01 = document.getElementById("organizacionAgencias_bullet_01") ;
				var organizacionAgencias_bullet_02 = document.getElementById("organizacionAgencias_bullet_02") ;
				var organizacionAgencias_bullet_03 = document.getElementById("organizacionAgencias_bullet_03") ;
				
				var organizacionAgencias_bullet_04 = document.getElementById("organizacionAgencias_bullet_04") ;
				var organizacionAgencias_bullet_05 = document.getElementById("organizacionAgencias_bullet_05") ;
						
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				
				TweenMax.staggerFromTo ([organizacionAgencias_bullet_01 , organizacionAgencias_bullet_02 , organizacionAgencias_bullet_03] , .5 , {css:{opacity:"1" , left:"125px"}} , {css:{opacity:"0" , left:"175px"}} , .25) ;
				TweenMax.staggerFromTo ([organizacionAgencias_bullet_04 , organizacionAgencias_bullet_05] , .5 , {css:{opacity:"1" , left:"725px"}} , {css:{opacity:"0" , left:"775px"}} , .25) ;
				
				TweenMax.fromTo (organizacionAgencias_img , 1.5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , onComplete:ChangePage}) ;
				
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
							menu_Induccion() ;
						break;
						
						case 1:
							organizacionAgencias_02() ;
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
				exit_organizacionAgencias_01() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_organizacionAgencias_01() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_organizacionAgencias_01() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_organizacionAgencias_01() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_organizacionAgencias_01() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_organizacionAgencias_01() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_organizacionAgencias_01() ;
			});
			
			/////////////////////////////////Flecha next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_organizacionAgencias_01() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_organizacionAgencias_bra_01.mp3' ;
	
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
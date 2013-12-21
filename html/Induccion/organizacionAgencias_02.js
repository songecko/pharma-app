<!--Organización Agencias 02-->
function organizacionAgencias_02()
{
	CleanScreen() ;
	
	gotoSlide = 'organizacionAgencias_02' ;
	
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
		//"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
			
	"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////México
	var organizacionAgencias_02_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Organización / <b>Agencias</b></div>"+
		
		//Rectangles 01
			//01
		"<div class='rectangle_01' id='rectangle_01_01_mex' onmouseover='rollOver_puesto_01_mex()'>Gerente Comercial</div>"+
				
		//Rectangles 02
			//01
		"<div class='rectangle_02' id='rectangle_02_01_mex' onmouseover='rollOver_puesto_02_mex()'>Gerente de Ventas</div>"+
			//02
		"<div class='rectangle_02' id='rectangle_02_02_mex' onmouseover='rollOver_puesto_03_mex()'>Gerente de Capacitación</div>"+
			//03
		"<div class='rectangle_02' id='rectangle_02_03_mex' onmouseover='rollOver_puesto_04_mex()'>Gerente de Cuentas Clave</div>"+
		
		//Rectangles 03
			//01
		"<div class='rectangle_04' id='rectangle_03_01_mex' onmouseover='rollOver_puesto_05_mex()'>Supervisores</div>"+
			//02
		"<div class='rectangle_04' id='rectangle_03_02_mex' onmouseover='rollOver_puesto_06_mex()'>KAMs Cadenas Nacionales</div>"+
			//03
		"<div class='rectangle_04' id='rectangle_03_03_mex' onmouseover='rollOver_puesto_07_mex()'>KAMs Cadenas Regionales y Locales</div>"+

		//Rectangles 04
			//01
		"<div class='rectangle_04' id='rectangle_04_01_mex' onmouseover='rollOver_puesto_08_mex()'>Farmasesores</div>"+

		//Flechas
			//01
		"<div id='littleArrow_01_mex'><img src='img/Induccion/Organizacion/img_littleArrows_mex_01.png'/></div>"+
			//02
		"<div id='littleArrow_02_mex'><img src='img/Induccion/Organizacion/img_littleArrows_mex_02.png'/></div>"+
			//03
		"<div id='littleArrow_03_mex'><img src='img/Induccion/Organizacion/img_littleArrows_mex_03.png'/></div>"+
		
		/*General BlackScreen*/
		"<div class='blackScreen' id='blackScreen'>"+
			//General Container
			"<div class='rol_gralContainer' id='rol_gralContainer'>"+
				//General Container
				"<div class='rol_backContent' id='rol_backContent'>"+
					//Puesto
					"<div class='rol_Puesto' id='rol_Puesto'></div>"+
					//Actividades
					"<div class='rol_Actividades' id='rol_Actividades'></div>"+
					//Cerrar
					"<div class='rol_cerrar' id='rol_cerrar' onmouseover='rollOver_rol_cerrar()'>cerrar</div>"+				
				"</div>"+
				
				//Shadow
				"<div class='rol_shadowContainer' id='rol_shadowContainer'>"+
					"<img src='img/img_dobleShadow.png' width='910'>"+
				"</div>"+
			"</div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>013</div>"+

	"" ;

	/////////////////////////////////Brasil
	var organizacionAgencias_02_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Organização / <b>Agências</b></div>"+
		
		//Rectangles 01
			//01
		"<div class='rectangle_01' id='rectangle_01_01' onmouseover='rollOver_puesto_01()'>Gerente Nacional</div>"+

		
		//Rectangles 02
			//01
		"<div class='rectangle_02' id='rectangle_02_01' onmouseover='rollOver_puesto_02()'>Gerente<br/>Regionais</div>"+
			//03
		"<div class='rectangle_02' id='rectangle_02_02' onmouseover='rollOver_puesto_03()'>Gerente<br/>Merchandising</div>"+
			//04
		"<div class='rectangle_02' id='rectangle_02_03' onmouseover='rollOver_puesto_04()'>Gerente do<br/>Treinamento</div>"+
		
		//Rectangles 03
			//01
		"<div class='rectangle_03' id='rectangle_03_01' onmouseover='rollOver_puesto_05()'>Supervisores<br/>Coordenadora de Contas</div>"+
			//02
		"<div style='left:500px;' class='rectangle_03' id='rectangle_03_02' onmouseover='rollOver_puesto_06()'>Coordenadores de Merchandising</div>"+
			//02a
		"<div class='rectangle_03' id='rectangle_03_02a' onmouseover='rollOver_puesto_06a()'>RV’s Espelho</div>"+
			//03
		"<div class='rectangle_03' id='rectangle_03_03' onmouseover='rollOver_puesto_07()'>Consultoras de Produtos<br/>Farmacêuticos</div>"+
		
		//Rectangles 04
			//01
		"<div class='rectangle_04' id='rectangle_04_01' onmouseover='rollOver_puesto_08()'>Representantes</div>"+
			//02
		"<div style='left:500px;' class='rectangle_04' id='rectangle_04_02' onmouseover='rollOver_puesto_09()'>Promotor de<br/>Merchandising</div>"+
		
		//Flechas
			//01
		"<div id='littleArrow_01'><img src='img/Induccion/Organizacion/img_littleArrows_bra_01.png'/></div>"+
			//02
		"<div id='littleArrow_02'><img src='img/Induccion/Organizacion/img_littleArrows_bra_02.png'/></div>"+
			//03
		"<div id='littleArrow_03'><img src='img/Induccion/Organizacion/img_littleArrows_bra_03.png'/></div>"+
		
		/*General BlackScreen*/
		"<div class='blackScreen' id='blackScreen'>"+
			//General Container
			"<div class='rol_gralContainer' id='rol_gralContainer'>"+
				//General Container
				"<div class='rol_backContent' id='rol_backContent'>"+
					//Puesto
					"<div class='rol_Puesto' id='rol_Puesto'></div>"+
					//Actividades
					"<div class='rol_Actividades' id='rol_Actividades'></div>"+
					//Cerrar
					"<div class='rol_cerrar' id='rol_cerrar' onmouseover='rollOver_rol_cerrar()'>fechar</div>"+				
				"</div>"+
				
				//Shadow
				"<div class='rol_shadowContainer' id='rol_shadowContainer'>"+
					"<img src='img/img_dobleShadow.png' width='910'>"+
				"</div>"+
			"</div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>013</div>"+

	"" ;
	
	/**********************************************
	Variables
	**********************************************/
	var organizacionPuesto = 0 ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + organizacionAgencias_02_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var rectangle_01_01_mex = document.getElementById("rectangle_01_01_mex") ;
			
			var rectangle_02_01_mex = document.getElementById("rectangle_02_01_mex") ;
			var rectangle_02_02_mex = document.getElementById("rectangle_02_02_mex") ;
			var rectangle_02_03_mex = document.getElementById("rectangle_02_03_mex") ;
			
			var rectangle_03_01_mex = document.getElementById("rectangle_03_01_mex") ;
			var rectangle_03_02_mex = document.getElementById("rectangle_03_02_mex") ;
			var rectangle_03_03_mex = document.getElementById("rectangle_03_03_mex") ;
			
			var rectangle_04_01_mex = document.getElementById("rectangle_04_01_mex") ;
			
			var littleArrow_01_mex = document.getElementById("littleArrow_01_mex") ;
			var littleArrow_02_mex = document.getElementById("littleArrow_02_mex") ;
			var littleArrow_03_mex = document.getElementById("littleArrow_03_mex") ;
						
			TweenMax.staggerFromTo ([rectangle_01_01_mex , rectangle_02_01_mex , rectangle_02_02_mex , rectangle_02_03_mex , rectangle_03_01_mex , rectangle_03_02_mex , rectangle_03_03_mex , rectangle_04_01_mex] , .25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .15) ;
			
			TweenMax.fromTo (littleArrow_01_mex , .5 , {css:{opacity:"0" , top:"300px"}} , {css:{opacity:"1" , top:"350px"} , delay:.5}) ;
			TweenMax.fromTo (littleArrow_02_mex , .5 , {css:{opacity:"0" , top:"455px"}} , {css:{opacity:"1" , top:"495px"} , delay:1}) ;
			TweenMax.fromTo (littleArrow_03_mex , .5 , {css:{opacity:"0" , top:"615px"}} , {css:{opacity:"1" , top:"665px"} , delay:1.5}) ;
				
			/////////////////////////////////Exit animation
			function exit_organizacionAgencias_02_mex()
			{
				var rectangle_01_01_mex = document.getElementById("rectangle_01_01_mex") ;
			
				var rectangle_02_01_mex = document.getElementById("rectangle_02_01_mex") ;
				var rectangle_02_02_mex = document.getElementById("rectangle_02_02_mex") ;
				var rectangle_02_03_mex = document.getElementById("rectangle_02_03_mex") ;
				
				var rectangle_03_01_mex = document.getElementById("rectangle_03_01_mex") ;
				var rectangle_03_02_mex = document.getElementById("rectangle_03_02_mex") ;
				var rectangle_03_03_mex = document.getElementById("rectangle_03_03_mex") ;
				
				var rectangle_04_01_mex = document.getElementById("rectangle_04_01_mex") ;
				
				var littleArrow_01_mex = document.getElementById("littleArrow_01_mex") ;
				var littleArrow_02_mex = document.getElementById("littleArrow_02_mex") ;
				var littleArrow_03_mex = document.getElementById("littleArrow_03_mex") ;
				
				TweenMax.killTweensOf ([rectangle_01_01_mex , rectangle_02_01_mex , rectangle_02_02_mex , rectangle_02_03_mex , rectangle_03_01_mex , rectangle_03_02_mex , rectangle_03_03_mex , rectangle_04_01_mex , littleArrow_01_mex , littleArrow_02_mex , littleArrow_03_mex]) ;
							
				TweenMax.staggerFromTo ([rectangle_01_01_mex , rectangle_02_01_mex , rectangle_02_02_mex , rectangle_02_03_mex , rectangle_03_01_mex , rectangle_03_02_mex , rectangle_03_03_mex , rectangle_04_01_mex] , .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .15) ;
				
				TweenMax.fromTo ([littleArrow_01_mex , littleArrow_02_mex , littleArrow_03_mex] , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
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
							organizacionAgencias_01() ;
						break;
					}
				}
			}

			/////////////////////////////////Call BlackScreen
			function call_blackScreen_mex()
			{
				var blackScreen = document.getElementById("blackScreen") ;
				blackScreen.style.left = '0px' ;
				
				var rol_Puesto = document.getElementById("rol_Puesto") ;
				var rol_Actividades = document.getElementById("rol_Actividades") ;
				var rol_cerrar = document.getElementById("rol_cerrar") ;
				
				//Adding Content
				switch(organizacionPuesto)
				{
					case 1:
						rol_Puesto.innerHTML = 'Gerente Comercial<br/>Funciones:' ;
						rol_Actividades.innerHTML = 'Gerenciamiento y acompañamiento de los objetivos del proyecto en general.<br/><br/>Lidera estratégicamente los dos grandes equipos: Sell in y sell out.<br/><br/>Es el líder que asegura que las acciones de agencia se ejecuten internamente para agilizar la operación de los equipos de venta.<br/><br/>Se responsabiliza del análisis del programa como un todo, garantizando la identificación de oportunidades de negocio y diseña las propuestas de negocio para capitalizar dichas oportunidades.<br/><br/>Es el encargado de realizar los reportes internos a P&G acerca de resultados y procesos.' ;
						
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						auLocucion.src = '' ;
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_gerenteComercial_mex.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
						
					break ;
					
					case 2:
						rol_Puesto.innerHTML = 'Gerente de Ventas<br/>Funciones:' ;
						rol_Actividades.innerHTML = 'Lidera estratégicamente a los equipos de los 7 supervisores a nivel nacional.<br/><br/>Se  asegura de ejecutar en tienda los planes acordados con los clientes asignados<br/><br/>e asegura que el equipo cumpla con los kpi´s asignados: visitas, ventas, distribución, visibilidad y recomendación.<br/><br/>Se asegura del entrenamiento constante del equipo de merchaindising.<br/><br/>Se asegura de tomar acciones proactivas y correctivas sobre el equipo de merchandising.<br/><br/>Se encarga de hacer un reporte mensual de resultados de sell out.<br/><br/>Se encarga que los procesos internos: envios, presupuestos de capacitación entre otros, estén totalmente alineados.<br/><br/>' ;
						
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						auLocucion.src = '' ;
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_gerenteVentas_mex.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
						
					break ;
					
					case 3:
						rol_Puesto.innerHTML = 'Gerente de Capacitación<br/>Funciones:' ;
						rol_Actividades.innerHTML = 'Liderar equipe garantindo engajamento de farmacêuticos e balconistas via treinamento técnico.<br/><br/>Entender necessidades da equipe (100% da estrutura), capacitar e desenvolver a equipe, Coordenando todos os treinamentos a serem passados. Deve estar apto (a), inclusive, a buscar treinamentos regionais, traduzi-los e torná-los aplicáveis à nossa realidade.<br/><br/>Colaborar para que a equipe mantenha-se treinada, capacitada, entregando resultados e motivada.' ;
						
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						auLocucion.src = '' ;
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_gerenteCapacitacion_mex.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
						
					break ;
					
					case 4:
						rol_Puesto.innerHTML = 'Gerente de Cuentas Clave<br/>Funciones:' ;
						rol_Actividades.innerHTML = 'Lidera estratégicamente a los representantes de ventas de cadenas directas e indirectas.<br/><br/>Es el enlace entre los KAM de P&G y los representantes de venta, se asegura de realizar el empuje para obtener las herramientas necesarias para abordar a los clientes.<br/><br/>Se asegura de planear y ejecutar a través de sus equipos los planes de crecimiento anuales con los clientes.<br/><br/>Se asegura que sus equipos den tracking puntual a los planes cerrados con los clientes.<br/><br/>Se asegura de comunicar al equipo de merchandising las acciones negociadas con los clientes.<br/><br/>' ;
						
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						auLocucion.src = '' ;
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_gerenteCuentasClaves_mex.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
					break ;
					
					case 5:
						rol_Puesto.innerHTML = 'Supervisores<br/>Funciones:' ;
						rol_Actividades.innerHTML = 'Lidera estratégicamente al equipo de farmaasesores a su cargo.<br/><br/>Se  asegura de ejecutar en tienda los planes acordados con los clientes asignados.<br/><br/>Se asegura que el equipo cumpla con los kpi´s asignados: visitas, ventas, distribución, visibilidad y recomendación.<br/><br/>Se asegura del entrenamiento constante del equipo de merchaindising.<br/><br/>Se asegura de tomar acciones proactivas y correctivas sobre el equipo de merchandising.<br/><br/>Se encarga de evaluar en cada visita a sus farma asesores, diagnosticar el desempeño de los mismos , diseñar y dar seguimiento a los planes de acción  individuales acordados.' ;
						
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						auLocucion.src = '' ;
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_Supervisores_mex.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
					break ;
					
					case 6:
						rol_Puesto.innerHTML = 'Key Account<br/>Funciones:' ;
						rol_Actividades.innerHTML = 'Es el encargado de gestionar directa o indirectamente a un cliente.<br/><br/>Es el encargado de diseñar, planear, presentar y dar seguimiento a los planes acordados por cada cliente.<br/><br/>Es el encargado de gestionar los planes a través de un tercero (mayorista) asegurando la perfecta ejecución del mismo.<br/><br/>Es el encargado de dar tracking  a los planes para gestionar los pagos de acuerdo a desempeño y ejecución de acuerdos.<br/><br/>Es el encargado de diseñar y ejecutar las capacitaciones con los clientes asignados.' ;
						
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						auLocucion.src = '' ;
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_KeyAccount_mex.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
					break ;
					
					case 7:
						rol_Puesto.innerHTML = 'Farmasesor<br/>Funciones:' ;
						rol_Actividades.innerHTML = 'Es el responsable de la ejecución de los planes por cada punto de venta.<br/><br/>Es el responsable de visitar 8 farmacias diarias de acuerdo a su universo asignado.<br/><br/>Es el responsable de capacitar en “recomendación” a todos los dependientes de farmacias de los puntos de venta asignados por ruta.<br/><br/>Es el responsable de ejecutar los materiales de punto de venta que le hayan sido asignados.<br/><br/>Es el responsable de asegurar la existencia adecuada y de acuerdo a demanda de todos los skus del portafolio en cada uno de sus puntos de venta<br/><br/>Es es responsable de generar pedidos, sugeridos y recomendaciones de existencia de producto en cada uno de sus puntos de venta.' ;
						
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						auLocucion.src = '' ;
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_Farmasesor_mex.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
						
					break ;
				}
				
				//Animation		
				TweenMax.fromTo (blackScreen , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
				TweenMax.staggerFromTo ([rol_Puesto , rol_Actividades , rol_cerrar ] , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:1 } , .25) ;
			}
		
			/////////////////////////////////Exit BlackScreen
			function exit_blackScreen_mex()
			{
				var blackScreen = document.getElementById("blackScreen") ;
				
				var rol_Puesto = document.getElementById("rol_Puesto") ;
				var rol_Actividades = document.getElementById("rol_Actividades") ;
				var rol_cerrar = document.getElementById("rol_cerrar") ;
				
				TweenMax.staggerFromTo ([rol_Puesto , rol_Actividades , rol_cerrar ] , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .25) ;
				
				TweenMax.fromTo (blackScreen , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , delay:1 , onComplete:moveScreen}) ;
				
				auLocucion.src = '' ;
				
				function moveScreen()
				{
					document.getElementById("blackScreen").style.left = '1300px' ;
				}
			}
			
			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_organizacionAgencias_02_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_organizacionAgencias_02_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_organizacionAgencias_02_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_organizacionAgencias_02_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_organizacionAgencias_02_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_organizacionAgencias_02_mex() ;
			});
			
			/////////////////////////////////Cerrar BlackScreen
			$('#rol_cerrar').click(function() {
				exit_blackScreen_mex() ;
			});
						
			/////////////////////////////////Rectangles Actions
				//01
			$('#rectangle_01_01_mex').click(function() {
				organizacionPuesto = 1 ;
				call_blackScreen_mex() ;
			});
			
				//02
			$('#rectangle_02_01_mex').click(function() {
				organizacionPuesto = 2 ;
				call_blackScreen_mex() ;
			});
			
				//03
			$('#rectangle_02_02_mex').click(function() {
				organizacionPuesto = 3 ;
				call_blackScreen_mex() ;
			});
			
				//04
			$('#rectangle_02_03_mex').click(function() {
				organizacionPuesto = 4 ;
				call_blackScreen_mex() ;
			});
			
				//05
			$('#rectangle_03_01_mex').click(function() {
				organizacionPuesto = 5 ;
				call_blackScreen_mex() ;
			});
			
				//06
			$('#rectangle_03_02_mex , #rectangle_03_03_mex').click(function() {
				organizacionPuesto = 6 ;
				call_blackScreen_mex() ;
			});
			
				//07
			$('#rectangle_04_01_mex').click(function() {
				organizacionPuesto = 7 ;
				call_blackScreen_mex() ;
			});

			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_organizacionAgencias_02_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_organizacionAgencias_mex_02.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + organizacionAgencias_02_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var rectangle_01_01 = document.getElementById("rectangle_01_01") ;
			
			var rectangle_02_01 = document.getElementById("rectangle_02_01") ;
			var rectangle_02_02 = document.getElementById("rectangle_02_02") ;
			var rectangle_02_03 = document.getElementById("rectangle_02_03") ;
			
			var rectangle_03_01 = document.getElementById("rectangle_03_01") ;
			var rectangle_03_02 = document.getElementById("rectangle_03_02") ;
			var rectangle_03_02a = document.getElementById("rectangle_03_02a") ;
			var rectangle_03_03 = document.getElementById("rectangle_03_03") ;
			
			var rectangle_04_01 = document.getElementById("rectangle_04_01") ;
			var rectangle_04_02 = document.getElementById("rectangle_04_02") ;
			
			var littleArrow_01 = document.getElementById("littleArrow_01") ;
			var littleArrow_02 = document.getElementById("littleArrow_02") ;
			var littleArrow_03 = document.getElementById("littleArrow_03") ;
						
			TweenMax.staggerFromTo ([rectangle_01_01 , rectangle_02_01 , rectangle_02_02 , rectangle_02_03 , rectangle_03_01 , rectangle_03_02 , rectangle_03_02a , rectangle_03_03 , rectangle_04_01 , rectangle_04_02] , .25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .15) ;
			
			TweenMax.fromTo (littleArrow_01 , .5 , {css:{opacity:"0" , top:"300px"}} , {css:{opacity:"1" , top:"350px"} , delay:.5}) ;
			TweenMax.fromTo (littleArrow_02 , .5 , {css:{opacity:"0" , top:"455px"}} , {css:{opacity:"1" , top:"495px"} , delay:1}) ;
			TweenMax.fromTo (littleArrow_03 , .5 , {css:{opacity:"0" , top:"605px"}} , {css:{opacity:"1" , top:"655px"} , delay:1.5}) ;
				
			/////////////////////////////////Exit animation
			function exit_organizacionAgencias_02()
			{
				var rectangle_01_01 = document.getElementById("rectangle_01_01") ;
				
				var rectangle_02_01 = document.getElementById("rectangle_02_01") ;
				var rectangle_02_02 = document.getElementById("rectangle_02_02") ;
				var rectangle_02_03 = document.getElementById("rectangle_02_03") ;
				
				var rectangle_03_01 = document.getElementById("rectangle_03_01") ;
				var rectangle_03_02 = document.getElementById("rectangle_03_02") ;
				var rectangle_03_02a = document.getElementById("rectangle_03_02a") ;
				var rectangle_03_03 = document.getElementById("rectangle_03_03") ;
				
				var rectangle_04_01 = document.getElementById("rectangle_04_01") ;
				var rectangle_04_02 = document.getElementById("rectangle_04_02") ;
				
				var littleArrow_01 = document.getElementById("littleArrow_01") ;
				var littleArrow_02 = document.getElementById("littleArrow_02") ;
				var littleArrow_03 = document.getElementById("littleArrow_03") ;
							
				TweenMax.staggerFromTo ([rectangle_01_01 ,  rectangle_02_01 , rectangle_02_02 , rectangle_02_03 , rectangle_03_01 , rectangle_03_02 , rectangle_03_02a , rectangle_03_03 , rectangle_04_01 , rectangle_04_02] , .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .15) ;
				
				TweenMax.fromTo ([littleArrow_01 , littleArrow_02 , littleArrow_03] , 1 , {css:{opacity:"1" , left:"380px"}} , {css:{opacity:"0" , left:"430px"} , onComplete:ChangePage}) ;
				
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
							organizacionAgencias_01() ;
						break ;
					}
				}
			}
			
			/////////////////////////////////Call BlackScreen
			function call_blackScreen()
			{
				var blackScreen = document.getElementById("blackScreen") ;
				blackScreen.style.left = '0px' ;
				
				var rol_Puesto = document.getElementById("rol_Puesto") ;
				var rol_Actividades = document.getElementById("rol_Actividades") ;
				var rol_cerrar = document.getElementById("rol_cerrar") ;
				
				//Adding Content
				switch(organizacionPuesto)
				{
					case 1:
						rol_Puesto.innerHTML = 'Gerente Nacional<br/>Funções:' ;
						rol_Actividades.innerHTML = 'Gerenciamento e acompanhamento dos objetivos de todo o projeto, em todos os critérios de avaliação.<br/><br/>Responsável pelo treinamento, acompanhamento e avaliação dos gerentes regionais, gerente de treinamento, supervisores e funcionários internos (back Office).<br/><br/>Responsável pela análise do programa como um todo, garantindo identificação de oportunidades e desenho de propostas de ajustes estratégicos.<br/><br/>Reporte à P&G de informativos / relatórios sobre os resultados, de acordo com os processos alinhados ou solicitação pontual da P&G.<br/><br/>' ;
						
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						
						auLocucion.src = '' ;
						
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_gerenteNacional_bra.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
			
					break ;
					
					case 2:
						rol_Puesto.innerHTML = 'Gerente Regionais<br/>Funções:' ;
						rol_Actividades.innerHTML = 'Gerenciamento e acompanhamento dos objetivos de demanda, positivação e visibilidade, nos setores sob sua responsabilidade.<br/><br/>Responsável pelo treinamento, acompanhamento e avaliação dos supervisores e RV’s sob sua responsabilidade.<br/><br/>Responsável pela análise dos setores sob sua responsabilidade, garantindo identificação de oportunidades e desenho de propostas de ajustes estratégicos.<br/><br/>Reporte ao gerente geral de informativos / relatórios sobre os resultados, de acordo com os processos alinhados ou solicitação pontual da P&G.' ;
						
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						
						auLocucion.src = '' ;
						
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_gerenteRegional_bra.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
						
					break ;
					
					case 3:
						rol_Puesto.innerHTML = 'Gerente de Merchandising Diretas e RV’s-Espelhos<br/>Funções:' ;
						rol_Actividades.innerHTML = 'Liderar equipe das Redes Diretas (Coordenadores / Promotores de Merchandising), garantindo correta exposição dos nossos produtos em lojas (100% do MOP, além de pontos adicionais, quando possível).<br/><br/>Gerenciar o trabalho dos RV’s-espelhos, no que diz respeito à gestão de estoques (nos CDs e nas lojas) e pedidos (até que sejam entregues efetivamente), criação de relacionamento junto aos clientes (centrais e CDs).<br/><br/>Liderar processo de revisão contínua de parâmetros de abastecimento das lojas das redes, assim como análises de venda zero (Rv’s-espelhos Redes).<br/><br/>Gerenciar ponte de informações sobre pedidos e negociações da Rep’s para garantir 100% de nível de serviço do Atacado; garantir estreitamento de relacionamento com as regionais dos atacados.<br/><br/>Garantir envio de Relatório Semanal de Demanda e Estoque, assim como envio mensal do MOP de OTC para as Redes.' ;
						
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						
						auLocucion.src = '' ;
				
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_gerenteMerchandising_bra.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
						
					break ;
					
					case 4:
						rol_Puesto.innerHTML = 'Gerente de Treinamento<br/>Funções:' ;
						rol_Actividades.innerHTML = 'Liderar equipe garantindo engajamento de farmacêuticos e balconistas via treinamento técnico.<br/><br/>Entender necessidades da equipe (100% da estrutura), capacitar e desenvolver a equipe, Coordenando todos os treinamentos a serem passados. Deve estar apto (a), inclusive, a buscar treinamentos regionais, traduzi-los e torná-los aplicáveis à nossa realidade.<br/><br/>Colaborar para que a equipe mantenha-se treinada, capacitada, entregando resultados e motivada.' ;
												
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						
						auLocucion.src = '' ;
				
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_gerenteEntrenamiento_bra.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
						
					break ;
					
					case 5:
						rol_Puesto.innerHTML = 'Supervisores<br/>Funções:' ;
						rol_Actividades.innerHTML = 'Responsável por entregar os objetivos de demanda, positivação e visibilidade de seus setores.<br/><br/>Supervisão e avaliação das respectivas equipes de representantes de demanda, conforme definição geográfica, incluindo treinamento e capacitação, controle administrativos, preenchimento dos relatórios padronizados e atendimento às necessidades de entrega de pesquisas ou informações específicas de ações em aloja, em tempo hábil e com acuracidade, conforme especificações da solicitação.<br/><br/>Trabalhar para que a equipe de representantes esteja suficientemente planejada e com as ferramentas corretas em mãos para entregar seus objetivos, nos três critérios citados acima.' ;
												
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						
						auLocucion.src = '' ;
				
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_Supervisores_bra.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
						
					break ;
					
					case 6:
						rol_Puesto.innerHTML = 'Coordenador de Merchandising<br/>Funções:' ;
						rol_Actividades.innerHTML = 'Responsável pelas atividades de promoção de vendas e merchandising em todos os clientes que compõem seu território, destacando-se precificação, reposição, colocação de material promocional, execução de pontos adicionais de exposição e apresentação técnica aos balconistas (benefícios dos produtos e campanhas de mídia).<br/><br/>Treinar, capacitar e acompanhar o trabalho dos promotores de merchandising, garantindo<br/><br/>&nbsp;&nbsp;&nbsp;1) Excelência na execução do trabalho proposto;<br/><br/>&nbsp;&nbsp;&nbsp;2) Acuracidade na leitura de lojas a ser feita pelos mesmos.<br/><br/>Estar 90% do tempo do tempo dedicado ao acompanhamento de campo.' ;
												
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						
						auLocucion.src = '' ;
				
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_coordMerchandising_bra.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
						
					break ;
					
					case 10:
						rol_Puesto.innerHTML = 'RV’s Espelho:' ;
						rol_Actividades.innerHTML = '' ;
												
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						
						auLocucion.src = '' ;
				
						auLocucion.src = 'audio/Induccion/.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
						
					break ;
					
					case 7:
						rol_Puesto.innerHTML = 'Consultoras de Produtos Farmacêuticos<br/>Funções:' ;
						rol_Actividades.innerHTML = 'Divulgar benefícios dos produtos de nossas marcas e campanhas diferenciadas de mídia aos farmacêuticos e balconistas de uma lista de lojas / roteiro pré-estipulado.<br/><br/>Buscar agendas e estar presentes e encontros e reuniões de funcionários de redes, a fim de promover treinamento técnico da nossa linha a estes grupos.<br/><br/>Garantir conhecimento profundo sobre os benefícios de nossos produtos por parte de toda a equipe do Programa de Farmácias.' ;
						
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						
						auLocucion.src = '' ;
				
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_Consultores_bra.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
						
					break ;
					
					case 8:
						rol_Puesto.innerHTML = 'Representantes<br/>Funções:' ;
						rol_Actividades.innerHTML = 'Responsável por executar a demanda de produtos estipulados pela P&G, garantindo o mix e a distribuição corretos e o cumprimento dos objetivos desenhados para cada um dos clientes, para cada uma das marcas.<br/><br/>Seguir rigorosamente o roteiro de visitação estipulado, os procedimentos básicos de cada visita e a burocracia e as regras comerciais / investimentos estabelecidos pela P&G.<br/><br/>Responsável pelas atividades de promoção de demanda e merchandising em todos os clientes que compõem seu território, destacando-se precificação, reposição, colocação de material promocional, execução de pontos adicionais de exposição e apresentação técnica aos balconistas (benefícios dos produtos e campanhas de mídia).' ;
						
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						
						auLocucion.src = '' ;
				
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_Representantes_bra.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}
						
						
					break ;
					
					case 9:
						rol_Puesto.innerHTML = 'Promotor de Merchandising<br/>Funções:' ;
						rol_Actividades.innerHTML = 'Responsável pelas atividades de merchandising em todos os clientes que compõem seu território, entre elas, destacando-se precificação, reposição, implementação de materiais promocionais e execução de pontos extras de exposição, garantindo visibilidade, organização e limpeza dos produtos da linha OTC nas lojas visitadas.<br/><br/>Garantir 100% de implementação do Mapa Operacional de cada uma das redes (refere-se aos pontos de contato e materiais POP negociados na Central).<br/><br/>Buscar pontos extras adicionais (ao que foi negociado), sempre que possível.<br/><br/>Cumprir todos os procedimentos básicos da visita, utilizando as ferramentas apresentadas durante o treinamento.<br/><br/>Divulgar os benefícios de nossas marcas junto aos farmacêuticos e balconistas.' ;
						
						/**********************************************
						Locution Load
						***********************************************/
						var auLocucion = document.getElementById("auLocucion") ;
						
						auLocucion.src = '' ;
				
						auLocucion.src = 'audio/Induccion/au_organizacionAgencias_promotorMerchandising_bra.mp3' ;
				
						if (( auFlagLoc % 2 ) != 0)
						{
							auLocucion.play() ;
						}

						
					break ;
				}
				
				//Animation		
				TweenMax.fromTo (blackScreen , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
				TweenMax.staggerFromTo ([rol_Puesto , rol_Actividades , rol_cerrar ] , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:1 } , .25) ;
			}
		
			/////////////////////////////////Exit BlackScreen
			function exit_blackScreen()
			{
				var blackScreen = document.getElementById("blackScreen") ;
				
				var rol_Puesto = document.getElementById("rol_Puesto") ;
				var rol_Actividades = document.getElementById("rol_Actividades") ;
				var rol_cerrar = document.getElementById("rol_cerrar") ;
				
				TweenMax.staggerFromTo ([rol_Puesto , rol_Actividades , rol_cerrar ] , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .25) ;
				
				TweenMax.fromTo (blackScreen , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , delay:1 , onComplete:moveScreen}) ;
				
				auLocucion.src = '' ;
				
				function moveScreen()
				{
					document.getElementById("blackScreen").style.left = '1300px' ;
				}
			}
			
			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_organizacionAgencias_02() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_organizacionAgencias_02() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_organizacionAgencias_02() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_organizacionAgencias_02() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_organizacionAgencias_02() ;
			});
			
			/////////////////////////////////Cerrar BlackScreen
			$('#rol_cerrar').click(function() {
				exit_blackScreen() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_organizacionAgencias_02() ;
			});
			
			/////////////////////////////////Rectangles Actions
				//01
			$('#rectangle_01_01').click(function() {
				organizacionPuesto = 1 ;
				call_blackScreen() ;
			});
			
				//02
			$('#rectangle_02_01').click(function() {
				organizacionPuesto = 2 ;
				call_blackScreen() ;
			});
			
				//03
			$('#rectangle_02_02').click(function() {
				organizacionPuesto = 3 ;
				call_blackScreen() ;
			});
			
				//04
			$('#rectangle_02_03').click(function() {
				organizacionPuesto = 4 ;
				call_blackScreen() ;
			});
			
				//05
			$('#rectangle_03_01').click(function() {
				organizacionPuesto = 5 ;
				call_blackScreen() ;
			});
			
				//06
			$('#rectangle_03_02').click(function() {
				organizacionPuesto = 6 ;
				call_blackScreen() ;
			});
			
				//06a
			$('#rectangle_03_02a').click(function() {
				organizacionPuesto = 10 ;
				call_blackScreen() ;
			});
			
				//07
			$('#rectangle_03_03').click(function() {
				organizacionPuesto = 7 ;
				call_blackScreen() ;
			});
		
				//08
			$('#rectangle_04_01').click(function() {
				organizacionPuesto = 8 ;
				call_blackScreen() ;
			});
			
				//09
			$('#rectangle_04_02').click(function() {
				organizacionPuesto = 9 ;
				call_blackScreen() ;
			});
		
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {						
				pagChange = 1 ;
				exit_organizacionAgencias_02() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_organizacionAgencias_bra_02.mp3' ;
	
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
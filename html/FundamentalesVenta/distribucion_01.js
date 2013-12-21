<!--Planilla de Objetivos-->
function distribucion_01()
{
	CleanScreen() ;
	
	gotoSlide = 'distribucion_01' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_fundamentalesVentas.png' onmouseover='rollOver_ico_04()' /></div>"+		
		
		//Menu Herramientas
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_fundamentalesVentas_distribucion.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
	var distribucion_01_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'><b>Distribución</b></div>"+
		
		
		//Anaqueles
			//Vick
		"<div class='materialVisibilidad_img' id='distribucion_01_img'><img src='img/Fundamentales/Distribucion/distribucion_vick_anaquel.png'/></div>"+
			//Metamucil
		"<div class='materialVisibilidad_img' id='distribucion_02_img'><img src='img/Fundamentales/Distribucion/distribucion_metamucil_anaquel.png'/></div>"+
			//Pepto-Bismol
		"<div class='materialVisibilidad_img' id='distribucion_03_img'><img src='img/Fundamentales/Distribucion/distribucion_peptoBismol_anaquel.png'/></div>"+
			//Clearblue
		"<div class='materialVisibilidad_img' id='distribucion_04_img'><img src='img/Fundamentales/Distribucion/distribucion_clearblue_anaquel.png'/></div>"+
		
		
		//Flechas
			//Vick
		"<div class='materialVisibilidad_img' id='img_flechasVicks'><img src='img/Fundamentales/Distribucion/img_distribucion_vick_over.png'/></div>"+
			//Metamucil
		"<div class='materialVisibilidad_img' id='img_flechasMetamucil'><img src='img/Fundamentales/Distribucion/img_distribucion_metamucil_over.png'/></div>"+
			//Pepto-Bismol
		"<div class='materialVisibilidad_img' id='img_flechasPepto'><img src='img/Fundamentales/Distribucion/img_distribucion_peptoBismol_over.png'/></div>"+
			//Clearblue
		"<div class='materialVisibilidad_img' id='img_flechasClearblue'><img src='img/Fundamentales/Distribucion/img_distribucion_clearblue_over.png'/></div>"+
		
		
		//Productos Competencias
			//Vick
		"<div class='competencia_vick_01' id='competencia_vick_01'><img src='img/Fundamentales/Distribucion/distribucion_vick_competencia.png'/></div>"+
			//Metamucil
		"<div class='competencia_metamucil_01' id='competencia_metamucil_01'><img src='img/Fundamentales/Distribucion/distribucion_metamucil_competencia.png'/></div>"+
			//Pepto-Bismol
		"<div class='competencia_peptoBismol_01' id='competencia_peptoBismol_01'><img src='img/Fundamentales/Distribucion/distribucion_peptoBismol_competencia.png'/></div>"+
			//Clearblue
		"<div class='competencia_clearblue_01' id='competencia_clearblue_01'><img src='img/Fundamentales/Distribucion/distribucion_clearblue_competencia.png'/></div>"+
		
		
		//Productos
			//Vick
		"<div class='img_fundamentales' id='productoVick_01'><img src='img/Fundamentales/Distribucion/distribucion_vick_prod_01.png'/></div>"+
		"<div class='img_fundamentales' id='productoVick_02'><img src='img/Fundamentales/Distribucion/distribucion_vick_prod_02.png'/></div>"+
		"<div class='img_fundamentales' id='productoVick_03'><img src='img/Fundamentales/Distribucion/distribucion_vick_prod_03.png'/></div>"+
		"<div class='img_fundamentales' id='productoVick_04'><img src='img/Fundamentales/Distribucion/distribucion_vick_prod_04.png'/></div>"+
		"<div class='img_fundamentales' id='productoVick_05'><img src='img/Fundamentales/Distribucion/distribucion_vick_prod_05.png'/></div>"+


			//Metamucil
		"<div class='img_fundamentales' id='productoMetamucil_01'><img src='img/Fundamentales/Distribucion/distribucion_metamucil_prod_01.png'/></div>"+
		"<div class='img_fundamentales' id='productoMetamucil_02'><img src='img/Fundamentales/Distribucion/distribucion_metamucil_prod_01.png'/></div>"+
		"<div class='img_fundamentales' id='productoMetamucil_03'><img src='img/Fundamentales/Distribucion/distribucion_metamucil_prod_01.png'/></div>"+
		"<div class='img_fundamentales' id='productoMetamucil_04'><img src='img/Fundamentales/Distribucion/distribucion_metamucil_prod_02.png'/></div>"+
		"<div class='img_fundamentales' id='productoMetamucil_05'><img src='img/Fundamentales/Distribucion/distribucion_metamucil_prod_02.png'/></div>"+
		
		
			//Pepto-Bismol
		"<div class='img_fundamentales' id='productoPeptoBismol_01'><img src='img/Fundamentales/Distribucion/distribucion_peptoBismol_prod_01.png'/></div>"+
		"<div class='img_fundamentales' id='productoPeptoBismol_02'><img src='img/Fundamentales/Distribucion/distribucion_peptoBismol_prod_02.png'/></div>"+
		"<div class='img_fundamentales' id='productoPeptoBismol_03'><img src='img/Fundamentales/Distribucion/distribucion_peptoBismol_prod_03.png'/></div>"+
		"<div class='img_fundamentales' id='productoPeptoBismol_04'><img src='img/Fundamentales/Distribucion/distribucion_peptoBismol_prod_04.png'/></div>"+
		"<div class='img_fundamentales' id='productoPeptoBismol_05'><img src='img/Fundamentales/Distribucion/distribucion_peptoBismol_prod_05.png'/></div>"+
		
			//Clearblue
		"<div class='img_fundamentales' id='productoClearblue_01'><img src='img/Fundamentales/Distribucion/distribucion_clearblue_prod_01.png'/></div>"+
		"<div class='img_fundamentales' id='productoClearblue_02'><img src='img/Fundamentales/Distribucion/distribucion_clearblue_prod_01.png'/></div>"+
		"<div class='img_fundamentales' id='productoClearblue_03'><img src='img/Fundamentales/Distribucion/distribucion_clearblue_prod_01.png'/></div>"+
		"<div class='img_fundamentales' id='productoClearblue_04'><img src='img/Fundamentales/Distribucion/distribucion_clearblue_prod_01.png'/></div>"+
		
		
		
		//Text
		"<div class='txt_MasProductos' id='txt_MasProductos'><img src='img/Fundamentales/Distribucion/img_masProducto_mex.png'/></div>"+
		
		
		
		//Button
			//01
		"<div class='rectangle_01' id='rectangle_fundamentales_btn_01' onmouseover='rollOver_rectangle_fundamentales_btn_01()'>Presencia</div>"+
			//02
		"<div class='rectangle_01' id='rectangle_fundamentales_btn_02' onmouseover='rollOver_rectangle_fundamentales_btn_02()'>Portafolio de Productos</div>"+
		
		//Slide Number
		"<div class='slideNumber'>171</div>"+
		
	"" ;
	
	/////////////////////////////////Brasil
	var distribucion_01_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'><b>Distribuição</b></div>"+

		//Images
		"<div class='materialVisibilidad_img' id='distribucion_01_img'><img src='img/Fundamentales/Distribucion/img_distribucion_01.png'/></div>"+
		
		//Images
		"<div class='materialVisibilidad_img' id='distribucion_02_img'><img src='img/Fundamentales/Distribucion/img_distribucion_01_over.png'/></div>"+
		
		//Productos
			//01
		"<div class='img_fundamentales' id='img_fundamentales_s1_prod_01'><img src='img/Fundamentales/Distribucion/img_distribucion_01_prod_01.png'/></div>"+
			//02
		"<div class='img_fundamentales' id='img_fundamentales_s1_prod_02'><img src='img/Fundamentales/Distribucion/img_distribucion_01_prod_02.png'/></div>"+
			//03
		"<div class='img_fundamentales' id='img_fundamentales_s1_prod_03'><img src='img/Fundamentales/Distribucion/img_distribucion_01_prod_03.png'/></div>"+
			//04
		"<div class='img_fundamentales' id='img_fundamentales_s1_prod_04'><img src='img/Fundamentales/Distribucion/img_distribucion_01_prod_01.png'/></div>"+
			//05
		"<div class='img_fundamentales' id='img_fundamentales_s1_prod_05'><img src='img/Fundamentales/Distribucion/img_distribucion_01_prod_02.png'/></div>"+
		
		//Text
		"<div class='txt_MasProductos' id='txt_MasProductos'>Mais produtos da P&G no mesmo cliente</div>"+
		
		
		//Button
			//01
		"<div class='rectangle_01' id='rectangle_fundamentales_btn_01' onmouseover='rollOver_rectangle_fundamentales_btn_01()'>Presença</div>"+
			//02
		"<div class='rectangle_01' id='rectangle_fundamentales_btn_02' onmouseover='rollOver_rectangle_fundamentales_btn_02()'>Portfólio de Produtos</div>"+
		
		//Slide Number
		"<div class='slideNumber'>125</div>"+
		
	"" ;
		
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + distribucion_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var distribucion_01_img = document.getElementById("distribucion_01_img") ;
			var distribucion_02_img = document.getElementById("distribucion_02_img") ;
			var distribucion_03_img = document.getElementById("distribucion_03_img") ;
			var distribucion_04_img = document.getElementById("distribucion_04_img") ;
			
			
			var img_flechasVicks = document.getElementById("img_flechasVicks") ;
			var img_flechasMetamucil = document.getElementById("img_flechasMetamucil") ;
			var img_flechasPepto = document.getElementById("img_flechasPepto") ;
			var img_flechasClearblue = document.getElementById("img_flechasClearblue") ;
			
			var competencia_vick_01 = document.getElementById("competencia_vick_01") ;
			var competencia_metamucil_01 = document.getElementById("competencia_metamucil_01") ;
			var competencia_peptoBismol_01 = document.getElementById("competencia_peptoBismol_01") ;
			var competencia_clearblue_01 = document.getElementById("competencia_clearblue_01") ;
			
			var productoVick_01 = document.getElementById("productoVick_01") ;
			var productoVick_02 = document.getElementById("productoVick_02") ;
			var productoVick_03 = document.getElementById("productoVick_03") ;
			var productoVick_04 = document.getElementById("productoVick_04") ;
			var productoVick_05 = document.getElementById("productoVick_05") ;
			
			var productoMetamucil_01 = document.getElementById("productoMetamucil_01") ;
			var productoMetamucil_02 = document.getElementById("productoMetamucil_02") ;
			var productoMetamucil_03 = document.getElementById("productoMetamucil_03") ;
			var productoMetamucil_04 = document.getElementById("productoMetamucil_04") ;
			var productoMetamucil_05 = document.getElementById("productoMetamucil_05") ;
			
			var productoPeptoBismol_01 = document.getElementById("productoPeptoBismol_01") ;
			var productoPeptoBismol_02 = document.getElementById("productoPeptoBismol_02") ;
			var productoPeptoBismol_03 = document.getElementById("productoPeptoBismol_03") ;
			var productoPeptoBismol_04 = document.getElementById("productoPeptoBismol_04") ;
			var productoPeptoBismol_05 = document.getElementById("productoPeptoBismol_05") ;
			
			var productoClearblue_01 = document.getElementById("productoClearblue_01") ;
			var productoClearblue_02 = document.getElementById("productoClearblue_02") ;
			var productoClearblue_03 = document.getElementById("productoClearblue_03") ;
			var productoClearblue_04 = document.getElementById("productoClearblue_04") ;
			
			
			var rectangle_fundamentales_btn_01 = document.getElementById("rectangle_fundamentales_btn_01") ;
			var rectangle_fundamentales_btn_02 = document.getElementById("rectangle_fundamentales_btn_02") ;
						
			/*TimeLine*/
			var shakingProducts = new TimelineMax ( {repeat:-1 , repeatDelay:0 , yoyo:false } );  
			  
			shakingProducts
				//Vick
				.fromTo(distribucion_01_img , .15 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.25})
				.fromTo(competencia_vick_01 , .15 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.25})
				
				.fromTo(img_flechasVicks , .15 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.25})
				.to(img_flechasVicks , .1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:.15})
				.to(img_flechasVicks , .1 , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.15})
				.to(img_flechasVicks , .1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:.15})
				.to(img_flechasVicks , .1 , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.15})
				.to(img_flechasVicks , .1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:.15})
				
				.to(competencia_vick_01 , .25 , {css:{opacity:"0" , transform:"scale(.5,.5)"} , delay:.5})

				.staggerFromTo([productoVick_01 , productoVick_02 , productoVick_03 , productoVick_04 , productoVick_05 , txt_MasProductos] , 0.25 , {css:{opacity:"0" , transform:'scale(2,2)'}} , {css:{opacity:"1" , transform:'scale(1,1)'} , delay: .5} , .15 )
				
				.to([distribucion_01_img , competencia_vick_01 , img_flechasVicks , productoVick_01 , productoVick_02 , productoVick_03 , productoVick_04 , productoVick_05 , txt_MasProductos] , .25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:3})
				
				//Metamucil
				.fromTo([distribucion_02_img , competencia_metamucil_01] , .15 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.25})
				
				.fromTo(img_flechasMetamucil , .15 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.25})
				.to(img_flechasMetamucil , .1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:.15})
				.to(img_flechasMetamucil , .1 , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.15})
				.to(img_flechasMetamucil , .1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:.15})
				.to(img_flechasMetamucil , .1 , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.15})
				.to(img_flechasMetamucil , .1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:.15})
				
				.to(competencia_metamucil_01 , .25 , {css:{opacity:"0" , transform:"scale(.5,.5)"} , delay:.5})

				.staggerFromTo([productoMetamucil_01 , productoMetamucil_02 , productoMetamucil_03 , productoMetamucil_04 , productoMetamucil_05 , txt_MasProductos] , 0.25 , {css:{opacity:"0" , transform:'scale(2,2)'}} , {css:{opacity:"1" , transform:'scale(1,1)'} , delay: .5} , .15 )
				
				.to([distribucion_02_img , competencia_metamucil_01 , img_flechasMetamucil , productoMetamucil_01 , productoMetamucil_02 , productoMetamucil_03 , productoMetamucil_04 , productoMetamucil_05 , txt_MasProductos] , .25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:3})
				
				//Pepto-Bismol
				.fromTo([distribucion_03_img , competencia_peptoBismol_01] , .15 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.25})
				
				.fromTo(img_flechasPepto , .15 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.25})
				.to(img_flechasPepto , .1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:.15})
				.to(img_flechasPepto , .1 , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.15})
				.to(img_flechasPepto , .1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:.15})
				.to(img_flechasPepto , .1 , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.15})
				.to(img_flechasPepto , .1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:.15})
				
				.to(competencia_peptoBismol_01 , .25 , {css:{opacity:"0" , transform:"scale(.5,.5)"} , delay:.5})

				.staggerFromTo([productoPeptoBismol_01 , productoPeptoBismol_02 , productoPeptoBismol_03 , productoPeptoBismol_04 , productoPeptoBismol_05 , txt_MasProductos] , 0.25 , {css:{opacity:"0" , transform:'scale(2,2)'}} , {css:{opacity:"1" , transform:'scale(1,1)'} , delay: .5} , .15 )
				
				.to([distribucion_03_img , competencia_peptoBismol_01 , img_flechasPepto , productoPeptoBismol_01 , productoPeptoBismol_02 , productoPeptoBismol_03 , productoPeptoBismol_04 , productoPeptoBismol_05 ,txt_MasProductos] , .25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:3})
				
				//Clearblue
				.fromTo([distribucion_04_img , competencia_clearblue_01] , .15 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.25})
				
				.fromTo(img_flechasClearblue , .15 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.25})
				.to(img_flechasClearblue , .1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:.15})
				.to(img_flechasClearblue , .1 , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.15})
				.to(img_flechasClearblue , .1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:.15})
				.to(img_flechasClearblue , .1 , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.15})
				.to(img_flechasClearblue , .1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:.15})
				
				.to(competencia_clearblue_01 , .25 , {css:{opacity:"0" , transform:"scale(.5,.5)"} , delay:.5})

				.staggerFromTo([productoClearblue_01 , productoClearblue_02 , productoClearblue_03 , productoClearblue_04 , txt_MasProductos] , 0.25 , {css:{opacity:"0" , transform:'scale(2,2)'}} , {css:{opacity:"1" , transform:'scale(1,1)'} , delay: .5} , .15 )
				
				.to([distribucion_04_img , competencia_clearblue_01 , img_flechasClearblue , productoClearblue_01 , productoClearblue_02 , productoClearblue_03 , productoClearblue_04 , txt_MasProductos] , .25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay:3});

			/////////////////////////////////Exit animation
			function exit_distribucion_01_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				
				TweenMax.killTweensOf([txt_Title_bullets , rectangle_fundamentales_btn_01 , rectangle_fundamentales_btn_02]) ;
				shakingProducts.seek(0) ;
				shakingProducts.kill() ;
				
				TweenMax.staggerFromTo ([rectangle_fundamentales_btn_01 , rectangle_fundamentales_btn_02] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (distribucion_01_img , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				//TweenMax.fromTo (txtdistribucion_01 , 1 , {css:{opacity:"1" , top:"860px"}} , {css:{opacity:"0" , top:"825px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{						
						case -6:
							menu_fundamentalesVenta() ;
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
							menu_fundamentalesVenta() ;
						break;
						
						case 1:
							distribucion_resumen() ;
						break;
						
						case 2:
							distribucion_numerica() ;
						break;
						
						case 3:
							distribucion_portafolio() ;
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
				exit_distribucion_01_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_distribucion_01_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_distribucion_01_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_distribucion_01_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_distribucion_01_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_distribucion_01_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_distribucion_01_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_distribucion_01_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_distribucion_01_mex() ;
			});
			
			/////////////////////////////////Rectangle 01
			$('#rectangle_fundamentales_btn_01').click(function() {
				pagChange = 2 ;
				fundamentalesPosition = 1 ;
				
				exit_distribucion_01_mex() ;
			});
			
			/////////////////////////////////Rectangle 02
			$('#rectangle_fundamentales_btn_02').click(function() {
				pagChange = 3 ;
				fundamentalesPosition = 1 ;
				
				exit_distribucion_01_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_distribucion_01_mex.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + distribucion_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var distribucion_01_img = document.getElementById("distribucion_01_img") ;
			var distribucion_02_img = document.getElementById("distribucion_02_img") ;
					
			var rectangle_fundamentales_btn_01 = document.getElementById("rectangle_fundamentales_btn_01") ;
			
			var img_fundamentales_s1_prod_01 = document.getElementById("img_fundamentales_s1_prod_01") ;
			var img_fundamentales_s1_prod_02 = document.getElementById("img_fundamentales_s1_prod_02") ;
			var img_fundamentales_s1_prod_03 = document.getElementById("img_fundamentales_s1_prod_03") ;
			var img_fundamentales_s1_prod_04 = document.getElementById("img_fundamentales_s1_prod_04") ;
			var img_fundamentales_s1_prod_05 = document.getElementById("img_fundamentales_s1_prod_05") ;
			
			var rectangle_fundamentales_btn_01 = document.getElementById("rectangle_fundamentales_btn_01") ;
			var rectangle_fundamentales_btn_02 = document.getElementById("rectangle_fundamentales_btn_02") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (distribucion_01_img , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			TweenMax.fromTo (rectangle_fundamentales_btn_01 , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([rectangle_fundamentales_btn_01 , rectangle_fundamentales_btn_02] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
			
			/*TimeLine*/
			var shakingProducts = new TimelineMax ( {repeat:-1 , repeatDelay:3 , yoyo:false } );  
			  
			shakingProducts.fromTo(distribucion_02_img , .15 , {css:{opacity:"0" , transform:"scale(.85,.85)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.25})
				.to(distribucion_02_img , .15 , {css:{opacity:"0" , transform:"scale(.85,.85)"} , delay:.25})
				.to(distribucion_02_img , .15 , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.25})
				.to(distribucion_02_img , .15 , {css:{opacity:"0" , transform:"scale(.85,.85)"} , delay:.25})
				.to(distribucion_02_img , .15 , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.25})
				.to(distribucion_02_img , .15 , {css:{opacity:"0" , transform:"scale(.85,.85)"} , delay:.25})
				.to(distribucion_02_img , .15 , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.25})
				.to(distribucion_02_img , .15 , {css:{opacity:"0" , transform:"scale(.85,.85)"} , delay:.25})
				.staggerFromTo([img_fundamentales_s1_prod_01 , img_fundamentales_s1_prod_02 , img_fundamentales_s1_prod_03 , img_fundamentales_s1_prod_04 , img_fundamentales_s1_prod_05] , 0.5 , {css:{opacity:"0" , transform:'scale(2,2)'}} , {css:{opacity:"1" , transform:'scale(1,1)'} , delay: .5} , .25 )
				.fromTo(txt_MasProductos , .15 , {css:{opacity:"0" , transform:"scale(.85,.85)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.5}) ;
			
			
			/////////////////////////////////Exit animation
			function exit_distribucion_01()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var distribucion_01_img = document.getElementById("distribucion_01_img") ;
							
				var rectangle_fundamentales_btn_01 = document.getElementById("rectangle_fundamentales_btn_01") ;
				
				var img_fundamentales_s1_prod_01 = document.getElementById("img_fundamentales_s1_prod_01") ;
				var img_fundamentales_s1_prod_02 = document.getElementById("img_fundamentales_s1_prod_02") ;
				var img_fundamentales_s1_prod_03 = document.getElementById("img_fundamentales_s1_prod_03") ;
				var img_fundamentales_s1_prod_04 = document.getElementById("img_fundamentales_s1_prod_04") ;
				var img_fundamentales_s1_prod_05 = document.getElementById("img_fundamentales_s1_prod_05") ;
				
				var rectangle_fundamentales_btn_01 = document.getElementById("rectangle_fundamentales_btn_01") ;
				var rectangle_fundamentales_btn_02 = document.getElementById("rectangle_fundamentales_btn_02") ;
				
				TweenMax.killTweensOf([txt_Title_bullets , distribucion_01_img , rectangle_fundamentales_btn_01]) ;
				shakingProducts.seek(0) ;
				shakingProducts.kill() ;
				
				TweenMax.staggerFromTo ([rectangle_fundamentales_btn_01 , rectangle_fundamentales_btn_02] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (distribucion_01_img , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				//TweenMax.fromTo (txtdistribucion_01 , 1 , {css:{opacity:"1" , top:"860px"}} , {css:{opacity:"0" , top:"825px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{						
						case -6:
							menu_fundamentalesVenta() ;
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
							menu_fundamentalesVenta() ;
						break;
						
						case 1:
							distribucion_resumen() ;
						break;
						
						case 2:
							distribucion_numerica() ;
						break;
						
						case 3:
							distribucion_portafolio() ;
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
				exit_distribucion_01() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_distribucion_01() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_distribucion_01() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_distribucion_01() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_distribucion_01() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_distribucion_01() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_distribucion_01() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_distribucion_01() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_distribucion_01() ;
			});
			
			/////////////////////////////////Rectangle 01
			$('#rectangle_fundamentales_btn_01').click(function() {
				pagChange = 2 ;
				fundamentalesPosition = 1 ;
				
				exit_distribucion_01() ;
			});
			
			/////////////////////////////////Rectangle 02
			$('#rectangle_fundamentales_btn_02').click(function() {
				pagChange = 3 ;
				fundamentalesPosition = 1 ;
				
				exit_distribucion_01() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_distribucion_01_bra.mp3' ;
	
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
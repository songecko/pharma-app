<!--Planilla de Objetivos-->
function distribucion_numerica()
{
	CleanScreen() ;
	
	gotoSlide = 'distribucion_numerica' ;
	
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
		//"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+

	"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////México
	var distribucion_numerica_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Distribución / <b>Presencia</b></div>"+

		//Images
		"<div class='mapaCountry' id='mapaCountry_brasil'><img src='img/Fundamentales/Distribucion/img_mapa_mexico.png'/></div>"+
		
		//Tiendas
			//01
		"<div class='imgStore_map' id='imgStore_map_bra_01'><img src='img/Fundamentales/Distribucion/img_store.png'/></div>"+
			//02
		"<div class='imgStore_map' id='imgStore_map_bra_02'><img src='img/Fundamentales/Distribucion/img_store.png'/></div>"+
			//03
		"<div class='imgStore_map' id='imgStore_map_bra_03'><img src='img/Fundamentales/Distribucion/img_store.png'/></div>"+
			//04
		"<div class='imgStore_map' id='imgStore_map_bra_04'><img src='img/Fundamentales/Distribucion/img_store.png'/></div>"+
			//05
		"<div class='imgStore_map' id='imgStore_map_bra_05'><img src='img/Fundamentales/Distribucion/img_store.png'/></div>"+
			//06
		"<div class='imgStore_map' id='imgStore_map_mex_06'><img src='img/Fundamentales/Distribucion/img_store.png'/></div>"+
		
		//Logos P&G
			//01
		"<div class='imgLogo_PG' id='imgLogo_PG_01'><img src='img/Fundamentales/Distribucion/img_logoPG.png'/></div>"+
			//02
		"<div class='imgLogo_PG' id='imgLogo_PG_02'><img src='img/Fundamentales/Distribucion/img_logoPG.png'/></div>"+
			//03
		"<div class='imgLogo_PG' id='imgLogo_PG_03'><img src='img/Fundamentales/Distribucion/img_logoPG.png'/></div>"+
			//04
		"<div class='imgLogo_PG' id='imgLogo_PG_04'><img src='img/Fundamentales/Distribucion/img_logoPG.png'/></div>"+
			//05
		"<div class='imgLogo_PG' id='imgLogo_PG_05'><img src='img/Fundamentales/Distribucion/img_logoPG.png'/></div>"+
			//06
		"<div class='imgLogo_PG' id='imgLogo_PG_06_mex'><img src='img/Fundamentales/Distribucion/img_logoPG.png'/></div>"+
		
		//Flechas
			//01
		"<div class='img_dobleArrow' id='img_dobleArrow_01'><img src='img/Fundamentales/Distribucion/img_flechas_dobles.png'/></div>"+
			//02
		"<div class='img_dobleArrow' id='img_dobleArrow_02'><img src='img/Fundamentales/Distribucion/img_flechas_dobles.png'/></div>"+
			//03
		"<div class='img_dobleArrow' id='img_dobleArrow_03_mex'><img src='img/Fundamentales/Distribucion/img_flechas_dobles.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>172</div>"+
		
	"" ;
	
	
	/////////////////////////////////Brasil
	var distribucion_numerica_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Distribuição / <b>Distribuição Numérica</b></div>"+

		//Images
		"<div class='mapaCountry' id='mapaCountry_brasil'><img src='img/Fundamentales/Distribucion/img_mapa_brasil.png'/></div>"+
		
		//Tiendas
			//01
		"<div class='imgStore_map' id='imgStore_map_bra_01'><img src='img/Fundamentales/Distribucion/img_store.png'/></div>"+
			//02
		"<div class='imgStore_map' id='imgStore_map_bra_02'><img src='img/Fundamentales/Distribucion/img_store.png'/></div>"+
			//03
		"<div class='imgStore_map' id='imgStore_map_bra_03'><img src='img/Fundamentales/Distribucion/img_store.png'/></div>"+
			//04
		"<div class='imgStore_map' id='imgStore_map_bra_04'><img src='img/Fundamentales/Distribucion/img_store.png'/></div>"+
			//05
		"<div class='imgStore_map' id='imgStore_map_bra_05'><img src='img/Fundamentales/Distribucion/img_store.png'/></div>"+
			//06
		"<div class='imgStore_map' id='imgStore_map_bra_06'><img src='img/Fundamentales/Distribucion/img_store.png'/></div>"+
		
		//Logos P&G
			//01
		"<div class='imgLogo_PG' id='imgLogo_PG_01'><img src='img/Fundamentales/Distribucion/img_logoPG.png'/></div>"+
			//02
		"<div class='imgLogo_PG' id='imgLogo_PG_02'><img src='img/Fundamentales/Distribucion/img_logoPG.png'/></div>"+
			//03
		"<div class='imgLogo_PG' id='imgLogo_PG_03'><img src='img/Fundamentales/Distribucion/img_logoPG.png'/></div>"+
			//04
		"<div class='imgLogo_PG' id='imgLogo_PG_04'><img src='img/Fundamentales/Distribucion/img_logoPG.png'/></div>"+
			//05
		"<div class='imgLogo_PG' id='imgLogo_PG_05'><img src='img/Fundamentales/Distribucion/img_logoPG.png'/></div>"+
			//06
		"<div class='imgLogo_PG' id='imgLogo_PG_06'><img src='img/Fundamentales/Distribucion/img_logoPG.png'/></div>"+
		
		//Flechas
			//01
		"<div class='img_dobleArrow' id='img_dobleArrow_01'><img src='img/Fundamentales/Distribucion/img_flechas_dobles.png'/></div>"+
			//02
		"<div class='img_dobleArrow' id='img_dobleArrow_02'><img src='img/Fundamentales/Distribucion/img_flechas_dobles.png'/></div>"+
			//03
		"<div class='img_dobleArrow' id='img_dobleArrow_03'><img src='img/Fundamentales/Distribucion/img_flechas_dobles.png'/></div>"+
		
		//Slide Number
		"<div class='slideNumber'>172</div>"+
		
	"" ;
		
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + distribucion_numerica_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;

			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var mapaCountry_brasil = document.getElementById("mapaCountry_brasil") ;
						
			var rectangle_fundamentales_btn_01 = document.getElementById("rectangle_fundamentales_btn_01") ;
			
			var imgStore_map_bra_01 = document.getElementById("imgStore_map_bra_01") ;
			var imgStore_map_bra_02 = document.getElementById("imgStore_map_bra_02") ;
			var imgStore_map_bra_03 = document.getElementById("imgStore_map_bra_03") ;
			var imgStore_map_bra_04 = document.getElementById("imgStore_map_bra_04") ;
			var imgStore_map_bra_05 = document.getElementById("imgStore_map_bra_05") ;
			var imgStore_map_mex_06 = document.getElementById("imgStore_map_mex_06") ;
			
			var imgLogo_PG_01 = document.getElementById("imgLogo_PG_01") ;
			var imgLogo_PG_02 = document.getElementById("imgLogo_PG_02") ;
			var imgLogo_PG_03 = document.getElementById("imgLogo_PG_03") ;
			var imgLogo_PG_04 = document.getElementById("imgLogo_PG_04") ;
			var imgLogo_PG_05 = document.getElementById("imgLogo_PG_05") ;
			var imgLogo_PG_06_mex = document.getElementById("imgLogo_PG_06_mex") ;
			
			var img_dobleArrow_01 = document.getElementById("img_dobleArrow_01") ;
			var img_dobleArrow_02 = document.getElementById("img_dobleArrow_02") ;
			var img_dobleArrow_03_mex = document.getElementById("img_dobleArrow_03_mex") ;

			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (mapaCountry_brasil , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
						
			/*Animation*/
			var shakingProducts = new TimelineMax ( {repeat:-1 , repeatDelay:3 , yoyo:false } );  
			  
			shakingProducts.staggerFromTo([imgStore_map_bra_01 , imgStore_map_bra_02 , imgStore_map_bra_03 , imgStore_map_bra_04 , imgStore_map_bra_05 , imgStore_map_mex_06] , 0.15 , {css:{opacity:"0" , transform:'scale(2,2)'}} , {css:{opacity:"1" , transform:'scale(1,1)'} , delay: .15} ,.25 )
				.staggerFromTo([imgLogo_PG_01 , imgLogo_PG_02 , imgLogo_PG_05] , 0.15 , {css:{opacity:"0" , transform:'scale(2,2)'}} , {css:{opacity:"1" , transform:'scale(1,1)'} , delay: .5} ,.1 )
				
				.staggerFromTo([img_dobleArrow_01 , img_dobleArrow_02 , img_dobleArrow_03_mex] , 0.15 , {css:{opacity:"0" , transform:'scale(2,2)'}} , {css:{opacity:"1" , transform:'scale(1,1)'} , delay: .5} ,.1 )
				.staggerTo([img_dobleArrow_01 , img_dobleArrow_02 , img_dobleArrow_03_mex] , 0.15 , {css:{opacity:"0" , transform:'scale(2,2)'}})
				.staggerTo([img_dobleArrow_01 , img_dobleArrow_02 , img_dobleArrow_03_mex] , 0.15 , {css:{opacity:"1" , transform:'scale(1,1)'}})
				.staggerTo([img_dobleArrow_01 , img_dobleArrow_02 , img_dobleArrow_03_mex] , 0.15 , {css:{opacity:"0" , transform:'scale(2,2)'}})
				.staggerTo([img_dobleArrow_01 , img_dobleArrow_02 , img_dobleArrow_03_mex] , 0.15 , {css:{opacity:"1" , transform:'scale(1,1)'}})
				.staggerTo([img_dobleArrow_01 , img_dobleArrow_02 , img_dobleArrow_03_mex] , 0.15 , {css:{opacity:"0" , transform:'scale(2,2)'}})

				.staggerFromTo([imgLogo_PG_03 , imgLogo_PG_04 , imgLogo_PG_06_mex] , 0.15 , {css:{opacity:"0" , transform:'scale(2,2)'}} , {css:{opacity:"1" , transform:'scale(1,1)'} , delay: .5} ,.1 ) ;
			
			/////////////////////////////////Exit animation
			function exit_distribucion_numerica_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var mapaCountry_brasil = document.getElementById("mapaCountry_brasil") ;
							
				var rectangle_fundamentales_btn_01 = document.getElementById("rectangle_fundamentales_btn_01") ;
				
				var imgStore_map_bra_01 = document.getElementById("imgStore_map_bra_01") ;
				var imgStore_map_bra_02 = document.getElementById("imgStore_map_bra_02") ;
				var imgStore_map_bra_03 = document.getElementById("imgStore_map_bra_03") ;
				var imgStore_map_bra_04 = document.getElementById("imgStore_map_bra_04") ;
				var imgStore_map_bra_05 = document.getElementById("imgStore_map_bra_05") ;

				TweenMax.killTweensOf([txt_Title_bullets , mapaCountry_brasil]) ;
				shakingProducts.seek(0) ;
				shakingProducts.kill() ;

				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (mapaCountry_brasil , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				TweenMax.fromTo (txtdistribucion_numerica , 1 , {css:{opacity:"1" , top:"860px"}} , {css:{opacity:"0" , top:"825px"}}) ;
				
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
							if(fundamentalesPosition == 1)
							{
								distribucion_01() ;
							}
							if(fundamentalesPosition == 2)
							{
								distribucion_02() ;
							}
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
				exit_distribucion_numerica_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_distribucion_numerica_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_distribucion_numerica_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_distribucion_numerica_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_distribucion_numerica_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_distribucion_numerica_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_distribucion_numerica_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_distribucion_numerica_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_distribucion_numerica_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_distribucion_numerica_mex.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + distribucion_numerica_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;

			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var mapaCountry_brasil = document.getElementById("mapaCountry_brasil") ;
						
			var rectangle_fundamentales_btn_01 = document.getElementById("rectangle_fundamentales_btn_01") ;
			
			var imgStore_map_bra_01 = document.getElementById("imgStore_map_bra_01") ;
			var imgStore_map_bra_02 = document.getElementById("imgStore_map_bra_02") ;
			var imgStore_map_bra_03 = document.getElementById("imgStore_map_bra_03") ;
			var imgStore_map_bra_04 = document.getElementById("imgStore_map_bra_04") ;
			var imgStore_map_bra_05 = document.getElementById("imgStore_map_bra_05") ;
			var imgStore_map_bra_06 = document.getElementById("imgStore_map_bra_06") ;
			
			var imgLogo_PG_01 = document.getElementById("imgLogo_PG_01") ;
			var imgLogo_PG_02 = document.getElementById("imgLogo_PG_02") ;
			var imgLogo_PG_03 = document.getElementById("imgLogo_PG_03") ;
			var imgLogo_PG_04 = document.getElementById("imgLogo_PG_04") ;
			var imgLogo_PG_05 = document.getElementById("imgLogo_PG_05") ;
			var imgLogo_PG_06 = document.getElementById("imgLogo_PG_06") ;
			
			var img_dobleArrow_01 = document.getElementById("img_dobleArrow_01") ;
			var img_dobleArrow_02 = document.getElementById("img_dobleArrow_02") ;
			var img_dobleArrow_03 = document.getElementById("img_dobleArrow_03") ;

			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (mapaCountry_brasil , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
						
			/*Animation*/
			var shakingProducts = new TimelineMax ( {repeat:-1 , repeatDelay:3 , yoyo:false } );  
			  
			shakingProducts.staggerFromTo([imgStore_map_bra_01 , imgStore_map_bra_02 , imgStore_map_bra_03 , imgStore_map_bra_04 , imgStore_map_bra_05 , imgStore_map_bra_06] , 0.15 , {css:{opacity:"0" , transform:'scale(2,2)'}} , {css:{opacity:"1" , transform:'scale(1,1)'} , delay: .15} ,.25 )
				.staggerFromTo([imgLogo_PG_01 , imgLogo_PG_02 , imgLogo_PG_05] , 0.15 , {css:{opacity:"0" , transform:'scale(2,2)'}} , {css:{opacity:"1" , transform:'scale(1,1)'} , delay: .5} ,.1 )
				
				.staggerFromTo([img_dobleArrow_01 , img_dobleArrow_02 , img_dobleArrow_03] , 0.15 , {css:{opacity:"0" , transform:'scale(2,2)'}} , {css:{opacity:"1" , transform:'scale(1,1)'} , delay: .5} ,.1 )
				.staggerTo([img_dobleArrow_01 , img_dobleArrow_02 , img_dobleArrow_03] , 0.15 , {css:{opacity:"0" , transform:'scale(2,2)'}})
				.staggerTo([img_dobleArrow_01 , img_dobleArrow_02 , img_dobleArrow_03] , 0.15 , {css:{opacity:"1" , transform:'scale(1,1)'}})
				.staggerTo([img_dobleArrow_01 , img_dobleArrow_02 , img_dobleArrow_03] , 0.15 , {css:{opacity:"0" , transform:'scale(2,2)'}})
				.staggerTo([img_dobleArrow_01 , img_dobleArrow_02 , img_dobleArrow_03] , 0.15 , {css:{opacity:"1" , transform:'scale(1,1)'}})
				.staggerTo([img_dobleArrow_01 , img_dobleArrow_02 , img_dobleArrow_03] , 0.15 , {css:{opacity:"0" , transform:'scale(2,2)'}})

				.staggerFromTo([imgLogo_PG_03 , imgLogo_PG_04 , imgLogo_PG_06] , 0.15 , {css:{opacity:"0" , transform:'scale(2,2)'}} , {css:{opacity:"1" , transform:'scale(1,1)'} , delay: .5} ,.1 ) ;
			
			/////////////////////////////////Exit animation
			function exit_distribucion_numerica()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var mapaCountry_brasil = document.getElementById("mapaCountry_brasil") ;
							
				var rectangle_fundamentales_btn_01 = document.getElementById("rectangle_fundamentales_btn_01") ;
				
				var imgStore_map_bra_01 = document.getElementById("imgStore_map_bra_01") ;
				var imgStore_map_bra_02 = document.getElementById("imgStore_map_bra_02") ;
				var imgStore_map_bra_03 = document.getElementById("imgStore_map_bra_03") ;
				var imgStore_map_bra_04 = document.getElementById("imgStore_map_bra_04") ;
				var imgStore_map_bra_05 = document.getElementById("imgStore_map_bra_05") ;

				TweenMax.killTweensOf([txt_Title_bullets , mapaCountry_brasil]) ;
				shakingProducts.seek(0) ;
				shakingProducts.kill() ;

				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (mapaCountry_brasil , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				TweenMax.fromTo (txtdistribucion_numerica , 1 , {css:{opacity:"1" , top:"860px"}} , {css:{opacity:"0" , top:"825px"}}) ;
				
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
							if(fundamentalesPosition == 1)
							{
								distribucion_01() ;
							}
							if(fundamentalesPosition == 2)
							{
								distribucion_02() ;
							}
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
				exit_distribucion_numerica() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_distribucion_numerica() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_distribucion_numerica() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_distribucion_numerica() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_distribucion_numerica() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_distribucion_numerica() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_distribucion_numerica() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_distribucion_numerica() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_distribucion_numerica() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_distribucion_numerica_bra.mp3' ;
	
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
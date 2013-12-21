<!--Planilla de Objetivos-->
function tablaPedidos()
{
	CleanScreen() ;
	
	gotoSlide = 'tablaPedidos' ;
	
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
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_Induccion_herramientas_03.png' onmouseover='rollOver_ico_06()' /></div>"+

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
	var callBook_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Call <b>Book</b></div>"+
				
		//Images
			//01
		"<div class='tablaPedidos_img' id='tablaPedidos_img'><img src='img/Induccion/Herramientas/img_callBook.png'></div>"+		
		
		//Textos
			//01
		"<div class='txt_Title' id='pagObj_txt'>El call book sirve para calcular el pedido sugerido de acuerdo a inventarios y demanda con base en la frecuencia de visita.</div>"+

			//02
		"<div class='tablaPedidos_flechas_01' id='tablaPedidos_flechas_01'><img src='img/Induccion/Herramientas/tablaPedidos_flechas.png'></div>"+	
			//03
		"<div class='tablaPedidos_flechas_02' id='tablaPedidos_flechas_02'><img src='img/Induccion/Herramientas/tablaPedidos_flechas.png'></div>"+		
		
		//Slide Number
		"<div class='slideNumber'>018</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var tablaPedidos_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Talão de Pedidos</div>"+
				
		//Images
			//01
		"<div class='tablaPedidos_img' id='tablaPedidos_img'><img src='img/Induccion/Herramientas/img_tablaPedidos.png'></div>"+		
		
		//Textos
			//01
		"<div class='txt_Title' id='pagObj_txt'>Para verificação de rupturas e fazer sugestão de pedidos. Ferramenta utilizada para verificação de rupturas e fazer sugestão de pedidos para a loja.<br/>Importante observar se a última sugestão feita foi o suficiente de acordo com o giro de produto para que não tenhamos falta na loja.</div>"+
		
		//Slide Number
		"<div class='slideNumber'>020</div>"+

	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + callBook_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;

			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var tablaPedidos_img = document.getElementById("tablaPedidos_img") ;
			var pagObj_txt = document.getElementById("pagObj_txt") ;
			
			var tablaPedidos_flechas_01 = document.getElementById("tablaPedidos_flechas_01") ;
			var tablaPedidos_flechas_01 = document.getElementById("tablaPedidos_flechas_01") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([tablaPedidos_img , pagObj_txt] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
			
			TweenMax.staggerFromTo ([tablaPedidos_flechas_01 , tablaPedidos_flechas_02] , 1 , {css:{opacity:"0" , top:"250px"}} , {css:{opacity:"1" , top:"360px"} , delay:.5} , .25) ;
			
			/////////////////////////////////TimeLine
			/*var tilingImage = new TimelineMax({repeat:-1 , repeatDelay:.25 , yoyo:false});   
				tilingImage.fromTo(tablaPedidos_flechas_01 , 0.25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} )
					.to(tablaPedidos_flechas_01 , 0.25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}})
					.to(tablaPedidos_flechas_01 , 0.25 , {css:{opacity:"1" , transform:"scale(1,1)"}})
					.to(tablaPedidos_flechas_01 , 0.25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}})
					.to(tablaPedidos_flechas_01 , 0.25 , {css:{opacity:"1" , transform:"scale(1,1)"}})
					.to(tablaPedidos_flechas_01 , 0.25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}})
					.to(tablaPedidos_flechas_01 , 0.25 , {css:{opacity:"1" , transform:"scale(1,1)"}})
					.to(tablaPedidos_flechas_01 , 0.25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}})
					.to(tablaPedidos_flechas_01 , 0.25 , {css:{opacity:"1" , transform:"scale(1,1)"}})
					
					.to(tablaPedidos_flechas_01 , 0.25 , {css:{opacity:"1" , transform:"scale(1,1)"} , delay: 2 } )
					
					.to(tablaPedidos_flechas_01 , 0.25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay: 2 } )
					
					
					.fromTo(tablaPedidos_flechas_02 , 0.25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} )
					.to(tablaPedidos_flechas_02 , 0.25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}})
					.to(tablaPedidos_flechas_02 , 0.25 , {css:{opacity:"1" , transform:"scale(1,1)"}})
					.to(tablaPedidos_flechas_02 , 0.25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}})
					.to(tablaPedidos_flechas_02 , 0.25 , {css:{opacity:"1" , transform:"scale(1,1)"}})
					.to(tablaPedidos_flechas_02 , 0.25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}})
					.to(tablaPedidos_flechas_02 , 0.25 , {css:{opacity:"1" , transform:"scale(1,1)"}})
					.to(tablaPedidos_flechas_02 , 0.25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}})
					.to(tablaPedidos_flechas_02 , 0.25 , {css:{opacity:"1" , transform:"scale(1,1)"}})
					
					.to(tablaPedidos_flechas_02 , 0.25 , {css:{opacity:"1" , transform:"scale(1,1)"} , delay: 2 } )
					
					.to(tablaPedidos_flechas_02 , 0.25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"} , delay: 2 } ) ;*/
			
			/////////////////////////////////Exit animation
			function exit_tablaPedidos_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var tablaPedidos_img = document.getElementById("tablaPedidos_img") ;
				var pagObj_txt = document.getElementById("pagObj_txt") ;
				
				/*tilingImage.pause();
				tilingImage.seek(0);
				tilingImage.kill();*/
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([tablaPedidos_img , pagObj_txt] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
				TweenMax.staggerFromTo ([tablaPedidos_flechas_02 , tablaPedidos_flechas_01] , 1 , {css:{opacity:"1" , top:"360px"}} , {css:{opacity:"0" , top:"450px"}} , .25) ;
				
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
							tabletCelularMochila_01() ;
						break;
						
						case 1:
							planillaObjetivos() ;
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
				exit_tablaPedidos_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_tablaPedidos_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_tablaPedidos_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_tablaPedidos_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_tablaPedidos_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_tablaPedidos_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_tablaPedidos_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_tablaPedidos_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_tablaPedidos_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_tablaPedidos_mex_01.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + tablaPedidos_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var tablaPedidos_img = document.getElementById("tablaPedidos_img") ;
			var pagObj_txt = document.getElementById("pagObj_txt") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([tablaPedidos_img , pagObj_txt] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
			
			/////////////////////////////////Exit animation
			function exit_tablaPedidos()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var tablaPedidos_img = document.getElementById("tablaPedidos_img") ;
				var pagObj_txt = document.getElementById("pagObj_txt") ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([tablaPedidos_img , pagObj_txt] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
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
							planillaObjetivos() ;
						break;
						
						case 1:
							onePage() ;
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
				exit_tablaPedidos() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_tablaPedidos() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_tablaPedidos() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_tablaPedidos() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_tablaPedidos() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_tablaPedidos() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_tablaPedidos() ;
			});
			
			/////////////////////////////////Download
			$('#btn_Download').click(function() {
				//window.open('download/manual_SmartPad.ppt');
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_tablaPedidos() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_tablaPedidos() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_tablaPedidos_bra_01.mp3' ;
	
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
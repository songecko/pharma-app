<!--Planilla de Objetivos-->
function distribucion_portafolio()
{
	CleanScreen() ;
	
	gotoSlide = 'distribucion_portafolio' ;
	
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
	var distribucion_portafolio_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Distribución / <b>Portfólio Actual</b></div>"+

		//Menu buttons
			//01
		"<div class='menuElement' id='btn_04_01' onmouseover='rollOver_btn_04_01()' style='top:275px'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_Metamucil.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_04_02' onmouseover='rollOver_btn_04_02()' style='top:275px'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_Vicks.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_04_03' onmouseover='rollOver_btn_04_03()' style='top:275px'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_PeptoBismol.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_04_04' onmouseover='rollOver_btn_04_04()' style='top:275px'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_Clearblue.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Changing Image
		"<div class='imgPortafolio_distribucion' id='imgPortafolio_distribucion'><img src='img/Fundamentales/Distribucion/img_portafolio_vicks.png' id='imgPortafolio' /></div>"+
		
		//Slide Number
		"<div class='slideNumber'>173</div>"+
		
	"" ;
	
	
	/////////////////////////////////Brasil
	var distribucion_portafolio_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Distribuição / <b>Portfólio de Produtos</b></div>"+

		//Menu buttons
			//01
		"<div class='menuElement' id='btn_03_01' onmouseover='rollOver_btn_03_01()' style='top:275px'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_Vicks.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_03_02' onmouseover='rollOver_btn_03_02()' style='top:275px'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_Hipoglos.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_03_03' onmouseover='rollOver_btn_03_03()' style='top:275px'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_marcas_Metamucil.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		//Changing Image
		"<div class='imgPortafolio_distribucion' id='imgPortafolio_distribucion'><img src='img/Fundamentales/Distribucion/img_portafolio_vicks.png' id='imgPortafolio' /></div>"+
		
		//Slide Number
		"<div class='slideNumber'>128</div>"+
		
	"" ;
	
	/**********************************************
	Variables
	***********************************************/
	var changeImagePortfolio = 0 ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + distribucion_portafolio_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var btn_04_01 = document.getElementById("btn_04_01") ;
			var btn_04_02 = document.getElementById("btn_04_02") ;
			var btn_04_03 = document.getElementById("btn_04_03") ;
			var btn_04_04 = document.getElementById("btn_04_04") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_04_01 , btn_04_02 , btn_04_03 , btn_04_04] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
			
			/////////////////////////////////Exit animation
			function exit_distribucion_portafolio_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var btn_04_01 = document.getElementById("btn_04_01") ;
				var btn_04_02 = document.getElementById("btn_04_02") ;
				var btn_04_03 = document.getElementById("btn_04_03") ;
				var btn_04_04 = document.getElementById("btn_04_04") ;
				
				var imgPortafolio_distribucion = document.getElementById("imgPortafolio_distribucion") ;

				TweenMax.killTweensOf([txt_Title_bullets , btn_03_01 , btn_03_02 , btn_03_03]) ;

				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_04_01 , btn_04_02 , btn_04_03 , btn_04_04], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
				TweenMax.fromTo (imgPortafolio_distribucion , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
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
			
			/////////////////////////////////ChangeImage
			function changeMyImage_mex()
			{
				var imgPortafolio_distribucion = document.getElementById("imgPortafolio_distribucion") ;
				TweenMax.to (imgPortafolio_distribucion , .5 , {css:{opacity:"0" , height:"0px"} , onComplete:changeIt}) ;
				
				auLocucion.src = '' ;
				
				function changeIt()
				{
					var imgPortafolio_distribucion = document.getElementById("imgPortafolio_distribucion") ;
					var imgPortafolio = document.getElementById("imgPortafolio") ;
					
					switch(changeImagePortfolio)
					{
						case 1:
							imgPortafolio.src = 'img/Fundamentales/Distribucion/img_portafolio_metamucil_mex.png' ;
							
							/**********************************************
							Locution Load
							***********************************************/
							var auLocucion = document.getElementById("auLocucion") ;
					
							auLocucion.src = 'audio/FundamentalesVenta/au_distribucion_portafolio_metamucil_mex.mp3' ;
					
							if (( auFlagLoc % 2 ) != 0)
							{
								auLocucion.play() ;
							}
							
							
						break ;
						
						case 2:
							imgPortafolio.src = 'img/Fundamentales/Distribucion/img_portafolio_vicks_mex.png' ;
							
							/**********************************************
							Locution Load
							***********************************************/
							var auLocucion = document.getElementById("auLocucion") ;
					
							auLocucion.src = 'audio/FundamentalesVenta/au_distribucion_portafolio_vick_mex.mp3' ;
					
							if (( auFlagLoc % 2 ) != 0)
							{
								auLocucion.play() ;
							}
							
							
						break ;
						
						case 3:
							imgPortafolio.src = 'img/Fundamentales/Distribucion/img_portafolio_peptoBismol_mex.png' ;
							
							/**********************************************
							Locution Load
							***********************************************/
							var auLocucion = document.getElementById("auLocucion") ;
					
							auLocucion.src = 'audio/FundamentalesVenta/au_distribucion_portafolio_peptoBismol_mex.mp3' ;
					
							if (( auFlagLoc % 2 ) != 0)
							{
								auLocucion.play() ;
							}
							
							
						break ;
						
						case 4:
							imgPortafolio.src = 'img/Fundamentales/Distribucion/img_portafolio_clearblue_mex.png' ;
							
							/**********************************************
							Locution Load
							***********************************************/
							var auLocucion = document.getElementById("auLocucion") ;
					
							auLocucion.src = 'audio/FundamentalesVenta/au_distribucion_portafolio_clearblue_mex.mp3' ;
					
							if (( auFlagLoc % 2 ) != 0)
							{
								auLocucion.play() ;
							}
							
							
						break ;
					}
					
					TweenMax.fromTo (imgPortafolio_distribucion , .5 , {css:{opacity:"0" , height:"0px"}} , {css:{opacity:"1" , height:"400px"}}) ;
				}
			}
			
			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_distribucion_portafolio_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_distribucion_portafolio_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_distribucion_portafolio_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_distribucion_portafolio_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_distribucion_portafolio_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_distribucion_portafolio_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_distribucion_portafolio_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_distribucion_portafolio_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_distribucion_portafolio_mex() ;
			});
			
			/////////////////////////////////Portafolio de Productos
				//Metamucil
			$('#btn_04_01').click(function() {
				changeImagePortfolio = 1 ;
				changeMyImage_mex() ;
			});
			
				//Vicks
			$('#btn_04_02').click(function() {
				changeImagePortfolio = 2 ;
				changeMyImage_mex() ;
			});
			
				//Pepto-Bismol
			$('#btn_04_03').click(function() {
				changeImagePortfolio = 3 ;
				changeMyImage_mex() ;
			});
			
				//Clearblue
			$('#btn_04_04').click(function() {
				changeImagePortfolio = 4 ;
				changeMyImage_mex() ;
			});
			
				/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_Fundamentales_portafolio_mex.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + distribucion_portafolio_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var btn_03_01 = document.getElementById("btn_03_01") ;
			var btn_03_02 = document.getElementById("btn_03_02") ;
			var btn_03_03 = document.getElementById("btn_03_03") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_03_01 , btn_03_02 , btn_03_03] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
			
			/////////////////////////////////Exit animation
			function exit_distribucion_portafolio()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var btn_03_01 = document.getElementById("btn_03_01") ;
				var btn_03_02 = document.getElementById("btn_03_02") ;
				var btn_03_03 = document.getElementById("btn_03_03") ;
				
				var imgPortafolio_distribucion = document.getElementById("imgPortafolio_distribucion") ;

				TweenMax.killTweensOf([txt_Title_bullets , btn_03_01 , btn_03_02 , btn_03_03]) ;

				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_03_01 , btn_03_02 , btn_03_03] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				
				TweenMax.fromTo (imgPortafolio_distribucion , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
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
			
			/////////////////////////////////ChangeImage
			function changeMyImage()
			{
				var imgPortafolio_distribucion = document.getElementById("imgPortafolio_distribucion") ;
				TweenMax.to (imgPortafolio_distribucion , .5 , {css:{opacity:"0" , height:"0px"} , onComplete:changeIt}) ;

				function changeIt()
				{
					var imgPortafolio_distribucion = document.getElementById("imgPortafolio_distribucion") ;
					var imgPortafolio = document.getElementById("imgPortafolio") ;
					
					switch(changeImagePortfolio)
					{
						case 1:
							imgPortafolio.src = 'img/Fundamentales/Distribucion/img_portafolio_vicks.png' ;
							
							/**********************************************
							Locution Load
							***********************************************/
							var auLocucion = document.getElementById("auLocucion") ;
					
							auLocucion.src = 'audio/FundamentalesVenta/au_distribucion_portafolio_vick_bra.mp3' ;
					
							if (( auFlagLoc % 2 ) != 0)
							{
								auLocucion.play() ;
							}
							
							
						break ;
						
						case 2:
							imgPortafolio.src = 'img/Fundamentales/Distribucion/img_portafolio_hipoglos.png' ;
							
							/**********************************************
							Locution Load
							***********************************************/
							var auLocucion = document.getElementById("auLocucion") ;
					
							auLocucion.src = 'audio/FundamentalesVenta/au_distribucion_portafolio_hipoglos_bra.mp3' ;
					
							if (( auFlagLoc % 2 ) != 0)
							{
								auLocucion.play() ;
							}
							
							
						break ;
						
						case 3:
							imgPortafolio.src = 'img/Fundamentales/Distribucion/img_portafolio_metamucil.png' ;
							
							/**********************************************
							Locution Load
							***********************************************/
							var auLocucion = document.getElementById("auLocucion") ;
					
							auLocucion.src = 'audio/FundamentalesVenta/au_distribucion_portafolio_metamucil_bra.mp3' ;
					
							if (( auFlagLoc % 2 ) != 0)
							{
								auLocucion.play() ;
							}
							
							
						break ;
					}
					
					TweenMax.fromTo (imgPortafolio_distribucion , .5 , {css:{opacity:"0" , height:"0px"}} , {css:{opacity:"1" , height:"400px"}}) ;
				}
			}
			
			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_distribucion_portafolio() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_distribucion_portafolio() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_distribucion_portafolio() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_distribucion_portafolio() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_distribucion_portafolio() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_distribucion_portafolio() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_distribucion_portafolio() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_distribucion_portafolio() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_distribucion_portafolio() ;
			});
			
			/////////////////////////////////Portafolio de Productos
				//Vicks
			$('#btn_03_01').click(function() {
				changeImagePortfolio = 1 ;
				changeMyImage() ;
			});
			
				//Hipoglos
			$('#btn_03_02').click(function() {
				changeImagePortfolio = 2 ;
				changeMyImage() ;
			});
			
				//Metamucil
			$('#btn_03_03').click(function() {
				changeImagePortfolio = 3 ;
				changeMyImage() ;
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
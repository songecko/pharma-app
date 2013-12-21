<!--Planilla de Objetivos-->
function guiaFarma()
{
	CleanScreen() ;
	
	gotoSlide = 'guiaFarma' ;
	
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
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_Induccion_herramientas_06.png' onmouseover='rollOver_ico_06()' /></div>"+

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
	/////////////////////////////////Mexico
	var guiaFarma_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Catálogos</div>"+

		//Images
			//01
		"<div class='guiaFarma_img' id='guiaFarma_img'><img src='img/Induccion/Herramientas/img_catalogos.png' /></div>"+		
		
		//Textos
		"<div class='txtguiaFarma' id='txtguiaFarma'>Fuente visual para  Consulta de los productos de cada una de las  marcas disponibles para  ventas con infomación, como descripcion de producto, codigo de barras, caracteristicas, gramaje etc.</div>"+
		
		//Slide Number
		"<div class='slideNumber'>020</div>"+
	"" ;
	
	
	/////////////////////////////////Brasil
	var guiaFarma_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Guia Farma</div>"+

		//Images
			//01
		"<div class='guiaFarma_img' id='guiaFarma_img'><img src='img/Induccion/Herramientas/img_guiaFarma.png' /></div>"+		
		
		//Textos
		"<div class='txtguiaFarma' id='txtguiaFarma'>Direcionamento completo e material de consulta para que seja feito o trabalho em loja. Contém: Passos da Visita, Breve Apresentação da Linha de Produtos, Sugestão de Abastecimento, Materiais POP Disponíveis (com medidas e loading), prioridades por marca, tabela de Preços.</div>"+

		//Slide Number
		"<div class='slideNumber'>023</div>"+
		
	"" ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + guiaFarma_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var guiaFarma_img = document.getElementById("guiaFarma_img") ;
			var txtguiaFarma = document.getElementById("txtguiaFarma") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (guiaFarma_img , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			TweenMax.fromTo (txtguiaFarma , 1 , {css:{opacity:"0" , top:"175px"}} , {css:{opacity:"1" , top:"225px"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_guiaFarma_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var guiaFarma_img = document.getElementById("guiaFarma_img") ;
				var pagObj_txt = document.getElementById("pagObj_txt") ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (guiaFarma_img , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				TweenMax.fromTo (txtguiaFarma , 1 , {css:{opacity:"1" , top:"225px"}} , {css:{opacity:"0" , top:"175px"}}) ;
				
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
							materialVisibilidad() ;
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
				exit_guiaFarma_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_guiaFarma_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_guiaFarma_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_guiaFarma_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_guiaFarma_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_guiaFarma_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_guiaFarma_mex() ;
			});

			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_guiaFarma_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_guiaFarma_mex() ;
			});
			
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_guiaFarma_mex.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + guiaFarma_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var guiaFarma_img = document.getElementById("guiaFarma_img") ;
			var txtguiaFarma = document.getElementById("txtguiaFarma") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (guiaFarma_img , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			TweenMax.fromTo (txtguiaFarma , 1 , {css:{opacity:"0" , top:"150px"}} , {css:{opacity:"1" , top:"225px"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_guiaFarma()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var guiaFarma_img = document.getElementById("guiaFarma_img") ;
				var pagObj_txt = document.getElementById("pagObj_txt") ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (guiaFarma_img , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				TweenMax.fromTo (txtguiaFarma , 1 , {css:{opacity:"1" , top:"225px"}} , {css:{opacity:"0" , top:"150px"}}) ;
						
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
							kitPresentacion() ;
						break;
						
						case 1:
							materialVisibilidad() ;
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
				exit_guiaFarma() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_guiaFarma() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_guiaFarma() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_guiaFarma() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_guiaFarma() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_guiaFarma() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_guiaFarma() ;
			});

			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_guiaFarma() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_guiaFarma() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_guiaFarma_bra.mp3' ;
	
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
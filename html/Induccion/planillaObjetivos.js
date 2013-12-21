<!--Planilla de Objetivos-->
function planillaObjetivos()
{
	CleanScreen() ;
	
	gotoSlide = 'planillaObjetivos' ;
	
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
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_Induccion_herramientas_02.png' onmouseover='rollOver_ico_06()' /></div>"+

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
	var planillaObjetivos_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Block de <b>Faltantes</b></div>"+
				
		//Images
			//01
		"<div class='onePage_img' id='onePage_img'><img src='img/Induccion/Herramientas/img_blockFaltantes.png'></div>"+		
		
		//Textos
		"<div class='txtHerramientas' id='txtHerramientas'>El block de faltantes nos sirve para que el farmacéutico anote los productos de la familia PGT que debe de solicitar a su distribuidor y que no puede hacer a través de el equipo de programa de farmacias.</div>"+
		
		//Slide Number
		"<div class='slideNumber'>019</div>"+
		
		
	"" ;
	
	
	/////////////////////////////////Brasil
	var planillaObjetivos_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Planilha de objetivos</div>"+
				
		//Images
			//01
		"<div class='planillaObj_img' id='planillaObj_img_02'><img src='img/Induccion/Herramientas/img_planillaObjetivos_01.png'></div>"+
			//02
		"<div class='planillaObj_img' id='planillaObj_img_01'><img src='img/Induccion/Herramientas/img_planillaObjetivos_02.png'></div>"+
			//03
		"<div class='planillaObj_img' id='planillaObj_img_03'><img src='img/Induccion/Herramientas/img_planillaObjetivos_03.png'></div>"+
		
		//Textos
			//01
		"<div class='planillaObj_txt' id='planillaObj_txt_02'><b>Positivação:</b><br/><br/>% de lojas do painel comprador que efetivamente compraram pelo menos 1 unidade de nossos produtos. A medida de positivação é MENSAL.</div>"+
			//02
		"<div class='planillaObj_txt' id='planillaObj_txt_01'><b>Vendas:</b><br/><br/>Obtenção de cota estipulada<br/><br/>Objetivo por setor e por marca; promove crescimento alinhado às expectativas da Categoria.</div>"+
			//03
		"<div class='planillaObj_txt' id='planillaObj_txt_03'><b>Visibilidade:</b><br/><br/>Obtenção de Níveis de Pontuação<br/><br/>Avaliação separada entre OTC e Perfumaria;<br/><br/>Pontuação por execução de material POP / Ponto Extra (maior peso para Iniciativas).</div>"+
		
		//Botón página de objetivos
		"<div class='rectangle_01' id='btn_PaginaObjetivos' onmouseover='rollOver_PaginaObjetivos()'>Página de<br/>objetivos</div>"+
		
		//Slide Number
		"<div class='slideNumber'>018</div>"+

	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + planillaObjetivos_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var onePage_img = document.getElementById("onePage_img") ;
			var txtHerramientas = document.getElementById("txtHerramientas") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (onePage_img , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			TweenMax.fromTo (txtHerramientas , 1 , {css:{opacity:"0" , left:"650px"}} , {css:{opacity:"1" , left:"700px"}}) ;
			
			/////////////////////////////////Exit animation
			function planillaObjetivos_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
	
				var onePage_img = document.getElementById("onePage_img") ;
				var pagObj_txt = document.getElementById("pagObj_txt") ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (onePage_img , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				TweenMax.fromTo (txtHerramientas , 1 , {css:{opacity:"1" , left:"700px"}} , {css:{opacity:"0" , left:"650px"}}) ;
				
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
							tablaPedidos() ;
						break;
						
						case 1:
							guiaFarma() ;
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
				planillaObjetivos_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				planillaObjetivos_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				planillaObjetivos_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				planillaObjetivos_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				planillaObjetivos_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				planillaObjetivos_mex() ;
			});
		
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				planillaObjetivos_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				planillaObjetivos_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				planillaObjetivos_mex() ;
			});
			
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_PlanillaObjetivos_mex_01.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + planillaObjetivos_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var planillaObj_img_01 = document.getElementById("planillaObj_img_01") ;
			var planillaObj_img_02 = document.getElementById("planillaObj_img_02") ;
			var planillaObj_img_03 = document.getElementById("planillaObj_img_03") ;
			
			var planillaObj_txt_01 = document.getElementById("planillaObj_txt_01") ;
			var planillaObj_txt_02 = document.getElementById("planillaObj_txt_02") ;
			var planillaObj_txt_03 = document.getElementById("planillaObj_txt_03") ;
			
			var planillaObj_txt_03 = document.getElementById("planillaObj_txt_03") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([planillaObj_img_01 , planillaObj_img_02 , planillaObj_img_03] , 1 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25) ;
			TweenMax.staggerFromTo ([planillaObj_txt_01 , planillaObj_txt_02 , planillaObj_txt_03] , 1 , {css:{opacity:"0" , left:"600px"}} , {css:{opacity:"1" , left:"500px"}} , .25) ;
			
			TweenMax.fromTo (btn_PaginaObjetivos , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_planillaObjetivos()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var planillaObj_img_01 = document.getElementById("planillaObj_img_01") ;
				var planillaObj_img_02 = document.getElementById("planillaObj_img_02") ;
				var planillaObj_img_03 = document.getElementById("planillaObj_img_03") ;
				
				var planillaObj_txt_01 = document.getElementById("planillaObj_txt_01") ;
				var planillaObj_txt_02 = document.getElementById("planillaObj_txt_02") ;
				var planillaObj_txt_03 = document.getElementById("planillaObj_txt_03") ;
				
				var planillaObj_txt_03 = document.getElementById("planillaObj_txt_03") ;
				
				TweenMax.fromTo (txt_Title_bullets , 1.5 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([planillaObj_img_01 , planillaObj_img_02 , planillaObj_img_03] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .25) ;
				TweenMax.staggerFromTo ([planillaObj_txt_01 , planillaObj_txt_02 , planillaObj_txt_03] , .5 , {css:{opacity:"1" , left:"500px"}} , {css:{opacity:"0" , left:"600px"}} , .25) ;
				
				TweenMax.fromTo (btn_PaginaObjetivos , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				
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
							tabletCelularMochila_01() ;
						break;
						
						case 2:
							tablaPedidos() ;
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
				exit_planillaObjetivos() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_planillaObjetivos() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_planillaObjetivos() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_planillaObjetivos() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_planillaObjetivos() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_planillaObjetivos() ;
			});
		
		
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_planillaObjetivos() ;
			});
			
			/////////////////////////////////Download
			$('#btn_PaginaObjetivos').click(function() {
				pagChange = 1 ;
				exit_planillaObjetivos() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_planillaObjetivos() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 2 ;
				exit_planillaObjetivos() ;
			});
			
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_PlanillaObjetivos_bra_01.mp3' ;
	
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
<!--Educación al Farmacéutico 01-->
function presentacionEficaz_determinarObjetivo()
{
	CleanScreen() ;
	
	gotoSlide = 'presentacionEficaz_determinarObjetivo' ;
	
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
		
		//Menu Presentacion Eficaz
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_presentacionEficaz.png' onmouseover='rollOver_ico_05()' /></div>"+	
		
		//Determinar Objetivo
		//"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_presentacionEficaz_determinarObjetivo.png' onmouseover='rollOver_ico_06()' /></div>"+
		
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
	var presentacionEficaz_01_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Determinar el <b>Objetivo</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_presentacionEficaz_s1_01'>El primer paso es definir el objetivo presentación.<br/><br/>Para hacer esto, usted debe ser capaz de responder algunas preguntas:</div>"+
				//02
		"<div class='all_leftText_bullet' id='all_leftText_presentacionEficaz_s1_02'><b>¿Qué obtengo?<br/><br/>¿Qué debe ocurrir después de la presentación?</b></div>"+
		
			//03
		"<div class='all_leftText' id='all_leftText_presentacionEficaz_s1_03'>Recuerda que un objetivo debe plantearse en formato EMAC</div>"+
				//04
		"<div class='all_leftText_bullet' id='all_leftText_presentacionEficaz_s1_04'>• <b>Especifico:</b> Que sea claro y concreto.<br/><br/><b>• Medible:</b> Que sea tangible y que se pueda comparar vs parámetros de éxito.<br/><br/>• <b>Alcanzable:</b> Retante pero razonable y lógico de acuerdo a las circunstancias de negocio y políticas de nuestros clientes.<br/><br/>• <b>Compatible:</b> Que nuestros esfuerzos tengan una relación directa y estén enfocados en cubrir necesidades tanto de nosotros como de nuestros clientes.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/TecnicaVentas/PresentacionEficaz/img_presentacionEficaz_01.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>236</div>"+
		
	"" ;
	
	/////////////////////////////////Brasil
	var presentacionEficaz_01_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Determinar o <b>Destino</b></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_presentacionEficaz_s1_01'>O primeiro passo consiste em definir o objetivo da apresentação<br/><br/>Para fazer isso, você deve ser capaz de responder algumas perguntas:</div>"+
				//02
		"<div class='all_leftText_bullet' id='all_leftText_presentacionEficaz_s1_02'><b>O que eu ganho?<br/><br/>O que deve acontecer após a apresentação?</b></div>"+
		
			//03
		"<div class='all_leftText' id='all_leftText_presentacionEficaz_s1_03'>Lembre-se que a meta deve considerar o formato EMAC</div>"+
				//04
		"<div class='all_leftText_bullet' id='all_leftText_presentacionEficaz_s1_04'>• <b>Específico:</b> Deixe claro e concreto.<br/><br/><b>• Mensurável:</b> torná-lo palpável, que se possa comparar parâmetros de sucesso versus ????<br/><br/>• <b>Alcançáveis​​:</b> circunstâncias desafiadoras, mas razoável e lógica de acordo com o negócio e política dos nossos clientes.<br/><br/>• <b>Compatível:</b> que nossos esforços têm uma relação direta e estão focados em satisfazer as necessidades de ambos: nós e nossos clientes.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/TecnicaVentas/PresentacionEficaz/img_presentacionEficaz_01.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>182</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + presentacionEficaz_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_presentacionEficaz_s1_01 = document.getElementById("all_leftText_presentacionEficaz_s1_01") ;
			var all_leftText_presentacionEficaz_s1_02 = document.getElementById("all_leftText_presentacionEficaz_s1_02") ;
			var all_leftText_presentacionEficaz_s1_03 = document.getElementById("all_leftText_presentacionEficaz_s1_03") ;
			var all_leftText_presentacionEficaz_s1_04 = document.getElementById("all_leftText_presentacionEficaz_s1_04") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_presentacionEficaz_s1_01 , all_leftText_presentacionEficaz_s1_03] , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.staggerFromTo ([all_leftText_presentacionEficaz_s1_02 , all_leftText_presentacionEficaz_s1_04] , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5} , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"0px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_presentacionEficaz_determinarObjetivos_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_presentacionEficaz_s1_01 = document.getElementById("all_leftText_presentacionEficaz_s1_01") ;
				var all_leftText_presentacionEficaz_s1_02 = document.getElementById("all_leftText_presentacionEficaz_s1_02") ;
				var all_leftText_presentacionEficaz_s1_03 = document.getElementById("all_leftText_presentacionEficaz_s1_03") ;
				var all_leftText_presentacionEficaz_s1_04 = document.getElementById("all_leftText_presentacionEficaz_s1_04") ;

				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_presentacionEficaz_s1_01 , all_leftText_presentacionEficaz_s1_02 , all_rightImage]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_presentacionEficaz_s1_01 , all_leftText_presentacionEficaz_s1_03] , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				
				TweenMax.staggerFromTo ([all_leftText_presentacionEficaz_s1_02 , all_leftText_presentacionEficaz_s1_04] , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}} , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"0px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_presentacionEficaz() ;
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
							menu_tecnicaVentas() ;
						break;
						
						case 1:
							presentacionEficaz_analizarPublico() ;
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
				exit_presentacionEficaz_determinarObjetivos_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_presentacionEficaz_determinarObjetivos_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_presentacionEficaz_determinarObjetivos_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_presentacionEficaz_determinarObjetivos_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_presentacionEficaz_determinarObjetivos_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_presentacionEficaz_determinarObjetivos_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
						pagChange = -1 ;
				exit_presentacionEficaz_determinarObjetivos_mex() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_presentacionEficaz_determinarObjetivos_mex() ;
			});
			
			/////////////////////////////////Flecha next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_presentacionEficaz_determinarObjetivos_mex() ;
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
			document.getElementById("Container").innerHTML = generalElements + presentacionEficaz_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_presentacionEficaz_s1_01 = document.getElementById("all_leftText_presentacionEficaz_s1_01") ;
			var all_leftText_presentacionEficaz_s1_02 = document.getElementById("all_leftText_presentacionEficaz_s1_02") ;
			var all_leftText_presentacionEficaz_s1_03 = document.getElementById("all_leftText_presentacionEficaz_s1_03") ;
			var all_leftText_presentacionEficaz_s1_04 = document.getElementById("all_leftText_presentacionEficaz_s1_04") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_presentacionEficaz_s1_01 , all_leftText_presentacionEficaz_s1_03] , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.staggerFromTo ([all_leftText_presentacionEficaz_s1_02 , all_leftText_presentacionEficaz_s1_04] , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5} , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"0px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_presentacionEficaz_determinarObjetivos()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_presentacionEficaz_s1_01 = document.getElementById("all_leftText_presentacionEficaz_s1_01") ;
				var all_leftText_presentacionEficaz_s1_02 = document.getElementById("all_leftText_presentacionEficaz_s1_02") ;
				var all_leftText_presentacionEficaz_s1_03 = document.getElementById("all_leftText_presentacionEficaz_s1_03") ;
				var all_leftText_presentacionEficaz_s1_04 = document.getElementById("all_leftText_presentacionEficaz_s1_04") ;

				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_presentacionEficaz_s1_01 , all_leftText_presentacionEficaz_s1_02 , all_rightImage]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([all_leftText_presentacionEficaz_s1_01 , all_leftText_presentacionEficaz_s1_03] , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				
				TweenMax.staggerFromTo ([all_leftText_presentacionEficaz_s1_02 , all_leftText_presentacionEficaz_s1_04] , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}} , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"0px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_presentacionEficaz() ;
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
							menu_tecnicaVentas() ;
						break;
						
						case 1:
							presentacionEficaz_analizarPublico() ;
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
				exit_presentacionEficaz_determinarObjetivos() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_presentacionEficaz_determinarObjetivos() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_presentacionEficaz_determinarObjetivos() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_presentacionEficaz_determinarObjetivos() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_presentacionEficaz_determinarObjetivos() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_presentacionEficaz_determinarObjetivos() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
						pagChange = -1 ;
				exit_presentacionEficaz_determinarObjetivos() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_presentacionEficaz_determinarObjetivos() ;
			});
			
			/////////////////////////////////Flecha next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_presentacionEficaz_determinarObjetivos() ;
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
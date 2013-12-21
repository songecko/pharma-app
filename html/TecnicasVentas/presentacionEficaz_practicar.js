<!--Educación al Farmacéutico 01-->
function presentacionEficaz_practicar()
{
	CleanScreen() ;
	
	gotoSlide = 'presentacionEficaz_practicar' ;
	
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
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_presentacionEficaz_practicar.png' onmouseover='rollOver_ico_06()' /></div>"+
		
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
	var presentacionEficaz_01_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Practicar</div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_presentacionEficaz_s5_01'>• Practicar te permite dominar el tema.<br/><br/>• Manejar mejor los tiempos.<br/><br/>• Ser mas conciso.<br/><br/>• Darte cuenta que falta algo.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/TecnicaVentas/PresentacionEficaz/img_presentacionEficaz_06.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>241</div>"+
		
	"" ;
	
	
	/////////////////////////////////Brasil
	var presentacionEficaz_01_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Prática</div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_presentacionEficaz_s5_01'>• Prática permite que você domine o assunto.<br/><br/>• Melhore a gestão do tempo.<br/><br/>• Seja mais conciso.<br/><br/>• Percebendo que algo está faltando.</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/TecnicaVentas/PresentacionEficaz/img_presentacionEficaz_06.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>187</div>"+
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
			
			var all_leftText_presentacionEficaz_s5_01 = document.getElementById("all_leftText_presentacionEficaz_s5_01") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (all_leftText_presentacionEficaz_s5_01 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}}) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"50px"} , delay:.5}) ;
			
			/////////////////////////////////Exit animation
			function exit_presentacionEficaz_practicar_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_presentacionEficaz_s5_01 = document.getElementById("all_leftText_presentacionEficaz_s5_01") ;
				var all_leftText_presentacionEficaz_s5_02 = document.getElementById("all_leftText_presentacionEficaz_s5_02") ;

				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_presentacionEficaz_s5_01 , all_rightImage]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (all_leftText_presentacionEficaz_s5_01 , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}}) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"50px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
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
							presentacionEficaz_desarrollarPresentacion() ;
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
				exit_presentacionEficaz_practicar_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_presentacionEficaz_practicar_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_presentacionEficaz_practicar_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_presentacionEficaz_practicar_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_presentacionEficaz_practicar_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_presentacionEficaz_practicar_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_presentacionEficaz_practicar_mex() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_presentacionEficaz_practicar_mex() ;
			});
			
			/////////////////////////////////Flecha next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_presentacionEficaz_practicar_mex() ;
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
			
			var all_leftText_presentacionEficaz_s5_01 = document.getElementById("all_leftText_presentacionEficaz_s5_01") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (all_leftText_presentacionEficaz_s5_01 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}}) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"50px"} , delay:.5}) ;
			
			/////////////////////////////////Exit animation
			function exit_presentacionEficaz_practicar()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_presentacionEficaz_s5_01 = document.getElementById("all_leftText_presentacionEficaz_s5_01") ;
				var all_leftText_presentacionEficaz_s5_02 = document.getElementById("all_leftText_presentacionEficaz_s5_02") ;

				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_presentacionEficaz_s5_01 , all_rightImage]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (all_leftText_presentacionEficaz_s5_01 , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}}) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"50px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
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
							presentacionEficaz_desarrollarPresentacion() ;
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
				exit_presentacionEficaz_practicar() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_presentacionEficaz_practicar() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_presentacionEficaz_practicar() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_presentacionEficaz_practicar() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_presentacionEficaz_practicar() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_presentacionEficaz_practicar() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_presentacionEficaz_practicar() ;
			});
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_presentacionEficaz_practicar() ;
			});
			
			/////////////////////////////////Flecha next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_presentacionEficaz_practicar() ;
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
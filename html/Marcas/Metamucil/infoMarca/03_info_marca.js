<!--Menu Metamucil-->
function info_marca_03()
{
	CleanScreen() ;
	
	gotoSlide = 'info_marca_03' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_Marcas.png' onmouseover='rollOver_ico_04()' /></div>"+
		
		//Menu Metamucil
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_metamucil.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		//Info Metamucil
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_info_marca.png' onmouseover='rollOver_ico_06()' /></div>"+
				
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
		
			
		"" ;
		
	/*****************************
	Contenidos
	*****************************/
	/////////////////////////////////Mexico
	var info03_metamucil_mexico =
	
		//Flechas anterior y siguiente
				//Anterior
			"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()' ><img src='img/img_flecha_back.png' /></div>"+
				//Siguiente
			"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
			
		//Title bullets
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>"+
			"<div class='img00_sld_02' id='img00_sld_02'>"+
				"<img src='img/marcas/metamucil/slide2/mexico_flag.png' />"+
			"</div>"+
			"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Consumidor <b>Mexicano</b>"+
		"</div>"+
		//Elements
			//img 01
		"<div  style='position:absolute; margin-top:80px;' class='img01_sld_02' id='img01_sld_02'>"+
			"<img src='img/marcas/metamucil/slide2/meta_01_mx.png' width='600' />"+
		"</div>"+
		
			//texto 01
		"<div style='position:absolute; margin-left:50px;' class='txt01_sld_02' id='txt01_sld_02'>"+
			"40% de Mexicanos presentan altos niveles de colesterol</br>"+
			"60% de Mexicanos  declararon alguna vez haber sufrido estreñimiento</br>"+
			"43% de los consumidores de laxantes son altamente leales a su marca habitual.</br>"+
			"<b>Los usuarios de laxantes son principalmente mujeres</b></br>"+
			"Entre 25  y 55 años</br>"+
			"46% casadas</br>"+
			"50% trabaja tiempo completo o medio tiempo"+
		"</div>"+
		
			//texto Mexico add
		"<div id='txt_add_sld_02' style='position:absolute; top:266px; left:120px; width:400px; height:24px;font-size:1.25em; text-align:left; color:#272628; line-height:2em;'>"+
			"Doctores / Farmaceuticos(61%) publicidad (53%), son los vehiculos mas comunes de  donde los consumidores de laxantes obtienen información acerca de los productos."+
		"</div>"+
	
			//img 02
		"<div class='img02_sld_02' id='img02_sld_02'>"+
			"<img src='img/marcas/metamucil/slide2/meta_02.png' />"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>028</div>"+
	
	"" ;
	
	
	/////////////////////////////////Brasil
	var info03_metamucil_brasil =
		//Flechas anterior y siguiente
				//Anterior
			"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()' ><img src='img/img_flecha_back.png' /></div>"+
				//Siguiente
			//"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
			
		//Elements
			//img 01
		"<div class='img00_sld_03' id='img00_sld_03'>"+
			"<img src='img/marcas/metamucil/slide3/meta_01.png' />"+
		"</div>"+
		
			//img 02
		"<div class='img01_sld_03' id='img01_sld_03'>"+
			"<img src='img/marcas/metamucil/slide3/meta_02.png' />"+
		"</div>"+
		
			//img 03
		"<div class='img02_sld_03' id='img02_sld_03'>"+
			"<img src='img/marcas/metamucil/slide3/meta_03.png' />"+
		"</div>"+
		
			//img 04
		"<div class='img03_sld_03' id='img03_sld_03'>"+
			"<img src='img/marcas/metamucil/slide3/meta_04.png' />"+
		"</div>"+
		
			//img 05
		"<div class='img04_sld_03' id='img04_sld_03'>"+
			"<img src='img/marcas/metamucil/slide3/meta_05.png' />"+
		"</div>"+
		
			//img 06
		"<div class='img05_sld_03' id='img05_sld_03'>"+
			"<img src='img/marcas/metamucil/slide3/meta_06.png' />"+
		"</div>"+
		
			//img 07
		"<div class='img06_sld_03' id='img06_sld_03'>"+
			"<img src='img/marcas/metamucil/slide3/meta_07.png' />"+
		"</div>"+
		
			//texto 01
		"<div class='txt01_sld_03' id='txt01_sld_03'>"+
			"Fonte de fibra de origem 100% natural</br>"+
			"Ajuda você a se sentir mais leve</br>"+
			"Sem açúcar</br>"+
			"Ajuda a regularizar seu intestino</br>"+
			"Auxilia na redução dos níveis de colesterol*"+
		"</div>"+
	
			//texto 02
		"<div class='txt02_sld_03' id='txt02_sld_03'>"+
			"*Acompanhado de uma dieta baixa em</br>"+
			"gorduras saturadas e exercício regular."+
		"</div>"+
	
		//Slide Number
		"<div class='slideNumber'>030</div>"+
	
	"" ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
		
			document.getElementById("Container").innerHTML = generalElements + info03_metamucil_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			ChangeExit = 1;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			var txt_add_sld_02 = document.getElementById("txt_add_sld_02") ;
			var img01_sld_02 = document.getElementById("img01_sld_02") ;
			var txt01_sld_02 = document.getElementById("txt01_sld_02") ;
			var img02_sld_02 = document.getElementById("img02_sld_02") ;
			
			TweenMax.staggerFromTo ([txt_add_sld_02, img01_sld_02 , txt01_sld_02 , img02_sld_02], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_mx()
			{
				var txt_add_sld_02 = document.getElementById("txt_add_sld_02") ;
				var img01_sld_02 = document.getElementById("img01_sld_02") ;
				var txt01_sld_02 = document.getElementById("txt01_sld_02") ;
				var img02_sld_02 = document.getElementById("img02_sld_02") ;
		
				TweenMax.staggerFromTo ([txt_add_sld_02, img01_sld_02 , txt01_sld_02 , img02_sld_02], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .1 ) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				
				TweenMax.fromTo (txt_Title_bullets , .75 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay: .6 , onComplete:ChangePage}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_metamucil() ;
						break;
						
						case -6:
							menu_marcas() ;
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
							info_marca_02() ;
						break;
						
						case 1:
							info_marca_04() ;
						break ;
						
						case 2:
							
						break ;
						
						case 3:
							
						break ;
					}
				}
			}
			
			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_mx() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_mx() ;
			});
			
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas_mx/metamucil/infoMarca/au_infoMarca03_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + info03_metamucil_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			ChangeExit = 5;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var img00_sld_03 = document.getElementById("img00_sld_03") ;
			TweenMax.fromTo (img00_sld_03 , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			
			var img01_sld_03 = document.getElementById("img01_sld_03") ;
			var img02_sld_03 = document.getElementById("img02_sld_03") ;
			var img03_sld_03 = document.getElementById("img03_sld_03") ;
			var img04_sld_03 = document.getElementById("img04_sld_03") ;
			var img05_sld_03 = document.getElementById("img05_sld_03") ;
			var img06_sld_03 = document.getElementById("img06_sld_03") ;
			var txt01_sld_03 = document.getElementById("txt01_sld_03") ;
			var txt02_sld_03 = document.getElementById("txt02_sld_03") ;
			
			TweenMax.staggerFromTo ([img01_sld_03, img02_sld_03, img03_sld_03, img04_sld_03, img05_sld_03, img06_sld_03, txt01_sld_03, txt02_sld_03], .3 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			/////////////////////////////////Exit animation
			
			function exit_br()
			{
				var img01_sld_03 = document.getElementById("img01_sld_03") ;
				var img02_sld_03 = document.getElementById("img02_sld_03") ;
				var img03_sld_03 = document.getElementById("img03_sld_03") ;
				var img04_sld_03 = document.getElementById("img04_sld_03") ;
				var img05_sld_03 = document.getElementById("img05_sld_03") ;
				var img06_sld_03 = document.getElementById("img06_sld_03") ;
				var txt01_sld_03 = document.getElementById("txt01_sld_03") ;
				var txt02_sld_03 = document.getElementById("txt02_sld_03") ;
		
				TweenMax.staggerFromTo ([img01_sld_03, img02_sld_03, img03_sld_03, img04_sld_03, img05_sld_03, img06_sld_03, txt01_sld_03, txt02_sld_03], .3 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .1 ) ;
				
				var img00_sld_03 = document.getElementById("img00_sld_03") ;
				
				TweenMax.fromTo (img00_sld_03 , .75 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay: .6 , onComplete:ChangePage}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_metamucil() ;
						break;
						
						case -6:
							menu_marcas() ;
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
							info_marca_02() ;
						break;
						
						case 1:
							info_marca_04() ;
						break ;
						
						case 2:
							
						break ;
						
						case 3:
							
						break ;
					}
				}
			}
			
			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_br() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_br() ;
			});

			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/metamucil/au_marcas_metamucil_infoMarca_bra03.mp3' ;
			
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


	/**********************************************
	Button Actions
	***********************************************/
	/////////////////////////////////Icons
		//01
	$('#ico_01').click(function() {
		pagChange = -2 ;
		ExitSelect();
	});
	
		//02
	$('#ico_02').click(function() {
		pagChange = -3 ;
		ExitSelect();
	});
	
		//03
	$('#ico_03').click(function() {
		pagChange = -4 ;
		ExitSelect();
	});
	
		//04
	$('#ico_04').click(function() {
		pagChange = -5 ;
		ExitSelect();
	});
	
		//05
	$('#ico_05').click(function() {
		pagChange = -6 ;
		ExitSelect();
	});
	
		//06
	$('#ico_06').click(function() {
		pagChange = -7 ;
		ExitSelect();
	});

	/////////////////////////////////Language Selector
	$('#worlMap_icon').click(function() {
		pagChange = -1;
		ExitSelect();
	}); 
	
	/////////////////////////////////Exit Selector
	function ExitSelect () {
		switch(ChangeExit) {
			case 1:
				exit_mx();
				break;

			case 5:
				exit_br();
				break;
		}
	}
}
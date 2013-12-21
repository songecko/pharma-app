<!--Menu Metamucil-->
function info_marca_01()
{
	CleanScreen() ;
	
	gotoSlide = 'info_marca_01' ;
	
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
	var info01_metamucil_mexico =
	//Flechas anterior y siguiente
			//Anterior
		"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()' ><img src='img/img_flecha_back.png' /></div>"+
			//Siguiente
		"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
		
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>¿Qué es <b>Metamucil</b>?</div>"+
	
	//Elements
		//img 00 Woman Background
	"<div class='img00_sld_01' id='img00_sld_01'>"+
		"<img src='img/marcas/metamucil/slide1/meta_02.png' />"+
	"</div>"+
	
			//img 01 Bg _01
		"<div style='position:absolute; z-index:-1; top:264px; left:99px; width:532px; height:619px;' id='img01_sld_01'>"+
			"<img src='img/marcas/metamucil/slide1/meta_01_new.png' />"+
		"</div>"+
		
			//img 01b Bg _02
		"<div style='position:absolute; z-index:-1; top:264px; left:649px; width:532px; height:619px;' id='img01b_sld_01'>"+
			"<img src='img/marcas/metamucil/slide1/meta_01_new.png' />"+
		"</div>"+
		
			//img 01c Bg _02
		"<div style='position:absolute; z-index:1; top:205px; left:466px; width:236px; height:117px;' id='img01c_sld_01'>"+
			"<img src='img/marcas/metamucil/slide1/meta_02_new.png' />"+
		"</div>"+
		
			//img 01d Bg _02
		"<div style='position:absolute; z-index:1; top:205px; left:1016px; width:236px; height:117px;' id='img01d_sld_01'>"+
			"<img src='img/marcas/metamucil/slide1/meta_03_new.png' />"+
		"</div>"+
		
				//texto 01
			"<div style='position:absolute; z-index:2; top:308px; left:171px; width:400px; height:40px; "+ 
			"font-size: 2em ; text-align:left; color: #FFF ;' id='txt01_sld_01'>"+
				"¿Qué es Metamucil?"+
			"</div>"+
			
				//texto 02
			"<div style='position:absolute; z-index:2; top:300px; left:725px; width:400px; height:40px; "+ 
			"font-size: 2em ; text-align:left; color: #FFF ;' id='txt02_sld_01'>"+
				"Beneficios de psyllium"+
			"</div>"+
			
				//texto 03
			"<div style='position:absolute; z-index:2; top:380px; left:175px; width:380px; height:380px; "+ 
			"font-size: 1.5em; line-height:1.25em; text-align:left; color: #333 ;' id='txt03_sld_01'>"+
				"• Se trata de una fibra de origen natural 100% que actúa como un laxante y suplemento de fibra.</br></br>"+

				"• Psyllium es el ingrediente activo</br></br>"+
				
				"• Se produce naturalmente en la India. Es una fibra natural de origen vegetal cosechadas a mano durante los meses de la primavera. </br></br>"+
				
				"• No es artificial o quimicamente alterado"+
			"</div>"+
			
				//texto 04
			"<div style='position:absolute; z-index:2; top:416px; left:725px; width:380px; height:380px; "+ 
			"font-size: 1.3em; line-height:1.25em; text-align:left; color: #333 ;' id='txt04_sld_01'>"+
			
				"• Regula el intestino de forma natural</br></br>"+
				"• Le ayuda a eliminar los residuos (desintoxicación)</br></br>"+
				"• Reduce el colesterol</br></br>"+
				"• Te hace sentir más ligero</br></br>"+
				"• Fuente de fibra 100% natural</br></br>"+
				"• Regula los niveles de azúcar en la sangre y controla el apetito"+
				
			"</div>"+
			
		//Slide Number
		"<div class='slideNumber'>026</div>"+

	"" ;
	
	/////////////////////////////////Brasil
	var info01_metamucil_brasil =
		//Flechas anterior y siguiente
			//Anterior
		"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()' ><img src='img/img_flecha_back.png' /></div>"+
			//Siguiente
		"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
		
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>O que é <b>Metamucil</b>?</div>"+
		
		//Elements
			//img 00 Woman Background
		"<div class='img00_sld_01' id='img00_sld_01'>"+
			"<img src='img/marcas/metamucil/slide1/meta_02.png' />"+
		"</div>"+
	
			//img 01 Bg _01
		"<div style='position:absolute; z-index:-1; top:264px; left:99px; width:532px; height:619px;' id='img01_sld_01'>"+
			"<img src='img/marcas/metamucil/slide1/meta_01_new.png' />"+
		"</div>"+
		
			//img 01b Bg _02
		"<div style='position:absolute; z-index:-1; top:264px; left:649px; width:532px; height:619px;' id='img01b_sld_01'>"+
			"<img src='img/marcas/metamucil/slide1/meta_01_new.png' />"+
		"</div>"+
		
			//img 01c Bg _02
		"<div style='position:absolute; z-index:1; top:205px; left:466px; width:236px; height:117px;' id='img01c_sld_01'>"+
			"<img src='img/marcas/metamucil/slide1/meta_02_new.png' />"+
		"</div>"+
		
			//img 01d Bg _02
		"<div style='position:absolute; z-index:1; top:205px; left:1016px; width:236px; height:117px;' id='img01d_sld_01'>"+
			"<img src='img/marcas/metamucil/slide1/meta_03_new.png' />"+
		"</div>"+
		
				//texto 01
			"<div style='position:absolute; z-index:2; top:308px; left:171px; width:400px; height:40px; "+ 
			"font-size: 2em ; text-align:left; color: #FFF ;' id='txt01_sld_01'>"+
				"O que é Metamucil?"+
			"</div>"+
			
				//texto 02
			"<div style='position:absolute; z-index:2; top:300px; left:725px; width:400px; height:40px; "+ 
			"font-size: 2em ; text-align:left; color: #FFF ;' id='txt02_sld_01'>"+
				"Benefícios do Psyllium"+
			"</div>"+
			
				//texto 03
			"<div style='position:absolute; z-index:2; top:416px; left:175px; width:380px; height:380px; "+ 
			"font-size: 1.5em; line-height:1.25em; text-align:left; color: #333 ;' id='txt03_sld_01'>"+
				"• É uma fibra de origem 100% natural que atua como laxante e suplemento de fibra.</br></br>"+

				"• O Psyllium é o ingrediente ativo</br></br>"+
				
				"• É produzido naturalmente na Índia. É uma fibra vegetal natural colhida à mão durante os meses de primavera.</br></br>"+
				
				"• Não é artificialmente ou quimicamente alterado."+
			"</div>"+
			
				//texto 04
			"<div style='position:absolute; z-index:2; top:416px; left:725px; width:380px; height:380px; "+ 
			"font-size: 1.5em; line-height:1.25em; text-align:left; color: #333 ;' id='txt04_sld_01'>"+
				"• Regula o intestino de forma natural</br></br>"+

				"• Ajuda a remover resíduos (desintoxicação) reduz o colesterol</br></br>"+
				
				"• Isso faz você se sentir mais leve</br></br>"+
				
				"• Fonte de fibra 100% natural</br></br>"+
				
				"• Regula os níveis de açúcar no sangue, controla o apetite."+
			"</div>"+	
			
		//Slide Number
		"<div class='slideNumber'>028</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			
			document.getElementById("Container").innerHTML = generalElements + info01_metamucil_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			ChangeExit = 1;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			var img00_sld_01 = document.getElementById("img00_sld_01") ;
			var img01_sld_01 = document.getElementById("img01_sld_01") ;
			var img01b_sld_01 = document.getElementById("img01b_sld_01") ;
			var img01c_sld_01 = document.getElementById("img01c_sld_01") ;
			var img01d_sld_01 = document.getElementById("img01d_sld_01") ;
			var txt01_sld_01 = document.getElementById("txt01_sld_01") ;
			var txt02_sld_01 = document.getElementById("txt02_sld_01") ;
			var txt03_sld_01 = document.getElementById("txt03_sld_01") ;
			var txt04_sld_01 = document.getElementById("txt04_sld_01") ;
			
			TweenMax.staggerFromTo ([img00_sld_01 , img01_sld_01 , img01c_sld_01 , txt01_sld_01 , txt03_sld_01 , img01b_sld_01 , img01d_sld_01 , txt02_sld_01 , txt04_sld_01], .5 , 
				{css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_mx()
			{
				var img00_sld_01 = document.getElementById("img00_sld_01") ;
				var img01_sld_01 = document.getElementById("img01_sld_01") ;
				var img01b_sld_01 = document.getElementById("img01b_sld_01") ;
				var img01c_sld_01 = document.getElementById("img01c_sld_01") ;
				var img01d_sld_01 = document.getElementById("img01d_sld_01") ;
				var txt01_sld_01 = document.getElementById("txt01_sld_01") ;
				var txt02_sld_01 = document.getElementById("txt02_sld_01") ;
				var txt03_sld_01 = document.getElementById("txt03_sld_01") ;
				var txt04_sld_01 = document.getElementById("txt04_sld_01") ;
		
				TweenMax.staggerFromTo ([txt04_sld_01, txt02_sld_01 , img01d_sld_01 , img01b_sld_01 , txt03_sld_01 , txt01_sld_01 , img01c_sld_01 , img01_sld_01 , img00_sld_01 ], .3 , 
					{css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .1 ) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				
				TweenMax.fromTo (txt_Title_bullets , .75 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay: 1 , onComplete:ChangePage}) ;
				
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
							menu_metamucil() ;
						break;
						
						case 1:
							info_marca_02() ;
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
				ExitSelect() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				ExitSelect() ;
			});
		
			/////////////////////////////////Button 01
			$('#btn_03_01').click(function() {
				pagChange = 2 ;
				//ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_02').click(function() {
				pagChange = 3 ;
				//ExitSelect() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas_mx/metamucil/infoMarca/au_infoMarca01_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + info01_metamucil_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			ChangeExit = 5;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			var img00_sld_01 = document.getElementById("img00_sld_01") ;
			var img01_sld_01 = document.getElementById("img01_sld_01") ;
			var img01b_sld_01 = document.getElementById("img01b_sld_01") ;
			var img01c_sld_01 = document.getElementById("img01c_sld_01") ;
			var img01d_sld_01 = document.getElementById("img01d_sld_01") ;
			var txt01_sld_01 = document.getElementById("txt01_sld_01") ;
			var txt02_sld_01 = document.getElementById("txt02_sld_01") ;
			var txt03_sld_01 = document.getElementById("txt03_sld_01") ;
			var txt04_sld_01 = document.getElementById("txt04_sld_01") ;
			
			TweenMax.staggerFromTo ([img00_sld_01 , img01_sld_01 , img01c_sld_01 , txt01_sld_01 , txt03_sld_01 , img01b_sld_01 , img01d_sld_01 , txt02_sld_01 , txt04_sld_01], .5 , 
				{css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_br()
			{
				var img00_sld_01 = document.getElementById("img00_sld_01") ;
				var img01_sld_01 = document.getElementById("img01_sld_01") ;
				var img01b_sld_01 = document.getElementById("img01b_sld_01") ;
				var img01c_sld_01 = document.getElementById("img01c_sld_01") ;
				var img01d_sld_01 = document.getElementById("img01d_sld_01") ;
				var txt01_sld_01 = document.getElementById("txt01_sld_01") ;
				var txt02_sld_01 = document.getElementById("txt02_sld_01") ;
				var txt03_sld_01 = document.getElementById("txt03_sld_01") ;
				var txt04_sld_01 = document.getElementById("txt04_sld_01") ;
		
				TweenMax.staggerFromTo ([txt04_sld_01, txt02_sld_01 , img01d_sld_01 , img01b_sld_01 , txt03_sld_01 , txt01_sld_01 , img01c_sld_01 , img01_sld_01 , img00_sld_01 ], .3 , 
					{css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .1 ) ;
				
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
							menu_metamucil() ;
						break;
						
						case 1:
							info_marca_02() ;
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
				ExitSelect() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				ExitSelect() ;
			});
		
			/////////////////////////////////Button 01
			$('#btn_03_01').click(function() {
				pagChange = 2 ;
				//ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_02').click(function() {
				pagChange = 3 ;
				//ExitSelect() ;
			});	
			
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/metamucil/au_marcas_metamucil_infoMarca_bra01.mp3' ;
			
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
		ExitSelect() ;
	});
	
		//02
	$('#ico_02').click(function() {
		pagChange = -3 ;
		ExitSelect() ;
	});
	
		//03
	$('#ico_03').click(function() {
		pagChange = -4 ;
		ExitSelect() ;
	});
	
		//04
	$('#ico_04').click(function() {
		pagChange = -5 ;
		ExitSelect() ;
	});
	
		//05
	$('#ico_05').click(function() {
		pagChange = -6 ;
		ExitSelect() ;
	});
	
		//06
	$('#ico_06').click(function() {
		pagChange = -7 ;
		ExitSelect() ;
	});
	
	/////////////////////////////////Language Selector
	$('#worlMap_icon').click(function() {
		pagChange = -1 ;
		ExitSelect() ;
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
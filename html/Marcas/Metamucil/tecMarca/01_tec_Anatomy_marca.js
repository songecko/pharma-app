<!--Menu Metamucil-->
function tec_Anatomy_marca_01()
{
	CleanScreen() ;
	
	gotoSlide = 'tec_Anatomy_marca_01' ;
	
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
		
		//Menu Info Tecnica
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_infoTec_marca.png' onmouseover='rollOver_ico_06()' /></div>"+
		
		//Menu Info Tecnica Anatomy
		"<div class='shortCuts' id='ico_07'><img src='img/icons/ico_menu_infoTec_Anatomy.png' onmouseover='rollOver_ico_07()' /></div>"+
	
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
	/////////////////////////////////Mexico
	var metam_info_tec_01_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Sistema <b>digestivo</b></div>"+
		
		//Elements
			//img 01
		"<div class='img01_sld_01_infotec' id='img01_sld_01_infotec'>"+
			"<img src='img/marcas/metamucil/infoTec/anatomia/slide1/meta_01.png' />"+
		"</div>"+
		
			//texto 01
		"<div class='txt01_sld_01_infotec' id='txt01_sld_01_infotec'>"+
			"<b>Boca</br></b>"+
			"La digestión comienza con el primer mordisco de alimento. La masticación rompe el alimento en pequeños trozos. La saliva se mezcla con el alimento para comenzar el proceso de degradarlo a una forma que el cuerpo pueda absorber y usar"+
		"</div>"+
	
			//texto 02
		"<div class='txt02_sld_01_infotec' id='txt02_sld_01_infotec'>"+
			"<b>Estómago </br></b>"+
			"Las células del revestimiento del estómago secretan un ácido fuerte y poderosas enzimas que son responsables de degradar el alimento a una forma capaz de ser usada."+
		"</div>"+		
	
			//texto 03
		"<div class='txt03_sld_01_infotec' id='txt03_sld_01_infotec'>"+
			"<b>Pâncreas </br></b>"+
			"Secreta enzimas al duodeno que degradan proteínas, grasas e hidratos de carbono."+
		"</div>"+
		
			//texto 04
		"<div class='txt04_sld_01_infotec' id='txt04_sld_01_infotec'>"+
			"<b>Intestino delgado </br></b>"+
			"Tubo muscular de 7 metros de largo conformado por 3 segmentos: duodeno, yeyuno e íleon. El alimento se mezcla con las secreciones digestivas del páncreas y el hígado. La absorción de nutrientes al torrente sanguíneo ocurre principalmente en el yeyuno y el íleon."+
		"</div>"+
		
			//texto 05
		"<div class='txt05_sld_01_infotec' id='txt05_sld_01_infotec'>"+
			"<b>Esôfago</br></b>"+
			"Una serie de contracciones musculares en el esófago, denominadas peristaltismo, impulsan el alimento al estómago"+
		"</div>"+
	
			//texto 06
		"<div class='txt06_sld_01_infotec' id='txt06_sld_01_infotec'>"+
			"<b>Hígado </br></b>"+
			"Procesa los nutrientes absorbidos del intestino delgado, fabrica los compuestos químicos necesarios para la función corporal y detoxifica los compuestos químicos potencialmente dañinos (p.ej., fármacos)."+
		"</div>"+
		
			//texto 07
		"<div class='txt07_sld_01_infotec' id='txt07_sld_01_infotec'>"+
			"<b>Vesícula biliar</br></b>"+
			"Almacena la bilis que se libera al duodeno para facilitar la digestión de las grasas."+
		"</div>"+
		
			//texto 08
		"<div class='txt08_sld_01_infotec' id='txt08_sld_01_infotec'>"+
			"<b>Intestino grueso (colon)</br></b>"+
			"Tubo muscular de 2 metros de largo responsable de procesar los residuos. Las heces, en su mayor parte restos de alimento y bacterias sobrantes del proceso digestivo, pasan a través del colon por peristaltismo. Se absorbe el agua de las heces."+
		"</div>"+
		
			//texto 09
		"<div class='txt09_sld_01_infotec' id='txt09_sld_01_infotec'>"+
			"<b>Recto</br></b>"+
			"Retiene las heces hasta la expulsión"+
		"</div>"+
		
			//texto 10
		"<div class='txt010_sld_01_infotec' id='txt010_sld_01_infotec'>"+
			"<b>Ano</br></b>"+
			"Está rodeado por los esfínteres interno y externo. Controla la eliminación de heces."+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>032</div>"+
				
	"" ;
	
	/////////////////////////////////Brasil
	var metam_info_tec_01_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Sistema <b>Digestivo</b></div>"+
		
		//Elements
			//img 01
		"<div class='img01_sld_01_infotec' id='img01_sld_01_infotec'>"+
			"<img src='img/marcas/metamucil/infoTec/anatomia/slide1/meta_01.png' />"+
		"</div>"+
		
			//texto 01
		"<div class='txt01_sld_01_infotec' id='txt01_sld_01_infotec'>"+
			"<b>Boca</br></b>"+
			"A digestão começa com a primeira dentada de alimento. A mastigação rompe o alimento em pequenas partes. A saliva se mescla com o alimento para começar o processo de degradá-lo a uma forma que o corpo possa absorver e usar."+
		"</div>"+
	
			//texto 02
		"<div class='txt02_sld_01_infotec' id='txt02_sld_01_infotec'>"+
			"<b>Estômago </br></b>"+
			"As células do revestimento do estômago secretam um ácido forte e poderosas enzimas que são responsáveis por degradar o alimento a uma forma capaz de ser usada."+
		"</div>"+		
	
			//texto 03
		"<div class='txt03_sld_01_infotec' id='txt03_sld_01_infotec'>"+
			"<b>Pâncreas </br></b>"+
			"Secreta enzimas ao duodeno que degradam proteínas, gorduras e hidratos de carbono."+
		"</div>"+
		
			//texto 04
		"<div class='txt04_sld_01_infotec' id='txt04_sld_01_infotec'>"+
			"<b>Intestino delgado </br></b>"+
			"Tubo muscular de 7 metros de comprimento conformado por 3 segmentos: duodeno, jejuno e íleo. O alimento se mescla com as secreções digestivas do pâncreas e o fígado. A absorção de nutrientes à corrente sanguínea ocorre principalmente no jejuno e no íleo."+
		"</div>"+
		
			//texto 05
		"<div class='txt05_sld_01_infotec' id='txt05_sld_01_infotec'>"+
			"<b>Esôfago</br></b>"+
			"Uma série de contrações musculares no esôfago, denominadas peristaltismo, impulsionam o alimento ao estômago."+
		"</div>"+
	
			//texto 06
		"<div class='txt06_sld_01_infotec' id='txt06_sld_01_infotec'>"+
			"<b>Fígado </br></b>"+
			"Processa os nutrientes absorvidos do intestino delgado, fabrica os compostos químicos necessários para a função corporal e detoxifica os compostos químicos potencialmente daninhos (p.ex., fármacos)."+
		"</div>"+
		
			//texto 07
		"<div class='txt07_sld_01_infotec' id='txt07_sld_01_infotec'>"+
			"<b>Vesícula biliar</br></b>"+
			"Armazena a bile que libera o duodeno para facilitar a digestão das gorduras."+
		"</div>"+
		
			//texto 08
		"<div class='txt08_sld_01_infotec' id='txt08_sld_01_infotec'>"+
			"<b>Intestino grosso (cólon)</br></b>"+
			"Tubo muscular de 2 metros de comprimento responsável pelo processamento dos resíduos. As fezes, em sua major parte formadas por restos de alimentos e bactérias restantes do processo digestivo, passam através do cólon por peristaltismo. Absorve-se a água das fezes."+
		"</div>"+
		
			//texto 09
		"<div class='txt09_sld_01_infotec' id='txt09_sld_01_infotec'>"+
			"<b>Reto</br></b>"+
			"Retém as fezes até a expulsão."+
		"</div>"+
		
			//texto 10
		"<div class='txt010_sld_01_infotec' id='txt010_sld_01_infotec'>"+
			"<b>Ânus</br></b>"+
			"Está rodeado pelos esfíncteres interno e externo. Controla a eliminação de fezes."+
		"</div>"+

		//Slide Number
		"<div class='slideNumber'>032</div>"+
				
	"" ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + metam_info_tec_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			ChangeExit=1;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			var img01_sld_01_infotec = document.getElementById("img01_sld_01_infotec") ;
			TweenMax.fromTo (img01_sld_01_infotec , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"},delay:.5}) ;
			
			var txt01_sld_01_infotec = document.getElementById("txt01_sld_01_infotec") ;
			var txt02_sld_01_infotec = document.getElementById("txt02_sld_01_infotec") ;
			var txt03_sld_01_infotec = document.getElementById("txt03_sld_01_infotec") ;
			var txt04_sld_01_infotec = document.getElementById("txt04_sld_01_infotec") ;
			TweenMax.staggerFromTo ([txt01_sld_01_infotec, txt02_sld_01_infotec, txt03_sld_01_infotec, txt04_sld_01_infotec], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1} , 2 ) ;
			
			var txt01_sld_05_infotec = document.getElementById("txt05_sld_01_infotec") ;
			var txt01_sld_06_infotec = document.getElementById("txt06_sld_01_infotec") ;
			var txt01_sld_07_infotec = document.getElementById("txt07_sld_01_infotec") ;
			var txt01_sld_08_infotec = document.getElementById("txt08_sld_01_infotec") ;
			var txt01_sld_09_infotec = document.getElementById("txt09_sld_01_infotec") ;
			var txt01_sld_010_infotec = document.getElementById("txt010_sld_01_infotec") ;
			TweenMax.staggerFromTo ([ txt05_sld_01_infotec, txt06_sld_01_infotec, txt07_sld_01_infotec, txt08_sld_01_infotec, txt09_sld_01_infotec, txt010_sld_01_infotec], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:10 } , 2 ) ;
			
			/////////////////////////////////Exit animation
			function exit_mx()
			{
				var txt01_sld_01_infotec = document.getElementById("txt01_sld_01_infotec") ;
				var txt02_sld_01_infotec = document.getElementById("txt02_sld_01_infotec") ;
				var txt03_sld_01_infotec = document.getElementById("txt03_sld_01_infotec") ;
				var txt04_sld_01_infotec = document.getElementById("txt04_sld_01_infotec") ;
				TweenMax.staggerFromTo ([txt01_sld_01_infotec, txt02_sld_01_infotec, txt03_sld_01_infotec, txt04_sld_01_infotec], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}, delay:0} , .2 ) ;
				
				var txt01_sld_05_infotec = document.getElementById("txt05_sld_01_infotec") ;
				var txt01_sld_06_infotec = document.getElementById("txt06_sld_01_infotec") ;
				var txt01_sld_07_infotec = document.getElementById("txt07_sld_01_infotec") ;
				var txt01_sld_08_infotec = document.getElementById("txt08_sld_01_infotec") ;
				var txt01_sld_09_infotec = document.getElementById("txt09_sld_01_infotec") ;
				var txt01_sld_010_infotec = document.getElementById("txt010_sld_01_infotec") ;
				TweenMax.staggerFromTo ([ txt05_sld_01_infotec, txt06_sld_01_infotec, txt07_sld_01_infotec, txt08_sld_01_infotec, txt09_sld_01_infotec, txt010_sld_01_infotec], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}, delay:0 } , .2 ) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				
				var img01_sld_01_infotec = document.getElementById("img01_sld_01_infotec") ;
				TweenMax.fromTo (img01_sld_01_infotec , 2 , {css:{opacity:"1"}} , {css:{opacity:"0"},delay:0, onComplete:ChangePage}) ;
				
				auLocucion.src = '' ;
		
				function ChangePage()
				{
					switch(pagChange)
					{
						case -8:
							tec_marca_01() ;
						break;
						
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
							tec_marca_01() ;
						break;
						
						case 1:
							
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
		
			/////////////////////////////////Button 01
			$('#btn_03_01').click(function() {
				pagChange = 1 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_02').click(function() {
				pagChange = 2 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_03').click(function() {
				pagChange = 3 ;
				ExitSelect() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas_mx/metamucil/infoTecnica/anatomia/au_infoTecnica_anatomia_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + metam_info_tec_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			ChangeExit=5;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			var img01_sld_01_infotec = document.getElementById("img01_sld_01_infotec") ;
			TweenMax.fromTo (img01_sld_01_infotec , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"},delay:.5}) ;
			
			var txt01_sld_01_infotec = document.getElementById("txt01_sld_01_infotec") ;
			var txt02_sld_01_infotec = document.getElementById("txt02_sld_01_infotec") ;
			var txt03_sld_01_infotec = document.getElementById("txt03_sld_01_infotec") ;
			var txt04_sld_01_infotec = document.getElementById("txt04_sld_01_infotec") ;
			TweenMax.staggerFromTo ([txt01_sld_01_infotec, txt02_sld_01_infotec, txt03_sld_01_infotec, txt04_sld_01_infotec], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1} , 2 ) ;
			
			var txt01_sld_05_infotec = document.getElementById("txt05_sld_01_infotec") ;
			var txt01_sld_06_infotec = document.getElementById("txt06_sld_01_infotec") ;
			var txt01_sld_07_infotec = document.getElementById("txt07_sld_01_infotec") ;
			var txt01_sld_08_infotec = document.getElementById("txt08_sld_01_infotec") ;
			var txt01_sld_09_infotec = document.getElementById("txt09_sld_01_infotec") ;
			var txt01_sld_010_infotec = document.getElementById("txt010_sld_01_infotec") ;
			TweenMax.staggerFromTo ([ txt05_sld_01_infotec, txt06_sld_01_infotec, txt07_sld_01_infotec, txt08_sld_01_infotec, txt09_sld_01_infotec, txt010_sld_01_infotec], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:10 } , 2 ) ;
			
			/////////////////////////////////Exit animation
			function exit_br()
			{
				var txt01_sld_01_infotec = document.getElementById("txt01_sld_01_infotec") ;
				var txt02_sld_01_infotec = document.getElementById("txt02_sld_01_infotec") ;
				var txt03_sld_01_infotec = document.getElementById("txt03_sld_01_infotec") ;
				var txt04_sld_01_infotec = document.getElementById("txt04_sld_01_infotec") ;
				TweenMax.staggerFromTo ([txt01_sld_01_infotec, txt02_sld_01_infotec, txt03_sld_01_infotec, txt04_sld_01_infotec], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}, delay:0} , .2 ) ;
				
				var txt01_sld_05_infotec = document.getElementById("txt05_sld_01_infotec") ;
				var txt01_sld_06_infotec = document.getElementById("txt06_sld_01_infotec") ;
				var txt01_sld_07_infotec = document.getElementById("txt07_sld_01_infotec") ;
				var txt01_sld_08_infotec = document.getElementById("txt08_sld_01_infotec") ;
				var txt01_sld_09_infotec = document.getElementById("txt09_sld_01_infotec") ;
				var txt01_sld_010_infotec = document.getElementById("txt010_sld_01_infotec") ;
				TweenMax.staggerFromTo ([ txt05_sld_01_infotec, txt06_sld_01_infotec, txt07_sld_01_infotec, txt08_sld_01_infotec, txt09_sld_01_infotec, txt010_sld_01_infotec], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}, delay:0 } , .2 ) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				
				var img01_sld_01_infotec = document.getElementById("img01_sld_01_infotec") ;
				TweenMax.fromTo (img01_sld_01_infotec , 2 , {css:{opacity:"1"}} , {css:{opacity:"0"},delay:0, onComplete:ChangePage}) ;
				
				auLocucion.src = '' ;
		
				function ChangePage()
				{
					switch(pagChange)
					{
						case -8:
							tec_marca_01() ;
						break;
						
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
							tec_marca_01() ;
						break;
						
						case 1:
							
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
		
			/////////////////////////////////Button 01
			$('#btn_03_01').click(function() {
				pagChange = 1 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_02').click(function() {
				pagChange = 2 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_03').click(function() {
				pagChange = 3 ;
				ExitSelect() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/metamucil/au_marcas_metamucil_infoTecnica_anatomia_bra.mp3' ;
			
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
	
		//07
	$('#ico_07').click(function() {
		pagChange = -8 ;
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
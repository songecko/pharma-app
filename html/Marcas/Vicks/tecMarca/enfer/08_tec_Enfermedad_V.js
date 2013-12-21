<!--Menu Metamucil-->
function tec_Enfermedad_V_08()
{
	CleanScreen() ;
	
	gotoSlide = 'tec_Enfermedad_V_08' ;
	
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_vicks.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		//Menu Info Tecnica
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_infoTec_marca.png' onmouseover='rollOver_ico_06()' /></div>"+
		
		//Menu Info Tecnica Anatomy
		"<div class='shortCuts' id='ico_07'><img src='img/icons/ico_menu_infoTec_enfermedad.png' onmouseover='rollOver_ico_07()' /></div>"+
	
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
	var info08_vicksTec_Enfer__mexico =
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>¿Es resfriado, una gripa <b>o una alergia?</b></div>"+
	
	//Elements
		//img 01 baseGray
	"<div class='img01_sld_01_infoTecV_A' id='img01_sld_01_infoTecV_A'>"+
		"<img src='img/marcas/vicks/baseGray.png' height='606'/>"+
	"</div>"+

		//img 02 Graphic
	"<div style='margin-top:-80px;' class='img01_sld_06_infoTecV_E' id='img01_sld_06_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide8/vicks_01.png' />"+
	"</div>"+
	
		//texto 1
	"<div class='txt01_sld_08_infoTecV_E' id='txt01_sld_08_infoTecV_E'>"+
		"Síntoma</br>"+
		"Tos</br>"+
		"Nariz tapada (rinorrea)</br>"+
		"Secrecíon nasal fluida (rinitis)</br>"+
		"Estornudo</br>"+
		"Dolor de garganta (faringitis)</br>"+
		"Fiebre</br>"+
		"Cefalea</br>"+
		"Molestias y dolor generales</br>"+
		"Fatiga o debilidad</br>"+
		"Agotamiento</br>"+
		"Picazón de los ojos"+
	"</div>"+
	
		//texto 2
	"<div class='txt02_sld_08_infoTecV_E' id='txt02_sld_08_infoTecV_E'>"+
		"Resfriado</br>"+
		"Común</br>"+
		"Común</br>"+
		"Común</br>"+
		"Habitual</br>"+
		"Común</br>"+
		"Infrecuente </br>"+
		"Infrecuente </br>"+
		"Leves</br>"+
		"A veces</br>"+
		"Infrecuente o nunca</br>"+
		"Infrecuente o nunca"+
	"</div>"+
	
		//texto 3
	"<div class='txt03_sld_08_infoTecV_E' id='txt03_sld_08_infoTecV_E'>"+
		"Gripa</br>"+
		"Común, puede ser grave</br>"+
		"A veces</br>"+
		"A veces</br>"+
		"A veces</br>"+
		"A veces</br>"+
		"Común</br>"+
		"Común</br>"+
		"Común</br>"+
		"Común</br>"+
		"Común</br>"+
		"Infrecuente"+
	"</div>"+
	
		//texto 4
	"<div class='txt04_sld_08_infoTecV_E' id='txt04_sld_08_infoTecV_E'>"+
		"Alergia</br>"+
		"A veces</br>"+
		"Común</br>"+
		"Común</br>"+
		"Común</br>"+
		"A veces</br>"+
		"Nunca</br>"+
		"A veces</br>"+
		"Nunca</br>"+
		"A veces</br>"+
		"Nunca</br>"+
		"Común"+
	"</div>"+

		//General Text
	"<div style='margin-left:-50px;' class='txt01_sld_03_infoTecV_E' id='txt01_sld_03_infoTecV_E'>"+
		"<span style='position:absolute; top:-10px; margin-left:18px; color:#FFF;'>COMPARACIÓN DE SÍNTOMAS CAUSADOS POR RESFRIADO, GRIPA O ALERGIA</span></br></br></br></br></br></br></br></br></br></br></br></br></br></br>"+
		"<span style='position:absolute; margin-left:18px; color:#FFF;'>Los síntomas del resfriado son relativamente leves y por lo general no incluyen fiebre alta o picazón de la nariz, la garganta, los ojos o la cara. La gripa suele distinguirse por fiebre alta, molestias y dolores y fatiga moderada a grave. Las alergias suelen incluir picazón de la nariz, la garganta, los ojos o la cara.</span>"+
	"</div>"+
			
			//Slide Number
		"<div class='slideNumber'>086</div>"+
			
	"" ;
	
	
	/////////////////////////////////Brasil
	var info08_vicksTec_Enfer__brasil =
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>É resfriado, gripe <b>ou uma alergia?</b></div>"+
	
	//Elements
		//img 01 baseGray
	"<div class='img01_sld_01_infoTecV_A' id='img01_sld_01_infoTecV_A'>"+
		"<img src='img/marcas/vicks/baseGray.png' height='606'/>"+
	"</div>"+

		//img 02 Graphic
	"<div style='margin-top:-80px;' class='img01_sld_06_infoTecV_E' id='img01_sld_06_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide8/vicks_01.png' />"+
	"</div>"+
	
		//texto 1
	"<div class='txt01_sld_08_infoTecV_E' id='txt01_sld_08_infoTecV_E'>"+
		"Sintoma</br>"+
		"Tosse</br>"+
		"Nariz entupido (rinorréia)</br>"+
		"Secreção nasal fluida (rinite)</br>"+
		"Espirro</br>"+
		"Dor de garganta (faringite)</br>"+
		"Febre</br>"+
		"Cefaléia</br>"+
		"Moléstias e dores em geral</br>"+
		"Fadiga ou fraqueza</br>"+
		"Esgotamento</br>"+
		"Coceira nos olhos"+
	"</div>"+
	
		//texto 2
	"<div class='txt02_sld_08_infoTecV_E' id='txt02_sld_08_infoTecV_E'>"+
		"Resfriado</br>"+
		"Comum</br>"+
		"Comum</br>"+
		"Comum</br>"+
		"Habitual</br>"+
		"Comum</br>"+
		"Infrequente</br>"+
		"Infrequente</br>"+
		"Leves</br>"+
		"Ás vezes</br>"+
		"Infrecuente ou nunca</br>"+
		"Infrecuente ou nunca"+
	"</div>"+
	
		//texto 3
	"<div class='txt03_sld_08_infoTecV_E' id='txt03_sld_08_infoTecV_E'>"+
		"Gripe</br>"+
		"Comum, pode ser grave</br>"+
		"Ás vezes</br>"+
		"Ás vezes</br>"+
		"Ás vezes</br>"+
		"Ás vezes</br>"+
		"Comum</br>"+
		"Comum</br>"+
		"Comum</br>"+
		"Comum</br>"+
		"Comum</br>"+
		"Infrequete"+
	"</div>"+
	
		//texto 4
	"<div class='txt04_sld_08_infoTecV_E' id='txt04_sld_08_infoTecV_E'>"+
		"Alergia</br>"+
		"Ás vezes</br>"+
		"Comum</br>"+
		"Comum</br>"+
		"Comum</br>"+
		"Ás vezes</br>"+
		"Nunca</br>"+
		"Ás vezes</br>"+
		"Nunca</br>"+
		"Ás vezes</br>"+
		"Nunca</br>"+
		"Comum"+
	"</div>"+

		//General Text
	"<div style='margin-left:-50px;' class='txt01_sld_03_infoTecV_E' id='txt01_sld_03_infoTecV_E'>"+
		"<span style='position:absolute; top:-10px; margin-left:18px; color:#FFF;'>Compracção de Sintomas causados por Resfriado, Gripe ou Alergia</span></br></br></br></br></br></br></br></br></br></br></br></br></br></br>"+
		"<span style='position:absolute; margin-left:18px; color:#FFF;'>Os sintomas do resfriado são relativamente leves e generalmente não inluem febre alta ou coceira no nariz, na garganta, nos olhos ou na cara. A gripe costuma se diferenciar por febre alta, desconforto e dores e fadiga de moderada a grave. As alegias costumam incluir coceira no nariz, na garganta, nos olhos ou na cara.</span>"+
	"</div>"+
				
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + info08_vicksTec_Enfer__mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			ChangeExit=1;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			//img 01 baseGray
			var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
			TweenMax.fromTo(img01_sld_01_infoTecV_A , 1 , {css:{opacity:"0" , top:"606px" , height:"0px"}} , {css:{opacity:"1" , top:"232px" , height:"606px"}, delay:.5}) ;
			
			//img 02 Graphic
			var img01_sld_06_infoTecV_E = document.getElementById("img01_sld_06_infoTecV_E") ;
			TweenMax.fromTo(img01_sld_06_infoTecV_E , 1 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.8}) ;
			
			//Textos Columnas
			var txt01_sld_08_infoTecV_E = document.getElementById("txt01_sld_08_infoTecV_E") ;
			var txt02_sld_08_infoTecV_E = document.getElementById("txt02_sld_08_infoTecV_E") ;
			var txt03_sld_08_infoTecV_E = document.getElementById("txt03_sld_08_infoTecV_E") ;
			var txt04_sld_08_infoTecV_E = document.getElementById("txt04_sld_08_infoTecV_E") ;
			TweenMax.staggerFromTo ([ txt01_sld_08_infoTecV_E, txt02_sld_08_infoTecV_E, txt03_sld_08_infoTecV_E, txt04_sld_08_infoTecV_E], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.2 } , .2 ) ;
			
			//General Text
			var txt01_sld_03_infoTecV_E = document.getElementById("txt01_sld_03_infoTecV_E") ;
			TweenMax.fromTo(txt01_sld_03_infoTecV_E , 1 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.8}) ;
			
			
			/////////////////////////////////Exit animation
			function exit_mx()
			{
				//General Text
				var txt01_sld_03_infoTecV_E = document.getElementById("txt01_sld_03_infoTecV_E") ;
				TweenMax.fromTo(txt01_sld_03_infoTecV_E , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0}) ;
				
				//Textos Columnas
				var txt01_sld_08_infoTecV_E = document.getElementById("txt01_sld_08_infoTecV_E") ;
				var txt02_sld_08_infoTecV_E = document.getElementById("txt02_sld_08_infoTecV_E") ;
				var txt03_sld_08_infoTecV_E = document.getElementById("txt03_sld_08_infoTecV_E") ;
				var txt04_sld_08_infoTecV_E = document.getElementById("txt04_sld_08_infoTecV_E") ;
				TweenMax.staggerFromTo ([ txt01_sld_08_infoTecV_E, txt02_sld_08_infoTecV_E, txt03_sld_08_infoTecV_E, txt04_sld_08_infoTecV_E], .3 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}, delay:0} , .1 ) ;
				
				//img 02 Graphic
				var img01_sld_06_infoTecV_E = document.getElementById("img01_sld_06_infoTecV_E") ;
				TweenMax.fromTo(img01_sld_06_infoTecV_E , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:.5}) ;
				
				//img 01 baseGray
				var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
				TweenMax.fromTo(img01_sld_01_infoTecV_A , 1 , {css:{opacity:"1" , top:"232px" , height:"606px"}} , {css:{opacity:"0" , top:"606px" , height:"0px"}, delay:1}) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay:1.2 , onComplete:ChangePage}) ;
		
				auLocucion.src='';
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -8:
							infoTec_01V() ;
						break;
						
						case -7:
							menu_vicks() ;
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
							tec_Enfermedad_V_07a() ;
						break;
						
						case 1:
							tec_Enfermedad_V_08a() ;
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
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_02').click(function() {
				pagChange = 3 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_03').click(function() {
				pagChange = 4 ;
				ExitSelect() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas_mx/vick/infoTecnica/enfermedades/au_infoTecnica_enfermedades09_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + info08_vicksTec_Enfer__brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			ChangeExit=5;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			//img 01 baseGray
			var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
			TweenMax.fromTo(img01_sld_01_infoTecV_A , 1 , {css:{opacity:"0" , top:"606px" , height:"0px"}} , {css:{opacity:"1" , top:"232px" , height:"606px"}, delay:.5}) ;
			
			//img 02 Graphic
			var img01_sld_06_infoTecV_E = document.getElementById("img01_sld_06_infoTecV_E") ;
			TweenMax.fromTo(img01_sld_06_infoTecV_E , 1 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.8}) ;
			
			//Textos Columnas
			var txt01_sld_08_infoTecV_E = document.getElementById("txt01_sld_08_infoTecV_E") ;
			var txt02_sld_08_infoTecV_E = document.getElementById("txt02_sld_08_infoTecV_E") ;
			var txt03_sld_08_infoTecV_E = document.getElementById("txt03_sld_08_infoTecV_E") ;
			var txt04_sld_08_infoTecV_E = document.getElementById("txt04_sld_08_infoTecV_E") ;
			TweenMax.staggerFromTo ([ txt01_sld_08_infoTecV_E, txt02_sld_08_infoTecV_E, txt03_sld_08_infoTecV_E, txt04_sld_08_infoTecV_E], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.2 } , .2 ) ;
			
			//General Text
			var txt01_sld_03_infoTecV_E = document.getElementById("txt01_sld_03_infoTecV_E") ;
			TweenMax.fromTo(txt01_sld_03_infoTecV_E , 1 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.8}) ;
			
			
			/////////////////////////////////Exit animation
			function exit_br()
			{
				//General Text
				var txt01_sld_03_infoTecV_E = document.getElementById("txt01_sld_03_infoTecV_E") ;
				TweenMax.fromTo(txt01_sld_03_infoTecV_E , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0}) ;
				
				//Textos Columnas
				var txt01_sld_08_infoTecV_E = document.getElementById("txt01_sld_08_infoTecV_E") ;
				var txt02_sld_08_infoTecV_E = document.getElementById("txt02_sld_08_infoTecV_E") ;
				var txt03_sld_08_infoTecV_E = document.getElementById("txt03_sld_08_infoTecV_E") ;
				var txt04_sld_08_infoTecV_E = document.getElementById("txt04_sld_08_infoTecV_E") ;
				TweenMax.staggerFromTo ([ txt01_sld_08_infoTecV_E, txt02_sld_08_infoTecV_E, txt03_sld_08_infoTecV_E, txt04_sld_08_infoTecV_E], .3 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}, delay:0} , .1 ) ;
				
				//img 02 Graphic
				var img01_sld_06_infoTecV_E = document.getElementById("img01_sld_06_infoTecV_E") ;
				TweenMax.fromTo(img01_sld_06_infoTecV_E , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:.5}) ;
				
				//img 01 baseGray
				var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
				TweenMax.fromTo(img01_sld_01_infoTecV_A , 1 , {css:{opacity:"1" , top:"232px" , height:"606px"}} , {css:{opacity:"0" , top:"606px" , height:"0px"}, delay:1}) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay:1.2 , onComplete:ChangePage}) ;
		
		/**********************************************
			Audio Stop
			***********************************************/
			//Locution Stpo
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/au_.mp3' ;
			
			if (( auFlagLoc % 2 ) != 0)
			{
				auLocucion.play() ;
			}
		
		
				function ChangePage()
				{
					switch(pagChange)
					{
						case -8:
							infoTec_01V() ;
						break;
						
						case -7:
							menu_vicks() ;
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
							tec_Enfermedad_V_07a() ;
						break;
						
						case 1:
							tec_Enfermedad_V_09() ;
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
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_02').click(function() {
				pagChange = 3 ;
				ExitSelect() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_03_03').click(function() {
				pagChange = 4 ;
				ExitSelect() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/vick/au_marca_vick_infotecnica_sintomas_bra08.mp3' ;
			
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
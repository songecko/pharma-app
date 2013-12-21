<!--Menu Metamucil-->
function tec_Enfermedad_V_04()
{
	CleanScreen() ;
	
	gotoSlide = 'tec_Enfermedad_V_04' ;
	
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
		
		//Info Metamucil
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_infoTec_marca.png' onmouseover='rollOver_ico_06()' /></div>"+
		
		//Info Metamucil
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
	var info04_vicksTec_Enfer_mexico =
	
	//Elements
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>¿Por qué no hay cura para el <b>resfriado común?</b></div>"+
	
	//Elements
		//img 01 baseGray
	"<div class='img01_sld_01_infoTecV_A' id='img01_sld_01_infoTecV_A'>"+
		"<img src='img/marcas/vicks/baseGray.png' height='606'/>"+
	"</div>"+
	
		//img 02 Header
	"<div class='img02_sld_04_inf_Mrc' id='img02_sld_04_inf_Mrc'>"+
		"<img src='img/marcas/vicks/head.png' height='163' >"+
	"</div>"+

		//img 03 Graphic 1
	"<div class='img01_sld_04_infoTecV_E' id='img01_sld_04_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide4/vicks_01_mx.png''>"+
	"</div>"+
	
		//img 03 Graphic 2
	"<div class='img02_sld_04_infoTecV_E' id='img02_sld_04_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide4/vicks_02_mx.png''>"+
	"</div>"+
	
		//img 03 Graphic 3
	"<div class='img03_sld_04_infoTecV_E' id='img03_sld_04_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide4/vicks_03_mx.png''>"+
	"</div>"+
	
		//texto 2
	"<div class='txt01_sld_03_infoTecV_E' id='txt01_sld_03_infoTecV_E'>"+
		"Hay más de 200 virus diferentes causales del resfriado común</br></br>"+

		"Tan sólo el rinovirus tiene ~100 cepas diferentes</br></br>"+
		
		"Aún si se gastara el dinero y el tiempo para obtener 200+ vacunas contra el resfriado, los virus mutarían y sería necesario crear más vacunas</br></br></br></br></br></br></br></br></br></br></br>"+
		
		"En consecuencia, el tratamiento implica reducir o aliviar los síntomas, para ayudar a las personas resfriadas en el manejo de las actividades diarias o nocturnas, hasta su recuperación."+
	"</div>"+
	
	//Slide Number
		"<div class='slideNumber'>080</div>"+
	"" ;
	
	/////////////////////////////////Brasil
	var info04_vicksTec_Enfer_brasil =
	
	//Elements
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>Por que não existe cura para o <b>resfriado comum?</b></div>"+
	
	//Elements
		//img 01 baseGray
	"<div class='img01_sld_01_infoTecV_A' id='img01_sld_01_infoTecV_A'>"+
		"<img src='img/marcas/vicks/baseGray.png' height='606'/>"+
	"</div>"+
	
		//img 02 Header
	"<div class='img02_sld_04_inf_Mrc' id='img02_sld_04_inf_Mrc'>"+
		"<img src='img/marcas/vicks/head.png' height='163' >"+
	"</div>"+

		//img 03 Graphic 1
	"<div class='img01_sld_04_infoTecV_E' id='img01_sld_04_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide4/vicks_01.png''>"+
	"</div>"+
	
		//img 03 Graphic 2
	"<div class='img02_sld_04_infoTecV_E' id='img02_sld_04_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide4/vicks_02.png''>"+
	"</div>"+
	
		//img 03 Graphic 3
	"<div class='img03_sld_04_infoTecV_E' id='img03_sld_04_infoTecV_E'>"+
		"<img src='img/marcas/vicks/infoTec/enfer/slide4/vicks_03.png''>"+
	"</div>"+
	
		//texto 2
	"<div class='txt01_sld_03_infoTecV_E' id='txt01_sld_03_infoTecV_E'>"+
		"Exitem mais de 200 virus diferentes causadores do resfriado comum</br></br>"+

		"Somente o rinovirus apresenta ~ 100 cepas difererentes</br></br>"+
		
		"Mesmo que se gastasse o dinheiro e o tempo para obter 200+ vacinas contra o resfriado , os vírus mudariam e seria necessário criar mais vacinas</br></br></br></br></br></br></br></br></br></br></br>"+
		
		"Como conseqüência disso, o tratamento implicar reduzir ou aliviar os sintomas, para ajudar as pessoas resfriadas no manejo das atividades diárias ou noturnas, até sua recuperação."+
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
			document.getElementById("Container").innerHTML = generalElements + info04_vicksTec_Enfer_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			ChangeExit=1;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"},delay: .3}) ;
			
			var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
			TweenMax.fromTo(img01_sld_01_infoTecV_A , .5 , {css:{opacity:"0" , top:"653px" , height:"0px"}} , {css:{opacity:"1" , top:"234px" , height:"653px"}, delay:.4}) ;
			
			var img02_sld_04_inf_Mrc = document.getElementById("img02_sld_04_inf_Mrc") ;
			TweenMax.fromTo(img02_sld_04_inf_Mrc , 1 , {css:{opacity:"0", height:"0px"}} , {css:{opacity:"1" , height:"163px"}, delay:.8}) ;
			
			var img01_sld_04_infoTecV_E = document.getElementById("img01_sld_04_infoTecV_E") ;
			TweenMax.fromTo(img01_sld_04_infoTecV_E , .5 , {css:{opacity:"0" , width:"0"}} , {css:{opacity:"1" , width:"348"}, delay:1}) ;
			
			var img02_sld_04_infoTecV_E = document.getElementById("img02_sld_04_infoTecV_E") ;
			TweenMax.fromTo(img02_sld_04_infoTecV_E , .5 , {css:{opacity:"0" , width:"0"}} , {css:{opacity:"1" , width:"348"}, delay:1.1}) ;
			
			var img03_sld_04_infoTecV_E = document.getElementById("img03_sld_04_infoTecV_E") ;
			TweenMax.fromTo(img03_sld_04_infoTecV_E , .5 , {css:{opacity:"0" , width:"0"}} , {css:{opacity:"1" , width:"348"}, delay:1.2}) ;
			
			var txt01_sld_03_infoTecV_E = document.getElementById("txt01_sld_03_infoTecV_E") ;
			TweenMax.staggerFromTo ([txt01_sld_03_infoTecV_E], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.9 } , .2 ) ;
		
			/////////////////////////////////Exit animation
			function exit_mx()
			{
						
				var txt01_sld_03_infoTecV_E = document.getElementById("txt01_sld_03_infoTecV_E") ;
				TweenMax.staggerFromTo ([txt01_sld_03_infoTecV_E], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}, delay:0 } , .2 ) ;
				
				var img03_sld_04_infoTecV_E = document.getElementById("img03_sld_04_infoTecV_E") ;
				TweenMax.fromTo(img03_sld_04_infoTecV_E , .5 , {css:{opacity:"1" , width:"348"}} , {css:{opacity:"0" , width:"0"}, delay:.3}) ;
				
				var img02_sld_04_infoTecV_E = document.getElementById("img02_sld_04_infoTecV_E") ;
				TweenMax.fromTo(img02_sld_04_infoTecV_E , .5 , {css:{opacity:"1" , width:"348"}} , {css:{opacity:"0" , width:"0"}, delay:.3}) ;
				
				var img01_sld_04_infoTecV_E = document.getElementById("img01_sld_04_infoTecV_E") ;
				TweenMax.fromTo(img01_sld_04_infoTecV_E , .5 , {css:{opacity:"1" , width:"348"}} , {css:{opacity:"0" , width:"0"}, delay:.3}) ;
				
				var img02_sld_04_inf_Mrc = document.getElementById("img02_sld_04_inf_Mrc") ;
				TweenMax.fromTo(img02_sld_04_inf_Mrc , .5 , {css:{opacity:"1" , height:"163px"}} , {css:{opacity:"0" , height:"0px"}, delay:.4}) ;
				
				var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
				TweenMax.fromTo(img01_sld_01_infoTecV_A , .5 , {css:{opacity:"1" , top:"234px" , height:"653px"}} , {css:{opacity:"0" , top:"653px" , height:"0px"}, delay:.6}) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"},delay:.8 , onComplete:ChangePage}) ;
		
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
							tec_Enfermedad_V_03() ;
						break;
						
						case 1:
							tec_Enfermedad_V_04b() ;
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
			
			auLocucion.src = 'audio/marcas_mx/vick/infoTecnica/enfermedades/au_infoTecnica_enfermedades03_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + info04_vicksTec_Enfer_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			ChangeExit=5;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"},delay: .3}) ;
			
			var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
			TweenMax.fromTo(img01_sld_01_infoTecV_A , .5 , {css:{opacity:"0" , top:"653px" , height:"0px"}} , {css:{opacity:"1" , top:"234px" , height:"653px"}, delay:.4}) ;
			
			var img02_sld_04_inf_Mrc = document.getElementById("img02_sld_04_inf_Mrc") ;
			TweenMax.fromTo(img02_sld_04_inf_Mrc , 1 , {css:{opacity:"0", height:"0px"}} , {css:{opacity:"1" , height:"163px"}, delay:.8}) ;
			
			var img01_sld_04_infoTecV_E = document.getElementById("img01_sld_04_infoTecV_E") ;
			TweenMax.fromTo(img01_sld_04_infoTecV_E , .5 , {css:{opacity:"0" , width:"0"}} , {css:{opacity:"1" , width:"348"}, delay:1}) ;
			
			var img02_sld_04_infoTecV_E = document.getElementById("img02_sld_04_infoTecV_E") ;
			TweenMax.fromTo(img02_sld_04_infoTecV_E , .5 , {css:{opacity:"0" , width:"0"}} , {css:{opacity:"1" , width:"348"}, delay:1.1}) ;
			
			var img03_sld_04_infoTecV_E = document.getElementById("img03_sld_04_infoTecV_E") ;
			TweenMax.fromTo(img03_sld_04_infoTecV_E , .5 , {css:{opacity:"0" , width:"0"}} , {css:{opacity:"1" , width:"348"}, delay:1.2}) ;
			
			var txt01_sld_03_infoTecV_E = document.getElementById("txt01_sld_03_infoTecV_E") ;
			TweenMax.staggerFromTo ([txt01_sld_03_infoTecV_E], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.9 } , .2 ) ;
		
			/////////////////////////////////Exit animation
			function exit_br()
			{
						
				var txt01_sld_03_infoTecV_E = document.getElementById("txt01_sld_03_infoTecV_E") ;
				TweenMax.staggerFromTo ([txt01_sld_03_infoTecV_E], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}, delay:0 } , .2 ) ;
				
				var img03_sld_04_infoTecV_E = document.getElementById("img03_sld_04_infoTecV_E") ;
				TweenMax.fromTo(img03_sld_04_infoTecV_E , .5 , {css:{opacity:"1" , width:"348"}} , {css:{opacity:"0" , width:"0"}, delay:.3}) ;
				
				var img02_sld_04_infoTecV_E = document.getElementById("img02_sld_04_infoTecV_E") ;
				TweenMax.fromTo(img02_sld_04_infoTecV_E , .5 , {css:{opacity:"1" , width:"348"}} , {css:{opacity:"0" , width:"0"}, delay:.3}) ;
				
				var img01_sld_04_infoTecV_E = document.getElementById("img01_sld_04_infoTecV_E") ;
				TweenMax.fromTo(img01_sld_04_infoTecV_E , .5 , {css:{opacity:"1" , width:"348"}} , {css:{opacity:"0" , width:"0"}, delay:.3}) ;
				
				var img02_sld_04_inf_Mrc = document.getElementById("img02_sld_04_inf_Mrc") ;
				TweenMax.fromTo(img02_sld_04_inf_Mrc , .5 , {css:{opacity:"1" , height:"163px"}} , {css:{opacity:"0" , height:"0px"}, delay:.4}) ;
				
				var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
				TweenMax.fromTo(img01_sld_01_infoTecV_A , .5 , {css:{opacity:"1" , top:"234px" , height:"653px"}} , {css:{opacity:"0" , top:"653px" , height:"0px"}, delay:.6}) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"},delay:.8 , onComplete:ChangePage}) ;
		
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
							tec_Enfermedad_V_03() ;
						break;
						
						case 1:
							tec_Enfermedad_V_04b() ;
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
			//Locution Load
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas/vick/au_marca_vick_infotecnica_sintomas_bra04.mp3' ;
			
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
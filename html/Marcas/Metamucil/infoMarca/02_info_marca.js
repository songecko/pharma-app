<!--Menu Metamucil-->
function info_marca_02()
{
	CleanScreen() ;
	
	gotoSlide = 'info_marca_02' ;
	
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
	var info02_metamucil_mexico =
	//Elements
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>¿Qué es <b>Metamucil?</b></div>"+
	
	//img 01 BaseGray
	"<div class='img01_sld_03_inf_Mrc_C' id='img01_sld_03_inf_Mrc_C'>"+
		"<img src='img/marcas/clearblue/baseGray.png'>"+
	"</div>"+
	
	//img 02 Header
	/*"<div class='img02_sld_03_inf_Mrc_C' id='img02_sld_03_inf_Mrc_C'>"+
		"<img src='img/marcas/peptobismol/headRose.png' height='202' >"+*/
	"</div>"+

	//img 03 Graphic
	"<div style='margin-top:90px;' class='img03_sld_03_inf_Mrc_P' id='img03_sld_03_inf_Mrc_P'>"+
		"<img src='img/marcas/metamucil/slide4/meta_01.png' width='500'>"+
	"</div>"+

	//img 04 Graphic
	"<div class='img04_sld_03_inf_Mrc_P' id='img04_sld_03_inf_Mrc_P'>"+
		"<img src='img/marcas/metamucil/slide4/meta_02_mx.png' width='474'>"+
	"</div>"+

	//img 05 Graphic
	/*"<div class='img05_sld_03_inf_Mrc_C' id='img05_sld_03_inf_Mrc_C'>"+
		"<img src='img/marcas/clearblue/infoMar/slide3/clear_03.png' width='60'>"+
	"</div>"+*/
			
	//texto 1
	"<div class='txt01_sld_03_inf_Mrc_C' id='txt01_sld_03_inf_Mrc_C'>"+
		"Metamucil es la fibra multi-beneficios que ayuda a :</br></br>"+

		"Reducir los niveles de colesterol</br>"+
		"Tener regularidad intestinal</br>"+
		"Sentirse Ligero</br>"+
		"Tener un proceso natural de limpieza</br>"+
		"Consumir fibra 100% de origen natural</br></br>"+
		
		"NO CAUSA DEPENDENCIA"+
	"</div>"+
	
	//texto 2
	/*"<div class='txt02_sld_03_inf_Mrc_C' id='txt02_sld_03_inf_Mrc_C'>"+
		"<span style='color:#FFF; line-height:1.2em; font-size: 1.5em; font-family: VAGRoundedBold;'>¿Por qué el embarazo</br>puede ser difícil?</br></br></span>"+
		
		"Las mujeres empiezan a tener hijos más tarde en la vida. La capacidad natural de concebir disminuye con el tiempo.</br></br>"+
		
		"El ciclo de la mujer varía más de lo que creen:</br>"+
		"En promedio, la diferencia entre el ciclo más corto y el más largo de la mujer es de 78 días.</br></br>"+
		
		"El conocimiento de la biología y el ciclo es limitada.</br>"+
		"1 de cada 2 parejas puede estar tratando en el día equivocado del ciclo."+
	"</div>"+*/
	
	//Slide Number
	"<div class='slideNumber'>027</div>"+
	
	"" ;
	
	
	/////////////////////////////////Brasil
	var info02_metamucil_brasil =
		//Title bullets
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>"+
			"<div class='img00_sld_02' id='img00_sld_02'>"+
				"<img src='img/marcas/metamucil/slide2/brazil_flag.png' />"+
			"</div>"+
			"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Consumidor <b>Brasileiro</b>"+
		"</div>"+
		//Elements
			//img 01
		"<div class='img01_sld_02' id='img01_sld_02'>"+
			"<img src='img/marcas/metamucil/slide2/meta_01.png' />"+
		"</div>"+
		
			//texto 01
		"<div class='txt01_sld_02' id='txt01_sld_02'>"+
			"33% dos brasileiros afirmaram sofrer de prisão de ventre.</br>"+
			"20% das pessoas afirmaram ter sofrido de constipação dentro dos últimos 6 meses</br>"+
			"54% dos consumidores laxantes são extremamente leais à sua marca habitual.</br>"+
			"<b>Usuários de laxantes são mulheres:</b></br>"+
			"Entre 25 a 55 anos de idade.</br>"+
			"52% Casadas</br>"+
			"69% Trabalham (a tempo inteiro ou a tempo parcial"+
		"</div>"+
	
			//img 02
		"<div class='img02_sld_02' id='img02_sld_02'>"+
			"<img src='img/marcas/metamucil/slide2/meta_02.png' />"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>029</div>"+
	
	"" ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
		
			document.getElementById("Container").innerHTML = generalElements + info02_metamucil_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			ChangeExit = 1;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			//Titulo
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"},delay: .2}) ;
			
			//GrayRose
			var img01_sld_03_inf_Mrc_C = document.getElementById("img01_sld_03_inf_Mrc_C") ;
			TweenMax.fromTo(img01_sld_03_inf_Mrc_C , 1 , {css:{opacity:"0" , top:"233.7px" , height:"0px"}} , {css:{opacity:"1" , top:"233.7px" , height:"688px"}, delay:.8}) ;
			
			//Header
			/*var img02_sld_03_inf_Mrc_C = document.getElementById("img02_sld_03_inf_Mrc_C") ;
			TweenMax.fromTo(img02_sld_03_inf_Mrc_C , 1 , {css:{opacity:"0", height:"0px"}} , {css:{opacity:"1" , height:"202px"}, delay:1}) ;*/
			
				//Graphics
				var img03_sld_03_inf_Mrc_P = document.getElementById("img03_sld_03_inf_Mrc_P") ;
				TweenMax.fromTo(img03_sld_03_inf_Mrc_P , .5 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"498px"}, delay:1.5}) ;
				
				var img04_sld_03_inf_Mrc_P = document.getElementById("img04_sld_03_inf_Mrc_P") ;
				TweenMax.fromTo(img04_sld_03_inf_Mrc_P , .5 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"474px"}, delay:2}) ;
				
				//var img05_sld_03_inf_Mrc_C = document.getElementById("img05_sld_03_inf_Mrc_C") ;
				//TweenMax.fromTo(img05_sld_03_inf_Mrc_C , .5 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"60px"}, delay:2.5}) ;
				//Fin Graphics
			
			//Textos
			var txt01_sld_03_inf_Mrc_C = document.getElementById("txt01_sld_03_inf_Mrc_C") ;
			//var txt02_sld_03_inf_Mrc_C = document.getElementById("txt02_sld_03_inf_Mrc_C") ;
			TweenMax.staggerFromTo ([ txt01_sld_03_inf_Mrc_C], .5 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.4 } , 1.3 ) ;
			
			/////////////////////////////////Exit animation
			function exit_mx()
			{
				//Textos
				var txt01_sld_03_inf_Mrc_C = document.getElementById("txt01_sld_03_inf_Mrc_C") ;
				//var txt02_sld_03_inf_Mrc_C = document.getElementById("txt02_sld_03_inf_Mrc_C") ;
				TweenMax.staggerFromTo ([ txt01_sld_03_inf_Mrc_C], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0 } , 1 ) ;
				
					//Graphics
					var img03_sld_03_inf_Mrc_P = document.getElementById("img03_sld_03_inf_Mrc_P") ;
					TweenMax.fromTo(img03_sld_03_inf_Mrc_P , .5 , {css:{opacity:"1" , width:"498px"}} , {css:{opacity:"0" , width:"0px"}, delay:.2}) ;
					
					var img04_sld_03_inf_Mrc_P = document.getElementById("img04_sld_03_inf_Mrc_P") ;
					TweenMax.fromTo(img04_sld_03_inf_Mrc_P , .5 , {css:{opacity:"1" , width:"474px"}} , {css:{opacity:"0" , width:"0px"}, delay:.4}) ;
					
					//var img05_sld_03_inf_Mrc_C = document.getElementById("img05_sld_03_inf_Mrc_C") ;
					//TweenMax.fromTo(img05_sld_03_inf_Mrc_C , .5 , {css:{opacity:"1" , width:"60px"}} , {css:{opacity:"0" , width:"0px"}, delay:.6}) ;
					//Fin Graphics
				
				//Header
				/*var img02_sld_03_inf_Mrc_C = document.getElementById("img02_sld_03_inf_Mrc_C") ;
				TweenMax.fromTo(img02_sld_03_inf_Mrc_C , 1 , {css:{opacity:"1", height:"202px"}} , {css:{opacity:"0" , height:"0px"}, delay:.8}) ;*/
				
				//GrayRose
				var img01_sld_03_inf_Mrc_C = document.getElementById("img01_sld_03_inf_Mrc_C") ;
				TweenMax.fromTo(img01_sld_03_inf_Mrc_C , 1 , {css:{opacity:"1" , top:"233.7px" , height:"688px"}} , {css:{opacity:"0" , top:"233.7px" , height:"0px"}, delay:1}) ;
					
				//Titulo
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"},delay:1.1 , onComplete:ChangePage}) ;
				
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
							info_marca_01() ;
						break;
						
						case 1:
							info_marca_03() ;
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
			
			auLocucion.src = 'audio/marcas_mx/metamucil/infoMarca/au_infoMarca02_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + info02_metamucil_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			ChangeExit = 5;
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;

			var img01_sld_02 = document.getElementById("img01_sld_02") ;
			var txt01_sld_02 = document.getElementById("txt01_sld_02") ;
			var img02_sld_02 = document.getElementById("img02_sld_02") ;
			
			TweenMax.staggerFromTo ([img01_sld_02 , txt01_sld_02 , img02_sld_02], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_br()
			{
				var img01_sld_02 = document.getElementById("img01_sld_02") ;
				var txt01_sld_02 = document.getElementById("txt01_sld_02") ;
				var img02_sld_02 = document.getElementById("img02_sld_02") ;
		
				TweenMax.staggerFromTo ([img01_sld_02 , txt01_sld_02 , img02_sld_02], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .1 ) ;
				
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
							info_marca_01() ;
						break;
						
						case 1:
							info_marca_03() ;
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
			
			auLocucion.src = 'audio/marcas/metamucil/au_marcas_metamucil_infoMarca_bra02.mp3' ;
			
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
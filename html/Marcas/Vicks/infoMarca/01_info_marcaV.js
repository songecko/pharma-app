<!--Menu Metamucil-->
function info_marca_01V()
{
	CleanScreen() ;
	
	gotoSlide = 'info_marca_01V' ;
	
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
	var info01_vicks_mexico =
	//Selecciona País
	//"<div class='txt_Title_bullets' id='txt_Title_bullets'>Generalidades sobre os <b>Descongestionantes Nasis</b></div>"+
	
	//Elements
		//img 01 baseGray
	"<div class='img01_sld_01_infoMarV' id='img01_sld_01_infoMarV'>"+
		"<img src='img/marcas/vicks/infoMar/slide1/vicks_01.png' height='696'/>"+
	"</div>"+

	//img 02 Graphic Moon
	"<div style='position:absolute; top:233px; left:95.5px; width:1089px; height:616px;' id='img02_sld_01_infoMarV'>"+
		"<img src='img/marcas/vicks/infoMar/slide1/vicks_02.png' />"+
	"</div>"+
		
		//img 02b Graphic Header Bottom
		"<div style='z-index:2; position:absolute; top:750px; left:95.5px; width:1090px; height:133px;' id='img02a_sld_01_infoMarV'>"+
			"<img src='img/marcas/vicks/infoMar/slide1/vicks_03.png'/>"+
		"</div>"+
			
		//img 01a Circle1
		"<div style='position:absolute; top:600px; left:150px; width:266px; height:266px;' id='img02b_sld_01_infoMarV'>"+
			"<img src='img/marcas/vicks/infoMar/slide1/vicks_04_mx.png'/>"+
		"</div>"+
		
		//img 01b Circle2
		"<div style='position:absolute; top:550px; left:490px; width:266px; height:266px;' id='img02c_sld_01_infoMarV'>"+
			"<img src='img/marcas/vicks/infoMar/slide1/vicks_05_mx.png'/>"+
		"</div>"+
		
		//img 01c Circle3
		"<div style='position:absolute; top:600px; left:877px; width:266px; height:266px;' id='img02d_sld_01_infoMarV'>"+
			"<img src='img/marcas/vicks/infoMar/slide1/vicks_06_mx.png'/>"+
		"</div>"+
	
		//texto 1
	"<div class='txt01_sld_01_infoTecV_A' id='txt01_sld_01_infoTecV_A'>"+
		""+
	"</div>"+
	
		//texto 2
	"<div style='position:absolute; top:300px; left:380px; width:660px; height:130px;'  id='txt01_sld_01_infoMarV'>"+
		"<b style='line-height:1em; text-align:center; color: #fff; font-size:1.46em;'>Es la marca nº1 en el mundo</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;de gripes y resfriados</b></br>"+
	"</div>"+
	//Slide Number
		"<div class='slideNumber'>055</div>"+
	"" ;
	
	/////////////////////////////////Brasil
	var info01_vicks_brasil =
	//Selecciona País
	//"<div class='txt_Title_bullets' id='txt_Title_bullets'>Generalidades sobre os <b>Descongestionantes Nasis</b></div>"+
	
	//Elements
		//img 01 baseGray
	"<div class='img01_sld_01_infoMarV' id='img01_sld_01_infoMarV'>"+
		"<img src='img/marcas/vicks/infoMar/slide1/vicks_01.png' height='696'/>"+
	"</div>"+

	//img 02 Graphic Moon
	"<div style='position:absolute; top:233px; left:95.5px; width:1089px; height:616px;' id='img02_sld_01_infoMarV'>"+
		"<img src='img/marcas/vicks/infoMar/slide1/vicks_02.png' />"+
	"</div>"+
		
		//img 02b Graphic Header Bottom
		"<div style='z-index:2; position:absolute; top:750px; left:95.5px; width:1090px; height:133px;' id='img02a_sld_01_infoMarV'>"+
			"<img src='img/marcas/vicks/infoMar/slide1/vicks_03.png'/>"+
		"</div>"+
			
		//img 01a Circle1
		"<div style='position:absolute; top:600px; left:150px; width:266px; height:266px;' id='img02b_sld_01_infoMarV'>"+
			"<img src='img/marcas/vicks/infoMar/slide1/vicks_04.png'/>"+
		"</div>"+
		
		//img 01b Circle2
		"<div style='position:absolute; top:550px; left:490px; width:266px; height:266px;' id='img02c_sld_01_infoMarV'>"+
			"<img src='img/marcas/vicks/infoMar/slide1/vicks_05.png'/>"+
		"</div>"+
		
		//img 01c Circle3
		"<div style='position:absolute; top:600px; left:877px; width:266px; height:266px;' id='img02d_sld_01_infoMarV'>"+
			"<img src='img/marcas/vicks/infoMar/slide1/vicks_06.png'/>"+
		"</div>"+
	
		//texto 1
	"<div class='txt01_sld_01_infoTecV_A' id='txt01_sld_01_infoTecV_A'>"+
		""+
	"</div>"+
	
		//texto 2
	"<div style='position:absolute; top:300px; left:355px; width:660px; height:130px;'  id='txt01_sld_01_infoMarV'>"+
		"<b style='line-height:1em; text-align:center; color: #FFF; font-size:1.8em;'>É a marca nº1 no mundo </br>&nbsp;&nbsp;em gripes e resfriados</b>"+
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
			document.getElementById("Container").innerHTML = generalElements + info01_vicks_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			ChangeExit=1;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			/*var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;*/
			
			var img01_sld_01_infoMarV = document.getElementById("img01_sld_01_infoMarV") ;
			TweenMax.fromTo(img01_sld_01_infoMarV , 1 , {css:{opacity:"0" , top:"696px" , height:"0px"}} , {css:{opacity:"1" , top:"232px" , height:"696px"}, delay:.5}) ;
			
			var img02_sld_01_infoMarV = document.getElementById("img02_sld_01_infoMarV") ;
			TweenMax.fromTo(img02_sld_01_infoMarV , 1 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.8}) ;
			
			var txt01_sld_01_infoTecV_A = document.getElementById("txt01_sld_01_infoTecV_A") ;
			var txt01_sld_01_infoMarV = document.getElementById("txt01_sld_01_infoMarV") ;
			TweenMax.staggerFromTo ([txt01_sld_01_infoTecV_A, txt01_sld_01_infoMarV], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.2 } , .2 ) ;
			
			var img02a_sld_01_infoMarV = document.getElementById("img02a_sld_01_infoMarV") ;
			var img02b_sld_01_infoMarV = document.getElementById("img02b_sld_01_infoMarV") ;
			var img02c_sld_01_infoMarV = document.getElementById("img02c_sld_01_infoMarV") ;
			var img02d_sld_01_infoMarV = document.getElementById("img02d_sld_01_infoMarV") ;
			TweenMax.staggerFromTo ([img02a_sld_01_infoMarV, img02b_sld_01_infoMarV, img02c_sld_01_infoMarV, img02d_sld_01_infoMarV ], .3 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.6 } , .2 ) ;
			
			
			/////////////////////////////////Exit animation
			function exit_mx()
			{
				var img02a_sld_01_infoMarV = document.getElementById("img02a_sld_01_infoMarV") ;
				var img02b_sld_01_infoMarV = document.getElementById("img02b_sld_01_infoMarV") ;
				var img02c_sld_01_infoMarV = document.getElementById("img02c_sld_01_infoMarV") ;
				var img02d_sld_01_infoMarV = document.getElementById("img02d_sld_01_infoMarV") ;
				TweenMax.staggerFromTo ([img02d_sld_01_infoMarV, img02c_sld_01_infoMarV, img02b_sld_01_infoMarV, img02a_sld_01_infoMarV ], .3 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0 } , .2 ) ;
				
			
				var txt01_sld_01_infoTecV_A = document.getElementById("txt01_sld_01_infoTecV_A") ;
				var txt01_sld_01_infoMarV = document.getElementById("txt01_sld_01_infoMarV") ;
				TweenMax.staggerFromTo ([txt01_sld_01_infoTecV_A, txt01_sld_01_infoMarV ], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}, delay:.3 } , .2 ) ;
				
				var img02_sld_01_infoMarV = document.getElementById("img02_sld_01_infoMarV") ;
				TweenMax.fromTo(img02_sld_01_infoMarV , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:.4}) ;
						
				var img01_sld_01_infoMarV = document.getElementById("img01_sld_01_infoMarV") ;
				TweenMax.fromTo(img01_sld_01_infoMarV , 1 , {css:{opacity:"1" , top:"232px" , height:"696px"}} , {css:{opacity:"0" , top:"696px" , height:"0px"}, delay:.6 , onComplete:ChangePage}) ;
				
				/*var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay:1 , onComplete:ChangePage}) ;*/
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							menu_vicks() ;
						break;
						
						case 1:
							info_marca_02V() ;
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
			
			auLocucion.src = 'audio/marcas_mx/vick/infoMarca/au_infoMarca01_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + info01_vicks_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			ChangeExit=5;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			/*var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;*/
			
			var img01_sld_01_infoMarV = document.getElementById("img01_sld_01_infoMarV") ;
			TweenMax.fromTo(img01_sld_01_infoMarV , 1 , {css:{opacity:"0" , top:"696px" , height:"0px"}} , {css:{opacity:"1" , top:"232px" , height:"696px"}, delay:.5}) ;
			
			var img02_sld_01_infoMarV = document.getElementById("img02_sld_01_infoMarV") ;
			TweenMax.fromTo(img02_sld_01_infoMarV , 1 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:.8}) ;
			
			var txt01_sld_01_infoTecV_A = document.getElementById("txt01_sld_01_infoTecV_A") ;
			var txt01_sld_01_infoMarV = document.getElementById("txt01_sld_01_infoMarV") ;
			TweenMax.staggerFromTo ([txt01_sld_01_infoTecV_A, txt01_sld_01_infoMarV], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.2 } , .2 ) ;
			
			var img02a_sld_01_infoMarV = document.getElementById("img02a_sld_01_infoMarV") ;
			var img02b_sld_01_infoMarV = document.getElementById("img02b_sld_01_infoMarV") ;
			var img02c_sld_01_infoMarV = document.getElementById("img02c_sld_01_infoMarV") ;
			var img02d_sld_01_infoMarV = document.getElementById("img02d_sld_01_infoMarV") ;
			TweenMax.staggerFromTo ([img02a_sld_01_infoMarV, img02b_sld_01_infoMarV, img02c_sld_01_infoMarV, img02d_sld_01_infoMarV ], .3 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.6 } , .2 ) ;
			
			
			/////////////////////////////////Exit animation
			function exit_br()
			{
				var img02a_sld_01_infoMarV = document.getElementById("img02a_sld_01_infoMarV") ;
				var img02b_sld_01_infoMarV = document.getElementById("img02b_sld_01_infoMarV") ;
				var img02c_sld_01_infoMarV = document.getElementById("img02c_sld_01_infoMarV") ;
				var img02d_sld_01_infoMarV = document.getElementById("img02d_sld_01_infoMarV") ;
				TweenMax.staggerFromTo ([img02d_sld_01_infoMarV, img02c_sld_01_infoMarV, img02b_sld_01_infoMarV, img02a_sld_01_infoMarV ], .3 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0 } , .2 ) ;
				
			
				var txt01_sld_01_infoTecV_A = document.getElementById("txt01_sld_01_infoTecV_A") ;
				var txt01_sld_01_infoMarV = document.getElementById("txt01_sld_01_infoMarV") ;
				TweenMax.staggerFromTo ([txt01_sld_01_infoTecV_A, txt01_sld_01_infoMarV ], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}, delay:.3 } , .2 ) ;
				
				var img02_sld_01_infoMarV = document.getElementById("img02_sld_01_infoMarV") ;
				TweenMax.fromTo(img02_sld_01_infoMarV , 1 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:.4}) ;
						
				var img01_sld_01_infoMarV = document.getElementById("img01_sld_01_infoMarV") ;
				TweenMax.fromTo(img01_sld_01_infoMarV , 1 , {css:{opacity:"1" , top:"232px" , height:"696px"}} , {css:{opacity:"0" , top:"696px" , height:"0px"}, delay:.6 , onComplete:ChangePage}) ;
				
				/*var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay:1 , onComplete:ChangePage}) ;*/
		
			/**********************************************
			Audio Stop
			***********************************************/
			//Locution Stop
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
							menu_vicks() ;
						break;
						
						case 1:
							info_marca_02V() ;
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
			
			auLocucion.src = 'audio/marcas/vick/au_marca_vick_infomarca_bra01.mp3' ;
			
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
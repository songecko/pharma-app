<!--Menu Vicks-->
function tec_Ingrediente_V_01()
{
	CleanScreen() ;
	
	gotoSlide = 'tec_Ingrediente_V_01' ;
	
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
		"<div class='shortCuts' id='ico_07'><img src='img/icons/ico_menu_infoTec_ingredientes.png' onmouseover='rollOver_ico_07()' /></div>"+
				
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
	var info_tec_ingre01_vicks_mexico =
	
	//Elements
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>Generalidades sobre los <b>descongestionantes nasales</b></div>"+
	
	//Elements
		//img 01 baseGray
	"<div class='img01_sld_01_infoTecV_A' id='img01_sld_01_infoTecV_A'>"+
		"<img src='img/marcas/vicks/baseGray.png' height='606'/>"+
	"</div>"+
	
		//img 02 Header
	"<div style='z-index:2;' class='img02_sld_04_inf_Mrc' id='img02_sld_04_inf_Mrc'>"+
		"<img src='img/marcas/vicks/head.png' height='163' >"+
	"</div>"+

		//img 03 Graphic
		"<div style='overflow: hidden ;' class='img05_sld_02_infoTecV_E' id='img05_sld_02_infoTecV_E'>"+
			"<img src='img/marcas/vicks/infoTec/ingre/slide1/vicks_04.png' width='390'>"+
		"</div>"+
	
		//img 03a Graphic
		"<div style='z-index:2; position:absolute; top: 292px; left: 671px; width: 390px; height: 385px; overflow: hidden ;' id='img05a_sld_02_infoTecV_E'>"+
			"<img src='img/marcas/vicks/infoTec/ingre/slide1/vicks_02.png' width='390'>"+
		"</div>"+
		
		//img 03b Graphic
		"<div style='z-index:2; position:absolute; top: 292px; left: 671px; width: 390px; height: 385px; overflow: hidden ;' id='img05b_sld_02_infoTecV_E'>"+
			"<img src='img/marcas/vicks/infoTec/ingre/slide1/vicks_03.png' height='385'>"+
		"</div>"+
	
	
		//texto 1
	/*"<div class='txt01_sld_01_it_Ingr' id='txt01_sld_01_it_Ingr'>"+
		"Hidratos de carbono e polímeros não digeríveis que se encontram nas plantas e têm efeitos fisiológicos</br>"+
	"</div>"+*/
	
		//texto 2
	"<div style='margin-top:-60px;' class='txt05_sld_02_infoTecV_E' id='txt05_sld_02_infoTecV_E'>"+
		"</br></br><b style='color: #FFF; font-size:1.5em;'>Descripción:</b></br>"+
		"Estos fármacos ayudan a aliviar la congestión nasal (“nariz tapada”) causada por la hinchazón de la mucosa nasal (es decir, el revestimiento del interior de la nariz). </br></br>"+
		"Los descongestivos nasales están disponibles en una amplia variedad de formas.</br></br>"+
		"Actúan por constricción de los vasos sanguíneos nasales (vasoconstrictores) o por estimulación de los receptores sensibles a la temperatura en el revestimiento de la nariz (vapores aromáticos activos)."+
	"</div>"+
		//Slide Number
		"<div class='slideNumber'>068</div>"+
	"" ;
	
	/////////////////////////////////Brasil
	var info_tec_ingre01_vicks_brasil =
	
	//Elements
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>Generalidades sobre os <b>descongestionantes nasais</b></div>"+
	
	//Elements
		//img 01 baseGray
	"<div class='img01_sld_01_infoTecV_A' id='img01_sld_01_infoTecV_A'>"+
		"<img src='img/marcas/vicks/baseGray.png' height='606'/>"+
	"</div>"+
	
		//img 02 Header
	"<div style='z-index:2;' class='img02_sld_04_inf_Mrc' id='img02_sld_04_inf_Mrc'>"+
		"<img src='img/marcas/vicks/head.png' height='163' >"+
	"</div>"+

		//img 03 Graphic
		"<div style='overflow: hidden ;' class='img05_sld_02_infoTecV_E' id='img05_sld_02_infoTecV_E'>"+
			"<img src='img/marcas/vicks/infoTec/ingre/slide1/vicks_01.png' width='390'>"+
		"</div>"+
	
		//img 03a Graphic
		"<div style='z-index:2; position:absolute; top: 292px; left: 671px; width: 390px; height: 385px; overflow: hidden ;' id='img05a_sld_02_infoTecV_E'>"+
			"<img src='img/marcas/vicks/infoTec/ingre/slide1/vicks_02.png' width='390'>"+
		"</div>"+
		
		//img 03b Graphic
		"<div style='z-index:2; position:absolute; top: 292px; left: 671px; width: 390px; height: 385px; overflow: hidden ;' id='img05b_sld_02_infoTecV_E'>"+
			"<img src='img/marcas/vicks/infoTec/ingre/slide1/vicks_03.png' height='385'>"+
		"</div>"+
	
		//texto 1
	/*"<div class='txt01_sld_01_it_Ingr' id='txt01_sld_01_it_Ingr'>"+
		"Hidratos de carbono e polímeros não digeríveis que se encontram nas plantas e têm efeitos fisiológicos</br>"+
	"</div>"+*/
	
		//texto 2
	"<div style='margin-top:-60px;' class='txt05_sld_02_infoTecV_E' id='txt05_sld_02_infoTecV_E'>"+
		"</br></br><b style='color: #FFF; font-size:1.5em;'>Descrição</b></br>"+
		"Estes fármacos ajudam a aliviar a congestão ajudam a aliviar a congestão nasal (“nariz entupido”) causada pelo inchaço da mucosa nasal (quer dizer, o revestimento do interior do nariz).</br></br>"+
		"Os descongestionantes nasais estão disponíveis em uma ampla variedade de formas. Atuam por constrição dos vasos sangüíneos do nariz (vasoconstritores) ou por estimulação dos receptores sensíveis à temperatura no revestimento do nariz (vapores aromáticos ativos).</br></br></br>"+
		
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
			document.getElementById("Container").innerHTML = generalElements + info_tec_ingre01_vicks_mexico ;
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
			
			
				/*TimeLine************************************************************/
				var img05_sld_02_infoTecV_E = document.getElementById("img05_sld_02_infoTecV_E") ;
				var img05a_sld_02_infoTecV_E = document.getElementById("img05a_sld_02_infoTecV_E") ;
				var img05b_sld_02_infoTecV_E = document.getElementById("img05b_sld_02_infoTecV_E") ;

				var Vasocontrictores = new TimelineMax ( {repeat:-1 , repeatDelay:.1 , yoyo:false } );
					
					Vasocontrictores.fromTo(img05_sld_02_infoTecV_E , 1 , {css:{opacity:"0" , width:"0"}} , {css:{opacity:"1" , width:"390"} , delay:1})
					
					.fromTo(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"0" }} , {css:{opacity:"1"} , delay:.1}) 
						.to(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"0" }, delay:.1})
						.to(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"1" }, delay:.1})
						.to(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"0" }, delay:.1})
						.to(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"1" }, delay:.1})
						.to(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"0" }, delay:.1})
						.to(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"1" }, delay:.1})
						.to(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"0" }, delay:.1})
						
					.fromTo(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"0" , width:"0" }} , {css:{opacity:"1" , width:"390"} , delay:.1})
						.to(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"0" , width:"0" }, delay:.1})
						.to(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"1" , width:"390"}, delay:.1})
						.to(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"0" , width:"0" }, delay:.1})
						.to(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"1" , width:"390"}, delay:.1})
						.to(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"0" , width:"0" }, delay:.1})
						.to(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"1" , width:"390"}, delay:.1})
						.to(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"0" , width:"0" }, delay:.1})
						.to(img05_sld_02_infoTecV_E , 1 , {css:{opacity:"0" , width:"0" }, delay:0})
					
						
				/****************************************************************************Exit TimeLine*/

			var txt05_sld_02_infoTecV_E = document.getElementById("txt05_sld_02_infoTecV_E") ;
			TweenMax.staggerFromTo ([txt05_sld_02_infoTecV_E], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.4 } , .2 ) ;
		
			
			/////////////////////////////////Exit animation
			function exit_mx()
			{
				var txt05_sld_02_infoTecV_E = document.getElementById("txt05_sld_02_infoTecV_E") ;
				TweenMax.staggerFromTo ([txt05_sld_02_infoTecV_E], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}, delay:0 } , .2 ) ;
		
					var img05_sld_02_infoTecV_E = document.getElementById("img05_sld_02_infoTecV_E") ;
					var img05a_sld_02_infoTecV_E = document.getElementById("img05a_sld_02_infoTecV_E") ;
					var img05b_sld_02_infoTecV_E = document.getElementById("img05b_sld_02_infoTecV_E") ;
					
					
					TweenMax.killTweensOf([ img05b_sld_02_infoTecV_E, img05a_sld_02_infoTecV_E, img05_sld_02_infoTecV_E]) ;
					Vasocontrictores.seek(0) ;
					Vasocontrictores.kill() ;
					
					TweenMax.staggerFromTo([img05b_sld_02_infoTecV_E, img05a_sld_02_infoTecV_E, img05_sld_02_infoTecV_E], .5 , {css:{opacity:"1" , width:"390"}} , {css:{opacity:"0" , width:"0"}, delay:0} , .2) ;
					
				var img02_sld_04_inf_Mrc = document.getElementById("img02_sld_04_inf_Mrc") ;
				TweenMax.fromTo(img02_sld_04_inf_Mrc , .5 , {css:{opacity:"1" , height:"163px"}} , {css:{opacity:"0" , height:"0px"}, delay:.4}) ;
				
				var img01_sld_01_infoTecV_A = document.getElementById("img01_sld_01_infoTecV_A") ;
				TweenMax.fromTo(img01_sld_01_infoTecV_A , .5 , {css:{opacity:"1" , top:"234px" , height:"653px"}} , {css:{opacity:"0" , top:"653px" , height:"0px"}, delay:.6}) ;
				
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"},delay:.8 , onComplete:ChangePage}) ;
		
				auLocucion.src = '' ;
				
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
							tec_Ingrediente_V_01d() ;
						break;
						
						case 1:
							tec_Ingrediente_V_02() ;
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
			
			auLocucion.src = 'audio/marcas_mx/vick/infoTecnica/ingredientesActivos/au_infoTecnica_ingredientes05_mx.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + info_tec_ingre01_vicks_brasil ;
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
			
			
				/*TimeLine************************************************************/
				var img05_sld_02_infoTecV_E = document.getElementById("img05_sld_02_infoTecV_E") ;
				var img05a_sld_02_infoTecV_E = document.getElementById("img05a_sld_02_infoTecV_E") ;
				var img05b_sld_02_infoTecV_E = document.getElementById("img05b_sld_02_infoTecV_E") ;

				var Vasocontrictores = new TimelineMax ( {repeat:-1 , repeatDelay:.1 , yoyo:false } );
					
					Vasocontrictores.fromTo(img05_sld_02_infoTecV_E , 1 , {css:{opacity:"0" , width:"0"}} , {css:{opacity:"1" , width:"390"} , delay:1})
					
					.fromTo(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"0" }} , {css:{opacity:"1"} , delay:.1}) 
						.to(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"0" }, delay:.1})
						.to(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"1" }, delay:.1})
						.to(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"0" }, delay:.1})
						.to(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"1" }, delay:.1})
						.to(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"0" }, delay:.1})
						.to(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"1" }, delay:.1})
						.to(img05a_sld_02_infoTecV_E , .15 , {css:{opacity:"0" }, delay:.1})
						
					.fromTo(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"0" , width:"0" }} , {css:{opacity:"1" , width:"390"} , delay:.1})
						.to(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"0" , width:"0" }, delay:.1})
						.to(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"1" , width:"390"}, delay:.1})
						.to(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"0" , width:"0" }, delay:.1})
						.to(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"1" , width:"390"}, delay:.1})
						.to(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"0" , width:"0" }, delay:.1})
						.to(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"1" , width:"390"}, delay:.1})
						.to(img05b_sld_02_infoTecV_E , 1 , {css:{opacity:"0" , width:"0" }, delay:.1})
						.to(img05_sld_02_infoTecV_E , 1 , {css:{opacity:"0" , width:"0" }, delay:0})
					
						
				/****************************************************************************Exit TimeLine*/

			var txt05_sld_02_infoTecV_E = document.getElementById("txt05_sld_02_infoTecV_E") ;
			TweenMax.staggerFromTo ([txt05_sld_02_infoTecV_E], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.4 } , .2 ) ;
		
			
			/////////////////////////////////Exit animation
			function exit_br()
			{
				var txt05_sld_02_infoTecV_E = document.getElementById("txt05_sld_02_infoTecV_E") ;
				TweenMax.staggerFromTo ([txt05_sld_02_infoTecV_E], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}, delay:0 } , .2 ) ;
		
					var img05_sld_02_infoTecV_E = document.getElementById("img05_sld_02_infoTecV_E") ;
					var img05a_sld_02_infoTecV_E = document.getElementById("img05a_sld_02_infoTecV_E") ;
					var img05b_sld_02_infoTecV_E = document.getElementById("img05b_sld_02_infoTecV_E") ;
					
					
					TweenMax.killTweensOf([ img05b_sld_02_infoTecV_E, img05a_sld_02_infoTecV_E, img05_sld_02_infoTecV_E]) ;
					Vasocontrictores.seek(0) ;
					Vasocontrictores.kill() ;
					
					TweenMax.staggerFromTo([img05b_sld_02_infoTecV_E, img05a_sld_02_infoTecV_E, img05_sld_02_infoTecV_E], .5 , {css:{opacity:"1" , width:"390"}} , {css:{opacity:"0" , width:"0"}, delay:0} , .2) ;
					
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
							infoTec_01V() ;
						break;
						
						case 1:
							tec_Ingrediente_V_01a() ;
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
			
			auLocucion.src = 'audio/marcas/vick/au_marca_vick_infotecnica_bra01.mp3' ;
			
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
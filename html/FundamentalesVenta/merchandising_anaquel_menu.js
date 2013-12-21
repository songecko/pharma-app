<!--Merchandising > Anaquel Mostrador-->
function merchandising_anaquel_menu()
{
	CleanScreen() ;
	
	gotoSlide = 'merchandising_anaquel_menu' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_fundamentalesVentas.png' onmouseover='rollOver_ico_04()' /></div>"+		
		
		//Menu Herramientas
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_fundamentalesVentas_merchandising.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		//Menu Herramientas
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_fundamentalesVentas_anaquel.png' onmouseover='rollOver_ico_06()' /></div>"+
		
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
	var merchandising_anaquel_menu_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Selecione el fundamental de ventas que <b>desee consultar</b></div>"+

		//Back Image
		"<div class='materialVisibilidad_img' id='merchandising_anaquel_menu_back'><img src='img/Fundamentales/Merchandising/img_back_anaquel_mex.png'/></div>"+
		
		//Buttons
			//01
		"<div class='btn_circle' id='btn_circle_anaquel_peptoBismol_mex' onmouseover='rollOver_btn_circle_anaquel_peptoBismol_mex()'><img src='img/Fundamentales/Merchandising/btn_circle_peptoBismol.png'/></div>"+
				//Gondola
		"<div class='btn_rectangle_fundamentales' id='rectangle_gondola_pepto_mex'>Anaquel</div>"+
				//Visibilidade
		"<div class='btn_rectangle_fundamentales' id='rectangle_visibilidad_pepto_mex'>Visibilidad</div>"+
		
			//02
		"<div class='btn_circle' id='btn_circle_anaquel_metamucil_mex' onmouseover='rollOver_btn_circle_anaquel_metamucil_mex()'><img src='img/Fundamentales/Merchandising/btn_circle_metamucil.png'/></div>"+
				//Gondola
		"<div class='btn_rectangle_fundamentales' id='rectangle_gondola_metamucil_mex'>Anaquel</div>"+
				//Visibilidade
		"<div class='btn_rectangle_fundamentales' id='rectangle_visibilidad_metamucil_mex'>Visibilidad</div>"+
		
			//03
		"<div class='btn_circle' id='btn_circle_anaquel_vicks_mex' onmouseover='rollOver_btn_circle_anaquel_vicks_mex()'><img src='img/Fundamentales/Merchandising/btn_circle_vicks.png'/></div>"+
				//Gondola
		"<div class='btn_rectangle_fundamentales' id='rectangle_gondola_vicks_mex'>Anaquel</div>"+
				//Visibilidade
		"<div class='btn_rectangle_fundamentales' id='rectangle_visibilidad_vicks_mex'>Visibilidad</div>"+
		
			//04
		"<div class='btn_circle' id='btn_circle_anaquel_clearblue_mex' onmouseover='rollOver_btn_circle_anaquel_clearblue_mex()'><img src='img/Fundamentales/Merchandising/btn_circle_clearblue.png'/></div>"+
				//Gondola
		"<div class='btn_rectangle_fundamentales' id='rectangle_gondola_clearblue_mex'>Anaquel</div>"+
				//Visibilidade
		"<div class='btn_rectangle_fundamentales' id='rectangle_visibilidad_clearblue_mex'>Visibilidad</div>"+
		
		//Slide Number
		"<div class='slideNumber'>181</div>"+
	"" ;
	
	
	/////////////////////////////////Brasil
	var merchandising_anaquel_menu_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Selecione o fudamento de vendas que <b>deseja consultar</b></div>"+

		//Back Image
		"<div class='materialVisibilidad_img' id='merchandising_anaquel_menu_back'><img src='img/Fundamentales/Merchandising/img_back_anaquel.png'/></div>"+
		
		//Buttons
			//01
		"<div class='btn_circle' id='btn_circle_anaquel_metamucil' onmouseover='rollOver_btn_circle_anaquel_metamucil()'><img src='img/Fundamentales/Merchandising/btn_circle_metamucil.png'/></div>"+
				//Gondola
		"<div class='btn_rectangle_fundamentales' id='rectangle_gondola_metamucil'>Gôndola</div>"+
				//Visibilidade
		"<div class='btn_rectangle_fundamentales' id='rectangle_visibilidad_metamucil'>Visibilidade</div>"+
		
			//02
		"<div class='btn_circle' id='btn_circle_anaquel_hipoglos' onmouseover='rollOver_btn_circle_anaquel_hipoglos()'><img src='img/Fundamentales/Merchandising/btn_circle_hipoglos.png'/></div>"+
				//Gondola
		"<div class='btn_rectangle_fundamentales' id='rectangle_gondola_hipoglos'>Gôndola</div>"+
				//Visibilidade
		"<div class='btn_rectangle_fundamentales' id='rectangle_visibilidad_hipoglos'>Visibilidade</div>"+
		
			//03
		"<div class='btn_circle' id='btn_circle_anaquel_vicks' onmouseover='rollOver_btn_circle_anaquel_vicks()''><img src='img/Fundamentales/Merchandising/btn_circle_vicks.png'/></div>"+
				//Gondola
		"<div class='btn_rectangle_fundamentales' id='rectangle_gondola_vicks'>Gôndola</div>"+
				//Visibilidade
		"<div class='btn_rectangle_fundamentales' id='rectangle_visibilidad_vicks'>Visibilidade</div>"+
		
		
				
	"" ;
		
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + merchandising_anaquel_menu_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Variables
			**********************************************/
			var peptoButtons = 0 ;
			var metamucilButtons = 0 ;
			var vicksButtons = 0 ;
			var clearblueButtons = 0 ;

			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var merchandising_anaquel_menu_back = document.getElementById("merchandising_anaquel_menu_back") ;
			
			var btn_circle_anaquel_peptoBismol_mex = document.getElementById("btn_circle_anaquel_peptoBismol_mex") ;
			var btn_circle_anaquel_metamucil_mex = document.getElementById("btn_circle_anaquel_metamucil_mex") ;
			var btn_circle_anaquel_vicks_mex = document.getElementById("btn_circle_anaquel_vicks_mex") ;
			var btn_circle_anaquel_clearblue_mex = document.getElementById("btn_circle_anaquel_clearblue_mex") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			TweenMax.fromTo (merchandising_anaquel_menu_back , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			TweenMax.staggerFromTo ([btn_circle_anaquel_peptoBismol_mex , btn_circle_anaquel_metamucil_mex , btn_circle_anaquel_vicks_mex , btn_circle_anaquel_clearblue_mex] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay: .5}, .25) ;			
				
			/////////////////////////////////Exit animation
			function exit_merchandising_anaquel_menu_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var merchandising_anaquel_menu_back = document.getElementById("merchandising_anaquel_menu_back") ;
				
				var btn_circle_anaquel_peptoBismol_mex = document.getElementById("btn_circle_anaquel_peptoBismol_mex") ;
				var btn_circle_anaquel_metamucil_mex = document.getElementById("btn_circle_anaquel_metamucil_mex") ;
				var btn_circle_anaquel_vicks_mex = document.getElementById("btn_circle_anaquel_vicks_mex") ;
				var btn_circle_anaquel_clearblue_mex = document.getElementById("btn_circle_anaquel_clearblue_mex") ;
				
				var rectangle_gondola_pepto_mex = document.getElementById("rectangle_gondola_pepto_mex") ;
				var rectangle_visibilidad_pepto_mex = document.getElementById("rectangle_visibilidad_pepto_mex") ;
				
				var rectangle_gondola_metamucil_mex = document.getElementById("rectangle_gondola_metamucil_mex") ;
				var rectangle_visibilidad_metamucil_mex = document.getElementById("rectangle_visibilidad_metamucil_mex") ;
				
				var rectangle_gondola_vicks_mex = document.getElementById("rectangle_gondola_vicks_mex") ;
				var rectangle_visibilidad_vicks_mex = document.getElementById("rectangle_visibilidad_vicks_mex") ;
				
				TweenMax.killTweensOf([txt_Title_bullets , merchandising_anaquel_menu_back , btn_circle_anaquel_peptoBismol_mex , btn_circle_anaquel_metamucil_mex , btn_circle_anaquel_vicks_mex , btn_circle_anaquel_clearblue_mex]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (merchandising_anaquel_menu_back , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				
				TweenMax.staggerFromTo ([btn_circle_anaquel_peptoBismol_mex , btn_circle_anaquel_metamucil_mex , btn_circle_anaquel_vicks_mex , btn_circle_anaquel_clearblue_mex] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}, .25) ;
				
				TweenMax.to ([rectangle_gondola_pepto_mex , rectangle_visibilidad_pepto_mex , rectangle_gondola_metamucil_mex , rectangle_visibilidad_metamucil_mex , rectangle_gondola_vicks_mex , rectangle_visibilidad_vicks_mex , rectangle_gondola_clearblue_mex , rectangle_visibilidad_clearblue_mex] , .5 , {css:{opacity:"0"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{						
						case -7:
							merchandising_02() ;
						break;
						
						case -6:
							menu_fundamentalesVenta() ;
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
							merchandising_02() ;
						break;
						
						case 1:
							merchandising_anaquel_anaquel_peptoBismol() ;
						break;
						
						case 2:
							merchandising_anaquel_visibilidad_peptoBismol() ;
						break;
						
						case 3:
							merchandising_anaquel_anaquel_metamucil() ;
						break;
						
						case 4:
							merchandising_anaquel_visibilidad_metamucil() ;
						break;
						
						case 5:
							merchandising_anaquel_anaquel_vicks() ;
						break;
						
						case 6:
							merchandising_anaquel_visibilidad_vicks() ;
						break;
						
						case 7:
							merchandising_anaquel_anaquel_clearblue() ;
						break;
						
						case 8:
							merchandising_anaquel_visibilidad_clearblue() ;
						break;
					}
				}
			}


			//////////////////////////////////Show/Hide buttons
				//PeptoBismol
			function showHide_peptoBismol_mex()
			{
				metamucilButtons++;
				
				var rectangle_gondola_pepto_mex = document.getElementById("rectangle_gondola_pepto_mex") ;
				var rectangle_visibilidad_pepto_mex = document.getElementById("rectangle_visibilidad_pepto_mex") ;
				
				if((metamucilButtons%2) != 0)
				{
					TweenMax.fromTo([rectangle_gondola_pepto_mex , rectangle_visibilidad_pepto_mex] , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"}} , .25) ;
				}else
				{
					TweenMax.fromTo([rectangle_gondola_pepto_mex , rectangle_visibilidad_pepto_mex] , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .25) ;
				}
			}
			
				//Metamucil
			function showHide_metamucil_mex()
			{
				metamucilButtons++;
				
				var rectangle_gondola_metamucil_mex = document.getElementById("rectangle_gondola_metamucil_mex") ;
				var rectangle_visibilidad_metamucil_mex = document.getElementById("rectangle_visibilidad_metamucil_mex") ;
				
				if((metamucilButtons%2) != 0)
				{
					TweenMax.fromTo([rectangle_gondola_metamucil_mex , rectangle_visibilidad_metamucil_mex] , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"}} , .25) ;
				}else
				{
					TweenMax.fromTo([rectangle_gondola_metamucil_mex , rectangle_visibilidad_metamucil_mex] , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .25) ;
				}
			}
			
				//Vicks
			function showHide_vicks_mex()
			{
				vicksButtons++;
				
				var rectangle_gondola_vicks_mex = document.getElementById("rectangle_gondola_vicks_mex") ;
				var rectangle_visibilidad_vicks_mex = document.getElementById("rectangle_visibilidad_vicks_mex") ;
				
				if((vicksButtons%2) != 0)
				{
					TweenMax.fromTo([rectangle_gondola_vicks_mex , rectangle_visibilidad_vicks_mex] , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"}} , .25) ;
				}else
				{
					TweenMax.fromTo([rectangle_gondola_vicks_mex , rectangle_visibilidad_vicks_mex] , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .25) ;
				}
			}

				//Clearblue
			function showHide_clearblue_mex()
			{
				clearblueButtons++;
				
				var rectangle_gondola_clearblue_mex = document.getElementById("rectangle_gondola_clearblue_mex") ;
				var rectangle_visibilidad_clearblue_mex = document.getElementById("rectangle_visibilidad_clearblue_mex") ;
				
				if((clearblueButtons%2) != 0)
				{
					TweenMax.fromTo([rectangle_gondola_clearblue_mex , rectangle_visibilidad_clearblue_mex] , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"}} , .25) ;
				}else
				{
					TweenMax.fromTo([rectangle_gondola_clearblue_mex , rectangle_visibilidad_clearblue_mex] , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .25) ;
				}
			}
			
			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
						
			/////////////////////////////////PeptoBismol
			$('#btn_circle_anaquel_peptoBismol_mex').click(function(){
				showHide_peptoBismol_mex() ;
			});
				
				//Anaquel
			$('#rectangle_gondola_pepto_mex').click(function(){
				pagChange = 1 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
			
				//Visibilidad
			$('#rectangle_visibilidad_pepto_mex').click(function(){
				pagChange = 2 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
			
			/////////////////////////////////Metamucil
			$('#btn_circle_anaquel_metamucil_mex').click(function(){
				showHide_metamucil_mex() ;
			});
			
				//Anaquel
			$('#rectangle_gondola_metamucil_mex').click(function(){
				pagChange = 3 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
			
				//Visibilidad
			$('#rectangle_visibilidad_metamucil_mex').click(function(){
				pagChange = 4 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
			
			/////////////////////////////////Vicks
			$('#btn_circle_anaquel_vicks_mex').click(function(){
				showHide_vicks_mex() ;
			});
			
				//Anaquel
			$('#rectangle_gondola_vicks_mex').click(function(){
				pagChange = 5 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
			
				//Visibilidad
			$('#rectangle_visibilidad_vicks_mex').click(function(){
				pagChange = 6 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
			
			/////////////////////////////////Clearblue
			$('#btn_circle_anaquel_clearblue_mex').click(function(){
				showHide_clearblue_mex() ;
			});
			
				//Anaquel
			$('#rectangle_gondola_clearblue_mex').click(function(){
				pagChange = 7 ;
				exit_merchandising_anaquel_menu_mex() ;
			});

				//Visibilidad
			$('#rectangle_visibilidad_clearblue_mex').click(function(){
				pagChange = 8 ;
				exit_merchandising_anaquel_menu_mex() ;
			});
			
			
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_anaquel_marcas_mex.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + merchandising_anaquel_menu_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Variables
			**********************************************/
			var metamucilButtons = 0 ;
			var hipoglosButtons = 0 ;
			var vicksButtons = 0 ;

			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var merchandising_anaquel_menu_back = document.getElementById("merchandising_anaquel_menu_back") ;
			
			var btn_circle_anaquel_metamucil = document.getElementById("btn_circle_anaquel_metamucil") ;
			var btn_circle_anaquel_hipoglos = document.getElementById("btn_circle_anaquel_hipoglos") ;
			var btn_circle_anaquel_vicks = document.getElementById("btn_circle_anaquel_vicks") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			TweenMax.fromTo (merchandising_anaquel_menu_back , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			TweenMax.staggerFromTo ([btn_circle_anaquel_metamucil , btn_circle_anaquel_hipoglos, btn_circle_anaquel_vicks] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay: .5}, .25) ;			
				
			/////////////////////////////////Exit animation
			function exit_merchandising_anaquel_menu()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				
				var merchandising_anaquel_menu_back = document.getElementById("merchandising_anaquel_menu_back") ;
				
				var btn_circle_anaquel_metamucil = document.getElementById("btn_circle_anaquel_metamucil") ;
				var btn_circle_anaquel_hipoglos = document.getElementById("btn_circle_anaquel_hipoglos") ;
				var btn_circle_anaquel_vicks = document.getElementById("btn_circle_anaquel_vicks") ;
				
				var rectangle_gondola_metamucil = document.getElementById("rectangle_gondola_metamucil") ;
				var rectangle_visibilidad_metamucil = document.getElementById("rectangle_visibilidad_metamucil") ;
				
				var rectangle_gondola_hipoglos = document.getElementById("rectangle_gondola_hipoglos") ;
				var rectangle_visibilidad_hipoglos = document.getElementById("rectangle_visibilidad_hipoglos") ;
				
				var rectangle_gondola_vicks = document.getElementById("rectangle_gondola_vicks") ;
				var rectangle_visibilidad_vicks = document.getElementById("rectangle_visibilidad_vicks") ;
				
				TweenMax.killTweensOf([txt_Title_bullets , merchandising_anaquel_menu_back , btn_circle_anaquel_metamucil , btn_circle_anaquel_hipoglos , btn_circle_anaquel_vicks]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (merchandising_anaquel_menu_back , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				
				TweenMax.to ([rectangle_gondola_metamucil , rectangle_visibilidad_metamucil , rectangle_gondola_hipoglos , rectangle_visibilidad_hipoglos , rectangle_gondola_metamucil , rectangle_gondola_metamucil] , .5 , {css:{opacity:"0"}}) ;
				
				TweenMax.staggerFromTo ([btn_circle_anaquel_metamucil , btn_circle_anaquel_hipoglos, btn_circle_anaquel_vicks] , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}, .25) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{						
						case -7:
							merchandising_02() ;
						break;
						
						case -6:
							menu_fundamentalesVenta() ;
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
							merchandising_02() ;
						break;
						
						case 1:
							merchandising_anaquel_anaquel_metamucil() ;
						break;
						
						case 2:
							merchandising_anaquel_visibilidad_metamucil() ;
						break;
						
						case 3:
							merchandising_anaquel_anaquel_hipoglos() ;
						break;
						
						case 4:
							merchandising_anaquel_visibilidad_hipoglos() ;
						break;
						
						case 5:
							merchandising_anaquel_anaquel_vicks() ;
						break;
						
						case 6:
							merchandising_anaquel_visibilidad_vicks() ;
						break;
					}
				}
			}


			//////////////////////////////////Show/Hide buttons
				//Metamucil
			function showHide_metamucil()
			{
				metamucilButtons++;
				
				var rectangle_gondola_metamucil = document.getElementById("rectangle_gondola_metamucil") ;
				var rectangle_visibilidad_metamucil = document.getElementById("rectangle_visibilidad_metamucil") ;
				
				if((metamucilButtons%2) != 0)
				{
					TweenMax.fromTo([rectangle_gondola_metamucil , rectangle_visibilidad_metamucil] , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"}} , .25) ;
				}else
				{
					TweenMax.fromTo([rectangle_gondola_metamucil , rectangle_visibilidad_metamucil] , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .25) ;
				}
			}
			
				//Hipoglos
			function showHide_hipoglos()
			{
				hipoglosButtons++;
				
				var rectangle_gondola_hipoglos = document.getElementById("rectangle_gondola_hipoglos") ;
				var rectangle_visibilidad_hipoglos = document.getElementById("rectangle_visibilidad_hipoglos") ;
				
				if((hipoglosButtons%2) != 0)
				{
					TweenMax.fromTo([rectangle_gondola_hipoglos , rectangle_visibilidad_hipoglos] , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"}} , .25) ;
				}else
				{
					TweenMax.fromTo([rectangle_gondola_hipoglos , rectangle_visibilidad_hipoglos] , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .25) ;
				}
			}
			
				//Vicks
			function showHide_vicks()
			{
				vicksButtons++;
				
				var rectangle_gondola_vicks = document.getElementById("rectangle_gondola_vicks") ;
				var rectangle_visibilidad_vicks = document.getElementById("rectangle_visibilidad_vicks") ;
				
				if((vicksButtons%2) != 0)
				{
					TweenMax.fromTo([rectangle_gondola_vicks , rectangle_visibilidad_vicks] , .5 , {css:{opacity:"0"}} , {css:{opacity:"1"}} , .25) ;
				}else
				{
					TweenMax.fromTo([rectangle_gondola_vicks , rectangle_visibilidad_vicks] , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"}} , .25) ;
				}
			}
			
			/**********************************************
			Button Actions
			***********************************************/
			/////////////////////////////////Icons
				//01
			$('#ico_01').click(function() {
				pagChange = -2 ;
				exit_merchandising_anaquel_menu() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_merchandising_anaquel_menu() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_merchandising_anaquel_menu() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_merchandising_anaquel_menu() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_merchandising_anaquel_menu() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_merchandising_anaquel_menu() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_merchandising_anaquel_menu() ;
			});
			
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_merchandising_anaquel_menu() ;
			});
						
			/////////////////////////////////Metamucil
			$('#btn_circle_anaquel_metamucil').click(function(){
				showHide_metamucil() ;
			});
				
				//Anaquel
			$('#rectangle_gondola_metamucil').click(function(){
				pagChange = 1 ;
				exit_merchandising_anaquel_menu() ;
			});
			
				//Visibilidad
			$('#rectangle_visibilidad_metamucil').click(function(){
				pagChange = 2 ;
				exit_merchandising_anaquel_menu() ;
			});
			
			/////////////////////////////////Hipoglos
			$('#btn_circle_anaquel_hipoglos').click(function(){
				showHide_hipoglos() ;
			});
			
				//Anaquel
			$('#rectangle_gondola_hipoglos').click(function(){
				pagChange = 3 ;
				exit_merchandising_anaquel_menu() ;
			});
			
				//Visibilidad
			$('#rectangle_visibilidad_hipoglos').click(function(){
				pagChange = 4 ;
				exit_merchandising_anaquel_menu() ;
			});
			
			/////////////////////////////////Vicks
			$('#btn_circle_anaquel_vicks').click(function(){
				showHide_vicks() ;
			});
			
				//Anaquel
			$('#rectangle_gondola_vicks').click(function(){
				pagChange = 5 ;
				exit_merchandising_anaquel_menu() ;
			});
			
				//Visibilidad
			$('#rectangle_visibilidad_vicks').click(function(){
				pagChange = 6 ;
				exit_merchandising_anaquel_menu() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_anaquel_marcas_bra.mp3' ;
	
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
}
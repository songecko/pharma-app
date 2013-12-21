<!--Planilla de Objetivos-->
function materialVisibilidad()
{
	CleanScreen() ;
	
	gotoSlide = 'materialVisibilidad' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_Induccion.png' onmouseover='rollOver_ico_04()' /></div>"+
		
		//Menu Herramientas
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_induccion_herramientas.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		//Planilla de Objetivos
		"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_menu_Induccion_herramientas_07.png' onmouseover='rollOver_ico_06()' /></div>"+

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
	/////////////////////////////////México
	var materialVisibilidad_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Material de <b>visibilidad</b></div>"+

		//Images
		"<div class='materialVisibilidad_img' id='materialVisibilidad_img'><img src='img/Induccion/Herramientas/img_Visibilidad.png' id='norma_Image_change' /></div>"+
		
		//Big Options Images
			//01
		"<div class='opt_img' id='optBig_img_01' onmouseover='rollOver_matVisibilidad_01()'><img src='img/Induccion/Herramientas/img_opt_01.png' id='norma_Image_change' /></div>"+
			//02
		"<div class='opt_img' id='optBig_img_02' onmouseover='rollOver_matVisibilidad_02()'><img src='img/Induccion/Herramientas/img_opt_02.png' id='norma_Image_change' /></div>"+
			//03
		"<div class='opt_img' id='optBig_img_03' onmouseover='rollOver_matVisibilidad_03()'><img src='img/Induccion/Herramientas/img_opt_03.png' id='norma_Image_change' /></div>"+
			//04
		"<div class='opt_img' id='optBig_img_04' onmouseover='rollOver_matVisibilidad_04()'><img src='img/Induccion/Herramientas/img_opt_04.png' id='norma_Image_change' /></div>"+
		
		//Options text
			//01
		"<div class='opt_txt' id='opt_txt_01'>Punto Original</div>"+
			//02
		"<div class='opt_txt' id='opt_txt_02'>Mostrador</div>"+
			//03
		"<div class='opt_txt' id='opt_txt_03'>Check Out</div>"+
			//04
		"<div class='opt_txt' id='opt_txt_04'>Exposiciones extras</div>"+
		
		//Big Options Images
			//01
		"<div class='opt_img' id='optLittle_img_01' onmouseover='rollOver_matVisibilidad_little_01()'><img src='img/Induccion/Herramientas/img_opt_03.png' id='norma_Image_change' width='70' /></div>"+
			//02
		"<div class='opt_img' id='optLittle_img_02' onmouseover='rollOver_matVisibilidad_little_02()'><img src='img/Induccion/Herramientas/img_opt_04.png' id='norma_Image_change' width='70' /></div>"+
			//03
		"<div class='opt_img' id='optLittle_img_03' onmouseover='rollOver_matVisibilidad_little_03()'><img src='img/Induccion/Herramientas/img_opt_01.png' id='norma_Image_change' width='70' /></div>"+
			//04
		"<div class='opt_img' id='optLittle_img_04' onmouseover='rollOver_matVisibilidad_little_04()'><img src='img/Induccion/Herramientas/img_opt_02.png' id='norma_Image_change' width='70' /></div>"+
		
		//Button
		"<div class='rectangle_01' id='btn_FundamentosVendas_mat' onmouseover='rollOver_FundamentosVendas_mat()'>Fundamentales <br/>de vendas</div>"+
		
		//BlackScreen
		"<div class='blackScreen' id='blackScreen'>"+
			//Cerrar
			"<div class='btnCerrar' id='btnCerrar_matVisibilidad'><img src='img/img_cerrar.png'/></div>"+
			
			//Container
			"<div class='videoContainer' id='videoContainer'>"+
			
				//Video Screen
				"<div class='videoScreen' id='videoScreen'><video controls='controls' autoplay='autoplay' id='vid_matVisibilidad' width='1090' height='614'></video></div>"+
				
				//Video Shadow
				"<div class='videoShadow' id='videoShadow'><img src='img/img_dobleShadow.png'></div>"+
				
			"</div>"+
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>021</div>"+

	"" ;
	
	
	/////////////////////////////////Brasil
	var materialVisibilidad_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Material de <b>visibilidade</b></div>"+

		//Images
		"<div class='materialVisibilidad_img' id='materialVisibilidad_img'><img src='img/Induccion/Herramientas/img_Visibilidad.png' id='norma_Image_change' /></div>"+
		
		//Big Options Images
			//01
		"<div class='opt_img' id='optBig_img_01' onmouseover='rollOver_matVisibilidad_01()'><img src='img/Induccion/Herramientas/img_opt_01.png' id='norma_Image_change' /></div>"+
			//02
		"<div class='opt_img' id='optBig_img_02' onmouseover='rollOver_matVisibilidad_02()'><img src='img/Induccion/Herramientas/img_opt_02.png' id='norma_Image_change' /></div>"+
			//03
		"<div class='opt_img' id='optBig_img_03' onmouseover='rollOver_matVisibilidad_03()'><img src='img/Induccion/Herramientas/img_opt_03.png' id='norma_Image_change' /></div>"+
			//04
		"<div class='opt_img' id='optBig_img_04' onmouseover='rollOver_matVisibilidad_04()'><img src='img/Induccion/Herramientas/img_opt_04.png' id='norma_Image_change' /></div>"+
		
		//Options text
			//01
		"<div class='opt_txt' id='opt_txt_01'>Ponto Original</div>"+
			//02
		"<div class='opt_txt' id='opt_txt_02'>Balcão</div>"+
			//03
		"<div class='opt_txt' id='opt_txt_03'>Check Out</div>"+
			//04
		"<div class='opt_txt' id='opt_txt_04'>Exposições extras</div>"+
		
		//Big Options Images
			//01
		"<div class='opt_img' id='optLittle_img_01' onmouseover='rollOver_matVisibilidad_little_01()'><img src='img/Induccion/Herramientas/img_opt_03.png' id='norma_Image_change' width='70' /></div>"+
			//02
		"<div class='opt_img' id='optLittle_img_02' onmouseover='rollOver_matVisibilidad_little_02()'><img src='img/Induccion/Herramientas/img_opt_04.png' id='norma_Image_change' width='70' /></div>"+
			//03
		"<div class='opt_img' id='optLittle_img_03' onmouseover='rollOver_matVisibilidad_little_03()'><img src='img/Induccion/Herramientas/img_opt_01.png' id='norma_Image_change' width='70' /></div>"+
			//04
		"<div class='opt_img' id='optLittle_img_04' onmouseover='rollOver_matVisibilidad_little_04()'><img src='img/Induccion/Herramientas/img_opt_02.png' id='norma_Image_change' width='70' /></div>"+
		
		//Button
		"<div class='rectangle_01' id='btn_FundamentosVendas_mat' onmouseover='rollOver_FundamentosVendas_mat()'>Fundamentos <br/>de vendas</div>"+
		
		//BlackScreen
		"<div class='blackScreen' id='blackScreen'>"+
			//Cerrar
			"<div class='btnCerrar' id='btnCerrar_matVisibilidad'><img src='img/img_cerrar.png'/></div>"+
			
			//Container
			"<div class='videoContainer' id='videoContainer'>"+
			
				//Video Screen
				"<div class='videoScreen' id='videoScreen'><video controls='controls' autoplay='autoplay' id='vid_matVisibilidad' width='1090' height='614'></video></div>"+
				
				//Video Shadow
				"<div class='videoShadow' id='videoShadow'><img src='img/img_dobleShadow.png'></div>"+
				
			"</div>"+
		"</div>"+

		//Slide Number
		"<div class='slideNumber'>024</div>"+

	"" ;
		
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + materialVisibilidad_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Variables
			**********************************************/
			var videoLoad = 0 ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var materialVisibilidad_img = document.getElementById("materialVisibilidad_img") ;
			
			var optBig_img_01 = document.getElementById("optBig_img_01") ;
			var optBig_img_02 = document.getElementById("optBig_img_02") ;
			var optBig_img_03 = document.getElementById("optBig_img_03") ;
			var optBig_img_04 = document.getElementById("optBig_img_04") ;
			
			var opt_txt_01 = document.getElementById("opt_txt_01") ;
			var opt_txt_02 = document.getElementById("opt_txt_02") ;
			var opt_txt_03 = document.getElementById("opt_txt_03") ;
			var opt_txt_04 = document.getElementById("opt_txt_04") ;
			
			var optLittle_img_01 = document.getElementById("optLittle_img_01") ;
			var optLittle_img_02 = document.getElementById("optLittle_img_02") ;
			var optLittle_img_03 = document.getElementById("optLittle_img_03") ;
			var optLittle_img_04 = document.getElementById("optLittle_img_04") ;
			
			var btn_FundamentosVendas_mat = document.getElementById("btn_FundamentosVendas_mat") ;
			
			var blackScreen = document.getElementById("blackScreen") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (materialVisibilidad_img , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			TweenMax.fromTo (btn_FundamentosVendas_mat , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([optBig_img_01 , optBig_img_02 , optBig_img_03 , optBig_img_04] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.5} , .25) ;
			TweenMax.staggerFromTo ([opt_txt_01 , opt_txt_02 , opt_txt_03 , opt_txt_04] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.75} , .25) ;
			TweenMax.staggerFromTo ([optLittle_img_01 , optLittle_img_02 , optLittle_img_03 , optLittle_img_04] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:1} , .25) ;
			
			
			//////////////////////////////////Call Top Video
			function callVideo_mex()
			{
				var blackScreen = document.getElementById("blackScreen") ;
				blackScreen.style.left='0' ;
				
				var vid_matVisibilidad = document.getElementById("vid_matVisibilidad") ;
			
				var videoContainer = document.getElementById("videoContainer") ;
				
				var btnCerrar_matVisibilidad = document.getElementById("btnCerrar_matVisibilidad") ;
				
				TweenMax.fromTo(blackScreen , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:1}) ;
				
				TweenMax.fromTo(btnCerrar_matVisibilidad , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:2 }) ;
				
				TweenMax.fromTo(videoContainer , 1 , {css:{top:"800px" , height:"0px"}} , {css:{top:"160px" , height:"660px"} , delay:1 , onComplete:PlayVideo}) ;
				
				auLocucion.src = '' ;
				
				function PlayVideo()
				{
					switch(videoLoad)
					{
						case 1:
							vid_matVisibilidad.src = 'video/Induccion/vid_matVisibilidad_puntoOriginal_mex.mp4' ;
						break ;
						
						case 2:
							vid_matVisibilidad.src = 'video/Induccion/vid_matVisibilidad_counter_mex.mp4' ;
						break ;
						
						case 3:
							vid_matVisibilidad.src = 'video/Induccion/vid_matVisibilidad_checkOut_mex.mp4' ;
						break ;
						
						case 4:
							vid_matVisibilidad.src = 'video/Induccion/vid_matVisibilidad_exposicionesExtra_mex.mp4' ;
						break ;
					}
					
					vid_matVisibilidad.pause() ;
					
					if(vid_matVisibilidad.paused)
					{
						vid_matVisibilidad.play() ;
					}
				}
			}
			
			//////////////////////////////////Call Back Top Video
			function callback_Video_mex()
			{
				var blackScreen = document.getElementById("blackScreen") ;
				blackScreen.style.left='0' ;
				
				var vid_matVisibilidad = document.getElementById("vid_matVisibilidad") ;
				vid_matVisibilidad.src = '' ;
			
				var videoContainer = document.getElementById("videoContainer") ;
				
				var btnCerrar_matVisibilidad = document.getElementById("btnCerrar_matVisibilidad") ;
				
				TweenMax.fromTo(btnCerrar_matVisibilidad , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.5,.5)"}}) ;
				
				TweenMax.fromTo(videoContainer , 1 , {css:{top:"160px" , height:"660px"}} , {css:{top:"800px" , height:"0px"}}) ;
				TweenMax.fromTo(blackScreen , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , delay:1 , onComplete:hideScreen}) ;
				
				function hideScreen()
				{
					var blackScreen = document.getElementById("blackScreen") ;
					blackScreen.style.left='1300px' ;
				}
			}
			
			/////////////////////////////////Exit animation
			function exit_materialVisibilidad_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var materialVisibilidad_img = document.getElementById("materialVisibilidad_img") ;
				var pagObj_txt = document.getElementById("pagObj_txt") ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (materialVisibilidad_img , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				TweenMax.fromTo (txtmaterialVisibilidad , 1 , {css:{opacity:"1" , top:"860px"}} , {css:{opacity:"0" , top:"825px"}}) ;
				
				TweenMax.staggerFromTo ([optBig_img_01 , optBig_img_02 , optBig_img_03 , optBig_img_04] , .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .15) ;
				TweenMax.staggerFromTo ([opt_txt_01 , opt_txt_02 , opt_txt_03 , opt_txt_04] , .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .15) ;
				TweenMax.staggerFromTo ([optLittle_img_01 , optLittle_img_02 , optLittle_img_03 , optLittle_img_04] , .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .15) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_Herramientas() ;
						break;
						
						case -6:
							menu_Induccion() ;
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
							guiaFarma() ;
						break;
						
						case 1:
							kitPresentacion() ;
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
				exit_materialVisibilidad_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_materialVisibilidad_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_materialVisibilidad_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_materialVisibilidad_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_materialVisibilidad_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_materialVisibilidad_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_materialVisibilidad_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_materialVisibilidad_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_materialVisibilidad_mex() ;
			});
			
			/////////////////////////////////Video Loaders
				//01
			$('#optBig_img_01 , #optLittle_img_03').click(function() {
				videoLoad = 1 ;
				callVideo_mex() ;
			});
			
				//02
			$('#optBig_img_02 , #optLittle_img_04').click(function() {
				videoLoad = 2 ;
				callVideo_mex() ;
			});
			
				//03
			$('#optBig_img_03 , #optLittle_img_01').click(function() {
				videoLoad = 3 ;
				callVideo_mex() ;
			});
			
				//03
			$('#optBig_img_04 , #optLittle_img_02').click(function() {
				videoLoad = 4 ;
				callVideo_mex() ;
			});
			
			//////////////////////////////////Video Close
			$('#btnCerrar_matVisibilidad' , '#blackScreen').click(function(){
				callback_Video_mex() ;
			});
			
			//////////////////////////////////Fundamentales de Venta
			$('#btn_FundamentosVendas_mat').click(function(){
				pagChange = 1 ;
				exit_materialVisibilidad_mex() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_materialVisibilidad_mex.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + materialVisibilidad_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Variables
			**********************************************/
			var videoLoad = 0 ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var materialVisibilidad_img = document.getElementById("materialVisibilidad_img") ;
			
			var optBig_img_01 = document.getElementById("optBig_img_01") ;
			var optBig_img_02 = document.getElementById("optBig_img_02") ;
			var optBig_img_03 = document.getElementById("optBig_img_03") ;
			var optBig_img_04 = document.getElementById("optBig_img_04") ;
			
			var opt_txt_01 = document.getElementById("opt_txt_01") ;
			var opt_txt_02 = document.getElementById("opt_txt_02") ;
			var opt_txt_03 = document.getElementById("opt_txt_03") ;
			var opt_txt_04 = document.getElementById("opt_txt_04") ;
			
			var optLittle_img_01 = document.getElementById("optLittle_img_01") ;
			var optLittle_img_02 = document.getElementById("optLittle_img_02") ;
			var optLittle_img_03 = document.getElementById("optLittle_img_03") ;
			var optLittle_img_04 = document.getElementById("optLittle_img_04") ;
			
			var blackScreen = document.getElementById("blackScreen") ;
			
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (materialVisibilidad_img , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}}) ;
			
			TweenMax.staggerFromTo ([optBig_img_01 , optBig_img_02 , optBig_img_03 , optBig_img_04] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.5} , .25) ;
			TweenMax.staggerFromTo ([opt_txt_01 , opt_txt_02 , opt_txt_03 , opt_txt_04] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:.75} , .25) ;
			TweenMax.staggerFromTo ([optLittle_img_01 , optLittle_img_02 , optLittle_img_03 , optLittle_img_04] , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:1} , .25) ;
			
			//////////////////////////////////Call Top Video
			function callVideo()
			{
				var blackScreen = document.getElementById("blackScreen") ;
				blackScreen.style.left='0' ;
				
				var vid_matVisibilidad = document.getElementById("vid_matVisibilidad") ;
			
				var videoContainer = document.getElementById("videoContainer") ;
				
				var btnCerrar_matVisibilidad = document.getElementById("btnCerrar_matVisibilidad") ;
				
				TweenMax.fromTo(blackScreen , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"} , delay:1}) ;
				
				TweenMax.fromTo(btnCerrar_matVisibilidad , .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"} , delay:2 }) ;
				
				TweenMax.fromTo(videoContainer , 1 , {css:{top:"800px" , height:"0px"}} , {css:{top:"160px" , height:"660px"} , delay:1 , onComplete:PlayVideo}) ;
				
				auLocucion.src = '' ;
				
				function PlayVideo()
				{
					switch(videoLoad)
					{
						case 1:
							vid_matVisibilidad.src = 'video/Induccion/vid_matVisibilidad_puntoOriginal.mp4' ;
						break ;
						
						case 2:
							vid_matVisibilidad.src = 'video/Induccion/vid_matVisibilidad_counter.mp4' ;
						break ;
						
						case 3:
							vid_matVisibilidad.src = 'video/Induccion/vid_matVisibilidad_checkOut.mp4' ;
						break ;
						
						case 4:
							vid_matVisibilidad.src = 'video/Induccion/vid_matVisibilidad_exposicionesExtra.mp4' ;
						break ;
					}
					
					
					vid_matVisibilidad.pause() ;
					
					if(vid_matVisibilidad.paused)
					{
						vid_matVisibilidad.play() ;
					}
				}
			}

			//////////////////////////////////Call Back Top Video
			function callback_Video()
			{
				var blackScreen = document.getElementById("blackScreen") ;
				blackScreen.style.left='0' ;
				
				var vid_matVisibilidad = document.getElementById("vid_matVisibilidad") ;
				vid_matVisibilidad.src = '' ;
			
				var videoContainer = document.getElementById("videoContainer") ;
				
				var btnCerrar_matVisibilidad = document.getElementById("btnCerrar_matVisibilidad") ;
				
				TweenMax.fromTo(btnCerrar_matVisibilidad , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.5,.5)"}}) ;
				
				TweenMax.fromTo(videoContainer , 1 , {css:{top:"160px" , height:"660px"}} , {css:{top:"800px" , height:"0px"}}) ;
				TweenMax.fromTo(blackScreen , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , delay:1 , onComplete:hideScreen}) ;
				
				function hideScreen()
				{
					var blackScreen = document.getElementById("blackScreen") ;
					blackScreen.style.left='1300px' ;
				}
			}
			
			/////////////////////////////////Exit animation
			function exit_materialVisibilidad()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var materialVisibilidad_img = document.getElementById("materialVisibilidad_img") ;
				var pagObj_txt = document.getElementById("pagObj_txt") ;
				
				var optBig_img_01 = document.getElementById("optBig_img_01") ;
				var optBig_img_02 = document.getElementById("optBig_img_02") ;
				var optBig_img_03 = document.getElementById("optBig_img_03") ;
				var optBig_img_04 = document.getElementById("optBig_img_04") ;
				
				var opt_txt_01 = document.getElementById("opt_txt_01") ;
				var opt_txt_02 = document.getElementById("opt_txt_02") ;
				var opt_txt_03 = document.getElementById("opt_txt_03") ;
				var opt_txt_04 = document.getElementById("opt_txt_04") ;
				
				var optLittle_img_01 = document.getElementById("optLittle_img_01") ;
				var optLittle_img_02 = document.getElementById("optLittle_img_02") ;
				var optLittle_img_03 = document.getElementById("optLittle_img_03") ;
				var optLittle_img_04 = document.getElementById("optLittle_img_04") ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (materialVisibilidad_img , .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}}) ;
				TweenMax.fromTo (txtmaterialVisibilidad , 1 , {css:{opacity:"1" , top:"860px"}} , {css:{opacity:"0" , top:"825px"}}) ;
				
				TweenMax.staggerFromTo ([optBig_img_01 , optBig_img_02 , optBig_img_03 , optBig_img_04] , .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .15) ;
				TweenMax.staggerFromTo ([opt_txt_01 , opt_txt_02 , opt_txt_03 , opt_txt_04] , .25 , {css:{opacity:"1" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .15) ;
				TweenMax.staggerFromTo ([optLittle_img_01 , optLittle_img_02 , optLittle_img_03 , optLittle_img_04] , .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , .15) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_Herramientas() ;
						break;
						
						case -6:
							menu_Induccion() ;
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
							guiaFarma();
							
							/*switch(matVisibilidadPosition)
							{
								case 1:
									menu_Herramientas() ;
								break ;
								
								case 2:
									menu_fundamentalesVenta() ;
								break ;
							}*/
						break;
						
						case 1:
							normaEvaluacion() ;
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
				exit_materialVisibilidad() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_materialVisibilidad() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_materialVisibilidad() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_materialVisibilidad() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_materialVisibilidad() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_materialVisibilidad() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_materialVisibilidad() ;
			});
						
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_materialVisibilidad() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_materialVisibilidad() ;
			});
			
			/////////////////////////////////Video Loaders
				//01
			$('#optBig_img_01 , #optLittle_img_03').click(function() {
				videoLoad = 1 ;
				callVideo() ;
			});
			
				//02
			$('#optBig_img_02 , #optLittle_img_04').click(function() {
				videoLoad = 2 ;
				callVideo() ;
			});
			
				//03
			$('#optBig_img_03 , #optLittle_img_01').click(function() {
				videoLoad = 3 ;
				callVideo() ;
			});
			
				//03
			$('#optBig_img_04 , #optLittle_img_02').click(function() {
				videoLoad = 4 ;
				callVideo() ;
			});
			
			//////////////////////////////////Video Close
			$('#btnCerrar_matVisibilidad' , '#blackScreen').click(function(){
				callback_Video() ;
			});
			
			//////////////////////////////////Fundamentales de Venta
			$('#btn_FundamentosVendas_mat').click(function(){
				pagChange = 1 ;
				exit_materialVisibilidad() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/Induccion/au_materialVisibilidad_bra.mp3' ;
	
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
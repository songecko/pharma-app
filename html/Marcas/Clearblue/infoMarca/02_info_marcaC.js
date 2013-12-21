<!--Menu Metamucil-->
function info_marca_02C()
{
	CleanScreen() ;
	
	gotoSlide = 'info_marca_02C' ;
	
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_marcas_Clearblue.png' onmouseover='rollOver_ico_05()' /></div>"+
		
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
	var info01_clearblue_mexico =
	
	//Titulo
	"<div class='txt_Title' id='txt_Title'>Selecione la información que <b>desea consultar</b></div>"+
	
	//Graphic
	"<div class='img01_sld_02_inf_Mrc_C' id='img01_sld_02_inf_Mrc_C'><img src='img/marcas/clearblue/main.png' /></div>"+
	
	//Menu buttons
		//01
	"<div class='menuElement' id='btn_02_01' onmouseover='rollOver_btn_02_01()'>"+
		//Image
		"<div class='me_Image'><img src='img/MenuElements/btn_planifi_infoMar_clearblue.png' /></div>"+
		//Shadow
		"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
	"</div>"+
	
		//02
	"<div class='menuElement' id='btn_02_02' onmouseover='rollOver_btn_02_02()'>"+
		//Image
		"<div class='me_Image'><img src='img/MenuElements/btn_embara_infoMar_clearblue.png' /></div>"+
		//Shadow
		"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
	"</div>"+
	//Slide Number
		"<div class='slideNumber'>120</div>"+
	"" ;
	
	/////////////////////////////////Brasil
	var info01_clearblue_brasil =
		"<div class='txt_Title' id='noDisponible'>Información no disponible para su país | Información no disponible párr su país</div>"+
		
		//Slide Number
		"<div class='slideNumber'>---</div>"+
	
	"" ;
	

	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + info01_clearblue_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation
			var txt_Title = document.getElementById("txt_Title") ;
			TweenMax.fromTo (txt_Title , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			var img01_sld_02_inf_Mrc_C = document.getElementById("img01_sld_02_inf_Mrc_C") ;
			TweenMax.fromTo (img01_sld_02_inf_Mrc_C , 2 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			var btn_02_01 = document.getElementById("btn_02_01") ;
			var btn_02_02 = document.getElementById("btn_02_02") ;
			TweenMax.staggerFromTo ([btn_02_01 , btn_02_02], .5 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .25 ) ;
			
			/////////////////////////////////Exit animation
			function exit_info01_clearblue_mex()
			{
				var btn_02_01 = document.getElementById("btn_02_01") ;
				var btn_02_02 = document.getElementById("btn_02_02") ;
				TweenMax.staggerFromTo ([btn_02_01 , btn_02_02], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .25 ) ;
				
				var img01_sld_02_inf_Mrc_C = document.getElementById("img01_sld_02_inf_Mrc_C") ;
				TweenMax.fromTo (img01_sld_02_inf_Mrc_C , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay:.8 , onComplete:ChangePage}) ;
				
				var txt_Title = document.getElementById("txt_Title") ;
				TweenMax.fromTo (txt_Title , 2 , {css:{opacity:"1"}} , {css:{opacity:"0"}, delay:.2}) ;
				
				auLocucion.src='';
					
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_clearblue() ;
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
							info_marca_01C() ;
						break;
						
						case 1:
							info_marca_13C() ;
						break ;
						
						case 2:
							info_marca_03C() ;
						break ;
						
						case 3:
							info_marca_04C() ;
						break ;
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
				exit_info01_clearblue_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_info01_clearblue_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_info01_clearblue_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_info01_clearblue_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_info01_clearblue_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_info01_clearblue_mex() ;
			});
		
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_info01_clearblue_mex() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_info01_clearblue_mex() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_info01_clearblue_mex() ;
			});
		
			/////////////////////////////////Button 01
			$('#btn_02_01').click(function() {
				pagChange = 2 ;
				exit_info01_clearblue_mex() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_02_02').click(function() {
				pagChange = 3 ;
				exit_info01_clearblue_mex() ;
			});	
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/marcas_mx/clearblue/.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + info01_clearblue_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var noDisponible = document.getElementById("noDisponible") ;
			TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			/////////////////////////////////Exit animation
			function exit_info01_clearblue()
			{
				var noDisponible = document.getElementById("noDisponible") ;
				
				TweenMax.fromTo(noDisponible , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				auLocucion.src = '' ;
					
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_clearblue() ;
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
							info_marca_01C() ;
						break;
						
						case 1:
							info_marca_05C() ;
						break ;
						
						case 2:
							info_marca_03C() ;
						break ;
						
						case 3:
							info_marca_04C() ;
						break ;
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
				exit_info01_clearblue() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_info01_clearblue() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_info01_clearblue() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_info01_clearblue() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_info01_clearblue() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_info01_clearblue() ;
			});
		
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_info01_clearblue() ;
			});
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_info01_clearblue() ;
			});
			
			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_info01_clearblue() ;
			});
		
			/////////////////////////////////Button 01
			$('#btn_02_01').click(function() {
				pagChange = 2 ;
				exit_info01_clearblue() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_02_02').click(function() {
				pagChange = 3 ;
				exit_info01_clearblue() ;
			});
			
			
			
			
			
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
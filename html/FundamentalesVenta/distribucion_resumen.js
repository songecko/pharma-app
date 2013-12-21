<!--Menu Metamucil-->
function distribucion_resumen()
{
	CleanScreen() ;
	
	gotoSlide = 'distribucion_resumen' ;
	
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
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_menu_fundamentalesVentas_distribucion.png' onmouseover='rollOver_ico_05()' /></div>"+
				
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
	var distribucion_resumen_mexico =
	
	//Flechas anterior y siguiente
	//Anterior
	"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()' ><img src='img/img_flecha_back.png' /></div>"+
	//Siguiente
	//"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
		
	//Elements
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>Resumen <b>distribución</b></div>"+

	//img 03 Graphic
	"<div class='img03_sld_03_inf_Mrc_C' id='img03_sld_03_inf_Mrc_C'>"+
		"<img src='img/Fundamentales/distribucion/distribucion_resumen.png' width='500'>"+
	"</div>"+

	//texto 2
	"<div style='color:#333; margin-top:-50px;' class='txt02_sld_03_inf_Mrc_C' id='txt02_sld_03_inf_Mrc_C'>"+
		"• En resumen, la distribución es la variedad de skus de una marca que están presentes en una farmacia y es el más importante de los fundamentales de venta, un consumidor no puede comprar un producto que no se encuentra disponible en la farmacia.</br></br>"+

		"• Tu función en este fundamental es verificar que tenemos todos los SKUs que deberían estar presentes en esa farmacia y que la cantidad esté de acuerdo con la demanda y se tiene el abastecimiento mínimo en todos los puntos de contacto existentes."+
	"</div>"+
	
	//Slide Number
		"<div class='slideNumber'>174</div>"+
	
	"" ;
	
	/////////////////////////////////Brasil
	var distribucion_resumen_brasil =
	
	//Flechas anterior y siguiente
	//Anterior
	"<div class='flechaBack' id='flechaBack' onmouseover='rollOver_flechaBack()' ><img src='img/img_flecha_back.png' /></div>"+
	//Siguiente
	//"<div class='flechaNext' id='flechaNext' onmouseover='rollOver_flechaNext()'><img src='img/img_flecha_next.png' /></div>"+
		
	//Elements
	//Selecciona País
	"<div class='txt_Title_bullets' id='txt_Title_bullets'>Resumo de <b>distribuição</b></div>"+

	//img 03 Graphic
	"<div class='img03_sld_03_inf_Mrc_C' id='img03_sld_03_inf_Mrc_C'>"+
		"<img src='img/Fundamentales/distribucion/distribucion_resumen.png' width='500'>"+
	"</div>"+

	//texto 2
	"<div style='color:#333; margin-top:-50px;' class='txt02_sld_03_inf_Mrc_C' id='txt02_sld_03_inf_Mrc_C'>"+
		"• Em resumo, a distribuição é a variedade de um skus marcas que se encontram presentes numa farmácia e é o mais importante fundamental da venda, o consumidor não pode comprar um produto que não está disponível na farmácia.</br></br>"+

		"• O seu papel neste fundamental é verificar que temos todos os SKUs que deve estar presente na farmácia e que a quantidade está de acordo com a demanda ea oferta é o mínimo em todos os pontos de contato existentes."+
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
		
			document.getElementById("Container").innerHTML = generalElements + distribucion_resumen_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			//Change Exit Animation
			ChangeExit=1;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			//Titulo
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"},delay: .2}) ;
			
				//Graphics
				var img03_sld_03_inf_Mrc_C = document.getElementById("img03_sld_03_inf_Mrc_C") ;
				TweenMax.fromTo(img03_sld_03_inf_Mrc_C , .5 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"500px"}, delay:1.5}) ;
			
			//Textos
			//var txt01_sld_03_inf_Mrc_C = document.getElementById("txt01_sld_03_inf_Mrc_C") ;
			var txt02_sld_03_inf_Mrc_C = document.getElementById("txt02_sld_03_inf_Mrc_C") ;
			TweenMax.staggerFromTo ([ txt02_sld_03_inf_Mrc_C], .5 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.4 } , 1.3 ) ;
			
			/////////////////////////////////Exit animation
			function exit_mx()
			{
				//Textos
				//var txt01_sld_03_inf_Mrc_C = document.getElementById("txt01_sld_03_inf_Mrc_C") ;
				var txt02_sld_03_inf_Mrc_C = document.getElementById("txt02_sld_03_inf_Mrc_C") ;
				TweenMax.staggerFromTo ([  txt02_sld_03_inf_Mrc_C], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0 } , 1 ) ;
				
					//Graphics
					var img03_sld_03_inf_Mrc_C = document.getElementById("img03_sld_03_inf_Mrc_C") ;
					TweenMax.fromTo(img03_sld_03_inf_Mrc_C , .5 , {css:{opacity:"1" , width:"500px"}} , {css:{opacity:"0" , width:"0px"}, delay:.2}) ;
					
				//Titulo
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"},delay:1.1 , onComplete:ChangePage}) ;
				
				function ChangePage()
				{
					switch(pagChange)
					{						
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
							distribucion_01() ;
						break;
						
						case 1:
							
						break;
						
						case 2:
							
						break;
						
						case 3:
							
						break;
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
		
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/FundamentalesVenta/au_Fundamentales_portafolioResumen_mex.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + distribucion_resumen_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			//Change Exit Animation
			ChangeExit=5;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			//Titulo
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"},delay: .2}) ;
			
				//Graphics
				var img03_sld_03_inf_Mrc_C = document.getElementById("img03_sld_03_inf_Mrc_C") ;
				TweenMax.fromTo(img03_sld_03_inf_Mrc_C , .5 , {css:{opacity:"0" , width:"0px"}} , {css:{opacity:"1" , width:"500px"}, delay:1.5}) ;
			
			//Textos
			//var txt01_sld_03_inf_Mrc_C = document.getElementById("txt01_sld_03_inf_Mrc_C") ;
			var txt02_sld_03_inf_Mrc_C = document.getElementById("txt02_sld_03_inf_Mrc_C") ;
			TweenMax.staggerFromTo ([ txt02_sld_03_inf_Mrc_C], .5 , {css:{opacity:"0" , transform:"scale(.1,.1)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}, delay:1.4 } , 1.3 ) ;
			
			/////////////////////////////////Exit animation
			function exit_br()
			{
				//Textos
				//var txt01_sld_03_inf_Mrc_C = document.getElementById("txt01_sld_03_inf_Mrc_C") ;
				var txt02_sld_03_inf_Mrc_C = document.getElementById("txt02_sld_03_inf_Mrc_C") ;
				TweenMax.staggerFromTo ([  txt02_sld_03_inf_Mrc_C], .5 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(.1,.1)"}, delay:0 } , 1 ) ;
				
					//Graphics
					var img03_sld_03_inf_Mrc_C = document.getElementById("img03_sld_03_inf_Mrc_C") ;
					TweenMax.fromTo(img03_sld_03_inf_Mrc_C , .5 , {css:{opacity:"1" , width:"500px"}} , {css:{opacity:"0" , width:"0px"}, delay:.2}) ;
					
				//Titulo
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
				TweenMax.fromTo (txt_Title_bullets , .5 , {css:{opacity:"1"}} , {css:{opacity:"0"},delay:1.1 , onComplete:ChangePage}) ;
				
				function ChangePage()
				{
					switch(pagChange)
					{						
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
							distribucion_01() ;
						break;
						
						case 1:
							
						break;
						
						case 2:
							
						break;
						
						case 3:
							
						break;
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
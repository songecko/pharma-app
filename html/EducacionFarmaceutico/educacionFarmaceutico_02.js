<!--Educación al Farmacéutico 02-->
function educacionFarmaceutico_02()
{
	CleanScreen() ;
	
	gotoSlide = 'educacionFarmaceutico_02' ;

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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_educacionFarmaceutico.png' onmouseover='rollOver_ico_04()' /></div>"+
		
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
	var educacionFarmaceutico_02_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Tips para <b>educación efectiva</b></li></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_educFarma_s2_01'><b>Para el farmacéutico es importante…</b></div>"+
		
			//Bullets	
				//01
		"<div class='all_leftText_bullet' id='all_leftText_educFarma_s2_02'>1)Que usemos su lenguaje<br/><b>(está incluido en el brochure)</b><br/><br/>2) Que se le considere el “Experto” <br/><b>(Esta educación contribuye)</b><br/><br/>3) Que le dejes un resumen para recordar <b>(volante)</b></div>"+
		
			//03
		"<div class='all_leftText' id='all_leftText_educFarma_s2_03'><b>Para transmitir el mensaje efectivo…</b></div>"+
			//Bullets	
				//04
		"<div class='all_leftText_bullet' id='all_leftText_educFarma_s2_04'>4) Usar el <b>Brochure</b> siempre!<br/><br/>5) Cierre de acuerdo con la recomendación<br/><br/><b>(Ej. ¿A cuántos de los próximos 10 pacientes con males tares estomacales le recomendará Pepto-Bismol?)</b></div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/EducacionFarmaceutico/img_educacionFarma_02.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>142</div>"+

	"" ;
	
	
	/////////////////////////////////Brasil
	var educacionFarmaceutico_02_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Dicas para <b>educação efetiva</b></li></div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_educFarma_s2_01'><b>Para o farmacêutico é importante…</b></div>"+
		
			//Bullets	
				//01
		"<div class='all_leftText_bullet' id='all_leftText_educFarma_s2_02'>1) Que usemos sua linguagem <br/><b>(inclusa na brochura+folheto)</b><br/><br/>2) Ser considerado “O expert!” <br/><b>(informação irá ajudá-lo)</b><br/><br/>3) Que você deixe com ele um resumo para recordar (folheto)</div>"+
		
			//03
		"<div class='all_leftText' id='all_leftText_educFarma_s2_03'><b>Para transmitir a mensagem efetiva…</b></div>"+
			//Bullets	
				//04
		"<div class='all_leftText_bullet' id='all_leftText_educFarma_s2_04'>4) Usar a <b>Brochura</b> sempre!<br/><br/>5) Feche com acordo de recomendação<br/><br/><b>(Ex: Para quantas pessoas você vai recomendar Hipoglós como um produto complementar à cesta de compras de produtos para bebês?)</b></div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/EducacionFarmaceutico/img_educacionFarma_02.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>103</div>"+
		
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_02_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_educFarma_s2_01 = document.getElementById("all_leftText_educFarma_s2_01") ;
			var all_leftText_educFarma_s2_03 = document.getElementById("all_leftText_educFarma_s2_03") ;
			
			var all_leftText_educFarma_s2_02 = document.getElementById("all_leftText_educFarma_s2_02") ;
			var all_leftText_educFarma_s2_04 = document.getElementById("all_leftText_educFarma_s2_04") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_educFarma_s2_01 , all_leftText_educFarma_s2_03] , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.staggerFromTo ([all_leftText_educFarma_s2_02 , all_leftText_educFarma_s2_04] , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5} , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"100px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_02_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_educFarma_s2_01 = document.getElementById("all_leftText_educFarma_s2_01") ;
				var all_leftText_educFarma_s2_03 = document.getElementById("all_leftText_educFarma_s2_03") ;
				
				var all_leftText_educFarma_s2_02 = document.getElementById("all_leftText_educFarma_s2_02") ;
				var all_leftText_educFarma_s2_04 = document.getElementById("all_leftText_educFarma_s2_04") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_educFarma_s2_01 , all_leftText_educFarma_s2_02 , all_leftText_educFarma_s2_03 , all_leftText_educFarma_s2_04 , all_rightImage]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
			
				TweenMax.staggerFromTo ([all_leftText_educFarma_s2_01 , all_leftText_educFarma_s2_03] , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				
				TweenMax.staggerFromTo ([all_leftText_educFarma_s2_02 , all_leftText_educFarma_s2_04] , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}} , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"100px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							languageSelector() ;
						break;
						
						case 1:
							educacionFarmaceutico_01() ;
						break ;
						
						case 2:
							educacionFarmaceutico_03() ;
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
				exit_educacionFarmaceutico_02_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_02_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_02_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_02_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_02_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_02_mex() ;
			});
	
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_02_mex() ;
			});

			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 2 ;
				exit_educacionFarmaceutico_02_mex() ;
			});
			
			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/EducacionFarmaceutico/au_educacionFamaceutico_mex02.mp3' ;
			
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
			document.getElementById("Container").innerHTML = generalElements + educacionFarmaceutico_02_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_educFarma_s2_01 = document.getElementById("all_leftText_educFarma_s2_01") ;
			var all_leftText_educFarma_s2_03 = document.getElementById("all_leftText_educFarma_s2_03") ;
			
			var all_leftText_educFarma_s2_02 = document.getElementById("all_leftText_educFarma_s2_02") ;
			var all_leftText_educFarma_s2_04 = document.getElementById("all_leftText_educFarma_s2_04") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([all_leftText_educFarma_s2_01 , all_leftText_educFarma_s2_03] , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.staggerFromTo ([all_leftText_educFarma_s2_02 , all_leftText_educFarma_s2_04] , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5} , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"100px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_educacionFarmaceutico_02()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_educFarma_s2_01 = document.getElementById("all_leftText_educFarma_s2_01") ;
				var all_leftText_educFarma_s2_03 = document.getElementById("all_leftText_educFarma_s2_03") ;
				
				var all_leftText_educFarma_s2_02 = document.getElementById("all_leftText_educFarma_s2_02") ;
				var all_leftText_educFarma_s2_04 = document.getElementById("all_leftText_educFarma_s2_04") ;
				
				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_educFarma_s2_01 , all_leftText_educFarma_s2_02 , all_leftText_educFarma_s2_03 , all_leftText_educFarma_s2_04 , all_rightImage]) ;
				
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
			
				TweenMax.staggerFromTo ([all_leftText_educFarma_s2_01 , all_leftText_educFarma_s2_03] , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}} , .25) ;
				
				TweenMax.staggerFromTo ([all_leftText_educFarma_s2_02 , all_leftText_educFarma_s2_04] , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}} , .25) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"100px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							languageSelector() ;
						break;
						
						case 1:
							educacionFarmaceutico_01() ;
						break ;
						
						case 2:
							educacionFarmaceutico_03() ;
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
				exit_educacionFarmaceutico_02() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_educacionFarmaceutico_02() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_educacionFarmaceutico_02() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_educacionFarmaceutico_02() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_educacionFarmaceutico_02() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_educacionFarmaceutico_02() ;
			});
	
	
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 1 ;
				exit_educacionFarmaceutico_02() ;
			});

			/////////////////////////////////Flecha Next
			$('#flechaNext').click(function() {
				pagChange = 2 ;
				exit_educacionFarmaceutico_02() ;
			});

			/**********************************************
			Audio Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
			
			auLocucion.src = 'audio/EducacionFarmaceutico/au_educacionFarmaceutico_bra02.mp3' ;
			
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
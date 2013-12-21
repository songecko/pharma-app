<!--Educación al Farmacéutico 01-->
function conocimientoProfundo_organigrama()
{
	CleanScreen() ;
	
	gotoSlide = 'conocimientoProfundo_organigrama' ;
	
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
		"<div class='shortCuts' id='ico_04'><img src='img/icons/ico_menu_tecnicaVentas.png' onmouseover='rollOver_ico_04()' /></div>"+
		
		//Menu Técnica de Ventas
		"<div class='shortCuts' id='ico_05'><img src='img/icons/ico_conocimientoProfundo.png' onmouseover='rollOver_ico_05()' /></div>"+
		
		//Menu Técnica de Ventas
		//"<div class='shortCuts' id='ico_06'><img src='img/icons/ico_conocimientoProfundo_organigrama.png' onmouseover='rollOver_ico_06()' /></div>"+
		
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
	var conocimientoProfundo_01_mexico =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Organigrama</div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_conocimientoProfundo_s1_01'><b>Es importante saber:</b></div>"+
		
			//02
		"<div class='all_leftText_bullet' id='all_leftText_conocimientoProfundo_s1_02'>• Quienes son los principales puntos de contacto<br/><br/>• Quienes son las personas que tienen el poder de decidir y estar de acuerdo con los planes a implementar en las tiendas (gerentes, jefes de departamento);<br/><br/>• Quien puede influenciar en estas decisiones.<br/><br/>• Quienes son los equipos multifuncionales;<br/><br/>• Como evalúan a cada persona.<br/><br/>• Con quien debemos llegar primero para<br/> no brincarse a nadie</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/TecnicaVentas/ConocimientoProfundo/img_conocimientoProfundo_01.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>230</div>"+
	"" ;
	
	
	/////////////////////////////////Brasil
	var conocimientoProfundo_01_brasil =
		//Selecciona País
		"<div class='txt_Title_bullets' id='txt_Title_bullets'>Organograma</div>"+
		
		//Text Left
			//01
		"<div class='all_leftText' id='all_leftText_conocimientoProfundo_s1_01'><b>É importante saber:</b></div>"+
		
			//02
		"<div class='all_leftText_bullet' id='all_leftText_conocimientoProfundo_s1_02'>• Quem são os principais pontos de contato<br/><br/>• Quem são as pessoas que têm o poder de decidir e concordam em implementar planos em lojas (gerentes, chefes de departamento);<br/><br/>• Quem pode influenciar essas decisões.<br/><br/>• Quem são as equipes funcionais;<br/><br/>• Como avaliar cada pessoa.<br/><br/>• Com quem deve vir em primeiro lugar para não pular qualquer um</div>"+
		
		//Image  rightImage
		"<div class='all_rightImage' id='all_rightImage'><img src='img/TecnicaVentas/ConocimientoProfundo/img_conocimientoProfundo_01.png'></div>"+
		
		//Slide Number
		"<div class='slideNumber'>176</div>"+
	"" ;
	
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + conocimientoProfundo_01_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_conocimientoProfundo_s1_01 = document.getElementById("all_leftText_conocimientoProfundo_s1_01") ;
			var all_leftText_conocimientoProfundo_s1_02 = document.getElementById("all_leftText_conocimientoProfundo_s1_02") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (all_leftText_conocimientoProfundo_s1_01 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.fromTo (all_leftText_conocimientoProfundo_s1_02 , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5} , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"50px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_conocimientoProfundo_organigrama_mex()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_conocimientoProfundo_s1_01 = document.getElementById("all_leftText_conocimientoProfundo_s1_01") ;
				var all_leftText_conocimientoProfundo_s1_02 = document.getElementById("all_leftText_conocimientoProfundo_s1_02") ;

				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_conocimientoProfundo_s1_01 , all_leftText_conocimientoProfundo_s1_02 , all_rightImage]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (all_leftText_conocimientoProfundo_s1_01 , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}}) ;
				
				TweenMax.fromTo (all_leftText_conocimientoProfundo_s1_02 , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}}) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"100px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_conocimientoProfundo() ;
						break;
						
						case -6:
							menu_tecnicaVentas() ;
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
							menu_tecnicaVentas() ;
						break;
						
						case 1:
							conocimientoProfundo_objetivosEstrategias() ;
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
				exit_conocimientoProfundo_organigrama_mex() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_conocimientoProfundo_organigrama_mex() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_conocimientoProfundo_organigrama_mex() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_conocimientoProfundo_organigrama_mex() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_conocimientoProfundo_organigrama_mex() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_conocimientoProfundo_organigrama_mex() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_conocimientoProfundo_organigrama_mex() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_conocimientoProfundo_organigrama_mex() ;
			});
			
			/////////////////////////////////Flecha next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_conocimientoProfundo_organigrama_mex() ;
			});
			
			
			
			
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
			document.getElementById("Container").innerHTML = generalElements + conocimientoProfundo_01_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
			var all_leftText_conocimientoProfundo_s1_01 = document.getElementById("all_leftText_conocimientoProfundo_s1_01") ;
			var all_leftText_conocimientoProfundo_s1_02 = document.getElementById("all_leftText_conocimientoProfundo_s1_02") ;
				
			TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.fromTo (all_leftText_conocimientoProfundo_s1_01 , .5 , {css:{opacity:"0" , left:"200px"}} , {css:{opacity:"1" , left:"150px"}} , .25) ;
			
			TweenMax.fromTo (all_leftText_conocimientoProfundo_s1_02 , .5 , {css:{opacity:"0" , left:"225px"}} , {css:{opacity:"1" , left:"175px"} , delay: .5} , .25) ;
			
			TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"0" , right:"150px"}} , {css:{opacity:"1" , right:"50px"} , delay:1}) ;
			
			/////////////////////////////////Exit animation
			function exit_conocimientoProfundo_organigrama()
			{
				var txt_Title_bullets = document.getElementById("txt_Title_bullets") ;
			
				var all_leftText_conocimientoProfundo_s1_01 = document.getElementById("all_leftText_conocimientoProfundo_s1_01") ;
				var all_leftText_conocimientoProfundo_s1_02 = document.getElementById("all_leftText_conocimientoProfundo_s1_02") ;

				TweenMax.killTweensOf ([txt_Title_bullets , all_leftText_conocimientoProfundo_s1_01 , all_leftText_conocimientoProfundo_s1_02 , all_rightImage]) ;
					
				TweenMax.fromTo (txt_Title_bullets , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.fromTo (all_leftText_conocimientoProfundo_s1_01 , .5 , {css:{opacity:"1" , left:"150px"}} , {css:{opacity:"0" , left:"200px"}}) ;
				
				TweenMax.fromTo (all_leftText_conocimientoProfundo_s1_02 , .5 , {css:{opacity:"1" , left:"175px"}} , {css:{opacity:"0" , left:"225px"}}) ;
				
				TweenMax.fromTo (all_rightImage , 1 , {css:{opacity:"1" , right:"100px"}} , {css:{opacity:"0" , right:"150px"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
						case -7:
							menu_conocimientoProfundo() ;
						break;
						
						case -6:
							menu_tecnicaVentas() ;
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
							menu_tecnicaVentas() ;
						break;
						
						case 1:
							conocimientoProfundo_objetivosEstrategias() ;
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
				exit_conocimientoProfundo_organigrama() ;
			});
			
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_conocimientoProfundo_organigrama() ;
			});
			
				//03
			$('#ico_03').click(function() {
				pagChange = -4 ;
				exit_conocimientoProfundo_organigrama() ;
			});
			
				//04
			$('#ico_04').click(function() {
				pagChange = -5 ;
				exit_conocimientoProfundo_organigrama() ;
			});
			
				//05
			$('#ico_05').click(function() {
				pagChange = -6 ;
				exit_conocimientoProfundo_organigrama() ;
			});
			
				//06
			$('#ico_06').click(function() {
				pagChange = -7 ;
				exit_conocimientoProfundo_organigrama() ;
			});
			
			/////////////////////////////////Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				exit_conocimientoProfundo_organigrama() ;
			});
			
			
			/////////////////////////////////Flecha back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_conocimientoProfundo_organigrama() ;
			});
			
			/////////////////////////////////Flecha next
			$('#flechaNext').click(function() {
				pagChange = 1 ;
				exit_conocimientoProfundo_organigrama() ;
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
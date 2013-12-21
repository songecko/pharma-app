<!--Menu rol-->
function menu_Rol()
{
	CleanScreen() ;
	
	gotoSlide = 'menu_Rol' ;
	
	/*****************************
	Icons Menu
	*****************************/
	var menuContent = 
		//Main Menu
		"<div class='shortCuts' id='ico_01'><img src='img/icons/ico_mainMenu.png' onmouseover='rollOver_ico_01()' /></div>"+
		
		//Menu Areas
		"<div class='shortCuts' id='ico_02'><img src='img/icons/ico_menu_Areas_01.png' onmouseover='rollOver_ico_02()' /></div>"+
		
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
	var menu_Rol_mexico =
		//Selecciona País
		"<div class='txt_Title' id='txt_Title'>Selecciona <b>tú posición</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_06_01' onmouseover='rollOver_btn_06_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_rol_farmasesor.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_06_02' onmouseover='rollOver_btn_06_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_rol_merchandiser.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_06_03' onmouseover='rollOver_btn_06_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_rol_supervisor.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//04
		"<div class='menuElement' id='btn_06_04' onmouseover='rollOver_btn_06_04()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_rol_keyAcount.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//05
		"<div class='menuElement' id='btn_06_05' onmouseover='rollOver_btn_06_05()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_rol_gerente.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//06
		"<div class='menuElement' id='btn_06_06' onmouseover='rollOver_btn_06_06()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_rol_pgEr.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		/*General BlackScreen*/
		"<div class='blackScreen' id='blackScreen'>"+
			//Rol Image
			"<div class='imgRol' id='imgRol'><video loop='loop' autoplay='autoplay' id='vidRol'></video></div>"+
			
			//Ingres tus datos
			"<div class='txt_Ingresa' id='txt_Ingresa'>Ingresa tus datos para</div>"+
			
			//Iniciar tu entrenamiento
			"<div class='txt_IniciaEntrenamiento' id='txt_IniciaEntrenamiento'>Iniciar tu entrenamiento</div>"+
			
			//Usuario
				//Texto
			"<div class='txt_User' id='txt_User'>Usuario</div>"+
				//Input
			"<input class='input_User' size='50' value='' type='text' id='myUser' />"+
			
			//Contraseña
				//Texto
			"<div class='txt_Password' id='txt_Password'>Contraseña</div>"+
				//Input
			"<input class='input_Password' size='50' value='' type='password' id='myPassword' />"+
			
			//Ingresar
			"<div class='btnRol' id='btnRol_Ingresar'>Aceptar</div>"+
			
			//Cancelar
			"<div class='btnRol' id='btnRol_Cancelar'>Cancelar</div>"+
			
			//Contraseña Incorrecta
			"<div class='txt_WrongPassword' id='txt_WrongPassword'></div>"+
			
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>002</div>"+

	"" ;
	
	
	/////////////////////////////////Brasil
	var menu_Rol_brasil =
		//Selecciona País
		"<div class='txt_Title' id='txt_Title'>Escolha <b>seu cargo</b></div>"+
		
		//Menu buttons
			//01
		"<div class='menuElement' id='btn_06_01' onmouseover='rollOver_btn_06_01()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_rol_representante.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//02
		"<div class='menuElement' id='btn_06_02' onmouseover='rollOver_btn_06_02()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_rol_promotores.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//03
		"<div class='menuElement' id='btn_06_03' onmouseover='rollOver_btn_06_03()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_rol_supervisor.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//04
		"<div class='menuElement' id='btn_06_04' onmouseover='rollOver_btn_06_04()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_rol_rvEsplho.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//05
		"<div class='menuElement' id='btn_06_05' onmouseover='rollOver_btn_06_05()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_rol_gerente.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
			//06
		"<div class='menuElement' id='btn_06_06' onmouseover='rollOver_btn_06_06()'>"+
			//Image
			"<div class='me_Image'><img src='img/MenuElements/btn_rol_pgEr.png' /></div>"+
			//Shadow
			"<div class='me_Shadow'> <img src='img/MenuElements/img_buttonShadow.png' /></div>"+
		"</div>"+
		
		
		
		/*General BlackScreen*/
		"<div class='blackScreen' id='blackScreen'>"+
			//Rol Image
			"<div class='imgRol' id='imgRol'><video loop='loop' autoplay='autoplay' id='vidRol'></video></div>"+
			
			//Ingres tus datos
			"<div class='txt_Ingresa' id='txt_Ingresa'>Introduza os seus dados para</div>"+
			
			//Iniciar tu entrenamiento
			"<div class='txt_IniciaEntrenamiento' id='txt_IniciaEntrenamiento'>Começar seu treinamento</div>"+
			
			//Usuario
				//Texto
			"<div class='txt_User' id='txt_User'>Usuário</div>"+
				//Input
			"<input class='input_User' size='50' value='' type='text' id='myUser' />"+
			
			//Contraseña
				//Texto
			"<div class='txt_Password' id='txt_Password'>Senha</div>"+
				//Input
			"<input class='input_Password' size='50' value='' type='password' id='myPassword' />"+
			
			//Ingresar
			"<div class='btnRol' id='btnRol_Ingresar'>Aceitar</div>"+
			
			//Cancelar
			"<div class='btnRol' id='btnRol_Cancelar'>Cancelar</div>"+
			
			//Contraseña Incorrecta
			"<div class='txt_WrongPassword' id='txt_WrongPassword'></div>"+
			
		"</div>"+
		
		//Slide Number
		"<div class='slideNumber'>002</div>"+

	"" ;
	
	/**********************************************
	Adding content to display
	***********************************************/
	document.getElementById("contextualMenu").innerHTML = menuContent ;
	
	switch( languageCountry )
	{
		//México
		case 1:
			document.getElementById("Container").innerHTML = generalElements + menu_Rol_mexico ;
			document.getElementById("imageLanguage").src = "img/img_language_Mexico.png" ;

			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title = document.getElementById("txt_Title") ;
			
			var btn_06_01 = document.getElementById("btn_06_01") ;
			var btn_06_02 = document.getElementById("btn_06_02") ;
			var btn_06_03 = document.getElementById("btn_06_03") ;
			var btn_06_04 = document.getElementById("btn_06_04") ;
			var btn_06_05 = document.getElementById("btn_06_05") ;
			var btn_06_06 = document.getElementById("btn_06_06") ;
				
			TweenMax.fromTo (txt_Title , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_06_01 , btn_06_02 , btn_06_03 , btn_06_04 , btn_06_05 , btn_06_06] , .25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .15 ) ;
		
			/////////////////////////////////Call password
			function call_Password_mex()
			{
				var vidRol = document.getElementById("vidRol") ;
				
				switch(rolSelection)
				{
					case 1:
						vidRol.src='video/MenuRoles/rol_Farmasesor.mp4' ;
					break;
					
					case 2:
						vidRol.src='video/MenuRoles/rol_Merchandiser.mp4' ;
					break;
					
					case 3:
						vidRol.src='video/MenuRoles/rol_Supervisor.mp4' ;
					break;
					
					case 4:
						vidRol.src='video/MenuRoles/rol_KeyAccount.mp4' ;
					break;
					
					case 5:
						vidRol.src='video/MenuRoles/rol_Gerente.mp4' ;
					break;
					
					case 6:
						vidRol.src='video/MenuRoles/rol_PGer.mp4' ;
					break;
				}
				
				var blackScreen = document.getElementById("blackScreen") ;
				
				var imgRol = document.getElementById("imgRol") ;
				
				var txt_WrongPassword = document.getElementById("txt_WrongPassword") ;
				
				TweenMax.to (blackScreen , 0 , {css:{left:"0"}}) ;
				
				TweenMax.fromTo (blackScreen , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
				
				TweenMax.fromTo (imgRol , .5 , {css:{opacity:"0" , top:"800px"}} , {css:{opacity:"1" , top:"175px"} , delay:.5 , onComplete:playVideo}) ;
				
				function playVideo()
				{
					vidRol.play() ;
				}
			}
		
			/////////////////////////////////Call back password
			function callBack_Password()
			{
				var vidRol = document.getElementById("vidRol") ;
				
				var blackScreen = document.getElementById("blackScreen") ;
								
				TweenMax.fromTo (blackScreen , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				TweenMax.fromTo (blackScreen , 0 , {css:{left:"0px"}} , {css:{left:"1300px"} , delay:1 , onComplete:quitVideo}) ;
				
				function quitVideo()
				{
					vidRol.src='' ;
				}
			}
			
			/////////////////////////////////Check password
			function check_Password_mex()
			{
				var blackScreen = document.getElementById("blackScreen") ;
				
				var imgRol = document.getElementById("imgRol") ;
				
				var txt_Ingresa = document.getElementById("txt_Ingresa") ;
				var txt_IniciaEntrenamiento = document.getElementById("txt_IniciaEntrenamiento") ;
				
				var txt_User = document.getElementById("txt_User") ;
				var my_User = document.getElementById("input_User") ;
				
				var txt_Password = document.getElementById("txt_Password") ;
				var my_Password = document.getElementById("input_Password") ;
				
				var btnRol_Ingresar = document.getElementById("btnRol_Ingresar") ;
				var btnRol_Cancelar = document.getElementById("btnRol_Cancelar") ;
				
				var txt_WrongPassword = document.getElementById("txt_WrongPassword") ;
				
				//Password verification according with the rol
				switch(rolSelection)
				{
					case 1:
						if((document.getElementById("myUser").value == 'far' )&&(document.getElementById("myPassword").value == 'far'))
						{
							document.getElementById("txt_WrongPassword").innerHTML = '' ;
							
							pagChange = 1 ;
							
							exit_menuRol () ;
						}else
						{
							document.getElementById("txt_WrongPassword").innerHTML = 'Usuário e ou senha incorretos, por favor,  tente novamente' ;
						}
		
					break ;
					
					case 2:
						if((document.getElementById("myUser").value == 'mer' )&&(document.getElementById("myPassword").value == 'mer'))
						{
							document.getElementById("txt_WrongPassword").innerHTML = '' ;
							
							pagChange = 1 ;
							
							exit_menuRol () ;
						}else
						{
							document.getElementById("txt_WrongPassword").innerHTML = 'Usuario ó Contraseña Incorrecta, intenta nuevamente' ;
						}
					break ;
					
					case 3:
						if((document.getElementById("myUser").value == 'sup' )&&(document.getElementById("myPassword").value == 'sup'))
						{
							document.getElementById("txt_WrongPassword").innerHTML = '' ;
							
							pagChange = 1 ;
							
							exit_menuRol () ;
						}else
						{
							document.getElementById("txt_WrongPassword").innerHTML = 'Usuario ó Contraseña Incorrecta, intenta nuevamente' ;
						}
					break ;
					
					case 4:
						if((document.getElementById("myUser").value == 'key' )&&(document.getElementById("myPassword").value == 'key'))
						{
							document.getElementById("txt_WrongPassword").innerHTML = '' ;
							
							pagChange = 1 ;
							
							exit_menuRol () ;
						}else
						{
							document.getElementById("txt_WrongPassword").innerHTML = 'Usuario ó Contraseña Incorrecta, intenta nuevamente' ;
						}
					break ;
					
					case 5:
						if((document.getElementById("myUser").value == 'ger' )&&(document.getElementById("myPassword").value == 'ger'))
						{
							document.getElementById("txt_WrongPassword").innerHTML = '' ;
							
							pagChange = 1 ;
							
							exit_menuRol () ;
						}else
						{
							document.getElementById("txt_WrongPassword").innerHTML = 'Usuario ó Contraseña Incorrecta, intenta nuevamente' ;
						}
					break ;
					
					case 6:
						if((document.getElementById("myUser").value == 'pge' )&&(document.getElementById("myPassword").value == 'pge'))
						{
							document.getElementById("txt_WrongPassword").innerHTML = '' ;
							
							pagChange = 1 ;
							
							exit_menuRol () ;
						}else
						{
							document.getElementById("txt_WrongPassword").innerHTML = 'Usuario ó Contraseña Incorrecta, intenta nuevamente' ;
						}
					break ;
				}
			}

			/////////////////////////////////Exit animation
			function exit_menuRol_mex()
			{
				var txt_Title = document.getElementById("txt_Title") ;
			
				var btn_06_01 = document.getElementById("btn_06_01") ;
				var btn_06_02 = document.getElementById("btn_06_02") ;
				var btn_06_03 = document.getElementById("btn_06_03") ;
				var btn_06_04 = document.getElementById("btn_06_04") ;
				var btn_06_05 = document.getElementById("btn_06_05") ;
				var btn_06_06 = document.getElementById("btn_06_06") ;
				
				var blackScreen = document.getElementById("blackScreen") ;
					
				TweenMax.fromTo (txt_Title , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_06_01 , btn_06_02 , btn_06_03 , btn_06_04 , btn_06_05 , btn_06_06], .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .15 ) ;
				
				TweenMax.fromTo (blackScreen , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							menu_Areas() ;
						break;
						
						case 1:
							objetivo() ;
						break ;
						
						case 2:
						break ;
						
						case 3:
						break ;
						
						case 4:
						break ;
						
						case 5:
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
				exit_menuRol_mex() ;
			});
		
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_menuRol_mex() ;
			});
			
			//Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				//tiposTiendas_directas.src = '' ;
				exit_menuRol_mex() ;
			}) ;
			
			/////////////////////////////////Button 01
			$('#btn_06_01').click(function() {
				rolSelection = 1 ;
				call_Password_mex() ;
			}) ;
			
			/////////////////////////////////Button 02
			$('#btn_06_02').click(function() {
				rolSelection = 2 ;
				call_Password_mex() ;
			}) ;
			
			/////////////////////////////////Button 03
			$('#btn_06_03').click(function() {
				rolSelection = 3 ;
				call_Password_mex() ;
			}) ;
			
			/////////////////////////////////Button 04
			$('#btn_06_04').click(function() {
				rolSelection = 4 ;
				call_Password_mex() ;
			}) ;
			
			/////////////////////////////////Button 05
			$('#btn_06_05').click(function() {
				rolSelection = 5 ;
				call_Password_mex() ;
			}) ;
			
			/////////////////////////////////Button 06
			$('#btn_06_06').click(function() {
				rolSelection = 6 ;
				call_Password_mex() ;
			}) ;
			
			/////////////////////////////////Ingresar
			$('#btnRol_Ingresar').click(function(){
				check_Password_mex() ;
			}) ;
			
			/////////////////////////////////Cancelar
			$('#btnRol_Cancelar').click(function(){
				callBack_Password() ;
			}) ;
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_menuRol() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/au_seleccionePosicion.mp3' ;
	
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
			document.getElementById("Container").innerHTML = generalElements + menu_Rol_brasil ;
			document.getElementById("imageLanguage").src = "img/img_language_Brasil.png" ;
			
			/**********************************************
			Animations
			***********************************************/
			/////////////////////////////////Main Animation	
			var txt_Title = document.getElementById("txt_Title") ;
			
			var btn_06_01 = document.getElementById("btn_06_01") ;
			var btn_06_02 = document.getElementById("btn_06_02") ;
			var btn_06_03 = document.getElementById("btn_06_03") ;
			var btn_06_04 = document.getElementById("btn_06_04") ;
			var btn_06_05 = document.getElementById("btn_06_05") ;
			var btn_06_06 = document.getElementById("btn_06_06") ;
				
			TweenMax.fromTo (txt_Title , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
			
			TweenMax.staggerFromTo ([btn_06_01 , btn_06_02 , btn_06_03 , btn_06_04 , btn_06_05 , btn_06_06] , .25 , {css:{opacity:"0" , transform:"scale(1.5,1.5)"}} , {css:{opacity:"1" , transform:"scale(1,1)"}} , .15 ) ;
		
			/////////////////////////////////Call password
			function call_Password_bra()
			{
				var blackScreen = document.getElementById("blackScreen") ;
				
				var imgRol = document.getElementById("imgRol") ;
				
				var txt_WrongPassword = document.getElementById("txt_WrongPassword") ;
				
				var vidRol = document.getElementById("vidRol") ;
				
				switch(rolSelection)
				{
					case 1:
						vidRol.src='video/MenuRoles/rol_Representante.mp4' ;
					break;
					
					case 2:
						vidRol.src='video/MenuRoles/rol_Promotor.mp4' ;
					break;
					
					case 3:
						vidRol.src='video/MenuRoles/rol_Supervisor.mp4' ;
					break;
					
					case 4:
						vidRol.src='video/MenuRoles/rol_RVEspelho.mp4' ;
					break;
					
					case 5:
						vidRol.src='video/MenuRoles/rol_Gerente.mp4' ;
					break;
					
					case 6:
						vidRol.src='video/MenuRoles/rol_PGer.mp4' ;
					break;
				}
				
				TweenMax.to (blackScreen , 0 , {css:{left:"0"}}) ;
				
				TweenMax.fromTo (blackScreen , 1 , {css:{opacity:"0"}} , {css:{opacity:"1"}}) ;
				
				TweenMax.fromTo (imgRol , .5 , {css:{opacity:"0" , top:"800px"}} , {css:{opacity:"1" , top:"175px"} , delay:.5 , onComplete:playVideo}) ;
				
				function playVideo()
				{
					vidRol.play() ;
				}
			}
		
			/////////////////////////////////Call back password
			function callBack_Password()
			{
				var vidRol = document.getElementById("vidRol") ;
				
				var blackScreen = document.getElementById("blackScreen") ;
								
				TweenMax.fromTo (blackScreen , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				TweenMax.fromTo (blackScreen , 0 , {css:{left:"0px"}} , {css:{left:"1300px"} , delay:1 , onComplete:quitVideo}) ;
				
				function quitVideo()
				{
					vidRol.src='' ;
				}
			}
			
			/////////////////////////////////Check password
			function check_Password_bra()
			{
				var blackScreen = document.getElementById("blackScreen") ;
				
				var imgRol = document.getElementById("imgRol") ;
				
				var txt_Ingresa = document.getElementById("txt_Ingresa") ;
				var txt_IniciaEntrenamiento = document.getElementById("txt_IniciaEntrenamiento") ;
				
				var txt_User = document.getElementById("txt_User") ;
				var my_User = document.getElementById("input_User") ;
				
				var txt_Password = document.getElementById("txt_Password") ;
				var my_Password = document.getElementById("input_Password") ;
				
				var btnRol_Ingresar = document.getElementById("btnRol_Ingresar") ;
				var btnRol_Cancelar = document.getElementById("btnRol_Cancelar") ;
				
				var txt_WrongPassword = document.getElementById("txt_WrongPassword") ;
				
				//Password verification according with the rol
				switch(rolSelection)
				{
					case 1:
						if((document.getElementById("myUser").value == 'rep' )&&(document.getElementById("myPassword").value == 'rep'))
						{
							document.getElementById("txt_WrongPassword").innerHTML = '' ;
							
							pagChange = 1 ;
							
							exit_menuRol () ;
						}else
						{
							document.getElementById("txt_WrongPassword").innerHTML = 'Usuário e / ou senha, por favor, tente novamente' ;
						}
		
					break ;
					
					case 2:
						if((document.getElementById("myUser").value == 'pro' )&&(document.getElementById("myPassword").value == 'pro'))
						{
							document.getElementById("txt_WrongPassword").innerHTML = '' ;
							
							pagChange = 1 ;
							
							exit_menuRol () ;
						}else
						{
							document.getElementById("txt_WrongPassword").innerHTML = 'Usuário e / ou senha, por favor, tente novamente' ;
						}
					break ;
					
					case 3:
						if((document.getElementById("myUser").value == 'sup' )&&(document.getElementById("myPassword").value == 'sup'))
						{
							document.getElementById("txt_WrongPassword").innerHTML = '' ;
							
							pagChange = 1 ;
							
							exit_menuRol () ;
						}else
						{
							document.getElementById("txt_WrongPassword").innerHTML = 'Usuário e / ou senha, por favor, tente novamente' ;
						}
					break ;
					
					case 4:
						if((document.getElementById("myUser").value == 'rve' )&&(document.getElementById("myPassword").value == 'rve'))
						{
							document.getElementById("txt_WrongPassword").innerHTML = '' ;
							
							pagChange = 1 ;
							
							exit_menuRol () ;
						}else
						{
							document.getElementById("txt_WrongPassword").innerHTML = 'Usuário e / ou senha, por favor, tente novamente' ;
						}
					break ;
					
					case 5:
						if((document.getElementById("myUser").value == 'ger' )&&(document.getElementById("myPassword").value == 'ger'))
						{
							document.getElementById("txt_WrongPassword").innerHTML = '' ;
							
							pagChange = 1 ;
							
							exit_menuRol () ;
						}else
						{
							document.getElementById("txt_WrongPassword").innerHTML = 'Usuário e / ou senha, por favor, tente novamente' ;
						}
					break ;
					
					case 6:
						if((document.getElementById("myUser").value == 'pge' )&&(document.getElementById("myPassword").value == 'pge'))
						{
							document.getElementById("txt_WrongPassword").innerHTML = '' ;
							
							pagChange = 1 ;
							
							exit_menuRol () ;
						}else
						{
							document.getElementById("txt_WrongPassword").innerHTML = 'Usuário e / ou senha, por favor, tente novamente' ;
						}
					break ;
				}
			}

			/////////////////////////////////Exit animation
			function exit_menuRol()
			{
				var txt_Title = document.getElementById("txt_Title") ;
			
				var btn_06_01 = document.getElementById("btn_06_01") ;
				var btn_06_02 = document.getElementById("btn_06_02") ;
				var btn_06_03 = document.getElementById("btn_06_03") ;
				var btn_06_04 = document.getElementById("btn_06_04") ;
				var btn_06_05 = document.getElementById("btn_06_05") ;
				var btn_06_06 = document.getElementById("btn_06_06") ;
				
				var blackScreen = document.getElementById("blackScreen") ;
					
				TweenMax.fromTo (txt_Title , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"} , onComplete:ChangePage}) ;
				
				TweenMax.staggerFromTo ([btn_06_01 , btn_06_02 , btn_06_03 , btn_06_04 , btn_06_05 , btn_06_06], .25 , {css:{opacity:"1" , transform:"scale(1,1)"}} , {css:{opacity:"0" , transform:"scale(2,2)"}} , .15 ) ;
				
				TweenMax.fromTo (blackScreen , 1 , {css:{opacity:"1"}} , {css:{opacity:"0"}}) ;
				
				auLocucion.src = '' ;
				
				function ChangePage()
				{
					switch(pagChange)
					{
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
							menu_Areas() ;
						break;
						
						case 1:
							objetivo() ;
						break ;
						
						case 2:
						break ;
						
						case 3:
						break ;
						
						case 4:
						break ;
						
						case 5:
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
				exit_menuRol() ;
			});
		
				//02
			$('#ico_02').click(function() {
				pagChange = -3 ;
				exit_menuRol() ;
			});
			
			//Language Selector
			$('#worlMap_icon').click(function() {
				pagChange = -1 ;
				//tiposTiendas_directas.src = '' ;
				exit_menuRol() ;
			}) ;
	
	
			/////////////////////////////////Button 01
			$('#btn_06_01').click(function() {
				rolSelection = 1 ;
				call_Password_bra() ;
			});
			
			/////////////////////////////////Button 02
			$('#btn_06_02').click(function() {
				rolSelection = 2 ;
				call_Password_bra() ;
			});
			
			/////////////////////////////////Button 03
			$('#btn_06_03').click(function() {
				rolSelection = 3 ;
				call_Password_bra() ;
			});
			
			/////////////////////////////////Button 04
			$('#btn_06_04').click(function() {
				rolSelection = 4 ;
				call_Password_bra() ;
			});
			
			/////////////////////////////////Button 05
			$('#btn_06_05').click(function() {
				rolSelection = 5 ;
				call_Password_bra() ;
			});
			
			/////////////////////////////////Button 06
			$('#btn_06_06').click(function() {
				rolSelection = 6 ;
				call_Password_bra() ;
			});
			
			/////////////////////////////////Ingresar
			$('#btnRol_Ingresar').click(function(e){
				check_Password_bra() ;
			}) ;
			
			/////////////////////////////////Cancelar
			$('#btnRol_Cancelar').click(function(e){
				callBack_Password() ;
			}) ;
			
			/////////////////////////////////Flecha Back
			$('#flechaBack').click(function() {
				pagChange = 0 ;
				exit_menuRol() ;
			});
			
			/**********************************************
			Locution Load
			***********************************************/
			var auLocucion = document.getElementById("auLocucion") ;
	
			auLocucion.src = 'audio/au_seleccionePosicao.mp3' ;
	
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
		
		//LADMAR
		case 8:
		break ;
	}
	
	/**********************************************
	Background Image
	***********************************************/
	var backGradient = document.getElementById("backGradient");
	backGradient.src = 'img/img_back_parhamLatam.png' ;

}
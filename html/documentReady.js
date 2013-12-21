<!--CoverSheet-->
$(document).ready(function()
{
	//Include Files
	function include(page)
	{
		var script  = document.createElement('script') ;
		script.src  = "html/"+page+".js" ;
		script.type = 'text/javascript' ;
		script.defer = true ;
	
		document.getElementsByTagName('head').item(0).appendChild(script) ;
	}

	/**********************************************
	Generals
	***********************************************/
		/////////////////////////////////Coversheet
	include('coversheet') ;
	
		/////////////////////////////////Intro Video
	include('vid_intro') ;
	
		/////////////////////////////////Language Selector
	include('languageSelector') ;
	
		/////////////////////////////////Menú Áreas
	include('menu_Areas') ;
	
		/////////////////////////////////Menú Roles
	include('menu_Rol') ;
	
		/////////////////////////////////Objetivo
	include('objetivo') ;
		
		/////////////////////////////////Menú Principal
	include('menu_Principal') ;
	
	/**********************************************
	Induccion
	***********************************************/
		/////////////////////////////////Menú Inducción
	include('/Induccion/menu_Induccion') ;
	
			/////////////////////////////////P&G Teva
	include('/Induccion/pg_teva') ;
			
			/////////////////////////////////Tipos de Tienda
				//Menu
	include('/Induccion/menu_tiposTienda') ;
	
					//Farmacias de Autoservicios
	include('/Induccion/tiposTiendas_autoservicios') ;
					//Redes de Farmacia
	include('/Induccion/tiposTiendas_cadenas') ;
	
	
					//Farmacias Directas
	include('/Induccion/tiposTiendas_directas') ;
					//Farmacias Indirectas
	include('/Induccion/tiposTiendas_indirectas') ;
					//Farmacias Independientes
	include('/Induccion/tiposTiendas_independientes') ;

			/////////////////////////////////Go to market
	include('/Induccion/goMarket') ;
	
			/////////////////////////////////Organización de Agencias
	include('/Induccion/organizacionAgencias_01') ;
	include('/Induccion/organizacionAgencias_02') ;
	
			////////////////////////////////Herramientas
				//Menu
	include('/Induccion/menu_Herramientas') ;
					//Tablet, Celular y Mochila
						//01
	include('/Induccion/menu_tabletCelularMochila') ;
						//02
	include('/Induccion/tabletCelularMochila_01') ;
	include('/Induccion/tabletCelularMochila_02') ;
	
					//Planilla de Objetivos
	include('/Induccion/planillaObjetivos') ;
						//Página de  Objetivos
	include('/Induccion/planillaObjetivos_pag') ;
					
					//Tabla de Pedidos
	include('/Induccion/tablaPedidos') ;
	
					//One Page
	include('/Induccion/onePage') ;
	
					//Kit de Presentación
	include('/Induccion/kitPresentacion') ;
	
					//Guia Farma
	include('/Induccion/guiaFarma') ;
	
					//Material de visibilidad
	include('/Induccion/materialVisibilidad') ;
	
					//Norma de Evaluación
	include('/Induccion/normaEvaluacion') ;
	
	/**********************************************
	Marcas
	***********************************************/
	/////////////////////////////////Menú marcas
	include('/Marcas/menu_marcas') ;
	
		/**********************************************
		Metamucil
		***********************************************/
		/////////////////////////////////Menu Metamucil
		include('Marcas/menu_metamucil') ;
		
			/////////////////////////////////Info Marca Metamucil
		include('Marcas/Metamucil/infoMarca/01_info_marca') ;
		include('Marcas/Metamucil/infoMarca/02_info_marca') ;
		include('Marcas/Metamucil/infoMarca/03_info_marca') ;
		include('Marcas/Metamucil/infoMarca/04_info_marca') ;
		include('Marcas/Metamucil/infoMarca/05_info_marca') ;
		include('Marcas/Metamucil/infoMarca/06_info_marca') ;
		
			/////////////////////////////////Info Tecnica Metamucil
		include('Marcas/Metamucil/tecMarca/menu_tec_marca') ;
		
				/////////////////////////////////Info Anatomia Tecnica Metamucil
		include('Marcas/Metamucil/tecMarca/01_tec_Anatomy_marca') ;
		
				/////////////////////////////////Info Ingredientes Tecnica Metamucil
		include('Marcas/Metamucil/tecMarca/01_tec_ingredientes_marca') ;
		include('Marcas/Metamucil/tecMarca/02_tec_ingredientes_marca') ;
		include('Marcas/Metamucil/tecMarca/03_tec_ingredientes_marca') ;
		include('Marcas/Metamucil/tecMarca/04_tec_ingredientes_marca') ;
		
				/////////////////////////////////Info Enfermedades Metamucil
		include('Marcas/Metamucil/tecMarca/01_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/01a_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/01b_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/02_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/03_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/03a_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/03B_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/04_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/04a_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/05_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/05a_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/05b_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/05c_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/06_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/07_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/08_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/08b_tec_enfermedad_marca') ;
		include('Marcas/Metamucil/tecMarca/09_tec_enfermedad_marca') ;
		
		
		/**********************************************
		Vicks
		***********************************************/
		/////////////////////////////////Menu Vicks
		include('Marcas/menu_vicks') ;
		
			/////////////////////////////////Info Marca Vicks
		include('Marcas/Vicks/infoMarca/01_info_marcaV') ;
		include('Marcas/Vicks/infoMarca/02_info_marcaV') ;
		include('Marcas/Vicks/infoMarca/03_info_marcaV') ;
		include('Marcas/Vicks/infoMarca/04_info_marcaV') ;
		include('Marcas/Vicks/infoMarca/05_info_marcaV') ;
		include('Marcas/Vicks/infoMarca/06_info_marcaV') ;
		include('Marcas/Vicks/infoMarca/07_info_marcaV') ;
		include('Marcas/Vicks/infoMarca/08_info_marcaV') ;
		
			/////////////////////////////////Info Tecnica Vicks
		include('Marcas/Vicks/tecMarca/menu_tec_marcaV') ;

				/////////////////////////////////Info Tecnica Ingredientes Vicks
		include('Marcas/Vicks/tecMarca/ingre/01_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/01a_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/01b_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/01c_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/01d_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/02_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/03_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/03a_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/04_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/05_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/06_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/07_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/08_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/09_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/10_tec_Ingredientes_V') ;
		include('Marcas/Vicks/tecMarca/ingre/11_tec_Ingredientes_V') ;
			
				/////////////////////////////////Info Tecnica Enfermedad Vicks
		include('Marcas/Vicks/tecMarca/enfer/01_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/02_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/03_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/04_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/04b_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/05_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/06_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/07_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/07a_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/08_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/08a_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/08b_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/09_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/10_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/11_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/12_tec_Enfermedad_V') ;
		include('Marcas/Vicks/tecMarca/enfer/13_tec_Enfermedad_V') ;
		
		/*****************************************************
		Pepto Bismol
		***********************************************/
		/////////////////////////////////Menu Pepto Bismol
		include('Marcas/menu_peptobismol') ;
		
			/////////////////////////////////Info Marca
		include('Marcas/Peptobismol/infoMarca/00_info_marcaP') ;
		include('Marcas/Peptobismol/infoMarca/01_info_marcaP') ;
		include('Marcas/Peptobismol/infoMarca/02_info_marcaP') ;
		include('Marcas/Peptobismol/infoMarca/03_info_marcaP') ;
		include('Marcas/Peptobismol/infoMarca/04_info_marcaP') ;
		include('Marcas/Peptobismol/infoMarca/05_info_marcaP') ;
		include('Marcas/Peptobismol/infoMarca/06_info_marcaP') ;
		include('Marcas/Peptobismol/infoMarca/07_info_marcaP') ;
		include('Marcas/Peptobismol/infoMarca/08_info_marcaP') ;
		include('Marcas/Peptobismol/infoMarca/09_info_marcaP') ;
		include('Marcas/Peptobismol/infoMarca/10_info_marcaP') ;
		
			/////////////////////////////////Info Técnica
		include('Marcas/Peptobismol/tecMarca/menu_tec_marcaP') ;
		include('Marcas/Peptobismol/tecMarca/01_tec_Anatomy_P') ;
		include('Marcas/Peptobismol/tecMarca/02_tec_Anatomy_P') ;
		include('Marcas/Peptobismol/tecMarca/03_tec_Anatomy_P') ;
		include('Marcas/Peptobismol/tecMarca/04_tec_Anatomy_P') ;
		include('Marcas/Peptobismol/tecMarca/05_tec_Anatomy_P') ;
		include('Marcas/Peptobismol/tecMarca/06_tec_Anatomy_P') ;
		
		include('Marcas/Peptobismol/tecMarca/01_tec_Enfermedad_P') ;
		include('Marcas/Peptobismol/tecMarca/02_tec_Enfermedad_P') ;
		include('Marcas/Peptobismol/tecMarca/03_tec_Enfermedad_P') ;
		include('Marcas/Peptobismol/tecMarca/04_tec_Enfermedad_P') ;
		include('Marcas/Peptobismol/tecMarca/05_tec_Enfermedad_P') ;
		include('Marcas/Peptobismol/tecMarca/06_tec_Enfermedad_P') ;
		
		
		/**********************************************
		Clearblue
		***********************************************/
		/////////////////////////////////Menu Clearblue
		include('Marcas/menu_clearblue') ;
		include('Marcas/Clearblue/infoMarca/01_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/02_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/05_info_marcaC') ;
		
			/////////////////////////////////Respuesta clara, Mente clara
		include('Marcas/Clearblue/infoMarca/rc_mc/03_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/rc_mc/04_info_marcaC') ;
		
			/////////////////////////////////Portafolio Prueba Ovulacion
		include('Marcas/Clearblue/infoMarca/portaEm/06_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/portaEm/07_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/portaEm/08_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/portaEm/09_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/portaEm/09a_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/portaEm/09b_info_marcaC') ;
		
			/////////////////////////////////Portafolio Prueba Embarazo
		include('Marcas/Clearblue/infoMarca/portaOv/10_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/portaOv/11_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/portaOv/12_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/portaOv/13_info_marcaC') ;
		
			/////////////////////////////////General Clearblue
		include('Marcas/Clearblue/infoMarca/gnral/14_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/gnral/15_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/gnral/16_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/gnral/17_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/gnral/18_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/gnral/19_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/gnral/20_info_marcaC') ;
		include('Marcas/Clearblue/infoMarca/gnral/21_info_marcaC') ;
		
		
		/**********************************************
		Hipoglós
		***********************************************/
		/////////////////////////////////Menu Hipoglos
		include('Marcas/menu_hipoglos') ;
		
			/////////////////////////////////Info Marca Hipoglos
		include('Marcas/Hipoglos/infoMarca/01_info_marcaH') ;
		include('Marcas/Hipoglos/infoMarca/02_info_marcaH') ;
		include('Marcas/Hipoglos/infoMarca/03_info_marcaH') ;
		include('Marcas/Hipoglos/infoMarca/03a_info_marcaH') ;
		include('Marcas/Hipoglos/infoMarca/03b_info_marcaH') ;
		include('Marcas/Hipoglos/infoMarca/03c_info_marcaH') ;
		include('Marcas/Hipoglos/infoMarca/03d_info_marcaH') ;
		include('Marcas/Hipoglos/infoMarca/03e_info_marcaH') ;
		include('Marcas/Hipoglos/infoMarca/04_info_marcaH') ;
		include('Marcas/Hipoglos/infoMarca/05_info_marcaH') ;
		include('Marcas/Hipoglos/infoMarca/06_info_marcaH') ;
		include('Marcas/Hipoglos/infoMarca/07_info_marcaH') ;
		include('Marcas/Hipoglos/infoMarca/08_info_marcaH') ;
		include('Marcas/Hipoglos/infoMarca/09_info_marcaH') ;
		
			/////////////////////////////////Info Tecnica Hipoglos
		include('Marcas/Hipoglos/tecMarca/menu_tec_marcaH') ;
		include('Marcas/Hipoglos/tecMarca/01_tec_Anatomy_H') ;
		include('Marcas/Hipoglos/tecMarca/01_tec_Enfermedad_H') ;
		include('Marcas/Hipoglos/tecMarca/02_tec_Enfermedad_H') ;
		include('Marcas/Hipoglos/tecMarca/03_tec_Enfermedad_H') ;
		include('Marcas/Hipoglos/tecMarca/04_tec_Enfermedad_H') ;
		include('Marcas/Hipoglos/tecMarca/05_tec_Enfermedad_H') ;

	
	/**********************************************
	Educación al Farmacéutico
	***********************************************/
		/////////////////////////////////Menú Educación al Farmacéutico
			//01
	include('/EducacionFarmaceutico/educacionFarmaceutico_01') ;
			//02
	include('/EducacionFarmaceutico/educacionFarmaceutico_02') ;
			//03
	include('/EducacionFarmaceutico/educacionFarmaceutico_03') ;
			//04
	include('/EducacionFarmaceutico/educacionFarmaceutico_04') ;
			//05
	include('/EducacionFarmaceutico/educacionFarmaceutico_05') ;
	
			//Metamucil
				//01
	include('/EducacionFarmaceutico/educacionFarmaceutico_metamucil_01') ;
				//02
	include('/EducacionFarmaceutico/educacionFarmaceutico_metamucil_02') ;
				//03
	include('/EducacionFarmaceutico/educacionFarmaceutico_metamucil_03') ;
				//04
	include('/EducacionFarmaceutico/educacionFarmaceutico_metamucil_04') ;
				//05
	include('/EducacionFarmaceutico/educacionFarmaceutico_metamucil_05') ;
	
				//06
	include('/EducacionFarmaceutico/educacionFarmaceutico_metamucil_06') ;
	
	
			//Vicks
				//01
	include('/EducacionFarmaceutico/educacionFarmaceutico_vicks_01') ;
				//02
	include('/EducacionFarmaceutico/educacionFarmaceutico_vicks_02') ;
				//03
	include('/EducacionFarmaceutico/educacionFarmaceutico_vicks_03') ;
				//04
	include('/EducacionFarmaceutico/educacionFarmaceutico_vicks_04') ;
				//05
	include('/EducacionFarmaceutico/educacionFarmaceutico_vicks_05') ;
	
				//06
	include('/EducacionFarmaceutico/educacionFarmaceutico_vicks_06') ;
	
	
			//Pepto-Bismol
				//01
	include('/EducacionFarmaceutico/educacionFarmaceutico_peptoBismol_01') ;
				//02
	include('/EducacionFarmaceutico/educacionFarmaceutico_peptoBismol_02') ;
				//03
	include('/EducacionFarmaceutico/educacionFarmaceutico_peptoBismol_03') ;
				//04
	include('/EducacionFarmaceutico/educacionFarmaceutico_peptoBismol_04') ;
				//05
	include('/EducacionFarmaceutico/educacionFarmaceutico_peptoBismol_05') ;
	
				//06
	include('/EducacionFarmaceutico/educacionFarmaceutico_peptoBismol_06') ;

	
			//ClearBlue
				//01
	include('/EducacionFarmaceutico/educacionFarmaceutico_clearblue_01') ;
				//02
	include('/EducacionFarmaceutico/educacionFarmaceutico_clearblue_02') ;
				//03
	include('/EducacionFarmaceutico/educacionFarmaceutico_clearblue_03') ;
				//04
	include('/EducacionFarmaceutico/educacionFarmaceutico_clearblue_04') ;
				//05
	include('/EducacionFarmaceutico/educacionFarmaceutico_clearblue_05') ;
	
				//06
	include('/EducacionFarmaceutico/educacionFarmaceutico_clearblue_06') ;

	
			//Hipoglos
				//01
	include('/EducacionFarmaceutico/educacionFarmaceutico_hipoglos_01') ;
				//02
	include('/EducacionFarmaceutico/educacionFarmaceutico_hipoglos_02') ;
				//03
	include('/EducacionFarmaceutico/educacionFarmaceutico_hipoglos_03') ;
				//04
	include('/EducacionFarmaceutico/educacionFarmaceutico_hipoglos_04') ;
	
				//05
	include('/EducacionFarmaceutico/educacionFarmaceutico_hipoglos_05') ;
	

	/**********************************************
	Fundamentales de Ventas
	***********************************************/
		/////////////////////////////////Menú Técnicas de Venta
	include('/FundamentalesVenta/menu_fundamentalesVenta') ;
	
			//Distribución
	include('/FundamentalesVenta/distribucion_01') ;
	include('/FundamentalesVenta/distribucion_resumen') ;
	
				//Distribución Numérica
	include('/FundamentalesVenta/distribucion_numerica') ;
				//Portafolio de Productos
	include('/FundamentalesVenta/distribucion_portafolio') ;
	
			//Anaquel
	include('/FundamentalesVenta/anaquel_menu') ;
	include('/FundamentalesVenta/anaquel_resumen') ;
	
			//Anaquel
	include('/FundamentalesVenta/anaquel') ;
			
			//Balcao
	include('/FundamentalesVenta/counter') ;

			//Merchandising
	include('/FundamentalesVenta/merchandising_01') ;
	include('/FundamentalesVenta/merchandising_02') ;
	include('/FundamentalesVenta/merchandising_resumen') ;
	
				//Anaquel
	include('/FundamentalesVenta/merchandising_anaquel_menu') ;
	
					//Metamucil
						//Anaquel
	include('/FundamentalesVenta/merchandising_anaquel_anaquel_metamucil') ;
						//Visibilidad
	include('/FundamentalesVenta/merchandising_anaquel_visibilidad_metamucil') ;
	
					//Hipoglos
						//Anaquel
	include('/FundamentalesVenta/merchandising_anaquel_anaquel_hipoglos') ;
						//Visibilidad
	include('/FundamentalesVenta/merchandising_anaquel_visibilidad_hipoglos') ;
	
					//Vicks
						//Anaquel
	include('/FundamentalesVenta/merchandising_anaquel_anaquel_vicks') ;
						//Visibilidad
	include('/FundamentalesVenta/merchandising_anaquel_visibilidad_vicks') ;
	
					//Pepto-Bismol
						//Anaquel
	include('/FundamentalesVenta/merchandising_anaquel_anaquel_peptoBismol') ;
						//Visibilidad
	include('/FundamentalesVenta/merchandising_anaquel_visibilidad_peptoBismol') ;
	
					//Clearblue
						//Anaquel
	include('/FundamentalesVenta/merchandising_anaquel_anaquel_clearblue') ;
						//Visibilidad
	include('/FundamentalesVenta/merchandising_anaquel_visibilidad_clearblue') ;
	
	
				//Counter
	include('/FundamentalesVenta/merchandising_counter_menu') ;
	
					//Metamucil
						//Counter
	include('/FundamentalesVenta/merchandising_counter_counter_metamucil') ;
						//Visibilidad
	include('/FundamentalesVenta/merchandising_counter_visibilidad_metamucil') ;

					//Hipoglos
						//Counter
	include('/FundamentalesVenta/merchandising_counter_counter_hipoglos') ;
						//Visibilidad
	include('/FundamentalesVenta/merchandising_counter_visibilidad_hipoglos') ;
	
					//Vicks
						//Counter
	include('/FundamentalesVenta/merchandising_counter_counter_vicks') ;
						//Visibilidad
	include('/FundamentalesVenta/merchandising_counter_visibilidad_vicks') ;
	
					//PeptoBismol
						//Counter
	include('/FundamentalesVenta/merchandising_counter_counter_peptoBismol') ;
						//Visibilidad
	include('/FundamentalesVenta/merchandising_counter_visibilidad_peptoBismol') ;
	
					//Clearblue
						//Counter
	include('/FundamentalesVenta/merchandising_counter_counter_clearblue') ;
						//Visibilidad
	include('/FundamentalesVenta/merchandising_counter_visibilidad_clearblue') ;
	

			//Precio
	include('/FundamentalesVenta/precio_01') ;
	include('/FundamentalesVenta/precio_02') ;
	include('/FundamentalesVenta/precio_resumen') ;
	
	
	/**********************************************
	Técnicas de Venta
	***********************************************/
		/////////////////////////////////Menú Técnicas de Venta
			//01
	include('/TecnicasVentas/menu_tecnicaVentas') ;
					
			//Menú Pasos de la Visita
	include('/TecnicasVentas/menu_pasosVisita') ;
				//Planeación
	include('/TecnicasVentas/pasosVisita_planeamiento') ;
				//Acercamiento
	include('/TecnicasVentas/pasosVisita_presentacionPersonal') ;
				//Verificación Inventarios
	include('/TecnicasVentas/pasosVisita_hojaVerificacion') ;
				//Educación al Droguista
	include('/TecnicasVentas/pasosVisita_presentacionTecnica') ;
				//Cierre de Ventas
	include('/TecnicasVentas/pasosVisita_pedido') ;
				//Sugerido de Ventas
	include('/TecnicasVentas/pasosVisita_sugeridoVentas') ;
				//Visibilidad
	include('/TecnicasVentas/pasosVisita_merchandisingVisibilidad') ;
				//Análisis de la Visita
	include('/TecnicasVentas/pasosVisita_notasInvestigacion') ;
	
			//Menú Comunicación Frente a Frente
	include('/TecnicasVentas/menu_comunicacionFrente') ;
				//Abierta
	include('/TecnicasVentas/comunicacionFrente_abierta') ;
				//Cerrada
	include('/TecnicasVentas/comunicacionFrente_cerrada') ;
	
			//Menú Venta Persuasiva
	include('/TecnicasVentas/menu_ventaPersuasiva') ;

				//Sumatizar Situación
	include('/TecnicasVentas/ventaPersuasiva_sumatizarSituacion') ;
				//Expresar una idea
	include('/TecnicasVentas/ventaPersuasiva_expresarIdea') ;
				//Explicar Función
	include('/TecnicasVentas/ventaPersuasiva_explicarFuncion') ;
				//Enfatizar Beneficios
	include('/TecnicasVentas/ventaPersuasiva_enfatizarBeneficios') ;
				//Sugerir un paso fácil
	include('/TecnicasVentas/ventaPersuasiva_sugerirPasoFacil') ;

			//Objeciones
	include('/TecnicasVentas/objeciones_01') ;
	include('/TecnicasVentas/objeciones_02') ;
	include('/TecnicasVentas/objeciones_03') ;

				//Determinar Objecion
	include('/TecnicasVentas/objeciones_determinarObjecion') ;
				//Entender Objecion
	include('/TecnicasVentas/objeciones_entenderObjecion') ;
				//Verificar Objecion
	include('/TecnicasVentas/objeciones_verificarObjecion') ;
				//Lidear Objecion
	include('/TecnicasVentas/objeciones_lidearObjecion') ;
	
			//Conocimiento Profundo del cliente
	include('/TecnicasVentas/menu_conocimientoProfundo') ;
	
				//Organigrama
	include('/TecnicasVentas/conocimientoProfundo_organigrama') ;
				//Objetivos y estrategias
	include('/TecnicasVentas/conocimientoProfundo_objetivosEstrategias') ;
				//Estilo de Gestión
	include('/TecnicasVentas/conocimientoProfundo_estiloGestion') ;
				//Indicadores Comerciales
	include('/TecnicasVentas/conocimientoProfundo_indicadoresComerciales') ;
				//Competencia
	include('/TecnicasVentas/conocimientoProfundo_competencia') ;
	
			//Presentación eficaz
	include('/TecnicasVentas/menu_presentacionEficaz') ;
	
				//Determinar Objetivos
	include('/TecnicasVentas/presentacionEficaz_determinarObjetivo') ;
				//Analisar Público
	include('/TecnicasVentas/presentacionEficaz_analizarPublico') ;
				//Colectar, seleccionar y organizar Información
	include('/TecnicasVentas/presentacionEficaz_colectarInfo') ;
				//Estructurar de presentación
	include('/TecnicasVentas/presentacionEficaz_estructurarPresentacion') ;
				//Desarrollar la presentación
	include('/TecnicasVentas/presentacionEficaz_desarrollarPresentacion') ;
				//Prácticar
	include('/TecnicasVentas/presentacionEficaz_practicar') ;
	
	
	/**********************************************
	Liderazgo
	***********************************************/
		//Liderazgo
	include('/Liderazgo/liderazgo_01') ;
	include('/Liderazgo/liderazgo_02') ;
	
			//Que es entrenamiento
	include('/Liderazgo/liderazgo_queEsEntrenamiento') ;
	
			//Entrenamientos Efectivos
	include('/Liderazgo/liderazgo_entrenamientosEfectivos_01') ;
	include('/Liderazgo/liderazgo_entrenamientosEfectivos_02') ;
	include('/Liderazgo/liderazgo_entrenamientosEfectivos_03') ;
	include('/Liderazgo/liderazgo_entrenamientosEfectivos_04') ;
	include('/Liderazgo/liderazgo_entrenamientosEfectivos_05') ;
	
			//Ciclo de Entrenamiento
	include('/Liderazgo/liderazgo_menu_cicloEntrenamiento') ;
	include('/Liderazgo/liderazgo_cicloEntrenamiento') ;
	
				//Explicacion
	include('/Liderazgo/liderazgo_cicloEntrenamiento_explicacion') ;
				//Demostración
	include('/Liderazgo/liderazgo_cicloEntrenamiento_demostracion') ;
				//Aplicación
	include('/Liderazgo/liderazgo_cicloEntrenamiento_aplicacion') ;
				//Corrección
	include('/Liderazgo/liderazgo_cicloEntrenamiento_correccion') ;
	
			//Feedback del Entrenamiento
	include('/Liderazgo/liderazgo_feedbackEntrenamiento_01') ;
	include('/Liderazgo/liderazgo_feedbackEntrenamiento_02') ;
	
	/*********************
	Adding fonts for Java File
	*********************/
	var fontStyle2 = document.createElement('style');

		fontStyle2.appendChild(document.createTextNode(

		//Olivea Light
		""+
			"* , #txt01_sld_06_infoTecV_E, .txt01_sld_04_inf_Tec_P, #txt_add_sld_02, .Olivea_Light, .txtWelcome, .txt_Title , .txt_Ingresa, .txt_IniciaEntrenamiento, .txt_User, .input_User, .txt_Password, .input_Password, .txt_WrongPassword, .rol_Actividades, #txt03_sld_01, #txt04_sld_01, #txt01_sld_02, #txt01_sld_03, #txt02_sld_03, #txt01_sld_01_infotec, #txt02_sld_01_infotec, #txt03_sld_01_infotec, #txt04_sld_01_infotec, #txt05_sld_01_infotec, #txt06_sld_01_infotec, #txt07_sld_01_infotec, #txt08_sld_01_infotec, #txt09_sld_01_infotec, #txt010_sld_01_infotec, #txt02_sld_01_it_Ingr, #txt02_sld_02_it_Ingr, #txt01_sld_03_it_Ingr, #txt02_sld_03_it_Ingr, #txt02_sld_01_infoTecV_A, #txt01_sld_02_infoTecV_A, #txt02_sld_02_infoTecV_A, #txt03_sld_02_infoTecV_A, #txt01_sld_06_infoTecV_A, #txt02_sld_06_infoTecV_A, #txt02b_sld_06_infoTecV_A, #txt03_sld_06_infoTecV_A, #txt02_sld_09_infoTecV_A, #txt02c_sld_09_infoTecV_A, #txt02d_sld_09_infoTecV_A, #txt05_sld_02_infoTecV_E, #txt01_sld_03_infoTecV_E, #txt01_sld_03_infoTecV_E, #txt02_sld_06_infoTecV_E, #txt01_sld_08_infoTecV_E, #txt02_sld_08_infoTecV_E, #txt03_sld_08_infoTecV_E, #txt04_sld_08_infoTecV_E, #txt01_sld_01_infoMarV, #txt01_sld_02_infoMarV, #metamucil_notes, #metamucil_notes_s2, .metamucil_s3_explainText, .metamucil_differenceText {"+
				"font-family: OliveaC TT EFN Light;"+
			"}"+
		""+
		
		//Olivea Bold
		""+
			".Olivea_Bold, .txt_Title_bullets , strong , b, .percent_01, .percent_02, .percent_03, .moreLess_info, .rol_Puesto, .rol_cerrar, .opt_txt, #txt01_sld_01, #txt02_sld_01, #txt01_sld_01_it_Ingr, #txt01_sld_01_infoTecV_A, .metamucil_bigTitle, .metamucil_bullet_Text, .metamucil_3recomienda_bullets, .metamucil_3recomienda_bullets li, .metamucil_3recomienda_bullets li div, .metamucil_s4_muchoMas_txt {"+
				"font-family: OliveaC TT EFN;"+
			"}"+
		""+
		
		//Helvetica Light
		""+
			".slideNumber ,  .clearblue_bullet_s2_02_extraText , .clearblue_bullet_s2_03_extraText , .clearblue_s3_answer_01 , .clearblue_s4_ovalText_01 , .clearblue_s4_ovalText_02 , .clearblue_s4_ovalText_03 , .clearblue_s4_ovalText_04 , .clearblue_s4_ovalText_05 , .clearblue_s4_ovalText_06 , .clearblue_s4_sloganLight , .clearblue_conoce_txt , .clearblue_registro, .clearblue_bigNote {"+
				"font-family: Helvetica 45 Light;"+
			"}"+
		""+
		
		//Helvetica Bold
		""+
			".Restricted, .clearblue_Presentamos_txt , .clearblue_bigTitle, .clearblue_secondPhrase, .clearblue_yaNo_txt, .clearblue_ClearblueDigital_txt, .clearblue_bullet_s2_01, .clearblue_bullet_s2_01 li, .clearblue_bullet_s2_02, .clearblue_bullet_s2_02  li, .clearblue_bullet_s2_03, .clearblue_bullet_s2_03 li, .clearblue_bullet_s2_04, .clearblue_bullet_s2_04 li, .clearblue_s3_question_01, .clearblue_bullet_s3_01, .clearblue_bullet_s3_01 li, .clearblue_bullet_s3_02, .clearblue_bullet_s3_02 li, .clearblue_bullet_s3_03, .clearblue_bullet_s3_03 li, .clearblue_s3_question_02, .clearblue_s4_sloganBold, .clearblue_sitioWeb, .clearblue_registro strong{"+
				"font-family: HelveticaNeue-Bold;"+
			"}"+
		""+
		
		//Helvetica Rounded
		/*""+
			".peptoBismol_doblePoder_txt, .peptoBismol_cualesBeneficios_txt, .peptoBismol_alivioEficaz_txt, #peptoBismol_bullets_s2_01, #peptoBismol_bullets_s2_01 li, #peptoBismol_bullets_s2_02, #peptoBismol_bullets_s2_02 li, #peptoBismol_bullets_s2_03, #peptoBismol_bullets_s2_03 li, .peptoBismol_descubreActua_txt, .peptoBismol_sistemaDigestivo_txt, .peptoBismol_bullets_s3_title, .peptoBismol_blue_box strong, .peptoBismol_indicaciones_txt strong, {"+
				"font-family: HelveticaRounded;"+
			"}"+
		""+*/
		
		//Futura Book
		""+
			"*, .peptoBismol_notes, .peptoBismol_bullets_s3_txt, .peptoBismol_blue_box, .peptoBismol_indicaciones_txt, .vicks_notes, .vicks_s1_pregunta, .vicks_s1_pregunta_bra, .vicks_recomienda_txt, .vicks_esquemaVentas_txt, .vicks_s4_ciencia_txt, .vicks_s4_cuandoFrota_txt, .vicks_s4_respiracionLibre, .vicks_s4_calmaTos, .vicks_s4_calmaMusculo{"+
				"font-family: Futura BK BT;"+
			"}"+
		""+ 
		
		//Futura Bold
		""+
			".peptoBismol_bullets, .peptoBismol_bullets li, .vicks_VapoRub_txt, .vicks_s3_vapoRub_txt, .vicks_s3_alivia_txt, .vicks_s3_3_txt, .vicks_s3_sintomas_txt, .vicks_s3_bullets, .vicks_s3_bullets li, .vicks_s3_buenaNoche{"+
				"font-family: Futura Hv BT;"+
			"}"+
		""+
		
		//VAG Rounded Bold
		""+
			".VAGRounded_Bold, #txt01_sld_02_inf_Mrc, .hipoglos_MainText, .hipoglos_text_s2, #hipoglos_text_s3_red_01, #hipoglos_text_s3_red_02, #hipoglos_text_s3_red_03, #hipoglos_text_s3_red_04, {"+
				"font-family:VAG Rounded Std Thin;"+
			"}"+
		""+
		
		//VAG Rounded Light
		""+
			".VAGRounded_Light, .hipoglos_notes, .hipoglos_text_s2_cont, .hipoglos_text_s3_red, {"+
				"font-family: VAG Rounded Std Light;"+
			"}"+
		""

	));			
	
	document.body.appendChild(fontStyle2);

	//Main Load
	//CoverSheet() ;
	menu_Herramientas() ;

}) ;

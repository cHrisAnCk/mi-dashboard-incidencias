const sistemas = [
  {
    id: "inicio",
    nombre: "INICIO",
    iconSvg: "iconos/EP/INICIO/inicio.png",  // Tu SVG
    titulo: "Bienvenido",
    subtitulo: "Puedes explorar las guias y videos de sistemas ",
    descripcion: "Selecciona un sistema del menú lateral para ver su información detallada.",
    guias: [],
    videos: [],
    contactos: []
  },
  {
    id: "sigea",
    nombre: "SIGEA",
    iconSvg: "iconos/EG/MENU/iconSIGEA2.svg",  // Tu SVG
    titulo: "SIGEA",
    subtitulo: "Sistema de Gestión Administrativa",
    descripcion: "Es una plataforma web interna accesible desde la ONPE, diseñada para la gestión integrada de tareas electorales y administrativas.",
    guias: [
      {
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4 ",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
      ,
      {
        nombre: "FM40-ERS-1231-2025_V1.4.2",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      },
      {
        nombre: "MANTENIMIENTO DE PARAMETROS",
        url: "https://drive.google.com/file/d/1oLsjA4EBMeaI0OP4qnuU1hBlq3WkpaSa/view?usp=drive_link"
      },
      {
        nombre: "APERTURA DE CAJA CHICA",
        url: "https://drive.google.com/file/d/1jU2-1jeRJcUiss41Tp7fM6b9nOyEqH0p/view?usp=drive_link"
      },
      {
        nombre: "REEMBOLSO",
        url: "https://drive.google.com/file/d/1-29XQw6YTrn2uK168O2kR50AfE1SWlq8/view?usp=drive_link"
      },
      {
        nombre: "ENTREGA A RENDIR AL PERSONAL",
        url: "https://drive.google.com/file/d/1E1mU6SJzwiAKGdeLCZXrJgaztXVMyO-I/view?usp=drive_link"
      },
      {
        nombre: "VIÁTICOS POR COMISION DE SERVICIO",
        url: "https://drive.google.com/file/d/1AnbgvolFtxMnfi1NJ1AXI0a0psQU4kap/view?usp=drive_link"
      },
      {
        nombre: "CERTIFICACION DE LA PLANILLA Y CARGA LISTADO DE PAGOS",
        url: "https://drive.google.com/file/d/1foJ5f608OD6aPdsvMdAS3I0j_EMEZNT_/view?usp=drive_link"
      },
      {
        nombre: "CARGOS BANCARIOS",
        url: "https://drive.google.com/file/d/1GVIhARxNvolvg-EBfQoFGO1ATv8pomKN/view?usp=drive_link"
      },
      {
        nombre: "PEDIDO BIEN",
        url: "https://drive.google.com/file/d/1d_n-bL6UBlL5l2ZA3JtpHMq51o1oopMy/view?usp=drive_link"
      },
      {
        nombre: "PEDIDO PERU COMPRAS",
        url: "https://drive.google.com/file/d/1zXWG4AFRDa90q8-37sbdvIBKJ6676cxr/view?usp=drive_link"
      },
      {
        nombre: "PEDIDO SERVICIO",
        url: "https://drive.google.com/file/d/1yMJ9sWjToaAdmM8KKQuJWX9Z3-sf2d1S/view?usp=drive_link"
      },
      {
        nombre: "PEDIDO SERVICIO BASICO",
        url: "https://drive.google.com/file/d/181yb4tY_SteLPwA90kq1tgXtcT1nd9YK/view?usp=drive_link"
      }
      
    ],
    videos: [
      { nombre: "Planilla Carga Listado de Locadores", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Reembolso", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" },
      { nombre: "Rendición de cuenta al personal", id: "1S8D4pPgto7YOkMO1xV1YwQU9zsu-pk4C" },
      { nombre: "Pedidos", id: "1IVXYeaJmNC4HadOii94myB7iHHLFF6p3" },
      { nombre: "Pedidos Perú Compras", id: "1OP__paeFrJCx87sSyN3JYTEwRG4PQvCt" },
      { nombre: "Pedido de servicio", id: "1ApBkXIbq_oYeEFmacxv5WSwqRMvju-4A" },
      { nombre: "Pedido servicio básico", id: "1S86gQPRm8SN3VCPy0_w0qah9-zUDK7c5" },
      { nombre: "Viáticos", id: "13DoAYRPARIEBx2pon84fZGRn5Z5TL7P5" }
    ],
    contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  },
  {
    id: "sigloc",
    nombre: "SIGLOC",
    iconSvg: "iconos/EG/MENU/iconSIGLOC2.svg",
    titulo: "SIGLOC",
    subtitulo: "Sistema Integrado de Gestión Locadores de Servicios",
    descripcion: "Gestión de recursos y logística electoral en tiempo real.",
    guias: [
      {
  nombre: "Manual de usuario SIGLOC",
  url: "https://drive.google.com/file/d/1B84mT85b9GXfRuQTVuUkSMAQnNiBX8pl/view?usp=drive_link"
},
{
  nombre: "Guía del postulante SIGLOC",
  url: "https://drive.google.com/file/d/14ncDN8LTdG32vSdtfFJDk6gd2I-75Kzg/view?usp=drive_link"
}

    ],
    videos: [
      { nombre: "Video Capacitacion SIGLOC", id: "1JMQKt4fFdQAcEaO5Nqb-8n3jYV8le9FA" },
      { nombre: "Video 2 Capacitacion SIGLOC", id: "1xM5yzAr2HzTu44GgNuBCr6PTGkOCrS91" }
      
    ],
    contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
         
  /*SASA*/ 
  ,
  {
    id: "sasa",
    nombre: "SASA",
    iconSvg: "iconos/EG/MENU/iconSASA2.svg",  // Tu SVG
    titulo: "SASA",
    subtitulo: "Sistema de Administración y Seguridad de Aplicaciones",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      /*ASIGNAR VIDEOS LUEGO*/
    ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*ETLV*/
  ,
  {
    id: "ETLV",
    nombre: "ETLV",
    iconSvg: "iconos/EG/MENU/iconETLV2.svg",  // Tu SVG
    titulo: "ETLV",
    subtitulo: " Elige Tú Local de Votación",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      /*ASIGNAR VIDEOS LUEGO*/
    ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*SIDE*/
  ,
  {
    id: "side",
    nombre: "SIDE",
    iconSvg: "iconos/EG/MENU/iconSIDE2.svg",  // Tu SVG
    titulo: "SIDE",
    subtitulo: "Sistema Del Día de la Elección",
    descripcion: "",
    guias: [
      {
        nombre: "Manual de usuario SIDE",
        url: "https://drive.google.com/file/d/17h_S2pML2J1Ex08IKZK4xDg-kr8FVutd/view?usp=drive_link"

      }
    ],
    videos: [
      /*ASIGNAR VIDEOS LUEGO*/
    ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*SIDEMM*/ 
  ,
  {
    id: "sidemm",
    nombre: "SIDEMM",
    iconSvg: "iconos/EG/MENU/iconSIDEMM2.svg",  // Tu SVG
    titulo: "SIDEMM",
    subtitulo: "Sistema de Integración de Miembros de Mesa",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      {
        nombre: "Video de Capacitacion SIDEMM",id: "1M5dOKrDgCZzjUKN1WNVQ7bC3rGDNwFI2"
}
    ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*CLV*/ 
  ,
  {
    id: "clv",
    nombre: "CLV",
    iconSvg: "iconos/EG/MENU/iconCLV2.svg",  // Tu SVG
    titulo: "CLV",
    subtitulo: "Consulta Tú Local de Votación",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Capacitacion CLV", 
      id: "1hsETuwlKGmeLBW59BJEQl486tLUm3X8i" }
      
    ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*SIGAP*/ 
  ,
  {
    id: "sigap",
    nombre: "SIGAP",
    iconSvg: "iconos/EG/MENU/iconSIGAP2.svg",  // Tu SVG
    titulo: "SIGAP",
    subtitulo: "Sistema Integrado de Gestión de Acceso del Personal",
    descripcion: "",
    guias: [
      {
    nombre: "Guía Administrador",
    url: "https://drive.google.com/file/d/1YfrmsEH5gAt-umokTsqt6zcByu6DkH1Q/view?usp=sharing"
    },
    {
      nombre: "Guía Aprovador",
      url: "https://drive.google.com/file/d/1YfrmsEH5gAt-umokTsqt6zcByu6DkH1Q/view?usp=sharing"
    },
    {
      nombre: "Guia Operador",
      url: "https://drive.google.com/file/d/1wcXURfr4PUmgRoMK4ymbuIxsEdz88LWT/view?usp=drive_link"
    },
    {
      nombre: "Guia Registrador",
      url: "https://drive.google.com/file/d/1wcXURfr4PUmgRoMK4ymbuIxsEdz88LWT/view?usp=drive_link"
    }
    ],
    videos: [
      /*ASIGNAR VIDEOS LUEGO*/
          ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*SCE*/ 
  ,
  {
    id: "sce",
    nombre: "SCE",
    iconSvg: "iconos/EG/MENU/iconSCE2.svg",  // Tu SVG
    titulo: "SCE",
    subtitulo: "Sistema de Cómputo Electoral",
    descripcion: "",
    guias: [
      {
  nombre: "Manual de usuario – Digitador",
  url: "https://drive.google.com/file/d/1feZV_fuQzOpFzWFJRMB6TuLOa3drAQ8F/view?usp=sharing"
},
{
  nombre: "Manual de usuario – Nación",
  url: "https://drive.google.com/file/d/1WuhkU8u9hF5H9Haz37rtJhXXasM8744h/view?usp=drive_link"
},
{
  nombre: "Manual de usuario – Digitalizador",
  url: "https://drive.google.com/file/d/1hMzMywTjT37kutbCswDxf7Fexs3tUhs_/view?usp=sharing"
},
{
  nombre: "Manual de usuario – Controlador",
  url: "https://drive.google.com/file/d/1w7d_rSFZ9NSbiyDR7rQ78tHlCAK6iXsn/view?usp=sharing"
},
{
  nombre: "Manual de usuario – Administrador",
  url: "https://drive.google.com/file/d/1ve1Lw5Pe8Oafo5LsR3CxaFExRcorXDRw/view?usp=sharing"
},
{
  nombre: "Actas extraviadas anuladas",
  url: "https://drive.google.com/file/d/1byXUjwliy_RzKkgDdKIBZh22vtAKx0DZ/view?usp=sharing"
},
{
  nombre: "Actas observadas flujo manual",
  url: "https://drive.google.com/file/d/1T3akIBy4KHTxQa0bPCNETpabGL_YVZHJ/view?usp=sharing"
},
{
  nombre: "Actas siniestrada encontrada",
  url: "https://drive.google.com/file/d/15lxXCPHWgEtQ8_IAYQmPf9_DZ_EAZUn8/view?usp=sharing"
},
{
  nombre: "Manual de usuario – Reportes",
  url: "https://drive.google.com/file/d/1zWMxvNrp94ToXqSJdjVP2uqzcKdePqSF/view?usp=drive_link"
},
{
  nombre: "Mesa no instalada",
  url: "https://drive.google.com/file/d/19d7INyklFzyr_wJNOwkfyXLf3wJSvCxh/view?usp=sharing"
},
{
  nombre: "Pérdida total hoja de asistencia",
  url: "https://drive.google.com/file/d/1WAQOcq0enMjL5nHVI7D3VFwcfHL-z1IM/view?usp=sharing"
},
{
  nombre: "Pérdida total lista electores",
  url: "https://drive.google.com/file/d/1k3mDx1nTpGYhMhMC409ZQX5eSJymJGir/view?usp=sharing"
}

    ],
    
    videos: [
      { nombre: "Anulación de actas por ubigeo", id: "1z-kS0NC4pTDxE6OronQNNFAfdDoNjvKB" },
      { nombre: "Control de Calidad de Actas con Resolucion", id: "1VDZOFFncm9qFV8-AHaBbiDQN4-lGxRfj" },
      { nombre: "Acta Extraviada Anulada", id: "1a7kgQDkNZ5lzxC-3xVl4bAveJ4pDslcv" },
      { nombre: "Acta Extraviada Encontrada", id: "1IltgA_H75JPZoFaY-KOtBDbXoJNFrBCq" },
      { nombre: "Flujo normal completo de Actas", id: "1pKYGF2ggQnISIhc9sOwCvoJ0I_EcjL-P" },
      { nombre: "Actas Infundadas por ubigeo", id: "1Cc26fF1WAAdmxutbmnXLitYM3zGfyv4M" },
      { nombre: "Mesa No instalada", id: "13lls1_36pgblW8DTfGDy0rxxF1Bo046v" },
      { nombre: "Acta Observada flujo manual", id: "1oUxodtp62J6FSkp-GkhiMc7XCdjRbeZs" },
      { nombre: "Perdida Parcial de Lista de Electores", id: "1hhOXchiaw5zQwno-KX44e-WNIDXUCwZE" },
      { nombre: "Perdida total Hoja de asistencia", id: "1nBmELYor0Xu3tw3O6S-Z6byath0dZsoE" },
      { nombre: "Perdida total Lista de Electores", id: "1aVO0f8BG04rHUICLe-XkeVLysUFriiAX" },
      { nombre: "Procesamiento Manual de Actas", id: "1-tirEgaENCT_JwzFAPngjVGWTU2QKPf0" },
      { nombre: "Reprocesamiento de Actas", id: "1bdJry3CK0sLAiEMVbEG0nRhjTDkrf7uO" },
      { nombre: "Reprocesamiento de Mesas", id: "1KM4jMQy6emE9kZFMezQd8NlrDmJv-7Aj" },
      { nombre: "Acta Siniestrada Anulada", id: "1jP9VChL2jfl0YaPVxPPJZKG2Pben263L" },
      { nombre: "Acta Siniestrada Encontrada", id: "1zlXO3AW3qt6X8o4_4c0GLzgMFzw-pJ4x" }
    ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*CLARIDAD*/
  ,
  {
    id: "claridad",
    nombre: "CLARIDAD",
    iconSvg: "iconos/EG/MENU/iconCLARIDAD2.svg",  // Tu SVG
    titulo: "CLARIDAD",
    subtitulo: "Sistema para el Control de Finanzas Partidarias",
    descripcion: "",
    guias: [
      {
        nombre: "Guía 1",
        url: "https://drive.google.com/file/d/1b6jvD7xXKRtNHIRdyZxz5auOfpuPk4eo/view?usp=sharing"
      },
      {
        nombre: "Guía 2",
        url: "https://drive.google.com/file/d/1GcTMeGt8Upc-E4rnQ-MWZzOWfCq4Zp8f/view?usp=drive_link"
      }
    ],
    videos: [
      /*ASIGNAR VIDEOS LUEGO*/
          ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*CAE*/ 
  ,
  {
    id: "cae",
    nombre: "CAE",
    iconSvg: "iconos/EG/MENU/iconCAE2.svg",  // Tu SVG
    titulo: "CAE",
    subtitulo: "Capacitacion de Actores Electorales",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      /*ASIGNAR VIDEOS LUEGO*/
    ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*CEM*/ 
  ,
  {
    id: "cemm",
    nombre: "CEMM",
    iconSvg: "iconos/EG/MENU/iconCEMM2.svg",  // Tu SVG
    titulo: "CEMM",
    subtitulo: "Compensación Económica de los Miembros de Mesa",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
    { nombre: "Capacitacion CEMM", 
      id: "1V_4ktUoAUEcWdgjLRSY6xGfVRNnWHQQs" }
    ],
   contactos: [
     
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*GEMMA*/
  ,
  {
    id: "gemma",
    nombre: "GEMMA",
    iconSvg: "iconos/EG/MENU/iconGEMMA2.svg",  // Tu SVG
    titulo: "GEMMA",
    subtitulo: "Gestión de Pagos de Miembros de Mesa",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
/*ASIGNAR VIDEOS LUEGO*/
    ],
   contactos: [

["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*ROP*/
  ,
  {
    id: "rop",
    nombre: "ROPC",
    iconSvg: "iconos/EG/MENU/iconROPC2.svg",  // Tu SVG
    titulo: "ROPC",
    subtitulo: "Registro de Organizaciones Políticas y Candidatos",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [

      /*ASIGNAR VIDEOS LUEGO*/
         ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*SAM*/
  ,
  {
    id: "sam",
    nombre: "SAM",
    iconSvg: "iconos/EG/MENU/iconSAM2.svg",  // Tu SVG
    titulo: "SAM",
    subtitulo: "Sistema de Acreditación de Medios",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Capacitacion SAM", 
      id: "1nOPIFAzfx_R89YmRxSp7lKNID__9zPZC" } 
    ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*SCM*/
  ,
  {
    id: "scm",
    nombre: "SCM",
    iconSvg: "iconos/EG/MENU/iconSCM2.svg",  // Tu SVG
    titulo: "SCM",
    subtitulo: "Sistema de Conformación de Mesas de Sufragio",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
   /*ASIGNAR VIDEOS LUEGO*/
    ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*SGCAE*/
  ,
  {
    id: "sgcae",
    nombre: "SIGCAE",
    iconSvg: "iconos/EG/MENU/iconSGCAE2.svg",  // Tu SVG
    titulo: "SIGCAE",
    subtitulo: "Sistema de Gestión de Capacitación de Actores Electorales",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Capacitacion SIGCAE", 
      id: "1Jc0HuIOLUtBcwI9xGDWf-dYqMZvLgcei" }
      
    ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*SISGOE*/
  ,
  {
    id: "sisgoe",
    nombre: "SISGOE",
    iconSvg: "iconos/EG/MENU/iconSISGOE2.svg",  // Tu SVG
    titulo: "SISGOE",
    subtitulo: "Sistema de Gestión de Operaciones Electorales",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
 
       { nombre: "Capacitacion SISGOE", 
      id: "1rYIGQfZ5jeI1TZ6zxSw663aTvOn9wUdK" }
    ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*SISPLAN*/
  ,
  {
    id: "sisplan",
    nombre: "SISPLAN",
    iconSvg: "iconos/EG/MENU/iconSISPLAN2.svg",  // Tu SVG
    titulo: "SISPLAN",
    subtitulo: "Sistema de Gestión de Planes",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
  
  /*ASIGNAR VIDEOS LUEGO*/
    ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }

  /*ONPEDUCA*/
,
  {
    id: "onpeduca",
    nombre: "ONPEDUCA",
    iconSvg: "iconos/EP/MENU/iconONPEDUCA2.svg",  // Tu SVG
    titulo: "ONPEDUCA",
    subtitulo: "ONPEDUCA",
    descripcion: "",
    guias: [
      {
        nombre: "Cursos",
        url: "https://drive.google.com/file/d/1ocBxuY_NvNCdWdNMEleegz9mghU2ZivO/view?usp=sharing"
      },
      {
        nombre: "Estudiante CPO",
        url: "https://drive.google.com/file/d/1KE4S4GLXJ42GJvKdctC8dNL8O8JViJlN/view?usp=drive_link"
      },
      {
        nombre: "Tutor CPO",
        url: "https://drive.google.com/file/d/1tmIrxv2zkDTD6pnpBa7VFkwp3khfrlHu/view?usp=drive_link"
      },
      {
        nombre: "Usuarios",
        url: "https://drive.google.com/file/d/1JJpE5IXZ1_sg4Lv9h-jGG7vQY3-IBRY0/view?usp=drive_link"
      },
      {
        nombre: "Matrícula",
        url: "https://drive.google.com/file/d/1o2FIj2qTzlXjrncp4Ow4MlCgJM9d3rfz/view?usp=drive_link"
      },
      {
        nombre: "Encuesta",
        url: "https://drive.google.com/file/d/1oBQMeJgGm-9JgYl-AVqqLeY5uV91kgN_/view?usp=drive_link"
      },
      {
        nombre: "Certificado",
        url: "https://drive.google.com/file/d/12zkXuEJTtpg7gQ6d4GcfRiuViV8PyPP4/view?usp=drive_link"
      },
      {
        nombre: "Contenidos",
        url: "https://drive.google.com/file/d/1ML25rCKNYvS1_YjSNLgmTnTeTjCRbyj2/view?usp=drive_link"
      }

    ],
    videos: [
      { nombre: "Capacitacion SISGOE", 
      id: "d/132dyY-MyeuwQ0Fl0giIlC797QiQ-JFdp" }
    ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  /*REP*/
,
  {
    id: "rep",
    nombre: "REP",
    iconSvg: "iconos/EP/MENU/iconREP2.svg",  // Tu SVG
    titulo: "REP",
    subtitulo: "Sistema de Registro de Elecciones Primarias",
    descripcion: "",
    guias: [
      {
      nombre: "Manual de Usuario",
      url: "https://docs.google.com/presentation/d/18VcPRUpCMhga-2yV5K6_arBV_My_mwLl/edit?usp=drive_link&ouid=115133451418665439696&rtpof=true&sd=true"
      }

      
    ],
    videos: [
      /*ASIGNAR VIDEOS LUEGO*/
    ],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }

  /*SCIAP*/ 
,
  /*{
    id: "sciap",
    nombre: "SCIAP",
    iconSvg: "iconos/EP/MENU/iconSCIAP2.svg",  // Tu SVG
    titulo: "SCIAP",
    subtitulo: "Sistema de Control de Impresión de Acta Padrón",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      /*ASIGNAR VIDEOS LUEGO*/
    /*],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }*/

  /*SIGMA */

  /*{
    id: "sigma",
    nombre: "SIGMA",
    iconSvg: "iconos/EP/MENU/iconSIGMA2.svg",  // Tu SVG
    titulo: "SIGMA",
    subtitulo: "Sistema de Generación de Material Electoral",
    descripcion: "",
    guias: [
      {
        nombre: "Guia Ejemplo",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "Guia Ejemplo",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      /*ASIGNAR VIDEOS LUEGO*/
    /*],
   contactos: [
           
["1","ARTURO JORGE MACHUCA","945301483","","ALTO AMAZONAS - ANGARAES - CALLAO - EL TAMBO - HUANCAVELICA - RECUAY - SULLANA",""],
["2","CINTIA ERIKA OBREGON REMUNDO","929960376","","LA CONVENCION - MARISCAL NIETO - SAN MARTIN - AREQUIPA - TRUJILLO - LIMA CENTRO 2 - VENTANILLA",""],
["3","JIMMY ALEXANDER MENDOZA GARCIA","981717830","","CANCHIS - CAÑETE - CHORRILLOS - LIMA CENTRO 1 - PUERTO INCA - YAUYOS - QUISPICANCHI",""],
["4","KATHYA MERCEDES LLATAS MALDONADO","982438788","","CHACHAPOYAS - CUSCO - HUAYTARA - INDEPENDENCIA - LAMBAYEQUE - POMABAMBA",""],
["5","MARINA CRUZ MUÑOZ","927326079","","CHANCHAMAYO - CHICLAYO - HUARAZ - ILO - LUCANAS - PUEBLO LIBRE - SAN ANTONIO DE PUTINA",""],
["6","MAYRA MELISSA CASIMIRO DIAZ","942835461","","ANDAHUAYLAS - ATALAYA - CANGALLO - HUAMALIES - LIMA NORTE 2 - PASCO - SAN MIGUEL - TAYACAJA",""],
["7","ROCIO ISABEL MALDONADO OCAÑA","923829352","","BONGARA - SANTA ANITA - LIMA SUR 1 - MORROPON - MOYOBAMBA - OXAPAMPA - TACNA - SAN MARTIN DE PORRES",""],
["8","ROSITA NINJIO AGUILAR MUÑANTE","949079701","","JOSÉ LUIS BUSTAMANTE Y RIVERO - LEONCIO PRADO - LOS OLIVOS - PARINACOCHAS - VICTOR LARCO HERRERA - TAMBOPATA",""],
["9","VICTOR RAÚL CARREÑO SEMINARIO","926929387","","AZANGARO - BREÑA - CASTILLA - CHUCUITO - CORONEL PORTILLO - SAN JUAN DE LURIGANCHO - TUMBES",""],
["10","WILMER ALEXANDER SANDOVAL YERREN","923735893","8892 8829 8825","BELLAVISTA - LIMA CENTRO 3 - LIMA NORTE 3 - LIMA OESTE 2 - PACASMAYO - SAN ROMAN - SANCHEZ CARRION - UCAYALI","g.sgsi.soporte1@outlook.com"],
["11","MIRIAN MILAGROS CIPRA CAQUI","936374813","","CAJAMARCA - CHINCHA - PIURA - JAUJA - CAMANA - GRAU - YAROWILCA",""],
["12","CINDY NILA GARIBAY PEDREGAL","941757932","","LIMA ESTE 1 - HUAURA - HUARAL - LA MOLINA - LURIGANCHO - MOLLENDO - TARMA - REQUENA",""],
["13","IRENE ARACELI DEL RIO VEGA","991142690","","MAYNAS - SAN JUAN DE MIRAFLORES - JOSÉ LEONARDO ORTIZ - HUAMANGA - ESPINAR - HUARMEY - MARISCAL CACERES - PATAZ",""],
["14","SANDRA FLORES GARCIA","930926965","","LIMA NORTE 1 - LIMA SUR 2 - BAGUA - LA VICTORIA - ABANCAY - CONDESUYOS - MARISCAL RAMON CASTILLA - HUAROCHIRI",""],
["15","EDITH MARY BASTIDAS RODRIGUEZ","960730468","","ICA - VILLA EL SALVADOR - CHOTA - CARABAYLLO - CAYLLOMA - HUARI - HUANCAYO - HUANCANE",""],
["16","MARÍA DEL CARMEN LEON FRANCO","972788093","","LA ESPERANZA - HUÁNUCO - PUNO - SAN BORJA - URUBAMBA - SANTA - LIMA OESTE 1 - CUTERVO",""],
["17","GIANCARLOS CARRANZA ANTON","900496729","","CERRO COLORADO - LIMA OESTE 3 - JAÉN - HUANTA - PAITA - HUAYLAS - LIMA ESTE 2 - SAN PABLO",""]
    ]
  }
  */

         




  

];



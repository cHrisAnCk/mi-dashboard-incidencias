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
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
    contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
      { nombre: "Manual de Usuario SIGLOC", url: "https://drive.google.com/file/d/1EjemploIDdeGuia/view" }
    ],
    videos: [
      { nombre: "Configuración de almacenes", id: "1EjemploIDdeVideo" }
    ],
    contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
    ]
  }
  /*SIDEMM*/ 
  ,
  {
    id: "sidemm",
    nombre: "SIDEMM",
    iconSvg: "iconos/EG/MENU/iconSIDEMM2.svg",  // Tu SVG
    titulo: "SIDEM",
    subtitulo: "Sistema de Integración de Miembros de Mesa",
    descripcion: "",
    guias: [
      {
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
    ]
  }
  /*CAE*/ 
  ,
  {
    id: "cae",
    nombre: "CEA",
    iconSvg: "iconos/EG/MENU/iconCAE2.svg",  // Tu SVG
    titulo: "CAE",
    subtitulo: "Capacitacion de Actores Electorales",
    descripcion: "",
    guias: [
      {
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
    ]
  }
  /*CEM*/ 
  ,
  {
    id: "cemm",
    nombre: "CEMM",
    iconSvg: "iconos/EG/MENU/iconCEMM2.svg",  // Tu SVG
    titulo: "CEM",
    subtitulo: "Compensación Económica de los Miembros de Mesa",
    descripcion: "",
    guias: [
      {
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
    ]
  }
  /*SGCAE*/
  ,
  {
    id: "sgcae",
    nombre: "SGCAE",
    iconSvg: "iconos/EG/MENU/iconSGCAE2.svg",  // Tu SVG
    titulo: "SGCAE",
    subtitulo: "Sistema de Gestión de Capacitación de Actores Electorales",
    descripcion: "",
    guias: [
      {
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
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
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
    ]
  }

  /*SCIAP*/ 
,
  {
    id: "sciap",
    nombre: "SCIAP",
    iconSvg: "iconos/EP/MENU/iconSCIAP2.svg",  // Tu SVG
    titulo: "SCIAP",
    subtitulo: "Sistema de Control de Impresión de Acta Padrón",
    descripcion: "",
    guias: [
      {
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
    ]
  }

  /*SIGMA */
,
  {
    id: "sigma",
    nombre: "SIGMA",
    iconSvg: "iconos/EP/MENU/iconSIGMA2.svg",  // Tu SVG
    titulo: "SIGMA",
    subtitulo: "Sistema de Generación de Material Electoral",
    descripcion: "",
    guias: [
      {
        nombre: "Guía SIGEA - Proceso Electoral",
        url: "https://docs.google.com/document/d/1ZMr-OEIG1EZaalAr7ueENsa7hUyNNCS4/edit?usp=drive_link"
      },
      {
        nombre: "FM40-ERS-1231-2025_V1.4",
        url: "https://drive.google.com/file/d/1EitUlDIrNf_ClLBpptYPleu1A_BC6JiU/view?usp=sharing"
      }
    ],
    videos: [
      { nombre: "Módulo Auxiliar de bancos", id: "1W77jGlL42-pMtMT9YuRTAex8Y7J8EAL4" },
      { nombre: "Módulo Auxiliar de bancos", id: "18Q-KvpVBG0F4c_SWGvSiL6G5_71F8_pg" }
    ],
   contactos: [
      ["1", "Kathya Mercedes Llatas Maldonado", "991130351"],
      ["2", "Rosita Ninjio Aguilar Muñante", "990270972"],
      ["3", "Cynthia Obregón Remundo", "929960376"],
      ["4", "Marina Cruz Muñoz", "927326079"],
      ["5", "Jimmy Mendoza Garcia", "981717830"],
      ["6", "Wilmer Sandoval Yerren", "923735893 ","8892 8829 ", "ABANCAY - AREQUIPA - HUANUCO - PUCALLPA CALLERIA - LIMA CENTRO - TRUJILLO - CHICLAYO - IQUITOS - PIURA - HUARA - CUSCO - HUANCAYO - ICA", "g.sgsi.soporte1@outlook.com"],
      ["7", "Victor Carreño Seminario", "926929387"],
      ["8", "Eduardo Cheng Zapata", "948350246"],
      ["9", "Jean Carlo Barreto Castro", "936414410"],
      ["10", "Arturo Jorge Machuca", "945301483"],
      ["11", "Mayra Casimiro Díaz", "942835461"]
    ]
  }

         




  
];
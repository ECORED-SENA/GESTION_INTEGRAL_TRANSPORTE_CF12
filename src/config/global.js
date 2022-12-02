export default {
  global: {
    componenteFormativo: 'Condiciones de mejora de la operación',
    descripcionCurso:
      'La evaluación es una de los aspectos más importantes en la planeación y la gestión empresarial. La prestación de un servicio se evalúa para que cuente con la mejor calidad y percepción del cliente, incluyendo procesos de la cadena logística, aplicando técnicas para medir, verificar, controlar y establecer acciones de mejora mediante la experiencia del usuario y operación empresarial. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Medición de la satisfacción del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué es la medición y para qué se usa?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Métodos para la medición de satisfacción del cliente',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Fundamentos del servicio al cliente en una empresa de transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Indicadores de calidad KPI',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Política de infraestructura y medio ambiente',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Indicadores del servicio al cliente',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Dificultades en la operación del transporte: puntos críticos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Transporte de carga',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Transporte de pasajeros',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas de verificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Informes de gestión',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Informe de control',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Informe de desempeño',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Planes de mejoramiento ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Acciones de mejora en la operación',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Disminución de costos en la operación',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Mejora en procesos de distribución',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Mejora en la logística del transporte',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Mejora en servicio y atención al cliente 	',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      // {
      //   icono: 'fas fa-download',
      //   titulo: 'Descargar material',
      //   download: 'downloads/material.zip',
      // },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arango, M., Ruiz, S., Ortiz, L. y Zapata, J. (2017). Indicadores de desempeño para empresas del sector logístico: Un enfoque desde el transporte de carga terrestre. Ingeniare. Revista chilena de ingeniería, 25(4), p. 707-720.',
      link: 'https://dx.doi.org/10.4067/S0718-33052017000400707',
    },
    {
      referencia:
        'Arbeláez, L. y Marín, F. (2012). Sistema de costeo ABC aplicado al transporte de carga. Revista Universidad EAFIT, 37(124), p. 10-20. ',
    },
    {
      referencia:
        'Baena, J. y García, J. (2002). Transporte internacional. Marge Books. ',
    },
    {
      referencia:
        'Ballou, R. (2003). Logística empresarial: Administración de la cadena de abastecimiento. Prentice Hall. ',
    },
    {
      referencia:
        'Chase, R., Jacobs, R. y Aquilano, N. (2009). Administración de la producción y operaciones para una ventaja competitiva. McGraw-Hill. ',
    },
    {
      referencia:
        'Chopra, S. y Meindl, P. (2008). Administración de la cadena de suministro. Estrategia, planeación y operación. Pearson Education.',
    },
    {
      referencia:
        'Clavijo, S., Vera, A., Malagón, D., Parga, Á., Joya, S., Ortiz, M. y Ordoñez, L. Costos de transporte, Multimodalismo y la competitividad de Colombia. ANIF.',
      link:
        'https://www.infraestructura.org.co/nuevapagweb/descargas/Multimodalismo.pdf',
    },
    {
      referencia:
        'Dambon, C. (2020). Cómo Hacer un Informe + 55 Ejemplos y Plantillas Editables. Venngage. ',
      link: 'https://es.venngage.com/blog/plantillas-informe-anual/',
    },
    {
      referencia:
        'EAE Business School. (2018). Ventajas del manual de calidad ISO 9001. Retos en Supply Chain.',
      link:
        'https://retos-operaciones-logistica.eae.es/ventajas-del-manual-de-calidad-iso-9001',
    },
    {
      referencia:
        'Mecalux. (2019). KPI en logística: así se mide el éxito en la ‘supply chain’.',
      link: 'https://www.mecalux.com.co/blog/kpi-logistica',
    },
    {
      referencia:
        'QuestionPro. (s. f.). ¿Qué son las preguntas de opción múltiple?',
      link: 'https://www.questionpro.com/blog/es/preguntas-de-opcion-multiple',
    },
    {
      referencia:
        'RT en Español. (2018, agosto 6). FUERTES IMÁGENES: Momento exacto de la enorme explosión en Bolonia [Video]. YouTube.',
      link: 'https://youtu.be/1UPIzChf0Xw',
    },
    {
      referencia:
        'Villalobos, J. (2010). Seguridad en la operación del transporte de carga carretero. Boletín FAL, 285(5).',
      link:
        'https://www.cepal.org/es/publicaciones/36077-seguridad-la-operacion-transporte-carga-carretero',
    },
  ],
  glosario: [
    {
      termino: 'ACTITUDINAL',
      significado:
        'El término se utiliza para referirse a todo aquello que tiene por objetivo determinar las disposiciones de ánimo manifestadas de algún modo para realizar ciertas actividades, ya sean de tipo educativas, sociales, laborales, etcétera.',
    },
    {
      termino: 'AUTOMATIZAR',
      significado:
        'Implementación de maquinaria en procesos automáticos para la realización de un proceso. Llevar a autómata un proceso que puede ser más eficiente con la ayuda de herramientas.',
    },
    {
      termino: 'CALIDAD',
      significado:
        'Capacidad cuantitativa o cualitativa de un objeto para satisfacer las necesidades. Se relaciona con la mejor versión de algo. Servicio de calidad: eficiente para quien lo requiere en todos sus aspectos. ',
    },
    {
      termino: 'CARGA FÍSICA',
      significado: 'Elemento que se requiere movilizar o transportar.',
    },
    {
      termino: 'DECISIÓN',
      significado:
        'Es el producto final del proceso mental-cognitivo específico de un individuo o un grupo de personas u organizaciones, el cual se denomina toma de decisiones, por lo tanto, es un concepto subjetivo.',
    },
    {
      termino: 'NORMA',
      significado:
        'Principios o lineamientos que establecen los parámetros o requisitos que necesita un proceso, producto, procedimiento o comportamiento.',
    },
    {
      termino: 'NTC',
      significado: 'Norma Técnica Colombiana.',
    },
    {
      termino: 'PESV',
      significado: 'Plan Estratégico de Seguridad Vial.',
    },
    {
      termino: 'RATIO',
      significado: 'Se relaciona con porcentaje, proporción, frecuencia.',
    },
    {
      termino: 'SOSTENIBLE',
      significado:
        'Corresponde a la compatibilidad con los recursos con los que cuenta la región para que se mantenga productiva en el tiempo. Equilibrio con el entorno.',
    },
  ],
  complementario: [
    {
      tema: 'Políticas Cepal Naciones Unidas.',
      referencia:
        'Cipoletta, G., Pérez, G. y Sánchez, Ricardo. (2010). Políticas integradas de infraestructura, transporte y logística: experiencias internacionales y propuestas iniciales. Naciones Unidas Cepal.',
      tipo: 'Publicación Naciones Unidas.',
      descarga: 'downloads/PolíticasCepalNacionesUnidas.pdf',
    },
    {
      tema: 'Fundamentos del servicio al cliente.',
      referencia:
        'Diago, F. (2005). Fundamentos del servicio al cliente de la aviación comercial. Editorial Politécnico Grancolombiano',
      tipo: 'Libro',
      descarga: 'downloads/fundamenteosservicioalcliente.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Dairo Giovanni Rodríguez Agatón',
        cargo: 'Experto temático',
        centro: 'Centro de Tecnologías del Transporte',
      },
      {
        nombre: 'Diana Marcela Luis Velásquez ',
        cargo: 'Diseñadora instruccional ',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sofía Suarez Suarez',
        cargo: 'Diseño web ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Juan Daniel Polanco Muñoz',
        cargo: 'Validación Diseño web ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De La Rosa',
        cargo: 'Validación de Maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eulises Orduz Amezquita',
        cargo: 'Actividades didácticas',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mayra Alejandra Alvarez Diaz',
        cargo: 'Validación Contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

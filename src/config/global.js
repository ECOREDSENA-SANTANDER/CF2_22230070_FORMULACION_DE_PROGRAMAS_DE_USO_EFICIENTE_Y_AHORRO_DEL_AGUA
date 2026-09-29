export default {
  global: {
    Name: 'Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA)',
    Description:
      'Este componente formativo desarrolla herramientas conceptuales, técnicas y metodológicas para proyectar un Programa para el Uso Eficiente y Ahorro del Agua (PUEAA), a partir del diagnóstico y la línea base del sistema de uso del agua. Aborda la formulación de objetivos, metas e indicadores; la selección de soluciones y tecnologías para optimizar el consumo y reducir pérdidas; y la estructuración de medidas y estrategias de intervención. Asimismo, orienta la elaboración del plan de acción, considerando actividades, responsables, recursos, cronogramas y medios de verificación, con criterios técnicos, económicos, ambientales y normativos que favorecen la gestión sostenible, el seguimiento y la mejora continua del recurso hídrico.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Programa para el Uso Eficiente y Ahorro del Agua (PUEAA)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Objetivos del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA)',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Construcción de las metas del PUEAA',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Indicadores del PUEAA',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Soluciones para el uso eficiente y ahorro del agua',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Tecnologías para el uso eficiente y el ahorro del agua',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Plan de acción para la gestión del uso eficiente y ahorro del agua',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Régimen de los servicios públicos domiciliarios',
            hash: 't_1_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acción de gestión',
      significado:
        'Actividad planificada para implementar y hacer seguimiento a las estrategias del PUEAA.',
    },
    {
      termino: 'Actor',
      significado:
        'Persona, organización o grupo que participa o tiene responsabilidades en el PUEAA.',
    },
    {
      termino: 'Análisis de ficha técnica',
      significado:
        'Revisión de las características, funcionamiento, eficiencia y costos de una tecnología o equipo.',
    },
    {
      termino: 'Control en la fuente',
      significado:
        'Acciones realizadas en el punto de captación o consumo para prevenir pérdidas y optimizar el uso del agua.',
    },
    {
      termino: 'Estrategia educativa',
      significado:
        'Acción de formación y sensibilización que promueve prácticas responsables en el uso del agua.',
    },
    {
      termino: 'Medida de compensación',
      significado:
        'Acción que genera beneficios ambientales para compensar impactos asociados al uso del agua.',
    },
    {
      termino: 'Medida de corrección',
      significado:
        'Acción destinada a solucionar o reducir un problema identificado en el sistema de uso del agua.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación Española de Normalización. (2018). UNE 166006:2018. Gestión de la I+D+i. Sistema de vigilancia e inteligencia estratégica.',
      link: '',
    },
    {
      referencia:
        'Banco Interamericano de Desarrollo. (2020). Uso de tecnologías de la Cuarta Revolución Industrial (4RI) en agua y saneamiento en América Latina y el Caribe.',
      link: '',
    },
    {
      referencia:
        'Castro Pacheco, M. C., & López López, J. (2019). Estrategias pedagógicas y tecnológicas para promover el ahorro y uso eficiente del agua en las instituciones educativas del municipio de Valledupar (Colombia). Revista Espacios, 40(29), 30.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (1994). Ley 142 de 1994. Por la cual se establece el régimen de los servicios públicos domiciliarios.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (1997). Ley 373 de 1997. Por la cual se establece el programa para el uso eficiente y ahorro del agua.',
      link: '',
    },
    {
      referencia:
        "Food and Agriculture Organization of the United Nations. (2021). The state of the world's land and water resources for food and agriculture – Systems at breaking point.",
      link: '',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi. (2025). Instructivo balance hídrico y sus aplicaciones.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2010). Política Nacional para la Gestión Integral del Recurso Hídrico.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). Decreto 1076 de 2015. Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2018). Resolución 1257 de 2018. Por la cual se desarrollan los parágrafos 1 y 2 del artículo 2.2.3.2.1.1.3 del Decreto 1076 de 2015 relacionados con los Programas para el Uso Eficiente y Ahorro del Agua (PUEAA).',
      link: '',
    },
    {
      referencia:
        'Organisation for Economic Co-operation and Development. (2021). Managing water for all: An OECD perspective on pricing and financing.',
      link: '',
    },
    {
      referencia:
        'UNESCO. (2020). Informe Mundial de las Naciones Unidas sobre el Desarrollo de los Recursos Hídricos 2020: Agua y cambio climático.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Margarita Inés Viloria Villegas ',
          cargo: 'Profesional 04 ',
          centro: 'Centro Biotecnológico del Caribe ',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón ',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

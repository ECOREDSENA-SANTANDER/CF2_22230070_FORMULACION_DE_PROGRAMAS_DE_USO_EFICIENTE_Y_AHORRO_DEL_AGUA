<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Programa para el Uso Eficiente y Ahorro del Agua (PUEAA)

    .bloque-texto-g.bg-color-1.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El PUEAA es un conjunto de acciones, metas, programas e indicadores que deben formular e implementar los usuarios del recurso hídrico, con el propósito de reducir el consumo innecesario de agua, mejorar la eficiencia en su uso y prevenir el desperdicio, de conformidad con la Ley 373 de 1997, el Decreto 1076 de 2015 y la Resolución 1257 de 2018.

    p La formulación e implementación del PUEAA trasciende el mero cumplimiento de un requisito normativo, pues constituye una herramienta de gestión ambiental que contribuye al uso racional del agua, al fortalecimiento de la sostenibilidad institucional y a la adaptación a escenarios de escasez o desabastecimiento. Asimismo, favorece la reducción de costos operativos, mejora el desempeño ambiental de las organizaciones y promueve una cultura de responsabilidad en el manejo del recurso hídrico. En este contexto, el conocimiento de los componentes del PUEAA permite identificar oportunidades para optimizar el consumo de agua, minimizar pérdidas y establecer acciones preventivas que aseguren la disponibilidad del recurso a lo largo del tiempo, en concordancia con los principios de la Gestión Integral del Recurso Hídrico y el desarrollo sostenible (MADS, 2010; FAO, 2021).


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Objetivos del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA)

    .row.bgcompl-1.align-items-center.p-3.p-md-4.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-9
              .bg-color-acento-contenido.p-4.mb-3
                p.mb-0 Los objetivos constituyen la base estratégica de cualquier programa o proyecto. En el contexto del PUEAA, representan los resultados que una organización espera alcanzar mediante la implementación de acciones orientadas al uso eficiente y al ahorro del agua. Los objetivos orientan la toma de decisiones, permiten establecer prioridades y sirven de referencia para evaluar el desempeño del programa (#[em Project Management Institute] [PMI], 2021).
              p.mb-0 De acuerdo con la Resolución 1257 de 2018, los objetivos deben formularse a partir del diagnóstico del sistema de uso del agua, considerando la oferta hídrica, la demanda, los riesgos identificados y las oportunidades de mejora. Un objetivo bien estructurado facilita la definición de metas, indicadores y planes de acción coherentes.
            .col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/2.png', alt='')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Importancia de los objetivos en un PUEAA

    p.mb-4 La formulación de objetivos claros y técnicamente sustentados permite:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        .row.justify-content-center.align-items-center
          .col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/3.png', alt='')
          .col-lg-6
            ul.lista-ul--color.color-primario.fa-lista.mb-0
              li
                i.fas.fa-tint
                span.mb-0 Orientar las acciones del programa.
              li
                i.fas.fa-tint
                span.mb-0 Establecer prioridades de intervención.
              li
                i.fas.fa-tint
                span.mb-0 Facilitar la asignación de recursos.
              li
                i.fas.fa-tint
                span.mb-0 Definir indicadores de seguimiento.
              li
                i.fas.fa-tint
                span.mb-0 Evaluar el cumplimiento de las metas.
              li.mb-0
                i.fas.fa-tint
                span.mb-0 Promover la mejora continua del desempeño hídrico.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/4.svg', alt='')

    p.mb-5 Además, los objetivos constituyen un requisito fundamental para demostrar el compromiso de la organización con la gestión sostenible del recurso hídrico y con el cumplimiento de la normativa ambiental vigente.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Características de un buen objetivo

    p.mb-4 Los objetivos deben cumplir criterios que garanticen su utilidad como instrumento de planificación. Una metodología ampliamente utilizada es el enfoque SMART (Doran, 1981), adaptado a la gestión ambiental.

    .mb-4(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 1.
        span Características de los objetivos SMART
      .tabla-a.color-primario
        table
          thead
            tr
              th Criterio
              th Descripción
              th Ejemplo
          tbody
            tr
              td.fw-bold Específico
              td Define con claridad qué se desea lograr.
              td Reducir el consumo de agua potable en la planta de producción.
            tr
              td.fw-bold Medible
              td Permite cuantificar el avance mediante indicadores.
              td Disminuir el consumo en un 15 %.
            tr
              td.fw-bold Alcanzable
              td Debe ser técnica y económicamente viable.
              td Implementar la micro medición y el control de fugas.
            tr
              td.fw-bold Relevante
              td Contribuye al cumplimiento de la política ambiental.
              td Optimizar el uso del recurso hídrico.
            tr
              td.fw-bold Temporal
              td Establece un plazo para su cumplimiento.
              td Alcanzar la meta en un plazo de tres años.

    p.mb-5 La aplicación de este enfoque facilita la formulación de objetivos verificables y alineados con las necesidades de la organización.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Estructura de los objetivos

    p Un objetivo bien formulado responde a cuatro preguntas fundamentales:

    .row.justify-content-center.mb-4(data-aos='fade')
      .col-lg-3.col-md-6.mb-3
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          h4.text-center.mb-0 ¿Qué se quiere lograr?
      .col-lg-3.col-md-6.mb-3
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h4.text-center.mb-0 ¿Sobre qué proceso o sistema se actuará?
      .col-lg-3.col-md-6.mb-3
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h4.text-center.mb-0 ¿Cómo se logrará?
      .col-lg-3.col-md-6.mb-3
        .tarjeta-numerada.color-adicional-1.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          h4.text-center.mb-0 ¿En qué plazo?

    .row.justify-content-center.mb-5
      .col-lg-10
        p #[b Por ejemplo:] reducir en un 20 % el consumo de agua en el proceso de lavado de equipos mediante la implementación de tecnologías de recirculación y de un programa de mantenimiento preventivo durante el período 2026 - 2028.
        p Esta formulación incorpora el resultado esperado, el proceso intervenido, la estrategia de acción y el horizonte temporal.


    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Objetivo general del PUEAA

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/5.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p El objetivo general expresa el propósito principal del programa y debe reflejar el compromiso de la organización con el uso eficiente y el ahorro del agua.
        p #[b Ejemplo:] implementar un Programa para el Uso Eficiente y Ahorro del Agua que optimice el consumo del recurso hídrico, reduzca las pérdidas y promueva la sostenibilidad ambiental mediante acciones técnicas, operativas y educativas, en cumplimiento de la normativa ambiental vigente.

    .row.bgcompl-2.align-items-center.p-3.p-md-4.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.align-items-center          

          .row.justify-content-end
            .col-12
              .subt.mb-4(data-aos='fade-right')
                img(src='@/assets/curso/temas/t1/subt.svg', alt='')
                h3.mb-0.mx-3 Objetivos específicos
            .col-lg-8
              p Los objetivos específicos desglosan el objetivo general en acciones concretas y medibles.
              h5 Ejemplos:
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li
                  i.fas.fa-tint
                  span.mb-0 Reducir las pérdidas de agua en la red interna mediante un programa de detección y reparación de fugas.
                li
                  i.fas.fa-tint
                  span.mb-0 Incrementar el porcentaje de agua reutilizada en los procesos de limpieza.
                li
                  i.fas.fa-tint
                  span.mb-0 Implementar un sistema de medición sectorizada para controlar el consumo por proceso.
                li
                  i.fas.fa-tint
                  span.mb-0 Capacitar al personal en prácticas de uso eficiente del agua.
                li
                  i.fas.fa-tint
                  span.mb-0 Fortalecer el monitoreo del desempeño hídrico mediante indicadores de gestión.
                li
                  i.fas.fa-tint
                  span.mb-0 Cada objetivo específico debe contribuir directamente al cumplimiento del objetivo general.
            .col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/6.png', alt='')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Relación entre diagnóstico, objetivos y metas

    p La formulación de objetivos debe basarse en la información obtenida durante el diagnóstico del PUEAA. Los problemas identificados en la línea base se transforman en objetivos de mejora y, posteriormente, en metas cuantificables.

    img.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t1/7.png', alt='')

    .tarjeta.bg-color-2.p-4.mb-5(data-aos='fade-down')
      .titulo-sexto.color-secundario
        h5 Figura 1. 
        span Planificación estratégica del diagnóstico a la acción 
      figure.px-lg-5
        img(src='@/assets/curso/temas/t1/fig1.svg', alt='Infografía sobre la planificación estratégica, desde el diagnóstico y la identificación de problemas hasta los objetivos, metas, indicadores y plan de acción.')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 ¿Metas del PUEAA?

    .bg-color-3.mb-4(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/8.png', alt='')
        .col-lg-7
          .p-4
            img.w-80x.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t1/9.svg', alt='')
            p Las metas del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA) representan los resultados específicos que una organización espera alcanzar mediante la implementación de acciones orientadas a optimizar el uso del recurso hídrico. Estas metas constituyen el puente entre los objetivos del programa y las actividades que se ejecutarán durante su implementación, lo que permite establecer compromisos medibles para mejorar el desempeño en el consumo de agua. De acuerdo con la Resolución 1257 de 2018, las metas deben formularse con base en la línea base del sistema de uso de agua, considerando las características de la fuente de abastecimiento, la demanda, los riesgos identificados y las oportunidades de ahorro existentes (Ministerio de Ambiente y Desarrollo Sostenible [MADS], 2018).

    p.mb-5 Una meta correctamente formulada facilita la planificación de las actividades del PUEAA, orienta la asignación de recursos y permite realizar seguimiento mediante indicadores de gestión y de resultado. Además, constituye un criterio fundamental para evaluar la eficacia del programa y demostrar el cumplimiento de los compromisos asumidos ante la autoridad ambiental y la organización (Congreso de Colombia, 1997).
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Importancia de las metas dentro del PUEAA

    p Las metas cumplen una función estratégica dentro del Programa para el Uso Eficiente y Ahorro del Agua, ya que permiten transformar los objetivos generales en resultados concretos y verificables. Sin metas claramente definidas, resulta difícil establecer prioridades, medir avances o determinar el impacto de las acciones implementadas.

    .row.justify-content-center.align-items-center
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/10.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .bg-color-3.mb-4
          .row.justify-content-center
            .col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/11.svg', alt='')
            .col-lg-6
              .p-3
                .bg-color-4.p-3.py-2.mb-4
                  h4.mb-0 Entre sus principales funciones se encuentran:
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Orientar la ejecución del programa.
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Facilitar el seguimiento y la evaluación.
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Priorizar inversiones y recursos.
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Medir el desempeño ambiental.
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Evidenciar el cumplimiento de la normativa.
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Promover la mejora continua.
                  li.mb-0
                    i.fas.fa-tint
                    span.mb-0 Favorecer la toma de decisiones basada en información objetiva.
        p Según la Ley 373 de 1997, los usuarios del recurso hídrico deben implementar acciones que conduzcan al uso eficiente y al ahorro del agua, lo cual requiere establecer metas claras que orienten dichas acciones (Congreso de Colombia, 1997).


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Construcción de las metas del PUEAA

    p.mb-5 La formulación de una meta debe partir del análisis de la línea base del sistema de uso de agua. Esto implica conocer cuánto agua consume la organización, qué procesos presentan mayores consumos, dónde se producen pérdidas y cuáles son los riesgos asociados al abastecimiento.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Etapas para construcción de una meta

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p La construcción de una meta comprende las siguientes etapas:
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-4")
          .row(titulo="Analizar la línea base")
            .col-md-11
              p Se recopila y analiza la información disponible sobre el uso del agua para conocer la situación actual de la organización. Se consideran aspectos como el consumo histórico, balance hídrico, indicadores existentes, pérdidas, procesos de mayor consumo, condiciones de la infraestructura y riesgos asociados al abastecimiento. Esta información permite establecer un punto de referencia para formular las metas del PUEAA.
          .row(titulo="Identificar oportunidades de mejora")
            .col-md-11
              p A partir de los resultados de la línea base, se determinan las acciones que pueden contribuir al uso eficiente y ahorro del agua. Entre ellas se encuentran la reparación de fugas, sustitución de equipos por tecnologías eficientes, reutilización de agua, captación y aprovechamiento de aguas lluvias, optimización de procesos y sensibilización del personal.
          .row(titulo="Establecer el resultado esperado")
            .col-md-11
              p Se define de manera concreta lo que la organización espera alcanzar mediante el programa. El resultado puede estar relacionado con reducir el consumo de agua, disminuir las pérdidas, incrementar el reúso, mejorar la eficiencia de los procesos, reducir costos asociados al consumo o aumentar la cobertura de medición.
          .row(titulo="Definir el plazo")
            .col-md-11
              p Se establece el periodo necesario para alcanzar el resultado esperado. El plazo debe ser claro, realista y coherente con las acciones propuestas. Puede establecerse en meses, años o de acuerdo con la vigencia definida para el PUEAA.
          .row(titulo="Establecer el indicador")
            .col-md-11
              p Se determina uno o varios indicadores que permitan medir de manera objetiva el cumplimiento y avance de la meta. El indicador debe ser verificable y estar relacionado directamente con el resultado esperado. Por ejemplo: porcentaje de reducción del consumo, volumen de agua reutilizada, número de fugas reparadas o porcentaje de procesos con medición.
          .row(titulo="Definir la meta")
            .col-md-11
              p Se formula un resultado cuantificable que permita determinar el nivel de cumplimiento esperado. La meta debe indicar qué se quiere lograr, cuánto se espera alcanzar y en qué plazo. Por ejemplo: reducir en un 10 % el consumo de agua durante un año.
          .row(titulo="Determinar las acciones")
            .col-md-11
              p Se especifican las actividades necesarias para alcanzar la meta, indicando qué se hará, cómo se desarrollará y con qué frecuencia. Las acciones deben responder a las oportunidades de mejora identificadas y ser viables para la organización.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/12.png', alt='')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Metas del PUEAA

    p Según el propósito del programa, las metas pueden clasificarse en distintas categorías.

    .row.justify-content-center.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/13.png', alt='')
      .col-lg-6(data-aos="fade-left")       
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Metas de reducción")
            .col-12
              p.mb-0 Buscan disminuir el consumo de agua o las pérdidas del sistema. 
              p.mb-0 #[b Ejemplo:] reducir en un 15 % el consumo de agua potable durante los próximos dos años.
          .row(numero="2" titulo="Metas de eficiencia")
            .col-md-12
              p.mb-0  Relacionan el consumo con la producción o con el servicio prestado. 
              p.mb-0 #[b Ejemplo:] disminuir el consumo específico de agua de 3,5 m³ a 2,8 m³ por tonelada producida.
          .row(numero="3" titulo="Metas de cobertura")
            .col-md-12
              p.mb-0 Pretenden ampliar la implementación de acciones. 
              p.mb-0 #[b Ejemplo:] instalar medidores en el 100 % de las áreas de consumo antes de finalizar el año.
          .row(numero="4" titulo="Metas de gestión")
            .col-md-12
              p.mb-0 Se enfocan en fortalecer los procesos administrativos y operativos. 
              p.mb-0 #[b Ejemplo:] implementar un programa anual de mantenimiento preventivo para toda la red hidráulica.
          .row(numero="5" titulo="Metas de sensibilización")
            .col-md-12
              p.mb-0 Buscan modificar los hábitos de consumo. 
              p.mb-0 #[b Ejemplo:] capacitar al 100 % de los trabajadores en el uso eficiente del agua durante el primer semestre.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Estructura gramatical de una meta

    p Una meta debe redactarse de manera clara, precisa y verificable. Generalmente responde a la siguiente estructura:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-12
        .tarj-esp.text-center.big.p-2
          span Verbo en infinitivo 
          span.plus +
          span Resultado esperado
          span.plus +
          span Cantidad 
          span.plus +
          span  Plazo 
          span.plus +
          span Unidad de medida

    p.mb-5 #[b Ejemplo:] reducir el consumo de agua potable en un 12 % durante los próximos 12 meses.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Elementos que debe contener una meta

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")        
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Verbo")
            .col-12
              p.mb-0 Indica la acción que se desea realizar. 
              p.mb-0 #[b Ejemplo:] reducir. 
          .row(numero="2" titulo="¿Qué?")
            .col-12
              p.mb-0 Especifica el aspecto que se busca mejorar. 
              p.mb-0 #[b Ejemplo:] el consumo de agua. 
          .row(numero="3" titulo="¿Cuánto?")
            .col-12
              p.mb-0 Establece el resultado cuantificable que se espera alcanzar.
              p.mb-0 #[b Ejemplo:] 12 %. 
          .row(numero="4" titulo="¿Cuándo?")
            .col-12
              p.mb-0 Determina el plazo para cumplir la meta. 
              p.mb-0 #[b Ejemplo:] en doce meses. 
          .row(numero="5" titulo="Unidad de medida")
            .col-12
              p.mb-0 Señala cómo se expresará el resultado.
              p.mb-0 #[b Ejemplo:] porcentaje (%). 
          .row(numero="6" titulo="Ejemplo de meta completa")
            .col-12
              p.mb-0 Reducir en un 12 % el consumo de agua en un periodo de doce meses.
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")       
        img(src='@/assets/curso/temas/t1/14.png', alt='')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Características de una buena meta

    p Las metas deben cumplir características similares al enfoque SMART:
    
    SlyderF.mb-5(columnas="col-md-6 col-xl-4" data-aos="fade")
      .tarjeta.bg-fondo-1.p-4
        .row.justify-content-center.mb-3
          .col-4.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t1/tarj1-1.svg' alt='')
        h4.text-center Específica
        p.text-center.mb-0 Define con claridad lo que se pretende lograr.
      .tarjeta.bg-fondo-1.p-4
        .row.justify-content-center.mb-3
          .col-4.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t1/tarj1-2.svg' alt='')
        h4.text-center Medible
        p.text-center.mb-0 Puede cuantificarse mediante indicadores.
      .tarjeta.bg-fondo-1.p-4
        .row.justify-content-center.mb-3
          .col-4.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t1/tarj1-3.svg' alt='')
        h4.text-center Alcanzable
        p.text-center.mb-0 Es viable con los recursos disponibles.
      .tarjeta.bg-fondo-1.p-4
        .row.justify-content-center.mb-3
          .col-4.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t1/tarj1-4.svg' alt='')
        h4.text-center Relevante
        p.text-center.mb-0 Contribuye al cumplimiento del objetivo del PUEAA.
      .tarjeta.bg-fondo-1.p-4
        .row.justify-content-center.mb-3
          .col-4.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t1/tarj1-5.svg' alt='')
        h4.text-center Temporal
        p.text-center.mb-0 Establece un plazo para su cumplimiento.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Ejemplos de metas correctamente formuladas

    .bg-fondo-2.tarjeta.p-4.mb-5(data-aos='fade')
      .row.justify-content-around.align-items-center
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/15.svg' alt='')
        .col-lg-7
          ul.lista-ul--color.color-primario.fa-lista.mb-0
            li
              i.fas.fa-tint
              span.mb-0 Reducir en un 10 % el consumo de agua potable durante el próximo año mediante la reparación de fugas.
            li
              i.fas.fa-tint
              span.mb-0 Disminuir en un 20 % las pérdidas de agua en la red interna antes de diciembre de 2027.
            li
              i.fas.fa-tint
              span.mb-0 Incrementar el reúso de aguas tratadas hasta alcanzar el 30 % del consumo total en dos años.
            li
              i.fas.fa-tint
              span.mb-0 Instalar sistemas de medición en todas las áreas de producción durante el primer semestre.
            li.mb-0
              i.fas.fa-tint
              span.mb-0 Capacitar al 100 % del personal operativo en el uso eficiente del agua antes de finalizar el año.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Medición de las metas mediante indicadores

    .row.justify-content-center.mb-4
      .col-lg-3(data-aos="fade-right")
        img.w-80x.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t1/16.svg' alt='')
        p Una meta únicamente puede evaluarse si cuenta con indicadores que permitan medir su grado de cumplimiento. Los indicadores son herramientas que transforman la información en datos objetivos para apoyar la toma de decisiones (MADS, 2018).
      .col-lg-9(data-aos="fade-left")
        .bg-color-7
          .row.justify-content-center
            .col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/17.svg' alt='')
            .col-lg-6.d-flex.justify-content-center.flex-column
              .p-4
                .bg-color-4.p-3.py-2.mb-4
                  h4.mb-0 Los indicadores responden preguntas como:
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li.mb-1
                    i.fas.fa-tint
                    span.mb-0 ¿Se logró la meta?
                  li.mb-1
                    i.fas.fa-tint
                    span.mb-0 ¿Cuánto se avanzó?
                  li.mb-1
                    i.fas.fa-tint
                    span.mb-0 ¿Qué procesos mejoraron?
                  li.mb-1
                    i.fas.fa-tint
                    span.mb-0 ¿Qué acciones requieren fortalecerse?

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span Ejemplos de indicadores asociados a metas
        .tabla-a.color-primario
          table
            thead
              tr
                th Meta
                th Indicador
            tbody
              tr
                td.fw-bold Reducir el consumo
                td m³ consumidos por mes.
              tr
                td.fw-bold Disminuir pérdidas
                td % de pérdidas de agua.
              tr
                td.fw-bold Incrementar el reúso
                td % de agua reutilizada.
              tr
                td.fw-bold Instalar medidores
                td % de cobertura de medición.
              tr
                td.fw-bold Capacitar al personal
                td % de trabajadores capacitados.
      .col-lg-5(data-aos="fade-left")
        .bg-color-8.tarjeta.p-4
          h4 Ejemplo práctico
          ul.lista-ul--color.color-primario.fa-lista.mb-0
            li
              i.fas.fa-tint
              span.mb-0 #[b Meta:] reducir en un 15 % el consumo de agua potable durante los próximos 12 meses. 
            li
              i.fas.fa-tint
              span.mb-0 #[b Indicador:] porcentaje de reducción del consumo de agua potable. 
            li
              i.fas.fa-tint
              span.mb-0 #[b Línea base:] 10.000 m³/año. 
            li.mb-0
              i.fas.fa-tint
              span.mb-0 #[b Meta cuantificada:] alcanzar un consumo máximo de 8.500 m³/año. 

    .bg-color-9.tarjeta.p-4.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/18.svg' alt='')
        .col-lg-5.mb-4.mb-lg-0
          h4.mb-1 Fórmula del indicador:
          p.fw-bold.mb-0 Porcentaje de reducción =[(Consumo de la línea base - Consumo actual) / Consumo de la línea base] x 100 
        .col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/19.svg' alt='')
        .col-lg-5
          h4.mb-1 Resultado esperado:
          p.mb-0 Reducir el consumo de agua potable en #[b 1.500 m³/año], pasando de 10.000 m³/año a 8.500 m³/año, lo que representa una #[b reducción del 15 %]. 

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Recomendaciones para formular metas del PUEAA

    .bg-color-10.p-4.mb-4(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-lg-3
          p Para garantizar que las metas sean útiles durante la implementación del programa, se recomienda:
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/20.svg' alt='')
        .col-lg-5
          ul.lista-ul--color.color-primario.fa-lista.mb-0
            li.mb-1
              i.fas.fa-tint
              span.mb-0 Basarlas en información confiable de la línea base.
            li.mb-1
              i.fas.fa-tint
              span.mb-0 Formularlas utilizando verbos en infinitivo.
            li.mb-1
              i.fas.fa-tint
              span.mb-0 Definir valores cuantificables.
            li.mb-1
              i.fas.fa-tint
              span.mb-0 Establecer plazos de cumplimiento.
            li.mb-1
              i.fas.fa-tint
              span.mb-0 Asociarlas a indicadores de seguimiento.
            li.mb-1
              i.fas.fa-tint
              span.mb-0 Asignar responsables para su ejecución.
            li.mb-0
              i.fas.fa-tint
              span.mb-0 Revisarlas periódicamente y ajustarlas cuando sea necesario.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        p La diferencia principal entre un objetivo y una meta es la siguiente:
        .bg-color-7.tarjeta.p-4
          ul.lista-ul--color.color-primario.fa-lista.mb-0
            li
              i.fas.fa-tint
              span.mb-0 El objetivo expresa de manera general lo que se pretende lograr.
            li.mb-0
              i.fas.fa-tint
              span.mb-0 La meta expresa cuánto, en qué plazo y cómo se medirá ese logro.
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span Diferencia entre objetivo y meta
        .tabla-a.color-primario
          table
            thead
              tr
                th Objetivo
                th Meta
            tbody
              tr
                td Describe el propósito general.
                td Describe el resultado cuantificable que se espera alcanzar.
              tr
                td Es amplio.
                td Es específica.
              tr
                td No necesariamente tiene un valor numérico.
                td Siempre incorpora un valor o un criterio medible.
              tr
                td Orienta el programa.
                td Permite evaluar el cumplimiento del programa.
              tr
                td Se logra mediante varias metas.
                td Contribuye al cumplimiento de un objetivo.

    .tarjeta.bg-color-6.p-4(data-aos='fade-down')
      .titulo-sexto.color-secundario
        h5 Figura 2. 
        span De objetivos a metas: ejemplo de un PUEAA
      figure
        img(src='@/assets/curso/temas/t1/fig2.png', alt='Infografía que presenta un ejemplo de PUEAA en el que un objetivo de optimización del uso del agua se relaciona con cinco metas medibles: reducir el consumo, disminuir pérdidas en la red, aumentar el reúso de agua tratada, instalar equipos de medición y capacitar al personal.')


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Indicadores del PUEAA

    .bg-color-3.mb-5(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/21.png', alt='')
        .col-lg-7
          .p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/22.svg', alt='')
              .col-lg-10
                p.mb-0 Los indicadores son herramientas de medición que permiten evaluar el desempeño del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA) mediante el seguimiento sistemático de las metas y acciones establecidas.                
            p Su función principal es proporcionar información objetiva sobre el comportamiento del sistema de uso de agua, facilitando la toma de decisiones para mejorar continuamente la eficiencia en el aprovechamiento del recurso hídrico (Ministerio de Ambiente y Desarrollo Sostenible [MADS], 2018).
            p En el contexto del PUEAA, los indicadores permiten responder preguntas como: ¿se está reduciendo el consumo de agua?, ¿las acciones implementadas están generando los resultados esperados?, ¿se están alcanzando las metas propuestas? y ¿es necesario ajustar las estrategias del programa? La respuesta a estas preguntas contribuye a evaluar la eficacia del PUEAA y a demostrar el cumplimiento de los compromisos establecidos por la organización y por la autoridad ambiental (Congreso de Colombia, 1997).

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Importancia de los indicadores

    p.mb-4 Los indicadores constituyen uno de los elementos más importantes del PUEAA, ya que permiten convertir la información recopilada en datos útiles para la gestión del recurso hídrico. Sin indicadores, sería imposible determinar si las acciones implementadas realmente contribuyen a un uso eficiente del agua.

    .subt2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt2.svg', alt='')
      h4.mb-0.mx-3 Los indicadores permiten:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/23.svg', alt='')
      .col-lg-6
        ul.lista-ul--color.color-primario.fa-lista.mb-0
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Medir el cumplimiento de las metas del PUEAA.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Evaluar la eficiencia en el uso del agua.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Identificar desviaciones respecto de los resultados esperados.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Apoyar la toma de decisiones basada en evidencia.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Priorizar acciones de mejora.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Evaluar la efectividad de las inversiones realizadas.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Facilitar la presentación de informes ante la autoridad ambiental.
          li.mb-0
            i.fas.fa-tint
            span.mb-0 Promover la mejora continua del sistema de uso de agua.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Construcción de indicadores

    p.mb-4 La construcción de un indicador debe responder a una necesidad específica de medición y estar alineada con los objetivos y metas del PUEAA. Un indicador bien formulado debe ser claro, objetivo, verificable y fácil de interpretar.

    .subt2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt2.svg', alt='')
      h4.mb-0.mx-3 Etapas para construir indicadores
    
    p Para construir un indicador se recomienda seguir las siguientes etapas:

    .tarjeta.bg-fondo-3.p-4.mb-5
      LineaTiempoC.color-acento-botones
        .row.justify-content-center.align-items-center(titulo="Paso 1")
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/paso1-1.png', alt='')
          .col-lg-6.col-11
            p #[b Definir qué se desea medir:] antes de formular un indicador, es necesario identificar con claridad el aspecto o resultado que se desea evaluar.
            p.fw-bold Ejemplos:
            .row.justify-content-center
              .col-lg-5.col-md-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Consumo de agua. 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Pérdidas de agua. 
                  li.mb-0
                    i.fas.fa-tint
                    span.mb-0 Reúso de agua. 
              .col-lg-7.col-md-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Cobertura de micromedición. 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Cumplimiento de capacitaciones. 
                  li.mb-0
                    i.fas.fa-tint
                    span.mb-0 Ejecución de las acciones del programa. 
        .row.justify-content-center.align-items-center(titulo="Paso 2")
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/paso1-2.png', alt='')
          .col-lg-6.col-11
            p #[b Establecer la variable de medición:] la variable corresponde al dato o conjunto de datos que permitirá cuantificar el comportamiento del aspecto evaluado.
            p.fw-bold Ejemplos:
            .row.justify-content-center
              .col-lg-6.col-md-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Volumen de agua consumida en m³. 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Litros consumidos por unidad producida. 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Número de fugas identificadas. 
              .col-lg-6.col-md-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Porcentaje de pérdidas de agua. 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Número de trabajadores capacitados. 
        .row.justify-content-center.align-items-center(titulo="Paso 3")
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/paso1-3.png', alt='')
          .col-lg-6.col-11
            p #[b Definir la unidad de medida:] toda medición debe expresarse mediante una unidad que permita cuantificar y comparar los resultados.
            p.fw-bold Ejemplos:
            .row.justify-content-center
              .col-lg-5.col-md-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Litros (L). 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Metros cúbicos (m³). 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Litros por persona por día (L/persona/día). 
              .col-lg-7.col-md-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Metros cúbicos por unidad producida (m³/unidad producida). 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Porcentaje (%). 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Número de eventos. 
        .row.justify-content-center.align-items-center(titulo="Paso 4")
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/paso1-4.png', alt='')
          .col-lg-6.col-11
            p #[b Establecer la frecuencia de medición:] se debe definir cada cuánto tiempo se recopilarán y analizarán los datos del indicador, de acuerdo con su comportamiento y los objetivos del programa.
            p.fw-bold Ejemplos:
            .row.justify-content-center
              .col-lg-5.col-md-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Diariamente. 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Semanalmente. 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Mensualmente. 
              .col-lg-7.col-md-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Trimestralmente. 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Semestralmente. 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Anualmente. 
        .row.justify-content-center.align-items-center(titulo="Paso 5")
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/paso1-5.png', alt='')
          .col-lg-6.col-11
            p #[b Definir la fuente de información:] los datos utilizados para calcular el indicador deben provenir de fuentes confiables y de registros que permitan verificar la información.
            p.fw-bold Ejemplos:
            .row.justify-content-center
              .col-lg-6.col-md-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Facturas del servicio de acueducto. 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Registros de caudalímetros. 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Medidores internos. 
              .col-lg-6.col-md-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Registros de producción. 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Formatos de inspección. 
                  li.mb-2
                    i.fas.fa-tint
                    span.mb-0 Informes de mantenimiento.
          

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Tipos de indicadores

    p Los indicadores del PUEAA pueden clasificarse según el aspecto que evalúan:

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-11
        PasosA.color-acento-contenido(tipo="l")
          .row.align-items-center
            .col-lg-10
              h4 Indicadores de gestión
              p Miden el grado de ejecución de las actividades, acciones o compromisos programados en el PUEAA.
              p.fw-bold Ejemplos: 
              .row.justify-content-center
                .col-lg-5.col-md-6
                  ul.lista-ul.fa-lista.l-circle.mb-0
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Porcentaje de actividades ejecutadas. 
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Número de inspecciones realizadas. 
                .col-lg-7.col-md-6
                  ul.lista-ul.fa-lista.l-circle.mb-0
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Porcentaje de cumplimiento del cronograma. 
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Número de jornadas de sensibilización realizadas. 
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/paso2-1.svg', alt='')
          .row.align-items-center
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/paso2-2.svg', alt='')
            .col-lg-10
              h4 Indicadores de resultado
              p Permiten medir los cambios obtenidos como consecuencia de las acciones implementadas.
              p.fw-bold Ejemplos: 
              .row.justify-content-center
                .col-md-6.col-lg-5
                  ul.lista-ul.fa-lista.l-circle.mb-0
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Porcentaje de reducción del consumo de agua. 
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Porcentaje de disminución de las pérdidas de agua. 
                .col-md-6.col-lg-7
                  ul.lista-ul.fa-lista.l-circle.mb-0
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Volumen de agua reutilizada. 
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Porcentaje de incremento en el aprovechamiento de aguas lluvias. 
          .row.align-items-center
            .col-lg-10
              h4 Indicadores de eficiencia
              p Relacionan los recursos utilizados con los resultados obtenidos y permiten determinar qué tan eficientemente se utilizan los recursos disponibles.
              p.fw-bold Ejemplos: 
              ul.lista-ul.fa-lista.l-circle.mb-0
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Metros cúbicos (m³) de agua consumida por tonelada producida. 
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/paso2-3.svg', alt='')
          .row.align-items-center
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/paso2-4.svg', alt='')
            .col-lg-10
              h4 Indicadores de eficacia
              p Permiten determinar el grado en que se alcanzan las metas y resultados establecidos en el PUEAA.
              p.fw-bold Ejemplos: 
              .row.justify-content-center
                .col-md-6
                  ul.lista-ul.fa-lista.l-circle.mb-0
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Porcentaje de cumplimiento de la meta anual de reducción del consumo de agua. 
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Porcentaje de cumplimiento de las metas de reducción de pérdidas. 
                .col-md-6
                  ul.lista-ul.fa-lista.l-circle.mb-0
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Porcentaje de cumplimiento de las acciones programadas. 
          .row.align-items-center
            .col-lg-10
              h4 Indicadores de impacto
              p Permiten valorar los efectos generados a mediano o largo plazo por las acciones implementadas, especialmente en relación con la protección y conservación del recurso hídrico.
              p.fw-bold Ejemplos: 
              .row.justify-content-center
                .col-md-6
                  ul.lista-ul.fa-lista.l-circle.mb-0
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Reducción de la presión sobre las fuentes de abastecimiento. 
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Disminución del consumo total de agua. .
                .col-md-6
                  ul.lista-ul.fa-lista.l-circle.mb-0
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Reducción de la cantidad de agua captada de la fuente. 
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Disminución de los costos asociados al consumo de agua
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/paso2-5.svg', alt='')    

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Estructura gramatical de un indicador

    p.mb-4 Un indicador debe redactarse de forma clara, indicando exactamente qué se medirá. La estructura recomendada es:
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-8
        .tarj-esp.text-center.p-2
          span Variable
          span.plus +
          span Unidad de medida 
          span.plus +
          span Período de evaluación

    .row.justify-content-center.align-items-center
      .col-lg-5(data-aos="fade-right")
        p.fw-bold.mb-2 Ejemplos:
        ul.lista-ul--color.color-primario.fa-lista.mb-0
          li.mb-0
            i.fas.fa-tint
            span.mb-0 Consumo mensual de agua (m³ / mes).
          li.mb-0
            i.fas.fa-tint
            span.mb-0 Consumo específico de agua (m³ / tonelada producida).
          li.mb-0
            i.fas.fa-tint
            span.mb-0 Porcentaje de pérdidas de agua (%).
          li.mb-0
            i.fas.fa-tint
            span.mb-0 Cobertura de micro medición (%).
          li.mb-0
            i.fas.fa-tint
            span.mb-0 Cumplimiento del cronograma de mantenimiento (%).
      .col-lg-7.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/24.png', alt='')


    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Soluciones para el uso eficiente y ahorro del agua

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-4
        p Las soluciones para el uso eficiente y el ahorro de agua son el conjunto de acciones técnicas, administrativas, operativas, educativas y ambientales que buscan optimizar el aprovechamiento del recurso hídrico, disminuir los desperdicios y mejorar la eficiencia en su uso. Estas soluciones pueden implementarse en cualquiera de las etapas del sistema, desde la captación hasta el uso final, y deben contribuir al cumplimiento de los objetivos y metas del PUEAA.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/25.png', alt='')
      .col-lg-4
        p Entre sus principales propósitos se encuentran:
        ul.lista-ul--color.color-primario.fa-lista.mb-0
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Reducir el consumo de agua.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Disminuir las pérdidas físicas y operativas.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Mejorar la eficiencia de los procesos.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Incrementar el reúso del agua.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Fortalecer la cultura del ahorro.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Disminuir los costos asociados al consumo.
          li.mb-0
            i.fas.fa-tint
            span.mb-0 Garantizar la sostenibilidad del recurso hídrico.
   
    .mb-5(data-aos="fade-down")
      img(src='@/assets/curso/temas/t1/podcast.svg', alt='')
      .bg-color-primario.p-4
        .tarjeta.bg-white.p-4
          .row.justify-content-around
            .col-lg-6
              p Explore el podcast Criterios para seleccionar soluciones y conozca los aspectos fundamentales para identificar alternativas viables, eficientes y sostenibles orientadas al uso eficiente y ahorro del agua.
              TarjetaAudio.color-acento-botones.mb-4(
                texto="Criterios para seleccionar soluciones"
                :audio="require_src('@/assets/actividad/audio/success.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p No todas las soluciones son aplicables a cualquier organización. La selección debe realizarse considerando aspectos técnicos, económicos, ambientales y operativos. 
            .col-lg-5
              p Los principales criterios son:
              ul.lista-ul.fa-lista.l-circle.mb-0
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Consumo actual de agua.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Magnitud de las pérdidas.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Riesgos asociados al abastecimiento.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Disponibilidad presupuestal.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Facilidad de implementación.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Tiempo de recuperación de la inversión.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Beneficios ambientales esperados.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Cumplimiento de la normatividad.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Compatibilidad con la infraestructura existente.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Facilidad de operación y mantenimiento.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Medidas de manejo

    p Las medidas de manejo constituyen el conjunto de acciones implementadas para prevenir, controlar o reducir los impactos derivados del uso del agua. En el PUEAA se clasifican en medidas de prevención, mitigación, corrección y compensación.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p La construcción de una meta comprende las siguientes etapas:
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-4")
          .row(titulo="Medidas de prevención")
            .col-md-11.col-lg-6
              p.fw-bold.mb-1 Ejemplos:
              ul.lista-ul.fa-lista.l-circle.mb-0
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Diseño eficiente de redes hidráulicas.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Instalación de equipos ahorradores.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Programas de mantenimiento preventivo.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Detección temprana de fugas.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Micromedición de consumos.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Capacitación permanente al personal.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Inspecciones periódicas.
            .col-md-11.col-lg-6
              p.fw-bold.mb-1 Ventajas:
              ul.lista-ul.fa-lista.l-circle.mb-0
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Reducen costos de operación.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Disminuyen el desperdicio de agua.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Incrementan la vida útil de la infraestructura.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Facilitan el cumplimiento de las metas del PUEAA.
          .row(titulo="Medidas de mitigación")
            .col-md-11
              p Buscan disminuir la magnitud o los efectos de un problema cuando no puede evitarse por completo.
            .col-md-11.col-lg-6
              p.fw-bold.mb-1 Ejemplos:
              ul.lista-ul.fa-lista.l-circle.mb-0
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Reúso de aguas tratadas.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Sistemas de recirculación.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Control automático de presión.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Sectorización hidráulica.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Almacenamiento de agua para contingencias.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Aprovechamiento de aguas lluvias.
            .col-md-11.col-lg-6
              p Estas medidas permiten reducir el consumo de agua potable y mejorar la resiliencia del sistema frente a periodos de escasez.
          .row(titulo="Medidas de corrección")
            .col-md-11
              p Se aplican cuando el problema ya existe y es necesario restablecer el funcionamiento normal del sistema.
            .col-md-11.col-lg-6
              p.fw-bold.mb-1 Ejemplos:
              ul.lista-ul.fa-lista.l-circle.mb-0
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Reparación de fugas.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Sustitución de tuberías deterioradas.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Cambio de válvulas defectuosas.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Calibración de medidores.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Modernización de equipos de alto consumo. 
            .col-md-11.col-lg-6
              p Estas acciones permiten recuperar la eficiencia del sistema y reducir las pérdidas que afectan el cumplimiento de las metas del programa.
          .row(titulo="Medidas de compensación")
            .col-md-11 
              p Buscan generar beneficios ambientales que contribuyan a equilibrar los impactos ocasionados por el uso del recurso hídrico.
            .col-md-11.col-lg-7
              p.fw-bold.mb-1 Ejemplos:
              ul.lista-ul.fa-lista.l-circle.mb-0
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Restauración de rondas hídricas.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Protección de nacimientos de agua.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Reforestación de áreas de recarga.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Programas de educación ambiental comunitaria.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Participación en esquemas de pago por servicios ambientales.
            .col-md-11.col-lg-5
              p Aunque no reducen directamente el consumo de agua, fortalecen la sostenibilidad del recurso a largo plazo.
            .col-md-11.mt-4
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 4.
                span Comparación de las medidas de manejo
              .tabla-a.color-primario.min-w
                table.bg-white
                  thead
                    tr
                      th.w-25 Tipo de medida
                      th Objetivo
                      th Ejemplos
                  tbody
                    tr
                      td.fw-bold Prevención
                      td Evitar la ocurrencia de problemas.
                      td Mantenimiento preventivo, micromedición, inspecciones.
                    tr
                      td.fw-bold Mitigación
                      td Reducir los efectos de un problema.
                      td reúso, recirculación, almacenamiento.
                    tr
                      td.fw-bold Corrección
                      td Solucionar problemas existentes.
                      td Reparación de fugas, cambio de tuberías.
                    tr
                      td.fw-bold Compensación
                      td Generar beneficios ambientales.
                      td Reforestación, restauración de cuencas.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/26.png', alt='')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Controles en la fuente, el medio y el receptor

    p Las soluciones también pueden clasificarse según el punto del sistema en el que se implementan.

    .tarjeta--container.row.justify-content-center.mb-5(data-aos="fade")
      .col-lg.col-md-6.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-5.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t1/tarj2-1.svg', alt='')
        h4.text-center Controles en la fuente
        p.text-center Se aplican directamente a la fuente de abastecimiento para garantizar la disponibilidad y la calidad del agua.
        p.fw-bold Ejemplos: 
        ul.lista-ul.fa-lista.l-circle.mb-0
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Protección de la cuenca abastecedora.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Monitoreo del caudal.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Control de captaciones.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Optimización de bocatomas.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Cumplimiento de la concesión de aguas.        
      .col-lg.col-md-6.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-5.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t1/tarj2-2.svg', alt='')
        h4.text-center Controles en el medio
        p.text-center Se implementan durante la conducción, el almacenamiento y la distribución del agua.
        p.fw-bold Ejemplos: 
        ul.lista-ul.fa-lista.l-circle.mb-0
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Sectorización de redes.
          li.mb-0
            i.fas.fa-circle
            span.mb-0  Control de presiones.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Detección de fugas.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Automatización de válvulas.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Mantenimiento de tanques.
      .col-lg.col-md-6.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-2
          .col-5.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t1/tarj2-3.svg', alt='')
        h4.text-center Controles en el receptor: 
        p.text-center Corresponden a las acciones implementadas en el lugar donde se utiliza el agua.
        p.fw-bold Ejemplos: 
        ul.lista-ul.fa-lista.l-circle.mb-0
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Sanitarios de doble descarga.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Griferías ahorradoras.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Sensores de cierre automático.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Equipos de lavado de alta eficiencia.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Buenas prácticas operativas.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Estrategias educativas
    
    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-4
        p La educación ambiental es uno de los pilares del PUEAA, ya que las tecnologías por sí solas no garantizan un uso eficiente del agua. Es indispensable promover cambios de comportamiento y fortalecer la cultura del ahorro en todos los niveles de la organización (UNESCO, 2020).
        p Las estrategias educativas buscan sensibilizar a los usuarios sobre la importancia del recurso hídrico y fomentar prácticas responsables en su uso cotidiano.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/27.svg', alt='')
      .col-lg-4
        p Principales estrategias:
        ul.lista-ul--color.color-primario.fa-lista.mb-0
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Campañas de sensibilización.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Jornadas de capacitación.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Talleres prácticos.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Señalización de puntos de consumo.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Difusión de indicadores de consumo.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Programas de reconocimiento de buenas prácticas.
          li.mb-0
            i.fas.fa-tint
            span.mb-0 Material educativo impreso y digital.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Medidas de intervención estructurales y no estructurales

    p Para promover el uso eficiente y el ahorro del agua, se pueden implementar medidas de intervención estructurales y no estructurales. Las primeras están orientadas a realizar modificaciones físicas o técnicas en la infraestructura, mientras que las segundas se enfocan en acciones de gestión, capacitación, seguimiento y mantenimiento. Ambas contribuyen a optimizar el consumo del recurso y prevenir su desperdicio.

    img.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t1/28.png', alt='')

    .tarjeta.bg-color-6.p-4(data-aos='fade-down')
      .titulo-sexto.color-secundario
        h5 Figura 3. 
        span Medidas de intervención
      figure
        img(src='@/assets/curso/temas/t1/fig3.svg', alt='Presenta dos categorías: medidas estructurales, como construcción de tanques, cambio de redes hidráulicas, instalación de equipos ahorradores, captación de aguas lluvias y sistemas de reúso; y medidas no estructurales, como capacitación, actualización de procedimientos, mantenimiento, inspecciones, auditorías e implementación de indicadores. Rediseña la figura ')


    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5 Tecnologías para el uso eficiente y el ahorro del agua

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/29.png', alt='')
      .col-lg-7
        img.w-80x.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t1/30.svg', alt='')
        p La selección de tecnologías no debe basarse únicamente en el costo de adquisición. Es indispensable analizar aspectos como la eficiencia hidráulica, la facilidad de operación, los costos de mantenimiento, la disponibilidad de repuestos, la compatibilidad con la infraestructura existente y los beneficios ambientales esperados. Asimismo, la vigilancia tecnológica y el análisis de fichas técnicas constituyen herramientas que permiten identificar alternativas innovadoras y comparar objetivamente distintas opciones antes de realizar una inversión (FAO, 2021).

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 ¿Qué son las tecnologías para el uso eficiente y el ahorro de agua?

    p.mb-5 Las tecnologías para el uso eficiente y el ahorro de agua son el conjunto de equipos, dispositivos, sistemas, procesos e innovaciones diseñados para optimizar el aprovechamiento del recurso hídrico, reducir pérdidas, mejorar la eficiencia operacional y disminuir el consumo sin afectar la calidad de los procesos o los servicios. Estas tecnologías pueden implementarse en diferentes etapas del sistema de uso del agua, desde la captación y la conducción hasta el consumo final, el tratamiento y el reúso. Su incorporación al PUEAA debe responder a las necesidades identificadas durante el diagnóstico y contribuir al cumplimiento de las metas e indicadores definidos en el programa.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Clasificación de las tecnologías
    
    p Las tecnologías para el uso eficiente del agua pueden clasificarse según su función en el sistema.

    .tarjeta.bg-color-6.p-4.mb-4(data-aos='fade-down')
      .titulo-sexto.color-secundario
        h5 Figura 4. 
        span Tecnologías para el ahorro y uso eficiente del agua
      figure
        img(src='@/assets/curso/temas/t1/fig4.jpg', alt='Infografía que presenta tecnologías para el ahorro y uso eficiente del agua en cinco ámbitos: abastecimiento, almacenamiento, distribución, consumo eficiente y tratamiento y reúso, con ejemplos y aplicaciones.')

    .tarjeta.bg-color-6.p-4.mb-5(data-aos='fade-down')
      .titulo-sexto.color-secundario
        h5 Figura 5. 
        span Clasificación de tecnologías según nivel de complejidad 
      figure
        img(src='@/assets/curso/temas/t1/fig5.svg', alt='Infografía que clasifica las tecnologías para el uso eficiente del agua en convencionales, intermedias y avanzadas, según su complejidad, inversión y capacidad técnica, e incluye ejemplos, ventajas y aplicaciones.')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Características de las tecnologías
    
    p Antes de seleccionar una tecnología, es necesario analizar diversas características técnicas. Entre las principales se encuentran: 

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-5.tarjeta.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-6
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li.mb-1
                  i.fas.fa-tint
                  span.mb-0 Eficiencia hidráulica.
                li.mb-1
                  i.fas.fa-tint
                  span.mb-0 Capacidad de operación.
                li.mb-1
                  i.fas.fa-tint
                  span.mb-0 Vida útil.
                li.mb-1
                  i.fas.fa-tint
                  span.mb-0 Consumo energético.
                li.mb-1
                  i.fas.fa-tint
                  span.mb-0 Compatibilidad con el sistema existente.
                li.mb-1
                  i.fas.fa-tint
                  span.mb-0 Facilidad de mantenimiento.
                li.mb-1
                  i.fas.fa-tint
                  span.mb-0 Disponibilidad de repuestos.
                li.mb-1
                  i.fas.fa-tint
                  span.mb-0 Garantía del fabricante.
                li.mb-1
                  i.fas.fa-tint
                  span.mb-0 Cumplimiento de normas técnicas.
            .col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/31.svg', alt='')
      .col-lg-6(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span Características para evaluar una tecnología
        .tabla-a.color-primario.min-w
          table
            thead
              tr
                th.w-25 Criterio
                th Aspecto para evaluar
            tbody
              tr
                td.fw-bold Eficiencia
                td Reducción del consumo de agua.
              tr
                td.fw-bold Durabilidad
                td Vida útil esperada.
              tr
                td.fw-bold Operación
                td Facilidad de uso.
              tr
                td.fw-bold Mantenimiento
                td Frecuencia y costo.
              tr
                td.fw-bold Compatibilidad
                td Integración con el sistema existente.
              tr
                td.fw-bold Seguridad
                td Riesgos asociados.
              tr
                td.fw-bold Costo
                td Inversión y operación.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Vigilancia tecnológica
    
    .row.justify-content-center.mb-4
      .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/32.png', alt='')
      .col-lg-6(data-aos="fade-left")
        p La vigilancia tecnológica es un proceso sistemático de búsqueda, recopilación, análisis y uso de información sobre nuevas tecnologías, equipos y tendencias que pueden mejorar la eficiencia en el uso del agua. Su propósito es apoyar la toma de decisiones y promover la innovación dentro del PUEAA (UNE 166006:2018; OECD, 2021).
        p Este proceso permite identificar oportunidades de mejora, comparar soluciones disponibles en el mercado y anticipar cambios tecnológicos que favorezcan la sostenibilidad del sistema.
    
    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10
        .tarjeta--container.row
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-5.col-md-6.col-lg-4
                img(src='@/assets/curso/temas/t1/tarj3-1.svg', alt='')          
            h4.text-center Etapas de la vigilancia tecnológica
            ul.lista-ul.fa-lista.l-circle.mb-0
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Identificación de necesidades.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Búsqueda de información.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Selección de fuentes confiables.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Análisis comparativo.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Evaluación técnica y económica.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Toma de decisiones.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Actualización continua.
          .col-md.tarjeta.color-acento-contenido.p-5
            .row.justify-content-center.mb-4
              .col-5.col-md-6.col-lg-4
                img(src='@/assets/curso/temas/t1/tarj3-2.svg', alt='')          
            h4.text-center Fuentes de información
            ul.lista-ul.fa-lista.l-circle.mb-0
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Fabricantes.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Catálogos técnicos.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Revistas científicas.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Patentes.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Universidades.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Organismos de normalización.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Portales especializados.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Análisis de fichas técnicas

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade')
      .col-lg-6
        p Las fichas técnicas contienen las especificaciones del fabricante y constituyen uno de los principales insumos para seleccionar una tecnología. 
        p Antes de adquirir un equipo es recomendable analizar:
        .row.justify-content-center
          .col-lg-6.col-md-6
            ul.lista-ul.fa-lista.l-circle.mb-0
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Descripción del producto.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Principio de funcionamiento.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Caudal nominal. 
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Presión de operación.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Materiales de fabricación.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Vida útil.
          .col-lg-6.col-md-6
            ul.lista-ul.fa-lista.l-circle.mb-0
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Consumo energético.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Requerimientos de instalación.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Mantenimiento.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Garantía.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Certificaciones técnicas.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 Restricciones de uso.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/33.png', alt='')
      .col-lg-3
        p.fw-bold Ejemplo:
        p.mb-0 #[b Equipo:] aireador para grifería.
        p.mb-0 #[b Caudal convencional:] 12 L/min.
        p.mb-0 #[b Caudal con aireador:] 5 L/min.
        p.mb-0 #[b Ahorro estimado:] 58 %.
        p.mb-0 #[b Vida útil:] 8 años.
        p #[b Mantenimiento:] limpieza semestral.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Costos y presupuesto

    p.mb-4 Toda solución propuesta en el PUEAA debe evaluarse desde el punto de vista económico para garantizar su viabilidad y sostenibilidad. La estimación de costos permite priorizar las inversiones y planificar los recursos necesarios para la implementación del programa.

    .subt2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt2.svg', alt='')
      h4.mb-0.mx-3 Los costos pueden clasificarse en:

    .row.justify-content-center.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/34.png', alt='')
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.bg-color-9.p-4(titulo="Inversión inicial")
            h4 Inversión inicial
            p Adquisición de equipos, construcción de infraestructura e instalación.
          .tarjeta.bg-color-9.p-4(titulo="Operación")
            h4 Operación
            p Consumo de energía, de insumos y de personal.
          .tarjeta.bg-color-9.p-4(titulo="Mantenimiento")
            h4 Mantenimiento
            p Reparaciones, calibraciones y reposición de componentes.
          .tarjeta.bg-color-9.p-4(titulo="Capacitación")
            h4 Capacitación
            p Formación y sensibilización del personal.
          .tarjeta.bg-color-9.p-4(titulo="Monitoreo y seguimiento")
            h4 Monitoreo y seguimiento
            p Medición, análisis de indicadores y auditorías.

    p.mb-4 La incorporación de tecnologías en el PUEAA requiere una evaluación económica que permita determinar la viabilidad de la inversión. Los costos deben clasificarse en:

    .tarjeta.bg-color-6.p-4(data-aos='fade-down')
      .titulo-sexto.color-secundario
        h5 Figura 6. 
        span Tipos de costos
      figure.px-lg-5
        img(src='@/assets/curso/temas/t1/fig6.png', alt='Presenta cuatro categorías relacionadas con los costos de un sistema eficiente y ahorrador de agua: costos de inversión, que incluyen compra de equipos, transporte, instalación y obras civiles; costos de operación, como energía, insumos y mano de obra; costos de mantenimiento, que abarcan repuestos, calibración, limpieza y reparaciones; y costos de reposición, asociados a la sustitución de equipos y actualización tecnológica. En el centro se destaca el concepto de “Costos para el uso eficiente y ahorro del agua”. La parte inferior señala que una correcta evaluación de todos los costos permite seleccionar una tecnología rentable y sostenible en el tiempo.')


    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.6 Plan de acción para la gestión del uso eficiente y ahorro del agua

    .row.bgcompl-1.align-items-center.p-3.p-md-4.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-9
              .bg-color-acento-contenido.p-4.mb-3
                p.mb-0 Una vez caracterizado el sistema de uso de agua, formulados los objetivos, establecidas las metas y definidos los indicadores del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA), es necesario diseñar un plan de acción que organice las actividades necesarias para alcanzar los resultados esperados. El plan de acción constituye el instrumento operativo del PUEAA, ya que traduce los objetivos estratégicos en actividades concretas, asignando responsables, recursos, cronogramas e indicadores de seguimiento (Ministerio de Ambiente y Desarrollo Sostenible [MADS], 2018).
              p.mb-0 La formulación de un plan de acción facilita la ejecución ordenada de las estrategias de uso eficiente y de ahorro de agua, promueve la coordinación entre las diferentes áreas de la organización y permite realizar un seguimiento permanente del cumplimiento de las metas propuestas. Asimismo, constituye un requisito fundamental del contenido mínimo del PUEAA, de conformidad con la Resolución 1257 de 2018, que establece que los programas deben incluir las actividades que se ejecutarán para garantizar la gestión sostenible del recurso hídrico (MADS, 2018).
            .col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/35.png', alt='')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 ¿Qué es un plan de acción?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.d-none.d-lg-block 
        img(src='@/assets/curso/temas/t1/36.png', alt='')
      .col-lg-6
        p El plan de acción es el documento que organiza de manera sistemática las actividades necesarias para cumplir los objetivos y metas del PUEAA. En él se describen las acciones a implementar, los responsables de su ejecución, los recursos requeridos, los plazos de ejecución, los indicadores de seguimiento y los mecanismos de evaluación.
        p.mb-0 Su finalidad es orientar la implementación del programa, facilitar el control de las actividades y asegurar que las decisiones adoptadas durante la formulación del PUEAA se traduzcan en resultados concretos.
    
    .row.justify-content-center.mb-5
      .col-lg-4.mb-5.mb-lg-0
        .subt2.mb-4(data-aos='fade-right')
          img(src='@/assets/curso/temas/t1/subt2.svg', alt='')
          h4.mb-0.mx-3 Objetivos del plan de acción
        p El plan de acción busca:
        ul.lista-ul--color.color-primario.fa-lista.mb-0
          li.mb-2
            i.fas.fa-tint
            span.mb-0 Organizar las actividades del PUEAA.
          li.mb-2
            i.fas.fa-tint
            span.mb-0 Definir responsables para cada acción.
          li.mb-2
            i.fas.fa-tint
            span.mb-0 Establecer prioridades de intervención.
          li.mb-2
            i.fas.fa-tint
            span.mb-0 Programar la ejecución de las actividades.
          li.mb-2
            i.fas.fa-tint
            span.mb-0 Asignar recursos humanos, técnicos y financieros.
          li.mb-2
            i.fas.fa-tint
            span.mb-0 Facilitar el seguimiento mediante indicadores.
          li.mb-2
            i.fas.fa-tint
            span.mb-0 Evaluar el cumplimiento de las metas.
          li.mb-0
            i.fas.fa-tint
            span.mb-0 Promover la mejora continua en la gestión del agua.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/37.svg', alt='')
      .col-lg-4
        .subt2.mb-4(data-aos='fade-right')
          img(src='@/assets/curso/temas/t1/subt2.svg', alt='')
          h4.mb-0.mx-3 Componentes del plan de acción
        p Un plan de acción del PUEAA debe contener, como mínimo, los siguientes elementos:
        ul.lista-ul--color.color-primario.fa-lista.mb-0
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Actividad.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Objetivo asociado.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Meta relacionada.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Responsable.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Recursos requeridos.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Tiempo de ejecución.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Indicador de seguimiento.
          li.mb-1
            i.fas.fa-tint
            span.mb-0 Medio de verificación.
          li.mb-0
            i.fas.fa-tint
            span.mb-0 Estado de avance.

    .tarjeta.bg-color-6.p-4.mb-5(data-aos='fade-down')
      .titulo-sexto.color-secundario
        h5 Figura 7. 
        span Componentes del plan de acción del PUEAA
      figure.px-lg-5
        img(src='@/assets/curso/temas/t1/fig7.svg', alt='')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Actividades de gestión del uso eficiente y ahorro del agua
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p Las actividades representan las acciones específicas que ejecutará la organización para cumplir las metas establecidas. Deben redactarse utilizando verbos en infinitivo y describir claramente lo que se realizará.
        p.fw-bold Ejemplos:
        ul.lista-ul.fa-lista.l-circle.mb-4
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Instalar dispositivos ahorradores.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Reparar fugas detectadas.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Implementar un programa de mantenimiento preventivo.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Capacitar al personal.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Actualizar los procedimientos operativos.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Implementar sistemas de medición.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Realizar auditorías internas.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Monitorear los indicadores del PUEAA.
        p Cada actividad debe responder a una necesidad identificada en la línea base y contribuir directamente al logro de los objetivos del programa.
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/38.svg', alt='')

    p.mb-4 Las actividades del plan de acción pueden clasificarse según su propósito:

    .tarjeta.bg-color-6.p-4.mb-5(data-aos='fade-down')
      .titulo-sexto.color-secundario
        h5 Figura 8. 
        span Tipos de actividades
      figure.px-lg-5
        img(src='@/assets/curso/temas/t1/fig8.jpg', alt='Presenta el Plan de Acción del PUEAA (Programa de Uso Eficiente y Ahorro del Agua), del cual se desprenden seis componentes: actividades, que indican qué se hará mediante acciones concretas y proyectos; responsables, que señalan quién lo hará, como entidades, áreas o personal; cronograma, que establece cuándo se hará, incluyendo plazos, fechas límite y duración; recursos, que especifican con qué se hará, como presupuesto, tecnología y personal; indicadores, que determinan cómo se medirá mediante KPI, métricas y datos; y seguimiento y evaluación, que permiten verificar si se está logrando lo propuesto mediante monitoreo y análisis final. Las flechas conectan los seis componentes con el plan de acción central.')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Presentación del plan de acción en el PUEAA

    p En el documento del PUEAA, el plan de acción suele presentarse en una matriz que integra toda la información necesaria para su implementación y seguimiento.

    img.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t1/39.png', alt='')

    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 6.
        span Matriz del plan de acción en el PUEAA
      .tabla-a.color-primario
        table
          thead
            tr
              th Actividad
              th Responsable
              th Recursos
              th Indicador
              th Plazo
              th Medio de verificación
          tbody
            tr
              td.fw-bold Instalar aireadores
              td Mantenimiento.
              td Presupuesto institucional.
              td % de instalación.
              td 3 meses.
              td Acta y registro fotográfico.
            tr
              td.fw-bold Reparar fugas
              td Servicios generales.
              td Personal técnico.
              td Número de fugas reparadas.
              td Permanente.
              td Informe técnico.
            tr
              td.fw-bold Capacitar al personal
              td Gestión Ambiental.
              td Material didáctico.
              td % de personal capacitado.
              td Semestral.
              td Lista de asistencia.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Actores involucrados

    p La implementación del PUEAA requiere la participación de diversos actores que desempeñan funciones específicas en el sistema de uso del agua.

    .row.justify-content-center.mb-3(data-aos="fade")
      .col-lg-4.col-md-6.mb-3
        .tarjeta.bg-fondo-4.p-4.h-100
          .row.justify-content-center.mb-4
            .col-lg-4.col-md-5.col-4
              img(src='@/assets/curso/temas/t1/tarj4-1.svg', alt='')
          h4.text-center Actores internos
          ul.lista-ul.fa-lista.l-circle.mb-0
            li.mb-0
              i.fas.fa-circle 
              span.mb-0 Alta dirección.
            li.mb-0
              i.fas.fa-circle 
              span.mb-0 Coordinador ambiental.
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Personal operativo.
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Área de mantenimiento.
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Área administrativa.
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Comité ambiental.
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Trabajadores.
      .col-lg-4.col-md-6.mb-3
        .tarjeta.bg-fondo-5.p-4.h-100
          .row.justify-content-center.mb-4
            .col-lg-4.col-md-5.col-4
              img(src='@/assets/curso/temas/t1/tarj4-2.svg', alt='')
          h4.text-center Actores externos
          ul.lista-ul.fa-lista.l-circle.mb-0
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Autoridad ambiental competente.
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Empresa prestadora del servicio de acueducto.
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Contratistas.
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Consultores.
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Proveedores de tecnologías.
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Comunidad.

    p Cada actor tiene responsabilidades específicas que deben definirse claramente en el plan de acción.

    TabsC.color-acento-botones(data-aos="fade")
      .py-3.py-md-4(titulo="Seguimiento y evaluación del plan de acción")
        .row.justify-content-center
          .col-lg-4.d-none.d-lg-block.mb-3
            img(src='@/assets/curso/temas/t1/tab1-1.png', alt='')
          .col-lg-6.col-11.mb-3
            p.mb-3 El seguimiento permite verificar el avance de las actividades y determinar si las acciones implementadas contribuyen al cumplimiento de los objetivos y metas del PUEAA.
            p Se recomienda realizar el seguimiento mediante:
            .row.justify-content-center
              .col-md-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li.mb-0
                    i.fas.fa-tint
                    span.mb-0 Indicadores de gestión.
                  li.mb-0
                    i.fas.fa-tint
                    span.mb-0 Indicadores de resultado.
                  li.mb-0
                    i.fas.fa-tint
                    span.mb-0 Auditorías internas.
                  li.mb-0
                    i.fas.fa-tint
                    span.mb-0 Informes periódicos.
              .col-md-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li.mb-0
                    i.fas.fa-tint
                    span.mb-0 Revisión de consumos.
                  li.mb-0
                    i.fas.fa-tint
                    span.mb-0 Inspecciones de campo.
                  li.mb-0
                    i.fas.fa-tint
                    span.mb-0 Reuniones de seguimiento.
          .col-11.col-lg-10   
            p Los resultados obtenidos deben compararse con la línea base y las metas establecidas para identificar oportunidades de mejora y realizar los ajustes necesarios.
      .py-3.py-md-4(titulo="Buenas prácticas para elaborar el plan de acción")
        .row.justify-content-center
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/tab1-2.png', alt='')
          .col-lg-6.col-11
            p Para que el plan de acción sea efectivo, se recomienda:          
            ul.lista-ul--color.color-primario.fa-lista.mb-0
              li.mb-1
                i.fas.fa-tint
                span.mb-0 Formular actividades claras y específicas. 
              li.mb-1
                i.fas.fa-tint
                span.mb-0 Relacionar cada actividad con un objetivo y una meta.
              li.mb-1
                i.fas.fa-tint
                span.mb-0 Definir responsables y plazos de ejecución.
              li.mb-1
                i.fas.fa-tint
                span.mb-0 Asignar recursos suficientes.
              li.mb-1
                i.fas.fa-tint
                span.mb-0 Establecer indicadores de seguimiento.
              li.mb-1
                i.fas.fa-tint
                span.mb-0 Documentar los medios de verificación.
              li.mb-1
                i.fas.fa-tint
                span.mb-0 Revisar periódicamente el avance.
              li.mb-0
                i.fas.fa-tint
                span.mb-0 Ajustar las acciones cuando se identifiquen desviaciones.


    Separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.7 Régimen de los servicios públicos domiciliarios
    
    .bg-color-3.mb-4(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/40.png', alt='')
        .col-lg-8
          .p-4
            p La gestión del agua dentro del PUEAA debe considerar el régimen jurídico aplicable a los servicios públicos domiciliarios, especialmente cuando el abastecimiento depende de una empresa prestadora.
            p En Colombia, la prestación de los servicios públicos está regulada principalmente por la Ley 142 de 1994, que establece los derechos y deberes de los prestadores y de los usuarios, así como los principios de eficiencia, continuidad, calidad y cobertura del servicio (Congreso de Colombia, 1994).

    p.mb-5 Comprender este régimen permite a la organización identificar sus obligaciones como usuario, gestionar adecuadamente el suministro de agua y promover relaciones efectivas con el prestador del servicio.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Normativa aplicable
    
    p La formulación e implementación del plan de acción deben cumplir con la legislación ambiental vigente. 
    p Entre las principales normas se encuentran:
    
    .row.justify-content-end.align-items-center.mb-4
      .col-lg-5(data-aos="fade-right")
        ul.lista-ul--color.color-primario.fa-lista.mb-0
          li.mb-2
            i.fas.fa-tint
            span.mb-0 Ley 142 de 1994, por la cual se establece el régimen de los servicios públicos domiciliarios.
          li.mb-2
            i.fas.fa-tint
            span.mb-0 Ley 373 de 1997, que establece el Programa para el Uso Eficiente y Ahorro del Agua.
          li.mb-2
            i.fas.fa-tint
            span.mb-0 Decreto 1076 de 2015, Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible.
          li.mb-2
            i.fas.fa-tint
            span.mb-0 Resolución 1257 de 2018, que define el contenido de los PUEAA.
          li.mb-2
            i.fas.fa-tint
            span.mb-0 Política Nacional para la Gestión Integral del Recurso Hídrico (MADS, 2010).
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/41.png', alt='')

    p Estas disposiciones proporcionan el marco normativo para la planificación, la ejecución y el seguimiento del programa.

    .tarjeta.bg-color-5.p-4.mb-5
      h4.mb-2 Responsabilidades
      p.mb-0 Para asegurar la correcta implementación del plan de acción, es necesario asignar responsabilidades específicas.

    .tarjeta.bg-color-6.p-4.mb-5(data-aos='fade-down')
      .titulo-sexto.color-secundario
        h5 Figura 9. 
        span Responsabilidades en la implementación
      figure
        img(src='@/assets/curso/temas/t1/fig9.png', alt='Presenta el trabajo colaborativo en la implementación como: alta dirección, coordinador ambiental, area de mantenimiento, personal opertivo y prestador del servicio. ')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>

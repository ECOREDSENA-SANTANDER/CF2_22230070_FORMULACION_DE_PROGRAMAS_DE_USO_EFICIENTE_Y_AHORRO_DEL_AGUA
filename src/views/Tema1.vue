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
                p.mb-0 Los objetivos constituyen la base estratégica de cualquier programa o proyecto. En el contexto del PUEAA, representan los resultados que una organización espera alcanzar mediante la implementación de acciones orientadas al uso eficiente y al ahorro del agua. Los objetivos orientan la toma de decisiones, permiten establecer prioridades y sirven de referencia para evaluar el desempeño del programa (Project Management Institute [PMI], 2021).
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



    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5 Tecnologías para el uso eficiente y el ahorro del agua



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
        img(src='@/assets/curso/temas/t1/fig8.svg', alt='Presenta el Plan de Acción del PUEAA (Programa de Uso Eficiente y Ahorro del Agua), del cual se desprenden seis componentes: actividades, que indican qué se hará mediante acciones concretas y proyectos; responsables, que señalan quién lo hará, como entidades, áreas o personal; cronograma, que establece cuándo se hará, incluyendo plazos, fechas límite y duración; recursos, que especifican con qué se hará, como presupuesto, tecnología y personal; indicadores, que determinan cómo se medirá mediante KPI, métricas y datos; y seguimiento y evaluación, que permiten verificar si se está logrando lo propuesto mediante monitoreo y análisis final. Las flechas conectan los seis componentes con el plan de acción central.')

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
        img(src='@/assets/curso/temas/t1/fig9.svg', alt='Presenta el trabajo colaborativo en la implementación como: alta dirección, coordinador ambiental, area de mantenimiento, personal opertivo y prestador del servicio. ')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

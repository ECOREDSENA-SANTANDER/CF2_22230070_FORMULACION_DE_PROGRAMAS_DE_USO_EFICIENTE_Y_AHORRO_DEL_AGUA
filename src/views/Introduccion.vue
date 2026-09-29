<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-5.d-none.d-lg-block
        img(src="@/assets/curso/temas/intro/1.png", alt="")
      .col-lg-7
        .row.justify-content-center.mb-3
          .col-lg-2.d-none.d-lg-block
            img(src="@/assets/curso/temas/intro/2.svg", alt="")
          .col-lg-10
            p.mb-0 La creciente presión sobre los recursos hídricos, derivada del crecimiento poblacional, del desarrollo industrial, de la expansión agrícola y de los efectos del cambio climático, ha incrementado la necesidad de fortalecer la gestión sostenible del agua. En este contexto, el Programa para el Uso Eficiente y Ahorro del Agua (PUEAA) constituye uno de los principales instrumentos establecidos por la legislación colombiana para promover el uso racional del recurso hídrico y garantizar su disponibilidad para las generaciones presentes y futuras (Congreso de Colombia, 1997).
        p La formulación de un PUEAA no se limita al diagnóstico del sistema de uso del agua; es necesario proyectar un programa estructurado que incluya objetivos, metas, indicadores, soluciones técnicas, tecnologías apropiadas, responsabilidades, cronogramas y presupuestos. Esta fase de planificación permite orientar las acciones de mejoramiento, optimizar la inversión de recursos y facilitar el seguimiento y la evaluación de los resultados alcanzados (Ministerio de Ambiente y Desarrollo Sostenible [MADS], 2018).

    p Este componente formativo proporciona las herramientas y metodologías para la construcción de programas técnicamente sólidos, alineados con la Ley 373 de 1997, el Decreto 1076 de 2015, la Resolución 1257 de 2018 y los principios de la Gestión Integral del Recurso Hídrico.



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

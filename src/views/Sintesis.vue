<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
   
    p La proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA) permite establecer una ruta organizada para la gestión responsable y sostenible del recurso hídrico. Para ello, se abordan los objetivos del programa, la construcción de metas e indicadores que facilitan el seguimiento de los resultados, así como la identificación de soluciones y tecnologías orientadas a optimizar el consumo y reducir las pérdidas de agua. Además, se desarrolla un plan de acción que integra actividades, responsables, recursos y mecanismos de seguimiento, teniendo en cuenta el régimen de los servicios públicos domiciliarios y las disposiciones aplicables a la gestión del recurso hídrico.    

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El PUEAA establece una ruta para la gestión responsable y sostenible del agua, mediante objetivos, metas e indicadores. Además, integra soluciones, tecnologías y acciones para optimizar el consumo, reducir pérdidas y realizar seguimiento.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

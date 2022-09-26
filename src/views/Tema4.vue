<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas de verificación

    

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1	Informes de gestión

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2	Informe de control

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3	Informe de desempeño

</template>

<script>
export default {
  name: 'Tema4',
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

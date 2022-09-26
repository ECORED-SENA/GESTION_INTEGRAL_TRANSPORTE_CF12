<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Planes de mejoramiento 

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1	Acciones de mejora en la operación

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2	Disminución de costos en la operación

    Separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3	Mejora en procesos de distribución

    Separador
    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4	Mejora en la logística del transporte

    Separador
    #t_5_5.titulo-segundo.color-acento-contenido
      h2 5.5	Mejora en servicio y atención al cliente 	
</template>

<script>
export default {
  name: 'Tema5',
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

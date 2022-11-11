<template lang="pug">
.curso-main-container.introduccion.intro
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 En una empresa de transporte de carga o pasajeros, lo que se vende es el servicio, el cual, aunque está implícito dentro de cualquier actividad comercial, la relación comercial final está dada por la prestación del servicio. Por ende, el cliente deberá ser el eje principal para el origen de todas las operaciones, y en función de sus necesidades, es que se planean todas las estrategias comerciales que dan naturaleza al funcionamiento de la empresa. 

    .fondo1
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-5.col-8
          img.mb-5.mb-lg-0.mb-3(src="@/assets/curso/intro/img01.png")
        .col-lg-7.col-12
          p.mb-5 Definir y caracterizar al cliente es fundamental, pero, además, conocer su percepción frente al servicio permite que el crecimiento de una empresa u organización se realice constantemente y con la mejora continua de cualquier proceso donde prime la calidad del servicio. Es por esto que, dentro de este componente formativo, se estudian y analizan los aspectos necesarios para medir y fundamentar el servicio al cliente basado en las políticas organizacionales y cómo se verifica el cumplimiento de estas, utilizando técnicas y mejora continua.
          p.mb-0 Para la elaboración de este componente, se abordaron varios autores conocidos en condiciones de mejora de la operación, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la gestión integral del transporte.
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

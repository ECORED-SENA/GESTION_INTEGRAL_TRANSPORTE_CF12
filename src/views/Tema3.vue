<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Dificultades en la operación del transporte: puntos críticos 

    .row.justify-content-center.d-flex.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-6.col-10
        img.mb-lg-0.mb-3( src="@/assets/curso/tema3/img01.png")
      .col-lg-6.col-12
        p.mb-0 Los puntos críticos son aquellos puntos dentro de la cadena del servicio del transporte donde existe una frecuencia de daños o perjuicios, es decir, donde comúnmente se puede fallar en la operación; por eso es tan importante el seguimiento de los indicadores mencionados anteriormente, porque gracias a ellos se pueden identificar los puntos críticos. El viejo adagio “más sabe el diablo por viejo que por diablo” expresa fielmente lo importante de registrar la historia o las experiencias obtenidas en la operación cotidiana. De allí se desprenden las acciones preventivas, correctivas o propuestas que, de una forma innovadora, los profesionales en el área de logística deben buscar e implementar para la mejora continua que se hace hincapié en las normas de calidad. 

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1	Transporte de carga

    p.mb-5 Dentro de la operación del transporte de carga, lo que siempre se va a ver afectado es la carga en sí y los tiempos de la maniobra. A continuación, se describen algunas de las situaciones que se presentan dentro de este tipo de servicio: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-9.col-12
        .TFcontainer.mb-lg-0.mb-3.p-0
          img.TFimage(src='@/assets/curso/tema3/img02.png')
          .TFoverlay.d-flex.align-items-top
            .p-4.tarjetica1
              h2.mb-lg-4.mb-3.text-center Daños a la carga durante la operación
              p.text-center.mb-0 En el cargue, tránsito y descargue, por volcamientos de la carga, movimientos bruscos, estiba inadecuada, exceder límites de pesos en apilados en contenedores, aplastamientos por sobrecarga, daños por temperaturas inadecuadas.
      .col-lg-5.col-md-9.col-12
        .TFcontainer.mb-lg-0.mb-3.p-0
          img.TFimage(src='@/assets/curso/tema3/img03.png')
          .TFoverlay.d-flex.align-items-top
            .p-4.tarjetica1
              h2.mb-4.text-center Seguridad
              p.text-center.mb-0 Hace referencia a la seguridad vial y de la carga, ambos tienen una incidencia alta, porque el impacto y afectaciones pueden ser incalculables. 
        
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10.col-12.py-3(style="background-color:#edebf4; border-left: 9px solid #483876")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-6.d-flex.justify-content-center
            img.mb-lg-0.mb-3(style="width:103px" src="@/assets/curso/tema3/img04.svg")
          .col-lg-10.col-12
            .row.justify-content-start.d-flex.align-items-center.mb-2
              .col-lg-9.col-12
                p.mb-4 Accidente de un transporte de mercancías peligrosas.
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-10.col-12
                    a.anexo.mb-0(href="https://www.youtube.com/watch?v=1UPIzChf0Xw" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p(style="font-size:14px") <b>Enlace web.</b> 
                        p.mb-0(style="font-size:14px") https://www.youtube.com/watch?v=1UPIzChf0Xw
            p.mb-0.text-end(style="font-size:13px") Fuente: RT en Español (2018).

    .row.justify-content-center.d-flex.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.col-10
        img.mb-lg-0.mb-3( src="@/assets/curso/tema3/img05.png")
      .col-lg-7.col-12
        p.mb-4 Se incluye dentro de este aspecto la seguridad en la infraestructura, que hace parte del primer componente, rutas de acceso, de evacuación, verificación de equipos y sujeciones de carga. Para el segundo componente, se pueden incluir: robos, delitos o actos terroristas; en cuanto al atraco en vías, también hace parte de la seguridad de la carga. Para ampliar esta información, puede consultar el material complementario del boletín FAL (Facilitación del transporte y el comercio en América Latina y el Caribe): Seguridad en la operación de transporte de carga carretero.        
        .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6.col-12
                    a.anexo.mb-0(:href="obtenerLink('downloads/boletínFAL.pdf')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg")
                      .anexo__texto
                        p Anexo. Boletín FAL.pdf
        p.mb-0.text-end(style="font-size:13px") Fuente: Villalobos (2010).

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-8.col-12
        AcordionA.mb-lg-0.mb-3(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-end(titulo="Exceso de peso")              
            .col-lg-11.col-12
              p.mb-0 Es indispensable conocer la normativa de las zonas a las cuales se transporta una carga determinada, porque no todos los países tienen los mismos límites de carga; por tal razón, se han presentado oportunidades en las que devuelven una carga o requiere un estibado y manejo diferente en el destino. 
          .row.justify-content-end(titulo="Aprovechamiento del espacio")              
            .col-lg-11.col-12
              p.mb-0 A veces no se aprovecha bien el espacio por mala acomodación de la carga; por esta razón, hay que tener mucha habilidad y experiencia en esta actividad.
          .row.justify-content-end(titulo="Sanciones por exponer la seguridad pública ")              
            .col-lg-11.col-12 
              p.mb-0 Se han encontrado algunos elementos que hacen peligrar la fauna y flora en ciertas regiones, por falta de uso de insecticidas y cuidado de cargas como alimentos perecederos. 
          .row.justify-content-end(titulo="Deterioro en infraestructura y falta de actualización de equipos ")              
            .col-lg-11.col-12
              p.mb-0  Que faciliten agilidad en maniobras. 
          .row.justify-content-end(titulo="Costo de transporte adicional por cierre de accesos")              
            .col-lg-11.col-12
              p.mb-0 Hay situaciones de orden público, desastres naturales o por seguridad que se cierran algunos puertos, vías y demás, incrementando el costo final del transporte.
          .row.justify-content-end(titulo="Ineficiencias en la distribución de mercancías")              
            .col-lg-11.col-12
              p.mb-0 Es un problema relacionado con procesos de reparto erróneos en los que muchas veces se deja de lado la gestión ambiental. Visitas repetidas para hacer entregas. Interferencia en el tráfico vehicular en las ciudades. Ocupación vehicular, a veces se afecta o no se completa por la necesidad de recorrer grandes distancias.
          
      .col-lg-4.col-10
        img.mb-0(src="@/assets/curso/tema3/img06.png")
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2	Transporte de pasajeros

    p.mb-5 Para el transporte de pasajeros, las variables y cantidad de clientes finales son totalmente diferentes, la mayor cantidad de quejas circundan en la insatisfacción de los clientes, pues es una proporción coherente por la cantidad de población que requiere el servicio. A continuación, se describen algunos elementos relacionados con la insatisfacción de un cliente de este tipo de servicio:

    SlyderF.mb-0(columnas="col-12 col-lg-4" data-aos="fade-left")
      .tarjeta.tarjeta1.p-4.py-3
        div.justify-content-center.d-flex.mb-4
          img(style="width: 124px" src='@/assets/curso/tema3/img07.svg')
        p.text-center.mb-4 <b>Deficiencia en la atención</b>
        p.text-center.mb-0 Indicador que hace referencia a la capacidad que una organización tiene para cumplir con sus obligaciones a corto plazo de forma oportuna. 
        
      .tarjeta.tarjeta1.p-4.py-3
        div.justify-content-center.d-flex.mb-4
          img(style="width: 124px" src='@/assets/curso/tema3/img08.svg')
        p.text-center.mb-4 <b>Falta de capacitación</b>
        p.text-center.mb-0 En conductores por maniobrabilidad del vehículo. 

      .tarjeta.tarjeta1.p-4.py-3
        div.justify-content-center.d-flex.mb-4
          img(style="width: 124px" src='@/assets/curso/tema3/img09.svg')
        p.text-center.mb-4 <b>Incomodidad por exceso de usuarios</b>
        p.text-center.mb-0 En este caso, la capacidad de los buses se supera, y esto genera más peso de carga viva en el bus y poca comodidad. 

      .tarjeta.tarjeta1.p-4.py-3
        div.justify-content-center.d-flex.mb-4
          img(style="width: 124px" src='@/assets/curso/tema3/img10.svg')
        p.text-center.mb-4 <b>Extensos tiempos de espera por el servicio</b>
        p.text-center.mb-0 Los usuarios deben esperar por el servicio, y esto puede generarse por falta de coordinación en el servicio en las diferentes horas valle y pico del día.

      .tarjeta.tarjeta1.p-4.py-3
        div.justify-content-center.d-flex.mb-4
          img(style="width: 124px" src='@/assets/curso/tema3/img11.svg')
        p.text-center.mb-4 <b>Seguridad en las estaciones</b>
        p.text-center.mb-0 Falta presencia de autoridad, se presentan muchos robos, abusos, el personal de seguridad que hay no puede tomar medidas. Los procesos jurídicos de denunciar y demás demandan tiempo y los usuarios no desean invertirlo en eso. 

      .tarjeta.tarjeta1.p-4.py-3
        div.justify-content-center.d-flex.mb-4
          img(style="width: 124px" src='@/assets/curso/tema3/img12.svg')
        p.text-center.mb-4 <b>Daños en la infraestructura</b>
        p.text-center.mb-0 Que cada día cuestan más, por falta de mantenimiento y por daños derivados de algunas manifestaciones.

</template>

<script>
export default {
  name: 'Tema3',
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

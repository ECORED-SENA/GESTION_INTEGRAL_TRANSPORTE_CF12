<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Medición de la satisfacción del cliente

    img.mb-4(src="@/assets/curso/tema1/img01.png")
    p.mb-0 El cliente es el actor más importante en la prestación de un servicio o adquisición de un bien. Conocer su punto de vista es fundamental para el crecimiento de las empresas, ya que sus aportes facilitan la mejora continua por su percepción de una realidad que, como oferentes, posiblemente no se identifiquen al interior de la empresa.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 ¿Qué es la medición y para qué se usa?

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-12
        .cajon.color-primario.p-4.mb-3
          p.mb-0 La medición es una característica cuantitativa de algún aspecto y se usa para obtener la dimensión numérica o un valor que refleje el resultado de un proceso. Para el caso de la satisfacción del cliente, hace referencia a la medida de la satisfacción o percepción del servicio en los clientes. 
        p.mb-lg-0.mb-3 Como se entiende, el cliente es el principal actor en el funcionamiento de un servicio y todas las actividades operativas de la empresa u organización, están encaminadas a atender su necesidad. 
      .col-lg-6.col-8
        img.mb-0(src="@/assets/curso/tema1/img02.png")

    .row.justify-content-center.align-items-center
      .col-lg-4.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img03.png")
      .col-lg-8.col-12
        p.mb-4 Una empresa u organización ve la oportunidad de mejorar la oferta de su servicio conociendo aquellas debilidades que solo se perciben a través de los clientes, para que ellos sigan decidiendo contar con su servicio; es por eso que este proceso de medir permite que se generen los cambios necesarios para elevar esa satisfacción o percepción de los clientes y para que finalmente sean fieles y contraten regularmente. 
        p.mb-0 La satisfacción del cliente es fundamental para cualquier tipo de negocio, especialmente en el transporte, porque permite que el cliente decida elegirlo, ya que hay amplia oferta de servicios por varios empresarios, y a mayor oferta, mayor competencia. Se sabe que la población necesita solucionar sus situaciones de movilidad, la idea es facilitar la elección porque a mayor trabajo, mayor progreso de la organización; aunque debe haber un equilibrio entre la demanda y la capacidad operativa de la organización, se debe propender por que lo que “se haga” quede bien. 
        

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Métodos para la medición de satisfacción del cliente

    p.mb-4 Los métodos son aquellos mecanismos ordenados y sistemáticos que se usan como estrategia para medir la satisfacción de los clientes, también se conocen como procedimientos.
    p.mb-4 A continuación se expondrán los más utilizados para evaluar la satisfacción de los clientes, permitiendo, a través de la información recolectada, establecer las ventajas, desventajas, fortalezas o debilidades con las que el cliente percibe al servicio. 
    p.mb-5 En el servicio de transporte se evidencian varios aspectos importantes a resaltar:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-12
        .TFcontainer.mb-lg-0.mb-3.p-0
          img.TFimage(src='@/assets/curso/tema1/img05.png')
          .TFoverlay
            .p-5
              .row.justify-content-center
                .col-1
                  img.mb-0(style="min-width:22px; width:22px" src="@/assets/curso/tema1/img04.png")
                .col-10
                  p.mb-0 Independientemente del modo de transporte que elijan, los usuarios son los clientes finales. Es importante resaltar que aspectos como tiempo de viaje, costo, comodidad, sinceridad en el servicio, limpieza y aseo, amabilidad de los operadores, cumplimiento en frecuencias de viajes son los aspectos que permiten ser competitivos con otros servicios.
      .col-lg-5.col-12
        .TFcontainer.mb-0.p-0
          img.TFimage(src='@/assets/curso/tema1/img06.png')
          .TFoverlay
            .p-5
              .row.justify-content-center
                .col-1
                  img.mb-0(style="min-width:22px; width:22px" src="@/assets/curso/tema1/img04.png")
                .col-10
                  p.mb-0 Influyen aspectos como el costo, tiempos de viaje, cumplimiento de frecuencias e itinerarios, protección y calidad en el cuidado de la carga, embalaje, son los aspectos más relevantes. Ya que los clientes son variables y sus necesidades también, es necesaria una muy buena logística.

    p.mb-4 Los elementos de la satisfacción al cliente y sus características se mencionan a continuación:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Rendimiento")
        .row.justify-content-evenly
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img07.png")
          .col-lg-6.col-12
            h4 Rendimiento
            p.mb-0 Se reconoce como la capacidad de una empresa en la producción, desempeño del producto o servicio prestado; corresponde a la percepción del cliente.
      .py-3.py-md-4(titulo="Características de la satisfacción")
        .row.justify-content-evenly
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img08.png")
          .col-lg-6.col-12
            h4 Características de la satisfacción
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right(style="color:#FF6D4B")
                | Se mide o determina desde la perspectiva del cliente, no de la empresa, la cual debe ser totalmente imparcial y recibir la información tal cual como es emitida por el cliente. 
              li 
                i.fas.fa-angle-right(style="color:#FF6D4B")
                | Se basa en los resultados obtenidos en el servicio por parte del cliente, es decir, mide la conformidad o complacencia con la cual se sintió atendido. 
              li 
                i.fas.fa-angle-right(style="color:#FF6D4B")
                | No necesariamente es la realidad, los gustos de las personas y prioridades son diferentes en todos los usuarios. 
              li 
                i.fas.fa-angle-right(style="color:#FF6D4B")
                | Existen influencias externas: otros clientes, familiares, redes sociales. 
              li 
                i.fas.fa-angle-right(style="color:#FF6D4B")
                | Influye totalmente el estado de ánimo con el que se encuentre el cliente.  Se ha logrado determinar que existe una relación directa entre el estado de ánimo y la toma de decisiones. Las emociones son fundamentales.
      .py-3.py-md-4(titulo="Expectativas")
        .row.justify-content-evenly
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img09.png")
          .col-lg-6.col-12
            h4 Expectativas
            p.mb-4 Son aquellas esperanzas o anhelos con los cuales el cliente piensa que se “den las cosas”. En este aspecto, puede influir la mercadotecnia. Se debe tener especial cuidado porque, a veces, en la presentación de la empresa, se ofrece más de lo que es capaz de solventar y luego se ve en apuros. Una cosa son los retos y otra la capacidad para enfrentarlos. Se producen por: 
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right(style="color:#FF6D4B")
                | Promesas que expresa la empresa dentro de la publicidad o la negociación.
              li 
                i.fas.fa-angle-right(style="color:#FF6D4B")
                | La experiencia obtenida al haber empleado el servicio anteriormente.
              li 
                i.fas.fa-angle-right(style="color:#FF6D4B")
                | La experiencia y promesas de los servicios en la competencia. 
              li 
                i.fas.fa-angle-right(style="color:#FF6D4B")
                | Opiniones de las personas que influyen en una decisión.


    p.mb-5 A continuación, se describen las herramientas más utilizadas por las empresas u organizaciones para medir la satisfacción del cliente:

    
    div.d-flex.align-items-center.mb-5
      div.p-0
        img.mb-0(style="width:32px" src="@/assets/curso/tema1/img10.png")
      div.px-2
        h3.mb-0 Encuestas de satisfacción      
        
    p.mb-4 Las encuestas son una herramienta ampliamente empleada en todo lo relacionado con investigación y facilitan la recolección de información a través de la comunicación directa con el cliente. Es importante que estas encuestas sean eficientes, es decir, que tomen poco tiempo para que sean resueltas por el cliente; que sean claras y concisas, que aborden los puntos importantes del servicio y que los resultados no sean manipulables; ofreciendo oportunidad de expresar lo que el cliente desea. 

    .row.justify-content-evenly.d-flex.align-items-center.mb-5.fondo1
      .col-lg-4.col-12
        p.mb-lg-0.mb-3 <b>Permiten la obtención de los niveles de satisfacción.       La metodología más empleada es a través de preguntas.  Las siguientes son algunas clases de preguntas:</b>
      .col-lg-2.col-12
        .tarjeta1.py-3.mb-lg-0.mb-3
          div.d-flex.justify-content-center.mb-3
            img.mb-0(style="width:109px" src="@/assets/curso/tema1/img11.png")
          p.mb-0.text-center Opción múltiple con respuesta única.
      .col-lg-2.col-12
        .tarjeta1.py-3.mb-lg-0.mb-3
          div.d-flex.justify-content-center.mb-3
            img.mb-0(style="width:109px" src="@/assets/curso/tema1/img12.png")
          p.mb-0.text-center Opción múltiple con varias respuestas.
      .col-lg-2.col-12
        .tarjeta1.py-3.mb-lg-0.mb-3
          div.d-flex.justify-content-center.mb-3
            img.mb-0(style="width:109px" src="@/assets/curso/tema1/img13.png")
          p.mb-0.text-center Preguntas con respuesta abierta.

    p.mb-4 Es importante manejar un lenguaje claro y simple, una redacción coherente, que haya solo una interpretación del contenido y se cuente con las instrucciones para resolver el cuestionario.
    p.mb-5 A continuación, se describen algunas de las ventajas y desventajas del uso de preguntas con opciones de respuesta múltiples:

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      p.titulo <b>Tabla 1.</b> <i>Ventajas y desventajas del uso de preguntas con opciones de respuesta múltiples</i>

    .tabla-b.color-acento-contenido.mb-5            
      table
        tr
          th(style="background-color: #483876;")
            h4.mb-0.text-center(style="color: white") Ventajas 
          th(style="background-color: #483876;")
            h4.mb-0.text-center(style="color: white") Desventajas       
        tr
          td.br Permiten la realización de un análisis estadístico: a través de los datos obtenidos se puede validar la tendencia de los aspectos de forma general y democrática.
          td Se limitan las respuestas; estas preguntas no permiten que el cliente exprese alguna particularidad importante que esté afectando la operación y que no es fácilmente percibida por los empresarios.
        tr
          td.br Manejo de información con respuestas específicas, es decir, que se puede abordar el punto deseado en la encuesta; los resultados son específicos, de ahí la importancia en la redacción apropiada de la pregunta.
          td Las respuestas son parcializadas; los clientes, por la premura del tiempo, pueden contestar sin sinceridad y los resultados pueden no ser reales.
        tr
          td.br Procesamiento en menos tiempo: dada la información concisa y directa, es más fácil su procesamiento, análisis y resultados.
          td La precisión de las respuestas posiblemente no permite evaluar la verdadera opinión de los clientes; al ser cerradas, pueden llevar al cliente a contestar convenientemente lo que el empresario desea obtener.

    p.mb-4 Las siguientes son algunas de las ventajas y desventajas de usar <b>preguntas con opciones de respuesta abierta</b>:

    .row.justify-content-center.mb-5
      .col-lg-6.col-12.px-5.py-4.mb-lg-0.mb-3(style="background-color:#ffdad2; border-radius: 20px 0 0 20px")
        div.d-flex.justify-content-center
          img.mb-4(style="width:125px" src="@/assets/curso/tema1/img14.png")
        h4.text-center.mb-4 Ventajas
        ul.lista-ul--color
            li 
              i.fas.fa-angle-right(style="color:#5B4794")
              | Se obtiene una amplia información, que puede abarcar más aspectos que el empresario puede manejar para mejorar procesos.
            li 
              i.fas.fa-angle-right(style="color:#5B4794")
              | El cliente puede expresar lo que quiere.
            li 
              i.fas.fa-angle-right(style="color:#5B4794")
              | El cliente se siente importante porque su opinión cuenta.
      .col-lg-6.col-12.px-5.py-4(style="background-color:#f2edff; border-radius: 0 20px 20px 0")
        div.d-flex.justify-content-center
          img.mb-4(style="width:125px" src="@/assets/curso/tema1/img15.png")
        h4.text-center.mb-4 Desventajas
        ul.lista-ul--color
            li 
              i.fas.fa-angle-right(style="color:#FF6D4B")
              | Mayor tiempo en la realización de la encuesta para el cliente, ya que debe pensar sus respuestas claramente.
            li 
              i.fas.fa-angle-right(style="color:#FF6D4B")
              | El cliente no quiere contestar encuestas de este tipo por “pereza”.
            li 
              i.fas.fa-angle-right(style="color:#FF6D4B")
              | Mucha información recolectada, por ende, más tiempo en su procesamiento y obtención de conclusiones eficientes.
    p.mb-5 A continuación, se enuncian los tipos más comunes de encuestas de satisfacción del cliente:
    
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.titulo <b>Tabla 2.</b> <i>Tipos más comunes de encuestas de satisfacción.</i>

        .tabla-b.color-acento-contenido           
          table
            tr
              th(style="background-color: #483876;" colspan=2)
                h4.mb-0.text-center(style="color: white") Tipos de encuestas               
            tr
              td.br <b>Voz del cliente</b>
              td Incluyen preguntas personalizadas directamente a los clientes, que ayudan a la toma de decisiones.
            tr
              td.br <b>Productos</b>
              td Permiten desarrollar productos o servicios nuevos; comprenden aspectos de características, costo, uso y calidad del producto o servicio.
            tr
              td.br <b>Servicios</b>
              td Miden la respuesta del empresario y sus aspectos de capacidad, facilidad de acceso y rapidez en la atención. Se mide el desempeño y permite percibir las mejoras en los procesos.
            tr
              td.br <b>Transacciones directas</b>
              td Se emplean cuando es necesaria una retroalimentación inmediata después de la negociación.
            tr
              td.br <b>General</b>
              td Útil para evaluar de forma general la empresa u organización; se conocen también como “encuesta de relaciones”, miden la relación con los clientes.

    div.d-flex.align-items-center.mb-5
      div.p-0
        img.mb-0(style="width:32px" src="@/assets/curso/tema1/img10.png")
      div.px-2
        h3.mb-0 Fidelización de clientes  

    .row.justify-content-center.mb-5
      .col-lg-6.col-12 
        p.mb-lg-0.mb-3 La fidelización hace referencia a la elección de un cliente por un servicio prestado o un producto entregado, en varias ocasiones e, inclusive, en años. Este aspecto es uno de los métodos que demuestran la satisfacción de los clientes, saber cuánto tiempo llevan con la empresa a la cual han contribuido en su crecimiento o fortalecimiento. La idea de identificar la fidelización es para saber con quiénes se cuenta.  Se ha demostrado que son quienes compran o adquieren los servicios o productos innovadores, es decir, que les gusta lo que se ofrece y cómo se hace; por lo que contribuye a generar ventajas que ayudan al incremento de clientes y referencias positivas. 
      .col-lg-6.col-12 
        img.mb-0(src="@/assets/curso/tema1/img16.png")

    div.d-flex.align-items-center.mb-5
      div.p-0
        img.mb-0(style="width:32px" src="@/assets/curso/tema1/img10.png")
      div.px-2
        h3.mb-0 Índice de quejas y reclamos

    p.mb-4 Esta metodología es la más adecuada para la mejora continua de un negocio, ya que se conocen de primera mano las no conformidades o desacuerdos de los clientes y permite analizar la satisfacción de los clientes luego de solucionarlas. A continuación, se profundiza en los conceptos para mayor claridad:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-12
        img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img17.png") 
      .col-lg-8.col-12
        .row.justify-content-center.mb-4
          .col-lg-6.col-12.d-flex
            div.p-3.w-100.mb-lg-0.mb-3( style="background-color: #e2faf7; border-radius:12px")
              .d-flex.justify-content-center.mb-4
                img.mb-0(style="width:80px" src="@/assets/curso/tema1/img18.png")
              h4.text-center Queja
              p.text-center.mb-0 Corresponde a un desacuerdo, descontento o insatisfacción por alguna situación determinada dentro del proceso del servicio o producto. 

          .col-lg-6.col-12.d-flex
            div.p-3.w-100(style="background-color: #e2faf7; border-radius:12px")
              .d-flex.justify-content-center.mb-4
                img.mb-0(style="width:80px" src="@/assets/curso/tema1/img19.png")
              h4.text-center Reclamación
              p.text-center.mb-0 Corresponde a un requerimiento oficial ante la organización, ya que hay consecuencias perjudiciales para el cliente, por daños o perjuicios, lo cual puede involucrar situaciones jurídicas por ir en contravía de la negociación o términos que la rigen contemplados en las normas.

        p.mb-0 Se recomienda hacer un seguimiento estricto sobre estos procesos, para solucionar y enmendar la mayor cantidad de situaciones que se puedan presentar, mejorando la calidad del servicio. Es importante que se cuente con un sistema de información que permita procesar los datos y con el cual se puedan tomar decisiones asertivas. 

    div.d-flex.align-items-center.mb-5
      div.p-0
        img.mb-0(style="width:32px" src="@/assets/curso/tema1/img10.png")
      div.px-2
        h3.mb-0 Entrevistas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.col-12
        p.mb-5 Dentro de las entrevistas, se encuentra:
        div.px-4.mb-4 
          div.p-0(style="border-top:2px solid #B7BDC6")

        div.d-flex.align-items-center.mb-4
          div.p-0
            img.mb-0(style="min-width:63px; width:63px" src="@/assets/curso/tema1/img21.png")
          div.px-3
            h4 Informal
            p.mb-0 Es una charla con el cliente respecto a algunos aspectos que quieran tratar; el asesor que la realiza solo toma apuntes para considerar algunos puntos.

        div.px-4.mb-4 
          div.p-0(style="border-top:2px solid #B7BDC6")

        div.d-flex.align-items-center.mb-4
          div.p-0
            img.mb-0(style="min-width:63px; width:63px" src="@/assets/curso/tema1/img22.png")
          div.px-3
            h4 Formal de salida 
            p.mb-0 Es una metodología empleada cuando se finaliza una relación comercial, situación que puede finalizar en malos términos, lo cual dificulta conocer las decisiones o situaciones que llevaron al cliente a terminar la relación comercial. El tiempo que quiera designar el cliente para realizarla es incierto. 

        div.px-4.mb-4 
          div.p-0(style="border-top:2px solid #B7BDC6")
      .col-lg-4.col-10
         img.mb-0( src="@/assets/curso/tema1/img20.png")
    
    .row.justify-content-evenly.d-flex.align-items-center.mb-5
      .col-lg-6.col-10
        img.mb-0( src="@/assets/curso/tema1/img23.png")
      .col-lg-6.col-12
        p.mb-4 Lo principal que se pretende conocer bajo esta modalidad es:
        ul.lista-ul--color.mb-4
          li 
            i.fas.fa-angle-right(style="color:#FF6D4B")
            | Motivo principal o varios por los cuales tomó la decisión de finalizar la relación comercial.
          li 
            i.fas.fa-angle-right(style="color:#FF6D4B")
            | Desde cuándo se ha visto motivada la decisión y por qué.
          li 
            i.fas.fa-angle-right(style="color:#FF6D4B")
            | Qué podría hacerse para mejorar los aspectos que dieron origen a su decisión. 

        p.mb-0 Se recomienda el uso de preguntas abiertas, para que el cliente exprese honestamente sus argumentos. No se debe poner en “entredicho” su decisión. Al final, lo importante es determinar las razones por las cuales el cliente tomó la determinación de finalizar la relación comercial y lo que ocurrió, para que no suceda con otros clientes.

    div.d-flex.align-items-center.mb-5
      div.p-0
        img.mb-0(style="width:32px" src="@/assets/curso/tema1/img10.png")
      div.px-2
        h3.mb-0 Calificación del servicio

    p.mb-5 Esta metodología busca establecer el índice de satisfacción de los clientes. Es una forma fácil y rápida de conocer su percepción en determinados servicios. Tiene la ventaja de ser rápida y concisa, por lo que los clientes tienden a colaborar más en dar respuestas. Normalmente, se emplea una escala de rango con un valor mínimo y máximo de valoración, lo que facilita su cómputo y manejo.  La siguiente imagen muestra un ejemplo de este tipo de medición: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.col-12
        img.mb-0(src="@/assets/curso/tema1/img24.png")
        figcaption Nota: Ejemplo escala de valoración

    div.d-flex.align-items-center.mb-5
      div.p-0
        img.mb-0(style="width:32px" src="@/assets/curso/tema1/img10.png")
      div.px-2
        h3.mb-0 Clientes por recomendación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-12
        p.mb-4 Esta metodología, sin duda, puede aportar mucho para medir la satisfacción de los clientes.  Uno de los aspectos más importantes para un cliente es saber que se cuenta con una experiencia previa en el servicio o producto. El que un amigo o conocido recomiende a alguien se vuelve una tendencia muy común a la hora de contratar para solucionar una necesidad. El cliente se convierte en un portavoz de la empresa. 
        p.mb-lg-0.mb-3 Se calcula mediante el conteo de clientes que recomiendan a otros clientes sobre el total de clientes. Se determina el índice y la idea es que debe tender a 1. 
      .col-lg-6.col-10
        img.mb-0(src="@/assets/curso/tema1/img25.png")


</template>

<script>
export default {
  name: 'Tema1',
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

<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas de verificación

    .row.justify-content-center.d-flex.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-6.col-10
        img.mb-lg-0.mb-3( src="@/assets/curso/tema4/img01.png")
      .col-lg-6.col-12
        p.mb-0 Las técnicas de verificación de los servicios se refieren a la implementación de estrategias que permitan el control de la calidad de los servicios, bajo un proceso o procedimiento basado en lineamientos establecidos por las normas relacionadas. Como el transporte se configura como un servicio, se profundizará en este aspecto y no en técnicas de verificación de productos, que, aunque en algunos puntos puedan tener similitudes, el alcance es mucho mayor en el servicio porque impacta a más usuarios y sectores productivos del país. 

    .row.justify-content-center.d-flex.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.col-10
        img.mb-lg-0.mb-3( src="@/assets/curso/tema4/img02.png")
      .col-lg-8.col-10
        p.mb-4 Existen dos características que se deben considerar para la verificación de los productos y son:
        ol.lista-ol--cuadro.lista-ol--separador.mb-0
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ffba5b")
              span(style="color: #12263F") 1
            | Que el uso del servicio se realiza de forma simultánea a la producción, porque es inmediato: me transporto o necesito una carga.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ffba5b")
              span(style="color: #12263F") 2
            | Que son inseparables porque los servicios no se pueden independizar de la fuente de producción.
          li
    
    p.mb-5 Lo anterior es lo que genera que la verificación no sea tan sencilla como se quisiera, porque es imposible evitar que el cliente no presencie, viva o sienta inconformismo por el servicio. Lo importante de estas técnicas es tratar de disminuir los riesgos que se puedan ocasionar con las problemáticas estudiadas; para esto, se propone separar los elementos que intervienen en el servicio para que se puedan controlar de forma individual.

    .row.justify-content-center.d-flex.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12.col-12
        h4.text-center.mb-5 Verificación
        .row.justify-content-center
          .col-lg-2.col-7
            div.p-lg-2.p-0.mb-lg-0.mb-5
              img.mb-lg-0.mb-2( src="@/assets/curso/tema4/img17.svg")
              p.mb-0.text-center.d-xl-none <b>Cliente</b>
          .col-lg-2.col-7
            div.p-lg-2.p-0.mb-lg-0.mb-5
              img.mb-lg-0.mb-2( src="@/assets/curso/tema4/img18.svg")
              p.mb-0.text-center.d-xl-none <b>Prestador del servicio</b>
          .col-lg-2.col-7
            div.p-lg-2.p-0.mb-lg-0.mb-5
              img.mb-lg-0.mb-2( src="@/assets/curso/tema4/img19.svg")
              p.mb-0.text-center.d-xl-none <b>Objetivos del servicio</b>
          .col-lg-2.col-7
            div.p-lg-2.p-0.mb-lg-0.mb-5
              img.mb-lg-0.mb-2( src="@/assets/curso/tema4/img20.svg")
              p.mb-0.text-center.d-xl-none <b>Localidades</b>
          .col-lg-2.col-7
            div.p-lg-2.p-0.mb-lg-0.mb-5
              img.mb-lg-0.mb-2( src="@/assets/curso/tema4/img21.svg")
              p.mb-0.text-center.d-xl-none <b>Equipos y tecnología</b>
        div.d-none.d-lg-block
          .row.justify-content-center
            .col-lg-2
              div.p-lg-2.p-0.mb-lg-0.mb-3              
                p.mb-0.text-center <b>Cliente</b>
            .col-lg-2
              div.p-lg-2.p-0.mb-lg-0.mb-3              
                p.mb-0.text-center <b>Prestador del servicio</b>
            .col-lg-2
              div.p-lg-2.p-0.mb-lg-0.mb-3              
                p.mb-0.text-center <b>Objetivos del servicio</b>
            .col-lg-2
              div.p-lg-2.p-0.mb-lg-0.mb-3              
                p.mb-0.text-center <b>Localidades</b>
            .col-lg-2
              div.p-lg-2.p-0.mb-lg-0.mb-3              
                p.mb-0.text-center <b>Equipos y tecnología</b>
    .row.justify-content-center.d-flex.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10.col-12    
        figcaption Nota: Elementos a tener en cuenta en la verificación

    .row.justify-content-center.d-flex.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6.col-12
        p.mb-4 Para poder verificar a través de un sistema de inspección, es indispensable establecer las variables parametrizadas de:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right(style="color:#FF6D4B")
            | ¿Qué características se van a evaluar?
          li 
            i.fas.fa-angle-right(style="color:#FF6D4B")
            | ¿Qué variables considerar en la evaluación o atributos?
          li 
            i.fas.fa-angle-right(style="color:#FF6D4B")
            | ¿Qué rango evaluar? Es decir, el tamaño del modelo. Ej. Gestión documental: 10 oficinas que manejan documentación. Elegir 2.
          li 
            i.fas.fa-angle-right(style="color:#FF6D4B")
            | ¿Con qué frecuencia evaluar? Definir periodos, primer semestre, anual, mensual, depende de las problemáticas que se encuentren.
          li 
            i.fas.fa-angle-right(style="color:#FF6D4B")
            | ¿Dónde y cómo registrar la información de la revisión? Deben existir formatos definidos por el sistema integrado de gestión de la organización.
      .col-lg-6.col-10
        img.mb-0( src="@/assets/curso/tema4/img04.png")

    p.mb-0 La verificación se puede llevar a cabo a través de varias modalidades, dependiendo de lo definido anteriormente, y puede desarrollarse a través de reuniones de los directivos para la revisión de informes de gestión, control, desempeño y auditorías internas o externas, además, algunos entes de control que validan el cumplimiento de la misionalidad de las entidades encargadas de prestar servicios públicos y donde se ha invertido dinero público, por tener una afectación de orden nacional. 
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1	Informes de gestión

    .row.justify-content-center.d-flex.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.position-relative(style="background-color: #ffeed6")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img23.png')})`}"
          )
          //img.mb-0(src="@/assets/curso/tema4/img22.png")
          .bloque-texto-g__texto.p-4
            p.mb-0 El informe de gestión es un documento mediante el cual se pueden presentar una serie de datos que demuestran los alcances, logros y, en sí, la gestión realizada por el departamento o grupo que lo elabora. Se debe plantear considerando los objetivos particulares de cada departamento y los objetivos misionales de la organización, porque deben estar alineados o articulados. En sí, toda la gestión realizada en una empresa deberá demostrar cómo es su aporte para el logro de los objetivos del empresario.              
            
    p.mb-5 Además de demostrar los logros, se deben reflejar todas aquellas vicisitudes o retos que se enfrentaron, debe haber algún registro de la experiencia obtenida y presentarla para que los directivos puedan solucionar los conflictos o inconformidades que hayan surgido en el periodo del informe si se sale de la discrecionalidad de quien lo presenta, es decir, porque incluye decisiones que se salen de sus capacidades en la toma de decisiones, ya sea porque impacta económicamente a la organización o jurídicamente. 
    p.mb-4 Dentro del informe de gestión se encuentran elementos de tipo: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8.col-12
        AcordionA.mb-lg-0.mb-3(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-end(titulo="Financiero")
            .col-lg-11.col-12
              p.mb-0 Presenta balances de pasivos, activos, capital, movimientos, ventas y demás datos que incluyan este aspecto.
          .row.justify-content-end(titulo="Satisfacción")
            .col-lg-11.col-12
              p.mb-0 Se divide en la del cliente y la de los empleados, reflejará los datos obtenidos en las encuestas y se narra la estrategia realizada y los resultados con los análisis respectivos.
          .row.justify-content-end(titulo="Analíticos")
            .col-lg-11.col-12
              p.mb-0 Abordan problemas específicos, que pueden ser solicitados por los directivos como seguimiento a alguna situación surgida o porque alguno de los colaboradores considera pertinente presentar dicha información porque impacta a la organización.
      .col-lg-4.col-10
        img.mb-0(src="@/assets/curso/tema4/img06.png")

    p.mb-4 La ruta que se recomienda a la hora de formular un informe de gestión comprende los siguientes pasos:
    
    TabsA.color-acento-contenido.mb-5(data-aos="fade-left")   
      .tarjeta.p-4(style="background-color: #e6e2ee" titulo="Paso 1")
        .row.justify-content-center.mb-0
          .col-lg-5.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img07.png")
          .col-lg-7.col-12
            h4 Paso 1
            p.mb-0 Establecer la meta, es decir, definir para qué se presenta y su alcance.
      .tarjeta.p-4(style="background-color: #e6e2ee" titulo="Paso 2")
        .row.justify-content-center.mb-0
          .col-lg-5.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img08.png")
          .col-lg-7.col-12
            h4 Paso 2
            p.mb-0 Definir y seleccionar la información que se requiere. Importante considerar las funciones y obligaciones del cargo que se ejerce y las funciones del departamento.
      .tarjeta.p-4(style="background-color: #e6e2ee" titulo="Paso 3")
        .row.justify-content-center.mb-0
          .col-lg-5.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img09.png")
          .col-lg-7.col-12
            h4 Paso 3
            p.mb-0 Organizar los datos de forma ordenada, coherente y clara, porque si se requiere alguna validación, es importante contar con un buen registro y gestión documental que respalde la información presentada.
      .tarjeta.p-4(style="background-color: #e6e2ee" titulo="Paso 4")
        .row.justify-content-center.mb-0
          .col-lg-5.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img10.png")
          .col-lg-7.col-12
            h4 Paso 4
            p.mb-0 Presentar la información de forma adecuada. Algunas entidades u organizaciones manejan formatos. Es importante conocer a fondo el sistema integrado de gestión de la organización y acoger los formatos. Algunos directivos prefieren algo ejecutivo, sencillo y conciso, con tablas, figuras, gráficos. Se recomienda que conozca las preferencias de la presentación de sus jefes directos para evitar llamados de atención por inadecuada presentación.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-10.col-12.py-3(style="background-color:#ffefec; border-left: 9px solid #FF6D4B")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-6.d-flex.justify-content-center
            img.mb-lg-0.mb-3(style="width:103px" src="@/assets/curso/tema2/img17.svg")
          .col-lg-10.col-12
            .row.justify-content-start.d-flex.align-items-center.mb-2
              .col-lg-12.col-12
                p.mb-4 Para profundizar el tema de la elaboración de informes, se invita a leer el siguiente artículo, que puede ayudar a presentar un buen informe de gestión: Cómo Hacer un Informe + 55 Ejemplos y Plantillas Editables.
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-9.col-12
                    a.anexo.mb-0(href="https://es.venngage.com/blog/plantillas-informe-anual/" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p(style="font-size:14px") <b>Enlace web.</b> Cómo Hacer un Informe + 55 Ejemplos y Plantillas Editables.
                        p.mb-0(style="font-size:14px") https://es.venngage.com/blog/plantillas-informe-anual/
            p.mb-0.text-end(style="font-size:13px") Fuente: Dambon (2020).


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2	Informe de control

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.col-10
        img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img11.png")
      .col-lg-7.col-12
        .cajon.color-acento-contenido.p-4.py-2.mb-2(style="background-color: #ffeed6")
          p.mb-0 El informe de control se relaciona con aquella actividad que se realiza de forma interna o externa para validar el cumplimiento de los objetivos en las distintas dependencias de la organización, que deben estar alineados con los objetivos misionales; pueden ser de control interno o externo, realizados por un tercero totalmente imparcial o por entes de control gubernamentales. 
        p.mb-0 En estas revisiones, se presentan las inconformidades u oportunidades de mejora que se suscitan de los diferentes procesos o procedimientos establecidos por la misión y objetivos de la organización. Las inconformidades o hallazgos presentan varios niveles, que se relacionan con el impacto que genera la incidencia correspondiente.  Estas pueden ser de diversa índole.
    
    p.mb-4 Cada hallazgo tiene elementos que lo caracterizan, por ejemplo:
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      p.titulo <b>Tabla 3.</b> <i> Características de los hallazgos</i>

    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-right")
      table
        tr
          th(style="background-color: #483876;")
            h4.mb-0.text-center(style="color: white") Condición 
          th(style="background-color: #483876;")
            h4.mb-0.text-center(style="color: white") Criterio       
          th(style="background-color: #483876;")
            h4.mb-0.text-center(style="color: white") Causa
          th(style="background-color: #483876;")
            h4.mb-0.text-center(style="color: white") Efecto
        tr
          td.br.text-center Inconformidad encontrada.
          td.br.text-center Lo que debe ser.
          td.br.text-center Razones observadas durante el análisis.
          td.text-center Consecuencia cuantitativa o cualitativa del daño ocasionado.
    
    p.mb-4 De acuerdo con estos elementos, se clasifican en:

    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-left")        
      table
        tr
          th( colspan=2 style="background-color: #483876;")
            h4.mb-0.text-center(style="color: white") Clasificación de hallazgos           
        tr
          td.br.text-center Administrativos
          td Faltas de la persona al no cumplir con los actos administrativos, respuestas a requerimientos, funciones u obligaciones de orden administrativo. Se solucionan con planes de mejoramiento.
        tr
          td.br.text-center Fiscales
          td Evidencia alguna de afectación a los recursos públicos, ya sea por omisión o por acción indebida de procesos. Se establecen responsabilidades fiscales y administrativas sancionatorias, la idea es recaudar lo perdido.
        tr
          td.br.text-center Penales
          td Evidencia o configura algún delito; se traslada a fiscalía para que continúen con la investigación.
        tr
          td.br.text-center Disciplinarios
          td Identifica un mal proceder de algún funcionario y debe remitirse a la procuraduría para que continúen con la investigación.

    p.mb-0 Una vez obtenido el informe preliminar, se puede objetar con el respectivo soporte de corrección y, si el ente de control lo considera, puede retractarse por falta de información, si no, deberá continuar el proceso.     
    
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3	Informe de desempeño

    p.mb-4 El informe de desempeño se relaciona con el orden laboral, es decir, la forma como se presenta la información recolectada a partir de las evaluaciones realizadas al talento humano, donde se reflejan o concluyen las condiciones de habilidades de los colaboradores y se evalúa su desempeño.
    p.mb-4 La información que se debe presentar debe ser concisa, cuidadosa y organizada; por lo menos contendrá:

    .row.justify-content-center.align-items-center.mb-lg-5.mb-3(data-aos="fade-right")
      .col-lg-12.col-12.px-lg-5.px-0
        .row.justify-content-center.mb-0
          .col-lg-4.col-md-9.col-12.d-flex
            .TFcontainer.mb-lg-0.mb-3.p-0
              img.TFimage(src='@/assets/curso/tema4/img12.png')
              .TFoverlay.d-flex.align-items-top
                .p-4.tarjetica1.w-100
                  h4.mb-4.text-center Datos de la empresa
                  p.text-center Los básicos mínimos como NIT, nombre o razón social, contacto.
          .col-lg-4.col-md-9.col-12.d-flex
            .TFcontainer.mb-lg-0.mb-3.p-0
              img.TFimage(src='@/assets/curso/tema4/img13.png')
              .TFoverlay.d-flex.align-items-top
                .p-4.tarjetica1.w-100
                  h4.mb-4.text-center Datos del empleado
                  p.text-center Nombre, identificación, cargo en el que labora y tiempo de antigüedad en la organización.
          .col-lg-4.col-md-9.col-12.d-flex
            .TFcontainer.mb-lg-0.mb-3.p-0
              img.TFimage(src='@/assets/curso/tema4/img14.png')
              .TFoverlay.d-flex.align-items-top
                .p-4.tarjetica1.w-100
                  h4.mb-4.text-center Referencias
                  p.text-center O convenciones de las letras o elementos que requieran descripción, rangos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12.col-12.px-lg-5.px-0
        .row.justify-content-center.mb-0
          .col-lg-4.col-md-9.col-12.d-flex
            .TFcontainer.mb-lg-0.mb-3.p-0
              img.TFimage(src='@/assets/curso/tema4/img15.png')
              .TFoverlay.d-flex.align-items-top
                .p-4.tarjetica1.w-100
                  h4.mb-4.text-center Áreas para evaluar por separado
                  p.text-center Personal, social y técnica. Cada una con sus competencias.
          .col-lg-4.col-md-9.col-12.d-flex
            .TFcontainer.mb-lg-0.mb-3.p-0
              img.TFimage(src='@/assets/curso/tema4/img16.png')
              .TFoverlay.d-flex.align-items-top
                .p-4.tarjetica1.w-100
                  h4.mb-4.text-center Datos del evaluador
                  div.d-flex.p-0.justify-content-center
                    p.text-center Quien realiza la evaluación o la presenta.


    p.mb-0 Se usan para validar los rendimientos del personal, la salud mental y su efecto en el clima organizacional; presenta los aspectos que el colaborador debe mejorar para optimizar su labor. Los directivos pueden tomar decisiones sobre el personal de contratación, reconocimientos, ascensos o retiros, basados en esos resultados.
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

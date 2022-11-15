<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos del servicio al cliente en una empresa de transporte

    .row.justify-content-center.d-flex.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7.col-12
        p.mb-4 El servicio al cliente, como se ha mencionado anteriormente, es una de las estrategias que ha tomado fuerza en los últimos años, porque se ha logrado determinar que, al establecer y entender la relación entre el cliente o usuario final y las organizaciones o empresas, es posible dinamizar el mejoramiento del servicio y entrar a competir con nuevas tecnologías e innovaciones, ya que estos son dinámicos o cambiantes en el tiempo.
        p.mb-lg-0.mb-3 El servicio al cliente, en conclusión, es el conjunto de tácticas que desarrolla la organización o empresa para mejorar el logro de su objetivo misional, por esta razón, se ha convertido en una “cultura del servicio con calidad”, es decir que, así como los demás procesos que intervienen para la operación de la organización, de producción, documentación, logística y transporte, talento humano, hace parte de los procesos de la gestión de la calidad, entrando en el ciclo <b>PHVA</b> (Planificar, Hacer, Verificar y Actuar), para que la información y demás aspectos que lo componen alimenten esa mejora continua que se espera sea constante en la organización, evaluando las estrategias implementadas para la comercialización y demás involucradas en el servicio y detectar los errores, aciertos de los procesos y las acciones de mejora.
      .col-lg-5.col-10
        img.mb-0( src="@/assets/curso/tema2/img01.png")

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-10.col-12.py-3(style="background-color:#fff8ed; border-left: 9px solid #FFBA5B")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-6.d-flex.justify-content-center
            img.mb-lg-0.mb-3(style="width:117px" src="@/assets/curso/tema2/img02.png")
          .col-lg-10.col-12
            .row.justify-content-start.d-flex.align-items-center.mb-2
              .col-lg-11.col-12
                p.mb-4 Para revisar información complementaria sobre esta temática, se invita a leer el material complementario Fundamentos del Servicio al Cliente de la Aviación Comercial: 
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-9.col-12
                    a.anexo.mb-0(:href="obtenerLink('downloads/fundamenteosservicioalcliente.pdf')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg")
                      .anexo__texto
                        p Anexo. Fundamentos servicio al cliente.pdf
            p.mb-0.text-end(style="font-size:13px") Fuente: Diago (2005).


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1	Indicadores de calidad KPI

    p.mb-4 Para poder establecer los indicadores de calidad, primero se debe profundizar en los aspectos relacionados con la misma definición de lo que significa la calidad en los procesos empresariales, ya que se puede concluir que la calidad en el servicio ofrecido por el personal comprometido y capacitado demuestra a sus clientes un interés por el servicio, reflejando un manejo con respuestas claras a sus clientes, mejorando la satisfacción, fidelización y, por ende, mejor rentabilidad, lo que beneficia a toda la organización.
    p.mb-5 Identificar o perfilar a los clientes es fundamental porque:

    .row.justify-content-center.align-items-center.mb-lg-5.mb-3(data-aos="fade-left")
      .col-lg-12.col-12.px-lg-5.px-0
        .row.justify-content-center.mb-0
          .col-lg-4.col-12.d-flex
            .tarjeta1.py-5.px-3.mb-lg-0.mb-3
              .div.d-flex.justify-content-center
                img(style="width:132px" src="@/assets/curso/tema2/img03.svg")
              h4.text-center.mb-4 <i>Por qué</i>
              p.mb-0.text-center Se conoce <b>por qué</b> es cliente; este aspecto ayuda a deducir las fortalezas que describen la calidad del servicio o producto ofertado.
          .col-lg-4.col-12.d-flex
            .tarjeta1.py-5.px-3.mb-lg-0.mb-3
              .div.d-flex.justify-content-center
                img(style="width:132px" src="@/assets/curso/tema2/img04.svg")
              h4.text-center.mb-4 <i>Cuándo, cómo y dónde</i>
              p.mb-0.text-center Se conoce <b>cuándo, cómo y dónde</b> se percibió al cliente; este aspecto permite evaluar las estrategias comerciales y publicitarias de las organizaciones. 
          .col-lg-4.col-12.d-flex
            .tarjeta1.py-5.px-3.mb-0
              .div.d-flex.justify-content-center
                img(style="width:132px" src="@/assets/curso/tema2/img05.svg")
              h4.text-center.mb-4 <i>Gustos y preferencias</i>
              p.mb-0.text-center Se determinan <b>los gustos y preferencias</b>; este aspecto permite organizar a los clientes por rangos, para entender tendencias de los mercados y así crear nuevas estrategias que fortalezcan a la empresa. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12.col-12.px-lg-5.px-0
        .row.justify-content-center.mb-0
          .col-lg-4.col-12.d-flex
            .tarjeta1.py-5.px-3.mb-lg-0.mb-3
              .div.d-flex.justify-content-center
                img(style="width:132px" src="@/assets/curso/tema2/img06.svg")
              h4.text-center.mb-4 <i>Necesidades</i>
              p.mb-0.text-center Se logran definir las <b>necesidades</b> de los clientes y diseñar estrategias que optimicen los servicios
          .col-lg-4.col-12.d-flex
            .tarjeta1.py-5.px-3.mb-lg-0.mb-3
              .div.d-flex.justify-content-center
                img(style="width:132px" src="@/assets/curso/tema2/img07.svg")
              h4.text-center.mb-4 <i>Quién</i>
              p.mb-0.text-center Se logra definir <b>quién</b> es el cliente: lo que permite clasificarlo, identificar qué otros servicios se le puede ofertar y abrir el espacio para la fidelización.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.col-12
        p.mb-4 En resumen, la calidad percibida por los clientes depende de un análisis muy completo de su perfil, de sus necesidades y lo que se ofrece. Entendiendo esto, se puede profundizar en la validación de la calidad en los procesos de las empresas del transporte.
        p.mb-3 <b>Los indicadores de calidad estarán enmarcados en los siguientes aspectos: </b>
        
        ul.lista-ul--color.mb-3
          li 
            i.fas.fa-angle-right(style="color:#FF6D4B")
            | Efectividad
          li 
            i.fas.fa-angle-right(style="color:#FF6D4B")
            | Eficacia 
          li 
            i.fas.fa-angle-right(style="color:#FF6D4B")
            | Eficiencia para la competitividad
        
        p.mb-lg-0.mb-3 La calidad en la gestión logística y el transporte está relacionada desde la planificación hasta el proceso de la gestión en la cadena de suministro.
      .col-lg-6.col-10
        img(src="@/assets/curso/tema2/img08.png")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-10
        img.mb-lg-0.mb-3(src="@/assets/curso/tema2/img09.png")
      .col-lg-9.col-12
        p.mb-4 Los indicadores de calidad no solo se destinan para evaluar la calidad de los productos o servicios al final, basándose en los estándares establecidos en manuales de calidad de la organización que fundamentan las políticas, sino que deben estar formulados bajo estándares internacionales de calidad; por tal razón, es indispensable el conocimiento e implementación de la norma ISO 9001, ya que, a través de la propuesta que se realiza, se consideran los aspectos relacionados a operaciones, procesos y actividades implicados en la cadena de suministro de forma integral. Hacer partícipes a las empresas dentro de este esquema les permite fortalecer sus servicios y competitividad para competir a nivel internacional. 
        p.mb-0 Todos los procesos relacionados con la prestación del servicio hacen parte de la cadena logística, por lo tanto, al incluir la estrategia de control de calidad bajo la normativa, se pueden establecer los siguientes indicadores que son imprescindibles, estos se pueden homologar a cualquier servicio de transporte.  Seguramente, darán origen a otros que particularicen algunos aspectos especiales de los distintos servicios, pero que pueden considerarse de forma general.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8.col-12
        AcordionA.mb-lg-0.mb-3(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Relación costo/beneficio")  
            .col-lg-2.col-6
              .p-0.d-flex.justify-content-center
                img.mb-lg-0.mb-3(style="min-width:85px; max-width:85px" src="@/assets/curso/tema2/img11.svg")
            .col-lg-9.col-12
              p.mb-0 La calidad prestada no puede verse nunca afectada por una reducción de costos, pensando solo en los beneficios económicos para el empresario, porque finalmente el cliente es quien determina si usa o no, si refiere o no a la empresa y sus servicios. Se debe entender que el beneficio debe ser mutuo, cliente-empresario, y es por eso que los indicadores que hacen parte de este aspecto deben definir los límites mínimos y máximos de calidad, para que se busquen estrategias alternativas que reduzcan costos pero que no se salgan del equilibrio con el beneficio.
          .row.justify-content-center(titulo="Tiempos")  
            .col-lg-2.col-6
              .p-0.d-flex.justify-content-center
                img.mb-lg-0.mb-3(style="min-width:85px; max-width:85px" src="@/assets/curso/tema2/img12.svg")
            .col-lg-9.col-12
              p.mb-0 La reducción del tiempo es fundamental, la utilización adecuada de los recursos en sincronía para disminuir el tiempo destaca habilidades en logística y confiabilidad para los clientes. Los tiempos pueden ser reducidos con una buena gestión, de forma general, en los procesos que acompañan el servicio de transporte, en la carga o en los pasajeros.
          .row.justify-content-center(titulo="Nivel de satisfacción del cliente")  
            .col-lg-2.col-6
              .p-0.d-flex.justify-content-center
                img.mb-lg-0.mb-3(style="min-width:85px; max-width:85px" src="@/assets/curso/tema2/img13.svg")
            .col-lg-9.col-12
              p.mb-0 Incluye la opinión de los clientes, que, como se estudió en el numeral 1 del presente componente formativo, son fundamentales para conocer el punto de vista objetivo del usuario final del servicio.
          .row.justify-content-center(titulo="Operaciones de logística inversa")  
            .col-lg-2.col-6
              .p-0.d-flex.justify-content-center
                img.mb-lg-0.mb-3(style="min-width:85px; max-width:85px" src="@/assets/curso/tema2/img14.svg")
            .col-lg-9.col-12
              p.mb-0 Contempla aspectos como tiempos de recogida y devolución, para el caso de mercancías, y costos que afectaron al cliente, pérdidas cualitativas o cuantitativas e impactos medioambientales y sociales.
      .col-lg-4.col-10
        img.mb-0(src="@/assets/curso/tema2/img10.png")

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-12.d-flex
        .tarjeta2.w-100.py-5.px-4.mb-lg-0.mb-3
          .p-0.mb-5
            img.mb-5(style="width:54px" src="@/assets/curso/tema2/img15.svg")
          h4.mb-4 Cantidad de carga o usuarios
          p.mb-0 Capacidad, cantidad de requerimientos o necesidades de clientes y medidas físicas.
      .col-lg-3.col-12.d-flex
        .tarjeta2.w-100.py-5.px-4.mb-lg-0.mb-3
          .p-0.mb-5
            img.mb-5(style="width:54px" src="@/assets/curso/tema2/img15.svg")
          h4.mb-4 Administrar tiempo y distancias
          p.mb-0 Eficiencia del proceso.
      .col-lg-3.col-12.d-flex
        .tarjeta2.w-100.py-5.px-4.mb-lg-0.mb-3
          .p-0.mb-5
            img.mb-5(style="width:54px" src="@/assets/curso/tema2/img15.svg")
          h4.mb-4 Seguridad en recursos
          p.mb-0 Los protocolos de seguridad permiten eficiencia en los procesos y aseguran un final “feliz”.
      .col-lg-3.col-12.d-flex
        .tarjeta2.w-100.py-5.px-4
          .p-0.mb-5
            img.mb-5(style="width:54px" src="@/assets/curso/tema2/img15.svg")
          h4.mb-4 Gastos
          p.mb-0 Seguimiento específico a gastos y rentabilidades. 

    p.mb-45 Los indicadores en el transporte contribuyen en la medición no solo de rendimientos de los vehículos, sino también de los demás actores de la cadena logística para determinar fortalezas y debilidades en la operación.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10.col-12
        img(src="@/assets/curso/tema2/img16.svg")
        figcaption Nota. Tomada de Mecalux (2019).

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-10.col-12.py-3(style="background-color:#edebf4; border-left: 9px solid #483876")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-6.d-flex.justify-content-center
            img.mb-lg-0.mb-3(style="width:103px" src="@/assets/curso/tema2/img17.svg")
          .col-lg-10.col-12
            .row.justify-content-start.d-flex.align-items-center.mb-2
              .col-lg-11.col-12
                p.mb-4 Para ampliar la información acerca de los indicadores de la gestión empresarial en empresas del transporte, se invita a estudiar el siguiente artículo investigativo: Indicadores de desempeño para empresas del sector logístico: Un enfoque desde el transporte de carga terrestre:
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-10.col-12
                    a.anexo.mb-0(href="https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0718-33052017000400707" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p(style="font-size:14px") <b>Enlace web.</b> 
                        p.mb-0(style="font-size:14px") https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0718-33052017000400707
            p.mb-0.text-end(style="font-size:13px") Fuente: Arango et al. (2017). 

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2	Política de infraestructura y medio ambiente

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.col-10
        img.mb-lg-0.mb-3(src="@/assets/curso/tema2/img18.png")
      .col-lg-6.col-12
        p.mb-0 La infraestructura y su relación con el medio ambiente corresponde a la implementación de lineamientos establecidos por políticas de orden internacional que han incentivado la introducción de conceptos como la sostenibilidad ambiental, que juegan un papel importante para el progreso de los países en el orden económico y productivo, proyectando la necesidad de incluirlos dentro de las organizaciones que quieren entrar a competir.  Se reconoce entonces como un punto a su favor muy alto, siempre y cuando esté bien direccionada, enfocada e implementada por sus actores.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-10
        img.mb-lg-0.mb-3(src="@/assets/curso/tema2/img19.png")
      .col-lg-9.col-12
        p.mb-3 Los indicadores de sostenibilidad ambiental tienen como objetivos:
        ul.lista-ul--color.mb-3
          li 
            i.fas.fa-angle-right(style="color:#FF6D4B")
            | Evaluar el progreso ambiental del sector.
          li 
            i.fas.fa-angle-right(style="color:#FF6D4B")
            | Integrar las preocupaciones ambientales en políticas sectoriales y económicas.
        p.mb-0 Esto quiere decir que todas aquellas acciones que un empresario y su organización realizan para armonizar e integrar el cuidado ambiental, disminuyendo el impacto ambiental e implementando el uso de los recursos de forma responsable con el medio ambiente, se vuelven sostenibles porque propenden por preservar e impactar en menor medida el medio ambiente.

    p.mb-5 Hay que tener en cuenta que el medio ambiente se puede ver afectado en varias situaciones que generan problemáticas cuantitativas y cualitativas, como:
    
    TabsB.color-acento-contenido.mb-5(data-aos="fade-left")
      .py-4.py-md-5(titulo="Impacto social" :icono="require('@/assets/curso/tema2/img20.svg')")
        .row.justify-content-center
          .col-lg-6.col-12      
            h4.mb-4 Impacto social
            p.mb-lg-0.mb-3 Puede afectar a la sociedad por los cambios que se generan en su entorno al crear u operar la empresa en un sector con una comunidad. Se pueden generar daños a la infraestructura por el peso de los vehículos, el tránsito de vehículos de gran escala que deterioren la infraestructura, daños en las zonas de esparcimiento y recreo de colegios, incremento de accidentalidad vial, reducción de tránsito por zonas de cargue y descargue.
          .col-lg-6.col-10   
            img.mb-lg-0.mb-3(src="@/assets/curso/tema2/img24.png")
      .py-4.py-md-5(titulo="Impacto ambiental" :icono="require('@/assets/curso/tema2/img21.svg')")
        .row.justify-content-center
          .col-lg-6.col-12      
            h4.mb-4 Impacto ambiental
            p.mb-lg-0.mb-3 Uso de aguas por lavado de vehículos, incremento de gases tóxicos, ruido por llegada y salida de vehículos de gran dimensión, uso inadecuado de residuos 3R (Reducir, Reutilizar y Reciclar).
          .col-lg-6.col-10   
            img.mb-lg-0.mb-3(src="@/assets/curso/tema2/img25.png")
      .py-4.py-md-5(titulo="Impacto tecnológico" :icono="require('@/assets/curso/tema2/img22.svg')")
        .row.justify-content-center
          .col-lg-6.col-12      
            h4.mb-4 Impacto tecnológico
            p.mb-lg-0.mb-3 La implementación de nuevas tecnologías que busquen esa integridad con el medio ambiente, utilizando vehículos más amigables con el medio ambiente, que reduzcan el impacto ambiental, es un puntaje muy positivo a las empresas. Además, con la implementación de las vías ITS (<i>gent transport systems</i> – Sistemas inteligentes de transporte) que adelanta el INVIAS en Colombia, se requiere que la actualización de los vehículos facilite sus fines de administración de información, seguridad nacional en carreteras y control de velocidades para disminución de accidentalidad vial.
          .col-lg-6.col-10   
            img.mb-lg-0.mb-3(src="@/assets/curso/tema2/img26.png")
      .py-4.py-md-5(titulo="Impacto económico" :icono="require('@/assets/curso/tema2/img23.svg')")
        .row.justify-content-center
          .col-lg-6.col-12      
            h4.mb-4 Impacto económico
            p.mb-lg-0.mb-3 Generación de nuevos empleos, incremento de oportunidad a sus empleados mejorando calidad de vida de la región.
          .col-lg-6.col-10   
            img.mb-lg-0.mb-3(src="@/assets/curso/tema2/img27.png")
            
    p.mb-4 No se puede perder de vista que todos estos ítems son cualitativos o cuantitativos y, por el hecho de ser medibles, arrojan cifras que se vuelven indicadores. 
    p.mb-5 Políticas como la implementación del Plan Estratégico de Seguridad Vial (PESV) están encaminadas a propender porque las empresas que tienen parque automotor controlen y vigilen los aspectos que dan origen a las problemáticas que influyen en la accidentalidad vial; allí se encuentran contenidas algunas acciones que hacen parte de los indicadores mencionados.
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-10.col-12.py-3(style="background-color:#fff8ed; border-left: 9px solid #FFBA5B")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-6.d-flex.justify-content-center
            img.mb-lg-0.mb-3(style="width:89px" src="@/assets/curso/tema2/img28.svg")
          .col-lg-10.col-12
            .row.justify-content-start.d-flex.align-items-center.mb-2
              .col-lg-11.col-12
                p.mb-4 Para revisar este tema con mayor detalle, se invita a leer el material complementario Políticas Cepal Naciones Unidas, donde se aborda a profundidad la infraestructura, transporte y logística, como fundamento para el desarrollo.
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-9.col-12
                    a.anexo.mb-0(:href="obtenerLink('downloads/PolíticasCepalNacionesUnidas.pdf')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg")
                      .anexo__texto
                        p Anexo. Políticas Cepal Naciones Unidas.pdf
            p.mb-0.text-end(style="font-size:13px") Fuente: Cipoletta et al. (2010).
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3	Indicadores del servicio al cliente

    p.mb-4 Los indicadores del servicio al cliente están relacionados con el seguimiento que se debe realizar a la medida o nivel de satisfacción del cliente, como se ha profundizado en el numeral 1 del presente documento. Una vez implementados los procesos de medición y seleccionados los tipos más convenientes para la actividad económica de operación de la empresa, se reflejan en los informes de gestión los indicadores que corresponden a esa medida final del servicio al cliente.
    p.mb-4 Para las empresas de transporte y logística, se reconocen algunos indicadores usados para el servicio al cliente, los cuales se clasifican en cuatro grandes grupos:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-3.col-md-6.col-12.d-flex
        .tarjeta3.py-5.px-3.mb-lg-0.mb-3(style="background-color: #ffe5a6")
          div.d-flex.justify-content-center.mb-4
            img.mb-lg-0.mb-3(style="width:160px" src="@/assets/curso/tema2/img29.svg")
          h4.text-center.mb-4 Tiempo 
          p.text-center.mb-0 Tiempo de respuesta a los clientes, procesamiento del pedido, tiempo de entrega.
      .col-lg-3.col-md-6.col-12.d-flex
        .tarjeta3.py-5.px-3.mb-lg-0.mb-3(style="background-color: #ffda7f")
          div.d-flex.justify-content-center.mb-4
            img.mb-lg-0.mb-3(style="width:122px" src="@/assets/curso/tema2/img30.svg")
          h4.text-center.mb-4 Costos 
          p.text-center.mb-0 Costo del servicio de transporte, costo por errores logísticos y devoluciones. 
      .col-lg-3.col-md-6.col-12.d-flex
        .tarjeta3.py-5.px-3.mb-lg-0.mb-3(style="background-color: #ffcb4c")
          div.d-flex.justify-content-center.mb-4
            img.mb-lg-0.mb-3(style="width:125px" src="@/assets/curso/tema2/img31.svg")
          h4.text-center.mb-4 Calidad 
          p.text-center.mb-0 Nivel de satisfacción, errores en despachos, empleados capacitados en atención al cliente.
      .col-lg-3.col-md-6.col-12.d-flex
        .tarjeta3.py-5.px-3.mb-lg-0.mb-3(style="background-color: #ffb500")
          div.d-flex.justify-content-center.mb-4
            img.mb-lg-0.mb-3(style="width:134px" src="@/assets/curso/tema2/img32.svg")
          h4.text-center.mb-4 Confiabilidad 
          p.text-center.mb-0 Cumplimientos de tiempo pactados, uso de tecnologías de información, trazabilidad de envíos, accidentalidad.  

    
    .row.justify-content-center.mb-0.fondo100(data-aos="fade-right")
      .col-lg-6.p-0                
        div.position-relative.p-0
          img.invisible(style="top:-0px;" src="@/assets/curso/tema2/img33.png")
          img.position-absolute(style="bottom:0%; height: 103.5%"  src="@/assets/curso/tema2/img33.png")
      .col-lg-6.d-flex.align-items-center(style="background-color:")
        .p-4          
          p.mb-4 A continuación, se encuentran algunos ejemplos de estos indicadores:
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right(style="color:#5B4794")
              | Porcentaje de personal capacitado en servicio al cliente.
            li 
              i.fas.fa-angle-right(style="color:#5B4794")
              | Porcentaje de clientes inconformes.
            li 
              i.fas.fa-angle-right(style="color:#5B4794")
              | Quejas y reclamos.
            li 
              i.fas.fa-angle-right(style="color:#5B4794")
              | Porcentaje de clientes por fidelización. 
</template>

<script>
export default {
  name: 'Tema2',
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

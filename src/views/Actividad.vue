<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad
      <ActividadController :cuestionario="cuestionario"/>

  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA)',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de conceptos técnicos sobre Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Durante la formulación del PUEAA, una empresa establece el siguiente objetivo: «Optimizar el consumo de agua mediante la implementación de acciones que reduzcan las pérdidas del sistema». ¿Qué característica de un objetivo está representada principalmente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Describe una actividad específica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Expresa el resultado que se pretende alcanzar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Establece un cronograma de ejecución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Define un indicador de seguimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Una organización plantea la siguiente meta: «Reducir el consumo de agua potable en un 12 % en los próximos dos años». Esta meta corresponde a una formulación:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cualitativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Operativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuantitativa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estratégica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes indicadores permite evaluar directamente la eficiencia en el uso del agua?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Volumen de agua consumida por unidad de producción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Número de empleados capacitados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Número de reuniones realizadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cantidad de proveedores contratados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Una empresa detecta pérdidas constantes debido a fugas en la red hidráulica interna. ¿Qué medida corresponde a una acción de corrección?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capacitar al personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reparar las tuberías deterioradas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Proteger la cuenca abastecedora.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Implementar campañas educativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes alternativas constituye una tecnología para reducir el consumo de agua en los puntos de uso?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Canal de drenaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Canal de riego.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pozo profundo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aireador para griferías.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Antes de adquirir un equipo para reducir el consumo de agua, una organización analiza la ficha técnica del fabricante. ¿Qué información es indispensable revisar?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color y diseño del equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La publicidad y material promocional del fabricante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La capacidad hidráulica y las condiciones de operación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El lugar donde fue comercializado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el propósito principal de la vigilancia tecnológica dentro del PUEAA?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar nuevas tecnologías y soluciones que mejoren la eficiencia en el uso del agua.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar las actividades establecidas en el plan de acción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar exclusivamente el presupuesto institucional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar el régimen de los servicios públicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Dentro del plan de acción del PUEAA, ¿qué elemento permite verificar el cumplimiento de una actividad?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El objetivo general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El indicador y el medio de verificación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El marco conceptual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La presentación del documento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Quién debe garantizar principalmente la disponibilidad de recursos para implementar las acciones establecidas en el PUEAA?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El operario de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La comunidad vecina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El proveedor de equipos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La alta dirección de la organización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Una organización compara varias tecnologías considerando la inversión inicial, los costos de mantenimiento, el ahorro esperado y la vida útil. ¿Qué tipo de análisis está realizando?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Análisis de la oferta hídrica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Análisis del balance de agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Análisis de costo-beneficio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Análisis del riesgo ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de las siguientes opciones describe correctamente la función de un objetivo dentro del PUEAA?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Establecer únicamente las actividades que debe realizar el personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definir el resultado que se pretende alcanzar mediante las acciones propuestas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar exclusivamente los costos de implementación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar los resultados obtenidos al finalizar el programa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de las siguientes características corresponde a una meta del PUEAA?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Describe únicamente una actividad de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establece un resultado esperado que puede ser medido en un periodo determinado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Define las responsabilidades de cada trabajador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presenta únicamente información sobre la infraestructura hidráulica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Una organización instala aireadores en las griferías para disminuir el caudal de salida y evitar consumos innecesarios. ¿Qué tipo de medida está implementando?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medida de compensación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medida de restauración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Medida de prevención.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Medida de emergencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Una empresa identifica una fuga en una tubería y procede a reemplazar el tramo deteriorado. ¿Qué tipo de acción está realizando?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acción de prevención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Acción de compensación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acción educativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Acción de corrección.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Una organización implementa una planta de tratamiento para utilizar nuevamente parte del agua generada durante sus procesos. ¿Cuál es el principal beneficio de esta tecnología?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el consumo de agua potable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la necesidad de realizar mediciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Favorecer la reutilización del recurso hídrico y disminuir la demanda de agua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar la generación de aguas residuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la función principal de un medidor inteligente dentro de una estrategia de uso eficiente del agua?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir físicamente el tamaño de las tuberías.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenar agua para periodos de escasez.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar y monitorear los consumos de agua para facilitar la identificación de variaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir todos los sistemas de tratamiento de agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Una organización desea aprovechar el agua proveniente de las precipitaciones para actividades que no requieren agua potable. ¿Qué alternativa tecnológica resulta pertinente?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Instalar únicamente canales de drenaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Construir un pozo profundo sin sistema de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Implementar una planta de tratamiento de aguas residuales exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Implementar un sistema de captación y almacenamiento de agua lluvia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál de las siguientes funciones corresponde al coordinador ambiental dentro de la implementación del PUEAA?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar exclusivamente las reparaciones de tuberías.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aprobar directamente todos los recursos financieros de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Coordinar las acciones relacionadas con la implementación y seguimiento del PUEAA.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Realizar únicamente las actividades operativas de limpieza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el propósito de la Ley 373 de 1997 en relación con el uso del agua en Colombia?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular exclusivamente los servicios públicos domiciliarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reglamentar de manera general todo el sector ambiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establecer el Programa para el Uso Eficiente y Ahorro del Agua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Definir únicamente los requisitos para la construcción de acueductos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Una organización quiere determinar si las acciones implementadas mediante el PUEAA han permitido reducir efectivamente el consumo de agua. ¿Cuál estrategia de seguimiento resulta más adecuada?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contabilizar únicamente el número de reuniones realizadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrar solamente la cantidad de trabajadores capacitados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Revisar únicamente el presupuesto destinado al programa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comparar los indicadores de consumo antes y después de implementar las acciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia comprensión de los conceptos relacionados con la Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad y demuestra apropiación de los contenidos relacionados con Proyección del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA).',
      mensaje_final_reprobado:
        'No se ha superado la actividad. Se recomienda revisar nuevamente el componente formativo e intentar otra vez la actividad.',
    },
  }),
}
</script>
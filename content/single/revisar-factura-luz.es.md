---
slug: revisar-factura-luz
title: Revisamos tu factura de la luz gratis
seo:
  title: Revisamos tu Factura de la Luz Gratis | Murcia y Alicante
  desc: Sube tu factura de la luz y te decimos en menos de 24 h si puedes pagar menos. Asesoramiento gratuito, claro y sin permanencias en Murcia y Alicante.

base: service
service_types:
- Asesoramiento en tarifas de luz
service_areas:
- San Pedro del Pinatar
- San Javier
- Los Alcázares
- Torre-Pacheco
- Pilar de la Horadada
- Orihuela Costa
- Torrevieja
- Región de Murcia
- Provincia de Alicante
header:
  hanchor: Revisamos tu factura de la luz gratis
  md: |
    Revisamos tu factura de la luz gratis

    Te respondemos en menos de 24 h · Sin permanencias · Sin letra pequeña

landing:
  intro:
    hanchor: Asesoramiento gratuito en tarifas de luz
    title: Paga lo justo por tu luz
    sub: Asesoramiento gratuito, claro y sin compromiso
    md: |
      Sube tu factura de la luz y la estudiamos por ti. Si hay una tarifa que te sale más barata, te lo decimos y te ayudamos a cambiarte. Si ya tienes la mejor opción, también te lo decimos.

      - ::schedule:: **Te atendemos en menos de 24 horas.**
      - ::verified:: **Mejoramos tu factura si es posible.** Comparamos tu caso con varias comercializadoras.
      - ::shield:: **Sin engaños ni permanencias.** Te explicamos cada cosa con claridad antes de que decidas.
      - ::star:: **Es gratis.** No te cobramos nada por el estudio ni por el cambio.

      [[Sube tu factura]](#revisar-factura)

  form:
    title: Sube tu factura
    sub: Te respondemos en menos de 24 horas
    label: Enviar factura
    inputs:
    - type: text
      name: Nombre
      label: Nombre
      req: true
    - type: phone
      name: Teléfono
      label: Teléfono o WhatsApp
      req: true
    - type: mail
      name: Email
      label: Email
      req: true
    - type: text
      name: Código postal
      label: Código postal
      req: true
    - type: file
      name: Factura
      label: Tu factura de la luz (PDF o foto)
      accept: .pdf,image/*
      max: 3
      req: true
    - type: select
      name: Tipo
      label: ¿Vivienda o negocio?
      items:
      - label: Vivienda
      - label: Negocio
    - type: check
      name: Placas
      label: Quiero saber también cuánto ahorraría con placas solares
    - type: area
      name: Comentarios
      label: Comentarios (opcional)
    consent: |
      Consiento que CÚPRICO INSTALACIONES ELÉCTRICAS S.L.U. use mis datos y mi factura para estudiar mi caso y contactarme y, solo si acepto una oferta, que los comunique a la comercializadora elegida para tramitar el contrato. Más información en la [política de privacidad](/privacidad/ "[nofollow blank]").

  steps:
    hanchor: Cómo funciona la revisión de tu factura
    title: Cómo funciona
    sub: Tres pasos, sin papeleo para ti
    md: |
      1. **Nos envías tu factura.** Con una foto desde el móvil es suficiente.
      2. **La estudiamos.** Miramos tu consumo, tu potencia contratada y lo que pagas, y lo comparamos con las comercializadoras con las que trabajamos.
      3. **Te llamamos en menos de 24 horas.** Te decimos cuánto puedes ahorrar. Si te interesa, hacemos el cambio por ti. Si no, no pasa nada.

  why:
    hanchor: Por qué tu factura de la luz es tan cara
    title: ¿Por qué pagas tanto?
    sub: Lo que más encarece la factura
    md: |
      - **Potencia contratada de más.** Mucha gente paga por más potencia de la que usa, todos los meses.
      - **Un precio del kWh alto.** Dos casas con el mismo consumo pueden pagar facturas muy distintas según la tarifa.
      - **Servicios añadidos.** Mantenimientos, seguros o asistencias que vienen incluidos y quizá no necesitas.
      - **No aprovechar las horas baratas.** Con algunas tarifas, mover parte del consumo a otras horas ya se nota.
      - **Sin placas solares.** Si tienes chalet o casa, producir tu propia luz es la forma de bajar la factura de verdad. Si quieres, te decimos cuánto ahorrarías.

  faqs:
  - title: ¿Cuánto cuesta el estudio?
    md: Nada. El estudio y el cambio de compañía son gratis para ti.
  - title: ¿Tengo que cambiarme de compañía?
    md: No. Te decimos lo que hemos encontrado y tú decides. Si ya tienes la mejor opción, te lo decimos.
  - title: ¿Hay permanencia?
    md: Te recomendamos solo tarifas sin permanencia, y te lo explicamos todo antes de firmar.
  - title: ¿Me quedaré sin luz al cambiar?
    md: No. El cambio de comercializadora es solo administrativo. No hay cortes, no se toca la instalación y el contador sigue siendo el mismo.
  - title: ¿Qué datos necesitáis?
    md: Con la factura es suficiente. Solo si decides cambiarte te pediremos los datos para el contrato.
  - title: ¿Atendéis a negocios?
    md: Sí, revisamos facturas de viviendas y de negocios en la Región de Murcia y en la provincia de Alicante.

tpl:
  sections:
  - file: _hero
  - file: factura-intro
  - file: factura-formulario
  - file: factura-pasos
  - file: factura-cara
  - file: factura-faq
  - file: resenas
  - file: contacto
---

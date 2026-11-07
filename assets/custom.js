// Cúprico · Evento GA4 "factura_enviada"
// Se lanza solo cuando el formulario de revisión de factura se envía con éxito
// (la plantilla dispara "submited-<id>" tras la respuesta OK del Apps Script).
// No se envía ningún dato personal.
document.addEventListener('submited-form-contacto', function () {
  var form = document.getElementById('form-contacto')
  if (!form || !form.querySelector('[name="Factura"]')) return
  if (typeof gtag !== 'function') return

  var tipoCampo = form.querySelector('[name="Tipo"]')
  var tipoValor = ((tipoCampo && tipoCampo.value) || '').toLowerCase()
  var tipo = /negocio|business/.test(tipoValor)
    ? 'negocio'
    : /vivienda|home/.test(tipoValor) ? 'vivienda' : 'sin_indicar'

  var placas = form.querySelector('[name="Placas"]')
  var idioma = (document.documentElement.lang || 'es').slice(0, 2) === 'en' ? 'en' : 'es'

  gtag('event', 'factura_enviada', {
    tipo: tipo,
    interes_placas: placas && placas.checked ? 'si' : 'no',
    idioma: idioma
  })
})

// Cúprico · Cargar GA4 en cada página si el visitante ya aceptó las cookies de análisis.
// La plantilla lo comprueba con "=== 'true'", pero el aviso de cookies guarda un contador (1, 2…),
// así que GA4 solo se cargaba en el momento de aceptar. Si se rechazan, la plantilla borra
// "controlcookieanalytics" y aquí no se carga nada.
;(function () {
  try {
    var aceptadas = !!localStorage.getItem('controlcookieanalytics')
    var esBot = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|lighthouse/i.test(navigator.userAgent)
    if (aceptadas && !esBot && typeof googleAnalytics === 'function') googleAnalytics()
  } catch (e) {}
})()

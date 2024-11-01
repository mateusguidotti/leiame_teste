function rastrearEvento(nomeDoBotao) {
  // Função para enviar o evento para o Google Analytics
  gtag('event', 'click', {
    'event_category': 'Botão',
    'event_label': nomeDoBotao,
    'value': 1
  })
}
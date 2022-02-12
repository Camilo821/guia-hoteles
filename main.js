var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
$(function(){
  $('.corousel').carousel({
    interval: 2000
  })
  $('#contacto').on('show.bs.modal', function (e) {
    console.log('modal abriendo')
  })
  $('#contacto').on('shown.bs.modal', function (e) {
    console.log('modal abierto')
  })
  $('#contacto').on('hidden.bs.modal', function (e) {
    console.log('modal cerrado')
  })
  $('#contacto').on('hidden.bs.modal', function (e) {
    console.log('modal cerrandose')
  })
  //haz que cuando se haga clic en el boton de id 'contactoBtn' se desabilite el boton de id 'contactoBtn'
  $('#contactoBtn').click(function(){
    $('#contactoBtn').prop('disabled', true);
  })
})      
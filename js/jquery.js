








$(document).ready(function () {
  var n = Math.floor(Math.random() * 27);
  $(`#${n}`).addClass("active");

  $('#next').click(function() {
    $('p').removeClass('active');
    let i = Math.floor(Math.random() * 27);
    $(`#${i}`).addClass('active');
  })

  $('#reset').click(function() {
    location.reload();
  })
}) ;



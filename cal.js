$('button').on('click', function(){
  if( $('#art').val() == '' ||  $('#sub-art').val() == '' || $('look').val() == ''){
    alert("제대로 입력되지 않았습니다");
  }
  let tmp = parseInt($('#art').val())*5 + parseInt($('#sub-art').val()) + parseInt($('#look').val());
  let zdg = (parseInt($('#sub-art').val()) + (parseInt($('#look').val()) / 3)) / 2;
  tmp = tmp / 15000;
  console.log(tmp)
  let printer = document.getElementById('gza-ret');
  printer.innerHTML = tmp.toFixed(3)
  printer = document.getElementById('zdg-ret');
  printer.innerHTML = Math.round(zdg)

})
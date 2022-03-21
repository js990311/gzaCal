$('button').on('click', function(){
  if( $('#art').val() == '' ||  $('#sub-art').val() == '' || $('look').val() == ''){
    alert("제대로 입력되지 않았습니다");
  }
  let tmp = parseInt($('#art').val())*5 + parseInt($('#sub-art').val()) + parseInt($('#look').val());
  let zdg = (parseInt($('#sub-art').val()) + (parseInt($('#look').val()) / 3)) / 2;
  tmp = tmp / 15000;
  let printer = document.getElementById('gza-ret');
  printer.innerHTML = tmp.toFixed(3)
  printer = document.getElementById('zdg-ret');
  printer.innerHTML = Math.round(zdg);
  $('td').removeClass('table-info');
  $('#gza-box').removeClass('alert-danger');
  $('#gza-box').removeClass('alert-warning');
  $('#gza-box').removeClass('alert-primary');
  $('#gza-box').addClass('alert-primary');
  $('#zdg-box').removeClass('alert-danger');
  $('#zdg-box').removeClass('alert-warning');
  $('#zdg-box').removeClass('alert-primary');
  $('#zdg-box').addClass('alert-primary');

  if(tmp >= 3.435){
    $('tr')[6].childNodes[3].classList.add('table-info');
    $('#gza-box').removeClass('alert-primary');
    $('#gza-box').addClass('alert-danger');
  }else if(tmp >= 1){
    $('tr')[5].childNodes[3].classList.add('table-info');
    $('#gza-box').removeClass('alert-primary');
    $('#gza-box').addClass('alert-danger');
  }else if(tmp>=0.233){
    $('tr')[4].childNodes[3].classList.add('table-info');
    $('#gza-box').removeClass('alert-primary');
    $('#gza-box').addClass('alert-warning');
  }else if(tmp>=0.1){
    $('tr')[3].childNodes[3].classList.add('table-info');
  }else if(tmp>=0.05){
    $('tr')[2].childNodes[3].classList.add('table-info');
  }else{
    $('tr')[1].childNodes[3].classList.add('table-info');
  }

  if(zdg >= 7933){
    $('tr')[6].childNodes[5].classList.add('table-info');
    $('#zdg-box').removeClass('alert-primary');
    $('#zdg-box').addClass('alert-danger');
  }else if(zdg >= 3333){
    $('tr')[5].childNodes[5].classList.add('table-info');
    $('#zdg-box').removeClass('alert-primary');
    $('#zdg-box').addClass('alert-danger');
  }else if(zdg>=667){
    $('tr')[4].childNodes[5].classList.add('table-info');
    $('#zdg-box').removeClass('alert-primary');
    $('#zdg-box').addClass('alert-warning');
  }else if(zdg>=333){
    $('tr')[3].childNodes[5].classList.add('table-info');
  }else if(zdg>=167){
    $('tr')[2].childNodes[5].classList.add('table-info');
  }else{
    $('tr')[1].childNodes[5].classList.add('table-info');
  }

})
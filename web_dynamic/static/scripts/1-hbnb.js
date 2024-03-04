$.('document').ready(function(){
  let checked = [];
  $('input[type="checkbox"]').change(function () {
    if($(this).is(':checked')){
      checked.push($(this).attr('data-id'));
    }
    else{
      checked = checked.filter((check)=>check != $(this).attr('data-id'));
    }
    $('.amenities h4').text(checked.join(', '));
  });
});

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
  const apiBaseURL = 'http://' + window.location.hostname + ':5001';

  $.ajax({
      url: `${apiBaseURL}/api/v1/status/`,
      type: 'GET',
      success: function (data) {
          if (data.status === 'OK') {
              $('#api_status').addClass('available');
          } else {
              $('#api_status').removeClass('available');
          }
      },
      error: function (error) {
          console.error('Error:', error);
      }
  });
});

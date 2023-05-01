// toggle menu
$('#menu-toggle').click(function(){
  
    $('#menu').slideToggle(200);
  })
  
  $(window).resize(function() {
    
    if(window.innerWidth > 650) {
  
      $('#menu').show();
    } else {
      $('#menu').hide();
    }
  })

//   main section
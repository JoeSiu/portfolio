(function ($) {
  'use strict';

  //remove preloader
  function removePreloader() {
    $('#loading-preloader')
      .delay(250)
      .fadeOut('slow', function () {
        $(this).remove();
      });
  }

  //remove preloader when skip loading link is clicked
  $("#skip-loading-link").click(function(e){
      removePreloader();
  });

  //remove preloader when window is loaded
  $(window).on('load', function () {
    removePreloader();
  });

  //show skip loading link if loading takes too long 
  $(function() {
    $("#skip-loading").delay(5000).fadeIn(500);
  });
  
})(window.jQuery);

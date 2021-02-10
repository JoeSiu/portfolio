(function ($) {
  'use strict';

  // Preloader
  $(window).on('load', function () {
    $('#loading-preloader')
      .delay(250)
      .fadeOut('slow', function () {
        $(this).remove();
      });
  });
})(window.jQuery);

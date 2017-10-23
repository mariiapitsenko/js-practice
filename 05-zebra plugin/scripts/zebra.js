(function($) {
  $.fn.zebra = function(options) {
    var settings = $.extend(
      {
        backgroundColor: "white",
        odd: true
      },
      options
    );

    return this.children(settings.children).css(
      {
      backgroundColor: settings.backgroundColor
    });
  };
})(jQuery);

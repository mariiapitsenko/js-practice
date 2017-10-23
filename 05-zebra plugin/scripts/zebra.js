(function($) {
  $.fn.zebra = function(options) {
    var settings = $.extend(
      {
        backgroundColor: "white"
      },
      options
    );

    return this.children(settings.children).css({
      backgroundColor: settings.backgroundColor
    });
  };
})(jQuery);

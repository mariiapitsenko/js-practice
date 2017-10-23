(function($) {
  $.fn.zebra = function(options) {
    
    var settings = $.extend(
      {
        backgroundColor: "white",
        odd: false
      },
    );
 
    return this.children(settings.children + settings.odd? ":odd": ":even").css(
      {
      backgroundColor: settings.backgroundColor
    });
  };

})(jQuery);

(function($) {
  $.fn.zebra = function(options) {
    
    var settings = $.extend(
      {
        backgroundColor: "#ccc",
        odd: false
      }, options
    );
 
    return this.each(function(index, el){
      jQuery(el).children(settings.children + (settings.odd? ":odd": ":even")).css(
        {
        backgroundColor: settings.backgroundColor
      });
    });

  };

})(jQuery);

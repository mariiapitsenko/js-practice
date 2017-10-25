(function($) {
  $.fn.myGallery = function(options) {
    var settings = $.extend(
      {
        $slider: "div.image-item",
        $prev: "a.slide-prev",
        $next: "a.slide-next"
      },
      options
    );
    return this.each(function() {
      var currentslide = 0;

      var $slider = $(this).find(".image-item"),
        $parent = $(this),
        $next = $parent.find(".slide-next"),
        $prev = $parent.find(".slide-prev");

      slide = function() {
        var item = $slider.eq(currentslide);
        $slider.hide();
        item.css("display", "inline-block");
        item.animate({ "opacity": "1"}, 1000 );
      };
      slide();
      next = function() {
        currentslide += 1;
        // prevS.animate({'opacity' : '0'}, 1000);
        
        // item.animate({'opacity' : '1'}, 1000);


        if (currentslide > $slider.length - 1) {
          currentslide = 0;
        }
        slide();
      };

      prev = function() {
        currentslide -= 1;

        if (currentslide < 0) {
          currentslide = $slider.length - 1;
        }
        slide();
      };

      $next.on("click", next);
      $prev.on("click", prev);
    });
  };
})(jQuery);

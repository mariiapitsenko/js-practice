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
      var prevSlide;
      var $slider = $(this).find(".image-item"),
        $parent = $(this),
        $next = $parent.find(".slide-next"),
        $prev = $parent.find(".slide-prev");
      $slider.eq(currentslide).css("opacity", "1");

      slide = function() {
        var item = $slider.eq(currentslide);
        $slider.eq(prevSlide).animate({ opacity: 0 });
        $slider.eq(currentslide).animate({ opacity: 1 });
      };

      next = function() {
        prevSlide = currentslide;
        currentslide += 1;
        
        if (currentslide > $slider.length - 1) {
          currentslide = 0;
        }
        slide();
      };

      prev = function() {
        prevSlide = currentslide;
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

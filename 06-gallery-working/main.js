$(function(){
    
$('.images').each(function(){

var currentslide = 0;
  
var $slider = $(this).find('.image-item'),
    $parent = $(this),
    $next = $parent.find(".slide-next"),
    $prev = $parent.find(".slide-prev");

// var $parentBtn = $(".nav-btn");
// var $next = $(".slide-next");
// var $prev = $(".slide-prev");

function slide() {
    var item = $slider.eq(currentslide);
    $slider.hide();
    item.css("display", "inline-block");
}
slide();
function next() {
currentslide += 1;

if(currentslide > $slider.length -1)  {
       currentslide = 0;
}
   slide();
}

function prev(){
currentslide -= 1;

if(currentslide < 0)  {                        
    currentslide = $slider.length -1;
    }
       slide();               
    }

$next.on("click", next);
$prev.on("click", prev);
});
});
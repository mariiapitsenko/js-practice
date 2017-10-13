$(document).ready(function() {
  //onclick change bckcolor and text-color
  $(".dark").click(function() {
    $("body").css("background-color", "black");
    $("body").css("color", "white");
  });
  $(".light").click(function() {
    $("body").css("background-color", "white");
    $("body").css("color", "black");
  });
  /*Create a function "addStyles" that has to:
 - add class name "text-primary" to the last "li" of the "we-do" list*/
  //- add class names "label" and "label-info" to the each link in this list
  $("#add_style").click(function() {
    $("#wedoList")
      .find("li:last-child")
      .addClass("text-primary");
    $("#wedoList")
      .children("ul>li")
      .find("a")
      .addClass("label label-info");
    //- create "Striped rows" for the table

    $("#table2")
      .find("tr:odd")
      .addClass("striped");
  });

  //create a function
  //- change text color of a paragraph (tag "p") to to the gray on the "mouseenter" event
  $("p").mouseenter(function() {
    $(this).css("color", "yellow");
  });
  $("p").mouseleave(function() {
    $(this).css("color", "inherit");
  });
  //Change background color of whole column and whole row on hover of each cell of the table
  $("td").hover(function() {
    $(this)
      .parent("tr")
      .toggleClass("hovered");
    $("td:eq(" + this.cellIndex + ")", "tr").toggleClass("hovered");
  });
}); //end of jq


  $(document).ready(function() {
    $("ul").zebra({
      children: "li:odd",
      backgroundColor: "#eeeeee"
    });
  });


  $(document).ready(function() {
    $("tbody").zebra({
      children: "tr:odd",
      backgroundColor: "#eeeeee"
    });
  });


  $(document).ready(function() {
    $("body").zebra({
      children: "a",
      backgroundColor: "#ffcccc"
    });
  });

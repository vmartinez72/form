$(document).ready(function(){
    $("#website").submit(function(event){
      var name = $("input#exampleInputName").val();
      var address = $("input#exampleInputaddress").val();

      $(".exampleInputName").append(name);
      $(".exampleInputAddress").append(address);

      $("#story").show();

      event.preventDefault();

    });
});

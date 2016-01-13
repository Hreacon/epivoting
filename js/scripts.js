$(document).ready(function(){
  $("form").submit(function(event){
    var age = parseInt($("#ageinput").val());
    if(age >= 18){
      $(".properage").show();
    }
    else $(".underage").show();
    $(".agechecker").hide();
    event.preventDefault();
  });
  $("#republican").click(function(){
    $(".republican").show();
    $(".properage").hide();
  });
  $("#democrat").click(function(){
    $(".democrat").show();
    $(".properage").hide();
  });

});

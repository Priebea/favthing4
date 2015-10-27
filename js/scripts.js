$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#favorite1").val();
    var person2Input = $("input#favorite2").val();
    var animalInput= $("input#favorite3").val();
    var exclamationInput = $("input#favorite4").val();
    var verbInput = $("favorite5").val();

    $(".favorite1").text(person1Input);
    $(".favorite2").text(person2Input);
    $(".favorite3").text(animalInput);
    $(".favorite4").text(exclamationInput);
    $(".favorite5").text(verbInput);

    $("#list").show();

    event.preventDefault();
  });
});

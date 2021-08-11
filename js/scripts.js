$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const beverage = $("#beverage").val();
    const flavor = $("input:radio[name=flavor]:checked").val();
    const dob = $("#born").val();
    const favoriteColor = $("#color").val();
    const result = beverage.concat(' ' + flavor + ' ' + dob + ' ' + favoriteColor)
    $("#output").text(result);
  });
});
$("textarea").keyup(function () {
  let maxim = 224;
  let x = $("textarea").val().length;
  let write = maxim - x;
  $(".character").text(write);
});

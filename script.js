$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#save-error").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});

$("#delete-check").click(function () {
   $("#card-delete").toggleClass("invisible");
});

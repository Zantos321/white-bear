// SAVE SUCCESS AND SAVE ERROR NOTIFICATIONS

$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#save-error").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});

//  DELETE CHECKMARK BUTTON ACTIVATE

$("#delete-check").click(function () {
   $("#card-delete").toggleClass("invisible");
});

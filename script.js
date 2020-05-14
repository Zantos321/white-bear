// SIGN UP VALIDATION

$("#signupVerify").click(function () {
   var emailInput = $("#signupEmail").val().length;
   if (emailInput == 0) {
      $("#signupEmailAlert").removeClass("d-none");
      return false;
   } else {
      $("#signupEmailAlert").addClass("d-none");
      return true;
   }
});

$("#signupVerify").click(function () {
   var passwordInput = $("#signupPassword").val().length;
   if (passwordInput < 9) {
      $("#signupPasswordAlert").removeClass("d-none");
      return false;
   } else {
      $("#signupPasswordAlert").addClass("d-none");
      return true;
   }
});

// LOGIN VALIDATION

$("#loginVerify").click(function () {
   var emailInput = $("#loginEmail").val().length;
   if (emailInput == 0) {
      $("#emailAlert").removeClass("d-none");
      return false;
   } else {
      $("#emailAlert").addClass("d-none");
      return true;
   }
});

$("#loginVerify").click(function () {
   var passwordInput = $("#loginPassword").val().length;
   if (passwordInput < 9) {
      $("#passwordAlert").removeClass("d-none");
      return false;
   } else {
      $("#passwordAlert").addClass("d-none");
      return true;
   }
});

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

// TEXTAREA COUNTER

$("#cardTextlg").keyup(function () {
   var textCount = $(this).val().length;
   console.log("textCount");
   $("#wordCount").text(textCount);
   if (0 == textCount <= 240) {
      $("#nextButton").addClass("disabled");
      $("#wordCount").addClass("text-danger");
      $("#wordMaximum").addClass("text-danger");
   } else {
      $("#nextButton").removeClass("disabled");
      $("#wordCount").removeClass("text-danger");
      $("#wordMaximum").removeClass("text-danger");
   }
});

$("#cardTextsm").keyup(function () {
   var textCount = $(this).val().length;
   console.log("textCount");
   $("#wordCount").text(textCount);
   if (0 == textCount <= 240) {
      $("#nextButton").addClass("disabled");
      $("#wordCount").addClass("text-danger");
      $("#wordMaximum").addClass("text-danger");
   } else {
      $("#nextButton").removeClass("disabled");
      $("#wordCount").removeClass("text-danger");
      $("#wordMaximum").removeClass("text-danger");
   }
});

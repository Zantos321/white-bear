// SIGN UP VALIDATION

var emailVerify = false;
$("#signupVerify").click(function () {
   // Check length of email
   var emailInput = $("#signupEmail").val().length;
   // Run a check to either allow email or to show a warning under email
   if (emailInput == 0) {
      $("#signupEmailAlert").removeClass("d-none");
      return false;
   } else {
      $("#signupEmailAlert").addClass("d-none");
      return (emailVerify = true);
   }
});

var passwordVerify = false;
$("#signupVerify").click(function () {
   // Check length of password
   var passwordInput = $("#signupPassword").val().length;
   // Check password to see if met requirement and eityher allow password by length or show a warning under password
   if (passwordInput < 9) {
      $("#signupPasswordAlert").removeClass("d-none");
      return false;
   } else {
      $("#signupPasswordAlert").addClass("d-none");
      return (passwordVerify = true);
   }
});

var emailPasswordVerify = false;
$("#signupVerify").click(function () {
   // Get email local part
   var emailLocal = $("#signupEmail").val().split("@")[0];
   // Check to see if password and local email match
   if ($("#signupPassword").val() === emailLocal) {
      $("#passwordMatchesEmailAlert").removeClass("d-none");
      $("#signupEmail").addClass("is-invalid");
      return false;
   } else {
      $("#passwordMatchesEmailAlert").addClass("d-none");
      $("#signupEmail").removeClass("is-invalid");
      return (emailPasswordVerify = true);
   }
});

$("#signupVerify").click(function () {
   if ((emailVerify = true)) {
      var now = new Date();
      var randomNumber = Math.floor(Math.random() * 100);
      var outputRandom = randomNumber.padStart(3, "0");

      var idNum =
         ("" + now.getMilliseconds()).padStart(3, "0") + "" + outputRandom;
      var emailLog = $("#signupEmail").val();
      var passwordLog = $("#signupPassword").val();
      var createdOn =
         "" +
         now.getYear() +
         "" +
         (now.getMonth() + 1) +
         "" +
         now.getDay() +
         "" +
         now.getHours() +
         "" +
         now.getMinutes() +
         "" +
         now.getSeconds();
      console.log("_id: " + idNum);
      console.log("email: " + emailLog);
      console.log("password: " + passwordLog);
      console.log("createdOn: " + createdOn);
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

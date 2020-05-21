// SIGN UP VALIDATION

$("#signupVerify").click(function () {
   // Calling Verification functions

   if (
      emailVerify() == true &&
      passwordVerify() == true &&
      emailPasswordVerify() == true &&
      commonPasswordVerify() == true
   ) {
      let emailLog = $("#signupEmail").val();
      let passwordLog = $("#signupPassword").val();
      console.log("_id: " + IDnumber());
      console.log("email: " + emailLog);
      console.log("password: " + passwordLog);
      console.log("createdOn: " + createdDate());
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
   //console.log("textCount");
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
   //console.log("textCount");
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

// Save imagery Counter and Log

$("#cardTextlg").keyup(function () {
   var textCount = $(this).val().length;
   //console.log("textCount");
   $("#wordCount").text(textCount);
   if (0 == textCount <= 240) {
      $("#save-imagery").addClass("disabled");
      $("#wordCount").addClass("text-danger");
      $("#wordMaximum").addClass("text-danger");
   } else {
      $("#save-imagery").removeClass("disabled");
      $("#wordCount").removeClass("text-danger");
      $("#wordMaximum").removeClass("text-danger");
   }
});

$("#cardTextsm").keyup(function () {
   var textCount = $(this).val().length;
   //console.log("textCount");
   $("#wordCount").text(textCount);
   if (0 == textCount <= 240) {
      $("#save-imagery").addClass("disabled");
      $("#wordCount").addClass("text-danger");
      $("#wordMaximum").addClass("text-danger");
   } else {
      $("#save-imagery").removeClass("disabled");
      $("#wordCount").removeClass("text-danger");
      $("#wordMaximum").removeClass("text-danger");
   }
});

$("#save-imagery").click(function () {
   console.log("_id: " + IDnumber() + ",");
   console.log(
      "imagery: " +
         `?x-${encodeURIComponent(
            "A delicious shishkebab but the first bite of meat after the pointy end is spicy & makes an exclamation point appear over my head like in a JRPG."
         )}` +
         ","
   );
   console.log(
      "answer: " +
         `?x-${encodeURIComponent(
            "The syntax for making a comment in HTML is <!-- Mike's comment here -->"
         )}` +
         ","
   );
   console.log("levelNum: " + "1" + ",");
   console.log("successfulAttemptNum: " + "0" + ",");
   console.log("createdOn: " + createdDate() + ",");
   console.log("lastAttemptedOn: " + createdDate());
});

// FUNCTIONS

// ID Function
function IDnumber() {
   // Get current date
   var now = new Date();
   // Generate first half of ID
   var getMillisecondsID = ("" + now.getMilliseconds()).padStart(3, "0");
   // Random 3 digit number for second half of ID
   var randomNumber = Math.floor(Math.random() * 1000);
   // Turn random number into a string
   var randomNumberString = String(randomNumber);
   // Pad string to have at least 3 digits
   var outputRandom = randomNumberString.padStart(3, "0");
   return getMillisecondsID + outputRandom;
}

// Date-Time Function
function createdDate() {
   var now = new Date();
   var yearFull = String(now.getFullYear());
   var year = yearFull.substring(2);
   // Unpadded dates
   var monthNoPad = String(now.getMonth() + 1);
   var dayNoPad = String(now.getDay());
   var hourNoPad = String(now.getHours());
   var minutesNoPad = String(now.getMinutes());
   var secondsNoPad = String(now.getSeconds());
   // Padded dates
   var month = monthNoPad.padStart(2, "0");
   var day = dayNoPad.padStart(2, "0");
   var hour = hourNoPad.padStart(2, "0");
   var minutes = minutesNoPad.padStart(2, "0");
   var seconds = secondsNoPad.padStart(2, "0");
   // Everything concatenated together to make a date code
   var createdOn = year + month + day + hour + minutes + seconds;
   return createdOn;
}

//Email Length Verification

function emailVerify() {
   // Check length of email
   var emailInput = $("#signupEmail").val().length;
   // Run a check to either allow email or to show a warning under email
   if (emailInput == 0) {
      $("#signupEmailAlert").removeClass("d-none");
      $("#signupEmail").addClass("is-invalid");
      return false;
   } else {
      $("#signupEmailAlert").addClass("d-none");
      $("#signupEmail").removeClass("is-invalid");
      $("#signupEmail").addClass("is-valid");
      return true;
   }
}

// Passsword Length Verification

function passwordVerify() {
   // Check length of password
   var passwordInput = $("#signupPassword").val().length;
   // Check password to see if met requirement and either allow password by length or show a warning under password
   if (passwordInput < 9) {
      $("#signupPasswordAlert").removeClass("d-none");
      $("#signupPassword").addClass("is-invalid");
      return false;
   } else {
      $("#signupPasswordAlert").addClass("d-none");
      $("#signupPassword").removeClass("is-invalid");
      $("#signupPassword").addClass("is-valid");
      return true;
   }
}

// Email-Password Comparison Verification

function emailPasswordVerify() {
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
      $("#signupEmail").addClass("is-valid");
      return true;
   }
}

// Common-Password Comparison Verification

function commonPasswordVerify() {
   // Get attempted user password
   let passwordInput = $("#signupPassword").val();
   // Filtered the password list
   let filteredCommonPasswords = commonPasswords.filter(function (passwordObj) {
      return passwordObj.length > 8;
   });
   // Check to see if the user password matches a common password from the list
   if (
      filteredCommonPasswords.some(function (commonPassword) {
         return commonPassword == passwordInput;
      })
   ) {
      $("#commonPasswordAlert").removeClass("d-none");

      $("#signupPassword").addClass("is-invalid");
      return false;
   } else {
      $("#commonPasswordAlert").addClass("d-none");
      $("#signupPassword").removeClass("is-invalid");
      $("#signupPassword").addClass("is-valid");
      return true;
   }
}

$("#signupButton").click(function () {
   $("#signup-collapse").addClass("collapse.show");
   $("#signup-collapse").removeClass("collapse");
   $("#signupButton").addClass("d-none");
});

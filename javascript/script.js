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

// Pasword Encryption

function passwordEncrypt() {
   let userPassword = $("#signupPassword").val().split(""); // grabbed password and spit it into an array
   //for loop to start comparing characters
   for (let count = 0; count < userPassword.length; ++count) {
      const character = userPassword[count];
      if (
         // used to isolate just letters capitalized letter char codes 65-90 lowercase letter chacrodes 97-122
         (userPassword[count].charCodeAt(0) >= 65 &&
            userPassword[count].charCodeAt(0) <= 90) ||
         (userPassword[count].charCodeAt(0) >= 97 &&
            userPassword[count].charCodeAt(0) <= 122)
      )
         if (character === "z") {
            // if character is a z
            userPassword[count] = "a"; // then make it an a
         } else if (character === "Z") {
            // if character is a Z
            userPassword[count] = "A"; // then make it an A
         } else {
            userPassword[count] = String.fromCharCode(
               // raises the charCodeAt by one for all other alphabetical characters
               userPassword[count].charCodeAt(0) + 1
            );
         }
   }
   return userPassword.join(""); // turns the array back into a string for logging
}

// CreateAccount Card Collapse Functionality
$("#signupButton").click(function () {
   $("#signup-collapse").addClass("collapse.show");
   $("#signup-collapse").removeClass("collapse");
   $("#signupButton").addClass("d-none");
});

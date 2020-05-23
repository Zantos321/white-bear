// SIGN UP VALIDATION

$("#signupVerify").click(function () {
   // Calling Verification functions

   if (
      emailVerify() == true &&
      garbageEmail() == true &&
      passwordVerify() == true &&
      emailPasswordVerify() == true &&
      commonPasswordVerify() == true
   ) {
      let emailLog = $("#signupEmail").val();
      let passwordLog = $("#signupPassword").val();
      console.log("_id: " + IDnumber());
      console.log("email: " + emailLog);
      console.log("password: " + passwordEncrypt());
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

// Garbage Email Verification

function garbageEmail() {
   let userEmail = $("#signupEmail").val().split("@")[0]; // took email local away from address
   let uniqueChars = ""; // empty string to put unique characters in
   for (let count = 0; count < userEmail.length; count++) {
      // for loop to sii if unique character
      if (uniqueChars.indexOf(userEmail.charAt(count)) === -1) {
         // use charAt to see if they are unique items with the same charCode as one allready ran will not be added
         uniqueChars += userEmail[count]; // added unique charcode to the list
      }
      if (uniqueChars.length > 2) {
         // if the unique list length is over 3, then the validation passes
         $("#garbageEmailAlert").addClass("d-none");
         return true;
      }
   }
   $("#garbageEmailAlert").removeClass("d-none"); // other wise it will retrun false
   return false;
}

// Passsword Length Verification

function passwordVerify() {
   // Check length of password
   var passwordInput = $("#signupPassword").val().length;
   // Check password to see if met requirement and either allow password by length or show a warning under password
   if (passwordInput < 9) {
      $("#signupPasswordAlert").removeClass("d-none");
      return false;
   } else {
      $("#signupPasswordAlert").addClass("d-none");
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
      return false;
   } else {
      $("#commonPasswordAlert").addClass("d-none");
      return true;
   }
}

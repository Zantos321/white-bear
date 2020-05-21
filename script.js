// SIGN UP VALIDATION

$("#signupVerify").click(function () {
   // Calling Verification functions
   emailVerify();
   passwordVerify();
   emailPasswordVerify();
   commonPasswordVerify();

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
      return false;
   } else {
      $("#signupEmailAlert").addClass("d-none");
      return true;
   }
}

// Passsword Length Verification

function passwordVerify() {
   // Check length of password
   var passwordInput = $("#signupPassword").val().length;
   // Check password to see if met requirement and eityher allow password by length or show a warning under password
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

// Common Password Array

const commonPasswords = [
   "x002tp00",
   "x4ww5qdr",
   "x72jhhu3z",
   "xaccess2",
   "xakep1234",
   "xboxlive",
   "xcalibur",
   "xcountry",
   "xenocide",
   "xenogear",
   "xenophobia",
   "xenophobic",
   "xenophon",
   "xexeylhf",
   "xianzong",
   "xiaoping",
   "xiaoyua123",
   "xinjiang",
   "xohzi3g4",
   "xpressmusic",
   "xsvnd4b2",
   "xsw21qaz",
   "xsw23edc",
   "xthtgfirf",
   "xtutdfhf",
   "xuanzang",
   "xuanzong",
   "xufrgemw",
   "xxx12345",
   "xxxp455w0rd5",
   "xxxxxxx1",
   "xyh28af4",
   "xylophone",
   "xzsawq21",
   "y'knowwhati'msayin",
   "y'understand",
   "yachting",
   "yaglasph",
   "yakovlev",
   "yakushova",
   "yamagata",
   "yamaha12",
   "yamahar1",
   "yamahar6",
   "yamakasi",
   "yamamoto",
   "yamanashi",
   "yamashita",
   "yammering",
   "yangzhou",
   "yankeemp",
   "yankees0",
   "yankees1",
   "yankees2",
   "yankees3",
   "yankees4",
   "yankees7",
   "yankees9",
   "yankovic",
   "yanochka",
   "yanshi1982",
   "yanukovych",
   "yarborough",
   "yarbrough",
   "yardbird",
   "yardbirds",
   "yardstick",
   "yarmouth",
   "yaroslav",
   "yaroslavl",
   "yasacrac",
   "yasuhiro",
   "ybrbnbyf",
   "ybrbnf_25",
   "ybrbnjcbr",
   "ybrjkftd",
   "ybrjkftdbx",
   "ybrjkftdyf",
   "ycwvrxxh",
   "yeahbaby",
   "yeahrigh",
   "yeahright",
   "year2000",
   "year2005",
   "yearbook",
   "yearbooks",
   "yearning",
   "yearnings",
   "yekaterinburg",
   "yelburton",
   "yelena03",
   "yellow12",
   "yellow22",
   "yellowhead",
   "yellowish",
   "yellowknife",
   "yellowstone",
   "yelverton",
   "yemenite",
   "yengeese",
   "yeomanry",
   "yes90125",
   "yeshivas",
   "yessenia",
   "yesterda",
   "yesterday",
   "yesterdays",
   "yfcnfcmz",
   "yfcntymrf",
   "yfcnz123",
   "yfcnzvjz",
   "yfcnzyfcnz",
   "yfdbufnjh",
   "yfeiybrb",
   "yfgjktjy",
   "yfhrjnbrb",
   "yfltymrf",
   "yfnfitymrf",
   "yfxfkmybr",
   "ygfxbkgt",
   "yggdrasi",
   "yielding",
   "yildirim",
   "yingling",
   "yingyang",
   "yitzchak",
   "yjdbrjdf",
   "yjdjcnbf",
   "yjdsqgfhjkm",
   "yjdsqujl",
   "yjdujhjl",
   "yjhbkmcr",
   "ym3cautj",
   "yogibear",
   "yogyakarta",
   "yohannan",
   "yokohama",
   "yokosuka",
   "yokozuna",
   "yorkshir",
   "yorkshire",
   "yorktown",
   "yorkville",
   "yosemite",
   "yoshihiro",
   "youandme",
   "youlanda",
   "youngblood",
   "youngest",
   "youngman",
   "youngone",
   "youngster",
   "youngsters",
   "youngstown",
   "yourmama",
   "yourmom1",
   "yourname",
   "yourself",
   "yourselves",
   "yousuck1",
   "youthful",
   "yoyodyne",
   "ypsilanti",
   "yqlgr667",
   "yqmbevgk",
   "yr8wdxcq",
   "ytdxz2ca",
   "ytngfhjkz",
   "ytnhjufnm",
   "ytrhjvfyn",
   "ytyfdbcnm",
   "yudhoyono",
   "yugoslav",
   "yugoslavia",
   "yugoslavian",
   "yuitre12",
   "yujyd360",
   "yuletide",
   "yushchenko",
   "yvelines",
   "yvtte545",
   "yxkck878",
   "yy5rbfsc",
   "yyyyyyy1",
   "yzerman1",
   "z1234567",
   "z123456789",
   "z123456z",
   "z1x2c3v4",
   "z1x2c3v4b5",
   "z1x2c3v4b5n6m7",
   "z1z2z3z4",
   "z3cn2erv",
   "zacatecas",
   "zacharia",
   "zachariah",
   "zacharias",
   "zachary1",
   "zaharova",
   "zakamatak",
   "zalewski",
   "zalgiris",
   "zamarripa",
   "zambales",
   "zamboanga",
   "zambrano",
   "zamindar",
   "zamoyski",
   "zanesville",
   "zantopia",
   "zanzibar",
   "zapatista",
   "zaphod42",
   "zaporizhia",
   "zapruder",
   "zaq!2wsx",
   "zaq11qaz",
   "zaq12345",
   "zaq123wsx",
   "zaq12qaz",
   "zaq12wsx",
   "zaq1xsw2",
   "zaq1xsw2cde3",
   "zaqwsx123",
   "zaqwsxcde",
   "zaqwsxcderfv",
   "zaqxsw123",
   "zaqxswcde",
   "zaragoza",
   "zaratustra",
   "zarzuela",
   "zasranec",
   "zatunica",
   "zawahiri",
   "zaxscdvf",
   "zbigniew",
   "zcfvfzkexifz",
   "zcxfcnkbdf",
   "zcxfcnkbdfz",
   "zealander",
   "zealanders",
   "zebra123",
   "zechariah",
   "zeebrugge",
   "zeitgeist",
   "zeitschrift",
   "zeljeznicar",
   "zemanova",
   "zendejas",
   "zenit2011",
   "zeppelin",
   "zeringue",
   "zerocool",
   "zesyrmvu",
   "zhaozong",
   "zhejiang",
   "zhengzhou",
   "zhjckfdf",
   "zhongguo",
   "zhongshan",
   "zhongshu",
   "zhongzong",
   "zhytomyr",
   "zidane10",
   "ziegfeld",
   "zielinski",
   "zigazaga",
   "ziggy123",
   "zildjian",
   "zillions",
   "zimbabwe",
   "zimbabwean",
   "zimmerma",
   "zimmerman",
   "zimmermann",
   "zinedine",
   "zinfandel",
   "zinoviev",
   "zionists",
   "zipdrive",
   "zippy123",
   "zirconia",
   "zirconium",
   "zjses9evpa",
   "zldej102",
   "zoidberg",
   "zolushka",
   "zombie13",
   "zookeeper",
   "zoological",
   "zoologist",
   "zooplankton",
   "zootsuit",
   "zoroaster",
   "zoroastrian",
   "zoroastrianism",
   "zoroastrians",
   "zorro123",
   "zpflhjn1",
   "zqjphsyf6ctifgu",
   "zrjdktdf",
   "zse45rdx",
   "zse4xdr5",
   "zsecyus56",
   "zucchero",
   "zucchini",
   "zuckerberg",
   "zuckerman",
   "zukowski",
   "zulfikar",
   "zulfiqar",
   "zvonareva",
   "zweibrucken",
   "zx123456",
   "zx123456789",
   "zxasqw12",
   "zxc12345",
   "zxc123456",
   "zxc123zxc",
   "zxcasd123",
   "zxcasdqw",
   "zxcasdqwe",
   "zxcasdqwe123",
   "zxcqweasd",
   "zxcv1234",
   "zxcv4321",
   "zxcvasdf",
   "zxcvb123",
   "zxcvb1234",
   "zxcvb12345",
   "zxcvbasdfg",
   "zxcvbn12",
   "zxcvbn123",
   "zxcvbn123456",
   "zxcvbnm.",
   "zxcvbnm1",
   "zxcvbnm12",
   "zxcvbnm123",
   "zxcvbnm123456789",
   "zxcvbnma",
   "zxcvbnmm",
   "zxcvbnmz",
   "zxcvfdsa",
   "zxcvvcxz",
   "zz123456",
   "zz8807zpl",
   "zzxxccvv",
   "zzzxxxccc",
   "zzzzxxxx",
   "zzzzzzz1",
];

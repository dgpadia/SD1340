$(function () {
    $('header').load('header.html');
    $('nav').load('nav.html');
    $('footer').load('footer.html');
});

function date() {
    var d = new Date();
    var mnth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var day = d.getDate();
    var month = mnth[d.getMonth()];
    var year = d.getFullYear();
    return month + ' ' + day + ', ' + year;
}

function validateForm() {
    var username = document.forms["Registration"]['usrName'].value;
    var password = document.forms["Registration"]["password"].value;
    var email = document.forms["Registration"]["mail"].value;
    var publicInfo = document.getElementsByName("contactInfo")[0].value;
    var update = document.getElementsByName("updates")[0].value;
    var ageValue = document.forms["Registration"]["age"].value;
    var usr = document.getElementById("usrName");
    var pswrd = document.getElementById("password");
    var eml = document.getElementById("mail");
    var dsplyPub = document.getElementById("publicInfoYesNo");
    var updt = document.getElementById("updatesYesNo");

    pswrd.addEventListener("keyup", function (event) {
        if (pswrd.validity.typeMismatch) {
            pswrd.setCustomValidity("Password must be at least 8 characters long and contain at least one letter and one number.");
        } else {
            pswrd.setCustomValidity("");
        }
    });

    eml.addEventListener("keyup", function (event) {
        if (eml.validity.typeMismatch) {
            eml.setCustomValidity("This needs to be a valid email.")
        } else {
            eml.setCustomValidity("");
        }
    });

    if (username == null || username == "" || password == null || password == "" || email == null || email == "" || publicInfo == null || publicInfo == "" || update == null || update == "") {
        alert("All forms and selections must be filled out. Description is optional");
        return false;
    } else if (!isPassword(password)) {
        alert("Password must be 8 characters and have at least one letter and one number");
        return false;
    } else if (!ageRange(ageValue)) {
        alert("You must be between 14 and 110 years old.");
        return false;
    } else {
        document.getElementById("receiver").innerHTML = "<h2>Username</h2><p>" + usr + "</p><h2>Email</h2><p>" + email + "</p><h2>Display Info:</h2><p>" + publicInfo + "</p><h2>Updates:</h2><p>" + update + "</p>";
        return true
    }
}

function resetForm() {
    document.getElementById('usrName').focus()
}

function isPassword(password) {
    if (password.length < 8)
        return false;
    var numChars = 0, nums = 0;
    var test = "qwertyuiopasdfghjklzxcvbnm";
    for (i = 0; i < password.length; i++) {
        if (isNumeric(password.charAt(i))) {
            nums++;
        }
        if (test.indexOf(password.charAt(i)) >= 0) {
            numChars++
        }
    }
    return numChars > 0 && nums > 0;
}

function ageRange(ageValue) {
    var ageYr = ageValue.substring(0, 4);
    var ageMo = ageValue.substring(5, 7) - 1;
    var ageDay = ageValue.substr(8);
    var age = new Date(ageYr, ageMo, ageDay);
    var today = new Date();
    if ((today.getFullYear() - ageYr) > 111 || (today.getFullYear() - ageYr) < 13) {
        return false
    }
    else if ((today.getFullYear() - ageYr) == 110) {
        return (ageMo > today.getMonth());
    }
    else if ((today.getFullYear() - ageYr) == 14) {
        return (ageMo < today.getMonth());
    } else {return true}
}

function isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

function stupidColorChange(color) {
    document.body.style.backgroundColor = color;
}

function helpIcon(divCont) {
    document.getElementById(divCont).style.display = "block";
}

function offIcon(divCont) {
    document.getElementById(divCont).style.display = "none";
    console.log("hide");
}

function displayContactInfo() {
    alert("Web Builder: \n     Daniel Padia \nPhone Number: \n     801-809-7261 \nEmail Address: \n     dgpadia@outlook.com")
}

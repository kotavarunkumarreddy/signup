function firstName() {
    let fName = document.getElementById('fname').value;

    let fnameRegEx = /^[A-Z][a-zA-Z ]{4,14}$/;
    if (!fnameRegEx.test(fName)) {
        document.getElementById('fname-err').innerHTML = 'FirstName should contain 5-15 characters';
        document.getElementById('fname').style.border = "2px solid red";
        document.getElementById('fname-err').style.color = "red";
    } else {
        document.getElementById('fname-err').style.display = 'none';
        document.getElementById('fname').style.border = '2px solid green';
    }
}
function userName() {
    const uName = document.getElementById('username').value;
    const uNameRegex = /^[A-Za-z0-9 ]{5,12}$/;
    if (!uNameRegex.test(uName)) {
        document.getElementById('username-err').innerHTML = 'FirstName should contain 5-12 characters';
        document.getElementById('username').style.border = "2px solid red";
        document.getElementById('username-err').style.color = "red";
    } else {
        document.getElementById('username-err').style.display = 'none';
        document.getElementById('username').style.border = '2px solid green';
    }
}
function email() {
    const email = document.getElementById('mail').value;
    const emailRegex = /^.+@[^@]+\.(com|in)$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-err').innerHTML = `Email should be a valid address, 
        e.g. me@mydomain.com`;
        document.getElementById('mail').style.border = "2px solid red";
        document.getElementById('email-err').style.color = "red";
        document.getElementById('email-err').style.display='block';
    } else {
        document.getElementById('email-err').style.display = 'none';
        document.getElementById('mail').style.border = '2px solid green';
    }
}
function password() {
    const pswd = document.getElementById('pswrd').value;
    const pswdRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,20}$/;
    if (!pswdRegex.test(pswd)) {
        document.getElementById('pswd-err').innerHTML = `Password should alphanumeric(@,_and-are also 
        allowed and between 8-20 charecters`;
        document.getElementById('pswrd').style.border = "2px solid red";
        document.getElementById('pswd-err').style.color = "red";
    } else {
        document.getElementById('pswd-err').style.display = 'none';
        document.getElementById('pswrd').style.border = '2px solid green';
    }
}

function mobile() {
    const mob = document.getElementById('tel').value;
    const mobRegex = /^[6-9]\d{9}$/;
    if (!mobRegex.test(mob)) {
        document.getElementById('mob-err').innerHTML = `Telephone shpould be a valid indian 
        telephone number (10 digits)`;
        document.getElementById('tel').style.border = "2px solid red";
        document.getElementById('mob-err').style.color = "red";
    } else {
        document.getElementById('mob-err').style.display = 'none';
        document.getElementById('tel').style.border = '2px solid green';
    }
}

function panv() {
    const pan = document.getElementById('pan').value;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panRegex.test(pan)) {
        document.getElementById('pan-err').innerHTML = `Must be a valid panCard Number`;
        document.getElementById('pan').style.border = "2px solid red";
        document.getElementById('pan-err').style.color = "red";
    } else {
        document.getElementById('pan-err').style.display = 'none';
        document.getElementById('pan').style.border = '2px solid green';
    }
}
$(document).ready(function () {
    $('#fnmaecheck').hide();
    $('#lnmaecheck').hide();
    $('#emailcheck').hide();
    $('#passworscheck').hide();
    $('#addrescheck').hide();
    $('#citycheck').hide();
    $('#zipcheck').hide();
    $('#numbercheck').hide();
    $('#searchcheck').hide();
    $('#datecheck').hide();
    $('#chboxcheck').hide();
    $('#timecheck').hide();
    $('#urlcheck').hide();

    var f_name = true;
    var l_name = true;
    var e_mail = true;
    var pass = true;
    var addr = true;
    var city = true;
    var zip = true;
    var num = true;
    var search = true;
    var date = true;
    var checkbox = true;
    var time = true;
    var turl = true;
    // first name velidation
    $('#inputFname4').keyup(function () {
        fname_check();
    });

    function fname_check() {

        var fname_val = $('#inputFname4').val();

        if (fname_val.length == '') {

            $('#fnmaecheck').show();
            $('#fnmaecheck').html('Please fill the first name!!');
            $('#fnmaecheck').focus();
            $('#fnmaecheck').css("color", "red");
            $('#inputFname4').css("border", "2px solid red");

            f_name = false;
            return false;

        }
        else {
            $('#fnmaecheck').hide();
            $('#inputFname4').css("border", "2px solid green");
        }

        if ((fname_val.length) < 3 || (fname_val.length) > 8) {

            $('#fnmaecheck').show();
            $('#fnmaecheck').html('User name must be in 3 and 8 charcter!');
            $('#fnmaecheck').focus();
            $('#fnmaecheck').css("color", "red");
            $('#inputFname4').css("border", "2px solid red");

            f_name = false;
            return false;

        }
        else {
            $('#fnmaecheck').hide();
            $('#inputFname4').css("border", "2px solid green");
        }

    }
    // last name velidation
    $('#inputLname4').keyup(function () {
        lname_check();
    });

    function lname_check() {

        var lname_val = $('#inputLname4').val();

        if (lname_val.length == '') {

            $('#lnmaecheck').show();
            $('#lnmaecheck').html('Please fill the last name!!');
            $('#lnmaecheck').focus();
            $('#lnmaecheck').css("color", "red");
            $('#inputLname4').css("border", "2px solid red");

            f_name = false;
            return false;

        }
        else {
            $('#lnmaecheck').hide();
            $('#inputLname4').css("border", "2px solid green");
        }

        if ((lname_val.length) < 3 || (lname_val.length) > 8) {

            $('#lnmaecheck').show();
            $('#lnmaecheck').html('User name must be in 3 and 8 charcter!');
            $('#lnmaecheck').focus();
            $('#lnmaecheck').css("color", "red");
            $('#inputLname4').css("border", "2px solid red");

            l_name = false;
            return false;

        }
        else {
            $('#lnmaecheck').hide();
            $('#inputLname4').css("border", "2px solid green");
        }
    }
    // Email vlidation
    $('#emailcheck').hide();
    $('#sub_button').click(function(){
        var x =$('#inputEmail4').val();
        if (x==0) {
            $('#emailcheck').show();
            $('#inputEmail4').css("border" ,"2px solid red");
            return false; 
        }
        else if(x.indexOf('@')<=0)
        {
            $('#emailcheck').show();
            $('#inputEmail4').css("border" ,"2px solid red");
            return false; 
        }
        else if((x.charAt(x.length-3)!='.') && (x.charAt(x.length-4)) !='.')
        {
            $('#emailcheck').show();
            $('#inputEmail4').css("border" ,"2px solid red");
            return false; 
        }
        else{
            $('#emailcheck').hide();
            $('#inputEmail4').css("border" ,"2px solid green");
            return true;   
        }

    });
    // password validation
    $('#inputPassword4').keyup(function () {
        pass_check();
    });

    function pass_check() {

        var pass_val = $('#inputPassword4').val();

        if (pass_val.length == '') {

            $('#passworscheck').show();
            $('#passworscheck').html('Please fill the password!!');
            $('#passworscheck').focus();
            $('#passworscheck').css("color", "red");
            $('#inputPassword4').css("border", "2px solid red");

            pass = false;
            return false;

        }
        else {
            $('#passworscheck').hide();
            $('#inputPassword4').css("border", "2px solid green");
        }

        if ((pass_val.length) < 3 || (pass_val.length) > 8) {

            $('#passworscheck').show();
            $('#passworscheck').html('Password must be 3 to 8 charcters!');
            $('#passworscheck').focus();
            $('#passworscheck').css("color", "red");
            $('#inputPassword4').css("border", "2px solid red");

            pass = false;
            return false;

        }
        else {
            $('#passworscheck').hide();
            $('#inputPassword4').css("border", "2px solid green");
        }
}
    // adreass validation
    $('#inputAddress').keyup(function () {
        add_check();
    });

    function add_check() {

        var add_val = $('#inputAddress').val();

        if (add_val.length == '') {

            $('#addrescheck').show();
            $('#addrescheck').html('Please Enter the address!!');
            $('#addrescheck').focus();
            $('#addrescheck').css("color", "red");
            $('#inputAddress').css("border", "2px solid red");

            addr = false;
            return false;

        }
        else {
            $('#addrescheck').hide();
            $('#inputAddress').css("border", "2px solid green");
        }

        if (add_val.length > 60) {

            $('#addrescheck').show();
            $('#addrescheck').html('Address length must be less than 60 characterss!');
            $('#addrescheck').focus();
            $('#addrescheck').css("color", "red");
            $('#inputAddress').css("border", "2px solid red");


            addr = false;
            return false;

        }
        else {
            $('#addrescheck').hide();
            $('#inputAddress').css("border", "2px solid green");
        }
    }
    // city validation
    $('#inputCity').keyup(function () {
        city_check();
    });

    function city_check() {

        var city_val = $('#inputCity').val();

        if (city_val.length == '') {

            $('#citycheck').show();
            $('#citycheck').html('Please fill the city name!!');
            $('#citycheck').focus();
            $('#citycheck').css("color", "red");
            $('#inputCity').css("border", "2px solid red");

            f_name = false;
            return false;

        }
        else {
            $('#citycheck').hide();
            $('#inputCity').css("border", "2px solid green");
        }
    }
    // zipcode validation
    $('#inputZip').keyup(function () {
        zip_check();
    });

    function zip_check() {

        var zip_val = $('#inputZip').val();

        if (zip_val.length == '') {

            $('#zipcheck').show();
            $('#zipcheck').html('Please enter the zip code!');
            $('#zipcheck').focus();
            $('#zipcheck').css("color", "red");
            $('#inputZip').css("border", "2px solid red");

            zip = false;
            return false;

        }
        else {
            $('#zipcheck').hide();
            $('#inputZip').css("border", "2px solid green");
        }

        if (zip_val.length > 5) {

            $('#zipcheck').show();
            $('#zipcheck').html('Zip code must be less than 6 charcter!');
            $('#zipcheck').focus();
            $('#zipcheck').css("color", "red");
            $('#inputZip').css("border", "2px solid red");

            zip = false;
            return false;

        }
        else {
            $('#zipcheck').hide();
            $('#inputZip').css("border", "2px solid green");
        }

    }
    // phone number validation
    $('#inputNum').keyup(function () {
        num_check();
    });

    function num_check() {

        var num_val = $('#inputNum').val();

        if (num_val.length == '') {

            if (isNaN(num_val)) {
                $('#numbercheck').html("Not a Number");
            }

            $('#numbercheck').show();
            $('#numbercheck').html('Please enter the phone number');
            $('#numbercheck').focus();
            $('#numbercheck').css("color", "red");
            $('#inputNum').css("border", "2px solid red");

            num = false;
            return false;

        }
        else {
            $('#numbercheck').hide();
            $('#inputNum').css("border", "2px solid green");
        }

        if (num_val.length > 11) {

            $('#numbercheck').show();
            $('#numbercheck').html('Number must be of 11 digits!');
            $('#numbercheck').focus();
            $('#numbercheck').css("color", "red");
            $('#inputNum').css("border", "2px solid red");

            num = false;
            return false;

        }
        else {
            $('#numbercheck').hide();
            $('#inputNum').css("border", "2px solid green");
        }

    }
    // Search validation
    $('#inputsearch').keyup(function () {
        search_check();
    });

    function search_check() {

        var search_val = $('#inputsearch').val();

        if (isNaN(search_val)) {



            $('#searchcheck').show();
            $('#searchcheck').html('Search by Number');
            $('#searchcheck').focus();
            $('#searchcheck').css("color", "red");
            $('#inputsearch').css("border", "2px solid red");

            search = false;
            return false;

        }
        else {
            $('#searchcheck').hide();
            $('#inputsearch').css("border", "2px solid green");
        }

        if (search_val.length > 11) {

            $('#searchcheck').show();
            $('#searchcheck').html('Search in limit(11 digits)!');
            $('#searchcheck').focus();
            $('#searchcheck').css("color", "red");
            $('#inputsearch').css("border", "2px solid red");

            search = false;
            return false;

        }
        else {
            $('#searchcheck').hide();
            $('#inputsearch').css("border", "2px solid green");
        }

    }
    // file validation
    maxFileSize = 2 * 1024 * 1024;
    $('#inputfile').change(function () {
        fileSize = this.files[0].size;

        if (fileSize > maxFileSize) {
            this.setCustomValidity("You can upload only file size under 2Mb");
            this.reportValidity();
        }
        else {
            this.setCustomValidity("");
        }

    });
    // radiobutton validation
    $("#sub_button").click(function() {
        var x=$("input[type='radio']:checked");
        if(x.length>0)
        {
            return true; 
        }
        
        else{
        $("#rdbtnchk").text("Select language!");
        $("#rdbtnchk").css("color","red");
        return false;
        }
        });
    // checkbox validation
    $("#sub_button").click(function() {
        var y=$("input[type='checkbox']:checked");
        if(y.length>0)
        {
            return true; 
        }
        
        else{
        $("#chkbox").text("Choose the color!");
        $("#chkbox").css("color","red");
        return false;
        }
        });
    // URL validation
$("#inputurl").keyup(function(){
        if(validateUrl()){
            $("#urlcheck").html("valid");
            $("#inputurl").css("border", "2px solid green");
            return true; 
        }else{
            $("#urlcheck").html("invalid URL");
            $("#inputurl").css("border", "2px solid red");
            return false;
        }

    });
    function validateUrl() {
        
        var url = $("#inputurl").val();
        
        var reg = /^(http(s)?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
        if (reg.test(url)) {
            return true;
        } else {
            return false;
        }

    }
// dropDown validation
$("#dropcheck").hide();
$("#sub_button").click(function() { var x=$("#dropDown").val();
if(x=="-select-")
{
$("#dropcheck").show();
return false;
}
else{
return true;
}
});
});
$('#form').submit(function () {
    if ($.trim($("#inputFname4").val()) === "" || $.trim($("#inputLname4").val()) === ""
        || $.trim($("#inputEmail4").val()) === "" || $.trim($("#inputPassword4").val()) === ""
        || $.trim($("#inputAddress").val()) === "" || $.trim($("#inputCity").val()) === ""
        || $.trim($("#inputZip").val()) === "" || $.trim($("#inputNum").val()) === "" 
        || $.trim($("#inputsearch").val()) === "" || $.trim($("#inputfile").val()) === "" 
        || $.trim($("#inputurl").val()) === ""  ) {
        alert('Please fill out all the fields!');
        return false;
    }
});
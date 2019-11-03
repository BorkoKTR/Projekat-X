
$(document).on('submit', '#log_in_form', function(){

    var form_data = JSON.stringify({
        "email": $('#emailLogin').val(),
        "password": $('#passwordLogin').val()
    });

    alert(form_data);

    $.ajax({
        url: "../Projekat/php/login.php",
        type : "POST",
        contentType : 'application/json',
        data : form_data,
        success : function(result) {
            window.location.href = "../mainpage.html"
        },
        error: function(xhr, resp, text){

            alert("<div class='alert alert-danger'>Greška u logovanju. Ako nemate profil registrujte se. U slučaju da imate profil kontaktirajte administratora.</div>");
        }
    });
 
    return false;
});
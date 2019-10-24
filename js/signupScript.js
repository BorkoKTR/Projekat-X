$(document).on('submit', '#sign_up_form', function(){

    var sign_up_form=$(this);
    var form_data=JSON.stringify(sign_up_form.serializeObject());

    $.ajax({
        url: "api/register.php",
        type : "POST",
        contentType : 'application/json',
        data : form_data,
        success : function(result) {
            // if response is a success, tell the user it was a successful sign up & empty the input boxes
            $('#response').html("<div class='alert alert-success'>Successful sign up. Please login.</div>");
            sign_up_form.find('input').val('');
        },
        error: function(xhr, resp, text){
            // on error, tell the user sign up failed
            $('#response').html("<div class='alert alert-danger'>Unable to sign up. Please contact admin.</div>");
        }
    });
 
    return false;
});
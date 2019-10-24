
$(document).on('submit', '#log_in_form', function(){

    var log_in_form=$(this);
    var form_data=JSON.stringify(log_in_form.serializeObject());

    $.ajax({
        url: "api/login.php",
        type : "POST",
        contentType : 'application/json',
        data : form_data,
        success : function(result) {

            $('#response');
            log_in_form.find('input').val('');
        },
        error: function(xhr, resp, text){

            $('#response').html("<div class='alert alert-danger'>Unable to log in. Please contact admin.</div>");
        }
    });
 
    return false;
});
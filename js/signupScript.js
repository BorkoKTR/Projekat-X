
$(document).on('submit', '#sign_up_form', function(){
    
    /* var sign_up_form=$('#sign_up_form').serialize();
    alert("bilo sta2" + sign_up_form);
    var form_data=JSON.stringify(sign_up_form); */
    /*var form_data = JSON.stringify({
        "firstname": $('#firstname').val(), 
        "lastname": $('#lastname').val(), 
        "email": $('#email').val(),
        "password": $('#password').val()
    });*/

    form_data = JSON.stringify( {
        "firstname" : "Borko",
        "lastname" : "Milosevic",
        "email" : "borko@mail.rs",
        "password" : "123456"
    } );

    
    alert(form_data);

    $.ajax({
        url: "../Projekat/php/register.php",
        type : "POST",
        contentType : 'application/json',
        data : form_data,
        dataType: 'json',
       /* success: function() {
            //data = JSON.parse(result);
            alert('uspelo');
            console.log('uspelo');
            //console.log(data['message']);
            // if response is a success, tell the user it was a successful sign up & empty the input boxes
            /*$('#response').html("<div class='alert alert-success'>Successful sign up. Please login.</div>");*/
           /* sign_up_form.find('input').val(''); */
        //}
        success: function() {
            //$("#loading").append("<h2>you are here</h2>");
            alert('uspelo');
        }

    }); 
 
    //return false; 
});
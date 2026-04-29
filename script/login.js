$(document).ready(function() {
    
    // Input label color change on focus (UI enhancement)
    $('.custom-form-control').focus(function() {
        $(this).parent().find('.custom-form-label').css('color', 'var(--primary-green)');
    }).blur(function() {
        $(this).parent().find('.custom-form-label').css('color', '#4a5568');
    });

    // Login Form Validation and Submission
    $('#doctorLoginForm').validate({
        rules: {
            loginEmail: { required: true, email: true }
        },
        
        messages: {
            loginEmail: "Please enter a valid email address"
        },
        
        
    });

});
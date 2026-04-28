$(document).ready(function() {
    
    $('.custom-form-control').focus(function() {
        $(this).parent().find('.custom-form-label').css('color', 'var(--primary-green)');
    }).blur(function() {
        $(this).parent().find('.custom-form-label').css('color', '#4a5568');
    });
    
    $('#doctorRegistrationForm').validate({
        rules: {
            doctorName: { required: true, minlength: 3 },
            hospital: { required: true },
            speciality: { required: true },
            city: { required: true },       
            state: { required: true },      
            mobile: { required: true, digits: true, minlength: 10, maxlength: 15 },
            email: { required: true, email: true },
            mciNumber: { required: true }  
        },
        
        messages: {
            doctorName: "Please enter your full name",
            hospital: "Please enter your hospital/clinic name",
            speciality: "Please select your speciality",
            city: "Please enter your city",
            state: "Please enter your state",
            mobile: "Please enter a valid mobile number",
            email: "Please enter a valid email address",
            mciNumber: "Please enter your registration number"
        },
        
        submitHandler: function(form) {
            let $btn = $('#submitRegBtn');
            let originalText = $btn.text();
            
            $btn.html('<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Processing...');
            $btn.addClass('opacity-75').prop('disabled', true);
            
            setTimeout(function() {
                $btn.text(originalText).removeClass('opacity-75').prop('disabled', false);
                alert("Registration successful! Welcome to the ReproMed Series community.");
                form.reset(); 
            }, 1500);
            return false; 
        }
    });
});

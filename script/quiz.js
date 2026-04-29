$(document).ready(function() {
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('shadow-sm');
        } else {
            $('.navbar').removeClass('shadow-sm');
        }
    });

    $('.quiz-option-card').click(function() {
        $('.quiz-option-card').removeClass('selected');
        $(this).addClass('selected');
        $(this).find('input[type="radio"]').prop('checked', true);
    });

    $('#quizForm').submit(function(e) {
        e.preventDefault();
        
        let selectedOption = $('input[name="quizAnswer"]:checked').val();
        let $errorMsg = $('#quizErrorMsg');
        
        if (!selectedOption) {
            $errorMsg.text("Please select an option to continue.").removeClass('d-none');
            return false;
        } else {
            $errorMsg.addClass('d-none');
            console.log("Selected Answer:", selectedOption);
        }
    });
});

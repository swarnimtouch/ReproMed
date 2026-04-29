$(document).ready(function() {
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('shadow-sm');
        } else {
            $('.navbar').removeClass('shadow-sm');
        }
    });

    $('#playVideoBtn').click(function() {
        $(this).css('transform', 'translate(-50%, -50%) scale(0.9)');
        
        setTimeout(() => {
            $(this).css('transform', 'translate(-50%, -50%) scale(1)');
            alert("Video player interface would initialize here.");
        }, 150);
    });

    $('#startQuizBtn').click(function(e) {
        e.preventDefault();
        let $btn = $(this);
        let originalText = $btn.text();
        
        $btn.text('Checking Status...').addClass('opacity-75');
        
        setTimeout(function() {
            $btn.text(originalText).removeClass('opacity-75');
            alert("Please complete at least 90% of the video to unlock the quiz.");
        }, 800);
    });

});

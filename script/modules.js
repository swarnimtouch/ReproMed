$(document).ready(function() {
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('shadow-sm');
        } else {
            $('.navbar').removeClass('shadow-sm');
        }
    });

    $('.card-active, .card-completed').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-5px)',
                'box-shadow': '0 15px 30px rgba(0,0,0,0.1)'
            });
        }, 
        function() {
            $(this).css({
                'transform': 'translateY(0)',
                'box-shadow': $(this).hasClass('card-active') ? '0 1rem 3rem rgba(0,0,0,0.175)' : '0 .125rem .25rem rgba(0,0,0,0.075)'
            });
        }
    );

    $('.btn-watch-action').click(function(e) {
        e.preventDefault();
        let $btn = $(this);
        let originalText = $btn.text();
        
        $btn.text('Loading Player...').addClass('opacity-75');
        
        setTimeout(function() {
            $btn.text(originalText).removeClass('opacity-75');
            alert("Video player modal will open here for this module.");
        }, 800);
    });

});

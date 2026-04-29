$(document).ready(function() {
    
    // Navbar scroll effect for Mobile
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('shadow-sm');
        } else {
            $('.navbar').removeClass('shadow-sm');
        }
    });

    // Simulate Certificate PDF Download
    $('#downloadCertBtn').click(function(e) {
        e.preventDefault();
        
        let $btn = $(this);
        let originalText = $btn.html();
        
        // Change button to loading state
        $btn.html('<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Generating PDF...');
        $btn.addClass('opacity-75').prop('disabled', true);
        
        // Simulate a delay for backend processing
        setTimeout(function() {
            // Revert button back to normal
            $btn.html(originalText).removeClass('opacity-75').prop('disabled', false);
            
            // Show success alert
            alert("Your certificate has been downloaded successfully!");
        }, 1500);
    });

});
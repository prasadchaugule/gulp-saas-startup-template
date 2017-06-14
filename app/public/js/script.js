$(document).ready(function() {
    if ($(window).width() < 768) {
        var mobContent = $(".landing-mob-content");
        var landLinks = $(".landing_links,.landing_msg");
        mobContent.hide();
        mobContent.delay(2000).fadeIn(2000);
        landLinks.hide();
        mobContent.delay(4000).fadeOut(2000);
        landLinks.delay(11000).fadeIn(2000);
    }
});
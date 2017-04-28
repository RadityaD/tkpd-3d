$(document).ready(function(){
     /* Open Drawer */
    $('.top-navigation-bar').click(function(){
        $('.top-navigation-menu').addClass('active');
        $('.overlay-on').show();
        $('body').addClass('fix-body');
    });

    $('.overlay-on').click(function(){
        $('.top-navigation-menu').removeClass('active');
        $('.overlay-on').hide();
        $('body').removeClass('fix-body');
    });

    $('.menu-close').click(function(){
        $('.top-navigation-menu').removeClass('active');
        $('.overlay-on').hide();
        $('body').removeClass('fix-body');
    });

    /* toggle dropdown on button click */
    $('.bw-button').on('click', function(e) {
        if ($('.user-menu').hasClass('active')) {
            $('.user-menu').removeClass('active');
        }
        $(this).parent().toggleClass('active');

        /* hack for preventing html fire close event */
        e.stopPropagation();
    });
});
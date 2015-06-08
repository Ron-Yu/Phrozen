$(function() {

    var dropdownInitializrs = $('.dropdown-button').parent('li'),
        // exclude divider line
        mobileItems = $('#mobile-demo').find('li').not('.divider');

    // -------------------------------------
    //   navigation bar
    // -------------------------------------

    // ----- mobile ----- //

    //push menu initializes from materialize
    $(".button-collapse").sideNav();

    //reverse font color
    mobileItems.on('click', function() {
        $(this).find('a, i').addClass('MobileItemClickEffect');
        mobileItems.find('a').not('.MobileItemClickEffect').addClass('MobileItemBlurred');
    });



    // ----- desktop ----- //

    //submenu fadein and fadeout
    dropdownInitializrs.hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).find('.sub-menu').stop().fadeIn('slow');
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(this).find('.sub-menu').stop().fadeOut('slow');
    });
});

$(function() {

    var dropdownInitializrs = $('.dropdown-button').parent('li'),
        mobileItems = $('#mobile-demo').find('li');

    // -------------------------------------
    //   navigation bar
    // -------------------------------------

    // ----- mobile ----- //

    //push menu initializes from materialize
    $(".button-collapse").sideNav();

    //reverse font color
    mobileItems.on('click', '.selector', function(event) {
        event.preventDefault();
        /* Act on the event */
    });


    // ----- desktop ----- //

    //submenu fadein and fadeout
    dropdownInitializrs.hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).find('.sub-menu').fadeIn('slow');
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(this).find('.sub-menu').fadeOut('slow');
    });
});

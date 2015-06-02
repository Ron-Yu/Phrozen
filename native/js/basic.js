$(function() {
    $(".button-collapse").sideNav();

    var dropdownInitializrs = $('.dropdown-button').parent('li');
    dropdownInitializrs.hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).find('.sub-menu').fadeIn('slow');
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(this).find('.sub-menu').fadeOut('slow');
    });
});

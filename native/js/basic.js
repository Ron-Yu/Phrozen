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


    // -------------------------------------
    //   index page landing
    // -------------------------------------

    // ----- video sound control ----- //
    $("video").prop("volume", 0);


    // (function() {

    //   var desc = $('#index').find('.view-1').find('.desc').find('h1'),
    //       indexStrings = [];

    //   indexStrings[0] = "first sentence";
    //   indexStrings[1] = "second sentence";
    //   indexStrings[2] = "third sentence";
      
    //   function showString(i) {
    //      return function(){
    //        desc.text(indexStrings[i]);
    //        console.log(indexStrings[i]);
    //      }
    //   }


    //   for (var i = 0; i < indexStrings.length; i++) {
    //     setInterval(showString(i), 3000 * (i + 1));
    //   };


    // })();

    (function() {

      var indexTitle = $('#index').find('.view-1').find('.desc').find('.tlt');
       
        indexTitle.textillate({
          // enable looping
          loop: true,

          // sets the minimum display time for each text before it is replaced
          minDisplayTime: 2000,

          // sets the initial delay before starting the animation
          // (note that depending on the in effect you may need to manually apply 
          // visibility: hidden to the element before running this plugin)
          initialDelay: 0,

          // set whether or not to automatically start animating
          autoStart: true,

          // in animation settings
          in: {
            // set the effect name
            effect: 'rollIn',

            // set the delay factor applied to each consecutive character
            delayScale: 1.5,

            // set the delay between each character
            delay: 50,

            // set to true to animate all the characters at the same time
            sync: false,

            // randomize the character sequence 
            // (note that shuffle doesn't make sense with sync = true)
            shuffle: false,

            // reverse the character sequence 
            // (note that reverse doesn't make sense with sync = true)
            reverse: false
          },

          // out animation settings.
          out: {
            effect: 'rollOut',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false
          },

          // callback that executes once textillate has finished 
          // callback: function () {console.log('test')};

          // set the type of token to animate (available types: 'char' and 'word')
          type: 'char'
        });

      function showString() {

        if (i >= indexStrings.length) {
          i = 0;
        };

        desc.text(indexStrings[i]);
        
        // .animate({opacity: 1}, 1500)
        // .delay(2000)
        // .animate({opacity: 0}, 1500);

        // desc.textillate('in');
        // desc.textillate('out');

        i++;
      }

      //setInterval(showString, 20000);

    })();


    // view3 flip effect
    $(".card").flip({
      trigger:'click',
      speed: 1500
    });

    // view4 parallex effect
    $('.parallax').parallax();

});
    

  


// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('nav').outerHeight();
 nav_searchbar =document.querySelector('.search-bar_container2') ;
 hero_searchbar = document.querySelector('.search-bar_container');

$(window).scroll(function (event) {
    didScroll = true;
    var st = $(this).scrollTop();
    console.log($(this).scrollTop());
    if(st > 300){
       nav_searchbar.style.visibility = 'visible';
       hero_searchbar.style.visibility = 'hidden';

    }
    else{
       nav_searchbar.style.visibility = 'hidden';
       hero_searchbar.style.visibility = 'visible';
    }

});
//
// setInterval(function () {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);
//
// function hasScrolled() {
//     var st = $(this).scrollTop(); // Make sure they scroll more than delta
//     console.log(st);
//     if (Math.abs(lastScrollTop - st) <= delta) return;
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight) {
//         // Scroll Down
//         $('header').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//         if (st + $(window).height() < $(document).height()) {
//             $('header').removeClass('nav-up').addClass('nav-down');
//         }
//     }
//     lastScrollTop = st;
// }


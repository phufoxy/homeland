window.onload = function () {
    window.onscroll = function () {
        scrollSticky();
    }
    var header = document.getElementById("b-page-header");
    var sticky = header.offsetTop;
    function scrollSticky() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
}

wow = new WOW(
    {
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    }
);
wow.init();
jQuery(document).ready(function ($) {
    "use strict";
    // loading page
    var loaderPage = function () {
        $('.b-page-loader').fadeOut('slow');
    }
    // Document on load.
    $(document).ready(function () {
        loaderPage();
    });
});
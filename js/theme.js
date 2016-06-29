/*=================================================================*/
// Preloader
window.addEventListener('DOMContentLoaded', function() {
    $("body").queryLoader2({
        backgroundColor: "#1c1c1e",
        barColor: "#ffffff",
        barHeight: 1
    });
});
/*=================================================================*/

/*=================================================================*/
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
/*=================================================================*/

/*=================================================================*/
//jQuery for page scrolling feature 
var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
/*=================================================================*/

/*=================================================================*/
//Home Slider
$(document).ready(function() {
 
    $("#owl-home").owlCarousel({
        autoPlay: 4000,
        slideSpeed: 1000,
        navigation: false,
        pagination: false,
        singleItem: true
    });
 
});
/*=================================================================*/

/*=================================================================*/
//Services Slider
$(document).ready(function() {
 
    $("#owl-services").owlCarousel({
        items: 3,
        autoPlay: false,
    });
 
});
/*=================================================================*/

/*=================================================================*/
//Skills
$(function() {
        $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            barColor:"#1c1c1e",
            scaleColor: false,
            lineWidth: 5,
            size: 150,
            animate:{
                duration: 2000,
                enabled: true
            },
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
});
/*=================================================================*/

/*=================================================================*/
//Testimonials Slider
$(document).ready(function() {
 
    $("#owl-testimonials").owlCarousel({
        navigation : true,
        autoPlay : true,
        items: 1,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        pagination: false,
        navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        singleItem: true
    });
 
});
/*=================================================================*/

/*=================================================================*/
//Clients Slider
$(document).ready(function() {
 
    $("#owl-clients").owlCarousel({
        navigation : true,
        autoPlay : true,
        items: 6,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        pagination: false,
        navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    });
 
});
/*=================================================================*/

/*=================================================================*/
//Tweets Slider
$(document).ready(function() {
 
    $("#owl-tweets").owlCarousel({
        navigation : true,
        autoPlay : true,
        items: 1,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        pagination: false,
        navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        singleItem: true
    });
 
});
/*=================================================================*/

/*=================================================================*/
//Portfolio Filter
$( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.portfolio-item'
  });

  // store filter for each group
  var filters = {};

  $('#filters').on( 'click', '.button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = '';
    for ( var prop in filters ) {
      filterValue += filters[ prop ];
    }
    // set filter for Isotope
    $container.isotope({ filter: filterValue });
  });
  
});
/*=================================================================*/

/*=================================================================*/
//Textare Resizing
$(document).ready(function(){
    $('textarea').autosize();   
});
/*=================================================================*/
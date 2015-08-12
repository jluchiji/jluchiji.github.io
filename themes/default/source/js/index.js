/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */

$(function(){
  $(".post-content").fitVids();

  /* Headroom.js navbar */
  $('nav#navbar').headroom({
    offset: 20,
    tolerance: 40,
    classes: {
      notTop: 'scroll',
      unpinned: 'compact'
    }
  });

});

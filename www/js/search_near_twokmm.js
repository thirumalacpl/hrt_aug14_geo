$(document).on('pageshow', '#sear_nearby_mapp', function(){ 
//alert('asdasfffff');
//alert(condition_emer+'condition');
  $(document).off('click', '#sear_near_twokm_pagechan').on('click', '#sear_near_twokm_pagechan', function() {
 //alert('op');
// $.mobile.changePage($('#search_near_twokm'), { transition: "none", changeHash: true, reverse: false });
  $.mobile.changePage($('#search_near_twokm'), { transition: "none", changeHash: true, reverse: false });
 return false;
  });

});
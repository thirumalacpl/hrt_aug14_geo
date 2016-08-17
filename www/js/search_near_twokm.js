$(document).on('pageshow', '#search_near_twokm', function(){ 

alert('Doctors around 2km');

  $(document).off('click', '#pogeoetoone').on('click', '#pogeoetoone', function() {
 //alert('page one');
  sessionStorage.clear();
// $.mobile.changePage($('#search_near_twokm'), { transition: "none", changeHash: true, reverse: false });
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
 return false;
  });


twokm =  JSON.parse(sessionStorage.getItem("twokm")); 

if(twokm == null){
	  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
 return false;
}

$('#cadd').empty();

for(a=0;a<twokm.length;a++){
  var twokm_sear_add = twokm[a];
var dfr ='<li style="padding-bottom: 5px;"><a href="#" style="background-color: #00a3b5;" class="waves-effect waves-button ui-btn waves-effect waves-button"><h2 style="color:white;font-size: 15px;">'+twokm_sear_add.doctor_name+'</h2><p style="float: right;"><img src="img/location-icon.png"></p><p style="color:white;">'+twokm_sear_add.hospital_name+'</p><p style="color:white;">'+twokm_sear_add.address+'</p><p style="color:white;">'+twokm_sear_add.contact_no+'</p></a></li>'
//  var dfr='<li style="padding-bottom: 5px;"><a href="#" style="background-color: #00a3b5;"><h2 style="color:white;font-size: 15px;">'+twokm_sear_add.address+'</h2><p style="float: right;"><img src="img/location-icon.png"></p><p style="color:white;">'+twokm_sear_add.doctor_name+'</p><p style="color:white;">'+twokm_sear_add.doctor_name+'</p><p style="color:white;">'+twokm_sear_add.contact_no+'</p></a></li>'
$('#cadd').append(dfr);

}


});


$(document).ready(function(){

	/*Checkbox Toggle Class*/
	// $(":radio").on('change', function(){
	//   $(this).next('label').addClass("active");
	// });
	//$("input:radio:checked").closest('label').addClass("checked");
   var $radios = jQuery('input[type=radio]');
   $radios.change(function() {
   $radios.closest('label').parent('.item').removeClass('active');
   $radios.filter(':checked').closest('label').parent('.item').addClass('active');

   /*Switch Toggle*/
/*   var $myLabel = $('label[for="' + this.id + '"]');
	$myLabel.html( $(this).is(':checked') ? 'Списком' : ' На карте');*/

	 //  $('#switch_mode').click(function() {
  //   var $myLabel = $('label[for="' + this.id + '"]');
  //   $myLabel.html( $(this).is(':checked') ? 'Списком' : ' На карте');
  // });
});
});
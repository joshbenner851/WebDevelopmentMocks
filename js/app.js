//Problem: it looks gross in mobile screens
//Solution: To hide the text links and swap them with a more appropiate navigation-select box

//Create a select and append to menu
var $select = $("<select></select>");
$("nav").append($select);
//cycle over menu links
$("nav a").each( function() {
  var $anchor = $(this);
  //create an option
  var $option = $("<option></option>");
  
   //deal with selected options depending on current page
  if( $anchor.parent().hasClass("selected") ) {
  	$option.prop("selected",true);
  }
    //option value is 
  $option.val( $anchor.attr("href") );
  
  //options is the text of the link
  $option.text( $anchor.text() );
 
  //append option to select
  $select.append($option);
  
});
//   for the select box of href
  
//Create button to click to go to select location

//bind click to btn
$select.change(function(){
  window.location = $select.val();
});





$(document).ready(function() {
  //set global variables
  var quote = "";
  var author = "";

  //display intial quote
  $.getJSON("https://quote-api.gomix.me/pull/1", function(data) {
    quote = data[0].body;
    author = data[0].author;
    $('#quote-body').text('"' + quote + '"');
    $('#name').text("-- " + author);
  });

  //display quote when button is clicked
  $("#quote").on("click", function() {
    $.getJSON("https://quote-api.gomix.me/pull/1", function(data) {
      quote = data[0].body;
      author = data[0].author;
      $('#quote-body').text('"' + quote + '"');
      $('#name').text("-- " + author);
    });
  });
  
  //tweet out quote on click
  $(".twitter-share-button").on("click", function() {
      $(this).attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" -- ' +
        author +''));
    })
 
})

// version with ajax 
 /* 
$.ajax({
  url: "https://quote-api.gomix.me/pull/1",
  type: 'GET',
  data: {},
  dataType: 'json',
  success: function(data){
    quote = data[0].body;
    author = data[0].author;
    $('#quote-body').text('"' + quote + '"');
    $('#name').text("--" + author);
  },
  error: function(error) { 
    alert(err); 
   }
  }); */
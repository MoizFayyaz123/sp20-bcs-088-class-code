function getfunction() {
    let endpoint = 'https://api.linkpreview.net'
    let apiKey = '5b578yg9yvi8sogirbvegoiufg9v9g579gviuiub8'
  
    $( "button" ).each(function( index, element ) {
  
      $.ajax({
          url: endpoint + "?key=" + apiKey + " &q=" + $( this ).text(),
          contentType: "application/json",
          dataType: 'json',
          success: function(result){
              console.log(result);
          }
      })
    });
  };
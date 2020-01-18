  function sendRequest(){
    var inputVal = $('#search-input').val();
    var url = "https://en.wikipedia.org/w/api.php?callback=?&action=opensearch&origin=*&search=" + inputVal + "&format=json"; 
  console.log(url);
  $.ajax({
      url:  url,
      dataType: 'json',
      type: 'POST',
      headers: { 'Api-User-Agent': 'codepen.io Wiki Viewer by Elena Kosobrodova' },   
      success: function(res){
       var wikiRes={
         title: res[1],
         article: res[2],
         urla: res[3]
       }; 
       render(wikiRes); 
      },
      error: function(err){
        console.log("error");
      }
    });
  };

function render(data){
  for (i=0; i<data.title.length; i++){
    var item1 = "<div class='box'><h4 class='title'>" + data.title[i] + "</h4><p>" + data.article[i] + "</p></div></div>" 
    $('#response').append(item1);
  }
    }

$(document).ready(function() {
  // random
  $("#random-article").on("click", function() {
 window.open('http://en.wikipedia.org/wiki/Special:Random', '', "value _blank");
 });
 // search
   
  $('#search-icon').on("click", function() {
    console.log('button clicked');
     $('#response').html(" ");
    sendRequest();
  });
  });

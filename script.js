function sendRequest() {
  var inputVal = $("#search-input").val();
  var url =
    "https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=" +
    inputVal +
    "&format=json";
  $.ajax({
    url: url,
    dataType: "json",
    type: "POST",
    headers: {
      "Api-User-Agent": "codepen.io Wiki Viewer by Elena Kosobrodova"
    },
    success: function(res) {
      var title1 = [];
      var article1 = [];
      for (i = 0; i < res.query.search.length; i++) {
        title1.push(res.query.search[i].title);
        article1.push(res.query.search[i].snippet);
      }
      var wikiRes = {
        title: title1,
        article: article1
      };
      render(wikiRes);
    },
    error: function(err) {
      console.log("error");
    }
  });
}

function render(data) {
  for (i = 0; i < data.title.length; i++) {
    var item1 =
      "<div class='box'><h4 class='title'>" +
      data.title[i] +
      "</h4><p>" +
      data.article[i] +
      "</p></div></div>";
    $("#response").append(item1);
  }
}

$(document).ready(function() {
  // random
  $("#random-article").on("click", function() {
    window.open(
      "http://en.wikipedia.org/wiki/Special:Random",
      "",
      "value _blank"
    );
  });
  // search
  $("#search-input").keypress(function(e) {
    if (e.which == 13) {
      $("#response").html(" ");
      sendRequest();
    }
  });
  $("#search-icon").on("click", function() {
    $("#response").html(" ");
    sendRequest();
  });
});

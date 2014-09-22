$(document).ready(function () {
  $.ajaxSetup({ cache: false });

  /*
    $('#selPC').typeahead({
    source: function (query, process) {
      $.getJSON("cmd/", { 'search' : query },function (data) {
        var arr = new Array();
        $.each(data, function (key, val) {
          arr.push(val.Name);
        });
        return process(arr)
      })
    },
    highlight : true,
    autoselect : true
  }
  )
  */
  
  $.getJSON("/ads/cmd/", function (data) {
    console.log(data)
    $('#output').text(data)
    var items = [];
    $.each(data, function (key, val) {
      items.push("<li id='" + key + "'>" + val.Name + "</li>");
    });

    $("<ul/>", {
      "class": "my-new-list",
      html: items.join("")
    }).appendTo("body");

  });

});

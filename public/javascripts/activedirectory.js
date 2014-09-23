$(document).ready(function () {
  $.ajaxSetup({ cache: false });

  var AdPCs = new Array();
  function getAD_Computer() {
    $.getJSON("/ads/cmd/", { 'search': "pc*" }, function (data) {
      $.each(data, function (key, val) {
        AdPCs.push(val.Name);
      });
    })
  };

  getAD_Computer()

  $('#selPC').typeahead({
    /*
    source: function (query, process) {
      $.getJSON("cmd/", { 'search': query }, function (data) {
        var arr = new Array();
        $.each(data, function (key, val) {
          arr.push(val.Name);
        });
        return process(arr)
      })
    },
    */
    source : AdPCs,
    minLength: 2,
    highlight: true,
    autoselect: true
  }
  )

  /*
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
  */
});

// $(document).ready(function () {
//   $("#requestedBeaconID").change(function () {
//       var params1 = $(this);
//       alert(params1.val()); 
//   });
// });

// === For Beacon search: requestedBeaconID, datetimepickerStartTime, datetimepickerEndTime
// === For Location search: requestedLocationID

var params1 = {
  'beaconId': 'nydfj',
  'from': '1.9.2018',
  'to': '1.10.2018'
};

var params2 = {
  'location': 'Stock'
}

$(document).ready(function() {

  $("button#second").click(function() {
    $.ajax({
      url: 'https://demo8050768.mockable.io',
      contenttype: 'application/json; charset=utf-8',
      method: 'get',
      data: $.param(params2),
      success: function(result) {
        if(result) generateTable2(result);
      },
      error: function() {

      }
    });
  });

  $("button#first").click(function() {
    // if (params1 == null || params2 == null) {
    //   alert("Bitte ein Start- und ein Enddatum eingeben");
    //   return;
    // }
    $.ajax({
      url: 'https://demo8050768.mockable.io',
      contenttype: 'application/json; charset=utf-8',
      method: 'get',
      data: $.param(params1),
      success: function(result) {
        if(result) generateTable1(result);
      },
      error: function() {

      }
    });
  });

});

function generateTable1(result) {
  var div = $('#result');
  div.empty();
  var table = $('<table>').addClass('foo');
  var headerRow = $('<tr>');
  var cols = [];
  for(var prop in result['nydfj'][0]) {
    headerRow.append($('<th>').text(prop));
    cols.push(prop);
  }
  table.append(headerRow);
  for(var i=0; i<result['nydfj'].length; i++) {
    var row = $('<tr>');
    for(var j=0; j<cols.length; j++) {
      row.append($('<td>').text(result['nydfj'][i][cols[j]]));
    }
    table.append(row);
  }
  div.append(table);
}

function generateTable2(result) {
  var div = $('#result');
  div.empty();
  var table = $('<table>').addClass('foo');
  var headerRow = $('<tr>');
  var cols = [];
  for(var prop in result['Stock'][0]) {
    headerRow.append($('<th>').text(prop));
    cols.push(prop);
  }
  table.append(headerRow);
  for(var i=0; i<result['Stock'].length; i++) {
    var row = $('<tr>');
    for(var j=0; j<cols.length; j++) {
      row.append($('<td>').text(result['Stock'][i][cols[j]]));
    }
    table.append(row);
  }
  div.append(table);
}
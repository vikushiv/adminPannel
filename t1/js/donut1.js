google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['',  55],
    ['',    22],
    ['',    18],
    ['',    5],
  ]);

  var options = {
    pieHole: 0.0,
    pieSliceTextStyle: {
      color: 'black',
    },
    legend: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchar1'));
  chart.draw(data, options);
  
}



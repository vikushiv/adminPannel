google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['',  20],
    ['',    25],
    ['',    35],
    ['',    20],
  ]);

  var options = {
    pieHole: 0.5,
    pieSliceTextStyle: {
      color: 'black',
    },
    legend: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart3'));
  chart.draw(data, options);
  
}



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['',  65],
    ['',   35],
    
  ]);

  var options = {
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black',
    },
    legend: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchar2'));
  chart.draw(data, options);
  
}



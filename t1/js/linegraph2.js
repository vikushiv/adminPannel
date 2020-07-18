google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['Sep 2015',  1000,      400],
          ['Oct 2015',  1170,      460],
          ['Nov 2015',  660,       1120],
          ['Dec 2015',  1030,      540],
          ['Jan 2016',  660,       1120],
          ['Feb 2016',  1030,      540]
          

        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curvechart2'));

        chart.draw(data, options);
      }
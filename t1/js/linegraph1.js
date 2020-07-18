google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['Sep 2015',  1000],
          ['Oct 2015',  1170],
          ['Nov 2015',  660],
          ['Dec 2015',  1030],
          ['Jan 2016',  660],
          ['Feb 2016',  1030]
          

        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curvechart1'));

        chart.draw(data, options);
      }
const xmlhttp = new XMLHttpRequest();
    const url = 'data.json';  
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const datapoints = JSON.parse(this.responseText);
            const labelsweek = datapoints.data.map(function(index){
                return index.week;
            });
            const revenue = datapoints.data.map(function(index){
                return index.revenue;
            });
            const cost = datapoints.data.map(function(index){
                return index.cost;
            });

          var chart = new Chart("myChart12", {
            type: "line",
            data: {
              labels: labelsweek,
              datasets: [{
                  pointRadius: 0,
                  backgroundColor: "rgba(89, 194, 230, 0.7)",
                  borderColor: "rgba(89, 194, 230, 0)",
                  data: cost,
              },{
                  pointRadius: 0,
                  backgroundColor: "rgba(200, 227, 243, 0.7)",
                  borderColor: "rgba(200, 227, 243, 0)",
                  data: revenue,
              }]
            },
            options: {
              legend: {display: false},
              scales: {
                yAxes: [{ticks: {min: 0, max:60}}],
                xAxes: [{gridLines: {
                  display: false,
                }
              }]
              }
            }
          });

        }
    }
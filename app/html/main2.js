/*var xValues = [30.01, 31.01, 1.06, 2.06, 3.06, 4.06, 5.06];
var yValues = [69,47,53,42,4,42,53];
var zValues = [53,62,35,42,56,49,55];
var chart = new Chart("myChart9", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      pointRadius: 0,
      lineTension: 0,
      backgroundColor: "rgba(89, 194, 230, 1)",
      borderColor: "rgba(89, 194, 230, 1)",
      data: yValues
    },
    {
        fill: false,
        pointRadius: 0,
        lineTension: 0,
        backgroundColor: "rgba(252, 76, 122, 1)",
        borderColor: "rgba(252, 76, 122, 1)",
        data: zValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:70},
      }],
      xAxes: [{gridLines: {
        display: false,
      }
    }]
    }
  }
});*/



    



var xValues = [1, 2, 3, 4, 5, 6, 7];
var yValues = [0,40,35,55,35,45,0];
var zValues = [0,45,40,65,42,52,0];
var lValues = [0,55,40,70,40,30,0];
var chart = new Chart("myChart3", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
        pointRadius: 0,
        lineTension: 0,
        backgroundColor: "rgba(200, 227, 243, 0.9)",
        borderColor: "rgba(200, 227, 243, 0)",
        data: yValues
    },{
        pointRadius: 0,
        lineTension: 0,
        backgroundColor: "rgba(89, 194, 230, 0.9)",
        borderColor: "rgba(89, 194, 230, 0)",
        data: zValues
    },{
        pointRadius: 0,
        lineTension: 0,
        backgroundColor: "rgba(62, 159, 192, 0.9)",
        borderColor: "rgba(62, 159, 192, 0)",
        data: lValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {display:false}, gridLines: {
        display: false,}}],
      xAxes: [{ticks: {display:false},gridLines: {
        display: false,}
    }]
    }
  }
});


var xValues = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
var yValues = [1000,900,950,850,870,500,1050, 1000, 1020, 980,600,1020,800,1030,1010,1204,1100,1120,700,750,550];
var chart = new Chart("myChart4", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
        fill:false,
        pointRadius: 0,
        backgroundColor: "rgba(89, 194, 230, 1)",
        borderColor: "rgba(89, 194, 230, 1)",
        data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {display:false}, gridLines: {
        display: false,}}],
      xAxes: [{ticks: {display:false},gridLines: {
        display: false,}
    }]
    }
  }
});


var xValues = ["S", "T", "W", "T", "F", "S", "M"];
var yValues = [22,26,28,23,23.5,12,8];

var chart = new Chart("myChart5", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
        fill: false,
        pointRadius: 5,
        lineTension: 0,
        backgroundColor: "rgba(252, 76, 122, 1)",
        borderColor: "rgba(252, 76, 122, 1)",
        data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:30}}],
      xAxes: [{gridLines: {
        display: false,
    }}]
    }
  }
});


var xValues = ["Sweet and Simple LTD.           37:45 h",
               "Nike Running Shoes                16:22 h",
               "Some Cool Company                 3:14 h",
               "Some Cooler Company            26:18 h"];
var yValues = [40,25,15,20];

var chart = new Chart("myChart6", {
  type: "doughnut",
  
  data: {
    labels: xValues,
    
    datasets: [{
        fill: false,
        borderWidth: 0,
        backgroundColor: ["rgba(68, 178, 215, 1)",
        "rgba(150, 228, 255, 1)",
        "rgba(113, 208, 241, 1)",
        "rgba(89, 194, 230, 1)"],
        data: yValues,
    }]
  },
  options: {
    cutoutPercentage: 70,
    
    /*legend: {display: true,
      position: 'bottom',
      labels:
        {fontSize: 10,
        boxWidth: 6,
        align: 'left',
        usePointStyle: true}},*/
      legend: { position: "bottom", textalign: "left", labels:
      {fontSize: 11,
      boxWidth: 6,
      usePointStyle: true}},
      responsive: true,
      aspectRatio: 1,
      scales: {
        yAxes: [{ticks: {display:  false},gridLines: {
          display: false,
      }}],
        xAxes: [{ticks: {display:  false},gridLines: {
          display: false
      }}]
      }
  }
  
});


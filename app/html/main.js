// setup 
const this_week = [
  { x: Date.parse('2021-05-30 '), y: 53},
  { x: Date.parse('2021-05-31 '), y: 62},
  { x: Date.parse('2021-06-01 '), y: 35},
  { x: Date.parse('2021-06-02 '), y: 55},
  { x: Date.parse('2021-06-03 '), y: 57},
  { x: Date.parse('2021-06-04 '), y: 48},
  { x: Date.parse('2021-06-05 '), y: 42},
];
const prev_week = [
  { x: Date.parse('2021-05-23 '), y: 20},
  { x: Date.parse('2021-05-24 '), y: 47},
  { x: Date.parse('2021-05-25 '), y: 44},
  { x: Date.parse('2021-05-26 '), y: 58},
  { x: Date.parse('2021-05-27 '), y: 38},
  { x: Date.parse('2021-05-28 '), y: 34},
  { x: Date.parse('2021-05-29 '), y: 12},
];
const prev2_week = [
  { x: Date.parse('2021-05-16 '), y: 60},
  { x: Date.parse('2021-05-17 '), y: 51},
  { x: Date.parse('2021-05-18 '), y: 55},
  { x: Date.parse('2021-05-19 '), y: 35},
  { x: Date.parse('2021-05-20 '), y: 32},
  { x: Date.parse('2021-05-21 '), y: 29},
  { x: Date.parse('2021-05-22 '), y: 16},
];
const prev3_week = [
  { x: Date.parse('2021-05-9'), y: 11},
  { x: Date.parse('2021-05-10 '), y: 58},
  { x: Date.parse('2021-05-11 '), y: 32},
  { x: Date.parse('2021-05-12 '), y: 47},
  { x: Date.parse('2021-05-13 '), y: 49},
  { x: Date.parse('2021-05-14 '), y: 55},
  { x: Date.parse('2021-05-15 '), y: 22},
];
const prev2_week2 = [
  { x: Date.parse('2021-05-30 '), y: 20},
  { x: Date.parse('2021-05-31 '), y: 47},
  { x: Date.parse('2021-06-01 '), y: 44},
  { x: Date.parse('2021-06-02 '), y: 32},
  { x: Date.parse('2021-06-03 '), y: 54},
  { x: Date.parse('2021-06-04 '), y: 12},
  { x: Date.parse('2021-06-05 '), y: 14},
];
const prev3_week2 = [
  { x: Date.parse('2021-05-23 '), y: 58},
  { x: Date.parse('2021-05-24 '), y: 12},
  { x: Date.parse('2021-05-25 '), y: 34},
  { x: Date.parse('2021-05-26 '), y: 60},
  { x: Date.parse('2021-05-27 '), y: 55},
  { x: Date.parse('2021-05-28 '), y: 12},
  { x: Date.parse('2021-05-29 '), y: 44},
];
const this_week2 = [
  { x: Date.parse('2021-05-16 '), y: 13},
  { x: Date.parse('2021-05-17 '), y: 19},
  { x: Date.parse('2021-05-18 '), y: 44},
  { x: Date.parse('2021-05-19 '), y: 29},
  { x: Date.parse('2021-05-20 '), y: 31},
  { x: Date.parse('2021-05-21 '), y: 56},
  { x: Date.parse('2021-05-22 '), y: 52},
];
const prev_week2 = [
  { x: Date.parse('2021-05-9'), y: 3},
  { x: Date.parse('2021-05-10 '), y: 34},
  { x: Date.parse('2021-05-11 '), y: 39},
  { x: Date.parse('2021-05-12 '), y: 31},
  { x: Date.parse('2021-05-13 '), y: 46},
  { x: Date.parse('2021-05-14 '), y: 57},
  { x: Date.parse('2021-05-15 '), y: 14},
];
  const data = {
    datasets: [{
      data: this_week,
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)', 
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
      ],
      borderWidth: 3,
      pointRadius: 0,
    },
    {
      data: prev2_week2,
      backgroundColor: [
        'rgba(89, 194, 230, 1)',
      ],
      borderColor: [
        'rgba(89, 194, 230, 1)',
      ],
      borderWidth: 3,
      pointRadius: 0,
      
    }]
  };

  // config 
  const config = {
    legend  : 'none',
    type: 'line',
    data,
    options: {
      plugins:{
        legend:{display: false}
      },
      scales: {
        
        x: {
          type: 'time',
          time: {
            unit: 'day'
          },
          grid:{display: false}
        },
        y: {
          beginAtZero: true
              }
          }
        }
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart1'),
    config
  );
  function timeFrame(period){
    //console.log(period)
    console.log(period.value)
    if(period.value == 'fir'){
      myChart.config.options.scales.x.time.unit = 'day';
      myChart.config.data.datasets[0].data = this_week;
      myChart.config.data.datasets[1].data = prev2_week2;
    }
    if(period.value == 'sec'){
      myChart.config.options.scales.x.time.unit = 'day';
      myChart.config.data.datasets[0].data = prev_week;
      myChart.config.data.datasets[1].data = prev3_week2;
    }
    if(period.value == 'th'){
      myChart.config.options.scales.x.time.unit = 'day';
      myChart.config.data.datasets[0].data = prev2_week;
      myChart.config.data.datasets[1].data = this_week2;
    }
    if(period.value == 'fort'){
      myChart.config.options.scales.x.time.unit = 'day';
      myChart.config.data.datasets[0].data = prev3_week;
      myChart.config.data.datasets[1].data = prev_week2;
    }
    myChart.update()
  }







  






function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show1");
}
window.onclick = function(event1) {
  if (!event1.target.matches('.dropbtn1')) {
    var dropdowns1 = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns1.length; i++) {
      var openDropdown1 = dropdowns1[i];
      if (openDropdown1.classList.contains('show1')) {
        openDropdown1.classList.remove('show1');
      }
    }
  }
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show3");
}
window.onclick = function(event3) {
  if (!event3.target.matches('.dropbtn3')) {
    var dropdowns3 = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns3.length; i++) {
      var openDropdown3 = dropdowns3[i];
      if (openDropdown3.classList.contains('show3')) {
        openDropdown3.classList.remove('show3');
      }
    }
  }
}
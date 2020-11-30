$(function(e){
    'use strict'

    var ctx = document.getElementById('total-project').getContext('2d');
	var gradientStroke1 = ctx.createLinearGradient(0, 10, 0, 90);
	gradientStroke1.addColorStop(0, '#533bdc');
	gradientStroke1.addColorStop(1, '#8e7bf7');
	
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			type: 'line',
			datasets: [{
				label: "total-project",
				data: [45,78,98,34,67,28,89,45,62,53,46,78,23,98],
				backgroundColor: gradientStroke1,
				borderColor: '#472ed4 ',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#533bdc',
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: false
			},
			responsive: true,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: '#7886a0',
				bodyFontColor: '#7886a0',
				backgroundColor: '#fff',
				titleFontFamily: 'Montserrat',
				bodyFontFamily: 'Montserrat',
				cornerRadius: 3,
				intersect: false,
			},
			scales: {
				xAxes: [ {
					gridLines: {
						color: 'transparent',
						zeroLineColor: 'transparent'
					},
					ticks: {
						fontSize: 2,
						fontColor: 'transparent'
					}
				} ],
				yAxes: [ {
					display:false,
					ticks: {
						display: false,
					}
				} ]
			},
			title: {
				display: false,
			},
			elements: {
				line: {
					borderWidth: 1
				},
				point: {
					radius: 4,
					hitRadius: 10,
					hoverRadius: 4
				}
			}
		}
	} );

    /*----new-sales----*/
	
	var ctx = document.getElementById('new-sales').getContext('2d');
	var gradientStroke1 = ctx.createLinearGradient(0, 10, 0, 50);
	gradientStroke1.addColorStop(0, '#f73f6c ');
	gradientStroke1.addColorStop(1, '#f17090 ');
	
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			type: 'line',
			datasets: [{
				label: "new-sales",
				data: [56,78,36,78,29,78,37,56,45,78,67,78,36,],
				backgroundColor: gradientStroke1,
				borderColor: '#fb1c52',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#f5446f',
			}]
		},
		options: {

			maintainAspectRatio: false,
			legend: {
				display: false
			},
			responsive: true,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: '#7886a0',
				bodyFontColor: '#7886a0',
				backgroundColor: '#fff',
				titleFontFamily: 'Montserrat',
				bodyFontFamily: 'Montserrat',
				cornerRadius: 3,
				intersect: false,
			},
			scales: {
				xAxes: [ {
					gridLines: {
						color: 'transparent',
						zeroLineColor: 'transparent'
					},
					ticks: {
						fontSize: 2,
						fontColor: 'transparent'
					}
				} ],
				yAxes: [ {
					display:false,
					ticks: {
						display: false,
					}
				} ]
			},
			title: {
				display: false,
			},
			elements: {
				line: {
					borderWidth: 1
				},
				point: {
					radius: 4,
					hitRadius: 10,
					hoverRadius: 4
				}
			}
		}
	} );
	/*----End new-sales----*/

	/*----total-employees----*/
	
	var ctx = document.getElementById('total-employees').getContext('2d');
	var gradientStroke1 = ctx.createLinearGradient(0, 10, 0, 50);
	gradientStroke1.addColorStop(0, '#04befe');
	gradientStroke1.addColorStop(1, '#59d0f9');
	
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			type: 'line',
			datasets: [{
				label: "total-employees",
				data: [45,78,67,78,36,78, 61, 35, 45,58, 52,44,62,86, 56],
				backgroundColor: gradientStroke1,
				borderColor: '#0fa8dc',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#04befe',
			}]
		},
		options: {

			maintainAspectRatio: false,
			legend: {
				display: false
			},
			responsive: true,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: '#7886a0',
				bodyFontColor: '#7886a0',
				backgroundColor: '#fff',
				titleFontFamily: 'Montserrat',
				bodyFontFamily: 'Montserrat',
				cornerRadius: 3,
				intersect: false,
			},
			scales: {
				xAxes: [ {
					gridLines: {
						color: 'transparent',
						zeroLineColor: 'transparent'
					},
					ticks: {
						fontSize: 2,
						fontColor: 'transparent'
					}
				} ],
				yAxes: [ {
					display:false,
					ticks: {
						display: false,
					}
				} ]
			},
			title: {
				display: false,
			},
			elements: {
				line: {
					borderWidth: 1
				},
				point: {
					radius: 4,
					hitRadius: 10,
					hoverRadius: 4
				}
			}
		}
	} );
	/*----End total-employees----*/

  /*----customer-visits----*/
	var ctx = document.getElementById('customer-visits').getContext('2d');
	var gradientStroke1 = ctx.createLinearGradient(0, 10, 0, 50);
	gradientStroke1.addColorStop(0, '#27af06');
	gradientStroke1.addColorStop(1, '#5bce4e');
	
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			type: 'line',
			datasets: [{
				label: "customer-visits",
				data: [54, 35, 44, 64, 43, 55, 39,60, 61, 54, 62, 63, 54, 55, 64, 34, 46,],
				backgroundColor: gradientStroke1,
				borderColor: '#30ab15',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#27af06',
			}]
		},
		options: {

			maintainAspectRatio: false,
			legend: {
				display: false
			},
			responsive: true,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: '#7886a0',
				bodyFontColor: '#7886a0',
				backgroundColor: '#fff',
				titleFontFamily: 'Montserrat',
				bodyFontFamily: 'Montserrat',
				cornerRadius: 3,
				intersect: false,
			},
			scales: {
				xAxes: [ {
					gridLines: {
						color: 'transparent',
						zeroLineColor: 'transparent'
					},
					ticks: {
						fontSize: 2,
						fontColor: 'transparent'
					}
				} ],
				yAxes: [ {
					display:false,
					ticks: {
						display: false,
					}
				} ]
			},
			title: {
				display: false,
			},
			elements: {
				line: {
					borderWidth: 1
				},
				point: {
					radius: 4,
					hitRadius: 10,
					hoverRadius: 4
				}
			}
		}
	} );
      
      /*-----canvasDoughnut-----*/
      if ($('.canvasDoughnut').length){
  
          var chart_doughnut_settings = {
              type: 'doughnut',
              tooltipFillColor: "rgba(51, 51, 51, 0.55)",
              data: {
                  labels: [
                      "Chrome",
                      "IE",
                      "Firefox"
                  ],
                  datasets: [{
                      data: [68, 55, 45],
                      backgroundColor: [
                          "rgb(74, 50, 2120.6)",
                          "rgb(251, 28, 82,0.8)",
                          "rgb(4, 190, 254)"
  
                      ],
                      hoverBackgroundColor: [
                          "#4a32d4",
                          "#fb1c52",
                          "#2393ff"
  
                      ]
                  }]
              },
              options: {
                  legend: false,
                  responsive: false
              }
          }
  
          $('.canvasDoughnut').each(function(){
  
              var chart_element = $(this);
              var chart_doughnut = new Chart( chart_element, chart_doughnut_settings);
  
          });
      }
      /*-----canvasDoughnut-----*/
      
      /* Chartjs (#page-load) */
      var myCanvas = document.getElementById("page-load");
      myCanvas.height="300";
  
      var myCanvasContext = myCanvas.getContext("2d");
      var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 300);
      gradientStroke1.addColorStop(0, 'rgb(74, 50, 212,0.9)');
      
      var gradientStroke2 = myCanvasContext.createLinearGradient(0, 0, 0, 390);
      gradientStroke2.addColorStop(0, '#dce3f3');

      var gradientStroke0 = myCanvasContext.createLinearGradient(0, 0, 0, 390);
      gradientStroke0.addColorStop(0, '#fb1c52');
  
      var myChart = new Chart( myCanvas, {
          type: 'bar',
          data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
                {
  
                    label: 'Total',
                    data: [20, 24, 30, 15, 20,26],
                    backgroundColor: gradientStroke0,
                    hoverBackgroundColor: gradientStroke0,
                    hoverBorderWidth: 2,
                    hoverBorderColor: 'gradientStroke0'
                }
            ]
          },
          options: {
              responsive: true,
              maintainAspectRatio: false,
              tooltips: {
                  mode: 'index',
                  titleFontSize: 12,
                  titleFontColor: '#000',
                  bodyFontColor: '#000',
                  backgroundColor: '#fff',
                  cornerRadius: 3,
                  intersect: false,
  
              },
              legend: {
                  display: false,
                  labels: {
                      usePointStyle: true,
                      fontFamily: 'Montserrat',
                  },
              },
              scales: {
                  xAxes: [{
                       barPercentage: 0.9,
                       barSpacing:3,
                      ticks: {
                          fontColor: "#8e9cad ",
  
                       },
                      display: true,
                      gridLines: {
                          display: true,
                          color: 'rgba(255,255,255,0.03)',
                          drawBorder: false
                      },
                      scaleLabel: {
                          display: false,
                          labelString: 'Month',
                          fontColor: 'rgba(255,255,255,0.5)'
                      }
                  }],
                  yAxes: [{
                      ticks: {
                          fontColor: "rgba(255,255,255,0.5)",
                       },
                      display: true,
                      gridLines: {
                          display: true,
                          color: 'rgba(255,255,255,0.03)',
                          drawBorder: false
                      },
                      scaleLabel: {
                          display: false,
                          labelString: 'sales',
                          fontColor: 'rgba(255,255,255,0.5)'
                      }
                  }]
              },
              title: {
                  display: false,
                  text: 'Normal Legend'
              }
          }
      });
      /* Chartjs (#page-load) closed */
  
  
      /* sparkline_bar21 */
      $(".sparkline_bar21").sparkline([2, 4, 3, 4, 5, 4,5,3,4,5,2,4,5,4], {
          type: 'bar',
          height: 40,
          width:250,
          barWidth: 3,
          barSpacing: 7,
          colorMap: {
              '9': '#a1a1a1'
          },
          barColor: '#2393ff'
      });
      /* sparkline_bar21 end */
  
      /* sparkline_bar22 */
      $(".sparkline_bar22").sparkline([2, 4, 3, 4, 5, 4,5,3,4,5,2,4,5,4], {
          type: 'bar',
          height: 40,
          width:250,
          barWidth: 3,
          barSpacing: 7,
          colorMap: {
              '9': '#a1a1a1'
          },
          barColor: '#f96158'
      });
      /* sparkline_bar22 end */
  
      /*sparkline*/
      var randomizeArray = function (arg) {
          var array = arg.slice();
          var currentIndex = array.length,
          temporaryValue, randomIndex;
          while (0 !== currentIndex) {
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
  
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
          }
          return array;
      }
      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];
      
      
      //Spark1
      var spark1 = {
        chart: {
          type: 'area',
          height: 50,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
         curve: 'smooth',
          width:2
        },
        fill: {
          opacity: 0.3,
          gradient: {
            enabled: false
          }
        },
        series: [{
          name: 'Total Sales',
          data: randomizeArray(sparklineData)
        }],
        yaxis: {
          min: 0
        },
        colors: ['#4a32d4'],
        
      }
      var spark1 = new ApexCharts(document.querySelector("#spark1"), spark1);
      spark1.render();
      
      
      
      //Spark2
      var spark2 = {
        chart: {
          type: 'area',
          height: 50,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
         curve: 'smooth',
          width:2
        },
        fill: {
          opacity: 0.3,
          gradient: {
            enabled: false
          }
        },
        series: [{
          name: 'Total Profits',
          data: randomizeArray(sparklineData)
        }],
        yaxis: {
          min: 0
        },
        colors: ['#2393ff'],
        
      }
      var spark2 = new ApexCharts(document.querySelector("#spark2"), spark2);
      spark2.render();
      
      
      
      //Spark3
      var spark3 = {
        chart: {
          type: 'area',
          height: 50,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          curve: 'smooth',
          width:2
        },
        fill: {
          opacity: 0.3,
          gradient: {
            enabled: false
          }
        },
        series: [{
          name: 'Total Orders',
          data: randomizeArray(sparklineData)
        }],
        yaxis: {
          min: 0
        },
        colors: ['#fb1c52'],
        
      }
      var spark3 = new ApexCharts(document.querySelector("#spark3"), spark3);
      spark3.render();
      
      
      
      //Spark4
      var spark4 = {
        chart: {
          type: 'area',
          height: 50,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
         curve: 'smooth',
          width:2
        },
        fill: {
          opacity: 0.3,
          gradient: {
            enabled: false
          }
        },
        series: [{
          name: 'Total Sales Revenue',
          data: randomizeArray(sparklineData)
        }],
        yaxis: {
          min: 0
        },
        colors: ['#eab407'],
        
      }
      var spark4 = new ApexCharts(document.querySelector("#spark4"), spark4);
      spark4.render();

      /*----- appex (#doughnut) closed -----*/
	 var options = {
        chart: {
            type: 'donut',
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false
        },
        series: [4678,3789,2137,1137,1037],
        colors:['#4caf50','#4a32d4','#fb1c52','#2dcbf7','#eab407'],
        labels: [
                "SMK Negeri 1 Depok",
                "SMP Negeri 2 Bandung",
                "SMA Yarsi Jakarta",
                "SMK Taruna Bhakti",
                "SD Cisalak 3",
            ],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    show: false,
                }
            }
        }],
       
    }

var chart = new ApexCharts(
    document.querySelector("#doughnut"),
    options
);

chart.render()

function appendData() {
    var arr = chart.w.globals.series.slice()
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
    return arr;
}

function removeData() {
    var arr = chart.w.globals.series.slice()
    arr.pop()
    return arr;
}

function randomize() {
    return chart.w.globals.series.map(() => {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1
    })
}

function reset() {
    return options.series
}
    
/*----- appex (#doughnut) closed -----*/

/* echart (#echartArea3) open */
var areaData3 = [
    {
      name: 'Akses Pengguna',
      type: 'bar',
      smooth: true,
      data: [500, 680, 780, 720, 900, 978],
	  symbolSize:20,
	  barWidth: 20,
	    itemStyle: {
			normal: { barBorderRadius: [50 ,50, 0 ,0],
					color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2575fc'},
                            {offset: 1, color: '#4a32d4'}
                        ]
                    )
			}
		},
    },
	{
      name: 'Rumah Belajar',
      type: 'line',
      smooth: true,
      data: [500, 620, 580, 600, 230, 220],
	  symbolSize:5,
	    itemStyle: {
			normal: { barBorderRadius: [50 ,50, 0 ,0],
					color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#fd6f82'},
                            {offset: 1, color: '#fb1c52'}
                        ]
                    )
			}
		},
    },
    {
        name: 'Website Lain',
        type: 'line',
        smooth: true,
        data: [450, 520, 529, 500, 268, 430],
        symbolSize:5,
          itemStyle: {
              normal: { barBorderRadius: [50 ,50, 0 ,0],
                      color: new echarts.graphic.LinearGradient(
                          0, 0, 0, 1,
                          [
                              {offset: 0, color: '#ffc107'},
                              {offset: 1, color: '#ffc107'},
                          ]
                      )
              }
          },
      },
      {
        name: 'Lihat Konten Disiarkan',
        type: 'line',
        smooth: true,
        data: [250, 320, 329, 300, 280, 328],
        symbolSize:5,
          itemStyle: {
              normal: { barBorderRadius: [50 ,50, 0 ,0],
                      color: new echarts.graphic.LinearGradient(
                          0, 0, 0, 1,
                          [
                              {offset: 0, color: '#673ab7'},
                              {offset: 1, color: '#673ab7'},
                          ]
                      )
              }
          },
      },
    
  ];

  var optionArea3 = {
    grid: {
      top: '6',
      right: '25',
      bottom: '17',
      left: '25',
    },
    xAxis: {
      data: ['2020-10-22','2020-10-23', '2020-10-24', '2020-10-25', '2020-10-26', '2020-10-27' ],
      boundaryGap: false,
      axisLine: {
        lineStyle: { color: 'rgba(142, 156, 173, 0.2)' }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad ',
		display:'false'
      }
    },
	tooltip: {
		show: true,
		showContent: true,
		alwaysShowContent: true,
		triggerOn: 'mousemove',
		trigger: 'axis',
		axisPointer:
			{
				label: {
					show: false,
				}
			}

	},
    yAxis: {
      splitLine: {
        lineStyle: { color: 'rgba(142, 156, 173, 0.2)' },
		display:false
      },
      axisLine: {
        lineStyle: { color: 'rgba(142, 156, 173, 0.2)' },
		display:false
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad '
      }
    },
    series: areaData3,
    color:[ '#32cafe']
  };
	
  var chartArea3 = document.getElementById('echartArea3');
  var areaChart3 = echarts.init(chartArea3);
  areaChart3.setOption(optionArea3);
  /* echart (#echartArea3) closed */
  
  });
  
  
  
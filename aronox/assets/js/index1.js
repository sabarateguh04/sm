// Weekly Alert
$(function(e){
  'use strict'

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
  
	/* chartjs (#sales) */
	var myCanvas = document.getElementById("sales");
	
	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke = myCanvasContext.createLinearGradient(0, 80, 0, 280);
	gradientStroke.addColorStop(0, 'rgba(74, 50, 212, 0.8)');
	gradientStroke.addColorStop(1, 'rgba(74, 50, 212, 0.09) ');
    var myChart = new Chart( myCanvas, {
		type: 'line',
		data: {
            labels: ["Januari","Februari","Meret", "April","Mei", "Juni","Juli","Agustus","September","Oktober", "November", "Desember" ],
            type: 'line',
            datasets: [ {
				label: 'Yearly Sales',
				data: [54, 35, 24, 64, 43, 55, 39,60, 61, 54, 62, 63],
				backgroundColor: gradientStroke,
				borderColor: '#4a32d4',
				pointBackgroundColor:'#fff',
				pointHoverBackgroundColor:gradientStroke,
				pointBorderColor :'#007adf',
				pointHoverBorderColor :gradientStroke,
				pointBorderWidth :0,
				pointRadius :0,
				pointHoverRadius :0,
				lineTension: 0.2,
				 borderWidth: 2,
                    fill: 'origin'
            }, ]
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
			 stepsize: 200,
                min: 0,
                max: 400,
			legend: {
				display: false,
				labels: {
					usePointStyle: false,
				},
			},
			scales: {
				xAxes: [{
					
					display: true,
					gridLines: {
						display: false,
						drawBorder: false
					},
					ticks: {
                            fontColor: '#b0bac9',
                            autoSkip: true,
                            maxTicksLimit: 9,
                            maxRotation: 0,
                            labelOffset: 10
                        },
					scaleLabel: {
						display: false,
						labelString: 'Month',
						fontColor: 'transparent'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#b0bac9",
					 },
					display: true,
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'sales',
						fontColor: 'transparent'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* chartjs (#sales) closed */
	
	/* sparkline_bar31 */
	$(".sparkline_bar31").sparkline([2, 4, 3, 4, 5, 4,5,3,4,5,2,4,5,4], {
		type: 'bar',
		height: 50,
		width:250,
		barWidth: 4,
		barSpacing: 7,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#27af06'
	});
	/* sparkline_bar31 end */
	
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
    var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46,47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41];
	//Spark1
    var spark1 = {
      chart: {
        type: 'area',
        height: 85,
		width: '100%',
		lineWidth: 0.1,
		borderWidth:1,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'smooth',
		 width: 2,
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
});

//  Server Heathly
$(function(e){
	'use strict'
	
	  /* chartjs (#sales) */
	  var myCanvas = document.getElementById("serverh");
	  
	  var myCanvasContext = myCanvas.getContext("2d");
	  var gradientStroke = myCanvasContext.createLinearGradient(0, 80, 0, 280);
	  gradientStroke.addColorStop(0, 'rgba(74, 50, 212, 0.8)');
	  gradientStroke.addColorStop(1, 'rgba(74, 50, 212, 0.09) ');
	  var myChart = new Chart( myCanvas, {
		  type: 'line',
		  data: {
			  labels: ["1981","1982","1983", "1984","1985", "1986","1987","1988","1989","1990", "1991", "1992","1993","1994","1995","1996","1997","1998","1999", "2000",
					   "2001","2002", "2003", "2004","2005","2006","2007", "2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019", ],
			  type: 'line',
			  datasets: [ {
				  label: 'Yearly Sales',
				  data: [54, 35, 24, 64, 43, 55, 39,60, 61, 54, 62, 63, 54, 55, 64, 34, 46, 34,  64, 50,  34, 23, 19,  43, 45, 60, 54, 41, 45, 26, 45, 21, 45, 64, 35, 65, 34, 34, 43, 46, 24, 23],
				  backgroundColor: gradientStroke,
				  borderColor: '#4a32d4',
				  pointBackgroundColor:'#fff',
				  pointHoverBackgroundColor:gradientStroke,
				  pointBorderColor :'#007adf',
				  pointHoverBorderColor :gradientStroke,
				  pointBorderWidth :0,
				  pointRadius :0,
				  pointHoverRadius :0,
				  lineTension: 0.2,
				   borderWidth: 2,
					  fill: 'origin'
			  }, ]
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
			   stepsize: 200,
				  min: 0,
				  max: 400,
			  legend: {
				  display: false,
				  labels: {
					  usePointStyle: false,
				  },
			  },
			  scales: {
				  xAxes: [{
					  
					  display: true,
					  gridLines: {
						  display: false,
						  drawBorder: false
					  },
					  ticks: {
							  fontColor: '#b0bac9',
							  autoSkip: true,
							  maxTicksLimit: 9,
							  maxRotation: 0,
							  labelOffset: 10
						  },
					  scaleLabel: {
						  display: false,
						  labelString: 'Month',
						  fontColor: 'transparent'
					  }
				  }],
				  yAxes: [{
					  ticks: {
						  fontColor: "#b0bac9",
					   },
					  display: true,
					  gridLines: {
						  display: false,
						  drawBorder: false
					  },
					  scaleLabel: {
						  display: false,
						  labelString: 'sales',
						  fontColor: 'transparent'
					  }
				  }]
			  },
			  title: {
				  display: false,
				  text: 'Normal Legend'
			  }
		  }
	  });
	  /* chartjs (#sales) closed */
	  
	  /* sparkline_bar31 */
	  $(".sparkline_bar31").sparkline([2, 4, 3, 4, 5, 4,5,3,4,5,2,4,5,4], {
		  type: 'bar',
		  height: 50,
		  width:250,
		  barWidth: 4,
		  barSpacing: 7,
		  colorMap: {
			  '9': '#a1a1a1'
		  },
		  barColor: '#27af06'
	  });
	  /* sparkline_bar31 end */
	  
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
	  var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46,47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41];
	  //Spark1
	  var spark1 = {
		chart: {
		  type: 'area',
		  height: 85,
		  width: '100%',
		  lineWidth: 0.1,
		  borderWidth:1,
		  sparkline: {
			enabled: true
		  },
		},
		stroke: {
		  curve: 'smooth',
		   width: 2,
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
});



	/*-----canvasDoughnut-----*/
	
	var options = {
		chart: {
			width: 380,
			height:230,
			type: 'donut',
		},
		dataLabels: {
			enabled: false
		},
		series: [200, 150, 20, 120, 12, 4,2],
		colors:['#4a32d4','#f7592d','#f7be2d','#f72d66', '#3abc1d','#2dcbf7','#555'],
		labels: [
				"Tervalidasi",
				"Terberkas",
				"Dikirim",
				"Dikonfirmasi",
				"Lunas",
				"Belum Bayar",
				"Blokir SIM"
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
		document.querySelector("#donat"),
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

   

/*-----canvasDoughnut-----*/

/* Chartjs (#bar-chart) */
var myCanvas = document.getElementById("bar-chart");
myCanvas.height="202";
var myCanvasContext = myCanvas.getContext("2d");
var gradientStroke1 = myCanvasContext.createLinearGradient(0, 120, 0, 180);
gradientStroke1.addColorStop(0, '#2575fc');
gradientStroke1.addColorStop(1, '#4a32d4');

var myChart = new Chart(myCanvas, {
	type: 'bar',
	data: {
		labels: ["Januari", "Februari", "Maret", "April", "Mei"],
		datasets: [{
			label: 'Terkumpul',
			data: [1700000, 1800000, 1900000, 2000000, 1290000],
			backgroundColor: gradientStroke1,
			hoverBackgroundColor: gradientStroke1,
			hoverBorderWidth: 2,
			hoverBorderColor: 'gradientStroke1'
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
			},
		},
		scales: {
			xAxes: [{
				 barPercentage: 0.3,
				ticks: {
					fontColor: "#9493a9" ,

				 },
				display: true,
				gridLines: {
					color: 'rgb(227, 226, 236,0.2)',
					drawBorder: false
				},
				scaleLabel: {
					display: false,
					labelString: 'Month',
					fontColor: '#000'
				}
			}],
			yAxes: [{
				ticks: {
					fontColor: "#9493a9" ,
				 },
				display: true,
				gridLines: {
					color: 'rgb(227, 226, 236,0.2)',
					drawBorder: false
				},
				scaleLabel: {
					display: false,
					labelString: 'sales',
					fontColor: 'transparent'
				}
			}]
		},
		title: {
			display: false,
			text: 'Normal Legend'
		}
	}
});
/* Chartjs (#bar-chart) closed */
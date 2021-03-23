window.onload=function(){
    var canvas = document.getElementById("bar").getContext("2d");
    var myChart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: ["FHA","BROOKLYN","MANHATTAN","BRONX","QUEENS","STATEN ISLAND", "NON DEVELOPMENT FACILITY"],
            datasets: [{
		label: 'Water Consumption',
                data: [16302,6334,5661,3339,2904,80,7],
                backgroundColor: ["#ff0000","#ff8400","#fff700","#04ff00","#0099ff","#0011ff","#7b00ff"],
            }]
        },
        options: {
            title:{
                display: true,
                text: 'Water Consumption in New York City by Borough',
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


    var canvas = document.getElementById("Pie").getContext("2d");
    var myChart = new Chart(canvas, {
        type: 'pie',
        data: {
            labels: ["4 Yr JUNE","5 Yr JUNE","6 Yr","4 Yr AUGUST","5 Yr AUGUST",],
            datasets: [{
                data: [110,100,90,80,50],
                backgroundColor: ["#0033ff","#5e79e6","#8799de","#97a2cc","#a6acbf"],
            }]
        },
        options: {
            title:{
                display: true,
                text: '2005 - 2015 Graduation Outcomes',
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

};
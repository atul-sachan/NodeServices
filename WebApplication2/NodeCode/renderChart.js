var generate = require('node-chartist');

module.exports = function (callback, type, options, data) {
    generate(type, options, data).then(
        result => callback(null, result), // Success case
        error => callback(error)          // Error case
    );
};
//var generate = require('./orgchart.js');
//var Window = require('window');
//var Highcharts = require('highcharts');
//module.exports = function (callback) {
//    //var ele = Window.document.createElement("div");
//    //ele.setAttribute("id", "tree");
//    //var chart = new OrgChart(ele, {
//    //    nodeBinding: {
//    //        field_0: "name"
//    //    },
//    //    nodes: [
//    //        { id: 1, name: "Amber McKenzie" },
//    //        { id: 2, pid: 1, name: "Ava Field" },
//    //        { id: 3, pid: 1, name: "Peter Stevens" }
//    //    ]
//    //});
//    var chart = Highcharts.chart('container', {

//        title: {
//            text: 'Solar Employment Growth by Sector, 2010-2016'
//        },

//        subtitle: {
//            text: 'Source: thesolarfoundation.com'
//        },

//        yAxis: {
//            title: {
//                text: 'Number of Employees'
//            }
//        },
//        legend: {
//            layout: 'vertical',
//            align: 'right',
//            verticalAlign: 'middle'
//        },

//        plotOptions: {
//            series: {
//                label: {
//                    connectorAllowed: false
//                },
//                pointStart: 2010
//            }
//        },

//        series: [{
//            name: 'Installation',
//            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
//        }, {
//            name: 'Manufacturing',
//            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
//        }, {
//            name: 'Sales & Distribution',
//            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//        }, {
//            name: 'Project Development',
//            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
//        }, {
//            name: 'Other',
//            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
//        }],

//        responsive: {
//            rules: [{
//                condition: {
//                    maxWidth: 500
//                },
//                chartOptions: {
//                    legend: {
//                        layout: 'horizontal',
//                        align: 'center',
//                        verticalAlign: 'bottom'
//                    }
//                }
//            }]
//        }

//    });
//    callback(null, chart);

//}
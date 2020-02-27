var createServerRenderer = require('aspnet-prerendering').createServerRenderer;
var chart = require('@balkangraph/orgchart.js');
var Window = require('window');
var { JSDOM } = require("jsdom");
module.exports = createServerRenderer(function (params) {
    return new Promise(function (resolve, reject) {
        //var message = 'The HTML was returned by the prerendering boot function. '
        //    + 'The boot function received the following params:'
        //'<div style="width:100%; height:700px;" id="orgchart"/>' +
        //    + '<pre>' + JSON.stringify(params, null, 4) + '</pre>';
        //var window = new Window();
        debugger;
        //var dom = new JSDOM('<html>            <body>                <div id="orgchart" style="width:100%; height:700px;"></div>                <script src="orgchart.js"></script>                <script>                    var chart1 = new OrgChart(dom.window.document.getElementById("orgchart"),            {                lazyLoading: true,                mouseScrool: chart.action.none,                menu: {                    pdf: { text: "Export PDF" },                    png: { text: "Export PNG" },                    svg: { text: "Export SVG" },                    csv: { text: "Export CSV" }                },                nodeMenu: {                    pdf: { text: "Export PDF" },                    png: { text: "Export PNG" },                    svg: { text: "Export SVG" }                },                nodeBinding: {                    field_0: "name",                    field_1: "title",                    img_0: "img"                },                nodes: [                    { id: 1, name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },                    { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },                    { id: 3, pid: 1, name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },                    { id: 4, pid: 3, name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" }                ]            });                </script>            </body>        </html>', { runScripts: "dangerously" });
        var dom = new JSDOM('<html><body><div id="chart">p</div></html>');

        resolve({
            html: dom.,
            globals: { sampleData: { nodeVersion: process.version } }
        });
    });
});

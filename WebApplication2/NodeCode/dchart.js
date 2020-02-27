// Include all modules we need
const svg2png = require("svg2png");
const { JSDOM } = require("jsdom");
const d3 = require('d3');

// Define module
// callback - function to return data to caller
// options - chart options defined in controller
// data - chart data coming from controller
module.exports = function (callback, options, data) {

    // Create disconnected HTML DOM and attach it to D3
    //var dom = new JSDOM('<html><body><div id="chart"></div></html>');
    //dom.window.d3 = d3.select(dom.window.document);

    //// Build D3 chart
    //var width = options.width || 360;
    //var height = options.height || 360;
    //var radius = Math.min(width, height) / 2;

    //var color = d3.scaleOrdinal(d3.schemeBlues[9]);

    //var svg = dom.window.d3.select('#chart')
    //    .append('svg')
    //    .attr('width', width)
    //    .attr('height', height)
    //    .append('g')
    //    .attr('transform', 'translate(' + (width / 2) +
    //        ',' + (height / 2) + ')');

    //var arc = d3.arc()
    //    .innerRadius(0)
    //    .outerRadius(radius);

    //var pie = d3.pie()
    //    .value(function (d) { return d.count; })
    //    .sort(null);

    //var path = svg.selectAll('path')
    //    .data(pie(data))
    //    .enter()
    //    .append('path')
    //    .attr('d', arc)
    //    .attr('fill', function (d) {
    //        return color(d.data.label);
    //    });

    var dom = new JSDOM('<html>            <body>                <div id="orgchart" style="width:100%; height:700px;"></div>                <script src="orgchart.js"></script>                <script>                    var chart1 = new OrgChart(dom.window.document.getElementById("orgchart"),            {                lazyLoading: true,                mouseScrool: chart.action.none,                menu: {                    pdf: { text: "Export PDF" },                    png: { text: "Export PNG" },                    svg: { text: "Export SVG" },                    csv: { text: "Export CSV" }                },                nodeMenu: {                    pdf: { text: "Export PDF" },                    png: { text: "Export PNG" },                    svg: { text: "Export SVG" }                },                nodeBinding: {                    field_0: "name",                    field_1: "title",                    img_0: "img"                },                nodes: [                    { id: 1, name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },                    { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },                    { id: 3, pid: 1, name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },                    { id: 4, pid: 3, name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" }                ]            });                </script>            </body>        </html>', { runScripts: "dangerously" });

    // Convert SVG to PNG and return it to controller
    //var svgText = dom.window.d3.select('#chart').html();
    console.log(dom);
    var svgText = dom.window.document.querySelector("#orgchart").innerHTML;
    callback(null, svgText);
    //svg2png(Buffer.from(svgText), { width: width, height: height })
    //    .then(buffer => 'data:image/png;base64,' + buffer.toString('base64'))
    //    .then(buffer => callback(null, buffer));
};
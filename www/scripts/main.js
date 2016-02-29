console.log('hello')

var lineData = {};
var routeParams = window.location.pathname.split("/");
var username = (routeParams[routeParams.length-1]);

if (username.toLowerCase() === 'userinfo') {
  username = "";
}

$.get( "/api/" + username, function( data ) {
  lineData = data.dailySteps;
  initChart(lineData);
});

function initChart(data) {
  //on resize, remove old chart
  d3.select("svg").remove();
  //insert new chart
  var canvas = d3.select("#main.card").append("svg");
  canvas.attr('id', 'visualisation');

  var vis = d3.select('#visualisation'),
      WIDTH = $('#visualisation').width(),
      HEIGHT = $('#visualisation').height(),
      MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
      },
      xRange = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(lineData, function(d, index) {
        return index;
      }), d3.max(lineData, function(d, index) {
        return index;
      })]),
      yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(lineData, function(d) {
        return 0;
      }), d3.max(lineData, function(d) {
        return d.dailySteps;
      })]),
      xAxis = d3.svg.axis()
        .scale(xRange)
        .tickSize(5)
        .tickSubdivide(true),
      yAxis = d3.svg.axis()
        .scale(yRange)
        .tickSize(5)
        .orient('left')
        .tickSubdivide(true);

  vis.append('svg:g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
    .call(xAxis);

  vis.append('svg:g')
    .attr('class', 'y axis')
    .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
    .call(yAxis);

  var lineFunc = d3.svg.line()
    .x(function(d, index) {
      return xRange(index);
    })
    .y(function(d) {
      return yRange(d.dailySteps);
    })
    // .interpolate('linear');

  vis.append('svg:path')
    .attr('d', lineFunc(lineData))
    .attr('stroke', 'blue')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

}

$( window ).resize(function() {
  initChart(lineData);
});
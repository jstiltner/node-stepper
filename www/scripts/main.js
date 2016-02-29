console.log('hello')

var lineData = [
  { dailySteps: 17000, username: 'AJPCodes' },
  { dailySteps: 9000, username: 'AJPCodes' },
  { dailySteps: 8000, username: 'AJPCodes' },
  { dailySteps: 17000, username: 'AJPCodes' },
  { dailySteps: 9000, username: 'AJPCodes' },
  { dailySteps: 8000, username: 'AJPCodes' },
  { dailySteps: 11000, username: 'AJPCodes' },
  { dailySteps: 12000, username: 'AJPCodes' },
  { dailySteps: 14000, username: 'AJPCodes' },
  { dailySteps: 15000, username: 'AJPCodes' },
  { dailySteps: 15000, username: 'AJPCodes' },
  { dailySteps: 17000, username: 'AJPCodes' },
  { dailySteps: 16000, username: 'AJPCodes' },
  { dailySteps: 8000, username: 'AJPCodes' },
  { dailySteps: 8000, username: 'AJPCodes' },
  { dailySteps: 11000, username: 'AJPCodes' },
  { dailySteps: 11000, username: 'AJPCodes' },
  { dailySteps: 8000, username: 'AJPCodes' },
  { dailySteps: 17000, username: 'AJPCodes' },
  { dailySteps: 17000, username: 'AJPCodes' },
  { dailySteps: 17000, username: 'AJPCodes' },
  { dailySteps: 14000, username: 'AJPCodes' },
  { dailySteps: 16000, username: 'AJPCodes' },
  { dailySteps: 9000, username: 'AJPCodes' },
  { dailySteps: 15000, username: 'AJPCodes' },
  { dailySteps: 8000, username: 'AJPCodes' },
  { dailySteps: 9000, username: 'AJPCodes' },
  { dailySteps: 14000, username: 'AJPCodes' },
  { dailySteps: 9000, username: 'AJPCodes' },
  { dailySteps: 12000, username: 'AJPCodes' },
  { dailySteps: 11000, username: 'AJPCodes' },
  { dailySteps: 15000, username: 'AJPCodes' },
  { dailySteps: 15000, username: 'AJPCodes' },
  { dailySteps: 8000, username: 'AJPCodes' },
  { dailySteps: 9000, username: 'AJPCodes' },
  { dailySteps: 12000, username: 'AJPCodes' },
  { dailySteps: 8000, username: 'AJPCodes' },
  { dailySteps: 10000, username: 'AJPCodes' },
  { dailySteps: 8000, username: 'AJPCodes' },
  { dailySteps: 8000, username: 'AJPCodes' },
  { dailySteps: 9000, username: 'AJPCodes' },
  { dailySteps: 10000, username: 'AJPCodes' },
  { dailySteps: 13000, username: 'AJPCodes' },
  { dailySteps: 12000, username: 'AJPCodes' },
  { dailySteps: 15000, username: 'AJPCodes' },
  { dailySteps: 11000, username: 'AJPCodes' },
  { dailySteps: 12000, username: 'AJPCodes' },
  { dailySteps: 12000, username: 'AJPCodes' },
  { dailySteps: 1500, username: 'AJPCodes' },
  { dailySteps: 1500, username: 'AJPCodes' },
  { dailySteps: 2000, username: 'AJPCodes' },
  { dailySteps: 15000, username: 'AJPCodes' },
  { dailySteps: 10000, username: 'AJPCodes' },
  { dailySteps: 20000, username: 'AJPCodes' } ];

function initChart(data) {
  //on resize, remove old chart
  d3.select("svg").remove();
  //insert new chart
  var canvas = d3.select("body").append("svg");
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
        return d.dailySteps;
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

initChart(lineData);

$( window ).resize(function() {
  initChart(lineData);
});
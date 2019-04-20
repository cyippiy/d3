/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

let svg = d3.select("#chart-area").append("svg")
    .attr("height",400)
    .attr("width",500);

let line = svg.append("line")
    .attr("x1",10)
    .attr("x2",50)
    .attr("y1",20)
    .attr("y2",50)
    .attr("stroke","green")
    .attr("stroke-width",10);

let rectangle = svg.append("rect")
    .attr("x",200)
    .attr("y",200)
    .attr("width",30)
    .attr("height",40)
    .attr("fill","red");

let elip = svg.append("ellipse")
    .attr("cx",30)
    .attr("cy",180)
    .attr("rx",10)
    .attr("ry",50)
    .attr("fill","yellow");
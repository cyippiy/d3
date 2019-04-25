/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

let svg = d3.select("#chart-area")
    .append("svg")
        .attr("width", "800")
        .attr("height", "800");

d3.json("data/revenues.json").then( (data) =>{
    data.forEach( (d) => {
        d.revenue = +d.revenue;
        d.profit = +d.profit;
    });
    console.log(data);
})
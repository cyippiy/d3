/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/
let margin = { left:40, right:20, top:10, bottom:30};
let width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

let g = d3.select("#chart-area")
    .append("svg")
        .attr("width", width+margin.left+margin.right)
        .attr("height", height+margin.top+margin.bottom)
    .append("g")
        .attr("transform", `translate( ${margin.left}, ${margin.top} )`);

d3.json("data/revenues.json").then( (data) =>{
    data.forEach( (d) => {
        d.revenue = +d.revenue;
        d.profit = +d.profit;
    });
    console.log(data);
    let x = d3.scaleBand()
        .domain(data.map((d)=> { console.log(d.month); return d.month }))
        .range([0, width])
        .paddingInner(0.3)
        .paddingOuter(0.3);
        
    let y = d3.scaleLinear()
        .domain([0,d3.max(data,(d)=>{
            return d.revenue;
        })])
        .range([height,0]);

    let rects = g.selectAll("rect")
        .data(data);

    let xAxisCall = d3.axisBottom(x);

    g.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxisCall);

    let yAxisCall = d3.axisLeft(y);
    rects.enter()
        .append("rect")
            .attr("y", (d) => {return y(d.revenue)})
            .attr("x", (d) => {return x(d.month)})
            .attr("width", x.bandwidth )
            .attr("height", (d) => {return height - y(d.revenue)})
            .attr("fill", "grey");
})
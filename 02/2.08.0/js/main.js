/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("data/buildings.json").then( (data) => {
    data.forEach( (d) => {
        d.height = +d.height;
    });

    let svg = d3.select("#chart-area").append("svg")
        .attr("width",500)
        .attr("height",500);

    let rectangles = svg.selectAll("rect")
        .data(data);

    rectangles.enter()
        .append("rect")
            .attr("y",0)
            .attr("x",(d , i) => {
                return (i * 60);
            })
            .attr("width", 40)
            .attr("height", (d)=> {
                return d.height;
            })
            .attr("fill", (d) => {
                return "grey"
            });

}).catch((error) => {
    console.log(error);
});


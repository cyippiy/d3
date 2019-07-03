/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 2 - Gapminder Clone
*/
const margin = { left: 80, right: 20, top: 50, bottom: 100 };
const height = 500 - margin.top - margin.bottom,
	width = 800 - margin.left - margin.right;


const g = d3.select("#chart-area")
	.append("svg")
		.attr("width",width + margin.left + margin.right)
		.attr("height",height + margin.top + margin.bottom)
	.append("g")
		.attr("transform",`translate(${margin.left},${margin.top})`);

d3.json("data/data.json").then(function(data){
	console.log(data);
	data.forEach();

	let y = d3.scaleLinear()
		.domain([0,90])
		.range();
})
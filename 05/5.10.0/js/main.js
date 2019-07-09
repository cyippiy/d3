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

const xAxisGroup = g.append("g")
	.attr("class","x axis")
	.attr("transform", `translate(0,${height})`);

const yAxisGroup = g.append("g")
	.attr("class", "y axis");

let x = d3.scaleBand()
	.range([0,width])
	.padding(0.2);

let y = d3.scaleLinear()
	.range([height,0]);


d3.json("data/data.json").then(function(data){
	console.log(data);
	// data.forEach();

	let y = d3.scaleLinear()
		.domain([0,90])
		.range();
})
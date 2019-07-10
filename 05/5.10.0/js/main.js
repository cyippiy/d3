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

let time = 0;
// let x = d3.scaleBand()
// 	.range([0,width])
// 	.padding(0.2);

// let y = d3.scaleLinear()
// 	.range([height,0]);

let x = d3.scaleLog()
	.base(10)
	.range([0,width])
	.domain([142,150000]);

let y = d3.scaleLinear()
	.range([height,0])
	.domain([0,90]);
let area = d3.scaleLinear()
	.range([25*Math.PI, 1500*Math.PI])
	.domain([2000, 1400000000]);	
let continentColor = d3.scaleOrdinal(d3.schemePastel1);


let xLabel = g.append("text")
	.attr("y", height+50)
	.attr("x", width / 2)
	.attr("font-size", "20px")
	.attr("text-anchor", "middle")
	.text("GDP Per Capita ($)");
let yLabel = g.append("text")
	.attr("y",-40)
	.attr("x",-170)
	.attr("font-size", "20px")
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Life Expectancy (Years)");
let timeLabel = g.append("text")
	.attr("y", height-10)
	.attr("x", width - 40)
	.attr("font-size", "40px")
	.attr("opacity", "0.4")
	.attr("text-anchor", "middle")
	.text("1800");


let xAxisCall = d3.axisBottom(x)
	.tickValues([400,4000,40000])
	.tickFormat(d3.format("$"));
g.append("g")
	.attr("class", "x axis")
	.attr("transform", `translate(0,${height})`)
	.call(xAxisCall);

let yAxisCall = d3.axisLeft(y)
	.tickFormat( (d) => +d );
g.append("g")
	.attr("class","y axis")
	.call(yAxisCall);


d3.json("data/data.json").then(function(data){
	console.log(data);

	const formattedData = data.map( (year) => {
		return year["countries"].filter( (country) => {
			let exists = (country.income && country.life_exp );
			return exists;
		}).map( (country) => {
			country.income = +country.income;
			country.life_exp = +country.life_exp;
			return country;
		});
	});

	d3.interval(() => {
		time = (time < 214) ? time+1 : 0
		update(formattedData[time]);
	},100);

	update(formattedData[0]);
});

function update(data){
	let t = d3.transition()
		.duration(100);
	let circles = g.selectAll("circle").data(data, (d) => {
		return d.country;
	});

	circles.exit()
		.attr("class", "exit")
		.remove();

	circles.enter()
		.append("circle")
		.attr("fill", (d) => continentColor(d.continent))
		.merge(circles)
		.transition(t)
			.attr("cy", (d) => y(d.life_exp))
			.attr("cx", (d) => x(d.income))
			.attr("r", (d) => Math.sqrt(area(d.population) / Math.PI));

	timeLabel.text(+(time + 1800))
}
import './style.css';
import cont from './data/antarctic_coastline_low_res.geojson';
import bib from './data/geomap_sources.geojson';
import * as d3 from 'd3';

const window = {width: 960, height: 1160};
const base = d3.select("body")
const chart = base.append("canvas")
                .attr("width", window.width)
                .attr("height", window.height);
const context = chart.node().getContext("2d")
const detachedContainer = document.createElement("custom")

const dataContainer = d3.select(detachedContainer);
const rangePad = 10


const drawCustom = (data: number[]) => {
    
    const dataBinding = dataContainer.selectAll("custom.rect").data(data, (d: number) => {return d})
    const scale = d3.scaleLinear().domain(d3.extent(data)).range([rangePad, window.width - rangePad])

    dataBinding
        .attr("size", 8)
        .transition()
        .duration(1000)
        .attr("size", 15)
        .attr("fillStyle", "green");

    dataBinding.enter()
        .append("custom")
        .classed("rect", true)
        .attr("x", scale)
        .attr("y", 100)
        .attr("size", 8)
        .attr("fillStyle", "red");
    
    dataBinding.exit()
        .attr("size", 8)
        .transition()
        .duration(1000)
        .attr("size", 5)
        .attr("fillStyle", "lightgrey");
    
}

const drawCanvas = () => {
    context.fillStyle = "#fff";
    context.rect(0, 0, window.width, window.height);
    context.fill()

    const elements = dataContainer.selectAll("custom.rect");
    elements.each(function (d){
        const node = d3.select(this);
        context.beginPath();
        context.fillStyle = node.attr("fillStyle");
        context.rect(Number(node.attr("x")), Number(node.attr("y")), Number(node.attr("size")), Number(node.attr("size")));
        context.fill()
        context.closePath()
    })
}

d3.timer(drawCanvas)
drawCustom([1, 2, 13, 20, 23])

drawCustom([1, 2,  12, 16, 20])
drawCustom([1,   13, 16, 20])
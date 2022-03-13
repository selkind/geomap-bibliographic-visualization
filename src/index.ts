import * as d3 from 'd3';

import cont from './data/antarctic_coastline_low_res.geojson';
import './style.css';


const main = async() => {
    const width = 960, height = 1160;
    const svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
    console.log(cont);

}

main()
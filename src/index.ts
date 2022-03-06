import * as d3 from "d3";
import './style.css'

const component = () => {
    const element = document.createElement('div');
    element.innerHTML = 'Hello World';
    element.classList.add('hello')
    return element
}
document.body.appendChild(component())

d3.select("p").style("color", "blue")
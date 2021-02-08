import React, { Component } from "react";
import '../css/slidercard.css'

class SliderCard extends Component {
    render() {
        return(
            <div id="slider" className="slider-principal">
                <h2>Bienvenido a Trap Family <img src="https://img.icons8.com/emoji/48/000000/hundred-points.png"/> Drill y Trap</h2>
                <button className="btn-home">Ir a Inicio</button>
            </div>
        )
    }
}

export default SliderCard;
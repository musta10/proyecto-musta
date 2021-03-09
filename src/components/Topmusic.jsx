import React, { Component } from "react";
import '../css/videos.css'
import music from '../assets/images/musica.png'
class Topmusic extends Component {
  render() {
    return (
        <>
        <div className="tituloTop"><h3 className="texto-top">El Top 5 en Canarias</h3>
        <img src={music} alt="music"/></div>
        
        <article className="video-top">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/37tmRDUK0FM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </article>
        <article className="video-top">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0Q5J38bpunI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </article>
        <article className="video-top">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/j3Lp4M9K-uw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </article>
        <article className="video-top">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cd5GNCgscPw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </article>
        <article className="video-top">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/y4mlhGVN-Ek" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </article>
    </>
    );
  }
}

export default Topmusic;

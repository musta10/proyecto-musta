import React, { Component } from "react";
import '../css/videos.css'
class Topmusic extends Component {
  render() {
    return (
        <>
        <article className="video-top">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/37tmRDUK0FM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </article>
        <article className="video-top">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/lEfkziQSmZI?start=6" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </article>
    </>
    );
  }
}

export default Topmusic;

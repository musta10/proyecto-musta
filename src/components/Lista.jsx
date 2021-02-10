import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class Lista extends Component {
    render() {
        return(
            <Tabs  defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab className="tab" eventKey="trap" title="Trap">
    {/* <Sonnet /> */}
  </Tab>
  <Tab eventKey="notrap" title="No Trap">
    {/* <Sonnet /> */}
  </Tab>
  <Tab eventKey="lanueva" title="La Nueva">
    {/* <Sonnet /> */}
  </Tab>
  <Tab eventKey="Top 5" title="Top 5">
    {/* <Sonnet /> */}
  </Tab>
</Tabs>
        )
    }
}

export default Lista;
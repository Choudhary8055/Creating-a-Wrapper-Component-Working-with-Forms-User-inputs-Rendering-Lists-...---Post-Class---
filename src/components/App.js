import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.relativeList = [
      { relativeListItem1: "Rahul" },
      { relativeListItem2: "Anita" },
      { relativeListItem3: "Saroj" },
      { relativeListItem4: "Ankita" }
    ];
  }
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key={` {relativeList} `}>
          {this.relativeList &&
            this.relativeList.map((item) => (
              <li>{item.relativeListItem}</li>
              //  <li>{item.relativeListItem2}</li>
              //  <li>{item.relativeListItem3}</li>
            ))}
        </ol>
      </div>
    );
  }
}

export default App;

import React from "react";
import TrafficLight from "./TrafficLight";

export default class TrafficLightContainer extends React.Component{
  constructor(...args){
    super(...args);
    this.state = {
      lightArray : []
    };
  }

  // addLight = () => {
  //   const { lightArray } = this.state;
  //   console.log('TrafficLightContainer.addLight'
  //     , '\n props: ', this.props
  //     , '\n state: ', this.state
  //     , '\n lightArray: ', lightArray
  //   );  
  // };

  addLight = () => this.setState({
    lightArray: this.state.lightArray.concat({ key: Math.random() })
  });

  removeTrafficLight = index => {
    const { lightArray } = this.state;

    let clone = lightArray.slice(0);
    clone.splice(index, 1);
    this.setState({ lightArray: clone });
  };
 
  render(){
    const { lightArray } = this.state;
    
    return <>        
      <div className="col-9 d-flex flex-wrap justify-content-center">
        <button
          onClick={this.addLight}
          className="position-fixed btn btn-danger" 
          style={{ bottom: '5%', left: '25%', zIndex: '1' }}
        >
          ADD TRAFFIC LIGHT
        </button>        
        { lightArray.map((light, index) => <TrafficLight
          key={light.key}
          onRemove={() => this.removeTrafficLight(index)}
        />) }
      </div>
      </>;
  }
}
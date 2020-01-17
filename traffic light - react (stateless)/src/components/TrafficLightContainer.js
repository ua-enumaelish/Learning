import React from 'react'
import TrafficLight from './TrafficLight'

export default class Container extends React.Component{
  constructor(...args){
    super(...args);    
    this.state = {
      lightArray : [],
      lights: [
        null, null, null       
      ]
    }
  }

  addLight = () => this.setState({
    lightArray: this.state.lightArray.concat({
      id: Math.random(),
      lampState: null,
      count: 0,
      timerID: null
    })
  });
  
  removeTrafficLight = index => {
    const { lightArray } = this.state;

    let clone = lightArray.slice(0);
    clone.splice(index, 1);
    this.setState({ lightArray: clone });
  };

  changeColor = index => {
    const { lightArray } = this.state;
    let clone = lightArray.slice(0); 

    clone[index].timerID = setInterval(() => {
      if(clone[index].count === 4){
        clone[index].count = 0;
      }
      clone[index].lampState = clone[index].count;   
      this.setState({lights: clone});
      clone[index].count++;
    },1000)
  }

  stopLighting = index => {
    const { lightArray } = this.state;
    let clone = lightArray.slice(0); 
    clearInterval(clone[index].timerID);
  }

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
          key={light.id}
          { ...light }          
          onRemove={() => this.removeTrafficLight(index)}
          onStart={() => this.changeColor(index)}
          onEnd={() => this.stopLighting(index)}
        />) }
      </div>
    </>;
  }
}
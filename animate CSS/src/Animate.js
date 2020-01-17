import React from "react";
import animateData from './animateData';

export default class Animate extends React.Component{
  constructor(...args){
    super(...args);
    this.state = {
      mainValue: "bounce",
      additionalValue: "In",
      id: 0,
      animate: null
    }
  }

  getMainOtions = (item, index)  => {
    return <>
      <optgroup
        label = { item.optgroup }
        key = { Math.random() }
      >
      </optgroup>
      <option
        value = { item.option }
        key = { Math.random() }
        onClick = { event => this.changeState(
          {id: index }          
          ) 
        }
      >
        { item.option }
      </option>
    </>
  }

  changeState = prop => {
    let clone = { 
      ...this.state,
      ...prop
    }
    console.log(clone)
      this.setState({ ...clone })
  }

  createOptions = option => {
    let options;
    for( let key in option){
      options = 
        <option
          value = {key}
        >
          {key}
        </option>
    }
    return options;
  }

  addClassName = () => {
    let getAnimate = "animated " + this.state.mainValue + this.state.additionalValue;
    this.changeState( { animate: getAnimate} );
    this.removeClassName();  
  }

  removeClassName = () => {
    setTimeout( () => this.changeState( { animate: null} ), 3000);  
  }

  render(){
    return(
      <>
        <h1
          className = {this.state.animate}
        >
          Hello
        </h1>

        {/* MAIN SELECT */}
        <div
          className = "selectContainer"
        >
          <select 
            className = "mainSelect selects"
            value = {this.state.mainValue}
            onChange = { event => this.changeState( { mainValue: event.target.value } ) }
          >
            { animateData.map( ( item, index ) => this.getMainOtions( item, index )) }
          </select>

          {/* ADDITIONAL SELECT */}
          <select
            className = "additionalSelect selects"
            value = {this.state.additionalValue}
            onChange = { event => this.changeState( { additionalValue: event.target.value } ) }
          >
            { animateData[this.state.id].options.map( option => this.createOptions(option)) }
          </select>
          <button
            className = "btn"
            onClick = { this.addClassName }
          >
            Click
          </button>
        </div>
      </>
    )
  }
}


           
      
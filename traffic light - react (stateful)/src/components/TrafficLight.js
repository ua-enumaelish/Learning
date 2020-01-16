import React from 'react'


class TraffickLight extends React.Component{
  constructor(...arg){
    super(...arg) 
    this.count = 0   
    this.state = {lights: [null, null, null]}
  }

  getLight(item, index){   
    switch(item){ 
      default: return <div key={index} className={`w-75 mb-3 rounded-circle bg-secondary`} style={{height: '100px'}}></div>;
      case 0: return <div key={index}  className={`w-75 mb-3 rounded-circle bg-danger`} style={{height: '100px'}}></div>; 
      case 1: return <div key={index}  className={`w-75 mb-3 rounded-circle bg-warning`} style={{height: '100px'}}></div>;
      case 2: return <div key={index}  className={`w-75 mb-3 rounded-circle bg-success`} style={{height: '100px'}}></div>;
    }
  }

  
  componentDidMount = () =>{    
    let lighting = [
      { lights: [0, null, null]}, 
      { lights: [null, 1, null]},
      { lights: [null, null, 2]},
      { lights: [null, 1, null]}
    ]

    this.timerId = setInterval(() => {
      if(this.count === 4){
        this.count = 0
      }
      this.setState(lighting[this.count])
      this.count++
    },1000)
  } 

  clearInt = () => {
    clearInterval(this.timerId)
  }

  render(){
    const { onRemove } = this.props;
    return(      
      <div className="pb-3 pt-3 mr-1 mb-1 bg-dark d-flex flex-column justify-content-center align-items-center rounded"
           style={{minWidth: 150}}>
        {this.state.lights.map((item, index) => this.getLight(item, index))} 
        <button onClick={this.componentDidMount}>Cont</button>         
        <button onClick={this.clearInt}>Stop</button>   
        <button onClick={onRemove}>remove</button>                  
      </div>           
    )
  }
}


export default TraffickLight
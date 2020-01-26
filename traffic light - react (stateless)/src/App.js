import React from 'react';
import './App.css';
import TrafficLightContainer from './components/TrafficLightContainer';

function App() {
  return (
    <div className="container">
        <div className="row d-flex align-items-baseline bg-dark pt-3 pb-3">
          <div class="offset-lg-0 offset-md-0 offset-3 order-lg-0 order-md-0 order-2"></div>
          <a href="../../index.html" className="col-lg-2 col-md-2 col-3 order-lg-1 order-md-1 order-3 btn btn-secondary btn-lg active" role="button" aria-pressed="true">BACK</a>	
        
          <h1 className="col-lg-8 col-md-8 col-12 order-lg-2 order-md-2 order-1 text-light text-center">
            Traffic light in React (stateless)
          </h1>
        
          <a href="https://github.com/ua-enumaelish/Learning/tree/master/traffic%20light%20-%20react%20(stateless)" 
            className="col-lg-2 col-md-2 col-3 order-lg-3 order-md-3 order-4 btn btn-secondary btn-lg active" 
            role="button" 
            aria-pressed="true"
            target="_blank"
          >
            GitHub
          </a>
          
		    </div>
        <div className="row pt-5">
          <div className="offset-2"></div>
            <TrafficLightContainer/>
          <div className="offset-2"></div>
        </div>
      </div>
    
  );
}

export default App;

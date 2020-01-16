import React from 'react';
import './App.css';
import TrafficLightContainer from './components/TrafficLightContainer';

function App() {
  return (
    <div className="container">
        <div class="row bg-dark">
			    <div class="col-2 pt-3">
				    <a href="../../index.html" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">BACK</a>	
			    </div>
			    <div class="col-8 pt-2">
				    <h1 class="mb-4 text-light text-center">
					    Traffic light in React (stateful)
				    </h1>
			    </div>
          <div class="col-2 pt-3 pr-4 text-right">
            <a href="https://github.com/ua-enumaelish/Learning/tree/master/gallery%20-%20react" 
              class="btn btn-secondary btn-lg active" 
              role="button" 
              aria-pressed="true"
              target="_blank"
            >
              GitHub
            </a>
          </div>
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

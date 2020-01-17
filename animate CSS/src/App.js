import React from 'react';
import Animate from './Animate';
import './App.css';
import './animateData';
import './style.css';
import './animate.css';

function App() {
  return (
    <div className="container">
      <div className="row bg-dark">
			  <div className="col-2 pt-3">
          <a 
            href="../../index.html" 
            className="btn btn-secondary btn-lg active" 
            role="button" 
            aria-pressed="true"
          >
            BACK
          </a>	
			  </div>
			  <div className="col-8 pt-2">
				  <h1 className="mb-4 text-light text-center">
					  Animate CSS
				  </h1>
			  </div>
        <div className="col-2 pt-3 pr-4 text-right">
          <a href="https://github.com/ua-enumaelish/Learning/tree/master/animate%20CSS" 
            className="btn btn-secondary btn-lg active" 
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
        <div className="col-8 pt-2">
          <div className="App">
            <Animate/>
          </div>
        </div>
        <div className="offset-2"></div>
      </div>
    </div>
  );
}

export default App;

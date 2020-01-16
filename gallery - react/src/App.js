import React from 'react';
import Gallery from "./Galerry"

export default class App extends React.Component{
  render(){
    return(
      <div className="container">
        <div class="row bg-dark">
			    <div class="col-2 pt-3">
				    <a href="../../index.html" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">BACK</a>	
			    </div>
			  <div class="col-8 pt-2">
				  <h1 class="mb-4 text-light text-center">
					  Gallery in React
				  </h1>
			  </div>
        <div class="col-2 pt-3 pr-4 text-right">
	      <a href="https://github.com/ua-enumaelish/Learning/tree/master/horse%20(lesson%2014)" 
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
          <Gallery/>
        <div className="offset-2"></div>
        </div>
      </div>
    )
  }
}

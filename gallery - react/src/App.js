import React from 'react';
import Gallery from "./Galerry"

export default class App extends React.Component{
  render(){
    return(
      <div className="container">
        <div class="row d-flex align-items-baseline bg-dark pt-3 pb-3">		
					<div class="offset-lg-0 offset-md-0 offset-3 order-lg-0 order-md-0 order-2"></div>	    
					<a href="../../index.html" class="col-lg-2 col-md-2 col-3 order-lg-1 order-md-1 order-3 btn btn-secondary btn-lg active" role="button" aria-pressed="true">BACK</a>	
					
					<h1 class="col-lg-8 col-md-8 col-12 order-lg-2 order-md-2 order-1 text-light text-center">
						Gallery in React
					</h1>
				
				<a href="https://github.com/ua-enumaelish/Learning/tree/master/gallery%20-%20react" 
					class="col-lg-2 col-md-2 col-3 order-lg-3 order-md-3 order-4 btn btn-secondary btn-lg active" 
					role="button" 
					aria-pressed="true"
					target="_blank"
				>
					GitHub
				</a>
     
		</div>
        <div className="row pt-5">
          <Gallery/>
        </div>
      </div>
    )
  }
}

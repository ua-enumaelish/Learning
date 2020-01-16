var traffickLight = (function(){

  var frag, divCol, divCircle, i;
  frag = document.createDocumentFragment();  


  return{
    building: function(container){
      divCol = document.createElement('div');
      divCol.classList.add('col-2', 'd-flex', 'parent', 'pt-3', 'mr-4', 'mb-3', 'bg-dark', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'rounded');
      
      for(i = 0; i < 3; i++){
        divCircle = document.createElement('div');
        divCircle.style.cssText = 'height: 100px';
        divCircle.classList.add('w-75', 'mb-3', 'rounded-circle', 'bg-secondary', 'text-center','font-weight-bold');
        
        divCol.append(divCircle);
      } 
      
      frag.append(divCol);  
      container.appendChild(frag);      
      return divCol;    
    }
  }
})();


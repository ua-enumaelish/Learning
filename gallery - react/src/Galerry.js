import React from 'react';

export default class Gallery extends React.Component{
  constructor(...args){
    super(...args);
    this.state = {
      count: 0
    }
  }

  nextImg = () => {
    let count = this.state.count;
    count += 1;
    if(count === 4){
      count = 0;      
    }
    this.setState({count: count})
  }

  prevImg = () => {
    let count = this.state.count;
    count -= 1;
    if(count < 0){
      count = 3;      
    }    
    this.setState({count: count});  
  } 

  render(){
    return(
    <div className="col-8">
      <span onClick={this.nextImg} 
        className="position-absolute carousel-control-next-icon next-btn" 
        style={{top:"50%", right: 25, transform: "translate(0, -50%)", cursor: "pointer"}}>
      </span>
      <span 
        onClick={this.prevImg} 
        className="position-absolute carousel-control-prev-icon align-middle prev-btn" 
        style={{top:"50%", left: 25, transform: "translate(0, -50%)", cursor: "pointer"}}>
      </span>
      <Image img={this.state.count}/>
    </div> )   
  }
}

class Image extends React.Component{
  render () {
    let image = '';
    switch(this.props.img){ 
      default: 
        image = "http://oboinastol.net/katalog_kartinok/tom20/018/skachat_oboi_960x540.jpg";
        break;
      case 0:
        image = "https://million-wallpapers.ru/wallpapers/4/73/9929974507706928446/zakat-zabor-derevya-listva-osen.jpg";
        break;
      case 1:
        image = "https://cdni.rt.com/russian/images/2018.10/article/5bc1d61f18356189348b45c5.jpg";
        break;
      case 2:
        image = "https://www.wkbn.com/wp-content/uploads/sites/48/2019/06/obit-generic-2.jpg";
        break;
      case 3:
        image = "http://oboinastol.net/katalog_kartinok/tom20/018/skachat_oboi_960x540.jpg";
        break;
    }
    return <img src={image} 
                alt="image" 
                className="gallery__img img-fluid">
            </img>
  }
}
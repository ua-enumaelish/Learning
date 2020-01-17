import React from 'react';
import './clock.css';


export default function Clock(props){
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let secondHandDirection = 'rotate('+ (((360 / 60) * props.date.getSeconds())) +'deg)'
  let minuteHandDirection = 'rotate('+ (((360 / 60) * props.date.getMinutes())) +'deg)'
  let hourHandDirection = 'rotate('+ (((360 / 12) * props.date.getHours())) +'deg)'
  let step = -60

  let getClockFace = (number, index) =>{    
    let radius = 400 / 2
    let angle = step * (Math.PI/180);
    let cos = Math.cos(angle);
    let sin = Math.sin(angle);
    let numberDiraction = {
      left: radius + (radius - 30) * cos + 'px',
      top: radius + (radius - 30) * sin + 'px',
    }
    step += 360 / numbers.length;
    return <span className='numbers' key={index} style={numberDiraction}>{number}</span>
  }
  
  return(
      <div className="clock" style={{margin: '0 auto'}}>  
      {numbers.map((number, index) => getClockFace(number, index))}
        <span  className='centerStyle'>
          <span className='secondHand' style={{transform: secondHandDirection}}></span>
          <span className='minuteHand' style={{transform: minuteHandDirection}}></span>
          <span className='hourHand' style={{transform: hourHandDirection}}></span>
        </span>
      </div>
  )
}


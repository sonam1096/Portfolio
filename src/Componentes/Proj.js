import './css/ProStyles.css'
 
import React,{Componennt} from 'react'
class Proj extends Componennt  () {
 render(){ return (
    <div className='img1'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  );
}
}
export default Proj;
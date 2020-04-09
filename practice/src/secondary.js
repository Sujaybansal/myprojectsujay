import React from 'react';
// import Form from '../src/Form'

const heading = (props) => {
  return(
    <div>
      <h1>This is my Page made by {props.any}</h1>
      <br/>
      {/* <button onClick = {props.ye}>Name Change</button><br/> */}
       <input type = 'text' onChange = {props.changed} placeholder='type to CHnage'></input>
    
    
    </div>
  );
}

export default heading;
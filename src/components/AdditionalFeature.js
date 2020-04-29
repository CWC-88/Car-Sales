import React from 'react';
import {useDispatch} from "react-redux"
import {addFeature} from '../actions/index'


const AdditionalFeature = props => {
  const dispatcher = useDispatch()
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      {/* <button className="button">Add</button> */}
      <button  onClick = {() => dispatcher(addFeature(props.feature))} className="button">X</button>
      
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

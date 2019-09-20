import React from 'react';
import './App.css';
import KGUnit from './KGUnit';
import DataProvider from './DataProvider';

const default_param = {
  canvas_width :500,
  canvas_height : 400,
  padding : {
      top : 20,
      bottom : 20,
      left : 20,
      right : 20
  }
};

class App extends React.Component {
  render () {
    console.log("input data", DataProvider());
    return  (
      <KGUnit data={DataProvider()} param={default_param} />
    );
  }
}

export default App;


import axios from 'axios';
import React from 'react';
import './App.css'
class App extends React.Component{
  state = {details: []}
  componentDidMount(){
    let data
    axios.get('http://localhost:8000').then(
      res => {
        data = res.data
        this.setState({
          details:data
        })
      console.log(data)
      }).catch(err => 
        {
          console.log(err.mesage)
        })
  }
render(){
  return(
    <div>
      <header>Data fetched from django Backend via API</header>
    <hr></hr>
    {this.state.details.map((output,id)=>(
        <div key={id}>
        <div>
          <p>{output.employee}</p>
          <p>{output.department}</p>
          </div>  </div>
      ))}
    </div>
    )}

}

export default App;

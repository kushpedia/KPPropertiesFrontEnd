
import axios from 'axios';
import React from 'react';
import getDjangoApi from '../src/utils/api-client'
import './App.css'
import Property from './Components/Property';
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

      }).catch(err => 
        {
          console.log(err.message)
        })
  }
render(){
  return(
    <div>
      <header>Data fetched from django Backend via API</header>
    <hr></hr>
    {this.state.details.map((output,id)=>(
      <Property output={output} key={id}/>
      ))}
    </div>
    )}

}

export default App;

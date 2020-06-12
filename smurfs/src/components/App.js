import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import SmurphForm from './SmurphForm'
import SmurphList from './SmurphList'
import { SmurphContext } from "../contexts/SmurphContext";




function App() {

  const [smurphs, setSmurphs] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      setSmurphs(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })
    return (
      <div className="App">
        <SmurphContext.Provider value={smurphs}>
        
          <SmurphForm />
          <SmurphList />
        </SmurphContext.Provider>
      </div>
    );
  }


export default App;

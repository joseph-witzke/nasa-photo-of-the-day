import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
//import components
import Nav from './components/nav'
import Buttons from "./components/buttons";


function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res)
        setNasaData(res.data)
      })
      .catch( err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <h1>{nasaData.title}</h1>
      <Nav />
      <img src={nasaData.hdurl}/>
      <Buttons />
    </div>
  );
}

export default App;

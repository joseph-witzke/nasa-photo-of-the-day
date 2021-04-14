import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'


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
    <>
    <header>
      <nav></nav>
      <nav></nav>
      <nav></nav>
    </header>
    <div className="App">
      <h1>{nasaData.title}</h1>
        <img src={nasaData.hdurl}/>
    </div>
    <div>

    </div>
    </>
  );
}

export default App;

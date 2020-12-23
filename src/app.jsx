import React, { useEffect, useState } from "react";
import "./app.css";
import CatsVideo from "./components/cats_video";
import MainVar from "./components/main_var";


function App() {

  const [cats, setCats] = useState([]);
  const apikey=process.env.REACT_APP_YOUTUBE_KEY
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=고양이&key=${apikey}`, requestOptions)
      .then(response => response.json())
      .then(result => setCats(result.items))
      .catch(error => console.log('error', error));
  }, []);


  return <> <MainVar /> <CatsVideo cats={cats} /> </>

}

export default App;

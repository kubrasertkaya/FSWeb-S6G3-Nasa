
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ADOPViewer from "./components/ADOPViewer";

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2023-02-10





function App() {

  const [apod, setApod] = useState();
  const [loaded, setLoaded] = useState(false);
  const [currentDate,setCurrentDate]=useState(new Date().toISOString().split("T")[0]);


  function fetchAPOD(dateParam) {
    setLoaded(false)

    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "C0VdGGwA3bv8MCl4auZDpbBqG5mIl1nDiLKIAf20",
          date: dateParam,
          thumbs: true,
        }
      })
      .then(function (response) {
        console.log(response);
        setApod(response.data);
        setLoaded(true)
      })
      .catch(function (error) {
        console.log(error);
        setLoaded(false)
      })
      .finally(function () {
        console.log("axios apod");
        // always executed
      });
  };

  useEffect(() => {
    fetchAPOD(currentDate);
  }, [currentDate]);

  function dateChangeHandler(e){
    console.log(e.target.value);
    setCurrentDate(e.target.value);
  }

  return  <div className="App">
    {!loaded && <p>"Motor ısınıyorrr"</p> }
    {loaded && <>
    <label htmlFor="apodDate" >apodDate:</label>
    <input 
    onChange={(e)=>dateChangeHandler(e)}
    type="date"
    value={currentDate}
    name="adopDate"
    >
    </input>
    <ADOPViewer apod={apod} />
    </>
    }
    </div>

}




export default App;

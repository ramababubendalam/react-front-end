import React, { useEffect, useState } from "react";
import "./App.css"
import config from './config';
import Child from './Child';


function unixTime(unixtime) {

    const date= new Date(unixtime * 1000);

      return date.toTimeString()
    };


const App = () => {
    const [systemtime, setTime] = useState({});

    useEffect(() => {
        const url = config.BackendUrl.API_URL;

//        const url = "https://38a7xrtj2h.execute-api.eu-west-2.amazonaws.com/dev01";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setTime(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
            <div className="App">
                  <h1>Displays server epoch time , Server Time Zone  and Converts to Eastern Time Zone</h1>
                  <p>Server Epoch Time {systemtime.epochTime}</p>
                  <p>Server Time Zone {systemtime.ServerTimeZone}</p>
                  <p>Server Time {unixTime(systemtime.epochTime)}</p>
                  <Child data={systemtime.epochTime}/>
            </div>
    );
}

export default App;
import React, { useEffect, useState } from "react";
import "./App.css"
import config from './config';


function unixTime(unixtime) {

    const date= new Date(unixtime * 1000);

      return date.toLocaleTimeString("en-US")
    };


const Child = (props) => {
    const [converttime, setconvertTime] = useState({});


    useEffect(() => {
        const url = config.BackendUrl.TIME_URL;

        const fetchData = async () => {
            try {
                const response = await fetch(url+props.data);
                const json = await response.json();
                setconvertTime(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
            <p>Time Converstion to GMT-05 {unixTime(converttime.toTimestamp)}</p>
    );
}

export default Child;
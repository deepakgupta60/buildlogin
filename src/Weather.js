import axios from 'axios';
import React, { useState } from 'react'

const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null)
    const handleSearch = async () => {

        try {
            let response = axios
                .get(`https://api.weatherapi.com/v1/current.json`, {
                    params: {
                        key: "cf6cae627141447e9e6113102230410",
                        q: city
                    }
                })

                if(response.data.error.code===1006)
                {
                    alert(response.data.error.message)
                }
                else
                {

                    setWeatherData(response.data);
                    // console.log(response.data)
                }

        } catch(err) {
            alert("something went wrong")
        }

    }


    return (
        <>



            <input type='text' name='search' placeholder='enter name' onChange={(e) => setCity(e.target.value)} /> <br />
            <button onClick={handleSearch}>search</button>



            <div>
                <p></p>
            </div>
        </>

    )
}

export default Weather
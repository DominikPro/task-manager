import React, { useEffect, useState } from "react";
import SpinnerLoading from "../Spiner/spiner"
import {  Card, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
const key = "43c39ca8f1e646585bc1531a9c498106";

const Weather = () => {
	const substractToGetCelcii = 273.15;
	const [loading, setLoading] = useState(false);
	const [city, setCity] = useState("Warsaw");
	const [cityError, setCityError] = useState(false);
	const [temperature, setTemperature] = useState(0);
	const [iconUrl, setIconUrl] = useState("")
	const [weatherDescription, setWeatherDescription] = useState("");


	useEffect(() => {
		axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
			.then((res) => {
				const respons = res.data;
				setWeatherDescription( respons.weather[0].description)
				setTemperature(respons.main.temp - substractToGetCelcii);
				setCity(respons.name)
				setCityError(false)
				setLoading(true)
				setIconUrl(`http://openweathermap.org/img/wn/${respons.weather[0].icon}.png `)
			}).catch(error => {
				setCityError(true)
				console.log(error)
			  });
	}, [city]);
	

	return (

		<Row className="justify-content-center align-items-center">
			{loading ?
				<Col className="mt-3" xs={12} sm={6} md={3} xl={2}>
					<Card className="text-center"  >
						<Card.Header>Weather</Card.Header>
						<Card.Body>

							<Card.Text>{city.toUpperCase()}</Card.Text>
							{city.length ? (<h5>{`Temp: ${temperature.toFixed()}°c`}</h5>) : ("Enter the city name")}
							<img alt="weather icon" src={iconUrl} />
							<Card.Text>{weatherDescription}</Card.Text>

							<InputGroup className="mb-3">
								<FormControl onChange={(e) => setCity(e.target.value)} size="sm" placeholder="City Name" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
							</InputGroup>
							
							{cityError ? <Card.Text>Check the name of the city you are looking for</Card.Text> : null}
						</Card.Body>
					</Card>
				</Col> :
				<SpinnerLoading />}
		</Row>
	);
};

export default Weather;

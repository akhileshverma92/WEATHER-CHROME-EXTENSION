const temp = document.querySelector(".temp-info");
const wind = document.querySelector(".wind-info");
const humidity = document.querySelector(".humidety-info");
const c_date = document.querySelector(".date");

const date = new Date();
date.getHours();
c_date.innerHTML = date;
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kanpur';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '015040b46fmshadce88e81038a36p1504e6jsneb8d00cdcb50',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const GetData = async () =>{
        

	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    temp.innerHTML = result.temp+"   "+ "°C";
    wind.innerHTML = result.wind_speed+ "Km/H";
    humidity.innerText = result.humidity+ "%";
   
}
GetData();
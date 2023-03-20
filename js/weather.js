function fetchData(event) {
    event.preventDefault();
    let city= cityInp;


    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
    .then((response) => response.json())
    .then((data) =>  Wheatherdata(data))
    .catch(err => alert(err))
}




function Wheatherdata(whdata) {

  
  let currentCity=whdata.name;
  let curnTemp=whdata.main.temp-273.15;
  let currentTemperature=curnTemp.toFixed(2);
  
  let windspeed=whdata.wind.speed;
  
  let maxtemp=whdata.main.temp_max-273.15;
  let maxtempertature=maxtemp.toFixed(2);


  let mintemp=whdata.main.temp_min-273.15;
  let minimumTemperature=mintemp.toFixed(2);

  
  document.getElementById("name").innerHTML = currentCity;
  document.getElementById("temp").innerHTML = "Current Temperature :- "+currentTemperature+"°C";
  // document.getElementById("ctemp").className = "fas fa-cloud-sun";
  document.getElementById("wind").innerHTML = "Wind Speed :- "+windspeed;
  document.getElementById("mintemp").innerHTML = "Minimum Temparature :- "+ minimumTemperature+"°C";
  document.getElementById("maxtemp").innerHTML = "Maximum Temperature :- "+maxtempertature+"°C";
}
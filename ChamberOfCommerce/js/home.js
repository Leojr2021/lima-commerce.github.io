
//weather sumary

""

const APPID = "ce0624dc4093a658caf3086c5fbafbeb";

const apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=-12.046374&lon=-77.042793&appid=${APPID}&units=imperial`;

fetch(apiurl)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    const currently = document.querySelector('#currently');
    currently.innerHTML = `<strong>${jsObject.current.weather[0].description.toUpperCase()}</strong>`;
    // console.log(currently);

    const temperature = document.querySelector('#temperature');
    temperature.innerHTML = jsObject.current.temp;
     

    const humidity = document.querySelector('#humidity');
    humidity.innerHTML = jsObject.current.humidity;
     

    
    const wind = document.querySelector('#wind_speed');
    wind.innerHTML = jsObject.current.wind_speed;
     


    // ***************forecast*******************

    
    const dayofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday'];


    i=1
    for(z = 1; z < 4; z++){
        
        let d = new Date();
        // console.log(d);
        // console.log((d.getDay()) + i);
        document.getElementById(`dayofweek${z}`).textContent = dayofweek[(d.getDay()) + i];
        document.getElementById(`forecast${z}`).innerHTML = jsObject.daily[z].temp.max.toFixed() + "&deg;F";
        document.getElementById(`imgday${z}`).setAttribute("src","https://openweathermap.org/img/w/" + jsObject.daily[z].weather[0].icon + ".png");
        i++;
        

    }
   


});





// *************** WIND CHILL**************


const temp_wind = document.getElementById("temperature").innerHTML;
const w_speed_wind = document.getElementById("wind_speed").innerHTML;
const w_chill = document.getElementById("wind_chill");


if ( w_speed_wind > 3 && temp_wind <= 50)
{
    w_chill.innerText = Math.round(35.74 + (0.6215 * temp_wind) - (35.75 * Math.pow(w_speed_wind, 0.16)) + (0.4275 * temp_wind * Math.pow(w_speed_wind, 0.16)));
}
else {
    w_chill.innerText = "N/A";
}

//weather sumary

""

const APPID = "ce0624dc4093a658caf3086c5fbafbeb";

const apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=-12.046374&lon=-77.042793&appid=${APPID}&units=imperial`;

fetch(apiurl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

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

    
    const dayofweek = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    i=0
    for(z = 1; z < 4; z++){
        
        let d = new Date(jsObject.daily[z].dt);
        //console.log(d);
        document.getElementById(`dayofweek${z}`).textContent = dayofweek[(d.getDay()) + i];
        document.getElementById(`forecast${z}`).innerHTML = jsObject.daily[z].temp.max.toFixed() + "&deg;F";
        document.getElementById(`imgday${z}`).setAttribute("src","https://openweathermap.org/img/w/" + jsObject.daily[z].weather[0].icon + ".png");
        i++;
        

    }

    


});



// const apiurlf = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=imperial`;

//     // Forecast
    

// fetch(apiurlf)
//    .then((response) => response.json())
//    .then((jsObjectf) => {
      

//     let day = 1;
//     const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   
//     //reduce the list arrays to the five forecast
//     const fivedayforecast = jsObjectf.list.filter((forecast) => forecast.dt_txt.includes("18:00:00"));
//     //console.log(fivedayforecast);
   
    
//     //loop 

//     fivedayforecast.forEach(x => {
//       let d = new Date(x.dt_txt);
      
//       // console.log(d);

//       document.getElementById(`dayofweek${day}`).textContent = dayofweek[d.getDay()];
//       document.getElementById(`forecast${day}`).innerHTML = x.main.temp.toFixed() + "&deg;F";
//       document.getElementById(`imgday${day}`).setAttribute("src","https://openweathermap.org/img/w/" + x.weather[0].icon + ".png");

//       day++;
      
    


//   });

// });




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
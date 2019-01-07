

var locationinput=document.querySelector("input[type='text']")

function converToFahrenheit(kelvin){
   var fahrenheit=(kelvin - 273.15) * 9/5 + 32
   return fahrenheit

}

locationinput.addEventListener("keyup",function(e){
    console.log(e.target.value)
    var apikey="166a433c57516f51dfab1f7edaed8413"
    var url="https://api.openweathermap.org/data/2.5/forecast?q=" + e.target.value + "&mode=json&appid="
  
    axios.get(`${url}${apikey}`)
    .then(res=>{
        var cityName="";
        var country=""
        var tempHigh=""
        var tempLow="";
        var temp=""
        var description=""
        var output=""
        console.log(res.data)
        cityName=res.data.city.name;
        country=res.data.city.country;
        for(var i=0;i<5;i++){
 tempLow=converToFahrenheit(res.data.list[i].main.temp_min).toFixed(1)
 tempHigh=converToFahrenheit(res.data.list[i].main.temp_max).toFixed(1)
 temp=converToFahrenheit(res.data.list[i].main.temp).toFixed(1)

               output +=
               `<div class='col-md-3'>
               <div class='card card-body'>
               <h3>Date:${res.data.list[i].dt_txt.split("").splice(1,10).join("")} </h3>
               <hr/>
               <h5>Description:${res.data.list[i].weather[0].description}</h5>
               <hr/>
               <h3>High:${tempHigh} degrees</h3>
               <h3>Min: ${tempLow} degrees</h3>
               </div>
               </div>`
        }
        document.getElementById("weatherdata").innerHTML=output
        tempHigh=res.data.list[0].main.temp_max;
        tempLow=res.data.list[0].main.temp_min;
        temp=res.data.list[0].temp
        console.log(cityName)
        console.log(country)
        console.log(tempHigh)
        console.log(tempLow)
        console.log(temp)
        document.getElementById("city").innerHTML=cityName + ", "
        document.getElementById("country").innerHTML=country;
    })

})

converToFahrenheit(269)
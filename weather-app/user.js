const apiKey="2db596af848bf7b19167c1af612e2224";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const Searchbox=document.querySelector(".search input")
const Searchbtn=document.querySelector(".search button")
const weather1=document.querySelector(".weatherIcon");

async function checkWheather(city){

    const response=await fetch(apiUrl+ city +`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round( data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";
    
    if(data.weather[0].main=="Cloud"){

        weather1.src='images/clouds.png';
    }
    else if(data.weather[0].main=="Drizzle"){
    weather1.src='images/drizzle.png';
    }

    else if(data.weather[0].main=="Rain"){
        weather1.src='images/rain.png';
        }
        else if(data.weather[0].main=="Clear"){
            weather1.src='images/clear.png';
            }
            else if(data.weather[0].main=="Snow"){
                weather1.src='images/snow.png';
                }
                else if(data.weather[0].main=="Mist"){
                    weather1.src='images/mist.png';
                    }
                
            
        
    
}



Searchbtn.addEventListener("click", ()=>{
   
    checkWheather(Searchbox.value);
})


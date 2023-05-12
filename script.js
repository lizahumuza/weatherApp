       const inputCity = document.getElementById('location')
       const form = document.querySelector('form')
       const weatherInfo = document.getElementById('weatherInfo')
      
        async function getWeatherInfo(city){
            try{
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ac363587152241107a97b9599922302a`
                const response = await fetch (url)
                const data = await response. json()
                console.log (data)
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                const div1 = document.createElement('div')
                div1.innerText= `${weatherDescription}`
                div1.classList.add('desc')
                
                const div2 = document.createElement('div')
                div2.innerText= `${city}`
                div2.classList.add('cit')
                
                const div3 = document.createElement('div')
                div3.innerText= `${temperature} \u00B0C`
                div3.classList.add('deg')
              
                weatherInfo.appendChild(div1)
                weatherInfo.appendChild(div2)
                weatherInfo.appendChild(div3)

            }
            
            catch(error){
                const err = document.getElementById('error')
                err.textContent= 'error fetching weather data'
            }    
            
        }
       
       form.addEventListener('submit',  async(event) => {
          event.preventDefault();

          const city = inputCity.value;
          await getWeatherInfo(city); 
        });
     
    


       


     
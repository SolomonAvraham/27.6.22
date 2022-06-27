const BASIC_API =
  "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8b097c5d6a7b8b0e6d1781acfd2a2e2";

async function getWeather() {
  try {
    return await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=d8b097c5d6a7b8b0e6d1781acfd2a2e2`
    ).then((res) => res.json());
  } catch (error) {
  } finally {
  }
}

function printWeather() {
    getWeather().then(res => 
    {
        for (let key in result) { 
            
            screenDisplay.innerHTML += `<h3>${result.name}</h3>`


        }
    })
}


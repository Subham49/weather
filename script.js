
const searchBtn = document.getElementById("searchButton")
const city = document.getElementById("word")

searchBtn.addEventListener('click', ()=>{
    // console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=af91f05993b58c75d87f88d4348f1707`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            document.getElementById("name").innerHTML = ``
            document.getElementById("result").innerHTML = `
                <h3 class="my-4 text-light">${data.name}</h3>
                <div class="row">
                    <p class="text-light">${data.weather[0].main}</p>
                </div>
                <div class="row">
                    <p class="text-light">${data.weather[0].description}</p>
                </div>
                <div class="row">
                    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" style="display:block; margin: 0 auto; height:150px; width:150px">
                </div>
                <div class="row">
                    <h1 class="text-light" style="font-size: 80px;">${(data.main.temp-273.15).toFixed(2)}&#8451;</h1>
                </div>
                <div class="row row-cols-2 my-2">
                    <div class="col text-light text-end fw-bold" style="border-right: 1px solid snow;">min</div>
                    <div class="col text-light text-start fw-bold" style="border-left: 1px solid snow;">max</div>
                    <div class="col text-light text-end" style="border-right: 1px solid snow;">${(data.main.temp_min-273.15).toFixed(2)}</div>
                    <div class="col text-light text-start" style="border-left: 1px solid snow;">${(data.main.temp_max-273.15).toFixed(2)}</div>
                </div>
            `
        })  
        .catch((err) => {
            // console.error(err)
            document.getElementById("name").innerHTML = `
                ENTER A VALID CITY NAME
            `
            document.getElementById("result").innerHTML = ``
        });
})
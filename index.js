
let data = []
// console.log(data.length);

// function searchbar() {
//  var search = DataSearch.value


//   console.log(search);
// }

async function getData(search) {
  let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=26455448a7cd40e19b3122433222110&q=${search}&days=3`)
  let finalData = await res.json();
  // console.log(res.response);
  // console.log(finalData);
  data.push(finalData)
  display()
}

let DataSearch = document.getElementById("DataSearch").addEventListener("keyup", function (e) {
  var code = DataSearch.value;
  console.log(code);
  getData(code)
  
})







getData("alex")



function display() {
  let cartona = ''
  for (let i = 0; i < data.length; i++) {
    cartona += ` <div class="card-group g-1">
        <div class="card col-md-4 m-1 rounded bg-black text-white">
          <div class="card-footer">
            <small class="text-bold  d-flex justify-content-between">
              <p>${data[i].location.name}</p>
              <p>${data[i].location.localtime}</p>
            </small>
          </div>
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-around">
            
            <h2 class="card-title">${data[i].current.temp_c}<sup>o</sup>C</h2>
            <img src="https:${data[i].current.condition.icon}" class="h-75 p-0 w-25" alt="">

            </div>
            
          </div>
          <div class="d-flex justify-content-around">


          <p>${data[i].current.condition.text}</p>
              <i class="pe-2 fa-solid fa-umbrella">20</i>
              <i class="pe-2 fa-solid fa-wind">${data[i].current.wind_kph}</i>
              <i class="pe-2  fa-regular fa-compass">${data[i].current.wind_dir}</i>


            </div>
            
           
        </div>
        <div class="card col-md-4 m-1 rounded bg-black text-white">
          <div class="card-footer">
            <small class="text-muted  d-flex justify-content-between">
              <p>${data[i].location.name}</p>
              <p>${data[i].forecast.forecastday[1].date}</p>
            </small>
          </div>
          <div class="card-body">
          <div class="d-flex align-items-center justify-content-around">
            <h5 class="card-title">${data[i].forecast.forecastday[1].day.avgtemp_c}<sup>o</sup>C</h5>
            <img src="https:${data[i].forecast.forecastday[1].day.condition.icon}" class="h-75 p-0 w-25" alt="">
            
            </div>
            <div class="d-flex justify-content-around">
            <p class="card-text">${data[i].forecast.forecastday[1].day.condition.text}</p>
            </div>
          </div>

          
    
        </div>
        <div class="card col-md-4 m-1 rounded bg-black text-white">
          <div class="card-footer">
            <small class="text-muted  d-flex justify-content-between">
              <p>${data[i].location.name}</p>
              <p>${data[i].forecast.forecastday[2].date}</p>
            </small>
          </div>
          <div class="card-body">
          <div class="d-flex align-items-center justify-content-around">
            <h5 class="card-title">${data[i].forecast.forecastday[2].day.avgtemp_c}<sup>o</sup>C</h5>
            <img src="https:${data[i].forecast.forecastday[2].day.condition.icon}" class="h-75 p-0 w-25" alt="">
            </div>
            <div class="d-flex justify-content-around">
            <p class="card-text">${data[i].forecast.forecastday[2].day.condition.text}</p>

            </div>
          </div>
    
        </div>
      </div>`

  }
  document.getElementById("displayData").innerHTML = cartona

}














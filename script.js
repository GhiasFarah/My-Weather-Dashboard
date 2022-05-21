var search = $('.search')
search.click(() => getW())
function getW() {
  var key = '00dd1f2a91c0e098f75c349e9fcdb0bd';
  var city = $('.city').val()
  var url1 = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`
  fetch(url1)
    .then((res) => res.json())
    .then((d) => {
      console.log(d)
      $('#temp0').text(`Temp: ${d.main.temp}`)

      var url2 = `http://api.openweathermap.org/data/2.5/onecall?lat=${d.coord.lat}&lon=${d.coord.lon}&appid=${key}&units=imperial`
      fetch(url2)
        .then((res2) => res2.json())
        .then((d1) => {
          console.log(d1)
          // temp



          $('#icon0').attr('src', "http://openweathermap.org/img/w/" + d1.current.weather[0].icon + ".png")
          $('#icon1').attr('src', "http://openweathermap.org/img/w/" + d1.daily[1].weather[0].icon + ".png")
          $('#icon2').attr('src', "http://openweathermap.org/img/w/" + d1.daily[2].weather[0].icon + ".png")
          $('#icon3').attr('src', "http://openweathermap.org/img/w/" + d1.daily[3].weather[0].icon + ".png")
          $('#icon4').attr('src', "http://openweathermap.org/img/w/" + d1.daily[4].weather[0].icon + ".png")
          $('#icon5').attr('src', "http://openweathermap.org/img/w/" + d1.daily[5].weather[0].icon + ".png")

          $('#temp0').text(`Temp: ${d1.daily[0].temp.day}`)
          $('#temp1').text(`Temp: ${d1.daily[1].temp.day}`)
          $('#temp2').text(`Temp: ${d1.daily[2].temp.day}`)
          $('#temp3').text(`Temp: ${d1.daily[3].temp.day}`)
          $('#temp4').text(`Temp: ${d1.daily[4].temp.day}`)
          $('#temp5').text(`Temp: ${d1.daily[5].temp.day}`)
          // wind
          $('#wind0').text(`Wind: ${d1.daily[0].wind_speed}`)
          $('#wind1').text(`Wind: ${d1.daily[1].wind_speed}`)
          $('#wind2').text(`Wind: ${d1.daily[2].wind_speed}`)
          $('#wind3').text(`Wind: ${d1.daily[3].wind_speed}`)
          $('#wind4').text(`Wind: ${d1.daily[4].wind_speed}`)
          $('#wind5').text(`Wind: ${d1.daily[5].wind_speed}`)
          // humidity
          $('#humi0').text(`Humidity: ${d1.daily[0].humidity}`)
          $('#humi1').text(`Humidity: ${d1.daily[1].humidity}`)
          $('#humi2').text(`Humidity: ${d1.daily[2].humidity}`)
          $('#humi3').text(`Humidity: ${d1.daily[3].humidity}`)
          $('#humi4').text(`Humidity: ${d1.daily[4].humidity}`)
          $('#humi5').text(`Humidity: ${d1.daily[5].humidity}`)
          // UVI (DAY 1 ONLY)
          //daily[0].uvi
          $('#uvi0').text(`UVI: ${d1.daily[0].uvi}`)
        })
    })
}
$('#date0').text(`${moment().format('L')}`)

$('#date1').text(`${moment().add(1, 'days').format('L')}`)
$('#date2').text(`${moment().add(2, 'days').format('L')}`)
$('#date3').text(`${moment().add(3, 'days').format('L')}`)
$('#date4').text(`${moment().add(4, 'days').format('L')}`)
$('#date5').text(`${moment().add(5, 'days').format('L')}`)
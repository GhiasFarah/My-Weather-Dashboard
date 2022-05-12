var key = '00dd1f2a91c0e098f75c349e9fcdb0bd';
var city = $('.city').val()
var url1 = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`
var search = $('.search')
search.click(() => getW())
  function getW() {
    fetch(url1)
      .then(res => res.json())
      .then(d => {
        console.log(d)
      })
  }
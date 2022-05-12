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
  $('#date0').text(`${moment().format('L')}`)
  $('#date1').text(`${moment().add(1, 'days').format('L')}`)
  $('#date2').text(`${moment().add(2,'days').format('L')}`)
  $('#date3').text(`${moment().add(3,'days').format('L')}`)
  $('#date4').text(`${moment().add(4,'days').format('L')}`)
  $('#date5').text(`${moment().add(5,'days').format('L')}`)
/* Javascript goes here! */
//http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1


$(function(){
  var apiUrl = 'http://api.openweathermap.org/data/2.5/weather',
      apiKey = '1260c86b947da77d1247faff3c62e18f';

  function getWeatherData(city){

// This is what you had :

//     var getWeather = $.ajax({
//       url: apiUrl,
//       method: 'GET',
//       dataType: 'json',
//       data: {
//         q: city,
//         appid: apiKey,
//         units: 'imperial'
//       }
//     })
//
//     getWeather.done(function(response){
//       var city = response.name,
//           temperature = response.main.temp,
//           humidity = response.main.humidity,
//           iconUrl = 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png',
//           flag = 'flag-icon-' + response.sys.country.toLowerCase();
//
//           console.log(city, temperature, humidity);
//
//           $('.results .results-city').text(city).append('<img src="' + iconUrl + '">');
//           $('.temperature-container .temperature').text(temperature);
//           $('.humidity-container .humidity').text(humidity);
//           $('.results .results-city').append('<span class="flag-icon ' + flag + ' flag-icon-squared"></span>')
//           console.log(response.sys.country);
//
//           //AIzaSyBu5dojGoZVfnOEZdnM_9iBZo-OuB12pNg
//
// content_copy
//
//     });
//
//     getWeather.fail(function(response){
//       console.log('fail: ', response);
//       $('.city-error').css('display', 'block');
//
//     });
//
//     getWeather.always(function(response){
//       console.log('always', response);
//
//     });

// this is platypus:

    var getWeather = $.ajax({
      url: 'https://morning-reef-57754.herokuapp.com/city',
      method: "POST",
      data: {
        city: city
      }
    });


// I guess this part didnt really change:???

    getWeather.done(function(response){
      var city = response.name,
          temperature = response.main.temp,
          humidity = response.main.humidity,
          iconUrl = 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png',
          flag = 'flag-icon-' + response.sys.country.toLowerCase();

          console.log(city, temperature, humidity);

          $('.results .results-city').text(city).append('<img src="' + iconUrl + '">');
          $('.temperature-container .temperature').text(temperature);
          $('.humidity-container .humidity').text(humidity);
          $('.results .results-city').append('<span class="flag-icon ' + flag + ' flag-icon-squared"></span>')
          console.log(response.sys.country);

          //AIzaSyBu5dojGoZVfnOEZdnM_9iBZo-OuB12pNg

//except for this I don't know what content_copy is.......
// content_copy

    });

    getWeather.fail(function(response){
      console.log('fail: ', response);
      $('.city-error').css('display', 'block');

    });

    getWeather.always(function(response){
      console.log('always', response);

    });


  };

  function setHandlers(){
    $('.getWeatherData').on('submit', function(e){
      e.preventDefault();
      $('.city-error').css('display', 'none');
      var city = $(this).find('.weather-city').val();
      getWeatherData(city);
    });
  }

  /* Flow of webapp */
  function main(){
    getWeatherData('Austin');
    setHandlers();
  }

  main();
})

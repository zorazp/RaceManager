//RaceQuery Object
var request = require('request');
var querystring = require('querystring');

module.exports = function(category, track, laps, constructors) {

  if (!category || !track || !laps || !constructors)
    return;

  //Public Values
  this.query_data = {};
  this.query_string = null;

  //Private Values
  const API_URL = "http://raceapi.herokuapp.com/api/simulator?";

  //Public Methods
  this.getFullURL = function() {
    return API_URL+this.query_string;
  }
  this.run = function() {
    var url = this.getFullURL();
    return new Promise(function(resolve, reject) {
      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200)
          resolve(JSON.parse(body));
        else
          reject(error);
      });
    });
  };

  var that = this;

  //Private Methods
  var getQueryData = function (category, track, laps, constructors) {
    var drivers = [];
    that.query_data.engine_avg = [];
    that.query_data.team_avg = [];
    that.query_data.team_country = [];
    constructors.forEach(function(constructor) {
      for (var num=0; num<category.team_drivers; num++) {
        that.query_data.engine_avg.push(constructor.power_unit.development);
        that.query_data.team_avg.push(constructor.development);
        that.query_data.team_country.push(constructor.team.country);
      }
      drivers = drivers.concat(constructor.drivers);
    });
    that.query_data.driver_id = drivers.map(driver => driver._id.toString());
    that.query_data.driver_avg = drivers.map(driver => driver.average);
    that.query_data.driver_country = drivers.map(driver => driver.country);
    that.query_data.average_speed = category.average_speed;
    that.query_data.laps = laps;
    that.query_data.track_country = track.country;
    that.query_data.sector_length = track.sectors.map(sector => sector.length);
    that.query_data.sector_type = track.sectors.map(sector => sector.type);
  };
  var getQueryString = function() {
    that.query_string = querystring.stringify(that.query_data);
  };

  (function() {
    getQueryData(category, track, laps, constructors);
    getQueryString();
  })();

  return this;
}
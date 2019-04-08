function Place (cityName, countryName, landmarks, year, notes) {
  this.cityName = cityName;
  this.countryName = countryName;
  this.landmarks = landmarks;
  this.year = year;
  this.notes = notes;
  this.show = true;
}

function Places () {
  this.places = [];
  this.currentId = 0;
}

Places.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);

}

Places.prototype.assignId = function() {
  this.currentId += 1;
  return currentId;
}

Places.prototype.findYear = function (year) {
  for(var i = 0; i < this.places.length; i++) {
    if(this.places[i].year == year) {
      this.places[i].show = true;
    } else this.places[i].show = false;
  }
}

Places.prototype.findCountry = function (countryName) {
  for (var i = 0; i<this.countryName.length; i++) {
    if(this.places[i].countryName == countryName) {
      this.places[i].show = true;
    } else this.places[i].show = false;
  }
}

Places.prototype.findCity = function (cityName) {
  for (var i = 0; i<this.cityName.length; i++) {
    if(this.places[i].cityName == countryName) {
      this.places[i].show = true;
    } else this.places[i].show = false;
  }
}

Places.prototype.deletePlace = function (id) {
  for (var i = 0; i<this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        delete this.place[i];
        return true;
      }
    }
  }
  return false
}

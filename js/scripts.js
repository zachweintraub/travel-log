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
  return this.currentId;
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

var userPlaces = new Places();

// UI logic

$(document).ready(function () {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    console.log('clicking works');
    var userCountry = $("input#country").val();
    var userCity = $("input#city").val();
    var userLandmarks = $("input#landmarks").val().split(', ');
    var userNotes = $("input#notes").val();
    var userYear = parseInt($("input#year").val());
    if (userCountry === "" || userCity === "" || userYear === "" || year < 1900) {
      alert('Please complete all required fields!');
    } else {
      var newPlace = new Place(userCity, userCountry, userLandmarks, userYear, userNotes);
      userPlaces.addPlace(newPlace);
      $('form input').val('');
      $('#places-panels').prepend(
        '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title">' + newPlace.cityName + ', ' + newPlace.countryName + '</h4></div><div class="panel-body"><p>Year Visited: ' + newPlace.year + '</p><p>Landmarks Visited: ' + newPlace.landmarks.join(', ') + '</p><p>Notes: ' + newPlace.notes + '</p></div></div>'
      );
    }
    console.log(newPlace);
    console.log(userPlaces);

  });
});

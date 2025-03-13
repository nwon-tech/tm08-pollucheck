var showLocation = document.getElementById("storeLocation");

function checkActivitySafety() {
  const aqi = parseInt(
    document.getElementById("aqiDisplay").textContent.split(": ")[1]
  );
  const result = document.getElementById("activityResult");

  if (aqi > 100) {
    result.innerHTML = "Avoid all outdoor activities today!";
  } else {
    result.innerHTML = "Safe for outdoor activities!";
  }
}

function userLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPoints);
  } else {
    showLocation.innerHTML = "Your browser does not support this feature.";
  }
}

function showPoints(position) {
  showLocation.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br> Longitude: " +
    position.coords.longitude;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      showLocation.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      showLocation.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      showLocation.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      showLocation.innerHTML = "An unknown error occurred.";
      break;
  }
}

// this will load the geo location of the user's location
document.body.onload = function () {
  userLocation();
};

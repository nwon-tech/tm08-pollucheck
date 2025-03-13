var showLocation = document.getElementById("storeLocation");

function checkActivitySafety() {
  const aqi = parseInt(
    document.getElementById("aqiDisplay").textContent.split(": ")[1]
  );
  const result = document.getElementById("activityResult");

  if (aqi > 100) {
    result.innerHTML = "Avoid all outdoor activites today!";
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
    "<br> Longtitude: " +
    position.coords.longitude;
}

// this will load the geo location of the user's location
document.body.onload = function () {
  userLocation();
};

function checkActivitySafety(){
    const aqi = parseInt(document.getElementById('aqiDisplay').textContent.split(': ')[1]);
    const result = document.getElementById('activityResult');

    if (aqi >100){
        result.innerHTML = "Avoid all outdoor activites today!";
    }
    else{
        result.innerHTML = "Safe for outdoor activities!"
    }
}
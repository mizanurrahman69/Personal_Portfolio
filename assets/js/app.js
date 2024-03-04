window.Alpine = Alpine

var mapURL = "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Space+Needle,Seattle+WA";

document.getElementById("map").innerHTML = '<iframe width="100%" height="100%" frameborder="0" style="border:0" src="' + mapURL + '" allowfullscreen></iframe>';
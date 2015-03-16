var lat = document.getElementById('lat');
var _long = document.getElementById('long');

function displayPosition(position) {
	//alert("Lat: " + position.coords.latitude + ", Long: " + position.coords.longitude);
	lat.setAttribute('value', position.coords.latitude);
	_long.setAttribute('value', position.coords.longitude);
}

function displayError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED:
			alert("Hey asshole, you denied the geolocation request. What the fuck do you expect us to do now?");
			break;
		case error.POSITION_UNAVAILABLE:
			alert("Your position isn't even fucking available!");
			break;
		case error.TIMEOUT:
			alert("The fucking request timed out!");
			break;
		case error.UNKNOWN_ERROR:
			alert("An unknown error occurred. What the fuck did you do?");

	}
}

var geo_options = {
	enableHighAccuracy 	: true,
	maximumAge 		: 30000,
	timeout			: 27000
}

function getLocation() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayPosition, displayError, geo_options);
	} else {
		alert("Your fucking browser doesn't support geolocation, you fucking old man.");
	}
}

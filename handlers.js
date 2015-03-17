function boxHandler(select) {
	var selectIndex = select.selectedIndex;
	var text = document.getElementById('text');
	
	if(selectIndex == 1) {
		var addToParent = document.getElementById('distancebox');
		var radiusEntry = document.createElement('input');

		text.innerText = text.textContent = "Please enter the distance you'd like to check in miles:";
		
		radiusEntry.setAttribute('type', 'number');
		radiusEntry.setAttribute('value', '0');
		radiusEntry.setAttribute('id', 'radius');
		radiusEntry.setAttribute('name', 'radius');

		addToParent.appendChild(radiusEntry);		
	} else {
		var removeFromParent = document.getElementById('radius');
		
		text.innerText = text.textContent = "";	
		removeFromParent.parentNode.removeChild(removeFromParent);
	}
}

function dataValidation() {
	var distance = document.getElementById('radius').value;
	var option = document.getElementById('menu').selectedIndex;
	alert(option);
	if(option == '1' && (isNaN(distance) || distance < 1)) {
		var err = document.getElementById('result');
		alert("Does that look like a goddamn valid answer?");
		document.getElementById('distance').value = "";
		return false;
	} else if(option != '1' || option != '2') {
		alert("Does that look like a goddamn valid answer?");
		return false;
	} else {
		distance = Number(distance);
		distance *= 1609.344; //convert miles to meters
		distance = distance.toString();
		alert("Distance: " + distance + "\nLat+Long: " + lat.value + " " + _long.value);
		//make request to google api
	}
}

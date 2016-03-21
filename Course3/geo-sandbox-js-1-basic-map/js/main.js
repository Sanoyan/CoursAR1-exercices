document.addEventListener('DOMContentLoaded', function(){
	
	//map (leaflet : http://leafletjs.com/examples/quick-start.html)
	var map = L.map('myMap');
	map.setView([0, 0], 3);

	//map pattern (WTMS). mapbox, ign, osm, ... 
	//var mapPatternUrl = "http://tile.stamen.com/toner/{z}/{x}/{y}.png";
    //var mapPatternUrl = "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg";
	
	var mapPatternUrl = 'http://tile.openstreetmap.org/{z}/{x}/{y}.png';
	var tileLayer = L.tileLayer(mapPatternUrl);
	tileLayer.addTo(map);

	//shape circle
	var circle = L.circle([0, 0], 500000);
	circle.bindPopup("The circle.");
	circle.addTo(map);

	//shape polygon
	var polygon = L.polygon([
	    [32.3333, -64.75],
	    [18.4663300, -66.1057200],
	    [25.7738889, -80.1938889],

	]);
	polygon.bindPopup("Le triangle de Bermudes");
	polygon.addTo(map);

	/*
	function onMapClick(e) {
		marker.setLatLng(e.latlng);
	}
	map.on('click', onMapClick);
	*/
	//marker
	var marker = L.marker([0, 0]);
	marker.bindPopup("Me.");
	marker.addTo(map);

	function processPosition(event){
		status.innerHTML = "Lat : " + event.coords.latitude + "° Long : " + event.coords.longitude + "° Precision : " + event.coords.accuracy + "m.";
		marker.setLatLng( [event.coords.latitude, event.coords.longitude] );

	}

	function errorPosition(){
		status.innerHTML = "No position.";
		marker.setLatLng( [0,0] );
	}

	//location notifications
	var options = {"enableHighAccuracy": true, "maximumAge" : 0, "timeout" : Infinity};
	navigator.geolocation.watchPosition( processPosition, errorPosition, options );
});
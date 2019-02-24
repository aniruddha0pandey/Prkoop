// window.addEventListener("load", function() {
//   console.log("JS Working Properly (Probably!)");
// });

var map, infoWindow, messagewindow;
function initMap() {
	// Geolocation
	infoWindow = new google.maps.InfoWindow;

	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function(position) {
	    var pos = {
	      lat: position.coords.latitude,
	      lng: position.coords.longitude
	    };

	    var infoWindowContent =
		     '<div id="form">'
		  +    '<table>'
		  +    '<tr>'
		  +      '<td><button>Image</button></td>'
		  +    '</tr>'
		  +    '<tr>'
		  +      '<td>Remarks:</td>'
		  +      '<td><input type="text" id="address"/></td>'
		  +    '</tr>'
		  +    '<tr>'
		  +      '<td>Status:</td>'
		  +      '<td>'
		  +        '<input type="radio" name="status" value="moderate"> Moderate |'
		  +        '<input type="radio" name="status" value="alert"> Alert |'
		  +        '<input type="radio" name="status" value="danger"> Danger'
		  +      '</td>'
		  +    '</tr>'
		  +    '<tr>'
		  +      '<td></td>'
		  +      '<td><input type="button" value="Save" onclick="saveData()"/></td>'
		  +    '</tr>'
		  +    '</table>'
		  +  '</div>'

	    infoWindow.setPosition(pos);
	    infoWindow.setContent( infoWindowContent );
	    // infoWindow.setContent(document.getElementById('form'));
	    infoWindow.open(map);
	    map.setCenter(pos);
	  }, function() {
	    handleLocationError(true, infoWindow, map.getCenter());
	  });
	} else {
	  // Browser doesn't support Geolocation
	  handleLocationError(false, infoWindow, map.getCenter());
	}

	// var uluru = {lat: -28.024, lng: 140.887};

	map = new google.maps.Map(document.getElementById('map'), {
		// center: uluru,
		zoom: 20,
		disableDefaultUI: true,
		mapTypeId: 'satellite' // 'terrain'
	});

	var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var locations = [
    {lat: -31.563910, lng: 147.154312},
    {lat: -33.718234, lng: 150.363181},
    {lat: -33.727111, lng: 150.371124},
    {lat: -33.848588, lng: 151.209834},
    {lat: -33.851702, lng: 151.216968},
    {lat: -34.671264, lng: 150.863657},
    {lat: -35.304724, lng: 148.662905},
    {lat: -36.817685, lng: 175.699196},
    {lat: -36.828611, lng: 175.790222},
    {lat: -37.750000, lng: 145.116667},
    {lat: -37.759859, lng: 145.128708},
    {lat: -37.765015, lng: 145.133858},
    {lat: -37.770104, lng: 145.143299},
    {lat: -37.773700, lng: 145.145187},
    {lat: -37.774785, lng: 145.137978},
    {lat: -37.819616, lng: 144.968119},
    {lat: -38.330766, lng: 144.695692},
    {lat: -39.927193, lng: 175.053218},
    {lat: -41.330162, lng: 174.865694},
    {lat: -42.734358, lng: 147.439506},
    {lat: -42.734358, lng: 147.501315},
    {lat: -42.735258, lng: 147.438000},
    {lat: -43.999792, lng: 170.463352}
  ]

	var markers = locations.map(function(location, i) {
		return new google.maps.Marker({
			position: location,
			label: labels[i % labels.length]
		});
	});

	var markerCluster = new MarkerClusterer(map, markers,{
    // imagePath: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m'
		imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
	});
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
	'Error: The Geolocation service failed.' :
	'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

// API Key:  AIzaSyD8qpdt_hj7Vkgz7VKAYCzGYz-73gEj14M
// Screen Resolution: (240 x 320)







	// var marker = new google.maps.Marker({
	// 	position: uluru, map: map
	// });
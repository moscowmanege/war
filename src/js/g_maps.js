var map_style =
[{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#000000"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":"0.75"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ded7c6"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ded7c6"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#c3a866"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}];

var info = [
	'<div class="info-window">',

	'<h2>Центральный музей <br> Великой Отечественной войны</h2>',

	'<br>',

	'<p>',
	'Площадь Победы, дом 3 строение 1',
	'<br>',
	'метро Парк Победы',
	'</p>',

	'<br>',

	'<p>',
	'Вторник - воскресенье',
	'(кроме четверга и пятницы)',
	'10:00–20:00',
	'(кассы и вход посетителей до 19:30)',
	'</p>',

	'<br>',

	'<p>',
	'Четверг, пятница 10:00–20:30 (кассы и вход посетителей до 20:00)',
	'</p>',

	'<br>',

	'<p>',
	'Выходной — понедельник',
	'</p>',

	'<br>',

	'<p>',
	'Санитарный день — последний понедельник каждого месяца',
	'</p>',

	'<br>',
	'<p>',
	'<div>Цена билетов:</div>',
	'<div>Полный — ??? р.</div>',
	'<div>Льготный — ??? р.</div>',
	'</p>',

	'</div>'
].join('');

function initialize() {
	var mapLatlng = new google.maps.LatLng(55.7313885, 37.506783);
	var pointLatlng = new google.maps.LatLng(55.730386, 37.503704);

	var mapOptions = {
		zoom: 17,
		center: mapLatlng,
		styles: map_style,
		scrollwheel: false,
		mapTypeControl: false,
		zoomControl: true,
		streetViewControl: false,
		// draggable: false,
		zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE,
				position: google.maps.ControlPosition.LEFT_BOTTOM
		}
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);

	var infowindow = new google.maps.InfoWindow({
			content: info,
	});

	var marker = new google.maps.Marker({
			position: pointLatlng,
			map: map,
			title: 'Центральный музей Великой Отечественной войны'
	});

	google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
	});

	infowindow.open(map, marker);
}

google.maps.event.addDomListener(window, 'load', initialize);
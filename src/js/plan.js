$(function() {


	// Map init


	var map = L.map('plan-canvas', { scrollWheelZoom: false, zoomControl: false, attributionControl: false }).setView([0, 0], 2);

	L.tileLayer('/img/plan/tiles/{z}/image_tile_{y}_{x}.jpg', {
		minZoom: 1,
		maxZoom: 4,
		attribution: '',
		tileSize: '256',
		tms: false,
		continuousWorld: true,
		reuseTiles: true
	}).addTo(map);

	L.control.zoom({ position: 'bottomleft' }).addTo(map);


	// Layers Data


	var halls = [
		{"type": "Feature", "properties": { "theme": "front", "numb": 9, "color": "aqua", "fillColor": "aqua" }, "geometry": {"type": "Polygon", "coordinates": [[[-60.99609375, 17.895114303749143], [-64.86328125, 19.476950206488414], [-68.37890625, 20.96143961409684], [-72.50976562499999, 22.67484735118852], [-77.34374999999999, 24.5271348225978], [-81.650390625, 26.352497858154024], [-85.341796875, 27.994401411046148], [-88.06640625, 29.152161283318915], [-85.60546875, 33.7243396617476], [-88.505859375, 34.95799531086792], [-85.25390625, 40.58058466412761], [-82.001953125, 39.36827914916011], [-79.189453125, 43.89789239125797], [-73.037109375, 41.96765920367816], [-68.37890625, 40.3130432088809], [-62.22656249999999, 38.272688535980976], [-56.42578125, 36.10237644873644], [-52.91015625, 34.88593094075317], [-55.54687499999999, 29.611670115197406], [-58.62304687499999, 22.917922936146045], [-60.99609375, 17.895114303749143] ] ] } },
		{"type": "Feature", "properties": { "theme": "front", "numb": 10, "color": "maroon", "fillColor": "maroon" }, "geometry": {"type": "Polygon", "coordinates": [[[-81.474609375, 46.07323062540835], [-91.40625, 30.372875188118016], [-114.78515624999999, 40.17887331434696], [-111.09374999999999, 44.96479793033101], [-104.67773437499999, 42.74701217318067], [-97.998046875, 51.508742458803326], [-81.474609375, 46.07323062540835] ] ] } },
		{"type": "Feature", "properties": { "theme": "front", "numb": 11, "color": "red", "fillColor": "red" }, "geometry": {"type": "Polygon", "coordinates": [[[-105.46875, 51.998410382390325], [-114.78515624999999, 40.04443758460856], [-121.201171875, 42.5530802889558], [-127.529296875, 45.1510532655634], [-133.857421875, 47.57652571374621], [-139.5703125, 49.83798245308484], [-135.439453125, 53.9560855309879], [-128.408203125, 51.508742458803326], [-122.51953124999999, 57.37393841871411], [-105.46875, 51.998410382390325] ] ] } },
		{"type": "Feature", "properties": { "theme": "city", "numb": 12, "color": "yellow", "fillColor": "yellow" },"geometry":{"type":"Polygon","coordinates":[[[-119.88281249999999,66.93006025862448],[-139.74609375,49.95121990866204],[-146.42578125,52.42922227795511],[-157.58789062499997,56.36525013685606],[-161.630859375,57.844750992891],[-164.443359375,59.17592824927138],[-166.9921875,60.75915950226991],[-169.013671875,62.34960927573042],[-170.15625,64.09140752262307],[-170.859375,65.73062649311031],[-170.947265625,67.2720426739952],[-170.41992187499997,68.49604022839505],[-169.365234375,69.80930869552193],[-167.6953125,70.8734913192635],[-165.673828125,71.80141030136785],[-164.00390625,72.3424643905499],[-161.89453125,72.91963546581484],[-159.521484375,73.3782147793946],[-156.88476562499997,73.70194774691717],[-154.599609375,73.995328341348],[-152.2265625,74.21198251594369],[-147.392578125,74.33110825221166],[-144.755859375,74.25973837093129],[-140.09765625,73.94679115710252],[-137.28515624999997,73.67726447634907],[-133.41796874999997,73.02259157147301],[-130.4296875,72.44879155730672],[-127.001953125,71.80141030136785],[-121.11328124999999,70.58341752317065],[-116.89453125,69.71810669906763],[-109.072265625,68.07330474079025],[-113.115234375,65.4034447883078],[-119.88281249999999,66.93006025862448]]]}},{"type":"Feature","properties":{"numb":"12"},"geometry":{"type":"Polygon","coordinates":[[[-139.833984375,49.89463439573421],[-143.4375,51.34433866059924],[-147.12890625,52.696361078274485],[-152.138671875,54.521081495443596],[-155.830078125,55.7765730186677],[-159.08203125,56.9449741808516],[-161.015625,57.61010702068388],[-163.125,58.44773280389084],[-164.61914062499997,59.22093407615045],[-166.2890625,60.28340847828243],[-167.783203125,61.3546135846894],[-168.662109375,62.103882522897855],[-169.62890625,63.194018438087845],[-170.244140625,64.20637724320852],[-170.771484375,65.21989393613207],[-170.947265625,66.26685631430843],[-170.947265625,67.23806155909902],[-170.595703125,68.00757101804004],[-170.15625,68.8159271333607],[-169.27734375,69.77895177646758],[-168.046875,70.64176873584621],[-166.46484375,71.41317683396566],[-164.970703125,71.99257805093251],[-163.916015625,72.3424643905499],[-161.89453125,72.84202111045995],[-159.697265625,73.32785809840696],[-157.763671875,73.60299628304274],[-155.390625,73.87371654457475],[-153.369140625,74.06786624952264],[-151.171875,74.18805166460048],[-148.447265625,74.28356347036141],[-145.634765625,74.25973837093129],[-142.294921875,74.06786624952264],[-139.306640625,73.84928645675248],[-136.40625,73.47848507889992],[-133.06640625,72.89380193362285],[-130.078125,72.3424643905499],[-127.35351562499999,71.80141030136785],[-124.1015625,71.15939141681443],[-120.673828125,70.46620742226558],[-116.27929687499999,69.59589006237648],[-112.587890625,68.78414378041504],[-108.80859375,67.97463396204759],[-113.203125,65.44000165965534],[-119.794921875,66.93006025862448],[-123.57421875,64.32087157990324],[-127.88085937499999,61.01572481397616],[-139.833984375,49.89463439573421]]]}},
		{"type": "Feature", "properties": { "theme": "city", "numb": 13, "color": "blue", "fillColor": "blue" }, "geometry": {"type": "Polygon", "coordinates": [[[-121.640625, 58.26328705248601], [-109.16015624999999, 68.0404612590484], [-98.0859375, 65.62202261510642], [-86.923828125, 63.03503931552975], [-90.615234375, 59.712097173322924], [-96.416015625, 61.270232790000634], [-104.67773437499999, 52.96187505907603], [-121.640625, 58.26328705248601] ] ] } },
		{"type": "Feature", "properties": { "theme": "memory", "numb": 14, "color": "purple", "fillColor": "purple" }, "geometry": {"type": "Polygon", "coordinates": [[[-70.927734375, 59.22093407615045], [-86.748046875, 63.074865690586634], [-96.85546875, 53.173119202640635], [-80.33203125, 47.87214396888731], [-77.95898437499999, 51.069016659603896], [-74.794921875, 50.233151832472245], [-71.455078125, 54.62297813269033], [-74.53125, 55.37911044801047], [-70.927734375, 59.22093407615045] ] ] } },
		{"type": "Feature", "properties": { "theme": "memory", "numb": 15, "color": "lightblue", "fillColor": "lightblue" }, "geometry": {"type": "Polygon", "coordinates": [[[-42.802734375, 52.05249047600099], [-48.427734375, 53.5403073915002], [-54.31640625, 55.07836723201512], [-58.71093750000001, 56.17002298293205], [-63.017578125, 57.27904276497778], [-67.8515625, 58.44773280389084], [-77.255859375, 46.800059446787316], [-69.521484375, 44.213709909702054], [-61.787109375, 41.64007838467894], [-53.876953125, 39.027718840211605], [-51.15234375, 38.20365531807149], [-47.109375, 45.336701909968106], [-40.95703125, 43.51668853502906], [-37.880859375, 48.63290858589535], [-44.033203125, 50.17689812200107], [-42.802734375, 52.05249047600099] ] ] } },
	];

	var exhibits = [
		{"type":"Feature","properties":{"radius":1140474.743585969},"geometry":{"type":"Point","coordinates":[34.80468749999999,16.972741019999035]}},
		{"type":"Feature","properties":{"radius":865010.8407001809},"geometry":{"type":"Point","coordinates":[-35.859375,22.268764039073968]}},
		{"type":"Feature","properties":{"radius":216640.50701172184},"geometry":{"type":"Point","coordinates":[-67.32421875,53.74871079689897]}}
	];


	// Data Loader


	var loader = function(params) {
		return function(e) {
			$('.content-preview-image, .content-preview-column').removeClass('active');

			$.post('/plan', params).done(function(data) {
				var $data = $(data);
				$('.preview-title').html($data.filter('.data-title'));
				$('.preview-description').html($data.filter('.data-description'));
				$('.content-preview-column').addClass('active').find('.preview-body').scrollTop(0);
			});

			map.setView(e.latlng);
		};
	};


	// Layer Exhibits


	var layer_exhibits = L.geoJson(exhibits, {
		pointToLayer: function(feature, latlng) {
			if (feature.properties.radius) {
				return new L.Circle(latlng, feature.properties.radius);
			}
			return;
		},
		style: function(feature) {
			return { weight: 2, fillOpacity: 0.8, color: 'red', fillColor: 'green' };
		},
		onEachFeature: function (feature, layer) {
			layer.on('mouseover', function(e) {
				this.setStyle({
					color: 'white',
					fillColor: 'white'
				});
			});

			layer.on('mouseout', function(e) {
				this.setStyle({
					color: 'red',
					fillColor: 'green'
				});
			});

			layer.on('click', function(e) {
				$('.content-preview-column').addClass('active');
				$('.content-preview-image').removeClass('active');

				map.setView(e.latlng);
			});

		}
	});


	// Layer Front


	var layer_war = L.geoJson(halls, {
		style: function(feature) {
			return { weight: 2, fillOpacity: 0.4, color: 'gold', fillColor: 'gold' };
		},
		filter: function(feature) {
			return feature.properties.theme == 'front';
		}
	})
	.on('click', loader({ type: 'themes', item: 'front' }))
	.on('mouseover', function(e) {
		this.setStyle({
			color: 'green',
			fillColor: 'green'
		});
	})
	.on('mouseout', function(e) {
		this.setStyle({
			color: 'gold',
			fillColor: 'gold'
		});
	});


	// Layer City


	var layer_city = L.geoJson(halls, {
		style: function(feature) {
			return { weight: 2, fillOpacity: 0.4, color: 'purple', fillColor: 'purple' };
		},
		filter: function(feature) {
			return feature.properties.theme == 'city';
		}
	})
	.on('click', loader({ type: 'themes', item: 'city' }))
	.on('mouseover', function(e) {
		this.setStyle({
			color: 'green',
			fillColor: 'green'
		});
	})
	.on('mouseout', function(e) {
		this.setStyle({
			color: 'purple',
			fillColor: 'purple'
		});
	});


	// Layer Memory


	var layer_memory = L.geoJson(halls, {
		style: function(feature) {
			return { weight: 2, fillOpacity: 0.4, color: 'blue', fillColor: 'blue' };
		},
		filter: function(feature) {
			return feature.properties.theme == 'memory';
		}
	})
	.on('click', loader({ type: 'themes', item: 'memory' }))
	.on('mouseover', function(e) {
		this.setStyle({
			color: 'green',
			fillColor: 'green'
		});
	})
	.on('mouseout', function(e) {
		this.setStyle({
			color: 'blue',
			fillColor: 'blue'
		});
	});

	var themes_group = L.layerGroup([layer_war, layer_city, layer_memory]);


	// Layer Halls


	var layer_halls = L.geoJson(halls, {
		style: function(feature) {
			return { weight: 2, fillOpacity: 0.4, color: feature.properties.color, fillColor: feature.properties.fillColor };
		},
		onEachFeature: function (feature, layer) {
			layer.on('mouseover', function(e) {
				this.setStyle({
					color: 'white',
					fillColor: 'white'
				});
			});

			layer.on('mouseout', function(e) {
				this.setStyle({
					color: feature.properties.color,
					fillColor: feature.properties.fillColor
				});
			});

			layer.on('click', loader({ type: 'halls', item: feature.properties.numb }));

		}
	}).addTo(map);

	var baseMaps = {
		'Темы': themes_group,
		'Залы': layer_halls
	};

	var overlayMaps = {
		'Экспонаты': layer_exhibits
	};

	L.easyButton('<span class="star" style="font-size: 19px; line-height: 22px;">✦</span>', function(btn, map){
		map.setView([0, 0], 2);
	}, { position: 'bottomleft' }).addTo(map);

	L.control.layers(baseMaps, overlayMaps, { position: 'bottomright' }).addTo(map);

});
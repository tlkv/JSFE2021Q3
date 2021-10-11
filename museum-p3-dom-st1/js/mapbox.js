window.addEventListener("DOMContentLoaded", () => {

	mapboxgl.accessToken = 'pk.eyJ1Ijoiemh1bHltIiwiYSI6ImNrdWUxbDdzMTFnNnYydW1vbm5pb2JhbmUifQ.tE8LBwTNY2yQA4ed8ib3ZA';

	let map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/light-v10',
		zoom: 15.7,
		center: [2.3364, 48.86091],		
	});

	map.addControl(new mapboxgl.NavigationControl());

	const point1 = new mapboxgl.Marker({ color: "#171717", }).setLngLat([2.3364, 48.86091]).addTo(map);

	const point2 = new mapboxgl.Marker({ color: "#757575", }).setLngLat([2.3333, 48.8602]).addTo(map);

	const point3 = new mapboxgl.Marker({ color: "#757575", }).setLngLat([2.3397, 48.8607]).addTo(map);

	const point4 = new mapboxgl.Marker({ color: "#757575", }).setLngLat([2.3330, 48.8619]).addTo(map);

	const point5 = new mapboxgl.Marker({ color: "#757575" }).setLngLat([2.3365, 48.8625]).addTo(map);

});
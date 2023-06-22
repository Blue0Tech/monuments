mapboxgl.accessToken = 'pk.eyJ1IjoicG9vamFjaGhpa2FyYWRhaGl5YSIsImEiOiJjbGgzMGRtMXcxaXgzM3FyenpkYmptc2hiIn0.JtZhvADuuJdUuEJfWrO2sw';
let lat=22.5, long=80;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [long,lat],
    zoom: 3.6
});
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);
new mapboxgl.Marker({
    element: $('#hampi')[0]
}).setLngLat([76.46,15.335]).addTo(map);
new mapboxgl.Marker({
    element: $('#amer')[0]
}).setLngLat([75.85,26.99]).addTo(map);
new mapboxgl.Marker({
    element: $('#nalanda')[0]
}).setLngLat([85.46,25.12]).addTo(map);
new mapboxgl.Marker({
    element: $('#rajgad')[0]
}).setLngLat([73.44,18.23]).addTo(map);
new mapboxgl.Marker({
    element: $('#harmandir')[0]
}).setLngLat([74.88,31.62]).addTo(map);
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: listingData.geometry.coordinates,
    zoom: 9
});

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listingData.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML(`<h4>${listingData.title}</h4><p>Exact location will be provided after booking.</p>`))
    .addTo(map);
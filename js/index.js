// Initialize and add the map
function initMap() {
  // The location of Jewel Osco
  const uluru = { lat: 41.926210, lng: -87.786350 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Jewel Osco
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

function initMap() {
  const jewelosco = { lat: 41.926208, lng: -87.786346};
  const highschool = { lat: 41.981240, lng: -87.707670};
  const neighborhood = { lat: 41.8949, lng: -87.7654};
  const IIT = { lat: 41.83429528028157, lng: -87.62756505033413 }
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: chicago,
  });

  const jewelmarker = new google.maps.Marker({
    position: jewelosco,
    map: map,
  });
  const iitmarker = new google.maps.Marker({
    position: IIT,
    map: map,
  });
  const hsmarker = new google.maps.Marker({
    position: highschool,
    map: map,
  });
  const nmarker = new google.maps.Marker({
    position: neighborhood,
    map: map,
  });
}

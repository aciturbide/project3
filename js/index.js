var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
  center: {lat: 41.8781, lng: -87.6298}, //chicago
  zoom: 10,
  });

  //Markers
  const iit = new google.maps.Marker ({
    position: {lat: 41.83429528028157, lng: -87.62756505033413},
    map,
    animation: google.maps.Animation.DROP,
    title: "IIT",
  });

  const jewelosco = new google.maps.Marker ({
    position: {lat: 41.926208, lng: -87.786346},
    map,
    animation: google.maps.Animation.DROP,
    title: "Jewel Osco",
  });

  const highschool = new google.maps.Marker ({
      position: {lat: 41.981240, lng: -87.707670},
      map,
      animation: google.maps.Animation.DROP,
      title: "Northside College Preparatory - High School",
  });
  const neighborhood = new google.maps.Marker ({
      position: { lat: 41.8949, lng: -87.7654},
      map,
      animation: google.maps.Animation.DROP,
      title: "My Neighborhood",
  });
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

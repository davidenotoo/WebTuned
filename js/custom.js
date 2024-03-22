// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

  // Funzione per chiudere il menu quando viene cliccato un link
  function closeMenu() {
    // Trova il toggle del menu
    var toggleButton = document.querySelector('.navbar-toggler');
    // Controlla se il menu è aperto
    if (toggleButton.getAttribute('aria-expanded') === 'true') {
      // Chiudi il menu
      toggleButton.click();
    }
  }


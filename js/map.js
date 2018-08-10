function initMap() {

    var uluru = {lat: 24.0238024, lng: -104.671969};

    var map = new google.maps.Map(document.getElementById('map'), {

      zoom: 18.08,

      center: uluru

    });

    var marker = new google.maps.Marker({

      position: uluru,

      map: map

    });

  }


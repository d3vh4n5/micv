// Necesita que el cliente apruebe compartir ubicacion

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
  
      console.log('Ubicación actual:');
      console.log('Latitud: ' + latitude);
      console.log('Longitud: ' + longitude);
    }, function(error) {
      console.error('Error al obtener la ubicación:', error.message);
    });
  } else {
    console.error('Geolocalización no es compatible en este navegador.');
  }
  
$(document).ready(function(){
    // Busca últimos reportes
    /*$.ajax({
        url: '',
        success: function(response) {
            var arrayOfLatLngs = [];
            // Icono personalizado
            var greenIcon = L.icon({
                iconUrl: 'leaf-green.png',
                shadowUrl: 'leaf-shadow.png',

                iconSize: [38, 95], // size of the icon
                shadowSize: [50, 64], // size of the shadow
                iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
            });
            // Agrega marcadores
            for (var i = 0; i < response.rows.length; i++) {
                markers.push(L.marker([response.rows[i].latitud, response.rows[i].longitud], { icon: greenIcon })
                    .addTo(map)
                    .bindPopup('<strong>' + response.rows[i].sub_variable + '</strong><br>' + response.rows[i].observaciones));
                arrayOfLatLngs.push([response.rows[i].latitud, response.rows[i].longitud]);
            }
            // Centra mapa en marcadores
            var bounds = new L.LatLngBounds(arrayOfLatLngs);
            map.fitBounds(bounds);
            // Esconde loading
            hideLoading();
        },
        error: function (xhr, status, error) {
            hideLoading();
            alert('Hubo un error al obtener la información.' + error);
        }
    });*/
    hideLoading();
});

function showLoading() {
    $('#loading').fadeIn();
}

function hideLoading() {
    $('#loading').fadeOut();
}
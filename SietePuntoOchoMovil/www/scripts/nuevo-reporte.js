var marker = 0;
$(document).ready(function(){
    map.on('click', function (e) {
        map.removeLayer(marker)
        marker = L.marker([e.latlng.lat, e.latlng.lng])
                .addTo(map)
                .bindPopup('<strong>Reporte</strong>')
                .openPopup();
        $('#siguiente').show();
    });
});

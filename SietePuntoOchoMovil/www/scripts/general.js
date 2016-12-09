var map;
$(document).ready(function(){
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    
    $('#cambiar-poblacion').on('click',function(){
        datos.setRecordarPoblacion(false);
        $('#sidebar-wrapper,#page-content-wrapper').fadeOut('slow',function(){
            window.location = 'index.html';
        });        
    });

    $('.poblacion').text(datos.getPoblacion().nombre);
    
    // Inicializa mapa
    if($('#map').length) {
        var punto_inicial = [datos.getPoblacion().lat, datos.getPoblacion().lng];
        map = L.map('map').setView(punto_inicial, 14);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }
});
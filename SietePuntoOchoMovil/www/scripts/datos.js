var datos = {
    getPoblacion: function() {
        return JSON.parse(localStorage.poblacion);
    },
    setPoblacion: function(nombre,lat,lng) {
        localStorage.poblacion = JSON.stringify({nombre:nombre,lat:lat,lng:lng});
    },
    recordarPoblacion: function() {
        return localStorage.recordar_poblacion=="true";
    },
    setRecordarPoblacion: function(recordar) {
        localStorage.recordar_poblacion = recordar;
    }
}
(function () {
    "use strict";
    
    if(datos.recordarPoblacion() && datos.getPoblacion()!="") window.location = 'reportes.html';
    else init();

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        init();
    };

    function init(){
        $.ajax({
            url:'',
            success: function(response){

            },
            error: function(){
                alert('Hubo un error al recuperar la información de las poblaciones.');
            }
        });
        $("#entrar").click(function (e) {
            var poblacion = $('#poblacion').val();
            if(poblacion) {
                datos.setRecordarPoblacion($('#recordar').is(':checked'));
                datos.setPoblacion(poblacion,$('#poblacion option:selected').attr('lat'),$('#poblacion option:selected').attr('lng'));
                $(".wrapper").fadeOut("slow", function () {
                    window.location = 'reportes.html';
                });
            } else {
                alert('Debes seleccionar la población que quieres consultar');
            }
        });
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();
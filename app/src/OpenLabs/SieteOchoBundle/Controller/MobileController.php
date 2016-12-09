<?php

namespace OpenLabs\SieteOchoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class MobileController extends Controller
{
    public function indexAction()
    {
        return $this->render('OpenLabsSieteOchoBundle:Default:index.html.twig');
    }

    public function tiposAction()
    {
        $json = '';
        $response = new Response($json);
        $response->headers->set('Content-Type', 'json');
        return $response;
    }

    public function puntosAction()
    {
        $json = '[{"id":1,"nombre":"Portoviejo","lat":-1.027839,"lng":-80.377919,"type":"localidad"},
{"id":2,"nombre":"Bolivar","lat":-1.480777,"lng":-79.139124,"type":"localidad"},
{"id":3,"nombre":"Chone","lat":-0.704811,"lng":-80.100134,"type":"localidad"},
{"id":4,"nombre":"El Carmen","lat":-0.267662,"lng":-79.467287,"type":"localidad"},
{"id":5,"nombre":"Flavio Alfaro","lat":-0.400649,"lng":-79.904982,"type":"localidad"},
{"id":6,"nombre":"Jipijapa","lat":-1.352609,"lng":-80.583601,"type":"localidad"},
{"id":7,"nombre":"Junin","lat":-34.586291,"lng":-60.958180,"type":"localidad"},
{"id":8,"nombre":"Manta","lat":-0.973630,"lng":-80.710545,"type":"localidad"},
{"id":9,"nombre":"Montecristi","lat":-1.044695,"lng":-80.658424,"type":"localidad"},
{"id":10,"nombre":"Pajam","lat":-1.552873,"lng":-80.424857,"type":"localidad"},
{"id":11,"nombre":"Pichincha","lat":-0.195745,"lng": -78.477829,"type":"localidad"},
{"id":12,"nombre":"Rocafuerte","lat":-1.277655,"lng":-80.423700,"type":"localidad"},
{"id":13,"nombre":"Santa Ana","lat":-0.781893,"lng":-80.234621,"type":"localidad"},
{"id":14,"nombre":"Sucre","lat":-0.958437,"lng":-80.743026,"type":"localidad"},
{"id":15,"nombre":"Tosagua","lat":0.072827,"lng":-80.045815,"type":"localidad"},
{"id":16,"nombre":"24 de mayo","lat":-1.396392,"lng":-80.743026,"type":"localidad"},
{"id":17,"nombre":"Pedernales","lat":0.072827,"lng": -80.045815,"type":"localidad"},
{"id":18,"nombre":"Olmedo","lat":-1.396392,"lng":-80.206944,"type":"localidad"},
{"id":19,"nombre":"Puerto López","lat":-1.556948,"lng":-80.805893,"type":"localidad"},
{"id":20,"nombre":"Jama","lat":-0.205178,"lng":-80.262423,"type":"localidad"},
{"id":21,"nombre":"Jaramijó","lat":-0.976556,"lng":-80.577338,"type":"localidad"},
{"id":22,"nombre":"San Vicente","lat":-0.597671,"lng":-80.406189,"type":"localidad"}]';
        $response = new Response($json);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    public function reportesAction()
    {
    	$myresponse = array(
        'success' => true,
        'content' => array(
         'main_content' => 'A long string',
         'secondary_content' => 'another string'
        )
      );

      $finalResponse = json_encode($myresponse);
        
      $response = new Response($finalResponse);
      $response->headers->set('Content-Type', 'application/json');
        
      return $response;
    }
}
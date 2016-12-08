<?php

namespace OpenLabs\SieteOchoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('OpenLabsSieteOchoBundle:Default:index.html.twig');
    }
}

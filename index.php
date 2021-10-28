<?php

    require_once('App/Core/Core.php');
    require_once('App/Template/template.html');
    require_once('App/Controller/HomeController.php');
    require_once('App/Controller/SobreController.php');
    require_once('App/Controller/BuscaCepController.php');

   $core = new Core;
   echo $core->init($_GET);

    require_once('App/Template/footer.html');
<?php 
	
	class Core{

		private $url;
		private $controller;
		private $metodo = 'index';
		private $params = array();

		public function __construct(){


		}

		public function init($request){

			if (isset($request['url'])) {
				
				$this->url = explode('/', $request['url']);

				$this->controller = ucfirst($this->url[0]).'Controller';
				array_shift($this->url);

			if (isset($this->url[0]) && $this->url != '') 
			{
					$this->metodo = $this->url[0];
					array_shift($this->url);
				}	

			if (isset($this->url[0]) && $this->url != '')
			 {
				
					$this->params = $this->url;

				}

			}

			else{

				$this->controller = 'HomeController';
				$this->metodo = 'index';
			}

			return call_user_func(array(new $this->controller,$this->metodo),$this->params);

			
		}

	}


 ?>
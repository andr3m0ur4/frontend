<?php

    namespace Controllers;

    use Core\Controller;

    class cadastrarController extends Controller
    {
        public function index()
        {
            $this->loadTemplate('cadastrar');
        }
    }

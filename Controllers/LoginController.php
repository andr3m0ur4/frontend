<?php

    namespace Controllers;

    use Core\Controller;

    class loginController extends Controller
    {
        public function index()
        {
            $this->loadTemplate('login');
        }

        public function sair()
        {
            session_destroy();
            header('Location: /');
        }
    }

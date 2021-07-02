<?php

    namespace Controllers;

    use Core\Controller;

    class ProdutoController extends Controller
    {
        public function index($id)
        {
            $this->loadTemplate('produto');
        }
    }

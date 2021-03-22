<?php

    namespace Controllers;

    use Core\Controller;
    use Models\Anuncio;
    use Models\Usuario;

    class produtoController extends Controller
    {
        public function index()
        {

        }

        public function abrir($id)
        {
            $anuncio = new Anuncio;
            $usuario = new Usuario;

            if (empty($id)) {
                header('Location: /');
                exit;
            }

            $dado = $anuncio->obterAnuncio($id);

            $dados = [
                'dado' => $dado
            ];

            $this->loadTemplate('produto', $dados);
        }
    }

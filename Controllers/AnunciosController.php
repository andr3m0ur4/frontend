<?php

    namespace Controllers;

    use Core\Controller;
    use Models\Anuncio;

    class anunciosController extends Controller
    {
        public function index()
        {
            $dados = [
                'anuncios' => []
            ];

            $this->loadTemplate('anuncios', $dados);
        }

        public function adicionar()
        {
            $this->loadTemplate('adicionar');
        }

        public function editar()
        {
            $this->loadTemplate('editar');
        }

        public function excluir()
        {
            header('Location: /anuncios');
        }

        public function excluirFoto($id)
        {
            if (empty($_SESSION['login'])) {
                header('Location: /login');
                exit;
            }
        
            $anuncio = new Anuncio;
        
            if (!empty($id)) {
                $id_anuncio = $anuncio->excluirFoto($id);
            }
        
            if (isset($id_anuncio)) {
                header("Location: /anuncios/editar/{$id_anuncio}");
            } else {
                header('Location: /anuncios');
            }
        }
    }

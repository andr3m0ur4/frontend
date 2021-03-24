<?php

    namespace Controllers;

    use Core\Controller;
    use Models\Anuncio;
    use Models\Categoria;

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

        public function editar($id)
        {
            if (empty($_SESSION['login'])) {
                header('Location: /login');
                exit;
            }
        
            $anuncio = new Anuncio;
            $sucesso = false;
        
            if (empty($id)) {
                header('Location: /anuncios');
                exit;
            }
            
            if (isset($_POST['titulo']) && !empty($_POST['titulo'])) {
                $titulo = addslashes($_POST['titulo']);
                $categoria = addslashes($_POST['categoria']);
                $valor = addslashes($_POST['valor']);
                $descricao = addslashes($_POST['descricao']);
                $estado = addslashes($_POST['estado']);
                $fotos = [];
        
                if (isset($_FILES['fotos'])) {
                    $fotos = $_FILES['fotos'];
                }
        
                $anuncio->editarAnuncio($titulo, $categoria, $valor, $descricao, $estado, $fotos, $id);
                $sucesso = true;
            }
        
            $dado = $anuncio->obterAnuncio($id);
        
            $categoria = new Categoria;
            $categorias = $categoria->obterLista();

            $dados = [
                'sucesso' => $sucesso,
                'categorias' => $categorias,
                'dado' => $dado
            ];

            $this->loadTemplate('editar', $dados);
        }

        public function excluir($id)
        {
            if (empty($_SESSION['login'])) {
                header('Location: /login');
                exit;
            }
        
            $anuncio = new Anuncio;
        
            if (!empty($id)) {
                $anuncio->excluirAnuncio($id);
            }
        
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

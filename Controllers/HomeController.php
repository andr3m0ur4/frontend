<?php

    namespace Controllers;

    use Core\Controller;
    use Models\Anuncio;
    use Models\Categoria;
    use Models\Usuario;

    class homeController extends Controller
    {
        public function index()
        {
            $anuncio = new Anuncio;
            $usuario = new Usuario;
            $categoria = new Categoria;

            $filtros = [
                'categoria' => '',
                'preco' => '',
                'estado' => ''
            ];

            if (isset($_GET['filtros'])) {
                $filtros = $_GET['filtros'];
            }

            $total_anuncios = $anuncio->obterTotalAnuncios($filtros);
            $total_usuarios = $usuario->obterTotalUsuarios();

            $pagina = 1;

            if (isset($_GET['p']) && !empty($_GET['p'])) {
                $pagina = addslashes($_GET['p']);
            }
            $qtd_itens = 4;
            $total_paginas = ceil($total_anuncios / $qtd_itens);

            $anuncios = $anuncio->obterUltimosAnuncios($pagina, $qtd_itens, $filtros);

            $categorias = $categoria->obterLista();

            $dados = [
                'total_anuncios' => $total_anuncios,
                'total_usuarios' => $total_usuarios,
                'categorias' => $categorias,
                'filtros' => $filtros,
                'anuncios' => $anuncios,
                'total_paginas' => $total_paginas
            ];

            $this->loadTemplate('home', $dados);
        }

        public function construirSearchQuery($pagina) {
            $query = $_GET;
            $query['p'] = $pagina;
            return http_build_query($query);
        }
    }

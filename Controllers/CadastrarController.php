<?php

    namespace Controllers;

    use Core\Controller;
    use Models\Usuario;

    class cadastrarController extends Controller
    {
        public function index()
        {
            $usuario = new Usuario;
            $erro = false;
            $sucesso = null;

            if (isset($_POST['nome']) && !empty($_POST['nome'])) {
                $nome = addslashes($_POST['nome']);
                $email = addslashes($_POST['email']);
                $senha = $_POST['senha'];
                $telefone = addslashes($_POST['telefone']);

                if (!empty($email) && !empty($nome) && !empty($senha)) {
                    if ($usuario->cadastrar($nome, $email, $senha, $telefone)) {
                        $sucesso = true;
                    } else {
                        $sucesso = false;
                    }
                } else {
                    $erro = true;
                }
            }

            $dados = [
                'erro' => $erro,
                'sucesso' => $sucesso
            ];

            $this->loadTemplate('cadastrar', $dados);
        }
    }

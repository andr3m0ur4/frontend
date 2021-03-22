<?php

    namespace Controllers;

    use Core\Controller;
    use Models\Usuario;

    class loginController extends Controller
    {
        public function index()
        {
            $usuario = new Usuario;
            $sucesso = null;

            if (isset($_POST['email']) && !empty($_POST['email'])) {
                $email = addslashes($_POST['email']);
                $senha = md5($_POST['senha']);

                if ($usuario->login($email, $senha)) {
                    $sucesso = true;
                } else {
                    $sucesso = false;
                }
            }

            $dados = [
                'sucesso' => $sucesso
            ];

            $this->loadTemplate('login', $dados);
        }

        public function sair()
        {
            session_destroy();
            header('Location: /');
        }
    }

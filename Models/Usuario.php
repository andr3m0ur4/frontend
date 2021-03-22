<?php

    namespace Models;

    use Core\Model;

    class Usuario extends Model
    {
        public function cadastrar($nome, $email, $senha, $telefone)
        {
            $sql = "SELECT id FROM usuarios WHERE email = :email";
            $sql = $this->db->prepare($sql);
            $sql->bindValue(':email', $email);
            $sql->execute();

            if ($sql->rowCount() == 0) {

                $sql = "INSERT INTO usuarios (nome, email, senha, telefone)
                    VALUES (:nome, :email, :senha, :telefone)";
                $sql = $this->db->prepare($sql);
                $sql->bindValue(':nome', $nome);
                $sql->bindValue(':email', $email);
                $sql->bindValue(':senha', md5($senha));
                $sql->bindValue(':telefone', $telefone);
                $sql->execute();

                return true;
            }

            return false;
        }

        public function login($email, $senha)
        {
            $sql = "SELECT id, nome FROM usuarios WHERE email = :email AND senha = :senha";
            $sql = $this->db->prepare($sql);
            $sql->bindValue(':email', $email);
            $sql->bindValue(':senha', $senha);
            $sql->execute();

            if ($sql->rowCount() > 0) {
                $dado = $sql->fetch(\PDO::FETCH_OBJ);
                $_SESSION['login'] = $dado->id;
                $_SESSION['nome'] = $dado->nome;
                
                return true;
            }

            return false;
        }

        public function obterTotalUsuarios()
        {
            $sql = "SELECT COUNT(*) AS contador FROM usuarios";
            $sql = $this->db->query($sql);
            $total = $sql->fetch(\PDO::FETCH_OBJ)->contador;

            return $total;
        }
    }

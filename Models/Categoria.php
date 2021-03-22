<?php

    namespace Models;

    use Core\Model;

    class Categoria extends Model
    {
        public function obterLista()
        {
            $dados = [];

            $sql = "SELECT * FROM categorias";
            $sql = $this->db->query($sql);

            if ($sql->rowCount() > 0) {
                $dados = $sql->fetchAll(\PDO::FETCH_OBJ);
            }

            return $dados;
        }
    }

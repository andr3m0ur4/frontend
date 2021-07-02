<?php

    require 'environment.php';

    $config = [];

    if (ENVIRONMENT == 'development') {
        define('BASE_URL', 'http://localhost');
        $config = [
            'dbname' => 'classificados',
            'host' => '10.0.0.105',
            'dbuser' => 'andre-moura',
            'dbpass' => 'andre'
        ];
    } else if (ENVIRONMENT == 'development2') {
        define('BASE_URL', 'http://localhost:5500');
        $config = [
            'dbname' => 'classificados',
            'host' => 'localhost',
            'dbuser' => 'root',
            'dbpass' => ''
        ];
    } else {
        define('BASE_URL', 'https://meusite.com.br');
        $config = [
            'dbname' => 'estrutura_mvc',
            'host' => 'localhost',
            'dbuser' => 'root',
            'dbpass' => 'root'
        ];
    }

    global $db;

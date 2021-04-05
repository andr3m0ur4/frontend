<?php

    global $routes;
    $routes = [
        '/galeria/{id}' => '/galeria/abrir/:id',
        //'/galeria/{id}/{titulo}' => '/galeria/abrir/:id/:titulo',
        '/produto/{id}' => '/produto/index/:id',
        '/home' => '/home/index',
        //'/{titulo}' => '/noticia/abrirTitulo/:titulo'
    ];

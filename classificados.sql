-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 22/03/2021 às 06:52
-- Versão do servidor: 8.0.22-0ubuntu0.20.04.3
-- Versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `classificados`
--
CREATE DATABASE IF NOT EXISTS `classificados` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `classificados`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `anuncios`
--

CREATE TABLE `anuncios` (
  `id` int NOT NULL,
  `id_usuario` int DEFAULT NULL,
  `id_categoria` int DEFAULT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `descricao` text,
  `valor` decimal(8,2) DEFAULT NULL,
  `estado` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `anuncios`
--

INSERT INTO `anuncios` (`id`, `id_usuario`, `id_categoria`, `titulo`, `descricao`, `valor`, `estado`) VALUES
(1, 1, 2, 'Camiseta', 'Uma camiseta simples', '40.23', 1),
(2, 1, 4, 'Ferrari', '', '200000.00', 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `anuncios_imagens`
--

CREATE TABLE `anuncios_imagens` (
  `id` int NOT NULL,
  `id_anuncio` int DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `anuncios_imagens`
--

INSERT INTO `anuncios_imagens` (`id`, `id_anuncio`, `url`) VALUES
(2, 1, '046a39b30e9193b4af8220a3f3d0d586.jpg'),
(3, 2, '7ace1819759c39db25c90163f15cb03b.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `categorias`
--

CREATE TABLE `categorias` (
  `id` int NOT NULL,
  `nome` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `categorias`
--

INSERT INTO `categorias` (`id`, `nome`) VALUES
(1, 'Relógios'),
(2, 'Roupas'),
(3, 'Eletrônicos'),
(4, 'Carros'),
(5, 'Artigos');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(32) NOT NULL,
  `telefone` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `telefone`) VALUES
(1, 'André Moura', 'andre@teste.com', '202cb962ac59075b964b07152d234b70', '9999999'),
(2, 'Fulano de Tal', 'fulano@teste.com', '3342949e2e99fc2f304de6fdd626a188', ''),
(3, 'Ciclano', 'ciclano@teste.com.br', 'fe798a81c2e1eb4fd9695138276e52ed', ''),
(4, 'Alister', 'alister@teste.com', '804f334cfc953737c4357ba25ceb43b9', '222'),
(5, 'Felipe Honório de Moura Benedicto', 'felipeb2518@gmail.com', '6ef80bb237adf4b6f77d0700e1255907', '12996383876');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `anuncios`
--
ALTER TABLE `anuncios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario_idx` (`id_usuario`),
  ADD KEY `id_categoria_idx` (`id_categoria`);

--
-- Índices de tabela `anuncios_imagens`
--
ALTER TABLE `anuncios_imagens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_anuncio_idx` (`id_anuncio`);

--
-- Índices de tabela `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `anuncios`
--
ALTER TABLE `anuncios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `anuncios_imagens`
--
ALTER TABLE `anuncios_imagens`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `anuncios`
--
ALTER TABLE `anuncios`
  ADD CONSTRAINT `id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`),
  ADD CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Restrições para tabelas `anuncios_imagens`
--
ALTER TABLE `anuncios_imagens`
  ADD CONSTRAINT `id_anuncio` FOREIGN KEY (`id_anuncio`) REFERENCES `anuncios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

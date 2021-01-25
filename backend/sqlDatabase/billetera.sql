-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-01-2021 a las 16:17:04
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `billetera`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `documento` varchar(10) NOT NULL,
  `nombres` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `celular` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `documento`, `nombres`, `email`, `celular`) VALUES
(1, '0707012605', 'Diego Jimenez', 'diego96jp@gmail.com', '0992294342'),
(3, '0707012604', 'andreaa', 'jajajaj@gmail.com', '123344'),
(4, '0707012604', 'lupitta', 'jajajaj@gmail.com', '123344'),
(5, '0707012607', 'juan jimenez', 'jajajaj@gmail.com', '123344'),
(6, '0707012500', 'Diego Andrés ', 'andres96jimenez@gmail.com', '1234567'),
(25, '0707012500', 'Diego Andrés ', 'andres96jimenez@gmail.com', '0979843533'),
(26, '0912612479', 'Maria Perez', 'danielacarrillo@gmail.com', '0992294342');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wallet`
--

CREATE TABLE `wallet` (
  `id_wallet` int(11) NOT NULL,
  `documento` varchar(10) NOT NULL,
  `celular` varchar(10) NOT NULL,
  `valor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `wallet`
--

INSERT INTO `wallet` (`id_wallet`, `documento`, `celular`, `valor`) VALUES
(1, '0707012500', '123456', 14),
(2, '0707012700', '123456', 222),
(3, '0707012605', '0992294342', 14),
(4, '0707012705', '0979843533', 4000),
(5, '0707012605', '0979843533', 150),
(6, '0707012605', '0979843533', 150),
(7, '0707012605', '0979843533', 150);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `wallet`
--
ALTER TABLE `wallet`
  ADD PRIMARY KEY (`id_wallet`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `wallet`
--
ALTER TABLE `wallet`
  MODIFY `id_wallet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

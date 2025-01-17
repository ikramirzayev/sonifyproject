-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 17 Oca 2025, 19:29:02
-- Sunucu sürümü: 10.4.32-MariaDB
-- PHP Sürümü: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `comment_system`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `comment` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `comments`
--

INSERT INTO `comments` (`id`, `name`, `email`, `comment`, `created_at`) VALUES
(1, 'fawf', 'ikram.irzayev13@gmail.com', 'fawfawfwa', '2025-01-16 23:58:40'),
(2, 'Ikram', 'ikram.irzayev13@gmail.com', 'awGAGAGWG', '2025-01-17 00:00:19'),
(3, 'gsaG', 'ikram.irzayev13@gmail.com', 'gwa', '2025-01-17 00:03:38'),
(4, 'agwg', 'agaw@gwa.wga', 'gwgag', '2025-01-17 00:04:54'),
(5, 'GAWGAWG', 'ikram.irzayev13@gmail.com', 'GAWGAWGWA', '2025-01-17 00:06:07'),
(6, 'Ikram', 'ikram.irzayev13@gmail.com', 'fwafaw', '2025-01-17 00:06:47'),
(7, 'Ikram', 'ikram.irzayev13@gmail.com', 'Zeynep olmeli xd bence :D \r\n', '2025-01-17 16:45:23'),
(8, 'Ikram', 'ikram.irzayev13@gmail.com', 'fwafwaf', '2025-01-17 18:21:06');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

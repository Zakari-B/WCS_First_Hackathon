-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: hvp
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `action`
--

DROP TABLE IF EXISTS `action`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `action` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idPartie` int DEFAULT NULL,
  `playerName` varchar(100) DEFAULT NULL,
  `hit` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action`
--

LOCK TABLES `action` WRITE;
/*!40000 ALTER TABLE `action` DISABLE KEYS */;
/*!40000 ALTER TABLE `action` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scores`
--

DROP TABLE IF EXISTS `scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `playerName` varchar(100) DEFAULT NULL,
  `score` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scores`
--

LOCK TABLES `scores` WRITE;
/*!40000 ALTER TABLE `scores` DISABLE KEYS */;
INSERT INTO `scores` VALUES (1,NULL,NULL,NULL),(2,NULL,NULL,NULL),(3,NULL,NULL,NULL),(4,'gnos',0,'2022-05-13'),(5,'gnorrrs',10,'2022-05-13'),(6,'GNOS',1,'2022-05-13'),(7,'GNOS',3,'2022-05-13'),(8,'GNOS',3,'2022-05-13'),(9,'GNOS',1,'2022-05-13'),(10,'GNOSS',3,'2022-05-13'),(11,'GNOS28',5,'2022-05-13'),(12,'',16,'2022-05-13'),(13,'',0,'2022-05-13'),(14,'',-42,'2022-05-13'),(15,'',1,'2022-05-13'),(16,'GNOS',-95,'2022-05-13'),(17,'GNOS',81,'2022-05-13'),(18,'',-29,'2022-05-13'),(19,'TerryBle',102,'2022-05-13'),(20,'Clemoufle',88,'2022-05-13'),(21,'JeanJean',45,'2022-05-13'),(22,'Zak-La-Menace',34,'2022-05-13'),(23,'Gnossienne',33,'2022-05-13'),(24,'Anthony4Ever',23,'2022-05-13'),(25,'PHPisD34D',75,'2022-05-13'),(26,'undefined',20,'2022-05-13'),(27,'Jojo L\'asticot',10,'2022-05-13'),(28,'while(tru3)',8,'2022-05-13'),(29,'Kesin Pesss',-12,'2022-05-13'),(30,'Ismamamama',-87,'2022-05-13'),(31,'J\'ai sommeil',-20,'2022-05-13'),(32,'Elon',-43,'2022-05-13'),(33,'JulienKayak',-46,'2022-05-13'),(34,'Lori├ºe',-50,'2022-05-13'),(35,'Ptit_crabe',-101,'2022-05-13'),(36,'Isy',-51,'2022-05-13'),(37,'Paul Tergeist',-53,'2022-05-13'),(38,'Basile-ick',-5,'2022-05-13'),(39,'GNOS',0,'2022-05-13'),(40,'Boloss',-51,'2022-05-13'),(41,'Baltringue',-30,'2022-05-13'),(42,'Undefined',30,'2022-05-13'),(43,'Crevard',29,'2022-05-13'),(44,'Baltringue',-45,'2022-05-13'),(45,'GNOS',-135,'2022-05-13'),(46,'WILDER',-89,'2022-05-13'),(47,'GNOS',106,'2022-05-13'),(48,'GNOS',144,'2022-05-13'),(49,'',80,'2022-05-14');
/*!40000 ALTER TABLE `scores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-14 11:37:13

CREATE DATABASE  IF NOT EXISTS `unicef` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `unicef`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: unicef
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address_td`
--

DROP TABLE IF EXISTS `address_td`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address_td` (
  `address_id` int NOT NULL AUTO_INCREMENT,
  `zonecode` int NOT NULL,
  `address` varchar(100) NOT NULL,
  `building_name` varchar(100) NOT NULL,
  `bname` varchar(100) NOT NULL,
  `address_type` varchar(100) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address_td`
--

LOCK TABLES `address_td` WRITE;
/*!40000 ALTER TABLE `address_td` DISABLE KEYS */;
/*!40000 ALTER TABLE `address_td` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authority_tb`
--

DROP TABLE IF EXISTS `authority_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authority_tb` (
  `authority_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `role_id` varchar(45) NOT NULL,
  PRIMARY KEY (`authority_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authority_tb`
--

LOCK TABLES `authority_tb` WRITE;
/*!40000 ALTER TABLE `authority_tb` DISABLE KEYS */;
INSERT INTO `authority_tb` VALUES (1,1,'1'),(2,2,'1'),(3,3,'1');
/*!40000 ALTER TABLE `authority_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `center_tb`
--

DROP TABLE IF EXISTS `center_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `center_tb` (
  `center_id` int NOT NULL AUTO_INCREMENT,
  `center_name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `phone-number` varchar(45) NOT NULL,
  PRIMARY KEY (`center_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `center_tb`
--

LOCK TABLES `center_tb` WRITE;
/*!40000 ALTER TABLE `center_tb` DISABLE KEYS */;
INSERT INTO `center_tb` VALUES (1,'적십자','서울','02-234-4455'),(2,'녹십자','울산','052-234-1475'),(3,'녹두전','부산','051-255-2244'),(4,'녹두','대전','012-254-5566'),(5,'녹색전','인천','08-5455221'),(6,'적색전','적색','55-555-5555'),(7,'연색','마계','88-8888-5545');
/*!40000 ALTER TABLE `center_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donation_use_plan_tb`
--

DROP TABLE IF EXISTS `donation_use_plan_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donation_use_plan_tb` (
  `dup_id` int NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `donation_expense` int NOT NULL,
  `giving_page_id` int NOT NULL,
  PRIMARY KEY (`dup_id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donation_use_plan_tb`
--

LOCK TABLES `donation_use_plan_tb` WRITE;
/*!40000 ALTER TABLE `donation_use_plan_tb` DISABLE KEYS */;
INSERT INTO `donation_use_plan_tb` VALUES (1,'가족 지킴 키트 3만원*200가정 ',6000000,1),(2,'이식인 사연 책자 2천원*200권 ',400000,1),(3,'키트 발송비 3천원*200곳 ',600000,1),(4,'특식, 간식비 20000 * 21명 ',420000,2),(5,'어린이날 선물 20000 * 21명 ',420000,2),(6,'어린이날 체험학습 30000 * 21 ',630000,2),(7,'어린이날 교통비 10000*21만 ',210000,2),(8,'어린이날 행사진행비 ',300000,2),(9,'식사비 130명*20000 ',2600000,3),(10,'사업비 카네이션 130명*4000원 ',520000,3),(11,'선물비 130명*30000원 ',3900000,3),(12,'염색 or 펌 30,000원×100명 ',3000000,4),(13,'차량보험료  ',600000,5),(14,'차량유지관리비 20만원*4회 ',800000,5),(15,'유류비 20만원*12월 ',2400000,5),(16,'식수와 위생 ',679140000,6),(17,'영양 및 보건 ',269775000,6),(18,'교육 ',707107500,6),(19,'어린이 보호 ',843977500,6),(20,'아동 가정 생계지원 ',15000000,7),(21,'아동 가정 교육지원 ',5000000,7),(22,'소방세정티슈 피부용 후원 ',4948000,8),(23,'소방세정티슈 장비용 후원 ',4952000,8),(24,'보일러 배관공사 ',6000000,9),(25,'화장실 누수공사 및 도배장판 ',3900000,9),(26,'생계비 월 40만원 * 12개월 ',4800000,10),(27,'치료비 및 약제비 ',2000000,10),(28,'주거비 ',3100000,10),(29,'의료비 월 30만 원*12개월 ',3600000,11),(30,'긴급생계비 ',4815000,11),(31,'경상운영비 ',1485000,11),(32,'워터파크 입장료 *35명 ',1050000,12),(33,'톨게이트 및 교통비 *왕복 ',13000,12),(34,'구명조끼 및 튜브 비용  ',210000,12),(35,'45인승 버스 대절비용 (왕복) ',950000,12),(36,'중식(20,000원) *35명 ',700000,12),(37,'간식비 (10,000원)*35명 ',350000,12),(38,'죽지원10,000원*5명*월8회*3월 ',1200000,13),(39,'영양보충식50,000원*5명*3월 ',750000,13),(40,'김치10,000원*200명 ',2000000,13),(41,'밑반찬 2종 10,000원*200명 ',2000000,13),(42,'도시락김 5,000원*200명 ',1000000,13),(43,'즉석국3종 10,000원*200명 ',2000000,13),(44,'포장비(쇼핑백,라벨) ',200000,13),(45,'신발장 주문제작 ',400000,14),(46,'서류 수납장(반문장) ',200000,14),(47,'아동물품 수납장 100,000*2개 ',200000,14),(48,'아동의자 50,000*24개 ',1200000,14),(49,'무료급식소 식재료비 1개월치 ',7200000,15),(50,'무료급식소 임대료 1개월치 ',2700000,15),(51,'전시회 진행 물품 구입 ',1000000,16),(52,'홍보 및 데코 물품 구입 ',1000000,16),(53,'다과 및 식사비 ',1000000,16),(54,'기념식 진행비 ',1500000,16),(55,'밑반찬 5,000원*40명*45명 ',9000000,17),(56,'요리교실 20,000원*7회*7명 ',980000,17),(57,'프로그램 강사비 222,000×6개월 ',1320000,18),(58,'프로그램 재료비 200,000×6개월 ',1200000,18),(59,'다과비 80,000×6개월 ',480000,18),(60,'아동 가정 생계지원 ',15000000,19),(61,'아동 가정 교육지원 ',5000000,19);
/*!40000 ALTER TABLE `donation_use_plan_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funder_order_tb`
--

DROP TABLE IF EXISTS `funder_order_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funder_order_tb` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `funder_id` int NOT NULL,
  `reward_id` int NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funder_order_tb`
--

LOCK TABLES `funder_order_tb` WRITE;
/*!40000 ALTER TABLE `funder_order_tb` DISABLE KEYS */;
/*!40000 ALTER TABLE `funder_order_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funder_tb`
--

DROP TABLE IF EXISTS `funder_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funder_tb` (
  `funder_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `order_date` datetime NOT NULL,
  `address_id` int NOT NULL,
  PRIMARY KEY (`funder_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funder_tb`
--

LOCK TABLES `funder_tb` WRITE;
/*!40000 ALTER TABLE `funder_tb` DISABLE KEYS */;
/*!40000 ALTER TABLE `funder_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funding_category_tb`
--

DROP TABLE IF EXISTS `funding_category_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funding_category_tb` (
  `funding_category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(45) NOT NULL,
  PRIMARY KEY (`funding_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funding_category_tb`
--

LOCK TABLES `funding_category_tb` WRITE;
/*!40000 ALTER TABLE `funding_category_tb` DISABLE KEYS */;
INSERT INTO `funding_category_tb` VALUES (1,'음식'),(2,'도서'),(3,'의류'),(4,'액세서리&화장품'),(5,'꽃&과일'),(6,'생활용품');
/*!40000 ALTER TABLE `funding_category_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funding_comment_tb`
--

DROP TABLE IF EXISTS `funding_comment_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funding_comment_tb` (
  `funding_comment_id` int NOT NULL AUTO_INCREMENT,
  `comment_text` varchar(999) NOT NULL,
  `funding_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`funding_comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funding_comment_tb`
--

LOCK TABLES `funding_comment_tb` WRITE;
/*!40000 ALTER TABLE `funding_comment_tb` DISABLE KEYS */;
/*!40000 ALTER TABLE `funding_comment_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funding_page_sub_img_tb`
--

DROP TABLE IF EXISTS `funding_page_sub_img_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funding_page_sub_img_tb` (
  `fpsi_id` int NOT NULL AUTO_INCREMENT,
  `fundig_id` int NOT NULL,
  `img_url` varchar(200) NOT NULL,
  PRIMARY KEY (`fpsi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funding_page_sub_img_tb`
--

LOCK TABLES `funding_page_sub_img_tb` WRITE;
/*!40000 ALTER TABLE `funding_page_sub_img_tb` DISABLE KEYS */;
/*!40000 ALTER TABLE `funding_page_sub_img_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funding_tb`
--

DROP TABLE IF EXISTS `funding_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funding_tb` (
  `funding_id` int NOT NULL AUTO_INCREMENT,
  `funding_name` varchar(45) NOT NULL,
  `register_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `goal_total` int NOT NULL,
  `story_title` varchar(45) NOT NULL,
  `story_content` text NOT NULL,
  `main_img_url` varchar(200) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`funding_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funding_tb`
--

LOCK TABLES `funding_tb` WRITE;
/*!40000 ALTER TABLE `funding_tb` DISABLE KEYS */;
INSERT INTO `funding_tb` VALUES (1,'우리집 식탁에 올라온 안동 별미 한우불고기','2023-05-04 09:26:00','2023-06-04 09:26:00',1453000,'한우불고기로 쉽게 차리는 고품격 한상','각종 행사와 모임이 많은 가정의 달, 식탁 위를 풍성하게 만들어줄 고품격 안동 별미를 소개합니다. 안동에서 난 품질 좋은 한우와 농산물, 그리고 숙성간장이 만들어 내는 한우불고기의 부드러움과 담백함은 \'안동회관\' 만이 만들 수 있습니다. 이 특별한 안동의 맛을 집에서 간편하게 만나 보세요!','https://happybean-phinf.pstatic.net/20230425_246/1682405929016uJo4c_JPEG/top.jpg',1),(2,'자연과 동물의 소중함을 이야기하는 티셔츠','2023-05-04 09:26:00','2023-06-04 09:26:00',6669000,'동물들의 삶, 자연, 우리 인간과의 연결고리','그린블리스는 자연과 동물에 해를 최소화하면서 예쁘고 편안하게 쓸 수 있는 제품을 만드는 브랜드로 2013년에 시작되었습니다. 양말 브랜드로 처음 시작하여 약 5년 넘게 적자에 허덕이면서 많은 어려움이 있었지만, 지금은 양말뿐만 아니라 티셔츠, 바지, 손수건, 타월 등을 만드는 오가닉라이프스타일 브랜드로 성장하였습니다. 뒤돌아보면 살아남았다는 게 신기하기도 하고, 이 과정에 많은 이들의 도움이 있었습니다.\n지난 10년간 그린블리스는 동물성 소재를 사용하지 않고, 합성섬유 사용은 최대한 자제하면서 식물성 오가닉 소재 위주로 제품을 제작하고 있습니다. 이것이 환경과 사용자의 피부에도 가장 나은 방향이라고 생각하기 때문입니다. 이번 10주년 기념 펀딩은 자연과 동물, 그리고 그린블리스를 찾아주시는 분들에 대한 감사의 의미를 담아 준비했습니다. \n\n*이번 펀딩은 동물과 환경에 관심이 많은 신도현 배우님께서 모델로 함께 해주셨습니다.','https://happybean-phinf.pstatic.net/20230424_63/1682329844469uM9KL_JPEG/0._%25A6%25E1%25B5%25E1_%25A9%25E1%25A8%25E1.jpg',2),(3,'스마트팜에서 자란 달콤 짭짤 대추방울토마토','2023-05-04 09:26:00','2023-06-04 09:26:00',2192000,'누구나 좋아하는 달콤함, 대추방울토마토','달콤하고 짭짤한 매력의 대추방울토마토는 남녀노소 누구나 좋아하는 과채류로, 완숙 토마토나 일반 방울토마토에 비해 당도가 훨씬 높습니다. 이런 대추방울토마토를 더욱 맛있게 재배하기 위해, 드리미팜 김성체 대표는 자연 속 광활한 대지에서 첨단 스마트팜을 활용해 고군분투하고 있습니다. 단맛, 신맛, 거기에 짭짤함까지 청년농부의 희로애락처럼 다양한 맛이 공존하는 대추방울토마토의 진정한 매력을 이번 펀딩에서 만나보세요.','https://happybean-phinf.pstatic.net/20230427_224/1682573923108IFXOf_JPEG/IMG_7897_%25A9%25E1%25A8%25E1.jpg',3),(4,'자연 그대로의 향, 제주 감귤 아로마 오일','2023-05-04 09:26:00','2023-06-04 09:26:00',1131000,'아로마 테라피로 다시 태어난 못난이 감귤','농부들이 피땀 흘려 수확한 농산물 중 약 30%는 그대로 버려진다는 걸 알고 계시나요? 주로 모양이나 색이 규격에 맞지 않다는 이유만으로 못난이라 불리며 제 가치를 평가받지 못하고 있습니다. 이렇게 폐기된 농산물은 지구온난화의 원인 중 하나인 메탄가스를 만들어 환경에도 나쁜 영향을 줍니다. 널리 알려진 제주 감귤도 예외는 아니라 폐기율이 20%에 달한답니다. 그렇게 쓰레기가 될 뻔한 감귤이 아로마 테라피와 만나 새 생명을 얻었습니다!','https://happybean-phinf.pstatic.net/20230426_116/1682493797332yN254_JPEG/%25D7%25BC12321321.jpg',4),(5,'숙면을 돕는 유기농 순면 베개 커버와 잠옷','2023-05-04 09:26:00','2023-06-04 09:26:00',1299500,'지속가능한 의미를 더한 의식주를 제안합니다.','하루 3분의 1 정도를 차지하는 수면 시간, 어떻게 보내고 계시나요? 우리 일상에 꼭 필요한 입고, 먹고, 쉬는 시간은 아무리 강조해도 지나치지 않습니다. 라이프스타일 브랜드 ‘의식주의’는 이런 시간들이 우리 그리고 지구에게 무해할 수 있도록 지속가능한 의미를 더한 제품을 제안합니다. 이번 펀딩에서는 잠을 자며 자연스럽게 비거니즘 라이프를 실천할 수 있는 유기농 순면 베개 커버 레이어와 잠옷을 소개합니다.','https://happybean-phinf.pstatic.net/20230425_143/1682392088628YAYK1_JPEG/06.jpg',5),(6,'청각장애 플로리스트가 매달 고르는 꽃 꾸러미','2023-05-04 09:26:00','2023-06-04 09:26:00',1590800,'봄바람 타고 두 번째 펀딩으로 돌아온 꽃 정기구독','안녕하세요 플립플라워입니다. 지난해 진행한 첫 펀딩에선 많은 분들의 사랑 덕분에 목표 금액 1953%를 달성할 수 있었어요. 고마운 마음을 담아 두 번째 펀딩으로 인사드립니다. 꽃이 만발한 봄철은 아름답지만 스치듯 짧아 아쉬움을 남기곤 합니다. 매달 집으로 찾아오는 정기 구독 꽃 꾸러미로 매일을 따스한 봄날로 만들어 보세요!','https://happybean-phinf.pstatic.net/20230425_285/1682390392035ihBr7_JPEG/02.jpg',6),(7,'천연 성분으로 말끔히! 설거지비누와 손비누','2023-05-04 09:26:00','2023-06-04 09:26:00',523000,'요리하는 손을 위한 순한 주방용 비누 2종 최초 공개!','요리를 하는 분들이라면 잦은 세정에 손이 거칠어진 경험이 있을 거예요. 김치, 생선 등의 강한 냄새를 없애기 어려워 난감할 때도 있고요. 디어얼스는 주방에서의 시간이 조금 더 즐거워지는 방법을 오랜 시간 고민하고 연구했습니다. 그렇게 개발한 ‘설거지비누’와 ‘손비누’를 해피빈 펀딩을 통해 처음으로 소개합니다!','https://happybean-phinf.pstatic.net/20230426_176/1682485418204YCiXh_JPEG/1.jpg',7),(8,'진짜 미얀마의 맛을 담은 샨 카욱쉐 밀키트','2023-05-04 09:26:00','2023-06-04 09:26:00',602800,'미얀마 대표 음식, 샨 카욱쉐','안녕하세요. 두 번째 펀딩으로 인사드리는 칠루칠루입니다. 많은 분들이 미얀마를 향한 저희의 진심을 알아봐 주신 덕에 첫 펀딩에서 목표 금액 999%를 달성할 수 있었어요. 감사한 마음으로 새로운 별미를 소개합니다.\n\n‘샨 카욱쉐’는 ‘샨족이 먹는 국수’라는 뜻인데요. 중국, 태국과 접한 샨주 지역의 특산물이었으나 지금은 미얀마를 대표하는 음식이 되었습니다. 샨족의 입맛은 의외로 한국인과 비슷해서, 이국적이고 낯설지 않은 담백하고 깔끔한 풍미를 즐기실 수 있어요. 한국인의 입맛에 가장 잘 맞는 미얀마 전통 쌀국수로 추천드립니다!','https://happybean-phinf.pstatic.net/20230421_197/1682057025056Xt11v_JPEG/%25D7%25BC213123.jpg',8),(9,'영양만점 빨간 맛! 청년 농부가 키운 레드비트','2023-05-04 09:26:00','2023-06-04 09:26:00',733000,'세계 4대 슈퍼푸드로 선정된 ‘레드비트’','레드비트는 일명 빨간 무라고 불리는 뿌리채소인데요. ‘혈관 청소부’라고 불릴 만큼 우리 몸속 혈관 청소에 도움을 주어 현대인들의 사랑을 받고 있습니다. 특히 칼슘, 칼륨, 철분, 섬유소 등이 포함되어 있어, 고혈압과 세포 손상을 억제하고 항산화 작용을 통해 암 예방과 염증을 완화하기도 합니다. 이 레드비트를 수확하기 위해 경남 의령, 청정 자연 속에서 열심히 농사를 짓는 한 청년 농부가 있습니다.','https://happybean-phinf.pstatic.net/20230424_103/1682310100526JmNwO_JPEG/top.jpg',9),(10,'한국인의 발에 딱 맞춘 \'1초 스니커즈\'','2023-05-04 09:26:00','2023-06-04 09:26:00',846000,'사람들은 왜 항상 불편하게 신발매듭을 지을까?','안녕하세요, 지키빌의 대표 박성진입니다. 저는 노쇠하신 할아버지의 신발끈을 묶어드리며, 어느날 문득 생각했습니다. \'신발은 편해야 한다면서, 왜 신발을 신는 과정은 불편할까?\' 이런 고민 끝에, 착화감도 좋고 몸이 불편하신 분들도 1초만에 신고 벗을 수 있는 \'1초 스니커즈\'를 개발하게 되었습니다.\n\n지키빌의 \'1초 스니커즈\'는 탄력성 있는 고무 신발끈을 사용하여 편리함을 더했습니다. 신발끈을 풀고 발을 넣고 다시 신발끈을 묶는 번거로운 과정을 생략했습니다. 한국인의 발에 맞춘 착화감을 고려하면서 스니커즈의 곡선미도 잃지 않았습니다. \n\n신발 하나로 가벼워진 외출, \'1초 스니커즈\'로 누려보세요.','https://happybean-phinf.pstatic.net/20230503_297/1683073072144DOlgW_JPEG/%25A4%25E1%25AA%25E1%25BC%25E2%25B2%25E12_%25B0%25E2.jpg',10),(11,'부드러운 식감에 반하는 프리미엄 구움과자','2023-05-04 09:26:00','2023-06-04 09:26:00',8306500,'좋은 재료로 행복을 굽는 동네 과자점','용인 수지 동천동의 소문난 디저트 맛집 \'쿠키무이\'가 스모어, 르뱅, 마들렌, 휘낭시에로 구성된 구움과자 세트를 선보입니다. 기계를 이용한 대량생산이 아닌 손반죽으로 직접 만드는 공정을 통해, 정성이 가득 담긴 수제 디저트를 전하고 있는데요. 예쁜 비주얼을 뽐내며 눈에도 즐겁고, 천연 재료로 만들어 몸에도 좋은 구움과자 8종을 소개해 드릴게요.','https://happybean-phinf.pstatic.net/20230424_118/1682329662521jjpoE_JPEG/0.%25A5%25E1%25B7%25E1%25A6%25E1%25B5%25E1-1.jpg',11),(12,'이웃과 함께 나누고 싶은 맛있는 국대수박','2023-05-04 09:26:00','2023-06-04 09:26:00',9318000,'맛있는 수박 실패 없이 고르는 방법!','\'커다란 수박 하나 잘익었나 통통통\' 이제 두드리지 않으셔도 됩니다. 실패 없는 수박, 국대 수박을 추천해드립니다.\n같은 수박이라도 재배시기와 날씨, 환경에 따라서 품질이 달라지는데요. 충북 청주는 남부지방과 달리 일조량과 강수량이 적당하고, 온도가 높은 기후 조건을 갖추고 있기 때문에 수박 재배에 적합한 환경입니다. ‘품질이 경쟁력‘이라는 신념을 가지고 지속적인 품질관리와 연구개발을 통해 높은 수준의 제품을 제공할 것을 약속드립니다. 최고 중에 최고만 선별하여 맛있는 수박으로 보내드릴 자신이 있습니다.','https://happybean-phinf.pstatic.net/20230419_255/16818694191373XrNA_JPEG/20220513_090609_%25A9%25E1%25A8%25E1.jpg',13),(13,'지리산 흑돼지와 제철 생고사리의 환상 조합','2023-05-04 09:26:00','2023-06-04 09:26:00',6536500,'제철 고사리와 지리산 흑돼지의 환상 조합','\'고사리도 제철\'이라는 말을 아시나요? 뭐든 알맞은 시기를 놓치지 말아야 한다는 뜻을 담고 있는데요. 지금 제철을 맞은 고사리는 정말 부드럽고 쫄깃쫄깃하답니다. 산에서 나는 소고기라는 별명이 있을 만큼 단백질과 식이섬유 등 영양도 풍부해요. 고사리하면 흔히 갈색의 건고사리를 떠올리지만 싱싱한 생고사리는 초록빛이에요. 생고사리는 돼지고기와 찰떡궁합을 자랑합니다. 직접 수확한 생고사리와 지리산에서 키운 흑돼지 고기를 함께 구성했어요. 고소한 오겹살과 담백한 목살 그리고 신선한 생고사리의 환상적인 조합을 산지 직송으로 만끽해 보세요! ','https://happybean-phinf.pstatic.net/20230419_224/1681889399277UOCcB_JPEG/%25D7%25BC123213.jpg',14),(14,'들깨 생크림이 듬뿍! 글루텐프리 깨스테라','2023-05-04 09:26:00','2023-06-04 09:26:00',4356000,'참기름을 만들다 카스테라를 굽게 된 사연?','깨로 만든 카스테라 \'깨스테라\'는 작은 시골 마을인 전북 남원 운봉읍에서 시작되었습니다. 이곳은 어르신들이 많이 사는 곳으로, 당뇨와 고혈압을 앓고 계신 분들이 많았습니다. 동네 어르신들이 건강 걱정 없이 드실 수 있는 간식이 있었으면 했어요. 그래서 밀가루와 설탕을 넣지 않은 건강한 깨스테라가 탄생하게 되었답니다! 글루텐프리 디저트로 어르신은 물론 식단 관리 중인 다이어터, 안전한 음식 섭취가 중요한 어린이들까지 부담 없이 즐길 수 있어요. ','https://happybean-phinf.pstatic.net/20230417_110/1681706729493TGzxK_JPEG/0.%25A6%25E1%25B5%25E1-1.jpg',15),(15,'정직함으로 만든 우리밀 쿠키 선물세트','2023-05-04 09:26:00','2023-06-04 09:26:00',2365000,'장애인을 고용하기 위해 쿠키를 만듭니다','“쿠키를 만들기 위해 장애인을 고용하는 것이 아니라, 장애인을 고용하기 위해 쿠키를 만듭니다.”\n오전 9시, 이런 글귀가 새겨진 쿠키 공장 입구로 위생마스크와 모자, 복장을 갖춘 근로장애인 분들이 하나둘 모입니다. 한 직원이 쿠키 반죽을 조금씩 떼어내 무게를 확인하면, 다른 직원이 덩어리를 동그랗게 빚습니다. 맛있게 구워진 쿠키를 무게저울에 맞춰 포장 비닐에 넣으면, 압축기로 비닐을 봉합하는 것도 모두 직원들의 일입니다. 이렇게 40여 명의 중증 지적·자폐성 장애인 직원들의 노력이 있기에 하나의 쿠키가 탄생할 수 있습니다.','https://happybean-phinf.pstatic.net/20230407_290/1680853957037Ii4zw_JPEG/%25A5%25E1%25B7%25E1%25A6%25E1%25B5%25E1_%25A1%25E1%25A9%25E1.jpg',16),(16,'\'가비지타임\' 단행본 1-5권과 굿즈','2023-05-04 09:26:00','2023-06-04 09:26:00',884149800,'마침내 단행본으로 만나는 <가비지타임>','안녕하세요. 네이버웹툰에서 <가비지타임>을 연재 중인 2사장입니다. 첫 작품 연재 4년 만에 드디어 첫 번째 펀딩으로 인사드리게 되었습니다. 단행본이 나온다는 것은 작가로서 항상 바라왔던 일이고, 독자님들도 원하던 것이기에 정말 행복합니다!','https://happybean-phinf.pstatic.net/20230417_132/1681698498744VVUSE_JPEG/%25D7%25BC111.jpg',17),(17,'달콤하고 고소한 속초 대표 디저트 3선','2023-05-04 09:26:00','2023-06-04 09:26:00',10467000,'설악의 기운을 담은 달콤바삭 속초 디저트','활짝 핀 꽃과 함께 본격적인 봄나들이 시즌이 돌아왔습니다. 국내에서 세번째로 높은 명산, 설악산에도 상큼한 봄이 찾아왔는데요. 추운 겨울이 지나가고 잔잔한 봄바람이 피부에 스치는 요즘, 꽃내음 묻어나는 설악의 기운을 쿠키에 담아내는 곳이 있습니다. 바로 마므레상점입니다.','https://happybean-phinf.pstatic.net/20230412_171/1681228779078LySaS_JPEG/%25A5%25E1%25B7%25E1%25A6%25E1%25B5%25E1_%25A1%25E1%25B5%25E1__1_%25A9%25E1%25A8%25E1.jpg',18),(18,'땅의 시간을 지켜 익힌 육보 딸기와 딸기청','2023-05-04 09:26:00','2023-06-04 09:26:00',6492700,'검붉은 색의 단단함, 새콤달콤한 육보 딸기','요즘 시중에서 만나는 딸기의 대부분은 설향이라는 품종입니다. 향이 좋고 당도가 높은 품종이지만 새콤한 맛이 적습니다. 반면 육보는 새콤달콤한 맛이 매력입니다. 입안에서 풍부하고 다채로운 맛을 냅니다. 과육이 단단해 식감이 참 좋습니다. \n권두보 농부의 딸기는 검붉은 느낌입니다.눈으로 봐도 단단함이 느껴질 정도로, 조직이 치밀해서 식감이 정말 좋습니다. ‘베어먹다’라는 느낌이 들게 하는 딸기, 육보를 꼭 한 번 맛보셨으면 좋겠습니다. ','https://happybean-phinf.pstatic.net/20230503_219/1683072903337qlmYF_JPEG/_sum_2.jpg',19),(19,'간편하게 즐기는 집밥, 가정식 도시락 12종','2023-05-04 09:26:00','2023-06-04 09:26:00',8798000,'정신없는 일상 속 간편하게 즐기는 든든한 한 끼','바쁘게 스쳐가는 하루하루에 제대로 끼니를 챙기는 일은 어렵게만 느껴집니다. 간편하게 건강한 한 끼를 드시고 싶은 분들을 위해 준비했습니다. 프리미엄 냉동 도시락 \'넉넉소반\'은 엄마의 마음으로 정성껏 잘 차린 집밥입니다. 엄선한 좋은 재료로 영양과 맛을 모두 잡은 도시락을 지금 바로 만나 보세요!','https://happybean-phinf.pstatic.net/20230413_36/16813730790452zekz_JPEG/%25D7%25BC13.jpg',20);
/*!40000 ALTER TABLE `funding_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giver_tb`
--

DROP TABLE IF EXISTS `giver_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giver_tb` (
  `giver_id` int NOT NULL AUTO_INCREMENT,
  `giving_page_id` int NOT NULL,
  `user_id` int NOT NULL,
  `giving_total` int NOT NULL,
  PRIMARY KEY (`giver_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giver_tb`
--

LOCK TABLES `giver_tb` WRITE;
/*!40000 ALTER TABLE `giver_tb` DISABLE KEYS */;
/*!40000 ALTER TABLE `giver_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giving_category_tb`
--

DROP TABLE IF EXISTS `giving_category_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giving_category_tb` (
  `giving_category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(45) NOT NULL,
  PRIMARY KEY (`giving_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giving_category_tb`
--

LOCK TABLES `giving_category_tb` WRITE;
/*!40000 ALTER TABLE `giving_category_tb` DISABLE KEYS */;
INSERT INTO `giving_category_tb` VALUES (1,'아동'),(2,'노인'),(3,'장애인'),(4,'다문화'),(5,'환경');
/*!40000 ALTER TABLE `giving_category_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giving_page_sub_img_tb`
--

DROP TABLE IF EXISTS `giving_page_sub_img_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giving_page_sub_img_tb` (
  `gpsi_id` int NOT NULL AUTO_INCREMENT,
  `giving_page_id` int NOT NULL,
  `img_url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`gpsi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giving_page_sub_img_tb`
--

LOCK TABLES `giving_page_sub_img_tb` WRITE;
/*!40000 ALTER TABLE `giving_page_sub_img_tb` DISABLE KEYS */;
/*!40000 ALTER TABLE `giving_page_sub_img_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giving_page_tb`
--

DROP TABLE IF EXISTS `giving_page_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giving_page_tb` (
  `giving_page_id` int NOT NULL AUTO_INCREMENT,
  `giving_name` varchar(45) NOT NULL,
  `register_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `goal_total` int NOT NULL,
  `story_title` varchar(999) NOT NULL,
  `story_content` text NOT NULL,
  `center_id` varchar(45) NOT NULL,
  `main_img_url` varchar(200) NOT NULL,
  PRIMARY KEY (`giving_page_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giving_page_tb`
--

LOCK TABLES `giving_page_tb` WRITE;
/*!40000 ALTER TABLE `giving_page_tb` DISABLE KEYS */;
INSERT INTO `giving_page_tb` VALUES (1,'하늘나라에도 어린이날이 있을까요?','2023-05-04 12:30:54','2023-06-04 12:30:54',7000000,'5월 가정의 달이면 점점 더 커지는 남편의 빈 자리','2019년 봄, 어린이날을 열흘 앞두고 정진이 씨의 남편이 쓰러졌습니다. 식사를 마치고 초등학생인 아들과 한창 이야기 중이던 남편의 몸이 돌연 굳어지더니 이내 의식을 잃었습니다. 급히 병원으로 이송 되었지만, 의료진은 \'뇌사\'가 추정된다며 마음을 준비를 하라는 이야기를 건넸습니다. \"남편이 평소 원하던 일이었어요. 정말 마음이 고운 사람이었거든요.\" 정진이 씨는 남편과의 고통스러운 이별 앞에서도 장기기증을 선택했고, 그 고귀한 결정으로 5명의 환자가 두 번째 삶의 기회를 얻었습니다. 사별 후, 아파할 겨를도 없이 생활 전선에 뛰어들어 어린 아이들을 홀로 키운 정진이 씨는 남편이 떠난 5월이 되면 마음 한구석에서 숨겨 놓았던 슬픔이 솟구칩니다.','1','https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720'),(2,'5월 5일 어린이날! 오늘만큼은 우리가 주인공이예요!','2023-05-04 12:30:54','2023-06-04 12:30:54',1980000,'어린이날, 생일만큼은 아이들이 주인공입니다.','아이들이 매년 꼭 저에게 하는 질문이 두가지가 있습니다.첫째는 \"선생님 저 내일 생일이예요\" 이고 두번째는 \"어린이날에 뭐해요?\"입니다. 그날 만큼은 센터에 있는 아이들이 주인공이기에 아이들은 그 날을 손꼽아 기대하며 특별함이 있기를 간절히 원해합니다. 뭔가 잘해서가 아니라 그냥 예쁜 어린이라는 이유 하나만으로 축하받고 축하하는 날이 어린이날입니다.그날만큼은 아이들이 주인공이여야 하는데.. 형편이 넉넉치 못한 아이들은 그날에 주인공이기보다는 혼자 있는 경우가 많이 있습니다. 단순히 학교를 하루 쉬는 날이 아니라, 너무 소중한 우리 아이들이 주인공이라는 이야기를 해주기 위해서 작고 소소한 행사를 해주고 싶습니다.','2','https://happybean-phinf.pstatic.net/20230411_297/16812131464221Xxq8_JPEG/P1210553.JPG?type=w720'),(3,'5월에는 어버이날이 있어 행복합니다.','2023-05-04 12:30:54','2023-06-04 12:30:54',7020000,' 부모 생각. 처 자식 생각, 고향 생각나는 잔인한 달','종로구 창신동 쪽방촌 건물에 1~2평 남짓 방을 쪼개 사는 200여 명의 쪽방주민들에게 5월은 잔인합니다.  전해지는 가족들의 소식 없이 기약없는 외로움 뿐인 쪽방주민들. 어버이날은 부모 생각, 처 자식 생각, 고향 생각이 나는 오히려 슬픈 날 이라며 이런 날이 없는 게 쪽방주민에겐 더 좋다 합니다. 맘 편히 쉴 곳도, 마음을 기댈 가정도 없는 쪽방촌 주민들에게 가정의 달은 여전한 걱정의 달일 뿐입니다. ','3','https://happybean-phinf.pstatic.net/20230411_3/1681194573332UBhjw_JPEG/후원품전달jpg?type=w720'),(4,'어르신들에게 고운모습을 선물하고 싶습니다.','2023-05-04 12:30:54','2023-06-04 12:30:54',3000000,'내가 언제 파마하러 가겠어? 대충 그냥 사는 거지',' 시골 어르신들은 평생 자식을 위해 희생하셨습니다. 스스로를 꾸미는 것보다 지금도 농사일, 바다일을 놓지 못 하고 계십니다. 파마하는 돈이 아까워서 자식을 만나러 도시를 가거나, 가족 행사가 있을 때만 파마를 하러 가시는 분들이 많습니다. 게다가 시골이라 마을버스도 하루에 2~3번 밖에 오지 않아 시간을 무리해서 내기가 여간 힘든게 아닙니다.어르신들은 아직까지 스스로 가꾸기 보다 투쟁하듯 살아가는 것이 일상입니다.','4','https://happybean-phinf.pstatic.net/20230410_105/1681113715175rHiyz_JPEG/대문사진jpg?type=w720'),(5,'아이들의 웃음을 실어 나르는 센터 승합차','2023-05-04 12:30:54','2023-06-04 12:30:54',3800000,'웃음을 실어 나르는 센터차','유난히 추웠던 겨울이 지나고 따뜻한 봄 햇살이 내리고 희망 가득한 새 학교와 새 학년 들떠있는 3월, 센터 차량은 다시금 학교와 센터와 가정에 수없이 드나듭니다. 센터 차를 타면 \'선생님, 안녕하세요!\'라고 하며 힘차게 인사하는 아이들... 매일 보는 선생님과 친구들인데도 마냥 반갑게 맞이합니다. 어떤 아이들은 좋은 자리를 친구에게 양보하고 학교에서 있었던 일들, 이 얘기, 저 얘기 웃음꽃을 피우다 보면 어느새 센터에 도착합니다.','5','https://happybean-phinf.pstatic.net/20230314_249/1678769527404fLlbz_JPEG/KakaoTalk_20230314_134936228.jpg?type=w720'),(6,'KBS 동행 제406화 응아 씨의 복사꽃 필 무렵','2023-05-04 12:30:54','2023-06-04 12:30:54',20000000,'소문난 똑순이 엄마 응아 씨','작은 시골 동네가 분홍색 복사꽃으로 물들 때면 더욱 바빠지는 사람이 있습니다. 베트남에서 온 똑순이 엄마 응아 씨. 요양보호사 일에, 밭일과 살림. 봄철이면 시장에서 봄나물까지 팔며 열심히 살고 있습니다. 오래전 배운 미용기술로 일주일에 한 번씩 동네 어르신들 미용을 해드리고, 인근에 사는 연로한 시부모님까지 살뜰히 챙기는 엄마. 매일을 바쁘게 살면서도 엄마는 밤보다 일할 수 있는 낮이 더 길었으면 좋겠다고 말합니다. 세 살 터울의 삼 남매를 돌보며 시간에 쫓기는 바쁜 일상에도 항상 웃음을 잃지 않는 긍정 엄마 응아 씨. 보는 사람마다 칭찬할 정도로 열심히 살아왔어도 여전히 아이들에겐 해주지 못한 것도 미안한 것도 많습니다. 이제 고등학생이 된 한근이와 중학생이 된 둘째 한국이. 매달 생활비에 농사 자재값까지 생각하면 몇 십만 원씩 하는 학원을 선뜻 보내줄 수도 없어 속상하기만 한데, 그때마다 오히려 괜찮다 웃는 아이들. 아이들을 생각하면 엄마는 더욱 쉴 여유가 없습니다.','7','https://happybean-phinf.pstatic.net/20230428_253/1682642686243g35wJ_PNG/편집.png?type=w720'),(7,'발암 물질 때문에 아이를 안아줄 수 없는 아빠 소방관','2023-05-04 12:30:54','2023-06-04 12:30:54',20000000,'퇴근 후 몸에 남은 냄새로 그날의 출동을 짐작하는 가족들','방화복은 일반 세탁기로 세탁할 수 없지만, 기동복과 활동복은 가정에서 세탁이 가능합니다. 간혹 집으로 가져와 세탁을 하기도 하지만 그날의 출동현장이 치열했다면 퇴근 후에 시간을 들여서라도 소방서에서 세탁을 하고 갑니다. 오늘 다녀온 출동현장에서 나도 모르게 묻어 있을지 모를 유해물질과 사고피해자의 혈흔 또는 훼손된 신체 일부가 가족들과 함께 쓰는 세탁기 안에서 뒤섞일까 미안하기도, 걱정되기도 하기 때문입니다. ','8','https://happybean-phinf.pstatic.net/20230425_251/1682386908998ne8PN_JPEG/2차모금함_화재현장jpg?type=w720'),(8,'승준이와 함께 오래오래 살고 싶습니다.','2023-05-04 12:30:54','2023-06-04 12:30:54',9900000,'증손주를 키우는 김은녀(가명) 할머니','김은녀 할머니는 손주가 낳은 증손주 임승준(가명)를 12개월때부터 키우고 있습니다. 승준이 아빠와 엄마는 이혼을 하였고 아빠는 신용불량자가 되어 현재 일을 하고 있지만 경제적 지원이 어렵습니다. 승준이 엄마는 연락이 되지 않고 있습니다.승준이는 5살이지만 또래에 비해 언아 발달이 늦어 최근에야 언어치료를 받기 시작했고, 할머니는 승준이가 언어 발달이 늦은 것이 본인 탓인것만 같아 마음이 아픕니다.경제적인 어려움과 함께 증손주를 키워야 하는 부담감으로 우울증이 점점 심해지는 할머니는 수면제 없이 잠을 이루기 어려운 상황입니다. 가끔씩 몸도 마음도 힘들 때 승준이와 함께 죽을까 하는 극단적인 생각도 하지만 눈에 밟히는 승준이를 보며 하루하루를 버티며 생활하고 있습니다.','9','https://happybean-phinf.pstatic.net/20230421_159/1682068184913yMjIF_JPEG/KakaoTalk_20230421_104033085_02jpg?type=w720'),(9,'MBN 소나무 하늘 아래 단 둘뿐인 노부부 ','2023-05-04 12:30:54','2023-06-04 12:30:54',9900000,'하루도 쉴 날이 없는 아픈 부부의 일상','지어진 지 50년이 된 울산의 작은 집. 부인 김정선(84) 씨와 남편 김종환(89)씨가 살고 있습니다. 종환 씨는 13년 동안 파킨슨병을 앓고 있기에 거동이 많이 불편하신 상태입니다. 작년 3월에 넘어지시는 바람에 허리 협착증도 생겼지만 치료 과정에서 폐렴도 앓게 되어 산소 호흡기를 끼고 생활해야 합니다. 그런 종환 씨 곁을 지키는 사람은 부인 정선 씨. 정선 씨도 10년 전에 받은 무릎관절 수술 후유증과 연세가 많이 드셔서 기력도 없으신 상태이시지만 남편을 정성껏 간호합니다. 정선 씨는 현재 치아도 거의 없으며 제대로 된 식사가 불가능하지만 치료를 받을 경제적 여유도 없기 때문에 참고 생활할 뿐입니다. 간호를 받아야 할 정선 씨는 정작 본인 몸을 챙기기 보다 남편 곁을 떠나지 않고 매일 그의 대소변도 받으면서 힘든 티를 내지 않습니다. ','10','https://happybean-phinf.pstatic.net/20230426_116/1682499506169cWKVF_JPEG/최종_포스터_중구_김정선_님jpg?type=w720'),(10,'희귀병 윤진이가 건강하게 자랄 수 있도록 도와주세요.','2023-05-04 12:30:54','2023-06-04 12:30:54',9900000,'윤진이가 앓고 있는 희귀질환, 묘성증후군','태어날 때 청색증(호흡곤란)으로 인큐베이터에서 생활한 윤진이(가명, 7세). 이후 정밀검사를 통해 뇌병변 장애 판정을 받고 *묘성증후군이라는 희귀병 진단을 받게 되었습니다. 희귀병 특성상 다양한 증상이 나타나 정기검진과 재활치료를 받고 있습니다. 사시 수술을 했지만 경과에 따라 추가 수술을 받아야 하며 심장에 구멍이 나있어 문제가 생길 시 수술을 진행해야 합니다. 턱이 맞지 않고 발성도 안정적이지 않아 발음이 부정확한 윤진이. 언어는 다른 사람의 말을 겨우 따라 하는 정도입니다.*묘성증후군 : 5번 염색체 단완의 부분 결실로 인한 희귀병. 특징적인 고양이 울음소리와 안면 기형, 근긴장 저하, 심장기형, 발달지연, 심한 정신 지체 등의 증상을 나타냄.','11','https://happybean-phinf.pstatic.net/20230412_195/1681278387269Qm4XC_JPEG/1.jpg?type=w720'),(11,'화재의 위기를 견뎌낸 거주인들의 여름 물놀이 선물.','2023-05-04 12:30:54','2023-06-04 12:30:54',3273000,'화재의 위기를 견뎌낸 거주인들의 여름 물놀이 선물.','따뜻한 햇볕과 산속 꽃 향기가 차오르던 봄이 오며 형광 색색으로 물들었던 장태산에 큰 불이 찾아 왔습니다. 큰 불씨는 순식간으로 산길을 타며 퍼져 나가고 매서운 화재 연기와 거주인들을 대피 시키는 선생님들의 다급한 목소리, 소방차 사이렌 소리로 가득 차고 말았습니다. 각 거주시설 선생님들의 빠른 대처 방법으로 인해 모든 시설 거주인들 모두 인명 피해 없이 최종 집결 장소로 모일 수 있었지만 갑작스러운 대피 상황으로 인해 대피 장소 모두 아비규환이었으며 스스로 거동 할 수 없는 거주인, 휠체어로 이동해야 하는 거주인 등 각 시설의 거주인 모두가 1,2,3층으로 나누어 뒤 섞이며 잠을 청하거나 영양적 음식 섭취의 어려움은 물론이고 기본적으로 필요한 케어를 하기에 모든 장소가 협소하거나 부족하여 하루 빨리 모든 불씨가 잦아들기 만을 바랄 뿐이었습니다.','12','https://happybean-phinf.pstatic.net/20230410_266/1681108382718695L3_JPEG/KakaoTalk_20230407_153839130jpg?type=w720'),(12,'빈약한 한 끼라도 걱정없이 해결할 수 있도록 돕고싶어요','2023-05-04 12:30:54','2023-06-04 12:30:54',9150000,'암과 홀로 긴 싸움을 하면서 약해진 체력 때문에 방사선 치료를 제때에 할 수 없습니다.','김소망(1960년생, 남, 가명)씨는 배우자도 자녀도 없이 쪽방에서 홀로 생활하고 있는데, 2016년 대장암 3기 판정을 받아 수술한 수술력이 있습니다. 이로 인해 평상시에 건강관리에 매우 신경을 쓰면서 노력했지만 지난해에 대장암이 재발됐고 다른 장기에까지 전이가 되어 투병생활을 하고 있습니다. 현재까지 10차례의 방사선 치료로 체력이 많이 떨어졌으며, 입맛도 없고, 식사를 챙겨주는 사람도 없어 제대로 된 식사를 하지 못해 기력이 너무 쇠약해진 상태에 있습니다. 너무 허약해진 김소망씨, 집안에는 화장실이 없어 공동화장실을 사용하고 있는데, 화장실까지 갈 힘이 없어 종종 집안에서 실수하는 경우까지 생기고 있습니다. 이러한 상황에서 11번째 방사선 치료를 받아야 하는데 허약한 체력 때문에 받지 못하고 있습니다. 김소망씨가 제때에 방사선 치료를 받을 수 있도록 건강 회복을 위한 영양보충식과 죽 지원을 해 드리고 싶습니다.','13','https://happybean-phinf.pstatic.net/20230418_123/1681782674575hhEbM_JPEG/꾸미기KakaoTalk_20210708_172144136_01jpg?type=w720'),(13,'정리정돈으로 깨끗하고 깔끔한 센터를 만들고 싶어요~','2023-05-04 12:30:54','2023-06-04 12:30:54',2000000,'센터의 나이만큼 센터에 있는 가구들도 나이를 먹어갑니다~~','2004년 공부방으로 시작한 저희 지역아동센터는 그동안 저희 센터를 다녀간 아이들이 수백명은 될 것입니다. 센터의 문을 연 지 벌써 20년이 되어 갑니다. 얼마전에는 대학생 커플이 저희 센터를 방문한 적이 있는데 그 중 여학생이 초등학생 때 저희 센터를 다녔었다고 합니다. 여기저기 센터를 둘러보면서 변한 게 별로 없다며 추억을 떠올리는 모습을 보았습니다. 성인이 되어 지역아동센터를 찾아주는 사람이 있어 고맙기도 하고 이 일이 보람되기도 하였습니다. 그런데 센터가 나이를 먹어갈수록 센터에 있는 가구들도 낡고 고장이 납니다. ','14','https://happybean-phinf.pstatic.net/20230420_101/1681959487968bR99a_JPEG/KakaoTalk_20230420_112909475.jpg?type=w720'),(14,'사랑과 희망을 전하는 아침무료급식소를 후원해주세요','2023-05-04 12:30:54','2023-06-04 12:30:54',9900000,'14년 간 이른 새벽 아침 무료 급식을 운영하고 있습니다.','사랑마루는 2009년 9월, 성남시 태평동에서 시작되어 지금까지 14년 째 아침 무료급식소를 운영하고 있습니다. 일용직 근로자, 노숙인, 취약 계층 등 생계와 생존에 어려움이 있는 분들에게 단, 한 끼의 아침 식사로 하루를 살아갈 희망을 얻도록 돕고 있습니다. 하루 한 끼로 생존과 생활을 이어가고 있는 분들에게 지속적인 한 끼의 식사 나눔을 정성껏 제공해드리기 위해 사랑마루 급식소는 여러분의 절실한 도움이 필요합니다.               최근 물가가 상승하면서 식재료 값이 많이 올라 이른 새벽부터 아침 한 끼를 드시기 위해 이전보다 더 많은 분들이 찾아오는 무료 급식소 운영에 어려움이 많습니다. 하루에 150명 이상의 분들을 위한 식재료비는 30만원이 넘습니다. 한 달에는 700만원 가량의 식재료비가 필요합니다. 하루 한 끼의 위로와 나눔 만으로도 이분들께는 큰 위로와 희망이 될 것입니다. 사랑마루가 지속적인 사랑과 나눔을  전하기 위해 절실한 도움이 필요합니다. ','15','https://happybean-phinf.pstatic.net/20230419_118/1681881432863AJzDr_JPEG/10.jpg?type=w720'),(15,'섬 어르신의 생애 첫 전시회 \'희망으로 꽃피다\'','2023-05-04 12:30:54','2023-06-04 12:30:54',4500000,'오랜만에 소녀로 돌아간 어르신의 웃음소리','오늘은 비대면 미술 수업이 있는 날입니다. 수업이 있는 날이면 어르신들이 삼삼오오 섬마을 경로당으로 모이십니다. 오랜 농사일과 바다일로 굳은살이 가득한 손으로 난생처음 그림을 그려봅니다. 박성심(가명) 어르신은 “평생 내 이름을 잊어버리고 살았어. 늘 누구 엄마, 누구 댁이라고만 불러서 나도 내 이름을 언제 써봤는지... 이렇게 이쁜 색깔로 내 이름 써보니 참 좋네” 하시며 TV 화면의 미술 선생님 수업에 집중하십니다. 삐뚤빼뚤 이쁘지 않은 글씨이지만 참 오랜만에 소녀로 돌아간 어르신의 웃음소리가 경로당을 가득 채웁니다.진도군노인복지관에서는 섬마을 어르신을 위한 비대면 인지 공예와 미술교실 등 정서 지원 프로그램을 진행하고 있습니다. 수업을 진행하며 하나둘씩 완성된 작품으로 어르신께 기억에 남을만한 선물을 드리고자, 섬마을 전시회를 기획하게 되었습니다.','16','https://happybean-phinf.pstatic.net/20230413_12/1681361960141K6nQv_JPEG/1jpg?type=w720'),(16,'끼니를 걱정하는 남성 독거어르신에게 전하는 따뜻한 희망','2023-05-04 12:30:54','2023-06-04 12:30:54',9980000,'생활고로 평생 어려움의 굴레에 끼니를 걱정하는 할아버지',' 반평짜리 고시원에서 연락이 끊긴 가족을 그리워하며 잠자리에 드는 할아버지, 반평생을 함께한 아내가 세상을 떠난 후 슬픈 마음을 겨우 추스리지만 생활고로 하루의 생계를 고민하는 할아버지 등 우리 주변에는 한끼 해결하는 것이 무척 어려운 남성 독거어르신들이 많이 있습니다. 가난이라는 어려움에 젊었을 때는 막노동도 하며 벗어나보려 하였지만 여전히 끼니를 걱정해야 하는 외롭고 고된 삶을 살고 있습니다. 병원비와 높은 월세를 내기 위해 맨밥에 물로 버텨야 하는 날이 많고 평범한 한끼식사가 어려운 남성독거 어르신이 있어 도움을 받을 곳을 찾아보았지만 좀처럼 찾을 수 없어 고민하던 중 간절한 마음으로 해피빈에 사연을 작성하게 되었습니다.','17','https://happybean-phinf.pstatic.net/20230412_10/1681263553107kQg9Q_JPEG/KakaoTalk_20230408_133032480_09.jpg?type=w720'),(17,'치매어르신들에게 건강과 웃음을 선물해주세요!','2023-05-04 12:30:54','2023-06-04 12:30:54',3000000,'하루하루 사라지고 있는 기억...','기억력이 저하되고, 시공간 파악하는 것이 어려워지는 등의 증상으로 치매 판정을 받으신 어르신들은 우리 센터로 오십니다. 치매 어르신들과 대화를 하다 보면 어르신들의 기억은 하루하루 달라지고 있습니다. ‘오늘 무엇을 했었는지, 어떤 음식을 먹었는지,’ 점점 생각이 나지 않습니다. ','18','https://happybean-phinf.pstatic.net/20230411_136/1681174907979trcXO_PNG/MicrosoftTeams-image_(229).png?type=w720'),(18,'KBS 동행 제405화 사랑을 전해줘, 빨간 우체통','2023-05-04 12:30:54','2023-06-04 12:30:54',20000000,'사랑스러운 예은 공주와 딸 바보 동원 씨','만나는 사람마다 소리 높여 인사하고, 지나가는 고양이와 강아지에게도 말을 거는 사랑스러운 열 살 소녀 예은이. 놀거리, 할 거리 부족한 시골 마을에서 예은이의 가장 친한 친구는 아빠 동원 씨입니다. 아빠와 함께 있을 때 가장 행복하다는 예은이. 아빠가 밭에서 일하는 날엔 아빠 뒤를 졸졸 따라다니며 작물에 물을 주고, 아빠가 고단한 날엔 작은 손으로 안마를 해주기도 합니다. 부녀가 이토록 애틋해진 건 2년 전. 동원 씨가 아내와 이혼하면서부터입니다. 아빠는 예은이가 엄마의 빈자리를 느끼지 않게 부단히 노력했지만, 현실은 녹록지 않았습니다. 이혼한 후 남은 것은 생활비와 치료비로 썼던 빚뿐. 동원 씬 자동차 부품을 납품하는 회사에서 험한 일을 하며 시간이 날 때마다 마을 이웃들의 배려로 얻게 된 밭에서 작물도 일굽니다. 뇌경색과 심한 허리 통증으로 병원 신세까지 졌던 동원 씨가 쉴 틈 없이 부지런히 일하는 이유. 하루빨리 빚을 갚고, 보다 나은 환경에서 딸 예은이를 키우기 위해섭니다.','19','https://happybean-phinf.pstatic.net/20230420_161/1681950834579Dg8nk_JPEG/5메인_-_복사본.jpg?type=w720');
/*!40000 ALTER TABLE `giving_page_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reward_tb`
--

DROP TABLE IF EXISTS `reward_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reward_tb` (
  `reward_id` int NOT NULL AUTO_INCREMENT,
  `reward_name` varchar(200) NOT NULL,
  `reward_price` int NOT NULL,
  `funding_id` int NOT NULL,
  PRIMARY KEY (`reward_id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reward_tb`
--

LOCK TABLES `reward_tb` WRITE;
/*!40000 ALTER TABLE `reward_tb` DISABLE KEYS */;
INSERT INTO `reward_tb` VALUES (1,'한우불고기 600g+ 채소 3종 + 사골육수',33000,1),(2,'고추장불고기 600g + 채소 3종',27000,1),(3,'한우불고기 200g + 고추장불고기 200g + 채소 3종*2세트',20000,1),(4,'한우불고기 400g + 고추장불고기 400g + 채소 3종*2세트',40000,1),(5,'한우불고기 600g + 고추장불고기 600g + 채소 3종*2세트 + 사골육수',60000,1),(6,'성인 반팔 티셔츠',43000,2),(7,'아동 반팔티셔츠',33000,2),(8,'여성 트렁크',21000,2),(9,'스크런치(헤어밴드)',5000,2),(10,'GAP인증 대추방울토마토 2kg',14000,3),(11,'GAP인증 대추방울토마토 5kg',35000,3),(12,'통근 토마토즙 110ml*40개',32000,3),(13,'5ml 아로마 에센셜 오일 1종(리프레시, 해피 중 택일) + 화산송이 틴',32900,4),(14,'5ml 아로마 에센셜 오일 1종(캄, 릴랙스 중 택일) + 화산송이 틴',36900,4),(15,'5ml 아로마 에센셜 오일 4종',49000,4),(16,'10ml 아로마 에센셜 오일 4종 + 화산송이 틴',82000,4),(17,'올인원 스프레이 30ml 1개 + 200ml 1개',37900,4),(18,'올인원 스프레이 30ml 3개 + 200ml 3개',99000,4),(19,'유기농 순면 베개 커버 레이어 S 1장',20000,5),(20,'유기농 순면 베개 커버 레이어 L 1장',22400,5),(21,'유기농 순면 잠옷 세트 M',113400,5),(22,'유기농 순면 잠옷 세트 L',119900,5),(23,'꽃 정기구독 (1개월 동안 총 2번)',49800,6),(24,'꽃 정기구독 (3개월 동안 총 6번) + 베이직화병',149000,6),(25,'꽃 정기구독 (6개월 동안 총 12번) + 베이직화병 + 꽃가위',295000,6),(26,'[얼리버드] 설거지비누 1박스(150g 2개입) + 손비누 1개(100g 1개입)',15000,7),(27,'[얼리버드] 설거지비누 2박스  + 손비누 2개 + 핸드타월 1장',37000,7),(28,'설거지비누 1박스(150g 2개입) ',10500,7),(29,'손비누 2개(100g 2개입)',16000,7),(30,'설거지비누 1박스(150g 2개입)  + 손비누 1개(100g 1개입)',18500,7),(31,'설거지비누 1박스(150g 2개입) + 손비누 1개 + 핸드타월 1개',23500,7),(32,'설거지비누 1박스(150g 2개입) + 손비누 1개 + 핸드타월 1개 + 팟브러시 1개',30500,7),(33,'설거지비누 2박스(150g 4개입) ',10500,7),(34,'샨 카욱쉐 밀키트 2개',20900,8),(35,'샨 카욱쉐 밀키트 2개 + 미얀마 밀크티 2캔',24900,8),(36,'샨 카욱쉐 밀키트 4개',37900,8),(37,'샨 카욱쉐 밀키트 4개 + 미얀마 밀크티 4캔',46900,8),(38,'바테 레드비트 5kg(9~13개)',17500,9),(39,'바테 레드비트 10kg(19~23개)',29000,9),(40,'1초 스니커즈 블랙*1켤레',63000,10),(41,'1초 스니커즈 화이트*1켤레',63000,10),(42,'1초 스니커즈 블랙*1켤레 + 화이트*1켤레',120000,10),(43,'스위트 세트(4개입)',14000,11),(44,'티타임 세트(4개입)',14000,11),(45,'선물 세트(16개입)',54000,11),(46,'무릉외갓집 족은꾸러미 1회',25000,12),(47,'족은꾸러미 3개월(연속/격월 선택) + 한라봉착즙주스 1개',74000,12),(48,'족은꾸러미 6개월(연속/격월 선택) + 한라봉착즙주스 2개',148000,12),(49,'족은꾸러미 9개월(연속/격월 선택) + 한라봉착즙주스 3개',222000,12),(50,'족은꾸러미 12개월(연속/격월 선택) + 한라봉착즙주스 4개',296000,12),(51,'국대수박 6~7kg',27000,13),(52,'국대수박 7~8kg',30000,13),(53,'국대수박 8~9kg',33000,13),(54,'고사리 150g 1팩 + 흑돼지 300g (1인 기준)',19900,14),(55,'고사리 150g 2팩 + 흑돼지 800g (2~3인 기준)',38900,14),(56,'고사리 150g 4팩 + 흑돼지 1.6kg (4~5인 기준)',64900,14),(57,'고사리 150g 5팩',27900,14),(58,'건조나물 세트(나물 4종, 총 200g)',33000,14),(59,'생크림 깨스테라 3개입',17000,15),(60,'생크림 깨스테라 5개입',28000,15),(61,'우리밀 쿠키 3종 선물세트',13500,16),(62,'단행본 1~5권+북케이스 (무료 배송)',79000,17),(63,'단행본 1~5권+북케이스+소책자+스포츠타월+엽서+스티커+패키지 박스 (무료 배송)',93200,17),(64,'[선물용]설악버터샌드 1BOX(6개입, 3종*2개입) + 쇼핑백 증정',16000,18),(65,'설악버터샌드 1BOX (6개입, 3종*2개입) ',15000,18),(66,'마음이 가는 쿠키 1BOX(8개입) + 쇼핑백 증정',12000,18),(67,'[온라인 첫 개시]마음이 우-린 밀크티(200ml) ',4500,18),(68,'생딸기잼 400g',12000,19),(69,'생딸기잼 400g*2병',23700,19),(70,'생딸기청 500ml*2병',32500,19),(71,'생딸기청 500ml*4병',61200,19),(72,'육보딸기 1kg (40과 내외)',30900,19),(73,'육보딸기 2kg (80과 내외)',61500,19),(74,'도시락 12종 세트',53000,20);
/*!40000 ALTER TABLE `reward_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_tb`
--

DROP TABLE IF EXISTS `role_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_tb` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(45) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_tb`
--

LOCK TABLES `role_tb` WRITE;
/*!40000 ALTER TABLE `role_tb` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `target_benefit_tb`
--

DROP TABLE IF EXISTS `target_benefit_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `target_benefit_tb` (
  `tb_id` int NOT NULL AUTO_INCREMENT,
  `target` varchar(500) NOT NULL,
  `target_count` int NOT NULL,
  `benefit_effect` varchar(500) NOT NULL,
  `giving_page_id` int NOT NULL,
  PRIMARY KEY (`tb_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `target_benefit_tb`
--

LOCK TABLES `target_benefit_tb` WRITE;
/*!40000 ALTER TABLE `target_benefit_tb` DISABLE KEYS */;
INSERT INTO `target_benefit_tb` VALUES (1,'기타(뇌사장기기증인유가족)',200,'뇌사 장기기증인 유가족 200가정의 정서적 지지 및 회복 지원뇌사 장기기기증인 유가족 200가정의 자긍심 고취유가족의 정서적 회복을 통한 생명나눔의 선순환 구조 마련',1),(2,'취약계층 아동?청소년',21,'21명의아이들에게 어린이날 특식과 간식을 제공할 수 있다.21명의아이들에게 어린이날 선물을 제공할 수 있다.',2),(3,'취약계층 어르신',130,'쪽방어버이주민  130명에게 식사 및 선물전달하여 외로움 고독감 해소',3),(4,'취약계층 어르신',100,'경제적으로 어려운 어르신들께서 비용을 지원 받아 경제적인 지원 제공미용 서비스로 생활만족도가 올라가며 긍정적인 변화가 생김',4),(5,'지역아동센터 이용 아동?청소년',38,'원활한 차량 운행을 할 수 있습니다.아이들이 센터 등하원을 안전하게 할 수 있습니다.차량을 안전하게 관리할 수 있습니다.',5),(6,'아동?청소년',350000,'튀르키예 및 시리아 주민 긴급 생활물품 지원튀르키예 및 시리아 아동 보호 및 교육 지원',6),(7,'취약계층 아동?청소년',3,'아동 가정 생계지원으로 인한 환경 개선아동 지원을 통한 교육환경 개선',7),(8,'기타(소방관)',1200,'화재 진압 후 유해물질과의 접촉 최소화사고 현장에서의 장비, 피부에 보다 빠른 세정 효과소방관의 잠재적 피부 질환 예방소방 장비의 보호',8),(9,'조손가정 어르신',1,'주거개선을 통한 생활안정경제적지원을 통한 정서적 안정',9),(10,'취약계층 어르신',2,'생계비 지원으로 부담을 경감하고 생활 안정을 도모의료비 지원으로 적절한 치료를 통해 건강을 회복주거비 지원으로 열악한 환경을 회복',10),(11,'취약계층 아동?청소년',1,'의료비 지원으로 윤진이의 증상 완화생계비 지원으로 윤진이네 안정적인 생계 유지',11),(12,'시설거주 장애인',35,'아픈 기억은 지워버리고 긍정적인 힘 키우기 물놀이를 통해 즐거움 얻기 ',12),(13,'쪽방촌 주민',200,'투병 중인 분들 중 5명에게  치료를  돕기 위해  죽과 영양보충식 지원쪽방 주민 200명에게 밑반찬 지원을 통해 체력저하 및 일상회복 효과 기',13),(14,'취약계층 아동?청소년',29,'아이들에게 깨끗하고 깔끔한 공간 제공아이들의 생활습관 개선',14),(15,'노숙인',150,'노숙인 등 취약계층에게 건강한 아침 무료급식 제공아침 무료 급식소 운영 지원을 통한 무료 급식 지속 가능 ',15),(16,'취약계층 어르신',100,'전시회를 통한 섬 어르신의 정서 함양 및 자긍심 고취섬 지역 새로운 문화 형성 및 컨텐츠 발굴',16),(17,'독거 어르신',40,'저소득 남성 독거 어르신 40명에게 주 2회 밑반찬 및 안부제공거동이 가능한 남성 독거어르신 7명 대상 요리교실 제공안부와 함께 밑반찬 지원으로 남성독거 어르신의 고립감 경감 및 정서적지지저소득 남성독거어르신의 영양불균형 문제 해결',17),(18,'치매 어르신',17,'치매 어르신 인지기능, 신체기능 향상사회적응 프로그램을 통한 치매 어르신의 원활한 사회적응 증진',18),(19,'한부모가정 아동?청소년',1,'아동 가정 생계지원으로 인한 환경 개선아동 지원을 통한 교육환경 개선',19);
/*!40000 ALTER TABLE `target_benefit_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_tb`
--

DROP TABLE IF EXISTS `user_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_tb` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `name` varchar(45) NOT NULL,
  `birth_day` date NOT NULL,
  `gender` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tb`
--

LOCK TABLES `user_tb` WRITE;
/*!40000 ALTER TABLE `user_tb` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'unicef'
--

--
-- Dumping routines for database 'unicef'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-08 16:32:35

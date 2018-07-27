/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : giao_dich

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2018-07-26 17:23:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for city_cap_1
-- ----------------------------
DROP TABLE IF EXISTS `city_cap_1`;
CREATE TABLE `city_cap_1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of city_cap_1
-- ----------------------------
INSERT INTO `city_cap_1` VALUES ('1', 'Đà Nẵng');
INSERT INTO `city_cap_1` VALUES ('2', 'Quảng Nam');

-- ----------------------------
-- Table structure for city_cap_2
-- ----------------------------
DROP TABLE IF EXISTS `city_cap_2`;
CREATE TABLE `city_cap_2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `city_cap_1_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of city_cap_2
-- ----------------------------
INSERT INTO `city_cap_2` VALUES ('1', 'Ngũ Hành Sơn', '1');
INSERT INTO `city_cap_2` VALUES ('2', 'Thanh Khê', '1');
INSERT INTO `city_cap_2` VALUES ('3', 'Hải Châu', '1');
INSERT INTO `city_cap_2` VALUES ('4', 'Sơn Trà', '1');
INSERT INTO `city_cap_2` VALUES ('5', 'Liên Chiểu', '1');
INSERT INTO `city_cap_2` VALUES ('6', 'Cẩm Lệ', '1');
INSERT INTO `city_cap_2` VALUES ('7', 'Huyện Hoà Vang', '1');
INSERT INTO `city_cap_2` VALUES ('8', 'Nam Hội An', '2');
INSERT INTO `city_cap_2` VALUES ('9', 'Bắc Hội An', '2');
INSERT INTO `city_cap_2` VALUES ('10', 'Tam Kỳ', '2');
INSERT INTO `city_cap_2` VALUES ('11', 'Núi Thành', '2');

-- ----------------------------
-- Table structure for city_cap_3
-- ----------------------------
DROP TABLE IF EXISTS `city_cap_3`;
CREATE TABLE `city_cap_3` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `city_cap_2_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of city_cap_3
-- ----------------------------

-- ----------------------------
-- Table structure for dich_vu_hau_mai
-- ----------------------------
DROP TABLE IF EXISTS `dich_vu_hau_mai`;
CREATE TABLE `dich_vu_hau_mai` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` tinytext,
  `photo` varchar(255) DEFAULT NULL,
  `tu_ngay` timestamp NULL DEFAULT NULL,
  `den_ngay` timestamp NULL DEFAULT NULL,
  `city_cap_1` int(11) DEFAULT NULL,
  `city_cap_2` int(11) DEFAULT NULL,
  `is_to_roi` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dich_vu_hau_mai
-- ----------------------------
INSERT INTO `dich_vu_hau_mai` VALUES ('1', 'sdfsd', 'sdfsdfsd', '6281fdc32e0dcdb3ffafd5cfcfe6b645.jpg', null, null, '1', '1', '1');
INSERT INTO `dich_vu_hau_mai` VALUES ('2', 'sdfsdfs', 'sfsdfsd', '9149a5353d9704bde70a1b98afb583d4.jpg', '2018-07-17 14:21:29', '2018-07-27 14:21:33', '1', '2', '0');

-- ----------------------------
-- Table structure for du_an_cap_1
-- ----------------------------
DROP TABLE IF EXISTS `du_an_cap_1`;
CREATE TABLE `du_an_cap_1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_cap_1
-- ----------------------------
INSERT INTO `du_an_cap_1` VALUES ('1', 'Dân dụng', null, null, '0');
INSERT INTO `du_an_cap_1` VALUES ('2', 'Hạ tầng', null, null, '0');
INSERT INTO `du_an_cap_1` VALUES ('3', 'Cầu đường', null, null, '0');
INSERT INTO `du_an_cap_1` VALUES ('4', 'Hoàn thiện nội ngoại thất', null, null, '0');
INSERT INTO `du_an_cap_1` VALUES ('5', 'Kiến trúc', null, null, '0');
INSERT INTO `du_an_cap_1` VALUES ('6', 'Điện nước', null, null, '0');
INSERT INTO `du_an_cap_1` VALUES ('7', 'Sửa chữa', null, null, '0');
INSERT INTO `du_an_cap_1` VALUES ('8', 'Cây xanh', null, null, '0');
INSERT INTO `du_an_cap_1` VALUES ('9', 'Dịch vụ vệ sinh', null, null, '0');

-- ----------------------------
-- Table structure for du_an_cap_2
-- ----------------------------
DROP TABLE IF EXISTS `du_an_cap_2`;
CREATE TABLE `du_an_cap_2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `du_an_cap_1_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_cap_2
-- ----------------------------
INSERT INTO `du_an_cap_2` VALUES ('1', 'Nhà dân', '1', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('2', 'Biệt thự', '1', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('3', 'Cao tầng', '1', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('4', 'Nhà tiền chế', '1', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('5', 'Nhà dịch vụ', '1', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('6', 'Nhà dự án', '1', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('7', 'khac ...', '1', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('8', 'Thiết kế', '2', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('9', 'Thiết kế', '1', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('10', 'Giao thông', '2', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('11', 'Thoát nước', '2', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('12', 'Hệ thống điện', '2', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('13', 'Cáp quang', '2', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('14', 'San lấp mặt bằng', '2', null, null, '0');

-- ----------------------------
-- Table structure for du_an_cap_3
-- ----------------------------
DROP TABLE IF EXISTS `du_an_cap_3`;
CREATE TABLE `du_an_cap_3` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `du_an_cap_2_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_cap_3
-- ----------------------------
INSERT INTO `du_an_cap_3` VALUES ('1', 'Thiết kế', '1', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('2', 'Phần thô', '1', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('3', 'Phần hoàn thiện', '1', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('4', 'Sân vườn', '1', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('5', 'Nhà bếp', '1', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('6', 'Thiết bị gia dụng', '1', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('7', 'Thiết kế', '2', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('8', 'Phần thô', '2', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('9', 'Phần hoàn thiện', '2', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('10', 'Sân vườn', '2', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('11', 'Nhà bếp', '2', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('12', 'Thiết bị gia dụng', '2', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('13', 'Thiết kế', '3', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('14', 'Phần thô', '3', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('15', 'Phần hoàn thiện', '3', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('16', 'Sân vườn', '3', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('17', 'Nhà bếp', '3', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('18', 'Thiết bị gia dụng', '3', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('19', 'Thiết kế', '4', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('20', 'Phần thô', '4', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('21', 'Phần hoàn thiện', '4', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('22', 'Sân vườn', '4', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('23', 'Nhà bếp', '4', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('24', 'Thiết bị gia dụng', '4', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('25', 'Thiết kế', '5', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('26', 'Phần thô', '5', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('27', 'Phần hoàn thiện', '5', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('28', 'Sân vườn', '5', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('29', 'Nhà bếp', '5', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('30', 'Thiết bị phục vụ', '5', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('31', 'Khác ...', '5', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('32', 'khác ...', '4', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('33', 'khác ...', '3', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('34', 'khác ...', '1', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('35', 'Bó vỉa', '10', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('36', 'Vỉa hè', '10', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('37', 'Hố trồng cây', '10', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('38', 'Đường nhựa', '10', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('39', 'Đường bê tông', '10', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('40', 'Dải phân cách', '10', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('41', 'Sơn đường', '10', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('42', 'Mương thoát nước', '11', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('43', 'Hố ga', '11', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('44', 'Cửa thu nước', '11', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('45', 'Kè taluy', '11', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('46', 'Mương cáp điện', '12', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('47', 'Kéo dây điện', '12', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('48', 'Móng trụ điện', '12', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('49', 'Hố ga điện', '12', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('50', 'Trụ điện', '12', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('51', 'Mương cáp', '13', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('52', 'Hố ga', '13', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('53', 'Khoan đường', '13', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('54', 'Kéo cáp', '13', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('55', 'Hàn cáp', '13', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('56', 'Vật tư ống', '13', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('57', 'Hạ tầng', '14', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('58', 'Dân dụng', '14', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('59', 'Tầng hầm', '14', null, null, '0');

-- ----------------------------
-- Table structure for du_an_cap_4
-- ----------------------------
DROP TABLE IF EXISTS `du_an_cap_4`;
CREATE TABLE `du_an_cap_4` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `du_an_cap_3_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_cap_4
-- ----------------------------

-- ----------------------------
-- Table structure for du_an_da_chon
-- ----------------------------
DROP TABLE IF EXISTS `du_an_da_chon`;
CREATE TABLE `du_an_da_chon` (
  `tin_du_an_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`tin_du_an_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_da_chon
-- ----------------------------
INSERT INTO `du_an_da_chon` VALUES ('1', '4', '2018-07-24 10:01:49');

-- ----------------------------
-- Table structure for nha_thau_thi_cong_cap_1
-- ----------------------------
DROP TABLE IF EXISTS `nha_thau_thi_cong_cap_1`;
CREATE TABLE `nha_thau_thi_cong_cap_1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nha_thau_thi_cong_cap_1
-- ----------------------------
INSERT INTO `nha_thau_thi_cong_cap_1` VALUES ('1', 'Nhân công lao động', null, null, '0');
INSERT INTO `nha_thau_thi_cong_cap_1` VALUES ('2', 'Thiết bị dụng cụ', null, null, '0');
INSERT INTO `nha_thau_thi_cong_cap_1` VALUES ('3', 'Máy móc cơ giới', null, null, '0');
INSERT INTO `nha_thau_thi_cong_cap_1` VALUES ('4', 'Vật tư', null, null, '0');

-- ----------------------------
-- Table structure for nha_thau_thi_cong_cap_2
-- ----------------------------
DROP TABLE IF EXISTS `nha_thau_thi_cong_cap_2`;
CREATE TABLE `nha_thau_thi_cong_cap_2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `nha_thau_thi_cong_cap_1_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nha_thau_thi_cong_cap_2
-- ----------------------------

-- ----------------------------
-- Table structure for nha_thau_thi_cong_cap_3
-- ----------------------------
DROP TABLE IF EXISTS `nha_thau_thi_cong_cap_3`;
CREATE TABLE `nha_thau_thi_cong_cap_3` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `nha_thau_thi_cong_cap_2_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nha_thau_thi_cong_cap_3
-- ----------------------------

-- ----------------------------
-- Table structure for nha_thau_thi_cong_cap_4
-- ----------------------------
DROP TABLE IF EXISTS `nha_thau_thi_cong_cap_4`;
CREATE TABLE `nha_thau_thi_cong_cap_4` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `nha_thau_thi_cong_cap_3_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nha_thau_thi_cong_cap_4
-- ----------------------------

-- ----------------------------
-- Table structure for tinduan_duancap3
-- ----------------------------
DROP TABLE IF EXISTS `tinduan_duancap3`;
CREATE TABLE `tinduan_duancap3` (
  `tin_du_an_id` int(11) NOT NULL,
  `du_an_cap_3` int(11) NOT NULL,
  PRIMARY KEY (`tin_du_an_id`,`du_an_cap_3`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinduan_duancap3
-- ----------------------------
INSERT INTO `tinduan_duancap3` VALUES ('3', '35');
INSERT INTO `tinduan_duancap3` VALUES ('3', '36');
INSERT INTO `tinduan_duancap3` VALUES ('4', '1');
INSERT INTO `tinduan_duancap3` VALUES ('4', '2');
INSERT INTO `tinduan_duancap3` VALUES ('5', '1');
INSERT INTO `tinduan_duancap3` VALUES ('5', '2');
INSERT INTO `tinduan_duancap3` VALUES ('6', '1');
INSERT INTO `tinduan_duancap3` VALUES ('6', '2');
INSERT INTO `tinduan_duancap3` VALUES ('7', '1');
INSERT INTO `tinduan_duancap3` VALUES ('7', '2');

-- ----------------------------
-- Table structure for tinduan_duancap4
-- ----------------------------
DROP TABLE IF EXISTS `tinduan_duancap4`;
CREATE TABLE `tinduan_duancap4` (
  `tin_du_an_id` int(11) NOT NULL,
  `du_an_cap_4` int(11) NOT NULL,
  PRIMARY KEY (`tin_du_an_id`,`du_an_cap_4`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinduan_duancap4
-- ----------------------------

-- ----------------------------
-- Table structure for tinduan_photo
-- ----------------------------
DROP TABLE IF EXISTS `tinduan_photo`;
CREATE TABLE `tinduan_photo` (
  `id` bigint(21) NOT NULL AUTO_INCREMENT,
  `tin_du_an_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinduan_photo
-- ----------------------------
INSERT INTO `tinduan_photo` VALUES ('7', '2', 'c863ac071046d21769d9fd9b98b578e0.jpg');
INSERT INTO `tinduan_photo` VALUES ('8', '2', '0234960cee5d0366b014640994b75a39.jpg');
INSERT INTO `tinduan_photo` VALUES ('9', '2', '324bc1d5899ebb5a5bbe1015bd850583.jpg');
INSERT INTO `tinduan_photo` VALUES ('10', '3', '0d4b4ac1b6548a13d1bc1820ff18f9c8.jpg');
INSERT INTO `tinduan_photo` VALUES ('11', '3', '29c3bad400a4affa35b817f1e7cb18d9.png');
INSERT INTO `tinduan_photo` VALUES ('12', '3', 'c89dc52a4ad99fce90a61954bc6e67fb.jpg');
INSERT INTO `tinduan_photo` VALUES ('13', '3', 'acc2eb7679cdbd644aee1cc991fe830e.jpg');
INSERT INTO `tinduan_photo` VALUES ('14', '3', '6ccde397ffd8174d85787f85724599e0.jpg');
INSERT INTO `tinduan_photo` VALUES ('15', '4', '18bad3e8a944499d9801e637d914f02d.png');
INSERT INTO `tinduan_photo` VALUES ('16', '4', '53049dbd02a4eca6955539562290b82b.png');
INSERT INTO `tinduan_photo` VALUES ('17', '4', '0176e34f26bcdbe1cd3f70ef7082b44b.png');
INSERT INTO `tinduan_photo` VALUES ('18', '4', 'c0a52db75382b01f0a721dd71c06ed23.png');
INSERT INTO `tinduan_photo` VALUES ('19', '4', 'cf77e029eb53fd427885152104e2bb0d.png');
INSERT INTO `tinduan_photo` VALUES ('20', '4', '0d62b85b41ab0674fd5abcc8c33f507c.png');
INSERT INTO `tinduan_photo` VALUES ('21', '4', '9cd69cacaf27101785480fc517ba30ef.png');
INSERT INTO `tinduan_photo` VALUES ('22', '4', '593d7a21fc5f2701460f0e61f8c5b6ac.png');
INSERT INTO `tinduan_photo` VALUES ('23', '4', '5d4a7e71e232e6dc15d942aa2c5e7a7a.jpg');
INSERT INTO `tinduan_photo` VALUES ('24', '4', '98927c409378f7b0998ede8a3dfd5625.png');
INSERT INTO `tinduan_photo` VALUES ('25', '4', '8b667cdb2604cb8c3c1673d24490c399.jpg');
INSERT INTO `tinduan_photo` VALUES ('26', '4', 'ca532f986b801f316147ee334bce47c3.png');
INSERT INTO `tinduan_photo` VALUES ('27', '4', '600314c10d15de2bb046cf749135f960.jpg');
INSERT INTO `tinduan_photo` VALUES ('28', '4', '6e65d3012abf203df93ee1621b939313.jpg');
INSERT INTO `tinduan_photo` VALUES ('29', '4', '3d9ce848b3e2712148f3b618b6a4836c.jpg');
INSERT INTO `tinduan_photo` VALUES ('30', '5', 'e9532a6ccc078fd1bf6fa77d5b5aeb96.png');
INSERT INTO `tinduan_photo` VALUES ('31', '5', 'cfa746ce7295a2a3bbe40054432a0010.jpg');
INSERT INTO `tinduan_photo` VALUES ('32', '5', 'a458061f94f6efbc54089374c0dec3fd.jpg');
INSERT INTO `tinduan_photo` VALUES ('33', '5', '2176c8a4e5ccedfad8fc2fe27629d57b.jpg');
INSERT INTO `tinduan_photo` VALUES ('34', '5', 'e57d843fa73161e065f5ccdb389f02e0.jpg');
INSERT INTO `tinduan_photo` VALUES ('35', '6', '58190ef78c371c1b7ff6aa3a8015f4d7.jpg');
INSERT INTO `tinduan_photo` VALUES ('36', '6', 'bd5ef03b90654f10a5863d9ada7bec36.jpg');
INSERT INTO `tinduan_photo` VALUES ('37', '7', '84fadd5376377213b52bb4d58aa2bd0f.jpg');
INSERT INTO `tinduan_photo` VALUES ('38', '7', 'c19ef752df9d8679f0a7f5e307908fd3.jpg');

-- ----------------------------
-- Table structure for tinnhathauthicong_nhathauthicongcap3
-- ----------------------------
DROP TABLE IF EXISTS `tinnhathauthicong_nhathauthicongcap3`;
CREATE TABLE `tinnhathauthicong_nhathauthicongcap3` (
  `tin_nha_thau_thi_cong_id` int(11) NOT NULL,
  `nha_thau_thi_cong_cap_3` int(11) NOT NULL,
  PRIMARY KEY (`tin_nha_thau_thi_cong_id`,`nha_thau_thi_cong_cap_3`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinnhathauthicong_nhathauthicongcap3
-- ----------------------------

-- ----------------------------
-- Table structure for tinnhathauthicong_nhathauthicongcap4
-- ----------------------------
DROP TABLE IF EXISTS `tinnhathauthicong_nhathauthicongcap4`;
CREATE TABLE `tinnhathauthicong_nhathauthicongcap4` (
  `tin_nha_thau_thi_cong_id` int(11) NOT NULL,
  `nha_thau_thi_cong_cap_4` int(11) NOT NULL,
  PRIMARY KEY (`tin_nha_thau_thi_cong_id`,`nha_thau_thi_cong_cap_4`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinnhathauthicong_nhathauthicongcap4
-- ----------------------------

-- ----------------------------
-- Table structure for tinnhathauthicong_photo
-- ----------------------------
DROP TABLE IF EXISTS `tinnhathauthicong_photo`;
CREATE TABLE `tinnhathauthicong_photo` (
  `id` bigint(21) NOT NULL AUTO_INCREMENT,
  `tin_nha_thau_thi_cong_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinnhathauthicong_photo
-- ----------------------------

-- ----------------------------
-- Table structure for tin_du_an
-- ----------------------------
DROP TABLE IF EXISTS `tin_du_an`;
CREATE TABLE `tin_du_an` (
  `id` bigint(21) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` tinytext,
  `type` tinyint(1) DEFAULT NULL COMMENT '1: cung; 2: cầu',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` int(11) DEFAULT NULL COMMENT 'nhan_vien_id hoặc khach_hang_id hoặc doi_tac_id',
  `target_type` tinyint(1) DEFAULT NULL COMMENT '3: khách hàng; 2: nhân viên; 4: đối tác',
  `ngay` timestamp NULL DEFAULT NULL,
  `city_cap_1` int(11) DEFAULT NULL,
  `city_cap_2` int(11) DEFAULT NULL,
  `city_cap_3` int(11) DEFAULT NULL,
  `du_an_cap_1` int(11) DEFAULT NULL,
  `du_an_cap_2` int(11) DEFAULT NULL,
  `tong_dau_tu` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL COMMENT '1: chưa giao dịch; 2: đang giao dịch; 3: hoàn thành giao dịch',
  `is_delete` tinyint(1) DEFAULT NULL,
  `is_quang_cao` tinyint(1) DEFAULT NULL,
  `allow_show_quang_cao` tinyint(1) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `is_hot` tinyint(1) DEFAULT NULL,
  `is_dich_vu_hau_mai` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tin_du_an
-- ----------------------------
INSERT INTO `tin_du_an` VALUES ('1', 'dự án', 'nội dung dự án1', null, '2018-07-14 10:47:09', '2018-07-24 09:44:26', '4', '4', '2018-07-14 00:00:00', '1', '1', null, '1', '0', '1 tỉ rưỡi1', null, null, null, null, '1', '1', '1');
INSERT INTO `tin_du_an` VALUES ('2', 'xvxcvxcvx', 'cbcbvbc', null, '2018-07-14 12:27:45', '2018-07-17 12:32:06', '3', '2', '0000-00-00 00:00:00', '1', '2', null, '1', null, '1000', null, null, null, null, '1', null, '1');
INSERT INTO `tin_du_an` VALUES ('3', 'nhiều ảnh', 'sdfsdfsd', null, '2018-07-23 14:32:08', '2018-07-23 14:32:08', '3', '2', '2018-07-23 00:00:00', '1', null, null, '2', '10', '4353', null, null, null, null, '1', null, null);
INSERT INTO `tin_du_an` VALUES ('4', 'fsdfdsfsdfsdfsdfs', 'sdfsdfsd', null, '2018-07-24 12:29:53', '2018-07-24 12:29:53', '4', '4', '0000-00-00 00:00:00', '1', null, null, '1', '1', '4353', null, null, null, null, null, null, null);
INSERT INTO `tin_du_an` VALUES ('5', 'ddddddddddđ', 'dfsdsdf', null, '2018-07-24 12:31:40', '2018-07-24 12:31:40', '3', '2', '0000-00-00 00:00:00', '1', '2', null, '1', '1', 'sdfsdfsd', null, null, null, null, '1', null, null);
INSERT INTO `tin_du_an` VALUES ('6', 'còn lỗi', 'sdfdsfsdf', null, '2018-07-26 09:43:35', '2018-07-26 09:43:58', '4', '4', '2018-07-26 00:00:00', '1', null, null, '1', '1', '4353', null, null, null, null, '1', null, null);
INSERT INTO `tin_du_an` VALUES ('7', 'hết lỗi nhiều ảnh', 'sdfsdfs', null, '2018-07-26 10:02:59', '2018-07-26 10:03:20', '4', '4', '2018-07-26 00:00:00', '1', '1', null, '1', '1', '4353', null, null, null, null, '1', null, null);

-- ----------------------------
-- Table structure for tin_nha_thau_thi_cong
-- ----------------------------
DROP TABLE IF EXISTS `tin_nha_thau_thi_cong`;
CREATE TABLE `tin_nha_thau_thi_cong` (
  `id` bigint(21) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` tinytext,
  `type` tinyint(1) DEFAULT NULL COMMENT '1: cung; 2: cầu',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` int(11) DEFAULT NULL COMMENT 'nhan_vien_id hoặc khach_hang_id hoặc doi_tac_id',
  `target_type` tinyint(1) DEFAULT NULL COMMENT '3: khách hàng; 2: nhân viên; 4: đối tác',
  `ngay` timestamp NULL DEFAULT NULL,
  `city_cap_1` int(11) DEFAULT NULL,
  `city_cap_2` int(11) DEFAULT NULL,
  `city_cap_3` int(11) DEFAULT NULL,
  `nha_thau_thi_cong_cap_1` int(11) DEFAULT NULL,
  `nha_thau_thi_cong_cap_2` int(11) DEFAULT NULL,
  `phan_loai` int(11) DEFAULT NULL COMMENT '1:nhân viên; 2: đối tác',
  `dich_vu_thi_cong` varchar(1000) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL COMMENT '1: chưa giao dịch; 2: đang giao dịch; 3: hoàn thành giao dịch',
  `is_delete` tinyint(1) DEFAULT NULL,
  `is_quang_cao` tinyint(1) DEFAULT NULL,
  `allow_show_quang_cao` tinyint(1) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `is_hot` tinyint(1) DEFAULT NULL,
  `is_dich_vu_hau_mai` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tin_nha_thau_thi_cong
-- ----------------------------
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('1', 'nhà thầu thi công test', 'nội dung nhà thầu thi công test', null, '2018-07-14 10:46:20', '2018-07-17 12:30:46', '4', '4', '2018-07-14 00:00:00', '2', null, null, '1', '0', '2', 'dịch vụ thi công1', null, null, null, null, '1', null, '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `danh_xung` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT 'Danh xưng (anh/chị)',
  `full_name` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT 'Tên đầy đủ (Minh Kỳ)',
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `type` tinyint(1) NOT NULL COMMENT '1: admin; 2: nhân viên; 3: khách hàng; 4: đối tác; ',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'anh ', 'Dũng', '', '0971553559', '7c4a8d09ca3762af61e59520943dc26494f8941b', '1', '1');
INSERT INTO `user` VALUES ('3', null, 'Tâm', null, '0935348952', '0d5a2ea77c655974436fbcad3f380a6ef4e59831', '2', '1');
INSERT INTO `user` VALUES ('4', null, null, null, '01269259744', '7c4a8d09ca3762af61e59520943dc26494f8941b', '4', '1');

-- ----------------------------
-- Table structure for user_duan
-- ----------------------------
DROP TABLE IF EXISTS `user_duan`;
CREATE TABLE `user_duan` (
  `du_an_cap_1_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`du_an_cap_1_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_duan
-- ----------------------------
INSERT INTO `user_duan` VALUES ('1', '3');
INSERT INTO `user_duan` VALUES ('2', '3');
INSERT INTO `user_duan` VALUES ('3', '3');

-- ----------------------------
-- Table structure for user_nhathauthicong
-- ----------------------------
DROP TABLE IF EXISTS `user_nhathauthicong`;
CREATE TABLE `user_nhathauthicong` (
  `nha_thau_thi_cong_cap_1_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`nha_thau_thi_cong_cap_1_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_nhathauthicong
-- ----------------------------
INSERT INTO `user_nhathauthicong` VALUES ('1', '3');
INSERT INTO `user_nhathauthicong` VALUES ('2', '3');
INSERT INTO `user_nhathauthicong` VALUES ('3', '3');

-- ----------------------------
-- View structure for view_tin
-- ----------------------------
DROP VIEW IF EXISTS `view_tin`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `view_tin` AS select title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,
tong_dau_tu,
photo,is_quang_cao,allow_show_quang_cao,
phone,user.type,tin_du_an.user_id,
'' as phan_loai,
tin_du_an.id,
tin_du_an.du_an_cap_1 as cap_1,
tin_du_an.du_an_cap_2 as cap_2,
target_type,city_cap_1,city_cap_2,is_active,'du_an' as type_tin,tin_du_an.status,tin_du_an.is_hot from tin_du_an join user on user.id=tin_du_an.user_id left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id group by tin_du_an.id 
UNION 
select title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,
'' as tong_dau_tu,
photo,is_quang_cao,allow_show_quang_cao,
phone,user.type,tin_nha_thau_thi_cong.user_id,
phan_loai,
tin_nha_thau_thi_cong.id,
tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1 as cap_1,
tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_2 as cap_2,
target_type,'' as city_cap_1,'' as city_cap_2,is_active,'nha_thau_thi_cong' as type_tin,tin_nha_thau_thi_cong.status,tin_nha_thau_thi_cong.is_hot from tin_nha_thau_thi_cong join user on user.id=tin_nha_thau_thi_cong.user_id left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id group by tin_nha_thau_thi_cong.id ; ;

-- ----------------------------
-- View structure for view_tin_du_an
-- ----------------------------
DROP VIEW IF EXISTS `view_tin_du_an`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `view_tin_du_an` AS select title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,tong_dau_tu,photo,is_quang_cao,allow_show_quang_cao,phone,user.type,tin_du_an.id,tin_du_an.du_an_cap_1,tin_du_an.du_an_cap_2,target_type,city_cap_1,city_cap_2,is_active,tin_du_an.status,tin_du_an.is_hot,DATE_FORMAT(tin_du_an.created_at,'%d/%m/%Y') AS created_at,tin_du_an.is_dich_vu_hau_mai from tin_du_an join user on user.id=tin_du_an.user_id left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id group by tin_du_an.id ;

-- ----------------------------
-- View structure for view_tin_nha_thau_thi_cong
-- ----------------------------
DROP VIEW IF EXISTS `view_tin_nha_thau_thi_cong`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `view_tin_nha_thau_thi_cong` AS select title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,photo,is_quang_cao,allow_show_quang_cao,phone,user.type,phan_loai,tin_nha_thau_thi_cong.id,tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1,tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_2,target_type,is_active,tin_nha_thau_thi_cong.is_hot,DATE_FORMAT(tin_nha_thau_thi_cong.created_at,'%d/%m/%Y') AS created_at from tin_nha_thau_thi_cong join user on user.id=tin_nha_thau_thi_cong.user_id left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id group by tin_nha_thau_thi_cong.id ;

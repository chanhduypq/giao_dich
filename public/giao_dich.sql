/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : giao_dich

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2018-08-03 17:37:25
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
-- Table structure for config
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config` (
  `guide` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config
-- ----------------------------
INSERT INTO `config` VALUES ('Chợ Tốt chính thức gia nhập thị trường Việt Nam vào đầu năm 2012,\r\n với mục đích tạo ra cho bạn một kênh rao vặt trung gian, \r\nkết nối người mua với người bán lại với nhau bằng những giao dịch cực kỳ đơn giản, tiện lợi, nhanh chóng, an toàn, mang đến hiệu quả bất ngờ.\r\nĐến nay, \r\nChợ Tốt tự hào là Website rao vặt được ưa chuộng hàng đầu Việt Nam. \r\nHơn hàng ngàn món hời từ Bất động sản, Nhà cửa, Xe cộ, Đồ điện tử, Thú cưng, Vật dụng cá nhân... đến tìm ');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dich_vu_hau_mai
-- ----------------------------
INSERT INTO `dich_vu_hau_mai` VALUES ('1', null, null, '6281fdc32e0dcdb3ffafd5cfcfe6b645.jpg', null, null, '1', '1', '1');
INSERT INTO `dich_vu_hau_mai` VALUES ('2', 'sdfsdfs', 'sfsdfsd', '9149a5353d9704bde70a1b98afb583d4.jpg', '2018-07-17 14:21:29', '2018-08-24 14:21:33', '1', '2', '0');
INSERT INTO `dich_vu_hau_mai` VALUES ('3', null, null, '65e218beef7bce9d9deca8b765d0ff46.jpg', null, null, null, null, '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

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
INSERT INTO `du_an_cap_2` VALUES ('15', 'sdfsdf', '1', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('16', 'sdfsdfsd', '1', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('17', 'sdfsdfsdf', '1', null, null, '0');

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
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`tin_du_an_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_da_chon
-- ----------------------------
INSERT INTO `du_an_da_chon` VALUES ('13', '4', '2018-08-01 13:22:28');
INSERT INTO `du_an_da_chon` VALUES ('14', '4', '2018-08-01 13:28:36');

-- ----------------------------
-- Table structure for nha_thau_da_chon
-- ----------------------------
DROP TABLE IF EXISTS `nha_thau_da_chon`;
CREATE TABLE `nha_thau_da_chon` (
  `tin_nha_thau_thi_cong_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`tin_nha_thau_thi_cong_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nha_thau_da_chon
-- ----------------------------
INSERT INTO `nha_thau_da_chon` VALUES ('2', '4', '2018-08-02 20:49:42');
INSERT INTO `nha_thau_da_chon` VALUES ('3', '4', '2018-08-01 13:28:50');
INSERT INTO `nha_thau_da_chon` VALUES ('4', '4', '2018-08-01 13:28:49');
INSERT INTO `nha_thau_da_chon` VALUES ('5', '4', '2018-08-02 21:18:10');

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
INSERT INTO `tinduan_duancap3` VALUES ('6', '35');
INSERT INTO `tinduan_duancap3` VALUES ('6', '36');
INSERT INTO `tinduan_duancap3` VALUES ('6', '37');
INSERT INTO `tinduan_duancap3` VALUES ('6', '38');
INSERT INTO `tinduan_duancap3` VALUES ('6', '39');
INSERT INTO `tinduan_duancap3` VALUES ('6', '40');
INSERT INTO `tinduan_duancap3` VALUES ('6', '41');
INSERT INTO `tinduan_duancap3` VALUES ('7', '1');
INSERT INTO `tinduan_duancap3` VALUES ('7', '2');
INSERT INTO `tinduan_duancap3` VALUES ('8', '1');
INSERT INTO `tinduan_duancap3` VALUES ('8', '2');
INSERT INTO `tinduan_duancap3` VALUES ('9', '1');
INSERT INTO `tinduan_duancap3` VALUES ('9', '2');
INSERT INTO `tinduan_duancap3` VALUES ('10', '1');
INSERT INTO `tinduan_duancap3` VALUES ('10', '2');
INSERT INTO `tinduan_duancap3` VALUES ('11', '1');
INSERT INTO `tinduan_duancap3` VALUES ('11', '2');
INSERT INTO `tinduan_duancap3` VALUES ('12', '1');
INSERT INTO `tinduan_duancap3` VALUES ('12', '2');
INSERT INTO `tinduan_duancap3` VALUES ('13', '1');
INSERT INTO `tinduan_duancap3` VALUES ('13', '2');
INSERT INTO `tinduan_duancap3` VALUES ('14', '1');
INSERT INTO `tinduan_duancap3` VALUES ('14', '2');
INSERT INTO `tinduan_duancap3` VALUES ('15', '1');
INSERT INTO `tinduan_duancap3` VALUES ('15', '2');
INSERT INTO `tinduan_duancap3` VALUES ('16', '36');
INSERT INTO `tinduan_duancap3` VALUES ('16', '37');
INSERT INTO `tinduan_duancap3` VALUES ('17', '1');
INSERT INTO `tinduan_duancap3` VALUES ('17', '2');

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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinduan_photo
-- ----------------------------
INSERT INTO `tinduan_photo` VALUES ('1', '12', 'd47910e056366223157d710daf40b691.jpg');
INSERT INTO `tinduan_photo` VALUES ('2', '12', '978625b37633062cca31893055bedce2.jpg');
INSERT INTO `tinduan_photo` VALUES ('3', '12', 'c1a4897ce86f8ddab29369d8f1e12968.jpg');
INSERT INTO `tinduan_photo` VALUES ('4', '13', 'a7955ed492fc60089cc849bf0a7d538f.jpg');
INSERT INTO `tinduan_photo` VALUES ('5', '13', 'a25cd484a4448a16366a6ccd63665873.jpg');
INSERT INTO `tinduan_photo` VALUES ('6', '13', 'e6cc23db211a8301145c3e021ac19d7f.jpg');
INSERT INTO `tinduan_photo` VALUES ('7', '14', '93bc4cf12a99f62c2c9a7aae1fea5d1d.jpg');
INSERT INTO `tinduan_photo` VALUES ('8', '14', '5bf40fe16891b6df498f46a10ee4bd7c.jpg');
INSERT INTO `tinduan_photo` VALUES ('9', '14', '1c4c53d6662a319499ac917153e1f477.jpg');
INSERT INTO `tinduan_photo` VALUES ('10', '15', 'dc507d35f0866862869fcb51b821aa46.jpg');
INSERT INTO `tinduan_photo` VALUES ('11', '15', '3595bde36973292a9056629d1959ea4b.jpg');
INSERT INTO `tinduan_photo` VALUES ('12', '15', 'bd7a4bf41f212a533ba07812a025282e.jpg');
INSERT INTO `tinduan_photo` VALUES ('13', '16', '2c175d05cfc8394df6883b590b86e6a0.jpg');
INSERT INTO `tinduan_photo` VALUES ('14', '17', '3988c0d17348714ed7b2d85ba4df1051.jpg');
INSERT INTO `tinduan_photo` VALUES ('15', '17', 'ba04831583e6cfee7eae75dd785848ea.jpg');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinnhathauthicong_photo
-- ----------------------------
INSERT INTO `tinnhathauthicong_photo` VALUES ('1', '4', '44c347d125fb0ba8eb78bfb2655bc3a5.jpg');
INSERT INTO `tinnhathauthicong_photo` VALUES ('2', '4', '053b085701298383f02d3f357e6e31b1.jpg');
INSERT INTO `tinnhathauthicong_photo` VALUES ('3', '4', 'e5bdea31bb97da115ca740ee97e25c2b.jpg');
INSERT INTO `tinnhathauthicong_photo` VALUES ('4', '5', '7b60f805784b563dc79bf1ea340a33af.jpg');

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
  `so_luot_xem` int(11) NOT NULL DEFAULT '0',
  `vote` float(11,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tin_du_an
-- ----------------------------
INSERT INTO `tin_du_an` VALUES ('1', 'dự án', 'nội dung dự án1', null, '2018-07-14 10:47:09', '2018-08-03 17:13:13', '4', '4', '2018-07-14 00:00:00', '1', '1', null, '1', '0', '1 tỉ rưỡi1', null, null, '1', '1', '1', '1', '1', '25', '3.25');
INSERT INTO `tin_du_an` VALUES ('2', 'xvxcvxcvx', 'cbcbvbc', null, '2018-07-14 12:27:45', '2018-08-03 14:10:44', '3', '2', '0000-00-00 00:00:00', '1', '2', null, '1', null, '1000', null, null, '1', '1', '1', null, '1', '0', '5.00');
INSERT INTO `tin_du_an` VALUES ('3', 'nhiều ảnh', 'sdfsdfsd', null, '2018-07-23 14:32:08', '2018-07-31 11:13:45', '3', '2', '2018-07-23 00:00:00', '1', null, null, '2', '10', '4353', null, null, '1', '1', '1', null, null, '0', null);
INSERT INTO `tin_du_an` VALUES ('4', 'fsdfdsfsdfsdfsdfs', 'sdfsdfsd', null, '2018-07-24 12:29:53', '2018-08-03 17:06:50', '4', '4', '0000-00-00 00:00:00', '1', null, null, '1', '1', '4353', null, null, '1', '1', null, null, null, '6', null);
INSERT INTO `tin_du_an` VALUES ('5', 'ddddddddddđ', 'dfsdsdf', null, '2018-07-24 12:31:40', '2018-07-31 11:13:47', '3', '2', '0000-00-00 00:00:00', '1', '2', null, '1', '1', 'sdfsdfsd', null, null, '1', '1', '1', null, null, '0', null);
INSERT INTO `tin_du_an` VALUES ('6', 'teéest method get', 'saádasasda ad ad  sa daá d', null, '2018-07-24 21:41:00', '2018-07-31 11:13:47', '4', '4', '2018-07-24 00:00:00', '1', '7', null, '2', '10', '1 tỉ rưỡi', null, null, '1', '1', '1', null, null, '0', null);
INSERT INTO `tin_du_an` VALUES ('7', '111111111111111111111111111', 'hgjh', null, '2018-07-24 22:02:13', '2018-07-31 11:13:48', '4', '4', '2018-07-24 00:00:00', '1', '2', null, '1', '1', '1000', null, null, '1', '1', null, null, null, '0', null);
INSERT INTO `tin_du_an` VALUES ('8', '2222222222222222222222222222222222222', 'ghfhgf', null, '2018-07-24 22:06:11', '2018-07-31 11:04:15', '4', '4', '2018-07-24 00:00:00', '1', null, null, '1', '1', '1 tỉ rưỡi', null, null, '1', '1', null, null, null, '0', null);
INSERT INTO `tin_du_an` VALUES ('9', '3333333333333333333', 'dfsdfsfds', null, '2018-07-24 22:34:33', '2018-07-31 11:13:48', '4', '4', '2018-07-24 00:00:00', '1', null, null, '1', '1', '1000', null, null, '1', '1', null, null, null, '0', null);
INSERT INTO `tin_du_an` VALUES ('10', '4444444444444444444444444', null, null, '2018-07-24 22:41:53', '2018-07-31 11:13:53', '4', '4', '0000-00-00 00:00:00', null, null, null, '1', '1', null, null, null, '1', '1', null, null, null, '0', null);
INSERT INTO `tin_du_an` VALUES ('11', 'ok ', null, null, '2018-07-29 12:24:17', '2018-07-31 11:13:49', '1', '2', '0000-00-00 00:00:00', null, null, null, '1', '1', null, null, null, '1', '1', '1', null, null, '0', null);
INSERT INTO `tin_du_an` VALUES ('12', 'lỗi k up ảnh dc', 'fdgdgdf', null, '2018-07-29 14:17:16', '2018-07-31 11:13:55', '3', '2', '2018-07-29 00:00:00', '1', null, null, '1', '1', '1 tỉ rưỡi', null, null, '1', '1', '1', null, null, '0', null);
INSERT INTO `tin_du_an` VALUES ('13', '23446', 'dfsfsdf', null, '2018-07-29 20:16:28', '2018-08-03 14:07:58', '4', '4', '2018-07-29 00:00:00', '1', null, null, '1', '1', '1000', null, null, '1', '1', '1', null, null, '0', '5.00');
INSERT INTO `tin_du_an` VALUES ('14', '1111111111111111111111111111111111111111111111111', 'adsdad', null, '2018-07-29 20:23:15', '2018-08-03 14:07:56', '4', '4', '2018-07-29 00:00:00', '1', null, null, '1', '1', '1000', null, null, '1', '1', '1', null, null, '0', '4.00');
INSERT INTO `tin_du_an` VALUES ('15', '2222222222222222222222222222222222222223333333333333333333333333333333333333333333', 'sdsadsadas\r\nsdfds\r\nfds\r\nfsd\r\nf\r\nsdf\r\nsd\r\nfsd\r\nf\r\nsd', null, '2018-07-29 20:25:36', '2018-08-03 17:16:49', '4', '4', '2018-07-29 00:00:00', '1', null, null, '1', '1', '1 tỉ rưỡi', null, null, '1', '1', '1', null, null, '3', '3.00');
INSERT INTO `tin_du_an` VALUES ('16', 'test nè', 'ádsadsa', null, '2018-08-01 14:43:40', '2018-08-01 14:43:57', '4', '4', '2018-08-01 00:00:00', '1', '1', null, '2', '10', '4353', null, null, null, null, '1', null, null, '0', null);
INSERT INTO `tin_du_an` VALUES ('17', 'lý thị lựu', 'fgdfgfd', null, '2018-08-02 15:02:16', '2018-08-03 15:59:09', '7', '3', '2018-08-02 00:00:00', '1', '2', null, '1', '1', '500', null, null, '1', '1', '1', null, null, '12', '2.00');

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
  `so_luot_xem` int(11) NOT NULL DEFAULT '0',
  `vote` float(11,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tin_nha_thau_thi_cong
-- ----------------------------
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('1', 'nhà thầu thi công test sdfdsf s sdf sd f sdf sdf sd fsd f sdf sd fddddddddddddddddddddddđ', 'nội dung nhà thầu thi công test', null, '2018-07-14 10:46:20', '2018-08-03 14:09:56', '4', '4', '2018-07-14 00:00:00', '2', null, null, '1', '0', '2', 'dịch vụ thi công1', null, null, '1', '1', '1', null, '0', '0', '1.00');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('2', 'sdasdasdas', 'sfsada', null, '2018-07-29 10:36:47', '2018-08-03 14:09:55', '1', '2', '0000-00-00 00:00:00', '1', null, null, '1', '0', '2', 'xe múc', null, null, '1', '1', '1', null, null, '0', '2.00');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('3', 'sdfsdfds', null, null, '2018-07-29 23:32:24', '2018-08-03 14:10:06', '1', '2', '0000-00-00 00:00:00', null, null, null, '1', '0', '1', null, null, null, '1', '1', '1', null, null, '1', '3.00');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('4', 'sgfsdfsdfsd', 'sdfsdfds', null, '2018-07-31 11:36:49', '2018-08-03 17:16:04', '4', '4', '2018-07-05 00:00:00', '1', null, null, '1', '0', '1', 'sdfsdfds', null, null, '1', '1', '1', null, null, '2', '4.00');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('5', 'ltl', 'sdfdsfsd', null, '2018-08-02 15:08:49', '2018-08-03 14:10:01', '7', '3', '2018-08-02 00:00:00', '1', null, null, '1', '0', '1', 'sdfsdfsd', null, null, null, null, '1', null, null, '15', '3.50');

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
  `type_active` tinyint(1) DEFAULT NULL,
  `allow_hoptac` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'anh ', 'Dũng', '', '0971553559', '7c4a8d09ca3762af61e59520943dc26494f8941b', '1', '1', null, '0');
INSERT INTO `user` VALUES ('3', null, 'Tâm', null, '0935348952', '0d5a2ea77c655974436fbcad3f380a6ef4e59831', '2', '1', null, '0');
INSERT INTO `user` VALUES ('4', null, null, null, '01269259744', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2', '1', null, '0');
INSERT INTO `user` VALUES ('5', null, null, null, '0905022640', '7c4a8d09ca3762af61e59520943dc26494f8941b', '3', '1', '2', '0');
INSERT INTO `user` VALUES ('7', null, null, null, '01286435303', '7c4a8d09ca3762af61e59520943dc26494f8941b', '3', '1', '4', '1');

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
INSERT INTO `user_duan` VALUES ('8', '5');
INSERT INTO `user_duan` VALUES ('9', '5');

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
INSERT INTO `user_nhathauthicong` VALUES ('1', '5');
INSERT INTO `user_nhathauthicong` VALUES ('2', '5');

-- ----------------------------
-- Table structure for vote_duan
-- ----------------------------
DROP TABLE IF EXISTS `vote_duan`;
CREATE TABLE `vote_duan` (
  `user_id` int(11) NOT NULL,
  `tin_id` int(11) NOT NULL,
  `value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vote_duan
-- ----------------------------
INSERT INTO `vote_duan` VALUES ('4', '1', '3');
INSERT INTO `vote_duan` VALUES ('4', '16', '3');
INSERT INTO `vote_duan` VALUES ('4', '1', '6');
INSERT INTO `vote_duan` VALUES ('1', '1', '3');
INSERT INTO `vote_duan` VALUES ('5', '1', '1');
INSERT INTO `vote_duan` VALUES ('5', '17', '2');
INSERT INTO `vote_duan` VALUES ('5', '15', '3');
INSERT INTO `vote_duan` VALUES ('5', '14', '4');
INSERT INTO `vote_duan` VALUES ('5', '13', '5');
INSERT INTO `vote_duan` VALUES ('5', '2', '5');

-- ----------------------------
-- Table structure for vote_nhathauthicong
-- ----------------------------
DROP TABLE IF EXISTS `vote_nhathauthicong`;
CREATE TABLE `vote_nhathauthicong` (
  `user_id` int(11) NOT NULL,
  `tin_id` int(11) NOT NULL,
  `value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vote_nhathauthicong
-- ----------------------------
INSERT INTO `vote_nhathauthicong` VALUES ('4', '5', '2');
INSERT INTO `vote_nhathauthicong` VALUES ('5', '5', '5');
INSERT INTO `vote_nhathauthicong` VALUES ('5', '4', '4');
INSERT INTO `vote_nhathauthicong` VALUES ('5', '3', '3');
INSERT INTO `vote_nhathauthicong` VALUES ('5', '2', '2');
INSERT INTO `vote_nhathauthicong` VALUES ('5', '1', '1');

-- ----------------------------
-- View structure for view_tin
-- ----------------------------
DROP VIEW IF EXISTS `view_tin`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `view_tin` AS select vote,so_luot_xem,`user`.type_active,`user`.allow_hoptac,title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,
tong_dau_tu,
photo,is_quang_cao,allow_show_quang_cao,
phone,user.type,tin_du_an.user_id,
'' as phan_loai,
tin_du_an.id,
tin_du_an.du_an_cap_1 as cap_1,
tin_du_an.du_an_cap_2 as cap_2,
target_type,city_cap_1,city_cap_2,is_active,'du_an' as type_tin,tin_du_an.status,tin_du_an.is_hot from tin_du_an join user on user.id=tin_du_an.user_id left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id group by tin_du_an.id 
UNION 
select vote,so_luot_xem,`user`.type_active,`user`.allow_hoptac,title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,
'' as tong_dau_tu,
photo,is_quang_cao,allow_show_quang_cao,
phone,user.type,tin_nha_thau_thi_cong.user_id,
phan_loai,
tin_nha_thau_thi_cong.id,
tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1 as cap_1,
tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_2 as cap_2,
target_type,'' as city_cap_1,'' as city_cap_2,is_active,'nha_thau_thi_cong' as type_tin,tin_nha_thau_thi_cong.status,tin_nha_thau_thi_cong.is_hot from tin_nha_thau_thi_cong join user on user.id=tin_nha_thau_thi_cong.user_id left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id group by tin_nha_thau_thi_cong.id ;

-- ----------------------------
-- View structure for view_tin_du_an
-- ----------------------------
DROP VIEW IF EXISTS `view_tin_du_an`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `view_tin_du_an` AS select vote,so_luot_xem,`user`.type_active,`user`.allow_hoptac, title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,tong_dau_tu,photo,is_quang_cao,allow_show_quang_cao,phone,user.type,tin_du_an.id,tin_du_an.du_an_cap_1,tin_du_an.du_an_cap_2,target_type,city_cap_1,city_cap_2,is_active,tin_du_an.status,tin_du_an.is_hot,DATE_FORMAT(tin_du_an.created_at,'%d/%m/%Y') AS created_at,tin_du_an.is_dich_vu_hau_mai from tin_du_an join user on user.id=tin_du_an.user_id left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id group by tin_du_an.id ;

-- ----------------------------
-- View structure for view_tin_nha_thau_thi_cong
-- ----------------------------
DROP VIEW IF EXISTS `view_tin_nha_thau_thi_cong`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `view_tin_nha_thau_thi_cong` AS select vote,so_luot_xem,`user`.type_active,`user`.allow_hoptac,dich_vu_thi_cong,title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,photo,is_quang_cao,allow_show_quang_cao,phone,user.type,phan_loai,tin_nha_thau_thi_cong.id,tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1,tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_2,target_type,is_active,tin_nha_thau_thi_cong.is_hot,DATE_FORMAT(tin_nha_thau_thi_cong.created_at,'%d/%m/%Y') AS created_at from tin_nha_thau_thi_cong join user on user.id=tin_nha_thau_thi_cong.user_id left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id group by tin_nha_thau_thi_cong.id ;

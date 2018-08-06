/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : giao_dich

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2018-08-06 17:27:56
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dich_vu_hau_mai
-- ----------------------------
INSERT INTO `dich_vu_hau_mai` VALUES ('2', null, null, '4d8eef391db0bd219c09b9627fb74cc5.jpg', null, null, null, null, '1');
INSERT INTO `dich_vu_hau_mai` VALUES ('3', null, null, 'f67153ba8994a53abf8ae534f95dbf08.jpg', '2018-07-28 04:00:00', '2018-08-17 04:00:00', '1', null, '0');
INSERT INTO `dich_vu_hau_mai` VALUES ('4', null, null, 'ff85d27ab1b4e855ec7487ba88e63e8b.jpeg', '2018-08-05 04:00:00', '2018-08-30 04:00:00', null, null, '0');
INSERT INTO `dich_vu_hau_mai` VALUES ('5', null, null, '8d13143eea046feaec25359df873cec5.jpeg', '2018-08-05 04:00:00', '2018-08-30 04:00:00', '1', null, '0');

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
INSERT INTO `du_an_da_chon` VALUES ('1', '29', '2018-07-27 16:20:25');
INSERT INTO `du_an_da_chon` VALUES ('4', '1', '2018-08-05 00:01:33');
INSERT INTO `du_an_da_chon` VALUES ('20', '1', '2018-08-05 00:01:13');

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
INSERT INTO `nha_thau_da_chon` VALUES ('5', '5', '2018-08-06 14:42:29');

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
INSERT INTO `tinduan_duancap3` VALUES ('3', '7');
INSERT INTO `tinduan_duancap3` VALUES ('3', '8');
INSERT INTO `tinduan_duancap3` VALUES ('3', '9');
INSERT INTO `tinduan_duancap3` VALUES ('3', '10');
INSERT INTO `tinduan_duancap3` VALUES ('3', '11');
INSERT INTO `tinduan_duancap3` VALUES ('3', '12');
INSERT INTO `tinduan_duancap3` VALUES ('4', '35');
INSERT INTO `tinduan_duancap3` VALUES ('4', '36');
INSERT INTO `tinduan_duancap3` VALUES ('4', '37');
INSERT INTO `tinduan_duancap3` VALUES ('4', '38');
INSERT INTO `tinduan_duancap3` VALUES ('5', '42');
INSERT INTO `tinduan_duancap3` VALUES ('5', '43');
INSERT INTO `tinduan_duancap3` VALUES ('5', '44');
INSERT INTO `tinduan_duancap3` VALUES ('5', '45');
INSERT INTO `tinduan_duancap3` VALUES ('6', '13');
INSERT INTO `tinduan_duancap3` VALUES ('6', '14');
INSERT INTO `tinduan_duancap3` VALUES ('6', '15');
INSERT INTO `tinduan_duancap3` VALUES ('6', '16');
INSERT INTO `tinduan_duancap3` VALUES ('6', '17');
INSERT INTO `tinduan_duancap3` VALUES ('6', '18');
INSERT INTO `tinduan_duancap3` VALUES ('8', '7');
INSERT INTO `tinduan_duancap3` VALUES ('8', '8');
INSERT INTO `tinduan_duancap3` VALUES ('8', '9');
INSERT INTO `tinduan_duancap3` VALUES ('8', '10');
INSERT INTO `tinduan_duancap3` VALUES ('8', '11');
INSERT INTO `tinduan_duancap3` VALUES ('8', '12');
INSERT INTO `tinduan_duancap3` VALUES ('9', '1');
INSERT INTO `tinduan_duancap3` VALUES ('9', '2');
INSERT INTO `tinduan_duancap3` VALUES ('9', '3');
INSERT INTO `tinduan_duancap3` VALUES ('9', '4');
INSERT INTO `tinduan_duancap3` VALUES ('9', '5');
INSERT INTO `tinduan_duancap3` VALUES ('9', '6');
INSERT INTO `tinduan_duancap3` VALUES ('10', '1');
INSERT INTO `tinduan_duancap3` VALUES ('10', '2');
INSERT INTO `tinduan_duancap3` VALUES ('10', '3');
INSERT INTO `tinduan_duancap3` VALUES ('10', '4');
INSERT INTO `tinduan_duancap3` VALUES ('10', '5');
INSERT INTO `tinduan_duancap3` VALUES ('10', '6');
INSERT INTO `tinduan_duancap3` VALUES ('11', '1');
INSERT INTO `tinduan_duancap3` VALUES ('11', '2');
INSERT INTO `tinduan_duancap3` VALUES ('11', '3');
INSERT INTO `tinduan_duancap3` VALUES ('11', '4');
INSERT INTO `tinduan_duancap3` VALUES ('11', '5');
INSERT INTO `tinduan_duancap3` VALUES ('11', '6');
INSERT INTO `tinduan_duancap3` VALUES ('12', '1');
INSERT INTO `tinduan_duancap3` VALUES ('12', '2');
INSERT INTO `tinduan_duancap3` VALUES ('13', '1');
INSERT INTO `tinduan_duancap3` VALUES ('13', '2');
INSERT INTO `tinduan_duancap3` VALUES ('14', '1');
INSERT INTO `tinduan_duancap3` VALUES ('14', '2');
INSERT INTO `tinduan_duancap3` VALUES ('14', '3');
INSERT INTO `tinduan_duancap3` VALUES ('14', '4');
INSERT INTO `tinduan_duancap3` VALUES ('14', '5');
INSERT INTO `tinduan_duancap3` VALUES ('14', '6');
INSERT INTO `tinduan_duancap3` VALUES ('15', '1');
INSERT INTO `tinduan_duancap3` VALUES ('15', '2');
INSERT INTO `tinduan_duancap3` VALUES ('16', '42');
INSERT INTO `tinduan_duancap3` VALUES ('16', '43');
INSERT INTO `tinduan_duancap3` VALUES ('16', '44');
INSERT INTO `tinduan_duancap3` VALUES ('16', '45');
INSERT INTO `tinduan_duancap3` VALUES ('17', '1');
INSERT INTO `tinduan_duancap3` VALUES ('17', '2');
INSERT INTO `tinduan_duancap3` VALUES ('17', '3');
INSERT INTO `tinduan_duancap3` VALUES ('17', '4');
INSERT INTO `tinduan_duancap3` VALUES ('17', '5');
INSERT INTO `tinduan_duancap3` VALUES ('18', '1');
INSERT INTO `tinduan_duancap3` VALUES ('18', '2');
INSERT INTO `tinduan_duancap3` VALUES ('18', '4');
INSERT INTO `tinduan_duancap3` VALUES ('19', '35');
INSERT INTO `tinduan_duancap3` VALUES ('19', '36');
INSERT INTO `tinduan_duancap3` VALUES ('19', '37');
INSERT INTO `tinduan_duancap3` VALUES ('19', '38');
INSERT INTO `tinduan_duancap3` VALUES ('19', '39');
INSERT INTO `tinduan_duancap3` VALUES ('19', '40');
INSERT INTO `tinduan_duancap3` VALUES ('19', '41');
INSERT INTO `tinduan_duancap3` VALUES ('20', '42');
INSERT INTO `tinduan_duancap3` VALUES ('20', '43');
INSERT INTO `tinduan_duancap3` VALUES ('20', '44');
INSERT INTO `tinduan_duancap3` VALUES ('20', '45');
INSERT INTO `tinduan_duancap3` VALUES ('21', '51');
INSERT INTO `tinduan_duancap3` VALUES ('21', '52');
INSERT INTO `tinduan_duancap3` VALUES ('21', '53');
INSERT INTO `tinduan_duancap3` VALUES ('21', '54');
INSERT INTO `tinduan_duancap3` VALUES ('21', '55');
INSERT INTO `tinduan_duancap3` VALUES ('21', '56');
INSERT INTO `tinduan_duancap3` VALUES ('22', '1');
INSERT INTO `tinduan_duancap3` VALUES ('22', '2');
INSERT INTO `tinduan_duancap3` VALUES ('22', '3');
INSERT INTO `tinduan_duancap3` VALUES ('22', '4');
INSERT INTO `tinduan_duancap3` VALUES ('22', '5');
INSERT INTO `tinduan_duancap3` VALUES ('22', '6');
INSERT INTO `tinduan_duancap3` VALUES ('23', '1');
INSERT INTO `tinduan_duancap3` VALUES ('23', '2');
INSERT INTO `tinduan_duancap3` VALUES ('23', '4');
INSERT INTO `tinduan_duancap3` VALUES ('23', '5');
INSERT INTO `tinduan_duancap3` VALUES ('24', '1');
INSERT INTO `tinduan_duancap3` VALUES ('24', '2');

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
INSERT INTO `tinduan_duancap4` VALUES ('10', '1');
INSERT INTO `tinduan_duancap4` VALUES ('10', '2');
INSERT INTO `tinduan_duancap4` VALUES ('10', '3');
INSERT INTO `tinduan_duancap4` VALUES ('10', '4');
INSERT INTO `tinduan_duancap4` VALUES ('10', '5');
INSERT INTO `tinduan_duancap4` VALUES ('11', '1');
INSERT INTO `tinduan_duancap4` VALUES ('11', '2');
INSERT INTO `tinduan_duancap4` VALUES ('11', '3');
INSERT INTO `tinduan_duancap4` VALUES ('11', '4');
INSERT INTO `tinduan_duancap4` VALUES ('11', '5');
INSERT INTO `tinduan_duancap4` VALUES ('12', '1');
INSERT INTO `tinduan_duancap4` VALUES ('12', '2');
INSERT INTO `tinduan_duancap4` VALUES ('13', '1');
INSERT INTO `tinduan_duancap4` VALUES ('13', '2');
INSERT INTO `tinduan_duancap4` VALUES ('14', '1');
INSERT INTO `tinduan_duancap4` VALUES ('14', '2');
INSERT INTO `tinduan_duancap4` VALUES ('14', '3');
INSERT INTO `tinduan_duancap4` VALUES ('14', '4');
INSERT INTO `tinduan_duancap4` VALUES ('14', '5');
INSERT INTO `tinduan_duancap4` VALUES ('15', '1');
INSERT INTO `tinduan_duancap4` VALUES ('15', '2');
INSERT INTO `tinduan_duancap4` VALUES ('17', '1');
INSERT INTO `tinduan_duancap4` VALUES ('17', '2');
INSERT INTO `tinduan_duancap4` VALUES ('17', '3');
INSERT INTO `tinduan_duancap4` VALUES ('17', '4');
INSERT INTO `tinduan_duancap4` VALUES ('18', '1');
INSERT INTO `tinduan_duancap4` VALUES ('18', '2');
INSERT INTO `tinduan_duancap4` VALUES ('18', '3');
INSERT INTO `tinduan_duancap4` VALUES ('18', '4');
INSERT INTO `tinduan_duancap4` VALUES ('18', '5');
INSERT INTO `tinduan_duancap4` VALUES ('22', '1');
INSERT INTO `tinduan_duancap4` VALUES ('22', '2');
INSERT INTO `tinduan_duancap4` VALUES ('22', '3');
INSERT INTO `tinduan_duancap4` VALUES ('22', '4');
INSERT INTO `tinduan_duancap4` VALUES ('22', '5');
INSERT INTO `tinduan_duancap4` VALUES ('23', '1');
INSERT INTO `tinduan_duancap4` VALUES ('23', '2');
INSERT INTO `tinduan_duancap4` VALUES ('23', '3');
INSERT INTO `tinduan_duancap4` VALUES ('23', '4');

-- ----------------------------
-- Table structure for tinduan_photo
-- ----------------------------
DROP TABLE IF EXISTS `tinduan_photo`;
CREATE TABLE `tinduan_photo` (
  `id` bigint(21) NOT NULL AUTO_INCREMENT,
  `tin_du_an_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinduan_photo
-- ----------------------------
INSERT INTO `tinduan_photo` VALUES ('4', '17', '1106fdf25cea71a6389bf3b606fcb95a.jpeg');
INSERT INTO `tinduan_photo` VALUES ('5', '17', 'b4acc9b7bfa33f5497b342700cf552ff.jpeg');
INSERT INTO `tinduan_photo` VALUES ('7', '18', 'b3ff95c38f2f766b519157f921bdc341.jpeg');
INSERT INTO `tinduan_photo` VALUES ('8', '18', '4ee400f0bf25a7e8e195cb3d02fa2fde.jpeg');
INSERT INTO `tinduan_photo` VALUES ('9', '18', 'd48be64a765f120d66753c332740af80.jpeg');
INSERT INTO `tinduan_photo` VALUES ('10', '18', 'ae91bc303b278bfd51804a6f60f9a947.jpeg');
INSERT INTO `tinduan_photo` VALUES ('11', '18', '7a690baf3ff90824e0a878bd445547bb.jpeg');
INSERT INTO `tinduan_photo` VALUES ('12', '19', 'add6073a63d8117fe9c2bcb8b34b0fa8.jpeg');
INSERT INTO `tinduan_photo` VALUES ('13', '19', '81ebdd914e1092bcb4bfd8c24a3e8e6b.jpeg');
INSERT INTO `tinduan_photo` VALUES ('14', '19', '704de6fdd88d14c89e56682e3ab01cfc.jpeg');
INSERT INTO `tinduan_photo` VALUES ('15', '20', '5c49acdb6c97ba192d342d5a7cf94ca5.jpg');
INSERT INTO `tinduan_photo` VALUES ('16', '20', '58d04e1e3fdde4c94cf5db94aa45ece8.jpg');
INSERT INTO `tinduan_photo` VALUES ('17', '22', '1a309f7ec6256bd7e1a9c7973ba48ff4.png');
INSERT INTO `tinduan_photo` VALUES ('18', '22', '5fcedb1dda16ba79924920ef1d94c021.png');
INSERT INTO `tinduan_photo` VALUES ('19', '22', '6f4b28884d3cc617d05fa38b9152dc30.jpg');
INSERT INTO `tinduan_photo` VALUES ('20', '24', 'd582719327b6b140a54fc871e75cddbc.png');
INSERT INTO `tinduan_photo` VALUES ('21', '24', '86947c9ef62c460b408649405cae2649.jpg');
INSERT INTO `tinduan_photo` VALUES ('22', '24', '1f265f80d9dddc638e9973ef1ad69bb3.jpg');

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
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('1', '10');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('2', '13');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('3', '10');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('3', '11');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('3', '12');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('3', '13');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('4', '1');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('4', '2');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('4', '3');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('4', '4');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('4', '5');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('4', '6');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('4', '7');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('4', '8');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('4', '9');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('5', '10');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('5', '11');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('5', '12');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('5', '13');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('5', '14');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('5', '15');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('5', '16');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('5', '17');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('6', '10');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('6', '11');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('6', '12');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('6', '13');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('6', '15');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('6', '16');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('7', '1');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('7', '2');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('7', '6');

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
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('3', '7');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('5', '7');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('6', '7');

-- ----------------------------
-- Table structure for tinnhathauthicong_photo
-- ----------------------------
DROP TABLE IF EXISTS `tinnhathauthicong_photo`;
CREATE TABLE `tinnhathauthicong_photo` (
  `id` bigint(21) NOT NULL AUTO_INCREMENT,
  `tin_nha_thau_thi_cong_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinnhathauthicong_photo
-- ----------------------------
INSERT INTO `tinnhathauthicong_photo` VALUES ('1', '5', 'ad353061c0d258b4f367ac4a28894474.jpeg');
INSERT INTO `tinnhathauthicong_photo` VALUES ('2', '6', 'ed695dbcb9ba1f0cfa0fb19990acd2eb.jpg');
INSERT INTO `tinnhathauthicong_photo` VALUES ('3', '6', '33c2de9613c6147c3122101b6e5a3419.jpg');
INSERT INTO `tinnhathauthicong_photo` VALUES ('4', '6', '38e1fd11a84deeb3b8dfdf1f9ceb2252.jpg');
INSERT INTO `tinnhathauthicong_photo` VALUES ('7', '7', '3b3e7c699dd0107bf92111cd90054358.jpg');
INSERT INTO `tinnhathauthicong_photo` VALUES ('8', '7', '69ecb7d2df0fdf38b71b6043622c6020.jpg');
INSERT INTO `tinnhathauthicong_photo` VALUES ('9', '7', 'c3cf60a4d294c477300fce7dcd95e849.jpg');
INSERT INTO `tinnhathauthicong_photo` VALUES ('10', '8', 'fcc4cdd5883f7ae44beb8f9de205c1c9.jpg');
INSERT INTO `tinnhathauthicong_photo` VALUES ('11', '8', '85e3565181582c867611af20ad1a45aa.jpg');
INSERT INTO `tinnhathauthicong_photo` VALUES ('12', '8', 'd40b925aea2bc50b2598ab1316b108b3.jpg');

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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tin_du_an
-- ----------------------------
INSERT INTO `tin_du_an` VALUES ('1', 'Sân vườn', 'Vật liệu gạch không nung\r\nHồ dầu\r\nVữa\r\n....', null, '2018-07-12 11:59:38', '0000-00-00 00:00:00', '1', '2', '2018-07-16 04:00:00', '1', '1', null, '2', '0', '700 triệu', '3', null, '1', '1', '1', '0', '1', '1', null);
INSERT INTO `tin_du_an` VALUES ('2', 'Làn nhà 4 tầng ', 'Nhà 4 tầng 2 mặt tiền gồm các hạng mục:\r\n- thiết kế\r\n- Xin giấy phép thi công\r\n- thi công phần thô\r\n- Thi công nội ngoại thất\r\n- Trang trí sân vườn', null, '2018-07-12 15:33:04', '0000-00-00 00:00:00', '25', '2', '2018-07-18 04:00:00', '1', '1', null, '1', '0', '2 tỷ', null, null, '1', '1', '1', null, null, '0', null);
INSERT INTO `tin_du_an` VALUES ('3', 'Bộ Xây dựng: Triển khai nhiều nhiệm vụ trọng tâm 6 tháng cuối năm', 'Xây dựng) - Sáng 24/7 tại Hà Nội, Bộ Xây dựng đã tổ chức Hội nghị giao ban “Tình hình thực hiện nhiệm vụ 6 tháng đầu năm và triển khai nhiệm vụ công tác 6 tháng cuối năm 2018”. Bộ trưởng Bộ X', null, '2018-07-27 00:53:23', '0000-00-00 00:00:00', '1', '2', '2018-07-28 04:00:00', '1', '6', null, '1', '2', '900 triệu', null, null, '1', '1', '1', '1', null, '11', '4.00');
INSERT INTO `tin_du_an` VALUES ('4', 'Cần thiết kế thi công nhà trọn gói, tiêu chuẩn quốc tế', 'Nhằm hưởng ứng Tháng hành động về An toàn, vệ sinh lao động năm 2018, với mục đích hướng dẫn, tuyên truyền nâng cao nhận thức công tác đảm bảo an toàn, vệ sinh lao động tại các công trình xây dự', null, '2018-07-27 18:06:29', '0000-00-00 00:00:00', '28', '2', '2018-07-30 04:00:00', '1', '4', null, '2', '10', '190 tỷ', null, null, '1', '1', '1', '1', '0', '4', '4.00');
INSERT INTO `tin_du_an` VALUES ('5', 'Thi công hệ thống thoát nước khu tái định cư', 'Nâng cấp hệ thống thoát nướ:\r\n- Mương\r\n- Bó vỉa\r\n- Vỉa hè\r\n- Kè taluy\r\n...', null, '2018-07-28 11:01:41', '0000-00-00 00:00:00', '28', '2', '2018-07-30 04:00:00', '1', '2', null, '2', '11', '1,5 tỷ', null, null, '1', '1', '1', '0', null, '3', null);
INSERT INTO `tin_du_an` VALUES ('6', 'Text 2', 'Abf ggshus đihgs hdhhe\r\nNdgisyfe\r\nJshhss đuhh ihsh dhegve \r\nHsyhsv hshh\r\n', null, '2018-07-28 11:06:20', '0000-00-00 00:00:00', '28', '2', '2018-07-31 04:00:00', '1', '2', null, '1', '3', '600 triệu', null, null, '1', '1', '1', '1', null, '7', null);
INSERT INTO `tin_du_an` VALUES ('7', 'Gggg', 'Ggff gdf hhg\r\nChhf hhf', null, '2018-07-28 18:28:47', '0000-00-00 00:00:00', '1', '2', '2018-07-28 04:00:00', '1', null, null, '3', '0', '600', null, null, null, null, '1', null, null, '5', null);
INSERT INTO `tin_du_an` VALUES ('8', 'Cần xây nhà 3 tầng biệt thự theo mẫu', 'Bhuwng hutts hhsys shctts. Ýhtua ugsfhd\r\nÝhgsyg ýhysshh \r\nDhshhs\r\nBhshshs suhshhe shushhe hheghd hdhhsvsbus hshsg\r\n- gsys hgshs\r\n- gáyvs hsfsg sgsvvs', null, '2018-07-29 11:41:40', '0000-00-00 00:00:00', '1', '2', '2018-07-29 04:00:00', '1', '4', null, '1', '2', '5 tỷ', null, null, '1', '1', '1', '0', null, '1', '4.00');
INSERT INTO `tin_du_an` VALUES ('9', 'Mới 1', 'Chuyên chýyys \r\nHzguay hýygs \r\nHhsgys hghsg\r\nShsgs\r\n Hshs', null, '2018-07-29 11:44:12', '0000-00-00 00:00:00', '1', '2', '2018-07-29 04:00:00', '1', null, null, '1', '1', '4 tỷ 500 triệu', null, null, '1', '1', '1', '0', '0', '0', null);
INSERT INTO `tin_du_an` VALUES ('10', 'Dũng 2', 'Ahgfs \r\nHggs\r\nSgggs\r\nGggs', null, '2018-07-29 11:59:55', '0000-00-00 00:00:00', '1', '2', '2018-07-29 04:00:00', '1', null, null, '1', '1', '200 tr', null, null, '1', '1', '1', '1', '1', '1', null);
INSERT INTO `tin_du_an` VALUES ('11', 'Dũng 3', 'sá asd sad á', null, '2018-07-29 12:04:08', '0000-00-00 00:00:00', '1', '2', '2018-07-29 04:00:00', '1', null, null, '1', '1', '500 triệu', null, null, '1', '1', '1', '1', '1', '2', null);
INSERT INTO `tin_du_an` VALUES ('12', 'Dũng 4', 'sdfsdfsd', null, '2018-07-29 12:09:02', '0000-00-00 00:00:00', '1', '2', '0000-00-00 00:00:00', '1', null, null, '1', '1', '500 triệu ', null, null, null, null, '1', '1', '1', '6', null);
INSERT INTO `tin_du_an` VALUES ('13', 'test ảnh', 'sdfsd  sdf df s', null, '2018-07-29 12:15:38', '0000-00-00 00:00:00', '31', '3', '2018-07-29 04:00:00', '1', null, null, '1', '1', '500 triệu', null, null, null, null, '1', '1', null, '1', '5.00');
INSERT INTO `tin_du_an` VALUES ('14', 'Thy 1', 'Có khi nào\r\nAnh ngồi\r\nĐh\r\nHfgjs hfsh jfsh\r\n', null, '2018-07-29 19:03:22', '0000-00-00 00:00:00', '28', '2', '2018-07-29 04:00:00', '1', '1', null, '1', '1', '50 tỷ', null, null, '1', '1', '1', '1', '1', '1', null);
INSERT INTO `tin_du_an` VALUES ('16', 'Hffs hff shgs uayvs hstgs', 'Hgfs hsggs sjgs jsgys jsgsy skgsw\r\nHsfyss súgs jsyvs hsyys jggs íyvw usshs\r\nSjsgs sưud sue\r\nShggs\r\nDhggs shgsugs\r\n', null, '2018-07-29 19:50:14', '0000-00-00 00:00:00', '1', '2', '2018-07-29 04:00:00', '1', '1', null, '2', '11', '300 triệu', null, null, null, null, '1', '1', '1', '0', null);
INSERT INTO `tin_du_an` VALUES ('17', 'Xây dựng nhà cấp 4 Xây dựng nhà cấp 4 Xây dựng nhà cấp 4g nhà cấp 4 Xây dựng nhà cấp 4', 'Nhà 2 tầng\r\nCó san thượng\r\n3 phòng ngủ\r\n1 phòng khách - bếp\r\nPhòng thờ tầng 2', null, '2018-07-29 21:30:20', '0000-00-00 00:00:00', '1', '2', '2018-07-31 04:00:00', '1', '4', null, '1', '1', '900 triệu', null, null, '1', '1', '1', '1', '1', '12', '4.00');
INSERT INTO `tin_du_an` VALUES ('18', 'Sân vườn', 'Làm như hình trên\r\nThiết kế lại bố cục\r\nChấn liệu', null, '2018-07-29 22:14:53', '0000-00-00 00:00:00', '1', '2', '2018-07-31 04:00:00', '1', '1', null, '1', '1', '10 triệu', null, null, '1', '1', '1', '1', '1', '10', '3.00');
INSERT INTO `tin_du_an` VALUES ('19', 'Thi công gói hạ tầng thoát nước', 'Hệ thống giao thông thoát nước công trình tái định cư\r\nKhu dân xư mới\r\n', null, '2018-07-30 12:17:57', '0000-00-00 00:00:00', '1', '2', '2018-07-30 04:00:00', '1', null, null, '2', '10', '800 triẹu', null, null, '1', '1', '1', '1', '1', '2', '0.00');
INSERT INTO `tin_du_an` VALUES ('20', 'Mở đấu thầu gói thầu hoàn thiện xây dựng ME', 'Dear đơn vị nhà thầu\r\nBên mình chủ đầu tư IDMC hiện tại đang chào thầu gói hoàn thiện xây dựng &ME. \r\nKhối lượng khoảng 9000 m2 mặt bằng. \r\nCác nhà thầu quan tâm có thể đến mua hồ sơ thầu ở địa', null, '2018-07-30 19:42:52', '0000-00-00 00:00:00', '28', '2', '2018-07-30 04:00:00', '1', null, null, '2', '11', 'Khối lượng khoảng 9000 m2 mặt bằng', null, null, '1', null, '1', null, null, '2', '5.00');
INSERT INTO `tin_du_an` VALUES ('21', 'Dự án Phú Gia ngầm goá cáp quang', 'Dự án:\r\nĐào hệ thống mương : 2500 m\r\nCấp ống nhưng vàng 6m loại 1,2 ly: 5000 m\r\nThi công hố cáp : 70 hố\r\nThời gian thi công 30 ngày', null, '2018-08-05 00:25:10', '0000-00-00 00:00:00', '1', '2', '2018-08-08 04:00:00', '1', '2', null, '2', '13', '700 triệu', null, null, null, null, null, null, null, '0', null);
INSERT INTO `tin_du_an` VALUES ('22', 'ồ Dũng Hiệp, Tổ trưởng Tổ dân phố 30B', 'Ông Hồ Dũng Hiệp, Tổ trưởng Tổ dân phố 30B, phường Thịnh Liệt, quận Hoàng Mai cho biết, do chất lượng thi công không đảm bảo, nên 7 nhà sinh hoạt cộng đồng trong tổng số 10 nhà không có khả năng s', null, '2018-08-05 08:29:29', '0000-00-00 00:00:00', '1', '2', '2018-08-28 04:00:00', '1', null, null, '1', '1', '500 triệu', null, null, null, null, null, null, null, '0', null);
INSERT INTO `tin_du_an` VALUES ('23', 'Xuất siêu 2,34 tỷ USD sang Vương quốc Anh', 'Cập nhật hết tháng 6, tổng kim ngạch xuất nhập khẩu của Việt Nam và Vương quốc Anh đạt 3,12 tỷ USD, tăng 14,2% so với cùng kỳ năm 2017.\r\nTrong đó, trị giá xuất khẩu hàng hóa Việt Nam là 2,73 tỷ USD, t', null, '2018-08-05 08:31:30', '0000-00-00 00:00:00', '1', '2', '2018-08-13 04:00:00', '1', null, null, '1', '1', '600 triệu', null, null, null, null, null, null, null, '0', null);

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tin_nha_thau_thi_cong
-- ----------------------------
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('1', 'Đội thi công bê tông chuyên nghiệp', 'Chuyên:\r\n- Sàn, đường, mương, bó vỉa,...\r\n- Công trình hạ tầng, cao tầng, nhà dân,...\r\nĐồ nghề dụng cụ thi công đầy đủ, chuyên nghiệp\r\n', null, '2018-07-19 01:54:40', '0000-00-00 00:00:00', '25', '2', '2018-07-20 04:00:00', '1', null, null, '1', '2', '2', '30 người', null, null, null, '1', '1', '1', null, '0', '0.00');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('2', 'Text', 'Abc dđghmn', null, '2018-07-19 01:59:36', '0000-00-00 00:00:00', '25', '2', '2018-07-20 04:00:00', '1', null, null, '1', '2', '2', '20 nhân công ', null, null, '1', '1', '1', null, '1', '0', '0.00');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('3', 'sgsd', 'agagafaf\r\na\r\n\r\n\r\nag\r\nà\r\naefg\r\nsẻgrwe', null, '2018-07-28 16:50:53', '0000-00-00 00:00:00', '1', '2', '2018-07-29 04:00:00', '1', null, null, '1', '2', '2', 'agergesr', null, null, '1', '1', '1', '0', '0', '0', '0.00');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('4', 'Công TNHH Xây Dựng An Thành Tín', 'Đơn vị chúng tôi là nhà thầu tư vấn - thiết kế - thi công về lĩnh vực xây dựng:\r\n- Hiện tại chung tôi đang thi công các gói thầu thuộc đầu tư cấp nhà nước, nước ngoài và nhưng dự án có mức độ', null, '2018-07-28 18:08:23', '0000-00-00 00:00:00', '1', '2', '2018-07-28 04:00:00', '1', null, null, '1', '1', '2', '500 nhân lực chuyên', null, null, null, null, '1', '0', '1', '2', '4.00');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('5', 'Text hình', 'Làm rất toits\r\nGgfs\r\nHầy hgshs hahvs \r\nHsggs shsg hg \r\n', null, '2018-07-29 19:46:51', '0000-00-00 00:00:00', '1', '2', '2018-07-31 04:00:00', '1', null, null, '1', '2', '1', '50 thợ xây', null, null, null, null, '1', '1', '1', '1', '0.00');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('6', 'Tìm các nhà thầu phụ thi công nhả xưởng', 'Thông tin yêu cầu\r\nChào anh em!\r\nMình đang có con nhà xưởng như hình \r\nCần tìm các thầu phụ anh em nào muốn chiến thì liên hệ nhé', null, '2018-07-30 19:24:27', '0000-00-00 00:00:00', '28', '2', '2018-07-31 04:00:00', '1', null, null, '1', '2', '2', '20 nhân lực chuyên hạ tầng', null, null, '1', '1', '1', '1', '1', '7', '4.00');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('7', 'Tìm nhà thầu thi công bể bơi gia đình', 'Thông tin yêu cầu\r\nChào các anh em tổ đội/ nhà thầu:\r\n\r\nTôi cần tìm nhà thầu có kinh nghiệm thi công bể bơi gia đình ngoài trời.\r\n\r\nTôi là chủ nhà, tôi ở thành phố Vũng Tàu\r\n\r\nVậy nhà thầu nào làm đư', null, '2018-07-30 19:29:26', '0000-00-00 00:00:00', '28', '2', '2018-07-30 04:00:00', '1', null, null, '1', '1', '2', 'Đội thi công chuyên bể bơi', null, null, '1', '1', '1', '1', '1', '13', '4.00');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('8', 'Nhà chung cư tái định cư ở Hà Nội đang bị bỏ rơi?', 'Có thể nói, chung cư tái định cư là “điểm đen” của Hà Nội về chất lượng công trình xây dựng và quản lý đô thị. Bởi, không ít tòa nhà, khu chung cư tái định cư dù được đưa vào sử dụng chư', null, '2018-08-05 07:41:33', '0000-00-00 00:00:00', '1', '2', '2018-08-21 04:00:00', '1', null, null, '1', '0', '1', '30 nhân lực', null, null, null, null, '1', null, '1', '4', '0.00');

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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'anh ', 'Dũng', '', '0971553559', '7c4a8d09ca3762af61e59520943dc26494f8941b', '1', '1', null, '0');
INSERT INTO `user` VALUES ('27', null, null, null, '0905123456', '7c4a8d09ca3762af61e59520943dc26494f8941b', '4', '1', null, '0');
INSERT INTO `user` VALUES ('28', null, 'dohuudung', null, '0913403178', '2fcaffbcb66f8eaa921e62f1623e26ee9a3912d2', '2', '1', null, '0');
INSERT INTO `user` VALUES ('29', null, null, null, '0933313806', '7c4a8d09ca3762af61e59520943dc26494f8941b', '4', '1', null, '0');
INSERT INTO `user` VALUES ('30', null, null, null, '1', '356a192b7913b04c54574d18c28d46e6395428ab', '3', '1', null, '0');
INSERT INTO `user` VALUES ('31', null, null, null, '0905022640', '7c4a8d09ca3762af61e59520943dc26494f8941b', '3', '1', null, '0');
INSERT INTO `user` VALUES ('32', null, null, null, '0938118709', '7e6081a3b0e59c2189f353a16716a59258e7686e', '3', '1', '3', '0');

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
INSERT INTO `user_duan` VALUES ('1', '24');
INSERT INTO `user_duan` VALUES ('1', '25');
INSERT INTO `user_duan` VALUES ('1', '26');
INSERT INTO `user_duan` VALUES ('1', '28');
INSERT INTO `user_duan` VALUES ('2', '24');
INSERT INTO `user_duan` VALUES ('2', '25');
INSERT INTO `user_duan` VALUES ('2', '26');
INSERT INTO `user_duan` VALUES ('2', '28');
INSERT INTO `user_duan` VALUES ('3', '24');
INSERT INTO `user_duan` VALUES ('3', '25');
INSERT INTO `user_duan` VALUES ('3', '26');
INSERT INTO `user_duan` VALUES ('3', '28');
INSERT INTO `user_duan` VALUES ('4', '25');
INSERT INTO `user_duan` VALUES ('4', '28');
INSERT INTO `user_duan` VALUES ('5', '25');
INSERT INTO `user_duan` VALUES ('5', '28');
INSERT INTO `user_duan` VALUES ('6', '25');
INSERT INTO `user_duan` VALUES ('6', '28');
INSERT INTO `user_duan` VALUES ('7', '25');
INSERT INTO `user_duan` VALUES ('7', '28');
INSERT INTO `user_duan` VALUES ('8', '25');
INSERT INTO `user_duan` VALUES ('8', '28');
INSERT INTO `user_duan` VALUES ('9', '25');
INSERT INTO `user_duan` VALUES ('9', '28');

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
INSERT INTO `user_nhathauthicong` VALUES ('1', '24');
INSERT INTO `user_nhathauthicong` VALUES ('1', '25');
INSERT INTO `user_nhathauthicong` VALUES ('1', '26');
INSERT INTO `user_nhathauthicong` VALUES ('1', '28');
INSERT INTO `user_nhathauthicong` VALUES ('2', '24');
INSERT INTO `user_nhathauthicong` VALUES ('2', '25');
INSERT INTO `user_nhathauthicong` VALUES ('2', '26');
INSERT INTO `user_nhathauthicong` VALUES ('2', '28');
INSERT INTO `user_nhathauthicong` VALUES ('3', '24');
INSERT INTO `user_nhathauthicong` VALUES ('3', '25');
INSERT INTO `user_nhathauthicong` VALUES ('3', '26');
INSERT INTO `user_nhathauthicong` VALUES ('3', '28');
INSERT INTO `user_nhathauthicong` VALUES ('4', '24');
INSERT INTO `user_nhathauthicong` VALUES ('4', '25');
INSERT INTO `user_nhathauthicong` VALUES ('4', '26');
INSERT INTO `user_nhathauthicong` VALUES ('4', '28');

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
INSERT INTO `vote_nhathauthicong` VALUES ('5', '8', '2');

-- ----------------------------
-- View structure for view_tin
-- ----------------------------
DROP VIEW IF EXISTS `view_tin`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `view_tin` AS select DATE_FORMAT(tin_du_an.created_at,'%d/%m/%Y') AS created_at,vote,so_luot_xem,`user`.type_active,`user`.allow_hoptac,title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,
tong_dau_tu,
photo,is_quang_cao,allow_show_quang_cao,
phone,user.type,tin_du_an.user_id,
'' as phan_loai,
tin_du_an.id,
tin_du_an.du_an_cap_1 as cap_1,
tin_du_an.du_an_cap_2 as cap_2,
target_type,city_cap_1,city_cap_2,is_active,'du_an' as type_tin,tin_du_an.status,tin_du_an.is_hot from tin_du_an join user on user.id=tin_du_an.user_id left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id group by tin_du_an.id 
UNION 
select DATE_FORMAT(tin_nha_thau_thi_cong.created_at,'%d/%m/%Y') AS created_at,vote,so_luot_xem,`user`.type_active,`user`.allow_hoptac,title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,
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
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `view_tin_du_an` AS select vote,so_luot_xem,`user`.type_active,`user`.allow_hoptac, title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,tong_dau_tu,photo,is_quang_cao,allow_show_quang_cao,phone,user.type,tin_du_an.id,tin_du_an.du_an_cap_1,tin_du_an.du_an_cap_2,target_type,city_cap_1,city_cap_2,is_active,tin_du_an.status,tin_du_an.is_hot,DATE_FORMAT(tin_du_an.created_at,'%d/%m/%Y') AS created_at,DATE_FORMAT(tin_du_an.created_at,'%d/%m/%Y') AS created_at1,tin_du_an.is_dich_vu_hau_mai from tin_du_an join user on user.id=tin_du_an.user_id left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id group by tin_du_an.id ;

-- ----------------------------
-- View structure for view_tin_nha_thau_thi_cong
-- ----------------------------
DROP VIEW IF EXISTS `view_tin_nha_thau_thi_cong`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `view_tin_nha_thau_thi_cong` AS select vote,so_luot_xem,`user`.type_active,`user`.allow_hoptac,dich_vu_thi_cong,title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,photo,is_quang_cao,allow_show_quang_cao,phone,user.type,phan_loai,tin_nha_thau_thi_cong.id,tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1,tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_2,target_type,is_active,tin_nha_thau_thi_cong.is_hot,DATE_FORMAT(tin_nha_thau_thi_cong.created_at,'%d/%m/%Y') AS created_at from tin_nha_thau_thi_cong join user on user.id=tin_nha_thau_thi_cong.user_id left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id group by tin_nha_thau_thi_cong.id ;

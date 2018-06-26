/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : giao_dich

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2018-06-26 11:57:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for city_cap_1
-- ----------------------------
DROP TABLE IF EXISTS `city_cap_1`;
CREATE TABLE `city_cap_1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `is_last` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'để xác định đây có phải là cấp cuối cùng hay không. Ví dụ như Thành Phố Nha Trang, hệ thống không tạo thêm khu vực con nào cho thành phố này như là phường, xã,...',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of city_cap_1
-- ----------------------------
INSERT INTO `city_cap_1` VALUES ('4', 'bắc trung bộ', '1');
INSERT INTO `city_cap_1` VALUES ('5', 'Đà Nẵng', '1');
INSERT INTO `city_cap_1` VALUES ('6', 'Lạng Sơn', '1');

-- ----------------------------
-- Table structure for city_cap_2
-- ----------------------------
DROP TABLE IF EXISTS `city_cap_2`;
CREATE TABLE `city_cap_2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `city_cap_1_id` int(11) DEFAULT NULL,
  `is_last` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'để xác định đây có phải là cấp cuối cùng hay không. Ví dụ như Thành Phố Nha Trang, hệ thống không tạo thêm khu vực con nào cho thành phố này như là phường, xã,...',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of city_cap_2
-- ----------------------------
INSERT INTO `city_cap_2` VALUES ('4', 'thừa thiên huế', '4', '1');
INSERT INTO `city_cap_2` VALUES ('5', 'Quảng Trị', '4', '1');
INSERT INTO `city_cap_2` VALUES ('6', 'Quận Thanh Khê', '5', '1');
INSERT INTO `city_cap_2` VALUES ('7', 'Quận Hải Châu', '5', '1');

-- ----------------------------
-- Table structure for city_cap_3
-- ----------------------------
DROP TABLE IF EXISTS `city_cap_3`;
CREATE TABLE `city_cap_3` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `city_cap_2_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of city_cap_3
-- ----------------------------
INSERT INTO `city_cap_3` VALUES ('4', 'thành phố Huế', '4');

-- ----------------------------
-- Table structure for cong_nhan_lao_dong_cap_1
-- ----------------------------
DROP TABLE IF EXISTS `cong_nhan_lao_dong_cap_1`;
CREATE TABLE `cong_nhan_lao_dong_cap_1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cong_nhan_lao_dong_cap_1
-- ----------------------------

-- ----------------------------
-- Table structure for cong_nhan_lao_dong_cap_2
-- ----------------------------
DROP TABLE IF EXISTS `cong_nhan_lao_dong_cap_2`;
CREATE TABLE `cong_nhan_lao_dong_cap_2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `cong_nhan_lao_dong_cap_1_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cong_nhan_lao_dong_cap_2
-- ----------------------------

-- ----------------------------
-- Table structure for cong_nhan_lao_dong_cap_3
-- ----------------------------
DROP TABLE IF EXISTS `cong_nhan_lao_dong_cap_3`;
CREATE TABLE `cong_nhan_lao_dong_cap_3` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `cong_nhan_lao_dong_cap_2_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cong_nhan_lao_dong_cap_3
-- ----------------------------

-- ----------------------------
-- Table structure for doi_tac
-- ----------------------------
DROP TABLE IF EXISTS `doi_tac`;
CREATE TABLE `doi_tac` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `other_infomation` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of doi_tac
-- ----------------------------

-- ----------------------------
-- Table structure for khach_hang
-- ----------------------------
DROP TABLE IF EXISTS `khach_hang`;
CREATE TABLE `khach_hang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `other_infomation` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of khach_hang
-- ----------------------------

-- ----------------------------
-- Table structure for nhan_vien
-- ----------------------------
DROP TABLE IF EXISTS `nhan_vien`;
CREATE TABLE `nhan_vien` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) NOT NULL,
  `password` varchar(500) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `other_infomation` text,
  `cong_nhan_lao_dong` tinyint(1) NOT NULL DEFAULT '1',
  `thiet_bi_vat_tu` tinyint(1) NOT NULL DEFAULT '1',
  `viec_can_lam` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nhan_vien
-- ----------------------------
INSERT INTO `nhan_vien` VALUES ('1', '54353453', '9a64e05ca4441081f24f05f94a7b79d5149247aa', null, null, '1', '1', '1');

-- ----------------------------
-- Table structure for thiet_bi_vat_tu_cap_1
-- ----------------------------
DROP TABLE IF EXISTS `thiet_bi_vat_tu_cap_1`;
CREATE TABLE `thiet_bi_vat_tu_cap_1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of thiet_bi_vat_tu_cap_1
-- ----------------------------

-- ----------------------------
-- Table structure for thiet_bi_vat_tu_cap_2
-- ----------------------------
DROP TABLE IF EXISTS `thiet_bi_vat_tu_cap_2`;
CREATE TABLE `thiet_bi_vat_tu_cap_2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `thiet_bi_vat_tu_cap_1_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of thiet_bi_vat_tu_cap_2
-- ----------------------------

-- ----------------------------
-- Table structure for thiet_bi_vat_tu_cap_3
-- ----------------------------
DROP TABLE IF EXISTS `thiet_bi_vat_tu_cap_3`;
CREATE TABLE `thiet_bi_vat_tu_cap_3` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `thiet_bi_vat_tu_cap_2_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of thiet_bi_vat_tu_cap_3
-- ----------------------------

-- ----------------------------
-- Table structure for tin_cong_nhan_lao_dong
-- ----------------------------
DROP TABLE IF EXISTS `tin_cong_nhan_lao_dong`;
CREATE TABLE `tin_cong_nhan_lao_dong` (
  `id` bigint(21) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` tinytext,
  `photo` varchar(255) DEFAULT NULL,
  `cong_nhan_lao_dong_id` int(11) DEFAULT NULL,
  `type` tinyint(1) DEFAULT NULL COMMENT '1: cung; 2: cầu',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `target_id` int(11) DEFAULT NULL COMMENT 'nhan_vien_id hoặc khach_hang_id hoặc doi_tac_id',
  `target_type` tinyint(1) DEFAULT NULL COMMENT '1: khách hàng; 2: nhân viên; 3: đối tác',
  `status` tinyint(1) DEFAULT NULL COMMENT '1: chưa giao dịch; 2: đang giao dịch; 3: hoàn thành giao dịch',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tin_cong_nhan_lao_dong
-- ----------------------------

-- ----------------------------
-- Table structure for tin_thiet_bi_vat_tu
-- ----------------------------
DROP TABLE IF EXISTS `tin_thiet_bi_vat_tu`;
CREATE TABLE `tin_thiet_bi_vat_tu` (
  `id` bigint(21) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` tinytext,
  `photo` varchar(255) DEFAULT NULL,
  `thiet_bi_vat_tu_id` int(11) DEFAULT NULL,
  `type` tinyint(1) DEFAULT NULL COMMENT '1: cung; 2: cầu',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `target_id` int(11) DEFAULT NULL COMMENT 'nhan_vien_id hoặc khach_hang_id hoặc doi_tac_id',
  `target_type` tinyint(1) DEFAULT NULL COMMENT '1: khách hàng; 2: nhân viên; 3: đối tác',
  `status` tinyint(1) DEFAULT NULL COMMENT '1: chưa giao dịch; 2: đang giao dịch; 3: hoàn thành giao dịch',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tin_thiet_bi_vat_tu
-- ----------------------------

-- ----------------------------
-- Table structure for tin_viec_lam
-- ----------------------------
DROP TABLE IF EXISTS `tin_viec_lam`;
CREATE TABLE `tin_viec_lam` (
  `id` bigint(21) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` tinytext,
  `photo` varchar(255) DEFAULT NULL,
  `viec_lam_id` int(11) DEFAULT NULL,
  `type` tinyint(1) DEFAULT NULL COMMENT '1: cung; 2: cầu',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `target_id` int(11) DEFAULT NULL COMMENT 'nhan_vien_id hoặc khach_hang_id hoặc doi_tac_id',
  `target_type` tinyint(1) DEFAULT NULL COMMENT '1: khách hàng; 2: nhân viên; 3: đối tác',
  `status` tinyint(1) DEFAULT NULL COMMENT '1: chưa giao dịch; 2: đang giao dịch; 3: hoàn thành giao dịch',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tin_viec_lam
-- ----------------------------
INSERT INTO `tin_viec_lam` VALUES ('1', 'sdf', 'sfs', 'sfsd', '1', '6', '2018-05-22 21:22:03', '2018-05-22 21:22:22', null, null, null);

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('3', 'anh ', 'Dũng', '', '0905022640', '7c4a8d09ca3762af61e59520943dc26494f8941b', '1', '1');

-- ----------------------------
-- Table structure for viec_can_lam_cap_1
-- ----------------------------
DROP TABLE IF EXISTS `viec_can_lam_cap_1`;
CREATE TABLE `viec_can_lam_cap_1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of viec_can_lam_cap_1
-- ----------------------------
INSERT INTO `viec_can_lam_cap_1` VALUES ('10', 'Dân dụng/cao tầng/biệt thự/nhà tiền chế/nhà xưởng/nhà dịch vụ(siêu thị, shop, nhà hàng, cafe, karaoke,…)', null, null, '0');

-- ----------------------------
-- Table structure for viec_can_lam_cap_2
-- ----------------------------
DROP TABLE IF EXISTS `viec_can_lam_cap_2`;
CREATE TABLE `viec_can_lam_cap_2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `viec_can_lam_cap_1_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of viec_can_lam_cap_2
-- ----------------------------
INSERT INTO `viec_can_lam_cap_2` VALUES ('1', 'Thiết kế', '10', null, null, '0');
INSERT INTO `viec_can_lam_cap_2` VALUES ('2', 'Phần thô', '10', null, null, '0');

-- ----------------------------
-- Table structure for viec_can_lam_cap_3
-- ----------------------------
DROP TABLE IF EXISTS `viec_can_lam_cap_3`;
CREATE TABLE `viec_can_lam_cap_3` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `viec_can_lam_cap_2_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name_show` varchar(255) DEFAULT NULL COMMENT 'field này dùng để hiển thị text tại front end.',
  `is_show_at_home_page` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'field này để quyết định mục này có hiển thị tại trang chủ hay không',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of viec_can_lam_cap_3
-- ----------------------------
INSERT INTO `viec_can_lam_cap_3` VALUES ('1', 'tư vấn1', '1', 'fbc21138353cd99bf7ec17e62a5e55cb.jpg', 'sefsdfsdfsd', '1');
INSERT INTO `viec_can_lam_cap_3` VALUES ('2', 'kiến trúc', '1', 'a792927f6c80bd2c1c783b1b01637a84.jpg', 'kien truc 1111111111', '1');

-- ----------------------------
-- View structure for hang_muc_hien_thi_at_home_page
-- ----------------------------
DROP VIEW IF EXISTS `hang_muc_hien_thi_at_home_page`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost`  VIEW `hang_muc_hien_thi_at_home_page` AS SELECT name_show,photo FROM viec_can_lam_cap_1 WHERE is_show_at_home_page=1 
UNION 
SELECT name_show,photo FROM viec_can_lam_cap_2 WHERE is_show_at_home_page=1 
UNION 
SELECT name_show,photo FROM viec_can_lam_cap_3 WHERE is_show_at_home_page=1 
UNION 
SELECT name_show,photo FROM cong_nhan_lao_dong_cap_1 WHERE is_show_at_home_page=1 
UNION 
SELECT name_show,photo FROM cong_nhan_lao_dong_cap_2 WHERE is_show_at_home_page=1 
UNION 
SELECT name_show,photo FROM cong_nhan_lao_dong_cap_3 WHERE is_show_at_home_page=1 
UNION 
SELECT name_show,photo FROM thiet_bi_vat_tu_cap_1 WHERE is_show_at_home_page=1 
UNION 
SELECT name_show,photo FROM thiet_bi_vat_tu_cap_2 WHERE is_show_at_home_page=1 
UNION 
SELECT name_show,photo FROM thiet_bi_vat_tu_cap_3 WHERE is_show_at_home_page=1 ;

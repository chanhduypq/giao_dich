/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : giao_dich

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2018-07-02 00:46:31
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of city_cap_2
-- ----------------------------
INSERT INTO `city_cap_2` VALUES ('1', 'Ngũ Hành Sơn', '1');
INSERT INTO `city_cap_2` VALUES ('2', 'Thanh Khê', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_cap_1
-- ----------------------------
INSERT INTO `du_an_cap_1` VALUES ('1', 'Dân dụng', null, null, null);
INSERT INTO `du_an_cap_1` VALUES ('2', 'Cao tầng', null, null, null);

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_cap_2
-- ----------------------------
INSERT INTO `du_an_cap_2` VALUES ('1', 'Nhà dân', '1', null, null, null);
INSERT INTO `du_an_cap_2` VALUES ('2', 'Nhà cao tầng', '1', null, null, null);

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_cap_3
-- ----------------------------
INSERT INTO `du_an_cap_3` VALUES ('1', 'Phần thô', '1', null, null, null);
INSERT INTO `du_an_cap_3` VALUES ('2', 'Phần hoàn thiện', '1', null, null, null);

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_cap_4
-- ----------------------------
INSERT INTO `du_an_cap_4` VALUES ('1', 'Sơn', '1', null, null, null);
INSERT INTO `du_an_cap_4` VALUES ('2', 'Cốt pha', '1', null, null, null);
INSERT INTO `du_an_cap_4` VALUES ('3', 'Thép', '1', null, null, null);

-- ----------------------------
-- Table structure for du_an_da_chon
-- ----------------------------
DROP TABLE IF EXISTS `du_an_da_chon`;
CREATE TABLE `du_an_da_chon` (
  `tin_du_an_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`tin_du_an_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_da_chon
-- ----------------------------
INSERT INTO `du_an_da_chon` VALUES ('1', '10');
INSERT INTO `du_an_da_chon` VALUES ('2', '10');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nha_thau_thi_cong_cap_1
-- ----------------------------
INSERT INTO `nha_thau_thi_cong_cap_1` VALUES ('3', '1', null, null, '0');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nha_thau_thi_cong_cap_2
-- ----------------------------
INSERT INTO `nha_thau_thi_cong_cap_2` VALUES ('3', '2', '3', null, null, '0');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nha_thau_thi_cong_cap_3
-- ----------------------------
INSERT INTO `nha_thau_thi_cong_cap_3` VALUES ('3', '3', '3', null, null, '0');

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nha_thau_thi_cong_cap_4
-- ----------------------------
INSERT INTO `nha_thau_thi_cong_cap_4` VALUES ('4', '4', '3', null, null, '0');
INSERT INTO `nha_thau_thi_cong_cap_4` VALUES ('5', '44', '3', null, null, '0');
INSERT INTO `nha_thau_thi_cong_cap_4` VALUES ('6', '444', '3', null, null, '0');

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
INSERT INTO `tinduan_duancap4` VALUES ('1', '1');
INSERT INTO `tinduan_duancap4` VALUES ('1', '2');
INSERT INTO `tinduan_duancap4` VALUES ('2', '1');
INSERT INTO `tinduan_duancap4` VALUES ('2', '2');
INSERT INTO `tinduan_duancap4` VALUES ('3', '1');
INSERT INTO `tinduan_duancap4` VALUES ('3', '2');
INSERT INTO `tinduan_duancap4` VALUES ('4', '1');
INSERT INTO `tinduan_duancap4` VALUES ('4', '2');
INSERT INTO `tinduan_duancap4` VALUES ('4', '3');
INSERT INTO `tinduan_duancap4` VALUES ('5', '1');
INSERT INTO `tinduan_duancap4` VALUES ('5', '2');
INSERT INTO `tinduan_duancap4` VALUES ('6', '1');
INSERT INTO `tinduan_duancap4` VALUES ('6', '2');
INSERT INTO `tinduan_duancap4` VALUES ('7', '1');
INSERT INTO `tinduan_duancap4` VALUES ('7', '2');

-- ----------------------------
-- Table structure for tinduan_photo
-- ----------------------------
DROP TABLE IF EXISTS `tinduan_photo`;
CREATE TABLE `tinduan_photo` (
  `id` bigint(21) NOT NULL AUTO_INCREMENT,
  `tin_du_an_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinduan_photo
-- ----------------------------
INSERT INTO `tinduan_photo` VALUES ('1', '2', '975302fab8235814330ea9b7c3ed33b6.jpg');
INSERT INTO `tinduan_photo` VALUES ('2', '3', '97248fc46908d574edf32ed7d309827d.jpg');
INSERT INTO `tinduan_photo` VALUES ('3', '4', '218ed970f735b481ddf5f92d0fca3d44.jpg');
INSERT INTO `tinduan_photo` VALUES ('4', '7', '96d9d3cf30b0dda6c9d34d71d06c277a.jpg');

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
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('1', '4');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('1', '6');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('2', '4');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('2', '5');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('2', '6');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('3', '4');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('3', '5');

-- ----------------------------
-- Table structure for tinnhathauthicong_photo
-- ----------------------------
DROP TABLE IF EXISTS `tinnhathauthicong_photo`;
CREATE TABLE `tinnhathauthicong_photo` (
  `id` bigint(21) NOT NULL AUTO_INCREMENT,
  `tin_nha_thau_thi_cong_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinnhathauthicong_photo
-- ----------------------------
INSERT INTO `tinnhathauthicong_photo` VALUES ('1', '1', '7b31e8c7053e6b34d704db2218454feb.jpg');

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
  `du_an_cap_3` int(11) DEFAULT NULL,
  `tong_dau_tu` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL COMMENT '1: chưa giao dịch; 2: đang giao dịch; 3: hoàn thành giao dịch',
  `is_delete` tinyint(1) DEFAULT NULL,
  `is_quang_cao` tinyint(1) DEFAULT NULL,
  `allow_show_quang_cao` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tin_du_an
-- ----------------------------
INSERT INTO `tin_du_an` VALUES ('1', 'ok man', 'sfsdfs', null, '2018-07-01 11:36:04', '2018-07-01 23:20:12', '3', '2', '2018-07-17 00:00:00', '2', null, null, '1', '1', '1', '500', null, null, '1', '1');
INSERT INTO `tin_du_an` VALUES ('2', 'ok man', 'sđfsdf', null, '2018-07-01 11:37:00', '2018-07-01 23:33:02', '3', '2', '2018-07-19 00:00:00', '1', '2', null, '1', '1', '1', '1 tỉ rưỡi', null, null, '1', '1');
INSERT INTO `tin_du_an` VALUES ('3', '1111111', 'dfsfđsds', null, '2018-07-01 12:08:08', '2018-07-01 12:08:08', '3', '2', '2018-07-24 00:00:00', '2', '2', null, '1', '1', '1', '500', null, null, null, null);
INSERT INTO `tin_du_an` VALUES ('4', '22222222', 'sfdffsd', null, '2018-07-01 12:09:44', '2018-07-01 12:09:44', '3', '2', '2018-07-31 00:00:00', '2', null, null, '1', '1', '1', '500', null, null, null, null);
INSERT INTO `tin_du_an` VALUES ('5', 'quang cáo', 'sdfsdfs', null, '2018-07-01 23:59:08', '2018-07-01 23:59:08', '10', '4', '2018-07-01 00:00:00', '1', '1', null, '1', '1', '1', '3 tỉ', null, null, null, null);
INSERT INTO `tin_du_an` VALUES ('6', 'quảng cáo nè', 'cvbbvb', null, '2018-07-02 00:01:00', '2018-07-02 00:01:00', '10', '4', '2018-07-02 00:00:00', '1', '1', null, '1', '1', '1', '30 tỉ', null, null, '1', null);
INSERT INTO `tin_du_an` VALUES ('7', 'khong quang cao', 'xvxvxcv', null, '2018-07-02 00:01:56', '2018-07-02 00:01:56', '10', '4', '2018-07-25 00:00:00', '2', null, null, '1', '1', '1', '20 triệu', null, null, null, null);

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
  `nha_thau_thi_cong_cap_3` int(11) DEFAULT NULL,
  `phan_loai` int(11) DEFAULT NULL COMMENT '1:nhân viên; 2: đối tác',
  `dich_vu_thi_cong` varchar(1000) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL COMMENT '1: chưa giao dịch; 2: đang giao dịch; 3: hoàn thành giao dịch',
  `is_delete` tinyint(1) DEFAULT NULL,
  `is_quang_cao` tinyint(1) DEFAULT NULL,
  `allow_show_quang_cao` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tin_nha_thau_thi_cong
-- ----------------------------
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('1', 'ok man o man', 'dsfdsfsfsfsfs', null, '2018-07-01 12:20:10', '2018-07-01 23:44:25', '3', '2', '2018-07-01 00:00:00', '1', '2', null, '3', '3', '3', '1', 'dịch vụ thi công', null, null, '1', '1');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('2', 'dfgdfgdfgdfgd', 'dgdfgdfgd', null, '2018-07-01 22:42:57', '2018-07-01 23:47:09', '10', '4', '2018-07-18 00:00:00', '1', '1', null, '3', '3', '3', '2', 'gdgdgd', null, null, '1', '1');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('3', 'quqngr cao nha thau', 'zzsdsadad', null, '2018-07-02 00:05:36', '2018-07-02 00:06:00', '10', '4', '2018-07-26 00:00:00', '1', '1', null, '3', '3', '3', '2', 'dsffsdf', null, null, '1', '1');

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
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('3', 'anh ', 'Dũng', '', '0905022640', '7c4a8d09ca3762af61e59520943dc26494f8941b', '1', '1');
INSERT INTO `user` VALUES ('10', null, null, null, '01269259744', '7c4a8d09ca3762af61e59520943dc26494f8941b', '4', '1');

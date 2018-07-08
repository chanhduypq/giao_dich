/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : giao_dich

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2018-07-09 01:45:12
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_cap_2
-- ----------------------------
INSERT INTO `du_an_cap_2` VALUES ('1', 'dân dụng con 1 1', '1', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('2', 'hạ tầng con 1', '2', null, null, '0');
INSERT INTO `du_an_cap_2` VALUES ('3', 'dân dụng con 1 2', '1', null, null, '0');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_cap_3
-- ----------------------------
INSERT INTO `du_an_cap_3` VALUES ('1', 'Dân dụng con 2', '1', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('2', 'Hạ tầng con 2', '2', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('3', 'a', '3', null, null, '0');
INSERT INTO `du_an_cap_3` VALUES ('4', 'sdfsfsfsdf', '1', null, null, '0');

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_cap_4
-- ----------------------------
INSERT INTO `du_an_cap_4` VALUES ('1', 'Dân dụng con 3 1', '1', null, null, '0');
INSERT INTO `du_an_cap_4` VALUES ('2', 'Dân dụng con 3 2', '1', null, null, '0');
INSERT INTO `du_an_cap_4` VALUES ('3', 'hạ tầng con 3 1', '2', null, null, '0');
INSERT INTO `du_an_cap_4` VALUES ('4', 'Hạ tầng con 3 2', '2', null, null, '0');
INSERT INTO `du_an_cap_4` VALUES ('5', 'a1', '3', null, null, '0');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nha_thau_thi_cong_cap_1
-- ----------------------------
INSERT INTO `nha_thau_thi_cong_cap_1` VALUES ('3', '1', null, null, '0');
INSERT INTO `nha_thau_thi_cong_cap_1` VALUES ('4', '2', null, null, '0');

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
INSERT INTO `tinduan_duancap3` VALUES ('7', '1');
INSERT INTO `tinduan_duancap3` VALUES ('7', '4');
INSERT INTO `tinduan_duancap3` VALUES ('8', '1');
INSERT INTO `tinduan_duancap3` VALUES ('8', '4');
INSERT INTO `tinduan_duancap3` VALUES ('9', '1');
INSERT INTO `tinduan_duancap3` VALUES ('9', '4');
INSERT INTO `tinduan_duancap3` VALUES ('10', '1');
INSERT INTO `tinduan_duancap3` VALUES ('10', '4');

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
INSERT INTO `tinduan_duancap4` VALUES ('5', '1');
INSERT INTO `tinduan_duancap4` VALUES ('5', '2');
INSERT INTO `tinduan_duancap4` VALUES ('7', '1');
INSERT INTO `tinduan_duancap4` VALUES ('7', '2');
INSERT INTO `tinduan_duancap4` VALUES ('8', '1');
INSERT INTO `tinduan_duancap4` VALUES ('8', '2');
INSERT INTO `tinduan_duancap4` VALUES ('9', '1');
INSERT INTO `tinduan_duancap4` VALUES ('9', '2');
INSERT INTO `tinduan_duancap4` VALUES ('10', '1');
INSERT INTO `tinduan_duancap4` VALUES ('10', '2');

-- ----------------------------
-- Table structure for tinduan_photo
-- ----------------------------
DROP TABLE IF EXISTS `tinduan_photo`;
CREATE TABLE `tinduan_photo` (
  `id` bigint(21) NOT NULL AUTO_INCREMENT,
  `tin_du_an_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinduan_photo
-- ----------------------------
INSERT INTO `tinduan_photo` VALUES ('1', '1', 'ad56312aa8953f9f8d55ae0b451650c5.jpg');
INSERT INTO `tinduan_photo` VALUES ('2', '2', '636fc95993490a701525f149720e343e.jpg');
INSERT INTO `tinduan_photo` VALUES ('3', '5', '09dee565310697a5d91417a58b5692dc.jpg');
INSERT INTO `tinduan_photo` VALUES ('4', '8', '808d7de4fe9699e937ea1f4f8542fffa.jpg');
INSERT INTO `tinduan_photo` VALUES ('5', '8', '3a44796a7a886cd857d586660bff39c5.jpg');

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
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('6', '3');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('7', '3');
INSERT INTO `tinnhathauthicong_nhathauthicongcap3` VALUES ('8', '3');

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
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('2', '4');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('2', '5');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('3', '4');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('3', '5');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('5', '4');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('5', '5');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('6', '4');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('6', '5');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('7', '4');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('7', '5');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('8', '4');
INSERT INTO `tinnhathauthicong_nhathauthicongcap4` VALUES ('8', '5');

-- ----------------------------
-- Table structure for tinnhathauthicong_photo
-- ----------------------------
DROP TABLE IF EXISTS `tinnhathauthicong_photo`;
CREATE TABLE `tinnhathauthicong_photo` (
  `id` bigint(21) NOT NULL AUTO_INCREMENT,
  `tin_nha_thau_thi_cong_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinnhathauthicong_photo
-- ----------------------------
INSERT INTO `tinnhathauthicong_photo` VALUES ('1', '1', '3a06f1c5aa183731a56d522a84743573.jpg');
INSERT INTO `tinnhathauthicong_photo` VALUES ('2', '3', '49cae612cc8d2595d2dac36d2c11b1cc.jpg');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tin_du_an
-- ----------------------------
INSERT INTO `tin_du_an` VALUES ('1', 'đây là tin của nhân viên Luân đăng', 'sfsdfds', null, '2018-07-03 14:57:04', '2018-07-08 13:49:09', '14', '2', '2018-07-03 00:00:00', '1', '1', null, '1', '1', '1 tỉ rưỡi', null, null, '1', '1', '1');
INSERT INTO `tin_du_an` VALUES ('2', 'đây là tin do khách hàng lựu đăng', 'gfdgdf', null, '2018-07-03 15:13:37', '2018-07-09 00:52:51', '16', '4', '2018-07-03 00:00:00', '1', '1', null, '1', '1', '4353', null, null, '1', '0', '1');
INSERT INTO `tin_du_an` VALUES ('3', 'sdffsfs', 'sfsfsd', null, '2018-07-05 22:31:27', '2018-07-08 16:34:32', '14', '2', '2018-07-19 00:00:00', '2', null, null, '1', '1', '500', null, null, '1', '1', '1');
INSERT INTO `tin_du_an` VALUES ('4', 'cgfdgd', 'fdgdgdfg', null, '2018-07-05 22:44:32', '2018-07-09 00:52:53', '14', '2', '2018-07-25 00:00:00', '1', '2', null, '1', '1', '1000', null, null, '1', '0', '1');
INSERT INTO `tin_du_an` VALUES ('5', 'tuetc', 'yêu cầu', null, '2018-07-06 23:51:56', '2018-07-08 16:34:26', '15', '2', '2018-07-06 00:00:00', '2', null, null, '1', '1', '10 tỉ', null, null, '1', '1', '1');
INSERT INTO `tin_du_an` VALUES ('6', '11111111111111111111', 'cxxcxc', null, '2018-07-07 22:23:07', '2018-07-08 16:34:36', '15', '2', '2018-07-24 00:00:00', null, null, null, '1', '3', 'cxc', null, null, '1', '1', '1');
INSERT INTO `tin_du_an` VALUES ('7', 'dự án cấp 3', 'xxvvcvxv', null, '2018-07-08 01:51:49', '2018-07-08 16:34:28', '1', '2', '2018-07-12 00:00:00', '2', null, null, '1', '1', '1000', null, null, '1', '1', '1');
INSERT INTO `tin_du_an` VALUES ('9', 'aaaaaaaaaaaaaaaaaaaaaaaaa', 'adasda', null, '2018-07-08 23:25:18', '2018-07-08 23:25:18', '18', '3', '2018-07-31 00:00:00', '1', '1', null, '1', '1', 'sadasdasda', null, null, null, null, null);
INSERT INTO `tin_du_an` VALUES ('10', 'huynh thi van', 'fhfhfhf', null, '2018-07-09 01:11:19', '2018-07-09 01:11:19', '22', '4', '2018-07-09 00:00:00', '1', '1', null, '1', '1', '1000', null, null, null, null, null);

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tin_nha_thau_thi_cong
-- ----------------------------
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('1', 'lựu đăng  trần      công tuệ   đây nè', 'sdfsdfsd', null, '2018-07-03 15:39:09', '2018-07-08 17:10:04', '16', '4', '2018-07-03 00:00:00', '1', '2', null, '4', '0', '1', 'sfsdfs', null, null, null, null, '1');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('2', 'rtretre', 'xdff', null, '2018-07-05 23:09:21', '2018-07-08 17:10:05', '14', '2', '2018-07-12 00:00:00', '1', '2', null, '3', '3', '1', 'dịch vụ thi công', null, null, null, null, '1');
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('3', 'gfhfghfg', 'cvcxvcx', null, '2018-07-05 23:09:43', '2018-07-05 23:09:43', '14', '2', '2018-07-25 00:00:00', '2', null, null, '3', '3', '1', 'sdfsdfsdfsd', null, null, null, null, null);
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('4', 'mệt quá', 'czxczcz', null, '2018-07-08 01:17:17', '2018-07-08 01:17:17', '1', '2', '0000-00-00 00:00:00', '1', '2', null, '3', '3', '1', null, null, null, null, null, null);
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('5', 'mệt quá nè', 'sfsdfs', null, '2018-07-08 01:20:30', '2018-07-08 01:20:30', '1', '2', '2018-07-08 00:00:00', '1', '1', null, '3', '3', '1', 'sdsdf', null, null, null, null, null);
INSERT INTO `tin_nha_thau_thi_cong` VALUES ('8', 'áddada', 'ádsada', null, '2018-07-08 23:26:12', '2018-07-08 23:26:12', '18', '3', '2018-07-26 00:00:00', '2', null, null, '3', '3', '1', 'ádsad', null, null, null, null, null);

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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'anh ', 'Dũng', '', '0971553559', '7c4a8d09ca3762af61e59520943dc26494f8941b', '1', '1');
INSERT INTO `user` VALUES ('14', null, 'Luân', null, '01269259744', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2', '1');
INSERT INTO `user` VALUES ('15', null, 'Tuệ', null, '0905022640', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2', '1');
INSERT INTO `user` VALUES ('16', null, null, null, '01286435303', '7c4a8d09ca3762af61e59520943dc26494f8941b', '4', '1');
INSERT INTO `user` VALUES ('17', null, 'Gia Phúc', null, '1', '356a192b7913b04c54574d18c28d46e6395428ab', '2', '1');
INSERT INTO `user` VALUES ('18', null, null, null, '0913403178', 'f7c3bc1d808e04732adf679965ccc34ca7ae3441', '3', '1');
INSERT INTO `user` VALUES ('19', null, 'Tâm', null, '0935348952', '0d5a2ea77c655974436fbcad3f380a6ef4e59831', '2', '1');
INSERT INTO `user` VALUES ('22', null, null, null, '0913404003', '7c4a8d09ca3762af61e59520943dc26494f8941b', '4', '1');

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
INSERT INTO `user_duan` VALUES ('1', '13');
INSERT INTO `user_duan` VALUES ('1', '15');
INSERT INTO `user_duan` VALUES ('1', '17');
INSERT INTO `user_duan` VALUES ('1', '19');
INSERT INTO `user_duan` VALUES ('1', '20');
INSERT INTO `user_duan` VALUES ('2', '14');
INSERT INTO `user_duan` VALUES ('2', '19');
INSERT INTO `user_duan` VALUES ('3', '19');
INSERT INTO `user_duan` VALUES ('4', '19');
INSERT INTO `user_duan` VALUES ('5', '19');
INSERT INTO `user_duan` VALUES ('6', '19');
INSERT INTO `user_duan` VALUES ('7', '19');
INSERT INTO `user_duan` VALUES ('8', '19');
INSERT INTO `user_duan` VALUES ('9', '19');

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
INSERT INTO `user_nhathauthicong` VALUES ('3', '13');
INSERT INTO `user_nhathauthicong` VALUES ('3', '15');
INSERT INTO `user_nhathauthicong` VALUES ('3', '19');
INSERT INTO `user_nhathauthicong` VALUES ('4', '14');
INSERT INTO `user_nhathauthicong` VALUES ('4', '19');
INSERT INTO `user_nhathauthicong` VALUES ('4', '20');

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
target_type,city_cap_1,city_cap_2,is_active,'du_an' as type_tin,tin_du_an.status from tin_du_an join user on user.id=tin_du_an.user_id left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id group by tin_du_an.id 
UNION 
select title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,
'' as tong_dau_tu,
photo,is_quang_cao,allow_show_quang_cao,
phone,user.type,tin_nha_thau_thi_cong.user_id,
phan_loai,
tin_nha_thau_thi_cong.id,
tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1 as cap_1,
tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_2 as cap_2,
target_type,'' as city_cap_1,'' as city_cap_2,is_active,'nha_thau_thi_cong' as type_tin,tin_nha_thau_thi_cong.status from tin_nha_thau_thi_cong join user on user.id=tin_nha_thau_thi_cong.user_id left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id group by tin_nha_thau_thi_cong.id ;

-- ----------------------------
-- View structure for view_tin_du_an
-- ----------------------------
DROP VIEW IF EXISTS `view_tin_du_an`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `view_tin_du_an` AS select title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,tong_dau_tu,photo,is_quang_cao,allow_show_quang_cao,phone,user.type,tin_du_an.id,tin_du_an.du_an_cap_1,tin_du_an.du_an_cap_2,target_type,city_cap_1,city_cap_2,is_active from tin_du_an join user on user.id=tin_du_an.user_id left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id group by tin_du_an.id ;

-- ----------------------------
-- View structure for view_tin_nha_thau_thi_cong
-- ----------------------------
DROP VIEW IF EXISTS `view_tin_nha_thau_thi_cong`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `view_tin_nha_thau_thi_cong` AS select title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,photo,is_quang_cao,allow_show_quang_cao,phone,user.type,phan_loai,tin_nha_thau_thi_cong.id,tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1,tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_2,target_type,is_active from tin_nha_thau_thi_cong join user on user.id=tin_nha_thau_thi_cong.user_id left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id group by tin_nha_thau_thi_cong.id ;

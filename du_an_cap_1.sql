/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : giao_dich

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2018-09-14 14:58:27
*/

SET FOREIGN_KEY_CHECKS=0;

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
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of du_an_cap_1
-- ----------------------------
INSERT INTO `du_an_cap_1` VALUES ('1', 'Dân dụng', null, null, '0', '2.jpg', 'cau-duong.png');
INSERT INTO `du_an_cap_1` VALUES ('2', 'Hạ tầng', null, null, '0', '3.jpg', 'ha-tang.png');
INSERT INTO `du_an_cap_1` VALUES ('3', 'Cầu đường', null, null, '0', '4.jpg', 'cau-duong.png');
INSERT INTO `du_an_cap_1` VALUES ('4', 'Hoàn thiện nội ngoại thất', null, null, '0', '5.jpg', 'hoan-thien-noi-ngoai-that.png');
INSERT INTO `du_an_cap_1` VALUES ('5', 'Kiến trúc', null, null, '0', '6.jpg', 'kien-truc.png');
INSERT INTO `du_an_cap_1` VALUES ('6', 'Điện nước', null, null, '0', '7.jpg', 'dien-nuoc.png');
INSERT INTO `du_an_cap_1` VALUES ('7', 'Sửa chữa', null, null, '0', '8.jpg', 'sua-chua.png');
INSERT INTO `du_an_cap_1` VALUES ('8', 'Cây xanh', null, null, '0', 'cay-xanh1.png', 'cay-xanh2.png');
INSERT INTO `du_an_cap_1` VALUES ('9', 'Dịch vụ vệ sinh', null, null, '0', 'dich-vu-ve-sinh1.png', 'dich-vu-ve-sinh2.png');

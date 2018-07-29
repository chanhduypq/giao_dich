/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : giao_dich

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2018-07-29 17:07:04
*/

SET FOREIGN_KEY_CHECKS=0;

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

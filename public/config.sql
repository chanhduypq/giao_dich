/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : giao_dich

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2018-07-29 11:21:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for config
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config` (
  `guide` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config
-- ----------------------------
INSERT INTO `config` VALUES ('<p>&aacute;dasdsa1</p>\r\n\r\n<p>dsf</p>\r\n\r\n<p>dsf</p>\r\n\r\n<p>dsf</p>\r\n\r\n<p>ds</p>\r\n\r\n<p>fsd</p>\r\n\r\n<p>f</p>\r\n\r\n<p>sd</p>\r\n');

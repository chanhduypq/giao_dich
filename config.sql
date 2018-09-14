/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : giao_dich

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2018-09-14 14:58:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for config
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config` (
  `guide` longtext,
  `image_nhathauthicong_1` varchar(255) DEFAULT NULL,
  `image_nhathauthicong_2` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config
-- ----------------------------
INSERT INTO `config` VALUES ('Chợ Tốt chính thức gia nhập thị trường Việt Nam vào đầu năm 2012,\r\n với mục đích tạo ra cho bạn một kênh rao vặt trung gian, \r\nkết nối người mua với người bán lại với nhau bằng những giao dịch cực kỳ đơn giản, tiện lợi, nhanh chóng, an toàn, mang đến hiệu quả bất ngờ.\r\nĐến nay, \r\nChợ Tốt tự hào là Website rao vặt được ưa chuộng hàng đầu Việt Nam. \r\nHơn hàng ngàn món hời từ Bất động sản, Nhà cửa, Xe cộ, Đồ điện tử, Thú cưng, Vật dụng cá nhân... đến tìm ', '1.jpg', 'nha-thau-thi-cong-2.png');

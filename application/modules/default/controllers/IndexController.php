<?php

class IndexController extends Core_Controller_Action {

    public function init() {
        parent::init();
        $this->view->headTitle('Xây dựng', true);
    }

    public function indexAction() {
    }
    public function duanAction() {
        $muc = $this->_getParam('muc');
        
        if ($muc == 'dan-dung') {
            $du_an_cap_1 = '1';
            $this->view->headTitle('Dự án - dân dụng', true);
        } else if ($muc == 'ha-tang') {
            $du_an_cap_1 = '2';
            $this->view->headTitle('Dự án - hạ tầng', true);
        } else if ($muc == 'cau-duong') {
            $du_an_cap_1 = '3';
            $this->view->headTitle('Dự án - cầu đường', true);
        } else if ($muc == 'hoan-thien-noi-ngoai-that') {
            $du_an_cap_1 = '4';
            $this->view->headTitle('Dự án - hoàn thiện nội ngoại thất', true);
        } else if ($muc == 'kien-truc') {
            $du_an_cap_1 = '5';
            $this->view->headTitle('Dự án - kiến trúc', true);
        } else if ($muc == 'dien-nuoc') {
            $du_an_cap_1 = '6';
            $this->view->headTitle('Dự án - điện nước', true);
        } else if ($muc == 'sua-chua') {
            $du_an_cap_1 = '7';
            $this->view->headTitle('Dự án - sửa chữa', true);
        } else if ($muc == 'cay-xanh') {
            $du_an_cap_1 = '8';
            $this->view->headTitle('Dự án - cây xanh', true);
        } else if ($muc == 'dich-vu-ve-sinh') {
            $du_an_cap_1 = '9';
            $this->view->headTitle('Dự án - dịch vụ vệ sinh', true);
        } else {
            $du_an_cap_1 = '0';
        }
        if ($du_an_cap_1 == '0') {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        $where = "tin_du_an.du_an_cap_1='$du_an_cap_1'";
        
        $muccap2 = $this->_getParam('muccap2', '0');
        if (ctype_digit($muccap2) && $muccap2 != '0') {
            $where .= " and tin_du_an.du_an_cap_2='$muccap2'";
        }
        $items= Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "title,"
                . "DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,"
                . "tong_dau_tu,"
                . "photo,"
                . "is_quang_cao,"
                . "allow_show_quang_cao,"
                . "phone,"
                . "tin_du_an.id "
                . "from tin_du_an "
                . "join user on user.id=tin_du_an.user_id "
                . "left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id "
                . "where $where "
                . "group by tin_du_an.id");
        $quangcao_items = array();

        if (is_array($items) && count($items) > 0) {
            foreach ($items as $item) {
                if ($item['is_quang_cao'] == '1' && $item['allow_show_quang_cao'] == '1') {
                    $quangcao_items[] = $item;
                }
            }
        }
        $this->view->items = $items;
        $this->view->quangcao_items = $quangcao_items;
        $this->view->muc = $muc;
        $this->view->du_an_cap_2s = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_2 where du_an_cap_1_id='$du_an_cap_1'");
        $this->view->du_an_cap_2_selected = $muccap2;

        //lấy danh sách dự án mà user đã chọn (user đã đăng nhập rồi)
        $du_an_da_chon_ids = Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "tin_du_an_id "
                . "from du_an_da_chon "
                . "where user_id='" . $this->getUserId() . "'");
        $temp = array();
        if (is_array($du_an_da_chon_ids) && count($du_an_da_chon_ids) > 0) {
            foreach ($du_an_da_chon_ids as $du_an_da_chon_id) {
                $temp[] = $du_an_da_chon_id['tin_du_an_id'];
            }
        }
        $this->view->du_an_da_chon_ids = $temp;
    }
    public function nhathauthicongAction() {
        $this->view->headTitle('Nhà thầu thi công', true);
        $muc = $this->_getParam('muc', '0');
        if (ctype_digit($muc) && $muc != '0') {
            $where = "tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1='$muc'";
        }
        else{
            $where = '1=1';
        }
        $items= Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "title,"
                . "DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,"
                . "photo,"
                . "is_quang_cao,"
                . "allow_show_quang_cao,"
                . "phone,"
                . "phan_loai,"
                . "tin_nha_thau_thi_cong.id "
                . "from tin_nha_thau_thi_cong "
                . "join user on user.id=tin_nha_thau_thi_cong.user_id "
                . "left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id "
                . "where $where "
                . "group by tin_nha_thau_thi_cong.id");
        $quangcao_items = array();

        if (is_array($items) && count($items) > 0) {
            foreach ($items as $item) {
                if ($item['is_quang_cao'] == '1' && $item['allow_show_quang_cao'] == '1') {
                    $quangcao_items[] = $item;
                }
            }
        }
        $this->view->items = $items;
        $this->view->quangcao_items = $quangcao_items;
        $this->view->muc_selected = $muc;
        $mucs = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_1");
        if(ctype_digit($muc) && $muc != '0'){
            foreach ($mucs as $m){
                if($m['id']==$muc){
                    $this->view->headTitle('Nhà thầu thi công - '.$m['name'], true);
                    break;
                }
            }
        }
        $this->view->mucs=$mucs;
    }
    public function duandetailAction() {
        if(!ctype_digit($this->_getParam('id'))){
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        $items= 
                Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select content,"
                        . "title,"
                        . "DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,"
                        . "tong_dau_tu,"
                        . "tinduan_photo.photo,"
                        . "tin_du_an.id,"
                        . "tin_du_an.user_id,"
                        . "user.phone,"
                        . "city_cap_1.name as city_cap_1,"
                        . "city_cap_2.name as city_cap_2,"
                        . "city_cap_3.name as city_cap_3, "
                        . "tin_du_an.du_an_cap_1 as du_an_cap_1_id,"
                        . "du_an_cap_1.name as du_an_cap_1,"
                        . "du_an_cap_2.name as du_an_cap_2,"
                        . "du_an_cap_3.name as du_an_cap_3 "
                        . "from tin_du_an "
                        . "join user on user.id=tin_du_an.user_id "
                        . "left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id "
                        . "left join city_cap_1 on city_cap_1.id=tin_du_an.city_cap_1 "
                        . "left join city_cap_2 on city_cap_2.id=tin_du_an.city_cap_2 "
                        . "left join city_cap_3 on city_cap_3.id=tin_du_an.city_cap_3 "
                        . "left join du_an_cap_1 on du_an_cap_1.id=tin_du_an.du_an_cap_1 "
                        . "left join du_an_cap_2 on du_an_cap_2.id=tin_du_an.du_an_cap_2 "
                        . "left join du_an_cap_3 on du_an_cap_3.id=tin_du_an.du_an_cap_3 "
                        . "where tin_du_an.id='".$this->_getParam('id',0)."'");
        
        $this->view->headTitle('Dự án - '.html_entity_decode(implode(" ", array_slice(preg_split('/[\s,]+/', $items[0]['title']), 0, 5))), true);
        $this->view->du_an_cap_4s= 
                Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select "
                        . "name "
                        . "from du_an_cap_4 "
                        . "join tinduan_duancap4 on tinduan_duancap4.du_an_cap_4=du_an_cap_4.id "
                        . "where tinduan_duancap4.tin_du_an_id='".$this->_getParam('id',0)."'");
        $this->view->items=$items;
    }
    
    public function nhathauthicongdetailAction() {
        if(!ctype_digit($this->_getParam('id'))){
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        $items= 
                Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select content,"
                        . "title,"
                        . "phan_loai,"
                        . "DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,"
                        . "tinnhathauthicong_photo.photo,"
                        . "tin_nha_thau_thi_cong.id,"
                        . "tin_nha_thau_thi_cong.user_id,"
                        . "user.phone,"
                        . "city_cap_1.name as city_cap_1,"
                        . "city_cap_2.name as city_cap_2,"
                        . "city_cap_3.name as city_cap_3, "
                        . "tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1 as nha_thau_thi_cong_cap_1_id,"
                        . "nha_thau_thi_cong_cap_1.name as nha_thau_thi_cong_cap_1,"
                        . "nha_thau_thi_cong_cap_2.name as nha_thau_thi_cong_cap_2,"
                        . "nha_thau_thi_cong_cap_3.name as nha_thau_thi_cong_cap_3 "
                        . "from tin_nha_thau_thi_cong "
                        . "join user on user.id=tin_nha_thau_thi_cong.user_id "
                        . "left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id "
                        . "left join city_cap_1 on city_cap_1.id=tin_nha_thau_thi_cong.city_cap_1 "
                        . "left join city_cap_2 on city_cap_2.id=tin_nha_thau_thi_cong.city_cap_2 "
                        . "left join city_cap_3 on city_cap_3.id=tin_nha_thau_thi_cong.city_cap_3 "
                        . "left join nha_thau_thi_cong_cap_1 on nha_thau_thi_cong_cap_1.id=tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1 "
                        . "left join nha_thau_thi_cong_cap_2 on nha_thau_thi_cong_cap_2.id=tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_2 "
                        . "left join nha_thau_thi_cong_cap_3 on nha_thau_thi_cong_cap_3.id=tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_3 "
                        . "where tin_nha_thau_thi_cong.id='".$this->_getParam('id',0)."'");
        
        $this->view->items=$items;
        $this->view->headTitle('Nhà thầu thi công - '.html_entity_decode(implode(" ", array_slice(preg_split('/[\s,]+/', $items[0]['title']), 0, 5))), true);
        
        $this->view->nha_thau_thi_cong_cap_4s= 
                Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select "
                        . "name "
                        . "from nha_thau_thi_cong_cap_4 "
                        . "join tinnhathauthicong_nhathauthicongcap4 on tinnhathauthicong_nhathauthicongcap4.nha_thau_thi_cong_cap_4=nha_thau_thi_cong_cap_4.id "
                        . "where tinnhathauthicong_nhathauthicongcap4.tin_nha_thau_thi_cong_id='".$this->_getParam('id',0)."'");
        
    }

}

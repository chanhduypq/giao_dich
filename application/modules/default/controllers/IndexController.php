<?php

class IndexController extends Core_Controller_Action {

    public function init() {
        parent::init();
        $this->view->headTitle('Trang chủ', true);
    }

    public function indexAction() {
    }
    public function duanAction() {
        $this->view->items= Core_Db_Table::getDefaultAdapter()->fetchAll("select "
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
                . "group by tin_du_an.id");
        
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
        $this->view->items= Core_Db_Table::getDefaultAdapter()->fetchAll("select "
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
                . "group by tin_nha_thau_thi_cong.id");
    }
    public function duandetailAction() {
        if(!ctype_digit($this->_getParam('id'))){
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        $this->view->items= 
                Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select content,"
                        . "title,"
                        . "DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,"
                        . "tong_dau_tu,"
                        . "tinduan_photo.photo,"
                        . "tin_du_an.id,"
                        . "city_cap_1.name as city_cap_1,"
                        . "city_cap_2.name as city_cap_2,"
                        . "city_cap_3.name as city_cap_3, "
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
        
        $this->view->du_an_cap_4s= 
                Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select "
                        . "name "
                        . "from du_an_cap_4 "
                        . "join tinduan_duancap4 on tinduan_duancap4.du_an_cap_4=du_an_cap_4.id "
                        . "where tinduan_duancap4.tin_du_an_id='".$this->_getParam('id',0)."'");
        
    }
    
    public function nhathauthicongdetailAction() {
        if(!ctype_digit($this->_getParam('id'))){
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        $this->view->items= 
                Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select content,"
                        . "title,"
                        . "phan_loai,"
                        . "DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,"
                        . "tinnhathauthicong_photo.photo,"
                        . "tin_nha_thau_thi_cong.id,"
                        . "city_cap_1.name as city_cap_1,"
                        . "city_cap_2.name as city_cap_2,"
                        . "city_cap_3.name as city_cap_3, "
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
        
        $this->view->nha_thau_thi_cong_cap_4s= 
                Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select "
                        . "name "
                        . "from nha_thau_thi_cong_cap_4 "
                        . "join tinnhathauthicong_nhathauthicongcap4 on tinnhathauthicong_nhathauthicongcap4.nha_thau_thi_cong_cap_4=nha_thau_thi_cong_cap_4.id "
                        . "where tinnhathauthicong_nhathauthicongcap4.tin_nha_thau_thi_cong_id='".$this->_getParam('id',0)."'");
        
    }

}

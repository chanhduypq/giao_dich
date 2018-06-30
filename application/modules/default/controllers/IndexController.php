<?php

class IndexController extends Core_Controller_Action {

    public function init() {
        parent::init();
        $this->view->headTitle('Trang chủ', true);
    }

    public function indexAction() {
    }
    public function categoryAction() {
        $this->view->items= Core_Db_Table::getDefaultAdapter()->fetchAll("select title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,tong_dau_tu,photo,tin_du_an.id from tin_du_an join user on user.id=tin_du_an.user_id left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id group by tin_du_an.id");
    }
    public function categorydetailAction() {
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
        
    }

}

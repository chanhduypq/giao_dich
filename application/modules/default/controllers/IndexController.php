<?php

class IndexController extends Core_Controller_Action {

    public function init() {
        parent::init();
        $this->view->headTitle('Trang chủ', true);
    }

    public function indexAction() {
    }
    public function categoryAction() {
        $this->view->items= Core_Db_Table::getDefaultAdapter()->fetchAll("select title,DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,tong_dau_tu,photo from tin_du_an join user on user.id=tin_du_an.user_id left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id group by tin_du_an.id");
    }
    public function categorydetailAction() {
    }

}

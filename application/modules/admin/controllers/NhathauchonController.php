<?php

class Admin_NhathauchonController extends Core_Controller_Action {

    public function init() {
        parent::init();
        $this->view->headTitle('Các dự án đã chọn', true);
    }

    public function indexAction() {
        $auth = Zend_Auth::getInstance();
        $identity = $auth->getIdentity();
        $allItems= Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "title,content,"
                . "photo,"
                . "phone,"
                . "DATE_FORMAT(nha_thau_da_chon.created_at,'%d/%m/%Y') AS created_at,"
                . "tin_nha_thau_thi_cong.id,tin_nha_thau_thi_cong.status "
                . "from tin_nha_thau_thi_cong "
                . "join nha_thau_da_chon on tin_nha_thau_thi_cong.id=nha_thau_da_chon.tin_nha_thau_thi_cong_id "
                . "join user on user.id=nha_thau_da_chon.user_id "
                . "left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id "
                .($identity['type']== Default_Model_User::ADMIN?" ": ("where tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1 IN (select nha_thau_thi_cong_cap_1_id from user_nhathauthicong where user_id='".$this->getUserId()."') "))
                . "group by tin_nha_thau_thi_cong.id,user.phone "
                . "order by nha_thau_da_chon.created_at ASC");
        
        $temps=array();
        foreach ($allItems as $allItem){
            $users[$allItem['id']][]=$allItem['created_at'].': '.$allItem['phone'];
            $temps[$allItem['id']]=array(
                'title'=>$allItem['title'],
                'content'=>$allItem['content'],
                'photo'=>$allItem['photo'],
                'status'=>$allItem['status'],
                'users_da_chon'=>$users[$allItem['id']],
            );
        }
        
        $this->view->items = $temps;
    }
    
//    tuetc
//    public function batdaugiaodichAction() {
//        $this->isAjax();
//        if(ctype_digit($this->_getParam('id'))){
//            Core_Db_Table::getDefaultAdapter()->query("update tin_du_an set status=2 where id='".$this->_getParam('id')."'")->execute();
//        }
//        $this->_helper->redirector('index', 'duanchon', 'admin');
//    }
//    
//    public function hoanthanhgiaodichAction() {
//        if(ctype_digit($this->_getParam('id'))){
//            Core_Db_Table::getDefaultAdapter()->query("update tin_du_an set status=3 where id='".$this->_getParam('id')."'")->execute();
//        }
//        $this->_helper->redirector('index', 'duanchon', 'admin');
//    }
    
}

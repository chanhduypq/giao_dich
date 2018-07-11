<?php

class Admin_NewsController extends Core_Controller_Action {

    public function init() {
        parent::init();
       
        $this->view->headTitle('Duyệt tin', true);
    }

    public function indexAction() {$this->view->headTitle('Duyêt tin', true);
        $allItems= Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "title,content,'Dự án' as type_tin_text,'du_an' as type_tin,"
                . "photo,"
                . "allow_show_quang_cao,"
                . "phone,"
                . "user.type,"
                . "tin_du_an.id,tin_du_an.is_hot,"
                . "tin_du_an.is_active "
                . "from tin_du_an "
                . "join user on user.id=tin_du_an.user_id "
                . "left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id "
                . "where tin_du_an.du_an_cap_1 IN (select du_an_cap_1_id from user_duan where user_id='".$this->getUserId()."') "
                . "group by tin_du_an.id");
        
        
        $allItems1 = Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "title,content,'Nhà thầu thi công' as type_tin_text,'nha_thau_thi_cong' as type_tin,"
                . "photo,"
                . "allow_show_quang_cao,"
                . "phone,"
                . "user.type,"
                . "tin_nha_thau_thi_cong.id,tin_nha_thau_thi_cong.is_hot,"
                . "tin_nha_thau_thi_cong.is_active "
                . "from tin_nha_thau_thi_cong "
                . "join user on user.id=tin_nha_thau_thi_cong.user_id "
                . "left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id "
                . "where tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1 IN (select nha_thau_thi_cong_cap_1_id from user_nhathauthicong where user_id='".$this->getUserId()."') "
                . "group by tin_nha_thau_thi_cong.id");
        
        $allItems= array_merge($allItems,$allItems1);

        $this->view->items = $allItems;
    }
    
    public function showAction() {
        $this->isAjax();
        if ($this->_request->isPost()) {
            if(ctype_digit($this->_getParam('id'))){
                $affect=Core_Db_Table::getDefaultAdapter()->query("update ".$this->_getParam('table_name')." set is_active=1 where id='".$this->_getParam('id')."'")->execute();
                if($affect){
                    echo 'ok';
                    exit;
                }
            }
        } 
    }
    
    public function hideAction() {
        $this->isAjax();
        if ($this->_request->isPost()) {
            if(ctype_digit($this->_getParam('id'))){
                $affect=Core_Db_Table::getDefaultAdapter()->query("update ".$this->_getParam('table_name')." set is_active=0 where id='".$this->_getParam('id')."'")->execute();
                if($affect){
                    echo 'ok';
                    exit;
                }
            }
        } 
    }
    
    public function hotAction() {
        $this->isAjax();
        if ($this->_request->isPost()) {
            if(ctype_digit($this->_getParam('id'))){
                $affect=Core_Db_Table::getDefaultAdapter()->query("update ".$this->_getParam('table_name')." set is_hot=1 where id='".$this->_getParam('id')."'")->execute();
                if($affect){
                    echo 'ok';
                    exit;
                }
            }
        } 
    }
    
    public function nothotAction() {
        $this->isAjax();
        if ($this->_request->isPost()) {
            if(ctype_digit($this->_getParam('id'))){
                $affect=Core_Db_Table::getDefaultAdapter()->query("update ".$this->_getParam('table_name')." set is_hot=0 where id='".$this->_getParam('id')."'")->execute();
                if($affect){
                    echo 'ok';
                    exit;
                }
            }
        } 
    }

}

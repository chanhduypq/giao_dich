<?php

class Admin_NewsController extends Core_Controller_Action {

    public function init() {
        parent::init();
       
        if (!$this->isAdmin()&&!$this->isNhanVien()) {
            $this->_helper->redirector('index', 'index', 'admin');
            exit;
        }
        $this->view->headTitle('Duyệt tin', true);
    }

    public function indexAction() {
        $this->view->headTitle('Duyêt tin', true);

        $where="";
        if($this->isNhanVien()){
            $where=" where (nha_thau_thi_cong_cap_1 is null and du_an_cap_1 IN (select du_an_cap_1_id from user_duan where user_id='".$this->getUserId()."')) ";
            $where.= "and (du_an_cap_1 is null and nha_thau_thi_cong_cap_1 IN (select nha_thau_thi_cong_cap_1_id from user_nhathauthicong where user_id='".$this->getUserId()."')) ";
        }
        $allItems=Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_1$where order by created_at DESC");
        
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
    
    public function dichvuhaumaiAction() {
        $this->isAjax();
        if ($this->_request->isPost()) {
            if(ctype_digit($this->_getParam('id'))){
                $affect=Core_Db_Table::getDefaultAdapter()->query("update ".$this->_getParam('table_name')." set is_dich_vu_hau_mai=1 where id='".$this->_getParam('id')."'")->execute();
                if($affect){
                    echo 'ok';
                    exit;
                }
            }
        } 
    }
    
    public function notdichvuhaumaiAction() {
        $this->isAjax();
        if ($this->_request->isPost()) {
            if(ctype_digit($this->_getParam('id'))){
                $affect=Core_Db_Table::getDefaultAdapter()->query("update ".$this->_getParam('table_name')." set is_dich_vu_hau_mai=0 where id='".$this->_getParam('id')."'")->execute();
                if($affect){
                    echo 'ok';
                    exit;
                }
            }
        } 
    }

}

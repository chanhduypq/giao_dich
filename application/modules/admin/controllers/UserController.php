<?php

class Admin_UserController extends Core_Controller_Action {

    public function init() {
        parent::init();
        if (!$this->isAdmin()) {
            $this->_helper->redirector('index', 'index', 'admin');
            exit;
        }
    }

    public function indexAction() {
        $model=new Default_Model_User();
        $this->view->items = $model->select('*')->where("type<>".Default_Model_User::ADMIN." and type<>".Default_Model_User::NHAN_VIEN." and type<>type_active")->fetchAll();
    }

    

    public function dongyAction() {
        $this->isAjax();
        if ($this->_request->isPost()) {
            if(ctype_digit($this->_getParam('id'))){
                $affect=Core_Db_Table::getDefaultAdapter()->query("update `user` set allow_hoptac=1 where id='".$this->_getParam('id')."'")->execute();
                if($affect){
                    echo 'ok';
                    exit;
                }
            }
        } 
    }
    
    public function khongdongyAction() {
        $this->isAjax();
        if ($this->_request->isPost()) {
            if(ctype_digit($this->_getParam('id'))){
                $affect=Core_Db_Table::getDefaultAdapter()->query("update `user` set allow_hoptac=0 where id='".$this->_getParam('id')."'")->execute();
                if($affect){
                    echo 'ok';
                    exit;
                }
            }
        } 
    }

}

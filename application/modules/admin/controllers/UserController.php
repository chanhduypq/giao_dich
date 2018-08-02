<?php

class Admin_UserController extends Core_Controller_Action {

    public function init() {
        parent::init();
        if (!$this->isAdmin()) {
            $this->_helper->redirector('index', 'index', 'admin');
            exit;
        }
        $this->model=new Default_Model_User();
    }

    public function indexAction() {
        $model=new Default_Model_User();
        $this->view->items = $model->select('*')->where("type<>".Default_Model_User::ADMIN." and type<>".Default_Model_User::NHAN_VIEN." and type<>type_active")->fetchAll();
    }
    
    public function editAction() {
        if ($this->_request->isPost()) {
            $user_id=$this->_getParam('id');
            Core_Db_Table::getDefaultAdapter()->delete('user_duan',"user_id='$user_id'");
            Core_Db_Table::getDefaultAdapter()->delete('user_nhathauthicong',"user_id='$user_id'");
            $du_an_cap_1s= $this->_getParam('du_an_cap_1s');
            $nha_thau_thi_cong_cap_1s= $this->_getParam('nha_thau_thi_cong_cap_1s');
            if(is_array($du_an_cap_1s)&&count($du_an_cap_1s)>0){
                foreach ($du_an_cap_1s as $du_an_cap_1){
                    Core_Db_Table::getDefaultAdapter()->insert('user_duan', array('du_an_cap_1_id'=>$du_an_cap_1,'user_id'=>$user_id));
                }
            }
            if(is_array($nha_thau_thi_cong_cap_1s)&&count($nha_thau_thi_cong_cap_1s)>0){
                foreach ($nha_thau_thi_cong_cap_1s as $nha_thau_thi_cong_cap_1){
                    Core_Db_Table::getDefaultAdapter()->insert('user_nhathauthicong', array('nha_thau_thi_cong_cap_1_id'=>$nha_thau_thi_cong_cap_1,'user_id'=>$user_id));
                }
            }
            $this->_helper->redirector('index', 'user', 'admin');
            exit;
        }
        $user= $this->model->fetchRow("id='".$this->_getParam('id')."'");
        $this->view->full_name = $user['full_name'];
        $this->view->phone = $user['phone'];
        $this->view->nha_thau_thi_cong_cap_1s = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_1");
        $this->view->du_an_cap_1s = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_1");
        
        $temp = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from user_duan where user_id='" . $this->_getParam('id') . "'");
        $user_duans = array();
        foreach ($temp as $t) {
            $user_duans[] = $t['du_an_cap_1_id'];
        }
        
        $temp = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from user_nhathauthicong where user_id='" . $this->_getParam('id') . "'");
        $user_nhathauthicongs = array();
        foreach ($temp as $t) {
            $user_nhathauthicongs[] = $t['nha_thau_thi_cong_cap_1_id'];
        }
        
        $this->view->user_duans=$user_duans;
        $this->view->user_nhathauthicongs=$user_nhathauthicongs;
        
        $this->render('add');
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

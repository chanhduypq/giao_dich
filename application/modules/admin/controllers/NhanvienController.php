<?php

class Admin_NhanvienController extends Core_Controller_Action {

    public function init() {
        parent::init();
        $auth = Zend_Auth::getInstance();
        $identity = $auth->getIdentity();
        if($identity['type']!= Default_Model_User::ADMIN){
            $this->_helper->redirector('index', 'index', 'admin');
            exit;
        }
        $this->model = new Default_Model_Nhanvien();
    }

    public function indexAction() {
        $model=new Default_Model_User();
        $this->view->items = $model->select('*')->where("type=2")->fetchAll();
    }

    public function addAction() {
        $error = "";
        if ($this->_request->isPost()) {
            if (trim($this->_getParam('phone')) != '') {
                if (ctype_digit(trim($this->_getParam('phone')))) {
                    if (Core_Db_Table::getDefaultAdapter()->fetchOne("select count(*) from user where phone='" . trim($this->_getParam('phone')) . "'") == '0') {
                        $data['full_name'] = $this->_getParam('full_name');
                        $data['phone'] = trim($this->_getParam('phone'));
                        $data['password'] = sha1(trim($this->_getParam('phone')));
                        $data['type']='2';
                        $user_id=$this->model->insert($data);
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
                        $this->_helper->redirector('index', 'nhanvien', 'admin', array('page' => $this->_getParam('page')));
                        exit;
                    } else {
                        $error = "Đã tồn tại nhân viên mang số điện thoại này rồi";
                    }
                } else {
                    $error = 'Vui lòng nhập số điện thoại bằng số';
                }
            } else {
                $error = 'Vui lòng nhập số điện thoại.';
            }
        }


        $this->view->page = $this->_getParam('page');
        $this->view->error = $error;
        $this->view->is_new = '1';
        $this->view->full_name = '';
        $this->view->phone = '';
        $this->view->nha_thau_thi_cong_cap_1s = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_1");
        $this->view->du_an_cap_1s = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_1");
        $this->view->user_duans=array();
        $this->view->user_nhathauthicongs=array();
    }

    public function editAction() {
        $error = "";
        if ($this->_request->isPost()) {
            if (trim($this->_getParam('phone')) != '') {
                if (ctype_digit(trim($this->_getParam('phone')))) {
                    if (Core_Db_Table::getDefaultAdapter()->fetchOne("select count(*) from user where phone='" . trim($this->_getParam('phone')) . "' and id <> ".$this->_getParam('id')) == '0') {
                        $data['full_name'] = $this->_getParam('full_name');
                        $data['phone'] = trim($this->_getParam('phone'));
                        $this->model->update($data,"id='".$this->_getParam('id')."'");
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
                        $this->_helper->redirector('index', 'nhanvien', 'admin', array('page' => $this->_getParam('page')));
                        exit;
                    } else {
                        $error = "Đã tồn tại nhân viên mang số điện thoại này rồi";
                    }
                } else {
                    $error = 'Vui lòng nhập số điện thoại bằng số';
                }
            } else {
                $error = 'Vui lòng nhập số điện thoại.';
            }
        }
        $user= $this->model->fetchRow("id='".$this->_getParam('id')."'");
        $this->view->page = $this->_getParam('page');
        $this->view->error = $error;
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

    public function deleteAction() {
        
    }

}

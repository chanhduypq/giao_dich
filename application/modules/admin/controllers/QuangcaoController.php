<?php

class Admin_QuangcaoController extends Core_Controller_Action {

    public function init() {
        parent::init();
        $auth = Zend_Auth::getInstance();
        $identity = $auth->getIdentity();
        if($identity['type']!= Default_Model_User::ADMIN){
            $this->_helper->redirector('index', 'news', 'admin');
            exit;
        }
    }

    public function indexAction() {
        $allItems= Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "title,content,'Dự án' as type_tin_text,'du_an' as type_tin,"
                . "photo,"
                . "allow_show_quang_cao,"
                . "phone,"
                . "user.type,"
                . "tin_du_an.id "
                . "from tin_du_an "
                . "join user on user.id=tin_du_an.user_id "
                . "left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id "
                . "where is_quang_cao=1 "
//                . "where is_quang_cao=1 and (tin_du_an.target_type=3 or tin_du_an.target_type=4) "  nếu tin này là khách hàng hoặc đối tác đăng
                . "group by tin_du_an.id");
        
        $allItems1 = Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "title,content,'Nhà thầu thi công' as type_tin_text,'nha_thau_thi_cong' as type_tin,"
                . "photo,"
                . "allow_show_quang_cao,"
                . "phone,"
                . "user.type,"
                . "tin_nha_thau_thi_cong.id "
                . "from tin_nha_thau_thi_cong "
                . "join user on user.id=tin_nha_thau_thi_cong.user_id "
                . "left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id "
                . "where is_quang_cao=1 "
//                . "where is_quang_cao=1 and (tin_nha_thau_thi_cong.target_type=3 or tin_nha_thau_thi_cong.target_type=4) "  nếu tin này là khách hàng hoặc đối tác đăng
                . "group by tin_nha_thau_thi_cong.id");
        
        $allItems= array_merge($allItems,$allItems1);

        $this->view->items = $allItems;
    }
    
    public function showAction() {
        $this->isAjax();
        if ($this->_request->isPost()) {
            if(ctype_digit($this->_getParam('id'))){
                $affect=Core_Db_Table::getDefaultAdapter()->query("update ".$this->_getParam('table_name')." set allow_show_quang_cao=1 where id='".$this->_getParam('id')."'")->execute();
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
                $affect=Core_Db_Table::getDefaultAdapter()->query("update ".$this->_getParam('table_name')." set allow_show_quang_cao=0 where id='".$this->_getParam('id')."'")->execute();
                if($affect){
                    echo 'ok';
                    exit;
                }
            }
        } 
    }

    

}

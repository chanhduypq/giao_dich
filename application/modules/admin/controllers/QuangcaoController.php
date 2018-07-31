<?php

class Admin_QuangcaoController extends Core_Controller_Action {

    public function init() {
        parent::init();
        if (!$this->isAdmin()&&!$this->isNhanVien()) {
            $this->_helper->redirector('index', 'index', 'admin');
            exit;
        }
    }

    public function indexAction() {
        $auth = Zend_Auth::getInstance();
        $identity = $auth->getIdentity();
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
                .($identity['type']== Default_Model_User::ADMIN?"where is_quang_cao=1 ": ("where is_quang_cao=1 and tin_du_an.du_an_cap_1 IN (select du_an_cap_1_id from user_duan where user_id='".$this->getUserId()."') "))
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
                .($identity['type']== Default_Model_User::ADMIN?"where is_quang_cao=1 ":  ("where is_quang_cao=1 and tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1 IN (select nha_thau_thi_cong_cap_1_id from user_nhathauthicong where user_id='".$this->getUserId()."') "))
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

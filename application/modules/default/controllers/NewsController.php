<?php

class NewsController extends Core_Controller_Action {

    public function init() {
        parent::init();
        $auth = Zend_Auth::getInstance();
        if (!$auth->hasIdentity()) {
            $this->_helper->redirector('login', 'account', 'default');
            exit;
        }
        
        $this->view->headTitle('Đăng tin', true);
    }

    public function step1Action() {
        if ($this->_request->isPost()) {
            if ($this->_getParam('type') == 'duan') {
                $this->_helper->redirector->gotoUrl('/default/news/duan2');
            } else {
                $this->_helper->redirector->gotoUrl('/default/news/nhathauthicong2');
            }
        }
    }

    public function duan2Action() {
        $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_1");
        $this->view->items = $items;
        $session_tin_du_an = new Zend_Session_Namespace('tin_du_an');
        $this->view->du_an_cap_1 = $session_tin_du_an->du_an_cap_1;
    }

    public function duan3Action() {
        $session_tin_du_an = new Zend_Session_Namespace('tin_du_an');
        if ($this->_request->isPost()) {
            $session_tin_du_an->du_an_cap_1 = $this->_getParam('muc', '0');
            
        } else {
            $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_2 where du_an_cap_1_id='" . $session_tin_du_an->du_an_cap_1 . "'");
            $this->view->items = $items;
            $this->view->du_an_cap_2 = $session_tin_du_an->du_an_cap_2;
        }
        if(strpos($this->_getBackUrl(), 'duan2')===FALSE){
            $this->_helper->redirector('step1', 'news', 'default');
        }
        
    }

    public function duan4Action() {
        $session_tin_du_an = new Zend_Session_Namespace('tin_du_an');
        if ($this->_request->isPost()) {
            $session_tin_du_an->du_an_cap_2 = $this->_getParam('muc', '0');
            
        } else {
            $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_3 where du_an_cap_2_id='" . $session_tin_du_an->du_an_cap_2 . "'");
            $this->view->items = $items;
            $this->view->du_an_cap_3 = is_array($session_tin_du_an->du_an_cap_3)?$session_tin_du_an->du_an_cap_3:array();
        }
        if(strpos($this->_getBackUrl(), 'duan3')===FALSE){
            $this->_helper->redirector('step1', 'news', 'default');
        }
       
    }

    public function duan5Action() {
        $session_tin_du_an = new Zend_Session_Namespace('tin_du_an');
        if ($this->_request->isPost()) {
            $session_tin_du_an->du_an_cap_3 = $this->_getParam('muc');
            
        } else {
            $temp=$session_tin_du_an->du_an_cap_3;
            if(!is_array($temp)||count($temp)==0){
                $temp=array('-1');
            }
            $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_4 where du_an_cap_3_id IN(" .implode(",",$temp) . ")");
            $this->view->items = $items;
            $this->view->du_an_cap_4 = is_array($session_tin_du_an->du_an_cap_4)?$session_tin_du_an->du_an_cap_4:array();
        }
        if(strpos($this->_getBackUrl(), 'duan4')===FALSE){
            $this->_helper->redirector('step1', 'news', 'default');
        }
        
    }

    public function duan6Action() {
        if ($this->_request->isPost()) {
            $session_tin_du_an = new Zend_Session_Namespace('tin_du_an');
            $session_tin_du_an->du_an_cap_4 = $this->_getParam('muc');
            
        } else {
            $this->view->city_cap_1s= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from city_cap_1");
            $this->view->city_cap_2s= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from city_cap_2");
        }
        if(strpos($this->_getBackUrl(), 'duan5')===FALSE){
            $this->_helper->redirector('step1', 'news', 'default');
        }
    }
    
    

    public function nhathauthicong2Action() {
        $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_1");
        $this->view->items = $items;
        $session_tin_nha_thau_thi_cong = new Zend_Session_Namespace('tin_nha_thau_thi_cong');
        $this->view->nha_thau_thi_cong_cap_1 = $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_1;
    }

    public function nhathauthicong3Action() {
        $session_tin_nha_thau_thi_cong = new Zend_Session_Namespace('tin_nha_thau_thi_cong');
        if ($this->_request->isPost()) {
            $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_1 = $this->_getParam('muc', '0');
            
        } else {
            $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_2 where nha_thau_thi_cong_cap_1_id='" . $this->_getParam('muc', '0') . "'");
            $this->view->items = $items;
            $this->view->nha_thau_thi_cong_cap_2 = $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_2;
        }
        if(strpos($this->_getBackUrl(), 'nhathauthicong2')===FALSE){
            $this->_helper->redirector('step1', 'news', 'default');
        }
    }

    public function nhathauthicong4Action() {
        $session_tin_nha_thau_thi_cong = new Zend_Session_Namespace('tin_nha_thau_thi_cong');
        if ($this->_request->isPost()) {
            $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_2 = $this->_getParam('muc', '0');
            
            
        } else {
            $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_3 where nha_thau_thi_cong_cap_2_id='" . $this->_getParam('muc', '0') . "'");
            $this->view->items = $items;
            $this->view->nha_thau_thi_cong_cap_3 = is_array($session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_3)?$session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_3:array();
        }
        if(strpos($this->_getBackUrl(), 'nhathauthicong3')===FALSE){
            $this->_helper->redirector('step1', 'news', 'default');
        }
    }

    public function nhathauthicong5Action() {
        $session_tin_nha_thau_thi_cong = new Zend_Session_Namespace('tin_nha_thau_thi_cong');
        if ($this->_request->isPost()) {
            $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_3 = $this->_getParam('muc');
            
        } else {
            $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_4 where nha_thau_thi_cong_cap_3_id IN(" .implode(",",$this->_getParam('muc',array('-1'))) . ")");
            $this->view->items = $items;
            $this->view->nha_thau_thi_cong_cap_4 = is_array($session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_4)?$session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_4:array();
        }
        if(strpos($this->_getBackUrl(), 'nhathauthicong4')===FALSE){
            $this->_helper->redirector('step1', 'news', 'default');
        }
    }

    public function nhathauthicong6Action() {
        if ($this->_request->isPost()) {
            $session_tin_nha_thau_thi_cong = new Zend_Session_Namespace('tin_nha_thau_thi_cong');
            $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_4 = $this->_getParam('muc');
            
        } else {
            $this->view->city_cap_1s= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from city_cap_1");
            $this->view->city_cap_2s= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from city_cap_2");
        }
        if(strpos($this->_getBackUrl(), 'nhathauthicong5')===FALSE){
            $this->_helper->redirector('step1', 'news', 'default');
        }
    }

    public function savenhathauthicongAction() {
        if ($this->_request->isPost()) {
            $data= $this->_getAllParams();
            
            unset($data['controller']);
            unset($data['action']);
            unset($data['module']);
            
            list($d,$m,$y)= explode("/", $data['ngay']);
            $data['ngay'] = "$y-$m-$d";

            $session_tin_nha_thau_thi_cong = new Zend_Session_Namespace('tin_nha_thau_thi_cong');
            $data['nha_thau_thi_cong_cap_1'] = $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_1;
            $data['nha_thau_thi_cong_cap_2'] = $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_2;
            $du_an_cap_3 = $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_3;
            $du_an_cap_4 = $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_4;
            
            $data['user_id']= $this->getUserId();

            $auth = Zend_Auth::getInstance();
            $identity = $auth->getIdentity();
            $data['target_type'] = ($identity['type'] == Default_Model_User::ADMIN ? Default_Model_User::NHAN_VIEN : $identity['type']);
            
            /**
             * nếu user vừa đăng là nhân viên và tin vừa đăng thuộc quyền quản lý của nhân viên này thi cho is_active=1 
             * có nghĩa là tự động cho nó hiển thị lên hệ thống
             */
            $temp = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from user_nhathauthicong where user_id='" . $this->getUserId() . "'");
            $user_duans = array();
            foreach ($temp as $t) {
                $user_duans[] = $t['nha_thau_thi_cong_cap_1_id'];
            }
            if(in_array($session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_1, $user_duans)){
                $data['is_active']='1';
            }
            //

            $model = new Default_Model_Tinnhathauthicong();
            $id = $model->insert($data);

            if (is_array($du_an_cap_3) && count($du_an_cap_3) > 0) {
                foreach ($du_an_cap_3 as $temp) {
                    if (ctype_digit($temp)) {
                        Core_Db_Table::getDefaultAdapter()->insert('tinnhathauthicong_nhathauthicongcap3', array('tin_nha_thau_thi_cong_id' => $id, 'nha_thau_thi_cong_cap_3' => $temp));
                    }
                }
            }
            if (is_array($du_an_cap_4) && count($du_an_cap_4) > 0) {
                foreach ($du_an_cap_4 as $temp) {
                    if (ctype_digit($temp)) {
                        Core_Db_Table::getDefaultAdapter()->insert('tinnhathauthicong_nhathauthicongcap4', array('tin_nha_thau_thi_cong_id' => $id, 'nha_thau_thi_cong_cap_4' => $temp));
                    }
                }
            }
            $list_of_photo = explode(",", $this->_getParam('list_of_photo'));            
            if(isset($session_tin_nha_thau_thi_cong->photos)&&is_array($session_tin_nha_thau_thi_cong->photos)&&count($session_tin_nha_thau_thi_cong->photos)>0){
                $photos=$session_tin_nha_thau_thi_cong->photos;
                foreach ($photos as $temp) {
                    if(file_exists(UPLOAD . "/public/uploads/".$temp)){
                        if(in_array($temp, $list_of_photo)){
                            Core_Db_Table::getDefaultAdapter()->insert('tinnhathauthicong_photo', array('tin_nha_thau_thi_cong_id' => $id, 'photo' => $temp));
                        }
                        else{
                            @unlink(UPLOAD . "/public/uploads/".$temp);
                        }
                        
                    }
                }
            }
            
            $session_tin_nha_thau_thi_cong->unsetAll();
            $this->_helper->redirector('complete', 'news', 'default');
            exit;
        }
        $this->_helper->redirector('index', 'index', 'default');
    }

    public function saveduanAction() {

        if ($this->_request->isPost()) {
            
            $data= $this->_getAllParams();
            
            unset($data['controller']);
            unset($data['action']);
            unset($data['module']);
            
            list($d,$m,$y)= explode("/", $data['ngay']);
            $data['ngay'] = "$y-$m-$d";

            $session_tin_du_an = new Zend_Session_Namespace('tin_du_an');
            $data['du_an_cap_1'] = $session_tin_du_an->du_an_cap_1;
            $data['du_an_cap_2'] = $session_tin_du_an->du_an_cap_2;

            $du_an_cap_3 = $session_tin_du_an->du_an_cap_3;
            $du_an_cap_4 = $session_tin_du_an->du_an_cap_4;
            
            $data['user_id']= $this->getUserId();

            $auth = Zend_Auth::getInstance();
            $identity = $auth->getIdentity();
            $data['target_type'] = ($identity['type'] == Default_Model_User::ADMIN ? Default_Model_User::NHAN_VIEN : $identity['type']);
            
            /**
             * nếu user vừa đăng là nhân viên và dự án vừa đăng thuộc quyền quản lý của nhân viên này thi cho is_active=1 
             * có nghĩa là tự động cho nó hiển thị lên hệ thống
             */
            $temp = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from user_duan where user_id='" . $this->getUserId() . "'");
            $user_duans = array();
            foreach ($temp as $t) {
                $user_duans[] = $t['du_an_cap_1_id'];
            }
            if(in_array($session_tin_du_an->du_an_cap_1, $user_duans)){
                $data['is_active']='1';
            }
            //

            $model = new Default_Model_Tinduan();
            $id = $model->insert($data);

            if (is_array($du_an_cap_3) && count($du_an_cap_3) > 0) {
                foreach ($du_an_cap_3 as $temp) {
                    if (ctype_digit($temp)) {
                        Core_Db_Table::getDefaultAdapter()->insert('tinduan_duancap3', array('tin_du_an_id' => $id, 'du_an_cap_3' => $temp));
                    }
                }
            }
            if (is_array($du_an_cap_4) && count($du_an_cap_4) > 0) {
                foreach ($du_an_cap_4 as $temp) {
                    if (ctype_digit($temp)) {
                        Core_Db_Table::getDefaultAdapter()->insert('tinduan_duancap4', array('tin_du_an_id' => $id, 'du_an_cap_4' => $temp));
                    }
                }
            }
            $list_of_photo = explode(",", $this->_getParam('list_of_photo'));            
            if(isset($session_tin_du_an->photos)&&is_array($session_tin_du_an->photos)&&count($session_tin_du_an->photos)>0){
                $photos=$session_tin_du_an->photos;
                foreach ($photos as $temp) {
                    if(file_exists(UPLOAD . "/public/uploads/".$temp) ){
                        if(in_array($temp, $list_of_photo)){
                            Core_Db_Table::getDefaultAdapter()->insert('tinduan_photo', array('tin_du_an_id' => $id, 'photo' => $temp));
                        }
                        else{
                            @unlink(UPLOAD . "/public/uploads/".$temp);
                        }
                        
                    }
                }
            }
            
            $session_tin_du_an->unsetAll();
            $this->_helper->redirector('complete', 'news', 'default');
            exit;
        }
        $this->_helper->redirector('index', 'index', 'default');
    }
    public function deletephotoAction() {
        @unlink(UPLOAD . "/public/".$this->_getParam('photo'));
    }
    public function uploadAction() {
        if(!isset($_FILES['file'])){
            exit;
        }
        
        $this->disableLayout();
        $this->disableRender();
        $path = UPLOAD . "/public/uploads/";
        @mkdir($path);
        $temp = explode(".", $_FILES['file']['name']);
        $file_name = md5(uniqid(rand(), true)) . '.' . $temp[count($temp) - 1];
        if ( 0 < $_FILES['file']['error'] ) {
            echo 'Error: ' . $_FILES['file']['error'] . '<br>';
        }
        else {
            move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $file_name);
            echo $file_name;
            if($this->_getParam('type')=='du_an'){
                $session_tin_du_an = new Zend_Session_Namespace('tin_du_an');
                if(isset($session_tin_du_an->photos)&&is_array($session_tin_du_an->photos)&&count($session_tin_du_an->photos)>0){
                    $photos=$session_tin_du_an->photos;
                    $photos[]=$file_name;
                    $session_tin_du_an->photos=$photos;
                }
                else{
                    $session_tin_du_an->photos = array($file_name);
                }                
            }
            else{
                $session_tin_nha_thau_thi_cong = new Zend_Session_Namespace('tin_nha_thau_thi_cong');
                if(isset($session_tin_nha_thau_thi_cong->photos)&& is_array($session_tin_nha_thau_thi_cong->photos)&&count($session_tin_nha_thau_thi_cong->photos)>0){
                    $photos=$session_tin_nha_thau_thi_cong->photos;
                    $photos[]=$file_name;
                    $session_tin_nha_thau_thi_cong->photos=$photos;
                }
                else{
                    $session_tin_nha_thau_thi_cong->photos = array($file_name);
                }    
            }
        }
        exit;
    }
    public function completeAction() {
        
    }
    
    
    /**
     * chọn dự án
     */
    public function chonduanAction() {
        $this->isAjax();
        if ($this->_request->isPost()) {
            if(ctype_digit($this->_getParam('tin_du_an_id'))){
                $affect=Core_Db_Table::getDefaultAdapter()->insert('du_an_da_chon', array('tin_du_an_id'=> $this->_getParam('tin_du_an_id'),'user_id'=> $this->getUserId()));
                if($affect==1){
                    $auth = Zend_Auth::getInstance();
                    $identity = $auth->getIdentity();
                    $du_an_da_chon_ids = $identity['du_an_da_chon_ids'];
                    $du_an_da_chon_ids[]=$this->_getParam('tin_du_an_id');
                    $identity['du_an_da_chon_ids']=$du_an_da_chon_ids;
                    $auth->clearIdentity();
                    $auth->getStorage()->write($identity);
                    echo 'ok';
                    exit;
                }
            }
        } 
    }
    
    /**
     * hủy chọn dự án
     */
    public function huychonduanAction() {
        $this->isAjax();
        if ($this->_request->isPost()) {
            if(ctype_digit($this->_getParam('tin_du_an_id'))){
                $affect=Core_Db_Table::getDefaultAdapter()->delete('du_an_da_chon','user_id='.$this->getUserId().' and tin_du_an_id='.$this->_getParam('tin_du_an_id'));
                if($affect==1){
                    $auth = Zend_Auth::getInstance();
                    $identity = $auth->getIdentity();
                    $du_an_da_chon_ids = $identity['du_an_da_chon_ids'];
                    foreach ($du_an_da_chon_ids as $key=>$value){
                        if($value==$this->_getParam('tin_du_an_id')){
                            unset($du_an_da_chon_ids[$key]);
                            break;
                        }
                    }
                    $identity['du_an_da_chon_ids']=$du_an_da_chon_ids;
                    $auth->clearIdentity();
                    $auth->getStorage()->write($identity);
                    echo 'ok';
                    exit;
                }
            }
        } 
    }
    
    /**
     * chọn nhà thầu
     */
    public function chonnhathauAction() {
        $this->isAjax();
        if ($this->_request->isPost()) {
            if(ctype_digit($this->_getParam('tin_nha_thau_thi_cong_id'))){
                $affect=Core_Db_Table::getDefaultAdapter()->insert('nha_thau_da_chon', array('tin_nha_thau_thi_cong_id'=> $this->_getParam('tin_nha_thau_thi_cong_id'),'user_id'=> $this->getUserId()));
                if($affect==1){
                    $auth = Zend_Auth::getInstance();
                    $identity = $auth->getIdentity();
                    $nha_thau_da_chon_ids = $identity['nha_thau_da_chon_ids'];
                    $nha_thau_da_chon_ids[]=$this->_getParam('tin_nha_thau_thi_cong_id');
                    $identity['nha_thau_da_chon_ids']=$nha_thau_da_chon_ids;
                    $auth->clearIdentity();
                    $auth->getStorage()->write($identity);
                    echo 'ok';
                    exit;
                }
            }
        } 
    }
    
    /**
     * hủy chọn nhà thầu
     */
    public function huychonnhathauAction() {
        $this->isAjax();
        if ($this->_request->isPost()) {
            if(ctype_digit($this->_getParam('tin_nha_thau_thi_cong_id'))){
                $affect=Core_Db_Table::getDefaultAdapter()->delete('nha_thau_da_chon','user_id='.$this->getUserId().' and tin_nha_thau_thi_cong_id='.$this->_getParam('tin_nha_thau_thi_cong_id'));
                if($affect==1){
                    $auth = Zend_Auth::getInstance();
                    $identity = $auth->getIdentity();
                    $nha_thau_da_chon_ids = $identity['nha_thau_da_chon_ids'];
                    foreach ($nha_thau_da_chon_ids as $key=>$value){
                        if($value==$this->_getParam('tin_nha_thau_thi_cong_id')){
                            unset($nha_thau_da_chon_ids[$key]);
                            break;
                        }
                    }
                    $identity['nha_thau_da_chon_ids']=$nha_thau_da_chon_ids;
                    $auth->clearIdentity();
                    $auth->getStorage()->write($identity);
                    echo 'ok';
                    exit;
                }
            }
        } 
    }
    
    /**
     * một user cảm thấy tin minh đăng không cần thiết hoặc đăng sai thi có thể hủy
     */
    public function canceltindadangAction() {
        $this->isAjax();
        if ($this->_request->isPost()) {
            if(ctype_digit($this->_getParam('id'))){
                $affect=Core_Db_Table::getDefaultAdapter()->query("delete from ".$this->_getParam('table_name')." where id='".$this->_getParam('id')."'")->execute();
                $table_name= str_replace("_", "", $this->_getParam('table_name'))."_photo";
                $photos= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from $table_name where ".$this->_getParam('table_name')."_id='".$this->_getParam('id')."'");
                if(is_array($photos)&&count($photos)>0){
                    foreach ($photos as $photo){
                        @unlink('uploads/' . $photo['photo']);
                    }
                }
                Core_Db_Table::getDefaultAdapter()->query("delete from $table_name where ".$this->_getParam('table_name')."_id='".$this->_getParam('id')."'")->execute();
                if($affect){
                    echo 'ok';
                    exit;
                }
            }
        } 
    }

}

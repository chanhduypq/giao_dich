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
                $this->_helper->redirector('duan2', 'news', 'default');
            } else {
                $this->_helper->redirector('nhathauthicong2', 'news', 'default');
            }
        }
    }

    public function duan2Action() {
        $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_1");
        $this->view->items = $items;
    }

    public function duan3Action() {
        if ($this->_request->isPost()) {
            $session_tin_du_an = new Zend_Session_Namespace('tin_du_an');
            $session_tin_du_an->du_an_cap_1 = $this->_getParam('muc', '0');
            $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_2 where du_an_cap_1_id='" . $this->_getParam('muc', '0') . "'");
            $this->view->items = $items;
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function duan4Action() {
        if ($this->_request->isPost()) {
            $session_tin_du_an = new Zend_Session_Namespace('tin_du_an');
            $session_tin_du_an->du_an_cap_2 = $this->_getParam('muc', '0');
            $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_3 where du_an_cap_2_id='" . $this->_getParam('muc', '0') . "'");
            $this->view->items = $items;
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function duan5Action() {
        if ($this->_request->isPost()) {
            $session_tin_du_an = new Zend_Session_Namespace('tin_du_an');
            $session_tin_du_an->du_an_cap_3 = $this->_getParam('muc', '');
            $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_4 where du_an_cap_3_id='" . $this->_getParam('muc', '0') . "'");
            $this->view->items = $items;
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function duan6Action() {
        if ($this->_request->isPost()) {
            $session_tin_du_an = new Zend_Session_Namespace('tin_du_an');
            $session_tin_du_an->du_an_cap_4 = $this->_getParam('muc');
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function nhathauthicong2Action() {
        $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_1");
        $this->view->items = $items;
    }

    public function nhathauthicong3Action() {
        if ($this->_request->isPost()) {
            $session_tin_nha_thau_thi_cong = new Zend_Session_Namespace('tin_nha_thau_thi_cong');
            $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_1 = $this->_getParam('muc', '0');
            $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_2 where nha_thau_thi_cong_cap_1_id='" . $this->_getParam('muc', '0') . "'");
            $this->view->items = $items;
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function nhathauthicong4Action() {
        if ($this->_request->isPost()) {
            $session_tin_nha_thau_thi_cong = new Zend_Session_Namespace('tin_nha_thau_thi_cong');
            $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_2 = $this->_getParam('muc', '0');
            $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_3 where nha_thau_thi_cong_cap_2_id='" . $this->_getParam('muc', '0') . "'");
            $this->view->items = $items;
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function nhathauthicong5Action() {
        if ($this->_request->isPost()) {
            $session_tin_nha_thau_thi_cong = new Zend_Session_Namespace('tin_nha_thau_thi_cong');
            $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_3 = $this->_getParam('muc', '0');
            $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_4 where nha_thau_thi_cong_cap_3_id='" . $this->_getParam('muc', '0') . "'");
            $this->view->items = $items;
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function nhathauthicong6Action() {
        if ($this->_request->isPost()) {
            $session_tin_nha_thau_thi_cong = new Zend_Session_Namespace('tin_nha_thau_thi_cong');
            $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_4 = $this->_getParam('muc');
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function savenhathauthicongAction() {
        if ($this->_request->isPost()) {
            $data= $this->_getAllParams();
            
            unset($data['controller']);
            unset($data['action']);
            unset($data['module']);
            
            unset($data['city_cap_1']);
            unset($data['city_cap_2']);
            
            list($d,$m,$y)= explode("/", $data['ngay']);
            $data['ngay'] = "$y-$m-$d";

            $session_tin_nha_thau_thi_cong = new Zend_Session_Namespace('tin_nha_thau_thi_cong');
            $data['nha_thau_thi_cong_cap_1'] = $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_1;
            $data['nha_thau_thi_cong_cap_2'] = $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_2;
            if (ctype_digit($session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_3)) {
                $data['nha_thau_thi_cong_cap_3'] = $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_3;
            }
            $du_an_cap_4 = $session_tin_nha_thau_thi_cong->nha_thau_thi_cong_cap_4;
            
            $data['user_id']= $this->getUserId();

            $auth = Zend_Auth::getInstance();
            $identity = $auth->getIdentity();
            $data['target_type'] = ($identity['type'] == '1' ? '2' : $identity['type']);

            $model = new Default_Model_Tinnhathauthicong();
            $id = $model->insert($data);

            if (is_array($du_an_cap_4) && count($du_an_cap_4) > 0) {
                foreach ($du_an_cap_4 as $temp) {
                    if (ctype_digit($temp)) {
                        Core_Db_Table::getDefaultAdapter()->insert('tinnhathauthicong_nhathauthicongcap4', array('tin_nha_thau_thi_cong_id' => $id, 'nha_thau_thi_cong_cap_4' => $temp));
                    }
                }
            }
            if(isset($session_tin_nha_thau_thi_cong->photos)&&is_array($session_tin_nha_thau_thi_cong->photos)&&count($session_tin_nha_thau_thi_cong->photos)>0){
                $photos=$session_tin_nha_thau_thi_cong->photos;
                foreach ($photos as $temp) {
                    if(file_exists(UPLOAD . "/public/uploads/".$temp)){
                        Core_Db_Table::getDefaultAdapter()->insert('tinnhathauthicong_photo', array('tin_nha_thau_thi_cong_id' => $id, 'photo' => $temp));
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
            
            unset($data['city_cap_1']);
            unset($data['city_cap_2']);
            
            list($d,$m,$y)= explode("/", $data['ngay']);
            $data['ngay'] = "$y-$m-$d";

            $session_tin_du_an = new Zend_Session_Namespace('tin_du_an');
            $data['du_an_cap_1'] = $session_tin_du_an->du_an_cap_1;
            $data['du_an_cap_2'] = $session_tin_du_an->du_an_cap_2;
            if (ctype_digit($session_tin_du_an->du_an_cap_3)) {
                $data['du_an_cap_3'] = $session_tin_du_an->du_an_cap_3;
            }
            $du_an_cap_4 = $session_tin_du_an->du_an_cap_4;
            
            $data['user_id']= $this->getUserId();

            $auth = Zend_Auth::getInstance();
            $identity = $auth->getIdentity();
            $data['target_type'] = ($identity['type'] == '1' ? '2' : $identity['type']);

            $model = new Default_Model_Tinduan();
            $id = $model->insert($data);

            if (is_array($du_an_cap_4) && count($du_an_cap_4) > 0) {
                foreach ($du_an_cap_4 as $temp) {
                    if (ctype_digit($temp)) {
                        Core_Db_Table::getDefaultAdapter()->insert('tinduan_duancap4', array('tin_du_an_id' => $id, 'du_an_cap_4' => $temp));
                    }
                }
            }
            if(isset($session_tin_du_an->photos)&&is_array($session_tin_du_an->photos)&&count($session_tin_du_an->photos)>0){
                $photos=$session_tin_du_an->photos;
                foreach ($photos as $temp) {
                    if(file_exists(UPLOAD . "/public/uploads/".$temp)){
                        Core_Db_Table::getDefaultAdapter()->insert('tinduan_photo', array('tin_du_an_id' => $id, 'photo' => $temp));
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

}

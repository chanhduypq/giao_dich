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
            if($this->_getParam('type')=='duan'){
                $this->_helper->redirector('duan2', 'news', 'default');
            }
            else{
                $this->_helper->redirector('nhathauthicong2', 'news', 'default');
            }
        } 
    }

    public function duan2Action() {
        $items= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_1");
        $this->view->items=$items;
    }

    public function duan3Action() {
        if ($this->_request->isPost()) {
            $items= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_2 where du_an_cap_1_id='".$this->_getParam('muc','0')."'");
            $this->view->items=$items;
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function duan4Action() {
        if ($this->_request->isPost()) {
            $items= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_3 where du_an_cap_2_id='".$this->_getParam('muc','0')."'");
            $this->view->items=$items;
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function duan5Action() {
        if ($this->_request->isPost()) {
            
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function duan6Action() {
        if ($this->_request->isPost()) {
            
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function nhathauthicong2Action() {
        $items= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_1");
        $this->view->items=$items;
    }

    public function nhathauthicong3Action() {
        if ($this->_request->isPost()) {
            $items= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_2 where nha_thau_thi_cong_cap_1_id='".$this->_getParam('muc','0')."'");
            $this->view->items=$items;
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function nhathauthicong4Action() {
        if ($this->_request->isPost()) {
            $items= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_3 where nha_thau_thi_cong_cap_2_id='".$this->_getParam('muc','0')."'");
            $this->view->items=$items;
            
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function nhathauthicong5Action() {
        if ($this->_request->isPost()) {
            
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function nhathauthicong6Action() {
        if ($this->_request->isPost()) {
            
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
    }

    public function savenhathauthicongAction() {
        if ($this->_request->isPost()) {
            
        }
        $this->_helper->redirector('index', 'index', 'default');
    }

    public function saveduanAction() {
        if ($this->_request->isPost()) {
            
        }
        $this->_helper->redirector('index', 'index', 'default');
    }

}

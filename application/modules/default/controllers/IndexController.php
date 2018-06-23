<?php

class IndexController extends Core_Controller_Action 
{

    public function init() 
    {
        parent::init();
        $this->view->headTitle('Trang chủ', true);
    }

    public function indexAction() 
    {
        $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from hang_muc_hien_thi_at_home_page where photo is not null and photo <> ''");
        $this->view->items = $items;
    }
    
    public function loginAction() 
    {
        $this->isAjax();
        $data = $this->_request->getPost();
        if (count($data) > 0) {
            $username = $this->_request->getParam('username', null);
            $password = $this->_request->getParam('password', null);
            $index = new Admin_Model_IndexMapper();
            if ($index->login($username, $password)) {
                echo '';
            } else {
                echo 'error';
            }
        } else {
            $this->_helper->redirector('index', 'index', 'default');
        }
        return;
    }

    public function logoutAction() 
    {
        $auth = Zend_Auth::getInstance();
        $auth->clearIdentity();
        $this->_helper->redirector('index', 'index', 'default');
    }
    
    public function logoutajaxAction() 
    {
        $auth = Zend_Auth::getInstance();
        $auth->clearIdentity();
        exit;
    }

}

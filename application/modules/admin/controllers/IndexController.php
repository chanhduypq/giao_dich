<?php

class Admin_IndexController extends Core_Controller_Action 
{

    public function init() 
    {
        parent::init();
    }

    public function indexAction() 
    {
        $phone = $password = '';
        $auth = Zend_Auth::getInstance();
        if ($auth->hasIdentity()) {
            $identity = $auth->getIdentity();
            if ($identity['type'] == '1') {
                $this->_helper->redirector('index', 'nhanvien', 'admin');
            }
            else{
                $this->disableRender();
            }
        }

        $loginResult = $this->_request->getParam('loginResult');
        if ($loginResult == '0') {
            $this->view->loginResult = "Thông tin bạn vừa nhập không đúng.";
            $session=new Zend_Session_Namespace('login');
            $phone=$session->phone;
            $password=$session->password;
            $session->unsetAll();
        }
        $this->view->phone = $phone;
        $this->view->password = $password;
        
        if ($auth->hasIdentity()) {
            $identity = $auth->getIdentity();
            if ($identity['type'] != '1') {
                $this->disableRender();
            }
            
        }
        
    }

    public function loginAction() 
    {
        $phone = $this->_request->getParam('phone', null);
        $password = $this->_request->getParam('password', null);
        if ($phone == null || $password == NULL) {
            $this->_helper->redirector('index', 'index', 'admin');
        } else {
            $index = new Admin_Model_IndexMapper();
            if ($index->login($phone, $password)) {
                
                $session = new Zend_Session_Namespace('url');
                $controller = $session->controller;
                if ($controller == '') {
                    $controller = 'index';
                }
                $session->unsetAll();
                $this->_helper->redirector('index', $controller, 'admin');
            } else {
                $session=new Zend_Session_Namespace('login');
                $session->phone=$this->_getParam('phone');
                $session->password=$this->_getParam('password');
                $this->_helper->redirector('index', 'index', 'admin', array('loginResult' => '0'));
            }
        }
    }

    public function logoutAction() 
    {
        $auth = Zend_Auth::getInstance();
        $auth->clearIdentity();
		unset($_COOKIE['phone']);
        unset($_COOKIE['password']);
        setcookie('phone', null, -1, '/');
        setcookie('password', null, -1, '/');
        $this->_helper->redirector('index', 'index', 'admin');
    }

    public function changepasswordAction() 
    {
        $this->disableLayout();
    }

    public function ajaxchangepasswordAction() 
    {
        $this->disableLayout();
        $oldPassword = $this->_request->getParam('oldPassword');
        $auth = Zend_Auth::getInstance();
        $identity = $auth->getIdentity();

        if ($identity['password'] != sha1($oldPassword)) {
            echo 'error';
            return;
        }
        $newPassword = $this->_request->getParam('newPassword');
        $index = new Admin_Model_IndexMapper();
        $index->changePassword($identity['phone'], $newPassword, 'user');
        echo "";
    }

}

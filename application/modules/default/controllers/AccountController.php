<?php

class AccountController extends Core_Controller_Action {

    public function init() {
        parent::init();
    }

    public function loginAction() {
        $this->view->headTitle('Xây dựng - đăng nhập', true);
        $auth = Zend_Auth::getInstance();
        if ($auth->hasIdentity()) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        $this->view->loginResult = $this->_getParam('loginResult', '');

        if ($this->_request->isPost()) {
            $phone = $this->_getParam('phone');
            $password = $this->_getParam('password');
            if ($phone == null || $password == NULL) {
                $this->_helper->redirector('login', 'account', 'default', array('loginResult' => '0'));
            } else {
                $index = new Admin_Model_IndexMapper();
                if ($index->login($phone, $password)) {
                    $this->_helper->redirector('index', 'index', 'default');
                } else {
                    $this->_helper->redirector('login', 'account', 'default', array('loginResult' => '0'));
                }
            }
        }
    }

    public function registAction() {
        $this->view->headTitle('Xây dựng - đăng ký', true);
        $auth = Zend_Auth::getInstance();
        if ($auth->hasIdentity()) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }

        $this->view->phone_is_used = $this->_getParam('phone_is_used', '');
        $this->view->phone = $this->_getParam('phone', '');

        if ($this->_request->isPost()) {
            $phone = $this->_getParam('phone');
            $password = $this->_getParam('password');
            $type = $this->_getParam('select_loaihinh');

            $model = new Default_Model_User();

            if(!ctype_digit($phone)){
                $this->view->phone = $phone;
                $this->view->phone_is_used = '0';
                $this->view->phone_is_not_numeric = '1';
            }
            else if ($model->fetchRow("phone='$phone'") != NULL) {
                $this->view->phone = $phone;
                $this->view->phone_is_used = '1';
                $this->view->phone_is_not_numeric = '0';
            } else {
                $model->insert(array(
                    'phone' => $phone,
                    'password' => sha1($password),
                    'type' => $type,
                    'active' => ($type == '2' ? 2 : 1)
                ));
                $index = new Admin_Model_IndexMapper();
                $index->login($phone, $password);
                $this->_helper->redirector('index', 'index', 'default');
            }
        }
    }

    public function infoAction() {
        $this->view->headTitle('Xây dựng - thông tin cá nhân', true);
        $auth = Zend_Auth::getInstance();
        if (!$auth->hasIdentity()) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
    }

    public function newsuploadedAction() {
        $this->view->headTitle('Xây dựng - các tin đã đăng', true);
        $auth = Zend_Auth::getInstance();
        if (!$auth->hasIdentity()) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
    }

    public function newscancelAction() {
        $this->view->headTitle('Xây dựng - các tin đã hủy', true);
        $auth = Zend_Auth::getInstance();
        if (!$auth->hasIdentity()) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
    }

    public function logoutAction() {
        $auth = Zend_Auth::getInstance();
        $auth->clearIdentity();
        $this->_helper->redirector('index', 'index', 'default');
    }

    public function logoutajaxAction() {
        $auth = Zend_Auth::getInstance();
        $auth->clearIdentity();
        exit;
    }

}

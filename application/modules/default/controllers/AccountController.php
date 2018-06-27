<?php

class AccountController extends Core_Controller_Action {

    public function init() {
        parent::init();
        $this->view->headTitle('Trang chủ', true);
    }

    public function loginAction() {
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
                    $session = new Zend_Session_Namespace('login');
                    $session->phone = $this->_getParam('phone');
                    $session->password = $this->_getParam('password');
                    $this->_helper->redirector('login', 'account', 'default', array('loginResult' => '0'));
                }
            }
        }
    }

    public function registAction() {
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
        $auth = Zend_Auth::getInstance();
        if (!$auth->hasIdentity()) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
    }

    public function newsuploadedAction() {
        $auth = Zend_Auth::getInstance();
        if (!$auth->hasIdentity()) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
    }

    public function newscancelAction() {
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

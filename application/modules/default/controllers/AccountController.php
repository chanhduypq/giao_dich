<?php

class AccountController extends Core_Controller_Action 
{

    public function init() 
    {
        parent::init();
        $this->view->headTitle('Trang chủ', true);
    }

    
    public function loginAction() 
    {
//        $auth = Zend_Auth::getInstance();
//        if ($auth->hasIdentity()) {
//            $this->_helper->redirector('index', 'index', 'default');
//            exit;
//        }
    }
    
    public function registAction() 
    {
//        $auth = Zend_Auth::getInstance();
//        if ($auth->hasIdentity()) {
//            $this->_helper->redirector('index', 'index', 'default');
//            exit;
//        }
    }
    
    public function infoAction() 
    {
//        $auth = Zend_Auth::getInstance();
//        if (!$auth->hasIdentity()) {
//            $this->_helper->redirector('index', 'index', 'default');
//            exit;
//        }
    }
    
    public function newsuploadedAction() 
    {
//        $auth = Zend_Auth::getInstance();
//        if (!$auth->hasIdentity()) {
//            $this->_helper->redirector('index', 'index', 'default');
//            exit;
//        }
    }
    
    public function newscancelAction() 
    {
//        $auth = Zend_Auth::getInstance();
//        if (!$auth->hasIdentity()) {
//            $this->_helper->redirector('index', 'index', 'default');
//            exit;
//        }
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

<?php

class Admin_ConfigController extends Core_Controller_Action 
{

    public function init() 
    {
        parent::init();
        if (!$this->isAdmin()) {
            $this->_helper->redirector('index', 'index', 'admin');
            exit;
        }
    }

    public function indexAction() 
    {
        if ($this->_request->isPost()) {
            $data = $this->_request->getPost();
            Core_Db_Table::getDefaultAdapter()->update('config', array('guide'=>$data['guide']));
            Core::message()->addSuccess('Lưu thành công');
            $this->_helper->redirector('index', 'config', 'admin');
        }
        
        $row= Core_Db_Table::getDefaultAdapter()->fetchRow("select * from config");
        $this->view->guide = $row['guide'];
        
    }

}

<?php

class Admin_NhanvienController extends Core_Controller_Action 
{

    public function init() {
        parent::init();
        $this->model = new Default_Model_Nhanvien();
        $this->form = new Admin_Form_Nhanvien();
    }

    public function indexAction() {
        $rows = $this->model->getNhanViens($this->total, $this->limit, $this->start);
        $this->view->items = $rows;
    }

    public function addAction() {
        
        if (is_array($this->formData) && count($this->formData) > 0) {
            $this->form->getElement('phone')->addValidator('Db_NoRecordExists', true, array('table' => 'nhan_vien', 'field' => 'phone'));
            $this->form->getElement('phone')->getValidator('Db_NoRecordExists')->setMessage('Số điện thoại này đã tồn tại rồi.');
            $this->formData['password'] = sha1($this->formData['phone']);
        }
        $this->view->page = $this->_getParam('page');
        $this->renderScript = 'nhanvien/add.phtml';
    }

    public function editAction() {
        if (is_array($this->formData) && count($this->formData) > 0) {
            $this->form->getElement('phone')->addValidator('Db_NoRecordExists', false, array('table' => 'nhan_vien', 'field' => 'phone','exclude'   => array(
                   'field' => 'id',
                   'value' => $this->_getParam('id')
               )));
            $this->form->getElement('phone')->getValidator('Db_NoRecordExists')->setMessage('Số điện thoại này đã tồn tại rồi.');
        }
        $this->view->page = $this->_getParam('page');
        $this->renderScript = 'nhanvien/add.phtml';
    }

    public function deleteAction() {
    }

    

}

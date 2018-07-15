<?php

class Admin_DichvuhaumaiController extends Core_Controller_Action {

    public function init() {
        parent::init();
        $auth = Zend_Auth::getInstance();
        $identity = $auth->getIdentity();
        if ($identity['type'] != Default_Model_User::ADMIN) {
            $this->_helper->redirector('index', 'nhanvien', 'admin');
            exit;
        }
        $this->model = new Default_Model_Dichvuhaumai();
    }

    public function indexAction() {
        $model = new Default_Model_Dichvuhaumai();
        $this->view->items = $model->select('*')->fetchAll();
    }

    public function addAction() {
        $error = "";
        if ($this->_request->isPost()) {
            if (trim($this->_getParam('title')) != '') {
                $data['title'] = $this->_getParam('title');
                $data['content'] = trim($this->_getParam('content'));
                list($d,$m,$y)= explode("/", $this->_getParam('tu_ngay'));
                $data['tu_ngay']="$y-$m-$d";
                list($d,$m,$y)= explode("/", $this->_getParam('den_ngay'));
                $data['den_ngay']="$y-$m-$d";

                if (isset($_FILES['photo']['name']) && $_FILES['photo']['name'] != "") {
                    $temp = explode(".", $_FILES['photo']['name']);
                    $file_name = md5(uniqid(rand(), true)) . '.' . $temp[count($temp) - 1];
                    move_uploaded_file($_FILES['photo']['tmp_name'], 'uploads/' . $file_name);
                    $data['photo'] = $file_name;
                }
                $this->model->insert($data);

                $this->_helper->redirector('index', 'dichvuhaumai', 'admin');
                exit;
            } else {
                $error = 'Vui lòng nhập tiêu đề.';
            }
        }


        $this->view->error = $error;
        $this->view->title = '';
        $this->view->content = '';
        $this->view->tu_ngay = date('d/m/Y');
        $this->view->den_ngay = date('d/m/Y');
        $this->view->photo = '';
//        $this->view->nha_thau_thi_cong_cap_1s = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_1");
//        $this->view->du_an_cap_1s = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_1");
    }

    public function editAction() {
        $error = "";
        if ($this->_request->isPost()) {
            if (trim($this->_getParam('title')) != '') {
                $data['title'] = $this->_getParam('title');
                $data['content'] = trim($this->_getParam('content'));
                list($d,$m,$y)= explode("/", $this->_getParam('tu_ngay'));
                $data['tu_ngay']="$y-$m-$d";
                list($d,$m,$y)= explode("/", $this->_getParam('den_ngay'));
                $data['den_ngay']="$y-$m-$d";
                if (isset($_FILES['photo']['name']) && $_FILES['photo']['name'] != "") {
                    $temp = explode(".", $_FILES['photo']['name']);
                    $file_name = md5(uniqid(rand(), true)) . '.' . $temp[count($temp) - 1];
                    move_uploaded_file($_FILES['photo']['tmp_name'], 'uploads/' . $file_name);
                    $data['photo'] = $file_name;
                }
                $this->model->update($data, "id='" . $this->_getParam('id') . "'");
                $this->_helper->redirector('index', 'dichvuhaumai', 'admin');
                exit;
            } else {
                $error = 'Vui lòng nhập tiêu đề.';
            }
        }
        $dichvuhaumai = $this->model->select(array('id',"title","content","photo","DATE_FORMAT(tu_ngay,'%d/%m/%Y') AS tu_ngay","DATE_FORMAT(den_ngay,'%d/%m/%Y') AS den_ngay"))->fetchRow("id='" . $this->_getParam('id') . "'");
        $this->view->error = $error;
        $this->view->title = $dichvuhaumai['title'];
        $this->view->content = $dichvuhaumai['content'];
        $this->view->photo = $dichvuhaumai['photo'];
        $this->view->tu_ngay = $dichvuhaumai['tu_ngay'];
        $this->view->den_ngay = $dichvuhaumai['den_ngay'];
//        $this->view->nha_thau_thi_cong_cap_1s = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_1");
//        $this->view->du_an_cap_1s = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_1");

        $this->render('add');
    }

    public function deleteAction() {
        
    }

}

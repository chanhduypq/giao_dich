<?php

class Admin_ConfigController extends Core_Controller_Action {

    public function init() {
        parent::init();
        if (!$this->isAdmin()) {
            $this->_helper->redirector('index', 'index', 'admin');
            exit;
        }
    }

    public function indexAction() {
        if ($this->_request->isPost()) {
            $data = $this->_request->getPost();
            Core_Db_Table::getDefaultAdapter()->update('config', array('guide' => $data['guide']));
            Core::message()->addSuccess('Lưu thành công');
            $this->_helper->redirector('index', 'config', 'admin');
        }

        $row = Core_Db_Table::getDefaultAdapter()->fetchRow("select * from config");
        $this->view->guide = $row['guide'];
    }

    public function imageAction() {
        if ($this->_request->isPost()) {
            if (isset($_FILES['image_nhathauthicong_1']) && isset($_FILES['image_nhathauthicong_1']['name']) && $_FILES['image_nhathauthicong_1']['name'] != '') {
                $item_image = $_FILES['image_nhathauthicong_1']['name'];
                if ($item_image != "") {
                    $extension = @explode(".", $item_image);
                    $extension = $extension[count($extension) - 1];
                    $item_image = sprintf('_%s.' . $extension, uniqid(md5(time()), true));
                    $path = UPLOAD . "/public/front_end/images/database/" . $item_image;
                    move_uploaded_file($_FILES['image_nhathauthicong_1']['tmp_name'], $path);
                    Core_Db_Table::getDefaultAdapter()->update('config', array("image_nhathauthicong_1" => $item_image));
                }
                unset($_FILES['image_nhathauthicong_1']);
            }
            if (isset($_FILES['image_nhathauthicong_2']) && isset($_FILES['image_nhathauthicong_2']['name']) && $_FILES['image_nhathauthicong_2']['name'] != '') {
                $item_image = $_FILES['image_nhathauthicong_2']['name'];
                if ($item_image != "") {
                    $extension = @explode(".", $item_image);
                    $extension = $extension[count($extension) - 1];
                    $item_image = sprintf('_%s.' . $extension, uniqid(md5(time()), true));
                    $path = UPLOAD . "/public/front_end/images/database/" . $item_image;
                    move_uploaded_file($_FILES['image_nhathauthicong_2']['tmp_name'], $path);
                    Core_Db_Table::getDefaultAdapter()->update('config', array("image_nhathauthicong_2" => $item_image));
                }
                unset($_FILES['image_nhathauthicong_2']);
            }
            foreach ($_FILES as $key => $value) {
                if($value['name']==''){
                    continue;
                }
                list($name, $id, $index) = explode("_", $key);
                $item_image = $value['name'];
                $extension = @explode(".", $item_image);
                $extension = $extension[count($extension) - 1];
                $item_image = sprintf('_%s.' . $extension, uniqid(md5(time()), true));
                $path = UPLOAD . "/public/front_end/images/database/" . $item_image;
                move_uploaded_file($value['tmp_name'], $path);
                Core_Db_Table::getDefaultAdapter()->update('du_an_cap_1', array("image$index" => $item_image), "id=$id");
            }
            
        }

        $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_1");
        $this->view->items = $items;

        $row = Core_Db_Table::getDefaultAdapter()->fetchRow("select * from config");
        $this->view->row = $row;
    }

}

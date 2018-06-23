<?php

class Admin_ThietbivattuController extends Core_Controller_Action {

    public function init() {
        parent::init();
    }
    
    public function indexAction() {
        $model = new Default_Model_Thietbivattucap1();
        $sql = "SELECT "
                . "thiet_bi_vat_tu_cap_1.photo as photo,"
                . "thiet_bi_vat_tu_cap_2.photo as photo1,"
                . "thiet_bi_vat_tu_cap_3.photo as photo2,"
                . "thiet_bi_vat_tu_cap_1.name_show as name_show,"
                . "thiet_bi_vat_tu_cap_2.name_show as name_show1,"
                . "thiet_bi_vat_tu_cap_3.name_show as name_show2,"
                . "thiet_bi_vat_tu_cap_1.is_show_at_home_page as is_show_at_home_page,"
                . "thiet_bi_vat_tu_cap_2.is_show_at_home_page as is_show_at_home_page1,"
                . "thiet_bi_vat_tu_cap_3.is_show_at_home_page as is_show_at_home_page2,"
                . "thiet_bi_vat_tu_cap_1.id as id,thiet_bi_vat_tu_cap_2.id as id1,thiet_bi_vat_tu_cap_3.id as id2,thiet_bi_vat_tu_cap_1.name as name,thiet_bi_vat_tu_cap_2.name as name1,thiet_bi_vat_tu_cap_3.name as name2,thiet_bi_vat_tu_cap_2.thiet_bi_vat_tu_cap_1_id,thiet_bi_vat_tu_cap_3.thiet_bi_vat_tu_cap_2_id from thiet_bi_vat_tu_cap_1 left join thiet_bi_vat_tu_cap_2 on thiet_bi_vat_tu_cap_1.id=thiet_bi_vat_tu_cap_2.thiet_bi_vat_tu_cap_1_id left JOIN thiet_bi_vat_tu_cap_3 ON thiet_bi_vat_tu_cap_2.id=thiet_bi_vat_tu_cap_3.thiet_bi_vat_tu_cap_2_id";
        $items = Core_Db_Table::getDefaultAdapter()->fetchAll($sql);

        Admin_Model_Common::build_array_for_level($items, $level_1_items, $level_2_items, $level_3_items);

        $this->view->level_1_items = $level_1_items;
        $this->view->level_2_items = $level_2_items;
        $this->view->level_3_items = $level_3_items;
    }

    public function addAction() {
        $this->disableLayout();
        $this->disableRender();
        $data = $this->_getAllParams();
        $class_name = "Default_Model_Thietbivattucap" . ($data['level'] + 1);
        $model = new $class_name();
        if ($data['level'] == '0') {
            $bind = array(
                'name' => $data['name'],
                'name_show' => $data['name_show'],
                'is_show_at_home_page' => $data['is_show_at_home_page'],
            );
        } else {
            $bind = array(
                'name' => $data['name'],
                'thiet_bi_vat_tu_cap_' . $data['level'] . '_id' => $data['id'],
                'name_show' => $data['name_show'],
                'is_show_at_home_page' => $data['is_show_at_home_page'],
            );
        }

        echo $model->insert($bind);
        exit;
    }
    
    public function editAction() {
        $this->disableLayout();
        $this->disableRender();
        $data = $this->_getAllParams();
        $class_name = "Default_Model_Thietbivattucap" . $data['level'];
        $model = new $class_name();
        $bind = array(
            'name' => $data['name'],
            'name_show' => $data['name_show'],
            'is_show_at_home_page' => $data['is_show_at_home_page'],
        );
        $model->update($bind, "id=".$data['id']);
        exit;
    }
    
    public function deleteAction() {
        $this->disableLayout();
        $this->disableRender();
        $data = $this->_getAllParams();
        $class_name = "Default_Model_Thietbivattucap" . ($data['level']);
        $model = new $class_name();
        
        $row = $model->fetchRow("id=" . $data['id']);
        $photo = $row['photo'];
        if (trim($photo) != "") {
            @unlink("uploads/$photo");
        }
        
        $model->delete("id=".$data['id']);
        
        if($data['level']=='1'){
            Core_Db_Table::getDefaultAdapter()->query("delete from thiet_bi_vat_tu_cap_3 where thiet_bi_vat_tu_cap_2_id IN (select id from thiet_bi_vat_tu_cap_2 where thiet_bi_vat_tu_cap_1_id=".$data['id'].")")->execute();
            Core_Db_Table::getDefaultAdapter()->query("delete from thiet_bi_vat_tu_cap_2 where thiet_bi_vat_tu_cap_1_id=".$data['id'])->execute();
        }
        else if($data['level']=='2'){
            Core_Db_Table::getDefaultAdapter()->query("delete from thiet_bi_vat_tu_cap_3 where thiet_bi_vat_tu_cap_2_id=".$data['id'])->execute();
        }
    }
    
    

}

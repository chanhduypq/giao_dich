<?php

class Admin_VieccanlamController extends Core_Controller_Action {

    public function init() {
        parent::init();
    }

    public function indexAction() {
        $model = new Default_Model_Vieccanlamcap1();
        $sql = "SELECT "
                . "viec_can_lam_cap_1.photo as photo,"
                . "viec_can_lam_cap_2.photo as photo1,"
                . "viec_can_lam_cap_3.photo as photo2,"
                . "viec_can_lam_cap_1.name_show as name_show,"
                . "viec_can_lam_cap_2.name_show as name_show1,"
                . "viec_can_lam_cap_3.name_show as name_show2,"
                . "viec_can_lam_cap_1.is_show_at_home_page as is_show_at_home_page,"
                . "viec_can_lam_cap_2.is_show_at_home_page as is_show_at_home_page1,"
                . "viec_can_lam_cap_3.is_show_at_home_page as is_show_at_home_page2,"
                . "viec_can_lam_cap_1.id as id,viec_can_lam_cap_2.id as id1,viec_can_lam_cap_3.id as id2,viec_can_lam_cap_1.name as name,viec_can_lam_cap_2.name as name1,viec_can_lam_cap_3.name as name2,viec_can_lam_cap_2.viec_can_lam_cap_1_id,viec_can_lam_cap_3.viec_can_lam_cap_2_id from viec_can_lam_cap_1 left join viec_can_lam_cap_2 on viec_can_lam_cap_1.id=viec_can_lam_cap_2.viec_can_lam_cap_1_id left JOIN viec_can_lam_cap_3 ON viec_can_lam_cap_2.id=viec_can_lam_cap_3.viec_can_lam_cap_2_id";
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
        $class_name = "Default_Model_Vieccanlamcap" . ($data['level'] + 1);
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
                'viec_can_lam_cap_' . $data['level'] . '_id' => $data['id'],
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
        $class_name = "Default_Model_Vieccanlamcap" . $data['level'];
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
        $class_name = "Default_Model_Vieccanlamcap" . ($data['level']);
        $model = new $class_name();
        
        $row = $model->fetchRow("id=" . $data['id']);
        $photo = $row['photo'];
        if (trim($photo) != "") {
            @unlink("uploads/$photo");
        }

        $model->delete("id=".$data['id']);
        
        if($data['level']=='1'){
            Core_Db_Table::getDefaultAdapter()->query("delete from viec_can_lam_cap_3 where viec_can_lam_cap_2_id IN (select id from viec_can_lam_cap_2 where viec_can_lam_cap_1_id=".$data['id'].")")->execute();
            Core_Db_Table::getDefaultAdapter()->query("delete from viec_can_lam_cap_2 where viec_can_lam_cap_1_id=".$data['id'])->execute();
        }
        else if($data['level']=='2'){
            Core_Db_Table::getDefaultAdapter()->query("delete from viec_can_lam_cap_3 where viec_can_lam_cap_2_id=".$data['id'])->execute();
        }
    }
    
    

}

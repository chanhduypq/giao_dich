<?php

class Admin_CityController extends Core_Controller_Action {

    public function init() {
        parent::init();
    }

    public function indexAction() {
        $model = new Default_Model_Citycap1();
        $sql = "SELECT city_cap_1.id as id,city_cap_2.id as id1,city_cap_3.id as id2,city_cap_1.name as name,city_cap_2.name as name1,city_cap_3.name as name2,city_cap_2.city_cap_1_id,city_cap_3.city_cap_2_id from city_cap_1 left join city_cap_2 on city_cap_1.id=city_cap_2.city_cap_1_id left JOIN city_cap_3 ON city_cap_2.id=city_cap_3.city_cap_2_id";
        $items = Core_Db_Table::getDefaultAdapter()->fetchAll($sql);

        Admin_Model_Common::build_array_for_level_for_city($items, $level_1_items, $level_2_items, $level_3_items);

        $this->view->level_1_items = $level_1_items;
        $this->view->level_2_items = $level_2_items;
        $this->view->level_3_items = $level_3_items;
    }

    public function addAction() {
        $this->disableLayout();
        $this->disableRender();
        $data = $this->_getAllParams();
        $class_name = "Default_Model_Citycap" . ($data['level'] + 1);
        $model = new $class_name();
        if ($data['level'] == '0') {
            $bind = array(
                'name' => $data['name']
            );
        } else {
            $bind = array(
                'name' => $data['name'],
                'city_cap_' . $data['level'] . '_id' => $data['id']
            );
        }

        echo $model->insert($bind);
        exit;
    }
    
    public function editAction() {
        $this->disableLayout();
        $this->disableRender();
        $data = $this->_getAllParams();
        $class_name = "Default_Model_Citycap" . $data['level'];
        $model = new $class_name();
        $bind = array(
            'name' => $data['name']
        );
        $model->update($bind, "id=".$data['id']);
        exit;
    }
    
    public function deleteAction() {
        $this->disableLayout();
        $this->disableRender();
        $data = $this->_getAllParams();
        $class_name = "Default_Model_Citycap" . ($data['level']);
        $model = new $class_name();
        $model->delete("id=".$data['id']);
        
        if($data['level']=='1'){
            Core_Db_Table::getDefaultAdapter()->query("delete from city_cap_3 where city_cap_2_id IN (select id from city_cap_2 where city_cap_1_id=".$data['id'].")")->execute();
            Core_Db_Table::getDefaultAdapter()->query("delete from city_cap_2 where city_cap_1_id=".$data['id'])->execute();
        }
        else if($data['level']=='2'){
            Core_Db_Table::getDefaultAdapter()->query("delete from city_cap_3 where city_cap_2_id=".$data['id'])->execute();
        }
    }
    
    

}

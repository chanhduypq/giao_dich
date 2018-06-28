<?php

class Admin_NhathauthicongController extends Core_Controller_Action {

    public function init() {
        parent::init();
    }

    public function indexAction() {
        $sql = "SELECT "
                . "nha_thau_thi_cong_cap_1.photo as photo,"
                . "nha_thau_thi_cong_cap_2.photo as photo1,"
                . "nha_thau_thi_cong_cap_3.photo as photo2,"
                . "nha_thau_thi_cong_cap_4.photo as photo3,"
                . "nha_thau_thi_cong_cap_1.name_show as name_show,"
                . "nha_thau_thi_cong_cap_2.name_show as name_show1,"
                . "nha_thau_thi_cong_cap_3.name_show as name_show2,"
                . "nha_thau_thi_cong_cap_4.name_show as name_show3,"
                . "nha_thau_thi_cong_cap_1.is_show_at_home_page as is_show_at_home_page,"
                . "nha_thau_thi_cong_cap_2.is_show_at_home_page as is_show_at_home_page1,"
                . "nha_thau_thi_cong_cap_3.is_show_at_home_page as is_show_at_home_page2,"
                . "nha_thau_thi_cong_cap_4.is_show_at_home_page as is_show_at_home_page3,"
                . "nha_thau_thi_cong_cap_1.id as id,nha_thau_thi_cong_cap_2.id as id1,nha_thau_thi_cong_cap_3.id as id2,nha_thau_thi_cong_cap_4.id as id3,nha_thau_thi_cong_cap_1.name as name,nha_thau_thi_cong_cap_2.name as name1,nha_thau_thi_cong_cap_3.name as name2,nha_thau_thi_cong_cap_4.name as name3,nha_thau_thi_cong_cap_2.nha_thau_thi_cong_cap_1_id,nha_thau_thi_cong_cap_3.nha_thau_thi_cong_cap_2_id,nha_thau_thi_cong_cap_4.nha_thau_thi_cong_cap_3_id from nha_thau_thi_cong_cap_1 left join nha_thau_thi_cong_cap_2 on nha_thau_thi_cong_cap_1.id=nha_thau_thi_cong_cap_2.nha_thau_thi_cong_cap_1_id left JOIN nha_thau_thi_cong_cap_3 ON nha_thau_thi_cong_cap_2.id=nha_thau_thi_cong_cap_3.nha_thau_thi_cong_cap_2_id left JOIN nha_thau_thi_cong_cap_4 ON nha_thau_thi_cong_cap_3.id=nha_thau_thi_cong_cap_4.nha_thau_thi_cong_cap_3_id";
        $items = Core_Db_Table::getDefaultAdapter()->fetchAll($sql);

        Admin_Model_Common::build_array_for_level($items, $level_1_items, $level_2_items, $level_3_items, $level_4_items);

        $this->view->level_1_items = $level_1_items;
        $this->view->level_2_items = $level_2_items;
        $this->view->level_3_items = $level_3_items;
        $this->view->level_4_items = $level_4_items;
    }

    public function addAction() {
        $this->disableLayout();
        $this->disableRender();
        $data = $this->_getAllParams();
        $class_name = "Default_Model_Nhathauthicong" . ($data['level'] + 1);
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
                'nha_thau_thi_cong_cap_' . $data['level'] . '_id' => $data['id'],
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
        $class_name = "Default_Model_Nhathauthicong" . $data['level'];
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
        $class_name = "Default_Model_Nhathauthicong" . ($data['level']);
        $model = new $class_name();
        
        $row = $model->fetchRow("id=" . $data['id']);
        $photo = $row['photo'];
        if (trim($photo) != "") {
            @unlink("uploads/$photo");
        }

        $model->delete("id=".$data['id']);
        
        if($data['level']=='1'){
            Core_Db_Table::getDefaultAdapter()->query("delete from nha_thau_thi_cong_cap_4 where nha_thau_thi_cong_cap_3_id IN (select id from nha_thau_thi_cong_cap_3 where nha_thau_thi_cong_cap_2_id IN (select id from nha_thau_thi_cong_cap_2 where nha_thau_thi_cong_cap_1_id =".$data['id']."))")->execute();
            Core_Db_Table::getDefaultAdapter()->query("delete from nha_thau_thi_cong_cap_3 where nha_thau_thi_cong_cap_2_id IN (select id from nha_thau_thi_cong_cap_2 where nha_thau_thi_cong_cap_1_id=".$data['id'].")")->execute();
            Core_Db_Table::getDefaultAdapter()->query("delete from nha_thau_thi_cong_cap_2 where nha_thau_thi_cong_cap_1_id=".$data['id'])->execute();
        }
        else if($data['level']=='2'){
            Core_Db_Table::getDefaultAdapter()->query("delete from nha_thau_thi_cong_cap_4 where nha_thau_thi_cong_cap_3_id IN (select id from nha_thau_thi_cong_cap_3 where nha_thau_thi_cong_cap_2_id=".$data['id'].")")->execute();
            Core_Db_Table::getDefaultAdapter()->query("delete from nha_thau_thi_cong_cap_3 where nha_thau_thi_cong_cap_2_id=".$data['id'])->execute();
        }
        else if($data['level']=='3'){
            Core_Db_Table::getDefaultAdapter()->query("delete from nha_thau_thi_cong_cap_4 where nha_thau_thi_cong_cap_3_id=".$data['id'])->execute();
        }
    }
    
    

}

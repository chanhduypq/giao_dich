<?php

class Admin_DuanchonController extends Core_Controller_Action {

    public function init() {
        parent::init();
        $this->view->headTitle('Các dự án đã chọn', true);
    }

    public function indexAction() {
        $allItems= Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "title,content,"
                . "photo,"
                . "phone,"
                . "DATE_FORMAT(du_an_da_chon.created_at,'%d/%m/%Y') AS created_at,"
                . "tin_du_an.id,tin_du_an.status "
                . "from tin_du_an "
                . "join du_an_da_chon on tin_du_an.id=du_an_da_chon.tin_du_an_id "
                . "join user on user.id=du_an_da_chon.user_id "
                . "left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id "
                . "where tin_du_an.du_an_cap_1 IN (select du_an_cap_1_id from user_duan where user_id='".$this->getUserId()."')"
//                . "where is_quang_cao=1 and (tin_du_an.target_type=3 or tin_du_an.target_type=4) " nếu tin này là khách hàng hoặc đối tác đăng
                . "group by tin_du_an.id,user.phone "
                . "order by du_an_da_chon.created_at ASC");
        
        $temps=array();
        foreach ($allItems as $allItem){
            $users[$allItem['id']][]=$allItem['created_at'].': '.$allItem['phone'];
            $temps[$allItem['id']]=array(
                'title'=>$allItem['title'],
                'content'=>$allItem['content'],
                'photo'=>$allItem['photo'],
                'status'=>$allItem['status'],
                'users_da_chon'=>$users[$allItem['id']],
            );
        }
        
        $this->view->items = $temps;
    }
    
    public function batdaugiaodichAction() {
        $this->isAjax();
        if(ctype_digit($this->_getParam('id'))){
            Core_Db_Table::getDefaultAdapter()->query("update tin_du_an set status=2 where id='".$this->_getParam('id')."'")->execute();
        }
        $this->_helper->redirector('index', 'duanchon', 'admin');
    }
    
    public function hoanthanhgiaodichAction() {
        if(ctype_digit($this->_getParam('id'))){
            Core_Db_Table::getDefaultAdapter()->query("update tin_du_an set status=3 where id='".$this->_getParam('id')."'")->execute();
        }
        $this->_helper->redirector('index', 'duanchon', 'admin');
    }
    
}

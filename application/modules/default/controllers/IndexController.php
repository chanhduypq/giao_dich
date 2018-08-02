<?php

class IndexController extends Core_Controller_Action {

    public function init() {
        parent::init();
        $this->view->headTitle('Xây dựng', true);
    }

    public function indexAction() {
        if(LAYOUT!='1'){
            $this->render('index1');
        }
    }

    public function searchAction() {
        $muc = $this->_getParam('muc','0');
        $city=$this->_getParam('city','0');
        if(strpos($muc, '_')!==FALSE){
            $temp=explode('_', $muc);
            if(count($temp)==2){
                list($muc,$muccap2)= explode('_', $muc);
                $muccap3=$this->_getParam('muccap3','0');
            }
            else if(count($temp)==3){
                list($muc,$muccap2,$muccap3)= explode('_', $muc);
            }
            
        }
        else{
            $muccap2=$this->_getParam('muccap2','0');
            $muccap3=$this->_getParam('muccap3','0');
        }
        
        if(strpos($city, '_')!==FALSE){
            list($city,$citycap2)= explode('_', $city);
        }
        else{
            $citycap2=$this->_getParam('citycap2','0');
        }
        if (($muc!='0'&&!ctype_digit($muc))||!ctype_digit($muccap2)) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        if (($city!='0'&&!ctype_digit($city))||!ctype_digit($citycap2)) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }

        $where = "(status<>3 OR status is null) and is_active=1";
        $where .= " and title like '%".trim($this->_getParam('q'),'')."%'";
        if ($muc!='0'&&ctype_digit($muc)){
            $where .= " and du_an_cap_1='$muc'";
        }
        if (ctype_digit($muccap2) && $muccap2 != '0') {
            $where .= " and du_an_cap_2='$muccap2'";
        }
        if (ctype_digit($muccap3) && $muccap3 != '0') {
            $where .= " and id IN (select tin_du_an_id from tinduan_duancap3 where du_an_cap_3='$muccap3')";
        }
        
        if ($city!='0'&&ctype_digit($city)){
            $where .= " and city_cap_1='$city'";
        }
        if (ctype_digit($citycap2) && $citycap2 != '0') {
            $where .= " and city_cap_2='$citycap2'";
        }
        
        $where_target_type='';
        if(in_array($this->_getParam('tab','tatCa'),array('doiTac','nhanVien','tatCa','khachHang'))){
            $tab=$this->_getParam('tab','tatCa');
            if($tab=='doiTac'){
                $where_target_type .= " target_type=4";
            }
            else if($tab=='nhanVien'){
                $where_target_type .= " target_type=2";
            }
            else if($tab=='khachHang'){
                $where_target_type .= " target_type=3";
            }
        }

        $items = Default_Model_Tinduan::getTinDuAns($where,$where_target_type,$allItems,$this->total, $this->limit, $this->start);
        
        $this->view->items = $items;
        $this->view->quangcao_items = $this->getTinQuangCaos($allItems);

        $this->view->tab= $this->_getParam('tab','tatCa');
        $this->view->mucCap2Get= (ctype_digit($muccap2)&&$muccap2!='0')?"muccap2/$muccap2":"";
        $this->view->mucCap3Get= (ctype_digit($muccap3)&&$muccap3!='0')?"muccap3/$muccap3":"";
        $this->view->mucGet= "muc/$muc";
        $this->view->cityGet= "city/$city";
        $this->view->cityCap2Get= (ctype_digit($citycap2) && $citycap2 != '0')?"citycap2/$citycap2":"";
        $this->view->q=trim($this->_getParam('q'),'');
        $this->view->muc=$muc;
        $this->view->mucCap2=$muccap2;
        $this->view->mucCap3=$muccap3;
        $this->view->city=$city;
        $this->view->cityCap2=$citycap2;
        $this->view->headTitle($this->getHeadTitleByDuAnCap1Id($muc), true);
        $this->view->tenMuc= $this->getTenMuc($muc, $muccap2, $muccap3);
        $this->view->tenKhuVuc= $this->getTenKhuVuc($city, $citycap2);
    }
    
    private function getTenMuc($muccap1,$muccap2,$muccap3){
        $tenMuc = 'Tất cả danh mục';
        if(ctype_digit($muccap3)&&$muccap3!='0'){
            $du_an_cap_3s=Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_3");
            foreach ($du_an_cap_3s as $du_an_cap_3){
                if($du_an_cap_3['id']==$muccap3){
                    $tenMuc=$du_an_cap_3['name'];
                }
            }
        }
        else if(ctype_digit($muccap2)&&$muccap2!='0'){
            if($tenMuc=='Tất cả danh mục'){
                $du_an_cap_2s=Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_2");
                foreach ($du_an_cap_2s as $du_an_cap_2){
                    if($du_an_cap_2['id']==$muccap2){
                        $tenMuc=$du_an_cap_2['name'];
                    }
                }
            }
            
        }
        else{
            if(ctype_digit($muccap1)&&$muccap1!='0'){
                if($tenMuc=='Tất cả danh mục'){
                    $du_an_cap_1s=Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_1");
                    foreach ($du_an_cap_1s as $du_an_cap_1){
                        if($du_an_cap_1['id']==$muccap1){
                            $tenMuc=$du_an_cap_1['name'];
                        }
                    }
                }
            }
        }
        return $tenMuc;
    }
    
    private function getTenKhuVuc($citycap1,$citycap2){
        $tenKhuVuc = 'Khu vực';
        if(ctype_digit($citycap2)&&$citycap2!='0'){
            $du_an_cap_2s=Core_Db_Table::getDefaultAdapter()->fetchAll("select * from city_cap_2");
            foreach ($du_an_cap_2s as $du_an_cap_2){
                if($du_an_cap_2['id']==$citycap2){
                    $tenKhuVuc=$du_an_cap_2['name'];
                }
            }
        }
        else{
            if(ctype_digit($citycap1)&&$citycap1!='0'){
                    $du_an_cap_1s=Core_Db_Table::getDefaultAdapter()->fetchAll("select * from city_cap_1");
                    foreach ($du_an_cap_1s as $du_an_cap_1){
                        if($du_an_cap_1['id']==$citycap1){
                            $tenKhuVuc=$du_an_cap_1['name'];
                        }
                    }
            }
        }
        return $tenKhuVuc;
    }

    public function gettoroiAction() {
        if(!ctype_digit($this->_getParam('id'))){
            $this->isAjax();
            echo '';
            exit;
        }
        $this->disableLayout();
        $this->view->item= Core_Db_Table::getDefaultAdapter()->fetchRow("select title,content,photo,city_cap_1.name as city_cap_1_name,city_cap_2.name as city_cap_2_name from dich_vu_hau_mai join city_cap_1 on city_cap_1.id=dich_vu_hau_mai.city_cap_1 join city_cap_2 on city_cap_2.id=dich_vu_hau_mai.city_cap_2 where dich_vu_hau_mai.id='".$this->_getParam('id')."'");
    }
    public function dichvuhaumaiAction() {
        
        if(!ctype_digit($this->_getParam('id'))){
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        $dvhm= Core_Db_Table::getDefaultAdapter()->fetchRow("select * from dich_vu_hau_mai where id='".$this->_getParam('id')."'");
        $where = "(status<>3 OR status is null) and is_active=1 and is_dich_vu_hau_mai=1";
        if(ctype_digit($dvhm['city_cap_1'])){
            $where.=' and city_cap_1='.$dvhm['city_cap_1'];
        }
        if(ctype_digit($dvhm['city_cap_2'])){
            $where.=' and city_cap_2='.$dvhm['city_cap_2'];
        }

        $where_target_type='';
        if(in_array($this->_getParam('tab','tatCa'),array('doiTac','nhanVien','tatCa','khachHang'))){
            $tab=$this->_getParam('tab','tatCa');
            if($tab=='doiTac'){
                $where_target_type .= " target_type=4";
            }
            else if($tab=='nhanVien'){
                $where_target_type .= " target_type=2";
            }
            else if($tab=='khachHang'){
                $where_target_type .= " target_type=3";
            }
        }

        
        $items = Default_Model_Tinduan::getTinDuAns($where,$where_target_type,$allItems,$this->total, $this->limit, $this->start);
        
        $this->view->items = $items;
        $this->view->quangcao_items = $this->getTinQuangCaos($allItems);

        $this->view->tab= $this->_getParam('tab','tatCa');
        $this->view->id= $this->_getParam('id','0');
        $this->view->headTitle("Xây dựng - Dịch vụ hậu mãi", true);
    }

    public function duanAction() {
        $muc = $this->_getParam('muc');

        $du_an_cap_1= $this->getDuAnCap1IdBySlug($muc);
        
        if ($du_an_cap_1 == '0') {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        
        $where = "(status<>3 OR status is null) and is_active=1 and du_an_cap_1='$du_an_cap_1'";

        $muccap2 = $this->_getParam('muccap2', '0');
        if (ctype_digit($muccap2) && $muccap2 != '0') {
            $where .= " and du_an_cap_2='$muccap2'";
        }
        
        $where_target_type='';
        if(in_array($this->_getParam('tab','tatCa'),array('doiTac','nhanVien','tatCa','khachHang'))){
            $tab=$this->_getParam('tab','tatCa');
            if($tab=='doiTac'){
                $where_target_type .= " target_type=4";
            }
            else if($tab=='nhanVien'){
                $where_target_type .= " target_type=2";
            }
            else if($tab=='khachHang'){
                $where_target_type .= " target_type=3";
            }
        }

        $items = Default_Model_Tinduan::getTinDuAns($where,$where_target_type,$allItems,$this->total, $this->limit, $this->start);
        $this->setupPhoto($items);
        $this->setupPhoto($allItems);
        
        $this->view->items = $items;
        $this->view->quangcao_items = $this->getTinQuangCaos($allItems);
        $this->view->muc = $muc;
        $this->view->du_an_cap_2s = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_2 where du_an_cap_1_id='$du_an_cap_1'");
        $this->view->du_an_cap_2_selected = $muccap2;

        $this->view->tab= $this->_getParam('tab','tatCa');
        $this->view->mucCap2Get= (ctype_digit($muccap2) && $muccap2 != '0')?"muccap2/$muccap2":"";
        $this->view->mucGet= "muc/$muc";
        $this->view->headTitle($this->getHeadTitleByDuAnCap1Id($du_an_cap_1), true);
    }
    
    

    public function nhathauthicongAction() {
        $this->view->headTitle('Nhà thầu thi công', true);
        $muc = $this->_getParam('muc', '0');
        if (ctype_digit($muc) && $muc != '0') {
            $where = "is_active=1 and nha_thau_thi_cong_cap_1='$muc'";
        } else {
            $where = 'is_active=1';
        }
        
        $where_target_type='';
        if(in_array($this->_getParam('tab','tatCa'),array('doiTac','nhanVien','tatCa','khachHang'))){
            $tab=$this->_getParam('tab','tatCa');
            if($tab=='doiTac'){
                $where_target_type .= " target_type=4";
            }
            else if($tab=='nhanVien'){
                $where_target_type .= " target_type=2";
            }
            else if($tab=='khachHang'){
                $where_target_type .= " target_type=3";
            }
        }
        
        $items = Default_Model_Tinnhathauthicong::getTinNhaThauThiCongs($where,$where_target_type,$allItems,$this->total, $this->limit, $this->start);

        $this->setupPhoto($items);
        $this->setupPhoto($allItems);
        $this->view->items = $items;
        $this->view->quangcao_items = $this->getTinQuangCaos($allItems);
        $this->view->muc_selected = $muc;
        $mucs = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from nha_thau_thi_cong_cap_1");
        if (ctype_digit($muc) && $muc != '0') {
            foreach ($mucs as $m) {
                if ($m['id'] == $muc) {
                    $this->view->headTitle('Nhà thầu thi công - ' . $m['name'], true);
                    break;
                }
            }
        }
        $this->view->mucs = $mucs;
        $this->view->mucGet= (ctype_digit($muc) && $muc != '0')?"muc/$muc":"";
        $this->view->tab= $this->_getParam('tab','tatCa');
    }
    
    private function setupPhoto(&$items){
        for($i=0;$i<count($items);$i++){
            if($items[$i]['photo']==''){
                $items[$i]['photo']=PHOTO_DEFAULT;
            }
            else{
                $items[$i]['photo']='/uploads/'.$items[$i]['photo'];
            }
        }
    }

    public function duandetailAction() {
        if (!ctype_digit($this->_getParam('id'))) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        $items = Default_Model_Tinduan::getTinDuAnDetail($this->_getParam('id', 0));
        $this->setupPhoto($items);

        $this->view->headTitle('Dự án - ' . html_entity_decode(implode(" ", array_slice(preg_split('/[\s,]+/', $items[0]['title']), 0, 5))), true);
        $this->view->du_an_cap_3s = Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select "
                . "name "
                . "from du_an_cap_3 "
                . "join tinduan_duancap3 on tinduan_duancap3.du_an_cap_3=du_an_cap_3.id "
                . "where tinduan_duancap3.tin_du_an_id='" . $this->_getParam('id', 0) . "'");
        $this->view->du_an_cap_4s = Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select "
                . "name "
                . "from du_an_cap_4 "
                . "join tinduan_duancap4 on tinduan_duancap4.du_an_cap_4=du_an_cap_4.id "
                . "where tinduan_duancap4.tin_du_an_id='" . $this->_getParam('id', 0) . "'");
        $this->view->items = $items;
        
        $user_duan= Core_Db_Table::getDefaultAdapter()->fetchAll("select phone,full_name from user join user_duan on user_duan.user_id=user.id where user_duan.du_an_cap_1_id='".$items[0]['du_an_cap_1_id']."'");
        $this->view->user_duan = $user_duan;
        
        $items_lienquan= Default_Model_Tinduan::getTinDuAnLienQuans($items[0]['id'],$items[0]['du_an_cap_1_id']);
        $this->view->items_lienquan = $items_lienquan;
        $this->view->slug= $this->getDuAnCap1SlugById($items[0]['du_an_cap_1_id']);
        
        $so_luot_xem= Core_Db_Table::getDefaultAdapter()->fetchOne("select so_luot_xem from tin_du_an where id='".$this->_getParam('id')."'");
        $so_luot_xem++;
        Core_Db_Table::getDefaultAdapter()->query("update tin_du_an set so_luot_xem=$so_luot_xem where id='".$this->_getParam('id')."'")->execute();        
    }

    public function nhathauthicongdetailAction() {
        if (!ctype_digit($this->_getParam('id'))) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        $items = Default_Model_Tinnhathauthicong::getTinNhaThauThiCongDetail($this->_getParam('id', 0));
        $this->setupPhoto($items);

        $this->view->items = $items;
        $this->view->headTitle('Nhà thầu thi công - ' . html_entity_decode(implode(" ", array_slice(preg_split('/[\s,]+/', $items[0]['title']), 0, 5))), true);

        $this->view->nha_thau_thi_cong_cap_3s = Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select "
                . "name "
                . "from nha_thau_thi_cong_cap_3 "
                . "join tinnhathauthicong_nhathauthicongcap3 on tinnhathauthicong_nhathauthicongcap3.nha_thau_thi_cong_cap_3=nha_thau_thi_cong_cap_3.id "
                . "where tinnhathauthicong_nhathauthicongcap3.tin_nha_thau_thi_cong_id='" . $this->_getParam('id', 0) . "'");
        $this->view->nha_thau_thi_cong_cap_4s = Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select "
                . "name "
                . "from nha_thau_thi_cong_cap_4 "
                . "join tinnhathauthicong_nhathauthicongcap4 on tinnhathauthicong_nhathauthicongcap4.nha_thau_thi_cong_cap_4=nha_thau_thi_cong_cap_4.id "
                . "where tinnhathauthicong_nhathauthicongcap4.tin_nha_thau_thi_cong_id='" . $this->_getParam('id', 0) . "'");
        
        $user_nhathauthicong= Core_Db_Table::getDefaultAdapter()->fetchAll("select phone,full_name from user join user_nhathauthicong on user_nhathauthicong.user_id=user.id where user_nhathauthicong.nha_thau_thi_cong_cap_1_id='".$items[0]['nha_thau_thi_cong_cap_1_id']."'");
        $this->view->user_nhathauthicong = $user_nhathauthicong;
        
        $items_lienquan= Default_Model_Tinnhathauthicong::getTinNhaThauThiCongLienQuans($items[0]['id'],$items[0]['nha_thau_thi_cong_cap_1_id']);
        $this->view->items_lienquan = $items_lienquan;
        
        $so_luot_xem= Core_Db_Table::getDefaultAdapter()->fetchOne("select so_luot_xem from tin_nha_thau_thi_cong where id='".$this->_getParam('id')."'");
        $so_luot_xem++;
        Core_Db_Table::getDefaultAdapter()->query("update tin_nha_thau_thi_cong set so_luot_xem=$so_luot_xem where id='".$this->_getParam('id')."'")->execute();   
        
    }
    
    public function editduanAction() {
        if (!ctype_digit($this->_getParam('id'))) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        if ($this->_request->isPost()) {
            
            $data= $this->_getAllParams();
            
            unset($data['controller']);
            unset($data['action']);
            unset($data['module']);
            
            $model = new Default_Model_Tinduan();
            $model->update($data,"id='".$this->_getParam('id',0)."'");
            
            $photos= $this->_getParam('photos');
            if(trim($photos)!=''){
                $photos= explode(",", $photos);
                foreach ($photos as $photo){
                    Core_Db_Table::getDefaultAdapter()->delete('tinduan_photo',"tin_du_an_id='".$this->_getParam('id',0)."' and photo='$photo'");
                    @unlink(UPLOAD . "/public/uploads/".$photo);
                }
            }
            
            $this->view->success='Chỉnh sửa thành công';
        }
        $items = Default_Model_Tinduan::getTinDuAnDetail($this->_getParam('id', 0));

        $this->view->headTitle('Dự án - ' . html_entity_decode(implode(" ", array_slice(preg_split('/[\s,]+/', $items[0]['title']), 0, 5))), true);
        $this->view->items = $items;
    }
    
    public function editnhathauthicongAction() {
        if (!ctype_digit($this->_getParam('id'))) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        
        if ($this->_request->isPost()) {
            $data= $this->_getAllParams();
            
            unset($data['controller']);
            unset($data['action']);
            unset($data['module']);
            

            $model = new Default_Model_Tinnhathauthicong();
            $model->update($data,"id='".$this->_getParam('id',0)."'");
            
            $photos= $this->_getParam('photos');
            if(trim($photos)!=''){
                $photos= explode(",", $photos);
                foreach ($photos as $photo){
                    Core_Db_Table::getDefaultAdapter()->delete('tinnhathauthicong_photo',"tin_nha_thau_thi_cong_id='".$this->_getParam('id',0)."' and photo='$photo'");
                    @unlink(UPLOAD . "/public/uploads/".$photo);
                }
            }

            $this->view->success='Chỉnh sửa thành công';
        }
        
        $items = Default_Model_Tinnhathauthicong::getTinNhaThauThiCongDetail($this->_getParam('id', 0));

        $this->view->items = $items;
        $this->view->headTitle('Nhà thầu thi công - ' . html_entity_decode(implode(" ", array_slice(preg_split('/[\s,]+/', $items[0]['title']), 0, 5))), true);

    }

    
    
    private function getHeadTitleByDuAnCap1Id($duAnCap1Id){
        if ($duAnCap1Id == '1') {
            return 'Dự án - dân dụng';
        } else if ($duAnCap1Id == '2') {
            return 'Dự án - hạ tầng';
        } else if ($duAnCap1Id == '3') {
            return 'Dự án - cầu đường';
        } else if ($duAnCap1Id == '4') {
            return 'Dự án - hoàn thiện nội ngoại thất';
        } else if ($duAnCap1Id == '5') {
            return 'Dự án - kiến trúc';
        } else if ($duAnCap1Id == '6') {
            return 'Dự án - điện nước';
        } else if ($duAnCap1Id == '7') {
            return 'Dự án - sửa chữa';
        } else if ($duAnCap1Id == '8') {
            return 'Dự án - cây xanh';
        } else if ($duAnCap1Id == '9') {
            return 'Dự án - dịch vụ vệ sinh';
        } else {
            return '';
        }
    }
    
    private function getBackgroundByDuAnCap1Id($duAnCap1Id){
        if ($duAnCap1Id == '1') {
            return 'cau-duong.png';
        } else if ($duAnCap1Id == '2') {
            return 'ha-tang.png';
        } else if ($duAnCap1Id == '3') {
            return 'cau-duong.png';
        } else if ($duAnCap1Id == '4') {
            return 'hoan-thien-noi-ngoai-that.png';
        } else if ($duAnCap1Id == '5') {
            return 'kien-truc.png';
        } else if ($duAnCap1Id == '6') {
            return 'dien-nuoc.png';
        } else if ($duAnCap1Id == '7') {
            return 'sua-chua.png';
        } else if ($duAnCap1Id == '8') {
            return 'cay-xanh.png';
        } else if ($duAnCap1Id == '9') {
            return 'dich-vu-ve-sinh.png';
        } else {
            return '';
        }
    }
    
    private function getDuAnCap1IdBySlug($slug){
        if ($slug == 'dan-dung') {
            return '1';
        } else if ($slug == 'ha-tang') {
            return '2';
        } else if ($slug == 'cau-duong') {
            return '3';
        } else if ($slug == 'hoan-thien-noi-ngoai-that') {
            return '4';
        } else if ($slug == 'kien-truc') {
            return '5';
        } else if ($slug == 'dien-nuoc') {
            return '6';
        } else if ($slug == 'sua-chua') {
            return '7';
        } else if ($slug == 'cay-xanh') {
            return '8';
        } else if ($slug == 'dich-vu-ve-sinh') {
            return '9';
        } else {
            return '0';
        }
    }
    
    private function getDuAnCap1SlugById($du_an_cap_1_id){
        if($du_an_cap_1_id=='1'){
            $slug='dan-dung';
        }
        else if($du_an_cap_1_id=='2'){
            $slug='ha-tang';
        }
        else if($du_an_cap_1_id=='3'){
            $slug='cau-duong';
        }
        else if($du_an_cap_1_id=='4'){
            $slug='hoan-thien-noi-ngoai-that';
        }
        else if($du_an_cap_1_id=='5'){
            $slug='kien-truc';
        }
        else if($du_an_cap_1_id=='6'){
            $slug='dien-nuoc';
        }
        else if($du_an_cap_1_id=='7'){
            $slug='sua-chua';
        }
        else if($du_an_cap_1_id=='8'){
            $slug='cay-xanh';
        }
        else if($du_an_cap_1_id=='9'){
            $slug='dich-vu-ve-sinh';
        }
        else{
            $slug='';
        }
        return $slug;
    }

}

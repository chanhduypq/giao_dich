<?php

class IndexController extends Core_Controller_Action {

    public function init() {
        parent::init();
        $this->view->headTitle('Xây dựng', true);
    }

    public function indexAction() {
    }

    public function searchAction() {
        $muc = $this->_getParam('muc','0');
        $city=$this->_getParam('city','0');
        if(strpos($muc, '_')!==FALSE){
            list($muc,$muccap2)= explode('_', $muc);
        }
        else{
            $muccap2=$this->_getParam('muccap2','0');
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

        if ($muc == '1') {
            $du_an_cap_1 = '1';
            $this->view->headTitle('Dự án - dân dụng', true);
        } else if ($muc == '2') {
            $du_an_cap_1 = '2';
            $this->view->headTitle('Dự án - hạ tầng', true);
        } else if ($muc == '3') {
            $du_an_cap_1 = '3';
            $this->view->headTitle('Dự án - cầu đường', true);
        } else if ($muc == '4') {
            $du_an_cap_1 = '4';
            $this->view->headTitle('Dự án - hoàn thiện nội ngoại thất', true);
        } else if ($muc == '5') {
            $du_an_cap_1 = '5';
            $this->view->headTitle('Dự án - kiến trúc', true);
        } else if ($muc == '6') {
            $du_an_cap_1 = '6';
            $this->view->headTitle('Dự án - điện nước', true);
        } else if ($muc == '7') {
            $du_an_cap_1 = '7';
            $this->view->headTitle('Dự án - sửa chữa', true);
        } else if ($muc == '8') {
            $du_an_cap_1 = '8';
            $this->view->headTitle('Dự án - cây xanh', true);
        } else if ($muc == '9') {
            $du_an_cap_1 = '9';
            $this->view->headTitle('Dự án - dịch vụ vệ sinh', true);
        } else {
            $du_an_cap_1 = '0';
        }
        $where = "(status<>3 OR status is null) and is_active=1";
        $where .= " and title like '%".trim($this->_getParam('q'),'')."%'";
        if ($muc!='0'&&ctype_digit($muc)){
            $where .= " and du_an_cap_1='$du_an_cap_1'";
        }
        if (ctype_digit($muccap2) && $muccap2 != '0') {
            $where .= " and du_an_cap_2='$muccap2'";
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
        
        $this->setCountType($allItems, $nhanVienCount, $doiTacCount, $khachHangCount);

        $this->view->items = $items;
        $this->view->quangcao_items = $this->getTinQuangCaos($allItems);
        $this->view->muc = $muc;
        $this->view->allCount = count($allItems);
        $this->view->nhanVienCount = $nhanVienCount;
        $this->view->doiTacCount = $doiTacCount;
        $this->view->khachHangCount = $khachHangCount;

        $this->view->du_an_da_chon_ids = Default_Model_Tinduan::getTinDuAnIdDuocChons($this->getUserId());
        $this->view->tab= $this->_getParam('tab','tatCa');
        $this->view->mucCap2Get= (ctype_digit($muccap2)&&$muccap2!='0')?"muccap2/$muccap2":"";
        $this->view->mucGet= "muc/$muc";
        $this->view->cityGet= "city/$city";
        $this->view->cityCap2Get= (ctype_digit($citycap2) && $citycap2 != '0')?"citycap2/$citycap2":"";
        $this->view->q=trim($this->_getParam('q'),'');
        $this->view->muc=$muc;
        $this->view->mucCap2=$muccap2;
        $this->view->city=$city;
        $this->view->cityCap2=$citycap2;
        
        $tenMuc = 'Tất cả danh mục';
        if(ctype_digit($muccap2)&&$muccap2!='0'){
            $du_an_cap_2s=Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_2");
            foreach ($du_an_cap_2s as $du_an_cap_2){
                if($du_an_cap_2['id']==$muccap2){
                    $tenMuc=$du_an_cap_2['name'];
                }
            }
        }
        else{
            if(ctype_digit($muc)&&$muc!='0'){
                if($tenMuc=='Tất cả danh mục'){
                    $du_an_cap_1s=Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_1");
                    foreach ($du_an_cap_1s as $du_an_cap_1){
                        if($du_an_cap_1['id']==$muc){
                            $tenMuc=$du_an_cap_1['name'];
                        }
                    }
                }
            }
        }
        $this->view->tenMuc=$tenMuc;
        
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
            if(ctype_digit($city)&&$city!='0'){
                    $du_an_cap_1s=Core_Db_Table::getDefaultAdapter()->fetchAll("select * from city_cap_1");
                    foreach ($du_an_cap_1s as $du_an_cap_1){
                        if($du_an_cap_1['id']==$city){
                            $tenKhuVuc=$du_an_cap_1['name'];
                        }
                    }
            }
        }
        $this->view->tenKhuVuc=$tenKhuVuc;
        
        
    }

    public function duanAction() {
        $muc = $this->_getParam('muc');

        if ($muc == 'dan-dung') {
            $du_an_cap_1 = '1';
            $this->view->headTitle('Dự án - dân dụng', true);
        } else if ($muc == 'ha-tang') {
            $du_an_cap_1 = '2';
            $this->view->headTitle('Dự án - hạ tầng', true);
        } else if ($muc == 'cau-duong') {
            $du_an_cap_1 = '3';
            $this->view->headTitle('Dự án - cầu đường', true);
        } else if ($muc == 'hoan-thien-noi-ngoai-that') {
            $du_an_cap_1 = '4';
            $this->view->headTitle('Dự án - hoàn thiện nội ngoại thất', true);
        } else if ($muc == 'kien-truc') {
            $du_an_cap_1 = '5';
            $this->view->headTitle('Dự án - kiến trúc', true);
        } else if ($muc == 'dien-nuoc') {
            $du_an_cap_1 = '6';
            $this->view->headTitle('Dự án - điện nước', true);
        } else if ($muc == 'sua-chua') {
            $du_an_cap_1 = '7';
            $this->view->headTitle('Dự án - sửa chữa', true);
        } else if ($muc == 'cay-xanh') {
            $du_an_cap_1 = '8';
            $this->view->headTitle('Dự án - cây xanh', true);
        } else if ($muc == 'dich-vu-ve-sinh') {
            $du_an_cap_1 = '9';
            $this->view->headTitle('Dự án - dịch vụ vệ sinh', true);
        } else {
            $du_an_cap_1 = '0';
        }
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
        
        $this->setCountType($allItems, $nhanVienCount, $doiTacCount, $khachHangCount);

        $this->view->items = $items;
        $this->view->quangcao_items = $this->getTinQuangCaos($allItems);
        $this->view->muc = $muc;
        $this->view->du_an_cap_2s = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_2 where du_an_cap_1_id='$du_an_cap_1'");
        $this->view->du_an_cap_2_selected = $muccap2;
        $this->view->allCount = count($allItems);
        $this->view->nhanVienCount = $nhanVienCount;
        $this->view->doiTacCount = $doiTacCount;
        $this->view->khachHangCount = $khachHangCount;

        $this->view->du_an_da_chon_ids = Default_Model_Tinduan::getTinDuAnIdDuocChons($this->getUserId());
        $this->view->tab= $this->_getParam('tab','tatCa');
        $this->view->mucCap2Get= (ctype_digit($muccap2) && $muccap2 != '0')?"muccap2/$muccap2":"";
        $this->view->mucGet= "muc/$muc";
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

        $this->setCountType($allItems, $nhanVienCount, $doiTacCount, $khachHangCount);
        
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
        $this->view->allCount = count($allItems);
        $this->view->nhanVienCount = $nhanVienCount;
        $this->view->doiTacCount = $doiTacCount;
        $this->view->khachHangCount = $khachHangCount;
        $this->view->mucGet= (ctype_digit($muc) && $muc != '0')?"muc/$muc":"";
        $this->view->tab= $this->_getParam('tab','tatCa');
    }

    public function duandetailAction() {
        if (!ctype_digit($this->_getParam('id'))) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        $items = Default_Model_Tinduan::getTinDuAnDetail($this->_getParam('id', 0));

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
        $this->view->du_an_da_chon_ids = Default_Model_Tinduan::getTinDuAnIdDuocChons($this->getUserId());
    }

    public function nhathauthicongdetailAction() {
        if (!ctype_digit($this->_getParam('id'))) {
            $this->_helper->redirector('index', 'index', 'default');
            exit;
        }
        $items = Default_Model_Tinnhathauthicong::getTinNhaThauThiCongDetail($this->_getParam('id', 0));

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

    protected function getTinQuangCaos($items) {
        $quangcao_items = array();

        if (is_array($items) && count($items) > 0) {
            foreach ($items as $item) {
                if ($item['is_quang_cao'] == '1' && $item['allow_show_quang_cao'] == '1') {
                    $quangcao_items[] = $item;
                }
            }
        }

        return $quangcao_items;
    }
    
    protected function setCountType($items,&$nhanVienCount,&$doiTacCount,&$khachHangCount){
        $nhanVienCount=$doiTacCount=$khachHangCount=0;
        if(is_array($items)&&count($items)>0){
            foreach ($items as $item){
                if($item['type']== Default_Model_User::NHAN_VIEN){
                    $nhanVienCount++;
                }
                else if($item['type']== Default_Model_User::DOI_TAC){
                    $doiTacCount++;
                }
                else if($item['type']== Default_Model_User::KHACH_HANG){
                    $khachHangCount++;
                }
            }
        }
    }

}

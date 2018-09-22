<?php

class IndexController extends Core_Controller_Action {

    public function init() {
        parent::init();
        $this->view->headTitle('Xây dựng', true);
    }

    public function indexAction() {
        $this->view->items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from du_an_cap_1");
        
        if(LAYOUT!='1'){
            $this->render('index1');
        }
    }
    public function vaytienAction(){
        $this->isAjax();
        echo "Tiền vay:350.000.000, vay trong 60 tháng.<br>";
        echo "Tiền gốc hàng tháng: 350.000.000/60 = ".(number_format(350000000/60, 0, ",", "."))." làm tròn 5.834.000<br>----------------------------------------<br>";
        $tien_vay=350000000;
        $tien_goc_hang_thang=5834000;
        for($i=0;$i<60;$i++){
            echo "<br>tháng ".($i+1)."<br>&nbsp;&nbsp;&nbsp;tiền gốc còn lại: ".number_format($tien_vay, 0, ",", ".")." Số tiền phải trả trong tháng này được tính như sau:<br> ";
            $tien_lai=$tien_vay*10.5/1200;
            $tong_mot_thang=$tien_goc_hang_thang+$tien_lai;
            $bom= ceil($tong_mot_thang*3/7);
            $chi_trinh=ceil($tong_mot_thang*4/7);
            echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tiền lãi tháng này:".number_format($tien_vay, 0, ",", ".")." *10.5% / 12 = ".number_format($tien_lai, 0, ",", ".")." <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;suy ra tổng số tiền phải trả là: ".number_format($tien_lai, 0, ",", ".")." + 5.834.000 = ".number_format($tong_mot_thang, 0, ",", ".")."<br>";
            echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;số tiền Bờm: ".number_format($tong_mot_thang, 0, ",", ".")." * 3 / 7 = ". number_format($bom, 0, ",", ".")."; <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;số tiền chị Trinh: ".number_format($tong_mot_thang, 0, ",", ".")." * 4 / 7 = ". number_format($chi_trinh, 0, ",", ".");
            $tien_vay-=$tien_goc_hang_thang;
            
        }
    }
    public function tuyetAction(){
        $this->isAjax();
        echo "Tiền vay:350.000.000, vay trong 60 tháng.<br>";
        echo "Tiền gốc hàng tháng: 350.000.000/60 = ".(number_format(350000000/60, 0, ",", "."))." làm tròn 5.834.000<br>----------------------------------------<br>";
        $tien_vay=350000000;
        $tien_goc_hang_thang=5834000;
        for($i=0;$i<60;$i++){
            echo "<br>tháng ".($i+1)."<br>&nbsp;&nbsp;&nbsp;tiền gốc còn lại: ".number_format($tien_vay, 0, ",", ".")." Số tiền phải trả trong tháng này được tính như sau:<br> ";
            $tien_lai=$tien_vay*10.5/1200;
            $tong_mot_thang=$tien_goc_hang_thang+$tien_lai;
            $bom= ceil($tong_mot_thang*3/7);
            $chi_trinh=ceil($tong_mot_thang*4/7);
            echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tiền lãi tháng này:".number_format($tien_vay, 0, ",", ".")." *10.5% / 12 = ".number_format($tien_lai, 0, ",", ".")." <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;suy ra tổng số tiền phải trả là: ".number_format($tien_lai, 0, ",", ".")." + 5.834.000 = ".number_format($tong_mot_thang, 0, ",", ".")."<br>";
            $tien_vay-=$tien_goc_hang_thang;
            
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

        if($this->_getParam('type','du_an')=='du_an'){
            $where = "(status<>3 OR status is null) and is_active=1";
        }
        else{
            $where = "is_active=1";
        }
        $where .= " and title like '%".trim($this->_getParam('q'),'')."%'";
        if ($muc!='0'&&ctype_digit($muc)){
            if($this->_getParam('type','du_an')=='du_an'){
                $where .= " and du_an_cap_1='$muc'";
            }
            else{
                $where .= " and nha_thau_thi_cong_cap_1='$muc'";
            }
            
        }
        if (ctype_digit($muccap2) && $muccap2 != '0') {
            if($this->_getParam('type','du_an')=='du_an'){
                $where .= " and du_an_cap_2='$muccap2'";
            }
            else{
                $where .= " and nha_thau_thi_cong_cap_2='$muccap2'";
            }
            
        }
        if (ctype_digit($muccap3) && $muccap3 != '0') {
            if($this->_getParam('type','du_an')=='du_an'){
                $where .= " and id IN (select tin_du_an_id from tinduan_duancap3 where du_an_cap_3='$muccap3')";
            }
            else{
                $where .= " and id IN (select tin_nha_thau_thi_cong_id from tinnhathauthicong_nhathauthicongcap3 where nha_thau_thi_cong_cap_3='$muccap3')";
            }
            
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

        if($this->_getParam('type','du_an')=='du_an'){
            $items = Default_Model_Tinduan::getTinDuAns($where,$where_target_type,$allItems,$this->total, $this->limit, $this->start);
        }
        else{
            $items = Default_Model_Tinnhathauthicong::getTinNhaThauThiCongs($where,$where_target_type,$allItems,$this->total, $this->limit, $this->start);
        }
        
        $this->setupPhoto($items);
        $this->setupPhoto($allItems);
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
        if($this->_getParam('type','du_an')=='du_an'){
            $this->view->headTitle($this->getHeadTitleByDuAnCap1Id($muc), true);
            $this->view->tenMuc= $this->getTenMuc('du_an',$muc, $muccap2, $muccap3);
        }
        else{
            $this->view->headTitle('Xây dựng - Tìm kiếm nhà thầu thi công', true);
            $this->view->tenMuc= $this->getTenMuc('nha_thau_thi_cong',$muc, $muccap2, $muccap3);
        }
        
        $this->view->tenKhuVuc= $this->getTenKhuVuc($city, $citycap2);
        if($this->_getParam('type','du_an')!='du_an'){
            $this->render('searchnhathau');
        }
        
    }

      
    private function getTenMuc($type,$muccap1,$muccap2,$muccap3){
        $tenMuc = 'Tất cả danh mục';
        if(ctype_digit($muccap3)&&$muccap3!='0'){
            $du_an_cap_3s=Core_Db_Table::getDefaultAdapter()->fetchAll("select * from $type"."_cap_3");
            foreach ($du_an_cap_3s as $du_an_cap_3){
                if($du_an_cap_3['id']==$muccap3){
                    $tenMuc=$du_an_cap_3['name'];
                }
            }
        }
        else if(ctype_digit($muccap2)&&$muccap2!='0'){
            if($tenMuc=='Tất cả danh mục'){
                $du_an_cap_2s=Core_Db_Table::getDefaultAdapter()->fetchAll("select * from $type"."_cap_2");
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
                    $du_an_cap_1s=Core_Db_Table::getDefaultAdapter()->fetchAll("select * from $type"."_cap_1");
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
        $this->setupPhoto($items);
        $this->setupPhoto($allItems);
        
        $this->view->items = $items;
        $this->view->quangcao_items = $this->getTinQuangCaos($allItems);

        $this->view->tab= $this->_getParam('tab','tatCa');
        $this->view->id= $this->_getParam('id','0');
        $this->view->headTitle("Xây dựng - Dịch vụ hậu mãi", true);
    }

    public function duanAction() {
        $muc = $this->_getParam('muc');

        $du_an_cap_1= $muc;
        
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
        $this->view->du_an_cap_1_id= $items[0]['du_an_cap_1_id'];
        
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
    
    public function voteAction() {
        if($this->getUserId()!=-1&&ctype_digit($this->_getParam('tin_id'))&&ctype_digit($this->_getParam('value'))){
            if($this->_getParam('type')=='du_an'){
                Core_Db_Table::getDefaultAdapter()->delete('vote_duan',"user_id='".$this->getUserId()."' and tin_id='".$this->_getParam('tin_id')."'");
                Core_Db_Table::getDefaultAdapter()->insert('vote_duan', array('user_id'=> $this->getUserId(),'tin_id'=> $this->_getParam('tin_id'),'value'=> $this->_getParam('value')));
                $vote= Core_Db_Table::getDefaultAdapter()->fetchOne("SELECT ROUND(AVG(vote_duan.`value`),2) from vote_duan where tin_id=".$this->_getParam('tin_id'));
                Core_Db_Table::getDefaultAdapter()->update('tin_du_an', array('vote'=>$vote),"id='".$this->_getParam('tin_id')."'");
            }
            else{
                Core_Db_Table::getDefaultAdapter()->delete('vote_nhathauthicong',"user_id='".$this->getUserId()."' and tin_id='".$this->_getParam('tin_id')."'");
                Core_Db_Table::getDefaultAdapter()->insert('vote_nhathauthicong', array('user_id'=> $this->getUserId(),'tin_id'=> $this->_getParam('tin_id'),'value'=> $this->_getParam('value')));
                $vote= Core_Db_Table::getDefaultAdapter()->fetchOne("SELECT ROUND(AVG(vote_nhathauthicong.`value`),2) from vote_nhathauthicong where tin_id=".$this->_getParam('tin_id'));
                Core_Db_Table::getDefaultAdapter()->update('tin_nha_thau_thi_cong', array('vote'=>$vote),"id='".$this->_getParam('tin_id')."'");
            }
            
        }
    }

    
    
    private function getHeadTitleByDuAnCap1Id($duAnCap1Id){
        return 'Dự án - ' . Core_Db_Table::getDefaultAdapter()->fetchOne("select name from du_an_cap_1 where id='$duAnCap1Id'");
    }
    
    
}

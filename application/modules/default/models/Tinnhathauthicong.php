<?php

class Default_Model_Tinnhathauthicong extends Core_Db_Table_Abstract 
{

    public $_name = "tin_nha_thau_thi_cong";

    public function __construct() 
    {
        parent::__construct();
    }
    
    public static function getTinNhaThauThiCongs($where,$where_target_type,&$allItems,&$total, $limit = null, $start = null,$limit_hot=null){
        if (Core_Common_Numeric::isInteger($limit) && Core_Common_Numeric::isInteger($start)) {
            $limit="limit $start,$limit";
            $limit_hot="limit $start,$limit_hot";
        }
        else{
            $limit="";
        }
        $allItems= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_nha_thau_thi_cong where $where and (is_hot is null or is_hot = 0) order by id desc");
                
        $allItems_target_type= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_nha_thau_thi_cong where $where and (is_hot is null or is_hot = 0) ".($where_target_type!=''?"and $where_target_type ":"")." order by id desc");
        
        $items= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_nha_thau_thi_cong where $where and (is_hot is null or is_hot = 0) ".($where_target_type!=''?"and $where_target_type ":"")." order by id desc $limit");
        
        $total = count($allItems_target_type);
        
        $allItemsHot= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_nha_thau_thi_cong where $where and is_hot = 1 order by id desc");
                
        $allItems_target_typeHot= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_nha_thau_thi_cong where $where and is_hot = 1 ".($where_target_type!=''?"and $where_target_type ":"")." order by id desc");
        
        $itemsHot= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_nha_thau_thi_cong where $where and is_hot = 1 ".($where_target_type!=''?"and $where_target_type ":"")." order by id desc $limit");
        
        if($total==0){
            $total=count($allItems_target_typeHot);
        }
        
        if(count($itemsHot)>0){
            $distance= floor(count($items)/count($itemsHot));
        }
        else{
            $distance= count($items);
        }
        
        $index=0;
        $itemsTemp=array();
        for($i=0;$i<count($items);$i++){
            if($i%$distance==0){
                if(isset($itemsHot[$index])){
                    $itemsTemp[]=$itemsHot[$index++];
                }
            }
            $itemsTemp[]=$items[$i];
        }
        $items=$itemsTemp;
        
        $index=0;
        $allItemsTemp=array();
        for($i=0;$i<count($allItems);$i++){
            if($i%$distance==0){
                if(isset($allItemsHot[$index])){
                    $allItemsTemp[]=$allItemsHot[$index++];
                }
            }
            $allItemsTemp[]=$allItems[$i];
        }
        $allItems=$allItemsTemp;
        
        return $items;
        
    }
    
    /**
     * lấy danh sách id của các tin đã được chọn bởi một user nào đó
     * @param string|int $userId
     * @return array
     */
    public static function getTinNhaThauThiCongIdDuocChons($userId){
        if ($userId == -1) {
            return array();
        }
        $du_an_da_chon_ids = Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "tin_nha_thau_thi_cong_id "
                . "from nha_thau_da_chon "
                . "where user_id='$userId'");
        $temp = array();
        if (is_array($du_an_da_chon_ids) && count($du_an_da_chon_ids) > 0) {
            foreach ($du_an_da_chon_ids as $du_an_da_chon_id) {
                $temp[] = $du_an_da_chon_id['tin_nha_thau_thi_cong_id'];
            }
        }
        return $temp;
    }
    
    public static function getTinNhaThauThiCongLienQuans($id,$nha_thau_thi_cong_cap_1_id){
        
        $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "title,so_luot_xem,"
                . "DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,DATE_FORMAT(tin_nha_thau_thi_cong.created_at,'%d/%m/%Y') AS created_at,"
                . "photo,"
                . "is_quang_cao,"
                . "allow_show_quang_cao,"
                . "phone,is_hot,"
                . "user.type,"
                . "phan_loai,tin_nha_thau_thi_cong.is_hot,"
                . "tin_nha_thau_thi_cong.id,dich_vu_thi_cong "
                . "from tin_nha_thau_thi_cong "
                . "join user on user.id=tin_nha_thau_thi_cong.user_id "
                . "left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id "
                . "where tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1='$nha_thau_thi_cong_cap_1_id' and tin_nha_thau_thi_cong.id<>$id "
                . "group by tin_nha_thau_thi_cong.id order by is_hot desc,id desc limit 0,10");
        
        return $items;
    }
    
    public static function getTinNhaThauThiCongDetail($id){
        return Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select so_luot_xem,content,"
                        . "title,tin_nha_thau_thi_cong.dich_vu_thi_cong,"
                        . "phan_loai,"
                        . "DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,DATE_FORMAT(tin_nha_thau_thi_cong.created_at,'%d/%m/%Y') AS created_at,"
                        . "tinnhathauthicong_photo.photo,"
                        . "tin_nha_thau_thi_cong.id,"
                        . "tin_nha_thau_thi_cong.user_id,tin_nha_thau_thi_cong.is_hot,"
                        . "user.phone,"
                        . "user.type,is_hot,"
                        . "city_cap_1.name as city_cap_1,"
                        . "city_cap_2.name as city_cap_2,"
                        . "city_cap_3.name as city_cap_3, "
                        . "tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1 as nha_thau_thi_cong_cap_1_id,"
                        . "nha_thau_thi_cong_cap_1.name as nha_thau_thi_cong_cap_1,"
                        . "nha_thau_thi_cong_cap_2.name as nha_thau_thi_cong_cap_2 "
                        . "from tin_nha_thau_thi_cong "
                        . "join user on user.id=tin_nha_thau_thi_cong.user_id "
                        . "left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id "
                        . "left join city_cap_1 on city_cap_1.id=tin_nha_thau_thi_cong.city_cap_1 "
                        . "left join city_cap_2 on city_cap_2.id=tin_nha_thau_thi_cong.city_cap_2 "
                        . "left join city_cap_3 on city_cap_3.id=tin_nha_thau_thi_cong.city_cap_3 "
                        . "left join nha_thau_thi_cong_cap_1 on nha_thau_thi_cong_cap_1.id=tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1 "
                        . "left join nha_thau_thi_cong_cap_2 on nha_thau_thi_cong_cap_2.id=tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_2 "
                        . "where tin_nha_thau_thi_cong.id='$id'");
        
    }

    

}

?>
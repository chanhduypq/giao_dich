<?php

class Default_Model_Tinnhathauthicong extends Core_Db_Table_Abstract 
{

    public $_name = "tin_nha_thau_thi_cong";

    public function __construct() 
    {
        parent::__construct();
    }
    
    public static function getTinNhaThauThiCongs($where,$where_target_type,&$allItems,&$total, $limit = null, $start = null){
        if (Core_Common_Numeric::isInteger($limit) && Core_Common_Numeric::isInteger($start)) {
            $limit="limit $start,$limit";
        }
        else{
            $limit="";
        }
        $allItems= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_nha_thau_thi_cong where $where");
                
        $allItems_target_type= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_nha_thau_thi_cong where $where ".($where_target_type!=''?"and $where_target_type ":""));
        
        $items= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_nha_thau_thi_cong where $where ".($where_target_type!=''?"and $where_target_type ":"")." $limit");
        
        $total = count($allItems_target_type);
        
        return $items;
        
    }
    
    public static function getTinNhaThauThiCongLienQuans($id,$nha_thau_thi_cong_cap_1_id){
        
        $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "title,"
                . "DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,"
                . "photo,"
                . "is_quang_cao,"
                . "allow_show_quang_cao,"
                . "phone,"
                . "user.type,"
                . "phan_loai,tin_nha_thau_thi_cong.is_hot,"
                . "tin_nha_thau_thi_cong.id "
                . "from tin_nha_thau_thi_cong "
                . "join user on user.id=tin_nha_thau_thi_cong.user_id "
                . "left join tinnhathauthicong_photo on tinnhathauthicong_photo.tin_nha_thau_thi_cong_id=tin_nha_thau_thi_cong.id "
                . "where tin_nha_thau_thi_cong.nha_thau_thi_cong_cap_1='$nha_thau_thi_cong_cap_1_id' and tin_nha_thau_thi_cong.id<>$id "
                . "group by tin_nha_thau_thi_cong.id limit 0,10");
        
        return $items;
    }
    
    public static function getTinNhaThauThiCongDetail($id){
        return Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select content,"
                        . "title,"
                        . "phan_loai,"
                        . "DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,"
                        . "tinnhathauthicong_photo.photo,"
                        . "tin_nha_thau_thi_cong.id,"
                        . "tin_nha_thau_thi_cong.user_id,tin_nha_thau_thi_cong.is_hot,"
                        . "user.phone,"
                        . "user.type,"
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
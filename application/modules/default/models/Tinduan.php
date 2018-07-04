<?php

class Default_Model_Tinduan extends Core_Db_Table_Abstract 
{

    public $_name = "tin_du_an";

    public function __construct() 
    {
        parent::__construct();
    }
    
    public static function getTinDuAns($where){
        return Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "title,"
                . "DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,"
                . "tong_dau_tu,"
                . "photo,"
                . "is_quang_cao,"
                . "allow_show_quang_cao,"
                . "phone,"
                . "user.type,"
                . "tin_du_an.id "
                . "from tin_du_an "
                . "join user on user.id=tin_du_an.user_id "
                . "left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id "
                . "where $where "
                . "group by tin_du_an.id");
        
    }
    
    public static function getTinDuAnDetail($id){
        return Core_Db_Table::getDefaultAdapter()
                ->fetchAll("select content,"
                        . "title,"
                        . "DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,"
                        . "tong_dau_tu,"
                        . "tinduan_photo.photo,"
                        . "tin_du_an.id,"
                        . "tin_du_an.user_id,"
                        . "user.phone,"
                        . "user.type,"
                        . "city_cap_1.name as city_cap_1,"
                        . "city_cap_2.name as city_cap_2,"
                        . "city_cap_3.name as city_cap_3, "
                        . "tin_du_an.du_an_cap_1 as du_an_cap_1_id,"
                        . "du_an_cap_1.name as du_an_cap_1,"
                        . "du_an_cap_2.name as du_an_cap_2,"
                        . "du_an_cap_3.name as du_an_cap_3 "
                        . "from tin_du_an "
                        . "join user on user.id=tin_du_an.user_id "
                        . "left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id "
                        . "left join city_cap_1 on city_cap_1.id=tin_du_an.city_cap_1 "
                        . "left join city_cap_2 on city_cap_2.id=tin_du_an.city_cap_2 "
                        . "left join city_cap_3 on city_cap_3.id=tin_du_an.city_cap_3 "
                        . "left join du_an_cap_1 on du_an_cap_1.id=tin_du_an.du_an_cap_1 "
                        . "left join du_an_cap_2 on du_an_cap_2.id=tin_du_an.du_an_cap_2 "
                        . "left join du_an_cap_3 on du_an_cap_3.id=tin_du_an.du_an_cap_3 "
                        . "where tin_du_an.id='$id'");
        
    }
    
    /**
     * lấy danh sách id của các tin đã được chọn bởi một user nào đó
     * @param string|int $userId
     * @return array
     */
    public static function getTinDuAnIdDuocChons($userId){
        $du_an_da_chon_ids = Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "tin_du_an_id "
                . "from du_an_da_chon "
                . "where user_id='$userId'");
        $temp = array();
        if (is_array($du_an_da_chon_ids) && count($du_an_da_chon_ids) > 0) {
            foreach ($du_an_da_chon_ids as $du_an_da_chon_id) {
                $temp[] = $du_an_da_chon_id['tin_du_an_id'];
            }
        }
        return $temp;
    }

    

}

?>
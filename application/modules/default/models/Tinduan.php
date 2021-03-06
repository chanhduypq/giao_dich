<?php

class Default_Model_Tinduan extends Core_Db_Table_Abstract {

    public $_name = "tin_du_an";

    public function __construct() {
        parent::__construct();
    }

    public static function getTinDuAns($where, $where_target_type, &$allItems, &$total, $limit = null, $start = null, $limit_hot = null) {
        if (Core_Common_Numeric::isInteger($limit) && Core_Common_Numeric::isInteger($start)) {
            $limit = "limit $start,$limit";
            $limit_hot = "limit $start,$limit_hot";
        } else {
            $limit = "";
        }

        $allItems = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_du_an where $where and (is_hot is null or is_hot = 0) order by id desc");

        $allItems_target_type = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_du_an where $where and (is_hot is null or is_hot = 0) " . ($where_target_type != '' ? "and $where_target_type " : "") . " order by id desc");

        $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_du_an where $where and (is_hot is null or is_hot = 0) " . ($where_target_type != '' ? "and $where_target_type " : "") . " order by id desc $limit");

        $total = count($allItems_target_type);

        $allItemsHot = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_du_an where $where and is_hot = 1 order by id desc");

        $allItems_target_typeHot = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_du_an where $where and is_hot = 1 " . ($where_target_type != '' ? "and $where_target_type " : "") . " order by id desc");

        $itemsHot = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin_du_an where $where and is_hot = 1 " . ($where_target_type != '' ? "and $where_target_type " : "") . " order by id desc $limit");

        if ($total == 0) {
            $total = count($allItems_target_typeHot);
        }

        if (count($items) > count($itemsHot)) {
            if (count($itemsHot) > 0) {
                $distance = floor(count($items) / count($itemsHot));
            } else {
                $distance = count($items);
            }

            $index = 0;
            $itemsTemp = array();
            for ($i = 0; $i < count($items); $i++) {
                if ($i % $distance == 0) {
                    if (isset($itemsHot[$index])) {
                        $itemsTemp[] = $itemsHot[$index++];
                    }
                }
                $itemsTemp[] = $items[$i];
            }
            $items = $itemsTemp;

            $index = 0;
            $allItemsTemp = array();
            for ($i = 0; $i < count($allItems); $i++) {
                if ($i % $distance == 0) {
                    if (isset($allItemsHot[$index])) {
                        $allItemsTemp[] = $allItemsHot[$index++];
                    }
                }
                $allItemsTemp[] = $allItems[$i];
            }
            $allItems = $allItemsTemp;
        }
        else{
            if (count($items) > 0) {
                $distance = floor(count($itemsHot) / count($items));
            } else {
                $distance = count($itemsHot);
            }

            $index = 0;
            $itemsTemp = array();
            for ($i = 0; $i < count($itemsHot); $i++) {
                if ($i % $distance == 0) {
                    if (isset($items[$index])) {
                        $itemsTemp[] = $items[$index++];
                    }
                }
                $itemsTemp[] = $itemsHot[$i];
            }
            $items = $itemsTemp;

            $index = 0;
            $allItemsTemp = array();
            for ($i = 0; $i < count($allItems); $i++) {
                if ($i % $distance == 0) {
                    if (isset($allItems[$index])) {
                        $allItemsTemp[] = $allItems[$index++];
                    }
                }
                $allItemsTemp[] = $allItemsHot[$i];
            }
            $allItems = $allItemsTemp;
        }


        return $items;
    }

    public static function getTinDuAnLienQuans($id, $du_an_cap_1_id) {

        $items = Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                . "title,so_luot_xem,"
                . "DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,DATE_FORMAT(tin_du_an.created_at,'%d/%m/%Y') AS created_at,"
                . "tong_dau_tu,"
                . "photo,"
                . "is_quang_cao,"
                . "allow_show_quang_cao,"
                . "phone,"
                . "user.type,tin_du_an.is_hot,user.allow_hoptac,user.type_active,"
                . "tin_du_an.id "
                . "from tin_du_an "
                . "join user on user.id=tin_du_an.user_id "
                . "left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id "
                . "where tin_du_an.du_an_cap_1='$du_an_cap_1_id' and tin_du_an.id<>$id "
                . "group by tin_du_an.id order by is_hot desc,id desc limit 0,10"
        );

        return $items;
    }

    public static function getTinDuAnDetail($id) {
        return Core_Db_Table::getDefaultAdapter()
                        ->fetchAll("select so_luot_xem,content,user.allow_hoptac,"
                                . "title,"
                                . "DATE_FORMAT(ngay,'%d/%m/%Y') AS ngay,DATE_FORMAT(tin_du_an.created_at,'%d/%m/%Y') AS created_at,"
                                . "tong_dau_tu,"
                                . "tinduan_photo.photo,"
                                . "tin_du_an.id,"
                                . "tin_du_an.user_id,tin_du_an.is_hot,"
                                . "user.phone,user.type_active,"
                                . "user.type,is_hot,"
                                . "city_cap_1.name as city_cap_1,"
                                . "city_cap_2.name as city_cap_2,"
                                . "city_cap_3.name as city_cap_3, "
                                . "tin_du_an.du_an_cap_1 as du_an_cap_1_id,"
                                . "tin_du_an.du_an_cap_2 as du_an_cap_2_id,"
                                . "du_an_cap_1.name as du_an_cap_1,"
                                . "du_an_cap_2.name as du_an_cap_2 "
                                . "from tin_du_an "
                                . "join user on user.id=tin_du_an.user_id "
                                . "left join tinduan_photo on tinduan_photo.tin_du_an_id=tin_du_an.id "
                                . "left join city_cap_1 on city_cap_1.id=tin_du_an.city_cap_1 "
                                . "left join city_cap_2 on city_cap_2.id=tin_du_an.city_cap_2 "
                                . "left join city_cap_3 on city_cap_3.id=tin_du_an.city_cap_3 "
                                . "left join du_an_cap_1 on du_an_cap_1.id=tin_du_an.du_an_cap_1 "
                                . "left join du_an_cap_2 on du_an_cap_2.id=tin_du_an.du_an_cap_2 "
                                . "where tin_du_an.id='$id'");
    }

    /**
     * lấy danh sách id của các tin đã được chọn bởi một user nào đó
     * @param string|int $userId
     * @return array
     */
    public static function getTinDuAnIdDuocChons($userId) {
        if ($userId == -1) {
            return array();
        }
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

    /**
     * lấy danh sách id của các tin đã được chọn bởi một user nào đó
     * @param string|int $userId
     * @return array
     */
    public static function getTinDuAnDuocChons($userId) {
        return Core_Db_Table::getDefaultAdapter()->fetchAll("select "
                        . "* "
                        . "from view_tin_du_an "
                        . "join du_an_da_chon on du_an_da_chon.tin_du_an_id=view_tin_du_an.id "
                        . "where du_an_da_chon.user_id='$userId' order by is_hot desc,id desc");
    }

}

?>
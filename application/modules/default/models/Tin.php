<?php

class Default_Model_Tin extends Core_Db_Table_Abstract 
{

    public $_name = "view_tin";

    public function __construct() 
    {
        parent::__construct();
    }
    
    public static function getTins($where,&$total, $limit = null, $start = null){
        if (Core_Common_Numeric::isInteger($limit) && Core_Common_Numeric::isInteger($start)) {
            $limit="limit $start,$limit";
        }
        else{
            $limit="";
        }
        $allItems= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin where $where");
                
        $items= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from view_tin where $where $limit");
        
        $total = count($allItems);
        
        return $items;
        
    }
    
}

?>
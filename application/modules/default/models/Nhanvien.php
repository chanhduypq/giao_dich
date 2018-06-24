<?php

class Default_Model_Nhanvien extends Core_Db_Table_Abstract 
{

    public $_name = "user";

    public function __construct() 
    {
        parent::__construct();
    }

    public function getNhanViens(&$total, $limit = null, $start = null) 
    {

        
        if (Core_Common_Numeric::isInteger($limit) && Core_Common_Numeric::isInteger($start)) {
            $items = $this->select("*")->order(array('id'))->limit($limit, $start)->fetchAll();
        } else {
            $items = $this->select("*")->order(array('id'))->fetchAll();
        }

        $total = $this->select("count(*)")->fetchOne();

        return $items;
    }

    public function getNhanVien($id) 
    {
        $item = $this->select("*")->where("id=$id")->fetchRow();
        return $item;
    }

}

?>
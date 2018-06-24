<?php 

class Admin_Form_Nhanvien extends Core_Form 
{

    public function init() 
    {
        parent::init();
        $this->buildElementsAutoForFormByTableName('user');
        
        $this->removeElement("password");
        $this->removeElement("danh_xung");
        $this->removeElement("type");
        $this->removeElement("active");
        $this->removeElement("email");
        
        $this->getElement('phone')->setLabel('Phone: ')->addValidator('Digits');
        $this->getElement('full_name')->setLabel('Họ và tên: ');
//        if(is_numeric($this->getValue('id'))){
//            
//        }
//        else{
//            $this->getElement('phone')->addValidator('Db_NoRecordExists', true, array('table' => 'nhan_vien', 'field' => 'phone'));
//        }
        
//        $this->getElement('phone')->getValidator('Db_NoRecordExists')->setMessage('Số điện thoại này đã tồn tại rồi.');
        $this->getElement('phone')->getValidator('Digits')->setMessage('Vui lòng nhập số điện thoại bằng chữ số.');
        
//        $viec_can_lam = new Core_Form_Element_Checkbox('viec_can_lam');
//        $viec_can_lam->setChecked(true)->setCheckedValue('1')->setLabel("Việc cần làm");
//        $this->addElement($viec_can_lam);
//        
//        $cong_nhan_lao_dong=new Core_Form_Element_Checkbox('cong_nhan_lao_dong');
//        $cong_nhan_lao_dong->setChecked(true)->setCheckedValue('1')->setLabel("Công nhân lao động");
//        $this->addElement($cong_nhan_lao_dong);
//        
//        $thiet_bi_vat_tu=new Core_Form_Element_Checkbox('thiet_bi_vat_tu');
//        $thiet_bi_vat_tu->setChecked(true)->setCheckedValue('1')->setLabel("Thiết bị vật tư");
//        $this->addElement($thiet_bi_vat_tu);
        $active=new Core_Form_Element_Checkbox('active');
        $active->setChecked(true)->setCheckedValue('1')->setLabel("Kích hoạt");
        $this->addElement($active);
    }
    

}

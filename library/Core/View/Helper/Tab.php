<?php
/** 
 * @author Trần Công Tuệ
 */
class Core_View_Helper_Tab extends Zend_View_Helper_Abstract{
	/**
	 * @author Trần Công Tuệ
	 * @param array $tabs	 
	 * @param Zend_View_Interface $view	 
	 * @param integer $active_tab_index
	 * @return string $html
	 */
	public function tab($tabText,$links,$allCount,$nhanVienCount,$doiTacCount,$khachHangCount){
		
		if(!is_string($tabText)||trim($tabText)==''){
			return ;
		}
		
		?>
                <li class="tab-link">
                    <ul class="list-link">
                        <li><a class="tab-link-i<?php if($tabText=='tatCa') echo ' _current';?>"<?php if($allCount>0&&$tabText!='tatCa') echo ' href="'.$links[0].'"';?>>Tất cả</a></li>
                        <li><a class="tab-link-i<?php if($tabText=='nhanVien') echo ' _current';?>"<?php if($nhanVienCount>0&&$tabText!='nhanVien') echo ' href="'.$links[1].'"';?>>Nhân viên</a></li>
                        <li><a class="tab-link-i<?php if($tabText=='doiTac') echo ' _current';?>"<?php if($doiTacCount>0&&$tabText!='doiTac') echo ' href="'.$links[2].'"';?>>Đối tác</a></li>
                        <li><a class="tab-link-i<?php if($tabText=='khachHang') echo ' _current';?>"<?php if($khachHangCount>0&&$tabText!='khachHang') echo ' href="'.$links[3].'"';?>>Cá nhân</a></li>
                    </ul>
                </li>
	<?php 
	}
	public function setView(Zend_View_Interface $view)
	{
		$this->view = $view;
	}
        
}

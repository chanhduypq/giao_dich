<?php

/**
 * @author Trần Công Tuệ <chanhduypq@gmail.com>
 */
class Core_View_Helper_Tree extends Zend_View_Helper_Abstract 
{

    /**
     * function common
     * @author Trần Công Tuệ <chanhduypq@gmail.com>
     * @param string $header_text
     * @param array $level_1_items
     * @param array $level_2_items
     * @param array $level_3_items
     * @return string $html
     */
    public function tree($header_text,$level_1_items,$level_2_items,$level_3_items,$level_4_items) 
    {
        ?>
        <div id='jqxWidget'>
            <div id='jqxTree' style='visibility: hidden; float: left; margin-left: 20px;'>
                <ul>
                    <li id='home' class="id_0 level_0" item-selected='true'>
                        <?php 
                        echo $header_text;
                        if(is_array($level_1_items)&&count($level_1_items)>0){
                            $this->echoMuc($level_1_items, $level_2_items, $level_3_items,$level_4_items);
                        }
                        ?>
                    </li>
                    
                </ul>
            </div>
            <div id='jqxMenuRoot'>
                <ul>
                    <li>Thêm mục con</li>
                </ul>
            </div>
            <div id='jqxMenuAll'>
                <ul>
                    <li>Thêm mục con</li>
                    <li>Sửa mục này</li>
                    <li>Xóa mục này</li>
                </ul>
            </div>
            <div id='jqxMenu'>
                <ul>
                    <li>Sửa mục này</li>
                    <li>Xóa mục này</li>
                </ul>
            </div>
        </div>
        <?php

    }
    
    private function echoMuc($level_1_items,$level_2_items,$level_3_items,$level_4_items){?>
        <ul>
            <?php                     
            foreach ($level_1_items as $id_cap_1=>$item){?>
            <li name_show="<?php echo $item['name_show'];?>" is_show_at_home_page="<?php echo $item['is_show_at_home_page'];?>" class="level_1 id_<?php echo $id_cap_1;if(isset($item['photo'])&&$item['photo']!='') echo ' photo_'.$item['photo'];?>">
                    <?php 
                    echo $item['name'];
                    if($item['has_children']){
                        $this->echoMucCap2($id_cap_1, $level_2_items, $level_3_items,$level_4_items);
                    }
                    ?>
                </li>
            <?php 
            }
            ?>
        </ul>
    <?php 
    }
    
    private function echoMucCap2($id_cap_1,$level_2_items,$level_3_items,$level_4_items){?>
        <ul>
            <?php                     
            foreach ($level_2_items as $id_cap_2=>$item){
                if($item['parent_id']==$id_cap_1){
                ?>
                    <li name_show="<?php echo $item['name_show'];?>" is_show_at_home_page="<?php echo $item['is_show_at_home_page'];?>" class="level_2 id_<?php echo $id_cap_2;if(isset($item['photo'])&&$item['photo']!='') echo ' photo_'.$item['photo'];?>">                                                    
                        <?php 
                        echo $item['name'];
                        if($item['has_children']){
                            $this->echoMucCap3($id_cap_2,$level_3_items,$level_4_items);
                        }
                        ?>
                    </li>
            <?php 
                }
            }
            ?>
        </ul>
    <?php 
    }
    
    private function echoMucCap3($id_cap_2,$level_3_items,$level_4_items){?>
        <ul>
            <?php                     
            foreach ($level_3_items as $id_cap_3=>$item){
                if($item['parent_id']==$id_cap_2){
                ?>
                    <li name_show="<?php echo $item['name_show'];?>" is_show_at_home_page="<?php echo $item['is_show_at_home_page'];?>" class="level_3 id_<?php echo $id_cap_3;if(isset($item['photo'])&&$item['photo']!='') echo ' photo_'.$item['photo'];?>">                                                    
                        <?php 
                        echo $item['name'];
                        if($item['has_children']){
                            $this->echoMucCap4($id_cap_3,$level_4_items);
                        }
                        ?>
                    </li>
            <?php 
                }
            }
            ?>
        </ul>
    <?php 
    }
    
    private function echoMucCap4($id_cap_3,$level_4_items){?>
        <ul>
            <?php                     
            foreach ($level_4_items as $id_cap_4=>$item){
                if($item['parent_id']==$id_cap_3){
                ?>
                    <li name_show="<?php echo $item['name_show'];?>" is_show_at_home_page="<?php echo $item['is_show_at_home_page'];?>" class="level_3 id_<?php echo $id_cap_4;if(isset($item['photo'])&&$item['photo']!='') echo ' photo_'.$item['photo'];?>">                                                    
                        <?php echo $item['name'];?>
                    </li>
            <?php 
                }
            }
            ?>
        </ul>
    <?php 
    }

    public function setView(Zend_View_Interface $view) 
    {
        $this->view = $view;
    }

}

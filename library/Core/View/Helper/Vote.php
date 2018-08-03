<?php

/**
 * @author Trần Công Tuệ <chanhduypq@gmail.com>
 */
class Core_View_Helper_Vote extends Zend_View_Helper_Abstract 
{

    /**
     * function common
     * @author Trần Công Tuệ <chanhduypq@gmail.com>
     * @param string $tinId
     * @param string $type
     * @return string $html
     */
    public function vote($tinId,$type,$vote) 
    {
        ?>
        <div data-type="<?php echo $type;?>" class="vote id_<?php echo $tinId;?>">
            <?php 
            for($i=1;$i<=5;$i++){
                if($i<=$vote){
                    echo '<div class="star_3 ratings_stars ratings_over ratings_hover"><input value="'.$i.'" type="hidden"></div>';
                } 
                else{
                    echo '<div class="star_1 ratings_stars"><input value="'.$i.'" type="hidden"></div>';
                }
            }
            ?>
        </div>
        <?php

    }
    
    public function setView(Zend_View_Interface $view) 
    {
        $this->view = $view;
    }

}

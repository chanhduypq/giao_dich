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
    public function vote($tinId,$type) 
    {
        ?>
        <div data-type="<?php echo $type;?>" class="vote id_<?php echo $tinId;?>">
            <div class="star_1 ratings_stars"><input value="1" type="hidden"></div>
            <div class="star_2 ratings_stars"><input value="2" type="hidden"></div>
            <div class="star_3 ratings_stars"><input value="3" type="hidden"></div>
            <div class="star_4 ratings_stars"><input value="4" type="hidden"></div>
            <div class="star_5 ratings_stars"><input value="5" type="hidden"></div>
        </div>
        <?php

    }
    
    public function setView(Zend_View_Interface $view) 
    {
        $this->view = $view;
    }

}

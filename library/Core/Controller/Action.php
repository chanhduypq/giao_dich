<?php
/**
 * Core
 *
 * This file is part of Core.
 *
 * Core is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Core is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Core.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @category    Core
 * @package     Core_Controller
 * @copyright   Copyright 2008-2012 Core
 * @license     GNU Public License V3.0
 */

/**
 *
 * @category    Core
 * @package     Core_Controller
 * @author      Core Core Team <core@onegatecommerce.com>
 * @abstract
 */
abstract class Core_Controller_Action extends Zend_Controller_Action {

    /**
     * 
     * @var string
     */
    public $language;

    /**
     * 
     * @var integer
     */
    public $page;

    /**
     *
     * @var integer
     */
    public $limit=null;
    
    /**
     *
     * @var integer
     */
    public $limit_hot=null;

    /**
     *
     * @var integer
     */
    public $start;

    /**
     *
     * @var integer
     */
    public $order;

    /**
     *
     * @var integer
     */
    public $total;

    /**
     *
     * @var Core_Form
     */
    public $form = null;

    /**
     *
     * @var Core_Db_Table_Abstract
     */
    public $model = null;

    /**
     *
     * @var array
     */
    public $formData = null;

    /**
     *
     * @var string
     */
    public $renderScript = NULL;
    
    /**
     *
     * @var array
     */
    public $actionsForList = array('index','duan','nhathauthicong','search','duanchon','newsuploaded');

    /**
     *  Main init
     */
    public function init() {
        parent::init();
        
        $this->setLayout();
        $this->redirectIfNotLogin();

        set_time_limit(2000);

        $this->view->headMeta()->appendName('author', 'Trần Công Tuệ email:chanhduypq@gmail.com');
        $this->view->headMeta()->appendName('copyright', 'Công ty TNHH VietAgar  website: http://vietagar.com.vn');
        $this->view->headMeta()->appendName('description', 'Chúng tôi không ngừng nổ lực phát triển website');
        $this->view->headMeta()->appendName('keywords', 'Trần Công Tuệ, chanhduypq@gmail.com');

        $this->initPaginator();

        if (in_array($this->_request->getActionName(), $this->actionsForList)){
            $this->limit = $this->_getParam('limit', 10);
            $this->limit_hot = $this->_getParam('limit', 2);
            $this->page = $this->_getParam('page', 1);
            if (Core_Common_Numeric::isInteger($this->page) == FALSE) {
                $this->page = 1;
            }

            $this->start = (($this->page - 1) * $this->limit);
        } 
        
        if ($this->_request->getActionName() == 'add' || $this->_request->getActionName() == 'edit') {
            $this->formData = $this->_request->getPost();
        }
        $GLOBALS['config'] = Core_Db_Table::getDefaultAdapter()->fetchRow("select * from config");
    }

    

    public function postDispatch() {
        parent::postDispatch();
        if (in_array($this->_request->getActionName(), $this->actionsForList)){
            $this->processForIndexAction();
        } 
//        else if ($this->_request->getActionName() == 'add') {
//            $this->processForAddAction();
//        } else if ($this->_request->getActionName() == 'edit') {
//            $this->processForEditAction();
//        } 
        else if ($this->_request->getActionName() == 'delete') {
            $this->processForDeleteAction();
        }
        if($this->isLogin()){
            $auth = Zend_Auth::getInstance();
            $identity = $auth->getIdentity();
            $du_an_da_chon_ids = $identity['du_an_da_chon_ids'];
            $nha_thau_da_chon_ids = $identity['nha_thau_da_chon_ids'];
        }
        else{
            $du_an_da_chon_ids = array();
            $nha_thau_da_chon_ids=array();
        }
        $this->view->number_du_an_da_chon= count($du_an_da_chon_ids);
        $this->view->du_an_da_chon_ids = $du_an_da_chon_ids;
        
        $this->view->nha_thau_da_chon_ids = $nha_thau_da_chon_ids;
        $this->view->isAdmin= $this->isAdmin();
        $this->view->isCaNhan= $this->isCaNhan();
        $this->view->isDoiTac= $this->isDoiTac();
        $this->view->isNhanVien= $this->isNhanVien();
        $this->view->userId= $this->getUserId();
        $this->view->isLogin= $this->isLogin();
        $this->view->nha_thau_thi_cong_cap_1_ids = $this->isLogin() ? $identity['nha_thau_thi_cong_cap_1_ids'] : array();
        $this->view->du_an_cap_1_ids = $this->isLogin() ? $identity['du_an_cap_1_ids'] : array();
        $this->view->full_name = $this->isLogin() ? $identity['full_name'] :'';
        $this->view->danh_xung = $this->isLogin() ? $identity['danh_xung'] :'';
        $this->view->action= $this->_request->getActionName();
        $this->view->controller= $this->_request->getControllerName();
        
        $voteDuans= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from vote_duan where user_id='".$this->getUserId()."'");
        $voteNhathaus= Core_Db_Table::getDefaultAdapter()->fetchAll("select * from vote_nhathauthicong where user_id='".$this->getUserId()."'");

        $temp=array();
        foreach ($voteDuans as $voteDuan){
            $temp[$voteDuan['tin_id']]=$voteDuan['value'];
        }
        $this->view->voteDuans=$temp;
        
        $temp=array();
        foreach ($voteNhathaus as $voteNhathau){
            $temp[$voteNhathau['tin_id']]=$voteNhathau['value'];
        }
        $this->view->voteNhathaus=$temp;
        
        
        $this->view->type= $this->_getParam('type','du_an');
        
        $useragent=$_SERVER['HTTP_USER_AGENT'];

        $this->view->isMobile = preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i', $useragent) || preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i', substr($useragent, 0, 4));
    }
    
    private function isLogin(){
        $auth = Zend_Auth::getInstance();
        if ($auth->hasIdentity()) {
            return true;
        }
        return FALSE;
    }

    private function getNumberOfDuAnDaChon(){
        $auth = Zend_Auth::getInstance();
        $identity = $auth->getIdentity();
        if ($auth->hasIdentity()) {
            $number_du_an_da_chon = Core_Db_Table::getDefaultAdapter()->fetchCol("select count(*) from du_an_da_chon where user_id='" . $identity['id'] . "'");
            $number_du_an_da_chon = $number_du_an_da_chon[0];
        } else {
            $number_du_an_da_chon = 0;
        }
        return $number_du_an_da_chon;
    }

    public function getUserId() {
        $auth = Zend_Auth::getInstance();
        if (!$auth->hasIdentity()) {
            return -1;
        } else {
            $identity = $auth->getIdentity();
            return $identity['id'];
        }
    }

    public function getMessage() {
        $message = Core::message()->getAll();
        if (is_array($message) && count($message) > 0) {
            if (!isset($message['message'])) {
                return '';
            }
            $message = $message['message'];
            return $message[0];
        } else {
            return '';
        }
    }

    public function download($path, $fileName = null) {
        Core_Common_Download::download($path, $fileName);
    }

    public function createFilePdf($html, $filename, $title_header = '') {
        Core_Common_Pdf::createFilePdf($html, $filename, $title_header);
    }

    public function initPaginator() {
        $this->page = $this->_getParam('page', 1);
        $this->limit = $this->_getParam('limit', 10);
        $this->start = $this->_getParam('start', 0);
        $this->order = $this->_getParam('filter_order', 'id') . ' ' . $this->_getParam('filter_order_Dir', 'DESC');
    }

    /**
     * thumnail ảnh
     */
    public function echo_js_css_for_thumnail() {
        ?>
        <link href="<?php echo APPLICATION_URL; ?>/css/thumnail/prettyPhoto.css" rel="stylesheet" type="text/css"/>
        <script type="text/javascript" src="<?php echo APPLICATION_URL; ?>/js/thumnail/jquery.prettyPhoto.js"></script>
        <script type="text/javascript" src="<?php echo APPLICATION_URL; ?>/js/thumnail/initPrettyPhoto.js"></script>               


        <?php
    }

    /**
     * function common
     * @author Trần Công Tuệ <chanhduypq@gmail.com>
     * @param Core_Form $form
     * @param array $formData
     */
    public function processSpecialInput($form, &$formData) {
        Core_Common_Form::fixSpecialElements($form, $formData);
    }

    /**
     * function common
     * @author Trần Công Tuệ <chanhduypq@gmail.com>
     */
    public function disableLayout() {
        $this->_helper->layout()->disableLayout();
    }

    /**
     * function common
     * @author Trần Công Tuệ <chanhduypq@gmail.com>
     */
    public function disableRender() {
        $this->_helper->viewRenderer->setNoRender(true);
    }

    public function isAjax() {
        $this->_helper->layout()->disableLayout();
        $this->_helper->viewRenderer->setNoRender(true);
    }
    
    public function isAdmin(){
        $auth = Zend_Auth::getInstance();
        $identity = $auth->getIdentity();
        if ($auth->hasIdentity()&& $identity['type'] == Default_Model_User::ADMIN) {
            return true;
        }
        return FALSE;
    }
    
    public function isNhanVien(){
        $auth = Zend_Auth::getInstance();
        $identity = $auth->getIdentity();
        if ($auth->hasIdentity()&& ($identity['type'] == Default_Model_User::NHAN_VIEN || ($identity['type_active'] == Default_Model_User::NHAN_VIEN&&$identity['allow_hoptac']=='1'))) {
            return true;
        }
        return FALSE;
    }
    
    public function isDoiTac(){
        $auth = Zend_Auth::getInstance();
        $identity = $auth->getIdentity();
        if ($auth->hasIdentity()&& $identity['type'] == Default_Model_User::DOI_TAC) {
            return true;
        }
        return FALSE;
    }
    
    public function isCaNhan(){
        $auth = Zend_Auth::getInstance();
        $identity = $auth->getIdentity();
        if ($auth->hasIdentity()&& $identity['type'] == Default_Model_User::CA_NHAN) {
            return true;
        }
        return FALSE;
    }

    /**
     * HTTP_REFERER is not always present in _SERVER[]
     *
     * @return string
     */
    public function _getBackUrl() {
        if (!$back = $this->getRequest()->getServer('HTTP_REFERER')) {
            $back = $this->view->href();
        }
        return $back;
    }

    /**
     * Write a snapshot to session
     *
     * @param string $snapshot
     * @return void
     */
    protected function _setSnapshot($snapshot) {
        Core::session()->snapshot = $snapshot;
    }

    /**
     * Retrieve snapshot from session
     *
     * @return string
     */
    protected function _getSnapshot() {
        $snapshot = Core::session()->snapshot;
        unset(Core::session()->snapshot);
        return $snapshot;
    }

    /**
     * @return bool
     */
    protected function _hasSnapshot() {
        return isset(Core::session()->snapshot) && !empty(Core::session()->snapshot);
    }

    private function setLayout() {
        if ($this->_request->getModuleName() == 'admin') {
            $option = array('layout' => 'admin');
        } else {
            if ($this->_request->getControllerName() == 'news') {
                $option = array('layout' => 'news');
            } else {
                if(LAYOUT=='1'){
                    $option = array('layout' => 'index');
                }
                else{
                    $option = array('layout' => 'index1');
                }
                
            }
        }

        $layout = Zend_Layout::getMvcInstance();
        $layout->setOptions($option);
    }

    private function turnSessionPrevController() {
        $session = new Zend_Session_Namespace('url');
        $session->controller = $this->_request->getControllerName();
    }

    private function redirectIfNotLogin() {
        if ($this->_request->getModuleName() == 'admin') {
            if ($this->_request->getControllerName() != 'index') {
                $auth = Zend_Auth::getInstance();
                if (!$auth->hasIdentity()) {
                    $this->turnSessionPrevController();
                    $this->_helper->redirector('index', 'index', 'admin');
                } else {
                    $identity = $auth->getIdentity();
//                    if ($identity['type'] != '1') {
//                        $this->turnSessionPrevController();
//                        $this->_helper->redirector('index', 'index', 'admin');
//                    }
                }
            }
        } 
    }
    
    /**
     * upload photo cho mỗi mục tại admin/vieccanlam,thietbivattu,congnhanlaodong
     */
//    public function uploadAction() {
//        if(!isset($_FILES['file'])){
//            exit;
//        }
//        
//        $this->disableLayout();
//        $this->disableRender();
//        $path = UPLOAD . "/public/uploads/";
//        @mkdir($path);
//        $temp = explode(".", $_FILES['file']['name']);
//        $file_name = md5(uniqid(rand(), true)) . '.' . $temp[count($temp) - 1];
//        if ( 0 < $_FILES['file']['error'] ) {
//            echo 'Error: ' . $_FILES['file']['error'] . '<br>';
//        }
//        else {
//            move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $file_name);
//            $table_name='';
//            if($this->_request->getControllerName()=='vieccanlam'){
//                $table_name='viec_can_lam_cap_';
//            }
//            else if($this->_request->getControllerName()=='congnhanlaodong'){
//                $table_name='cong_nhan_lao_dong_cap_';
//            }
//            else if($this->_request->getControllerName()=='thietbivattu'){
//                $table_name='thiet_bi_vat_tu_cap_';
//            }
//            if($table_name!=''){
//                $table_name .= $this->_getParam('level');
//                $photo = Core_Db_Table::getDefaultAdapter()->fetchOne("select photo from $table_name where id=" . $this->_getParam('id'));
//                if (trim($photo) != "") {
//                    @unlink("uploads/$photo");
//                }
//                Core_Db_Table::getDefaultAdapter()->update($table_name, array('photo' => $file_name), 'id=' . $this->_getParam('id'));
//            }
//            echo $file_name;
//        }
//        exit;
//    }

    /**
     * khởi tạo lại session ban đầu
     * có nghĩa là 
     *     ban đầu khi login, lưu thông tin session nào thi bây giờ chỉ lấy lại những thông tin đó, 
     *     những thông tin session mới thêm vào sau này thi hủy đi
     */
    public function resetSession() {
        $auth = Zend_Auth::getInstance();
        $identity = $auth->getIdentity();
        $auth->clearIdentity();

        foreach ($identity as $key => $value) {
            if (!in_array($key, array(
                        'id',
                        'danh_xung',
                        'full_name',
                        'email',
                        'phone',
                        'password',
                        'is_admin',
                        'user'
                            )
                    )
            ) {
                unset($identity["$key"]);
            }
        }

        $auth->getStorage()->write($identity);
    }
    
    public function getTinQuangCaos($items) {
        $quangcao_items = array();

        if (is_array($items) && count($items) > 0) {
            foreach ($items as $item) {
                if ($item['is_quang_cao'] == '1' && $item['allow_show_quang_cao'] == '1') {
                    $quangcao_items[] = $item;
                }
            }
        }

        return $quangcao_items;
    }
    
    private function processForIndexAction() {
        
        $paginator = new Zend_Paginator(new Zend_Paginator_Adapter_Null($this->total));

        $paginator->setDefaultScrollingStyle();
        $paginator->setItemCountPerPage($this->limit);
        $paginator->setCurrentPageNumber($this->page);

        $this->view->paginator = $paginator;
        $this->view->limit = $this->limit;
        $this->view->total = $this->total;
        $this->view->page = $this->page;
        if (!isset($this->view->message)) {
            $this->view->message = $this->getMessage();
        }
    }

    private function processForAddAction() {
        if ($this->model == NULL || $this->form == NULL) {
            return;
        }
        if ($this->_request->isPost()) {
            if ($this->form->isValid($this->formData)) {
                Core_Common_Form::processSpecialInput($this->form, $this->formData);
                
                if ($this->model->createRow($this->formData)->save()) {
                    Core::message()->addSuccess('Thêm mới thành công');
                    $this->_helper->redirector('index', $this->_request->getControllerName(), $this->_request->getModuleName(), array('page' => $this->_getParam('page')));
                } else {
                    $this->view->message = 'Lỗi. Xử lý thất bại.';
                    $this->form->populate($this->formData);
                }
            } else {
                $this->form->populate($this->formData);
            }
        }
        if (!isset($this->view->form)) {//nếu trong addAction, chưa có dòng code này: $this->view->form = $this->form;
            $this->view->form = $this->form;
        }
        if ($this->renderScript == NULL) {//nếu trong addAction, k chỉ định renderScript đến .phtml nào
            try {
                $this->render('add');
            } catch (Exception $e) {
                if ($e->getCode() == 0) {
                    $this->renderScript('common/add.phtml');
                }
            }
        } else {
            $this->renderScript($this->renderScript);
        }
    }

    private function processForEditAction() {
        if ($this->model == NULL || $this->form == NULL) {
            return;
        }
        
        if ($this->_request->isPost()) {
            
            if ($this->form->isValid($this->formData)) {
                Core_Common_Form::processSpecialInput($this->form, $this->formData);
                
                $this->model->update($this->formData, 'id=' . $this->formData['id']);
                Core::message()->addSuccess('Sửa thành công');
                $this->_helper->redirector('index', $this->_request->getControllerName(), $this->_request->getModuleName(), array('page' => $this->_getParam('page')));
            } else {
                $this->form->populate($this->formData);
            }
        } else {
            $row = $this->model->fetchRow("id=" . $this->_getParam('id'))->toArray();
            $this->form->setDefaults($row);
        }
        if (!isset($this->view->form)) {//nếu trong editAction, chưa có dòng code này: $this->view->form = $this->form;
            $this->view->form = $this->form;
        }
        if ($this->renderScript == NULL) {//nếu trong editAction, k chỉ định renderScript đến .phtml nào
            try {
                $this->render('add');
            } catch (Exception $e) {
                if ($e->getCode() == 0) {
                    $this->renderScript('common/add.phtml');
                }
            }
        } else {
            $this->renderScript($this->renderScript);
        }
    }

    private function processForDeleteAction() {
        if ($this->model == NULL) {
            return;
        }
        $id = $this->_getParam('id');
        if (Core_Common_Numeric::isInteger($id) == FALSE) {
            $this->_helper->redirector('index', $this->_request->getControllerName(), $this->_request->getModuleName());
            return;
        }
        $this->model->delete("id=$id");
        Core::message()->addSuccess('Xóa thành công');
        $this->_helper->redirector('index', $this->_request->getControllerName(), $this->_request->getModuleName());
    }

}

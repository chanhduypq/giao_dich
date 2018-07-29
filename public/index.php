<?php 
//header('Cache-Control: no cache'); //no cache
//session_cache_limiter('private_no_expire'); // works
//ini_set( 'magic_quotes_gpc', 0 );
//iconv_set_encoding("internal_encoding", "UTF-8");

//header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
//header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT"); 
//header("Cache-Control: no-store, no-cache, must-revalidate"); 
//header("Cache-Control: post-check=0, pre-check=0", false);
//header("Pragma: no-cache");


require_once 'define.php';
// Typically, you will also want to add your library/ directory
// to the include_path, particularly if it contains your ZF installed
set_include_path(implode(PATH_SEPARATOR, array(
    dirname(dirname(__FILE__)) . '/library',
    get_include_path(),
)));
$temp = explode("\\", APPLICATION_PATH);
$upload = "";
for ($i = 0, $n = count($temp) - 1; $i < $n; $i++) {
    if ($i == 0) {
        $upload .= $temp[$i];
    } else {
        $upload .= "\\" . $temp[$i];
    }
}
define('UPLOAD', $upload);
//echo UPLOAD;exit;

/** Zend_Application */
require_once 'Zend/Application.php';

require_once 'Core.php';

//try {
    $environment = APPLICATION_ENV;
    $options = APPLICATION_PATH . '/configs/application.ini';
    $application = new Zend_Application($environment, $options);

    $application->bootstrap()->run();
//} catch (Exception $ex) {
//    echo '<div>Vui lòng nhấn tại <a href="/">đây</a> để quay về trang chủ</div>';
//}

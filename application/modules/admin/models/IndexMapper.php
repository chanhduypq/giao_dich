<?php

class Admin_Model_IndexMapper 
{


    public function login($phone, $password) 
    {

        try {
            $db = $this->getDB();
            $select = $db->select();
            $select->from("user", array("*"))
                    ->where("phone=?", $phone, "STRING")
                    ->where("password=?", sha1($password), "STRING")
            ;

            $result = $db->fetchRow($select);
            
        } catch (Exception $e) {
            
        }

        if (!is_array($result) || count($result) == 0) {
            return false;
        }
        $auth = Zend_Auth::getInstance();
        if ($auth->hasIdentity()) {
            $auth->clearIdentity();
        }
        
        $temp = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from user_duan where user_id='" . $result['id'] . "'");
        $user_duans = array();
        foreach ($temp as $t) {
            $user_duans[] = $t['du_an_cap_1_id'];
        }
        
        $temp = Core_Db_Table::getDefaultAdapter()->fetchAll("select * from user_nhathauthicong where user_id='" . $result['id'] . "'");
        $user_nhathauthicongs = array();
        foreach ($temp as $t) {
            $user_nhathauthicongs[] = $t['nha_thau_thi_cong_cap_1_id'];
        }
        
        $result['du_an_cap_1_ids']=$user_duans;
        $result['nha_thau_thi_cong_cap_1_ids']=$user_nhathauthicongs;

        $auth->getStorage()->write($result);
        setcookie('phone',$phone, time() + (86400 * 30), "/");
        setcookie('password',$password, time() + (86400 * 30), "/");
        return true;
    }

    public function changePassword($phone, $newPassword, $table_name) 
    {
        $db = $this->getDB();
        $data = array();
        $data['password'] = sha1($newPassword);
        try {
            $where = $db->quoteInto('phone=?', $phone, 'STRING');
            $db->update($table_name, $data, $where);
            $auth = Zend_Auth::getInstance();
            $identity = $auth->getIdentity();
            $identity["password"] = sha1($newPassword);
            $auth->clearIdentity();
            $auth->getStorage()->write($identity);
        } catch (Exception $e) {
            return false;
        }
        return true;
    }

    public function signup($phone, $password, $firstName, $lastName, $middleName) 
    {
        $user = array();
        $user['phone'] = $phone;
        $user['password'] = $password;
        $user['first_name'] = $firstName;
        $user['last_name'] = $lastName;
        $user['middle_name'] = $middleName;
        foreach ($user as $key => $value) {
            if ($value === '' || $value === null) {
                unset($user[$key]);
            }
        }
        $db = $this->getDB();
        try {
            $db->insert('user', $user);
        } catch (Exception $e) {
            
        }
    }

    public function sendEmailByIdhoso($email, $password, $firstName, $lastName, $middleName, $phone) 
    {
        require_once 'Zend/Mail.php';
        require_once 'Zend/Mail/Transport/Smtp.php';

        $smtpHost = 'smtp.gmail.com';
        $smtpConf = array(
            'auth' => 'login',
            'ssl' => 'ssl',
            'port' => '465',
            'phone' => 'chanhduypq@gmail.com',
            'password' => '826498meyeu'
        );
        $transport = new Zend_Mail_Transport_Smtp($smtpHost, $smtpConf);

        //Create email
        $mail = new Zend_Mail('UTF-8');
        $mail->setFrom('chanhduypq@gmail.com', 'Tony Caporicci');
        $mail->addTo($email, $firstName . ' ' . $middleName . ' ' . $lastName);
        $mail->setSubject('Hello ' . $firstName . ' ' . $middleName . ' ' . $lastName . '!');
        $mail->setBodyText('Your password is ' . $password);



        $sent = true;
        try {
            $mail->send($transport);
        } catch (Exception $e) {


            $sent = false;
        }

        return $sent;
    }

    private function getDB() 
    {
        $db = Core_Db_Table::getDefaultAdapter();
        $db->setFetchMode(Zend_Db::FETCH_ASSOC);
        return $db;
    }

}

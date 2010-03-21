<?php
/**
 * Created by IntelliJ IDEA.
 * User: max
 * Date: 21.03.2010
 * Time: 16:08:58
 */

$config = array();

$config['baseUrl'] = 'http://' . $_SERVER['HTTP_HOST'] . ':' . $_SERVER['SERVER_PORT'] . dirname($_SERVER['REQUEST_URI']) .'/';

$data = file_get_contents('client.js');

echo preg_replace("/'!!configHere!!'/", json_encode($config), $data);

?>
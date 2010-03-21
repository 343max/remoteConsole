<?php
/**
 * Created by IntelliJ IDEA.
 * User: max
 * Date: 21.03.2010
 * Time: 15:41:03
 */

require_once('config.inc.php');

$data = file_get_contents($dataPath);

echo '[' . preg_replace("/,\$/", "", $data) . ']';

file_put_contents($dataPath, '');

?>
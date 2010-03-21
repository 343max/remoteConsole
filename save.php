<?php

require_once('config.inc.php');

$data = file_get_contents($dataPath);

$data .= "\n" . json_encode(array('command' => $_GET['command'], 'value' => $_GET['value'])) . ',';

file_put_contents($dataPath, $data);

echo json_encode(array('result'=> 'ok'));

?>
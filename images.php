<?php

header("Content-Type: application/json; charset=utf-8");
if(!empty($_GET['bnum'])) {
    $blockNum = (int)$_GET['bnum'];
    if($blockNum < 1) {
        res(400, "invalid Request", NULL);
    }
    else {
        $data = getBlock($blockNum);
        if($data != NULL) {
            res(200, "Images found", $data);
        }
        else {
            res(200, "No More Images", $data);
        }
    }
}
else {
    res(400, "invalid Request", NULL);
}

function getBlock($blockNum) {
    $data = file_get_contents("data/images.json");
    $data = json_decode($data);
    if($blockNum > count($data))    return NULL;
    $block = $data[$blockNum - 1];
    return $block;
}

function res($status, $statusMsg, $data) {
    header("HTTP/1.1 $status $statusMsg");
    
    echo json_encode($data);
}

?>
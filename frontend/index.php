<?php

switch ($_GET['route']) {

    case 'list':
        require './list.php';
    break;

        case 'word':
            require './word.php';
            break;

}

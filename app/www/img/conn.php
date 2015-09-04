<?php
$con = @mysql_connect('localhost', 'cucyueco', 'CUCyue2015');
mysql_set_charset('utf8',$con);	
if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }
mysql_select_db("cucyueco_cucyue", $con);

?>
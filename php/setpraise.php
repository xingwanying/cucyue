<?php
include('conn.php');
$sql="SELECT * FROM word";

$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{ 	
	$a = (int)($row['praisenum']) +1;
	$sql1 = "UPDATE word SET praisenum = ".$a." WHERE wid = ".$row['wid'];
	$result1 = mysql_query($sql1);
	break;
}
	
?>
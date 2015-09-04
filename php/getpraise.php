<?php
include('conn.php');
$sql="SELECT * FROM word";

$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{ 	
	echo $row['praisenum'];
	break;
}
	
?>
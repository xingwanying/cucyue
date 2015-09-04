<?php
header('Content-type: text/json');
header("Access-Control-Allow-Origin:*");
include('conn.php');
$sql="SELECT * FROM news";

$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{ 	
	$val['id'] = $row['nid'];		
	$val['title'] = $row['title'];		
	$val['source'] = $row['source'];		
	$val['face'] = $row['thumbnail'];		
	$val['favour'] = $row['praisenum'];		
	$val['read'] = $row['readnum'];
	$val['text'] = $row['content'];		
	$val['time'] = $row['publishtime'];
	$val['newsurl'] = $row['newsurl'];
	$arr[] = $val;			
	unset ($val);	
	$sql1 = "UPDATE news SET readnum = ".($row['readnum']+1)." WHERE nid = ".$row['nid'];
	$result1 = mysql_query($sql1);
}
	$json = json_encode($arr);
	echo $json;	
?>
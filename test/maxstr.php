function maxStr($str){
	$max = array('start' => 0, 'len' => 1, );
	$current = array('start' => 0, 'len' => 1, );

	$len = count($str);
	for($i = 1; $i < $len; $i++)
	{
	    if($str[$i] == $current['start'] + $current['len']){
	        $current['len']++;
	        if($current['len'] > $max['len'] ){
	            $max['start'] = $current['start'];
	            $max['len'] = $current['len'];
	        }
	    }
	    else{
	        $current['len'] = 1;
	    }
	}
	return substr($str, $max['start'], $max['len']);
}

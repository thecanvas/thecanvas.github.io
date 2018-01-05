<!DOCTYPE html>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<html>
<head>

<script src="sl.js"></script>
<link href="https://fonts.googleapis.com/css?family=Titillium+Web:200,400" rel="stylesheet">
<title>
Canvas
</title>



</head>
<body  style=" color:white; margin:0;padding:0; background-color:#163F5F; font-family: 'Titillium Web', sans-serif; font-weight:lighter;">
<style>


#hupic{
	width:100%;
	height:10px;
	
	
}
#hues{
	width:99%;
	padding:0;
	-webkit-appearance:none;
	appearance:none;
	opacity:0.7;
	-webkit-transition:0.2s;
	transition: opacity 0.2s;
	border:none;
	background:#163F5F;
}

#hues:hover{
	opacity:1;
	
}
#hues::-webkit-slider-thumb{
	-webkit-appearance:none;
	appearance:none;
	width:10px;
	height:10px;
	background:white;
	cursor:pointer;
	border-radius:5px;
	
}

#hues::-moz-range-thumb{
	width:10px;
	height:10px;
	background:white;
	border-radius:5px;
	cursor:pointer;
	
	
}
#sats{
	width:99%;
	padding:0;
	-webkit-appearance:none;
	appearance:none;
	opacity:0.7;
	-webkit-transition:0.2s;
	transition: opacity 0.2s;
	border:none;
	background:#163F5F;
}

#sats:hover{
	opacity:1;
	
}
#sats::-webkit-slider-thumb{
	-webkit-appearance:none;
	appearance:none;
	width:10px;
	height:10px;
	background:white;
	cursor:pointer;
	border-radius:5px;
	
}

#sats::-moz-range-thumb{
	width:10px;
	height:10px;
	background:white;
	border-radius:5px;
	cursor:pointer;
	
	
}
#satcan{
	width:100%;
	height:10px;
	background-color:white;
	
	
}
#lightcan{
	width:100%;
	height:10px;
	background-color:white;
	
	
}

#lights{
	width:99%;
	padding:0;
	-webkit-appearance:none;
	appearance:none;
	opacity:0.7;
	-webkit-transition:0.2s;
	transition: opacity 0.2s;
	border:none;
	background:#163F5F;
}

#lights:hover{
	opacity:1;
	
}
#lights::-webkit-slider-thumb{
	-webkit-appearance:none;
	appearance:none;
	width:10px;
	height:10px;
	background:white;
	cursor:pointer;
	border-radius:5px;
	
}

#lights::-moz-range-thumb{
	width:10px;
	height:10px;
	background:white;
	border-radius:5px;
	cursor:pointer;
	
	
}
</style>
<center>
Hue: <span id="hueval">180</span>
<img id="hupic" src="hu.png" />
<input type="range" min="0" max="360" value="180" id="hues" />
Saturation: <span id="satval">100</span> %
<canvas id="satcan"></canvas>
<input type="range" min="0" max="100" value="100" id="sats" />
Lightness: <span id="lval">50</span> %
<canvas id="lightcan"></canvas>
<input type="range" min="0" max="100" value="50" id="lights" />

<div  style="min-width:160px; max-width:162px; height:20px; " >
	<canvas id="vyu" style="width:100%; height:100%; background-color:white;"></canvas>
</div>




</body>
</html>

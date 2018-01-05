<!DOCTYPE html>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<html>
<head>
<link href="https://fonts.googleapis.com/css?family=Titillium+Web:200,400" rel="stylesheet">


<link href="styles.css" rel="stylesheet">

<title>
Canvas
</title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js">
</script>
<script src="alg.js"></script>
<script src="dr.js"></script>
<script src="sl.js"></script>
<script src="menu.js"></script>
<script src="fx.js"></script>
</head>

<body style="cursor:default; margin:0;padding:0; background-color:lightgray;font-family: 'Titillium Web', sans-serif; font-weight:lighter;">
<style>
#pbox{
	position:absolute;
	z-index:9;
	background-color:#163F5F;
	border:1 px solid #062F4F;
	color:white;
	min-width:398;
	max-width:400;
	
}
#pboxhead{
	height:100%;
	
	z-index:10;
	background-color:#062F4F;
	color:white;
	font-size:120%;
	cursor:move;
}

#satmen,
#tlmen,
#colormen,
#cropmen,
#blur,
#posi,
#cout,
#conf,
#fil,
#colorbox,
#fx{
	position:absolute;
	z-index:9;
	background-color:#163F5F;
	border:1 px solid #062F4F;
	color:white;
	max-width:180px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}


#tlmenhead,
#couthead,
#sathead,
#colorhead,
#filhead,
#cropmenhead,
#blurhead,
#posihead,
#confhead,
#colorboxhead,
#fxhead{
	width:100%;
	cursor:move;
	z-index:10;
	background-color:#062F4F;
	color:white;
	font-size:120%;
}

a{
	text-decoration:none;
	padding:.2em 1em;
	color:white;
	width:80px;
	
}
a:hover{
	text-decoration:none;
	padding:.2em 1em;
	color:#062F4F;
	background-color:white;
	
}
.navbar{
	overflow:hidden;
	background-color:inherit;
	font-family: 'Titillium Web', sans-serif;
	
}






#menu{
	float:left;
	overflow:hidden;
	font-family:'Titillium Web', sans-serif;
	
	
}

#indiv{
	font-family:'Titillium Web', sans-serif;
	font-weight:lighter;
	border:none;
	outline:none;
	color:white;
	padding: .2em 1em;
	background-color:inherit;
	width:60px;
	
}
#indiv:hover{
	color:#062F4F;
	background-color:white;
	font-family:'Titillium Web', sans-serif;
	font-weight:lighter;
}

#menubtn{
	font-family:'Titillium Web', sans-serif;
	font-weight:lighter;
	border:none;
	outline:none;
	color:white;
	padding: .2em 1em;
	background-color:inherit;
	width:60px;
	
}
#menubtn:hover{
	color:#062F4F;
	background-color:white;
	font-family:'Titillium Web', sans-serif;
	font-weight:lighter;
}

#menuconf{
	font-family:'Titillium Web', sans-serif;
	font-weight:lighter;
	display:none;
	position:absolute;
	background-color:#163F5F;
	min-width:160px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	z-index:11;
	
}

#menucone{
	font-family:'Titillium Web', sans-serif;
	font-weight:lighter;
	display:none;
	position:absolute;
	background-color:#163F5F;
	min-width:160px;
	max-width:162px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	z-index:11;
	height:Auto;
}

#menucont{
	font-family:'Titillium Web', sans-serif;
	font-weight:lighter;
	display:none;
	position:absolute;
	background-color:#163F5F;
	min-width:160px;
	max-width:162px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	z-index:11;
	
}

#menuconh{
	font-family:'Titillium Web', sans-serif;
	font-weight:lighter;
	display:none;
	position:absolute;
	background-color:#163F5F;
	min-width:160px;
	max-width:162px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
	z-index:11;
	
}
#indiv{
	
	width:100%;
	color:white;
	background-color:#163F5F;
	
}

#indiv:hover{
	background-color:white;
	color:#062F4F
	
}

#ol{
	position:fixed;
	display:none;
	width:100%;
	height:100%;
	top:0;
	left:0;
	right:0;
	bottom:0;
	background-color:rgba(0,0,25,0.5);
	z-index:15;
	
}


#hupic{
	width:100%;
	height:10px;
	
	
}
#hues{
	width:90%;
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
	width:90%;
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
	width:90%;
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


#trans{
	width:90%;
	padding:0;
	-webkit-appearance:none;
	appearance:none;
	opacity:0.7;
	-webkit-transition:0.2s;
	transition: opacity 0.2s;
	border:none;
	background:#163F5F;
}

#trans:hover{
	opacity:1;
	
}
#trans::-webkit-slider-thumb{
	-webkit-appearance:none;
	appearance:none;
	width:10px;
	height:10px;
	background:white;
	cursor:pointer;
	border-radius:5px;
	
}

#trans::-moz-range-thumb{
	width:10px;
	height:10px;
	background:white;
	border-radius:5px;
	cursor:pointer;
	
	
}


</style>

<div id="headerr" onclick="amd()" width="device-width" ; style="height:50px; vertical-align: middle ;line-height:200%;  background-color:#062F4F; color:#F4F4F4; font-size:150%; font-family: 'Titillium Web', sans-serif; font-weight:lighter; " >
<span><a href="index.html" style="width:40">☰</a> Canvas <span style="float:right;font-size:100%">201 Web Edition </span> </span></div>

<div id="fx" style="display:none;">
<center>
<div id="fxhead">Effects</div>
Choose effect:<br>

<button onclick="pos()" id="s1" style="margin:0.3em 0em" >Position</button>
<button onclick="blu()" id="s1" style="margin:0.3em 0em" >Blurs</button>
<button onclick="coloropen()" id="s1" style="margin:0.3em 0em">Color Balance</button>

<button onclick="satopen()" id="s1" style="margin:0.3em 0em">Color Intensity</button>
<button onclick="coutopen()" id="s1" style="margin:0.3em 0em">Selective Grayscale</button>

<button onclick="fxclose()" id="s1" style="margin:0.3em 0em">Close</button>
</center>

</div>

<div id="position" style="display:none">


	<div id="positionhead">Position</div>
</div>

<div class="navbar"  width="device-width" style="background-color:#163F5F;">

	<div id="filedropdown">
	<div  id="menu">
		<button class="filedropbtn" onclick="file_click(0)" id="menubtn">File
		  
		</button>
	</div>
	<div class="file-content" id="menuconf" >
		
		<button id="indiv" onclick="new_click()">New</button><br>
		<button id="indiv" onclick="openm()">Open</button><br>
		<button id="indiv" onclick="savefile()">Save</button><br>
		<button id="indiv" onclick="gova()">Exit</button><br>
	</div>
	</div>
	
<div id="ol" >
<div id="warn" style=" background-color:red;" onclick="olon()" draggable="true">
Warning
</div>

<div id="newmen"><center>
	<div id="newhead">New</div>
	<div style="padding:0.5em 0.5 em;">
	<br>
	</div>
	
	New Document:<br>
	</center>
	<br>
	<div id="new1" style="padding:0.3em 0.3em">
	Size:<br><br>
	Width: <input id="widthin" min="0"  type="number" value="400" style="width:200px" /><br><br>
	Height: <input id="hin" min="0"  type="number"  style="width:200px" value="300" /><br>
	<br><br>Background:<br>
	<input id="sol" type="radio" checked="checked" value="sol" name="bg"  />Solid Fill<br>
	<input id="gra" type="radio"  name="bg" value="gra" />Gradient Fill<br>
	<center>
	<br>
		<button id="s1" onclick="newcon()" >Continue</button>
		
		<button id="ican" onclick="njand()">Cancel</button><br>
			
	</center>
	
	</div>
	<center>
	<div id="solfill" style="display:none;width:200px;padding:0.3em 0.3em;" >
			<input type="color"  id="solcol" value="#ffffff" /><br>
			<button id="soldone" style="padding: 0.3em 0.3em;" onclick="solidfill()">Done</button><br>
			
	</div>
	<div id="grafill" style="display:none;width:200px;padding:0.3em 0.3em;" >
		<span>
			<input type="color" id="gracol1"  value="#ffffff" />
			<input type="color" id="gracol2"  value="#ffffff" /></span><br><br>Angle:<br>
			<input type="range" id="angin" value="0" min="0" max="90" /><br>
			<div id="avi">0</div> Degrees<br><br>
			<div id="SooryakiranDiv" ><canvas id="angdisp" ></canvas></div><br>
			<button id="gradone" style="padding: 0.3em 0.3em;" onclick="grafill()">Done</button><br>
			<p id="hid2"style="display:none;">0</p>
			<p id="hid"style="display:none;">0</p>
			<p id="conti"style="display:none;">0</p>
			<p id="prevx"style="display:none;">0</p>
			<p id="prevd"style="display:none;">0</p>
			<p id="prevy"style="display:none;">0</p>
	</div>
	</center>
</div>
<div id="openmen" >

	<center>
	<div id="opal" style="width:100%;">
	Open
	</div>
	
	<div id="fake" onClick="win()" style="min-width:180px; margin 0.3em 0.3em">Browse</div>
	</center>
	<input id="fl" style="display:none;" onchange="jingle(event)" type="file" accept="image/*" ></input>
	<img id="pvy" src="hu.png" style="display:none" onchange="aarodum()" alt="Preview"/>
	</div>

	

<div id="posi"  style="min-width:400px; max-width:402px; display:none">

	<center>
	<div id="posihead" >Position</div>
	<br>Angle:<br>
	<div style="padding:0.3em 0.3em;">
	<input id="posang" type="range" min="-90" onchange="rott()" max="90" value="0" />
	<br>
	<canvas id="pospre" style="background-color:white"></canvas>
	<br>
	Width:<br>
	<input id="poswi" onchange="rott()" type="range" value="0" min="0" max="100"><br>
	Height:<br>
	<input id="poshi" onchange="rott()" type="range" value="0" min="0" max="100">
	<br>
	<button id="s1" onclick="posidone()">Done</button>
	</center>
	
</div>	
</div>
<div id="blur" style="z-index:20;min-width:400px;max-width:402px; display:none">
	<center>
	<div id="blurhead">Blur</div>
	</center>
	<div style="padding:0.3em 0.3em">
	Blur options:<br>
	<button id="s1" onclick="blurfull()" >Complete</button>
	<button id="s1" onclick="blurc()">Close</button>
	
</div>
</div>
<div id="conf"  style="min-width:400px; max-width:402px; display:none">
	<center>
	<div id="confhead">Are you sure ?</div>
	
	<div style="padding:0.3em 0.3em">
	<button onclick="prompter(1)" id="s1">Yes</button><br><button onclick="prompter(0)" id="s1" >No</button>
	</center>
	

</div>

<div style="display:none;">
	<canvas id="tempc"></canvas>
</div>	
	<div id="editdropdown">
	<div id="menu">
		<button class="editdropbtn" onclick="file_click(1)" id="menubtn">Edit</button>
	</div>
	<div class="edit-content" id="menucone">
		<button id="indiv" onclick="undo()">Undo</button>
		<button id="indiv"  onclick="redooo()" >Redo</button>
		
	</div>
	</div>
	
	
	<div id="toolsdropdown">
	<div id="menu">
		<button class="toolsdropbtn" onclick="file_click(2)" id="menubtn">Tools</button>
	</div>
	<div class="tools-content" id="menucont">
		
		<button id="indiv" onClick="cropini()">Crop</button>
		<button id="indiv" onClick="square()">Squarefy</button>
		
		<button id="indiv" onClick="inv()">Inverse</button>
		
		<button id="indiv" onClick="beat()">Brighten</button>
		<button id="indiv" onClick="beat2()">Darken</button>
		
		<button id="indiv" onClick="beat3()">Dim</button>
		
		<button id="indiv" onClick="beat4()">Enlighten</button>
		<button id="indiv" onclick="dispp()">Effects</button>
		
		
	</div>
	</div>


	<div id="helpdropdown">
	<div id="menu">
		<button class="helpdropbtn" onclick="file_click(3)" id="menubtn">Help</button>
	</div>
	<div class="help-content" id="menuconh">
		
		<button id="indiv" onclick="helper()">About</button>
		
		
	</div>
	</div>
	<div id="sooryakiran" onclick="amd()" style="width:100% ;color:#163F5F; padding:.2em 1em; text-allign:right;" >A Sooryakiran production
	
	</div>
</div>
<div id="cropmen" style="min-width:400px; max-width:402px; display:none">
<center>
<div id="cropmenhead">Crop</div>
	
	<div style="padding:0.3em 0.3em">
	
	<button onclick="crop(0)" id="s1">Free Crop</button><br>or<br>
	<input type="number" min="0" value="1" id="rat1"/> : 	<input min="0" value="1" type="number" id="rat2"/><br>
	<button onclick="crop(1)" id="s1">Select</button>
	
	
	
	</center>
	
	</div>
</div>
<div id="colormen" style="min-width:200px; max-width:202px; display:none">
<center>
<div id="colorhead">Color</div>
	
	<div style="padding:0.3em 0.3em; margin:0.3em 0.3em 0.3em 0.3em;">
	
	Color Balance:
	
	<br>
	Red: <span id="reddisp" >0</span>%<br>
	<input  onchange="cmupdate()" id="redr" type="range" min="-100" value="0" max="100"/><br>
	Green: <span id="greendisp">0</span>%<br>
	<input  onchange="cmupdate()" id="greenr" type="range" min="-100" value="0" max="100"/><br>
	Blue: <span id="bluedisp">0</span>%<br>
	<input  onchange="cmupdate()"  id="bluer" type="range" min="-100" value="0" max="100"/><br>
	<br>
	<button id="s1" onclick="cmex(1)">Apply</button>
	<br>
	<button id="s1" onclick="cmex(0)">Cancel</button>
	</div>
	</center>
</div>

<div id="satmen" style="min-width:200px; max-width:202px; display:none">
<center>
<div id="sathead">Color Intensity</div>
	
	<div style="padding:0.3em 0.3em; margin:0.3em 0.3em 0.3em 0.3em;">
	Scale:
	<br>
	<input id="grayv"  onchange="satup()" type="range" min="0" max="200" value="100">
	<br>
	<span id="grayd">0</span> %<br>
	<button id="s1" onclick="grayclose()">Apply</button>
	</div>
	</center>
</div>
<div id="cout" style="min-width:200px; max-width:202px; display:none">
<center>
<div id="couthead">Selective Grayscale</div>
	
	<div style="padding:0.3em 0.3em; margin:0.3em 0.3em 0.3em 0.3em;">
	Select Hue: <span id="coutdis">180</span><br>
	<img src="hu.png" style="width:90%"/><br>
	<input type="range" onchange="coutup()" min="0" max="360" value="180" id="coutval"/>
	Tolerance:<br>
	<input type="range" onchange="coutup()" min="5" max="50" value="10" id="couttol"/>
	
	Color Level:
	<br>
	<input id="grayvc"  onchange="coutup()" type="range" min="0" max="100" value="100">
	<br>
	<span id="graydv">100</span> %<br>
	<button id="s1" onclick="coutclose()">Apply</button>
	</div>
	</center>
</div>
<img src="cur.png" id="sss" style="position:absolute;z-index:100  ;height:100px; width:100px; display:none;"/>

<div id="soloman" style="display:none">
	<canvas id="un1" ></canvas>
	<canvas id="un2" ></canvas>
	<canvas id="un3" ></canvas>
	<canvas id="un4" ></canvas>
	<canvas id="un5" ></canvas>
	<canvas id="un6" ></canvas>
	<canvas id="un7" ></canvas>
	<canvas id="un8" ></canvas>
	<canvas id="un9" ></canvas>
	<canvas id="un10" ></canvas>
	<canvas id="un11" ></canvas>
	<canvas id="un12" ></canvas>
	<canvas id="un13" ></canvas>
	<canvas id="un14" ></canvas>
	<canvas id="un15" ></canvas>
	<canvas id="un16" ></canvas>
	<canvas id="un17" ></canvas>
	<canvas id="un18" ></canvas>
	<canvas id="un19" ></canvas>
	<canvas id="un20" ></canvas>

</div>

<div id="tlmen" style="min-width:200px; max-width:202px; ">
<center>
<div id="tlmenhead">Tools</div>
	
	<div style="font-size:70%;padding:0.3em 0.3em; margin:0.3em 0.3em 0.3em 0.3em;">
	<p style="font-size:120%"> Sketch tools</p>
	
	
	<span onclick="pentool()"><img src="pen.png" style="height:15px;width:15px" />Pen </span><br>
	
	<span onclick="pencil()"><img src="pc.png" style="height:15px;width:15px" />Pencil </span><br>
	<span onclick="cross()" > <img src="pc.png" style="height:15px;width:15px" />Cross Shade </span><br>
	<span onclick="smooth()" ><img src="pc.png" style="height:21px;width:15px" />Smooth Shade </span><br>
	<p style="font-size:120%"> Paint tools</p>
	<span onclick="flat()" ><img src="logo.png" style="height:15px;width:15px" />Watercolor Flat </span><br>
	<span onclick="round()" ><img src="logo.png" style="height:15px;width:15px" />Watercolor Round </span><br>
	<span onclick="vellam()" ><img src="logo.png" style="height:15px;width:15px" />Water</span><br>
	<span onclick="ennachaayam()" ><img src="logo.png" style="height:15px;width:15px" />Oil Color </span><br>
	<p style="font-size:120%"> General</p>
	<span onclick="edukkuka()"><img src="colpic.png" style="height:15px;width:15px" />Color Picker </span><br>
	
	</div>
	</center>
</div>




<div id="fil" style="min-width:400px; max-width:402px; display:none">
<center>
<div id="filhead">Filters</div>
	
	
	
	</center>
	
	</div>
</div>



<div id="container" style="padding:0 0 0 0; position:relative; " >
	<div id="toolbox" style=" background-color:#163F5F; max-width:62px; height:100%;float:left; box-shadow: 0px 8px 16px 0px rgba(0,0,0,1);">
		<div id="colorbox">
		<div id="colorboxhead"><center>
		Color box</center>
		</div>
			<div style="padding:0.5em 0.3em;" >
			<center>
			Hue: <span id="hueval">180</span>
			<img id="hupic" src="hu.png" />
			<input type="range" min="0" max="360" value="180" id="hues" />
			Saturation: <span id="satval">100</span> %
			<canvas id="satcan"></canvas>
			<input type="range" min="0" max="100" value="100" id="sats" />
			Lightness: <span id="lval">50</span> %
			<canvas id="lightcan"></canvas>
			<input type="range" min="0" max="100" value="0" id="lights" />
			Transparency: <span id="transpval" >0</span> %
			<input type="range" min="0" max="100" value="85" id="trans" />
			<div  style="min-width:70px; max-width:160px; height:20px; " >
				<canvas id="vyu" style="width:100%; height:100%; background-color:white;"></canvas>
			</div>
			</center>
			</div>
			<div style="display:none">
			<span id="red">0</span><span id="green">0</span>
			<span id="blue">0</span><span id="alpha">0.85</span>
			<span id="r1">0</span><span id="g1">0</span>
			<span id="b1">0</span><span id="a1">0</span>
			
			</div>
		</div>
		
		
		
	
	</div>
	<div id="maindiv" style=" float:right;">
		<canvas id="picDraw" style="background-color:white;cursor:crosshair;">
			<p>Your browser seems to be outdated</p>
		</canvas>
		
	<div id="pbox" style="width:75%;padding:0.3em 0.3em">
		<span id="pboxhead" style="padding:0.2em;">
			Properties
		</span>
		<span style="float:right;">
				<input style="display:none;" type="number" id="tool" value="1"/>
				Space: 
				<input type="number" id="spc" value="10" />
				Size: 
				<input type="number" id="siz" value="10" />
				 Angle: <span id="angleval" >45</span> Degrees
				<input id="aaa" type="range"  onchange="last()" min="0" max="180" value="45" />
		</span>
	</div>		
</div>
 
</body>
</html>

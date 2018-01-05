function new_click()
{
	amd();
	olon();
	var x=document.getElementById("newmen")
	document.getElementById("openmen").style.display="none";
	x.style.display="block";
	
	var w=window.innerHeight;
	w=w-x.offsetHeight;
	w=w/2;
	console.log("A sooryakiran Production");
	x.style.position="absolute";
	x.style.top=w + "px";
	w=window.innerWidth;
	w=w-x.offsetWidth;
	w=w/2;
	x.style.left=w+ "px";
	var c=document.getElementById("picDraw");
	var wi=window.innerWidth-100;
	var hi=window.innerHeight-150;
	x=document.getElementById("widthin");
	x.value=wi;
	x=document.getElementById("hin");
	x.value=hi;
	
}
function newcon(){
	
	document.getElementById("new1").style.display="none";
	var x=document.getElementById("picDraw");
	var wi=document.getElementById("widthin").value;
	var hi=document.getElementById("hin").value;
	x.width=wi;
	x.height=hi;
	wi=wi*75/100;
	x=document.getElementById("pbox");
	x.style.width=wi +"px";
	console.log("A Sooryakiran Production");
	x=document.getElementById("sol");
	if(x.checked){
		console.log("Solid fill");
		document.getElementById("solfill").style.display="block";
		
	}
	else{
		console.log("Gradient");
		document.getElementById("grafill").style.display="block";
		
	}
	
}

function solidfill(){
	document.getElementById("new1").style.display="block";
	document.getElementById("solfill").style.display="none";
	document.getElementById("newmen").style.display="none";
	oloff();
	var p=document.getElementById("picDraw").getContext("2d");
	p.fillStyle=document.getElementById("solcol").value;
	var c=document.getElementById("picDraw");
	p.fillRect(0,0,c.width,c.height);
}

function grafill(){
	document.getElementById("new1").style.display="block";
	document.getElementById("grafill").style.display="none";
	document.getElementById("newmen").style.display="none";
	var cp=document.getElementById("picDraw");
	var c=cp.getContext("2d");
	var ang;
	ang=document.getElementById("angin");
	var rad=ang.value*Math.PI/180;
	var mag;
	var wi;
	var hi;
	if(ang.value<=45){
		hi=cp.height*Math.sin(rad);
		wi=cp.width;
	}
	else {
		hi=cp.height;
		wi=cp.width*Math.cos(rad);
	}
	mag=hi*hi +wi*wi;
	mag=Math.sqrt(mag);
	console.log(cp.height);
	var x=c.createLinearGradient(0,0,mag*Math.cos(rad),mag*Math.sin(rad));
	x.addColorStop(0, document.getElementById("gracol1").value)
	x.addColorStop(1, document.getElementById("gracol2").value)
	c.fillStyle=x;
	c.fillRect(0,0 , cp.width,cp.height);
	
	
	oloff();
}
function njand(){
	document.getElementById("new1").style.display="block";
	document.getElementById("grafill").style.display="none";
	document.getElementById("newmen").style.display="none";
	oloff();
	
}

function win(){
	document.getElementById("fl").click();
}
function jingle(event){
	var x=document.getElementById("pvy");
	document.getElementById("openmen").style.display="none";
	document.getElementById("opal").style.display="none";
	var rd=new FileReader();
	rd.onload= function(){
		x.src=rd.result;
		aarodum()
		
		
		
		var i= new Image();
	i.onload=function(){
	var c=document.getElementById("picDraw").getContext("2d");
	var pic=document.getElementById("picDraw");
	pic.width=window.innerWidth-100;
	pic.height=window.innerHeight-150;
	var ratio=i.width/i.height;
	
	var need=pic.width/pic.height;
	if(ratio>need){
		pic.height=pic.width/ratio;
		
	}
	else{
		pic.width=pic.height*ratio;
	}
	
	
	
	c.drawImage(i,0,0,i.width,i.height,0,0,pic.width,pic.height);
	pointofsale();
	
	}
	i.src=x.src;
	oloff();
	}
	rd.readAsDataURL(event.target.files[0]);
	
}
function aarodum(){
	var x=document.getElementById("pvy");
	var rat=x.height/x.width;
	console.log(rat);
	x.width=160;
	x.height=rat*160+10;
}

function openm(){
	amd();
	olon();
	console.log("Da potta");
	var x=document.getElementById("openmen");
	x.style.display="block";
	document.getElementById("opal").style.display="block";
	var h=window.innerHeight;
	h=h-x.offsetHeight;
	h=h/2;
	x.style.top=h+"px";
	console.log("My name is Sooryakiran And I am a Billionaire!(Oh u donot seems to have a time machine) " );
	h=window.innerWidth;
	h-=x.offsetWidth;
	h/=2;
	x.style.left=h+"px";

}	

function savefile(){
	var a=document.getElementById("picDraw");
	var b=a.toDataURL("image/jpeg");
	window.location.href=b;
}

function gova(){
	window.location.href="index.php";
}

function saveredo(){
	var i;
	for(i=2;i<=20;i++){
		
		var prevc=document.getElementById("un"+(i-1));
		var now=document.getElementById("un"+i);
		prevc.width=now.width;
		prevc.height=now.height;
		prevc=prevc.getContext("2d");
		prevc.drawImage(now,0,0);
		
		
	}
	var now=document.getElementById("un20");
	var big=document.getElementById("picDraw");
	now.width=picDraw.width;
	now.height=picDraw.height;
	now=now.getContext("2d");
	now.drawImage(big,0,0);
	console.log("EVERYTHING IS THE FINE");
}

function undo(){
	var i;

	var now=document.getElementById("un20");
	var big=document.getElementById("picDraw");
	
	
	for(i=20;i>=2;i--){
		
		var prevc=document.getElementById("un"+(i));
		var now=document.getElementById("un"+(i-1));
		prevc.width=now.width;
		prevc.height=now.height;
		prevc=prevc.getContext("2d");
		prevc.drawImage(now,0,0);
		
		
	}
	now=document.getElementById("un1");
	now.width=picDraw.width;
	now.height=picDraw.height;
	now=now.getContext("2d");
	now.drawImage(big,0,0);
	
	now=document.getElementById("un20");
	big.width=now.width;
	big.height=now.height;
	big=big.getContext("2d");
	
	big.clearRect(0,0,now.width,now.height);
	big.drawImage(now,0,0);
	
}

function redooo(){
	var i;
	var now=document.getElementById("un1");
	var big=document.getElementById("picDraw");
	big.width=now.width;
	big.height=now.height;
	big=big.getContext("2d");
	
	big.clearRect(0,0,now.width,now.height);
	big.drawImage(now,0,0);
		for(i=2;i<=20;i++){
		
		var prevc=document.getElementById("un"+(i-1));
		var now=document.getElementById("un"+i);
		prevc.width=now.width;
		prevc.height=now.height;
		prevc=prevc.getContext("2d");
		prevc.drawImage(now,0,0);
		
		
	}
	
}
function helper(){
	window.location.href="help.html";
	
}
function pentool(){
	document.getElementById("tool").value=1;
	
}

function pencil(){
	document.getElementById("tool").value=1;
	document.getElementById("sats").value=0;
	document.getElementById("lights").value=85;
	document.getElementById("trans").value=97;
	upd();
	
}
function cross(){
	document.getElementById("tool").value=2;
	document.getElementById("sats").value=0;
	document.getElementById("lights").value=75;
	document.getElementById("trans").value=97;
	upd();
	
}


function smooth(){
	document.getElementById("tool").value=3;
	document.getElementById("sats").value=0;
	document.getElementById("lights").value=75;
	document.getElementById("trans").value=97;
	upd();
	
}
function flat(){
	document.getElementById("tool").value=3;
	document.getElementById("trans").value=97;
	upd();
	
}


function round(){
	document.getElementById("tool").value=4;
	document.getElementById("trans").value=50;
	upd();
	
}

function vellam(){
	document.getElementById("tool").value=5;
	document.getElementById("trans").value=97;
	upd();
	
}


function ennachaayam(){
	document.getElementById("tool").value=6;
	document.getElementById("trans").value=97;
	upd();
	
}


function edukkuka(){
	document.getElementById("tool").value=7;
	
	upd();
	
}

function last(){
	document.getElementById("angleval").innerHTML=document.getElementById("aaa").value;
	
}
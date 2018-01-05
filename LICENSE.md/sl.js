
	var hsl;
	var hou;
	var ssl;
	var sou;
	var lsl;
	var lou;
	var trv;
	var trs;
	var avi;
	var ang;
	
	
if(window.addEventListener){
	window.addEventListener('load',function() { init2(); });
	
}


function init2(){
	console.log("INIT@");
	hhsl=document.getElementById("hues");
	hou=document.getElementById("hueval");
	ssl=document.getElementById("sats");
	sou=document.getElementById("satval");
	lsl=document.getElementById("lights");
	lou=document.getElementById("lval");
	trv=document.getElementById("transpval");
	trs=document.getElementById("trans");
	ang=document.getElementById("angin");
	avi=document.getElementById("avi");
	
	
	
	hou.innerHTML=hhsl.value;
	sou.innerHTML=ssl.value;
	lou.innerHTML=lsl.value;
	trv.innerHTML=trs.value;
	avi.innerHTML=ang.value;
	
	var a=document.getElementById("grafill");
	
	hhsl.addEventListener('mouseup',upd,false);
	ssl.addEventListener('mouseup',upd,false);
	lsl.addEventListener('mouseup',upd,false);
	trs.addEventListener('mouseup',upd,false);
	ang.addEventListener('mouseup',drw,false);
	
	
	hhsl.addEventListener('mousemove',upd,false);
	ssl.addEventListener('mousemove',upd,false);
	lsl.addEventListener('mousemove',upd,false);
	trs.addEventListener('mousemove',upd,false);
	ang.addEventListener('mousemove',drw,false);
	a.addEventListener('mousemove',drw,false);
	
	document.getElementById("posi").addEventListener('mousemove',rott,false);
	
	hhsl.oninput=upd();
	ssl.oninput=upd();
	lsl.oninput=upd();
	ang.oninput=drw();
	
	
	
}

function upd(){
		console.log("pod");
		hou.innerHTML=hhsl.value;
		sou.innerHTML=ssl.value;
		lou.innerHTML=lsl.value;
		trv.innerHTML=trs.value;
		var x=document.getElementById("vyu");
		
		
		
		var h,s,l;
		h=hhsl.value;
		s=ssl.value;
		l=lsl.value;
		
		var r,g,b;
		if(h<=120){
			b=0;
			if(h<=60){
				g=h/60*255;
				r=255;
				
			}
			else{
				r=255-(h-60)/60*255;
				g=255;
			}
		}
		else if(h<=240){
			h=h-120;
			r=0;
			if(h<=60){
				b=h/60*255;
				g=255;
				
			}
			else{
				g=255-(h-60)/60*255;
				b=255;
			}
		}
		else{
			h=h-240;
			g=0;
			if(h<=60){
				r=h/60*255;
				b=255;
				
			}
			else{
				b=255-(h-60)/60*255;
				r=255;
			}			
		}
		var cols;
		r=parseInt(r);
		g=parseInt(g);
		b=parseInt(b);
		cols="RGB(" + r + "," + g + "," + b + ")" ;
		
		var satcan=document.getElementById("satcan");
		var scc=satcan.getContext("2d");
		var wi=satcan.width;
		var hi=satcan.height;
		var gd=scc.createLinearGradient(0,0,wi,0);
		gd.addColorStop(0,"RGB(128,128,128)");
		gd.addColorStop(1,cols);
		scc.fillStyle=gd;
		scc.fillRect(0,0,wi,hi);
		
		var m=s/100;
		var n=1-m;
		r=m*r+n*128;
		g=m*g+n*128;
		b=m*b+n*128;
		r=parseInt(r);
		g=parseInt(g);
		b=parseInt(b);
		
		cols="RGB(" + r + "," + g + "," + b + ")" ;
		
		var lcan=document.getElementById("lightcan");
		var lcc=lcan.getContext("2d");
		
		wi=lcan.width;
		hi=lcan.height;
		gd=lcc.createLinearGradient(0,0,wi,0);
		gd.addColorStop(0,"black");
		gd.addColorStop(0.5,cols);
		gd.addColorStop(1,"white");
		lcc.fillStyle=gd;
		lcc.fillRect(0,0,wi,hi);
		
		
		
		if(l<=50){
			m=l/50;
			n=1-m;
			r=m*r+n*0;
			g=m*g+n*0;
			b=m*b+n*0;
		}
		else{
			m=(l-50)/50;
			n=1-m;
			r=m*255+n*r;
			g=m*255+n*g;
			b=m*255+n*b;
		}
		r=parseInt(r);
		g=parseInt(g);
		b=parseInt(b);

		var a=100-trs.value;
		a=a/100;
		
		
		document.getElementById("red").innerHTML=r;
		document.getElementById("green").innerHTML=g;
		document.getElementById("blue").innerHTML=b;
		document.getElementById("alpha").innerHTML=a;
		
		
		cols="rgba(" + r + "," + g + "," + b + "," + a + ")" ;

		vyu.style.background=cols;
		var mn=document.getElementById("picDraw");
		var cc=mn.getContext("2d");
		cc.strokeStyle=cols;
		cc.stroke();
		
		
		
		
		

		console.log("A Sooryakiran Production");
}
function drw(){
	
	avi.innerHTML=ang.value;
	var c=document.getElementById("angdisp").getContext("2d");
	var cp=document.getElementById("angdisp");
	var prev=document.getElementById("hid");
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
	
	
}
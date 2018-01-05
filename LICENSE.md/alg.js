if(window.addEventListener){
	window.addEventListener('load',function() { init(); });	
}
var isDown=false;
var picdraw, context;
var stmp=' ';
var lcolor='black';
var lstmp='';
var cropx=0,cropy=0;
var cx,cy;
function init(){
	
	picdraw=document.querySelector('#picDraw');
	context=picdraw.getContext('2d');
	
	
	var tool=document.getElementById("tool").value;
	
	picdraw.width=window.innerWidth-100;
	picdraw.height=window.innerHeight-150;
	pointofsale();
	picdraw.addEventListener('mousemove', onMouseMove, false );
	picdraw.addEventListener('mousedown',down,false);
	picdraw.addEventListener('mouseup',mup,false);
	
	
	console.log("INITIALISED");
	
	document.getElementById("colormen").addEventListener('mousemove',cmupdate,false);
	document.getElementById("grayv").addEventListener('mousemove',satup,false);
	
	var i;
	for(i=1;i<=20;i++){
		var p=document.getElementById("un"+i);
		var k=document.getElementById("picDraw");
		p.width=k.width;
		p.height=k.height;
	}
	
	var toolbox=document.getElementById("tlmen");
	toolbox.style.left=window.innerWidth-toolbox.offsetWidth+ "px";
	console.log(window.innerWidth-toolbox.offsetWidth+ "px");
	
}
function mup(ev){
	isDown=false;
	
	context.beginPath();
	var tool=document.getElementById("tool").value;
	if(tool==8)cropstop(ev);
	else{
	saveredo();
	}
}
function down(ev){
	
	isDown=true;
	document.getElementById("conti").innerHTML=100;
	
	var tool=document.getElementById("tool").value;
	if(tool==8){
		cropstart(ev);
	}
	
}
function onMouseMove(ev){
	amd();
	var x,y;
	var size=document.getElementById("siz").value;
	var angle=Math.PI/180 * document.getElementById("aaa").value;
	var c=Math.cos(angle);
	var s=Math.sin(angle);
	if(!isDown){
		console.log("NOTDOWN");
		
	}
	else{

	if(ev.layerX >= 0){
		//firefox
					var ppp=document.getElementById("picDraw");
		x=ev.layerX-ppp.offsetLeft;
		y=ev.layerY-ppp.offsetTop;
	
	}
	else if(ev.offsetX>=0){
		var ppp=document.getElementById("picDraw");
		x=ev.offsetX-ppp.offsetLeft;
		y=ev.offsetY-ppp.offsetTop;
		
		
	}
	var tool=document.getElementById("tool").value;
	if(tool==10){
		if(!isDown){

			
			document.getElementById("prevx").innerHTML=x;
			document.getElementById("prevy").innerHTML=y;
			context.beginPath();
			context.moveTo(x,y);
		}
		else{
			var x0=document.getElementById("prevx").innerHTML;
			var y0=document.getElementById("prevy").innerHTML;
			
			
			context.lineTo(x,y);
			context.lineTo(x0,y0);
			context.moveTo(x,y);
			context.stroke();
			var interstellar=document.getElementById("spc").value;
			if((x-x0)*(x-x0)+(y-y0)*(y-y0)>interstellar*interstellar ){ 
			
			document.getElementById("prevx").innerHTML=x;
			document.getElementById("prevy").innerHTML=y;
			
			}
		}
	}
	
	//addition
	
	
		if(tool==1){
		if(!isDown){
			context.beginPath();
			context.moveTo(x,y);
			
		}
		else{

			
			context.lineTo(x,y);
			context.stroke();
			
			
		}
	}
	
	
	
	
	
	
	//Subctractiom
	
	if(tool==2){
		if(!isDown){
			context.beginPath();
			context.moveTo(x,y);
			document.getElementById("prevx").innerHTML=x;
			document.getElementById("prevy").innerHTML=y;
		}
		else{
			var r,g,b,a;
			r=document.getElementById("red").innerHTML;
			g=document.getElementById("green").innerHTML;
			b=document.getElementById("blue").innerHTML;
			a=document.getElementById("alpha").innerHTML;
			var interstellar=document.getElementById("spc").value;
			c1="rgba(" + r + "," + g + "," + b + "," + a + ")";
			c2="rgba(" + r + "," + g + "," + b + "," + "0" + ")";
			
			var x0=document.getElementById("prevx").innerHTML;
			var y0=document.getElementById("prevy").innerHTML;
			if((x-x0)*(x-x0)+(y-y0)*(y-y0)>interstellar*interstellar ){ 
			
			var gr=context.createLinearGradient(x,y,x+size*c,y+size*s);
			gr.addColorStop(0,c1);
			gr.addColorStop(1,c2);
			context.strokeStyle=gr;
		
			
			
			console.log(document.getElementById("aaa").value);
			context.lineTo(x+size*c,y+size*s);
			context.moveTo(x,y);
			context.stroke();
			document.getElementById("prevx").innerHTML=x;
			document.getElementById("prevy").innerHTML=y;
			}
		}
		
	}
	if(tool==3){
		if(!isDown){
		context.beginPath();
		context.moveTo(x,y);
	
		}
		else{
		var gr=context.createLinearGradient(x-c*size/2,y-c*size/2,x+c*size/2,y+s*size/2);
		var r,g,b,a;
		r=document.getElementById("red").innerHTML;
		g=document.getElementById("green").innerHTML;
		b=document.getElementById("blue").innerHTML;
		a=document.getElementById("alpha").innerHTML;
		
		var tr=a*0.1;
		var c1,c2;
		c1="rgba(" + r + "," + g + "," + b + "," + tr + ")";
		c2="rgba(" + r + "," + g + "," + b + "," + "0" + ")";
		
		console.log("A Sooryakiran production");
		gr.addColorStop(0,c2);
		gr.addColorStop(0.5,c1);
		gr.addColorStop(1,c2);
		
		context.fillStyle=gr;
		
		context.fillRect(x-size/2,y-size/2,size,size);
		
		console.log(c*size);
		console.log(s*size);
		
		}
		
	}
	if(tool==4){
		if(!isDown){
			context.beginPath();
			context.moveTo(x,y);
		
		}
		else{
			size*=2;
			var gr=context.createRadialGradient(x,y,0,x,y,size/2);
			var r,g,b,a;
			r=document.getElementById("red").innerHTML;
			g=document.getElementById("green").innerHTML;
			b=document.getElementById("blue").innerHTML;
			a=document.getElementById("alpha").innerHTML;
			
			var tr=a*0.02;
			var c1,c2;
			c1="rgba(" + r + "," + g + "," + b + "," + tr + ")";
			c2="rgba(" + r + "," + g + "," + b + "," + "0" + ")";
			
			console.log("A Sooryakiran production");
			gr.addColorStop(0,c1);
			gr.addColorStop(1,c2);
			
			context.fillStyle=gr;
			
			context.fillRect(x-size/2,y-size/2,size,size);
		
			
		
			
			
			
		}
		
		

		
	}
	
	
	if(tool==5){
			var conti=document.getElementById("conti");
			var p=conti.innerHTML;
			console.log(p);
		if(!isDown){
			context.beginPath();
			context.moveTo(x,y);
		
		}
		else{
			console.log(p);
			if(p>0){
			size*=2;
			var r,g,b,a;
			var ida=context.getImageData(x,y,1,1).data;
			var grp=context.createRadialGradient(x,y,0,x,y,size/2);
			r=ida[0];
			g=ida[1];
			b=ida[2];
			a=ida[3];
			a/=255;
			a*=0.02;
			c1="rgba(" + r + "," + g + "," + b + "," + a + ")";
			c2="rgba(" + r + "," + g + "," + b + "," + "0" + ")";
			grp.addColorStop(0,c1);
			grp.addColorStop(1,c2);
			console.log(c2);
			context.fillStyle=grp;
			context.fillRect(x-size/2,y-size/2,size,size);
			conti.innerHTML=p-1;
			}
		}
		
	}
	
	if(tool==6){
			var conti=document.getElementById("conti");
			var p=conti.innerHTML;
		
		if(!isDown){
			context.beginPath();
			context.moveTo(x,y);
		
		}
		else{
			
			
			var r1,g1,b1,r2,g2,b2;
			var ida=context.getImageData(x,y,1,1).data;
			if(p>=100){
				
				r1=ida[0];
				g1=ida[1];
				b1=ida[2];
				var a=ida[3];
				document.getElementById("r1").innerHTML=r1;
				document.getElementById("g1").innerHTML=g1;
				document.getElementById("b1").innerHTML=b1;
				document.getElementById("a1").innerHTML=a;
				
			}
				r1=document.getElementById("r1").innerHTML;
				g1=document.getElementById("g1").innerHTML;
				b1=document.getElementById("b1").innerHTML;
				a=document.getElementById("a1").innerHTML;
			r2=document.getElementById("red").innerHTML;
			g2=document.getElementById("green").innerHTML;
			b2=document.getElementById("blue").innerHTML;
			console.log(r1);
			var ratio=p/100;
			
			if(ratio>=0.5)ratio=0.5;
			r1=255-r1;
			g1=255-g1;
			b1=255-b1;
			
			r2=255-r2;
			g2=255-g2;
			b2=255-b2;
			if(a==0){
				r1=g1=b1=0;
				
			}
			if(ratio<0.05)ratio=0.05;
			r1=r2*ratio +r1*(1-ratio);
			g1=g2*ratio +g1*(1-ratio);
			b1=b2*ratio +b1*(1-ratio);
			
		
			r1=255-r1;
			g1=255-g1;
			b1=255-b1;
			
			console.log(context.strokeStyle);
			console.log(p);
			context.beginPath();
			context.moveTo(x-c*size/2,y-s*size/2);
			context.lineWidth=size/2;
			if(context.lineWidth>=10)context.lineWidth=10;
			context.strokeStyle="RGB(" + r1 + "," + g1 + "," + b1 +")";
			context.lineTo(x+c*size/2,y+s*size/2);
			
			context.stroke();
			conti.innerHTML=p-1;
			
		}
		
	}
	
	if(tool==7){
		if(!isDown){
			context.beginPath();
			context.moveTo(x,y);
		
		}
		else{
			pikk(x,y);
		}
	}
	
	
	
	if(tool==8){
		if(!isDown){
			context.beginPath();
			context.moveTo(x,y);
		
		}
		else{
			
			if(	document.getElementById("rat1").value!=0 &&	document.getElementById("rat2").value!=0){
				var h=	document.getElementById("rat2").value/	document.getElementById("rat1").value*(x-cropx);
				y=h+cropy;
				
			}

			
			cx=x;
			cy=y;
			
			if(cx<=cropx || cy<=cropy){
				return 0;
				
			}
			
			var temp=document.getElementById("tempc");
			
			var tempc=temp.getContext("2d");
			context.clearRect(0,0,picdraw.width,picDraw.height);
			context.drawImage(temp,0,0);
			context.fillStyle="RGBA(0,0,20,0.5)"
			context.fillRect(0,0,cropx,picdraw.width);
			context.fillRect(cropx,0,cx-cropx,cropy);
			context.fillRect(cx,0,picdraw.width-cx,picdraw.height);
			context.fillRect(cropx,cy,cx-cropx,picdraw.height-cy);
			
			console.log(cx);
			console.log(cropx);
		}
	}
	}

	
	
}

function onClick(ev){
	console.log("clicked")
	
}
function file_click(ev){
	console.log("this will work");
	var s=document.getElementById("menubtn").offsetWidth;
	s=s*(ev);
	if(ev==0){
	document.getElementById("menuconf").style.display='block';
	document.getElementById("menucone").style.display='none';
	document.getElementById("menucont").style.display='none';
	document.getElementById("menuconh").style.display='none';
	
	
	var x=document.getElementById("sooryakiran").offsetHeight;

	document.getElementById("menuconf").style.top=document.getElementById("sooryakiran").offsetTop + x + "px";
	document.getElementById("menuconf").style.left=s+"px";
	
	}
	if(ev==1){
	document.getElementById("menuconf").style.display='none';
	document.getElementById("menucone").style.display='block';
	document.getElementById("menucont").style.display='none';
	document.getElementById("menuconh").style.display='none';
	var x=document.getElementById("sooryakiran").offsetHeight;

	document.getElementById("menucone").style.top=document.getElementById("sooryakiran").offsetTop + x + "px";
	document.getElementById("menucone").style.left=s+"px";
	}
	
	if(ev==2){
	document.getElementById("menuconf").style.display='none';
	document.getElementById("menucone").style.display='none';
	document.getElementById("menucont").style.display='block';
	document.getElementById("menuconh").style.display='none';
	var x=document.getElementById("sooryakiran").offsetHeight;

	document.getElementById("menucont").style.top=document.getElementById("sooryakiran").offsetTop + x + "px";
	document.getElementById("menucont").style.left=s+"px";
	}
	if(ev==3){
	document.getElementById("menuconf").style.display='none';
	document.getElementById("menucone").style.display='none';
	document.getElementById("menucont").style.display='none';
	document.getElementById("menuconh").style.display='block';
	
	var x=document.getElementById("sooryakiran").offsetHeight;

	document.getElementById("menuconh").style.top=document.getElementById("sooryakiran").offsetTop + x + "px";
	document.getElementById("menuconh").style.left=s+"px";
	}
	
	
}
function olon(){
	document.getElementById("ol").style.display='block';
	
}
function oloff(){
	document.getElementById("ol").style.display='none';
	x=document.getElementById("newmen").style.display='none';
	
}
function amd(){
	document.getElementById("menuconf").style.display='none';
	document.getElementById("menucone").style.display='none';
	document.getElementById("menucont").style.display='none';
	document.getElementById("menuconh").style.display='none';

	
}

function pointofsale(){

}
function pikk(x,y){
		var r,g,b,a;
			var ida=context.getImageData(x,y,1,1).data;
			r=ida[0]/255;
			g=ida[1]/255;
			b=ida[2]/255;
			a=ida[3];
			a=(1-a/255)*100;
			
			var h, s, l ;
			var cmax,cmin;
			var d;
			cmax=Math.max(r,g,b);
			cmin=Math.min(r,g,b);
			
			d=cmax-cmin;
			if(d==0){
				h=180;
			}
			else if(cmax==r){
				h=60*(g-b)/d;
			}
			else if(cmax==g){
				h=60*(b-r)/d +120;
			}
			else{
				h=240 + (r-g)/d;
			}
			h=parseInt(h);
			console.log(h);
			
			l=(cmax+cmin)/2;
			
			if(d==0){
				s=0;
			}
			else{
				var t=2*l-1;
				if(t<0)t=-t;
				s=d/(1-t);
			}
			document.getElementById("hues").value=h;
			document.getElementById("sats").value=s*100;
			document.getElementById("lights").value=l*100;
			document.getElementById("trans").value=a;
			upd();
	
}
function inv(){
	var a=document.getElementById("picDraw");
	var b=a.getContext("2d");
	var c=b.getImageData(0,0,a.width,a.height);
	var n=c.width*c.height;
	var pix=c.data;
	for(var i=0;i<n;i++){
		pix[i*4]=255-pix[i*4];
		pix[i*4+1]=255-pix[i*4+1];
		pix[i*4+2]=255-pix[i*4+2];
		
		
	}
	b.clearRect(0,0,a.width,a.height);
	b.putImageData(c,0,0);
	saveredo();
}
function beat(){
	var a=document.getElementById("picDraw");
	var bb=a.getContext("2d");
	var c=bb.getImageData(0,0,a.width,a.height);
	var n=c.width*c.height;
	var pix=c.data;
	for(var i=0;i<n;i++){
		var r,g,b;
		r=pix[i*4]*1.1;
		g=pix[i*4+1]*1.1;
		b=pix[i*4+2]*1.1;
	
		r=Math.min(255,r);
		g=Math.min(255,g);
		b=Math.min(255,b);
	
		pix[i*4]=r;
		pix[i*4+1]=g;
		pix[i*4+2]=b;
		
		
	}
	
	bb.clearRect(0,0,a.width,a.height);
	bb.putImageData(c,0,0);
	saveredo();
}


function beat2(){
	var a=document.getElementById("picDraw");
	var bb=a.getContext("2d");
	var c=bb.getImageData(0,0,a.width,a.height);
	var n=c.width*c.height;
	var pix=c.data;
	for(var i=0;i<n;i++){
		var r,g,b;
		r=pix[i*4]*0.9;
		g=pix[i*4+1]*0.9;
		b=pix[i*4+2]*0.9;
	
		
	
		pix[i*4]=r;
		pix[i*4+1]=g;
		pix[i*4+2]=b;
		
		
	}
	
	bb.clearRect(0,0,a.width,a.height);
	bb.putImageData(c,0,0);
	saveredo();
}

function beat3(){
	var a=document.getElementById("picDraw");
	var bb=a.getContext("2d");
	var c=bb.getImageData(0,0,a.width,a.height);
	var n=c.width*c.height;
	var pix=c.data;
	var l=0;
	for(var i=0;i<n;i++){
		var r,g,b;
		r=pix[i*4+0];
		g=pix[i*4+1];
		b=pix[i*4+2];
		
		if(r+g+b==0){n--;}
		else
		 l+=(r+g+b)/3;
	}
	l=l/n;
	for(var i=0;i<n;i++){
		var r,g,b;
		r=pix[i*4+0];
		g=pix[i*4+1];
		b=pix[i*4+2];
		
		
		var p=(r+g+b)/3;
		if(p<l){
		
		r=pix[i*4]*0.9;
		g=pix[i*4+1]*(0.9);
		b=pix[i*4+2]*(0.9);
		}
		
	
		pix[i*4]=r;
		pix[i*4+1]=g;
		pix[i*4+2]=b;
		
		
	}
	
	bb.clearRect(0,0,a.width,a.height);
	bb.putImageData(c,0,0);
	saveredo();
}

function beat4(){
	var a=document.getElementById("picDraw");
	var bb=a.getContext("2d");
	var c=bb.getImageData(0,0,a.width,a.height);
	var n=c.width*c.height;
	var pix=c.data;
	var l=0;
	for(var i=0;i<n;i++){
		var r,g,b;
		r=pix[i*4+0];
		g=pix[i*4+1];
		b=pix[i*4+2];
		
		
		 l+=(r+g+b)/3;
	}
	l=l/n;
	for(var i=0;i<n;i++){
		var r,g,b;
		r=pix[i*4+0];
		g=pix[i*4+1];
		b=pix[i*4+2];
		
		
		var p=(r+g+b)/3;
		if(p>l){
		
		r=pix[i*4]*1.1;
		g=pix[i*4+1]*(1.1);
		b=pix[i*4+2]*(1.1);
		
		r=Math.min(255,r);
		g=Math.min(255,g);
		b=Math.min(255,b);
		}
		
	
		pix[i*4]=r;
		pix[i*4+1]=g;
		pix[i*4+2]=b;
		
		
	}
	
	bb.clearRect(0,0,a.width,a.height);
	bb.putImageData(c,0,0);
	saveredo();
}
function cropstart(ev){
	console.log("entered");
	if(ev.layerX >= 0){
		//firefox
			var ppp=document.getElementById("picDraw");
		cropx=ev.layerX-ppp.offsetLeft;
		cropy=ev.layerY-ppp.offsetTop;
		
	}
	else if(ev.offsetX>=0){
		var ppp=document.getElementById("picDraw");
		cropx=ev.offsetX-ppp.offsetLeft;
		cropy=ev.offsetY-ppp.offsetTop;
		
	}
	var temp=document.getElementById("tempc");
			temp.width=picdraw.width;
			temp.height=picdraw.height;
			var tempc=temp.getContext("2d");
			tempc.drawImage(picdraw,0,0);
	console.log("CROPX");
	console.log(cropx);
	
}
function cropstop(ev){
	if(ev.layerX >= 0){
		//firefox
		var ppp=document.getElementById("picDraw");
		cx=ev.layerX-ppp.offsetLeft;
		cy=ev.layerY-ppp.offsetTop;
		
	}
	else if(ev.offsetX>=0){
		var ppp=document.getElementById("picDraw");
		cx=ev.offsetX-ppp.offsetLeft;
		cy=ev.offsetY-ppp.offsetTop;
		
	}
	
	var temp=document.getElementById("tempc");
			
			var tempc=temp.getContext("2d");
			context.clearRect(0,0,picdraw.width,picdraw.height);
			context.drawImage(temp,0,0);
			po();
			
}
function prompter(i){
	document.getElementById("conf").style.display="none";
	
	var temp=document.getElementById("tempc");
	var tempc=temp.getContext("2d");
	if(i==0){
		//no crop;
		
	}
	if(i==1){
		context.clearRect(0,0,picdraw.width,picdraw.height);
		var wi=cx-cropx;
		var hi=cy-cropy;
		var need=hi/wi;
		console.log(cx);
		console.log(cropx);
		
		var have=(window.innerHeight-150)/(window.innerWidth-100);
		
	picdraw.width=window.innerWidth-100;
	picdraw.height=window.innerHeight-150;
		if(need>have){
			picdraw.width=picdraw.height/need;
			
		}
		else{
			picdraw.height=picdraw.width*need;
			
		}
		context.drawImage(temp,cropx,cropy,cx-cropx,cy-cropy,0,0,picdraw.width,picdraw.height);
		
	}
	
			saveredo();
}

function po(){
	var p=document.getElementById("conf");
	p.style.display="block";
	
	
	
	p.style.left=(window.innerWidth -p.offsetWidth)/2 + "px";
	p.style.top=(window.innerHeight-p.offsetHeight)/2 + "px";
	
}


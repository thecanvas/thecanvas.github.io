function pos(){
	olon();
	var obj=document.getElementById("posi")
	obj.style.display="block";
	var wi=window.innerWidth;
	var hi=window.innerHeight;
	var l=wi-obj.offsetWidth;
	console.log("A Sooryakiran Production");
	var l=l/2;
	obj.style.left=l +"px";
	l=hi-obj.offsetHeight;
	l/=2;
	obj.style.top=50+"px";
	var ang=document.getElementById("posang");
	ang.value=0;
	var angle=ang.value;
	var orig=document.getElementById("picDraw");
	var wi=orig.width;
	var hi=orig.height;
	var ratio=hi/wi;
	var mine=document.getElementById("pospre");
	mine.width=300;
	mine.height=300*ratio;
	mine=mine.getContext("2d");
	mine.drawImage(orig,0,0,orig.width,orig.height,0,0,300,300*ratio);
	document.getElementById("poswi").max=150;
	document.getElementById("poshi").max=150*ratio;
	document.getElementById("poswi").value=0;
	document.getElementById("poshi").value=0;
}
function dispp(){
	var obj=document.getElementById("fx")
	obj.style.display="block";
	var wi=window.innerWidth;
	var hi=window.innerHeight;
	var l=wi-obj.offsetWidth;
	console.log("A Sooryakiran Production");
	var l=l/2;
	obj.style.left=l +"px";
	l=hi-obj.offsetHeight;
	l/=2;
	obj.style.top=l+"px";
	
}
function rott(){
	console.log("Invest in me! Make Billions!");
	var b=document.getElementById("pospre");
	var c=document.getElementById("pospre").getContext("2d");
	c.clearRect(0,0,b.width,b.height);
	c.save();
	var angle=document.getElementById("posang").value;
	angle=angle*Math.PI/180;
	c.translate(b.width/2,b.height/2);
	var orig=document.getElementById("picDraw");
	c.rotate(angle);
	c.drawImage(orig,0,0,orig.width,orig.height,-b.width/2,-b.height/2,b.width,b.height);
	c.restore();
	var x=document.getElementById("poswi").value;
	var y=document.getElementById("poshi").value;
	c.fillStyle="RGBA(0,0,50,0.5)";
	c.fillRect(0,0,x,b.height);
	c.fillRect(b.width-x,0,x,b.height);
	c.fillRect(x,0,b.width-2*x,y);
	c.fillRect(x,b.height-y,b.width-2*x,y);
}

function posidone(){
	console.log("Invest in me! Make Billions!");
	var tempc=document.getElementById("tempc");
	var ctx=tempc.getContext("2d");
	
	var b=document.getElementById("picDraw");
	var c=document.getElementById("picDraw").getContext("2d");
	tempc.width=b.width;
	tempc.height=b.height;
	ctx.drawImage(b,0,0);
	c.clearRect(0,0,b.width,b.height);
	c.save();
	var angle=document.getElementById("posang").value;
	angle=angle*Math.PI/180;
	c.translate(b.width/2,b.height/2);
	var orig=document.getElementById("tempc");
	c.rotate(angle);
	c.drawImage(orig,0,0,orig.width,orig.height,-b.width/2,-b.height/2,b.width,b.height);
	c.restore();
	ctx.drawImage(b,0,0);
	var x=b.width/300*document.getElementById("poswi").value;
	var y=b.width/300*document.getElementById("poshi").value;
	var wi=b.width-2*x;
	var hi=b.height-2*y;
	var need=hi/wi;
	var have=(window.innerHeight-150)/(window.innerWidth-100);
	b.width=window.innerWidth-100;
	b.height=window.innerHeight-150;
	var width,height;
	
	if(need<have){
		width=b.width;
		height=b.width*need;
		
	}
	else{
		height=b.height;
		width=height/need;
		
		
	}
	b.width=width;
	b.height=height;
	c.drawImage(orig,x,y,wi,hi,0,0,b.width,b.height);
	console.log(x);


	var obj=document.getElementById("posi")
	obj.style.display="none";
	
	oloff();
	saveredo();
	
}
function fxclose(){
	var obj=document.getElementById("fx")
	obj.style.display="none";
	
}
function blu(){
	
	var obj=document.getElementById("blur")
	obj.style.display="block";
	
	var wi=window.innerWidth;
	var hi=window.innerHeight;
	var l=wi-obj.offsetWidth;
	console.log("A Sooryakiran Production");
	var l=l/2;
	obj.style.left=l +"px";
	l=hi-obj.offsetHeight;
	l/=2;
	obj.style.top=50+"px";
	
}

function blurfull(){
	var mine=document.getElementById("picDraw");
	var temp=document.getElementById("tempc");
	var minec=mine.getContext("2d");
	var tempc=temp.getContext("2d");
	
	temp.width=mine.width;
	temp.height=mine.height;
	tempc.drawImage(mine,0,0);
	
	var i,j,k;
	for(k=0;k<2;k++){
	for(i=1;i<10;i++){
	minec.globalAlpha=1/i;
	console.log(mine.globalAlpha);
	for(j=0;j<360;j=j+2){
		
		var angle=j*Math.PI/180;
		var s=Math.sin(angle);
		var c=Math.cos(angle);
		minec.drawImage(temp,0,0,mine.width,mine.height,i*s,i*c,mine.width,mine.height);
		
	}
	}
	}
	minec.globalAlpha=1;
	
	saveredo();
}


function cropini(){
	amd();
	var obj=document.getElementById("cropmen");
	obj.style.display="block";
	var wi=window.innerWidth;
	var hi=window.innerHeight;
	var l=wi-obj.offsetWidth;
	console.log("A Sooryakiran Production");
	var l=l/2;
	obj.style.left=l +"px";
	l=hi-obj.offsetHeight;
	l/=2;
	obj.style.top=l+ "px";
	console.log(obj.style.top);
	
}

function crop(i){
	if(i==0){
		document.getElementById("rat1").value=0;
		document.getElementById("rat2").value=0;
	}
	else{
		
	}
	document.getElementById("tool").value=8;
	var obj=document.getElementById("cropmen");
	obj.style.display="none";
}

function square(){
	var mine=document.getElementById("picDraw");
	var temp=document.getElementById("tempc");
	var minec=mine.getContext("2d");
	var tempc=temp.getContext("2d");
	
	temp.width=mine.width;
	temp.height=mine.height;
	tempc.drawImage(mine,0,0);
	
	if(mine.width>mine.height){
		var h=mine.height;
		mine.height=mine.width;
		minec.drawImage(temp,0,0,mine.width,h,0,0,mine.width,mine.height);
	
	}
	else{
		var h=mine.width;
		mine.width=mine.height;
		minec.drawImage(temp,0,0,h,mine.height,0,0,mine.width,mine.height);
	
	}
	
	beat2();
	
	var i,j,k;
	for(k=0;k<4;k++){
	for(i=1;i<7;i++){
	minec.globalAlpha=1/i/i;
	console.log(mine.globalAlpha);
	for(j=0;j<360;j=j+2){
		
		var angle=j*Math.PI/180;
		var s=Math.sin(angle);
		var c=Math.sqrt(1-s*s);
		if(j>90 && j<270)c=-c;
		var k=mine.width,l=mine.height;
		if(mine.width>temp.width)k=temp.width;
		if(mine.height>temp.height)l=temp.height;
		minec.drawImage(temp,0,0,k,l,i*s,i*c,mine.width,mine.height);
		
	}
	}
	}
	minec.globalAlpha=1;
	
	
	beat2();beat2();
	beat2();
	
	if(temp.width>temp.height){
		var wi=mine.width;
		var hi=mine.width*temp.height/temp.width;
		var ot=mine.height-hi;
		ot/=2;
		minec.drawImage(temp,0,0,temp.width,temp.height,0,ot,mine.width,hi);
		
	}
	else{
		var hi=mine.height;
		var wi=mine.height*temp.width/temp.height;
		var ol=mine.width-wi;
		ol/=2;
		minec.drawImage(temp,0,0,temp.width,temp.height,ol,0,wi,mine.height);
		
	}
	
	//herre
	var hi=mine.height;
	var wi=mine.width;
	var need = hi/wi;
	temp.width=mine.width;
	temp.height=mine.height;
	tempc.drawImage(mine,0,0,mine.width,mine.height,0,0,temp.width,temp.height);
	var rato=(window.innerHeight-150)/(window.innerWidth-100);
	if(need>rato){
		mine.height=window.innerHeight-150;
		mine.width=mine.height/need;
		
	}
	else{
		mine.width=window.innerWidth-100;
		mine.height=mine.width*need;
		
	}
	minec.drawImage(temp,0,0,temp.width,temp.height,0,0,mine.width,mine.height);
	
}

function bluc(){
	var obj=document.getElementById("blur")
	obj.style.display="none";
	
}

function coloropen(){
	amd();
	var obj=document.getElementById("colormen");
	obj.style.display="block";
	var wi=window.innerWidth;
	var hi=window.innerHeight;
	var l=wi-obj.offsetWidth;
	console.log("A Sooryakiran Production");
	var l=l/2;
	obj.style.left=l +"px";
	l=hi-obj.offsetHeight;
	l/=2;
	obj.style.top=l+ "px";
	console.log(obj.style.top);
	var temp=document.getElementById("tempc");
	var tempc=document.getElementById("tempc").getContext("2d");
	var mine=document.getElementById("picDraw");
	temp.width=mine.width;
	temp.height=mine.height;
	tempc.drawImage(mine,0,0);
	document.getElementById("redr").value=0;
	document.getElementById("greenr").value=0;
	document.getElementById("bluer").value=0;
}

function cmupdate(){
	var reddisp=document.getElementById("reddisp");
	var greendisp=document.getElementById("greendisp");
	var bluedisp=document.getElementById("bluedisp");
	reddisp.innerHTML=document.getElementById("redr").value;
	greendisp.innerHTML=document.getElementById("greenr").value;
	bluedisp.innerHTML=document.getElementById("bluer").value;
	
	
	var r,g,b;
	r=reddisp.innerHTML;
	g=greendisp.innerHTML;
	b=bluedisp.innerHTML;
	r/=2;
	g/=2;
	b/=2;
	
	r=r+100;
	r/=100;
	
	g+=100;
	g/=100;
	
	b+=100;
	b/=100;
	
	var temp=document.getElementById("tempc");
	var tempc=document.getElementById("tempc").getContext("2d");
	var mine=document.getElementById("picDraw");
	var minec=mine.getContext("2d");
	minec.drawImage(temp,0,0);
	
	
	
	var imgg=minec.getImageData(0,0,mine.width,mine.height);
	var pix=imgg.data;
	var i,n;
	n=imgg.width*imgg.height;
	
	for(i=0;i<n;i++){
		pix[i*4]=Math.min(255,pix[i*4]*r);
		pix[i*4+1]=Math.min(255,pix[i*4+1]*g);
		pix[i*4+2]=Math.min(255,pix[i*4+2]*b);
		
	}
	minec.clearRect(0,0,mine.width,mine.height);
	minec.putImageData(imgg,0,0);
	

	
	
}

function cmex(i){
	if(i==0){
	var temp=document.getElementById("tempc");
	var tempc=document.getElementById("tempc").getContext("2d");
	var mine=document.getElementById("picDraw");
	var minec=mine.getContext("2d");
	minec.drawImage(temp,0,0);
	}
	amd();
	var obj=document.getElementById("colormen");
	obj.style.display="none";
}

function satopen(){
	amd();
	var obj=document.getElementById("satmen");
	obj.style.display="block";
	var wi=window.innerWidth;
	var hi=window.innerHeight;
	var l=wi-obj.offsetWidth;
	console.log("A Sooryakiran Production");
	var l=l/2;
	obj.style.left=l +"px";
	l=hi-obj.offsetHeight;
	l/=2;
	obj.style.top=l+ "px";
	console.log(obj.style.top);
	var temp=document.getElementById("tempc");
	var tempc=document.getElementById("tempc").getContext("2d");
	var mine=document.getElementById("picDraw");
	temp.width=mine.width;
	temp.height=mine.height;
	tempc.drawImage(mine,0,0);
	
}

function satup(){
	
	var val=document.getElementById("grayv").value;
	var disp=document.getElementById("grayd");
	disp.innerHTML=val;
	
	var temp=document.getElementById("tempc");
	var tempc=document.getElementById("tempc").getContext("2d");
	var mine=document.getElementById("picDraw");
	var minec=mine.getContext("2d");
	minec.drawImage(temp,0,0);
	
	
	
	var imgg=minec.getImageData(0,0,mine.width,mine.height);
	var pix=imgg.data;
	var i,n;
	n=imgg.width*imgg.height;
	
	for(i=0;i<n;i++){
		var m,k;
		var r,g,b;
		r=pix[i*4];
		g=pix[i*4+1];
		b=pix[i*4+2];
		var l=r*0.3+g*0.4+b*0.3;
		m=val/100;
		k=1-m;
		r=r*m+k*l;
		g=g*m+k*l;
		b=b*m+k*l;
	
		
		
		pix[i*4]=r;
		pix[i*4+1]=g;
		pix[i*4+2]=b;
		
		
		
		
		
	}
	minec.clearRect(0,0,mine.width,mine.height);
	minec.putImageData(imgg,0,0);
}

function grayclose(){
	amd();
	var obj=document.getElementById("satmen");
	obj.style.display="none";
	
}

function blurc(){
	amd();
	var obj=document.getElementById("blur");
	obj.style.display="none";
}



function coutopen(){
	amd();
	var obj=document.getElementById("cout");
	obj.style.display="block";
	var wi=window.innerWidth;
	var hi=window.innerHeight;
	var l=wi-obj.offsetWidth;
	console.log("A Sooryakiran Production");
	var l=l/2;
	obj.style.left=l +"px";
	l=hi-obj.offsetHeight;
	l/=2;
	obj.style.top=l+ "px";
	console.log(obj.style.top);
	var temp=document.getElementById("tempc");
	var tempc=document.getElementById("tempc").getContext("2d");
	var mine=document.getElementById("picDraw");
	temp.width=mine.width;
	temp.height=mine.height;
	tempc.drawImage(mine,0,0);
	
	var disp=document.getElementById("coutdis");
	var val=document.getElementById("coutval");
	val.addEventListener('mousemove',coutup,false);
	disp.innerHTML=val.value;
	
	var grayvc=document.getElementById("grayvc");
	var graydv=document.getElementById("graydv");
	grayvc.addEventListener('mousemove',coutup,false);
	
	graydv.innerHTML=grayvc.value;
}

function coutup(){
	var disp=document.getElementById("coutdis");
	var val=document.getElementById("coutval");
	disp.innerHTML=val.value;
	var grayvc=document.getElementById("grayvc");
	var graydv=document.getElementById("graydv");
	graydv.innerHTML=grayvc.value;
	
	
	var temp=document.getElementById("tempc");
	var tempc=document.getElementById("tempc").getContext("2d");
	var mine=document.getElementById("picDraw");
	var minec=mine.getContext("2d");
	minec.drawImage(temp,0,0);
	
	
	
	var imgg=minec.getImageData(0,0,mine.width,mine.height);
	var pix=imgg.data;
	var i,n;
	n=imgg.width*imgg.height;
	
	for(i=0;i<n;i++){
		var m,k;
		var r,g,b;
		r=pix[i*4];
		g=pix[i*4+1];
		b=pix[i*4+2];
		var l=r*0.3+g*0.4+b*0.3;
		m=grayvc.value/100;
		k=1-m;
		
		var hueUs,hueGiv;
		hueGiv=val.value;
		
		var cmax,cmin;
		var d;
			cmax=Math.max(r,g,b);
			cmin=Math.min(r,g,b);
			
			d=cmax-cmin;
			if(d==0){
				hueUs=180;
			}
			else if(cmax==r){
				hueUs=60*(g-b)/d;
			}
			else if(cmax==g){
				hueUs=60*(b-r)/d +120;
			}
			else{
				hueUs=240 + (r-g)/d;
			}
			hueUs=parseInt(hueUs);
		var tol=document.getElementById("couttol").value;
		var lower=hueGiv-tol;
		if(lower<0)lower+=360;
		var upper=hueGiv - (-tol);
		if(upper>360)upper-=360;
		if(upper<lower){
		if(hueUs<lower && hueUs>upper){
		r=r*m+k*l;
		g=g*m+k*l;
		b=b*m+k*l;
			
		}}
		else{
		if(hueUs<lower || hueUs>upper){
		r=r*m+k*l;
		g=g*m+k*l;
		b=b*m+k*l;
	
		}
		}
		pix[i*4]=r;
		pix[i*4+1]=g;
		pix[i*4+2]=b;
		
		
		
		
	}
	minec.clearRect(0,0,mine.width,mine.height);
	minec.putImageData(imgg,0,0);
	
}

function coutclose(){
	amd();
	var obj=document.getElementById("cout");
	obj.style.display="none";
	
}
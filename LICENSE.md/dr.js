if(window.addEventListener){
	window.addEventListener('load',function() { init1(); });	
}

function init1(){
	dragElement(document.querySelector('#colorbox'));
	dragElement(document.querySelector('#pbox'));
	dragElement(document.querySelector("#fx"));
	dragElement(document.querySelector("#tlmen"));
	document.getElementById("aaa").addEventListener('mousemove',last,false);
}
function dragElement(elmnt){
	if(elmnt.id=="tlmen")console.log("YEAH YEAH YEAH");
	var x=0,y=0,x1=0,y1=0;
	
	if(document.getElementById(elmnt.id + "head")){
		document.getElementById(elmnt.id +"head").onmousedown=dragMD;
		
	}
	
	function dragMD(e){
		e=e || window.event;
		x1=e.clientX;
		y1=e.clientY;
		document.onmouseup=closer;
		document.onmousemove=eDrag;
	}
	
	function eDrag(e){
		x=x1-e.clientX;
		y=y1-e.clientY;
		x1=e.clientX;
		y1=e.clientY;
		elmnt.style.top=(elmnt.offsetTop-y)+"px";
		elmnt.style.left=(elmnt.offsetLeft-x)+"px";
		if(elmnt.id=="tlmen")console.log("YEAH YEAH YEAH");
		
	}
	
	function closer(){
		document.onmouseup=null;
		document.onmousemove=null;
		
	}
	
}


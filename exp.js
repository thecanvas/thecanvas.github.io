if(window.addEventListener){
	window.addEventListener('load',function() { init(); });	
}
function init(){
	var d=document.getElementById("exp");
	var i=0;
	var h=d.height;
	var w=d.width;
	d=d.getContext("2d");

		var j=0;
		var gr=d.createLinearGradient(0,0,w,0);
		gr.addColorStop(1,"#000ff000");
		gr.addColorStop(0,"#000ff0ff");
		d.fillStyle=gr;
		d.fillRect(0,0,w,h);
	
}
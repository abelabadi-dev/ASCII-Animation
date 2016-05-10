window.onload = function () {
	document.getElementById('start').onclick = function () {
		console.log("JS working");
	}
	document.getElementById('animations').onchange = function () {
		var animationType = document.getElementById('animations').value;
		document.getElementById('txtArea').value = ANIMATIONS[animationType];
		
	}
	document.getElementById('size').onchange = function(){
		var size = document.getElementById('size').value;
		//console.log(size);
		document.getElementById('txtArea').style.fontSize = size;
	}
	document.getElementById('start').onclick = function () {
		var drawing = document.getElementById('txtArea').value;
		var arry = drawing.split("=====\n");
		document.getElementById('txtArea').value = arry[i];
	}
}
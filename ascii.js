window.onload = function () {
	var start = document.getElementById('start');
	document.getElementById('start').disabled = true;
	document.getElementById('stop').disabled = true;
	document.getElementById('animations').onchange = function () {
		document.getElementById('start').disabled = false;
		var animationType = document.getElementById('animations').value;
		document.getElementById('txtArea').value = ANIMATIONS[animationType];
	}
	document.getElementById('size').onchange = function(){
		
		var size = document.getElementById('size').value;
		//console.log(size);
		document.getElementById('txtArea').style.fontSize = size;
	}
	var counter=0;
	document.getElementById('start').onclick = function () {
		document.getElementById('animations').disabled = true;
		document.getElementById('start').disabled = false;
		document.getElementById('stop').disabled = false;

		var drawing = document.getElementById('txtArea').value;
		//var arry = ANIMATIONS["exercise"].split("=====\n");
		var arry = drawing.split("=====\n");
		//console.log(arry);
		var timer = setInterval(function () {
			if(counter < arry.length){
			document.getElementById('txtArea').value = arry[counter];
			counter++;
			//console.log(counter);
		}
		else{
			counter=0;
		}
		},250);
		document.getElementById('stop').onclick = function () {
		clearInterval(timer);
		document.getElementById('animations').disabled = false;
		var animationType = document.getElementById('animations').value;
		document.getElementById('txtArea').value = ANIMATIONS[animationType];
		document.getElementById('stop').disabled = true;
	}
	}
	
}
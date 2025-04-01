//your JS code here. If required.
let move = document.getElementById("line");
let angle = 0;

setInterval(()=>{
	angle+=2;
	move.style.transform= `rotate(${angle}deg)`
}, 20)



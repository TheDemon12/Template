function parallax() {
	var i=1;
	var x1=document.getElementById("increase1");
	var x2=document.getElementById("increase2");
	var x3=document.getElementById("increase3");
	var x4=document.getElementById("increase4");
	setInterval(myTimer1,100);
	setInterval(myTimer2,100);
	setInterval(myTimer3,100);
	setInterval(myTimer4,100);
	function myTimer1() {
		if(i<=1000)
			x1.innerHTML=i;
		i+=28;
	}
	function myTimer2() {
		if(i<=1000)
			x2.innerHTML=i;
		i+=28;
	}
	function myTimer3() {
		if(i<=800)
			x3.innerHTML=i;
		i+=28;
	}
	function myTimer4() {
		if(i<=800)
			x4.innerHTML=i;
		i+=28;
	}
}

function showit()
	{
		document.getElementById('menu').style.height = "300px";
		document.getElementById('down').style.display = "block";
		document.getElementById('up').style.display = "none";
			
		
		
	}
	
		function hideit()
	{
		
		
		document.getElementById('menu').style.height = "50px";
		document.getElementById('up').style.display = "block";
		document.getElementById('down').style.display = "none";
		document.getElementById("menu").style.MozTransition = "height 0.55s ease-in-out";
		document.getElementById("menu").style.WebkitTransition = "height 0.55s ease-in-out";
			
	}
	function sent()
	{
		alert("Message Sent!");
		document.getElementById('fn').innerHTML.value= "";
		document.getElementById('em').innerHTML.value= "";
		document.getElementById('no').innerHTML.value= "";
		document.getElementById('ta').innerHTML.value= "";
	
	}
	
	
	function ldetails()
	{
		document.getElementById('see').style.display = "none";
		document.getElementById('less').style.display = "none";
		document.getElementById('more').style.display = "block";
			
		
		
	}
	
		function details()
	{
		
		
		document.getElementById('see').style.display = "block";
		document.getElementById('more').style.display = "none";
		document.getElementById('less').style.display = "block";
		document.getElementById("see").style.MozTransition = "display 0.55s ease-in-out";
		document.getElementById("see").style.WebkitTransition = "display 0.55s ease-in-out";
			
	}


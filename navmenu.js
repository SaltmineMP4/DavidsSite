/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function addresponsiveclass() {
	var test = document.getElementById("navmenu");
	if (test.className === "PageMenu") {
	  test.className += " responsive";
	} else {
	  test.className = "PageMenu";
	}
  }
  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function navbardropdown() {
	document.getElementById("dropdownMenu").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
	if (!e.target.matches('.dropbtn')) {
	var dropdownMenu = document.getElementById("dropdownMenu");
	  if (dropdownMenu.classList.contains('show')) {
		dropdownMenu.classList.remove('show');
	  }
	}
  }
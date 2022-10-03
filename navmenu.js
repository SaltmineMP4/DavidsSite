
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
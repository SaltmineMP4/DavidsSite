/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
	var x = document.getElementById("navmenu");
	if (x.className === "PageMenu") {
	  x.className += " responsive";
	} else {
	  x.className = "PageMenu";
	}
  }
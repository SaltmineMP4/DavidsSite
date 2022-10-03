/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
	var test = document.getElementById("navmenu");
	if (test.className === "PageMenu") {
	  test.className += " responsive";
	} else {
	  test.className = "PageMenu";
	}
  }
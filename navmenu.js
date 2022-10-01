function navmenfunc() {
	var x = document.getElementById("navmenu");
	if (x.className === "PageMenu") {
	  x.className += " responsive";
	} else {
	  x.className = "PageMenu";
	}
  }

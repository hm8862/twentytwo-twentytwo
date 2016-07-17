

var nude = {
	0: "EMINNUDE1.jpeg",
	1: "EMINNUDE2.jpeg",
	2: "EMINNUDE3.jpg",
	3: "EMINNUDE4.jpeg"
}

var sorbet = {
	0: "EMINSORBET1.jpeg",
	1: "EMINSORBET2.jpeg",
	2: "EMINSORBET3.jpeg",
	3: "EMINSORBET4.jpeg"
}

function onChange() {
	// get selected option
	var item_colour = document.getElementById("item-colour");
	var selected_colour = item_colour.options[item_colour.selectedIndex].textContent;

	// if NUDE or SORBET, update to relevant 

	if (selected_colour == "NUDE") {
		document.getElementById("emin").src = "../static/shop/" + nude[0];
		document.getElementById("emin-one").src = "../static/shop/" + nude[0];
		document.getElementById("emin-two").src = "../static/shop/" + nude[1];
		document.getElementById("emin-three").src = "../static/shop/" + nude[2];
		document.getElementById("emin-four").src = "../static/shop/" + nude[3];
	}

	if (selected_colour == "SORBET") {
		document.getElementById("emin").src = "../static/shop/" + sorbet[0];
		document.getElementById("emin-one").src = "../static/shop/" + sorbet[0];
		document.getElementById("emin-two").src = "../static/shop/" + sorbet[1];
		document.getElementById("emin-three").src = "../static/shop/" + sorbet[2];
		document.getElementById("emin-four").src = "../static/shop/" + sorbet[3];
	}
}
// why yes this should be a database. hush.
var teenF = ["Alix Kubdel", "Alya Césaire", "Alya Césaire [Reverse]","Aurore Beauréal","Chloé Bourgeois", "Fei Wu", "Jessica Keynes", "Juleka Couffaine", 
"Kagami Tsurugi","Melodie [PV]", "Lila Rossi", "Marinette Dupain-Cheng", "Marinette Dupain-Cheng [Reverse]", "Marinette Dupain-Cheng [PV]","Mireille Caquet","Mylène Haprèle", 
"Ondine", "Rose Lavillant","Sabrina Raincomprix", "Socqueline Wang", "Vivica"];
var teenM = ["Adrien Agreste", "Adrien Agreste [Reverse]", "Jalil Kubdel","Delmar [NY Special]", "Ivan Bruel","Félix Fathom", "Félix Agreste [PV]", "Jiao","Kang", "Kid Mime [PV]",
"Mercury [PV]","Sparrow [PV]","Prince Ali","Lê Chiến Kim", "Lian", "Luka Couffaine", "Marc Anciel", "Max Kanté", "Maxkov [Reverse]", "Nathaniel Kurtzberg", "Nino Lahiffe", "Théo Barbot","Wayhem",];
var adultF = ["Agent Blue", "Agent Red", "Agent Yellow","Amelie Graham de Vanily", "Anarka Couffaine", "René d'Herblay Aramis de Vannes", "Bo rùa",
	"Anne-Jeanne Théoxanne du Bocquale", "Audrey Bourgeois","Barbara Keynes [Knightowl]", "Caline Bustier", "Camilla Hombee", "Clara Contard", "Clara Nightingale",
	"Claudie Kanté","Emilie Agreste","Gina Dupain", "Gisèle","Hippolyta","Hurricane","Ignoblia","Jeanne d'Arc", "La Mariquita", "Lila's Diplomat Mother", "Lila's Fashion Mother", "Lila's Deaf Mother",
	"Marianne Lenoir","Marlena Césaire", "Mei Cheng", "Mudekudeku", "Nadja Chamack", "Nathalie Sancoeur", "Nora Césaire", "Odille","Olga Mendeleiev", "Olympia Hill [Majestia]", "Penny Rolling",
	"Sabine Cheng", "Sarah", "Shu Yin Cheng","Snowflake", "Tentomushi", "Tomoe Tsurugi","Véronique", ];
var adultM = ["Alec Cataldi", "Alim Kubdel","Anaximandré (André) Bourgeois","André the Glacier", "Armand [Jean the Butler]", "Armand D'Argencourt", 
"Bertrand King", "Bob Roth", "Cash","Colt Fathom", "Dark Grimalkin", "Dean Gate [Doorman]","Denis Damocles", "Didier Roustan", "Fred Haprèle", "Wang Fu", "Gabriel Agreste", 
"Gabriel Agreste [Reverse]","Harry Clown","Herakles","Hot Dog Dan", "Jagged Stone", "Jean-Pierre Monlataing", "Mercury","Kouki","Micazoyolin", "Mike Rochip (Technopirate)", 
"Mr. Banana", "Otis Césaire", "Philippe", "Placide I.T. [Gorilla]", "Roger Raincomprix", "Rolland Dupain", "Santa Claus", "Simon Grimault", "Su-Han", "Supreme", "Sting", "Thomas Astruc", "Thorn", 
"Tom Dupain", "Vincent [Adrien's photographer]","Vincent Aza", "Wang Cheng", "Wu Shifu", "Xavier Ramier"];
var robotF = ["A.D.A", "Aeon"];
var robotM = ["Albert", "Markov"];

var user = [];

window.onload = function() {
	render(get_filtered_cast(), document.getElementById("system"));
	var checkboxes = document.querySelectorAll(".filterCast");
	checkboxes.forEach(function (checkbox) {
		checkbox.addEventListener('change', function() {
			render(get_filtered_cast(), document.getElementById("system"));
		});
	});
}

function render(data, docList) {
	docList.innerHTML = "";
	for (i = 0; i < data.length; ++i) {
		let option = document.createElement('option');
		option.innerText = data[i];
		option.value=i+1;
		docList.appendChild(option);
	}
}

function get_filtered_cast() {
	// oh this is ugly
	let cast=[];
	if (document.getElementById("pickF").checked && document.getElementById("pickT").checked) {
		cast.push.apply(cast, teenF);
	}
	if (document.getElementById("pickF").checked && document.getElementById("pickA").checked) {
		cast.push.apply(cast, adultF);
	}
	if (document.getElementById("pickM").checked && document.getElementById("pickT").checked) {
		cast.push.apply(cast, teenM);
	}
	if (document.getElementById("pickM").checked && document.getElementById("pickA").checked) {
		cast.push.apply(cast, adultM);
	}
	if (document.getElementById("pickM").checked && document.getElementById("pickR").checked) {
		cast.push.apply(cast, robotM);
	}
	if (document.getElementById("pickF").checked && document.getElementById("pickR").checked) {
		cast.push.apply(cast, robotF);
	}
	cast.sort();
	return cast;
}

function filter() {
	let filterCast = get_filtered_cast();
	render(filterCast, document.getElementById("system"))
}

function namepool() {
	let name = document.getElementById("name").value;
	if (user.includes(name)) {
		alert("'" + name + "' is already in your list")
	} else {
		user.push(name);
		render(user, document.getElementById("user"));
	}
	document.getElementById("name").value = "";
}

function drainPool() {
	user = [];
	render(user, document.getElementById("user"));
}

function get_random(list) {
	return list[Math.floor((Math.random()*list.length))];
}

function shipIt() {
	let shipyard = document.forms.shipyard;
	let checked = shipyard.querySelector('input[name=pick]:checked');
	let poly = shipyard.querySelector('input[name=poly]:checked');
	let charList = (checked.value === "pickCast") ? get_filtered_cast() : user;
	if (charList.length < 2) {
		alert("You must have at least two characters to create a ship.")
	} else {
		let shipE = document.createElement('li');
		let partner = Array(get_random(charList));
		let spouse = "";
		let polyChance = poly ? 0.3 : 0;
		do {
			do {
				spouse = get_random(charList);
			} while (partner.includes(spouse));
			partner.push(spouse);
		} while (Math.random() < polyChance);
		let ship = "";
		for (i = 0; i < partner.length; ++i) {
			if (ship !== "") {
				ship += " x ";
			}
			ship += partner[i];
		}
		shipE.innerText = ship;
		document.getElementById("shipped").appendChild(shipE);
	}
}

function torpedo() {
	document.getElementById("shipped").innerHTML = "";
}
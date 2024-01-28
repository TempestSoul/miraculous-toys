// why yes this should be a database. hush.
var chars = Array("A.D.A", 
	"Adrien Agreste", "Adrien Agreste [Reverse]", 
	"Aeon",
	"Agent Blue", "Agent Red", "Agent Yellow",
	"Albert",
	"Alec Cataldi",
	"Prince Ali",
	"Alim Kubdel", "Alix Kubdel", "Jalil Kubdel",
	"Alya Césaire", "Alya Césaire",
	"Amelie Graham de Vanily", "Anarka Couffaine", "Anaximandré (André) Bourgeois",
	"André the Glacier", 
	"René d'Herblay Aramis de Vannes", "La Coccinelle", "Bo rùa",
	"Anne-Jeanne Théoxanne du Bocquale", 
	"Armand [Jean the Butler]", "Despairbear", "Armand D'Argencourt", "Darkblade",
	"Audrey Bourgeois", "Style Queen", "Aurore Beauréal",
	"Barbara Keynes [Knightowl]",
	"Bertrand King", "Bob Roth", "Caline Bustier", "Camilla Hombee", "Cash",
	"Chloé Bourgeois", "Clara Contard", "Clara Nightingale",
	"Claudie Kanté", "Colt Fathom", "Dark Grimalkin", "Dean Gate [Doorman]",
	"Delmar [NY Special]", "Denis Damocles", "Didier Roustan", "Emilie Agreste",
	"Fei Wu", "Fred Haprèle", "Wang Fu", "Gabriel Agreste", "Gabriel Agreste [Reverse]",
	"Gina Dupain", "Gisèle", "Harry Clown", "Herakles", "Hippolyta",
	"Hot Dog Dan", "Hurricane", "Ignoblia", "Ivan Bruel", "Jagged Stone", 
	"Jean-Pierre Monlataing", "Jeanne d'Arc", 
	"Félix Fathom", "Félix Agreste [PV]", "Jessica Keynes", "Jiao",
	"Juleka Couffaine", "Kagami Tsurugi", "Kang", "Kid Mime [PV]", "Melodie [PV]", "Mercury [PV]", "Sparrow [PV]",
	"Kouki", "Lê Chiến Kim", "La Mariquita", "Lian", 
	"Lila Rossi", "Mrs. Rossi", "Mrs. Bianca [Lila's Mom#2]", "Lila's Mother #3",
	"Luka Couffaine", "Marc Anciel", "Marianne Lenoir",
	"Marinette Dupain-Cheng", "Marinette Dupain-Cheng [Reverse]", "Marinette Dupain-Cheng [PV]",
	"Markov", "Marlena Césaire", "Max Kanté", "Maxkov [Reverse]", "Mei Cheng", "Micazoyolin",
	"Mike Rochip (Technopirate)", "Mireille Caquet", "Mr. Banana", "Mudekudeku", "Mylène Haprèle",
	"Nadja Chamack", "Nathalie Sancoeur", "Nathaniel Kurtzberg", "Nino Lahiffe", "Nora Césaire", "Odille", 
	"Olga Mendeleiev", "Olympia Hill [Majestia]", "Ondine", "Oscar [Movie]", "Otis Césaire", "Penny Rolling",
	"Philippe", "Placide I.T. [Gorilla]", "Roger Raincomprix", "Rolland Dupain", "Rose Lavillant",
	"Sabine Cheng", "Sabrina Raincomprix", "Santa Claus", "Sarah", "Shu Yin Cheng",
	"Simon Grimault", "Snowflake", "Socqueline Wang", "Sting", "Su-Han", "Supreme", "Tentomushi",
	"Thomas Astruc", "Théo Barbot", "Thorn", "Tomoe Tsurugi", "Tom Dupain", "Vincent [Adrien's photographer]",
	"Vincent Aza", "Vivica", "Véronique", "Wang Cheng", "Wayhem", "Wu Shifu", "Xavier Ramier");
var user = [];

window.onload = function() {
	render(chars, document.getElementById("system"));
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

function namepool() {
	let name = document.getElementById("name").value;
	user.push(name);
	render(user, document.getElementById("user"));
}

function get_random(list) {
	return list[Math.floor((Math.random()*list.length))];
}

function shipIt() {
	let shipyard = document.forms.shipyard;
	let checked = shipyard.querySelector('input[name=pick]:checked');
	let charList = (checked.value === "pickCast") ? chars : user;

	let ship = document.createElement('li');
	ship.innerText = get_random(charList) + " x " + get_random(charList);
	document.getElementById("shipped").appendChild(ship);
}

function torpedo() {
	document.getElementById("shipped").innerHTML = "";
}
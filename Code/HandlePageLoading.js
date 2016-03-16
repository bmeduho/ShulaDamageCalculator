for (var key in Pokemon) {
	var mon = document.createElement('option');
	mon.setAttribute("value",key);
	document.getElementById('PSpecies').appendChild(mon);
}
document.getElementById('SaveScreen').style.display = "none";
document.getElementById('PokemonScreen').style.display = "none";
document.getElementById('BattleScreen').style.display = "none";
document.getElementById('SaveTab').addEventListener("click", function() {
	document.getElementById('SaveScreen').style.display = "block";
	document.getElementById('PokemonScreen').style.display = "none";
	document.getElementById('BattleScreen').style.display = "none";
});
document.getElementById('PokemonTab').addEventListener("click", function() {
	document.getElementById('SaveScreen').style.display = "none";
	document.getElementById('PokemonScreen').style.display = "block";
	document.getElementById('BattleScreen').style.display = "none";
});
document.getElementById('BattleTab').addEventListener("click", function() {
	document.getElementById('SaveScreen').style.display = "none";
	document.getElementById('PokemonScreen').style.display = "none";
	document.getElementById('BattleScreen').style.display = "block";
});
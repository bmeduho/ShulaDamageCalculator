function HPStat (Level, Pokemon) {
	var stat = ((Pokemon.BaseStats.HP * 2) * Level / 100) + 10 + Level;
	return stat;
}
function MainStats (Level, Pokemon, Stat) {
	var stat = ((Pokemon.BaseStats.Stat * 2) * Level / 100) + 5;
	return stat;
}
function Damage (Level, Pokemon, Move) {
	switch (Move.Category) {
		"Physical":
			var NeededStats = ["Atk","Def"];
			break;
		"Special":
			var NeededStats = ["SpAtk","SpDef"];
			break;
		"Status":
			var NeededStats = [false];
			break;
	}
	var AtkStat = MainStats(Level,Pokemon,NeededStats[0]);
	var DefStat = MainStats(Level,Pokemon,NeededStats[1]);
	var stepOne = (2 * Level / 5) + 2;
	for (var i = 0; i < Move.BP.length; i++) {
		var stepTwo = ((stepOne * AtkStat * Move.BP[i] / DefStat) / 50) + 2;
	}
	var STAB = 
}



Damage
	((((2 * Level / 5 + 2) * AttackStat * AttackPower / DefenseStat) / 50) + 2) * STAB * Weakness/Resistance * RandomNumber / 100

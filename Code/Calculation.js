function HPStat (Level, Pokemon) {
	var stat = ((Pokemon.BaseStats.HP * 2) * Level / 100) + 10 + Level;
	return stat;
}
function MainStats (Level, Pokemon, Stat) {
	var stat = ((Pokemon.BaseStats.Stat * 2) * Level / 100) + 5;
	return stat;
}
function Damage (Level, Pokemon, Move) {
	var AtkStat = 
	var stepOne = ((2 * Level / 5) + 2);
	var stepTwo = 
}



Damage
	((((2 * Level / 5 + 2) * AttackStat * AttackPower / DefenseStat) / 50) + 2) * STAB * Weakness/Resistance * RandomNumber / 100

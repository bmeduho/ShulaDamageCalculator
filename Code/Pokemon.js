var Pokemon = {
	/*Species: {
		TypeOne: "",
		TypeTwo: "",
		Abilities:  ["","","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		Mega: {
			Possible: false,
			N: {
				TypeOne: "",
				TypeTwo: "",
				Ability: "",
				BaseStats: {
					HP: ,
					Atk: ,
					Def: ,
					SpAtk: ,
					SpDef: ,
					Speed: 
				}
			}
		}
	}*/
	Bulbasaur: {
		TypeOne: "Grass",
		TypeTwo: "Poison",
		Abilities:  ["Overgrow","Chlorophyll"],
		BaseStats: {
			HP: 45,
			Atk: 49,
			Def: 49,
			SpAtk: 65,
			SpDef: 65,
			Speed: 45
		},
		Mega: {
			Possible: false
		}
	},
	Ivysaur: {
		TypeOne: "Grass",
		TypeTwo: "Poison",
		Abilities: ["Overgrow","Chlorophyll"],
		BaseStats: {
			HP: 60,
			Atk: 62,
			Def: 63,
			SpAtk: 80,
			SpDef: 80,
			Speed: 60
		},
		Mega: {
			Possible: false
		}
	},
	Venusaur: {
		TypeOne: "Grass",
		TypeTwo: "Poison",
		Abilities:  ["Overgrow","Chlorophyll"],
		BaseStats: {
			HP: 80,
			Atk: 82,
			Def: 83,
			SpAtk: 100,
			SpDef: 100,
			Speed: 80
		},
		Mega: {
			Possible: true,
			N: {
				TypeOne: "Grass",
				TypeTwo: "Poison",
				Ability: "Thick Fat",
				BaseStats: {
					HP: 80,
					Atk: 100,
					Def: 123,
					SpAtk: 122,
					SpDef: 120,
					Speed: 80
				}
			}
		}
	},
	Charmander: {
		TypeOne: "Fire",
		TypeTwo: false,
		Abilities:  ["Blaze","Solar Power"],
		BaseStats: {
			HP: 39,
			Atk: 52,
			Def: 43,
			SpAtk: 60,
			SpDef: 50,
			Speed: 65
		},
		Mega: {
			Possible: false
		}
	}
	Charmeleon: {
		TypeOne: "Fire",
		TypeTwo: false,
		Abilities:  ["Blaze","Solar Power"],
		BaseStats: {
			HP: 58,
			Atk: 64,
			Def: 58,
			SpAtk: 80,
			SpDef: 65,
			Speed: 80
		},
		Mega: {
			Possible: false
		}
	}
	Charizard: {
		TypeOne: "Fire",
		TypeTwo: "Flying",
		Abilities:  ["Blaze","Solar Power"],
		BaseStats: {
			HP: 78,
			Atk: 84,
			Def: 78,
			SpAtk: 109,
			SpDef: 85,
			Speed: 100
		},
		Mega: {
			Possible: true,
			X: {
				TypeOne: "Fire",
				TypeTwo: "Dragon",
				Ability: "Tough Claws",
				BaseStats: {
					HP: 78,
					Atk: 130,
					Def: 111,
					SpAtk: 130,
					SpDef: 85,
					Speed: 100
				}
			}
			Y: {
				TypeOne: "Fire",
				TypeTwo: "Flying",
				Ability: "Drought",
				BaseStats: {
					HP: 78,
					Atk: 104,
					Def: 78,
					SpAtk: 159,
					SpDef: 115,
					Speed: 100
				}
			}
		}
	}
};

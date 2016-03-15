var Pokemon = {
	/*Species: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false,
			Mega: {
				N: {
					Type: ["",""],
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
		}
	},
	*/
	Bulbasaur: {
		Type: ["Grass","Poison"],
		Abilities:  ["Overgrow","Chlorophyll"],
		BaseStats: {
			HP: 45,
			Atk: 49,
			Def: 49,
			SpAtk: 65,
			SpDef: 65,
			Speed: 45
		},
		FormeChange: {
			Possible: false
		}
	},
	Ivysaur: {
		Type: ["Grass","Poison"],
		Abilities: ["Overgrow","Chlorophyll"],
		BaseStats: {
			HP: 60,
			Atk: 62,
			Def: 63,
			SpAtk: 80,
			SpDef: 80,
			Speed: 60
		},
		FormeChange: {
			Possible: false
		}
	},
	Venusaur: {
		Type: ["Grass","Poison"],
		Abilities:  ["Overgrow","Chlorophyll"],
		BaseStats: {
			HP: 80,
			Atk: 82,
			Def: 83,
			SpAtk: 100,
			SpDef: 100,
			Speed: 80
		},
		FormeChange: {
			Possible: true,
			Mega: {
				N: {
					Type: ["Grass","Poison"],
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
		}
	},
	Charmander: {
		Type: ["Fire"],
		Abilities:  ["Blaze","Solar Power"],
		BaseStats: {
			HP: 39,
			Atk: 52,
			Def: 43,
			SpAtk: 60,
			SpDef: 50,
			Speed: 65
		},
		FormeChange: {
			Possible: false
		}
	},
	Charmeleon: {
		Type: ["Fire"],
		Abilities:  ["Blaze","Solar Power"],
		BaseStats: {
			HP: 58,
			Atk: 64,
			Def: 58,
			SpAtk: 80,
			SpDef: 65,
			Speed: 80
		},
		FormeChange: {
			Possible: false
		}
	},
	Charizard: {
		Type: ["Fire","Flying"],
		Abilities:  ["Blaze","Solar Power"],
		BaseStats: {
			HP: 78,
			Atk: 84,
			Def: 78,
			SpAtk: 109,
			SpDef: 85,
			Speed: 100
		},
		FormeChange: {
			Possible: true,
			Mega: {
				X: {
					Type: ["Fire","Dragon"],
					Ability: "Tough Claws",
					BaseStats: {
						HP: 78,
						Atk: 130,
						Def: 111,
						SpAtk: 130,
						SpDef: 85,
						Speed: 100
					}
				},
				Y: {
					Type: ["Fire","Flying"],
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
	},
	Squirtle: {
		Type: ["Water"],
		Abilities:  ["Forrent","Rain Dish"],
		BaseStats: {
			HP: 44,
			Atk: 48,
			Def: 65,
			SpAtk: 50,
			SpDef: 64,
			Speed: 43
		},
		FormeChange: {
			Possible: false
		}
	},
	Wartortle: {
		Type: ["Water"],
		Abilities:  ["Forrent","Rain Dish"],
		BaseStats: {
			HP: 59,
			Atk: 63,
			Def: 80,
			SpAtk: 65,
			SpDef: 80,
			Speed: 58
		},
		FormeChange: {
			Possible: false
		}
	},
	Blastoise: {
		Type: ["Water"],
		Abilities:  ["Forrent","Rain Dish"],
		BaseStats: {
			HP: 79,
			Atk: 83,
			Def: 100,
			SpAtk: 85,
			SpDef: 105,
			Speed: 78
		},
		FormeChange: {
			Possible: true,
			Mega: {
				N: {
					Type: ["Water"],
					Ability: "Mega Launcher",
					BaseStats: {
						HP: 79,
						Atk: 103,
						Def: 120,
						SpAtk: 135,
						SpDef: 115,
						Speed: 78
					}
				}
			}
		}
	},
	Caterpie: {
		Type: ["Bug"],
		Abilities:  ["Shield Dust","Run Away"],
		BaseStats: {
			HP: 45,
			Atk: 30,
			Def: 35,
			SpAtk: 20,
			SpDef: 20,
			Speed: 45
		},
		FormeChange: {
			Possible: false
		}
	},
	Metapod: {
		Type: ["Bug"],
		Abilities:  ["Shed Skin"],
		BaseStats: {
			HP: 50,
			Atk: 20,
			Def: 55,
			SpAtk: 25,
			SpDef: 25,
			Speed: 30
		},
		FormeChange: {
			Possible: false
		}
	},
	Butterfree: {
		Type: ["Bug","Flying"],
		Abilities:  ["Compound Eyes","Tinted Lens"],
		BaseStats: {
			HP: 60,
			Atk: 45,
			Def: 50,
			SpAtk: 90,
			SpDef: 80,
			Speed: 70
		},
		FormeChange: {
			Possible: false
		}
	},
	Weedle: {
		Type: ["Bug","Poison"],
		Abilities:  ["Sheild Dust","Run Away"],
		BaseStats: {
			HP: 40,
			Atk: 35,
			Def: 30,
			SpAtk: 20,
			SpDef: 20,
			Speed: 50
		},
		FormeChange: {
			Possible: false
		}
	},
	Kakuna: {
		Type: ["Bug","Poison"],
		Abilities:  ["Shed Skin"],
		BaseStats: {
			HP: 45,
			Atk: 25,
			Def: 50,
			SpAtk: 25,
			SpDef: 25,
			Speed: 35
		},
		FormeChange: {
			Possible: false
		}
	},
	Beedrill: {
		Type: ["Bug","Poison"],
		Abilities:  ["Swarm","Sniper"],
		BaseStats: {
			HP: 65,
			Atk: 90,
			Def: 40,
			SpAtk: 45,
			SpDef: 80,
			Speed: 75
		},
		FormeChange: {
			Possible: true,
			Mega: {
				N: {
					Type: ["Bug","Poison"],
					Ability: "Adaptability",
					BaseStats: {
						HP: 65,
						Atk: 150,
						Def: 40,
						SpAtk: 15,
						SpDef: 80,
						Speed: 145
					}
				}
			}
		}
	},
	Pidgey: {
		Type: ["Normal","Flying"],
		Abilities:  ["Keen Eye","Tangled Feet","Big Pecks"],
		BaseStats: {
			HP: 40,
			Atk: 45,
			Def: 40,
			SpAtk: 35,
			SpDef: 35,
			Speed: 56
		},
		FormeChange: {
			Possible: false
		}
	},
	Pidgeotto: {
		Type: ["Normal","Flying"],
		Abilities:  ["Keen Eye","Tangled Feet","Big Pecks"],
		BaseStats: {
			HP: 63,
			Atk: 60,
			Def: 55,
			SpAtk: 50,
			SpDef: 50,
			Speed: 71
		},
		FormeChange: {
			Possible: false
		}
	},
	Pidgeot: {
		Type: ["Normal","Flying"],
		Abilities:  ["Keen Eye","Tangled Feet","Big Pecks"],
		BaseStats: {
			HP: 83,
			Atk: 80,
			Def: 75,
			SpAtk: 70,
			SpDef: 70,
			Speed: 101
		},
		FormeChange: {
			Possible: true,
			Mega: {
				N: {
					Type: ["Normal","Flying"],
					Ability: "No Guard",
					BaseStats: {
						HP: 83,
						Atk: 80,
						Def: 80,
						SpAtk: 135,
						SpDef: 80,
						Speed: 121
					}
				}
			}
		}
	},
	Rattata: {
		Type: ["Normal"],
		Abilities:  ["Guts","Run Away","Hustle"],
		BaseStats: {
			HP: 30,
			Atk: 56,
			Def: 35,
			SpAtk: 25,
			SpDef: 35,
			Speed: 72
		},
		FormeChange: {
			Possible: false
		}
	},
	Raticate: {
		Type: ["Normal"],
		Abilities:  ["Guts","Run Away","Hustle"],
		BaseStats: {
			HP: 55,
			Atk: 81,
			Def: 60,
			SpAtk: 50,
			SpDef: 70,
			Speed: 97
		},
		FormeChange: {
			Possible: false
		}
	},
	Spearow: {
		Type: ["Normal","Flying"],
		Abilities:  ["Keen Eye","Sniper"],
		BaseStats: {
			HP: 40,
			Atk: 60,
			Def: 30,
			SpAtk: 31,
			SpDef: 31,
			Speed: 70
		},
		FormeChange: {
			Possible: false
		}
	},
	Fearow: {
		Type: ["Normal","Flying"],
		Abilities:  ["Keen Eye","Sniper"],
		BaseStats: {
			HP: 65,
			Atk: 90,
			Def: 65,
			SpAtk: 61,
			SpDef: 61,
			Speed: 100
		},
		FormeChange: {
			Possible: false
		}
	},
	Ekans: {
		Type: ["Poison"],
		Abilities:  ["Intimidate","Shed Skin","Unnerve"],
		BaseStats: {
			HP: 35,
			Atk: 60,
			Def: 44,
			SpAtk: 40,
			SpDef: 54,
			Speed: 55
		},
		FormeChange: {
			Possible: false
		}
	},
	Arbok: {
		Type: ["Poison"],
		Abilities:  ["Intimidate","Shed Skin","Unnerve"],
		BaseStats: {
			HP: 60,
			Atk: 85,
			Def: 69,
			SpAtk: 65,
			SpDef: 79,
			Speed: 80
		},
		FormeChange: {
			Possible: false
		}
	},
	Pikachu: {
		Type: ["Electric"],
		Abilities:  ["Static","Lightning Rod"],
		BaseStats: {
			HP: 35,
			Atk: 55,
			Def: 40,
			SpAtk: 50,
			SpDef: 50,
			Speed: 90
		},
		FormeChange: {
			Possible: false
		}
	},
	Raichu: {
		Type: ["Electric"],
		Abilities:  ["Static","Lightning Rod"],
		BaseStats: {
			HP: 60,
			Atk: 90,
			Def: 55,
			SpAtk: 90,
			SpDef: 80,
			Speed: 110
		},
		FormeChange: {
			Possible: false
		}
	},
	Sandshrew: {
		Type: ["Ground"],
		Abilities:  ["Sand Veil","Sand Rush"],
		BaseStats: {
			HP: 50,
			Atk: 75,
			Def: 85,
			SpAtk: 20,
			SpDef: 30,
			Speed: 40
		},
		FormeChange: {
			Possible: false
		}
	},
	Sandslash: {
		Type: ["Ground"],
		Abilities:  ["Sand Veil","Sand Rush"],
		BaseStats: {
			HP: 75,
			Atk: 100,
			Def: 110,
			SpAtk: 45,
			SpDef: 55,
			Speed: 65
		},
		FormeChange: {
			Possible: false
		}
	},
	NidoranF: {
		Type: ["Poison"],
		Abilities:  ["Poison Point","Rivalry","Hustle"],
		BaseStats: {
			HP: 55,
			Atk: 47,
			Def: 52,
			SpAtk: 40,
			SpDef: 40,
			Speed: 41
		},
		FormeChange: {
			Possible: false
		}
	},
	Nidorina: {
		Type: ["Poison"],
		Abilities:  ["Poison Point","Rivalry","Hustle"],
		BaseStats: {
			HP: 70,
			Atk: 62,
			Def: 67,
			SpAtk: 55,
			SpDef: 55,
			Speed: 56
		},
		FormeChange: {
			Possible: false
		}
	},
	Nidoqueen: {
		Type: ["Poison","Ground"],
		Abilities:  ["Poison Point","Rivalry","Sheer Force"],
		BaseStats: {
			HP: 90,
			Atk: 92,
			Def: 87,
			SpAtk: 75,
			SpDef: 85,
			Speed: 76
		},
		FormeChange: {
			Possible: false
		}
	},
	NidoranM: {
		Type: ["Poison"],
		Abilities:  ["Poison Point","Rivalry","Hustle"],
		BaseStats: {
			HP: 46,
			Atk: 57,
			Def: 40,
			SpAtk: 40,
			SpDef: 40,
			Speed: 50
		},
		FormeChange: {
			Possible: false
		}
	},
	Nidorino: {
		Type: ["Poison"],
		Abilities:  ["Poison Point","Rivalry","Hustle"],
		BaseStats: {
			HP: 61,
			Atk: 72,
			Def: 57,
			SpAtk: 55,
			SpDef: 55,
			Speed: 65
		},
		FormeChange: {
			Possible: false
		}
	},
	Nidoking: {
		Type: ["Poison","Ground"],
		Abilities:  ["Poison Point","Rivalry","Sheer Force"],
		BaseStats: {
			HP: 81,
			Atk: 102,
			Def: 77,
			SpAtk: 85,
			SpDef: 75,
			Speed: 85
		},
		FormeChange: {
			Possible: false
		}
	},
	Clefairy: {
		Type: ["Fairy"],
		Abilities:  ["Cute Charm","Magic Guard","Friend Guard"],
		BaseStats: {
			HP: 70,
			Atk: 45,
			Def: 48,
			SpAtk: 60,
			SpDef: 65,
			Speed: 35
		},
		FormeChange: {
			Possible: false
		}
	},
	Clefable: {
		Type: ["Fairy"],
		Abilities:  ["Cute Charm","Magic Guard","Unaware"],
		BaseStats: {
			HP: 95,
			Atk: 70,
			Def: 73,
			SpAtk: 95,
			SpDef: 90,
			Speed: 60
		},
		FormeChange: {
			Possible: false
		}
	},
	Vulpix: {
		Type: ["Fire"],
		Abilities:  ["Flash Fire","Drought","",""],
		BaseStats: {
			HP: 38,
			Atk: 41,
			Def: 40,
			SpAtk: 50,
			SpDef: 65,
			Speed: 65
		},
		FormeChange: {
			Possible: false
		}
	},
	Ninetales: {
		Type: ["Fire"],
		Abilities:  ["Flash Fire","Drought","",""],
		BaseStats: {
			HP: 73,
			Atk: 76,
			Def: 75,
			SpAtk: 81,
			SpDef: 100,
			Speed: 100
		},
		FormeChange: {
			Possible: false
		}
	},
	Jigglypuff: {
		Type: ["Normal","Fairy"],
		Abilities:  ["Competitive","Cute Charm","Friend Guard"],
		BaseStats: {
			HP: 115,
			Atk: 45,
			Def: 20,
			SpAtk: 45,
			SpDef: 25,
			Speed: 20
		},
		FormeChange: {
			Possible: false
		}
	},
	Wigglytuff: {
		Type: ["Normal","Fairy"],
		Abilities:  ["Competitive","Cute Charm","Frisk"],
		BaseStats: {
			HP: 40,
			Atk: 70,
			Def: 45,
			SpAtk: 85,
			SpDef: 50,
			Speed: 45
		},
		FormeChange: {
			Possible: false
		}
	},
	Zubat: {
		Type: ["Poison","Flying"],
		Abilities:  ["Inner Focus","Infiltrator"],
		BaseStats: {
			HP: 40,
			Atk: 45,
			Def: 35,
			SpAtk: 30,
			SpDef: 40,
			Speed: 55
		},
		FormeChange: {
			Possible: false
		}
	},
	Golbat: {
		Type: ["Poison","Flying"],
		Abilities:  ["Inner Focus","Infiltrator"],
		BaseStats: {
			HP: 75,
			Atk: 80,
			Def: 70,
			SpAtk: 65,
			SpDef: 75,
			Speed: 90
		},
		FormeChange: {
			Possible: false
		}
	},
	Oddish: {
		Type: ["Grass","Poison"],
		Abilities:  ["Chlorophyll","Run Away"],
		BaseStats: {
			HP: 45,
			Atk: 50,
			Def: 55,
			SpAtk: 75,
			SpDef: 65,
			Speed: 30
		},
		FormeChange: {
			Possible: false
		}
	},
	Gloom: {
		Type: ["Grass","Poison"],
		Abilities:  ["Chlorophyll","Stench"],
		BaseStats: {
			HP: 60,
			Atk: 65,
			Def: 70,
			SpAtk: 85,
			SpDef: 75,
			Speed: 40
		},
		FormeChange: {
			Possible: false
		}
	},
	Vileplume: {
		Type: ["Grass","Poison"],
		Abilities:  ["Chlorophyll","Effect Spore"],
		BaseStats: {
			HP: 75,
			Atk: 80,
			Def: 85,
			SpAtk: 110,
			SpDef: 90,
			Speed: 50
		},
		FormeChange: {
			Possible: false
		}
	},
	Paras: {
		Type: ["Bug","Grass"],
		Abilities:  ["Dry Skin","Effect Spore","Damp"],
		BaseStats: {
			HP: 35,
			Atk: 70,
			Def: 55,
			SpAtk: 45,
			SpDef: 55,
			Speed: 25
		},
		FormeChange: {
			Possible: false
		}
	},
	Parasect: {
		Type: ["Bug","Grass"],
		Abilities:  ["Dry Skin","Effect Spore","Damp"],
		BaseStats: {
			HP: 60,
			Atk: 95,
			Def: 80,
			SpAtk: 60,
			SpDef: 80,
			Speed: 30
		},
		FormeChange: {
			Possible: false
		}
	},
	Venonat: {
		Type: ["Bug","Poison"],
		Abilities:  ["Compound Eyes","Tinted Lens","Run Away"],
		BaseStats: {
			HP: 60,
			Atk: 55,
			Def: 50,
			SpAtk: 40,
			SpDef: 55,
			Speed: 45
		},
		FormeChange: {
			Possible: false
		}
	},
	Venomoth: {
		Type: ["Bug","Poison"],
		Abilities:  ["Shield Dust","Tinted Lens","Wonder Skin"],
		BaseStats: {
			HP: 70,
			Atk: 65,
			Def: 60,
			SpAtk: 90,
			SpDef: 75,
			Speed: 90
		},
		FormeChange: {
			Possible: false
		}
	},
	Diglett: {
		Type: ["Ground"],
		Abilities:  ["Arena Trap","Sand Veil","Sand Force"],
		BaseStats: {
			HP: 10,
			Atk: 55,
			Def: 25,
			SpAtk: 35,
			SpDef: 45,
			Speed: 95
		},
		FormeChange: {
			Possible: false
		}
	},
	Dugtrio: {
		Type: ["Ground"],
		Abilities:  ["Arena Trap","Sand Veil","Sand Force"],
		BaseStats: {
			HP: 35,
			Atk: 80,
			Def: 50,
			SpAtk: 50,
			SpDef: 70,
			Speed: 120
		},
		FormeChange: {
			Possible: false
		}
	},
	Meowth: {
		Type: ["Normal"],
		Abilities:  ["Pickup","Technician","Unnerve"],
		BaseStats: {
			HP: 40,
			Atk: 45,
			Def: 35,
			SpAtk: 40,
			SpDef: 40,
			Speed: 90
		},
		FormeChange: {
			Possible: false
		}
	},
	Persian: {
		Type: ["Normal"],
		Abilities:  ["Limber","Technician","Unnerve"],
		BaseStats: {
			HP: 65,
			Atk: 70,
			Def: 60,
			SpAtk: 65,
			SpDef: 65,
			Speed: 115
		},
		FormeChange: {
			Possible: false
		}
	},
	Psyduck: {
		Type: ["Water"],
		Abilities:  ["Cloud Nine","Damp","Swift Swim"],
		BaseStats: {
			HP: 50,
			Atk: 52,
			Def: 48,
			SpAtk: 65,
			SpDef: 50,
			Speed: 55
		},
		FormeChange: {
			Possible: false
		}
	},
	Golduck: {
		Type: ["Water"],
		Abilities:  ["Cloud Nine","Damp","Swift Swim"],
		BaseStats: {
			HP: 80,
			Atk: 82,
			Def: 78,
			SpAtk: 95,
			SpDef: 80,
			Speed: 85
		},
		FormeChange: {
			Possible: false
		}
	},
	Mankey: {
		Type: ["Fighting"],
		Abilities:  ["Anger Point","Vital Spirit","Defiant"],
		BaseStats: {
			HP: 40,
			Atk: 80,
			Def: 35,
			SpAtk: 35,
			SpDef: 45,
			Speed: 70
		},
		FormeChange: {
			Possible: false
		}
	},
	Primeape: {
		Type: ["Fighting"],
		Abilities:  ["Anger Point","Vital Spirit","Defiant"],
		BaseStats: {
			HP: 65,
			Atk: 105,
			Def: 60,
			SpAtk: 60,
			SpDef: 70,
			Speed: 95
		},
		FormeChange: {
			Possible: false
		}
	},
	Growlithe: {
		Type: ["Fire"],
		Abilities:  ["Flash Fire","Intimidate","Justified"],
		BaseStats: {
			HP: 55,
			Atk: 70,
			Def: 45,
			SpAtk: 70,
			SpDef: 50,
			Speed: 60
		},
		FormeChange: {
			Possible: false
		}
	},
	Arcanine: {
		Type: ["Fire"],
		Abilities:  ["Flash Fire","Intimidate","Justified"],
		BaseStats: {
			HP: 90,
			Atk: 110,
			Def: 80,
			SpAtk: 100,
			SpDef: 80,
			Speed: 95
		},
		FormeChange: {
			Possible: false
		}
	},
	Poliwag: {
		Type: ["Water"],
		Abilities:  ["Damp","Water Absorb","Swift Swim"],
		BaseStats: {
			HP: 40,
			Atk: 50,
			Def: 40,
			SpAtk: 40,
			SpDef: 40,
			Speed: 90
		},
		FormeChange: {
			Possible: false
		}
	},
	Poliwhirl: {
		Type: ["Water"],
		Abilities:  ["Damp","Water Absorb","Swift Swim"],
		BaseStats: {
			HP: 65,
			Atk: 65,
			Def: 65,
			SpAtk: 50,
			SpDef: 50,
			Speed: 90
		},
		FormeChange: {
			Possible: false
		}
	},
	Poliwrath: {
		Type: ["Water","Fighting"],
		Abilities:  ["Damp","Water Absorb","Swift Swim"],
		BaseStats: {
			HP: 90,
			Atk: 95,
			Def: 95,
			SpAtk: 70,
			SpDef: 90,
			Speed: 70
		},
		FormeChange: {
			Possible: false
		}
	},
	Abra: {
		Type: ["Psychic"],
		Abilities:  ["Inner Focus","Synchronize","Magic Guard"],
		BaseStats: {
			HP: 25,
			Atk: 20,
			Def: 15,
			SpAtk: 105,
			SpDef: 55,
			Speed: 90
		},
		FormeChange: {
			Possible: false
		}
	},
	Kadabra: {
		Type: ["Psychic"],
		Abilities:  ["Inner Focus","Synchronize","Magic Guard"],
		BaseStats: {
			HP: 40,
			Atk: 35,
			Def: 30,
			SpAtk: 120,
			SpDef: 70,
			Speed: 105
		},
		FormeChange: {
			Possible: false
		}
	},
	Alakazam: {
		Type: ["Psychic"],
		Abilities:  ["Inner Focus","Synchronize","Magic Guard"],
		BaseStats: {
			HP: 55,
			Atk: 50,
			Def: 45,
			SpAtk: 135,
			SpDef: 95,
			Speed: 120
		},
		FormeChange: {
			Possible: true,
			Mega: {
				N: {
					Type: ["Psychic"],
					Ability: "Trace",
					BaseStats: {
						HP: 55,
						Atk: 50,
						Def: 65,
						SpAtk: 175,
						SpDef: 95,
						Speed: 150
					}
				}
			}
		}
	},
	Machop: {
		Type: ["Fighting"],
		Abilities:  ["Guts","No Guard","Steadfast"],
		BaseStats: {
			HP: 70,
			Atk: 80,
			Def: 50,
			SpAtk: 35,
			SpDef: 35,
			Speed: 35
		},
		FormeChange: {
			Possible: false
		}
	},
	Machoke: {
		Type: ["Fighting"],
		Abilities:  ["Guts","No Guard","Steadfast"],
		BaseStats: {
			HP: 80,
			Atk: 100,
			Def: 70,
			SpAtk: 50,
			SpDef: 60,
			Speed: 45
		},
		FormeChange: {
			Possible: false
		}
	},
	Machamp: {
		Type: ["Fighting"],
		Abilities:  ["Guts","No Guard","Steadfast"],
		BaseStats: {
			HP: 90,
			Atk: 130,
			Def: 80,
			SpAtk: 65,
			SpDef: 85,
			Speed: 55
		},
		FormeChange: {
			Possible: false
		}
	},
	Bellsprout: {
		Type: ["Grass","Poison"],
		Abilities:  ["Chlorophyll","Gluttony"],
		BaseStats: {
			HP: 50,
			Atk: 75,
			Def: 35,
			SpAtk: 70,
			SpDef: 30,
			Speed: 40
		},
		FormeChange: {
			Possible: false
		}
	},
	Weepinbell: {
		Type: ["Grass","Poison"],
		Abilities:  ["Chlorophyll","Gluttony"],
		BaseStats: {
			HP: 65,
			Atk: 90,
			Def: 50,
			SpAtk: 85,
			SpDef: 45,
			Speed: 55
		},
		FormeChange: {
			Possible: false
		}
	},
	Victreebel: {
		Type: ["Grass","Poison"],
		Abilities:  ["Chlorophyll","Gluttony"],
		BaseStats: {
			HP: 80,
			Atk: 105,
			Def: 65,
			SpAtk: 100,
			SpDef: 70,
			Speed: 70
		},
		FormeChange: {
			Possible: false
		}
	},
	Tentacool: {
		Type: ["Water","Poison"],
		Abilities:  ["Clear Body","Liquid Ooze","Rain Dish"],
		BaseStats: {
			HP: 40,
			Atk: 40,
			Def: 35,
			SpAtk: 50,
			SpDef: 100,
			Speed: 70
		},
		FormeChange: {
			Possible: false
		}
	},
	Tentacruel: {
		Type: ["Water","Poison"],
		Abilities:  ["Clear Body","Liquid Ooze","Rain Dish"],
		BaseStats: {
			HP: 80,
			Atk: 70,
			Def: 65,
			SpAtk: 80,
			SpDef: 120,
			Speed: 100
		},
		FormeChange: {
			Possible: false
		}
	},
	Geodude: {
		Type: ["Rock","Ground"],
		Abilities:  ["Rock Head","Sturdy","Sand Veil"],
		BaseStats: {
			HP: 40,
			Atk: 80,
			Def: 100,
			SpAtk: 30,
			SpDef: 30,
			Speed: 20
		},
		FormeChange: {
			Possible: false
		}
	},
	Graveler: {
		Type: ["Rock","Ground"],
		Abilities:  ["Rock Head","Sturdy","Sand Veil"],
		BaseStats: {
			HP: 55,
			Atk: 95,
			Def: 115,
			SpAtk: 45,
			SpDef: 45,
			Speed: 35
		},
		FormeChange: {
			Possible: false
		}
	},
	Golem: {
		Type: ["Rock","Ground"],
		Abilities:  ["Rock Head","Sturdy","Sand Veil"],
		BaseStats: {
			HP: 80,
			Atk: 120,
			Def: 130,
			SpAtk: 55,
			SpDef: 65,
			Speed: 45
		},
		FormeChange: {
			Possible: false
		}
	},
	Ponyta: {
		Type: ["Fire"],
		Abilities:  ["Flash Fire","Run Away","Flame Body"],
		BaseStats: {
			HP: 50,
			Atk: 85,
			Def: 55,
			SpAtk: 65,
			SpDef: 65,
			Speed: 90
		},
		FormeChange: {
			Possible: false
		}
	},
	Rapidash: {
		Type: ["Fire"],
		Abilities:  ["Flash Fire","Run Away","Flame Body"],
		BaseStats: {
			HP: 65,
			Atk: 100,
			Def: 70,
			SpAtk: 80,
			SpDef: 80,
			Speed: 105
		},
		FormeChange: {
			Possible: false
		}
	},
	Slowpoke: {
		Type: ["Water","Psychic"],
		Abilities:  ["Oblivious","Own Tempo","Regenerator"],
		BaseStats: {
			HP: 90,
			Atk: 65,
			Def: 65,
			SpAtk: 40,
			SpDef: 40,
			Speed: 15
		},
		FormeChange: {
			Possible: false
		}
	},
	Slowbro: {
		Type: ["Water","Psychic"],
		Abilities:  ["","",""],
		BaseStats: {
			HP: 95,
			Atk: 75,
			Def: 110,
			SpAtk: 100,
			SpDef: 80,
			Speed: 30
		},
		FormeChange: {
			Possible: true,
			Mega: {
				N: {
					Type: ["Water","Psychic"],
					Ability: "Shell Armor",
					BaseStats: {
						HP: 95,
						Atk: 75,
						Def: 180,
						SpAtk: 130,
						SpDef: 80,
						Speed: 30
					}
				}
			}
		}
	},
	Magnemite: {
		Type: ["Electric","Steel"],
		Abilities:  ["Magnet Pull","Sturdy","Analytic"],
		BaseStats: {
			HP: 25,
			Atk: 35,
			Def: 70,
			SpAtk: 95,
			SpDef: 55,
			Speed: 45
		},
		FormeChange: {
			Possible: false
		}
	},
	Magneton: {
		Type: ["Electric","Steel"],
		Abilities:  ["Magnet Pull","Sturdy","Analytic"],
		BaseStats: {
			HP: 50,
			Atk: 60,
			Def: 95,
			SpAtk: 120,
			SpDef: 70,
			Speed: 70
		},
		FormeChange: {
			Possible: false
		}
	},
	Farfetchd: {
		Type: ["Normal","Flying"],
		Abilities:  ["Inner Focus","Keen Eye","Defiant"],
		BaseStats: {
			HP: 52,
			Atk: 65,
			Def: 55,
			SpAtk: 58,
			SpDef: 62,
			Speed: 60
		},
		FormeChange: {
			Possible: false
		}
	},
	Doduo: {
		Type: ["Normal","Flying"],
		Abilities:  ["Early Bird","Run Away","Tangled Feet"],
		BaseStats: {
			HP: 35,
			Atk: 85,
			Def: 45,
			SpAtk: 35,
			SpDef: 35,
			Speed: 75
		},
		FormeChange: {
			Possible: false
		}
	},
	Dodrio: {
		Type: ["Normal","Flying"],
		Abilities:  ["Early Bird","Run Away","Tangled Feet"],
		BaseStats: {
			HP: 60,
			Atk: 110,
			Def: 70,
			SpAtk: 60,
			SpDef: 60,
			Speed: 100
		},
		FormeChange: {
			Possible: false
		}
	},
	Seel: {
		Type: ["Water"],
		Abilities:  ["Hydration","Thick Fat","Ice Body"],
		BaseStats: {
			HP: 65,
			Atk: 45,
			Def: 55,
			SpAtk: 45,
			SpDef: 70,
			Speed: 45
		},
		FormeChange: {
			Possible: false
		}
	},
	Dewgong: {
		Type: ["Water","Ice"],
		Abilities:  ["Hydration","Thick Fat","Ice Body"],
		BaseStats: {
			HP: 90,
			Atk: 70,
			Def: 80,
			SpAtk: 70,
			SpDef: 95,
			Speed: 70
		},
		FormeChange: {
			Possible: false
		}
	},
	Grimer: {
		Type: ["Poison"],
		Abilities:  ["Stench","Sticky Hold","Poison Touch"],
		BaseStats: {
			HP: 80,
			Atk: 80,
			Def: 50,
			SpAtk: 40,
			SpDef: 50,
			Speed: 25
		},
		FormeChange: {
			Possible: false
		}
	},
	Muk: {
		Type: ["Poison"],
		Abilities:  ["Stench","Sticky Hold","Poison Touch"],
		BaseStats: {
			HP: 105,
			Atk: 105,
			Def: 75,
			SpAtk: 65,
			SpDef: 100,
			Speed: 50
		},
		FormeChange: {
			Possible: false
		}
	},
	Shellder: {
		Type: ["Water"],
		Abilities:  ["Shell Armor","Skill Link","Overcoat"],
		BaseStats: {
			HP: 30,
			Atk: 65,
			Def: 100,
			SpAtk: 45,
			SpDef: 25,
			Speed: 40
		},
		FormeChange: {
			Possible: false
		}
	},
	Cloyster: {
		Type: ["Water","Ice"],
		Abilities:  ["Shell Armor","Skill Link","Overcoat"],
		BaseStats: {
			HP: 50,
			Atk: 95,
			Def: 180,
			SpAtk: 85,
			SpDef: 45,
			Speed: 70
		},
		FormeChange: {
			Possible: false
		}
	},
	Gastly: {
		Type: ["Ghost","Poison"],
		Abilities:  ["Levitate"],
		BaseStats: {
			HP: 30,
			Atk: 35,
			Def: 30,
			SpAtk: 100,
			SpDef: 35,
			Speed: 80
		},
		FormeChange: {
			Possible: false
		}
	},
	Haunter: {
		Type: ["Ghost","Poison"],
		Abilities:  ["Levitate"],
		BaseStats: {
			HP: 45,
			Atk: 50,
			Def: 45,
			SpAtk: 115,
			SpDef: 55,
			Speed: 95
		},
		FormeChange: {
			Possible: false
		}
	},
	Gengar: {
		Type: ["Ghost","Poison"],
		Abilities:  ["Levitate"],
		BaseStats: {
			HP: 60,
			Atk: 65,
			Def: 60,
			SpAtk: 130,
			SpDef: 75,
			Speed: 110
		},
		FormeChange: {
			Possible: true,
			Mega: {
				N: {
					Type: ["Ghost","Poison"],
					Abilities:  ["Shadow Tag"],
					BaseStats: {
						HP: 60,
						Atk: 65,
						Def: 80,
						SpAtk: 170,
						SpDef: 95,
						Speed: 130
					}
				}
			}
		}
	},
	Onix: {
		Type: ["Rock","Ground"],
		Abilities:  ["Rock Head","Sturdy","Weak Armor"],
		BaseStats: {
			HP: 35,
			Atk: 45,
			Def: 160,
			SpAtk: 30,
			SpDef: 45,
			Speed: 70
		},
		FormeChange: {
			Possible: false
		}
	},
	Drowzee: {
		Type: ["Psychic"],
		Abilities:  ["Forewarn","Insomnia","Inner Focus"],
		BaseStats: {
			HP: 60,
			Atk: 48,
			Def: 45,
			SpAtk: 43,
			SpDef: 90,
			Speed: 42
		},
		FormeChange: {
			Possible: false
		}
	},
	Hypno: {
		Type: ["Psychic"],
		Abilities:  ["Forewarn","Insomnia","Inner Focus"],
		BaseStats: {
			HP: 85,
			Atk: 73,
			Def: 70,
			SpAtk: 73,
			SpDef: 115,
			Speed: 67
		},
		FormeChange: {
			Possible: false
		}
	},
	Krabby: {
		Type: ["Water"],
		Abilities:  ["Hyper Cutter","Shell Armor","Sheer Force"],
		BaseStats: {
			HP: 30,
			Atk: 105,
			Def: 90,
			SpAtk: 25,
			SpDef: 25,
			Speed: 50
		},
		FormeChange: {
			Possible: false
		}
	},
	Kingler: {
		Type: ["Water",""],
		Abilities:  ["Hyper Cutter","Shell Armor","Sheer Force"],
		BaseStats: {
			HP: 55,
			Atk: 130,
			Def: 115,
			SpAtk: 50,
			SpDef: 50,
			Speed: 75
		},
		FormeChange: {
			Possible: false
		}
	},
	Voltorb: {
		Type: ["Electric"],
		Abilities:  ["Soundproof","Static","Aftermath"],
		BaseStats: {
			HP: 40,
			Atk: 30,
			Def: 50,
			SpAtk: 55,
			SpDef: 55,
			Speed: 100
		},
		FormeChange: {
			Possible: false
		}
	},
	Electrode: {
		Type: ["Electric"],
		Abilities:  ["Soundproof","Static","Aftermath"],
		BaseStats: {
			HP: 60,
			Atk: 50,
			Def: 70,
			SpAtk: 80,
			SpDef: 80,
			Speed: 140
		},
		FormeChange: {
			Possible: false
		}
	},
	Exeggcute: {
		Type: ["Grass","Psychic"],
		Abilities:  ["Chlorophyll","Harvest"],
		BaseStats: {
			HP: 60,
			Atk: 40,
			Def: 80,
			SpAtk: 60,
			SpDef: 45,
			Speed: 40
		},
		FormeChange: {
			Possible: false
		}
	},
	Exeggutor: {
		Type: ["Grass","Psychic"],
		Abilities:  ["Chlorophyll","Harvest"],
		BaseStats: {
			HP: 95,
			Atk: 95,
			Def: 85,
			SpAtk: 125,
			SpDef: 65,
			Speed: 55
		},
		FormeChange: {
			Possible: false
		}
	},
	Cubone: {
		Type: ["Ground"],
		Abilities:  ["Lightning Rod","Rock Head","Battle Armor"],
		BaseStats: {
			HP: 50,
			Atk: 50,
			Def: 95,
			SpAtk: 40,
			SpDef: 50,
			Speed: 35
		},
		FormeChange: {
			Possible: false
		}
	},
	Marowak: {
		Type: ["Ground"],
		Abilities:  ["Lightning Rod","Rock Head","Battle Armor"],
		BaseStats: {
			HP: 60,
			Atk: 80,
			Def: 110,
			SpAtk: 50,
			SpDef: 80,
			Speed: 45
		},
		FormeChange: {
			Possible: false
		}
	},
	Hitmonlee: {
		Type: ["Fighting"],
		Abilities:  ["Limber","Reckless","Unburden"],
		BaseStats: {
			HP: 50,
			Atk: 120,
			Def: 53,
			SpAtk: 35,
			SpDef: 110,
			Speed: 87
		},
		FormeChange: {
			Possible: false
		}
	},
	Hitmonchan: {
		Type: ["Fighting"],
		Abilities:  ["Iron Fist","Keen Eye","Inner Focus"],
		BaseStats: {
			HP: 50,
			Atk: 105,
			Def: 79,
			SpAtk: 35,
			SpDef: 110,
			Speed: 76
		},
		FormeChange: {
			Possible: false
		}
	},
	Lickitung: {
		Type: ["Normal"],
		Abilities:  ["Oblivious","Own Tempo","Cloud Nine"],
		BaseStats: {
			HP: 90,
			Atk: 55,
			Def: 75,
			SpAtk: 60,
			SpDef: 75,
			Speed: 30
		},
		FormeChange: {
			Possible: false
		}
	},
	Koffing: {
		Type: ["Poison"],
		Abilities:  ["Levitate"],
		BaseStats: {
			HP: 40,
			Atk: 65,
			Def: 95,
			SpAtk: 60,
			SpDef: 45,
			Speed: 35
		},
		FormeChange: {
			Possible: false
		}
	},
	Weezing: {
		Type: ["Poison"],
		Abilities:  ["Levitate"],
		BaseStats: {
			HP: 65,
			Atk: 90,
			Def: 120,
			SpAtk: 85,
			SpDef: 70,
			Speed: 60
		},
		FormeChange: {
			Possible: false
		}
	},
	Rhyhorn: {
		Type: ["Ground","Rock"],
		Abilities:  ["Lightning Rod","Rock Head","Reckless"],
		BaseStats: {
			HP: 80,
			Atk: 85,
			Def: 95,
			SpAtk: 30,
			SpDef: 30,
			Speed: 25
		},
		FormeChange: {
			Possible: false
		}
	}
	Rhydon: {
		Type: ["Ground","Rock"],
		Abilities:  ["Lightning Rod","Rock Head","Reckless"],
		BaseStats: {
			HP: 105,
			Atk: 130,
			Def: 120,
			SpAtk: 45,
			SpDef: 45,
			Speed: 40
		},
		FormeChange: {
			Possible: false
		}
	},
	Chansey: {
		Type: ["Normal"],
		Abilities:  ["Natural Cure","Serene Grace","Healer"],
		BaseStats: {
			HP: 250,
			Atk: 5,
			Def: 5,
			SpAtk: 35,
			SpDef: 105,
			Speed: 50
		},
		FormeChange: {
			Possible: false
		}
	}
	Tangela: {
		Type: ["Grass"],
		Abilities:  ["Chlorophyll","Leaf Guard","Regenerator"],
		BaseStats: {
			HP: 65,
			Atk: 55,
			Def: 115,
			SpAtk: 100,
			SpDef: 40,
			Speed: 60
		},
		FormeChange: {
			Possible: false
		}
	},
	Kangaskhan: {
		Type: ["Normal"],
		Abilities:  ["Early Bird","Scrappy","Inner Focus"],
		BaseStats: {
			HP: 105,
			Atk: 95,
			Def: 80,
			SpAtk: 40,
			SpDef: 80,
			Speed: 90
		},
		FormeChange: {
			Possible: true,
			Mega: {
				N: {
					Type: ["Normal"],
					Ability: "Parental Bond",
					BaseStats: {
						HP: 105,
						Atk: 125,
						Def: 100,
						SpAtk: 60,
						SpDef: 100,
						Speed: 100
					}
				}
			}
		}
	},
	Horsea: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Seadra: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Goldeen: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Seaking: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Staryu: {
		Type: ["",""],
		Abilities:  ["","","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	}
	Starmie: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Mr. Mime: {
		Type: ["",""],
		Abilities:  ["","","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	}
	Scyther: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Jynx: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Electabuzz: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Magmar: {
		Type: ["",""],
		Abilities:  ["","","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	}
	Pinsir: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: true,
			Mega: {
				N: {
					Type: ["",""],
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
		}
	},
	Tauros: {
		Type: ["",""],
		Abilities:  ["","","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	}
	Magikarp: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Gyarados: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: true,
			Mega: {
				N: {
					Type: ["",""],
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
		}
	},
	Lapras: {
		Type: ["",""],
		Abilities:  ["","","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	}
	Ditto: {
		Type: ["",""],
		Abilities:  ["","","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	}
	Eevee: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Vaporeon: {
		Type: ["",""],
		Abilities:  ["","","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	}
	Jolteon: {
		Type: ["",""],
		Abilities:  ["","","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	}
	Flareon: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Porygon: {
		Type: ["",""],
		Abilities:  ["","","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	}
	Omanyte: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Omastar: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Kabuto: {
		Type: ["",""],
		Abilities:  ["","","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	}
	Kabutops: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Aerodactyl: {
		Type: ["",""],
		Abilities:  ["","","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: true,
			Mega: {
				N: {
					Type: ["",""],
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
		}
	}
	Snorlax: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Articuno: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Zapdos: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Moltres: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
			}
		}
	},
	Dratini: {
		Type: ["",""],
		Abilities:  ["","","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	}
	Dragonair: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Dragonite: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
	Mewtwo: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: true,
			Mega: {
				X: {
					Type: ["",""],
					Ability: "",
					BaseStats: {
						HP: ,
						Atk: ,
						Def: ,
						SpAtk: ,
						SpDef: ,
						Speed: 
					}
				},
				Y: {
					Type: ["",""],
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
		}
	},
	Mew: {
		Type: ["",""],
		Abilities:  ["","",""],
		BaseStats: {
			HP: ,
			Atk: ,
			Def: ,
			SpAtk: ,
			SpDef: ,
			Speed: 
		},
		FormeChange: {
			Possible: false
		}
	},
};

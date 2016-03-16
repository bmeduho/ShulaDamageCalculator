var Pokemon = {
	/*Species: {
		Type: ["",""],
		Ability:  ["","",""],
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
					Ability: [""],
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
		Ability:  ["Overgrow","Chlorophyll"],
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
		Ability: ["Overgrow","Chlorophyll"],
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
		Ability:  ["Overgrow","Chlorophyll"],
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
					Ability: ["Thick Fat"],
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
		Ability:  ["Blaze","Solar Power"],
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
		Ability:  ["Blaze","Solar Power"],
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
		Ability:  ["Blaze","Solar Power"],
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
					Ability: ["Tough Claws"],
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
					Ability: ["Drought"],
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
		Ability:  ["Forrent","Rain Dish"],
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
		Ability:  ["Forrent","Rain Dish"],
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
		Ability:  ["Forrent","Rain Dish"],
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
					Ability: ["Mega Launcher"],
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
		Ability:  ["Shield Dust","Run Away"],
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
		Ability:  ["Shed Skin"],
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
		Ability:  ["Compound Eyes","Tinted Lens"],
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
		Ability:  ["Sheild Dust","Run Away"],
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
		Ability:  ["Shed Skin"],
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
		Ability:  ["Swarm","Sniper"],
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
					Ability: ["Adaptability"],
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
		Ability:  ["Keen Eye","Tangled Feet","Big Pecks"],
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
		Ability:  ["Keen Eye","Tangled Feet","Big Pecks"],
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
		Ability:  ["Keen Eye","Tangled Feet","Big Pecks"],
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
					Ability: ["No Guard"],
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
		Ability:  ["Guts","Run Away","Hustle"],
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
		Ability:  ["Guts","Run Away","Hustle"],
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
		Ability:  ["Keen Eye","Sniper"],
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
		Ability:  ["Keen Eye","Sniper"],
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
		Ability:  ["Intimidate","Shed Skin","Unnerve"],
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
		Ability:  ["Intimidate","Shed Skin","Unnerve"],
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
		Ability:  ["Static","Lightning Rod"],
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
		Ability:  ["Static","Lightning Rod"],
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
		Ability:  ["Sand Veil","Sand Rush"],
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
		Ability:  ["Sand Veil","Sand Rush"],
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
		Ability:  ["Poison Point","Rivalry","Hustle"],
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
		Ability:  ["Poison Point","Rivalry","Hustle"],
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
		Ability:  ["Poison Point","Rivalry","Sheer Force"],
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
		Ability:  ["Poison Point","Rivalry","Hustle"],
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
		Ability:  ["Poison Point","Rivalry","Hustle"],
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
		Ability:  ["Poison Point","Rivalry","Sheer Force"],
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
		Ability:  ["Cute Charm","Magic Guard","Friend Guard"],
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
		Ability:  ["Cute Charm","Magic Guard","Unaware"],
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
		Ability:  ["Flash Fire","Drought","",""],
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
		Ability:  ["Flash Fire","Drought","",""],
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
		Ability:  ["Competitive","Cute Charm","Friend Guard"],
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
		Ability:  ["Competitive","Cute Charm","Frisk"],
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
		Ability:  ["Inner Focus","Infiltrator"],
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
		Ability:  ["Inner Focus","Infiltrator"],
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
		Ability:  ["Chlorophyll","Run Away"],
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
		Ability:  ["Chlorophyll","Stench"],
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
		Ability:  ["Chlorophyll","Effect Spore"],
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
		Ability:  ["Dry Skin","Effect Spore","Damp"],
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
		Ability:  ["Dry Skin","Effect Spore","Damp"],
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
		Ability:  ["Compound Eyes","Tinted Lens","Run Away"],
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
		Ability:  ["Shield Dust","Tinted Lens","Wonder Skin"],
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
		Ability:  ["Arena Trap","Sand Veil","Sand Force"],
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
		Ability:  ["Arena Trap","Sand Veil","Sand Force"],
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
		Ability:  ["Pickup","Technician","Unnerve"],
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
		Ability:  ["Limber","Technician","Unnerve"],
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
		Ability:  ["Cloud Nine","Damp","Swift Swim"],
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
		Ability:  ["Cloud Nine","Damp","Swift Swim"],
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
		Ability:  ["Anger Point","Vital Spirit","Defiant"],
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
		Ability:  ["Anger Point","Vital Spirit","Defiant"],
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
		Ability:  ["Flash Fire","Intimidate","Justified"],
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
		Ability:  ["Flash Fire","Intimidate","Justified"],
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
		Ability:  ["Damp","Water Absorb","Swift Swim"],
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
		Ability:  ["Damp","Water Absorb","Swift Swim"],
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
		Ability:  ["Damp","Water Absorb","Swift Swim"],
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
		Ability:  ["Inner Focus","Synchronize","Magic Guard"],
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
		Ability:  ["Inner Focus","Synchronize","Magic Guard"],
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
		Ability:  ["Inner Focus","Synchronize","Magic Guard"],
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
					Ability: ["Trace"],
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
		Ability:  ["Guts","No Guard","Steadfast"],
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
		Ability:  ["Guts","No Guard","Steadfast"],
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
		Ability:  ["Guts","No Guard","Steadfast"],
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
		Ability:  ["Chlorophyll","Gluttony"],
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
		Ability:  ["Chlorophyll","Gluttony"],
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
		Ability:  ["Chlorophyll","Gluttony"],
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
		Ability:  ["Clear Body","Liquid Ooze","Rain Dish"],
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
		Ability:  ["Clear Body","Liquid Ooze","Rain Dish"],
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
		Ability:  ["Rock Head","Sturdy","Sand Veil"],
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
		Ability:  ["Rock Head","Sturdy","Sand Veil"],
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
		Ability:  ["Rock Head","Sturdy","Sand Veil"],
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
		Ability:  ["Flash Fire","Run Away","Flame Body"],
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
		Ability:  ["Flash Fire","Run Away","Flame Body"],
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
		Ability:  ["Oblivious","Own Tempo","Regenerator"],
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
		Ability:  ["Oblivious","Own Tempo","Regenerator"],
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
					Ability: ["Shell Armor"],
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
		Ability:  ["Magnet Pull","Sturdy","Analytic"],
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
		Ability:  ["Magnet Pull","Sturdy","Analytic"],
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
		Ability:  ["Inner Focus","Keen Eye","Defiant"],
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
		Ability:  ["Early Bird","Run Away","Tangled Feet"],
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
		Ability:  ["Early Bird","Run Away","Tangled Feet"],
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
		Ability:  ["Hydration","Thick Fat","Ice Body"],
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
		Ability:  ["Hydration","Thick Fat","Ice Body"],
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
		Ability:  ["Stench","Sticky Hold","Poison Touch"],
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
		Ability:  ["Stench","Sticky Hold","Poison Touch"],
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
		Ability:  ["Shell Armor","Skill Link","Overcoat"],
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
		Ability:  ["Shell Armor","Skill Link","Overcoat"],
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
		Ability:  ["Levitate"],
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
		Ability:  ["Levitate"],
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
		Ability:  ["Levitate"],
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
					Ability:  ["Shadow Tag"],
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
		Ability:  ["Rock Head","Sturdy","Weak Armor"],
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
		Ability:  ["Forewarn","Insomnia","Inner Focus"],
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
		Ability:  ["Forewarn","Insomnia","Inner Focus"],
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
		Ability:  ["Hyper Cutter","Shell Armor","Sheer Force"],
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
		Ability:  ["Hyper Cutter","Shell Armor","Sheer Force"],
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
		Ability:  ["Soundproof","Static","Aftermath"],
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
		Ability:  ["Soundproof","Static","Aftermath"],
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
		Ability:  ["Chlorophyll","Harvest"],
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
		Ability:  ["Chlorophyll","Harvest"],
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
		Ability:  ["Lightning Rod","Rock Head","Battle Armor"],
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
		Ability:  ["Lightning Rod","Rock Head","Battle Armor"],
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
		Ability:  ["Limber","Reckless","Unburden"],
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
		Ability:  ["Iron Fist","Keen Eye","Inner Focus"],
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
		Ability:  ["Oblivious","Own Tempo","Cloud Nine"],
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
		Ability:  ["Levitate"],
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
		Ability:  ["Levitate"],
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
		Ability:  ["Lightning Rod","Rock Head","Reckless"],
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
	},
	Rhydon: {
		Type: ["Ground","Rock"],
		Ability:  ["Lightning Rod","Rock Head","Reckless"],
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
		Ability:  ["Natural Cure","Serene Grace","Healer"],
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
	},
	Tangela: {
		Type: ["Grass"],
		Ability:  ["Chlorophyll","Leaf Guard","Regenerator"],
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
		Ability:  ["Early Bird","Scrappy","Inner Focus"],
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
					Ability: ["Parental Bond"],
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
		Type: ["Water"],
		Ability:  ["Sniper","Swift Swim","Damp"],
		BaseStats: {
			HP: 30,
			Atk: 40,
			Def: 70,
			SpAtk: 70,
			SpDef: 25,
			Speed: 60
		},
		FormeChange: {
			Possible: false
		}
	},
	Seadra: {
		Type: ["Water"],
		Ability:  ["Poison Point","Sniper","Damp"],
		BaseStats: {
			HP: 55,
			Atk: 65,
			Def: 95,
			SpAtk: 95,
			SpDef: 45,
			Speed: 85
		},
		FormeChange: {
			Possible: false
		}
	},
	Goldeen: {
		Type: ["Water"],
		Ability:  ["Swift Swim","Water Veil","Lightning Rod"],
		BaseStats: {
			HP: 45,
			Atk: 67,
			Def: 60,
			SpAtk: 35,
			SpDef: 50,
			Speed: 63
		},
		FormeChange: {
			Possible: false
		}
	},
	Seaking: {
		Type: ["Water"],
		Ability:  ["Swift Swim","Water Veil","Lightning Rod"],
		BaseStats: {
			HP: 80,
			Atk: 92,
			Def: 65,
			SpAtk: 65,
			SpDef: 80,
			Speed: 68
		},
		FormeChange: {
			Possible: false
		}
	},
	Staryu: {
		Type: ["Water"],
		Ability:  ["Illuminate","Natural Cure","Analytic"],
		BaseStats: {
			HP: 30,
			Atk: 45,
			Def: 55,
			SpAtk: 70,
			SpDef: 55,
			Speed: 85
		},
		FormeChange: {
			Possible: false
		}
	},
	Starmie: {
		Type: ["Water"],
		Ability:  ["Illuminate","Natural Cure","Analytic"],
		BaseStats: {
			HP: 60,
			Atk: 75,
			Def: 85,
			SpAtk: 100,
			SpDef: 85,
			Speed: 115
		},
		FormeChange: {
			Possible: false
		}
	},
	MrMime: {
		Type: ["Psychic","Fairy"],
		Ability:  ["Filter","Soundproof","Technician"],
		BaseStats: {
			HP: 40,
			Atk: 45,
			Def: 65,
			SpAtk: 100,
			SpDef: 120,
			Speed: 90
		},
		FormeChange: {
			Possible: false
		}
	},
	Scyther: {
		Type: ["Bug","Flying"],
		Ability:  ["Swarm","Technician","Steadfast"],
		BaseStats: {
			HP: 70,
			Atk: 110,
			Def: 80,
			SpAtk: 55,
			SpDef: 80,
			Speed: 105
		},
		FormeChange: {
			Possible: false
		}
	},
	Jynx: {
		Type: ["Ice","Psychic"],
		Ability:  ["Forewarn","Oblivious","Dry Skin"],
		BaseStats: {
			HP: 65,
			Atk: 50,
			Def: 35,
			SpAtk: 115,
			SpDef: 95,
			Speed: 95
		},
		FormeChange: {
			Possible: false
		}
	},
	Electabuzz: {
		Type: ["Electric"],
		Ability:  ["Static","Vital Spirit"],
		BaseStats: {
			HP: 65,
			Atk: 83,
			Def: 57,
			SpAtk: 95,
			SpDef: 85,
			Speed: 105
		},
		FormeChange: {
			Possible: false
		}
	},
	Magmar: {
		Type: ["Fire"],
		Ability:  ["Flame Body","Vital Spirit"],
		BaseStats: {
			HP: 65,
			Atk: 95,
			Def: 57,
			SpAtk: 100,
			SpDef: 85,
			Speed: 93
		},
		FormeChange: {
			Possible: false
		}
	},
	Pinsir: {
		Type: ["Bug"],
		Ability:  ["Hyper Cutter","Mold Breaker","Moxie"],
		BaseStats: {
			HP: 65,
			Atk: 125,
			Def: 100,
			SpAtk: 55,
			SpDef: 70,
			Speed: 85
		},
		FormeChange: {
			Possible: true,
			Mega: {
				N: {
					Type: ["Bug","Flying"],
					Ability: ["Aerilate"],
					BaseStats: {
						HP: 65,
						Atk: 155,
						Def: 120,
						SpAtk: 65,
						SpDef: 90,
						Speed: 105
					}
				}
			}
		}
	},
	Tauros: {
		Type: ["Normal"],
		Ability:  ["Anger Point","Intimidate","Sheer Force"],
		BaseStats: {
			HP: 75,
			Atk: 100,
			Def: 95,
			SpAtk: 40,
			SpDef: 70,
			Speed: 110
		},
		FormeChange: {
			Possible: false
		}
	},
	Magikarp: {
		Type: ["Water"],
		Ability:  ["Swift Swim","Rattled"],
		BaseStats: {
			HP: 20,
			Atk: 10,
			Def: 55,
			SpAtk: 15,
			SpDef: 20,
			Speed: 80
		},
		FormeChange: {
			Possible: false
		}
	},
	Gyarados: {
		Type: ["Water"],
		Ability:  ["Intimidate","Moxie"],
		BaseStats: {
			HP: 95,
			Atk: 125,
			Def: 79,
			SpAtk: 60,
			SpDef: 100,
			Speed: 81
		},
		FormeChange: {
			Possible: true,
			Mega: {
				N: {
					Type: ["Water","Dark"],
					Ability: ["Mold Breaker"],
					BaseStats: {
						HP: 95,
						Atk: 155,
						Def: 109,
						SpAtk: 70,
						SpDef: 130,
						Speed: 81
					}
				}
			}
		}
	},
	Lapras: {
		Type: ["Water","Ice"],
		Ability:  ["Shell Armor","Water Absorb","Hydration"],
		BaseStats: {
			HP: 130,
			Atk: 85,
			Def: 80,
			SpAtk: 85,
			SpDef: 95,
			Speed: 60
		},
		FormeChange: {
			Possible: false
		}
	},
	Ditto: {
		Type: ["Normal"],
		Ability:  ["Limber","Impostor"],
		BaseStats: {
			HP: 48,
			Atk: 48,
			Def: 48,
			SpAtk: 48,
			SpDef: 48,
			Speed: 48
		},
		FormeChange: {
			Possible: false
		}
	},
	Eevee: {
		Type: ["Normal"],
		Ability:  ["Adaptability","Run Away","Anticipation"],
		BaseStats: {
			HP: 55,
			Atk: 55,
			Def: 50,
			SpAtk: 45,
			SpDef: 65,
			Speed: 55
		},
		FormeChange: {
			Possible: false
		}
	},
	Vaporeon: {
		Type: ["Water"],
		Ability:  ["Water Absorb","Hydration","",""],
		BaseStats: {
			HP: 130,
			Atk: 65,
			Def: 60,
			SpAtk: 110,
			SpDef: 95,
			Speed: 65
		},
		FormeChange: {
			Possible: false
		}
	},
	Jolteon: {
		Type: ["Electric"],
		Ability:  ["Volt Absorb","Quick Feet"],
		BaseStats: {
			HP: 65,
			Atk: 65,
			Def: 60,
			SpAtk: 110,
			SpDef: 95,
			Speed: 130
		},
		FormeChange: {
			Possible: false
		}
	},
	Flareon: {
		Type: ["Fire"],
		Ability:  ["Flash Fire","Guts"],
		BaseStats: {
			HP: 65,
			Atk: 130,
			Def: 60,
			SpAtk: 95,
			SpDef: 110,
			Speed: 65
		},
		FormeChange: {
			Possible: false
		}
	},
	Porygon: {
		Type: ["Normal"],
		Ability:  ["Download","Trace","Analytic"],
		BaseStats: {
			HP: 65,
			Atk: 60,
			Def: 70,
			SpAtk: 85,
			SpDef: 75,
			Speed: 40
		},
		FormeChange: {
			Possible: false
		}
	},
	Omanyte: {
		Type: ["Rock","Water"],
		Ability:  ["Shell Armor","Swift Swim","Weak Armor"],
		BaseStats: {
			HP: 35,
			Atk: 40,
			Def: 100,
			SpAtk: 90,
			SpDef: 55,
			Speed: 35
		},
		FormeChange: {
			Possible: false
		}
	},
	Omastar: {
		Type: ["Rock","Water"],
		Ability:  ["Shell Armor","Swift Swim","Weak Armor"],
		BaseStats: {
			HP: 70,
			Atk: 60,
			Def: 125,
			SpAtk: 115,
			SpDef: 70,
			Speed: 55
		},
		FormeChange: {
			Possible: false
		}
	},
	Kabuto: {
		Type: ["Rock","Water"],
		Ability:  ["Battle Armor","Swift Swim","Weak Armor"],
		BaseStats: {
			HP: 30,
			Atk: 80,
			Def: 90,
			SpAtk: 55,
			SpDef: 45,
			Speed: 55
		},
		FormeChange: {
			Possible: false
		}
	},
	Kabutops: {
		Type: ["Rock","Water"],
		Ability:  ["Battle Armor","Swift Swim","Weak Armor"],
		BaseStats: {
			HP: 60,
			Atk: 115,
			Def: 105,
			SpAtk: 65,
			SpDef: 70,
			Speed: 80
		},
		FormeChange: {
			Possible: false
		}
	},
	Aerodactyl: {
		Type: ["Rock","Flying"],
		Ability:  ["Pressure","Rock Head","Unnerve"],
		BaseStats: {
			HP: 80,
			Atk: 105,
			Def: 65,
			SpAtk: 60,
			SpDef: 75,
			Speed: 130
		},
		FormeChange: {
			Possible: true,
			Mega: {
				N: {
					Type: ["Rock","Flying"],
					Ability: ["Tough Claws"],
					BaseStats: {
						HP: 80,
						Atk: 135,
						Def: 85,
						SpAtk: 70,
						SpDef: 95,
						Speed: 150
					}
				}
			}
		}
	},
	Snorlax: {
		Type: ["Normal"],
		Ability:  ["Immunity","Thick Fat","Gluttony"],
		BaseStats: {
			HP: 160,
			Atk: 110,
			Def: 65,
			SpAtk: 65,
			SpDef: 110,
			Speed: 30
		},
		FormeChange: {
			Possible: false
		}
	},
	Articuno: {
		Type: ["Ice","Flying"],
		Ability:  ["Pressure","Snow Cloak"],
		BaseStats: {
			HP: 90,
			Atk: 85,
			Def: 100,
			SpAtk: 95,
			SpDef: 125,
			Speed: 85
		},
		FormeChange: {
			Possible: false
		}
	},
	Zapdos: {
		Type: ["Electric","Flying"],
		Ability:  ["Pressure","Lightning Rod"],
		BaseStats: {
			HP: 90,
			Atk: 90,
			Def: 85,
			SpAtk: 125,
			SpDef: 90,
			Speed: 100
		},
		FormeChange: {
			Possible: false
		}
	},
	Moltres: {
		Type: ["Fire","Flying"],
		Ability:  ["Pressure","Flame Body"],
		BaseStats: {
			HP: 90,
			Atk: 100,
			Def: 90,
			SpAtk: 125,
			SpDef: 85,
			Speed: 90
		},
		FormeChange: {
			Possible: false
		}
	},
	Dratini: {
		Type: ["Dragon"],
		Ability:  ["Shed Skin","Marvel Scale"],
		BaseStats: {
			HP: 41,
			Atk: 64,
			Def: 45,
			SpAtk: 50,
			SpDef: 50,
			Speed: 50
		},
		FormeChange: {
			Possible: false
		}
	},
	Dragonair: {
		Type: ["Dragon"],
		Ability:  ["Shed Skin","Marvel Scale"],
		BaseStats: {
			HP: 61,
			Atk: 84,
			Def: 65,
			SpAtk: 70,
			SpDef: 70,
			Speed: 70
		},
		FormeChange: {
			Possible: false
		}
	},
	Dragonite: {
		Type: ["Dragon","Flying"],
		Ability:  ["Inner Focus","Multiscale"],
		BaseStats: {
			HP: 91,
			Atk: 134,
			Def: 95,
			SpAtk: 100,
			SpDef: 100,
			Speed: 80
		},
		FormeChange: {
			Possible: false
		}
	},
	Mewtwo: {
		Type: ["Psychic"],
		Ability:  ["Pressure","Unnerve"],
		BaseStats: {
			HP: 106,
			Atk: 110,
			Def: 90,
			SpAtk: 154,
			SpDef: 90,
			Speed: 130
		},
		FormeChange: {
			Possible: true,
			Mega: {
				X: {
					Type: ["Psychic","Fighting"],
					Ability: ["Steadfast"],
					BaseStats: {
						HP: 106,
						Atk: 190,
						Def: 100,
						SpAtk: 154,
						SpDef: 100,
						Speed: 130
					}
				},
				Y: {
					Type: ["Psychic"],
					Ability: ["Insomnia"],
					BaseStats: {
						HP: 106,
						Atk: 150,
						Def: 70,
						SpAtk: 194,
						SpDef: 120,
						Speed: 140
					}
				}
			}
		}
	},
	Mew: {
		Type: ["Psychic"],
		Ability:  ["Synchronize"],
		BaseStats: {
			HP: 100,
			Atk: 100,
			Def: 100,
			SpAtk: 100,
			SpDef: 100,
			Speed: 100
		},
		FormeChange: {
			Possible: false
		}
	},
	Chikorita: {
		Type: ["Grass"],
		Ability:  ["Overgrow","Leaf Guard"],
		BaseStats: {
			HP: 45,
			Atk: 49,
			Def: 65,
			SpAtk: 49,
			SpDef: 65,
			Speed: 45
		},
		FormeChange: {
			Possible: false
		}
	},
	Bayleef: {
		Type: ["Grass"],
		Ability:  ["Overgrow","Leaf Guard"],
		BaseStats: {
			HP: 60,
			Atk: 62,
			Def: 80,
			SpAtk: 63,
			SpDef: 80,
			Speed: 60
		},
		FormeChange: {
			Possible: false
		}
	},
	Meganium: {
		Type: ["Grass"],
		Ability:  ["Overgrow","Leaf Guard"],
		BaseStats: {
			HP: 80,
			Atk: 82,
			Def: 100,
			SpAtk: 83,
			SpDef: 100,
			Speed: 80
		},
		FormeChange: {
			Possible: false
		}
	},
	Cyndaquil: {
		Type: ["Fire"],
		Ability:  ["Blaze","Flash Fire"],
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
	Quilava: {
		Type: ["Fire"],
		Ability:  ["Blaze","Flash Fire"],
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
	Typhlosion: {
		Type: ["Fire"],
		Ability:  ["Blaze","Flash Fire"],
		BaseStats: {
			HP: 78,
			Atk: 84,
			Def: 78,
			SpAtk: 109,
			SpDef: 85,
			Speed: 100
		},
		FormeChange: {
			Possible: false
		}
	},
	Totodile: {
		Type: ["Water"],
		Ability:  ["Torrent","Sheer Force"],
		BaseStats: {
			HP: 50,
			Atk: 65,
			Def: 64,
			SpAtk: 44,
			SpDef: 48,
			Speed: 43
		},
		FormeChange: {
			Possible: false
		}
	},
	Croconaw: {
		Type: ["Water"],
		Ability:  ["Torrent","Sheer Force"],
		BaseStats: {
			HP: 65,
			Atk: 80,
			Def: 80,
			SpAtk: 59,
			SpDef: 63,
			Speed: 58
		},
		FormeChange: {
			Possible: false
		}
	},
	Feraligatr: {
		Type: ["Water"],
		Ability:  ["Torrent","Sheer Force"],
		BaseStats: {
			HP: 85,
			Atk: 105,
			Def: 100,
			SpAtk: 79,
			SpDef: 83,
			Speed: 78
		},
		FormeChange: {
			Possible: false
		}
	},
	Sentret: {
		Type: ["Normal"],
		Ability:  ["Keen Eye","Run Away","Frisk"],
		BaseStats: {
			HP: 35,
			Atk: 46,
			Def: 34,
			SpAtk: 35,
			SpDef: 45,
			Speed: 20
		},
		FormeChange: {
			Possible: false
		}
	},
	Furret: {
		Type: ["Normal"],
		Ability:  ["Keen Eye","Run Away","Frisk"],
		BaseStats: {
			HP: 85,
			Atk: 76,
			Def: 64,
			SpAtk: 45,
			SpDef: 55,
			Speed: 90
		},
		FormeChange: {
			Possible: false
		}
	},
	Hoothoot: {
		Type: ["Normal","Flying"],
		Ability:  ["Insomnia","Keen Eye","Tinted Lens"],
		BaseStats: {
			HP: 60,
			Atk: 30,
			Def: 30,
			SpAtk: 36,
			SpDef: 56,
			Speed: 50
		},
		FormeChange: {
			Possible: false
		}
	},
	Noctowl: {
		Type: ["Normal","Flying"],
		Ability:  ["Insomnia","Keen Eye","Tinted Lens"],
		BaseStats: {
			HP: 100,
			Atk: 50,
			Def: 50,
			SpAtk: 76,
			SpDef: 96,
			Speed: 70
		},
		FormeChange: {
			Possible: false
		}
	},
	Ledyba: {
		Type: ["Bug","Flying"],
		Ability:  ["Early Bird","Swarm","Rattled"],
		BaseStats: {
			HP: 40,
			Atk: 20,
			Def: 30,
			SpAtk: 40,
			SpDef: 80,
			Speed: 55
		},
		FormeChange: {
			Possible: false
		}
	},
	Ledian: {
		Type: ["Bug","Flying"],
		Ability:  ["Early Bird","Swarm","Iron Fist"],
		BaseStats: {
			HP: 55,
			Atk: 35,
			Def: 50,
			SpAtk: 55,
			SpDef: 110,
			Speed: 85
		},
		FormeChange: {
			Possible: false
		}
	},
	Spinarak: {
		Type: ["Bug","Poison"],
		Ability:  ["Insomnia","Swarm","Sniper"],
		BaseStats: {
			HP: 40,
			Atk: 60,
			Def: 40,
			SpAtk: 40,
			SpDef: 40,
			Speed: 30
		},
		FormeChange: {
			Possible: false
		}
	},
	Ariados: {
		Type: ["Bug","Poison"],
		Ability:  ["Insomnia","Swarm","Sniper"],
		BaseStats: {
			HP: 70,
			Atk: 90,
			Def: 70,
			SpAtk: 60,
			SpDef: 60,
			Speed: 40
		},
		FormeChange: {
			Possible: false
		}
	},
	Crobat: {
		Type: ["Poison","Flying"],
		Ability:  ["Inner Focus","Infiltrator"],
		BaseStats: {
			HP: 85,
			Atk: 90,
			Def: 80,
			SpAtk: 70,
			SpDef: 80,
			Speed: 130
		},
		FormeChange: {
			Possible: false
		}
	},
	/*Chinchou: {
		Type: ["",""],
		Ability:  ["","",""],
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
	Lanturn: {
		Type: ["",""],
		Ability:  ["","",""],
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
	Pichu: {
		Type: ["",""],
		Ability:  ["","",""],
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
	Cleffa: {
		Type: ["",""],
		Ability:  ["","",""],
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
	Igglybuff: {
		Type: ["",""],
		Ability:  ["","",""],
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
	Togepi: {
		Type: ["",""],
		Ability:  ["","",""],
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
	Togetic: {
		Type: ["",""],
		Ability:  ["","",""],
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
	Natu: {
		Type: ["",""],
		Ability:  ["","",""],
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
	Xatu: {
		Type: ["",""],
		Ability:  ["","",""],
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
	Mareep: {
		Type: ["",""],
		Ability:  ["","",""],
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
	Flaaffy: {
		Type: ["",""],
		Ability:  ["","",""],
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
	Ampharos: {
		Type: ["",""],
		Ability:  ["","",""],
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
					Ability: [""],
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
	
Bellossom
Marill
Azumarill
Sudowoodo
Politoed
Hoppip
Skiploom
Jumpluff
Aipom
Sunkern
Sunflora
Yanma
Wooper
Quagsire
Espeon
Umbreon
Murkrow
Slowking
Misdreavus
Unown
Wobbuffet
Girafarig
Pineco
Forretress
Dunsparce
Gligar
Steelix
Steelix
Snubbull
Granbull
Qwilfish
Scizor
Scizor
Shuckle
Heracross
Heracross
Sneasel
Teddiursa
Ursaring
Slugma
Magcargo
Swinub
Piloswine
Corsola
Remoraid
Octillery
Delibird
Mantine
Skarmory
Houndour
Houndoom
Houndoom
Kingdra
Phanpy
Donphan
Porygon2
Stantler
Smeargle
Tyrogue
Hitmontop
Smoochum
Elekid
Magby
Miltank
Blissey
Raikou
Entei
Suicune
Larvitar
Pupitar
Tyranitar
Tyranitar
Lugia
Ho-Oh
Celebi
Treecko
Grovyle
Sceptile
Sceptile
Torchic
Combusken
Blaziken
Blaziken
Mudkip
Marshtomp
Swampert
Swampert
Poochyena
Mightyena
Zigzagoon
Linoone
Wurmple
Silcoon
Beautifly
Cascoon
Dustox
Lotad
Lombre
Ludicolo
Seedot
Nuzleaf
Shiftry
Taillow
Swellow
Wingull
Pelipper
Ralts
Kirlia
Gardevoir
Gardevoir
Surskit
Masquerain
Shroomish
Breloom
Slakoth
Vigoroth
Slaking
Nincada
Ninjask
Shedinja
Whismur
Loudred
Exploud
Makuhita
Hariyama
Azurill
Nosepass
Skitty
Delcatty
Sableye
Sableye
Mawile
Mawile
Aron
Lairon
Aggron
Aggron
Meditite
Medicham
Medicham
Electrike
Manectric
Manectric
Plusle
Minun
Volbeat
Illumise
Roselia
Gulpin
Swalot
Carvanha
Sharpedo
Sharpedo
Wailmer
Wailord
Numel
Camerupt
Camerupt
Torkoal
Spoink
Grumpig
Spinda
Trapinch
Vibrava
Flygon
Cacnea
Cacturne
Swablu
Altaria
Altaria
Zangoose
Seviper
Lunatone
Solrock
Barboach
Whiscash
Corphish
Crawdaunt
Baltoy
Claydol
Lileep
Cradily
Anorith
Armaldo
Feebas
Milotic
Castform
Castform
Castform
Castform
Kecleon
Shuppet
Banette
Banette
Duskull
Dusclops
Tropius
Chimecho
Absol
Absol
Wynaut
Snorunt
Glalie
Glalie
Spheal
Sealeo
Walrein
Clamperl
Huntail
Gorebyss
Relicanth
Luvdisc
Bagon
Shelgon
Salamence
Salamence
Beldum
Metang
Metagross
Metagross
Regirock
Regice
Registeel
Latias
Latias
Latios
Latios
Kyogre
Kyogre
Groudon
Groudon
Rayquaza
Rayquaza
Jirachi
Deoxys
Deoxys
Deoxys
Deoxys
Turtwig
Grotle
Torterra
Chimchar
Monferno
Infernape
Piplup
Prinplup
Empoleon
Starly
Staravia
Staraptor
Bidoof
Bibarel
Kricketot
Kricketune
Shinx
Luxio
Luxray
Budew
Roserade
Cranidos
Rampardos
Shieldon
Bastiodon
Burmy
Wormadam
Wormadam
Wormadam
Mothim
Combee
Vespiquen
Pachirisu
Buizel
Floatzel
Cherubi
Cherrim
Shellos
Gastrodon
Ambipom
Drifloon
Drifblim
Buneary
Lopunny
Lopunny
Mismagius
Honchkrow
Glameow
Purugly
Chingling
Stunky
Skuntank
Bronzor
Bronzong
Bonsly
Mime Jr.
Happiny
Chatot
Spiritomb
Gible
Gabite
Garchomp
Garchomp
Munchlax
Riolu
Lucario
Lucario
Hippopotas
Hippowdon
Skorupi
Drapion
Croagunk
Toxicroak
Carnivine
Finneon
Lumineon
Mantyke
Snover
Abomasnow
Abomasnow
Weavile
Magnezone
Lickilicky
Rhyperior
Tangrowth
Electivire
Magmortar
Togekiss
Yanmega
Leafeon
Glaceon
Gliscor
Mamoswine
Porygon-Z
Gallade
Gallade
Probopass
Dusknoir
Froslass
Rotom
Rotom
Rotom
Rotom
Rotom
Rotom
Uxie
Mesprit
Azelf
Dialga
Palkia
Heatran
Regigigas
Giratina
Giratina
Cresselia
Phione
Manaphy
Darkrai
Shaymin
Shaymin
Arceus
Victini
Snivy
Servine
Serperior
Tepig
Pignite
Emboar
Oshawott
Dewott
Samurott
Patrat
Watchog
Lillipup
Herdier
Stoutland
Purrloin
Liepard
Pansage
Simisage
Pansear
Simisear
Panpour
Simipour
Munna
Musharna
Pidove
Tranquill
Unfezant
Blitzle
Zebstrika
Roggenrola
Boldore
Gigalith
Woobat
Swoobat
Drilbur
Excadrill
Audino
Audino
Timburr
Gurdurr
Conkeldurr
Tympole
Palpitoad
Seismitoad
Throh
Sawk
Sewaddle
Swadloon
Leavanny
Venipede
Whirlipede
Scolipede
Cottonee
Whimsicott
Petilil
Lilligant
Basculin
Sandile
Krokorok
Krookodile
Darumaka
Darmanitan
Darmanitan
Maractus
Dwebble
Crustle
Scraggy
Scrafty
Sigilyph
Yamask
Cofagrigus
Tirtouga
Carracosta
Archen
Archeops
Trubbish
Garbodor
Zorua
Zoroark
Minccino
Cinccino
Gothita
Gothorita
Gothitelle
Solosis
Duosion
Reuniclus
Ducklett
Swanna
Vanillite
Vanillish
Vanilluxe
Deerling
Sawsbuck
Emolga
Karrablast
Escavalier
Foongus
Amoonguss
Frillish
Jellicent
Alomomola
Joltik
Galvantula
Ferroseed
Ferrothorn
Klink
Klang
Klinklang
Tynamo
Eelektrik
Eelektross
Elgyem
Beheeyem
Litwick
Lampent
Chandelure
Axew
Fraxure
Haxorus
Cubchoo
Beartic
Cryogonal
Shelmet
Accelgor
Stunfisk
Mienfoo
Mienshao
Druddigon
Golett
Golurk
Pawniard
Bisharp
Bouffalant
Rufflet
Braviary
Vullaby
Mandibuzz
Heatmor
Durant
Deino
Zweilous
Hydreigon
Larvesta
Volcarona
Cobalion
Terrakion
Virizion
Tornadus
Tornadus
Thundurus
Thundurus
Reshiram
Zekrom
Landorus
Landorus
Kyurem
Kyurem
Kyurem
Keldeo
Meloetta
Meloetta
Genesect
Chespin
Quilladin
Chesnaught
Fennekin
Braixen
Delphox
Froakie
Frogadier
Greninja
Bunnelby
Diggersby
Fletchling
Fletchinder
Talonflame
Scatterbug
Spewpa
Vivillon
Litleo
Pyroar
Flabébé
Floette
Florges
Skiddo
Gogoat
Pancham
Pangoro
Furfrou
Espurr
Meowstic
Honedge
Doublade
Aegislash
Aegislash
Spritzee
Aromatisse
Swirlix
Slurpuff
Inkay
Malamar
Binacle
Barbaracle
Skrelp
Dragalge
Clauncher
Clawitzer
Helioptile
Heliolisk
Tyrunt
Tyrantrum
Amaura
Aurorus
Sylveon
Hawlucha
Dedenne
Carbink
Goomy
Sliggoo
Goodra
Klefki
Phantump
Trevenant
Pumpkaboo
Pumpkaboo
Pumpkaboo
Pumpkaboo
Gourgeist
Gourgeist
Gourgeist
Gourgeist
Bergmite
Avalugg
Noibat
Noivern
Xerneas
Yveltal
Zygarde
Diancie
Diancie
Hoopa
Hoopa
Volcanion*/
};
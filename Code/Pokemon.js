var Pokemon = {
	/*Species: {
		TypeOne: "",
		TypeTwo: false,
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
					TypeOne: "",
					TypeTwo: false,
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
		FormeChange: {
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
		FormeChange: {
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
		FormeChange: {
			Possible: true,
			Mega: {
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
		FormeChange: {
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
		FormeChange: {
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
		FormeChange: {
			Possible: true,
			Mega: {
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
	}
	Squirtle: {
		TypeOne: "Water",
		TypeTwo: false,
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
	}
	Wartortle: {
		TypeOne: "Water",
		TypeTwo: false,
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
	}
	Blastoise: {
		TypeOne: "Water",
		TypeTwo: false,
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
					TypeOne: "Water",
					TypeTwo: false,
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
	}
	Caterpie: {
		TypeOne: "Bug",
		TypeTwo: false,
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
	}
	Metapod: {
		TypeOne: "Bug",
		TypeTwo: false,
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
	}
	Butterfree: {
		TypeOne: "Bug",
		TypeTwo: "Flying",
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
	}
	Weedle: {
		TypeOne: "Bug",
		TypeTwo: "Poison",
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
	}
	Kakuna: {
		TypeOne: "Bug",
		TypeTwo: "Poison",
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
	}
	Beedrill: {
		TypeOne: "Bug",
		TypeTwo: "Poison",
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
					TypeOne: "Bug",
					TypeTwo: "Poison",
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
	}
	Pidgey: {
		TypeOne: "Normal",
		TypeTwo: "Flying",
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
	}
	Pidgeotto: {
		TypeOne: "Normal",
		TypeTwo: "Flying",
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
	}
	Pidgeot: {
		TypeOne: "Normal",
		TypeTwo: "Flying",
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
					TypeOne: "Normal",
					TypeTwo: "Flying",
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
	}
	Rattata: {
		TypeOne: "Normal",
		TypeTwo: false,
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
	}
	Raticate: {
		TypeOne: "Normal",
		TypeTwo: false,
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
	}
	Spearow: {
		TypeOne: "Normal",
		TypeTwo: "Flying",
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
	}
	Fearow: {
		TypeOne: "Normal",
		TypeTwo: "Flying",
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
	}
	Ekans: {
		TypeOne: "Poison",
		TypeTwo: false,
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
	}
	Arbok: {
		TypeOne: "Poison",
		TypeTwo: false,
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
	}
	Pikachu: {
		TypeOne: "Electric",
		TypeTwo: false,
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
	}
	Raichu: {
		TypeOne: "Electric",
		TypeTwo: false,
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
	}
	Sandshrew: {
		TypeOne: "Ground",
		TypeTwo: false,
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
	}
	Sandslash: {
		TypeOne: "Ground",
		TypeTwo: false,
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
	}
	NidoranF: {
		TypeOne: "Poison",
		TypeTwo: false,
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
	}
	Nidorina: {
		TypeOne: "Poison",
		TypeTwo: false,
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
	}
	Nidoqueen: {
		TypeOne: "Poison",
		TypeTwo: "Ground",
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
	}
	NidoranM: {
		TypeOne: "Poison",
		TypeTwo: false,
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
	}
	Nidorino: {
		TypeOne: "Poison",
		TypeTwo: false,
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
	}
	Nidoking: {
		TypeOne: "Poison",
		TypeTwo: "Ground",
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
	}
	Clefairy: {
		TypeOne: "Fairy",
		TypeTwo: false,
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
	}
	Clefable: {
		TypeOne: "Fairy",
		TypeTwo: false,
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
	}
	Vulpix: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
	Ninetales: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Jigglypuff
Wigglytuff
Zubat
Golbat
	Oddish: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Gloom
Vileplume
Paras
Parasect
Venonat
Venomoth
Diglett
Dugtrio
	Meowth: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Persian
	Psyduck: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Golduck
Mankey
Primeape
	Growlithe: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Arcanine
Poliwag
Poliwhirl
Poliwrath
	Abra: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Kadabra
Alakazam
Alakazam
Machop
Machoke
Machamp
	Bellsprout: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Weepinbell
Victreebel
Tentacool
Tentacruel
Geodude
Graveler
Golem
	Ponyta: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
	Rapidash: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
	Slowpoke: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Slowbro
Slowbro
Magnemite
Magneton
Farfetch-d
	Doduo: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Dodrio
	Seel: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Dewgong
Grimer
Muk
Shellder
Cloyster
	Gastly: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
	Haunter: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Gengar
Gengar
	Onix: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Drowzee
	Hypno: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Krabby
Kingler
Voltorb
Electrode
Exeggcute
Exeggutor
	Cubone: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Marowak
Hitmonlee
Hitmonchan
Lickitung
Koffing
Weezing
	Rhyhorn: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Rhydon
	Chansey: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Tangela
Kangaskhan
Kangaskhan
Horsea
Seadra
Goldeen
Seaking
	Staryu: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Starmie
	Mr. Mime: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Scyther
Jynx
Electabuzz
	Magmar: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Pinsir
Pinsir
	Tauros: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Magikarp
Gyarados
Gyarados
	Lapras: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
	Ditto: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Eevee
	Vaporeon: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
	Jolteon: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Flareon
	Porygon: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Omanyte
Omastar
	Kabuto: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Kabutops
	Aerodactyl: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Snorlax
Articuno
Zapdos
Moltres
	Dratini: {
		TypeOne: "",
		TypeTwo: false,
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
			Possible: false,
			Mega: {
				N: {
					TypeOne: "",
					TypeTwo: false,
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
Dragonair
Dragonite
Mewtwo
Mew
};

var Pokemon = {
	/*Species: {
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
Pidgeotto
Pidgeot
Pidgeot
	Rattata: {
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
Raticate
Spearow
Fearow
	Ekans: {
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
Arbok
	Pikachu: {
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
Raichu
Sandshrew
Sandslash
	NidoranF: {
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
Nidorina
Nidoqueen
	NidoranM: {
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
Nidorino
Nidoking
Clefairy
Clefable
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

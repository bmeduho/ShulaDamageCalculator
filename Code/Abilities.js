var Abilities = {
	/*Ability: {
		Requirements: {
			WhoStartsIt: "User/Opponent/Both",
			UseMove: ["Type","Category","BP","First/Last/Either"],
			HitBy: ["Type","Category","BP","First/Last/Either"],
			Status: "Condition"
		},
		Effect: {
			WhoItEffects: "User/Opponent/Both",
			Move: {
				EffectMove: true/false,
				BP: PercentChange%,
				STABChange: 1,
				TypeChange: ["StartAs","ChangeTo"]
			},
			Pokemon: {
				EffectPokemon: true/false,
				HP: PercentChange%
			},
			Weather: {
				EffectWeather: true/false,
				ChangeTo: "",
				WeatherEffects: "Remove/Allow"
			}
		},
		Exceptions: {
			AreThere: true/false,
			Abilities: ["Ability"],
			Moves: [["Move",withinnumberturns]],
			Items: [["Item","User/Opponent/Both"]]
		}
	},
	*/
	Adaptability: {
		Requirements: {
			WhoStartsIt: "User",
			UseMove: ["STAB","Any","Any","Either"]
		},
		Effect: {
			WhoItEffects: "User",
			Move: {
				EffectMove: true,
				STABChange: 2
			}
		},
		Exceptions: {
			AreThere: false
		}
	},
	Aerilate: {
		Requirements: {
			WhoStartsIt: "User",
			UseMove: ["Normal","Any","Any","Either"]
		},
		Effect: {
			WhoItEffects: "User",
			Move: {
				EffectMove: true,
				BP: 30%,
				TypeChange: ["Normal","Flying"]
			}
		},
		Exceptions: {
			AreThere: false
		}
	},
	Aftermath: {
		Requirements: {
			WhoStartsIt: "User",
			UseMove: ["Any","Physical","Any","Either"],
			Status: "Fainted"
		},
		Effect: {
			WhoItEffects: "Opponent",
			Move: {
				EffectMove: false
			},
			Pokemon: {
				EffectPokemon: true,
				HP: -25%
			},
			Weather: {
				EffectWeather: false
			}
		},
		Exceptions: {
			AreThere: true,
			Abilities: ["Damp"]
		}
	}
	Air Lock: {
		Requirements: {
			WhoStartsIt: "Both"
		},
		Effect: {
			WhoItEffects: "Both",
			Move: {
				EffectMove: false
			},
			Pokemon: {
				EffectPokemon: false
			},
			Weather: {
				EffectWeather: true,
				ChangeTo: "Keep",
				WeatherEffects: "Remove"
			}
		},
		Exceptions: {
			AreThere: false
		}
	},
	Analytic: {
		Requirements: {
			WhoStartsIt: "User",
			UseMove: ["Type","Category","BP","Last"],
			Status: "Condition"
		},
		Effect: {
			WhoItEffects: "User/Opponent/Both",
			Move: {
				EffectMove: true/false,
				BP: PercentChange%,
				STABChange: 1,
				TypeChange: ["StartAs","ChangeTo"]
			},
			Pokemon: {
				EffectPokemon: true/false,
				HP: PercentChange%
			},
			Weather: {
				EffectWeather: true/false,
				ChangeTo: "",
				WeatherEffects: "Remove/Allow"
			}
		},
		Exceptions: {
			AreThere: true/false,
			Abilities: ["Ability"],
			Moves: [["Move",withinnumberturns]],
			Items: [["Item","User/Opponent/Both"]]
		}
	},
Anger Point
Anticipation
Arena Trap
Aroma Veil
Aura Break
Bad Dreams
Battle Armour
Big Pecks
Blaze
Bulletproof
Cheek Pouch
Chlorophyll
Clear Body
Cloud Nine
Colour Change
Competitive
Compound Eyes
Contrary
Cursed Body
Cute Charm
Damp
Dark Aura
Defeatist
Defiant
Delta Stream
Desolate Land
Download
Drizzle
Drought
Dry Skin
Early Bird
Effect Spore
Fairy Aura
Filter
Flame Body
Flare Boost
Flash Fire
Flower Gift
Flower Veil
Forecast
Forewarn
Friend Guard
Frisk
Fur Coat
Gale Wings
Gluttony
Gooey
Grass Pelt
Guts
Harvest
Healer
Heatproof
Heavy Metal
Honey Gather
Huge Power
Hustle
Hydration
Hyper Cutter
Ice Body
Illuminate
Illusion
Immunity
Imposter
Infiltrate
Inner Focus
Insomnia
Intimidate
Iron Barbs
Iron Fist
Justified
Keen Eye
Klutz
Leaf Guard
Levitate
Light Metal
Lightning Rod
Limber
Liquid Ooze
Magic Bounce
Magic Guard
Magician
Magma Armour
Magnet Pull
Marvel Scale
Mega Launcher
Minus
Mold Breaker
Moody
Motor Drive
Moxie
Multiscale
Multitype
Mummy
Natural Cure
No Guard
Normalize
Oblivious
Overcoat
Overgrow
Own Tempo
Parental Bond
Pickpocket
Pickup
Pixilate
Plus
Poison Heal
Poison Point
Poison Touch
Prankster
Pressure
Primordial Sea
Protean
Pure Power
Quick Feet
Rain Dish
Rattled
Reckless
Refrigerate
Regenerator
Rivalry
Rock Head
Rough Skin
Run Away
Sand Force
Sand Rush
Sand Stream
Sand Veil
Sap Sipper
Scrappy
Serene Grace
Shadow Tag
Shed Skin
Sheer Force
Shell Armour
Shield Dust
Simple
Skill Link
Slow Start
Sniper
Snow Cloak
Snow Warning
Solar Power
Solid Rock
Soundproof
Speed Boost
Stall
Stance Change
Static
Steadfast
Stench
Sticky Hold
Storm Drain
Strong Jaw
Sturdy
Suction Cups
Super Luck
Swarm
Sweet Veil
Swift Swim
Symbiosis
Synchronize
Tangled Feet
Technician
Telepathy
Teravolt
Thick Fat
Tinted Lens
Torrent
Tough Claws
Toxic Boost
Trace
Truant
Turboblaze
Unaware
Unburden
Unnerve
Victory Star
Vital Spirit
Volt Absorb
Water Absorb
Water Veil
Weak Armour
White Smoke
Wonder Guard
Wonder Skin
Zen Mode
};

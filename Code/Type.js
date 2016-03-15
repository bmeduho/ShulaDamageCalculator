var Types = {
	/*
	Name: {
		Strong: [],
		Weak: [],
		Immune: []
	},
	*/
	Normal: {
		Strong: [false],
		Weak: ["Rock","Steel"],
		Immune: ["Ghost"]
	},
	Fire: {
		Strong: ["Grass","Ice","Bug","Steel"],
		Weak: ["Fire","Water","Rock","Dragon"],
		Immune: [false]
	},
	Water: {
		Strong: ["Fire","Ground","Rock"],
		Weak: ["Water","Grass","Dragon"],
		Immune: [false]
	},
	Electric: {
		Strong: ["Water","Flying"],
		Weak: ["Electric","Grass","Dragon"],
		Immune: ["Ground"]
	},
	Grass: {
		Strong: ["Water","Ground","Rock"],
		Weak: ["Fire","Grass","Poison","Fire","Bug","Dragon","Steel"],
		Immune: [false]
	},
	Ice: {
		Strong: ["Grass","Ground","FLying","Dragon"],
		Weak: ["Fire","Water","Ice","Steel"],
		Immune: [false]
	},
	Fighting: {
		Strong: ["Normal","Ice","Rock","Dark","Steel"],
		Weak: ["Poison","Flying","Psychic","Bug","Fairy"],
		Immune: ["Ghost"]
	},
	Poison: {
		Strong: ["Grass","Fairy"],
		Weak: ["Poison","Ground","Rock","Ghost"],
		Immune: ["Steel"]
	},
	Ground: {
		Strong: [],
		Weak: [],
		Immune: []
	},
	Flying: {
		Strong: [],
		Weak: [],
		Immune: []
	},
	Psychic: {
		Strong: [],
		Weak: [],
		Immune: []
	},
}

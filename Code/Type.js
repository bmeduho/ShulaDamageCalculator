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
}

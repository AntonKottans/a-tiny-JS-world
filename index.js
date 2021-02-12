/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
class Inhabitant extends Object {
	constructor(name, gender, species) {
		super()
		this.name = name
		this.gender = gender
		this.species = species
	}
}
class Human extends Inhabitant {
	constructor(...props) {
		super(...props)
		this.legs = 2
		this.hands = 2
		this.tail = false
		this.saying = "Hello!"
	}
}
class Cats extends Inhabitant {
	constructor(...props) {
		super(...props)
		this.saying = "Meow!"
	}
}
class HomeCat extends Cats {
	constructor(...props) {
		super(...props)
		this.legs = 4
		this.tail = 1
		this.mustache = 1
	}
}
class CatWoman extends Human {
	constructor(...props) {
		super(...props)
		this.saying = new Cats().saying
	}
}

class Bird extends Inhabitant {
	constructor(...props) {
		super(...props)
		this.legs = 2
		this.wings = 2
		this.tail = true
		this.saying = "I'm a bird!"
	}
}

let bird = new Bird("It's a bird!", "male", "bird")
let man = new Human("Jack", "male", "human")
let cat = new HomeCat("puff", "male", "cat")
let catWoman = new CatWoman("Holly", "female", "Cat-woman")
let woman = new Human("Jessy", "female", "human")
// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */
const inhabits = [bird, cat, man, woman, catWoman]
const inhabitantObjectKeys = [
	"species",
	"name",
	"gender",
	"legs",
	"hands",
	"wings",
	"saying",
	"mustache",
]
inhabits.forEach((inhabitant) => {
	let stringToPrint = ""
	inhabitantObjectKeys.forEach((key) => {
		if (inhabitant.hasOwnProperty(key)) stringToPrint += `${inhabitant[key]}; `
	})
	print(stringToPrint)
})
/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */

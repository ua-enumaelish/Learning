var array = [];
var arrayNames = [
  'Bilbo', 'Frodo', 'Samwise', 'Hamfast', 'Meriadoc', 'Peregrin', 'Fredegar', 'Maggot', 'Bungo',
  'Belladonna', 'Bandobras "Bullroarer" Took', 'Folko', 'Rose', 'Elanor', 'Drogo', 'Primrose',
  'Mirabella', 'Deaogl', 'Izumbras', 'Gog','Bob', 'Faolla', 'Staogl', 'Dragan', 'Nob'
];

function Hobbit(name){
  this.name = name;
  this.age = Math.floor(Math.random()*(100 - 12)+12); 
  this.count = Hobbit.prototype.count++; 
}

Hobbit.prototype.count = 1;

for(var i = 0; i < arrayNames.length; i++){
	var hobbit = new Hobbit(arrayNames[i]);
	array.push(hobbit);
}

var bilbo = new Hobbit('Bilbo');
console.log(bilbo);

var frodo = new Hobbit('Frodo');
console.log(frodo);

console.log(array);
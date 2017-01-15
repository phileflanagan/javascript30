// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);
//
// let name = 'Phil';
// let name2 = name;
// console.log(name, name2);
// name = 'Phillip';
// console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(team, players);

// You might think we can just do something like this:
team[3] = 'Phil';
// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// one day

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Phil F',
  age: '25'
}

// and think we make a copy:
const captain = person;
captain.age = 25;
// console.log(person, captain);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 });
console.log(person, captain, cap2);

// We will hopefully soon see the object ...spread
// const cap3 = {...person};
// console.log(cap3)

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const phil = {
  name: 'Phil',
  age: 25,
  social: {
    twitter: '@asdf',
    facebook: 'asdfasdf'
  }
}
console.clear();
console.log(phil);

const dev = Object.assign({}, phil);
dev.name = 'Phillip';
console.log(dev, phil);
dev.social.twitter = '@adsfdasfdasfadf';
console.clear();
console.log(phil.social, dev.social)
const dev2 = JSON.parse(JSON.stringify(phil));


const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello')

// Interpolated
const iv = 'interpolated value'
console.log('Hello I am a old-school %s', iv)
console.log(`Hello I am an ES6 ${iv}`)

// Styled
console.log('%c Hello', 'font-size: 2rem; color: #BADA55; text-shadow: 1px 1px 2px green')

// warning!
console.warn('some warning')

// Error :|
console.error('ehh whatcha gonna do')

// Info
console.info('male platapi are poisonous... or is it venomous')

// Testing
console.assert(1 === 2, 'that\'s where you\'re wrong kiddo')

// clearing
// console.clear()

// Viewing DOM Elements
const p = document.querySelector('p')
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.log(`That is ${dog.age * 7} in dog years`)
  console.groupEnd(`${dog.name}`)
})

// counting
console.count('joe')
console.count('joe')

// timing
console.time('fetching data')
setTimeout(() => console.timeEnd('fetching data'), 1000);

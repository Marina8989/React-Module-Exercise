import fruits from './foods';
import {choice, remove} from './helpers';

let x = choice(fruits);

console.log(`I'd like one ${x}, please`);
console.log(`Here you go: ${x}`);
console.log(`Delicious! May I have another?`);

let rest = remove(x, fruits);
console.log(`Only ${rest.length} left.`);
import singletonCounter from "./DBConnection.js";
import singletonCounter2 from "./DBConnection.js";

console.log("counter 1: ");
console.log(singletonCounter.getCount());

singletonCounter.increment();
singletonCounter.increment();
singletonCounter.increment();

console.log("counter 1: ");
console.log(singletonCounter.getCount());

console.log("counter 2: ");
console.log(singletonCounter2.getCount());

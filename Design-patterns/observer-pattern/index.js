import Observer from "./observer.js";

function subscriberOne(data) {
  console.log("Data received to subscriberOne: ", data);
}

function subscriberTwo(data) {
  console.log("Data received to subcriberTwo: ", data);
}

Observer.subscribe(subscriberOne);
Observer.subscribe(subscriberTwo);

console.log("subscriberOne & subscriberTwo are subscribed");
Observer.notify("Data..");
Observer.notify("More Data..");

// unsubscribe subscriberTwo
Observer.unsubscribe(subscriberTwo);

console.log("subcriberTwo has been unsubscribed");
Observer.notify("Data..");
Observer.notify("More Data..");

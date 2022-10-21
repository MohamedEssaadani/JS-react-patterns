/**
 * @description Intercept and control interactions to target objects with proxy pattern

 */

// object
const customer = {
  customerId: 93993,
  customerName: "Mohamed",
  email: "essaadani80@gmail.com",
};

// proxy for account using built in proxy object

// The Proxy => (targetObject, handler). handler object used to add functionality to the proxy. This object comes with some built-in functions that we can use, such as get and set.
const customerProxy = new Proxy(customer, {
  get: (target, property) => target[property],
  set: (target, property, value) => {
    target[property] = value;
    return true;
  },
});

// with reflect
const customerProxyReflect = new Proxy(customer, {
  get: (target, property) => Reflect.get(target, property),
  set: (obj, property, value) => {
    if (property === "customerName") {
      if (value.length < 6) {
        throw new Error("Please use a longer name.");
      }
    }

    if (property === "age") {
      if (typeof value !== "number") {
        throw new Error("Please provide a valid age.");
      }
    }

    return Reflect.set(obj, property, value);
  },
});

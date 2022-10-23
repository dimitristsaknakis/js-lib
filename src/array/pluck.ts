// A sample method of the library. Normally the code should be
// in TypeScript, not JavaScript as it is here.

/** Accepts an array of objects and a field name, returns the
 * value of the field in each array object.
 */
export const pluck = (elements, field) => {
    return elements.map(element => element[field]);
};

// Example method test
// pluck([{name : "Monty"}], "name"); // "Monty"


// TASK 6: Remove Key from Nested Object
// Problem Definition: Remove a key from nested object without mutating original.

function removeKey(obj, path) {
    let clone = JSON.parse(JSON.stringify(obj))
    let keys = path.split(".")
    let current = clone

    for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]]
    }

    delete current[keys[keys.length - 1]]
    return clone
}


console.log(removeKey({ a: { b: { c: 1 } } }, "a.b.c"))
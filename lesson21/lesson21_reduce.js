

function reduce2(fn, initialValue) {
    let suma
    let index
    if (initialValue !== undefined) {
        suma = initialValue
        index = 0
    } else {
        suma = this[0]
        index = 1
    }
    for (let i = index; i < this.length; i++) {
        const item = this[i]
        suma = fn(suma, item)
    }

    return suma
}

const arr = [101, 102, 103, 104]

function sumuj(suma,number) {
    return suma + number
}

Array.prototype.reduce2 = reduce2

const sum = arr.reduce(sumuj)
const sum2 = arr.reduce2(sumuj)

console.log(sum)
console.log(sum2)


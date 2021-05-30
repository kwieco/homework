

const arr = [101, 1, 5, 9]

function some2(fn) {
    for (let i = 0; i < this.lenght; i++) {
        const number = this[i]
        if (fn(number)) {
            return true
        }
    }   
    return false 
}

Array.prototype.some2 = some2

const biggerThan100 = arr.some(number => number > 100)
const biggerThan100_2 = arr.some2(number => number > 100)

console.log(biggerThan100)
console.log(biggerThan100_2)

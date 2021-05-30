

const arr = [101, 102, 103, 104]

function every2(fn) {
    for (let i = 0; i < this.lenght; i++) {
        const number = this[i]
        if (!fn(number)) {
            return false
        }
    }   
    return true 
}

Array.prototype.every2 = every2

const biggerThan100 = arr.every(number => number > 100)
const biggerThan100_2 = arr.every2(number => number > 100)

console.log(biggerThan100)
console.log(biggerThan100_2)
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1 zwróć sumę wszystkich elementów znajdujących się w tablicy,

// const nowyArr = array.reduce(function (acc,item) {
//     return acc + item
// })
// console.log(nowyArr)

// 2 zwróć sumę wszystkich parzystych elementów tablicy,

// const nowyArr2 = array
//     .filter(isEven => isEven % 2 == 0)
//     .reduce(function (acc,item) {
//     return acc + item
// })
// console.log(nowyArr2)

// 3 zwróć sumę wszystkich elementów tablicy + 10(10 dodaj za pomocą initialValue)

// const nowyArr3 = array.reduce(function (acc,item) {
//     return acc + item
// },10)
// console.log(nowyArr3)

// Napisz czym będzie accumulator jak nie podamy initialValue, a czym będzie jak podamy initialValue,
// Jest pierwszym elementem, a jak podamy initialValue wskakuje on na pierwszą pozycję

// Jeśli podamy initialValue w tablicy to jaki index będzie miał prawdziwy pierwszy element naszej tablicy ?

//Jeżeli podamy to będzie miał pierwsza pozycję programowalne [0] :D

// Napisz pętle for która będzie miała takie samo działanie jak pętla reduce(pokazane było na live)

//#1 suma wyszstkiego

// let sum = 0
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
//     console.log(sum)

//#2 tylko parzyste

// let sum2 = 0
// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for ( i = 0; i < numbers2.length; i++) {
//     if ( (numbers2[i] % 2) == 0){
//         sum2 += numbers2[i]
//     }
// }

    // console.log(sum2)

//#3 start +10

// let sum3 = 10
// const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (i = 0; i < numbers3.length; i++) {
//     sum3 += numbers3[i]
// }
//     console.log(sum3)




// Some i every:

// const someArray = [11, 3, 5, 31, 31, 54, 23, 14]

// // zwróć true jeśli tablica zawiera chociaż jeden element większy niż 50,

// const nowyArr4 = someArray.some(function(item){
//     return item >50
// })
// console.log(nowyArr4)


// zwróć true jeśli w tablicy każdy element jest większy od 2,
// function biggerThanTwo (item){
//     return item > 2
// }

// const nowyArr5 = someArray.every(biggerThanTwo)
// console.log(nowyArr5)

// Jaka jest różnica między some i every?
// some sprawdza czy chociaż jeden spełnia warunek, natomiast every  sprawdza wszystkie  elementy tablicy

// sprawdz czy tablica zawiera element podzielny przez 7 i jeśli tak to niech wyświetli w konsoli informacje, że
// w tablicy znajduje się element podzielny przez 7,

// function divisibleBySeven(item){
//     return item % 7 == 0
// }

// const newArr6 = someArray.some(divisibleBySeven)
    
// console.log(newArr6)

// if (newArr6 == true) {
//     console.log(`Tablica zawiera liczbę podzielną przez 7`)
// }

// stwórz metodę some za pomocą pętli for,

// function myOwnSomeFunction (){
//     for (i = 0; i < someArray.length, i++ ) {
//         if (someArray[i])
//     }
// }

// stwórz metodę every za pomocą pętli for,

// for (let i = 0; i < someArray.length; i++) {
//     let sum = 3;
//     if (someArray[i] > sum) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }

// Funkcje i metody reduce, some i every

// for (let i = 0; i < someArray.length; i++) {
//     if (someArray[i] > 0) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }

// Stwórz funkcję, która:

// przyjmuje tablicę jako parametr i sumuje nam elementy typu number z tej tablicy(użyj typeof),

// const allElementsArray = [1, "Eliza", 22,,77, "Karol", true, 12, 68, 23, "Mariusz", false];


// function sumNumbersOnly(array7) {
//     const sum = array7
//     .filter(function onlyNumbers(item) {
//         if(typeof item === "number"){
//             return true;
//         }
//     })
//     .reduce(function sum (acc, next) {
//         return acc + next;
//     })
//     console.log(sum)
// }

// sumNumbersOnly(allElementsArray)

// przyjmuję dwa parametry (tablicę oraz wartość initialValue), a następnie odejmuje nam każdy kolejny element
// tablicy od następnego,

// const array = [123, 13, 3, 2];

// function twoParameters(item, initialValue) {
//   const result = item
  
//                     .reduce((acc, value) => {
//                             return acc - value;
//                                              }, initialValue);
//   console.log(`suma wszystkich odjętych elementów tablicy ${result}`);
//   return result;
// }
// twoParameters(array, 257);

// przyjmuję dwa parametry(tablice i wartość, której szukamy w tej tablicy). Funkcją powinna nam zwrócić true
// jeśli w tablicy znajdzie się ta wartość,

// const allElementsArray = [1, "Eliza", 22,,77, "Karol", true, 12, 68, 23, "Mariusz", false];
// const searchIt = (arr, value) => arr.includes(value);

// console.log(searchIt(allElementsArray, 6));

// Prototypy:

// Stwórz funkcję konstruktora, która stworzy nam obiekt samochód z właściwościami:
// (model, yearOfProduction, color, drive()) i stwórz dwa samochody tym konstruktorem,

const car = function (model, yearOfProduction, color) {
    this.model = model;
    this.yearOfProduction = yearOfProduction;
    this.color = color;
    this.drive = () => {
      console.log(`Posiadasz ${model} z ${yearOfProduction} roku w kolorze ${color}`);
    };
  };
  const Ford = new car("Fusion", 2018, "czarny");
  const Porsche = new car("911", 2017, "bialy");
  console.log(Ford);
  console.log(Porsche);

// Co robi słówko kluczowe New i kiedy możemy go użyć?
//New tworzy nam nowy obiekt, które okresliliśmy w funkcji konstruktora

// Za pomocą prototype dodaj dwie funkcje do konstruktora car, tankFuel i stop, które będą
// wypisywać w konsoli dowolny napis,

car.prototype.tankFuel = function () {
    console.log(`Samochdód  ${this.tank} nie ma już paliwa`);
  };
car.prototype.stop = function () {
    console.log(`Zatrzymaj ${this.model} `);
  };
  
  Porsche.tankFuel();
  Ford.stop();
  
  console.log(Porsche)
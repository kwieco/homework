// Zwykłe pętle - ZADANIE 1//

        //A//

        // for (i = 1; i < 9; i++){
        //     console.log(i)
        // }

        //B//

        // for (i = 9; i >= 1; i--) {
        //     console.log(i)
        // }

        //C//

        // for (i = 5; i <= 15; i++){
        //     console.log(i)
        // }

        //D//

        // for (i = 0; i >= -10; i--) {
        //     console.log(i)
        // }

        //E//

        // for (i = 1; i <= 20; i+=2) {
        //     console.log(i)
        // }

        //F//

        // for (i = 10; i >= -10; i-=4) {
        //     console.log(i)
        // }

        //G//

        // for (i = 1; i <= 100; i=i * 2) {
        //     console.log(i)
        // }

// Pętle z warunkami - ZADANIE 2//

        //A//
    
        // for (i = 0; i <= 20  ; i++ ){
        //     if (i % 2 == 0){
        //         console.log(i)
        //     }
        // }
        
        //B//
    
        // for (i = 0; i <= 20  ; i++ ){
        //     if (i % 2 == 1){
        //         console.log(i)
        //     }
        // }

        //C//
    
        // for (i = 0; i <= 10  ; i++ ){
        //     if (i % 2 == 0) {
        //         console.log(`${i} jest liczbą parzystą`) 
        //     } else {
        //         console.log(`${i} jest liczbą nieparzystą`)
        //     }
        // }

        //D//

        // for ( i = 1; i <=30; i ++) {
        //     if (i % 3 == 0 && i % 5 == 0) {
        //         console.log(`${i} = FizzBuzz`) 
        //     } else if (i % 3 == 0){
        //         console.log(`${i} = Fizz`)
        //     } else if (i % 5 == 0) {
        //         console.log (`${i} = Buzz`)
        //     } else {
        //         console.log(i)
        //     }
        // }

        //E//

        // for (i = 100; i >= 0; i -= 5) {
        //     if (i % 10 == 0 ){
        //         console.log(`${i} jest podzielna przez 10`)
        //     } else {
        //         console.log(i)
        //     }
        // }

//Pętle na funkcjach - ZADANIE 3 //

        //A//

        // function loopWithRangeTo(number) {
        //     for ( i = 0; i <= number; i ++){
        //         console.log(i)
        //     }
        // }
        // loopWithRangeTo(15)


        //B//

        // function loopStartsFrom(number) {
        //     if (number > 15){
        //         for (i = number; i >= 15; i--) {
        //             console.log(i)
        //         }
        //     } else {
        //         for (i = number; i <= 15; i++) {
        //             console.log(i)
        //         } 
        //     }
        // }
        // loopStartsFrom(45) 

        //C//

        // function loopJump(number) {
        //     if (number < 15){
        //         for (i = 0; i <= 15; i++) {
        //             if ( i % number == 0 && i > 0){ 
        //                 console.log(i)
        //              }   
        //             }
        //         } else {
        //         console.log(`Hej liczba ${number} jest większa niż zakres pętli`)
        //         } 
        //     }
    
        // loopJump(16) 

        //D//

        // function newLoop(start, end){
        //     for (i = start; i <= end; i++) {
        //         console.log(i)
        //     }
        // }
        // newLoop (12,34)

        
        //E//

        // function newLoopWithJump(start, end, jump){
        //     for (i = start; i <= end; i+= jump) { 
        //         console.log(i)
        //     }
        // }
        // newLoopWithJump (12,34,4)

// ZADANIE 4//

    //A//
//     const names = ['Kamil', 'Kuba' ,'Maria' ,'Maja' ,'Piotr']

//     for(i=0;i < names.length; i++) {
//       console.log(names[i])
//     }

        //B//
// const names = ['Kamil', 'Kuba' ,'Maria' ,'Maja' ,'Piotr']

//     for(i=0;i < names.length; i++) {
//       console.log(`Cześć ${names[i]}`)
//     }

            //C//
// const cars = [
//          {
//         carModel: 'Volvo',
//         color: 'red'
//         },

//         {carModel: 'VW',
//         color: 'blue'
//         },

//         {carModel: 'Renault',
//         color: 'White perl'
//          },

//         {carModel: 'Audi',
//         color: 'Black'
//         },
// ]

// for(i=0;i < cars.length; i++) {
//   console.log(`Przed wami stoi ${cars[i].color} ${cars[i].carModel}`)
// }

//D//

// const tableWithNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for ( i = 0; i < tableWithNumbers.length; i++) {
//         if (tableWithNumbers[i] % 2 == 0) {
//                 console.log(tableWithNumbers[i])
//         }
// }
 
//E*//

// const table = [1, 12, 'krzyś', false,  'gra', 'w ', 'siatke', 32, 131]
// for(i = 0; i < table.length; i++) {
//     if(typeof table[i] === "string") {
//         console.log(table[i])
//     }
// }

//F**/

// const  mixTable = [ 1, 2, 12, "12Krosno", 'Januszek', true, 1222, 'false', false, 90]
// let integerTable = []

// for (i = 0; i < mixTable.length; i++) { 
//         if(typeof mixTable[i] === 'number') {
//                integerTable.push(mixTable[i])
//         }
        
// } 
// console.log(integerTable)

//ZADANIE 5//

//A//
// const numbers = [2, 5, 12, 24, 48]

// function sumNumbers(numbers) {
//     let sum = 0
//     for(i = 0; i < numbers.length; i++){
//     sum += numbers[i]}
// console.log(sum)
// }
// sumNumbers(numbers)

//B//

// const numbers2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// const numbers3 = [ 11, 21, 31, 41, 15, 61, 17, 81, 19, 100]

// function split(num) {
//         const parzysta = []
//         const nieparzysta = []

//         for (i = 0; i < num.length; i++) {
//                 if (num[i] % 2 === 0){
//                         parzysta.push(num[i])
//                 } else {
//                         nieparzysta.push(num[i])
//                 }
//         }
//         console.log(`parzyste: ${parzysta}`)
//         console.log(`nieparzyste: ${nieparzysta}`)

// } 
// split(numbers2)
// split(numbers3)

//C//

// function letterY (word){
//         if (word.includes('y') === true){
//                 console.log(`Jest literka "y" w słowie ${word}`)
//         } else { 
//                 console.log(`Nie ma literki "y"`)
//         }
// }
// letterY('Volleyball')

//D//
// przyjmuje liczbę jako parametr i wyświetla wynik mnożenia jej razy cyfry pomniejszone o 1 aż do 1ego, np.
// countResult(4) // 4 * 3 * 2 * 1 = 24
// Przykładowy wynik
// 24

// function multipleNumber (num) {
//         for ( i = num - 1; i> 0; i--) {
//                 num *= i
//         }
//         let summary = num + num * i

//         console.log(summary)
// }

// multipleNumber(4)

//E//

// 5.e e) Przyjmuje tablicę jako jeden parametr i string "number" lub "string" jako drugi parametr, w zależności od drugiego parametru niech funkcja
// dodaje do siebie elementu number lub string do siebie tworząc sumę lub jeden długi string, jeśli drugi parametr nie będzie sie zgadzał z "number"
// lub "string" to niech pokaże odpowiedni komunikat "Drugi parametr jest nieprawidłowy!", dodaj jeszcze zabezpieczenie jeśli tablica będzie pusta 


// const arrNames = ["Krzyś", "Agata", "Radosław"];
// const arrNum = [2, 3, 4, 5];
// const nullTable = [];

// function showIt(num, string) {
//   if (num.length == 0) {
//     console.log("Pusta tablica"); // Jeżeli arr (parametr pierwszy) jest zerem to pisz "pusta tablica"
//   } else {
//     if (typeof string === "string") { // jezeli drugi parametr jest type string to dodaj "nic" do parametru pierwszego.
//       console.log(num.join(""));
//     } else if (typeof string === "number") { // jezeli jednak jest numerem to dla kazdego numeru w tej tablicy
//       let sum = 0;
//       for (i = 0; i < num.length; i++) {
//         sum += num[i];
//       }
//       console.log(`Suma elementów tablicy to ${sum}`);
//     } else {
//       console.log(`Drugi parametr jest nieprawidłowy`);
//     }
//   }
// }
// showIt(arrNum, 'k');

//F//
/*przyjmuje jako parametr tablicę obiektów. W każdym obiekcie powinno znajdować się: name, lastName, hasCar, hasDrivingLicence. Niech będzie
to tablica z 4 osobami. Stwórz funkcję które przyjmie taką tablicę jako parametr i sprawdzi nam kto ma prawo jazdy i samochód i kto może Cię
zabrać do domu z imprezy, niech również wyświetli odpowiedni komunikat jeśli ktoś ma prawko ale nie ma auta lub nie ma ani jednego ani drugiego, */

// const drivers = [
//         {
//           firstName: "Kamil",
//           surname: "Kowalski",
//           hasCar: true,
//           hasDrivingLicence: true,
//         },
//         {
//           firstName: "Stanisław",
//           surname: "Nowak",
//           hasCar: true,
//           hasDrivingLicence: false,
//         },
//         {
//           firstName: "Janusz",
//           surname: "Maj",
//           hasCar: false,
//           hasDrivingLicence: false,
//         },
//         {
//           firstName: "Karolina",
//           surname: "Dzwon",
//           hasCar: false,
//           hasDrivingLicence: true,
//         },
//       ];


//       function whoCanPickUpDrunkKamilToHome(driversList) {
//         for (let i = 0; i < drivers.length; i++) {
//           const person = drivers[i];
//           if (person.hasCar == true && person.hasDrivingLicence == true) {
//             console.log(
//               `Dzisiaj wozi Cię: ${person.firstName} ${person.surname}`
//             );
//           } else if (person.hasCar == false && person.hasDrivingLicence == true) {
//             console.log(
//               `Dziś ${person.firstName} ${person.surname} może Cie wozić, tylko daj kluczki od samochodu`
//             );
//           } else if (person.hasCar == true && person.hasDrivingLicence == false) {
//             console.log(
//               `Czy leci z nami pilot? ${person.firstName} ${person.surname}, nie ma prawka <smiech>`
//             );
//           } else {
//             console.log(
//               `Najbardziej nieporządana osoba na imprezie ${person.firstName} ${person.surname}, czyli abstynent bez prawa jazdy i samochodu <smuteczek>`
//             );
//           }
//         }
//       }
//       whoCanPickUpDrunkKamilToHome(drivers);

//G//

/*przyjmuje jako parametr tablice i nowy element do tablicy. Funkcja ta powinna przeliterować tablice sprawdzając czy już taki element w niej jest
jeśli go nie ma to dodać do tablicy, a jak jest to wyświetlić odpowiedni komunikat, */

const BrandNames = ["Apple", "Lenovo", "Dell", "Asus"];

function newBrand(arr, brand) {
  show = false;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == brand) {
        show = true;
    } 
}
    if (show == false) {
    arr.push(brand);
    console.log(`Tablica ${arr}, została powiększona o ${brand}`);
  } else {
    console.log(`Podany element ${brand}, znajduje się już w tablicy ${arr}`);
  }
}

newBrand(BrandNames, "Apple");
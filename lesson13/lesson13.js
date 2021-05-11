
// ZADANIE 1
// ==  A ==

//1,2,3.
//a)

const car = {
    brand: "Mercedes",
    model: "CLS",
    yearOfProduction: 2013,
  };
  
  const  car = { brand, model, yearOfProduction };
  
  function myFunction1(carBrand, model, yearOfProd) {
    return `Marka pojazdu: ${car}, Model: ${model}, Rok podukcji: ${yearOfProd}`
  }
  
  const car1 = myFunction2(brand, model, yearOfProduction);
  console.log("car1", car1);
  
//   //b1)
  
//   function carFunc2(obj) {
//     const { brand, model, yearOfProduction } = obj; // Destrukturyzacja w obiekcie
//     return `Brand ${brand}, Model ${model}, year ${yearOfProduction}`;
//   }
  
//   const car2 = carFunc2(car);
//   console.log("car2", car2);
  
//   //b2)
  
//   function carFunc3({ brand, model, yearOfProduction }) {
//     return `Brand ${brand}, Model ${model}, year ${yearOfProduction}`;
//   }
//   const car3 = carFunc3(car);
//   console.log("car3", car3);
  
//   //4.
  
//   let x = 5;
//   console.log(
//     `Używając ++ przed zmienna wartość zostaje zmienione w tej samej linijce kodu ++x = ${++x} , x++ = ${x++} ,  obie wartośći bedą takie same`
//   );
//   console.log(
//     `natomiast ++ po zmiennej doda wartość w nastepnej linijce ${x} ${x++}`,
//     x
//   );
  
//   //5.
  
//   function kosz() {
//     const aktualnyWynik = {
//       stan: 0,
//     };
//     function rzutZaDwaPkt() {
//       aktualnyWynik.stan += 2;
//     }
//     function rzutZaTrzyPkt() {
//       aktualnyWynik.stan += 3;
//     }
  
//     return {
//       aktualnyWynik,
//       rzutZaDwaPkt,
//       rzutZaTrzyPkt,
//     };
//   }
  
//   const basket = kosz();
//   basket.rzutZaDwaPkt();
//   basket.rzutZaDwaPkt();
//   basket.rzutZaTrzyPkt();
//   console.log(basket.aktualnyWynik);
  
//   //6.
  
//   const pralka = {
//     nazwa: "Lg",
//     iloscFunkcji: 10,
//     informacje() {
//       return `Jest to pralka marki ${pralka.nazwa} posiadająca ${pralka.iloscFunkcji} funkcji`;
//     },
//   };
  
//   console.log(pralka.informacje());
  
//   //7.
  
//   // Różnica pomiedzy kopią a referencją.
//   // Przekazywanie prze kopie polega na tym że przekazywana jest zawartość danego pojemnika na dane (typy proste: string, bolean, number)
//   // Przekazywanie prze referencje polega na przekazaniu adresu komórki w pamieci ram(wskaźnika) (typy złożone: tablicze, obiekty)
  
//   let a = 10;
//   let b = a;
//   a += 15;
//   console.log("a = ", a);
//   console.log("b = ", b);
//   // W sytuacji powyżej dochodzi do przekazania przez kopię, w linijce 93 powstaje zmnienna b której wartość jest równa zminnej a. Jednak zmiana wartości zmiennej a w następnej linijce nie wpłynie na zawartość zmiennej b.
  
//   let c = [10];
//   let d = c;
//   c[0] += 15;
//   console.log("c = ", c);
//   console.log("d = ", d);
//   // Tu natiomast dochodzi do przekazanie przez referencje, w linijce 102 dochodzi do skopiowania adresu komórki. W zwiazku z czym obie zmienne wskazują tą samą przestrzeń w pamięci ram, tym samym zawierają tą samą wartość.
  
//   let e = [10];
//   let f = e[0];
//   e[0] += 15;
//   console.log("e = ", e);
//   console.log("f = ", f);
//   // W ostatnim przykładzie odnoszę się do syruacji w której typ prosty zostaje wyłuskany z typu złożonego, jak widać w takiej sytuacji również zostaje przekazany przez kopie.
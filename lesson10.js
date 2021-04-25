/* Ad. 1 */
// a)

function sum(a, b, c) {
    return a + b + c
};

// b)
function triangle(a, h) {
    x = (a * h) /2
    return 'Pole trójkąta wynosi '+ x + ' podstawa ' + a + ' wysokość ' + h
};


// c)
function drivingLicense(driverAge, passedDrivingLicense) {
    yearsFromPassed = driverAge - passedDrivingLicense
    return 'Kierowca ma prawo jazdy od ' + yearsFromPassed + ' lat'
};

// d)

function fuel(fuelUsage, distance) {
    fuelAssumtion = fuelUsage * (distance/100)
    return 'By przejechać samochodem '+ distance + '  potrzebujesz ' + fuelAssumtion + ' litrów paliwa'
};

//e

function womenInformation(name, age, numOfChildrens) {
    return name + ' ma ' + age + ' lata i ' + numOfChildrens + ' dzieci'}

/* Ad. 2 */
// a)

const tab = ['jeden', 'dwa', 'trzy'];

function getTab(tab) {
  return tab;
}

// b)

const tab2 = [ 12, 14, 15 ];

function getTab2(tab2) {
    return tab2[1];
}

// c)

const carList = ['wheels', 'tires', 'hub', 'gearbox'];

function showThird(carList) {
    return "Tablica ta ma " + carList.lenght + ' elementów, a trzecim elementem jest ' + carList[2]
}

// d)
let emptyTab = [];

function addToEmptyTab(newElement) {
    addToEmptyTab.push(newElement)
    return emptyTab
}

// e) zwracającą imię osoby przekazanej w obiekcie(powinien zawierać imię, nazwisko i wiek) do funkcji,

let Person = {
    name: "Jan",
    secondName: "Kowal",
    age: 25,
    height: 200,
}

function showPresonName(showInfo) {
    return showInfo.name
}
// f) zwracającą stringa 'imię(tu zmienna) i nazwisko(tu zmienna) ma x(tu zmienna) lat i x(tu zmienna) cm wzrostu'

function showPersonInformation(showInfo) {
    return "Osoba ma na imię " + showInfo.name + showInfo.secondName + " ma " + showInfo.age + " i " + showInfo.height + " wzrostu."
}

// g) przyjmującą dwa parametry gdzie jeden to obiekt, a drugi to wiek. Funkcja powinna zwracać wiek z 
// obiektu ale zmieniony na ten z naszego drugiego parametru,

function ageChange(showInfo, age) {
    showInfo.age = age
    return showInfo.age
}

/* AD.3 */
//    a) która przyjmuje wiek osoby i informacje czy ma prawo jazdy, jeśli dana osoba
//      ma poniżej 18 lat to powinno wyświetlić, że 'Nie ma prawa jazdy'. Jak ma powyżej
//      18stu lat i nie ma prawka to też ma wyświetlić, ze 'Nie ma prawa jazdy'. A jak
//      ma powyżej 18stu lat i prawo jazdy to niech wyświetli, że "Możesz śmiało jeździć"

function drivingLicenseAge(age, drivingLicense) {
    if (age >= 18 && drivingLicense == true) {
        return 'Może jeździć'
    } else if (age >= 18 && drivingLicense == false) {
        return 'No... Pora zrobić prawko'
    } else {
        return 'Nie masz wystarczającego wieku by móc mieć prawko'
    }
}

//    b) przyjmuje jako parametr string, jeśli string jest równy 'Kup', niech wyświetli
//      'Widzę, że zrobić zakupy', a jak string jest równy 'Sprzedaj' niech wyświetli
//      'Możesz tutaj swobodnie sprzedawać', a jeśli nie będzie ani tym ani tym to niech
//      pokaże 'Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj'

function buyOrSell (decision){
    if (decision == "Kup") {
        return "Widzę, że robisz zakupy"
    } else if (decision == "Sprzedaj") {
        return "Dobrze sprzedajesz! Będzie kasa na bezyne"
    } else {
        return "Nie wybrałeś żadnej z dostępnych opcji - wpisz kup lub sprzedaj"
    }
}


//    c) przyjmuje liczbę jak argument i zwraca string z informacja 'Liczba jest dodatnia',
//      'Liczba jest ujemna' lub 'Liczba jest równa 0'

function checkNumber(number) {
    if (number > 0) {
        return "Liczba jest dodatnia"
    } else if ( number < 0) {
        return "Liczba jest ujemna"
    } else {
        return "Liczba jest równa 0"
    }
}



//    d) przyjmującą liczbę jako argument i jeśli liczba jest podzielna przez 3 to niech
//      pokaże 'Fizz', jak podzielna jest przez 5 to 'Buzz', a jak przez 3 i 5 to 'FizzBuzz',

function moduloFunction(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        return "FizzBuzz"
    } else if ( number % 3 == 0) {
        return "Fizz"
    } else if ( number % 5 == 0) {
        return "Buzz"
    } else {
        return "-"
    }
}


//    e) napisz funkcję, która wyświetla czy osoba może obejrzeć film dla osób 15+, funkcja
//      powinna przyjąć dwa argumenty, wiek danej osoby i to czy ma zgodę rodziców, jeśli
//      ma powyżej 15 lat to może oglądać, jak ma poniżej ale ma zgodę rodziców też może
//      oglądać, a jak ma poniżej i nie ma zgody to nie może, wyświetli odpowiednie komunikaty,


function movieTime (youngBloodAge, consent) {
    if (youngBloodAge >= 15) {
        return "Możesz oglądać Straszny Film"
    } else if (youngBloodAge <15 && consent == true) {
        return "Rodzice pozwolili, więc możesz ogądać"
    } else {
        return "Nie możesz oglądać filmu"
    }
}

//    W tych funkcjach napisz warunki używając ternary operatora!!
//    f) zwracającą 'Tak' jeśli jak argument podamy true i 'Nie' jeśli podamy false,

function decision2 (arg) {
    return (arg ? "TAK" : "NIE")
}

//    g) zwracającą informację czy podana jako argument liczba jest parzysta czy nie,

function evenOrNot (number) {
    return ((number %  2 == 0) ? "Parzysta" : "Nieparzysta")
}

// a) która przyjmuje obiekt car(model, marka, rok produkcji, isCabrio) i jeśli rok
// produkcji jest większy niż aktualny rok to informacja, ze auta jeszcze nie wyprodukowano,
// jak będzie rok poniżej aktualnego to wyświetlamy w zdaniu ładnie informacje o
// aucie + informacje czy jest Cabrio czy nie jest,

let carType = {
    company: "Volvo",
    model: "S60",
    yearOfProduction: 2009,
    isCabrio: false,
}

function CarInfo(element) {
    if (element.yearOfProduction > 2021) {
        return "Auto nie zostało wyprodukowane"
    } else {
        return "Prezentowany samochód to " + element.company + element.model + ". Wyprodukowany w " + element.yearOfProduction + "roku. Model ten " + (element.isCabrio? " jest kabrioletem" : " nie jest kabrioletem")
    }
}

// b) która przyjmuje tablicę jako parametr z dowolna liczbą elementów, jeśli tablica
// jest pusta to zwracamy string pusta tablica, a jak nie to mamy zwrócić stringa
// 'tablica ma x elementów',

let thing1 = ['one', 'two', 'three', 'four']
let thing2 = []

function checkThing(thing) {
    if (thing.length == 0) {
        return "Pusta tablica"
    } else {
        return "Tablica ma " + thing.length +  "elementów"
    }
}

// c) przyjmuje dwa parametry, oba sa obiektami, jeden to osoba (imię, nazwisko, wiek, czyLubiCzytaćKsiążke, maTV)
// a drugi to książka (tytuł, rodzaj, ilość stron) i funkcja ta powinna zwrócić stringa
// odpowiednio, jeśli osoba lubi czytać książkę to niech jej zaproponuje książkę z
// obiektu: 'Cześć x(imie), polecam Ci przeczytać x(nazwa książki) książkę, ma tylko
// (strony książki) stron', a jeśli nie lubi czytać, ale ma tv to niech zwróci
// żeby 'Poszedł oglądać tv ' lub po prostu jak nie ma 'Nie wiem co Ci zaproponować'

let Person2 = {
    name: "Karol",
    surname: "Kowalik",
    age: 32,
    bookReader: true,
    TV: false,
    
}

let BookList = {
    title: "American Story",
    bookType: "Fantasy",
    pages: 321,

}

function decisionTree(person, book) {
    if (person.bookReader == true) {
        return person.name + " polecam Ci ksiażke, o tytule " + book.title + ". Ma tylko" + book.pages + " stron."
    } else if (!person.bookReader == true && person.TV == true) {
        return person.name + " skoro nie lublisz czytać możesz sobie włączyć telewizor"
    } else {
        return person.name + person.surname + " kup sobie TV, bo nie mam co Ci zaproponować!"
    }
} 
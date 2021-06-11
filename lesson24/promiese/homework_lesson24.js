// Zadania oddzielne:

// Co oznacza, że kod może być asynchroniczny?
// Asynchroniczny kod wykonuje się od początku wczytywania aplikacji. Lecz zostaje zakończony dopiero gdy "spłyną" wszystkie potrzebne dane, np z baz danych lub zostaną wpisane przez użytkownika.

// Pobierz tablicę postaci z powyższego endpointa i wyświetl ją w consoli za pomocą Promise
// Dodaj zabezpieczenie do powyższego podpunktu tak aby w przypadku błędu wyświetlić w konsoli napis
// "Ups coś poszło nie tak!", przetestuj to dodając dowolne litery do enpointy aby był nieprawidłowy i sprawdź
// czy napis się wyświetli,

fetch('https://rickandmortyapi.com/api/character')
    .then(api => api.json())
    .then(data => {
        data.results
                    .forEach(({ name }) => {
                        console.log(name)
                     })
    })
    .catch(error => {
        console.log('Ups, cos poszło nie tak')
    })

// Zrób to samo co w punkcie 2 ale za pomocą async/await

const character = async () => {
        const data = await fetch('https://rickandmortyapi.com/api/character')
        const response = await data.json()
        console.log(response.results.forEach(({ name }) => {
            console.log(name)
        }))
    }
    character()
        .catch(api => console.log('UPS, cos poszlo nie tak'))

// Znajdź na stronie The Rick and Morty API jak pobrać pojedyńczą postać i pobierz jedną postać w dowolny sposób,

const postacByID = async (index) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${index}`)
    const response = await data.json()
    console.log(response)
}
pobierzPostacByID(25)

// Zadanie projekt:

// Wersja podstawowa:
// a) Stwórz stronę index.html, do której dołączysz plik javascriptowy. W tym pliku pobierz jeszcze raz tablicę postaci
// za pomocą async await,
// b) Z pobranej tablicy stwórz nową tablicę zawierającą pierwsze 10 postaci za pomocą filter lub splice,
// c) Za pomocą flexa, dodaj na górze strony tytuł "Lista Rick and Morty"
// d) Pod tytułem dodaj opis który będzie zawierał informację "Wszystkich dostępnych postaci jest X"(tutaj gdzie X wyswietl
// liczbe wszystkich dostepnych postaci)
// e) Na stronie wyświetl imie przynajmniej jednej postaci z pobranej tablicy,

// Dodatkowe funkcjonalności dla chętnych:
// f) Wyświetl w formie listy 10 pierwszych postaci tak aby wyświetlić imie postaci, zdjecie i typ postaci w formie
// opisu czyli musicie uzyć z obiektu postaci: name, image i type.
// g) Wyświetl pod opisem a nad listą dwa przyciski poprzednia i następna, które będą wyświetlały kolejne 10 postaci
// z tablicy lub poprzednie 10, (można to zrobić obcinając tablicę lub używając nowych endpointów z dokumentacji
// pod które mozna podstawiac zmienne i same pobiorą nam dowolną stronę - fetch(<https://rickandmortyapi.com/api/character/?page=1))> WAŻNE! Jeśli endpoint zwraca więcej niz 10 postaci to mozecie wyswietlic ich wiecej!
// h) Wyświetl aktualnie na której stronie jesteśmy i ile jest maksymalnie stron w formie string nad przyciskami
// "Aktualna strona to X na X"
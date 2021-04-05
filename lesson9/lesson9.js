// Stwórz zmienną:
// a) typu string o nazwie name i wartości 'Karol',
	const name = "Karol"

// b) typu number o nazwie age i wartości 40,
	const age = 40

// c) typu boolean o nazwie isOpen i wartości true,
	const isOpen = true
// d) typu string o nazwie stringBoolean o wartości true
	const stringBoolean = "true"

// e) typu string o nazwie stringNumber o wartości 100

	const stringNumber = "100"

// Zrób consol.log dla wartości:
// a) 'Michał'
	console.log('Michał')
// b) 'Hello Ania'
	console.log('Hello Ania')
// c) 4
	console.log(4)
// d) false
	console.log(false)

// Zrób consol.log dla każdej zmiennej z zadania pierwszego,
	console.log(name)
	
	console.log(age)
	
	console.log(isOpen)
	
	console.log(stringBoolean)
	
	console.log(stringNumber)

// Napisz console.log, w którym wyświetlisz w konsoli:
// a) wynik dodawania 2 + 2,
	console.log(2 + 2)
// b) wynik dodania dwóch stringów 'Michał' + 'Kowalski',
	console.log('Michal ' + 'Kowalski')
// c) wynik równania 2 + 2 * 2,
	console.log(2 + 2 * 2)

// Dodawanie dwóch cyfr(dowolnie wybranych) do zmiennej, później zrób consol.log tej zmiennej,
// aby wyświetliło się w następujący sposób: 'wynik', 4 <--- (4 to przykładowa wartość zmiennej)
	function sum1() {
	console.log(2 + 3)}
	
// Stwórz zmienną typu let i zmień jej wartość dwa razy, a następnie zrób consol.log ostatecznej
// wartości tej zmiennej,
	let age2 = 14
	let age2 = 16
	let age2 = 18
	console.log(age2)

// Napisz funkcje, która:
// a) zwraca wynik dodawania 2 + 2 (bez parametrów)
	function add() {
		return 4}
// b) zwraca string 'Hello World!' (bez parametrów)
	function helloWorld() {
	return 'Hello World'}
// c) zwraca wartość true (bez parametrów)
	function value() {
	return true}
// d) zwraca reszte z dzielenie 6 przez 4,
	function modulo() {
	return 6 % 4}
// e) zwraca wynik równania 3 do potęgi 4tej,
	function power() {
	return 3 ** 4}
// f) zwraca 'Hello, ' + 'how are you?'
	function sayHelloAndHowAreU() {
	return 'Hello ' + 'how are you?'}
// g) zwraca wynik mnożenia 5 przez 60
	function multiple1() {
	return 5 * 60}
// h) zwraca wynik mnożenia 3 przez 3600,
	function multiple2() {
	return 3 * 3600}
// i) zwraca wynik działania 10 * 9 / 2
	function calculation() {
	return (10 * 9) / 2}
// j) zwraca wynik odejmowania 10 od 200stu,
	function minus() {
	return 200 - 10}

// Stwórz tablicę:
// a) 3 elementową z cyframi od 1 do 3
	const numbers = [1,2,3];
// b) 5 elementową z markami aut,
	const carList= ['Volkswagen', 'Audi', 'Mercedes', 'BMW', 'Skoda'];
// c) 3 elementową składającą się z wartości true, false i true
	const booleanList = [true, flase, true];
// d) pustą tablicę,
	const emptiti = [];
// e) składającą się z 5 dowolonych wartości z pomieszanymi typami,
	const allTypes2= ['Jola', 'summer69', 'true', false, 1990];
// f) zrób console.loga w którym z powyższej tablicy wyświetlasz wartość która jest w drugiej
// kolejności od początku,
	console.log(allTypes[1])
// g) *** Jaka właściwość i jak użyta słuzy do wyświetlenia długości tablicy? Stwórz własną tablicę
// z 3 elementami i wyświetl za pomocą consol.log jej długość,
	const list2 = ['paper', 'glue', 'scisors', 'book', 'pencil', 'rabber'];
	console.log(list2.length)
// h) *** Czy wiesz jak stworzyć pustę tablicę ? dodać do niej losową wartość i wyświetlić za pomocą
// console.loga już zmienioną tablicę?
	// 2 możliwości:
	// #1
	let empty = [];
	empty = [12, 123, 1234];
	console.log(empty)
	// #2
	let empty = [];
	empty.push("something more")
	console.log(empty)

// Stwórz obiekt:
// a) pusty obiekt,
	const emptyObj = {};
	
// b) obiekt o nazwe person zawierający klucz name i jego wartość 'Iza',
	const person = {name: 'Iza'};
// c) obiekt o nazwe personDetails zawierający dane o osobie jak name, lastName, age, drivingLicence
// gdzie ten ostatni powinien być booleanem, w zależności od tego czy osoba ma prawo jazdy czy nie
	const personDetails = {
	name: "Karolina",
	lastName: "Nowak",
	age: 32,
	drivingLicence: true,};
	
// d) z obiektu personDetails zrób consol.log samego wieku,
	console.log(personDetails.age) //or
	 personDetails.age
// e) zrób console.log całego obiektu,
	personDetails //or 
	console.log(personDetails)

// Napisz te same funkcje co wyżej ale dodając wartości jako argumenty podczas wywołania funkcji, czyli:
// a) dodającą dwie liczby,
	function sum3(firstNumber,secondNumber) {
	return firstNumber + secondNumber}
	sum3(4,4) 
	
// b) wyświetlającą podany podczas wywołania napis,
	function text(addYourText) {
	return addYourText}
	
	text("Haaaaallleeluja")
	
// c) zwracającą true lub false w zależności od podania tej wartości jako argument,
	function setArg(newArg){
	return newArg}
	
	setArg(true)
	
// d) zwracającą resztę z dzielenie dwóch liczb,
	function divide(firstNum, secondNum) {
	return firstNum / secondNum}
	
	divide(25,5)

// e) zwracającą liczbę dobraną do potęgi podanej jako drugi argument,
	function power2(firstNum, secondNum) {
	return firstNum ** secondNum}
	
	power2(12,2)
	
// f) zwracającej dwa złączone stringi podane w dwóch argumentach,
	function twoStrings(firstString, secondString) {
	return firstString + secondString }
	
	twoStrings("Siemanko! ", "Janko.")
	
// g) taką która jako argument przyjmuje ilość minut i zamienia je na sekundy,
	function setMinute(minute) {
	return minute * 60 + " sekund"}
	
	setMinute(2) // 120 sekund //
	
// h) taką która jako argument przyjmuje ilość godzin i zamienia je na sekundy,
	function setHours(hour) {
	return hour * 3600 + " sekund"}
	
	setHours(2)
	
// i) taką która liczy pole trójkatą czyli jako argumenty podajemy wysokość i szerokość trójkąta
// i w ciele funkcji korzystamy ze wzoru a * b * 0.5,
	function triagle(width,height) {
	return "Pole trójkąta wynosi " + width * height * 0.5}
	
	triagle(5,7)
	
// j) która zamienia lata na dni(przyjmując, że rok ma 365dni)
	function yearToDay(years) {
	return years * 365 + " dni"}
	
	yearToDay(4)

// k) która liczbe podaną w argumencie bierze do potęgi tej samej co liczbą podana jako argument,
	function toPower(value) {
	return value ** value}
	
	toPower(3)
	
// l) która obliczy dłuższy bok trójkąta posługując się tym wzorem (side1 + side2) - 1
// Pamiętaj aby można było podmienić cyfry podczas wywołania na dowolne,
	function longerSide (side1, side2) {
	return (side1 + side2 ) -1}
	
	longerSide (4,2)
	
// m) która po wpisaniu imienia jak argument podczas wywołania, wyświetli przywitanie,
// czyli, np. hello('Iza') -> 'Cześć, Iza!'
	function setHello(yourName) {
	return "Cześć, " + yourName + "!"}
	
	setHello("Kuba")
	

// n) która poda nam wiek osoby na podstawie podanego roku urodzenia w argumencie
// podczas wywołania,
	function yourDateOfBirth(yearOfBirth) {
	return 2021 - yearOfBirth + " lat"}
	
	yourDateOfBirth(1990)
	
// o) która przyjmuje dwa parametry, pierwszy to liczba rzutów za 2 punkty, a drugi to liczba rzutów
// za trzy punkty i na podstawie podanych parametrów obliczy ilość punktów zdobytych przez gracza,
	function shots(twoPoints, treePoints) {
	return (2* twoPoints) + (3* treePoints) + " punktów"}
	
	shots(12,4)
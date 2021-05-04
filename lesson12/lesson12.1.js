function licznik() {
    let ile = 0
    function zwieksz() {
        ile = ile + 1 // += 1 

    }

    function zmniejsz(){
        ile = ile - 1 // -= 1 
    } 

    function sekretneDodanie(){
        ile = ile + 10
    }

    function pokazLicznik() {
        console.log(ile)
    }

    sekretneDodanie()

    return {
        show: pokazLicznik,
        increase: zwieksz,
        decrease: zmniejsz
    }
    
}
const counter = licznik()
counter.show()
counter.decrease()
counter.decrease()
counter.show()
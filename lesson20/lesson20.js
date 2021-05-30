// const fn = function () {}
// console.log('funkcja')

// function f2() {
//     console.log('funkcja2')
// }

// const fn3 = () => {
//     console.log('funkcja 3')
// }

// fn()
// fn2()
// fn3()
// '1221'
// '122123'
// '112312311'

// function porbierzDosteptnoscProduktu (id) {
//     return 
// }

// porbierzDosteptnoscProduktu ('1221')
// porbierzDosteptnoscProduktu ('122123')
// porbierzDosteptnoscProduktu ('112312311')

// porbierzDosteptnoscProduktu('1221','122123','112312311')


// const skus = cart.carItems.reduce((acc, {porduct, sku}) => {
//     if (
//         rtg_location &&
//         porduct &&
//         (rtg_location.region !== '00M' ||
//             ((product.delivery_type === '0' || product.delivery_type === 'U') && rtg_location.region === '00M')) &&
//         product.category !== 'gift-card'
//     ) {
//         return acc!== '' ? `${acc}, ${sku}` : sku
//     }

//     return acc
// }, '')


const cart = {
    cartItems: [
        {
            sku: '123',
            product: {
                delivery_type: 'Z',
                category: 'laptopy',
            },
            quantity: 5
        },
        {
            sku: '232',
            product: {
                delivery_type: 'C',
                category: 'laptopy',
            },
            quantity: 1
        },
        {
            sku: '444',
            product: {
                delivery_type: 'Z',
                category: 'gift-cart'
            },
            quantity: 7
        }
    ]
}

const skus = cart.cartItems
    .map(product => product.sku)
    // ['123', '232', '444' ]
    .reduce((acc, next) => {
    return acc === '' ? next : `${acc} , ${next.sku}`
 }, '')

 console.log(skus)
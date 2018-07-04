var products = [
    { name: 'cucumber', type: 'vegettable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegettable' },
    { name: 'orange', type: 'fruit' },
]
let fillterProduct = []

for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        fillterProduct.push(products[i]);
    }
}
console.log(fillterProduct)
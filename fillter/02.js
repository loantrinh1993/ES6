var products = [
    { name: 'cucumber', type: 'vegettable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegettable' },
    { name: 'orange', type: 'fruit' },
]

var product = products.filter((value, index) => {
    if(value.type === "fruit")
    return true;
    return false;
})
console.log(product);
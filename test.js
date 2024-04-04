test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})
    test("One dollar should be 156.5 Yen", function(){
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(3.5)).toBe(547.75);
})

test("One euro should be 0.87 Pound", function(){
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(3.5)).toBe(3.045);




})
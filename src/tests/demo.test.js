test('Código para realizar pruebas',()=>{
   
    // 1. inicialización
    const message = 'with/without contrats';
    // 2. estimulo 
    const message2 = message.trim();
    // 3. Observar el comportamiento 
    expect( message ).toBe( message2);

})
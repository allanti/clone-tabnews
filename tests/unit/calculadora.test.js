const calculadora = require("../../models/calculadora.js");

test("somar 2 + 2 deve retornar 4", () =>{
    const resultado = calculadora.somar(2,2);
    expect(resultado).toBe(4);
});

test("se algum dos valores for uma string retorne a mensagem error", () =>{
    const resultado = calculadora.somar(2,"state");
    expect(resultado).toBe("error");
});

test("se for uma divisao por 0 retorna error", () =>{
    const resultado = calculadora.divisao(2,2);
    expect(resultado).toBe(1)
});

test("se for uma divisao por 0 retorna error", () =>{
    const resultado = calculadora.divisao(0,2);
    expect(resultado).toBe(0)
});

test("se algum dos valores for uma string retorne a mensagem error", () =>{
    const resultado = calculadora.divisao(2,"state");
    expect(resultado).toBe("error");
});

//Higer Order Function ou HOF recebe uma função como argumento e retorna uma função comoresultado

function somar({ x, y }) {
  return x + y;
}

function subtrair({ x, y }) {
  return x - y;
}

function aplicarOperacao({ numero1, numero2, operacao }) {
  return operacao({ x: numero1, y: numero2 });
}

console.log(aplicarOperacao({ numero1: 5, numero2: 3, operacao: somar }));
console.log(aplicarOperacao({ numero1: 5, numero2: 3, operacao: subtrair }));

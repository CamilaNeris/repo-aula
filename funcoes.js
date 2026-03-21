// Função de soma
function somar(num1, num2) {
  return num1 + num2;
}

// Função de subtração
function subtrair(num1, num2) {
  return num1 - num2;
}

// Função de multiplicação
function multiplicar(num1, num2) {
  return num1 * num2;
}

// Função de divisão
function dividir(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Divisão por zero não permitida!";
  }
}

// Função principal para interagir com o usuário
function calcular() {
  // Recebe os números do usuário
  const num1 = parseFloat(prompt("Digite o primeiro número:"));
  const num2 = parseFloat(prompt("Digite o segundo número:"));

  // Chama as funções para cada operação
  const soma = somar(num1, num2);
  const subtracao = subtrair(num1, num2);
  const multiplicacao = multiplicar(num1, num2);
  const divisao = dividir(num1, num2);

  // Exibe os resultados
  alert(`Resultados:
  Soma: ${soma}
  Subtração: ${subtracao}
  Multiplicação: ${multiplicacao}
  Divisão: ${divisao}`);
}

// Chama a função de cálculo
calcular();
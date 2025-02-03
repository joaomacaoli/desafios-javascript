// Desafio 1: Cálculo da variável SOMA
function desafio1() {
  let INDICE = 13,
    SOMA = 0,
    K = 0;
  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }
  console.log("Desafio 1 - SOMA:", SOMA); // Resultado esperado: 91
}

// Desafio 2: Verificar se um número pertence à sequência de Fibonacci
function desafio2(numero) {
  let a = 0,
    b = 1,
    temp;
  while (b < numero) {
    temp = a + b;
    a = b;
    b = temp;
  }
  console.log(
    `Desafio 2 - O número ${numero} ${
      b === numero ? "pertence" : "não pertence"
    } à sequência de Fibonacci.`
  );
}

// Desafio 3: Análise do faturamento diário
function desafio3(faturamento) {
  faturamento = faturamento.filter((valor) => valor > 0); // Ignorar dias sem faturamento
  let menor = Math.min(...faturamento);
  let maior = Math.max(...faturamento);
  let media = faturamento.reduce((a, b) => a + b, 0) / faturamento.length;
  let acimaMedia = faturamento.filter((valor) => valor > media).length;

  console.log("Desafio 3 - Menor faturamento:", menor);
  console.log("Desafio 3 - Maior faturamento:", maior);
  console.log("Desafio 3 - Dias acima da média:", acimaMedia);
}

// Desafio 4: Percentual de faturamento por estado
function desafio4() {
  const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };
  let total = Object.values(faturamentoEstados).reduce((a, b) => a + b, 0);

  for (let estado in faturamentoEstados) {
    let percentual = ((faturamentoEstados[estado] / total) * 100).toFixed(2);
    console.log(`Desafio 4 - ${estado}: ${percentual}%`);
  }
}

// Desafio 5: Inversão de string sem usar funções prontas
function desafio5(string) {
  let invertida = "";
  for (let i = string.length - 1; i >= 0; i--) {
    invertida += string[i];
  }
  console.log("Desafio 5 - String invertida:", invertida);
}

// Testes
console.log("Executando desafios...");
desafio1();
desafio2(21);
desafio3([1200, 800, 0, 500, 1800, 1000, 0, 2300, 1600]);
desafio4();
desafio5("Javascript");

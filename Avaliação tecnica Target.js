// 1
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K += 1;
  SOMA += K;
}

console.log("Variavel soma: " + SOMA);
console.log("")
//


// 2
function pertenceFibonacci(numero) {
    // Inicializando os primeiros números da sequência de Fibonacci
    let a = 0, b = 1;
  
    // Continuar gerando a sequência até `a` ser maior ou igual ao número informado
    while (a <= numero) {
      if (a === numero) {
        return `${numero} pertence à sequência de Fibonacci.`;
      }
      
      let temp = a;
      a = b;
      b = temp + b;
    }

    return `${numero} não pertence à sequência de Fibonacci.`;
  }
  
  // Exemplo de verificação
  const numero = 92;
  console.log(pertenceFibonacci(numero));
  console.log("")
 // 


// 3
// JSON com os dados de faturamento diário
const faturamentoMensal = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
  ];
  
  // Filtra apenas os dias com faturamento
  const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);
  
  // Calcula o menor valor de faturamento
  const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
  
  // Calcula o maior valor de faturamento
  const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));
  
  // Calcula a média
  const somaFaturamento = diasComFaturamento.reduce((total, dia) => total + dia.valor, 0);
  const mediaMensal = somaFaturamento / diasComFaturamento.length;
  
  // Número de dias superiores a media
  const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;
  
  // Resultados
  console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
  console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
  console.log(`Número de dias com faturamento superior à média mensal: ${diasAcimaDaMedia}`);
  console.log("")
  
 //


// 4
// Faturamento mensal detalhado por estado
const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  // Calcula o faturamento total
  const faturamentoTotal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
  
  // Calcula e exibe o percentual de cada estado
  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / faturamentoTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }  
  console.log("")
//


// 5
function inverterString(str) {
    let stringInvertida = "";
  
    // Percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }
  
    return stringInvertida;
  }
  
  // Definindo a string a ser invertida
  const stringOriginal = "Exemplo de string";
  const stringInvertida = inverterString(stringOriginal);
  
  console.log(`String Original: ${stringOriginal}`);
  console.log(`String Invertida: ${stringInvertida}`);
//  
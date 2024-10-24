const readline = require('readline'); // entrada node.js

const interfaceUsuario = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
});

const isFibonacci = (n) => {
    let [nuInicial, nuCurrent] = [0, 1];
    while (nuCurrent < n) {
        [nuInicial, nuCurrent] = [nuCurrent, nuInicial + nuCurrent];
    }
    return n === nuCurrent || n === 0;
};

interfaceUsuario.question("Informe um número: ", (input) => { // Exibe uma mensagem ao usuário
    const userInput = parseInt(input); // Converte uma string para um número inteiro

    if (isNaN(userInput)) { // Verifica se a entrada não é um número (usando isNaN, que retorna true se não for um número). Se for inválida, exibe a mensagem "Por favor, insira um número válido."
        console.log("Por favor, insira um número válido.");
    } else { // Se a entrada for um número válido, verifica se o número pertence à sequência de Fibonacci
        const message = isFibonacci(userInput)
            ? `O número ${userInput} pertence à sequência de Fibonacci.`
            : `O número ${userInput} NÃO pertence à sequência de Fibonacci.`;
        console.log(message);
    }

    interfaceUsuario.close();
});
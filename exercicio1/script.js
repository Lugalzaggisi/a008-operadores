const numeropar = prompt("insira um numero par")
console.log (numeropar % 2)
    if (numeropar % 2 !== 0) prompt("insira número par caramba!")
    else console.log (numeropar % 2)

// eu já preferi fazer direto um tipo de impedimento aos números ímpares usando "if" (mas não consegui fazer repetir).
// Números pares tem a natureza de terem resto 0 e ímpares resto 1. 
// Colocando a variavel tendo um resto diferente de 0 eu consigo criar um "impedimento" à inserção de números ímpares.
// Se eu inserir um número ímpar (resto diferente de 0) o programa pede para repetir o prompt com um número par.
// Se o número for par, será impresso o resto 0
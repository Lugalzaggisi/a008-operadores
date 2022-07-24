const a = prompt ("insira um número")
const b = prompt ("insira outro número")
let resultado = a>b 
console.log ("O primeiro numero é maior que segundo?",resultado)
resultado = a===b
console.log ("O primeiro numero é igual ao segundo?", resultado)
resultado = a%b === 0
console.log ("O primeiro numero é divisível pelo segundo?",resultado)
resultado = b%a ===0
console.log ("O segundo numero é divisível pelo primeiro?",resultado)
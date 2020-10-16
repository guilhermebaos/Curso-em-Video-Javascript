function soma(n1=0, n2=0) {     // Parâmetros opcionais
    return n1 + n2
}

console.log(soma(2, 5))         
console.log(soma(2))            // Se não tivessemos os parâmetros opcionais a soma dava NaN

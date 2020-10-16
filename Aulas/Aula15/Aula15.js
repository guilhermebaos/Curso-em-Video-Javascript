let num = [2, 5, 3, 6, 0]
num[4] = 12
num.push(34)
num.sort((a, b) => a-b)

console.log(`Num: ${num}, com ${num.length} comprimentos.\n`)

console.log('Elementos do array:\n')

for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} guarda o valor ${num[pos]}`)
}

console.log('')
// OU

for(let pos2 in num) {
    console.log(num[pos2])
}

console.log('')

console.log(`O valor 3 está na posição ${num.indexOf(3)}`)
console.log(`O valor 20 está na posição ${num.indexOf(20)}`)

/*
Esta forma de organizar o array ignora as letras?


Ordem numérica crescente

num.sort((a, b) => a-b)

console.log(num);


Ordem numérica decrescente

num.sort((a, b) => b-a)

console.log(num)


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

var idade = 16
var idade_legal = 18
var idade_beber = 21

if (idade < idade_legal) {
    console.log('Menor de idade, não pode beber!')
} else {
    if (idade < idade_beber) {
        console.log('Maior de idade, mas ainda não pode beber.')
    } else {
        console.log('Maior de idade e já pode beber!')
    }
}

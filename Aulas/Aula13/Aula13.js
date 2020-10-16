var c = 0

// Executa 5 vezes PORQUE c = 0
while (c < 5) {
    c++
    console.log(`Olá normal pela ${c}ª vez!`)
}

c = 0
do {
    c++
    console.log(`Olá diferente pela ${c}ª vez :)`)
} while (c < 5)

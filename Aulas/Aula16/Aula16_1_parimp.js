function parimp(n) {
    switch (n % 2) {
        case 0:
            return 'Par!'
            break

        case 1:
            return 'Ímpar!'
            break

        default:
            return 'Erro!'
            break
    }
}

let res = parimp(5)
console.log(res)

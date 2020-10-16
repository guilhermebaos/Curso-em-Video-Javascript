function contar() {
    let ini = document.getElementById('inp_ini')
    let fim = document.getElementById('inp_fim')
    let pas = document.getElementById('inp_pas')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        // alert('Insira todos os dados!')
        res.innerHTML = 'Dados insuficientes!'
    } else {
        res.innerHTML = 'Contando: <br>'
        
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Math.abs(Number(pas.value))

        if (p == 0) {
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        

        if (i < f) {
            // Contagem Crescente
            for(var c = i; c <= f-p; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contagem decrescente
            for(var c = i; c >= f+p; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `${c} \u{1F3C1}`
    }
}
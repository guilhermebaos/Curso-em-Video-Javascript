function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function contar() {
    var ini = document.getElementById('inp_ini').value
    var fim = document.getElementById('inp_fim').value
    var inc = document.getElementById('inp_inc').value

    if (ini == '' || fim == '' || inc == '') {
        alert('Por favor preencha todos os campos')
        return false
    } 

    ini = Number(ini)
    fim = Number(fim)
    inc = Math.abs(Number(inc))
    
    if (inc == 0) {
        alert('O incremento não pode ser 0!')
        return false
    }

    var div_resp = document.getElementById('resp')
    var contagem = document.createElement('p')
    contagem.setAttribute('id', 'contagem')

    div_resp.innerHTML = '<p>Contagem!</p>'
    
    if (ini <= fim) {
        for (var c = ini; c <= fim; c += inc) {
            if (c + inc <= fim) {
                contagem.innerHTML += `${round(c, 2)} → `
            } else {
                contagem.innerHTML += `${round(c, 2)} FIM!`
            }
        }    
    } else {
        for (var c = ini; c >= fim; c -= inc) {
            if (c - inc >= fim) {
                contagem.innerHTML += `${round(c, 2)} → `
            } else {
                contagem.innerHTML += `${round(c, 2)} FIM!`
            }
        }    
    }
    div_resp.appendChild(contagem)
}

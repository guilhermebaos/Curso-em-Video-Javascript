var sel = document.getElementById('valores')
var array_num = []


function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


function adicionar() {
    let num = document.getElementById('inp_num').value

    if (num.length == 0) {
        alert('Por favor escreva um número!')
    } else if (num > 1000) {
        alert('O número tem de ser menor que 1000!')
    } else if (num < 0) {
        alert('O número tem de ser maior que 0!')
    } else if (Number(num) == NaN) {
        alert('Escreva um número!')
    } else if (array_num.includes(Number(num))) {
        alert('Número já adicionado!')
    } else {
        array_num.push(Number(num))

        let option = document.createElement('option')
        option.label = `Valor ${num} adicionado!`

        sel.appendChild(option)
    }
}


function analisar() {
    if (array_num.length == 0) {
        alert('Escreva pelo menos um número')
        return false
    }
    let div_resp = document.getElementById('resp')
    let res = document.createElement('div')

    let valores = somar(array_num)
    soma = valores[0]
    media = valores[1]

    res.innerHTML = `<p>No total foram registados ${array_num.length} números!</p>`
    res.innerHTML += `<p>O maior valor é ${Math.max(...array_num)}</p>`
    res.innerHTML += `<p>O menor valor é ${Math.min(...array_num)}</p>`
    res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${round(media, 2)}</p>`

    div_resp.appendChild(res)
}


function somar(arr_nums) {
    let total = 0
    for(let pos in arr_nums) {
        total += arr_nums[pos]
    }

    let ave = total / arr_nums.length

    return [total, ave]
}

let res = document.querySelector('div#res')
let lista = document.querySelector('select#list_nums')
let num = document.querySelector('input#inp_num')

let valores = []


function isNum(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}


function inArray(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isNum(num.value) && !inArray(num.value, valores)) {
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `O número ${num.value} foi adicionado!`
        lista.appendChild(item)

        res.innerHTML = ''

    } else {
        alert('Valor inválido ou já na lista!')
    }

    num.value = ''
    num.focus()
}


function finalizar() {
    if(valores.length == 0) {
        alert('Adicione pelo menos um número!')
    } else {
        let tot = valores.length
        let maior = valores[0], menor = valores[0]
        let soma = 0, media = 0

        for(let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            } else if (valores[pos] < menor) {
                menor = valores[pos]
            }

            soma += valores[pos]
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Há ${tot} números registados!</p>`
        res.innerHTML += `<p>O maior número é ${maior}</p>`
        res.innerHTML += `<p>O menor número é ${menor}</p>`
        res.innerHTML += `<p>A soma dos números é ${soma}</p>`
        res.innerHTML += `<p>A média dos números é ${media}</p>`
    }
}

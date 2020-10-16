function tabuada() {
    var num = document.getElementById('inp_num').value
    var res = document.getElementById('resp')

    if (num == '') {
        alert('Insira um número!')
        return false
    }

    num = Number(num)
    if (num == NaN) {
        alert('Insira um número válido!')
        return false
    }

    res.innerHTML = ''
    for(var c = 1; c <= 10; c++) {
        res.innerHTML += `${num} x ${c} = ${num*c} <br>`
    }
}
function tabuada() {
    let num = document.getElementById('inp_num')
    let tab = document.getElementById('tabuada')

    if (num.value.length == 0) {
        alert('Por favor escreva um número!')
    } else {
        tab.innerHTML = ''

        num = Number(num.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `${num}x${c}`

            tab.appendChild(item)
            c++
        }
    }
}
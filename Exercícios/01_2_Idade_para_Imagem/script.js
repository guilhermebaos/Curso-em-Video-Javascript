function verificar() {
    var data_agr = new Date()
    var ano_agr = data_agr.getFullYear()
    var ano_nasc = Number(document.getElementById('str_ano').value)
    var div_resp = document.getElementById('resp')

    if (ano_nasc.length == 0 || ano_nasc > ano_agr) {
        alert('[ERRO] Por favor corrija a informação inserida!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano_agr - ano_nasc
        var gen = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            gen = 'um Homem'

            if (0 <= idade && idade <= 10) {
                img.setAttribute('src', 'homem_cria.jpg')
            } else if (idade <= 21) {
                img.setAttribute('src', 'homem_adol.jpg')
            } else if (idade <= 50) {
                img.setAttribute('src', 'homem_cres.jpg')
            } else {
                img.setAttribute('src', 'homem_velh.jpg')
            }
        } else if (sexo[1].checked) {
            gen = 'uma Mulher'

            if (0 <= idade && idade <= 10) {
                img.setAttribute('src', 'mulher_cria.jpg')
            } else if (idade <= 21) {
                img.setAttribute('src', 'mulher_adol.jpg')
            } else if (idade <= 50) {
                img.setAttribute('src', 'mulher_cres.jpg')
            } else {
                img.setAttribute('src', 'mulher_velh.jpg')
            }
        }

        div_resp.style.textAlign = 'center'
        div_resp.innerHTML = `Detetamos ${gen} com ${idade} anos.`
        div_resp.appendChild(img)
    }
}
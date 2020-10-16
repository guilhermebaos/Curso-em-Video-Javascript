function carregar() {
    var div_hora = document.getElementById('hora')
    var img_foto = document.getElementById('imagem')
    var data_agr = new Date()
    var hora_agr = data_agr.getHours()

    div_hora.innerHTML = `São ${hora_agr} horas.`

    if (0 <= hora_agr && hora_agr <= 12) {
        img_foto.src = 'manha.jpg'
        document.body.style.background = '#f8e3c4'
    } else if (12 < hora_agr && hora_agr < 19) {
        img_foto.src = 'tarde.jpg'
        document.body.style.background = '#e46c00'
    } else if (19 <= hora_ag && hora_agrr <= 24) {
        img_foto.src = 'noite.jpg'
        document.body.style.background = '#4b4128'
    }
}

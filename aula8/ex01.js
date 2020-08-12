function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    // var hora = 22;
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = 'img/manha.png'
        document.body.style.background = 'rgba(243, 114, 28, 0.685)'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde!
        img.src = 'img/tarde.png'
        document.body.style.background = 'rgba(57, 151, 81, 0.637)'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = 'rgba(153, 153, 153, 0.589)'
    }
}

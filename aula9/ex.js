function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    let res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e ente novamente! >_<')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                // Bebe
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 12) {
                // Criança
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 40){
                // Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else if (idade < 60) {
                // Senhor
                img.setAttribute('src', 'senhor-m.png')
            } else if (idade < 150) {
                // Velho
                img.setAttribute('src', 'velho-m.png')
            } else {
                // Pokemon
                img.setAttribute('src', 'pokemon.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                // Bebe
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 12) {
                // Criança
                img.setAttribute('src', 'crianca-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 40){
                // Adulto
                img.setAttribute('src', 'adulto-f.png')
            } else if (idade < 60) {
                // Senhor
                img.setAttribute('src', 'senhor-f.png')
            } else if (idade < 150) {
                // Velho
                img.setAttribute('src', 'velho-f.png')
            } else {
                // Pokemon
                img.setAttribute('src', 'pokemon.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 | Number(fano.value) > anoAtual) {
        window.alert('[ERRO] Verifique o dado e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-m.png')
                // jovem
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }   
}
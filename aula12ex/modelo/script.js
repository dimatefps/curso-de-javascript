function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()    
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas.`
    hora = 13
    if (hora >= 0 && hora < 12){
        // bom dia
        img.src = '../ex014/fotomanha.png'
        document.body.style.background = '#F1F1F9'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = '../ex014/fototarde.png'
        document.body.style.background = '#B9A2B9'
    } else {
        // boa noite
        img.src = '../ex014/fotonoite.png'
        document.body.style.background = '#09181D'
    }
}

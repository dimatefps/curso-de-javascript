function calcular(){
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    
    var res = document.getElementById('res')
    
    
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0){
        res.innerHTML = 'Impossível contar!'   
    } else {
    
    if (passo == 0){
        window.alert('Passo inválido! Considerando passo 1')
        passo = 1
    }

    var texto = "Contando: \n"

    if (fim < inicio){
        for (var i = Number(inicio); i >= Number(fim); i -= Math.abs(Number(passo))){
            texto += `${i} \u{1f449}`
        }
    } else {
        for (var i = Number(inicio); i <= Number(fim); i += Math.abs(Number(passo))){
            texto += `${i} \u{1f449}`
        }
    }
    texto += '\u{1f3c1}'

    res.innerHTML = ''
    res.innerHTML = texto
}
}
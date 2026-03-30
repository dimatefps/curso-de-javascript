function gerarTabuada(){
    var num = document.getElementById('numero')
    var select = document.getElementById('tabuada')
    
    if (num.value.length == 0){
        window.alert('Por favor, digite um número.')
    } else {
        select.innerHTML = ''
        for (var i = 0; i <= 10; i++){
            let opt = document.createElement('option')
            opt.value = `${Number(num.value)} x ${i} = ${Number(num.value)*i}`
            opt.innerHTML = `${Number(num.value)} x ${i} = ${Number(num.value)*i}`

            select.appendChild(opt)

    }
        }


}
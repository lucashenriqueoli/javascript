function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //kid
                img.setAttribute('src', 'imagens/bebe.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemh.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultoh.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosoh.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //kid
                img.setAttribute('src', 'imagens/bebe.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemm.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultom.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosom.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
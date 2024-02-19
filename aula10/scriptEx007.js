function somar() {
    var cx1 = document.querySelector('input#text1')
    var cx2 = document.querySelector('input#text2')
    var res = document.querySelector('div#res')
    
    var n1 = Number(cx1.value)
    var n2 = Number(cx2.value)

    var s = n1 + n2

    res.innerHTML = `A soma entre ${n1} + ${n2} é ${s}`

}
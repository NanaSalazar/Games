function verificar() {

    let check1 = document.getElementsByName('check1')
    let check2 = document.getElementsByName('check2')
    let check3 = document.getElementsByName('check3')
    let res = document.querySelector('div#res')

    if (check1[1].checked){
        res.innerHTML = 'Compre um PC!'
        document.body.style.background = '#27408B'
    } else if (check1[0].checked) {
        if (check2[1].checked){
            res.innerHTML = 'Compre um PS3!'
            document.body.style.background = '#000'
        } else if (check2[0].checked) {
            if (check3[0].checked){
                res.innerHTML = 'Compre um Wii!'
                document.body.style.background = '#CDCDC1'
            } else if (check3[1].checked) {
                res.innerHTML = 'Compre um XBox!'
                document.body.style.background = '#00CD66'
            }
        }
    }
}
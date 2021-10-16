/* CARROSSEL DE IMAGENS - PASSAR AS IMAGENS USANDO O SCROLL */
document.querySelector('#items').addEventListener('wheel', event => {
    if(event.deltaY > 0) {
        event.target.scrollBy(300, 0)
    } else {
        event.target.scrollBy(-300, 0)
    }
})
/* PASSAGEM AUTOMATICA DE IMAGENS DO CARROSSEL */

function carrosselauto() {
    let counter = 1;
    setInterval(function() {
        document.querySelector("#items").scrollBy(300, 0)
        counter++;
        if(counter > 8){
            counter = 1;
            document.querySelector("#items").scrollTo(0, 0)
        }
    }, 4000);
}

carrosselauto()



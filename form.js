const form = document.getElementById('form');
const numeroA = document.getElementById('numeroA');
const numeroB = document.getElementById('numeroB');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    ckeckInputs()
})

function ckeckInputs(){
    const numAValue = numeroA.value 
    const numBValue = numeroB.value 

    if (numAValue > numBValue) {
        alert ('O número de B é menor do que o de A')
    } else {
        alert ('O número de B é maior do que o de A')
    } 

}

let figura = document.getElementById('figura')
let caixa1 = document.getElementById('textR')
let dimmer1 = document.getElementById('red')
dimmer1.addEventListener('input',()=>{
    caixa1.value = dimmer1.value
    let cor=`rgb(${dimmer1.value}, ${dimmer2.value}, ${dimmer3.value})`
    figura.style.backgroundColor= cor

})

let caixa2 = document.getElementById('textG')
let dimmer2 = document.getElementById('green')
dimmer2.addEventListener('input',()=>{
    caixa2.value = dimmer2.value
    let cor=`rgb(${dimmer1.value}, ${dimmer2.value}, ${dimmer3.value})`
    figura.style.backgroundColor= cor
   

})

let caixa3 = document.getElementById('textB')
let dimmer3 = document.getElementById('blue')
dimmer3.addEventListener('input',()=>{
    caixa3.value = dimmer3.value
    let cor=`rgb(${dimmer1.value}, ${dimmer2.value}, ${dimmer3.value})`
    figura.style.backgroundColor= cor
    

})









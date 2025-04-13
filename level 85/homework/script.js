let count=0

let count2=document.getElementById('div2')
let minus=document.getElementById('minus')
let reset=document.getElementById('reset')
let plus=document.getElementById('plus')

function minusCount(){
    count -= 1
    count2.textContent=count
}

function resetCount(){
    count=0
    count2.textContent=count
}

function plusCount(){
    count += 1
    count2.textContent=count
}
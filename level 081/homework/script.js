function checkboxer(){
    let first=document.getElementById('input1').checked
    let second=document.getElementById('input2').checked
    let third=document.getElementById('h2')

    let fourth =first && second
    third.textContent+=fourth

}
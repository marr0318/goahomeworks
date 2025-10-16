const name1 = document.querySelector('h3')
const name2 = document.querySelector('form')
const username=form.username
const password=form.password
const button=form.querySelector('button')

const user1=localStorage.getItem('username')
const passw=localStorage.getItem('password')

if (user1 !== " " || pass !== " "){
    name2.style.display="none"
    name1.textContent('Hi ')

}

console.dir(header)

function Handleform(e){
    e.preventDefault()
    const userm = username.value
    const passw = password.value

    localStorage.setItem('username', userm)
    localStorage.setItem('password', passw)

    form.style.display = 'none'
    header.textContent("hi ")

}

form.addEventListener('submit', Handleform)

const login = document.getElementById('login');
const modal = document.getElementById('modal-container');
const botonCerrarModal = document.getElementById('close');
const company = document.getElementById('company')
const organization = document.getElementById('organization')

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message');
const emailError = document.getElementById('error-message')
const helpMessage = document.getElementById('help-message')

login.onclick = (() => {
    modal.classList.toggle('display')
})

botonCerrarModal.onclick = (() => {
    modal.classList.toggle('display')
})

company.onclick = (()=>{
    login.innerHTML = "Hola, empresa"
    localStorage.setItem('login','empresa')
    modal.classList.toggle('display')
})

organization.onclick = (()=>{
    login.innerHTML = "Hola, organización"
    localStorage.setItem('login','organización')
    modal.classList.toggle('display')
})

nameInput.addEventListener('keyup',(e)=>{
    if(isNaN(e.key)){
        nameInput.value += e.key
    }
})

emailInput.addEventListener('keydown',()=>{
    const email = emailInput.value;
    if(!validateEmail(email))
        emailError.innerHTML = "Hay algo mal con el correo"
    else emailError.innerHTML = ""
})

messageInput.addEventListener('keyup',(e)=>{
    helpMessage.innerHTML = `${e.target.value.length}/255`
    if(e.target.value.length>=255)
        helpMessage.style.color = 'red'
    else helpMessage.style.color = 'gray'
})

window.onload = function () {
    if(localStorage.getItem('login')!= null)
        login.innerHTML = `Hola, ${localStorage.getItem('login')}`
}

function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
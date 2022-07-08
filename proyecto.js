const login = document.getElementById('login');
const modal = document.getElementById('modal-container');
const botonCerrarModal = document.getElementById('close');
const company = document.getElementById('company')
const organization = document.getElementById('organization')

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


window.onload = function () {
    if(localStorage.getItem('login')!= null)
        login.innerHTML = `Hola, ${localStorage.getItem('login')}`
}
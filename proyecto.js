const login = document.getElementsByClassName('login');
const modal = document.getElementsByClassName('modalcontainer');
const botonCerrarModal = document.getElementsByClassName('cerrar');

login[0].onclick = (() => {
    modal[0].style.visibility = 'visible'
})

botonCerrarModal[0].onclick = (() => {
    modal[0].style.visibility = 'hidden'
})

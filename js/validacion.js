var nombre = document.getElementById('nombre')
var mail = document.getElementById('mail')

function validarDatos() {
	nombre.addEventListener('input', validarNombre)
	mail.addEventListener('input', validarCorreo)
	validarNombre()
	validarCorreo()
}

function validarNombre() {
	if (nombre.value=='') {
		nombre.style.backgroundColor= '#FA898B';
		nombre.setCustomValidity('Ingresa tu nombre por favor')
	} else {
		nombre.style.backgroundColor= '#5FBFA2';
		nombre.setCustomValidity('')
	}
}

function validarCorreo() {
	if (mail.value=='') {
		mail.style.backgroundColor= '#FA898B';
		mail.setCustomValidity('Ingresa un correo valido por favor')

	} else {
		mail.style.backgroundColor= '#5FBFA2';
		mail.setCustomValidity('')
	}
}

window.addEventListener('load', validarDatos)
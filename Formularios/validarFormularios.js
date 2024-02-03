const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const datos = {
		correo: formulario.correo.value,
		pais: formulario.pais.value,
		donacion: formulario.donacion.value,
		fecha: formulario.fecha.value,
		terminos: formulario['terminos-y-condiciones'].checked,
	};

	// Comprobamos correo
	if (datos.correo.length <= 2) {
		alert('Correo invalido');
		return;
	}

	// Comprobamos el país
	if (datos.pais === '') {
		alert('País invalido');
		return;
	}

	if (datos.donacion === '') {
		alert('Selecciona una cantidad a donar');
		return;
	}

	if (datos.fecha === '') {
		alert('Selecciona una fecha');
		return;
	}

	if (!datos.terminos) {
		alert('Acepta los terminos y condiciones');
		return;
	}

	alert(datos);
	alert('Enviando datos...');
});
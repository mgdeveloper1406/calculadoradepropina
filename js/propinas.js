function calcular() {
		let total = document.getElementById('prop').value
		let servicio = document.getElementById('servicio')
		servicio = servicio.options[servicio.selectedIndex].id;
		console.log(servicio)
		if(servicio === '0'){
			servicio = document.getElementById('personalizado').value 
			console.log(document.getElementById('personalizado').value )	
		}
		console.log(servicio)
		let personas = document.getElementById('personas').value;

		if (total === '' || servicio === '' || personas === ''){
			//alert('Completá todos los campos')
		
		if(total === '' ){
			document.getElementById('prop').className = "vacio"
		} 
		if (servicio === ''){
			document.getElementById('servicio').className = "vacio"
		}
		if(personas === ''){
			document.getElementById('personas').className = "vacio"
		}

		} else {

			let propina = Number(total) * Number(servicio) / 100
			document.getElementById('resultado').innerHTML = 'Propina: $' + (propina/personas).toFixed(2) + ' cada uno';

		}
	}

function limpiar() {
	document.getElementById('prop').value = ''
	document.getElementById('0').selected = true
	document.getElementById('resultado').innerHTML	= ''
	document.getElementById('personalizado').value = ''
	document.getElementById('personas').value = ''
	document.getElementById('personalizado').hidden	= true

	document.getElementById('prop').className = ''
	document.getElementById('servicio').className = ''
	document.getElementById('personas').className = ''

}

function otros(opcion) {
	//console.log(opcion)
	if (opcion == 'Otro'){
		document.getElementById('personalizado').hidden = false
	} else {
		document.getElementById('personalizado').hidden = true
	}

}


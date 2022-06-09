function Aleatorio(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function full(){
	num = parseInt(document.querySelector('#num').value);

	if(isNaN(num)){
		return alert('Um dos valores não são números.');
	}

	num = Aleatorio(num, num);

	resultado.innerHTML = num;
}


